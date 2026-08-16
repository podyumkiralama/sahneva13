export const PROJECT_LASTMOD_FALLBACK = "2026-01-01T00:00:00+03:00";

// SEO tarih registry kuralı:
// - Sadece içerik/SEO anlamlı değişiklikte tarih güncelleyin.
// - Deploy/refactor/format gibi içerik etkisi olmayan değişikliklerde tarihi BUGÜNE çekmeyin.
const LAST_MODIFIED_BY_FILE = {
  "app/(tr)/yaptiklarimiz/page.js": "2026-06-23",
  "app/(tr)/blog/podyum-kiralama-nasil-secilir/page.jsx": "2026-06-22",
  "app/(tr)/led-ekran-kiralama-fiyatlari/page.js": "2026-06-22",

  // 14 Ağustos 2026 — kurumsal hizmet ile bilgi rehberinin arama niyeti ayrıştırıldı.
  "app/(tr)/kurumsal-organizasyon/page.js": "2026-08-14",
  "app/(tr)/blog/kurumsal-organizasyon-nedir-nasil-planlanir/page.jsx": "2026-08-14",

  // 1 Ağustos 2026 — müşteri sorularıyla ilerleyen, hizmetler arası yönlendirme yapan keşif akışları.
  "app/(tr)/sozluk/page.js": "2026-08-01",

  // 3 Ağustos 2026 — İngilizce sözlük yayına alındı (TR sözlüğün EN karşılığı).
  "app/en/glossary/page.js": "2026-08-03",
  "app/(tr)/podyum-kiralama/page.jsx": "2026-08-07",
  "app/(tr)/led-ekran-kiralama/page.js": "2026-08-06",
  // 16 Ağustos 2026 — çadır sayfasına sistem/standart katmanı eklendi, dome
  // ayrı hizmet olarak /dome-cadir-kiralama'ya taşındı.
  "app/(tr)/cadir-kiralama/page.js": "2026-08-16",
  "app/(tr)/dome-cadir-kiralama/page.js": "2026-08-16",
  "app/(tr)/ses-isik-sistemleri/page.js": "2026-08-06",
  "app/(tr)/truss-kiralama/page.js": "2026-08-06",
  "app/(tr)/sahne-kiralama/page.js": "2026-08-06",
  "app/(tr)/masa-sandalye-kiralama/page.js": "2026-07-31",
  "app/(tr)/(site)/hizmetler/page.js": "2026-07-31",
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
  "app/en/page.js": "2026-08-15",
  "app/en/about/page.js": "2026-08-15",
  "app/en/our-work/page.js": "2026-08-15",
  "app/en/projects/page.js": "2026-08-15",
  "app/en/event-production-company-turkey/page.js": "2026-08-15",
  "app/(tr)/(site)/hakkimizda/page.js": "2026-08-15",
  "app/de/page.js": "2026-08-15",
  "app/ar/about/page.js": "2026-08-15",
};

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
