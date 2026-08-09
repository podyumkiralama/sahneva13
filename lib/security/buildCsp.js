// Edge-compatible CSP builder — no Node.js APIs.
// Consumed by middleware.js (Edge runtime) and next.config.mjs (Node build).

const FALLBACK_SITE_URL = "https://www.sahneva.com";

function resolveSiteOrigin(siteUrl) {
  try {
    return new URL(siteUrl).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

/**
 * @param {{
 *   nonce?: string|null,
 *   hashes?: string[],
 *   siteUrl?: string,
 *   isPreview?: boolean,
 *   allowUnsafeInline?: boolean,
 * }} opts
 */
export function buildCsp({
  nonce = null,
  hashes = [],
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL,
  isPreview = false,
  allowUnsafeInline = false,
} = {}) {
  const siteOrigin = resolveSiteOrigin(siteUrl);

  const scriptAllowlist = [
    "'self'",
    ...(allowUnsafeInline
      ? ["'unsafe-inline'"]
      : [...(nonce ? [`'nonce-${nonce}'`] : []), ...hashes]),
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://analytics.ahrefs.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://*.vercel.live",
    // PayTR taksit tablosu embed script'i (/odeme sayfası).
    "https://www.paytr.com",
  ].join(" ");

  const connectSrc = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.google.com",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://*.clarity.ms",
    "https://analytics.ahrefs.com",
    "wss://*.pusher.com",
    // Canlı destek dosya eki: ziyaretçinin tarayıcısı dosyayı doğrudan
    // depoya yüklüyor (sunucumuzdan geçmiyor). İmzalı yükleme adresi
    // vercel.com üzerinden veriliyor, nesnenin kendisi blob-storage
    // alt alan adında duruyor.
    "https://vercel.com",
    "https://*.blob.vercel-storage.com",
    siteUrl,
  ].join(" ");

  const frameSrc = [
    "'self'",
    // PayTR iFrame API ödeme formu (/odeme sayfası).
    "https://www.paytr.com",
    // 3D Secure adımında PayTR, kartı çıkaran bankaya göre BKM'nin ortak
    // güvenli ödeme geçidine (goguvenliodeme.bkm.com.tr) veya bankaya özel
    // bir 3D Secure sayfasına yönlendirebilir. Canlı modda yeni bir banka
    // engellenirse konsoldaki "Framing '<url>' violates ... frame-src"
    // mesajındaki origin'i buraya ekleyin.
    "https://*.bkm.com.tr", // doğrulandı 2026-07-30 (goguvenliodeme.bkm.com.tr)
    "https://*.isbank.com.tr", // doğrulandı 2026-07-30, Maxinet gecidi
    // Aşağıdakiler DOĞRULANMADI — genel bilgiyle önden eklendi (2026-07-30).
    // PayTR'ın bu bankalarda gerçekte hangi adrese yönlendirdiği teyit
    // edilmedi. Gerçek işlemde farklı/eksik çıkarsa konsoldaki
    // "Framing '<url>' violates ... frame-src" hatasındaki origin'i
    // düzeltin veya ekleyin.
    "https://garantibbva.com.tr",
    "https://*.garantibbva.com.tr",
    "https://garanti.com.tr",
    "https://*.garanti.com.tr",
    "https://akbank.com",
    "https://*.akbank.com",
    "https://sanalakpos.com",
    "https://*.sanalakpos.com",
    "https://yapikredi.com.tr",
    "https://*.yapikredi.com.tr",
    "https://yapikredipos.com.tr",
    "https://*.yapikredipos.com.tr",
    "https://ziraatbank.com.tr",
    "https://*.ziraatbank.com.tr",
    "https://halkbank.com.tr",
    "https://*.halkbank.com.tr",
    "https://vakifbank.com.tr",
    "https://*.vakifbank.com.tr",
    "https://qnbfinansbank.com",
    "https://*.qnbfinansbank.com",
    "https://qnb.com.tr",
    "https://*.qnb.com.tr",
    "https://denizbank.com",
    "https://*.denizbank.com",
    "https://teb.com.tr",
    "https://*.teb.com.tr",
    "https://ing.com.tr",
    "https://*.ing.com.tr",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://player.vimeo.com",
    "https://vercel.live",
    "https://*.vercel.live",
    "https://www.google.com/maps",
    "https://maps.google.com",
    "https://google.com/maps",
    "https://*.google.com",
  ].join(" ");

  const imgSrc = [
    "'self'",
    "data:",
    "blob:",
    siteOrigin,
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://stats.g.doubleclick.net",
    "https://*.google.com",
    "https://*.clarity.ms",
    "https://c.bing.com",
    "https://i.ytimg.com",
    "https://img.youtube.com",
    "https://vercel.live",
    "https://*.vercel.live",
    // PayTR taksit tablosu widget'ının kart şeması logoları.
    "https://www.paytr.com",
  ].join(" ");

  const frameAncestors = isPreview
    ? "frame-ancestors 'self' https://vercel.live https://*.vercel.live;"
    : "frame-ancestors 'none';";

  const trustedTypesPolicy = isPreview
    ? "trusted-types default nextjs nextjs#bundler goog#html sahneva#script-url;"
    : "trusted-types default nextjs nextjs#bundler goog#html sahneva#script-url; require-trusted-types-for 'script';";

  return `
    default-src 'self';
    ${frameAncestors}
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
    img-src ${imgSrc};
    font-src 'self' data: https://fonts.gstatic.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${scriptAllowlist};
    script-src-elem ${scriptAllowlist};
    script-src-attr 'none';
    connect-src ${connectSrc};
    worker-src 'self' blob:;
    frame-src ${frameSrc};
    form-action 'self' https://formspree.io https://wa.me;
    ${trustedTypesPolicy}
  `
    .replace(/\s{2,}/g, " ")
    .trim();
}
