export const PROJECT_LASTMOD_FALLBACK = "2025-11-10T00:00:00+03:00";
export const LLMS_GENERATED_AT = "2026-02-12T00:00:00+03:00";

const LAST_MODIFIED_BY_FILE = {
  "app/(tr)/led-ekran-kiralama/page.js": "2026-02-12",
  "app/(tr)/blog/etkinlige-gore-podyum-tercihi/page.jsx": "2026-02-05",
  "app/(tr)/blog/fisekhane-pubg-guinness-rekoru/page.jsx": "2026-02-08",
  "app/(tr)/blog/kurumsal-etkinlik-yonetimi/page.jsx": "2026-02-08",
  "app/(tr)/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping/page.jsx": "2026-02-05",
  "app/(tr)/blog/led-ekran-teknoloji-trendleri-2026/page.jsx": "2026-02-09",
  "app/(tr)/blog/mezuniyet-organizasyonlari-2026-istanbul-rehberi/page.jsx": "2026-02-05",
  "app/(tr)/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi/page.jsx": "2026-02-05",
  "app/(tr)/blog/neden-podyum-sahne-tercih-edilir/page.jsx": "2026-02-05",
  "app/(tr)/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026/page.jsx": "2026-02-05",
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
