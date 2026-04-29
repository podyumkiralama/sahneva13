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
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
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
  GUIDE_AUTHOR,
  GUIDE_CONTENTS,
  GUIDE_PROMISES,
  GUIDE_UPDATED,
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

const TECHNICAL_DISCOVERY_STEPS = [
  {
    title: "Mekan okuması",
    desc: "Salon ölçüsü, tavan yüksekliği, yükleme alanı, giriş-çıkış ve izleyici akışı birlikte değerlendirilir.",
    note: "Alan",
    compact: "Mekan ölçüsü / yükleme / izleyici akışı",
    position: "left-6 top-8",
  },
  {
    title: "Enerji ve taşıyıcı kontrolü",
    desc: "Güç noktaları, kablo güzergahı, truss/podyum yerleşimi ve yük güvenliği etkinlikten önce netleşir.",
    note: "Altyapı",
    compact: "Enerji / kablo / truss / yük güvenliği",
    position: "right-6 top-8",
  },
  {
    title: "Görüş ve ses kapsaması",
    desc: "Sahne, LED ekran, hoparlör, ışık ve kamera açıları katılımcının deneyimine göre konumlandırılır.",
    note: "Deneyim",
    compact: "Görüş açısı / ses kapsaması / kamera",
    position: "right-8 bottom-10",
  },
  {
    title: "Risk ve yedek senaryo",
    desc: "Kurulum süresi, hava/zemin riski, yedek güç, teknik ekip ve acil müdahale planı görünür hale gelir.",
    note: "Güvenlik",
    compact: "Hava / zemin / yedek güç / acil plan",
    position: "left-8 bottom-10",
  },
  {
    title: "Teklif ve run-of-show",
    desc: "Keşif çıktısı; net ekipman listesi, saha görevleri, prova akışı ve gerçekçi bütçe kalemlerine dönüşür.",
    note: "Plan",
    compact: "Ekip listesi / prova / bütçe",
    position: "left-1/2 top-5 -translate-x-1/2",
  },
];

export const metadata = {
  title: "Kurumsal Organizasyon Şirketleri | Teknik Prodüksiyon Rehberi",
  description:
    "Kurumsal organizasyon rehberi: konferans, lansman ve gala için sahne, LED ekran, ses, ışık, planlama ve teknik prodüksiyon süreci.",
  keywords: [
    "kurumsal organizasyon",
    "kurumsal etkinlik organizasyonu",
    "kurumsal organizasyon şirketleri",
    "istanbul kurumsal organizasyon",
    "kurumsal etkinlik prodüksiyonu",
    "organizasyon kiralama",
  ],
  alternates: buildLanguageAlternates({
    tr: "/kurumsal-organizasyon",
    en: "/en/corporate-events",
    canonical: "/kurumsal-organizasyon",
    xDefault: "/en/corporate-events",
  }),
  openGraph: {
    title: "Kurumsal Organizasyon Rehberi | Sahneva",
    description:
      "Konferans, lansman ve gala etkinliklerinde planlama, sahne, LED ekran, ses, ışık ve saha operasyonunu tek rehber akışında inceleyin.",
    url: `${ORIGIN}/kurumsal-organizasyon`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: HERO.alt,
      },
      ...GALLERY_IMAGES.slice(0, 3).map((image) => ({
        url: `${ORIGIN}${image.src}`,
        alt: image.alt,
      })),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal Organizasyon Rehberi | Sahneva",
    description:
      "Kurumsal etkinliklerde planlama, sahne, LED ekran, ses ve ışık prodüksiyon süreci.",
    images: [`${ORIGIN}/img/kurumsal/hero.webp`],
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
    ink: "bg-slate-950 text-white",
  };

  return (
    <section id={id} className={`${variantClass[variant]} scroll-mt-24 py-14 md:py-16`}>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">{children}</div>
    </section>
  );
}

function H2({ kicker, title, desc, center = false, dark = false }) {
  return (
    <header className={`${center ? "mx-auto text-center" : ""} mb-10 max-w-3xl`}>
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
        className={`mt-3 text-3xl font-black tracking-normal md:text-4xl ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {desc ? (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/70" : "text-gray-600"}`}>
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
        { "@id": `${ORIGIN}/ses-isik-sistemleri#service` },
        { "@id": `${ORIGIN}/truss-kiralama#service` },
      ],
      name: metadata.title,
      description: metadata.description,
      dateModified: GUIDE_UPDATED_ISO,
      inLanguage: "tr-TR",
      isPartOf: { "@id": WEBSITE_ID },
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
      },
      image: [
        `${ORIGIN}/img/kurumsal/hero.webp`,
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
      name: "Kurumsal Organizasyon ve Teknik Prodüksiyon",
      serviceType: [
        "Kurumsal etkinlik organizasyonu",
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
    <section className="relative overflow-hidden bg-slate-950 pb-14 pt-28 text-white md:pb-16 md:pt-36" aria-labelledby="hero-title">
      <Image
        src={HERO.src}
        alt={HERO.alt}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
        sizes={HERO.sizes}
        quality={88}
        blurDataURL={BLUR_DATA_URL}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgb(2 6 23), rgb(2 6 23 / 0.85), rgb(2 6 23 / 0.2)), linear-gradient(to top, rgb(2 6 23), rgb(2 6 23 / 0.25), rgb(2 6 23 / 0.2))",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-normal text-sky-200">
            Kurumsal organizasyon rehberi
          </p>

          <h1
            id="hero-title"
            className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl"
          >
            <span className="block">Kurumsal Organizasyon:</span>
            <span className="block">sahne, LED ekran ve teknik prodüksiyon rehberi</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/75">
            <span>Hazırlayan: {GUIDE_AUTHOR}</span>
            <span aria-hidden="true">|</span>
            <time dateTime={GUIDE_UPDATED_ISO}>Güncellendi: {GUIDE_UPDATED}</time>
            <span aria-hidden="true">|</span>
            <span>10+ yıl saha deneyimi</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 md:text-xl md:leading-9">
            Bu sayfa; konferans, ürün lansmanı, bayi toplantısı ve gala gibi kurumsal etkinliklerde doğru planı kurmak için
            hazırlanmış ana rehberdir. Amaç yalnızca ekipman listesi çıkarmak değil; hedef, akış, teknik risk ve sahne
            deneyimini aynı karar sırasına koymaktır.
          </p>

          <ul className="mt-7 grid gap-3 text-white/90 md:grid-cols-2">
            {GUIDE_PROMISES.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300" aria-hidden="true" />
                <span>{item}</span>
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
              Rehbere başla
              <CirclePlay className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
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

function HeroShowcaseSection() {
  return (
    <section className="bg-white pb-12">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="border-y border-slate-200 py-7">
          <h2 className="text-xl font-black text-slate-950">İçindekiler</h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-2">
            {GUIDE_CONTENTS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex gap-3 rounded-lg px-2 py-2 text-slate-800 transition hover:bg-slate-50 hover:text-blue-700"
                >
                  <span className="font-black text-blue-700">{index + 1}.</span>
                  <span className="font-semibold">{item.label}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function GeoAnswerSection() {
  return (
    <section className="bg-white pt-8 pb-6" aria-labelledby="kurumsal-organizasyon-nedir">
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <div className="geo-answer rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
            Kısa cevap
          </p>
          <h2 id="kurumsal-organizasyon-nedir" className="mt-3 text-2xl font-black text-slate-950 md:text-3xl">
            Kurumsal organizasyon nedir?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-800">
            Kurumsal organizasyon; markaların lansman, bayi toplantısı, gala, konferans,
            festival, çalışan etkinliği veya protokol programlarını hedef, mekan, sahne,
            LED ekran, ses-ışık, teknik keşif, run-of-show ve saha operasyonu ile birlikte
            planladığı profesyonel etkinlik sürecidir. Başarılı bir kurumsal etkinlikte
            yaratıcı fikir kadar teknik altyapı, zaman planı ve güvenli kurulum da belirleyicidir.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-2xl border border-blue-100 bg-white p-5">
              <h3 className="text-lg font-black text-slate-950">
                Kurumsal organizasyon firması ne yapar?
              </h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                Etkinliğin hedefini, mekanını, sahne düzenini, LED ekran ihtiyacını,
                ses-ışık sistemlerini, teknik keşfini, run-of-show akışını, ekip görevlerini
                ve kurulum operasyonunu tek plan içinde yönetir.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-950 p-5 text-white">
              <h3 className="text-lg font-black">
                Teknik tedarikçi farkı
              </h3>
              <p className="mt-2 leading-relaxed text-white/85">
                Sahneva, yalnızca konsept planlayan bir ajans gibi değil; sahne, podyum,
                LED ekran, truss, ses-ışık, çadır ve teknik ekip kurulumunu sahada yöneten
                teknik prodüksiyon tedarikçisi olarak çalışır.
              </p>
            </div>
          </div>
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
                      alt={index >= BRAND_LOGOS.length ? "" : brand.alt}
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
            kicker="Bölüm 1"
            title={
              <>
                Kurumsal etkinlik <span className="text-blue-700">organizasyon şirketleri</span> ne sunar?
              </>
            }
            desc="Kurumsal organizasyon; hedef, içerik ve teknik prodüksiyonun aynı masada yönetildiği, ölçülebilir bir operasyon disiplinidir."
          />
          <div className="mb-6 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Özellikle İstanbul gibi yoğun tempo ve çok paydaşlı şehirlerde, kurumsal etkinliğin başarısı yalnızca sahne
              kurulumuyla açıklanmaz. Zaman planı, konuşmacı akışı, giriş-çıkış düzeni, teknik prova sırası ve
              operasyonel iletişim de en az ekipman kadar belirleyicidir. Bu yüzden iyi bir kurumsal organizasyon firması,
              teknik tedarikçi gibi değil; karar sürecini sadeleştiren bir prodüksiyon ortağı gibi çalışmalıdır.
            </p>
            <p>
              Marka ekipleri genellikle bir yandan görünür bir sahne kalitesi isterken, diğer yandan da sürecin sakin ve
              öngörülebilir ilerlemesini bekler. Bizim yaklaşımımız tam olarak bu iki ihtiyacı bir araya getirmek üzerine
              kurulu: güçlü görsel etki, net görev dağılımı ve riskleri önceden görünür hale getiren bir planlama disiplini.
            </p>
          </div>
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
              src="/img/kurumsal/konferans.webp"
              alt="Kurumsal etkinlik sahnesi ve LED ekran kurulumu"
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
    "Medya görünürlüğü + prova akışı",
    "Sunum netliği + salon ritmi",
    "Atmosfer kontrolü + protokol düzeni",
  ];

  return (
    <SectionShell variant="ink" id="formatlar">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <H2
            kicker="Bölüm 3"
          title={
            <>
              Hangi <span className="text-blue-300">kurumsal formatlarda</span> değer üretiyoruz?
            </>
          }
          desc="Lansman, bayi toplantısı ve gala gibi farklı formatlarda; aynı operasyon mantığını ihtiyaca göre yeniden kurguluyoruz."
          dark
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "Format değişse de operasyon disiplini değişmez.",
            "Her kurgu kendi sahne dilini ve prova temposunu taşır.",
            "Amaç yalnızca kurmak değil, etkinlik gününü sakin tutmaktır.",
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
        kicker="Bölüm 6"
        title="Kurumsal kapsamı daha hızlı netleştirin"
        desc="İlk görüşmede bütün detayı değil; etkinlik formatını, görsel beklentiyi ve operasyon yoğunluğunu netleştirmek yeterlidir."
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
        kicker="Bölüm 2"
        title="Kurumsal organizasyon nasıl planlanır?"
        desc="Aşağıdaki adımlar, karar sürecini kısaltır ve sahaya çıkmadan önce riskleri görünür hale getirir."
        center
      />

      <div className="mx-auto mb-8 max-w-4xl space-y-4 text-lg leading-relaxed text-gray-600">
        <p>
          Kurumsal etkinlik planlamasında en sık görülen problem, kararların çok geç verilmesi değil; kararın hangi bilgiye
          dayanarak verildiğinin net olmamasıdır. Format, kişi sayısı, sahne görünürlüğü, mekânın yükleme şartları ve prova
          süresi gibi başlıklar erken aşamada masaya geldiğinde, hem bütçe görüşmeleri hem de teknik kurgu daha sağlıklı ilerler.
        </p>
        <p>
          Bu bölümdeki adımlar, özellikle konferans, lansman ve gala gibi görünürlüğü yüksek etkinliklerde işin hangi sırayla
          ele alınması gerektiğini gösterir. Amaç, gereksiz ayrıntıyla kullanıcıyı yormak değil; sahaya çıkmadan önce hangi
          kararların mutlaka netleşmesi gerektiğini görünür kılmaktır.
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
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm md:p-6">
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
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
      <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-sky-300/10 blur-2xl" aria-hidden="true" />

      <div className="relative min-h-[31rem] hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full"
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

        <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-blue-300/35 bg-blue-400/12 text-center shadow-[0_0_70px_rgba(59,130,246,0.26)]">
          <div className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-blue-200">
            Teknik keşif
          </div>
          <div className="mt-3 max-w-[9rem] text-2xl font-black leading-tight text-white">
            Saha okunur
          </div>
          <p className="mt-2 max-w-[8.5rem] text-xs font-semibold leading-relaxed text-white/70">
            Risk görünür.
          </p>
        </div>

        {TECHNICAL_DISCOVERY_STEPS.map((step, index) => (
          <article
            key={step.title}
            className={`absolute w-48 rounded-2xl border border-white/10 bg-white/[0.075] p-4 backdrop-blur-sm ${step.position}`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-black text-blue-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-white/65">
                {step.note}
              </span>
            </div>
            <h3 className="mt-4 text-base font-black leading-tight text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-xs font-semibold leading-relaxed text-white/68">
              {step.compact}
            </p>
          </article>
        ))}
      </div>

      <div className="relative grid gap-4 lg:hidden">
        <div className="rounded-2xl border border-blue-300/30 bg-blue-400/12 p-5 text-center">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
            Teknik keşif
          </div>
          <div className="mt-2 text-2xl font-black text-white">Saha okunur, risk görünür.</div>
        </div>
        {TECHNICAL_DISCOVERY_STEPS.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-400 text-sm font-black text-slate-950">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-white/70">
                {step.note}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-black leading-tight text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/72">
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
            kicker="Teknik keşif"
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

  return (
    <SectionShell variant="soft" id="hizmetler">
      <H2
        kicker="Bölüm 5"
        title={
          <>
            Kurumsal <span className="text-blue-700">hizmetlerimiz</span>
          </>
        }
        desc="Planlama, teknik tasarım, kurulum, operasyon ve destek tek hizmet kurgusunda birleşir."
        center
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICE_ITEMS.map((item, index) => (
          <Card key={item.title} className="h-full">
            <div className="text-sm font-semibold text-blue-700">Kurumsal organizasyon</div>
            <h3 className="mt-2 text-xl font-black text-gray-900">{item.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
            <div className="mt-6">
              <a
                href={generateWhatsAppLink(item.whatsappIntent)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title} için WhatsApp üzerinden teklif mesajı gönderin`}
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition"
              >
                {ctaLabels[index % ctaLabels.length]}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function GallerySection() {
  const [featured, ...supporting] = GALLERY_IMAGES;

  return (
    <SectionShell variant="light" id="projeler">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <H2
            kicker="Saha kanıtı"
            title={
              <>
                Kurumsal <span className="text-blue-700">projelerimizi</span> daha sinematik bir ritimde gösteriyoruz
              </>
            }
            desc="Bu bölümde amaç yalnızca görsel göstermek değil; etkinlik dili, salon ölçeği ve teknik atmosfer arasında nasıl bir kalite standardı kurduğumuzu hissettirmek."
          />

          <div className="space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Aynı etkinlik formatını daha önce sahada görmek, ilk keşif görüşmesini daha berrak hale getirir. Böylece ekipman
              listesi konuşmadan önce sahne dili, salon ritmi ve görünürlük seviyesi üzerine daha doğru karar verilebilir.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              "Daha fazla proje, daha az sürpriz",
              "Keşif görüşmesinde daha hızlı ortak zemin",
              "Format bazlı daha doğru örnek seti",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/projeler"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Tüm projeleri gör
            <MoveRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid auto-rows-[11rem] gap-4 sm:grid-cols-2 lg:auto-rows-[12rem]">
          <article className="relative overflow-hidden rounded-lg border border-slate-200 sm:col-span-2 sm:row-span-2">
            <Image src={featured.src} alt={featured.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 54vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="text-xs font-semibold uppercase tracking-normal text-white/65">Öne çıkan kurulum</div>
              <div className="mt-2 max-w-[14ch] text-3xl font-black leading-tight md:text-4xl">
                Kurumsal sahne, LED ve salon akışını aynı hikâyede topluyoruz.
              </div>
            </div>
          </article>

          {supporting.slice(0, 3).map((image, index) => (
            <article
              key={image.src}
              className={`relative overflow-hidden rounded-lg border border-slate-200 ${
                index === 2 ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 2 ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes={index === 2 ? "(max-width: 1024px) 100vw, 54vw" : "(max-width: 1024px) 50vw, 26vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function VideoShowcaseSection() {
  const [featuredVideo, ...secondaryVideos] = VIDEO_GALLERY;

  return (
    <SectionShell variant="ink" id="video-galerisi">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <H2
            kicker="Video kanıtı"
            title={
              <>
                Gerçek <span className="text-blue-300">kurulum videoları</span> ile sahadaki kaliteyi görünür kılıyoruz
              </>
            }
            desc="Video burada dekor değil; tempo, ekip disiplini ve teknik standardı hissettiren bir karar katmanı."
            dark
          />

          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black">
              <div className="relative aspect-[16/10]">
                <LazyVideoEmbed
                  videoId={featuredVideo.id}
                  title={featuredVideo.title}
                  thumbnailUrl={`https://i.ytimg.com/vi/${featuredVideo.id}/hqdefault.jpg`}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-normal text-blue-200">
                {featuredVideo.eyebrow}
              </span>
              <span className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-white/80">
                Öne çıkan video
              </span>
            </div>

            <h3 className="mt-4 max-w-[16ch] text-3xl font-black text-white md:text-4xl">{featuredVideo.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">{featuredVideo.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Kurulum temposu",
                "Teknik hazırlık disiplini",
                "Saha günü gerçek atmosfer",
              ].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {secondaryVideos.map((video, index) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-lg border border-white/10 bg-white/5"
              aria-labelledby={`corporate-video-${video.id}-title`}
            >
              <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                <div className="relative aspect-video bg-black md:aspect-auto">
                  <LazyVideoEmbed
                    videoId={video.id}
                    title={video.title}
                    thumbnailUrl={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  />
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-lg border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-normal text-blue-200">
                        {video.eyebrow}
                      </span>
                      <span className="text-[0.68rem] font-bold uppercase tracking-normal text-white/85">
                        Video {index + 2}
                      </span>
                    </div>
                    <h3 id={`corporate-video-${video.id}-title`} className="mt-4 text-2xl font-black text-white">
                      {video.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">{video.description}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white/80">
                    <Clapperboard className="h-4 w-4" aria-hidden="true" />
                    Tıklayınca açılır, YouTube üzerinden oynatılır
                  </div>
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
            kicker="Bölüm 4"
            title="Event organizasyon şirketleri için teknik omurga"
            desc="Sahne, ekran, ses, ışık ve prova planı birlikte tasarlandığında etkinlik günü daha sakin ve öngörülebilir ilerler."
          />
          <div className="mb-6 space-y-4 text-lg leading-relaxed text-gray-600">
            <p>
              Teknik omurga, kullanıcı tarafında çoğu zaman görünmeyen ama etkinliğin bütün algısını etkileyen katmandır.
              Ekranın doğru yerde konumlanması, ses kapsamasının salon yapısına uygun kurulması, konuşmacı geçişlerinin
              prova sırasında test edilmesi ve güç altyapısının yedekli düşünülmesi; etkinliğin “kusursuz görünüyor”
              hissini oluşturan ana başlıklardır.
            </p>
            <p>
              Özellikle bilgi yoğun konferanslar, yatırımcı toplantıları, lansmanlar ve hibrit etkinliklerde teknik altyapı
              bir gösteri unsuru olmaktan çok bir güven unsuru haline gelir. İçerik görünür değilse, ses net iletilmiyorsa
              ya da yayın akışı kararsızsa, markanın profesyonel algısı doğrudan etkilenir. Bu yüzden teknik planı en baştan
              netleştirmek, son dakika telafilerinden çok daha değerlidir.
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
              src="/img/kurumsal/8.webp"
              alt="Kurumsal etkinlikte teknik altyapı ve ekran yerleşimi"
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
        title="Kurumsal ekiplerin aradığı sakinlik: net akış"
        desc="Operasyon kalitesi sadece ekipmanla değil, karar verme sürecinin ne kadar sade ilerlediğiyle de ölçülür."
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
          <p className="mt-3 text-white/70 leading-relaxed">
            Bu başlıklar yalnızca hizmet verdiğimiz alanları göstermek için değil, aynı zamanda keşif sürecinde doğru örnek
            setini hızlıca önermek için de önemlidir. Farklı etkinlik tipleri farklı sahne dili, farklı içerik akışı ve farklı
            teknik tempo ister.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {USE_CASES.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-black/15 px-4 py-3 text-white/85">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-white/65 leading-relaxed">
            Bu nedenle kurumsal organizasyon sayfasındaki sayılar bizim için yalnızca bir rozet değil; ölçek, saha deneyimi
            ve farklı etkinlik formatları arasında tekrar eden operasyon refleksinin kısa bir özeti niteliğindedir.
          </p>
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

function RelatedServices() {
  const services = [
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      desc: "İçerik görünürlüğü ve sahne etkisini güçlendiren ekran çözümleri",
    },
    {
      href: "/podyum-kiralama",
      title: "Podyum Kiralama",
      desc: "Sunum ve protokol akışına uygun modüler sahne sistemleri",
    },
    {
      href: "/ses-isik-sistemleri",
      title: "Ses ve Işık Sistemleri",
      desc: "Akustik kapsama ve atmosfer tasarımını destekleyen teknik altyapı",
    },
    {
      href: "/projeler",
      title: "Projeler",
      desc: "Gerçek kurulumlar ve referans akışı üzerinden daha fazla örnek",
    },
  ];

  return (
    <SectionShell variant="soft" id="tamamlayici-hizmetler">
      <H2
        kicker="Tamamlayıcı akış"
        title={
          <>
            İlgili <span className="text-blue-700">hizmetler ve referanslar</span>
          </>
        }
        desc="Kurumsal organizasyon sayfasını daha güçlü bir karar merkezi haline getirmek için ilgili çözümleri de aynı akışta topladık."
        center
      />

      <div className="mx-auto mb-8 max-w-5xl rounded-lg border border-slate-200 bg-white px-6 py-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Daha hızlı keşif",
              desc: "İlgili hizmetleri aynı akışta görmek, kapsamı daha kısa sürede netleştirmeye yardımcı olur.",
            },
            {
              title: "Daha az koordinasyon turu",
              desc: "Sahne, ekran ve teknik altyapıyı ayrı ayrı düşünmek yerine tek bütün olarak karar verebilirsiniz.",
            },
            {
              title: "Daha güçlü proje okuması",
              desc: "Referans akışı ve hizmet yapısı bir araya geldiğinde teklif görüşmesi daha verimli ilerler.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-lg bg-slate-50 px-4 py-4">
              <div className="font-black text-slate-900">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

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
      <OverviewSection />
      <PlanningSection />
      <FormatsSection />
      <TechnicalSection />
      <ServicesSection />
      <TechnicalDiscoveryInfographic />
      <PackageSection />
      <GallerySection />
      <VideoShowcaseSection />
      <StatsAndUseCases />
      <FAQSection />
      <RelatedServices />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.corporate} links={CONTENT_CLUSTERS.corporate.guides} />
      <CTASection />
    </>
  );
}
