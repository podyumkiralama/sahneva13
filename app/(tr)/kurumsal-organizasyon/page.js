import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Layers3,
  MonitorCheck,
  PhoneCall,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import SahnevaGradientGlow from "@/components/ui/SahnevaGradientGlow";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/seo/imagePlaceholders";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";
import { buildFaqSchema } from "@/lib/structuredData/faq";
import {
  ASSURANCE_ITEMS,
  BRAND_LOGOS,
  FAQ_ITEMS,
  FORMAT_ITEMS,
  GALLERY_IMAGES,
  GUIDE_UPDATED_ISO,
  HERO,
  HERO_STATS,
  OVERVIEW_POINTS,
  PACKAGE_OPTIONS,
  PLANNING_STEPS,
  SERVICE_ITEMS,
  TECHNICAL_POINTS,
  USE_CASES,
  VIDEO_GALLERY,
} from "./data";

export const revalidate = 1800;

const ORIGIN = BASE_SITE_URL;
const PHONE = "+905453048671";
const PAGE_URL = `${ORIGIN}/kurumsal-organizasyon`;
const PAGE_TITLE = "Kurumsal Organizasyon | Sahne ve LED Ekran Prodüksiyonu";
const PAGE_DESCRIPTION =
  "Kurumsal organizasyon projelerinde Türkiye'nin etkinlik teknoloji partneri Sahneva; lansman, konferans ve gala etkinlikleri için sahne, LED ekran, ses-ışık, truss, teknik reji ve saha operasyonunu tek ekipten yönetir.";
const OG_TITLE = "Kurumsal Organizasyon | Sahneva";
const OG_DESCRIPTION =
  "Lansman, konferans, gala ve bayi toplantılarında sahne, LED ekran, ses-ışık, truss, teknik reji ve saha operasyonunu tek ekipten planlayın.";
const OG_IMAGE = "/img/kurumsal/premium/kurumsal-organizasyon-og.webp";
const BLUR_DATA_URL = DEFAULT_BLUR_DATA_URL;
const HERO_IMAGE_SIZE = { width: 1440, height: 960 };

const shouldBypassImageOptimizer = (src) =>
  typeof src === "string" && src.startsWith("/img/");

const generateWhatsAppLink = (intent = "kurumsal organizasyon") => {
  const text = `Merhaba, ${intent} için teklif istiyorum. Etkinlik türü: [lansman/konferans/gala], tarih: [gg.aa.yyyy], şehir/mekan: [bilgi], kişi sayısı: [xxx].`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

const FEATURED_GALLERY = [
  {
    ...GALLERY_IMAGES[0],
    src: "/img/kurumsal/premium/kurumsal-organizasyon-p19-led-kanit.webp",
  },
  {
    ...GALLERY_IMAGES[6],
    src: "/img/kurumsal/premium/kurumsal-organizasyon-konferans-led-kanit.webp",
  },
  {
    ...GALLERY_IMAGES[5],
    src: "/img/kurumsal/premium/kurumsal-organizasyon-panel-led-kanit.webp",
  },
  {
    ...GALLERY_IMAGES[12],
    src: "/img/kurumsal/premium/kurumsal-organizasyon-konferans-podyum-kanit.webp",
  },
  {
    ...GALLERY_IMAGES[8],
    src: "/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp",
  },
  {
    ...GALLERY_IMAGES[14],
    src: "/img/kurumsal/premium/kurumsal-organizasyon-reji-kontrol-kanit.webp",
  },
].filter(Boolean);

const FEATURED_VIDEOS = VIDEO_GALLERY.slice(0, 4);
const CLUSTER = CONTENT_CLUSTERS.corporate;

const OPERATION_STEPS = [
  {
    title: "Brief ve mekan okuması",
    text: "Etkinlik hedefi, salon ölçüsü, yükleme alanı, izleyici akışı ve marka görünürlüğü aynı teknik brief içinde netleşir.",
  },
  {
    title: "Sahne ve LED mimarisi",
    text: "Sahne, LED ekran, yan yüzeyler, podyum ve içerik akışı tek görsel omurga olarak planlanır.",
  },
  {
    title: "Reji, prova ve yedek akış",
    text: "Ses, ışık, görüntü, kamera, sunum ve konuşmacı geçişleri etkinlikten önce prova takvimine bağlanır.",
  },
  {
    title: "Saha yönetimi ve kapanış", 
    text: "Kurulum, etkinlik günü teknik koordinasyon, söküm ve teslim süreci tek operasyon muhatabıyla ilerler.",
  },
];

const RELATED_LINKS = [
  { href: "/led-ekran-kiralama", label: "Kurumsal etkinlik LED ekran çözümleri" },
  { href: "/sahne-kiralama", label: "Konferans ve gala sahne kurulumu" },
  { href: "/podyum-kiralama", label: "Protokol podyum ve platform altyapısı" },
  { href: "/ses-isik-sistemleri", label: "Kurumsal ses ve ışık prodüksiyonu" },
  { href: "/truss-kiralama", label: "LED ve sahne için truss altyapısı" },
  { href: "/projeler", label: "Sahneva kurumsal prodüksiyon referansları" },
];

const SERVICE_CTA_LABELS = [
  "P1.9 LED kapsamını konuş",
  "Sahne mimarisini konuş",
  "Ses ve ışık kapsamını konuş",
  "Reji akışını konuş",
  "Rigging planını konuş",
  "Prova koordinasyonunu konuş",
];

const TECHNICAL_DISCOVERY = [
  {
    title: "Mekan okuması",
    text: "Salon ölçüsü, tavan yüksekliği, yükleme alanı, giriş-çıkış ve izleyici akışı birlikte değerlendirilir.",
  },
  {
    title: "Enerji ve taşıyıcı kontrolü",
    text: "Güç noktaları, kablo güzergahı, truss/podyum yerleşimi ve yük güvenliği etkinlikten önce netleşir.",
  },
  {
    title: "Görüş ve ses kapsaması",
    text: "Sahne, LED ekran, hoparlör, ışık ve kamera açıları katılımcının deneyimine göre konumlandırılır.",
  },
  {
    title: "Prova ve yedek senaryo",
    text: "Run-of-show, prova saatleri, yedek güç ve kritik geçişler saha günü başlamadan plana bağlanır.",
  },
];

const CORPORATE_PROCESS_STEPS = [
  "Brief ve hedef belirleme",
  "Mekan keşfi",
  "Sahne, LED ekran ve teknik plan",
  "İçerik ve run-of-show akışı",
  "Prova ve yedek senaryo",
  "Kurulum ve saha koordinasyonu",
  "Etkinlik günü operasyon yönetimi",
  "Söküm, teslim ve etkinlik sonrası kapanış",
];

const EVENT_TYPE_SOLUTIONS = [
  {
    title: "Lansman organizasyonları",
    text: "Ürün veya marka lansmanlarında sahne dili, LED içerik akışı, konuşmacı geçişleri ve ışık senaryosu aynı hikaye üzerinden planlanır.",
  },
  {
    title: "Konferans ve zirve organizasyonları",
    text: "Konuşmacı görünürlüğü, sunum ekranı, mikrofon planı, simultane ihtiyaçlar ve reji akışı katılımcı deneyimine göre dengelenir.",
  },
  {
    title: "Bayi toplantıları",
    text: "Geniş katılımlı bayi toplantılarında protokol düzeni, sahne-podyum ilişkisi, ses kapsaması ve LED görünürlüğü birlikte ele alınır.",
  },
  {
    title: "Gala ve ödül törenleri",
    text: "Ödül akışı, sahne girişleri, anons, ışık dili ve LED içerikleri marka prestijini destekleyecek kontrollü bir prodüksiyon planına bağlanır.",
  },
  {
    title: "Fuar ve marka deneyim alanları",
    text: "Fuar alanlarında LED ekran, podyum, ses, ışık ve yönlendirme kurgusu ziyaretçi trafiği ve marka etkileşimi dikkate alınarak hazırlanır.",
  },
  {
    title: "Açık alan kurumsal etkinlikleri",
    text: "Açık hava etkinliklerinde truss, sahne, LED ekran, enerji, hava koşulları ve saha güvenliği baştan birlikte değerlendirilir.",
  },
];

export const metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "kurumsal organizasyon",
    "kurumsal organizasyon şirketleri",
    "kurumsal etkinlik organizasyonu",
    "kurumsal etkinlik prodüksiyonu",
    "sahne led ekran prodüksiyonu",
  ],
  alternates: buildLanguageAlternates({
    tr: "/kurumsal-organizasyon",
    en: "/en/corporate-events",
    ru: "/ru/corporate-events",
    canonical: "/kurumsal-organizasyon",
    xDefault: "/kurumsal-organizasyon",
  }),
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Kurumsal organizasyon sahne, LED ekran ve teknik prodüksiyon Sahneva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: PAGE_DESCRIPTION,
    images: [`${ORIGIN}${OG_IMAGE}`],
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

function Section({
  id,
  children,
  className = "",
  dark = false,
  deferredClass = "",
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-14 md:py-20 ${
        dark ? "relative isolate overflow-hidden bg-[#0B1120] text-white" : "bg-white text-slate-950"
      } ${deferredClass} ${className}`}
    >
      {dark ? (
        <>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 grid-overlay opacity-35" />
          </div>
          <SahnevaGradientGlow mode="section" />
        </>
      ) : null}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc, dark = false, center = false }) {
  return (
    <header className={`${center ? "mx-auto text-center" : ""} mb-10 max-w-3xl`}>
      {eyebrow ? (
        <p
          className={`text-sm font-black uppercase tracking-normal ${
            dark ? "text-white" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-3xl font-black leading-tight tracking-normal md:text-5xl ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {desc ? (
        <p className={`mt-4 text-base leading-8 md:text-lg ${dark ? "text-white/[0.72]" : "text-slate-600"}`}>
          {desc}
        </p>
      ) : null}
    </header>
  );
}

function PremiumCard({ children, className = "", as: Component = "div" }) {
  return (
    <Component
      className={`border border-white/[0.12] bg-white/[0.055] p-5 shadow-[0_20px_70px_rgba(15,23,42,.22)] backdrop-blur ${className}`}
    >
      {children}
    </Component>
  );
}

function CorporateOrganizationJsonLd() {
  const webPageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const galleryId = `${PAGE_URL}#saha-kaniti`;
  const faqSchema = buildFaqSchema(
    FAQ_ITEMS.map(({ q, a }) => ({ question: q, answer: a })),
    {
      id: `${PAGE_URL}#faq`,
      pageId: webPageId,
      serviceId,
      inLanguage: "tr-TR",
    },
  );
  const faqNode = faqSchema
    ? Object.fromEntries(Object.entries(faqSchema).filter(([key]) => key !== "@context"))
    : null;

  const imageObjects = FEATURED_GALLERY.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#image-${index + 1}`,
    url: `${ORIGIN}${image.src}`,
    contentUrl: `${ORIGIN}${image.src}`,
    caption: image.alt,
    name: image.alt,
    inLanguage: "tr-TR",
    representativeOfPage: index === 0,
    about: { "@id": serviceId },
    mainEntityOfPage: { "@id": webPageId },
  }));

  const videoObjects = FEATURED_VIDEOS.map((video, index) => ({
    "@type": "VideoObject",
    "@id": `${PAGE_URL}#video-${index + 1}`,
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    ...(video.duration ? { duration: video.duration } : {}),
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    inLanguage: "tr-TR",
    isFamilyFriendly: true,
    publisher: { "@id": ORGANIZATION_ID },
    about: { "@id": serviceId },
    mainEntityOfPage: { "@id": webPageId },
  }));

  const graph = [
    {
      "@type": "WebPage",
      "@id": webPageId,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      dateModified: GUIDE_UPDATED_ISO,
      inLanguage: "tr-TR",
      isPartOf: { "@id": WEBSITE_ID },
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${ORIGIN}${HERO.src}`,
        ...HERO_IMAGE_SIZE,
        caption: HERO.alt,
      },
      image: [`${ORIGIN}${HERO.src}`, ...FEATURED_GALLERY.map((image) => `${ORIGIN}${image.src}`)],
      mainEntity: { "@id": serviceId },
      isRelatedTo: [
        { "@id": `${ORIGIN}/led-ekran-kiralama#service` },
        { "@id": `${ORIGIN}/sahne-kiralama#service` },
        { "@id": `${ORIGIN}/podyum-kiralama#service` },
        { "@id": `${ORIGIN}/ses-isik-sistemleri#service` },
        { "@id": `${ORIGIN}/truss-kiralama#service` },
        { "@id": `${ORIGIN}/projeler#webpage` },
        { "@id": `${ORIGIN}/blog/kurumsal-etkinlik-planlama-rehberi-2026#article` },
        { "@id": `${ORIGIN}/blog/kurumsal-etkinlik-yonetimi#article` },
      ],
      hasPart: [
        { "@id": `${PAGE_URL}#faq` },
        { "@id": galleryId },
        ...imageObjects.map((image) => ({ "@id": image["@id"] })),
        ...videoObjects.map((video) => ({ "@id": video["@id"] })),
      ],
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Kurumsal Organizasyon ve Teknik Prodüksiyon",
      serviceType: [
        "kurumsal organizasyon",
        "kurumsal etkinlik organizasyonu",
        "kurumsal etkinlik prodüksiyonu",
        "sahne ve LED ekran prodüksiyonu",
        "konferans, lansman ve gala teknik prodüksiyonu",
      ],
      description: PAGE_DESCRIPTION,
      image: FEATURED_GALLERY.map((image) => `${ORIGIN}${image.src}`),
      provider: { "@id": ORGANIZATION_ID },
      brand: { "@id": ORGANIZATION_ID },
      areaServed: [{ "@type": "Country", name: "Türkiye" }],
      url: PAGE_URL,
    },
    {
      "@type": "CollectionPage",
      "@id": galleryId,
      name: "Kurumsal organizasyon saha kanıtı",
      url: `${PAGE_URL}#saha-kaniti`,
      inLanguage: "tr-TR",
      isPartOf: { "@id": webPageId },
      about: { "@id": serviceId },
      hasPart: imageObjects.map((image) => ({ "@id": image["@id"] })),
    },
    ...imageObjects,
    ...videoObjects,
  ];

  if (faqNode) graph.push(faqNode);

  return (
    <JsonLdScript
      id="ld-json-kurumsal-organizasyon"
      data={{ "@context": "https://schema.org", "@graph": graph }}
    />
  );
}

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#05070d] pb-12 pt-24 text-white md:pb-16 md:pt-28 lg:min-h-[760px] lg:pb-20 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <picture>
        <source media="(max-width: 640px)" srcSet={HERO.mobileSrc ?? HERO.src} />
        <source media="(max-width: 1024px)" srcSet={HERO.tabletSrc ?? HERO.src} />
        <img
          src={HERO.src}
          alt={HERO.alt}
          width={HERO_IMAGE_SIZE.width}
          height={HERO_IMAGE_SIZE.height}
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
        />
      </picture>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.96)_0%,rgba(2,6,23,.86)_36%,rgba(2,6,23,.56)_64%,rgba(2,6,23,.12)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05070d] via-[#05070d]/75 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 hidden grid-overlay opacity-35 md:block" aria-hidden="true" />
      <div className="absolute inset-0 corporate-stage-lights" aria-hidden="true">
        <span className="corporate-stage-beam corporate-stage-beam-left" />
        <span className="corporate-stage-beam corporate-stage-beam-right" />
        <span className="corporate-stage-sweep" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 md:px-6 lg:min-h-[560px] lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center">
        <div className="min-w-0 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 border border-white/[0.16] bg-black/[0.34] px-4 py-2 text-sm font-bold text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,.85)]" aria-hidden="true" />
            <span>Türkiye'nin Kurumsal Etkinlik Teknoloji Partneri</span>
          </div>

          <h1
            id="hero-title"
            className="max-w-4xl text-5xl font-black leading-[0.96] tracking-normal text-white md:text-7xl lg:text-8xl"
          >
            Kurumsal Organizasyon
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-black leading-tight text-sky-100 md:text-3xl">
            <span className="block sm:inline">Sahne, LED ekran ve</span>{" "}
            <span className="block sm:inline">teknik prodüksiyon</span>{" "}
            <span className="block sm:inline">tek ekipten.</span>
          </p>

          <p className="mt-5 max-w-[20rem] break-words text-base leading-8 text-white/[0.82] sm:max-w-2xl md:text-lg">
            Sahneva, kurumsal organizasyonlarda sahne, LED ekran, ses-ışık, truss ve teknik reji süreçlerini tek ekipten yöneten etkinlik teknoloji partneridir. Lansman, konferans ve gala sahnelerinde LED görüntüsü, reji akışı, kurumsal kimliğinize uygun sahne dili ve etkinlik sonrası söküm planı tek muhatapla ilerler.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold text-white/[0.86]">
            {ASSURANCE_ITEMS.slice(0, 4).map((item) => (
              <span key={item} className="border border-white/[0.14] bg-white/[0.08] px-3.5 py-2 backdrop-blur-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={generateWhatsAppLink("kurumsal organizasyon")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-white px-6 py-4 font-black text-slate-950 transition hover:bg-sky-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
            >
              <PhoneCall size={20} aria-hidden="true" />
              <span>Kurumsal Teklif Al</span>
            </a>
            <Link
              href="#saha-kaniti"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 border border-white/[0.26] bg-black/[0.28] px-6 py-4 font-black text-white backdrop-blur-md transition hover:bg-white/[0.10] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/[0.22]"
            >
              <Camera size={20} aria-hidden="true" />
              <span>Saha Kanıtını Gör</span>
            </Link>
          </div>
        </div>

        <aside className="hidden border border-white/[0.14] bg-black/[0.30] p-5 backdrop-blur-md lg:block" aria-label="Kurumsal organizasyon operasyon özeti">
          <div className="flex items-center gap-3 border-b border-white/[0.10] pb-4">
            <Sparkles size={22} className="text-sky-200" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-white/[0.62]">Sahneva Ops</p>
              <p className="text-lg font-black text-white">Premium prodüksiyon akışı</p>
            </div>
          </div>
          <dl className="mt-5 grid gap-4">
            {[
              ...HERO_STATS,
              { value: "81 il", label: "Türkiye geneli kurulum" },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-b border-white/[0.10] pb-4 last:border-b-0 last:pb-0">
                <dt className="text-2xl font-black text-white">{item.value}</dt>
                <dd className="text-sm font-medium text-white/[0.72]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function VisualProof() {
  const heroImage = FEATURED_GALLERY[0];
  const sideImages = FEATURED_GALLERY.slice(1, 3);

  return (
    <Section id="saha-kaniti" dark className="pt-10 md:pt-14" deferredClass="content-visibility-auto cv-corporate-proof">
      <SectionHeader
        dark
        eyebrow="Saha referansları"
        title="Sahne kalitesi gerçek uygulama görüntülerinde görünür."
        desc="Lansman, konferans ve gala projelerinde LED ekran, sahne, ses-ışık ve reji kurulumlarını gerçek saha örnekleriyle değerlendirilebilir hale getiriyoruz."
      />

      <div className="grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
        <article className="group overflow-hidden border border-white/[0.12] bg-white/[0.05] shadow-2xl">
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 64vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              loading="lazy"
              fetchPriority="low"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              quality={82}
              unoptimized={shouldBypassImageOptimizer(heroImage.src)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 max-w-2xl">
              <p className="mb-2 inline-flex border border-sky-200/[0.24] bg-sky-400/[0.14] px-3 py-1 text-xs font-black uppercase tracking-normal text-sky-100">
                300 m² P1.9 indoor LED
              </p>
              <p role="heading" aria-level={3} className="text-2xl font-black text-white md:text-4xl">
                Yakın izleme mesafesinde premium görüntü kalitesi
              </p>
            </div>
          </div>
        </article>

        <div className="grid gap-5">
          {sideImages.map((image) => (
            <article key={image.src} className="overflow-hidden border border-white/[0.12] bg-white/[0.05]">
              <div className="relative aspect-[16/10] bg-slate-950">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32vw"
                  className="object-cover"
                  loading="lazy"
                  fetchPriority="low"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  quality={80}
                  unoptimized={shouldBypassImageOptimizer(image.src)}
                />
              </div>
              <p className="p-4 text-sm font-semibold leading-6 text-white/[0.78]">{image.alt}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {FEATURED_GALLERY.slice(3, 6).map((image) => (
          <article key={image.src} className="overflow-hidden border border-white/[0.10] bg-white/[0.04]">
            <div className="relative aspect-[4/3] bg-slate-950">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                loading="lazy"
                fetchPriority="low"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                quality={78}
                unoptimized={shouldBypassImageOptimizer(image.src)}
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function VideoProof() {
  return (
    <Section id="videolar" dark className="pt-0 md:pt-4" deferredClass="content-visibility-auto cv-corporate-videos">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeader
            dark
            eyebrow="Saha videoları"
            title="Gerçek saha videoları ve uygulama örnekleri"
            desc="Gerçek sahadan seçilen kurulum görüntüleri; ekip disiplini, LED ekran etkisi ve teknik prodüksiyon temposunu daha net gösterir."
          />
          <div className="grid gap-3 text-sm font-semibold text-white/[0.78]">
            {["Gala ve lansman sahnesi", "Konferans LED ekran akışı", "Teknik reji ve kurulum disiplini"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-emerald-300" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {FEATURED_VIDEOS.map((video) => (
            <article key={video.id} className="border border-white/[0.10] bg-white/[0.05] p-3">
              <LazyVideoEmbed
                videoId={video.id}
                title={video.title}
                thumbnailUrl={`https://i.ytimg.com/vi/${video.id}/sddefault.jpg`}
                className="rounded-none shadow-none"
              />
              <div className="p-3">
                <p className="text-xs font-black uppercase tracking-normal text-white">{video.eyebrow}</p>
                <p role="heading" aria-level={3} className="mt-2 text-lg font-black leading-snug text-white">{video.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.68]">{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function TechnicalDiscoverySection() {
  return (
    <Section id="teknik-kesif" className="bg-slate-50" deferredClass="content-visibility-auto cv-corporate-discovery">
      <SectionHeader
        eyebrow="Teknik keşif"
        title="Mekan, enerji ve sahne akışı aynı planda netleşir."
        desc="Format, kişi sayısı, sahne görünürlüğü, yükleme koşulları ve prova süresi erken netleştiğinde teknik kapsam daha sağlıklı hazırlanır."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {TECHNICAL_DISCOVERY.map((item) => (
          <article key={item.title} className="border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-blue-100 bg-blue-50 text-blue-700">
              <ClipboardCheck size={21} aria-hidden="true" />
            </div>
            <p role="heading" aria-level={3} className="text-lg font-black text-slate-950">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Positioning() {
  return (
    <Section id="kurumsal-organizasyon" className="bg-slate-50" deferredClass="content-visibility-auto cv-corporate-positioning">
      <SectionHeader
        eyebrow="Premium konumlandırma"
        title="Kurumsal organizasyon, ekipman listesi değil sahne etkisidir."
        desc="Kurumsal organizasyon şirketleri arasında fark yaratan şey yalnızca ekipman çeşitliliği değil; sahne, LED ekran, ses-ışık, reji ve saha ekibinin tek planla çalışmasıdır."
      />

      <p className="mb-8 max-w-4xl text-lg leading-8 text-slate-700">
        Sahneva olarak kurumsal organizasyon hizmetlerini yalnızca ekipman temini olarak değil; sahne mimarisi,
        LED ekran, ses-ışık, reji, prova ve saha koordinasyonunu kapsayan uçtan uca teknik prodüksiyon süreci
        olarak ele alıyoruz.
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {OVERVIEW_POINTS.slice(0, 6).map((item) => (
          <article key={item.title} className="border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-blue-100 bg-blue-50 text-blue-700">
              <BadgeCheck size={22} aria-hidden="true" />
            </div>
            <p role="heading" aria-level={3} className="text-xl font-black text-slate-950">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function CorporateGuideSections() {
  return (
    <>
      <Section id="kurumsal-organizasyon-nedir" className="bg-white" deferredClass="content-visibility-auto cv-corporate-guide">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="Kapsam tanımı"
            title="Kurumsal Organizasyon Nedir?"
            desc="Kurumsal organizasyon; marka, şirket veya kurumların belirli bir hedef doğrultusunda düzenlediği lansman, konferans, bayi toplantısı, gala, ödül töreni, fuar katılımı veya açık alan etkinliklerini kapsar."
          />
          <div className="grid gap-5 text-base leading-8 text-slate-700 md:text-lg">
            <p>
              Bu süreç yalnızca davetli yönetimi veya ekipman kiralama ile sınırlı değildir. Sahneva için kurumsal organizasyon; teknik prodüksiyon kapsamını, prova akışını ve saha koordinasyonunu birlikte yöneten planlı bir çalışma disiplinidir.
            </p>
            <p>
              Doğru planlanan bir kurumsal etkinlikte sahne, konuşmacı, marka görselleri, teknik ekip ve etkinlik sonrası kapanış aynı operasyon planı içinde ilerler. Böylece marka sahnede daha kontrollü, net ve güven veren bir görünüm kazanır.
            </p>
          </div>
        </div>
      </Section>

      <Section id="kurumsal-organizasyon-sureci" className="bg-slate-50" deferredClass="content-visibility-auto cv-corporate-guide-process">
        <SectionHeader
          eyebrow="Planlama disiplini"
          title="Kurumsal Organizasyon Süreci Nasıl Planlanır?"
          desc="Kurumsal etkinliklerde süreç, ilk görüşmeden etkinlik sonrası söküme kadar aşamalı ilerler. Her adımın baştan netleşmesi, teknik riskleri azaltır ve teklif kapsamını daha anlaşılır hale getirir."
        />
        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div className="border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-base leading-8 text-slate-700">
              Daha geniş kontrol listesi için{" "}
              <Link href="/blog/kurumsal-etkinlik-planlama-rehberi-2026" className="font-black text-blue-700 underline underline-offset-4">
                kurumsal etkinlik planlama rehberi
              </Link>{" "}
              içeriğindeki brief, bütçe, teknik keşif ve operasyon başlıkları da incelenebilir.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {CORPORATE_PROCESS_STEPS.map((step, index) => (
              <li key={step} className="flex gap-3 border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-slate-950 text-xs font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-sm font-black leading-6 text-slate-800">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section id="etkinlik-turleri-kurumsal-cozumler" className="bg-white" deferredClass="content-visibility-auto cv-corporate-event-types">
        <SectionHeader
          eyebrow="Etkinlik türleri"
          title="Etkinlik Türlerine Göre Kurumsal Çözümler"
          desc="Her kurumsal etkinlik aynı teknik dili gerektirmez. Lansman, konferans, bayi toplantısı, gala, fuar veya açık hava organizasyonlarında teknik prodüksiyon kapsamı etkinliğin hedefiyle birlikte değerlendirilir."
        />
        <p className="mb-8 max-w-4xl text-base leading-8 text-slate-700 md:text-lg">
          Sahneva, etkinlik türüne göre ekipman listesinden önce sahne deneyimini planlar. İzleyici mesafesi, marka görünürlüğü, konuşmacı akışı, içerik formatı ve saha koşulları birlikte okunduğunda kurumsal prodüksiyon daha güçlü bir bütünlüğe kavuşur.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EVENT_TYPE_SOLUTIONS.map((item) => (
            <article key={item.title} className="border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="etkinlik-sonrasi-kapanis" dark deferredClass="content-visibility-auto cv-corporate-closeout">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <SectionHeader
            dark
            eyebrow="Kapanış yönetimi"
            title="Etkinlik Sonrası Kapanış ve Teknik Raporlama"
            desc="Kurumsal organizasyonlarda iş, etkinlik bittiği anda tamamlanmış sayılmaz. Söküm, ekipman çıkışı, mekan teslimi ve teknik kapanış planı da operasyonun parçasıdır."
          />
          <div className="grid gap-5">
            <PremiumCard as="article">
              <h3 className="text-xl font-black text-white">Söküm ve teslim</h3>
              <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                Sahneva, kurulum kadar söküm sürecini de planlı yürütür. Ekipmanların güvenli şekilde toplanması, kablo ve enerji altyapısının kapatılması, sahne-podyum alanının teslimi ve varsa mekan yönetimiyle kapanış koordinasyonu aynı saha sorumluluğu içinde ilerler.
              </p>
            </PremiumCard>
            <PremiumCard as="article">
              <h3 className="text-xl font-black text-white">Teknik kapanış notları</h3>
              <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                Etkinlik sonrası ekip içinde kurulum, prova, akış ve teknik operasyon notları değerlendirilir. Tekrarlayan kurumsal etkinliklerde bu notlar sonraki planlamanın daha hızlı ve kontrollü ilerlemesine yardımcı olur.
              </p>
            </PremiumCard>
          </div>
        </div>
      </Section>
    </>
  );
}

function PackagePlanningSection() {
  return (
    <Section id="kapsam-planlama" className="bg-white" deferredClass="content-visibility-auto cv-corporate-packages">
      <SectionHeader
        eyebrow="Kapsam ve teklif"
        title="İlk brief doğru kurulursa teknik kapsam daha net çıkar."
        desc="Etkinlik formatı, tarih, mekan, kişi sayısı ve sahne beklentisi birlikte değerlendirildiğinde teklif kalemleri daha sağlıklı planlanır."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_.9fr]">
        <div className="grid gap-4 md:grid-cols-3">
          {PACKAGE_OPTIONS.map((item) => (
            <article key={item.title} className="border border-slate-200 bg-slate-50 p-6">
              <p role="heading" aria-level={3} className="text-lg font-black text-slate-950">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              <a
                href={generateWhatsAppLink(item.whatsappIntent)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700 hover:text-blue-900"
              >
                {item.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <div className="border border-slate-200 bg-white p-6 shadow-sm">
          <p role="heading" aria-level={3} className="text-xl font-black text-slate-950">Planlama akışı</p>
          <div className="mt-5 grid gap-4">
            {PLANNING_STEPS.map((step, index) => (
              <div key={step.title} className="grid grid-cols-[2rem_1fr] gap-4">
                <span className="flex h-8 w-8 items-center justify-center bg-slate-950 text-xs font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-black text-slate-950">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function OperationFlow() {
  return (
    <Section id="akis" dark deferredClass="content-visibility-auto cv-corporate-flow">
      <SectionHeader
        dark
        eyebrow="Net teknik akış"
        title="Sahada sakin görünen iş, öncesinde doğru planlanmış iştir."
        desc="Etkinlik formatı, mekan, sahne görünürlüğü, teknik ekipman ve prova akışı baştan netleştiğinde saha günü daha kontrollü ilerler."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {OPERATION_STEPS.map((step, index) => (
          <PremiumCard key={step.title} as="article" className="min-h-full">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-black uppercase tracking-normal text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <ClipboardCheck size={22} className="text-emerald-300" aria-hidden="true" />
            </div>
            <p role="heading" aria-level={3} className="mt-8 text-xl font-black text-white">{step.title}</p>
            <p className="mt-3 text-sm leading-7 text-white/[0.70]">{step.text}</p>
          </PremiumCard>
        ))}
      </div>
    </Section>
  );
}

function Formats() {
  return (
    <Section id="formatlar" className="bg-white" deferredClass="content-visibility-auto cv-corporate-formats">
      <SectionHeader
        eyebrow="Kullanım alanları"
        title="Lansman, konferans ve gala için tek prodüksiyon dili"
        desc="Kurumsal organizasyon projelerinde marka sahnesi, konuşmacı akışı, LED görüntüsü ve teknik reji aynı prodüksiyon diliyle planlanır."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {FORMAT_ITEMS.map((item) => (
          <article key={item.title} className="group overflow-hidden border border-slate-800 bg-[#05070d] text-white shadow-sm">
            <div className="relative aspect-[4/3] bg-slate-900">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                quality={78}
                unoptimized={shouldBypassImageOptimizer(item.src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
            </div>
            <div className="border-t border-white/[0.10] bg-[#05070d] p-5">
              <p role="heading" aria-level={3} className="text-xl font-black text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.82]">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProductionStack() {
  const icons = [MonitorCheck, Layers3, Zap, RadioTower, ShieldCheck, ClipboardCheck];

  return (
    <Section id="produksiyon" dark deferredClass="content-visibility-auto cv-corporate-stack">
      <SectionHeader
        dark
        eyebrow="Teknik prodüksiyon omurgası"
        title="Sahne, LED ekran, ses-ışık ve reji aynı masada."
        desc="Büyük etkinliklerde kalite; ekipman sayısından çok teknik disiplin, yedek plan ve saha koordinasyonuyla görünür olur."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ITEMS.slice(0, 6).map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <PremiumCard key={item.title} as="article" className="group">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-sky-200/[0.18] bg-sky-300/[0.10] text-sky-200">
                <Icon size={23} aria-hidden="true" />
              </div>
              <p role="heading" aria-level={3} className="text-xl font-black text-white">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/[0.68]">{item.desc}</p>
              <a
                href={generateWhatsAppLink(item.whatsappIntent)}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-black text-sky-200 transition group-hover:text-white"
              >
                {SERVICE_CTA_LABELS[index] ?? "Teknik kapsamı konuş"}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </PremiumCard>
          );
        })}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="border border-white/[0.10] bg-white/[0.05] p-6">
          <p role="heading" aria-level={3} className="text-2xl font-black text-white">Teknik kontrol listesi</p>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/[0.76]">
            {TECHNICAL_POINTS.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 bg-emerald-300" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-white/[0.10] bg-white/[0.05] p-6">
          <p role="heading" aria-level={3} className="text-2xl font-black text-white">Hedef etkinlik türleri</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {USE_CASES.map((item) => (
              <span key={item} className="border border-white/[0.12] bg-white/[0.06] px-3 py-2 text-sm font-semibold text-white/[0.80]">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-white/[0.68]">
            Kurumsal organizasyon şirketi arayan markalar için teknik kapsamın,
            saha ekibinin ve gerçek uygulama deneyiminin net görünmesi önemlidir.
          </p>
        </div>
      </div>
    </Section>
  );
}

function InternalLinks() {
  return (
    <Section id="baglantilar" className="bg-slate-50" deferredClass="content-visibility-auto cv-corporate-links">
      <SectionHeader
        eyebrow="Tamamlayıcı hizmetler"
        title="Sahne, LED ekran ve proje referansları aynı akışta birleşir"
        desc="Kurumsal etkinliklerde sahne, LED ekran, podyum, ses-ışık, truss ve proje referansları aynı teknik planın parçaları olarak değerlendirilir."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_.9fr]">
        <div className="grid gap-3 sm:grid-cols-2">
          {RELATED_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between border border-slate-200 bg-white px-5 py-4 font-black text-slate-950 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <span>{link.label}</span>
              <ArrowRight size={18} className="text-blue-700 transition group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ))}
        </div>

        <div className="border border-slate-200 bg-white p-6">
          <p className="text-sm font-black uppercase tracking-normal text-blue-700">{CLUSTER.eyebrow}</p>
          <p role="heading" aria-level={3} className="mt-3 text-2xl font-black text-slate-950">{CLUSTER.title}</p>
          <p className="mt-3 text-sm leading-7 text-slate-600">{CLUSTER.description}</p>
          <div className="mt-5 grid gap-3">
            {CLUSTER.guides.slice(0, 2).map((guide) => (
              <Link key={guide.href} href={guide.href} className="text-sm font-black text-blue-700 hover:text-blue-900">
                {guide.anchorText}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function BrandEquipmentSection() {
  return (
    <Section id="ekipman-guveni" className="bg-slate-50" deferredClass="content-visibility-auto cv-corporate-equipment">
      <SectionHeader
        eyebrow="Ekipman ve ekip gücü"
        title="Ses, görüntü ve iletişim altyapısı sahada aynı ekip tarafından yönetilir."
        desc="Marka etkinliklerinde görüntü kalitesi kadar konuşma netliği, interkom iletişimi, yedek güç ve saha görev dağılımı da prodüksiyon kalitesini belirler."
      />

      <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <div className="border border-slate-200 bg-white p-6 shadow-sm">
          <p role="heading" aria-level={3} className="text-xl font-black text-slate-950">Saha güvence başlıkları</p>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-700">
            {ASSURANCE_ITEMS.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {BRAND_LOGOS.slice(0, 6).map((brand) => (
            <div key={brand.src} className="flex min-h-24 items-center justify-center border border-slate-200 bg-white p-4">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="max-h-12 w-auto object-contain opacity-80 grayscale"
                loading="lazy"
                unoptimized={shouldBypassImageOptimizer(brand.src)}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section id="sss" dark deferredClass="content-visibility-auto cv-corporate-faq">
      <SectionHeader
        dark
        eyebrow="Kısa cevaplar"
        title="Teklif öncesi sorular"
        desc="Teklif öncesinde kapsamı, saha akışını ve teknik sorumlulukları netleştiren kısa cevaplar."
      />

      <div className="grid gap-3">
        {FAQ_ITEMS.map((item) => (
          <details key={item.q} className="group border border-white/[0.10] bg-white/[0.05] p-5">
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-2 text-left text-lg font-black text-white">
              <span>{item.q}</span>
              <ArrowRight size={18} className="shrink-0 transition group-open:rotate-90" aria-hidden="true" />
            </summary>
            <p className="mt-4 text-sm leading-7 text-white/[0.70]">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] py-16 text-white md:py-20" aria-labelledby="cta-title">
      <div className="absolute inset-0 grid-overlay opacity-35" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-normal text-white">Teklif briefi</p>
          <h2 id="cta-title" className="mt-3 text-3xl font-black leading-tight md:text-5xl">
            Kurumsal organizasyon için doğru sahne etkisini birlikte kuralım.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/[0.72] md:text-lg">
            Tarih, mekan, kişi sayısı, sahne beklentisi ve LED ekran ihtiyacını paylaşın. Teknik kapsamı netleştirip
            sade bir teklif olarak geri dönelim.
          </p>
        </div>
        <a
          href={generateWhatsAppLink("kurumsal organizasyon briefi")}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex min-h-[56px] items-center justify-center gap-2 bg-white px-7 py-4 font-black text-slate-950 transition hover:bg-sky-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300"
        >
          <PhoneCall size={20} aria-hidden="true" />
          <span>WhatsApp ile Brief Paylaş</span>
        </a>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: `${ORIGIN}/` },
          { name: "Hizmetler", url: `${ORIGIN}/hizmetler` },
          { name: "Kurumsal Organizasyon", url: PAGE_URL },
        ]}
        baseUrl={ORIGIN}
      />
      <CorporateOrganizationJsonLd />
      <main className="bg-white">
        <Hero />
        <VisualProof />
        <TechnicalDiscoverySection />
        <VideoProof />
        <Positioning />
        <CorporateGuideSections />
        <OperationFlow />
        <Formats />
        <PackagePlanningSection />
        <ProductionStack />
        <BrandEquipmentSection />
        <FAQSection />
        <InternalLinks />
        <CTASection />
      </main>
    </>
  );
}
