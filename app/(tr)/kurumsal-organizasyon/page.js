import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CirclePlay,
  Clapperboard,
  ClipboardCheck,
  MoveRight,
  MonitorCheck,
  PhoneCall,
  RadioTower,
  Ruler,
  ShieldCheck,
  Zap,
} from "lucide-react";

import AccessibleFaq from "@/components/AccessibleFaq.client";
import SahnevaGradientGlow from "@/components/ui/SahnevaGradientGlow";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
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
  GUIDE_PROMISES,
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
const PAGE_TITLE = "Kurumsal Organizasyon Şirketleri | Sahne, LED Ekran ve Teknik Prodüksiyon";
const PAGE_DESCRIPTION =
  "Kurumsal organizasyon şirketi arayan markalar için konferans, lansman, gala ve bayi toplantılarında sahne, LED ekran, ses-ışık, teknik keşif ve saha operasyonu.";
const OG_TITLE = "Kurumsal Organizasyon Şirketleri | Sahneva";
const OG_DESCRIPTION =
  "Konferans, lansman, gala ve bayi toplantılarında sahne, LED ekran, ses-ışık ve saha operasyonunu Sahneva ile tek ekipten planlayın.";
const TWITTER_DESCRIPTION =
  "Kurumsal etkinliklerde sahne, LED ekran, ses-ışık ve teknik prodüksiyon süreci.";
const HERO_IMAGE_SIZE = { width: 1200, height: 630 };
const OG_IMAGE_DIMENSIONS = {
  "/img/kurumsal/premium/acik-hava-konser.webp": { width: 1600, height: 1199 },
  "/img/kurumsal/premium/festival-kalabalik.webp": { width: 1290, height: 1600 },
  "/img/kurumsal/premium/truss-sahne-cati.webp": { width: 1600, height: 900 },
};

const BLUR_DATA_URL = DEFAULT_BLUR_DATA_URL;
const generateWhatsAppLink = (intent = "kurumsal organizasyon") => {
  const text = `Merhaba, ${intent} için teklif istiyorum. Etkinlik türü: [konferans/lansman/gala], Tarih: [gg.aa.yyyy], Kişi sayısı: [xxx].`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

const HOW_TO_STEPS = [
  "Hedef ve etkinlik türünü belirle",
  "Katılımcı sayısı ve mekanı netleştir",
  "Teknik keşif yap",
  "Sahne, LED ekran, ses-ışık planını oluştur",
  "Run-of-show hazırla",
  "Kurulum ve prova planını yap",
  "Etkinlik sonrası ölçüm ve raporlama yap",
];

const HERO_SIGNAL_ROWS = [
  { Icon: Ruler, label: "Mekan okuması", value: "ölçü, yükleme, görüş" },
  { Icon: MonitorCheck, label: "Görsel omurga", value: "sahne, LED, içerik akışı" },
  { Icon: Zap, label: "Risk katmanı", value: "güç, prova, yedek plan" },
];

const TECHNICAL_DISCOVERY_STEPS = [
  {
    title: "Mekan okuması",
    desc: "Salon ölçüsü, tavan yüksekliği, yükleme alanı, giriş-çıkış ve izleyici akışı birlikte değerlendirilir.",
    note: "Alan",
    compact: "Mekan ölçüsü / yükleme / izleyici akışı",
    position: "lg:left-6 lg:top-8",
  },
  {
    title: "Enerji ve taşıyıcı kontrolü",
    desc: "Güç noktaları, kablo güzergahı, truss/podyum yerleşimi ve yük güvenliği etkinlikten önce netleşir.",
    note: "Altyapı",
    compact: "Enerji / kablo / truss / yük güvenliği",
    position: "lg:right-6 lg:top-8",
  },
  {
    title: "Görüş ve ses kapsaması",
    desc: "Sahne, LED ekran, hoparlör, ışık ve kamera açıları katılımcının deneyimine göre konumlandırılır.",
    note: "Deneyim",
    compact: "Görüş açısı / ses kapsaması / kamera",
    position: "lg:right-8 lg:bottom-10",
  },
  {
    title: "Risk ve yedek senaryo",
    desc: "Kurulum süresi, hava/zemin riski, yedek güç, teknik ekip ve acil müdahale planı görünür hale gelir.",
    note: "Güvenlik",
    compact: "Hava / zemin / yedek güç / acil plan",
    position: "lg:left-8 lg:bottom-10",
  },
  {
    title: "Teklif ve run-of-show",
    desc: "Keşif çıktısı; net ekipman listesi, saha görevleri, prova akışı ve gerçekçi bütçe kalemlerine dönüşür.",
    note: "Plan",
    compact: "Ekip listesi / prova / bütçe",
    position: "lg:left-1/2 lg:top-5 lg:-translate-x-1/2",
  },
];

export const metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "kurumsal organizasyon",
    "kurumsal etkinlik organizasyonu",
    "kurumsal organizasyon şirketleri",
    "istanbul kurumsal organizasyon",
    "kurumsal etkinlik prodüksiyonu",
  ],
  alternates: buildLanguageAlternates({
    tr: "/kurumsal-organizasyon",
    en: "/en/corporate-events",
    canonical: "/kurumsal-organizasyon",
    xDefault: "/en/corporate-events",
  }),
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: `${ORIGIN}/kurumsal-organizasyon`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}${HERO.src}`,
        ...HERO_IMAGE_SIZE,
        alt: HERO.alt,
      },
      ...GALLERY_IMAGES.slice(0, 3).map((image) => ({
        url: `${ORIGIN}${image.src}`,
        ...OG_IMAGE_DIMENSIONS[image.src],
        alt: image.alt,
      })),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: TWITTER_DESCRIPTION,
    images: [`${ORIGIN}${HERO.src}`],
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

function SectionShell({ variant = "light", id, children }) {
  const variantClass = {
    light: "bg-white",
    soft: "bg-slate-50",
    ink: "relative isolate overflow-hidden bg-[#0B1120] text-white",
  };

  return (
    <section id={id} className={`${variantClass[variant]} scroll-mt-24 py-14 md:py-16`}>
      {variant === "ink" ? (
        <>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0 grid-overlay opacity-45" />
          </div>
          <SahnevaGradientGlow mode="section" />
        </>
      ) : null}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}

function H2({ kicker, title, desc, center = false, dark = false }) {
  return (
    <header className={`${center ? "mx-auto text-center" : ""} mb-10 min-w-0 max-w-3xl`}>
      {kicker ? (
        <div
          className={`text-sm font-semibold uppercase tracking-normal ${
            dark
              ? "text-sky-200"
              : "text-blue-700"
          }`}
        >
          <span>{kicker}</span>
        </div>
      ) : null}
      <h2
        className={`mt-3 max-w-full break-words text-2xl font-black tracking-normal sm:text-3xl md:text-4xl ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {desc ? (
        <p className={`mt-4 max-w-full break-words text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-gray-600"}`}>
          {desc}
        </p>
      ) : null}
    </header>
  );
}

function Card({ children, dark = false, className = "" }) {
  return (
    <div
      className={`rounded-lg border p-5 ${className} ${
        dark ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-white"
      }`}
    >
      {children}
    </div>
  );
}

function CorporateOrganizationJsonLd() {
  const pageUrl = `${ORIGIN}/kurumsal-organizasyon`;
  const webPageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const howToId = `${pageUrl}#kurumsal-etkinlik-planlama-howto`;
  const galleryId = `${pageUrl}#image-gallery`;

  const faqNode = buildFaqSchema(FAQ_ITEMS.map(({ q, a }) => ({ question: q, answer: a })));
  const howToNode = {
    "@type": "HowTo",
    "@id": howToId,
    name: "Kurumsal etkinlik nasıl planlanır?",
    description:
      "Kurumsal etkinlik planlamasında hedef, mekan, teknik keşif, sahne, LED ekran, ses-ışık, run-of-show, prova ve raporlama adımlarını içeren kısa süreç.",
    inLanguage: "tr-TR",
    supply: [
      { "@type": "HowToSupply", name: "Etkinlik briefi" },
      { "@type": "HowToSupply", name: "Mekan planı" },
      { "@type": "HowToSupply", name: "Teknik prodüksiyon ihtiyaç listesi" },
    ],
    step: HOW_TO_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step,
      text: step,
      url: `${pageUrl}#planlama`,
    })),
  };
  const videoObjects = VIDEO_GALLERY.map((video, index) => ({
    "@type": "VideoObject",
    "@id": `${pageUrl}#video-${index + 1}`,
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    duration: video.duration,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    inLanguage: "tr-TR",
    isFamilyFriendly: true,
    publisher: { "@id": ORGANIZATION_ID },
    about: { "@id": serviceId },
    mainEntityOfPage: { "@id": webPageId },
  }));
  const galleryImageObjects = GALLERY_IMAGES.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${pageUrl}#gallery-image-${index + 1}`,
    url: `${ORIGIN}${image.src}`,
    contentUrl: `${ORIGIN}${image.src}`,
    caption: image.alt,
    name: image.alt,
    inLanguage: "tr-TR",
    representativeOfPage: index === 0,
    about: { "@id": serviceId },
    mainEntityOfPage: { "@id": webPageId },
  }));

  const graph = [
    {
      "@type": "WebPage",
      "@id": webPageId,
      url: pageUrl,
      isRelatedTo: [
        { "@id": `${ORIGIN}/sahne-kiralama#service` },
        { "@id": `${ORIGIN}/led-ekran-kiralama#service` },
        { "@id": `${ORIGIN}/podyum-kiralama#service` },
        { "@id": `${ORIGIN}/ses-isik-sistemleri#service` },
        { "@id": `${ORIGIN}/truss-kiralama#service` },
        { "@id": `${ORIGIN}/projeler#webpage` },
        { "@id": `${ORIGIN}/blog/kurumsal-etkinlik-planlama-rehberi-2026#article` },
        { "@id": `${ORIGIN}/blog/kurumsal-etkinlik-yonetimi#article` },
      ],
      name: PAGE_TITLE,
      description: metadata.description,
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
      image: [
        `${ORIGIN}${HERO.src}`,
        ...GALLERY_IMAGES.slice(0, 5).map((image) => `${ORIGIN}${image.src}`),
      ],
      mainEntity: { "@id": serviceId },
      hasPart: [
        { "@id": howToId },
        { "@id": galleryId },
        ...videoObjects.map((video) => ({ "@id": video["@id"] })),
        ...galleryImageObjects.map((image) => ({ "@id": image["@id"] })),
      ],
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Kurumsal Organizasyon Şirketleri ve Teknik Prodüksiyon",
      serviceType: [
        "Kurumsal etkinlik organizasyonu",
        "Kurumsal organizasyon şirketi",
        "Kurumsal organizasyon şirketleri",
        "Ürün lansmanı organizasyonu",
        "Bayi toplantısı organizasyonu",
        "Gala ve konferans prodüksiyonu",
        "Sahne, LED ekran, ses-ışık ve truss kurulumu",
      ],
      description: metadata.description,
      image: GALLERY_IMAGES.slice(0, 5).map((image) => `${ORIGIN}${image.src}`),
      provider: { "@id": ORGANIZATION_ID },
      brand: { "@id": ORGANIZATION_ID },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "İstanbul" },
      ],
      url: pageUrl,
    },
    {
      "@type": "CollectionPage",
      "@id": galleryId,
      name: "Kurumsal organizasyon proje görselleri",
      url: `${pageUrl}#projeler`,
      inLanguage: "tr-TR",
      isPartOf: { "@id": webPageId },
      about: { "@id": serviceId },
      hasPart: galleryImageObjects.map((image) => ({ "@id": image["@id"] })),
    },
  ];

  if (faqNode) graph.push(faqNode);
  graph.push(howToNode);
  graph.push(...videoObjects);
  graph.push(...galleryImageObjects);

  return <JsonLdScript id="ld-json-kurumsal" data={{ "@context": "https://schema.org", "@graph": graph }} />;
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1120] pb-14 pt-28 text-white md:pb-16 md:pt-36" aria-labelledby="hero-title">
      <Image
        src={HERO.src}
        alt={HERO.alt}
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center"
        sizes={HERO.sizes}
        quality={88}
        blurDataURL={BLUR_DATA_URL}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(2,6,23,0.97) 0%, rgba(2,6,23,0.92) 33%, rgba(2,6,23,0.72) 58%, rgba(2,6,23,0.20) 100%), linear-gradient(180deg, rgba(2,6,23,0.70) 0%, rgba(2,6,23,0.18) 38%, rgba(2,6,23,0.72) 100%)",
        }}
      />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>
      <div className="absolute inset-0 corporate-ai-aurora opacity-75" aria-hidden="true" />
      <div className="absolute inset-0 corporate-stage-lights" aria-hidden="true">
        <span className="corporate-stage-beam corporate-stage-beam-left" />
        <span className="corporate-stage-beam corporate-stage-beam-right" />
        <span className="corporate-stage-sweep" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start xl:gap-10">
        <div className="max-w-3xl lg:max-w-none">
          <p className="text-sm font-semibold uppercase tracking-normal text-sky-200">
            Büyük ölçekli kurumsal prodüksiyon
          </p>

          <h1
            id="hero-title"
            className="mt-5 max-w-2xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-[4.6rem] lg:leading-[0.98]"
          >
            <span className="block">Kurumsal</span>
            <span className="block">Organizasyon</span>
          </h1>

          <p className="mt-5 max-w-xl text-xl font-black leading-tight text-sky-100 sm:text-2xl md:text-3xl">
            Sahne, LED ekran ve teknik prodüksiyon.
          </p>

          <div className="mt-5 grid max-w-2xl gap-2 text-sm font-semibold text-white/78 sm:flex sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
            <span>Tek ekipten keşif ve teklif</span>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span>Türkiye genelinde kurulum</span>
            <span className="hidden sm:inline" aria-hidden="true">|</span>
            <span>10+ yıl saha deneyimi</span>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg md:leading-8">
            Lansman, konferans, gala ve büyük ölçekli marka etkinliklerinde sahne etkisini, LED anlatısını ve
            teknik operasyonu aynı premium çizgide kuruyoruz. Daha az açıklama, daha net görüntü, daha kontrollü saha.
          </p>

          <ul className="mt-7 grid max-w-2xl gap-3 text-sm leading-6 text-white/90 sm:text-base md:grid-cols-2">
            {GUIDE_PROMISES.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" aria-hidden="true" />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={generateWhatsAppLink("kurumsal organizasyon ana teklif")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden kurumsal organizasyon teklifi almak için mesaj gönderin"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-100"
            >
              Teklif için yaz
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="#ne-sunar"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/15"
            >
              Hizmetleri incele
              <CirclePlay className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <EventSignalPanel />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/15 bg-black/30 px-4 py-4">
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ASSURANCE_ITEMS.map((item) => (
            <div key={item} className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventSignalPanel() {
  return (
    <aside className="relative hidden lg:block" aria-label="Kurumsal organizasyon teknik akış paneli">
      <div className="relative overflow-hidden rounded-lg border border-white/15 bg-slate-950/82 p-4 shadow-2xl shadow-blue-950/35">
        <div className="absolute inset-0 corporate-ai-scan opacity-30" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent" aria-hidden="true" />

        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.16em] text-sky-200">
                Sahneva ops
              </div>
              <div className="mt-1 text-xl font-black text-white">
                Teknik akış konsolu
              </div>
            </div>
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black uppercase tracking-normal text-emerald-200">
              canlı plan
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            {HERO_SIGNAL_ROWS.map((row, index) => {
              const Icon = row.Icon;

              return (
                <div key={row.label} className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-4">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-emerald-300/0 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-sky-200">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-black text-white">{row.label}</span>
                        <span className="font-mono text-xs font-bold text-white/45">0{index + 1}</span>
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-white/68">{row.value}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative mt-4 overflow-hidden rounded-lg border border-white/10 bg-black/25 p-4">
            <svg className="h-28 w-full" viewBox="0 0 360 128" role="img" aria-label="Keşiften etkinlik gününe ilerleyen prodüksiyon akışı">
              <defs>
                <linearGradient id="hero-signal-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.15" />
                  <stop offset="48%" stopColor="rgb(125 211 252)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0.22" />
                </linearGradient>
              </defs>
              <path
                className="corporate-ai-line"
                d="M22 86 C82 20 132 104 184 58 S286 22 338 72"
                fill="none"
                stroke="url(#hero-signal-line)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {[34, 112, 184, 260, 326].map((x, index) => (
                <g key={x}>
                  <circle cx={x} cy={index % 2 === 0 ? 78 : 52} r="7" fill="rgb(14 165 233)" opacity="0.25" />
                  <circle cx={x} cy={index % 2 === 0 ? 78 : 52} r="3.5" fill={index === 4 ? "rgb(52 211 153)" : "rgb(125 211 252)"} />
                </g>
              ))}
            </svg>
            <div className="mt-2 grid grid-cols-3 gap-2 text-[0.68rem] font-black uppercase tracking-normal text-white/55">
              <span>keşif</span>
              <span className="text-center">prova</span>
              <span className="text-right">show</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function HeroShowcaseSection() {
  const proofItems = [
    { label: "Sahne", value: "LED ve ışık omurgası" },
    { label: "Reji", value: "İçerik, kamera, akış" },
    { label: "Saha", value: "Kurulum ve prova disiplini" },
  ];

  return (
    <section className="bg-white pb-10">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-3 border-y border-slate-200 py-5 md:grid-cols-3">
          {proofItems.map((item) => (
            <div key={item.label} className="rounded-lg bg-slate-50 px-4 py-4">
              <div className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">{item.label}</div>
              <div className="mt-1 text-base font-black text-slate-950">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GeoAnswerSection() {
  return (
    <section className="bg-white pt-8 pb-6" aria-labelledby="premium-positioning-title">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 rounded-lg border border-blue-100 bg-blue-50/75 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
              Premium prodüksiyon
            </p>
            <h2 id="premium-positioning-title" className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              Kurumsal müşteri için asıl değer: sahada güven veren görüntü.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-700">
            Odağımız ekipman listesi değil; marka algısını taşıyan sahne, LED, ışık, reji ve operasyon kalitesi.
          </p>
        </div>
      </div>
    </section>
  );
}

function BrandLogoRailSection() {
  const railItems = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="bg-white py-6" aria-labelledby="kurumsal-markalar-baslik">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 py-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="px-5 md:w-60 md:shrink-0">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                Kullandığımız markalar
              </p>
              <h2 id="kurumsal-markalar-baslik" className="mt-1 text-lg font-black text-slate-950">
                Teknik prodüksiyon altyapısı
              </h2>
            </div>

            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-slate-50 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-slate-50 to-transparent" />
              <div className="brand-logo-rail flex w-max items-center gap-10 pr-10">
                {railItems.map((brand, index) => (
                  <div
                    key={`${brand.src}-${index}`}
                    className="flex h-16 w-36 shrink-0 items-center justify-center"
                    aria-hidden={index >= BRAND_LOGOS.length ? "true" : undefined}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={brand.width}
                      height={brand.height}
                      className="max-h-11 w-auto object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                      sizes="144px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function OverviewSection() {
  return (
    <SectionShell variant="soft" id="ne-sunar">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <H2
            kicker="Prodüksiyon odağı"
            title={
              <>
                Kurumsal etkinlikte <span className="text-blue-700">güçlü görünen</span> tarafı biz kuruyoruz
              </>
            }
            desc="Markanın sahada güçlü, kontrollü ve premium görünmesini sağlayan teknik prodüksiyon hattını kuruyoruz."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {OVERVIEW_POINTS.map((item) => (
              <Card key={item.title}>
                <div className="font-black text-gray-900">{item.title}</div>
                <p className="mt-2 text-gray-600 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="relative aspect-[16/10]">
            <Image
              src="/img/kurumsal/premium/konferans-podium.webp"
              alt="Kurumsal konferans sahnesinde LED ekran ve panel prodüksiyonu"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}

function FormatsSection() {
  const formatNotes = [
    "Marka sahnesi",
    "Yönetici akışı",
    "Gece atmosferi",
  ];

  return (
    <SectionShell variant="ink" id="formatlar">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <H2
          kicker="Formatlar"
          title={
            <>
              Her işte aynı liste değil, <span className="text-blue-300">doğru sahne dili</span>
            </>
          }
          desc="Lansman, konferans ve gala aynı ekipman diliyle kurulmaz. Formatın ağırlığına göre sahne, LED, ses ve ışık yeniden dengelenir."
          dark
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Görsel imza formatla uyumlu kurulur.",
            "Teknik prova, sahne ritminin omurgasıdır.",
            "Saha günü güçlü görünüm kadar sakin akış da önemlidir.",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-sm leading-relaxed text-white/70">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
        {FORMAT_ITEMS.map((item, index) => {
          const isPrimary = index === 0;

          return (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-lg border border-white/10 ${
                isPrimary ? "min-h-[28rem]" : "min-h-[13.5rem]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes={isPrimary ? "(max-width: 1024px) 100vw, 54vw" : "(max-width: 1024px) 100vw, 36vw"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/95 via-[#06101d]/62 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

              <div className={`absolute inset-0 flex flex-col justify-end p-6 ${isPrimary ? "md:p-8" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-normal text-white/80">
                    0{index + 1}
                  </span>
                  <span className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-normal text-white/70">
                    {formatNotes[index]}
                  </span>
                </div>

                <h3 className={`mt-5 max-w-[16ch] font-black text-white ${isPrimary ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 max-w-xl leading-relaxed text-white/72 ${isPrimary ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
                  {item.desc}
                </p>
              </div>
            </article>
          );
        }).reduce((acc, node, index) => {
          if (index === 0) {
            acc.push(
              <div key="format-primary" className="lg:row-span-2">
                {node}
              </div>,
            );
          } else if (index === 1) {
            acc.push(
              <div key="format-secondary" className="grid gap-5">
                {node}
                {FORMAT_ITEMS[2] ? (
                  <article className="group relative min-h-[13.5rem] overflow-hidden rounded-lg border border-white/10">
                    <Image
                      src={FORMAT_ITEMS[2].src}
                      alt={FORMAT_ITEMS[2].alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 36vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/95 via-[#06101d]/62 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[0.7rem] font-semibold uppercase tracking-normal text-white/80">03</span>
                        <span className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-normal text-white/70">
                          {formatNotes[2]}
                        </span>
                      </div>
                      <h3 className="mt-5 max-w-[16ch] text-2xl font-black text-white">{FORMAT_ITEMS[2].title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/72 md:text-base">
                        {FORMAT_ITEMS[2].desc}
                      </p>
                    </div>
                  </article>
                ) : null}
              </div>,
            );
          }

          return acc;
        }, [])}
      </div>
    </SectionShell>
  );
}

function PackageSection() {
  return (
    <SectionShell variant="soft" id="paketler">
      <H2
        kicker="Ön kapsam"
        title="Kurumsal kapsamı daha hızlı netleştirin"
        desc="İlk görüşmede uzun brief değil; format, ölçek, sahne beklentisi ve tarih netleşsin. Teknik kapsamı biz sadeleştiririz."
        center
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {PACKAGE_OPTIONS.map((item) => {
          const ctaUrl = generateWhatsAppLink(item.whatsappIntent);

          return (
            <Card key={item.title} className="h-full">
              <div className="text-sm font-semibold text-blue-700">Ön kapsam</div>
              <h3 className="mt-2 text-2xl font-black text-gray-900">{item.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
              <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900">
                Tahmini bütçedir; net plan, mekân ve süre bilgisine göre güncellenir.
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} için WhatsApp üzerinden teklif mesajı gönderin`}
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition"
                >
                  {item.cta}
                </a>
                <Link
                  href="#planlama"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 font-bold text-gray-900 hover:bg-slate-50 transition"
                >
                  Akışı incele
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}

function PlanningSection() {
  return (
    <SectionShell variant="light" id="planlama">
      <H2
        kicker="Planlama"
        title="Karar süreci kısa, saha planı net olmalı"
        desc="Kurumsal ekipler zamanı açıklama metinleriyle değil, doğru karar başlıklarıyla kazanır."
        center
      />

      <div className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-gray-600">
        <p>
          Format, kişi sayısı, sahne görünürlüğü, mekân yüklemesi ve prova süresi erken netleştiğinde hem bütçe hem teknik
          kurgu daha kontrollü ilerler.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {PLANNING_STEPS.map((item, index) => (
          <Card key={item.title}>
            <div className="text-sm font-semibold text-blue-700">Adım {index + 1}</div>
            <h3 className="mt-2 text-2xl font-black text-gray-900">{item.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function TechnicalDiscoveryMap() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-sky-300/20 bg-[#070d18] p-5 text-white shadow-2xl shadow-blue-950/20 md:p-6">
      <div className="absolute inset-0 opacity-35" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.13) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>
      <div className="absolute inset-0 corporate-ai-aurora opacity-35" aria-hidden="true" />
      <div className="absolute inset-0 corporate-ai-scan opacity-20" aria-hidden="true" />

      <div className="relative grid gap-4 lg:block lg:min-h-[31rem]">
        <svg
          className="absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 640 500"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="technical-discovery-line" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(125 211 252)" stopOpacity="0.12" />
              <stop offset="50%" stopColor="rgb(96 165 250)" stopOpacity="0.62" />
              <stop offset="100%" stopColor="rgb(125 211 252)" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          {[
            "M320 245 C240 185 180 120 120 92",
            "M320 245 C400 185 460 120 520 92",
            "M320 245 C410 280 470 350 512 408",
            "M320 245 C230 280 170 350 128 408",
            "M320 245 C320 160 320 88 320 58",
          ].map((line) => (
            <path
              key={line}
              d={line}
              fill="none"
              stroke="url(#technical-discovery-line)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="5 9"
            />
          ))}
        </svg>

        <div className="relative flex min-h-32 flex-col items-center justify-center rounded-lg border border-blue-300/35 bg-blue-400/12 p-5 text-center shadow-[0_0_70px_rgba(59,130,246,0.18)] lg:absolute lg:left-1/2 lg:top-1/2 lg:h-40 lg:w-40 lg:min-h-0 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:p-0 lg:shadow-[0_0_70px_rgba(59,130,246,0.26)]">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-200 lg:text-[0.68rem]">
            Operasyon planı
          </div>
          <div className="mt-2 max-w-[13rem] text-2xl font-black leading-tight text-white lg:mt-3 lg:max-w-[9rem]">
            Saha okunur, risk görünür.
          </div>
        </div>

        {TECHNICAL_DISCOVERY_STEPS.map((step, index) => (
          <article
            key={step.title}
            className={`relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-4 lg:absolute lg:w-48 lg:bg-slate-950/70 lg:shadow-lg lg:shadow-black/20 ${step.position}`}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" aria-hidden="true" />
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400 text-sm font-black text-slate-950 lg:h-auto lg:w-auto lg:bg-transparent lg:text-blue-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white/70 lg:text-[0.62rem] lg:text-white/65">
                {step.note}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-black leading-tight text-white lg:mt-4 lg:text-base">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72 lg:mt-2 lg:text-xs lg:font-semibold lg:text-white/68">
              {step.compact}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function TechnicalDiscoveryInfographic() {
  const discoveryOutputs = [
    {
      Icon: Ruler,
      text: "Sahne, LED ekran, ses-ışık ve truss için net yerleşim planı",
    },
    {
      Icon: ClipboardCheck,
      text: "Kurulum-söküm saatleri ve saha ekip görev dağılımı",
    },
    {
      Icon: Zap,
      text: "Enerji, kablo, yükleme ve güvenlik ihtiyaçları",
    },
    {
      Icon: MonitorCheck,
      text: "Daha gerçekçi bütçe ve daha az son dakika değişikliği",
    },
  ];
  const discoveryCta = generateWhatsAppLink("kurumsal organizasyon teknik keşif randevusu");

  return (
    <SectionShell variant="soft" id="teknik-kesif">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <H2
            kicker="Saha okuması"
            title="Etkinlik günü sürpriz yaşamamak için saha önce okunur"
            desc="Teknik keşif; mekanın ölçü, enerji, taşıyıcı sistem, görüş açısı, akustik ve operasyon risklerini tekliften önce görünür hale getiren kısa ama kritik kontroldür."
          />
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black text-slate-950">
              Keşif çıktısında ne olur?
            </h3>
            <ul className="mt-7 grid gap-4 text-sm font-semibold leading-relaxed text-slate-700">
              {discoveryOutputs.map(({ Icon, text }) => (
                <li key={text} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="pt-1.5">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href={discoveryCta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden ücretsiz teknik keşif randevusu oluşturun"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500"
            >
              Ücretsiz keşif randevusu oluştur
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <TechnicalDiscoveryMap />
      </div>
    </SectionShell>
  );
}

function ServicesSection() {
  const ctaLabels = ["Teklif al", "Kapsamı sor", "Planı konuş"];
  const serviceIcons = [MonitorCheck, Clapperboard, ShieldCheck, Zap, RadioTower, ClipboardCheck];

  return (
    <SectionShell variant="soft" id="hizmetler">
      <H2
        kicker="Prodüksiyon modülleri"
        title={
          <>
            Ana vitrinde sadece <span className="text-blue-700">premium teknik omurga</span>
          </>
        }
        desc="Yan lojistik kalemleri öne çıkarmadan; sahne, LED, ışık, reji, rigging ve operasyon güvenine odaklanıyoruz."
        center
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ITEMS.map((item, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];

          return (
            <Card key={item.title} className="group relative h-full overflow-hidden p-0 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-emerald-400" aria-hidden="true" />
              <div className="absolute inset-0 corporate-ai-scan opacity-0 transition duration-300 group-hover:opacity-30" aria-hidden="true" />
              <div className="relative flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-black uppercase tracking-normal text-slate-400">
                    mod {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5 text-sm font-semibold text-blue-700">Teknik prodüksiyon</div>
                <h3 className="mt-2 text-xl font-black text-gray-900">{item.title}</h3>
                <p className="mt-3 grow text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6">
                  <a
                    href={generateWhatsAppLink(item.whatsappIntent)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.title} için WhatsApp üzerinden teklif mesajı gönderin`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500"
                  >
                    {ctaLabels[index % ctaLabels.length]}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}

function GallerySection() {
  const [featured, second, third, ...supporting] = GALLERY_IMAGES;
  const proofItems = [
    "Büyük LED sahne ölçeği",
    "Kalabalık etkinlik yönetimi",
    "Truss ve ışık mühendisliği",
  ];

  return (
    <SectionShell variant="ink" id="projeler">
      <div className="grid gap-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <H2
            kicker="Saha kanıtı"
            title={
              <>
                Önce <span className="text-blue-300">görmek</span> ister
              </>
            }
            desc="Gerçek işler, karar verdiren kanıt."
            dark
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.07] px-4 py-4 font-semibold text-white/82">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="relative min-h-[22rem] overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-blue-950/35 lg:min-h-[32rem]">
            <Image src={featured.src} alt={featured.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 64vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
              <div className="text-xs font-black uppercase tracking-normal text-sky-200">Büyük ölçek</div>
              <div className="mt-2 max-w-xl text-3xl font-black leading-tight md:text-5xl">
                Sahne gücü saklanmaz, gösterilir.
              </div>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[second, third].map((image, index) => (
              <article key={image.src} className="relative min-h-[15rem] overflow-hidden rounded-lg border border-white/10 bg-slate-900 lg:min-h-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 26vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-sm font-black uppercase tracking-normal text-white/82">
                  Kanıt {String(index + 2).padStart(2, "0")}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[13rem] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[15rem]">
          {supporting.map((image, index) => {
            const isWide = index % 6 === 0 || index % 6 === 4;
            const isTall = index % 8 === 3;

            return (
              <article
                key={image.src}
                className={`relative overflow-hidden rounded-lg border border-white/10 bg-slate-900 ${
                  isWide ? "sm:col-span-2" : ""
                } ${
                  isTall ? "lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes={isWide ? "(max-width: 1024px) 100vw, 46vw" : "(max-width: 1024px) 50vw, 23vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-80" />
              </article>
            );
          })}
        </div>

        <div>
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-100"
          >
            Tüm projeleri gör
            <MoveRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

function VideoShowcaseSection() {
  const [featuredVideo, ...secondaryVideos] = VIDEO_GALLERY;
  const videoProofItems = [
    "Gerçek kurulum görüntüsü",
    "Sahne, LED ve ışık akışı",
    "Saha ekibi çalışma temposu",
  ];

  return (
    <SectionShell variant="ink" id="video-galerisi">
      <div>
        <H2
          kicker="Video kanıtı"
          title={
            <>
              Kurumsal organizasyon kalitesi <span className="text-blue-300">videoda daha net görünür</span>
            </>
          }
          desc="Gerçek sahadan seçilen kurulum görüntüleri; ekip disiplini, LED ekran etkisi ve teknik prodüksiyon temposunu karar aşamasında daha somut gösterir."
          dark
        />

        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-blue-950/25 md:p-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.16),transparent_28%)]" aria-hidden="true" />

          <div className="relative">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-black">
              <LazyVideoEmbed
                videoId={featuredVideo.id}
                title={featuredVideo.title}
                thumbnailUrl={`https://i.ytimg.com/vi/${featuredVideo.id}/sddefault.jpg`}
              />
            </div>

            <div className="mt-5 grid gap-5 rounded-lg border border-white/10 bg-slate-950/62 p-5 md:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-normal text-blue-200">
                    {featuredVideo.eyebrow}
                  </span>
                  <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-white/80">
                    Öne çıkan video
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">{featuredVideo.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/82">{featuredVideo.description}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {videoProofItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-semibold text-white/78">
                    <Clapperboard className="h-4 w-4 text-sky-200" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {secondaryVideos.map((video, index) => (
            <article
              key={video.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] transition hover:border-sky-300/35 hover:bg-white/[0.075]"
              aria-labelledby={`corporate-video-${video.id}-title`}
            >
              <div className="overflow-hidden border-b border-white/10 bg-black">
                <LazyVideoEmbed
                  videoId={video.id}
                  title={video.title}
                  thumbnailUrl={`https://i.ytimg.com/vi/${video.id}/sddefault.jpg`}
                />
              </div>

              <div className="p-4 md:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-normal text-blue-200">
                    {video.eyebrow}
                  </span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-normal text-white/70">
                    Video {index + 2}
                  </span>
                </div>

                <h3 id={`corporate-video-${video.id}-title`} className="mt-4 text-xl font-black leading-tight text-white">
                  {video.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{video.description}</p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sky-100/85">
                  <Clapperboard className="h-4 w-4" aria-hidden="true" />
                  Videoyu oynat
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function TechnicalSection() {
  return (
    <SectionShell variant="soft" id="teknik-altyapi">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <H2
            kicker="Teknik omurga"
            title="Premium görüntünün arkasında teknik disiplin var"
            desc="Sahne, ekran, ses, ışık ve prova planı birlikte tasarlandığında etkinlik günü daha sakin ve daha güçlü görünür."
          />
          <div className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            <p>
              Etkinlik gününde izleyici teknik detayı bilmez; ama ekran gecikirse, ses bozulursa veya ışık sahneyi taşımazsa
              profesyonel algı anında düşer. Biz görünmeyen teknik katmanı bunun için ciddiye alıyoruz.
            </p>
          </div>
          <ul className="grid gap-3 text-gray-800">
            {TECHNICAL_POINTS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="relative aspect-[16/10]">
            <Image
              src="/img/kurumsal/premium/show-kontrol.webp"
              alt="Kurumsal etkinlikte ışık ve show kontrol masası"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}

function StatsAndUseCases() {
  return (
    <SectionShell variant="ink" id="guven">
      <H2
        kicker="Güven ve ölçek"
        title="Büyük işlerde sakin kalabilen ekip"
        desc="Ölçek büyüdükçe önemli olan daha çok kalem saymak değil, sahada kontrolü kaybetmemektir."
        dark
        center
      />

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid grid-cols-3 gap-4">
          {HERO_STATS.map((stat) => (
            <Card key={stat.label} dark>
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-white/70">{stat.label}</div>
            </Card>
          ))}
        </div>

        <Card dark>
          <div className="text-lg font-black text-white">En sık kurduğumuz etkinlik tipleri</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {USE_CASES.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-black/15 px-4 py-3 text-white/85">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}

function FAQSection() {
  return (
    <SectionShell variant="light" id="sss">
      <div className="mx-auto max-w-6xl">
        <H2
          kicker="Sık sorulan sorular"
          title="Kurumsal organizasyon sürecinde en çok merak edilenler"
          desc="Karar sürecini hızlandıran temel soruları ve kısa cevaplarını burada topladık."
          center
        />
        <AccessibleFaq items={FAQ_ITEMS} />
      </div>
    </SectionShell>
  );
}

function TopicClusterSection() {
  const cluster = CONTENT_CLUSTERS.corporate;
  const serviceLinks = [
    ...cluster.relatedServices,
    {
      href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
      label: "Planlama içeriği",
      anchorText: "kurumsal etkinlik planlama süreci",
      intent: "Planlama ve karar hazırlığı",
    },
    {
      href: "/blog/kurumsal-etkinlik-yonetimi",
      label: "Operasyon içeriği",
      anchorText: "kurumsal etkinlik yönetimi",
      intent: "Saha operasyonu ve yönetim niyeti",
    },
  ];

  return (
    <SectionShell variant="soft" id="konu-kumesi">
      <H2
        kicker={cluster.eyebrow}
        title="Kurumsal organizasyon kararını destekleyen bağlantılar"
        desc={cluster.description}
        center
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serviceLinks.map((item) => (
          <Link
            key={`${item.href}-${item.anchorText}`}
            href={item.href}
            className="group rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              {item.label}
            </div>
            <div className="mt-3 text-lg font-black leading-tight text-slate-950 group-hover:text-blue-700">
              {item.anchorText}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {item.intent}
            </p>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

function RelatedServices() {
  const services = [
    {
      href: "/led-ekran-kiralama",
      title: "LED ekran prodüksiyonu",
      desc: "Sahne anlatısını taşıyan yüksek görünürlüklü ekran omurgası",
    },
    {
      href: "/sahne-kiralama",
      title: "Sahne ve platform",
      desc: "Konuşma, performans ve protokol akışına uygun ana sahne kurulumu",
    },
    {
      href: "/ses-isik-sistemleri",
      title: "Ses ve ışık tasarımı",
      desc: "Net ses kapsaması ve marka atmosferini taşıyan ışık kurgusu",
    },
    {
      href: "/truss-kiralama",
      title: "Truss ve rigging",
      desc: "Büyük sahne, askı ve taşıyıcı sistemleri için teknik altyapı",
    },
  ];

  return (
    <SectionShell variant="soft" id="tamamlayici-hizmetler">
      <H2
        kicker="Teknik omurga"
        title={
          <>
            Yan hizmet değil, <span className="text-blue-700">ana prodüksiyon katmanları</span>
          </>
        }
        desc="Bu sayfada premium algıyı taşıyan ana teknik katmanları öne çıkarıyoruz. Lojistik destekler teklif içinde gerektiğinde konuşulur."
        center
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            <Card className="h-full">
              <div className="text-sm font-semibold text-blue-700">İncele</div>
              <div className="mt-2 text-xl font-black text-gray-900">{item.title}</div>
              <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}

function CTASection() {
  const ctaWhatsApp = generateWhatsAppLink("kurumsal organizasyon keşif ve teklif");

  return (
    <SectionShell variant="ink" id="cta">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950 px-6 py-8 md:px-8 md:py-10">
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-white/70">
              <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
              Teklif ve keşif
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-black leading-tight tracking-normal text-white md:text-5xl">
              Profesyonel kurumsal çözümlere
              <span className="mt-2 block text-sky-200">
                hazır mısınız?
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Etkinlik türü, tarih ve kişi sayısını paylaşın; size uygun kurgu için hızlı bir ön kapsam çıkaralım. Amaç,
              görüşmeye çok belgeyle değil, doğru karar başlıklarıyla başlamak.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Hızlı ön kapsam",
                "Şehir ve takvim kontrolü",
                "Format bazlı teknik yönlendirme",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                  <RadioTower className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="text-xl font-black text-white">WhatsApp'tan yazın</div>
                  <p className="mt-2 text-white/68 leading-relaxed">Hızlı ön bütçe ve kapsam için doğrudan bilgi paylaşın.</p>
                </div>
              </div>
              <a
                href={ctaWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden kurumsal organizasyon teklifi istemek için mesaj gönderin"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Teklif iste
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 w-fit">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4 text-lg font-black text-white">İletişim formu</div>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  Daha detaylı brief ve mekân bilgisi göndermek isterseniz form üzerinden ilerleyin.
                </p>
                <Link
                  href="/iletisim"
                  aria-label="Kurumsal organizasyon için iletişim formunu açın"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Formu aç
                  <MoveRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-white/80 w-fit">
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4 text-lg font-black text-white">Telefonla ulaşın</div>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  Müsaitlik, şehir ve kurulum takvimi için doğrudan görüşebilirsiniz.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  aria-label="Sahneva ile telefonla görüşmek için arayın"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  0545 304 86 71
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/kurumsal-organizasyon`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Kurumsal Organizasyon", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <CorporateOrganizationJsonLd />
      <Hero />
      <GeoAnswerSection />
      <BrandLogoRailSection />
      <HeroShowcaseSection />
      <GallerySection />
      <VideoShowcaseSection />
      <OverviewSection />
      <PlanningSection />
      <FormatsSection />
      <TechnicalSection />
      <ServicesSection />
      <TechnicalDiscoveryInfographic />
      <PackageSection />
      <StatsAndUseCases />
      <FAQSection />
      <TopicClusterSection />
      <RelatedServices />
      <CTASection />
    </>
  );
}
