/** @type {import('next').NextConfig} */
import path from "node:path";

const ONE_DAY_IN_SECONDS = 60 * 60 * 24;
const ONE_MONTH_IN_SECONDS = ONE_DAY_IN_SECONDS * 30;
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS * 365;

const isProd = process.env.NODE_ENV === "production";
const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://www.sahneva.com";

/* -------------------- Security Headers -------------------- */
// Content-Security-Policy is set per-request by proxy.js (lib/security/buildCsp.js).
// Only non-CSP security headers live here so they can still be applied to static assets.
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

// HTML sayfaları için index/follow + önizleme (preview) kuralları.
// max-snippet, Google'ın belgelediği üzere yalnızca klasik snippet'i değil
// AI Overviews / AI Mode'a doğrudan girdi olarak verilen içerik miktarını da
// sınırlar; -1 bu sınırı kaldırır. Başlık, sayfa bazında `robots` meta'sı
// yazan dosyaları da kapsar (Google en kısıtlayıcı kuralı uygular, bu yüzden
// noindex isteyen sayfalar etkilenmez).
// App Router'da Cache-Control buraya manuel YAZILMAMALIDIR.
const htmlRobotsHeaders = [
  {
    key: "X-Robots-Tag",
    value:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
];

const verificationFileHeaders = [
  {
    key: "Content-Type",
    value: "text/plain; charset=utf-8",
  },
  {
    key: "Cache-Control",
    value: "public, max-age=0, must-revalidate, no-transform",
  },
  {
    key: "X-Robots-Tag",
    value: "noindex, nofollow",
  },
];

const serviceWorkerHeaders = [
  {
    key: "Content-Type",
    value: "application/javascript; charset=utf-8",
  },
  {
    key: "Cache-Control",
    value: "public, max-age=0, must-revalidate",
  },
  {
    key: "Service-Worker-Allowed",
    value: "/",
  },
];

const sitemapStylesheetHeaders = [
  {
    key: "Content-Type",
    value: "text/xsl; charset=utf-8",
  },
  {
    key: "Cache-Control",
    value: `public, max-age=${ONE_DAY_IN_SECONDS}, stale-while-revalidate=${ONE_DAY_IN_SECONDS * 7}`,
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

  experimental: {
    optimizePackageImports: ["lucide-react"],
    staleTimes: {
      dynamic: 30,
      static: 3600,
    },
  },

  images: {
    deviceSizes: [320, 420, 512, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    qualities: [45, 60, 65, 68, 70, 72, 75, 78, 80, 85, 88, 90],
    minimumCacheTTL: ONE_MONTH_IN_SECONDS,
    remotePatterns: [],
    dangerouslyAllowSVG: false,
  },

  env: {
    NEXT_PUBLIC_SITE_URL: siteUrl,
    SITE_URL: siteUrl,
    NEXT_PUBLIC_APP_ENV: process.env.NODE_ENV ?? "development",
  },

  output: isProd ? "standalone" : undefined,
  staticPageGenerationTimeout: 300,

  // Yonlendirme konvansiyonu: her kural `statusCode: 301` kullanir.
  // `permanent: true` kullanilmaz, cunku Next onu 308 olarak yayinlar; kodda
  // "permanent" yazip HTTP'de 308 gormek kafa karistiriyordu. Ikisi ayni
  // kuralda birlikte kullanilamaz.
  async redirects() {
    return [
      {
        source: "/bolgesel-kiralama/istanbul",
        destination: "/sahne-kiralama",
        statusCode: 301,
      },
      // Sehir bazli sayfalar kaldirildi: 81 il, 7 sablondan uretiliyordu ve
      // sayfalar birbirine %82-96 benzedigi icin hizmet sayfalariyla ayni
      // sorgularda yarisiyordu. Biriken sinyaller hub'a tasinsin diye 301.
      // Not: istanbul kaydi bu kuraldan once gelmeli, sirayla eslesiyor.
      {
        source: "/bolgesel-kiralama/:sehir",
        destination: "/bolgesel-kiralama",
        statusCode: 301,
      },
      {
        source: "/sahne-kurulumu",
        destination: "/sahne-kiralama",
        statusCode: 301,
      },
      {
        source: "/dome-cadir-kiralama",
        destination: "/cadir-kiralama",
        statusCode: 301,
      },
      {
        source: "/isik-sistemleri-kiralama",
        destination: "/ses-isik-sistemleri",
        statusCode: 301,
      },
      {
        source: "/ses-sistemi-kiralama",
        destination: "/ses-isik-sistemleri",
        statusCode: 301,
      },
      {
        source: "/site.webmanifest",
        destination: "/manifest.json",
        statusCode: 301,
      },
      {
        source: "/arama",
        destination: "/search",
        statusCode: 301,
      },
      {
        source: "/public/img/led/:path*",
        destination: "/img/led/:path*",
        statusCode: 301,
      },
      {
        source: "/img/sahneva-logo.svg",
        destination: "/img/logo.svg",
        statusCode: 301,
      },
      {
        source: "/img/logo-dark.webp",
        destination: "/img/sahneva-logo-dark-theme.png",
        statusCode: 301,
      },
      {
        source: "/led-ekran-kiralama-1",
        destination: "/led-ekran-kiralama",
        statusCode: 301,
      },
      {
        source: "/led-ekran-kiralama-2",
        destination: "/led-ekran-kiralama",
        statusCode: 301,
      },
      {
        source: "/podyum-kiralama-0",
        destination: "/podyum-kiralama",
        statusCode: 301,
      },
      {
        source: "/sahne-kiralama-2",
        destination: "/sahne-kiralama",
        statusCode: 301,
      },
      {
        source: "/podyum-kiralama-fiyatlari",
        destination: "/podyum-kurulum-fiyatlari",
        statusCode: 301,
      },
      {
        source: "/podyum-kiralama-fiyatlari-1",
        destination: "/podyum-kurulum-fiyatlari",
        statusCode: 301,
      },
      {
        source: "/iletisim-0",
        destination: "/iletisim",
        statusCode: 301,
      },
      {
        source: "/hizmetler-1",
        destination: "/hizmetler",
        statusCode: 301,
      },
      {
        source: "/_next-live/:path*",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/-0",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/blog-1",
        destination: "/blog",
        statusCode: 301,
      },
      {
        source: "/en/blog-1",
        destination: "/en/blog",
        statusCode: 301,
      },
      {
        source: "/en/contact-0",
        destination: "/en/contact",
        statusCode: 301,
      },
      {
        source: "/en/sound-light-rental-2",
        destination: "/en/sound-light-rental",
        statusCode: 301,
      },
      {
        source: "/en/led-screen-rental-1",
        destination: "/en/led-screen-rental",
        statusCode: 301,
      },
      {
        source: "/img/ses-isik/lacoustics.png-11",
        destination: "/img/ses-isik/lacoustics.png",
        statusCode: 301,
      },
      {
        source: "/img/sahne/2.webp-1",
        destination: "/img/sahne/2.webp",
        statusCode: 301,
      },
      {
        // Genel kural: "-0", "-1", "-11" gibi sonuna 1-2 rakam eklenmiş hayalet
        // URL'leri (eski RSC payload key'lerinden Google'ın keşfettiği) asıl
        // sayfaya yönlendirir. Path'in rakam dışı bir karakterle bitme şartı,
        // "-2026" gibi rakamla biten meşru slug'ların bölünmesini engeller.
        source: "/:path(.*[^0-9])-:num([0-9]{1,2})",
        destination: "/:path",
        statusCode: 301,
      },
      {
        source: "/$",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/&",
        destination: "/",
        statusCode: 301,
      },
      { source: "/faq", destination: "/en/faq", statusCode: 301 },
      { source: "/faq/", destination: "/en/faq", statusCode: 301 },
      {
        source: "/blog/2026-cadir-kiralama-rehberi-organizasyon-icin-secenekler",
        destination: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026",
        statusCode: 301,
      },
      {
        // Genel kuralın kapsayamadığı durum: "-2026" gibi rakamla biten meşru
        // slug'lara eklenmiş hayalet sonekler (örn. /blog/...-2026-2). Genel
        // kural path'in rakam dışı karakterle bitmesini şart koştuğu için bu
        // varyantları kaçırıyor.
        source: "/:path(.*-2026)-:num([0-9]{1,2})",
        destination: "/:path",
        statusCode: 301,
      },
      {
        source: "/blog/ses-sistemlerinde-2026-yenilikleri-mikrofon-ve-line-array",
        destination: "/blog/ses-sistemlerinde-2026-yenilikleri-trendler",
        statusCode: 301,
      },
      {
        source: "/blog/2026-led-ekran-trendleri-cob-ve-sahne-tasarimi",
        destination: "/blog/led-ekran-teknoloji-trendleri-2026",
        statusCode: 301,
      },
      {
        source: "/blog/led-ekran-kurulum-guvenligi-2",
        destination: "/blog/led-ekran-kurulum-guvenligi",
        statusCode: 301,
      },
      {
        source: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi-2",
        destination: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
        statusCode: 301,
      },
      {
        source: "/blog/neden-podyum-sahne-tercih-edilir-2",
        destination: "/blog/neden-podyum-sahne-tercih-edilir",
        statusCode: 301,
      },
      {
        source: "/blog/fisekhane-pubg-guinness-rekoru-2",
        destination: "/blog/fisekhane-pubg-guinness-rekoru",
        statusCode: 301,
      },
      {
        source: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping-2",
        destination: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
        statusCode: 301,
      },
      {
        source: "/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi-2",
        destination: "/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi",
        statusCode: 301,
      },
      {
        source: "/blog/pmgc-dunya-finali-sahne-arkasi-2",
        destination: "/blog/pmgc-dunya-finali-sahne-arkasi",
        statusCode: 301,
      },
      {
        source: "/blog/mezuniyet-organizasyonlari-2026-istanbul-rehberi-2",
        destination: "/blog/mezuniyet-organizasyonlari-2026-istanbul-rehberi",
        statusCode: 301,
      },
      {
        source: "/en/blog/graduation-events-2026-istanbul-guide-2",
        destination: "/en/blog/graduation-events-2026-istanbul-guide",
        statusCode: 301,
      },
      {
        source: "/en/blog/dome-tent-revolution-pneumatic-360-mapping-2",
        destination: "/en/blog/dome-tent-revolution-pneumatic-360-mapping",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      // 1) Her şeyde güvenlik başlıkları
      { source: "/(.*)", headers: securityHeaders },

      {
        source: "/yandex_ae074bf9d9cbad2b.html",
        headers: verificationFileHeaders,
      },

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

      {
        source: "/sitemap.xsl",
        headers: sitemapStylesheetHeaders,
      },

      // 5) Dosya uzantılı assetler: 1 yıl immutable
      {
        source: "/(.*)\\.(ico|png|jpg|jpeg|webp|avif|svg|gif|woff2|css)",
        headers: longTermCacheHeaders,
      },

      // 6) _next genel: noindex
      {
        source: "/_next/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },

      // Service worker genel *.js cache kuralından sonra gelmeli; aksi halde
      // immutable cache header'ı SW güncellemelerini engelleyebilir.
      {
        source: "/sw.js",
        headers: serviceWorkerHeaders,
      },
    ];
  },
};

export default nextConfig;
