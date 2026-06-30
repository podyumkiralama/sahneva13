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
    "https://static.cloudflareinsights.com",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://*.vercel.live",
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
    "https://static.cloudflareinsights.com",
    "https://cloudflareinsights.com",
    "wss://*.pusher.com",
    siteUrl,
  ].join(" ");

  const frameSrc = [
    "'self'",
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
    "https://static.cloudflareinsights.com",
    "https://cloudflareinsights.com",
    "https://i.ytimg.com",
    "https://img.youtube.com",
    "https://vercel.live",
    "https://*.vercel.live",
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
