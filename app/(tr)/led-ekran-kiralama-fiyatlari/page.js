import Image from "next/image";
import Link from "next/link";
import LedCalculatorClient from "../led-ekran-hesaplama/LedCalculatorClient";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  Cpu,
  Gauge,
  Layers,
  MessageCircle,
  Monitor,
  Ruler,
  Sparkles,
  Truck,
} from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { getLastModifiedForFile } from "@/lib/seoLastModified";

export const revalidate = 86400;

const SLUG = "/led-ekran-kiralama-fiyatlari";
const PAGE_URL = `${BASE_SITE_URL}${SLUG}`;
const HERO_IMAGE = "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp";
const TECH_IMAGE = "/img/led/p19-indoor-led-teknik-masa-kurumsal-konferans-sahneva.webp";
const GALA_IMAGE = "/img/led/gala-led-sahne-video-wall-sahneva.webp";
const PUBLISH_DATE = "2026-05-21T00:00:00+03:00";
const MODIFIED_DATE = `${getLastModifiedForFile(
  "app/(tr)/led-ekran-kiralama-fiyatlari/page.js",
  "2026-05-21"
)}T00:00:00+03:00`;
const PRICE_VALID_UNTIL = "2027-12-31";
const PHONE = "905453048671";
const WHATSAPP_TEXT =
  "Merhaba, LED ekran kiralama fiyat teklifi istiyorum. Etkinlik tarihi: [gg.aa.yyyy], şehir: [il/ilçe], mekan: [iç/dış], tahmini ekran ölçüsü: [en x boy / m2], ekran tipi: [standart/P1.9].";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const PRICES = {
  standard: 1800,
  premiumP19: 4500,
  currency: "TRY",
};

const quickLinks = [
  { href: "#led-ekran-hesaplama-araci", label: "Hesaplama aracı" },
  { href: "#led-ekran-kiralama-fiyatlari-ne-kadar", label: "Fiyat ne kadar?" },
  { href: "#ortalama-led-ekran-kiralama-m2-fiyatlari", label: "m² fiyatları" },
  { href: "#indoor-outdoor-led-ekran-fiyat-farki", label: "Indoor / outdoor" },
  { href: "#p19-led-ekran-kiralama-fiyati", label: "P1.9 fiyatı" },
  { href: "#led-ekran-fiyatina-neler-dahil", label: "Neler dahil?" },
  { href: "#ornek-fiyat-senaryolari", label: "Örnek senaryolar" },
  { href: "#faq", label: "SSS" },
];

const priceRows = [
  {
    type: "Standart indoor / outdoor LED ekran",
    price: "1.800 TL/m²’den başlayan fiyatlarla",
    scope: "P2.9, P3.9 ve proje ihtiyacına göre seçilen standart panel kurulumları",
  },
  {
    type: "P1.9 Indoor LED ekran",
    price: "4.500 TL/m²’den başlayan fiyatlarla",
    scope: "Yakın izleme mesafesi, lansman, gala, konferans ve kapalı alan protokol işleri",
  },
  {
    type: "Kurulum ve söküm",
    price: "Proje kapsamına göre",
    scope: "Mekan erişimi, rigging, yükleme saati ve ekip planına göre netleşir",
  },
  {
    type: "NovaStar görüntü işlemcisi ve teknik reji",
    price: "Proje kapsamına göre",
    scope: "İçerik akışı, görüntü kontrolü, canlı kamera ve sunum ihtiyaçlarına göre planlanır",
  },
  {
    type: "Watchout / premium reji",
    price: "50.000 TL",
    scope: "Mapping, lansman, senkron video, çoklu ekran ve premium sahne akışı gereken işlerde opsiyonel eklenir",
  },
  {
    type: "Şehir dışı lojistik",
    price: "Ayrıca hesaplanır",
    scope: "Araç, ekip, konaklama, yükleme penceresi ve kurulum şehrine göre tekliflendirilir",
  },
];

const includedItems = [
  "LED panel seçimi ve m² hesabı",
  "Taşıyıcı konstrüksiyon ve kablolama planı",
  "Kurulum, söküm ve saha testleri",
  "NovaStar görüntü işlemcisi ve görüntü kontrol altyapısı",
  "İçerik akışı, görüntü kontrolü ve teknik reji",
  "Etkinlik süresince teknik ekip desteği",
];

const requiredInfo = [
  "Etkinlik tarihi ve şehir / ilçe bilgisi",
  "Mekan tipi: indoor, outdoor, fuar alanı, salon veya açık alan",
  "Tahmini ekran ölçüsü ya da sahne genişliği",
  "İzleyici mesafesi ve içerik türü: sunum, kamera, logo, video",
  "Kurulum ve söküm saatleri",
  "NovaStar görüntü işlemcisi, reji, kamera veya canlı yayın ihtiyacı",
];

const scenarios = [
  {
    title: "Küçük indoor toplantı / konferans",
    meters: "12 m² LED ekran",
    screen: "Standart indoor LED ekran",
    detail: "Küçük ekranlarda sadece m² hesabı yerine minimum kurulum paketi uygulanır; ekip, işlemci, kablolama ve lojistik buna göre planlanır.",
    price: "Fiyat minimum paket, kurulum zorluğu ve mekan erişimine göre hesaplanır.",
  },
  {
    title: "Kurumsal lansman / gala",
    meters: "24-40 m² LED ekran",
    screen: "P2.9 veya P1.9 seçenekleri",
    detail: "NovaStar görüntü işlemcisi, teknik reji, içerik kontrolü ve sahne akışı birlikte planlanır.",
    price: "Fiyat ekran tipi, toplam m² ve teknik ekip kapsamına göre belirlenir.",
  },
  {
    title: "P1.9 Indoor LED kapalı alan etkinliği",
    meters: "P1.9 indoor LED ekran",
    screen: "Yakın izleme mesafesi ve yüksek çözünürlük",
    detail: "Lansman, konferans, gala ve protokol etkinliklerinde kamera dostu görüntü kalitesi hedeflenir.",
    price: "4.500 TL/m²’den başlayan fiyatlarla; reji, görüntü işlemcisi, kurulum, söküm ve teknik ekip proje kapsamına göre planlanır.",
  },
];

const faq = [
  {
    q: "LED ekran kiralama fiyatları ne kadar?",
    a: "2026 LED ekran kiralama fiyatları standart indoor/outdoor ekranlarda 1.800 TL/m²’den, P1.9 Indoor LED ekranda 4.500 TL/m²’den başlayan fiyatlarla planlanır. Küçük ekranlarda ise ekip, işlemci, kablolama ve lojistik nedeniyle minimum kurulum paketi uygulanır. Net teklif ekran tipi, toplam m², kurulum süresi, mekan erişimi, reji ve lojistik kapsamına göre çıkarılır.",
  },
  {
    q: "LED ekran kiralama fiyatı m² bazlı mı hesaplanır?",
    a: "Evet. Ana hesap toplam LED ekran alanı üzerinden yapılır. Ancak sadece m² yeterli değildir; piksel aralığı, indoor/outdoor kullanım, kurulum zorluğu, NovaStar görüntü işlemcisi, teknik reji ve teknik ekip kapsamı da bütçeyi etkiler. 4x3 gibi küçük ekranlarda m² fiyatı yerine minimum iş bedeli uygulanabilir.",
  },
  {
    q: "Watchout her LED ekran işinde gerekli mi?",
    a: "Hayır. Watchout standart LED kurulumlarında zorunlu değildir. Mapping, lansman, çoklu ekran senkronizasyonu, sahne şovu ve premium kurumsal etkinliklerde isteğe bağlı olarak eklenir. Sahneva hesaplama aracında Watchout opsiyonu 50.000 TL ek hizmet olarak seçilebilir.",
  },
  {
    q: "P1.9 LED ekran kiralama fiyatı neden daha yüksektir?",
    a: "P1.9 LED ekranlar daha küçük piksel aralığına ve daha yüksek çözünürlüğe sahiptir. Yakın izleme mesafesinde daha keskin görüntü sunduğu için gala, lansman, konferans ve protokol etkinliklerinde yüksek çözünürlüklü çözüm olarak fiyatlanır.",
  },
  {
    q: "LED ekran kiralama fiyatına kurulum ve söküm dahil mi?",
    a: "Kurulum ve söküm çoğu projede teklif kapsamına alınır; ancak net durum mekan erişimi, şehir, kurulum saati, yükleme alanı, rigging ihtiyacı ve ekip planına göre belirlenir.",
  },
  {
    q: "LED ekran için teknik ekip ve reji desteği veriliyor mu?",
    a: "Evet. Sahneva LED ekran projelerinde teknik ekip, görüntü kontrolü, içerik akışı, NovaStar görüntü işlemcisi ve gerektiğinde reji desteğini proje kapsamına göre planlar.",
  },
  {
    q: "Indoor ve outdoor LED ekran fiyatları farklı mı?",
    a: "Evet. Indoor LED ekranlarda yakın izleme netliği ve piksel aralığı öne çıkarken outdoor LED ekranlarda parlaklık, hava koşulları, IP koruma ve taşıyıcı sistem ihtiyacı fiyatı etkiler.",
  },
  {
    q: "LED ekran ölçüsü nasıl belirlenir?",
    a: "LED ekran ölçüsü sahne genişliği, izleyici mesafesi, içerik formatı, salon görüş açısı ve kamera aktarımı ihtiyacına göre belirlenir. En sağlıklı teklif için ekranın kullanılacağı mekan ve hedef görünürlük birlikte değerlendirilir.",
  },
  {
    q: "LED ekran kiralama teklifi almak için hangi bilgiler gerekir?",
    a: "Etkinlik tarihi, şehir, mekan tipi, tahmini ekran ölçüsü, izleyici mesafesi, içerik türü, kurulum-söküm saatleri, reji ve canlı yayın ihtiyacı teklif için yeterli başlangıç bilgisidir.",
  },
  {
    q: "NovaStar görüntü işlemcisi ve teknik reji fiyata dahil mi?",
    a: "NovaStar görüntü işlemcisi, görüntü kontrolü ve teknik reji bazı projelerde temel kapsamın parçası olabilir; daha büyük lansman, gala ve konferanslarda kapsam ayrıca netleştirilir.",
  },
  {
    q: "Şehir dışı LED ekran kiralama fiyatı nasıl hesaplanır?",
    a: "Şehir dışı projelerde LED ekran m² bedeline ek olarak araç, yakıt, ekip, konaklama, yükleme saatleri ve kurulum şehrindeki saha koşulları hesaplanır.",
  },
];

export const metadata = {
  title: "LED Ekran Kiralama Fiyatları 2026 | m², Kurulum ve Teknik Destek",
  description:
    "2026 LED ekran kiralama fiyatları; P1.9, P2.5, P2.9 ve P3.9 panel seçeneklerinde m² bazlı başlangıç bedelleri, minimum kurulum paketi, Watchout, kurulum, söküm, reji ve lojistik kalemlerine göre hesaplanır.",
  alternates: buildLanguageAlternates({
    tr: SLUG,
    canonical: SLUG,
    xDefault: SLUG,
  }),
  keywords: [
    "led ekran kiralama fiyatları",
    "led ekran kiralama fiyatları 2026",
    "led ekran m2 fiyatı",
    "led ekran hesaplama",
    "led ekran m2 hesaplama",
    "led ekran fiyat hesaplama",
    "4x3 led ekran fiyatı",
    "P1.9 LED ekran kiralama fiyatı",
    "indoor LED ekran fiyatı",
    "outdoor LED ekran fiyatı",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "LED Ekran Kiralama Fiyatları 2026 | m², Kurulum ve Teknik Destek",
    description:
      "Standart LED ekran ve P1.9 Indoor LED için 2026 m² bazlı başlangıç bedelleri; hesaplama aracı, minimum paket, Watchout, kurulum, görüntü işlemcisi ve teknik reji kalemleri.",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "LED ekran kiralama fiyatları 2026 P1.9 Indoor LED ekran kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Ekran Kiralama Fiyatları 2026",
    description:
      "LED ekran m² fiyatı, hesaplama aracı, minimum paket, P1.9 Indoor LED farkı, kurulum, NovaStar görüntü işlemcisi ve teknik reji kapsamı.",
    images: [`${BASE_SITE_URL}${HERO_IMAGE}`],
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

function tl(value) {
  return value.toLocaleString("tr-TR");
}

function buildJsonLd() {
  const webPageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const offerCatalogId = `${PAGE_URL}#offers`;
  const howToId = `${PAGE_URL}#howto`;

  const aggregateOffer = {
    "@type": "AggregateOffer",
    lowPrice: String(PRICES.standard),
    highPrice: String(PRICES.premiumP19),
    priceCurrency: PRICES.currency,
    offerCount: "3",
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  };

  const offerCatalog = {
    "@type": "OfferCatalog",
    "@id": offerCatalogId,
    name: "LED ekran kiralama fiyat seçenekleri",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Standart indoor / outdoor LED ekran başlangıç fiyatı",
        price: String(PRICES.standard),
        priceCurrency: PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url: `${PAGE_URL}#ortalama-led-ekran-kiralama-m2-fiyatlari`,
        description: "Standart indoor/outdoor LED ekran kiralama için m² bazlı başlangıç fiyatı.",
      },
      {
        "@type": "Offer",
        name: "P1.9 Indoor LED ekran başlangıç fiyatı",
        price: String(PRICES.premiumP19),
        priceCurrency: PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url: `${PAGE_URL}#p19-led-ekran-kiralama-fiyati`,
        description: "P1.9 Indoor LED ekran kiralama için m² bazlı başlangıç fiyatı.",
      },
      {
        "@type": "Offer",
        name: "Watchout / premium reji opsiyonu",
        price: "50000",
        priceCurrency: PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url: `${PAGE_URL}#led-ekran-hesaplama-araci`,
        description: "Mapping, lansman, çoklu ekran senkronizasyonu ve premium sahne akışı için opsiyonel Watchout hizmeti.",
      },
    ],
  };

  const service = {
    "@type": "Service",
    "@id": serviceId,
    name: "LED Ekran Kiralama Fiyatları 2026",
    serviceType: "LED ekran kiralama fiyatlandırma ve teknik tekliflendirme",
    description: metadata.description,
    url: PAGE_URL,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "AdministrativeArea", name: "İstanbul" },
    ],
    offers: aggregateOffer,
    hasOfferCatalog: { "@id": offerCatalogId },
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const howTo = {
    "@type": "HowTo",
    "@id": howToId,
    name: "LED ekran kiralama fiyat teklifi nasıl alınır?",
    description:
      "LED ekran kiralama teklifi için etkinlik, mekan, ölçü, ekran tipi ve teknik reji ihtiyacını paylaşarak net proje bütçesi alınır.",
    step: [
      {
        "@type": "HowToStep",
        name: "Etkinlik ve mekan bilgisini paylaşın",
        text: "Tarih, şehir, mekan tipi, salon veya açık alan bilgisini iletin.",
      },
      {
        "@type": "HowToStep",
        name: "Ekran ölçüsü ve izleme mesafesini netleştirin",
        text: "Tahmini ekran en-boy ölçüsü, toplam m², izleyici mesafesi ve içerik türünü belirtin.",
      },
      {
        "@type": "HowToStep",
        name: "Teknik kapsamı belirleyin",
        text: "NovaStar görüntü işlemcisi, teknik reji, kamera aktarımı, kurulum ve söküm saatleri teklif kapsamına eklenir.",
      },
      {
        "@type": "HowToStep",
        name: "Proje bazlı fiyat teklifi alın",
        text: "Ekran tipi, m², ekip ve lojistik kapsamına göre net teklif paylaşılır.",
      },
    ],
  };

  const webApplication = {
    "@type": "WebApplication",
    "@id": `${PAGE_URL}#calculator`,
    name: "LED Ekran Hesaplama Aracı",
    url: `${PAGE_URL}#led-ekran-hesaplama-araci`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "LED ekran en, boy, gün sayısı, iç/dış mekan ve opsiyonel Watchout seçimine göre yaklaşık başlangıç bedeli hesaplayan araç.",
    provider: { "@id": ORGANIZATION_ID },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": webPageId,
    url: PAGE_URL,
    name: "LED Ekran Kiralama Fiyatları 2026",
    description: metadata.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE_SITE_URL}${HERO_IMAGE}`,
      caption:
        "300 m² P1.9 yüksek çözünürlüklü Indoor LED ekran altyapısı; gala, konferans, lansman ve fuar prodüksiyonlarında yakın izleme mesafesinde güçlü görüntü kalitesi sağlar.",
    },
    image: [`${BASE_SITE_URL}${HERO_IMAGE}`, `${BASE_SITE_URL}${TECH_IMAGE}`],
    mainEntity: { "@id": serviceId },
    hasPart: [{ "@id": `${PAGE_URL}#calculator` }],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, service, offerCatalog, faqPage, howTo, webApplication],
  };
}

function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Page() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: `${BASE_SITE_URL}/` },
          { name: "LED Ekran Kiralama", url: `${BASE_SITE_URL}/led-ekran-kiralama` },
          { name: "LED Ekran Kiralama Fiyatları", url: PAGE_URL },
        ]}
      />
      <JsonLd id="ld-json-led-ekran-fiyatlari" data={jsonLd} />

      <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
        <section className="relative min-h-[680px] overflow-hidden pt-24 md:pt-28">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="LED ekran kiralama fiyatları 2026 için P1.9 Indoor LED ekran sahne kurulumu"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-slate-950/50" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96)_0%,rgba(7,17,31,0.78)_42%,rgba(7,17,31,0.32)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_26%,rgba(34,211,238,0.26),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(16,185,129,0.2),transparent_30%)]" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
          </div>

          <div className="container relative z-10 mx-auto px-4 pb-16">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                <Sparkles size={16} aria-hidden="true" />
                2026 m² başlangıç fiyatları
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] text-white md:text-7xl">
                LED Ekran Kiralama Fiyatları 2026
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 md:text-2xl md:leading-10">
                Standart indoor/outdoor LED ekran, P1.9 Indoor LED, kurulum, söküm,
                NovaStar görüntü işlemcisi, teknik reji ve saha ekibi kapsamını m² hesabıyla birlikte
                netleştiren fiyat sayfası.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Bu sayfada m² bazlı başlangıç bedellerini, küçük ekranlarda minimum paket mantığını ve fiyatı etkileyen teknik kalemleri inceleyebilirsiniz.
                Envanter gücü, kurulum senaryoları, rigging, reji ve saha operasyon detayları için ana hizmet sayfamız olan{" "}
                <Link href="/led-ekran-kiralama" className="font-black text-cyan-100 underline underline-offset-4">
                  LED Ekran Kiralama
                </Link>{" "}
                bölümünü ziyaret edebilirsiniz.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-300">
                    Standart LED ekran
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {tl(PRICES.standard)} TL/m²
                  </p>
                  <p className="mt-1 text-sm text-slate-300">başlayan fiyatlarla</p>
                </div>
                <div className="rounded-2xl border border-cyan-300/40 bg-cyan-300/10 p-5 backdrop-blur">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-100">
                    P1.9 Indoor LED
                  </p>
                  <p className="mt-2 text-3xl font-black text-white">
                    {tl(PRICES.premiumP19)} TL/m²
                  </p>
                  <p className="mt-1 text-sm text-cyan-100/80">başlayan fiyatlarla</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-7 py-4 font-black text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  WhatsApp ile fiyat iste
                </a>
                <a
                  href="#led-ekran-hesaplama-araci"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-cyan-300/40 bg-cyan-300/10 px-7 py-4 font-black text-cyan-50 backdrop-blur transition hover:bg-cyan-300/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/40"
                >
                  <Calculator size={20} aria-hidden="true" />
                  LED fiyat hesapla
                </a>
                <Link
                  href="/led-ekran-kiralama"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                >
                  LED ekran kiralama
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <nav
              aria-label="LED ekran fiyatları sayfa bölümleri"
              className="mt-12 flex max-w-5xl flex-wrap gap-2 rounded-3xl border border-white/10 bg-slate-950/55 p-3 backdrop-blur-xl"
            >
              {quickLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-300/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section id="led-ekran-hesaplama-araci" className="scroll-mt-24">
          <LedCalculatorClient />
        </section>

        <section className="relative border-y border-white/10 bg-slate-950 py-8">
          <div className="container mx-auto grid gap-4 px-4 md:grid-cols-4">
            {[
              ["300 m²", "P1.9 Indoor LED envanteri"],
              ["1.800 TL", "standart m² başlangıç"],
              ["4.500 TL", "P1.9 m² başlangıç"],
              ["50.000 TL", "opsiyonel Watchout"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm font-bold text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="led-ekran-kiralama-fiyatlari-ne-kadar" className="container mx-auto px-4 py-20">
          <SectionHeader
            eyebrow="Fiyat Mantığı"
            title="LED ekran kiralama fiyatları neye göre belirlenir?"
            description="LED ekran kiralama fiyatı yalnızca panelin m² bedeli değildir. Ekran tipi, piksel aralığı, toplam ölçü, kurulum yüksekliği, mekan erişimi, teknik reji, görüntü işlemcisi, ekip süresi ve lojistik planı aynı teklifin içinde birlikte değerlendirilir."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              [Monitor, "Ekran tipi", "Indoor, outdoor, P1.9 veya standart panel seçimi görüntü kalitesi ve maliyeti doğrudan etkiler."],
              [Ruler, "Toplam m²", "En x boy hesabı ilk adımdır; ancak küçük ekranlarda minimum iş bedeli m² hesabının önüne geçebilir."],
              [Cpu, "Reji ve işlemci", "NovaStar, içerik akışı, canlı kamera, Watchout ve teknik operatör ihtiyacı proje kapsamına göre eklenir."],
            ].map(([Icon, title, desc]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
                <Icon className="h-9 w-9 text-cyan-300" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-black text-white">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ortalama-led-ekran-kiralama-m2-fiyatlari" className="bg-slate-950/80 px-4 py-20">
          <div className="container mx-auto">
            <SectionHeader
              eyebrow="m² Başlangıç Bedelleri"
              title="Ortalama LED ekran kiralama m² fiyatları"
              description="Aşağıdaki fiyatlar başlangıç niteliğindedir. Net teklif; kurulum, söküm, teknik ekip, şehir, mekan ve reji kapsamına göre hazırlanır."
            />

            <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-cyan-300/10 text-cyan-50">
                  <tr>
                    <th className="px-5 py-4 font-black">Kalem</th>
                    <th className="px-5 py-4 font-black">Başlangıç fiyatı</th>
                    <th className="px-5 py-4 font-black">Kapsam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-slate-300">
                  {priceRows.map((row) => (
                    <tr key={row.type}>
                      <td className="px-5 py-5 font-black text-white">{row.type}</td>
                      <td className="px-5 py-5 font-bold text-cyan-100">{row.price}</td>
                      <td className="px-5 py-5 leading-6">{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="indoor-outdoor-led-ekran-fiyat-farki" className="container mx-auto px-4 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeader
                eyebrow="Indoor / Outdoor"
                title="İç mekan ve dış mekan LED ekran fiyat farkı"
                description="Indoor LED ekranlarda izleme mesafesi, piksel aralığı ve kamera dostu görüntü ön plana çıkar. Outdoor LED ekranlarda ise parlaklık, IP koruma, rüzgar, taşıyıcı sistem ve enerji planı daha belirleyici olur."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  [Gauge, "Parlaklık", "Outdoor ekranlarda gün ışığına karşı yüksek parlaklık gerekir."],
                  [Truck, "Lojistik", "Açık alan kurulumlarında araç, vinç, ekip ve yükleme penceresi önem kazanır."],
                  [Layers, "Taşıyıcı sistem", "Truss, sahne, rigging ve güvenli sabitleme fiyatı etkiler."],
                  [BadgeCheck, "Güvenlik", "Rüzgar, zemin ve elektrik dağıtımı ayrıca değerlendirilir."],
                ].map(([Icon, title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                    <h3 className="mt-4 font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
              <Image
                src={TECH_IMAGE}
                alt="Indoor LED ekran teknik masa ve görüntü işlemcisi kurulumu"
                width={900}
                height={1100}
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="p19-led-ekran-kiralama-fiyati" className="bg-slate-950/80 px-4 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/20 bg-cyan-300/10 p-3 shadow-2xl">
              <Image
                src={GALA_IMAGE}
                alt="Gala etkinliği için P1.9 indoor LED ekran ve sahne video wall kurulumu"
                width={1000}
                height={760}
                className="rounded-[24px] object-cover"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Premium Çözüm"
                title="P1.9 Indoor LED ekran fiyatı neden daha yüksektir?"
                description="P1.9 LED ekranlar yakın izleme mesafesinde daha keskin görüntü verir. Bu yüzden gala, lansman, konferans, protokol ve kamera kaydı olan işlerde tercih edilir. Panel kalitesi, kurulum hassasiyeti, görüntü işlemcisi ve teknik reji ihtiyacı standart ekranlara göre daha yüksek bütçe oluşturur."
              />
              <div className="mt-8 rounded-3xl border border-cyan-300/30 bg-cyan-300/10 p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-100">P1.9 başlangıç</p>
                <p className="mt-3 text-4xl font-black text-white">{tl(PRICES.premiumP19)} TL/m²</p>
                <p className="mt-3 leading-7 text-cyan-50/80">
                  Net fiyat; toplam m², teknik ekip, reji, içerik akışı, kurulum süresi ve lojistik kapsamına göre hazırlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="led-ekran-fiyatina-neler-dahil" className="container mx-auto px-4 py-20">
          <SectionHeader
            eyebrow="Kapsam"
            title="LED ekran fiyatına neler dahil edilir?"
            description="Teklifte yalnızca panel m² bedeli değil, operasyonun sahada sorunsuz çalışmasını sağlayan teknik kalemler de planlanır."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                <p className="font-bold leading-7 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950/80 px-4 py-20">
          <div className="container mx-auto grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Teklif İçin Gerekli Bilgiler"
                title="Net LED ekran fiyatı için hangi bilgiler gerekir?"
                description="Doğru fiyat için ekran ölçüsü kadar saha koşulları da önemlidir. Aşağıdaki bilgiler paylaşıldığında teklif daha hızlı netleşir."
              />
            </div>
            <div className="grid gap-3">
              {requiredInfo.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <p className="font-bold leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ornek-fiyat-senaryolari" className="container mx-auto px-4 py-20">
          <SectionHeader
            eyebrow="Senaryolar"
            title="Örnek LED ekran fiyat senaryoları"
            description="Aşağıdaki senaryolar teklif yaklaşımını anlatmak içindir. Net fiyat için tarih, şehir, mekan ve teknik kapsam birlikte değerlendirilir."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {scenarios.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-cyan-300">{item.meters}</p>
                <h3 className="mt-4 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-3 font-bold text-slate-200">{item.screen}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.detail}</p>
                <p className="mt-4 rounded-2xl bg-slate-950/70 p-4 text-sm font-bold leading-6 text-cyan-50">
                  {item.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-slate-950/80 px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <SectionHeader
              eyebrow="Sıkça Sorulan Sorular"
              title="LED ekran kiralama fiyatları hakkında merak edilenler"
              description="m² hesabı, P1.9 farkı, kurulum, reji, Watchout ve şehir dışı lojistik gibi fiyatı etkileyen konular."
              align="center"
            />
            <div className="mt-10 space-y-4">
              {faq.map((item) => (
                <details key={item.q} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 open:bg-white/[0.07]">
                  <summary className="cursor-pointer list-none text-lg font-black text-white">
                    {item.q}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-300">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="rounded-[34px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-white/[0.05] to-slate-950 p-7 shadow-2xl md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black text-white md:text-5xl">
                  LED ekran projeniz için net fiyat teklifi alın
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Etkinlik tarihi, şehir, mekan, ekran ölçüsü ve teknik kapsamı paylaşın; Sahneva ekibi size m² hesabı, kurulum ve reji kalemleriyle net teklif hazırlasın.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-8 py-4 font-black text-slate-950 transition hover:bg-emerald-300"
              >
                <MessageCircle size={20} aria-hidden="true" />
                WhatsApp ile teklif al
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
