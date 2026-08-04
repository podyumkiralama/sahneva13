export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://www.sahneva.com").replace(
    /\/$/,
    ""
  );
export const BASE_SITE_URL = SITE_URL;

export const OG_IMAGE_PATH = "/img/og/sahneva-og.webp";
export const HOME_PAGE_TITLE =
  "Sahne, Podyum, LED Ekran & Ses Işık Kiralama | Sahneva";

export const buildAlternateLanguages = () => ({
  "tr-TR": `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
  de: `${SITE_URL}/de`,
  ar: `${SITE_URL}/ar`,
  ru: `${SITE_URL}/ru`,
  zh: `${SITE_URL}/zh`,
  "x-default": `${SITE_URL}/`,
});

export const buildCanonical = (localePath = "/") => {
  const normalizedPath =
    localePath === "/"
      ? ""
      : `/${localePath.replace(/^\/+/, "").replace(/\/$/, "")}`;

  return `${SITE_URL}${normalizedPath}`;
};

export const getOgImageUrl = () => `${SITE_URL}${OG_IMAGE_PATH}`;

/**
 * Google, `nosnippet` ve `max-snippet` kurallarının yalnızca klasik arama
 * sonucunu değil, AI Overviews ve AI Mode'a doğrudan girdi olarak verilen
 * içerik miktarını da sınırladığını belgeliyor. Kural hiç yazılmazsa Google
 * kendi varsayılan snippet uzunluğunu uygular; `max-snippet: -1` bu sınırı
 * kaldırır ve sayfanın üretken yapay zekâ yanıtlarında kaynak olarak
 * kullanılabilecek bölümünü açık bırakır.
 *
 * Sayfa bazında `robots` tanımlayan dosyalar bu ön ayarı yayarak (spread)
 * kullanmalı; `noindex` gereken sayfalar kendi kuralını yazmaya devam eder.
 */
export const AI_PREVIEW_ROBOTS = Object.freeze({
  index: true,
  follow: true,
  "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1,
  googleBot: Object.freeze({
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  }),
});

/**
 * Indekslenmesi koşullu olan sayfalar (örn. şirket bilgisi tamamlanmadan
 * yayına açılmayan yasal metinler) için aynı önizleme kurallarını korur.
 */
export const buildAiPreviewRobots = (index) => ({
  ...AI_PREVIEW_ROBOTS,
  index,
  googleBot: { ...AI_PREVIEW_ROBOTS.googleBot, index },
});
