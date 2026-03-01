import fs from "fs";
import path from "path";

import { projects } from "@/lib/data";
import { getLastModifiedForFile } from "@/lib/seoLastModified";

export const SITE = "https://www.sahneva.com";
export const abs = (p) => (p?.startsWith("http") ? p : `${SITE}${p}`);

const REJECT_PATTERNS = [
  /^\/_next\//,
  /^\/api\//,
  /^\/?[$&]$/,
  /^\/search/i,
  /\?/,
  /utm_/i,
  /[?&]page=/i,
  /[?&]filter=/i,
  /[?&]sort=/i,
  /[?&]ref=/i,
];

export function clean(pathStr) {
  if (!pathStr) return null;
  const raw = String(pathStr).trim();

  if (REJECT_PATTERNS.some((rx) => rx.test(raw))) return null;

  let parsedPath = raw;
  let search = "";
  try {
    const u = new URL(raw, SITE);
    parsedPath = u.pathname;
    search = u.search;
  } catch {
    parsedPath = raw;
  }

  if (search) return null;

  let p = parsedPath;

  if (!p.startsWith("/")) p = `/${p}`;

  if (p.includes("{") || p.includes("}")) return null;

  if (p.includes("?")) return null;

  if (REJECT_PATTERNS.some((rx) => rx.test(p))) return null;

  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  return p;
}

const STATIC_PAGE_META = {
  "/": { lastMod: "2026-01-10T00:00:00+03:00", change: "weekly", pr: 1.0 },
  "/hizmetler": { lastMod: "2026-01-06T00:00:00+03:00", change: "weekly", pr: 0.9 },
  "/podyum-kiralama": { lastMod: "2026-01-12T00:00:00+03:00", change: "weekly", pr: 0.9 },
  "/podyum-kiralama-fiyatlari": { lastMod: "2026-01-12T00:00:00+03:00", change: "weekly", pr: 0.85 },
  "/led-ekran-kiralama": { lastMod: `${getLastModifiedForFile("app/(tr)/led-ekran-kiralama/page.js", "2026-01-14")}T00:00:00+03:00`, change: "weekly", pr: 0.9 },
  "/ses-isik-sistemleri": { lastMod: "2025-12-22T00:00:00+03:00", change: "weekly", pr: 0.9 },
  "/cadir-kiralama": { lastMod: "2025-12-18T00:00:00+03:00", change: "weekly", pr: 0.9 },
  "/masa-sandalye-kiralama": { lastMod: "2025-12-16T00:00:00+03:00", change: "weekly", pr: 0.9 },
  "/sahne-kiralama": { lastMod: "2026-01-08T00:00:00+03:00", change: "weekly", pr: 0.9 },
  "/truss-kiralama": { lastMod: "2025-12-20T00:00:00+03:00", change: "weekly", pr: 0.85 },
  "/kurumsal-organizasyon": { lastMod: "2025-12-12T00:00:00+03:00", change: "monthly", pr: 0.85 },
  "/bolgesel-kiralama": { lastMod: "2025-12-08T00:00:00+03:00", change: "monthly", pr: 0.8 },
  "/nasil-calisiyoruz": { lastMod: "2025-11-28T00:00:00+03:00", change: "yearly", pr: 0.7 },
  "/hakkimizda": { lastMod: "2025-11-20T00:00:00+03:00", change: "yearly", pr: 0.7 },
  "/iletisim": { lastMod: "2025-11-12T00:00:00+03:00", change: "yearly", pr: 0.8 },
  "/sss": { lastMod: "2025-12-02T00:00:00+03:00", change: "monthly", pr: 0.7 },
  "/kvkk": { lastMod: "2025-10-14T00:00:00+03:00", change: "yearly", pr: 0.5 },
  "/gizlilik-politikasi": { lastMod: "2025-10-16T00:00:00+03:00", change: "yearly", pr: 0.5 },
  "/projeler": { lastMod: "2026-01-02T00:00:00+03:00", change: "monthly", pr: 0.8 },
  "/blog": { lastMod: "2026-01-28T00:00:00+03:00", change: "weekly", pr: 0.8 },
  "/en": { lastMod: "2025-12-20T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/about": { lastMod: "2025-11-18T00:00:00+03:00", change: "yearly", pr: 0.4 },
  "/en/services": { lastMod: "2025-12-18T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/projects": { lastMod: "2025-12-12T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/contact": { lastMod: "2025-11-12T00:00:00+03:00", change: "yearly", pr: 0.4 },
  "/en/led-screen-rental": { lastMod: "2025-12-10T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/stage-rental": { lastMod: "2025-12-10T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/sound-light-rental": { lastMod: "2025-12-04T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/table-chair-rental": { lastMod: "2025-12-04T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/tent-rental": { lastMod: "2025-12-04T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/en/faq": { lastMod: "2025-11-30T00:00:00+03:00", change: "monthly", pr: 0.4 },
  "/ar": { lastMod: "2025-12-18T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/ar/services": { lastMod: "2025-12-16T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/ar/projects": { lastMod: "2025-12-12T00:00:00+03:00", change: "monthly", pr: 0.5 },
  "/ar/contact": { lastMod: "2025-11-12T00:00:00+03:00", change: "yearly", pr: 0.4 },
};

const STATIC_PAGES = Object.keys(STATIC_PAGE_META).map((pathItem) => ({
  path: pathItem,
  ...STATIC_PAGE_META[pathItem],
}));

const IMAGE_MAP = {
  "/": ["/img/hero-bg.webp"],
  "/podyum-kiralama": ["/img/hizmet-podyum.webp", "/img/galeri/podyum-kiralama-1.webp"],
  "/led-ekran-kiralama": [
    "/img/hizmet-led-ekran.webp",
    "/img/galeri/led-ekran-kiralama-1.webp",
  ],
  "/cadir-kiralama": ["/img/hizmet-cadir.webp", "/img/galeri/cadir-kiralama-1.webp"],
  "/sahne-kiralama": ["/img/hizmet-sahne.webp"],
  "/ses-isik-sistemleri": ["/img/hizmet-sesisik.webp"],
  "/masa-sandalye-kiralama": ["/img/hizmet-masa.webp"],
  "/hizmetler": ["/img/hizmetler-ust.webp"],
  "/hakkimizda": ["/img/hakkimizda.webp"],
};

const BLOG_VIDEO_MAP = {
  "kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping": [
    {
      title: "Dome Çadır ve 360° Mapping Örneği",
      description: "Dome çadır içinde 360° video mapping uygulamasına örnek video.",
      thumbnail_loc: "https://img.youtube.com/vi/JNzGlNzNRuk/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
      player_loc: "https://www.youtube-nocookie.com/embed/JNzGlNzNRuk",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
    {
      title: "Lazer Projeksiyon Mapping Örneği",
      description:
        "Lazer projeksiyon mapping içeriğinin akışı ve efektlerini gösteren kısa video.",
      thumbnail_loc: "https://img.youtube.com/vi/CVdYV5BkF3k/hqdefault.jpg",
      content_loc: "https://youtube.com/shorts/CVdYV5BkF3k",
      player_loc: "https://www.youtube-nocookie.com/embed/CVdYV5BkF3k",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
  ],
  "milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi": [
    {
      title: "Milli Uzay Programı Lansmanı 2021",
      description:
        "Milli Uzay Programı Lansmanı’nda Sahneva’nın mühendislik yaklaşımını anlatan video.",
      thumbnail_loc: "https://i.ytimg.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
      player_loc: "https://www.youtube.com/embed/j1Tr5l8DVW8",
      publication_date: "2021-02-09T00:00:00+03:00",
    },
  ],
  "pmgc-dunya-finali-sahne-arkasi": [
    {
      title: "PMGC 2023 Grand Finals - Istanbul",
      description:
        "PMGC 2023 Dünya Finali’nin sahne arkası ve açılış atmosferini gösteren resmi video.",
      thumbnail_loc: "https://img.youtube.com/vi/173gBurWSRQ/maxresdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=173gBurWSRQ",
      player_loc: "https://www.youtube.com/embed/173gBurWSRQ",
      publication_date: "2026-01-05T10:00:00+03:00",
    },
  ],
};

const PAGE_VIDEO_MAP = {
  "/led-ekran-kiralama": [
    {
      title: "LED Ekran Kurulum ve Sahne Prodüksiyonu",
      description:
        "Profesyonel LED ekran kurulum süreci ve sahne prodüksiyonu özet görüntüsü.",
      thumbnail_loc: "https://img.youtube.com/vi/1R5Av0x5ouA/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=1R5Av0x5ouA",
      player_loc: "https://www.youtube-nocookie.com/embed/1R5Av0x5ouA",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
    {
      title: "LED Ekran Kurulum Süreci",
      description: "LED ekran montajı, test ve canlı yayın hazırlığına dair kısa video.",
      thumbnail_loc: "https://img.youtube.com/vi/JNzGlNzNRuk/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
      player_loc: "https://www.youtube-nocookie.com/embed/JNzGlNzNRuk",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
    {
      title: "LED Ekran ve Sahne Uygulaması",
      description: "Etkinlik alanında LED ekran ve sahne kurgusundan öne çıkan anlar.",
      thumbnail_loc: "https://img.youtube.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
      player_loc: "https://www.youtube-nocookie.com/embed/j1Tr5l8DVW8",
      publication_date: "2026-01-15T00:00:00+03:00",
    },
    {
      title: "LED Ekran Kurulum Detayları",
      description: "Kurulum, kablolama ve görüntü optimizasyonuna dair teknik özet.",
      thumbnail_loc: "https://img.youtube.com/vi/HNDZ-wYVKLw/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=HNDZ-wYVKLw",
      player_loc: "https://www.youtube-nocookie.com/embed/HNDZ-wYVKLw",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
    {
      title: "Etkinlik LED Ekran Örnekleri",
      description:
        "Farklı etkinliklerde kullanılan LED ekran kurulumlarından kısa kesitler.",
      thumbnail_loc: "https://img.youtube.com/vi/173gBurWSRQ/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=173gBurWSRQ",
      player_loc: "https://www.youtube.com/embed/173gBurWSRQ",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
  ],
  "/cadir-kiralama": [
    {
      title: "Kurulum Videosu 00:10",
      description:
        "Güvenli sabitleme, doğru ekipman ve deneyimli ekip ile hızlı ve kontrollü kurulum.",
      thumbnail_loc: "https://img.youtube.com/vi/tyb1lG9KtiA/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=tyb1lG9KtiA",
      player_loc: "https://www.youtube-nocookie.com/embed/tyb1lG9KtiA",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
    {
      title: "Teknofest Çadır İç Görünüm Sahne ve Teknik Kurulum",
      description:
        "Teknofest’te kurduğumuz çadırın iç görünümü, sahne, LED ekran, ses ve ışık detayları.",
      thumbnail_loc: "https://img.youtube.com/vi/_9Q7v0ZL304/hqdefault.jpg",
      content_loc: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
      player_loc: "https://www.youtube-nocookie.com/embed/_9Q7v0ZL304",
      publication_date: "2025-11-17T00:00:00+03:00",
    },
  ],
};


const BLOG_PUBLISHED_AT = {
  "12-eglenceli-kurumsal-etkinlik-fikri": "2026-02-27T10:00:00+03:00",
  "etkinlige-gore-podyum-tercihi": "2025-12-28T00:00:00+03:00",
  "etkinlik-teknik-kesif-ve-planlama-rehberi": "2026-02-23T00:00:00+03:00",
  "fisekhane-pubg-guinness-rekoru": "2026-01-25T00:00:00+03:00",
  "kurumsal-etkinlik-planlama-rehberi-2026": "2026-01-28T00:00:00+03:00",
  "kurumsal-etkinlik-yonetimi": "2025-12-15T00:00:00+03:00",
  "kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping":
    "2026-01-20T00:00:00+03:00",
  "led-ekran-teknoloji-trendleri-2026": "2025-12-15T00:00:00+03:00",
  "milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi":
    "2021-02-09T00:00:00+03:00",
  "mezuniyet-organizasyonlari-2026-istanbul-rehberi": "2026-02-10T00:00:00+03:00",
  "neden-podyum-sahne-tercih-edilir": "2025-12-30T09:00:00+03:00",
  "organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026":
    "2026-02-12T00:00:00+03:00",
  "pmgc-dunya-finali-sahne-arkasi": "2026-01-05T10:00:00+03:00",
  "sahne-kiralama-fiyatlari-neye-gore-belirlenir": "2026-01-05T09:00:00+03:00",
  "sahne-neden-hep-yuksektir-2500-yillik-bir-sir": "2025-12-29T00:00:00+03:00",
  "ses-sistemlerinde-2026-yenilikleri-trendler": "2026-01-16T00:00:00+03:00",
};

const toDateOnly = (value) => {
  if (!value) return undefined;

  const raw = String(value).trim();
  const direct = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  if (direct) return direct[1];

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return undefined;

  return parsed.toISOString().slice(0, 10);
};

const buildStaticPageEntries = (predicate) => {
  const seen = new Set();

  return STATIC_PAGES.filter((entry) => predicate(entry.path))
    .map((entry) => ({
      url: abs(entry.path),
      lastMod: toDateOnly(entry.lastMod),
      changeFrequency: entry.change,
      priority: entry.pr,
      images: (IMAGE_MAP[entry.path] ?? []).map(abs),
      videos: PAGE_VIDEO_MAP[entry.path],
    }))
    .filter((entry) => {
      const cleaned = clean(entry.url);
      if (!cleaned || seen.has(cleaned)) return false;
      seen.add(cleaned);
      return true;
    });
};

export function getPageEntries() {
  return buildStaticPageEntries((pathItem) => !pathItem.startsWith("/en") && !pathItem.startsWith("/ar"));
}

export function getEnPageEntries() {
  return buildStaticPageEntries((pathItem) => pathItem === "/en" || pathItem.startsWith("/en/"));
}

export function getArPageEntries() {
  return buildStaticPageEntries((pathItem) => pathItem === "/ar" || pathItem.startsWith("/ar/"));
}

export function getProjectEntries() {
  return (projects ?? [])
    .map((p) => ({
      path: clean(`/projeler/${encodeURIComponent(p.slug ?? "")}`),
      lastMod: p?.updatedAt ?? "2025-11-10T00:00:00+03:00",
      change: p?.changeFrequency ?? "monthly",
      pr: p?.priority ?? 0.8,
      images: (p?.images ?? []).map(abs),
    }))
    .filter(({ path }) => Boolean(path))
    .map(({ path, lastMod, change, pr, images }) => ({
      url: abs(path),
      lastMod: toDateOnly(lastMod),
      changeFrequency: change,
      priority: pr,
      images,
    }));
}

export function getBlogEntries() {
  const blogDir = path.join(process.cwd(), "app/(tr)/blog");

  if (!fs.existsSync(blogDir)) return [];

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory())
    .map((e) => {
      const slug = e.name;
      const pageJsxFile = path.join(blogDir, slug, "page.jsx");
      const pageJsFile = path.join(blogDir, slug, "page.js");
      const cleanedPath = clean(`/blog/${slug}`);

      if (!cleanedPath) return null;

      const fileRelativePath = fs.existsSync(pageJsxFile)
        ? `app/(tr)/blog/${slug}/page.jsx`
        : fs.existsSync(pageJsFile)
          ? `app/(tr)/blog/${slug}/page.js`
          : null;

      if (!fileRelativePath) return null;

      const lastMod = getLastModifiedForFile(
        fileRelativePath,
        BLOG_PUBLISHED_AT[slug] ?? "2025-11-01"
      );

      return {
        url: abs(cleanedPath),
        lastMod: toDateOnly(lastMod),
        changeFrequency: "weekly",
        priority: 0.85,
        images: [`${SITE}/img/blog/${slug}-hero.webp`],
        videos: BLOG_VIDEO_MAP[slug],
      };
    })
    .filter(Boolean);
}
