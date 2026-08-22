export const PROJECT_LASTMOD_FALLBACK = "2026-01-01T00:00:00+03:00";

// SEO tarih registry kuralı:
// - Sadece içerik/SEO anlamlı değişiklikte tarih güncelleyin.
// - Deploy/refactor/format gibi içerik etkisi olmayan değişikliklerde tarihi BUGÜNE çekmeyin.
const LAST_MODIFIED_BY_FILE = {
  "app/(tr)/yaptiklarimiz/page.js": "2026-06-23",
  "app/(tr)/blog/podyum-kiralama-nasil-secilir/page.jsx": "2026-06-22",
  "app/(tr)/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026/page.jsx": "2026-08-21",
  "app/(tr)/blog/etkinlikler-icin-led-ekran-secimi/page.jsx": "2026-08-22",
  "app/en/blog/technical-production-pricing-guide-2026/page.jsx": "2026-08-21",
  "app/en/blog/led-pixel-pitch-viewing-distance-guide/page.jsx": "2026-08-22",
  "app/en/blog/event-seating-layout-guide/page.jsx": "2026-08-22",
  "app/en/blog/corporate-event-planning-guide-2026/page.jsx": "2026-08-22",
  "app/en/led-screen-rental-prices/page.js": "2026-08-22",
  "app/(tr)/led-ekran-kiralama-fiyatlari/page.js": "2026-08-22",

  // 23 Ağustos 2026 — kurumsal organizasyon ticari varyasyonları genişletildi.
  "app/(tr)/kurumsal-organizasyon/page.js": "2026-08-23",

  // 14 Ağustos 2026 — kurumsal hizmet ile bilgi rehberinin arama niyeti ayrıştırıldı.
  "app/(tr)/blog/kurumsal-organizasyon-nedir-nasil-planlanir/page.jsx": "2026-08-14",
  "app/(tr)/blog/kurumsal-etkinlik-planlama-rehberi-2026/page.jsx": "2026-08-23",

  // 1 Ağustos 2026 — müşteri sorularıyla ilerleyen, hizmetler arası yönlendirme yapan keşif akışları.
  "app/(tr)/sozluk/page.js": "2026-08-01",

  // 3 Ağustos 2026 — İngilizce sözlük yayına alındı (TR sözlüğün EN karşılığı).
  "app/en/glossary/page.js": "2026-08-03",
  "app/(tr)/podyum-kiralama/page.jsx": "2026-08-20",
  "app/(tr)/led-ekran-kiralama/page.js": "2026-08-22",
  // 16 Ağustos 2026 — çadır sayfasına sistem/standart katmanı eklendi, dome
  // ayrı hizmet olarak /dome-cadir-kiralama'ya taşındı.
  // 17 Ağustos 2026 — çadır zammı: 3x3/4x4/5x5 güncellendi, 6x6 eklendi.
  // 23 Ağustos 2026 — video şeması ve sosyal paylaşım görseli metadata düzeltmesi.
  "app/(tr)/cadir-kiralama/page.js": "2026-08-23",
  "app/(tr)/dome-cadir-kiralama/page.js": "2026-08-16",
  "app/(tr)/ses-isik-sistemleri/page.js": "2026-08-20",
  // 17 Ağustos 2026 — GSC'de "kurumsal etkinlik personel temini" sorgusu 158
  // gösterim / 0 tık ile karşılıksızdı; hizmet sayfası açıldı.
  "app/(tr)/etkinlik-personel-temini/page.jsx": "2026-08-17",
  "app/(tr)/truss-kiralama/page.js": "2026-08-20",
  "app/(tr)/sahne-kiralama/page.js": "2026-08-20",
  "app/(tr)/masa-sandalye-kiralama/page.js": "2026-08-20",
  // 18 Agustos 2026 — podyum zammi: platform m²/hafta 275 -> 300. Fiyat
  // artik lib/pricing.js'ten okunuyor; TR/EN/DE semalarinda elle rakam yok.
  "app/(tr)/(site)/hizmetler/page.js": "2026-08-18",
  "app/(tr)/podyum-kurulum-fiyatlari/page.jsx": "2026-08-20",
  "app/(tr)/etkinlik-planlayici/page.js": "2026-08-18",
  "app/(tr)/led-ekran-hesaplama/page.js": "2026-08-05",
  "app/(tr)/cadir-hesaplama/page.jsx": "2026-07-31",
  "app/(tr)/blog/12-eglenceli-kurumsal-etkinlik-fikri/page.jsx": "2026-03-01",
  "app/(tr)/blog/etkinlige-gore-podyum-tercihi/page.jsx": "2026-02-05",
  "app/(tr)/blog/fisekhane-pubg-guinness-rekoru/page.jsx": "2026-02-08",
  "app/(tr)/blog/kurumsal-etkinlik-yonetimi/page.jsx": "2026-02-08",
  "app/(tr)/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping/page.jsx": "2026-02-05",
  "app/(tr)/blog/led-ekran-teknoloji-trendleri-2026/page.jsx": "2026-02-09",
  "app/(tr)/blog/mezuniyet-organizasyonlari-2026-istanbul-rehberi/page.jsx": "2026-02-10",
  "app/(tr)/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi/page.jsx": "2026-02-05",
  "app/(tr)/blog/neden-podyum-sahne-tercih-edilir/page.jsx": "2026-02-25",
  "app/(tr)/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026/page.jsx": "2026-02-12",
  "app/(tr)/blog/pmgc-dunya-finali-sahne-arkasi/page.jsx": "2026-02-05",
  "app/(tr)/blog/sahne-kiralama-fiyatlari-neye-gore-belirlenir/page.jsx": "2026-02-08",
  "app/(tr)/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir/page.jsx": "2026-02-05",
  "app/(tr)/blog/ses-sistemlerinde-2026-yenilikleri-trendler/page.jsx": "2026-02-05",

  // 15 Ağustos 2026 — İngilizce konumlandırma revizyonu: hero yeniden yazıldı,
  // "Why international clients choose Sahneva" ve "Production capabilities"
  // bölümleri eklendi, kaynağı gösterilemeyen iddialar (%98 memnuniyet,
  // "#1 partner", %30 tasarruf) kaldırıldı ve sayı seti lib/stats.js'e bağlandı.
  "app/en/page.js": "2026-08-22",
  "app/en/about/page.js": "2026-08-15",
  "app/en/our-work/page.js": "2026-08-15",
  "app/en/projects/page.js": "2026-08-15",
  "app/en/event-production-company-turkey/page.js": "2026-08-22",
  "app/(tr)/(site)/hakkimizda/page.js": "2026-08-15",
  "app/de/page.js": "2026-08-18",
  "app/ar/about/page.js": "2026-08-15",
  // ---------------------------------------------------------------------
  // Sitemap'ten tasinan tarihler (18 Agustos 2026).
  // Onceden lib/sitemap/data.js icinde elle yaziliydi; bazi sayfalarda bu
  // liste guncel tarihi bilirken sitemap eski tarihi basiyordu (/sahne-kiralama,
  // /ses-isik-sistemleri, /truss-kiralama, /en/about, /en/projects, /ar/about).
  // Artik sitemap tarihi yalnizca buradan okur.
  // ---------------------------------------------------------------------
  // Turkce sayfalar
  "app/(tr)/(site)/iletisim/page.js": "2025-11-12",
  "app/(tr)/(site)/page.js": "2026-07-29",
  "app/(tr)/blog/page.jsx": "2026-01-28",
  "app/(tr)/bolgesel-kiralama/page.js": "2026-08-06",
  "app/(tr)/defile-podyum-kiralama/page.jsx": "2026-04-14",
  "app/(tr)/dijital-kursu-kiralama/page.js": "2026-06-26",
  "app/(tr)/gizlilik-politikasi/page.js": "2025-10-16",
  "app/(tr)/iptal-ve-iade-kosullari/page.js": "2026-07-29",
  "app/(tr)/konser-icin-podyum-kiralama/page.jsx": "2026-04-14",
  "app/(tr)/kvkk/page.js": "2025-10-14",
  "app/(tr)/mesafeli-satis-sozlesmesi/page.js": "2026-07-29",
  "app/(tr)/nasil-calisiyoruz/page.js": "2025-11-28",
  "app/(tr)/projeler/page.js": "2026-01-02",
  "app/(tr)/sss/page.js": "2025-12-02",
  "app/(tr)/teslimat-ve-ifa-kosullari/page.js": "2026-07-29",
  "app/(tr)/turkiyede-etkinlik-cozum-ortagi/page.jsx": "2026-06-17",

  // Ingilizce sayfalar
  "app/en/blog/page.jsx": "2026-08-22",
  "app/en/concert-podium-rental/page.js": "2026-03-01",
  "app/en/contact/page.js": "2025-11-12",
  "app/en/corporate-events/page.js": "2026-08-21",
  "app/en/data-protection/page.js": "2025-10-14",
  "app/en/event-production-antalya/page.js": "2026-06-17",
  "app/en/event-production-istanbul/page.js": "2026-08-21",
  "app/en/av-rental-istanbul/page.js": "2026-08-21",
  "app/en/conference-av-rental-istanbul/page.js": "2026-08-21",
  "app/en/faq/page.js": "2025-11-30",
  "app/en/how-we-work/page.js": "2025-11-28",
  "app/en/led-screen-rental/page.js": "2026-08-22",
  "app/en/mice-turkey/page.js": "2026-08-22",
  "app/en/podium-rental-prices/page.js": "2026-08-18",
  "app/en/podium-rental/page.js": "2026-08-21",
  "app/en/privacy-policy/page.js": "2025-10-16",
  "app/en/regional-rental/page.js": "2025-12-08",
  "app/en/runway-podium-rental/page.js": "2026-03-02",
  "app/en/services/page.js": "2026-08-21",
  "app/en/sound-light-rental/page.js": "2026-08-21",
  "app/en/stage-rental/page.js": "2026-08-21",
  "app/en/table-chair-rental/page.js": "2026-08-22",
  "app/en/tent-rental/page.js": "2026-08-21",
  "app/en/truss-rental/page.js": "2026-08-21",

  // Almanca sayfalar
  "app/de/arbeitsweise/page.js": "2026-08-05",
  "app/de/buehne-mieten/page.js": "2026-08-04",
  "app/de/datenschutz/page.js": "2026-08-04",
  "app/de/eventproduktion-antalya/page.js": "2026-08-05",
  "app/de/eventproduktion-tuerkei/page.js": "2026-08-05",
  "app/de/faq/page.js": "2026-08-05",
  "app/de/firmenevents/page.js": "2026-08-04",
  "app/de/impressum/page.js": "2026-08-05",
  "app/de/kontakt/page.js": "2026-08-04",
  "app/de/konzertbuehne-mieten/page.js": "2026-08-05",
  "app/de/laufsteg-mieten/page.js": "2026-08-05",
  "app/de/led-wand-mieten/page.js": "2026-08-04",
  "app/de/leistungen/page.js": "2026-08-04",
  "app/de/mice-tuerkei/page.js": "2026-08-05",
  "app/de/podium-preise/page.js": "2026-08-18",
  "app/de/projekte/page.js": "2026-08-04",
  "app/de/referenzen/page.js": "2026-08-04",
  "app/de/regionale-vermietung/page.js": "2026-08-05",
  "app/de/tische-und-stuehle-mieten/page.js": "2026-08-05",
  "app/de/ton-und-lichttechnik/page.js": "2026-08-04",
  "app/de/traversen-mieten/page.js": "2026-08-05",
  "app/de/ueber-uns/page.js": "2026-08-04",
  "app/de/zelt-mieten/page.js": "2026-08-04",

  // Arapca sayfalar
  "app/ar/contact/page.js": "2025-11-12",
  "app/ar/event-production-company-turkey/page.js": "2026-06-17",
  "app/ar/our-work/page.js": "2026-06-09",
  "app/ar/page.js": "2025-12-18",
  "app/ar/projects/page.js": "2025-12-12",
  "app/ar/services/page.js": "2025-12-16",

  // Rusca sayfalar
  "app/ru/about/page.js": "2026-06-03",
  "app/ru/contact/page.js": "2026-06-03",
  "app/ru/corporate-events/page.js": "2026-06-03",
  "app/ru/event-production-company-turkey/page.js": "2026-06-17",
  "app/ru/led-screen-rental/page.js": "2026-06-03",
  "app/ru/our-work/page.js": "2026-06-09",
  "app/ru/page.js": "2026-06-03",
  "app/ru/projects/page.js": "2026-06-03",
  "app/ru/services/page.js": "2026-06-03",
  "app/ru/sound-light-rental/page.js": "2026-06-03",
  "app/ru/stage-rental/page.js": "2026-06-03",
  "app/ru/tent-rental/page.js": "2026-06-03",

  // Cince sayfalar
  "app/zh/about/page.js": "2026-07-27",
  "app/zh/contact/page.js": "2026-07-27",
  "app/zh/corporate-events/page.js": "2026-07-27",
  "app/zh/led-screen-rental/page.js": "2026-07-27",
  "app/zh/our-work/page.js": "2026-07-27",
  "app/zh/page.js": "2026-07-27",
  "app/zh/projects/page.js": "2026-07-27",
  "app/zh/services/page.js": "2026-07-27",
  "app/zh/sound-light-rental/page.js": "2026-07-27",
  "app/zh/stage-rental/page.js": "2026-07-27",
  "app/zh/tent-rental/page.js": "2026-07-27",
};

/**
 * Dinamik route'lar: TEK dosya birden cok URL'e hizmet ediyor, bu yuzden tarih
 * dosya basina degil URL basina tutulur. Sozluk terimleri ayni
 * `[slug]/page.js` dosyasindan uretiliyor ama her terimin kendi tarihi var;
 * dosya anahtariyla tutulsa yedisi de tek tarihe cokerdi.
 */
const LAST_MODIFIED_BY_ROUTE = {
  "/sozluk/line-array": "2026-08-02",
  "/sozluk/moduler-podyum": "2026-08-04",
  "/sozluk/riser": "2026-08-04",
  "/sozluk/etek-perde": "2026-08-04",
  "/sozluk/podyum-halisi": "2026-08-04",
  "/sozluk/korkuluk-merdiven": "2026-08-04",
  "/sozluk/cadir-zemini": "2026-08-04",
};

/**
 * Sitemap lastmod cozucusu — TEK GIRIS NOKTASI.
 *
 * Once URL bazli kayda, sonra dosya bazli kayda bakar. Ikisi de yoksa HATA
 * firlatir: sitemap'e tarih elle yazilmasin diye. Sessizce yanlis/eski bir
 * tarih yayinlamaktansa build'in kirilmasi tercih edilir.
 */
export function getSitemapLastModified(route, filePath) {
  const value = LAST_MODIFIED_BY_ROUTE[route] ?? LAST_MODIFIED_BY_FILE[filePath];

  if (!value) {
    throw new Error(
      `sitemap lastmod eksik: "${route}" (${filePath}). Tarihi lib/seoLastModified.js icine ekleyin; data.js'e elle yazmayin.`
    );
  }

  return `${value}T00:00:00+03:00`;
}

export function getLastModifiedForFile(filePath, fallbackDate) {
  return LAST_MODIFIED_BY_FILE[filePath] || fallbackDate;
}

export function getLastModifiedDateTimeForFile(filePath, fallbackDateTime) {
  const value = getLastModifiedForFile(filePath, fallbackDateTime);
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return `${value}T00:00:00+03:00`;
  }
  return value;
}
