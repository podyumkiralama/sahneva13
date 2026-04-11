/** @type {import('next').NextConfig} */

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const isProd = process.env.NODE_ENV === "production";
const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

/* -------------------- Security Headers (CSP) -------------------- */
const securityHeaders = (() => {
  const SCRIPT_SRC = [
    "'self'",
    "'unsafe-eval'", // GTM ve Clarity için gerekli
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://static.cloudflareinsights.com",
  ].join(" ");

  const SCRIPT_SRC_ELEM = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://static.cloudflareinsights.com",
  ].join(" ");

  const CONNECT_SRC = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://*.clarity.ms",
    "https://static.cloudflareinsights.com",
    "wss://*.pusher.com",
    siteUrl,
  ].join(" ");

  const FRAME_SRC = [
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

  const FRAME_ANCESTORS = isPreview
    ? "frame-ancestors 'self' https://vercel.live https://*.vercel.live;"
    : "frame-ancestors 'none';";

  const csp = `
    default-src 'self';
    ${FRAME_ANCESTORS}
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https://fonts.gstatic.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${SCRIPT_SRC};
    script-src-elem ${SCRIPT_SRC_ELEM};
    script-src-attr 'none';
    connect-src ${CONNECT_SRC};
    worker-src 'self' blob:;
    frame-src ${FRAME_SRC};
    form-action 'self' https://formspree.io https://wa.me;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  const base = [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    { key: "X-XSS-Protection", value: "1; mode=block" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    {
      key: "Permissions-Policy",
      value:
        "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), fullscreen=(self \"https://www.youtube.com\" \"https://www.youtube-nocookie.com\")",
    },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "Origin-Agent-Cluster", value: "?1" },
  ];

  return isPreview ? base : [...base, { key: "X-Frame-Options", value: "DENY" }];
})();

const longTermCacheHeaders = [
  {
    key: "Cache-Control",
    value: `public, max-age=${ONE_YEAR_IN_SECONDS}, immutable`,
  },
];

// DÜZELTME: HTML sayfaları için sadece index/follow etiketini tutuyoruz.
// App Router'da Cache-Control buraya manuel YAZILMAMALIDIR.
const htmlRobotsHeaders = [
  {
    key: "X-Robots-Tag",
    value: "index, follow",
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,

  compiler: {
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
  },

  images: {
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    // DÜZELTME: 'qualities' dizisi Next.js'de geçerli bir ayar olmadığı için kaldırıldı.
    minimumCacheTTL: ONE_MONTH_IN_SECONDS,
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },

  env: {
    SITE_URL: siteUrl,
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV ?? "development",
  },

  output: isProd ? "standalone" : undefined,
  staticPageGenerationTimeout: 300,

  async redirects() {
    return [
      {
        source: "/sahne-kurulumu",
        destination: "/sahne-kiralama",
        permanent: true,
      },
      {
        source: "/site.webmanifest",
        destination: "/manifest.json",
        permanent: true,
      },
      { source: "/faq", destination: "/en/faq", permanent: true },
      { source: "/faq/", destination: "/en/faq", permanent: true },
      {
        source: "/blog/2026-cadir-kiralama-rehberi-organizasyon-icin-secenekler",
        destination: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026",
        permanent: true,
      },
      {
        source: "/blog/ses-sistemlerinde-2026-yenilikleri-mikrofon-ve-line-array",
        destination: "/blog/ses-sistemlerinde-2026-yenilikleri-trendler",
        permanent: true,
      },
      {
        source: "/blog/2026-led-ekran-trendleri-cob-ve-sahne-tasarimi",
        destination: "/blog/led-ekran-teknoloji-trendleri-2026",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      // 1) Her şeyde güvenlik başlıkları
      { source: "/(.*)", headers: securityHeaders },

      // 2) DÜZELTME: Sayfalar için sadece Robots başlığı basıyoruz, Cache-Control Next.js'e bırakıldı.
      {
        source: "/((?!api/|_next/|.*\\..*).*)",
        headers: htmlRobotsHeaders,
      },

      // 3) Next static chunklar: 1 yıl immutable
      {
        source: "/_next/static/(.*)",
        headers: [
          ...longTermCacheHeaders,
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },

      // 4) Web App Manifest: doğru MIME tipi + kısa vadeli önbellek
      {
        source: "/manifest.json",
        headers: [
          { key: "Content-Type", value: "application/manifest+json" },
          {
            key: "Cache-Control",
            value: `public, max-age=${ONE_DAY_IN_SECONDS}, stale-while-revalidate=${ONE_DAY_IN_SECONDS * 7}`,
          },
        ],
      },

      // 5) Dosya uzantılı assetler: 1 yıl immutable
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif|woff2|css|js)",
        headers: longTermCacheHeaders,
      },

      // 6) _next genel: noindex
      {
        source: "/_next/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
