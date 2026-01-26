// app/sitemap.js
import { services, projects } from "@/lib/data";
import fs from "fs";
import path from "path";

const SITE = "https://www.sahneva.com";
const abs = (p) => (p?.startsWith("http") ? p : `${SITE}${p}`);
const NOW_ISO = new Date().toISOString();

const REJECT_PATTERNS = [
  /^\/_next\//,
  /^\/api\//,
  /^\/?[$&]$/,
  /^\/search/i,
];

function clean(pathStr) {
  if (!pathStr) return null;
  let p = String(pathStr).trim();

  let parsedPath = p;
  try {
    const u = new URL(p, SITE);
    parsedPath = u.pathname;
  } catch {
    parsedPath = p;
  }

  p = parsedPath;

  if (!p.startsWith("/")) p = `/${p}`;

  if (p.includes("{") || p.includes("}")) return null;

  if (REJECT_PATTERNS.some((rx) => rx.test(p))) return null;

  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  return p;
}

// --- STATIC PAGES ---
const STATIC_PAGES = [
  "/",
  "/hizmetler",
  "/podyum-kiralama",
  "/led-ekran-kiralama",
  "/ses-isik-sistemleri",
  "/cadir-kiralama",
  "/masa-sandalye-kiralama",
  "/sahne-kiralama",
  "/truss-kiralama",
  "/kurumsal-organizasyon",
  "/bolgesel-kiralama",
  "/nasil-calisiyoruz",
  "/hakkimizda",
  "/iletisim",
  "/sss",
  "/kvkk",
  "/gizlilik-politikasi",
  "/projeler",
  "/blog",
  "/en",
  "/en/about",
  "/en/services",
  "/en/projects",
  "/en/contact",
  "/en/led-screen-rental",
  "/en/stage-rental",
  "/en/sound-light-rental",
  "/en/table-chair-rental",
  "/en/tent-rental",
  "/en/faq",
  "/ar",
  "/ar/services",
  "/ar/projects",
  "/ar/contact",
].map((p) => ({
  path: p,
  lastMod: NOW_ISO,
  change: (() => {
    if (
      [
        "/hakkimizda",
        "/iletisim",
        "/kvkk",
        "/gizlilik-politikasi",
        "/nasil-calisiyoruz",
        "/en/about",
        "/en/contact",
        "/ar/contact",
      ].includes(p)
    ) {
      return "yearly";
    }
    if (["/sss", "/en/faq"].includes(p)) return "monthly";
    return "weekly";
  })(),
  pr: p === "/" ? 1.0 : 0.9,
}));

// --- IMAGE MAP ---
const IMAGE_MAP = {
  "/": ["/img/hero-bg.webp"],
  "/podyum-kiralama": [
    "/img/hizmet-podyum.webp",
    "/img/galeri/podyum-kiralama-1.webp",
  ],
  "/led-ekran-kiralama": [
    "/img/hizmet-led-ekran.webp",
    "/img/galeri/led-ekran-kiralama-1.webp",
  ],
  "/cadir-kiralama": [
    "/img/hizmet-cadir.webp",
    "/img/galeri/cadir-kiralama-1.webp",
  ],
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

// --- SERVICES ---
function dynamicFromServices() {
  const seen = new Set(STATIC_PAGES.map((s) => s.path));
  return (services ?? [])
    .map((s) => clean(`/${encodeURIComponent(s.slug ?? "")}`))
    .filter(Boolean)
    .filter((p) => !seen.has(p))
    .map((p) => ({
      path: p,
      lastMod: NOW_ISO,
      change: "weekly",
      pr: 0.9,
    }));
}

// --- PROJECTS ---
function dynamicFromProjects() {
  return (projects ?? [])
    .map((p) => ({
      path: clean(`/projeler/${encodeURIComponent(p.slug ?? "")}`),
      lastMod: p?.updatedAt ?? NOW_ISO,
      change: p?.changeFrequency ?? "monthly",
      pr: p?.priority ?? 0.8,
      images: (p?.images ?? []).map(abs),
    }))
    .filter(({ path }) => Boolean(path));
}

// --- BLOG (YENİ) ---
function dynamicFromBlog() {
  const blogDir = path.join(process.cwd(), "app/(tr)/blog");

  if (!fs.existsSync(blogDir)) return [];

  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  return entries
    .filter((e) => e.isDirectory())
    .map((e) => {
      const slug = e.name;
      const pageFile = path.join(blogDir, slug, "page.jsx");

      let lastMod = NOW_ISO;
      try {
        const stats = fs.statSync(pageFile);
        lastMod = stats.mtime.toISOString();
      } catch {
        lastMod = NOW_ISO;
      }

      return {
        path: clean(`/blog/${slug}`),
        lastMod,
        change: "weekly",
        pr: 0.85,
        images: [`${SITE}/img/blog/${slug}-hero.webp`],
        videos: BLOG_VIDEO_MAP[slug],
      };
    })
    .filter(({ path }) => Boolean(path));
}

// --- EXPORT ---
export default function sitemap() {
  const base = [...STATIC_PAGES, ...dynamicFromServices()];

  const uniq = new Map();
  for (const item of base) {
    const path = clean(item.path);
    if (!path) continue;
    if (!uniq.has(path)) uniq.set(path, item);
  }

  const baseWithImages = [...uniq.values()].map(({ path, lastMod, change, pr }) => ({
    url: abs(path),
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
    images: (IMAGE_MAP[path] ?? []).map(abs),
  }));

  const projectItems = dynamicFromProjects().map(({ path, lastMod, change, pr, images }) => ({
    url: abs(path),
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
    images,
  }));

  const blogItems = dynamicFromBlog().map(({ path, lastMod, change, pr, images, videos }) => ({
    url: abs(path),
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
    images,
    videos,
  }));

  return [...baseWithImages, ...projectItems, ...blogItems];
}
