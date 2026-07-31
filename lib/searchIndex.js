import fs from "fs";
import path from "path";

import { services, projects } from "@/lib/data";
import { BLOG_POSTS } from "@/lib/blogPosts";
import { SEARCH_ROUTES } from "@/lib/searchRoutes";
import { GLOSSARY_TERMS } from "@/lib/glossary";

/**
 * Site ici arama indeksi.
 *
 * Kayit sozlesmesi:
 *   href        -> hedef URL (capa da olabilir: /sozluk#pixel-pitch)
 *   label       -> gorunen baslik
 *   description -> sonuc altinda gosterilen tek satirlik ozet
 *   type        -> lib/search/core.js icindeki SEARCH_TYPES anahtari
 *   keywords    -> etiket disi eslesme yuzeyi (es anlamlilar, musteri dili)
 *   icon        -> liste gorseli
 *
 * NOT: Blog basliklari daha once dizin adindan uretiliyordu; bu, Turkce
 * karakterleri dusurup "Led Ekran Kurulum Guvenligi" gibi bozuk basliklar
 * yaratiyordu. Artik lib/blogPosts.js icindeki gercek baslik ve aciklama
 * kullaniliyor.
 */

/** Aciklamalari liste gorunumunde tek satira sigacak sekilde kirpar. */
const clamp = (text, max = 150) => {
  const value = String(text ?? "").replace(/\s+/g, " ").trim();
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trimEnd()}…`;
};

const EN_SERVICE_ROUTES = [
  {
    href: "/en/concert-podium-rental",
    label: "Concert Podium Rental",
    description: "Main stage platforms, drum risers and FOH decks for concerts and festivals.",
    type: "hizmet",
    icon: "\u{1F3B5}",
    keywords: ["concert", "podium", "festival stage"],
  },
  {
    href: "/en/podium-rental-prices",
    label: "Podium Rental Prices",
    description: "Current per-square-metre podium rental pricing for events in Türkiye.",
    type: "hizmet",
    icon: "\u{1F4B0}",
    keywords: ["price", "podium", "cost"],
  },
  {
    href: "/en/runway-podium-rental",
    label: "Runway Podium Rental",
    description: "Straight, T and U shaped runway builds for fashion shows and launches.",
    type: "hizmet",
    icon: "\u{1F457}",
    keywords: ["runway", "fashion", "catwalk"],
  },
];

const TR_SERVICE_ROUTES = [
  {
    href: "/konser-icin-podyum-kiralama",
    label: "Konser İçin Podyum Kiralama",
    description: "Ana sahne platformu, davul riseri, yan sahne ve FOH alanı kurulumu.",
    type: "hizmet",
    icon: "\u{1F3B5}",
    keywords: ["konser", "podyum", "festival sahne"],
  },
  {
    href: "/podyum-kurulum-fiyatlari",
    label: "Podyum Kurulum Fiyatları",
    description: "m² başına podyum kiralama ve kurulum maliyetini belirleyen kalemler.",
    type: "hizmet",
    icon: "\u{1F4B0}",
    keywords: ["fiyat", "podyum", "kurulum", "maliyet", "ücret"],
  },
  {
    href: "/led-ekran-kiralama-fiyatlari",
    label: "LED Ekran Kiralama Fiyatları",
    description: "Standart ve P1.9 indoor LED ekran için m² bazlı güncel fiyat aralıkları.",
    type: "hizmet",
    icon: "\u{1F4B0}",
    keywords: ["fiyat", "led", "ekran", "p19", "m2", "ücret"],
  },
  {
    href: "/defile-podyum-kiralama",
    label: "Defile Podyum Kiralama",
    description: "Düz, T ve U tipi catwalk kurulumu; moda defilesi ve lansman sahnesi.",
    type: "hizmet",
    icon: "\u{1F457}",
    keywords: ["defile", "moda", "catwalk", "runway"],
  },
];

/** Hesaplama araclari ayri bir tip: kullanicinin niyeti "oku" degil "hesapla". */
const CALCULATOR_ROUTES = [
  {
    href: "/etkinlik-planlayici",
    label: "Etkinlik Planlayıcı",
    description:
      "Etkinlik türü, kişi sayısı ve mekâna göre gereken teknik kapsamı ve yaklaşık bütçeyi çıkarın.",
    type: "arac",
    icon: "🗂",
    keywords: [
      "planlayıcı", "planlama", "bütçe", "kapsam", "ne gerekir", "neye ihtiyacım var",
      "etkinlik bütçesi", "maliyet", "teklif hazırlığı",
    ],
  },
  {
    href: "/cadir-hesaplama",
    label: "Çadır Hesaplama Aracı",
    description: "Kişi sayısı ve oturma düzenine göre kaç m² çadır gerektiğini hesaplayın.",
    type: "arac",
    icon: "\u{1F9EE}",
    keywords: ["hesaplama", "çadır", "m2", "kaç kişi", "metrekare", "kapasite"],
  },
  {
    href: "/led-ekran-hesaplama",
    label: "LED Ekran Hesaplama Aracı",
    description: "Ekran ölçüsü, panel tipi ve gün sayısına göre yaklaşık bedeli hesaplayın.",
    type: "arac",
    icon: "\u{1F9EE}",
    keywords: ["hesaplama", "led", "ekran", "m2", "fiyat", "metrekare"],
  },
];

const getServiceRoutes = () =>
  (services ?? []).map((service) => ({
    href: `/${service.slug}`,
    label: service.title,
    description: clamp(service.excerpt || service.desc),
    type: "hizmet",
    icon: "\u{1F6E0}",
    // service.title, sayfanin gercek adindan farkli olabiliyor (or. /sahne-kiralama
    // icin data.js "Sahne Kurulumu" diyor). Etiket SEARCH_ROUTES'tan gelse bile bu
    // alternatif ad aranabilir kalsin diye anahtar kelimeye de yaziliyor.
    keywords: [...(service.keywords ?? []), service.title].filter(Boolean),
  }));

const getProjectRoutes = () =>
  (projects ?? []).map((project) => ({
    href: `/projeler/${project.slug}`,
    label: project.title,
    description: clamp(project.excerpt),
    type: "proje",
    icon: "\u{1F4BC}",
    keywords: [...(project.keywords ?? []), ...(project.tags ?? [])],
  }));

const getBlogRoutes = () =>
  (BLOG_POSTS ?? []).map((post) => ({
    href: `/blog/${post.slug}`,
    label: post.title,
    description: clamp(post.description),
    type: "rehber",
    icon: "\u{1F4DD}",
    keywords: [post.category, ...post.slug.split("-")].filter(Boolean),
  }));

const slugToTitle = (slug) =>
  slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

/**
 * EN blog icin yapilandirilmis bir veri kaynagi yok; dizin taramasi korunuyor.
 * Ingilizce slug'lar ASCII oldugu icin slug'dan uretilen baslik okunabilir
 * kaliyor (Turkce tarafta ayni yontem "Led Ekran Kurulum Guvenligi" uretiyordu,
 * o yuzden orada BLOG_POSTS kullaniliyor).
 */
const getEnBlogRoutes = () => {
  const dir = path.join(process.cwd(), "app", "en", "blog");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      href: `/en/blog/${entry.name}`,
      label: slugToTitle(entry.name),
      type: "rehber",
      icon: "\u{1F4DD}",
      keywords: entry.name.split("-"),
    }));
};

/**
 * Sozluk terimleri. En buyuk bosluk buydu: 83 terim sayfada vardi ama arama
 * indeksinde yoktu, yani "pixel pitch" aratan kullanici hicbir sonuc almiyordu.
 * Alternatif adlandirmalar (aliases) dogrudan keyword olarak beslenir; musteri
 * kendi dilini yazdiginda ("asma hoparlör") dogru terime ulasir.
 */
const getGlossaryRoutes = () =>
  (GLOSSARY_TERMS ?? []).map((term) => ({
    href: `/sozluk#${term.slug}`,
    label: term.term,
    description: clamp(term.definition),
    type: "terim",
    icon: "\u{1F4D6}",
    keywords: [...(term.aliases ?? []), ...term.slug.split("-")],
  }));

/**
 * Ayni href birden fazla kaynakta gecebilir: /podyum-kiralama hem SEARCH_ROUTES
 * icinde (elle yazilmis anahtar kelimelerle) hem services verisinde (aciklama ve
 * zengin anahtar kelimelerle) var.
 *
 * Onceki "ilk goreni al" davranisi bu durumda zengin kaydi tamamen dusuruyordu.
 * Burada birlestiriliyor: dolu alan bos alani ezmez, anahtar kelimeler birlesir.
 */
const mergeByHref = (items) => {
  const map = new Map();

  for (const item of items) {
    if (!item?.href) continue;

    const existing = map.get(item.href);
    if (!existing) {
      map.set(item.href, { ...item, keywords: [...(item.keywords ?? [])] });
      continue;
    }

    existing.label = existing.label || item.label;
    existing.description = existing.description || item.description;
    existing.type = existing.type || item.type;
    existing.icon = existing.icon || item.icon;
    existing.keywords = [
      ...new Set([...(existing.keywords ?? []), ...(item.keywords ?? [])]),
    ];
  }

  return Array.from(map.values()).map((entry) => ({
    ...entry,
    type: entry.type ?? "sayfa",
  }));
};

export function getSearchIndex() {
  // Sira ETIKETI belirler (ilk dolu deger kazanir); aciklama, tip ve anahtar
  // kelimeler sonraki kaynaklardan tamamlanir.
  //
  // SEARCH_ROUTES basta: elle kuratorlu ve sayfanin gercek adiyla ortusen
  // etiketleri o tasiyor. Ornegin /sahne-kiralama icin data.js "Sahne Kurulumu"
  // diyor, oysa sayfanin adi "Sahne Kiralama"; kullanici ikincisini ariyor.
  return mergeByHref([
    ...SEARCH_ROUTES,
    ...TR_SERVICE_ROUTES,
    ...EN_SERVICE_ROUTES,
    ...CALCULATOR_ROUTES,
    ...getServiceRoutes(),
    ...getGlossaryRoutes(),
    ...getBlogRoutes(),
    ...getEnBlogRoutes(),
    ...getProjectRoutes(),
  ]);
}
