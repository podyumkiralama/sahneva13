/**
 * Etkinlik planlayici hesap motoru.
 *
 * Mevcut iki hesaplayici tek hizmetlik (cadir m², LED m²). Gercek bir etkinlik
 * ise sahne + LED + ses-isik + cadir + mobilyayi birlikte gerektiriyor ve
 * ziyaretcilerin cogu "neye ihtiyacim var" sorusunun cevabini bilmiyor. Bu modul
 * etkinlik turu ve olceginden yola cikip ONERILEN KAPSAMI ve yaklasik butceyi
 * uretir.
 *
 * ── DURUSTLUK KURALLARI ──────────────────────────────────────────────────────
 * 1. Buradaki hicbir katsayi uydurulmadi. Alan katsayilari cadir hesaplayicisindan
 *    (app/(tr)/cadir-hesaplama), m² fiyatlari LED hesaplayicisindan ve paket
 *    fiyatlari lib/structuredData/serviceProducts.js'ten geliyor.
 * 2. Depoda fiyat verisi OLMAYAN kalemler (truss, nakliye, jenerator, salon disi
 *    lojistik) butce araligina KATILMAZ; kapsam listesinde "projeye gore" olarak
 *    gorunur ve haric tutulanlar ayrica listelenir.
 * 3. Kaynak fiyatlarin tamami "baslangic" bedeli. Bu yuzden toplam, araligin ALT
 *    sinirini olusturur; ust sinir RANGE_UPPER_FACTOR ile hesaplanir. Ciktinin
 *    teklif olmadigi arayuzde acikca yazilmali.
 */

import {
  ADDITIONAL_DAY_DISCOUNT,
  PODIUM_UNIT_PRICES,
  UNIT_PRICES,
  multiDayTotal,
} from "@/lib/pricing";

/* ── Kaynak katsayilar ────────────────────────────────────────────────────── */

/** Kaynak: app/(tr)/cadir-hesaplama/TentCalculatorClient.jsx → layoutRates */
export const LAYOUT_RATES = {
  theatre: { label: "Tiyatro düzeni", sqm: 0.8 },
  cocktail: { label: "Kokteyl / ayakta", sqm: 1.0 },
  dining: { label: "Yemekli masa düzeni", sqm: 1.6 },
  wedding: { label: "Düğün / davet düzeni", sqm: 1.8 },
};

/** Kaynak: aynı dosya → extras (fonksiyonel alan m² değerleri) */
const FUNCTION_AREAS = {
  stage: 40,
  led: 20,
  dance: 50,
  catering: 35,
  backstage: 30,
  foyer: 25,
};

/** Kaynak: aynı dosya → dolaşım payı çarpanı */
const CIRCULATION_FACTOR = 1.12;

/** Kaynak: LedCalculatorClient.jsx → screenTypes ve serviceProducts baseOffers */
const LED_SQM_PRICE = 1800;
const LED_MINIMUM = 35000;

/** Kaynak: lib/pricing.js → UNIT_PRICES (tek kaynak) */
const TENT_SQM_PRICE = UNIT_PRICES.tentSqm;

/** Kaynak: lib/pricing.js → UNIT_PRICES (tek kaynak) */
const CHAIR_DAILY_PRICE = UNIT_PRICES.chairDaily;
const TABLE_DAILY_PRICE = UNIT_PRICES.tableDaily;

/** Kaynak: serviceProducts.js → /sahne-kiralama products */
const STAGE_PACKAGES = [
  { maxGuests: 150, name: "Mini Sahne Paketi", area: 16, price: 19500 },
  { maxGuests: 500, name: "Standart Sahne Paketi", area: 24, price: 32500 },
  { maxGuests: Infinity, name: "Konser Sahnesi Paketi", area: 48, price: 65000 },
];

/** Kaynak: serviceProducts.js → /podyum-kiralama products */
const PODIUM_PACKAGES = [
  { maxGuests: 300, name: "Orta Podyum Paketi", area: 24, price: 18000 },
  { maxGuests: Infinity, name: "Pro Podyum Paketi", area: 48, price: 32000 },
];

/** Kaynak: serviceProducts.js → /ses-isik-sistemleri products */
const CONCERT_SOUND_PRICE = 36000;
const STAGE_LIGHT_PRICE = 54000;

/**
 * Baslangic fiyatlarindan olusan toplam, araligin alt siniridir. Ust sinir,
 * kapsam genislemesi ve saha kosullarini karsilamak icin bu carpanla bulunur.
 */
const RANGE_UPPER_FACTOR = 1.4;

/* ── LED ekran olcusu ─────────────────────────────────────────────────────── */

/**
 * Ekran olcusu kademeleri.
 *
 * DIKKAT — bu kademelenme bir yaklasiklamadir: ekran olcusunu belirleyen asil
 * degisken kisi sayisi DEGIL, son sirinin sahneye uzakligidir. IMAG icin yaygin
 * kural, ekran YUKSEKLIGININ izleme mesafesinin yaklasik 1/8 ile 1/12'si olmasi
 * yonundedir (40 m derinlikte ~3,5-5 m yukseklik). Kisi sayisi burada yalnizca
 * derinlik icin vekil degisken olarak kullaniliyor.
 *
 * Ilk surumde ust kademe 10×4 m'de sabitlenmisti; 3000 kisilik acik alanda son
 * sira 70 m'yi bulabildigi icin bu olcu belirgin sekilde kucuk kaliyordu.
 */
const LED_SIZES = [
  { maxGuests: 150, label: "4 × 3 m", area: 12 },
  { maxGuests: 400, label: "6 × 3 m", area: 18 },
  { maxGuests: 1000, label: "8 × 4 m", area: 32 },
  { maxGuests: 3000, label: "10 × 6 m", area: 60 },
  { maxGuests: Infinity, label: "12 × 7 m", area: 84 },
];

/* ── Etkinlik turleri ─────────────────────────────────────────────────────── */

/**
 * Her tur, hangi kalemlerin tipik oldugunu ve hangi oturma duzeninde
 * calisildigini tanimlar. `concertScale`, ses-isik paketlerinin fiyatlanabilir
 * oldugu olcegi isaretler (elimizde yalnizca konser olcegi paket fiyati var).
 */
export const EVENT_TYPES = [
  {
    key: "lansman",
    label: "Ürün lansmanı",
    layout: "theatre",
    needs: ["stage", "led", "soundLight"],
    concertScale: false,
    glossary: "urun-lansmani",
    note: "Lansmanda her şey tek bir “açılış anı” etrafında kurgulanır; sahne ve ekran geçişi prova gerektirir.",
  },
  {
    key: "bayi",
    label: "Bayi toplantısı",
    layout: "theatre",
    diningAlso: true,
    needs: ["stage", "led", "soundLight", "furniture"],
    concertScale: false,
    glossary: "bayi-toplantisi",
    note: "Gündüz konferans, akşam gala düzeni: iki farklı yerleşim ve aradaki geçiş süresi planın en kritik kalemi.",
  },
  {
    key: "gala",
    label: "Gala / ödül gecesi",
    layout: "dining",
    needs: ["stage", "led", "soundLight", "furniture"],
    concertScale: false,
    glossary: "gala-gecesi",
    note: "Yuvarlak masa düzeni görüş hattını zorlaştırır; sahne yüksekliği ve yan ekran önem kazanır.",
  },
  {
    key: "kongre",
    label: "Kongre / konferans",
    layout: "theatre",
    needs: ["stage", "led", "soundLight"],
    concertScale: false,
    glossary: "kongre-konferans",
    note: "Belirleyici başlık konuşulabilirlik; sunum akışının kesintisiz yönetilmesi gerekir.",
  },
  {
    key: "konser",
    label: "Konser / festival",
    layout: "cocktail",
    needs: ["stage", "led", "soundLight", "truss"],
    concertScale: true,
    glossary: "riser",
    note: "Açık alanda rüzgâr, zemin ve seyir mesafesi sahne ölçüsünü doğrudan belirler.",
  },
  {
    key: "dugun",
    label: "Düğün / davet",
    layout: "wedding",
    needs: ["stage", "soundLight", "furniture"],
    concertScale: false,
    glossary: "cadir-zemini",
    note: "Masa aralıkları, servis yolları ve dans alanı toplam metrajı belirgin şekilde büyütür.",
  },
  {
    key: "fuar",
    label: "Fuar / stand",
    layout: "cocktail",
    needs: ["led", "soundLight"],
    concertScale: false,
    glossary: "fuar-stand",
    note: "Fuar alanları kurulum ve söküm için katı saat pencereleri uygular; plan mekânın kurallarına göre şekillenir.",
  },
];

export const VENUE_OPTIONS = [
  {
    key: "salon",
    label: "Kapalı salon / otel",
    needsTent: false,
    note: "Mekân hazır; asma noktaları, tavan yüksekliği ve giriş saatleri keşifte netleşir.",
  },
  {
    key: "acikalan",
    label: "Açık alan (çadır gerekli)",
    needsTent: true,
    note: "Çadır, zemin, ankraj ve hava koşulu planı kapsama dahil olur.",
  },
  {
    key: "acikalan-cadirsiz",
    label: "Açık alan (çadır gerekmiyor)",
    needsTent: false,
    note: "Çadırsız açık alanda enerji, zemin ve rüzgâr yükü ayrıca değerlendirilir.",
  },
];

/**
 * Kullanicinin kapsama elle ekleyebilecegi kalemler. Etkinlik turunun tipik
 * ihtiyaclari disinda kalan her sey burada secilebilir olur; boylece arac sabit
 * bir tablo degil, uzerinde oynanabilen bir plan haline gelir.
 */
export const OPTIONAL_ITEMS = [
  { key: "led", label: "LED ekran", hint: "Sunum, video ve marka görünürlüğü için" },
  { key: "furniture", label: "Masa ve sandalye", hint: "Oturmalı düzen ve karşılama alanı için" },
  { key: "truss", label: "Truss ve taşıyıcı sistem", hint: "Ekran ve ışık asmak gerekiyorsa" },
  {
    key: "podium",
    label: "Sahne podyumu / platform",
    hint: "Defile, protokol veya kürsü alanı için yükseltilmiş platform",
  },
  {
    key: "floorDeck",
    label: "Zemin podyumu (çadır tabanı)",
    hint: "Çadırın tamamına döşenen taban; eğimli, çimli veya çamurlu zeminde gerekir",
    // Yalnizca kapsamda cadir varken anlamli: alani cadirin alanina esittir.
    requiresTent: true,
  },
  { key: "stage", label: "Sahne", hint: "Sunum ve performans alanı için" },
];

export const getEventType = (key) =>
  EVENT_TYPES.find((type) => type.key === key) ?? EVENT_TYPES[0];

export const getVenue = (key) =>
  VENUE_OPTIONS.find((venue) => venue.key === key) ?? VENUE_OPTIONS[0];

/* ── Hesap ────────────────────────────────────────────────────────────────── */

const pickByGuests = (table, guests) =>
  table.find((row) => guests <= row.maxGuests) ?? table[table.length - 1];

/** Yemekli düzende 10 kişilik masa varsayımı — kaynak: Davet Masa Sandalye Seti (10 masa / 100 sandalye). */
const GUESTS_PER_TABLE = 10;

/**
 * @param {object} input
 * @param {string} input.eventType
 * @param {number} input.guests
 * @param {string} input.venue
 * @param {number} input.days
 * @returns {{
 *   guests: number, days: number, type: object, venue: object,
 *   items: Array<{key,label,detail,price?,priced:boolean,href:string}>,
 *   excluded: string[], budget: {low:number, high:number}|null, tent: object|null
 * }}
 */
export function planEvent({ eventType, guests, venue, days, extras = [] }) {
  const type = getEventType(eventType);
  const venueOption = getVenue(venue);
  const guestCount = Math.max(Math.round(Number(guests) || 0), 1);
  const dayCount = Math.max(Math.round(Number(days) || 1), 1);

  // Turun tipik ihtiyaclari + kullanicinin elle ekledikleri.
  const selected = new Set([...type.needs, ...extras]);
  const isOptional = (key) => !type.needs.includes(key);

  const items = [];
  const excluded = [];

  /* Sahne */
  if (selected.has("stage")) {
    const pkg = pickByGuests(STAGE_PACKAGES, guestCount);
    items.push({
      key: "stage",
      label: "Sahne",
      detail: `${pkg.name} — yaklaşık ${pkg.area} m² sahne alanı`,
      price: pkg.price,
      priced: true,
      optional: isOptional("stage"),
      href: "/sahne-kiralama",
    });
  }

  /* LED ekran */
  if (selected.has("led")) {
    const size = pickByGuests(LED_SIZES, guestCount);
    // Gunluk bedel proje alt sinirinin altina inemez; cok gunlu toplamda ise ilk
    // gunden sonraki her gun %25 indirimli (bkz. lib/pricing.js).
    const dailyRate = Math.max(size.area * LED_SQM_PRICE, LED_MINIMUM);
    const price = multiDayTotal(dailyRate, dayCount);
    items.push({
      key: "led",
      label: "LED ekran",
      detail:
        dayCount > 1
          ? `${size.label} — ${dayCount} gün, ek günler %${Math.round(ADDITIONAL_DAY_DISCOUNT * 100)} indirimli`
          : `${size.label} — salon derinliğine göre netleşir`,
      price,
      priced: true,
      optional: isOptional("led"),
      href: "/led-ekran-kiralama",
    });
  }

  /* Ses ve isik */
  if (selected.has("soundLight")) {
    if (type.concertScale) {
      items.push({
        key: "soundLight",
        label: "Ses ve ışık sistemleri",
        detail: "Konser ses paketi + sahne ışık paketi",
        price: CONCERT_SOUND_PRICE + STAGE_LIGHT_PRICE,
        priced: true,
        href: "/ses-isik-sistemleri",
      });
    } else {
      // Elimizde yalnizca konser olcegi paket fiyati var; salon olceginde bir
      // rakam yazmak uydurma olurdu.
      items.push({
        key: "soundLight",
        label: "Ses ve ışık sistemleri",
        detail: "Salon akustiği, konuşmacı sayısı ve ışık kurgusuna göre planlanır",
        priced: false,
        href: "/ses-isik-sistemleri",
      });
      excluded.push("Ses ve ışık sistemleri");
    }
  }

  /* Cadir */
  let tent = null;
  if (venueOption.needsTent) {
    const layoutKey = type.diningAlso ? "dining" : type.layout;
    const personArea = guestCount * LAYOUT_RATES[layoutKey].sqm;

    const functionKeys = ["foyer", "catering"];
    if (selected.has("stage")) functionKeys.push("stage", "backstage");
    if (selected.has("led")) functionKeys.push("led");
    if (type.key === "dugun" || type.key === "gala") functionKeys.push("dance");

    const functionArea = [...new Set(functionKeys)].reduce(
      (total, key) => total + (FUNCTION_AREAS[key] ?? 0),
      0,
    );
    const totalArea = Math.ceil((personArea + functionArea) * CIRCULATION_FACTOR);

    tent = {
      layout: LAYOUT_RATES[layoutKey].label,
      personArea: Math.ceil(personArea),
      functionArea,
      totalArea,
    };

    items.push({
      key: "tent",
      label: "Çadır",
      detail: `Yaklaşık ${totalArea} m² (${LAYOUT_RATES[layoutKey].label.toLowerCase()}, teknik ve servis alanı dahil)`,
      price: totalArea * TENT_SQM_PRICE,
      priced: true,
      href: "/cadir-kiralama",
    });
  }

  /* Sahne podyumu / platform — kaynak: serviceProducts.js → /podyum-kiralama products */
  if (selected.has("podium")) {
    const pkg = pickByGuests(PODIUM_PACKAGES, guestCount);
    items.push({
      key: "podium",
      label: "Sahne podyumu / platform",
      detail: `${pkg.name} — yaklaşık ${pkg.area} m²`,
      price: pkg.price,
      priced: true,
      optional: isOptional("podium"),
      href: "/podyum-kiralama",
    });
  }

  /*
   * Zemin podyumu — sahne podyumundan AYRI bir kalem.
   *
   * Cadirli kurulumlarda taban, cadirin tamamina doseniyor; yani alani cadir
   * alanina esit. Onceki surumde bu kalem hic yoktu ve buyuk cadirlarda ciddi
   * bir maliyet kapsam disinda kaliyordu (1120 m²'lik bir cadirda tek basina
   * alti haneli bir rakam).
   *
   * Podyum haftalik fiyatlandigi icin gun sayisiyla carpilmaz.
   */
  if (selected.has("floorDeck") && tent) {
    items.push({
      key: "floorDeck",
      label: "Zemin podyumu (çadır tabanı)",
      detail: `Çadır alanının tamamı — ${tent.totalArea} m² (haftalık)`,
      price: tent.totalArea * PODIUM_UNIT_PRICES.platformSqmWeek,
      priced: true,
      optional: isOptional("floorDeck"),
      href: "/podyum-kiralama",
    });
  }

  /* Masa ve sandalye */
  if (selected.has("furniture")) {
    const tables = Math.ceil(guestCount / GUESTS_PER_TABLE);
    const price = (guestCount * CHAIR_DAILY_PRICE + tables * TABLE_DAILY_PRICE) * dayCount;
    items.push({
      key: "furniture",
      label: "Masa ve sandalye",
      detail: `${guestCount} sandalye + ${tables} masa — ${dayCount} gün`,
      price,
      priced: true,
      optional: isOptional("furniture"),
      href: "/masa-sandalye-kiralama",
    });
  }

  /* Truss */
  if (selected.has("truss")) {
    items.push({
      key: "truss",
      label: "Truss ve taşıyıcı sistem",
      detail: "Açıklık, yükseklik ve asılacak toplam yüke göre hesaplanır",
      priced: false,
      optional: isOptional("truss"),
      href: "/truss-kiralama",
    });
    excluded.push("Truss ve taşıyıcı sistem");
  }

  // Her projede olan ama burada fiyatlanamayan kalemler.
  excluded.push("Nakliye ve şehir dışı lojistik", "Jeneratör ve enerji altyapısı");

  const pricedTotal = items
    .filter((item) => item.priced)
    .reduce((total, item) => total + item.price, 0);

  const budget =
    pricedTotal > 0
      ? { low: pricedTotal, high: Math.round(pricedTotal * RANGE_UPPER_FACTOR) }
      : null;

  return {
    guests: guestCount,
    days: dayCount,
    type,
    venue: venueOption,
    items,
    excluded: [...new Set(excluded)],
    budget,
    tent,
  };
}

export const formatTRY = (value) => `${Math.round(value).toLocaleString("tr-TR")} TL`;

export const PLANNER_DEFAULTS = {
  eventType: "lansman",
  guests: 300,
  venue: "salon",
  days: 1,
  city: "",
  extras: [],
};

/**
 * Paylasilan plan baglantisindaki parametreleri guvenli baslangic durumuna cevirir.
 *
 * Sunucuda `searchParams` okumak sayfayi dinamik render'a zorluyordu; sitedeki
 * diger her sayfa statik/ISR oldugu icin bu tek sayfa her istekte sunucuya
 * gidiyordu. Bu yuzden parametreler istemcide, mount aninda okunuyor.
 */
export function parsePlannerParams(search) {
  const params = new URLSearchParams(search ?? "");
  const typeKey = params.get("tur") ?? "";
  const venueKey = params.get("mekan") ?? "";
  const guests = Number.parseInt(params.get("kisi") ?? "", 10);
  const days = Number.parseInt(params.get("gun") ?? "", 10);

  const extras = (params.get("ek") ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter((item) => OPTIONAL_ITEMS.some((option) => option.key === item));

  return {
    eventType: EVENT_TYPES.some((type) => type.key === typeKey)
      ? typeKey
      : PLANNER_DEFAULTS.eventType,
    venue: VENUE_OPTIONS.some((option) => option.key === venueKey)
      ? venueKey
      : PLANNER_DEFAULTS.venue,
    guests: Number.isFinite(guests) && guests > 0 ? Math.min(guests, 100000) : PLANNER_DEFAULTS.guests,
    days: Number.isFinite(days) && days > 0 ? Math.min(days, 30) : PLANNER_DEFAULTS.days,
    city: (params.get("sehir") ?? "").slice(0, 60),
    extras,
  };
}

/** Sonucu WhatsApp'a tasinabilir bir brief'e cevirir. */
export function buildBrief(plan, { city } = {}) {
  const lines = [
    "Merhaba, etkinlik planlayıcıdan teklif istiyorum.",
    `Etkinlik türü: ${plan.type.label}`,
    `Kişi sayısı: ${plan.guests}`,
    `Mekân: ${plan.venue.label}`,
    `Süre: ${plan.days} gün`,
  ];
  if (city) lines.push(`Şehir: ${city}`);

  lines.push("", "Önerilen kapsam:");
  for (const item of plan.items) {
    lines.push(`- ${item.label}: ${item.detail}`);
  }
  if (plan.budget) {
    lines.push(
      "",
      `Araçtan çıkan yaklaşık aralık: ${formatTRY(plan.budget.low)} – ${formatTRY(plan.budget.high)}`,
    );
  }

  return lines.join("\n");
}
