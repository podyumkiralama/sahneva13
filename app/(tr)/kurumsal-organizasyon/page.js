import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CirclePlay,
  Clapperboard,
  MapPinned,
  MoveRight,
  PhoneCall,
  RadioTower,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import AccessibleFaq from "@/components/AccessibleFaq.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import { DEFAULT_BLUR_DATA_URL } from "@/lib/seo/imagePlaceholders";
import { buildFaqSchema } from "@/lib/structuredData/faq";

export const revalidate = 1800;

const ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";

const ORGANIZATION_ID = `${ORIGIN}/#org`;
const WEBSITE_ID = `${ORIGIN}/#website`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+kurumsal+organizasyon+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonferans%2Flansman%2Fgala%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const BLUR_DATA_URL = DEFAULT_BLUR_DATA_URL;

const HERO = {
  src: "/img/kurumsal/hero.webp",
  alt: "Kurumsal organizasyon için sahne, LED ekran ve salon kurulumu",
  sizes: "(max-width: 1440px) 100vw, 1440px",
};

const HERO_STATS = [
  { value: "10+ yıl", label: "Deneyim" },
  { value: "700+", label: "Başarılı proje" },
  { value: "81 il", label: "Hizmet alanı" },
];

const ASSURANCE_ITEMS = [
  "Tek keşif ve tek run-of-show",
  "Yedekli güç ve kontrol planı",
  "Saha günü tek operasyon muhatabı",
  "Kurulumdan söküme planlı kapanış",
];

const HERO_SIGNAL_ITEMS = [
  {
    title: "Format okuması",
    desc: "Konferans, lansman ve gala akışını tek run-of-show üzerinde toplarız.",
    Icon: Sparkles,
  },
  {
    title: "Zaman disiplini",
    desc: "Kurulum, prova ve yayın saatini aynı karar masasında netleştiririz.",
    Icon: CalendarClock,
  },
  {
    title: "Saha hakimiyeti",
    desc: "İstanbul merkezli planla Türkiye genelinde kurulum refleksi kurarız.",
    Icon: MapPinned,
  },
];

const OVERVIEW_POINTS = [
  {
    title: "Tek operasyon masası",
    desc: "Sahne, LED ekran, ses, ışık ve saha akışı aynı plan üzerinde ilerler.",
  },
  {
    title: "Yedekli teknik yaklaşım",
    desc: "Kritik sistemlerde güç, kontrol ve akış için yedek senaryolar oluşturulur.",
  },
  {
    title: "Kurumsal ritme uygun plan",
    desc: "Protokol, konuşmacı akışı ve prova saatleri marka ekibiyle birlikte netleşir.",
  },
  {
    title: "Tekliften rapora süreklilik",
    desc: "Keşif, kurulum, etkinlik günü ve söküm tek ekipte toplanır.",
  },
];

const FORMAT_ITEMS = [
  {
    title: "Lansman ve basın buluşması",
    desc: "Sahne anlatısı, LED içerik akışı ve medya görünürlüğü aynı prova planına bağlanır.",
    src: "/img/kurumsal/lansman.webp",
    alt: "Ürün lansmanı için kurumsal sahne kurulumu",
  },
  {
    title: "Bayi toplantısı ve konferans",
    desc: "Sunum netliği, oturma düzeni ve salon akustiği birlikte ele alınır.",
    src: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Bayi toplantısı için konferans salonu kurulumu",
  },
  {
    title: "Gala ve ödül gecesi",
    desc: "Şov akışı, protokol yerleşimi ve sahne atmosferi daha kontrollü ilerler.",
    src: "/img/kurumsal/kurumsal-sahne-led-ekran.webp",
    alt: "Gala gecesi için sahne ve LED ekran prodüksiyonu",
  },
];

const PACKAGE_OPTIONS = [
  {
    title: "Toplantı ve konferans paketi",
    desc: "Sahne, sunum ekranı, temel ses sistemi ve teknik yönetimle kontrollü bir kurumsal akış.",
    cta: "Toplantı kapsamını konuş",
  },
  {
    title: "Lansman ve görsel deneyim paketi",
    desc: "LED ekran, sahne tasarımı, içerik akışı ve prova planıyla daha güçlü bir sahne deneyimi.",
    cta: "Lansman planı iste",
  },
  {
    title: "Gala ve premium gece paketi",
    desc: "Protokol düzeni, şov akışı, dekoratif ışık ve operasyon koordinasyonu tek çatı altında.",
    cta: "Gala keşfi talep et",
  },
];

const PLANNING_STEPS = [
  {
    title: "Etkinlik formatını netleştirme",
    desc: "Konferans, lansman, gala veya bayi toplantısı gibi formatı baştan netleştirmek sahne dilini ve ekipman seçimini kolaylaştırır.",
  },
  {
    title: "Mekân ve akış kontrolü",
    desc: "Salon ölçüsü, yükleme alanı, katılımcı dolaşımı ve protokol düzeni ilk keşifte bir araya getirilir.",
  },
  {
    title: "Teknik senaryo ve prova planı",
    desc: "LED içerik sırası, konuşmacı geçişi, ses düzeni ve ışık senaryosu prova saatlerine bağlanır.",
  },
  {
    title: "Etkinlik günü ve kapanış",
    desc: "Kurulum, sahne yönetimi, söküm ve teslim adımları aynı operasyon planıyla kapatılır.",
  },
];

const SERVICE_ITEMS = [
  {
    title: "Konferans ve seminer organizasyonu",
    desc: "Konuşmacı sahnesi, sunum ekranı, ses sistemi ve salon akışını birlikte planlıyoruz.",
  },
  {
    title: "Ürün lansman organizasyonu",
    desc: "Görsel etki, içerik akışı ve marka deneyimi için daha güçlü sahne kurguları hazırlıyoruz.",
  },
  {
    title: "Gala ve ödül töreni",
    desc: "Şık gece atmosferi, sahne geçişleri ve protokol yerleşimi tek operasyon mantığında ilerliyor.",
  },
  {
    title: "Açık hava ve büyük katılımlı etkinlik",
    desc: "Güç, görünürlük ve lojistik planı daha geniş saha şartlarına göre ölçekleniyor.",
  },
  {
    title: "Roadshow ve fuar desteği",
    desc: "Marka standı, mobil kurulum ve tekrar eden etkinlik ritmini hızlandırıyoruz.",
  },
  {
    title: "Teknik altyapı ve operasyon desteği",
    desc: "Jeneratör, UPS, yedek kontrol ve etkinlik günü koordinasyonu aynı ekipte toplanıyor.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/img/kurumsal/konferans.webp",
    alt: "Kurumsal konferans sahnesi ve ekran kurulumu",
  },
  {
    src: "/img/kurumsal/lansman.webp",
    alt: "Kurumsal lansman sahnesi",
  },
  {
    src: "/img/kurumsal/bayi-toplantisi.webp",
    alt: "Bayi toplantısı salon kurulumu",
  },
  {
    src: "/img/kurumsal/7.webp",
    alt: "Kurumsal gece ve masa düzeni",
  },
  {
    src: "/img/kurumsal/8.webp",
    alt: "Kurumsal etkinlik teknik ekran yerleşimi",
  },
];

const VIDEO_GALLERY = [
  {
    id: "1R5Av0x5ouA",
    eyebrow: "Kurulum temposu",
    title: "Kurulum ve sahne prodüksiyon akışı",
    description:
      "Sahne kurulumu, LED ekran entegrasyonu ve etkinliğe hazırlık temposunu tek akışta gösteren kısa saha videosu.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "JNzGlNzNRuk",
    eyebrow: "Teknik hazırlık",
    title: "Hızlı kurulum ve teknik hazırlık",
    description:
      "Dar zamanlı projelerde kurulum hızını ve teknik ekip refleksini gösteren gerçek uygulama kesiti.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    eyebrow: "Gerçek uygulama",
    title: "Etkinlikten gerçek LED ve sahne örnekleri",
    description:
      "Kurumsal gala, lansman ve sahne uygulamalarından seçilmiş kısa örneklerle gerçek saha kalitesini görünür kılar.",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
];

const TECHNICAL_POINTS = [
  "İzleme mesafesine uygun ekran ve sahne görünürlüğü",
  "Salon veya açık alan koşullarına uygun ses kapsamı",
  "Yedekli güç, kontrol ve kritik ekipman planı",
  "Canlı yayın veya hibrit akış ihtiyaçlarının önceden netleşmesi",
];

const USE_CASES = [
  "Konferans ve seminerler",
  "Ürün lansmanları",
  "Gala ve ödül törenleri",
  "Bayi toplantıları",
  "Fuar ve roadshow projeleri",
  "Kurumsal kutlama geceleri",
];

const FAQ_ITEMS = [
  {
    q: "Kurumsal organizasyon şirketleri ne yapar?",
    a: "Kurumsal organizasyon şirketleri; hedef, içerik akışı, teknik prodüksiyon ve saha operasyonunu birlikte yönetir. Sahne, LED ekran, ses ve ışık gibi kalemleri tek plan üzerinde birleştirir. Yalnızca ekipman temin etmekle kalmaz; etkinlik öncesi keşif, prova planlaması ve etkinlik günü sahne yönetimi de bu kapsamın içine girer.",
  },
  {
    q: "Kurumsal etkinlikte teklif hangi bilgilere göre hazırlanır?",
    a: "Etkinlik formatı, şehir veya mekân bilgisi, kişi sayısı, süre ve görsel beklenti teklif çalışmasının temelini oluşturur. Detaylı kurgu keşif sonrası netleşir. İlk görüşmede bu başlıkları paylaşmanız, daha hızlı bir ön kapsam ve daha doğru bir bütçe aralığı görmenizi sağlar.",
  },
  {
    q: "İstanbul dışındaki projelerde de destek veriyor musunuz?",
    a: "Evet. İstanbul merkezli operasyon yürütsek de Türkiye genelinde kurulum ve teknik destek sağlayabiliyoruz. Ankara, İzmir, Bursa ve diğer büyük şehirlerde ekipman lojistiği ile saha ekibi koordinasyonunu aynı plan üzerinden yürütebiliyoruz.",
  },
  {
    q: "Fiyat aralıkları neden ilk görüşmede kesinleşmiyor?",
    a: "Sahne ölçüsü, LED metrajı, kurulum süresi, prova yoğunluğu ve teknik ekip planı fiyatı doğrudan etkiler. Bu yüzden ilk paylaşılan rakamlar tahmini bütçe niteliğindedir. Mekân keşfi ve teknik kapsam netleştiğinde kalemler daha görünür hale gelir ve sürpriz maliyet ihtimali azalır.",
  },
  {
    q: "Canlı yayın ve hibrit etkinlik altyapısı dahil edilebilir mi?",
    a: "Evet. Gerekli olduğunda sahne içi görüntüleme, kayıt, streaming ve kontrol akışı da kurumsal etkinlik planına dahil edilir. Hibrit formatlarda salon içi deneyim ile yayın tarafındaki beklentiyi birlikte düşünmek gerekir; teknik kurgu buna göre ayrıca şekillendirilir.",
  },
  {
    q: "Etkinlik günü sahada kim koordinasyonu yönetir?",
    a: "Her projede sahadaki ana muhatap teknik koordinatördür. Sahne, ses, ışık ve LED ekranı ayrı ayrı takip eden birden fazla kişiyle değil; tüm akışı tek elden yöneten bir ekip yapısıyla ilerlemek iletişim karmaşasını azaltır.",
  },
  {
    q: "Kurumsal organizasyonda prova süreci nasıl işler?",
    a: "Prova, teknik senaryonun gerçek koşullarda test edildiği aşamadır. Konuşmacı geçişleri, LED içerik sıralaması, ses seviyeleri ve ışık kurgusu prova sırasında netleşir. Kurulum tamamlandıktan sonra tam prova planlamak, etkinlik günü daha sakin bir operasyon akışı sağlar.",
  },
];

export const metadata = {
  title: "Kurumsal Organizasyon Şirketleri | Etkinlik Kiralama",
  description:
    "İstanbul'daki kurumsal organizasyonlara sahne, LED ekran, ses ve ışık prodüksiyon çözümleri. Anahtar teslim kiralama, profesyonel ekip ve hızlı teklif akışı.",
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
    title: "Kurumsal Organizasyon Şirketleri | Etkinlik Kiralama",
    description:
      "Kurumsal etkinlikler için sahne, LED ekran, ses ve ışık prodüksiyon çözümleri. Tekliften sahaya kadar kontrollü operasyon akışı.",
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
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurumsal Organizasyon Şirketleri | Sahneva",
    description:
      "Kurumsal etkinliklerde sahne, LED ekran, ses ve ışık prodüksiyon çözümleri.",
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
    soft: "bg-gradient-to-b from-white to-slate-50",
    ink: "bg-[#0B1120] text-white",
  };

  return (
    <section id={id} className={`${variantClass[variant]} py-16 md:py-20`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

function H2({ kicker, title, desc, center = false, dark = false }) {
  return (
    <header className={`${center ? "mx-auto text-center" : ""} mb-10 max-w-3xl`}>
      {kicker ? (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${
            dark
              ? "border-white/15 bg-white/5 text-white/80"
              : "border-slate-200 bg-white text-slate-700"
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
          <span>{kicker}</span>
        </div>
      ) : null}
      <h2
        className={`mt-5 text-3xl font-black tracking-tight md:text-4xl lg:text-5xl ${
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
      className={`rounded-3xl border p-6 shadow-sm ${className} ${
        dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"
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

  const faqNode = buildFaqSchema(FAQ_ITEMS.map(({ q, a }) => ({ question: q, answer: a })));
  const videoObjects = VIDEO_GALLERY.map((video, index) => ({
    "@type": "VideoObject",
    "@id": `${pageUrl}#video-${index + 1}`,
    name: video.title,
    description: video.description,
    uploadDate: video.uploadDate,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
  }));

  const graph = [
    {
      "@type": "WebPage",
      "@id": webPageId,
      url: pageUrl,
      name: metadata.title,
      description: metadata.description,
      inLanguage: "tr-TR",
      isPartOf: { "@id": WEBSITE_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
      },
      mainEntity: { "@id": serviceId },
      hasPart: videoObjects.map((video) => ({ "@id": video["@id"] })),
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Kurumsal Organizasyon",
      serviceType: "Kurumsal Etkinlik Organizasyonu",
      description: metadata.description,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: { "@type": "Country", name: "Türkiye" },
      url: pageUrl,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#localbusiness`,
      name: "Sahneva",
      url: pageUrl,
      telephone: PHONE,
      image: `${ORIGIN}/img/kurumsal/hero.webp`,
      areaServed: { "@type": "Country", name: "Türkiye" },
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
        addressLocality: "İstanbul",
      },
      makesOffer: { "@id": serviceId },
    },
  ];

  if (faqNode) graph.push(faqNode);
  graph.push(...videoObjects);

  return <JsonLdScript id="ld-json-kurumsal" data={{ "@context": "https://schema.org", "@graph": graph }} />;
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#070B16]" aria-labelledby="hero-title">
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#04070f]/99 via-[#050b15]/92 via-40% to-[#0B1120]/38" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/95 via-[#04070f]/48 to-black/12" />
        <div className="absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#03060d]/76 via-[#03060d]/52 to-transparent" />
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-5 pb-14 pt-40 md:px-8 md:pb-20 md:pt-48 xl:px-10">
        <div className="max-w-[35rem] md:ml-3 lg:ml-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
            Kurumsal prodüksiyon
          </div>

          <h1
            id="hero-title"
            className="mt-6 max-w-[8.6ch] text-[clamp(2.9rem,5.25vw,4.9rem)] font-black leading-[0.98] tracking-tight text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.45)]"
          >
            Büyük ölçekli
            <span className="mt-2 block text-white/92">kurumsal etkinliklerde</span>
            <span className="mt-2 block text-white">
              stratejik prodüksiyon partneriniz
            </span>
          </h1>

          <p className="mt-7 max-w-[29rem] text-base leading-relaxed text-white/84 md:text-[1.34rem] md:leading-relaxed">
            Konferans, lansman, gala ve yüksek katılımlı şirket etkinliklerinde; planlama, risk yönetimi ve yedekli
            teknik altyapıyla tekliften sahaya kadar kontrollü bir akış kuruyoruz.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              Hemen teklif al
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/projeler"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/25 px-6 py-3 font-semibold text-white/95 transition hover:bg-white/10"
            >
              Portföyü incele
              <CirclePlay className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid max-w-6xl gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="grid gap-4 sm:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.75rem] border border-white/10 bg-black/28 px-5 py-5 text-white shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur"
              >
                <div className="text-2xl font-black md:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {ASSURANCE_ITEMS.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/32 px-4 py-3 text-sm font-semibold text-white/84 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroShowcaseSection() {
  return (
    <section className="relative -mt-8 bg-transparent pb-6 md:-mt-14 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-slate-200/70 bg-white shadow-[0_40px_120px_-55px_rgba(15,23,42,0.45)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative overflow-hidden bg-slate-950">
              <div className="relative aspect-[16/12] lg:aspect-auto lg:min-h-[36rem]">
                <Image
                  src="/img/kurumsal/8.webp"
                  alt="Kurumsal etkinlik için sahne ve LED ekran operasyon görüntüsü"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 54vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060914]/88 via-[#060914]/20 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/70 backdrop-blur">
                    <RadioTower className="h-3.5 w-3.5" aria-hidden="true" />
                    Show control
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Canlı plan akışı
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-7">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Operasyon masası</div>
                      <div className="mt-2 text-lg font-black">Teklif, prova ve sahne günü aynı ritimde ilerler.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Saha temposu</div>
                      <div className="mt-2 text-lg font-black">Teknik kararlar görünürlüğü ve sakinliği birlikte taşır.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 md:p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Operasyon kurgusu
              </div>

              <h2 className="mt-6 max-w-[13ch] text-4xl font-black leading-[0.98] tracking-tight text-slate-950 md:text-5xl">
                Sahne hissini,
                <span className="mt-2 block text-blue-700">karar netliğiyle</span>
                birleştiriyoruz
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                İyi görünen kurgu tek başına yetmez. Sahne dili, prova akışı, yükleme temposu ve teknik kararların aynı ritimde
                ilerlemesi gerekir. Bu bölüm o hissi daha ilk ekranda görünür kılmak için var.
              </p>

              <div className="mt-8 grid gap-4">
                {HERO_SIGNAL_ITEMS.map(({ title, desc, Icon }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-[1.4rem] border border-slate-200 bg-white px-4 py-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)]"
                  >
                    <div className="mt-0.5 rounded-2xl border border-slate-200 bg-slate-50 p-2.5 text-blue-700">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-black text-slate-950">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projeler"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  Projeleri gör
                  <MoveRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-50"
                >
                  Hızlı görüşme
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                </a>
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
            kicker="Kurumsal yaklaşım"
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
          kicker="Referans akışı"
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
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-relaxed text-white/70">
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
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 ${
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
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55">
                    0{index + 1}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/70 backdrop-blur">
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
                  <article className="group relative min-h-[13.5rem] overflow-hidden rounded-[2rem] border border-white/10">
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
                        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55">03</span>
                        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/70 backdrop-blur">
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
        kicker="Paket akışı"
        title="Kurumsal kapsamı daha hızlı netleştirin"
        desc="İlk görüşmede bütün detayı değil; etkinlik formatını, görsel beklentiyi ve operasyon yoğunluğunu netleştirmek yeterlidir."
        center
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {PACKAGE_OPTIONS.map((item) => (
          <Card key={item.title} className="h-full">
            <div className="text-sm font-semibold text-blue-700">Ön kapsam</div>
            <h3 className="mt-2 text-2xl font-black text-gray-900">{item.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{item.desc}</p>
            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-900">
              Tahmini bütçedir; net plan, mekân ve süre bilgisine göre güncellenir.
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition"
              >
                {item.cta}
              </a>
              <Link
                href="#planlama"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-gray-900 hover:bg-slate-50 transition"
              >
                Akışı incele
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function PlanningSection() {
  return (
    <SectionShell variant="light" id="planlama">
      <H2
        kicker="Planlama akışı"
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

function ServicesSection() {
  const ctaLabels = ["Teklif al", "Kapsamı sor", "Planı konuş"];

  return (
    <SectionShell variant="soft" id="hizmetler">
      <H2
        kicker="Hizmet kapsamı"
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
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-500 transition"
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
            kicker="Görsel akış"
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
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/projeler"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Tüm projeleri gör
            <MoveRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid auto-rows-[11rem] gap-4 sm:grid-cols-2 lg:auto-rows-[12rem]">
          <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:col-span-2 sm:row-span-2">
            <Image src={featured.src} alt={featured.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 54vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Öne çıkan kurulum</div>
              <div className="mt-2 max-w-[14ch] text-3xl font-black leading-tight md:text-4xl">
                Kurumsal sahne, LED ve salon akışını aynı hikâyede topluyoruz.
              </div>
            </div>
          </article>

          {supporting.slice(0, 3).map((image, index) => (
            <article
              key={image.src}
              className={`relative overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.28)] ${
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
            kicker="Video vitrini"
            title={
              <>
                Gerçek <span className="text-blue-300">kurulum videoları</span> ile sahadaki kaliteyi görünür kılıyoruz
              </>
            }
            desc="Video burada dekor değil; tempo, ekip disiplini ve teknik standardı hissettiren bir karar katmanı."
            dark
          />

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_28px_90px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
              <div className="relative aspect-[16/10]">
                <LazyVideoEmbed
                  videoId={featuredVideo.id}
                  title={featuredVideo.title}
                  thumbnailUrl={`https://i.ytimg.com/vi/${featuredVideo.id}/hqdefault.jpg`}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                {featuredVideo.eyebrow}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Öne çıkan video
              </span>
            </div>

            <h3 className="mt-4 max-w-[16ch] text-3xl font-black text-white md:text-4xl">{featuredVideo.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{featuredVideo.description}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Kurulum temposu",
                "Teknik hazırlık disiplini",
                "Saha günü gerçek atmosfer",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/75">
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
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.85)]"
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
                      <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-blue-200">
                        {video.eyebrow}
                      </span>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/40">
                        Video {index + 2}
                      </span>
                    </div>
                    <h3 id={`corporate-video-${video.id}-title`} className="mt-4 text-2xl font-black text-white">
                      {video.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/68 md:text-base">{video.description}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-white/50">
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
            kicker="Teknik altyapı"
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
              <div key={item} className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-white/85">
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

      <div className="mx-auto mb-8 max-w-5xl rounded-[2rem] border border-slate-200 bg-white px-6 py-6 shadow-sm">
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
            <div key={item.title} className="rounded-2xl bg-slate-50 px-4 py-4">
              <div className="font-black text-slate-900">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
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
  return (
    <SectionShell variant="ink" id="cta">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#08101d] via-[#0B1120] to-[#0f1b33] px-6 py-8 shadow-[0_40px_110px_-45px_rgba(0,0,0,0.95)] md:px-8 md:py-10">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-blue-400" aria-hidden="true" />
              Teklif ve keşif
            </div>

            <h2 className="mt-6 max-w-[12ch] text-4xl font-black leading-[0.98] tracking-tight text-white md:text-6xl">
              Profesyonel kurumsal çözümlere
              <span className="mt-2 block bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
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
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/75">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                  <RadioTower className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="text-xl font-black text-white">WhatsApp'tan yazın</div>
                  <p className="mt-2 text-white/68 leading-relaxed">Hızlı ön bütçe ve kapsam için doğrudan bilgi paylaşın.</p>
                </div>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-500"
              >
                Teklif iste
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80 w-fit">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4 text-lg font-black text-white">İletişim formu</div>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  Daha detaylı brief ve mekân bilgisi göndermek isterseniz form üzerinden ilerleyin.
                </p>
                <Link
                  href="/iletisim"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Formu aç
                  <MoveRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80 w-fit">
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-4 text-lg font-black text-white">Telefonla ulaşın</div>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  Müsaitlik, şehir ve kurulum takvimi için doğrudan görüşebilirsiniz.
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10"
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
      <HeroShowcaseSection />
      <OverviewSection />
      <FormatsSection />
      <PackageSection />
      <PlanningSection />
      <ServicesSection />
      <GallerySection />
      <VideoShowcaseSection />
      <TechnicalSection />
      <StatsAndUseCases />
      <FAQSection />
      <RelatedServices />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.corporate} links={CONTENT_CLUSTERS.corporate.guides} />
      <CTASection />
    </>
  );
}
