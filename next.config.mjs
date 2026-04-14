/** @type {import('next').NextConfig} */
import path from "node:path";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const isProd = process.env.NODE_ENV === "production";
const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

const siteUrl = process.env.SITE_URL ?? "https://www.sahneva.com";

/* -------------------- Security Headers -------------------- */
const securityHeaders = (() => {
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
  turbopack: {
    root: path.resolve(process.cwd()),
  },
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
      {
        source: "/arama",
        destination: "/search",
        permanent: true,
      },
      {
        source: "/public/img/led/:path*",
        destination: "/img/led/:path*",
        permanent: true,
      },
      {
        source: "/img/sahneva-logo.svg",
        destination: "/img/logo.svg",
        permanent: true,
      },
      {
        source: "/led-ekran-kiralama-1",
        destination: "/led-ekran-kiralama",
        permanent: true,
      },
      {
        source: "/led-ekran-kiralama-2",
        destination: "/led-ekran-kiralama",
        permanent: true,
      },
      {
        source: "/-0",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog-1",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/$",
        destination: "/",
        permanent: true,
      },
      {
        source: "/&",
        destination: "/",
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
      {
        source: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi-2",
        destination: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
        permanent: true,
      },
      {
        source: "/blog/neden-podyum-sahne-tercih-edilir-2",
        destination: "/blog/neden-podyum-sahne-tercih-edilir",
        permanent: true,
      },
      {
        source: "/blog/fisekhane-pubg-guinness-rekoru-2",
        destination: "/blog/fisekhane-pubg-guinness-rekoru",
        permanent: true,
      },
      {
        source: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping-2",
        destination: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
        permanent: true,
      },
      {
        source: "/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi-2",
        destination: "/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi",
        permanent: true,
      },
      {
        source: "/blog/pmgc-dunya-finali-sahne-arkasi-2",
        destination: "/blog/pmgc-dunya-finali-sahne-arkasi",
        permanent: true,
      },
      {
        source: "/blog/mezuniyet-organizasyonlari-2026-istanbul-rehberi-2",
        destination: "/blog/mezuniyet-organizasyonlari-2026-istanbul-rehberi",
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

      // 3) Next static chunklar: Cache-Control Next.js tarafindan yonetilir
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
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
