/**
 * Site ici aramanin ortak cekirdegi.
 *
 * Daha once eslestirme mantigi iki yerde ayri ayri yaziliydi (/search sayfasi ve
 * navbar acilir listesi) ve ikisi de duz `toLowerCase()` kullaniyordu. Turkce'de
 * bu bozuk: "IŞIK" -> "ışık" degil "isik" olur, kullanici "ruzgar" yazinca
 * "rüzgâr" bulunmaz. Ayrica siralama yoktu; sonuclar indeks sirasinda geliyordu,
 * yani etiketi birebir eslesen kayit listenin altinda kalabiliyordu.
 *
 * Bu dosya tek kaynak: katlama (folding), tokenizasyon, skorlama ve vurgulama.
 */

/**
 * UZUNLUK KORUYAN katlama.
 *
 * Vurgulama icin eslesme indeksini orijinal metne geri tasiyabilmek gerekiyor;
 * bu yuzden burada bosluk sadelestirmesi/trim YAPILMAZ. Her donusum tek
 * karakteri tek karaktere cevirir.
 */
export function foldText(value = "") {
  const lowered = String(value).toLocaleLowerCase("tr");
  return lowered
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[âàá]/g, "a")
    .replace(/[îìí]/g, "i")
    .replace(/[ûùú]/g, "u")
    .replace(/[êèé]/g, "e")
    .replace(/[ôòó]/g, "o");
}

/** Sorguyu anlamli parcalara boler; tek harflik parcalar gurultu uretir, elenir. */
export function tokenizeQuery(query = "") {
  return foldText(query)
    .split(/[\s,.;:/|+]+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1);
}

/* -------------------- skorlama -------------------- */

// Tip agirligi yalnizca beraberlik bozucudur: "led ekran" arayan hizmet
// sayfasini, "pixel pitch" arayan terimi ister; asil ayrimi eslesme kalitesi
// yapar, tip sadece esitligi cozer.
const TYPE_WEIGHT = {
  hizmet: 6,
  arac: 5,
  sayfa: 4,
  terim: 3,
  rehber: 2,
  proje: 1,
};

const scoreField = (foldedField, token, weights) => {
  if (!foldedField) return 0;
  if (foldedField === token) return weights.exact;
  if (foldedField.startsWith(token)) return weights.prefix;
  // Kelime basi eslesmesi, kelime ortasindaki rastlantidan daha degerli.
  if (new RegExp(`\\b${escapeRegExp(token)}`).test(foldedField)) return weights.wordStart;
  if (foldedField.includes(token)) return weights.contains;
  return 0;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Bir indeks kaydini sorguya gore puanlar. 0 dondurmesi "eslesmedi" demektir.
 *
 * Cok kelimeli sorgularda TUM parcalarin bir yerde eslesmesi beklenir (AND);
 * "led ekran fiyat" yazan kullanici, yalnizca "led" gecen her sayfayi gormek
 * istemez.
 */
// Alan agirliklari. KRITIK: anahtar kelimenin EN IYI puani (65), etiketteki
// kelime-basi eslesmesinin (70) altinda kalmali. Aksi halde tek kelimelik bir
// anahtar kelime, sayfanin kendi basligini geciyor: "led ekran" aramasinda
// anahtar kelimesi "ekran" olan /led-ekran-kiralama-fiyatlari, basligi
// "LED Ekran Kiralama" olan ana hizmet sayfasinin onune gecmisti.
const LABEL_WEIGHTS = { exact: 120, prefix: 90, wordStart: 70, contains: 45 };
const KEYWORD_WEIGHTS = { exact: 65, prefix: 50, wordStart: 42, contains: 28 };
const DESCRIPTION_WEIGHTS = { exact: 25, prefix: 22, wordStart: 20, contains: 12 };
const HREF_WEIGHTS = { exact: 20, prefix: 16, wordStart: 14, contains: 8 };

/** Etiketin tamami sorguyla birebir ayniysa hicbir sey onune gecmemeli. */
const FULL_LABEL_BONUS = 200;

export function scoreEntry(entry, tokens, foldedQuery = "") {
  if (tokens.length === 0) return 0;

  const label = foldText(entry.label ?? "");
  const description = foldText(entry.description ?? "");
  const keywords = (entry.keywords ?? []).map((keyword) => foldText(keyword));
  const href = foldText(entry.href ?? "");

  let total = 0;

  for (const token of tokens) {
    let best = scoreField(label, token, LABEL_WEIGHTS);

    for (const keyword of keywords) {
      if (best >= KEYWORD_WEIGHTS.exact) break;
      best = Math.max(best, scoreField(keyword, token, KEYWORD_WEIGHTS));
    }

    best = Math.max(best, scoreField(description, token, DESCRIPTION_WEIGHTS));

    // URL eslesmesi zayif ama gercek bir sinyal: /led-ekran-kiralama gibi.
    best = Math.max(best, scoreField(href, token, HREF_WEIGHTS));

    // Tek parca bile eslesmiyorsa kayit tamamen elenir.
    if (best === 0) return 0;
    total += best;
  }

  if (foldedQuery && label === foldedQuery) total += FULL_LABEL_BONUS;

  return total + (TYPE_WEIGHT[entry.type] ?? 0);
}

/**
 * Kayitlari puanlayip siralar. Sorgu bossa indeks sirasini korur, yalnizca
 * limit uygular; "bos arama" bir sonuc listesi degil, bir gezinme listesidir.
 */
export function searchEntries(entries, query, { limit } = {}) {
  const tokens = tokenizeQuery(query);

  if (tokens.length === 0) {
    return typeof limit === "number" ? entries.slice(0, limit) : entries;
  }

  const foldedQuery = foldText(query).replace(/\s+/g, " ").trim();

  const scored = [];
  for (const entry of entries) {
    const score = scoreEntry(entry, tokens, foldedQuery);
    if (score > 0) scored.push({ entry, score });
  }

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    // Esit puanda kisa etiket daha spesifiktir.
    return (a.entry.label?.length ?? 0) - (b.entry.label?.length ?? 0);
  });

  const results = scored.map(({ entry }) => entry);
  return typeof limit === "number" ? results.slice(0, limit) : results;
}

/* -------------------- vurgulama -------------------- */

/**
 * Metni, eslesen parcalari isaretlenmis segmentlere boler:
 *   [{ text: "LED ", match: false }, { text: "ekran", match: true }]
 *
 * Indeks matematigi katlanmis metin uzerinde yapilir ve orijinal metinden
 * dilimlenir; bu yuzden foldText uzunluk korumak zorunda. Beklenmedik bir
 * locale davranisi uzunlugu degistirirse vurgulama sessizce devre disi kalir,
 * metin yine de dogru gosterilir.
 */
export function highlightSegments(text = "", query = "") {
  const original = String(text);
  const tokens = tokenizeQuery(query);
  if (tokens.length === 0) return [{ text: original, match: false }];

  const folded = foldText(original);
  if (folded.length !== original.length) return [{ text: original, match: false }];

  const ranges = [];
  for (const token of tokens) {
    let from = 0;
    for (;;) {
      const at = folded.indexOf(token, from);
      if (at === -1) break;
      ranges.push([at, at + token.length]);
      from = at + token.length;
    }
  }
  if (ranges.length === 0) return [{ text: original, match: false }];

  // Cakisan araliklari birlestir ("led" ve "ledekran" ust uste binebilir).
  ranges.sort((a, b) => a[0] - b[0]);
  const merged = [ranges[0]];
  for (const [start, end] of ranges.slice(1)) {
    const last = merged[merged.length - 1];
    if (start <= last[1]) last[1] = Math.max(last[1], end);
    else merged.push([start, end]);
  }

  const segments = [];
  let cursor = 0;
  for (const [start, end] of merged) {
    if (start > cursor) segments.push({ text: original.slice(cursor, start), match: false });
    segments.push({ text: original.slice(start, end), match: true });
    cursor = end;
  }
  if (cursor < original.length) {
    segments.push({ text: original.slice(cursor), match: false });
  }

  return segments;
}

/* -------------------- tipler -------------------- */

export const SEARCH_TYPES = {
  hizmet: { label: "Hizmet", plural: "Hizmetler" },
  arac: { label: "Araç", plural: "Hesaplama araçları" },
  terim: { label: "Terim", plural: "Sözlük terimleri" },
  rehber: { label: "Rehber", plural: "Rehberler ve blog" },
  proje: { label: "Proje", plural: "Projeler" },
  sayfa: { label: "Sayfa", plural: "Diğer sayfalar" },
};

/** Gruplarin sunum sirasi: ticari niyet once. */
export const SEARCH_TYPE_ORDER = ["hizmet", "arac", "terim", "rehber", "proje", "sayfa"];

export function groupByType(entries) {
  const groups = new Map();
  for (const entry of entries) {
    const type = SEARCH_TYPES[entry.type] ? entry.type : "sayfa";
    if (!groups.has(type)) groups.set(type, []);
    groups.get(type).push(entry);
  }

  return SEARCH_TYPE_ORDER.filter((type) => groups.has(type)).map((type) => ({
    type,
    ...SEARCH_TYPES[type],
    entries: groups.get(type),
  }));
}
