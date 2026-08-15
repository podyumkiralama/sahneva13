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
 * Dile göre hazır "81 il" ifadesi. Yalnızca sayı + birim içerir; cümleye
 * gömerken çekim ekini metnin kendisinde tamamla ("81 ilde hizmet" gibi).
 */
export const PROVINCES_TEXT = {
  tr: `${PROVINCES_COUNT} il`,
  en: `${PROVINCES_COUNT} cities`,
  de: `${PROVINCES_COUNT} Provinzen`,
  ru: `${PROVINCES_COUNT} провинций`,
  zh: `${PROVINCES_COUNT} 个省份`,
  ar: `${PROVINCES_COUNT} محافظة`,
};
