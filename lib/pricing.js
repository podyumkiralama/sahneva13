/**
 * Kiralama fiyatlandirmasinda ortak kurallar.
 *
 * Tek kaynak olmasinin sebebi: cok gunlu indirim daha once hicbir yerde yoktu ve
 * LED hesaplayicisi gun sayisini duz carpiyordu (35.000 TL'lik PROJE alt siniri
 * 3 gunde 105.000 TL'ye cikiyordu). Kural iki araca birden uygulanmali, yoksa
 * ayni ekran icin iki farkli rakam gosterilir.
 */

/**
 * Birim fiyatlar — TEK KAYNAK.
 *
 * Bu rakamlar daha once alti ayri dosyada elle tekrarlaniyordu; cadirin m²
 * fiyati tek basina sekiz yerde yaziliydi (SSS metinleri, hesaplayici, sema,
 * hizmet sayfasi). Bir zam geldiginde hepsini bulmak yerine burasi guncellenir.
 *
 * Son guncelleme: 31 Temmuz 2026 (isletme bildirimi).
 */
export const UNIT_PRICES = {
  /** Buyuk olcekli cadirlarda m² bedeli. Pagoda cadirlar sabit paket fiyatlidir. */
  tentSqm: 450,
  /** Etkinlik sandalyesi, gunluk. */
  chairDaily: 250,
  /** Masa, gunluk. */
  tableDaily: 1000,
};

/**
 * Sabit olculu (pagoda) cadir paket fiyatlari — GUNLUK, nakliye HARIC.
 *
 * Buyuk aciklikli cadirlar m² bazli fiyatlanir (`UNIT_PRICES.tentSqm`); bu tablo
 * yalnizca sabit olculu cadirlar icindir. Ikisi ayri fiyat modeli, karistirilmamali.
 *
 * Son guncelleme: 17 Agustos 2026 (isletme fiyat listesi).
 */
export const TENT_PACKAGE_PRICES = {
  "3x3": 9000,
  "4x4": 11000,
  "5x5": 15000,
  "6x6": 19000,
};

/** Binlik ayraci — tr-TR bicimi, ICU'ya bagimli olmadan. */
export const formatTRY = (value) =>
  String(Math.round(Number(value) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/**
 * Cadir fiyat cumlesi — TEK KAYNAK.
 *
 * Ayni cumle daha once uc dosyada elle yaziliydi: cadir hizmet sayfasi, /sss ve
 * lib/faq. Bir zamda birinin atlanmasi sitede ayni cadir icin iki farkli fiyat
 * gostermek demekti; artik ucu de burayi cagiriyor.
 */
export function buildTentPriceSentence(year = 2026) {
  const list = ["6x6", "5x5", "4x4", "3x3"]
    .map(
      (size) =>
        `${size.replace("x", "×")} çadır ${formatTRY(TENT_PACKAGE_PRICES[size])} TL + nakliye`
    )
    .join(", ");

  return `${year} fiyatlarımız: ${list}. 10'luk, 20'lik, 30'luk ve 40'lık büyük ölçekli çadırlarda metrekare fiyatı ${formatTRY(UNIT_PRICES.tentSqm)} TL'dir.`;
}

/**
 * Podyum birim fiyatlari — HAFTALIK.
 *
 * Cadir/mobilya gunluk, podyum ise haftalik fiyatlanir; ikisi ayri tabloda
 * tutuluyor ki birim yanlislikla karismasin.
 *
 * Skort METRE bazlidir (m² degil): etek podyumun cevresini sardigi icin hesap
 * `cevre uzunlugu × birim fiyat` seklinde yapilir.
 *
 * Son guncelleme: 18 Agustos 2026 — platform m²/hafta 275 -> 300
 * (isletme bildirimi). TR/EN/DE sema fiyatlari da buradan okur; hicbir
 * sayfada elle rakam yazilmaz.
 */
export const PODIUM_UNIT_PRICES = {
  /** Platform, m² / hafta */
  platformSqmWeek: 300,
  /** Hali kaplama, m² / hafta */
  carpetSqmWeek: 150,
  /** Skört (etek), METRE / hafta — çevre uzunluğu üzerinden */
  skirtMetreWeek: 100,
  /** İstanbul içi temel nakliye (kurulum + söküm dahil) */
  istanbulTransport: 9000,
  currency: "TRY",
};

/**
 * Ilk gunden sonraki her gun icin uygulanan indirim.
 * Kaynak: isletme karari (31 Temmuz 2026) — "her artı gün için yüzde 25 indirim".
 */
export const ADDITIONAL_DAY_DISCOUNT = 0.25;

/** Ek gunlerin gunluk bedele orani. */
const ADDITIONAL_DAY_FACTOR = 1 - ADDITIONAL_DAY_DISCOUNT;

/**
 * Cok gunlu kiralama toplami: ilk gun tam bedel, sonraki her gun %25 indirimli.
 *
 *   1 gun -> 35.000
 *   2 gun -> 35.000 + 26.250 = 61.250
 *   3 gun -> 35.000 + 26.250 + 26.250 = 87.500
 *
 * @param {number} dailyRate Tek gunluk bedel (alt sinir uygulanmis olmali)
 * @param {number} days      Gun sayisi (>= 1)
 */
export function multiDayTotal(dailyRate, days) {
  const rate = Number(dailyRate) || 0;
  const dayCount = Math.max(Math.round(Number(days) || 1), 1);

  return rate * (1 + ADDITIONAL_DAY_FACTOR * (dayCount - 1));
}

/** Cok gunlu indirimin toplamda kac TL tuttugu — arayuzde gostermek icin. */
export function multiDaySaving(dailyRate, days) {
  const rate = Number(dailyRate) || 0;
  const dayCount = Math.max(Math.round(Number(days) || 1), 1);

  return rate * dayCount - multiDayTotal(rate, dayCount);
}
