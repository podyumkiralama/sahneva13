// app/(tr)/cadir-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoEmbed from "@/components/VideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { WEBSITE_ID } from "@/lib/seo/schemaIds";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { 
  Monitor, 
  Shield, 
  Zap, 
  MessageCircle, 
  CheckCircle, 
  Eye, 
  Truck, 
  Layers, 
  Users, 
  Music 
} from "lucide-react";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+Ã§adÄ±r+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5BdÃ¼ÄŸÃ¼n%2Ffuar%2Fkonser%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder (LCP hero iÃ§in)
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galeri yÃ¼kleniyor"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Galeri yÃ¼kleniyor...</span>
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title: "Ã‡adÄ±r Kiralama | Profesyonel Etkinlik Ã‡Ã¶zÃ¼mleri",
  description:
    "Pagoda, ÅŸeffaf dome, endÃ¼striyel Ã§adÄ±r kiralama. Zemin kaplama, aydÄ±nlatma ve profesyonel kurulum. TÃ¼rkiye geneli hÄ±zlÄ± hizmet.",
  alternates: {
    canonical: `${ORIGIN}/cadir-kiralama`,
    languages: {
      "tr-TR": `${ORIGIN}/cadir-kiralama`,
      "en": `${ORIGIN}/en/tent-rental`,
      "x-default": `${ORIGIN}/en/tent-rental`,
    },
  },
  openGraph: {
    title: "Ã‡adÄ±r Kiralama | Sahneva",
    description:
      "Pagoda, ÅŸeffaf ve endÃ¼striyel Ã§adÄ±r Ã§Ã¶zÃ¼mleri. TÃ¼rkiye geneli profesyonel kurulum ve tamamlayÄ±cÄ± hizmetler.",
    url: `${ORIGIN}/cadir-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/cadir/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon Ã§adÄ±r kiralama â€“ pagoda, ÅŸeffaf dome ve endÃ¼striyel Ã§adÄ±r Ã§Ã¶zÃ¼mleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ã‡adÄ±r Kiralama | Profesyonel Etkinlik Ã‡Ã¶zÃ¼mleri | Sahneva",
    description:
      "Pagoda, ÅŸeffaf dome, endÃ¼striyel Ã§adÄ±r kiralama. Zemin kaplama, aydÄ±nlatma ve profesyonel kurulum.",
    images: [`${ORIGIN}/img/cadir/hero.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function Head() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/img/cadir/hero.webp"
        fetchPriority="high"
        type="image/webp"
        imageSizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px"
      />
    </>
  );
}

/* ================== YardÄ±mcÄ±lar & Sabitler ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9Ã§ÄŸÄ±Ã¶ÅŸÃ¼\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/cadir/hero.webp",
  alt: "Profesyonel Ã§adÄ±r kurulumu - Pagoda Ã§adÄ±r ve etkinlik alanÄ± dÃ¼zenlemesi",
  sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1200px",
};

const TURNKEY_FEATURES = [
  "Zemin tipine uygun profesyonel ankraj ve sabitleme Ã§Ã¶zÃ¼mleri",
  "EndÃ¼striyel iklimlendirme (klima/Ä±sÄ±tÄ±cÄ±) ve hava yÃ¶netimi",
  "Proje bazlÄ± zemin kaplama, internet ve enerji altyapÄ±sÄ±",
  "UÃ§tan uca saha yÃ¶netimi ve gÃ¼venli operasyon koordinasyonu",
];

const VIDEO_EMBEDS = [
  {
    videoId: "tyb1lG9KtiA",
    title: "Kurulum Videosu â€¢ 00:10",
    uploadDate: "2025-11-17T00:00:00+03:00",
    description:
      "GÃ¼venli sabitleme, doÄŸru ekipman ve deneyimli ekip ile hÄ±zlÄ± ve kontrollÃ¼ kurulum.",
  },
  {
    videoId: "_9Q7v0ZL304",
    title: "Teknofest Ã‡adÄ±r Ä°Ã§ GÃ¶rÃ¼nÃ¼m â€¢ Sahne & Teknik Kurulum",
    uploadDate: "2025-11-17T00:00:00+03:00",
    description:
      "Teknofestâ€™te kurduÄŸumuz Ã§adÄ±rÄ±n iÃ§ gÃ¶rÃ¼nÃ¼mÃ¼, sahne, LED ekran, ses ve Ä±ÅŸÄ±k detaylarÄ±.",
  },
];

const GALLERY_IMAGES = [
  { src: "/img/cadir/1.webp", alt: "Pagoda Ã§adÄ±r kurulumu - DÃ¼ÄŸÃ¼n etkinliÄŸi iÃ§in profesyonel Ã§adÄ±r dÃ¼zeni" },
  { src: "/img/cadir/2.webp", alt: "Åeffaf dome Ã§adÄ±r - Ã–zel davetler iÃ§in atmosfer" },
  { src: "/img/cadir/3.webp", alt: "EndÃ¼striyel Ã§adÄ±r kurulumu - Depolama ve Ã¼retim alanÄ± Ã§Ã¶zÃ¼mÃ¼" },
  { src: "/img/cadir/4.webp", alt: "Fuar Ã§adÄ±rÄ± - Profesyonel sergi ve tanÄ±tÄ±m alanÄ±" },
  { src: "/img/cadir/5.webp", alt: "AydÄ±nlatmalÄ± Ã§adÄ±r - Gece etkinlikleri iÃ§in LED aydÄ±nlatma" },
  { src: "/img/cadir/6.webp", alt: "Konser Ã§adÄ±rÄ± - AÃ§Ä±k hava etkinliÄŸi iÃ§in Ã§adÄ±r Ã§Ã¶zÃ¼mÃ¼" },
  { src: "/img/cadir/7.webp", alt: "Kurulum ekibi - Profesyonel Ã§adÄ±r kurulum sÃ¼reci" },
  { src: "/img/cadir/8.webp", alt: "Markalama - Kurumsal etkinlikler iÃ§in Ã§Ã¶zÃ¼mler" },
  { src: "/img/cadir/9.webp", alt: "Ã‡adÄ±r iÃ§ dÃ¼zeni - Kurumsal etkinlik planÄ±" },
  { src: "/img/cadir/10.webp", alt: "GeniÅŸ aÃ§Ä±klÄ±klÄ± Ã§adÄ±r - Etkinlik alanÄ± dÃ¼zeni" },
  { src: "/img/cadir/11.webp", alt: "Dekorasyon ve aydÄ±nlatma - Ã–zel etkinlik atmosferi" },
  { src: "/img/cadir/12.webp", alt: "Ã‡adÄ±r kurulum detayÄ± - Profesyonel uygulama" },
];

const FAQ_ITEMS = [
  {
    q: "Ã‡adÄ±r kiralama fiyatlarÄ± ne kadar?",
    a: "2026 fiyatlarÄ±mÄ±z: 5Ã—5 Ã§adÄ±r 9.000 TL + nakliye, 4Ã—4 Ã§adÄ±r 8.000 TL + nakliye, 3Ã—3 Ã§adÄ±r 7.000 TL + nakliye. 10â€™luk, 20â€™lik, 30â€™luk ve 40â€™lÄ±k bÃ¼yÃ¼k Ã¶lÃ§ekli Ã§adÄ±rlarda metrekare fiyatÄ± 430 TLâ€™dir.",
  },
  {
    q: "Ã‡adÄ±r kurulumu ne kadar sÃ¼rer?",
    a: "5Ã—5 metre Ã§adÄ±r kurulumu genellikle 2-3 saat, 6Ã—6 metre Ã§adÄ±r kurulumu ise 3-4 saat sÃ¼rmektedir. BÃ¼yÃ¼k Ã¶lÃ§ekli projelerde kurulum 1 gÃ¼n Ã¶nceden tamamlanÄ±r. Acil durumlarda express kurulum hizmeti sunuyoruz.",
  },
  {
    q: "Ã‡adÄ±rlar kÃ¶tÃ¼ hava koÅŸullarÄ±na dayanÄ±klÄ± mÄ±?",
    a: "Evet, Ã§adÄ±rlarÄ±mÄ±z 90 km/s rÃ¼zgar hÄ±zÄ±na dayanÄ±klÄ±dÄ±r. TS EN 13782 standartlarÄ±na uygun Ã¼retilmiÅŸ alÃ¼minyum iskelet ve 650 gr/mÂ² UV dayanÄ±mlÄ± branda kullanÄ±yoruz. YaÄŸmur oluÄŸu sistemi ile su tahliyesi sorunsuz ÅŸekilde saÄŸlanÄ±r.",
  },
  {
    q: "KadÄ±kÃ¶y, ÅiÅŸli, BeÅŸiktaÅŸ gibi merkezi yerlerde acil Ã§adÄ±r kurulumu yapÄ±yor musunuz?",
    a: "Evet. Ä°stanbul Avrupa ve Anadolu yakalarÄ±ndaki depolarÄ±mÄ±z sayesinde merkezi ilÃ§elere trafiÄŸe takÄ±lmadan, aynÄ± gÃ¼n veya saatler iÃ§inde ulaÅŸÄ±p hÄ±zlÄ± kurulum saÄŸlayabiliyoruz.",
  },
  {
    q: "Kocaeli, Bursa, TekirdaÄŸ gibi Ã§evre illere kiralama ve nakliye sÃ¼reÃ§leri nasÄ±l iÅŸliyor?",
    a: "Marmara BÃ¶lgesi ve Ã§evre illere kendi lojistik aÄŸÄ±mÄ±zla hizmet veriyoruz. UzaklÄ±k bazlÄ± nakliye maliyetini ilk teklifte ÅŸeffaf olarak iletiyor, konaklama veya sÃ¼rpriz masraf Ã§Ä±karmadan anahtar teslim kurulum yapÄ±yoruz."
  }
];

const PRICING_ITEMS = [
  {
    title: "5x5 Ã‡adÄ±r",
    price: "9.000 TL",
    description: "Etkinlik ve davetler iÃ§in 25 mÂ² pagoda Ã§adÄ±r paketi.",
  },
  {
    title: "4x4 Ã‡adÄ±r",
    price: "8.000 TL",
    description: "Orta Ã¶lÃ§ekli kurulumlar iÃ§in 16 mÂ² Ã§adÄ±r Ã§Ã¶zÃ¼mÃ¼.",
  },
  {
    title: "3x3 Ã‡adÄ±r",
    price: "7.000 TL",
    description: "Kompakt alanlar iÃ§in 9 mÂ² hÄ±zlÄ± kurulum Ã§adÄ±rÄ±.",
  },
  {
    title: "BÃ¼yÃ¼k Ã‡adÄ±rlar",
    price: "430 TL / mÂ²",
    description:
      "10m, 20m, 30m, 40m geniÅŸlik seÃ§enekleri. BÃ¼yÃ¼k Ã¶lÃ§ekli etkinlikler iÃ§indir.",
  },
];

const STANDARDS = [
  {
    feature: "RÃ¼zgar DayanÄ±mÄ±",
    standard: "90 km/s (TS EN 13782 SertifikalÄ±)",
  },
  {
    feature: "Branda Kalitesi",
    standard: "650 gr/mÂ² UV korumalÄ±, B1 alev yÃ¼rÃ¼mez",
  },
  {
    feature: "Kurulum SÃ¼resi",
    standard: "2 - 8 saat (Express Kurulum SeÃ§eneÄŸi ile)",
  },
  {
    feature: "Ekstra DonanÄ±m",
    standard: "Ä°klimlendirme, akustik Ã§Ã¶zÃ¼m, LED entegrasyonu",
  },
];

const CHALLENGES = [
  {
    title: "Ä°klimlendirme ve HavalandÄ±rma",
    description:
      "AÃ§Ä±k alandaki zorlu hava ÅŸartlarÄ±na karÅŸÄ±, Ã§adÄ±r iÃ§ini dev salon tipi klimalar veya endÃ¼striyel Ä±sÄ±tÄ±cÄ±larla tamamen izole ediyoruz.",
  },
  {
    title: "GÃ¼venli Zemin ve Ankraj",
    description:
      "Ã‡im, toprak veya beton zemin fark etmeksizin, alana zarar vermeyen profesyonel Ã§elik aÄŸÄ±rlÄ±klar veya zemin Ã§ivileriyle sÄ±fÄ±r riskli sabitleme yapÄ±yoruz.",
  },
];

const INSTALLATION_STEPS = [
  { title: "KeÅŸif", description: "Lazer Ã¶lÃ§Ã¼mleme ve zemin analizi." },
  {
    title: "Projelendirme",
    description: "Ä°htiyaca uygun Ã§adÄ±r tipi, ankraj ve yerleÅŸim planÄ±.",
  },
  {
    title: "HÄ±zlÄ± Montaj",
    description: "BoÅŸ bir alandan gÃ¼venli, iklimlendirmeli etkinlik alanÄ±na dÃ¶nÃ¼ÅŸÃ¼m.",
  },
  {
    title: "Teknik Destek",
    description: "Etkinlik boyunca sahada gÃ¼venliÄŸi saÄŸlayan uzman ekip.",
  },
];

const SERVICES = [
  {
    icon: "ğŸ•ï¸",
    title: "Pagoda Ã‡adÄ±r Sistemleri",
    description:
      "5Ã—5m ve 6Ã—6m modÃ¼ler sistemler ile estetik ve fonksiyonel Ã§Ã¶zÃ¼mler",
    features: ["YÃ¼ksek tepe noktasÄ±", "ModÃ¼ler birleÅŸim", "Yan branda opsiyonu", "HÄ±zlÄ± kurulum"],
  },
  {
    icon: "ğŸ”®",
    title: "Åeffaf Dome Ã‡adÄ±rlar",
    description: "DoÄŸa manzaralÄ±, gece aydÄ±nlatmasÄ±na uygun ÅŸeffaf Ã§adÄ±r sistemleri",
    features: ["Weather-proof yapÄ±", "Tamamen ÅŸeffaf yÃ¼zey", "Davet organizasyonlarÄ±", "Estetik aydÄ±nlatma"],
  },
  {
    icon: "ğŸ­",
    title: "EndÃ¼striyel Ã‡adÄ±rlar",
    description: "GeniÅŸ aÃ§Ä±klÄ±klÄ±, kolonsuz depolama ve Ã¼retim alanÄ± Ã§Ã¶zÃ¼mleri",
    features: ["Kolonsuz dev alan", "Uzun sÃ¼reli kullanÄ±m", "AÄŸÄ±r hava ÅŸartlarÄ±na direnÃ§", "Depo / Fabrika eki"],
  },
  {
    icon: "ğŸª",
    title: "Fuar & Sergi Ã‡adÄ±rlarÄ±",
    description: "Profesyonel fuar ve sergi alanlarÄ± iÃ§in optimize edilmiÅŸ dev sistemler",
    features: ["Stand uyumu", "GeniÅŸ yÃ¼rÃ¼yÃ¼ÅŸ yollarÄ±", "Profesyonel gÃ¶rÃ¼nÃ¼m", "Ä°klimlendirme"],
  },
  {
    icon: "ğŸ’¡",
    title: "AydÄ±nlatma & Ä°klimlendirme",
    description: "Ã‡adÄ±r iÃ§i aydÄ±nlatma, Ä±sÄ±tma/soÄŸutma ve elektrik altyapÄ± Ã§Ã¶zÃ¼mleri",
    features: ["Salon tipi klima", "EndÃ¼striyel Ä±sÄ±tÄ±cÄ±", "LED & Truss aydÄ±nlatma", "GÃ¼Ã§ daÄŸÄ±tÄ±mÄ±"],
  },
  {
    icon: "ğŸ”§",
    title: "Kurulum & Zemin Kaplama",
    description: "Zemin eÅŸitleme, podyum, halÄ± kaplama ve gÃ¼venli sÃ¶kÃ¼m hizmetleri",
    features: ["Podyum zemin", "Protokol halÄ±sÄ±", "SÃ¶kÃ¼m hizmeti", "7/24 destek"],
  },
];

const USE_CASES = [
  { icon: "ğŸ’", text: "DÃ¼ÄŸÃ¼n, kÄ±na ve Ã¶zel davetler", desc: "Ã–zel gÃ¼nler iÃ§in ÅŸÄ±k ve ÅŸeffaf Ã§adÄ±r Ã§Ã¶zÃ¼mleri" },
  { icon: "ğŸª", text: "Fuar, sergi ve lansmanlar", desc: "MarkanÄ±zÄ± Ã¶ne Ã§Ä±karan geniÅŸ aÃ§Ä±klÄ±klÄ± tanÄ±tÄ±m alanlarÄ±" },
  { icon: "ğŸ¤", text: "Konser, festival ve etkinlikler", desc: "Kulis, saÄŸlÄ±k ve operasyon Ã§adÄ±r Ã§Ã¶zÃ¼mleri" },
  { icon: "ğŸ›ï¸", text: "Belediye ve kurumsal etkinlikler", desc: "Miting, iftar ve tÃ¶renler iÃ§in gÃ¼venli protokol alanlarÄ±" },
  { icon: "ğŸ­", text: "EndÃ¼striyel ve depolama", desc: "Fabrikalar iÃ§in geÃ§ici kolonsuz Ã¼retim ve depo Ã§adÄ±rlarÄ±" },
  { icon: "ğŸ«", text: "Okul ve eÄŸitim etkinlikleri", desc: "Mezuniyet, bahar ÅŸenliÄŸi ve kermesler iÃ§in Ã§Ã¶zÃ¼mler" },
];


/* ================== HERO ================== */
function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-20 pb-14 md:pb-16 lg:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          loading="eager"
          fetchPriority="high"
          className="object-cover"
          sizes={HERO.sizes}
          quality={85}
          blurDataURL={BLUR_DATA_URL}
          placeholder="blur"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white py-12">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
          </span>
          <span className="text-sm font-bold text-white">
            TÃ¼rkiye Geneli Profesyonel Hizmet
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-2xl"
        >
          Profesyonel{" "}
          <span className="gradient-text gradient-text--safe-xl">
            Ã‡adÄ±r Kiralama
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
          DÃ¼ÄŸÃ¼n â€¢ Fuar â€¢ Festival â€¢ Lansman â€¢ Depolama â€¢ Ã–zel Etkinlikler
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-6">
          Pagoda Ã§adÄ±rlar, ÅŸeffaf sistemler ve dev endÃ¼striyel Ã§adÄ±rlar ile
          <span className="font-semibold text-white"> anahtar teslim Ã§Ã¶zÃ¼mler</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Ã¼zerinden hemen teklif alÄ±n"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400 shadow-lg"
          >
            <span aria-hidden="true" className="text-xl mr-2">ğŸ’¬</span>
            <span className="text-base">Hemen Teklif Al</span>
          </Link>

          <Link
            href="#hizmetler"
            aria-label="Hizmetlerimiz hakkÄ±nda daha fazla bilgi edinin"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white/95 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white shadow-lg"
          >
            <span aria-hidden="true" className="text-xl mr-2">ğŸ¯</span>
            <span className="text-base">Hizmetlerimiz</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">â­</span>
            <div className="text-xl font-black text-white">4.9/5</div>
            <div className="text-white/80 text-sm">DoÄŸrulanmÄ±ÅŸ Puan</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">ğŸ†</span>
            <div className="text-xl font-black text-white">700+</div>
            <div className="text-white/80 text-sm">BaÅŸarÄ±lÄ± Proje</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">ğŸš€</span>
            <div className="text-xl font-black text-white">81 Ä°l</div>
            <div className="text-white/80 text-sm">Lojistik AÄŸÄ±</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Anahtar Teslim AltyapÄ± ================== */
function TurnkeyInfrastructure() {
  return (
    <section
      className="py-16 bg-white nc-CadirKiralamaPage-section-0"
      aria-labelledby="anahtar-teslim-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border border-blue-100 p-8 md:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
                Anahtar Teslim Operasyon GÃ¼cÃ¼
              </p>
              <h2
                id="anahtar-teslim-baslik"
                className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
              >
                â€œSÄ±fÄ±rdan Kurulumâ€ OdaklÄ± Anahtar Teslim Ã‡adÄ±r AltyapÄ±sÄ±
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sadece Ã§adÄ±r kiralama deÄŸil; iklimlendirme, zemin kaplama ve enerji sistemleriyle
                <strong className="text-gray-900"> uÃ§tan uca saha yÃ¶netimi </strong> sunuyoruz.
              </p>
              <ul className="space-y-3 text-gray-700">
                {TURNKEY_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl border border-blue-100 p-6 shadow-md w-full lg:max-w-xs">
              <h3 className="text-xl font-black text-gray-900 mb-4">
                Operasyonel GÃ¼Ã§ Paketi
              </h3>
              <div className="space-y-3 text-gray-600 text-base">
                <p>ğŸ”§ Saha keÅŸfi ve zemin analizi</p>
                <p>âš¡ Enerji sÃ¼rekliliÄŸi ve gÃ¼venlik</p>
                <p>ğŸ—ï¸ Podyum ve Zemin Kaplama</p>
                <p>ğŸŒ¡ï¸ EndÃ¼striyel iklimlendirme</p>
              </div>
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-bold text-white hover:scale-105 transition-transform duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
              >
                Operasyon PlanÄ± Ä°steyin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section
      id="hizmetler"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50 nc-CadirKiralamaPage-section-1"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Profesyonel{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ã‡adÄ±r kiralama hizmetlerimiz: keÅŸif, projelendirme, kurulum, iklimlendirme ve teknik destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <div key={id} className="group">
                <article
                  className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group-hover:scale-105 transition-all duration-500 h-full flex flex-col"
                  aria-labelledby={id}
                >
                  <div
                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3
                    id={id}
                    className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
          >
            <span aria-hidden="true" className="text-xl mr-3">ğŸ“</span>
            <span>DetaylÄ± Teklif iÃ§in Ä°letiÅŸime GeÃ§in</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== GeliÅŸtirilmiÅŸ Galeri ================== */
function Gallery() {
  const SUCCESS_STORIES = [
    {
      title: "Devasa KapalÄ± Alan: Teknofest Fuar Ã‡adÄ±rÄ±",
      category: "Kurumsal & Fuar EtkinliÄŸi",
      transformation: "RÃ¼zgarlÄ± aÃ§Ä±k alan, binlerce ziyaretÃ§iyi aÄŸÄ±rlayacak gÃ¼venli bir teknoloji Ã¼ssÃ¼ne dÃ¶nÃ¼ÅŸtÃ¼.",
      before: "AÃ§Ä±k fuar alanÄ±nda rÃ¼zgar ve hava ÅŸartlarÄ±na dayanÄ±klÄ±, devasa ve kolonsuz bir kapalÄ± alana ihtiyaÃ§ duyulmasÄ±.",
      after: "10-20 metre geniÅŸ aÃ§Ä±klÄ±klÄ± endÃ¼striyel tip Ã§adÄ±rlar, tonlarca beton aÄŸÄ±rlÄ±kla ankre edilerek kusursuz bir ÅŸekilde kuruldu.",
      result: "ZiyaretÃ§iler olumsuz hava ÅŸartlarÄ±ndan etkilenmeden konforla fuarÄ± gezdi, projeye %100 operasyonel gÃ¼vence saÄŸlandÄ±.",
      quote: "BÃ¶ylesine zorlu bir sahada rÃ¼zgara ve yaÄŸmura karÅŸÄ± tam koruma saÄŸladÄ±lar. Profesyonel bir ekipti.",
      client: "Teknofest Operasyon Komitesi"
    },
    {
      title: "DoÄŸayla Ä°Ã§ Ä°Ã§e: SarÄ±yer Premium Åeffaf KÄ±r DÃ¼ÄŸÃ¼nÃ¼",
      category: "Ã–zel Davet & DÃ¼ÄŸÃ¼n",
      transformation: "YaÄŸmur riski taÅŸÄ±yan kÄ±r alanÄ±, manzarayÄ± kapatmayan lÃ¼ks ve Ä±ÅŸÄ±ltÄ±lÄ± bir ÅŸeffaf salona evrildi.",
      before: "Orman iÃ§indeki dÃ¼ÄŸÃ¼nde yaÄŸmur riski bulunmasÄ±na raÄŸmen, Ã§iftin doÄŸal manzarayÄ± kapatmak istememesi.",
      after: "TavanÄ± ve yanlarÄ± tamamen ÅŸeffaf dome ve pagoda Ã§adÄ±rlar kuruldu, iÃ§ mekan estetik LED aydÄ±nlatmalarla sÃ¼slendi.",
      result: "Gece Ä±ÅŸÄ±klandÄ±rmasÄ±yla masalsÄ± bir atmosfer yaratÄ±ldÄ±, misafirler manzaradan kopmadan doÄŸanÄ±n tadÄ±nÄ± Ã§Ä±kardÄ±.",
      quote: "Åeffaf Ã§adÄ±r sayesinde yaÄŸmur yaÄŸarken gÃ¶kyÃ¼zÃ¼nÃ¼ izlemek hayatÄ±mÄ±zÄ±n en gÃ¼zel anlarÄ±ndandÄ±.",
      client: "Gelin & Damat"
    },
    {
      title: "Acil Alan Ä°htiyacÄ±: Kocaeli Fabrika EndÃ¼striyel Ã‡adÄ±r",
      category: "EndÃ¼striyel & Depolama",
      transformation: "FabrikanÄ±n boÅŸ bahÃ§esi, 48 saat iÃ§inde iklimlendirmeli ve gÃ¼venli bir Ã¼retim tesisine dÃ¶nÃ¼ÅŸtÃ¼rÃ¼ldÃ¼.",
      before: "Artan Ã¼retim kapasitesi nedeniyle Kocaeli'ndeki fabrikaya acil ve geniÅŸ bir kapalÄ± alan (depo) ihtiyacÄ± doÄŸmasÄ±.",
      after: "AÄŸÄ±r iÅŸ makinesi ve forkliftlerin rahatÃ§a girebileceÄŸi, yÃ¼ksek tavanlÄ± 20x40m endÃ¼striyel Ã§adÄ±r sistemi hÄ±zla inÅŸa edildi.",
      result: "MÃ¼ÅŸterimiz kalÄ±cÄ± inÅŸaat maliyeti Ã¶demeden ve vakit kaybetmeden Ã¼retim kapasitesini baÅŸarÄ±yla artÄ±rdÄ±.",
      quote: "Betonarme bir depo yapmak aylarca sÃ¼recekken, ekipler iki gÃ¼nde bize devasa bir tesis kurdu.",
      client: "Fabrika Tedarik MÃ¼dÃ¼rÃ¼"
    },
    {
      title: "Prestijli KarÅŸÄ±lama: BeÅŸiktaÅŸ Kurumsal Lansman Ã‡adÄ±rÄ±",
      category: "Marka & Lansman",
      transformation: "SÄ±radan bir aÃ§Ä±k otel otoparkÄ±, markanÄ±n VIP misafirlerini aÄŸÄ±rladÄ±ÄŸÄ± lÃ¼ks bir fuaye alanÄ±na dÃ¶nÃ¼ÅŸtÃ¼.",
      before: "Lansman Ã¶ncesi misafir karÅŸÄ±lama (fuaye) alanÄ± iÃ§in otelin aÃ§Ä±k bÃ¶lÃ¼mÃ¼nÃ¼n estetik bir mekana Ã§evrilme ihtiyacÄ±.",
      after: "SÄ±ralÄ± 5x5 Pagoda Ã§adÄ±rlar kuruldu, zemin Ã¶zel halÄ± ile kaplandÄ± ve alan endÃ¼striyel klimalarla Ä±sÄ±tÄ±ldÄ±.",
      result: "VIP misafirler sÄ±cak ve ÅŸÄ±k bir ortamda aÄŸÄ±rlandÄ±, markanÄ±n kurumsal imajÄ± en Ã¼st seviyeye taÅŸÄ±ndÄ±.",
      quote: "Kusursuz bir zemin ve harika bir iklimlendirme. Ã‡adÄ±rÄ±n iÃ§inde olduÄŸumuzu hissetmedik bile.",
      client: "Kurumsal Ä°letiÅŸim DirektÃ¶rÃ¼"
    }
  ];

  return (
    <section className="py-20 bg-slate-50" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="galeri-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            GerÃ§ek <span className="text-blue-700">BaÅŸarÄ± Hikayelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Projelerimizin kalitesi, etkinliÄŸinizin en bÃ¼yÃ¼k gÃ¼vencesidir. ReferanslarÄ±mÄ±z ve uygulama Ã¶rneklerimizle, aÃ§Ä±k alanlarÄ± nasÄ±l gÃ¼venilir kapalÄ± mekanlara dÃ¶nÃ¼ÅŸtÃ¼rdÃ¼ÄŸÃ¼mÃ¼zÃ¼ keÅŸfedin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {SUCCESS_STORIES.map((story, index) => (
            <article key={index} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider">
                  {story.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight">{story.title}</h3>
              
              <p className="text-blue-700 font-semibold italic text-base mb-6 pb-6 border-b border-gray-100">
                âœ¨ {story.transformation}
              </p>
              
              <div className="space-y-5 flex-grow">
                <div className="relative pl-4 border-l-4 border-orange-400">
                  <h4 className="text-xs font-black text-orange-600 uppercase tracking-widest mb-1">Durum / Ä°htiyaÃ§</h4>
                  <p className="text-gray-700 text-sm">{story.before}</p>
                </div>
                <div className="relative pl-4 border-l-4 border-blue-500">
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">Teknik Ã‡Ã¶zÃ¼m</h4>
                  <p className="text-gray-700 text-sm">{story.after}</p>
                </div>
                <div className="relative pl-4 border-l-4 border-green-500">
                  <h4 className="text-xs font-black text-green-600 uppercase tracking-widest mb-1">Etki / SonuÃ§</h4>
                  <p className="text-gray-900 font-medium text-sm">{story.result}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 bg-gray-50/50 -mx-8 -mb-8 p-8 rounded-b-[2rem]">
                <div className="flex gap-3">
                  <MessageCircle className="text-blue-300 flex-shrink-0" size={32} />
                  <div>
                    <p className="text-gray-700 italic text-sm mb-2 font-medium">"{story.quote}"</p>
                    <p className="text-xs font-black text-gray-900 uppercase tracking-wider">â€” {story.client}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-16 bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">PopÃ¼ler Ã‡adÄ±r Uygulama ve Kiralama SeÃ§eneklerimiz</h3>
          <p className="text-gray-600 mb-6">BugÃ¼ne kadar gerÃ§ekleÅŸtirdiÄŸimiz bazÄ± uygulama Ã¶rnekleri ve aranan hizmetlerimiz:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Ä°stanbul Ã‡adÄ±r Kiralama",
              "Åeffaf Ã‡adÄ±r Kiralama",
              "Organizasyonlar Ä°Ã§in KiralÄ±k Ã‡adÄ±r",
              "Fuar ve Etkinlik Ã‡adÄ±rÄ± Kiralama",
              "DÃ¼ÄŸÃ¼n ve NiÅŸan Ã‡adÄ±rÄ±",
              "KiralÄ±k Dev EndÃ¼striyel Ã‡adÄ±r",
              "Pagoda Ã‡adÄ±r Kiralama",
              "Ã‡adÄ±r Kiralama ve Kurulumu",
              "Ã‡adÄ±r, Zemin ve Ä°klimlendirme Sistemleri"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-800 font-semibold text-sm md:text-base">
                <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Sahadan Uygulama GÃ¶rselleri</h3>
          <p className="text-lg text-gray-600 mb-8">FarklÄ± etkinlik tiplerinden en gÃ¼ncel Ã§adÄ±r kurulum karelerimiz</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <CaseGallery images={GALLERY_IMAGES} visibleCount={8} priorityCount={2} />
        </div>

        <div className="mt-20 mb-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Video <span className="text-blue-700">Galerisi</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Zorlu kurulumlarÄ±mÄ±zdan ve saha operasyonlarÄ±mÄ±zdan seÃ§ilmiÅŸ kÄ±sa videolar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {VIDEO_EMBEDS.map((video) => (
              <article
                key={video.videoId}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                aria-labelledby={`video-${video.videoId}-title`}
              >
                <div className="relative w-full aspect-video bg-black">
                  <VideoEmbed
                    videoId={video.videoId}
                    title={video.title}
                    thumbnailUrl={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4
                    id={`video-${video.videoId}-title`}
                    className="text-xl font-black text-gray-900 mb-3"
                  >
                    {video.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-900 to-slate-900 rounded-[2.5rem] p-8 md:p-14 text-center border border-blue-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-black text-white mb-6">
              Daha Fazla Ä°lham MÄ± ArÄ±yorsunuz?
            </h4>
            
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Daha fazla uygulama Ã¶rneÄŸi ve detaylÄ± gÃ¶rsel iÃ§in <a href="/projeler" className="underline font-bold text-white hover:text-blue-200 transition-colors">TÃ¼m Proje Galerimizi inceleyin</a>. YÃ¼zlerce baÅŸarÄ±lÄ± referansÄ±mÄ±z arasÄ±ndan etkinliÄŸinize en uygun Ã§adÄ±r Ã§Ã¶zÃ¼mÃ¼nÃ¼ birlikte tasarlayalÄ±m.
            </p>
            
            <Link
              href="/projeler"
              className="inline-flex items-center justify-center font-black px-10 py-5 rounded-2xl bg-white text-blue-900 hover:bg-blue-50 transform transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              <Eye size={24} className="mr-3" aria-hidden="true" />
              <span className="text-lg">TÃ¼m Resimleri GÃ¶r</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================== FiyatlandÄ±rma (EKSÄ°K OLAN BÄ°LEÅEN EKLENDÄ°) ================== */
function PricingSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="fiyatlandirma-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="fiyatlandirma-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Åeffaf <span className="text-blue-600">FiyatlandÄ±rma</span> (2026)
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            SÃ¼rpriz maliyetler olmadan, ihtiyacÄ±nÄ±za uygun Ã§adÄ±r kiralama seÃ§enekleri
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PRICING_ITEMS.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col group">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <div className="text-3xl font-black text-blue-600 mb-4">{item.price} <span className="text-base text-gray-500 font-normal">+ nakliye</span></div>
              <p className="text-gray-600 flex-grow">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-blue-50/50 rounded-2xl p-6 border border-blue-100 max-w-4xl mx-auto">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            <span className="text-blue-500 font-bold" aria-hidden="true">â„¹ï¸</span>
            YukarÄ±daki fiyatlar baz kiralama bedelleridir. Proje bÃ¼yÃ¼klÃ¼ÄŸÃ¼, lojistik mesafe, zemin kaplama ve iklimlendirme taleplerinize gÃ¶re nihai teklif saha keÅŸfi sonrasÄ± sunulur.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik AltyapÄ± ================== */
function Technical() {
  const technicalItems = [
    {
      category: "malzeme",
      title: "Malzeme Kalitesi",
      description:
        "AlÃ¼minyum iskelet, Ã§elik baÄŸlantÄ± elemanlarÄ± ve UV dayanÄ±mlÄ± branda",
      features: ["AlÃ¼minyum iskelet sistem", "650 gr/mÂ² branda", "Alev yÃ¼rÃ¼tmez malzeme", "Ã‡elik baÄŸlantÄ± elemanlarÄ±"],
    },
    {
      category: "guvenlik",
      title: "GÃ¼venlik Sistemleri",
      description: "TS EN standartlarÄ±na uygun gÃ¼venlik ve stabilite sistemleri",
      features: ["90 km/s rÃ¼zgar dayanÄ±mÄ±", "Profesyonel ankraj", "AÄŸÄ±rlÄ±klandÄ±rma sistemi", "YaÄŸmur oluÄŸu"],
    },
    {
      category: "olcu",
      title: "Ã–lÃ§Ã¼ & Kombinasyonlar",
      description: "ModÃ¼ler sistemler ile esnek Ã¶lÃ§Ã¼ ve birleÅŸim seÃ§enekleri",
      features: ["5Ã—5m / 6Ã—6m pagoda", "Proje bazlÄ± Ã¶lÃ§Ã¼lendirme", "10-20m geniÅŸ aÃ§Ä±klÄ±k", "Yan yana birleÅŸtirme"],
    },
    {
      category: "kurulum",
      title: "Kurulum SÃ¼reÃ§leri",
      description: "HÄ±zlÄ± kurulum, sÃ¶kÃ¼m ve lojistik hizmetleri",
      features: ["2-6 saat kurulum", "Profesyonel ekip", "Lojistik desteÄŸi", "SÃ¶kÃ¼m hizmeti"],
    },
    {
      category: "destek",
      title: "Teknik Destek",
      description: "7/24 teknik destek ve acil mÃ¼dahale hizmetleri",
      features: ["7/24 teknik destek", "Acil mÃ¼dahale ekibi", "Yedek parÃ§a stoÄŸu", "BakÄ±m hizmetleri"],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white nc-CadirKiralamaPage-section-3"
      aria-labelledby="altyapi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="altyapi-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Teknik{" "}
            <span className="gradient-text gradient-text--safe-xl">
              AltyapÄ±mÄ±z
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profesyonel ekipmanlar ve gÃ¼Ã§lÃ¼ teknik altyapÄ± ile hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "malzeme" && "ğŸ—ï¸"}
                    {item.category === "guvenlik" && "ğŸ›¡ï¸"}
                    {item.category === "olcu" && "ğŸ“"}
                    {item.category === "kurulum" && "âš¡"}
                    {item.category === "destek" && "ğŸ“"}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span
                        className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Sahneva StandartlarÄ± ================== */
function StandardsTable() {
  return (
    <section
      className="py-20 bg-white nc-CadirKiralamaPage-section-standards"
      aria-labelledby="sahneva-standartlari-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="sahneva-standartlari-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Sahneva{" "}
            <span className="gradient-text gradient-text--safe-xl">
              StandartlarÄ±
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GÃ¼ven veren teknik detaylarÄ± ÅŸeffaf biÃ§imde paylaÅŸÄ±yoruz.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-base">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 font-bold">Ã–zellik</th>
                  <th className="px-6 py-4 font-bold">StandartlarÄ±mÄ±z</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {STANDARDS.map((row) => (
                  <tr key={row.feature} className="hover:bg-blue-50/40">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Zorluklar ve Ã‡Ã¶zÃ¼mler ================== */
function ChallengesSolutions() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white nc-CadirKiralamaPage-section-solutions"
      aria-labelledby="zorluklar-cozumler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="zorluklar-cozumler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Zorluklar{" "}
            <span className="gradient-text gradient-text--safe-xl">
              ve Ã‡Ã¶zÃ¼mler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Teknik zorluklarÄ± Ã¶lÃ§Ã¼lebilir Ã§Ã¶zÃ¼mlerle yÃ¶netiyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CHALLENGES.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 hover:shadow-xl transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Kurulum SÃ¼reci ================== */
function InstallationProcess() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white nc-CadirKiralamaPage-section-process"
      aria-labelledby="kurulum-sureci-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kurulum-sureci-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            Kurulum <span className="text-white/90">SÃ¼reci</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Operasyonu adÄ±m adÄ±m gÃ¶rÃ¼n.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {INSTALLATION_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-500"
            >
              <div className="text-3xl font-black text-white mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-blue-100 text-base leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Ä°statistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: "700+", label: "BaÅŸarÄ±lÄ± Etkinlik", icon: "ğŸª" },
    { value: "50+", label: "Kurumsal MÃ¼ÅŸteri", icon: "ğŸ¢" },
    { value: "81 Ä°L", label: "Kendi AraÃ§larÄ±mÄ±zla Kurulum", icon: "ğŸ—ºï¸" },
    { value: "10+", label: "YÄ±llÄ±k Deneyim", icon: "â­" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white nc-CadirKiralamaPage-section-4"
      aria-label="BaÅŸarÄ± Ä°statistiklerimiz"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`cadir-stat-${index}-value`}
              aria-describedby={`cadir-stat-${index}-label`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <h3
                  id={`cadir-stat-${index}-value`}
                  className="text-3xl md:text-4xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`cadir-stat-${index}-label`}
                  className="text-blue-100 text-sm md:text-base font-semibold"
                >
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== KullanÄ±m AlanlarÄ± ================== */
function UseCases() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95 nc-CadirKiralamaPage-section-5"
      aria-labelledby="kullanim-alanlari-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kullanim-alanlari-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            KullanÄ±m{" "}
            <span className="gradient-text gradient-text--safe-xl">
              AlanlarÄ±
            </span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Ã‡adÄ±r Ã§Ã¶zÃ¼mlerimizin tercih edildiÄŸi baÅŸlÄ±ca etkinlik tÃ¼rleri
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
              role="listitem"
            >
              <div className="flex flex-col items-start gap-4">
                <div
                  className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
          >
            <span aria-hidden="true" className="text-xl mr-3">ğŸ’¬</span>
            <span>EtkinliÄŸiniz iÃ§in Ã–zel Ã‡Ã¶zÃ¼m AlÄ±n</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== BÃ¶lgesel Hizmet KapsamÄ± ================== */
function RegionalService() {
  const regions = [
    { 
      name: "Ä°stanbul Avrupa YakasÄ±", 
      detail: "Fuar, lansman ve toplantÄ±lar iÃ§in ÅiÅŸli, BeÅŸiktaÅŸ ve BeylikdÃ¼zÃ¼ odaklÄ± hÄ±zlÄ± mobil ekiplerimizle sahadayÄ±z.",
      districts: "BaÅŸakÅŸehir, Esenyurt, Fatih, SarÄ±yer, KaÄŸÄ±thane, ÅiÅŸli, BeÅŸiktaÅŸ, BeylikdÃ¼zÃ¼"
    },
    { 
      name: "Ä°stanbul Anadolu YakasÄ±", 
      detail: "DÃ¼ÄŸÃ¼n, konser ve kurumsal etkinlikler iÃ§in KadÄ±kÃ¶y, AtaÅŸehir ve Ãœmraniye depolarÄ±mÄ±zdan anlÄ±k sevkiyat.",
      districts: "KadÄ±kÃ¶y, ÃœskÃ¼dar, Maltepe, Tuzla, Pendik, Ã‡ekmekÃ¶y, AtaÅŸehir"
    },
    { 
      name: "Marmara, Ã‡evre Ä°ller & TÃ¼rkiye Geneli", 
      detail: "Ã–zel araÃ§ filomuzla Ã§evre illere ve Ä°Ã§ Anadolu'ya kadar profesyonel hizmet ulaÅŸtÄ±rÄ±yoruz.",
      districts: "TekirdaÄŸ, Ä°zmit, Kocaeli, Yalova, Bursa, Sakarya, DÃ¼zce, Bolu ve Ankara"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="bolgesel-hizmet-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 id="bolgesel-hizmet-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Ä°stanbul, Marmara ve Ã‡evre Ä°llerde <span className="text-blue-700">Lider GÃ¼Ã§</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BaÅŸta Ä°stanbul iÃ§i konser, dÃ¼ÄŸÃ¼n, fuar ve lansman organizasyonlarÄ± olmak Ã¼zere; Ã§evre illerdeki tÃ¼m etkinliklerinize kendi araÃ§ filomuz ve uzman kadromuzla teknik destek saÄŸlÄ±yoruz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            {regions.map((region) => (
              <div key={region.name} className="group p-6 bg-white rounded-2xl border-l-4 border-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                <h3 className="font-black text-gray-900 text-xl mb-2">{region.name}</h3>
                <p className="text-gray-700 mb-3">{region.detail}</p>
                <div className="text-sm font-semibold text-blue-800 bg-blue-100/50 p-3 rounded-xl border border-blue-100">
                  ğŸ“ Kapsam: {region.districts}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
            
            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-blue-400">
              <Shield size={28} /> Operasyonel GÃ¼vence & Lojistik
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-4">
                <div className="bg-red-500/20 p-3 rounded-xl h-fit"><CheckCircle className="text-red-400" /></div>
                <div>
                  <h4 className="font-bold text-lg text-red-300">AÃ§Ä±k Alanda "KÃ¶tÃ¼ SÃ¼rprizlere" Son</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Sahneva olarak <strong>%100 dÄ±ÅŸ mekan (outdoor) uyumlu, 90km/s rÃ¼zgar dayanÄ±mlÄ± ve su geÃ§irmez</strong> sistemler kuruyor; zorlu hava ÅŸartlarÄ±nda kusursuz alan garantisi veriyoruz.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-blue-600/20 p-3 rounded-xl h-fit"><Truck className="text-blue-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Åeffaf Nakliye ve FiyatlandÄ±rma</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Ä°stanbul iÃ§i projelerde lojistik maliyetlerini minimize ederken; <strong>Bursa, Ä°zmit, Ankara, TekirdaÄŸ</strong> gibi Ã§evre illere yapÄ±lan operasyonlarda nakliye ve personel konaklama detaylarÄ±nÄ± ilk teklifte ÅŸeffafÃ§a sunuyoruz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-500/20 p-3 rounded-xl h-fit"><Zap className="text-green-400" /></div>
                <div>
                  <h4 className="font-bold text-lg">Trafik & UlaÅŸÄ±m AvantajÄ±</h4>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">
                    Ä°stanbul'un iki yakasÄ±nda konumlanmÄ±ÅŸ ekiplerimiz sayesinde, farklÄ± ilÃ§elerdeki kurulumlara aynÄ± hÄ±zda, trafik engeline takÄ±lmadan ulaÅŸÄ±yoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden mt-10">
          <div className="px-6 md:px-10 py-8 border-b border-gray-100 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">BÃ¶lgesel Lojistik ve Operasyon KarÅŸÄ±laÅŸtÄ±rmasÄ±</h3>
              <p className="text-gray-600 mt-2 text-lg">Ä°stanbul iÃ§i ve Ã§evre illerdeki Ã§adÄ±r kiralama hizmet standartlarÄ±mÄ±zÄ±n ÅŸeffaf dÃ¶kÃ¼mÃ¼.</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="px-8 py-6 font-black text-gray-900 w-1/4 bg-gray-50 border-b-2 border-gray-200">Hizmet Kriteri</th>
                  <th className="px-8 py-6 font-black text-blue-800 w-3/8 bg-blue-50 border-b-2 border-blue-200">Ä°stanbul Ä°Ã§i (Avrupa & Anadolu)</th>
                  <th className="px-8 py-6 font-black text-green-800 w-3/8 bg-green-50 border-b-2 border-green-200">Ã‡evre Ä°ller (Marmara BÃ¶lgesi)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Kurulum SÃ¼resi</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Acil durumlarda 2-4 saatte hÄ±zlÄ± express kurulum</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">PlanlÄ± sevkiyat ile etkinlikten 1 gÃ¼n Ã¶nce gÃ¼venli kurulum</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Nakliye Ãœcreti</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Ä°lÃ§e bazlÄ± 8.000 TL - 12.000 TL (MÃ¼ÅŸteri dilerse kendi nakliyesi)</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Kilometre bazlÄ± ÅŸeffaf, indirimli ve sabit fiyat garantisi</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Saha DesteÄŸi</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Yerel nÃ¶betÃ§i ekiplerle anlÄ±k destek, konaklama Ã¼creti yok</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Projeye tahsisli, konaklamalÄ± tam zamanlÄ± operasyon desteÄŸi</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-5 font-bold text-gray-800">Zemin & Ä°klimlendirme</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Beton/Ã§im zemine uygun aÄŸÄ±rlÄ±k ve klimalÄ± sistemler</td>
                  <td className="px-8 py-5 text-gray-700 font-medium">Zorlu hava ÅŸartlarÄ±na karÅŸÄ± dev endÃ¼striyel Ä±sÄ±tÄ±cÄ±lar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== TamamlayÄ±cÄ± Hizmetler ================== */
function RelatedServices() {
  const services = [
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & IÅŸÄ±k Sistemleri",
      Icon: Music,
      desc: "Ã‡adÄ±r etkinlikleri iÃ§in profesyonel ses ve Ä±ÅŸÄ±k Ã§Ã¶zÃ¼mleri",
    },
    {
      href: "/sahne-kiralama",
      title: "Sahne Kiralama",
      Icon: Layers,
      desc: "Konser ve sunumlar iÃ§in modÃ¼ler sahne kurulumlarÄ±",
    },
    {
      href: "/masa-sandalye-kiralama",
      title: "Masa & Sandalye",
      Icon: Users,
      desc: "Konforlu oturma alanlarÄ± ve tamamlayÄ±cÄ± mobilyalar",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      Icon: Monitor,
      desc: "Sunum ve sahne iÃ§in yÃ¼ksek Ã§Ã¶zÃ¼nÃ¼rlÃ¼klÃ¼ ekranlar",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30"
      aria-labelledby="ek-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="ek-hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Ek <span className="text-blue-700">Hizmetler</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ã‡adÄ±r kurulumunuzu uÃ§tan uca tamamlayacak diÄŸer profesyonel Ã§Ã¶zÃ¼mler
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <nav aria-label="Ek hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white h-full flex flex-col"
                aria-label={`${service.title} - ${service.desc}`}
              >
                <div
                  className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <service.Icon size={36} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function Articles() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 nc-CadirKiralamaPage-section-6"
      aria-labelledby="bilgi-rehber-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="bilgi-rehber-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Bilgi &{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Profesyonel Rehber
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ã‡adÄ±r kiralama hakkÄ±nda uzman gÃ¶rÃ¼ÅŸleri ve teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    ğŸ“š KapsamlÄ± Rehber
                  </span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    â­ Uzman GÃ¶rÃ¼ÅŸÃ¼
                  </span>
                  <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    ğŸ¯ Pratik Ã‡Ã¶zÃ¼mler
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Profesyonel Ã‡adÄ±r Kiralama: Etkinlik BaÅŸarÄ±nÄ±z Ä°Ã§in Tam KapsamlÄ± Ã‡Ã¶zÃ¼mler
                </h3>

                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Kurumsal standartlar, hÄ±zlÄ± kurulum sÃ¼reÃ§leri ve Ã¶lÃ§Ã¼lebilir kalite yaklaÅŸÄ±mÄ± ile gÃ¼venli Ã§Ã¶zÃ¼mler
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <h4>Profesyonel Ã‡adÄ±r Kiralama YaklaÅŸÄ±mÄ±mÄ±z</h4>
                    <p>
                      <strong>Sahneva</strong>, Ã§adÄ±r kiralama hizmetlerinde yalnÄ±zca fiziksel kurulum deÄŸil; planlama, gÃ¼venlik ve operasyonel sÃ¼rekliliÄŸi birlikte ele alÄ±r. Her proje Ã¶ncesinde alan keÅŸfi yapÄ±lÄ±r, zemin yapÄ±sÄ± analiz edilir ve Ã§adÄ±r sistemleri bu verilere gÃ¶re projelendirilir.
                    </p>
                    <p>
                      DÃ¼ÄŸÃ¼n, fuar, konser veya kurumsal organizasyon fark etmeksizin tÃ¼m projelerde aynÄ± kalite standartlarÄ± uygulanÄ±r. BÃ¶ylece etkinlik sÃ¼resince hem gÃ¼venlik hem de gÃ¶rsel bÃ¼tÃ¼nlÃ¼k korunur.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4>KullanÄ±lan Ã‡adÄ±r Sistemleri</h4>
                    <ul>
                      <li>Pagoda Ã§adÄ±r sistemleri (5Ã—5 m / 6Ã—6 m modÃ¼ler yapÄ±)</li>
                      <li>Åeffaf dome Ã§adÄ±r Ã§Ã¶zÃ¼mleri</li>
                      <li>EndÃ¼striyel ve geniÅŸ aÃ§Ä±klÄ±klÄ± Ã§adÄ±r sistemleri</li>
                      <li>Fuar ve sergi alanlarÄ±na Ã¶zel Ã§adÄ±r uygulamalarÄ±</li>
                    </ul>
                    <p>
                      TÃ¼m sistemler TS EN standartlarÄ±na uygun malzemelerle kurulmakta, profesyonel ankraj ve sabitleme yÃ¶ntemleriyle gÃ¼venli hÃ¢le getirilmektedir.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-blue-200 open:bg-blue-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-gray-900">
                      <span>Organizasyon Ã‡adÄ±r Kiralama Nedir?</span>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      >
                        âŒ„
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <p>
                        <strong>Organizasyon Ã§adÄ±r kiralama</strong>, aÃ§Ä±k veya yarÄ± aÃ§Ä±k alanlarda gerÃ§ekleÅŸtirilen etkinlikler iÃ§in profesyonel, geÃ§ici ve gÃ¼venli mekÃ¢n oluÅŸturma Ã§Ã¶zÃ¼mÃ¼dÃ¼r. Sahneva, Ã§adÄ±r sistemlerini yalnÄ±zca fiziksel bir yapÄ± olarak deÄŸil; teknik altyapÄ±sÄ±, gÃ¼venliÄŸi ve operasyonel planlamasÄ± yapÄ±lmÄ±ÅŸ bir etkinlik alanÄ± olarak ele alÄ±r.
                      </p>
                      <p>
                        Kurumsal lansmanlar, festivaller, belediye organizasyonlarÄ± ve Ã¶zel etkinliklerde kullanÄ±lan <strong>etkinlik Ã§adÄ±rÄ± kiralama</strong> Ã§Ã¶zÃ¼mleri; katÄ±lÄ±mcÄ± konforu, hava koÅŸullarÄ±na dayanÄ±klÄ±lÄ±k ve marka algÄ±sÄ±nÄ± doÄŸrudan etkiler.
                      </p>
                      <h4>Kurulum SÃ¼reci NasÄ±l Ä°lerler?</h4>
                      <p>
                        Kurulum sÃ¼reci, saha keÅŸfi ile baÅŸlar. Alan Ã¶lÃ§Ã¼mleri alÄ±ndÄ±ktan sonra Ã§adÄ±rÄ±n konumlandÄ±rmasÄ±, giriÅŸâ€“Ã§Ä±kÄ±ÅŸ noktalarÄ± ve teknik ekipman yerleÅŸimi belirlenir. Kurulum, uzman ekipler tarafÄ±ndan kÄ±sa sÃ¼rede tamamlanÄ±r ve etkinlik Ã¶ncesi tÃ¼m kontroller yapÄ±lÄ±r.
                      </p>
                      <ul>
                        <li>Saha keÅŸfi ve Ã¶lÃ§Ã¼mleme</li>
                        <li>Teknik planlama ve yerleÅŸim tasarÄ±mÄ±</li>
                        <li>Ã‡adÄ±r kurulumu ve sabitleme</li>
                        <li>AydÄ±nlatma, elektrik ve iklimlendirme entegrasyonu</li>
                        <li>Etkinlik sÃ¼resince teknik destek</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-blue-200 open:bg-blue-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-gray-900">
                      <span>DÃ¼ÄŸÃ¼n ve Ã–zel Davetler Ä°Ã§in Ã‡adÄ±r Kiralama</span>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      >
                        âŒ„
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <p>
                        <strong>DÃ¼ÄŸÃ¼n Ã§adÄ±r kiralama</strong>, estetik gÃ¶rÃ¼nÃ¼m ile teknik gÃ¼venliÄŸin birlikte saÄŸlanmasÄ±nÄ± gerektirir. Pagoda ve ÅŸeffaf Ã§adÄ±r sistemleri, Ã¶zellikle kÄ±r dÃ¼ÄŸÃ¼nleri ve aÃ§Ä±k hava davetlerinde hem ÅŸÄ±k bir atmosfer hem de kontrollÃ¼ bir alan oluÅŸturur.
                      </p>
                      <p>
                        Sahneva, dÃ¼ÄŸÃ¼n organizasyonlarÄ±nda Ã§adÄ±r kurulumunu; aydÄ±nlatma, zemin kaplama ve dekorasyon uyumluluÄŸu ile birlikte planlayarak, etkinlik boyunca sorunsuz bir deneyim sunar.
                      </p>
                      <h4>Hangi Etkinlikler Ä°Ã§in Uygundur?</h4>
                      <p>
                        Ã‡adÄ±r kiralama Ã§Ã¶zÃ¼mlerimiz, Ã§ok farklÄ± organizasyon tÃ¼rlerine uyarlanabilir. AÃ§Ä±k hava dÃ¼ÄŸÃ¼nlerinden bÃ¼yÃ¼k Ã¶lÃ§ekli fuarlara kadar her etkinlik iÃ§in Ã¶lÃ§eklenebilir Ã§Ã¶zÃ¼mler sunuyoruz.
                      </p>
                      <ul>
                        <li>DÃ¼ÄŸÃ¼n, niÅŸan ve Ã¶zel davet organizasyonlarÄ±</li>
                        <li>Fuar, sergi ve lansman etkinlikleri</li>
                        <li>Konser, festival ve aÃ§Ä±k hava etkinlikleri</li>
                        <li>Belediye ve kurumsal organizasyonlar</li>
                        <li>GeÃ§ici depolama ve endÃ¼striyel kullanÄ±m alanlarÄ±</li>
                      </ul>
                    </div>
                  </details>

                  <details className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 open:border-blue-200 open:bg-blue-50/40">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-gray-900">
                      <span>BÃ¼yÃ¼k Ã–lÃ§ekli ve Kurumsal Etkinliklerde Ã‡adÄ±r Kiralama</span>
                      <span
                        aria-hidden="true"
                        className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 group-open:rotate-180"
                      >
                        âŒ„
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-gray-700">
                      <p>
                        <strong>BÃ¼yÃ¼k Ã§adÄ±r kiralama</strong>, standart organizasyonlara kÄ±yasla daha yÃ¼ksek mÃ¼hendislik, lojistik ve saha yÃ¶netimi gerektirir. Fuar alanlarÄ±, festival sahalarÄ± ve kamu projelerinde kullanÄ±lan bÃ¼yÃ¼k aÃ§Ä±klÄ±klÄ± Ã§adÄ±r sistemleri; vinÃ§li kurulum ve profesyonel ekip koordinasyonu ile hayata geÃ§irilir.
                      </p>
                      <p>
                        Sahneva, bÃ¼yÃ¼k Ã¶lÃ§ekli organizasyonlarda yalnÄ±zca Ã§adÄ±r kurulumu deÄŸil; zamanlama, gÃ¼venlik ve teknik altyapÄ± yÃ¶netimi ile anahtar teslim Ã§Ã¶zÃ¼mler sunar. Bu yaklaÅŸÄ±m, kurumsal etkinliklerin planlanan takvim iÃ§inde gÃ¼venle gerÃ§ekleÅŸmesini saÄŸlar.
                      </p>
                      <h4>Neden Sahneva?</h4>
                      <p>
                        Sahneva, Ã§adÄ±r kiralama hizmetlerinde deneyim, teknik altyapÄ± ve operasyon gÃ¼cÃ¼nÃ¼ bir arada sunar. TÃ¼rkiye genelinde 81 ilde hizmet veren yapÄ±mÄ±zla, her Ã¶lÃ§ekte organizasyon iÃ§in gÃ¼venilir Ã§Ã¶zÃ¼m ortaÄŸÄ±yÄ±z.
                      </p>
                      <p>
                        <strong>8+ yÄ±llÄ±k deneyim, yÃ¼zlerce baÅŸarÄ±lÄ± etkinlik ve profesyonel ekip</strong> ile etkinliÄŸinizin sorunsuz ilerlemesini saÄŸlÄ±yoruz.
                      </p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Teknik Entegrasyon ve Kurulum SÃ¼reÃ§leri
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                GÃ¼venlik, sabitleme ve tamamlayÄ±cÄ± hizmetler
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Ã‡adÄ±r kurulum sÃ¼recimiz keÅŸif ve planlama ile baÅŸlar. AlanÄ±n zemin tÃ¼rÃ¼ne gÃ¶re profesyonel sabitleme yÃ¶ntemi belirlenir; gÃ¼venlik ekipleri ve teknik ihtiyaÃ§lar (elektrik, aydÄ±nlatma, iklimlendirme) projeye entegre edilir.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span
                      className="bg-purple-100 text-purple-600 rounded-xl p-2"
                      aria-hidden="true"
                    >
                      ğŸ“‹
                    </span>
                    Standart Uygulama BaÅŸlÄ±klarÄ±
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>Profesyonel ankraj & sabitleme</li>
                    <li>YaÄŸmur oluÄŸu ve su tahliye planÄ±</li>
                    <li>Kablo gizleme ve gÃ¼venli hat dÃ¼zeni</li>
                    <li>Etkinlik boyunca teknik destek</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Etkinlik TÃ¼rlerine Ã–zel Ã‡Ã¶zÃ¼mler
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                DÃ¼ÄŸÃ¼n, fuar ve kurumsal organizasyonlara uygun planlama
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Her etkinliÄŸin ihtiyacÄ± farklÄ±dÄ±r. DÃ¼ÄŸÃ¼n ve davetlerde estetik ve konfor odaklÄ± dÃ¼zen kurarken, fuar ve kurumsal etkinliklerde akÄ±ÅŸ, giriÅŸâ€“Ã§Ä±kÄ±ÅŸ ve markalama planÄ±nÄ± Ã¶ne alÄ±rÄ±z.
                </p>

                <div className="bg-blue-50 rounded-2xl p-5 mt-6 border border-blue-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3">
                    PopÃ¼ler senaryolar
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li>DÃ¼ÄŸÃ¼n & Ã¶zel davet â€” Ä±ÅŸÄ±k & dekor entegrasyonu</li>
                    <li>Fuar & sergi â€” stand uyumu ve yÃ¶nlendirme</li>
                    <li>Kurumsal etkinlik â€” iklimlendirme ve zemin planlama</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================== SSS ================== */
function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="sss-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            SÄ±k Sorulan{" "}
            <span className="gradient-text gradient-text--safe-xl">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ã‡adÄ±r kiralama hakkÄ±nda merak edilen sorular ve cevaplarÄ±
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
            >
              <summary
                className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900"
              >
                <span className="pr-4">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                >
                  âŒ„
                </span>
              </summary>

              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayÄ±p bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
            aria-label="SÄ±k Sorulan Sorular sayfasÄ±ndaki tÃ¼m sorularÄ± gÃ¶rÃ¼ntÃ¼le"
          >
            <span aria-hidden="true" className="text-xl mr-3">ğŸ“š</span>
            <span className="text-lg">TÃ¼m SSS'yi GÃ¶rÃ¼ntÃ¼le</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD (Ã‡adÄ±r Kiralama) â€” SSR SAFE ================== */
function TentRentalJsonLd() {
  const pageUrl = `${ORIGIN}/cadir-kiralama`;
  const pageDescription = metadata?.description || "";
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  const schemaResult = buildServiceProductSchema({
    slug: "/cadir-kiralama",
    locale: "tr-TR",
  }) || {};
  
  const serviceSchema = schemaResult.service || {};
  const productNodes = schemaResult.products || [];

  const offerCatalogId = `${pageUrl}#offer-catalog`;

  const offerCatalogNode = {
    "@type": "OfferCatalog",
    "@id": offerCatalogId,
    name: "Ã‡adÄ±r Kiralama FiyatlarÄ± (Paket + mÂ²)",
    itemListElement: [
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-3x3`,
        name: "3Ã—3 Ã‡adÄ±r Kiralama",
        url: pageUrl,
        priceCurrency: "TRY",
        price: "7000",
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        description: "9 mÂ² kompakt alanlar iÃ§in hÄ±zlÄ± kurulum Ã§adÄ±r paketi. (Nakliye hariÃ§)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-4x4`,
        name: "4Ã—4 Ã‡adÄ±r Kiralama",
        url: pageUrl,
        priceCurrency: "TRY",
        price: "8000",
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        description: "16 mÂ² orta Ã¶lÃ§ekli kurulumlar iÃ§in Ã§adÄ±r paketi. (Nakliye hariÃ§)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-5x5`,
        name: "5Ã—5 Ã‡adÄ±r Kiralama",
        url: pageUrl,
        priceCurrency: "TRY",
        price: "9000",
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        description: "25 mÂ² etkinlik ve davetler iÃ§in pagoda Ã§adÄ±r paketi. (Nakliye hariÃ§)",
      },
      {
        "@type": "Offer",
        "@id": `${pageUrl}#offer-m2`,
        name: "GeniÅŸ AÃ§Ä±klÄ±klÄ± Ã‡adÄ±rlar (10 / 20 / 30 / 40 m) â€” mÂ² FiyatÄ±",
        url: pageUrl,
        availability: "https://schema.org/InStock",
        businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "430",
          priceCurrency: "TRY",
          unitCode: "MTK",
          unitText: "mÂ²",
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "GeniÅŸlik seÃ§enekleri (m)",
            value: "10, 20, 30, 40",
          },
          {
            "@type": "PropertyValue",
            name: "Uzunluk",
            value: "MÃ¼ÅŸteri tercihine gÃ¶re",
          },
        ],
        description:
          "GeniÅŸlik 10/20/30/40 metredir. Uzunluk mÃ¼ÅŸteri tercihine gÃ¶re belirlenir. Fiyat 430 TL / mÂ²â€™dir. Nakliye ve saha koÅŸullarÄ± proje bazlÄ±dÄ±r.",
      },
    ],
  };

  const baseService = {
    "@type": "Service",
    name: "Ã‡adÄ±r Kiralama",
    description: pageDescription,
    serviceType: "Etkinlik Ã‡adÄ±r Kiralama",
    provider,
    areaServed: { "@type": "AdministrativeArea", name: "TÃ¼rkiye" },
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
    hasOfferCatalog: { "@id": offerCatalogId },
  };

  const serviceNode = {
    ...serviceSchema,
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema["@id"] || `${pageUrl}#service`,
    provider,
  };

  const webPageNode = {
    "@type": "WebPage",
    "@id": webPageId,
    name: "Ã‡adÄ±r Kiralama | Profesyonel Etkinlik Ã‡Ã¶zÃ¼mleri | Sahneva",
    description: pageDescription,
    url: pageUrl,
    inLanguage: "tr-TR",
    mainEntity: { "@id": serviceNode["@id"] },
    isPartOf: { "@id": WEBSITE_ID },
    publisher: provider,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}/img/cadir/hero.webp`,
      width: 1200,
      height: 630,
    },
  };

  const faqNode = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    isPartOf: { "@id": webPageId },
    about: { "@id": serviceNode["@id"] },
    mainEntityOfPage: { "@id": webPageId },
    inLanguage: "tr-TR",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const videoNodes = (VIDEO_EMBEDS || []).map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    thumbnailUrl: `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      serviceNode,
      offerCatalogNode,
      faqNode,
      ...productNodes,
      ...videoNodes,
    ],
  };

  return <JsonLdScript id="ld-json-cadir" data={jsonLd} />;
}

/* ================== Sayfa BileÅŸeni ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/cadir-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Ã‡adÄ±r Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <TentRentalJsonLd />
      <Hero />
      <TurnkeyInfrastructure />
      <StatsBand />
      <Services />
      <Gallery />
      <PricingSection />
      <Technical />
      <StandardsTable />
      <ChallengesSolutions />
      <InstallationProcess />
      <UseCases />
      <RegionalService />
      <Articles />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
            label: "Dome Ã‡adÄ±r Rehberi: 360Â° Mapping",
          },
          {
            href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
            label: "2026 Kurumsal Etkinlik Planlama Rehberi",
          },
        ]}
      />
    </>
  );
}


