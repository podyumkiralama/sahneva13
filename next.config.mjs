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

const cspReportOnlyEnabled = process.env.CSP_REPORT_ONLY === "true";
const cspStrictScriptsEnabled = process.env.CSP_STRICT_SCRIPTS === "true";

function resolveSiteOrigin(siteUrl) {
  try {
    return new URL(siteUrl).origin;
  } catch {
    return "https://www.sahneva.com";
  }
}

function buildScriptSrc({ allowUnsafeInline = true } = {}) {
  const scriptSrc = [
    "'self'",
    ...(allowUnsafeInline ? ["'unsafe-inline'"] : []),
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://static.cloudflareinsights.com",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  return scriptSrc;
}

function buildContentSecurityPolicy({ siteUrl, isPreview, strictScripts = false }) {
  const siteOrigin = resolveSiteOrigin(siteUrl);
  const scriptSrc = buildScriptSrc({ allowUnsafeInline: !strictScripts });

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

  // CSP_STRICT_SCRIPTS is a staged preview switch for real enforcement without
  // changing the production default. Static/ISR pages may still depend on inline
  // JSON-LD, Trusted Types and speculation-rules scripts. If strict mode blocks
  // pages in preview, do not force it in production; first move executable inline
  // scripts to external files or hash stable inline sources where that is safe.
  return `
    default-src 'self';
    ${frameAncestors}
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
    img-src ${imgSrc};
    font-src 'self' data: https://fonts.gstatic.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${scriptSrc};
    script-src-elem ${scriptSrc};
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

const contentSecurityPolicy = buildContentSecurityPolicy({
  siteUrl,
  isPreview,
  strictScripts: cspStrictScriptsEnabled,
});

function buildReportOnlyContentSecurityPolicy({ siteUrl, isPreview }) {
  const siteOrigin = resolveSiteOrigin(siteUrl);
  const scriptSrc = buildScriptSrc({ allowUnsafeInline: false });

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

  // Report-only intentionally removes script-src 'unsafe-inline' first. This lets
  // us observe blockers before enforcing a stricter policy on static/ISR pages
  // that currently depend on JSON-LD, Trusted Types and speculation-rules scripts.
  return `
    default-src 'self';
    ${frameAncestors}
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
    img-src ${imgSrc};
    font-src 'self' data: https://fonts.gstatic.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${scriptSrc};
    script-src-elem ${scriptSrc};
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

const contentSecurityPolicyReportOnly = cspReportOnlyEnabled
  ? buildReportOnlyContentSecurityPolicy({
      siteUrl,
      isPreview,
    })
  : null;

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
    { key: "Content-Security-Policy", value: contentSecurityPolicy },
  ];

  const headers = contentSecurityPolicyReportOnly
    ? [
        ...base,
        {
          key: "Content-Security-Policy-Report-Only",
          value: contentSecurityPolicyReportOnly,
        },
      ]
    : base;

  return isPreview ? headers : [...headers, { key: "X-Frame-Options", value: "DENY" }];
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

  async redirects() {
    return [
      {
        source: "/sahne-kurulumu",
        destination: "/sahne-kiralama",
        permanent: true,
      },
      {
        source: "/dome-cadir-kiralama",
        destination: "/cadir-kiralama",
        permanent: true,
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
        source: "/img/logo-dark.webp",
        destination: "/img/sahneva-logo-dark-theme.png",
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
        source: "/podyum-kiralama-0",
        destination: "/podyum-kiralama",
        permanent: true,
      },
      {
        source: "/sahne-kiralama-2",
        destination: "/sahne-kiralama",
        permanent: true,
      },
      {
        source: "/podyum-kiralama-fiyatlari",
        destination: "/podyum-kurulum-fiyatlari",
        permanent: true,
      },
      {
        source: "/podyum-kiralama-fiyatlari-1",
        destination: "/podyum-kurulum-fiyatlari",
        permanent: true,
      },
      {
        source: "/iletisim-0",
        destination: "/iletisim",
        permanent: true,
      },
      {
        source: "/hizmetler-1",
        destination: "/hizmetler",
        permanent: true,
      },
      {
        source: "/_next-live/:path*",
        destination: "/",
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
        source: "/en/blog-1",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/en/contact-0",
        destination: "/en/contact",
        permanent: true,
      },
      {
        source: "/en/sound-light-rental-2",
        destination: "/en/sound-light-rental",
        permanent: true,
      },
      {
        source: "/en/led-screen-rental-1",
        destination: "/en/led-screen-rental",
        permanent: true,
      },
      {
        source: "/img/ses-isik/lacoustics.png-11",
        destination: "/img/ses-isik/lacoustics.png",
        permanent: true,
      },
      {
        source: "/img/sahne/2.webp-1",
        destination: "/img/sahne/2.webp",
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
        statusCode: 301,
      },
      {
        source: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026-2",
        destination: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026",
        permanent: true,
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
      {
        source: "/en/blog/graduation-events-2026-istanbul-guide-2",
        destination: "/en/blog/graduation-events-2026-istanbul-guide",
        permanent: true,
      },
      {
        source: "/en/blog/dome-tent-revolution-pneumatic-360-mapping-2",
        destination: "/en/blog/dome-tent-revolution-pneumatic-360-mapping",
        permanent: true,
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
