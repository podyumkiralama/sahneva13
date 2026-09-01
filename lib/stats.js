// lib/stats.js
// Kurumsal sayı setinin TEK KAYNAĞI.
//
// Bu rakamlar altı dilde ~50 dosyaya elle yazılıydı ve birbirinden ayrışmıştı:
// aynı sayfa hem "700+" hem "300+ proje" gösteriyor, /en/stage-rental "8+ yıl"
// derken /en/about "14 yıl" diyordu. Bir sayfada rakam değişince diğerleri
// geride kaldığı için sayıyı metne gömmek yerine buradan çekiyoruz.
//
// Yeni bir rakam eklemeden önce: kaynağı gösterilebiliyor mu? Gösterilemiyorsa
// siteye yazılmaz (bkz. lib/clientReferences.js'teki aynı kural).

import { YEARS_OF_EXPERIENCE, FOUNDING_DATE } from "@/lib/experience";

export { YEARS_OF_EXPERIENCE, FOUNDING_DATE };

/** Kuruluş yılı. "since 2012" / "2012'den beri" ifadeleri buradan gelir. */
export const FOUNDING_YEAR = Number(FOUNDING_DATE.slice(0, 4));

/**
 * Tamamlanan toplam proje sayısı. Site genelindeki tek proje rakamı budur;
 * "300+ sahne kurulumu" gibi alt kırılım sayıları toplamı aştığı için
 * kullanımdan kaldırıldı.
 *
 * PROJECTS_COMPLETED_COUNT, "+" işaretinin cümleye oturmadığı dillerde
 * kullanılır (Almanca "über 700 Projekte" gibi).
 */
export const PROJECTS_COMPLETED_COUNT = 700;
export const PROJECTS_COMPLETED = `${PROJECTS_COMPLETED_COUNT}+`;

/** Türkiye'deki il sayısı — kapsama alanı ifadelerinde kullanılır. */
export const PROVINCES_COUNT = 81;

/** Kurumsal etkinlik kırılımı. Toplam proje sayısının alt kümesidir. */
export const CORPORATE_EVENTS = "250+";

/** Saha ve teknik kadro büyüklüğü. */
export const TECHNICAL_TEAM_SIZE = "15+";

/**
 * Google Business Profile puanı ve yorum sayısı. Doğrulanabilir olduğu için
 * "%98 memnuniyet" gibi kaynaksız iddiaların yerine bu kullanılır.
 *
 * DİKKAT: Yorum sayısı zamanla artar; GBP'de değiştiğinde burası da
 * güncellenmeli. AggregateRating şemaları da bu değerleri okur, dolayısıyla
 * sayfa metni ile yapısal veri asla ayrışmaz.
 */
export const GOOGLE_RATING = "4.9";
export const GOOGLE_REVIEW_COUNT = 183;

/**
 * Sayfa METNİNDE gösterilen yorum sayısı: ona yuvarlanır ("180+").
 * Kesin rakam yazınca GBP'deki sayı arttıkça metin bayat görünüyor; yuvarlak
 * değer hem doğru kalır hem eskimez.
 *
 * DİKKAT: AggregateRating şemasında YUVARLAK DEĞİL, kesin GOOGLE_REVIEW_COUNT
 * kullanılır — Google yapısal veride gerçek sayıyı bekler.
 */
export const GOOGLE_REVIEW_COUNT_DISPLAY = Math.floor(GOOGLE_REVIEW_COUNT / 10) * 10;

/**
 * Kurulum süreleri — kapsam başına saat aralığı.
 *
 * Site genelinde üç ayrı rakam dolaşıyordu: SSS "1–3 saat", hizmet/hakkımızda
 * "2–6 saat", sahne kiralama "4–8 saat". Üçü de aynı işi (sahne kurulumu)
 * tarif ettiği için çelişiyordu. Sahne için gerçekçi olan 4–8; podyum, LED ve
 * çadır gerçekten daha hızlı kurulduğu için kendi aralıklarını korur.
 *
 * `overall`, kapsamı belirtilmeyen genel "hızlı kurulum" ifadeleri içindir:
 * en hızlı podyumdan en yavaş standart sahneye kadar gerçek aralığı verir.
 * Genel bir yerde "2–6 saat" yazmak sahneyi de o aralığa sokar, o yüzden 2–8.
 */
export const SETUP_HOURS = {
  podium: [2, 6],
  stage: [4, 8],
  ledWall: [2, 6],
  tent: [2, 6],
  overall: [2, 8],
};

const SETUP_HOUR_UNIT = {
  tr: "saat",
  en: "hours",
  de: "Stunden",
  ru: "ч",
  zh: "小时",
  ar: "ساعات",
};

/** Örn. setupDurationText("stage", "en") -> "4–8 hours" */
export function setupDurationText(scope, locale = "tr") {
  const [min, max] = SETUP_HOURS[scope] ?? SETUP_HOURS.overall;
  return `${min}–${max} ${SETUP_HOUR_UNIT[locale] ?? SETUP_HOUR_UNIT.en}`;
}

/**
 * Dile göre hazır "81 il" ifadesi. Yalnızca sayı + birim içerir; cümleye
 * gömerken çekim ekini metnin kendisinde tamamla ("81 ilde hizmet" gibi).
 */
export const PROVINCES_TEXT = {
  tr: `${PROVINCES_COUNT} il`,
  en: `${PROVINCES_COUNT} cities`,
  de: `${PROVINCES_COUNT} Provinzen`,
  ru: `${PROVINCES_COUNT} провинция`,
  zh: `${PROVINCES_COUNT} 个省份`,
  ar: `${PROVINCES_COUNT} محافظة`,
};
