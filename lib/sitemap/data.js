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
  "/defile-podyum-kiralama": { lastMod: "2026-03-02T00:00:00+03:00", change: "weekly", pr: 0.9 },
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
  "/": [{ loc: "/img/hero-bg.webp", title: "Sahneva – Etkinlik Ekipman Kiralama", caption: "Sahne, podyum, LED ekran ve çadır kiralama hizmetleriyle etkinliklerinizi taçlandırıyoruz." }],
  "/podyum-kiralama": [
    { loc: "/img/hizmet-podyum.webp", title: "Podyum Kiralama Hizmeti", caption: "Modüler podyum sistemleri ile güvenli ve hızlı kurulum." },
    { loc: "/img/galeri/podyum-kiralama-1.webp", title: "Podyum Kiralama – Örnek Kurulum", caption: "Farklı ebat ve yükseklik seçenekleriyle etkinliğinize uygun podyum çözümleri." },
  ],
  "/led-ekran-kiralama": [
    { loc: "/img/hizmet-led-ekran.webp", title: "LED Ekran Kiralama Hizmeti", caption: "P2–P6 seçenekleri, iç ve dış mekân etkinliklerine uygun LED ekran çözümleri." },
    { loc: "/img/galeri/led-ekran-kiralama-1.webp", title: "LED Ekran Kiralama – Örnek Uygulama", caption: "Farklı çözünürlük seçenekleriyle etkinliğinize uygun LED ekran kurulumu." },
  ],
  "/cadir-kiralama": [
    { loc: "/img/hizmet-cadir.webp", title: "Çadır Kiralama Hizmeti", caption: "Endüstriyel ve dekoratif çadır sistemleriyle açık alan etkinlikleri için güvenli çözümler." },
    { loc: "/img/galeri/cadir-kiralama-1.webp", title: "Çadır Kiralama – Örnek Kurulum", caption: "Büyük kapasiteli çadır kiralama ve hızlı montaj hizmeti." },
  ],
  "/sahne-kiralama": [{ loc: "/img/hizmet-sahne.webp", title: "Sahne Kiralama Hizmeti", caption: "Profesyonel sahne kurulumu, taşıyıcı sistem ve teknik ekip desteğiyle etkinliklerinize hazırız." }],
  "/ses-isik-sistemleri": [{ loc: "/img/hizmet-sesisik.webp", title: "Ses ve Işık Sistemleri Kiralama", caption: "Hat dizisi hoparlörler, dijital mikserler ve sahne aydınlatma ekipmanları." }],
  "/masa-sandalye-kiralama": [{ loc: "/img/hizmet-masa.webp", title: "Masa ve Sandalye Kiralama", caption: "Etkinlikleriniz için toplu masa ve sandalye kiralama çözümleri." }],
  "/hizmetler": [{ loc: "/img/hizmetler-ust.webp", title: "Sahneva Etkinlik Hizmetleri", caption: "Sahne, podyum, LED ekran, ses-ışık, çadır ve masa-sandalye kiralama." }],
  "/hakkimizda": [{ loc: "/img/hakkimizda.webp", title: "Sahneva Hakkında", caption: "Profesyonel etkinlik ekipman kiralama ve sahne prodüksiyon hizmetleri sunan Sahneva ekibi." }],
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


const BLOG_IMAGE_META = {
  "12-eglenceli-kurumsal-etkinlik-fikri": { title: "12 Eğlenceli Kurumsal Etkinlik Fikri (2026 Güncel)", caption: "Kurumsal etkinliklerinizi renklendirmek için yaratıcı ve katılımcı etkinlik fikirleri." },
  "etkinlige-gore-podyum-tercihi": { title: "Etkinliğe Göre Podyum Tercihi", caption: "Farklı etkinlik türleri için doğru podyum yüksekliği ve genişliği nasıl seçilir." },
  "etkinlik-teknik-kesif-ve-planlama-rehberi": { title: "Etkinlik Teknik Keşif ve Planlama Rehberi", caption: "Kurulum öncesi teknik keşif süreci ve doğru ekipman planlaması." },
  "fisekhane-pubg-guinness-rekoru": { title: "Fişekhane'de PUBG Mobile Guinness Dünya Rekoru™", caption: "Sahneva'nın teknik destek verdiği tarihi PUBG Mobile Guinness Dünya Rekoru etkinliği." },
  "kurumsal-etkinlik-planlama-rehberi-2026": { title: "2026 Kurumsal Etkinlik Planlama Rehberi", caption: "Kurumsal etkinlik planlama sürecinin tüm adımları ve teknik ekipman seçimi." },
  "kurumsal-etkinlik-yonetimi": { title: "Kurumsal Etkinlik Yönetimi ve Teknik Kiralama Rehberi", caption: "Lansman ve bayi toplantısı gibi kurumsal organizasyonlar için eksiksiz teknik rehber." },
  "kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping": { title: "Dome Çadır + 360° Mapping ile Geleceğin Lansmanları", caption: "Pnomatik dome çadır yapılarında 360° projeksiyon mapping uygulamaları." },
  "led-ekran-teknoloji-trendleri-2026": { title: "2026 LED Ekran Teknolojisi Trendleri", caption: "LED ekran çözünürlükleri, piksel aralığı ve etkinlik tasarımında öne çıkan trendler." },
  "milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi": { title: "Milli Uzay Programı Lansmanı (2021) – Mühendislik Refleksi", caption: "2021 Milli Uzay Programı lansmanında Sahneva'nın sahne ve LED ekran kurulum süreci." },
  "mezuniyet-organizasyonlari-2026-istanbul-rehberi": { title: "Mezuniyet Organizasyonları 2026 Rehberi", caption: "İstanbul'da mezuniyet töreni için sahne, podyum ve ses-ışık sistemi kiralama rehberi." },
  "neden-podyum-sahne-tercih-edilir": { title: "Neden Podyum Sahne Tercih Edilir?", caption: "Podyum ve sahne kullanımının etkinlik başarısına katkısı ve tercih nedenleri." },
  "organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026": { title: "2026 Çadır Kiralama Rehberi: Organizasyon İçin Seçenekler", caption: "Etkinlik türüne göre en uygun çadır sistemi seçimi ve kiralama önerileri." },
  "pmgc-dunya-finali-sahne-arkasi": { title: "PMGC Dünya Finali Sahne Arkası", caption: "7 günlük PMGC Dünya Finali kurulumunun sahne arkası ve teknik detaylar." },
  "sahne-kiralama-fiyatlari-neye-gore-belirlenir": { title: "Sahne Kiralama Fiyatları Neye Göre Belirlenir?", caption: "Sahne kiralama maliyetini etkileyen faktörler: boyut, malzeme, kurulum ve ekip." },
  "sahne-neden-hep-yuksektir-2500-yillik-bir-sir": { title: "Sahne Neden Hep Yüksektir? 2500 Yıllık Bir Sır", caption: "Antik tiyatrolardan günümüz sahne tasarımına yüksekliğin önemi ve etkisi." },
  "ses-sistemlerinde-2026-yenilikleri-trendler": { title: "Ses Sistemlerinde 2026 Yenilikleri: Mikrofon ve Line Array", caption: "2026 yılında ses teknolojisindeki gelişmeler, line array sistemleri ve dijital ses ekipmanları." },
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
      images: (IMAGE_MAP[entry.path] ?? []).map((img) =>
        typeof img === "string" ? { loc: abs(img) } : { ...img, loc: abs(img.loc) }
      ),
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
      images: (p?.images ?? []).map((img) =>
        typeof img === "string"
          ? { loc: abs(img), title: p.title ?? undefined }
          : { ...img, loc: abs(img.loc) }
      ),
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
        images: [{ loc: `${SITE}/img/blog/${slug}-hero.webp`, ...(BLOG_IMAGE_META[slug] ?? {}) }],
        videos: BLOG_VIDEO_MAP[slug],
      };
    })
    .filter(Boolean);
}
