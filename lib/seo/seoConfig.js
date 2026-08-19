import { findGroup, LOCALES, HREFLANG_CODE } from "@/lib/i18n/pageEquivalents";

export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? "https://www.sahneva.com").replace(
    /\/$/,
    ""
  );
export const BASE_SITE_URL = SITE_URL;

export const OG_IMAGE_PATH = "/img/og/sahneva-og.webp";
export const HOME_PAGE_TITLE =
  "Sahne, Podyum, LED Ekran & Ses Işık Kiralama | Sahneva";

/**
 * Ana sayfa grubunun dil haritasi — ARTIK ORTAK TABLODAN uretiliyor.
 *
 * Kaynak: lib/i18n/pageEquivalents.js. Daha once bu liste burada elle yaziliydi
 * ve tablodan bagimsizdi. Yalnizca ana sayfalar degil, locale layout'lari da
 * bunu cagirir; bu yuzden kendi basina bir varsayilan olarak genis etki alani var.
 *
 * x-default bu grupta Turkce koktur (sitenin geri kalaninda Ingilizce uye
 * secilir). Istisna tabloda `xDefault` alaniyla acikca yaziyor.
 */
export const buildAlternateLanguages = () => {
  const group = findGroup("/");
  const languages = {};

  for (const locale of LOCALES) {
    const target = group.translations[locale];
    if (target) languages[HREFLANG_CODE[locale]] = `${SITE_URL}${target}`;
  }

  languages["x-default"] = `${SITE_URL}${group.xDefault ?? "/"}`;

  return languages;
};

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
