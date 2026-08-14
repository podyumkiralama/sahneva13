// lib/experience.js
// Deneyim yılı için TEK KAYNAK.
//
// Bu rakam daha önce ~20 dosyada elle yazılıydı ve zamanla birbirinden
// ayrışmıştı: /hakkimizda ve /en/about aynı sayfa içinde hem "10+" hem "12+"
// gösteriyordu, üç servis sayfasında "5+" kalmıştı, RU/ZH/DE istatistik
// kutuları "12+" derken Almanca ana sayfa "10+" diyordu.
//
// Değer, Google Business Profile'daki açılış tarihinden (27 Mart 2012)
// hesaplanır ve derleme anında sabitlenir; her dağıtımda kendini günceller,
// dolayısıyla yıldönümünde elle güncelleme gerekmez.
//
// Rakam artık kesin olduğu için metinlerde "+" kullanılmaz: "14 yıl", "14+" değil.

import { COMPANY } from "@/lib/legal/companyInfo";

export const FOUNDING_DATE = COMPANY.foundingDate;

/** İki tarih arasındaki tam yıl sayısı (yıldönümü geçmediyse bir eksik). */
export function fullYearsSince(isoDate, now = new Date()) {
  const start = new Date(`${isoDate}T00:00:00Z`);
  let years = now.getUTCFullYear() - start.getUTCFullYear();

  const beforeAnniversary =
    now.getUTCMonth() < start.getUTCMonth() ||
    (now.getUTCMonth() === start.getUTCMonth() &&
      now.getUTCDate() < start.getUTCDate());

  if (beforeAnniversary) years -= 1;
  return years;
}

export const YEARS_OF_EXPERIENCE = fullYearsSince(FOUNDING_DATE);

/**
 * Dile göre hazır ifade. Yalnızca sayı + birim içerir; cümleye gömerken
 * çekim ekini metnin kendisinde tamamla ("14 yıllık deneyim" gibi).
 */
export const EXPERIENCE_YEARS_TEXT = {
  tr: `${YEARS_OF_EXPERIENCE} yıl`,
  en: `${YEARS_OF_EXPERIENCE} years`,
  de: `${YEARS_OF_EXPERIENCE} Jahre`,
  ru: `${YEARS_OF_EXPERIENCE} лет`,
  zh: `${YEARS_OF_EXPERIENCE} 年`,
  ar: `${YEARS_OF_EXPERIENCE} عامًا`,
};
