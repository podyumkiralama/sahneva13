export const PROJECT_LASTMOD_FALLBACK = "2026-01-01T00:00:00+03:00";

// SEO tarih registry kuralı:
// - Sadece içerik/SEO anlamlı değişiklikte tarih güncelleyin.
// - Deploy/refactor/format gibi içerik etkisi olmayan değişikliklerde tarihi BUGÜNE çekmeyin.
const LAST_MODIFIED_BY_FILE = {
  "app/(tr)/(site)/hakkimizda/page.js": "2026-06-01",
  "app/(tr)/yaptiklarimiz/page.js": "2026-06-23",
  "app/(tr)/blog/podyum-kiralama-nasil-secilir/page.jsx": "2026-06-22",
  "app/(tr)/led-ekran-kiralama-fiyatlari/page.js": "2026-06-22",

  // 31 Temmuz 2026 — içerik/SEO anlamlı değişiklikler:
  // kurumsal-organizasyon: bölüm yapısı, 12 başlık, tekrar temizliği, iç bağlantı
  // diğerleri: yayımlanan birim fiyatların değişmesi (görünen içerik)
  "app/(tr)/kurumsal-organizasyon/page.js": "2026-07-31",

  // 1 Ağustos 2026 — müşteri sorularıyla ilerleyen, hizmetler arası yönlendirme yapan keşif akışları.
  "app/(tr)/sozluk/page.js": "2026-08-01",
  "app/(tr)/podyum-kiralama/page.jsx": "2026-08-01",
  "app/(tr)/led-ekran-kiralama/page.js": "2026-08-01",
  "app/(tr)/cadir-kiralama/page.js": "2026-08-01",
  "app/(tr)/ses-isik-sistemleri/page.js": "2026-08-01",
  "app/(tr)/truss-kiralama/page.js": "2026-08-01",
  "app/(tr)/sahne-kiralama/page.js": "2026-08-01",
  "app/(tr)/masa-sandalye-kiralama/page.js": "2026-07-31",
  "app/(tr)/(site)/hizmetler/page.js": "2026-07-31",
  "app/(tr)/led-ekran-hesaplama/page.js": "2026-07-31",
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
