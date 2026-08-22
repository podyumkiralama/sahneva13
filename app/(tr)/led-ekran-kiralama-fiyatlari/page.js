import Image from "next/image";
import Link from "next/link";
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
  Truck,
} from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import PageHero from "@/components/PageHero";
import LedPriceCalculator from "@/components/LedPriceCalculator.client";
import JsonLd from "@/components/seo/JsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";

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
const PRICE_VALID_UNTIL = LED_SCREEN_PRICING.priceValidUntil;
const PHONE = "905453048671";
const WHATSAPP_TEXT =
  "Merhaba, LED ekran kiralama fiyat teklifi istiyorum. Etkinlik tarihi: [gg.aa.yyyy], şehir: [il/ilçe], mekan: [iç/dış], tahmini ekran ölçüsü: [en x boy / m2], ekran tipi: [standart/P1.9].";
const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const PRICES = {
  standard: LED_SCREEN_PRICING.standard.perSqm,
  premiumP19: LED_SCREEN_PRICING.premiumP19.perSqm,
  currency: LED_SCREEN_PRICING.currency,
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
    price: `${tl(PRICES.standard)} TL/m²’den başlayan fiyatlarla`,
    scope: "P2.9, P3.9 ve proje ihtiyacına göre seçilen standart panel kurulumları",
  },
  {
    type: "P1.9 Indoor LED ekran",
    price: `${tl(PRICES.premiumP19)} TL/m²’den başlayan fiyatlarla`,
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
    detail: "Kurulum ve söküm dahil olup olmayacağı mekan erişimi ve süreye göre netleşir.",
    price: "Fiyat m² başlangıç bedeli üzerinden proje kapsamına göre hesaplanır.",
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
    price: `${tl(PRICES.premiumP19)} TL/m²’den başlayan fiyatlarla; reji, görüntü işlemcisi, kurulum, söküm ve teknik ekip proje kapsamına göre planlanır.`,
  },
];

const faq = [
  {
    q: "LED ekran kiralama fiyatları ne kadar?",
    a: `2026 LED ekran kiralama fiyatları standart indoor/outdoor ekranlarda ${tl(PRICES.standard)} TL/m²’den, P1.9 Indoor LED ekranda ${tl(PRICES.premiumP19)} TL/m²’den başlayan fiyatlarla planlanır. Net teklif ekran tipi, toplam m², kurulum süresi, mekan erişimi, reji ve lojistik kapsamına göre çıkarılır.`,
  },
  {
    q: "LED ekran kiralama fiyatı m² bazlı mı hesaplanır?",
    a: "Evet. Ana hesap toplam LED ekran alanı üzerinden yapılır. Ancak sadece m² yeterli değildir; piksel aralığı, indoor/outdoor kullanım, kurulum zorluğu, NovaStar görüntü işlemcisi, teknik reji ve teknik ekip kapsamı da bütçeyi etkiler.",
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
    q: "LED ekran kiralama fiyatına teknik ekip ve reji dahil mi?",
    a: "Teknik ekip ve reji desteği bazı projelerde fiyat kapsamına dahildir; kapsam proje büyüklüğüne, etkinlik süresine ve içerik ihtiyacına göre teklif aşamasında netleştirilir.",
  },
  {
    q: "Indoor ve outdoor LED ekran fiyatları farklı mı?",
    a: "Evet. Indoor LED ekranlarda yakın izleme netliği ve piksel aralığı öne çıkarken outdoor LED ekranlarda parlaklık, hava koşulları, IP koruma ve taşıyıcı sistem ihtiyacı fiyatı etkiler.",
  },
  {
    q: "LED ekran m² hesabı fiyatı nasıl etkiler?",
    a: "LED ekran ölçüsü sahne genişliği, izleyici mesafesi ve içerik formatına göre genişlik × yükseklik formülüyle hesaplanır. m² arttıkça toplam fiyat artar; ancak piksel tipi seçimi (P1.9 vs P3.9) birim m² maliyetini belirler. Ölçü ve piksel kararı birlikte doğru fiyat için kritiktir.",
  },
  {
    q: "LED ekran kiralama fiyat teklifi için hangi bilgiler gerekir?",
    a: "Net fiyat teklifi için: etkinlik tarihi, şehir, mekan tipi (indoor/outdoor), tahmini ekran m², izleyici mesafesi, kurulum-söküm saatleri ve reji ihtiyacı yeterlidir. Bu bilgiler olmadan verilen rakam yanıltıcı olabilir.",
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
  title: "LED Ekran Kiralama Fiyatları 2026 | m² ve Kurulum",
  description:
    "2026 LED ekran kiralama fiyatları: P1.9, P2.5, P2.9 ve P3.9 panellerde m² bazlı başlangıç bedelleri; kurulum, reji ve lojistikle netleşir.",
  alternates: buildAlternatesForPath(SLUG),
  keywords: [
    "led ekran kiralama fiyatları",
    "led ekran kiralama fiyatları 2026",
    "led ekran m2 fiyatı",
    "P1.9 LED ekran kiralama fiyatı",
    "indoor LED ekran fiyatı",
    "outdoor LED ekran fiyatı",
  ],
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "LED Ekran Kiralama Fiyatları 2026 | m², Kurulum ve Teknik Destek",
    description:
      "Standart LED ekran ve P1.9 Indoor LED için 2026 m² başlangıç bedelleri; kurulum, söküm, görüntü işlemcisi ve teknik reji kalemleri.",
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
      "LED ekran m² fiyatı, P1.9 Indoor LED farkı, kurulum, NovaStar görüntü işlemcisi ve teknik reji kapsamı.",
    images: [`${BASE_SITE_URL}${HERO_IMAGE}`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

function tl(value) {
  return new Intl.NumberFormat("tr-TR").format(value);
}

function buildJsonLd() {
  const webPageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const offerCatalogId = `${PAGE_URL}#offer-catalog`;
  const howToId = `${PAGE_URL}#howto`;

  const aggregateOffer = {
    "@type": "AggregateOffer",
    priceCurrency: PRICES.currency,
    lowPrice: String(PRICES.standard),
    highPrice: String(PRICES.premiumP19),
    offerCount: "2",
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
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, service, offerCatalog, faqPage, howTo],
  };
}

function SectionHeader({ eyebrow, title, description, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-violet-300">
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

const calculatorStyles = {
  section: {
    background: "#020617",
    color: "#fff",
    padding: "80px 0",
    scrollMarginTop: "6rem",
  },
  container: {
    margin: "0 auto",
    width: "min(100% - 32px, 1280px)",
  },
  shell: {
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1.5rem",
    boxShadow: "0 25px 70px rgba(8, 47, 73, 0.28)",
    overflow: "hidden",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  },
  panel: {
    padding: "clamp(24px, 4vw, 32px)",
  },
  resultPanel: {
    background: "rgba(15, 23, 42, 0.72)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "clamp(24px, 4vw, 32px)",
  },
  eyebrow: {
    color: "#67e8f9",
    fontSize: "0.875rem",
    fontWeight: 900,
    letterSpacing: "0.18em",
    margin: "0 0 12px",
    textTransform: "uppercase",
  },
  title: {
    color: "#fff",
    fontSize: "clamp(30px, 4vw, 48px)",
    fontWeight: 900,
    lineHeight: 1.08,
    margin: 0,
  },
  description: {
    color: "#cbd5e1",
    fontSize: "clamp(16px, 2vw, 18px)",
    lineHeight: 1.8,
    margin: "20px 0 0",
  },
  form: {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginTop: "32px",
  },
  labelText: {
    color: "#f1f5f9",
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 900,
    marginBottom: "12px",
  },
  input: {
    background: "rgba(2, 6, 23, 0.72)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1rem",
    boxSizing: "border-box",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 700,
    outline: "none",
    padding: "16px 20px",
    width: "100%",
  },
  checkboxLabel: {
    alignItems: "flex-start",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1rem",
    color: "#cbd5e1",
    display: "flex",
    gap: "12px",
    gridColumn: "1 / -1",
    lineHeight: 1.6,
    padding: "20px",
  },
  checkbox: {
    height: "20px",
    marginTop: "4px",
    width: "20px",
  },
  resultCard: {
    background: "rgba(196, 181, 253, 0.1)",
    border: "1px solid rgba(196, 181, 253, 0.3)",
    borderRadius: "1.5rem",
    padding: "24px",
  },
  resultEyebrow: {
    color: "#cffafe",
    fontSize: "0.875rem",
    fontWeight: 900,
    letterSpacing: "0.18em",
    margin: 0,
    textTransform: "uppercase",
  },
  total: {
    color: "#fff",
    fontSize: "clamp(42px, 6vw, 56px)",
    fontWeight: 900,
    lineHeight: 1,
    margin: "12px 0 0",
  },
  note: {
    color: "rgba(207, 250, 254, 0.8)",
    fontSize: "0.875rem",
    lineHeight: 1.6,
    margin: "12px 0 0",
  },
  rows: {
    display: "grid",
    gap: "12px",
    marginTop: "20px",
  },
  row: {
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.04)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "1rem",
    display: "flex",
    gap: "16px",
    justifyContent: "space-between",
    padding: "16px 20px",
  },
  rowLabel: {
    color: "#cbd5e1",
    fontSize: "0.875rem",
    fontWeight: 700,
  },
  rowValue: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 900,
  },
  whatsapp: {
    alignItems: "center",
    background: "#34d399",
    borderRadius: "1rem",
    color: "#020617",
    display: "inline-flex",
    fontWeight: 900,
    gap: "0.5rem",
    justifyContent: "center",
    marginTop: "24px",
    minHeight: "52px",
    padding: "1rem 1.75rem",
    textDecoration: "none",
    width: "100%",
  },
};

function LedPriceCalculatorSection() {
  return (
    <section id="led-ekran-hesaplama-araci" style={calculatorStyles.section}>
      <div style={calculatorStyles.container}>
        <LedPriceCalculator
          styles={calculatorStyles}
          phone={PHONE}
          fallbackWhatsappUrl={WHATSAPP_URL}
        />
      </div>
    </section>
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

      <div className="min-h-screen overflow-hidden bg-[#040817] text-white">
        <PageHero
          eyebrow="2026 m² başlangıç fiyatları"
          title="LED Ekran Kiralama"
          titleAccent="Fiyatları 2026"
          titleWide
          description="Standart indoor/outdoor LED ekran, P1.9 Indoor LED, kurulum, söküm, NovaStar görüntü işlemcisi, teknik reji ve saha ekibi kapsamını m² hesabıyla birlikte netleştiren fiyat sayfası."
          note={
            <>
              Bu sayfada m² bazlı başlangıç bedellerini ve fiyatı etkileyen teknik
              kalemleri inceleyebilirsiniz. Envanter gücü, kurulum senaryoları,
              rigging, reji ve saha operasyon detayları için ana hizmet sayfamız olan{" "}
              <Link href="/led-ekran-kiralama">LED Ekran Kiralama</Link> bölümünü
              ziyaret edebilirsiniz.
            </>
          }
          metrics={[
            {
              value: `${tl(PRICES.standard)} TL/m²`,
              label: "Standart LED ekran",
              detail: "başlayan fiyatlarla",
            },
            {
              value: `${tl(PRICES.premiumP19)} TL/m²`,
              label: "P1.9 Indoor LED",
              detail: "başlayan fiyatlarla",
            },
          ]}
          actions={[
            {
              key: "whatsapp",
              label: "WhatsApp ile fiyat iste",
              href: WHATSAPP_URL,
              external: true,
            },
            {
              key: "calculator",
              label: "LED fiyat hesapla",
              href: "#led-ekran-hesaplama-araci",
            },
            {
              key: "service",
              label: "LED ekran kiralama",
              href: "/led-ekran-kiralama",
            },
          ]}
          quickLinks={quickLinks}
          quickLinksLabel="LED ekran fiyatları sayfa bölümleri"
          image={{
            src: HERO_IMAGE,
            alt: "LED ekran kiralama fiyatları 2026 için P1.9 Indoor LED ekran sahne kurulumu",
            sizes: "100vw",
          }}
        />

        <LedPriceCalculatorSection />

        <section className="relative border-y border-white/10 bg-slate-950 py-8">
          <div className="container mx-auto grid gap-4 px-4 md:grid-cols-4">
            {[
              [`${LED_SCREEN_PRICING.premiumP19.availableSqm} m²`, "P1.9 Indoor LED envanteri"],
              [`${tl(PRICES.standard)} TL`, "standart m² başlangıç"],
              [`${tl(PRICES.premiumP19)} TL`, "P1.9 m² başlangıç"],
              ["NovaStar", "görüntü işlemcisi ve reji planı"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm font-semibold text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="led-ekran-kiralama-fiyatlari-ne-kadar" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeader
                eyebrow="Fiyat Mantığı"
                title="LED ekran kiralama fiyatları ne kadar?"
                description="LED ekran fiyatı tek bir katalog rakamıyla doğru okunmaz. Toplam m², piksel aralığı, indoor/outdoor kullanım, kurulum erişimi, NovaStar görüntü işlemcisi, teknik reji ve şehir dışı lojistik aynı teklif içinde değerlendirilir."
              />

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-violet-950/30">
                <table className="min-w-full border-separate border-spacing-0">
                  <caption className="sr-only">
                    2026 LED ekran kiralama fiyatları m² başlangıç fiyatları ve proje kapsamı.
                  </caption>
                  <thead>
                    <tr className="bg-white/[0.06] text-left">
                      <th className="border-b border-white/10 px-5 py-4 text-sm font-black text-white">Kalem</th>
                      <th className="border-b border-white/10 px-5 py-4 text-sm font-black text-white">Fiyat</th>
                      <th className="border-b border-white/10 px-5 py-4 text-sm font-black text-white">Kapsam</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceRows.map((row) => (
                      <tr key={row.type}>
                        <td className="border-b border-white/10 px-5 py-5 align-top text-sm font-bold text-white">
                          {row.type}
                        </td>
                        <td className="border-b border-white/10 px-5 py-5 align-top text-sm font-black text-violet-200">
                          {row.price}
                        </td>
                        <td className="border-b border-white/10 px-5 py-5 align-top text-sm leading-6 text-slate-300">
                          {row.scope}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="ortalama-led-ekran-kiralama-m2-fiyatlari" className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-violet-700">
                  Ortalama m² Fiyatları
                </p>
                <h2 className="text-3xl font-black leading-tight md:text-5xl">
                  Ortalama LED ekran kiralama m² fiyatları
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  Standart LED ekran projelerinde fiyat çoğunlukla {tl(PRICES.standard)} TL/m²’den başlar.
                  Yakın izleme mesafesinde kullanılan P1.9 Indoor LED ekranlarda ise
                  başlangıç fiyatı {tl(PRICES.premiumP19)} TL/m² bandına çıkar. Bu fark, piksel yoğunluğu,
                  çözünürlük, kamera dostu görüntü ve teknik kontrol ihtiyacından doğar.
                </p>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  Ana hizmet kapsamını görmek için{" "}
                  <Link className="font-black text-violet-700 underline underline-offset-4" href="/led-ekran-kiralama">
                    LED ekran kiralama
                  </Link>{" "}
                  sayfasını; platform ve sahne ilişkisini karşılaştırmak için{" "}
                  <Link className="font-black text-violet-700 underline underline-offset-4" href="/podyum-kurulum-fiyatlari">
                    podyum kurulum fiyatları
                  </Link>{" "}
                  sayfasını inceleyebilirsiniz.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  ["Standart indoor/outdoor", `${tl(PRICES.standard)} TL/m²`, "başlayan fiyat"],
                  ["P1.9 Indoor LED", `${tl(PRICES.premiumP19)} TL/m²`, "başlayan fiyat"],
                  ["Kurulum + söküm", "Proje bazlı", "saha erişimine göre"],
                ].map(([name, value, note]) => (
                  <div key={name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <p className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">{name}</p>
                    <p className="mt-2 text-4xl font-black text-slate-950">{value}</p>
                    <p className="mt-1 text-sm font-bold text-slate-500">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="indoor-outdoor-led-ekran-fiyat-farki" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Teknik Fark"
              title="Indoor ve outdoor LED ekran fiyat farkı"
              description="Indoor LED ekranlarda izleme mesafesi, piksel aralığı ve renk doğruluğu fiyatı etkiler. Outdoor LED ekranlarda parlaklık, IP koruma, rüzgar yükü, taşıyıcı sistem ve gün ışığında görünürlük daha belirleyici olur."
              align="center"
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: Monitor,
                  title: "Indoor LED ekran",
                  items: ["P1.9 / P2.5 / P2.9 seçenekleri", "Yakın izleme mesafesi", "Sunum, gala ve konferans netliği", "Kamera dostu görüntü akışı"],
                },
                {
                  icon: Gauge,
                  title: "Outdoor LED ekran",
                  items: ["Yüksek parlaklık", "Açık hava dayanımı", "Festival ve konser görünürlüğü", "Taşıyıcı sistem ve güvenlik planı"],
                },
              ].map((card) => (
                <article key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                  <card.icon className="text-violet-300" size={34} aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-black text-white">{card.title}</h3>
                  <ul className="mt-5 space-y-3 text-slate-300">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={18} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="p19-led-ekran-kiralama-fiyati" className="bg-slate-950 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeader
                  eyebrow="P1.9 Indoor"
                  title="P1.9 Indoor LED ekran kiralama fiyatı"
                  description="P1.9 LED ekranlar; yakın izleme mesafesi, yüksek çözünürlük, lansman, gala, konferans ve kapalı alan protokol etkinlikleri için tercih edilir. Bu yüzden standart LED panellere göre daha yüksek m² başlangıç fiyatıyla planlanır."
                />
                <div className="mt-8 rounded-3xl border border-violet-300/30 bg-violet-300/10 p-6">
                  <p className="text-lg leading-8 text-violet-50">
                    Sahneva, LED ekran envanterine <strong>300 m² P1.9 Indoor LED envanteri</strong> eklemiştir.
                    Bu özmal envanter gücü, yakın izleme mesafesinde yüksek çözünürlüklü görüntü isteyen kurumsal sahnelerde
                    fiyat/performans kararını daha net hale getirir.
                  </p>
                </div>
              </div>

              <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-violet-950/40">
                <Image
                  src={HERO_IMAGE}
                  alt="Sahneva 300 m² P1.9 indoor LED ekran kurulumu ile kurumsal gala ve konferans sahnesi"
                  width={1600}
                  height={900}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  loading="lazy"
                  unoptimized
                />
                <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300">
                  300 m² P1.9 yüksek çözünürlüklü Indoor LED ekran altyapısı; gala, konferans, lansman ve fuar prodüksiyonlarında yakın izleme mesafesinde güçlü görüntü kalitesi sağlar.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="300-m2-p19-premium-led-ekran-stogu" className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  icon: BadgeCheck,
                  title: "P1.9 fiyatı neden farklı?",
                  text: "300 m² özmal P1.9 Indoor LED envanteri daha yüksek piksel yoğunluğu içerdiğinden m² başlangıç fiyatı standart panellere göre daha yüksek planlanır.",
                },
                {
                  icon: Cpu,
                  title: "NovaStar ve reji fiyata etkisi",
                  text: "Görüntü işlemcisi ve teknik reji kapsamı ekran m² bedeline eklenen kalemlerdir; kapsam büyüdükçe proje bütçesi buna göre şekillenir.",
                },
                {
                  icon: Truck,
                  title: "Şehir dışı lojistik fiyata etkisi",
                  text: "Şehir dışı projelerde araç, ekip ve konaklama m² bedeline ek olarak ayrıca hesaplanır; bu kalemler ilk teklifte şeffaf listelenir.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                  <item.icon className="text-violet-700" size={34} aria-hidden="true" />
                  <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <h2 className="text-2xl font-black text-slate-950">
                Fiyat kararını gerçek LED kurulumlarıyla karşılaştırın
              </h2>
              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700">
                P1.9 yakın izleme netliği, büyük ekran yüzeyi ve teknik reji ihtiyacının sahada nasıl karşılık bulduğunu{" "}
                <Link
                  href="/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi"
                  className="font-black text-violet-700 underline underline-offset-4"
                >
                  Millet Bahçesi Hangar P1.9 LED referansında
                </Link>{" "}
                görebilirsiniz. Daha geniş sahne, podyum ve LED yüzeyi ilişkisi için{" "}
                <Link
                  href="/projeler/kapali-alan-led-sahne-kurulumu"
                  className="font-black text-violet-700 underline underline-offset-4"
                >
                  kapalı alan LED ve sahne kurulumu
                </Link>{" "}
                projesi de teklif kapsamını somutlaştırır.
              </p>
            </div>
          </div>
        </section>

        <section id="led-ekran-fiyatina-neler-dahil" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeader
                eyebrow="Kapsam"
                title="LED ekran kiralama fiyatına neler dahildir?"
                description="Teklif kapsamı projeye göre değişir; doğru fiyatlandırma için ekran paneli, taşıyıcı kurgu, kurulum, söküm, kablolama, görüntü kontrolü, teknik reji ve ekip desteği aynı tabloda netleştirilmelidir."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {includedItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-300" size={20} aria-hidden="true" />
                    <span className="font-semibold leading-7 text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="kurulum-sokum-novastar-processor-teknik-reji" className="bg-slate-950 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <figure className="overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src={TECH_IMAGE}
                  alt="P1.9 indoor LED ekran teknik reji NovaStar görüntü işlemcisi ve görüntü kontrol masası"
                  width={1600}
                  height={739}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  unoptimized
                />
              </figure>
              <div>
                <SectionHeader
                  eyebrow="Operasyon"
                  title="LED ekran kurulumu, sökümü, NovaStar görüntü işlemcisi ve teknik reji"
                  description="LED ekran projesinde fiyatı belirleyen en önemli farklardan biri operasyon kapsamıdır. Ekran sadece panel değildir; sinyal akışı, scaler/görüntü işlemcisi ayarı, içerik kontrolü, kablolama, test ve etkinlik anı teknik ekip desteği birlikte planlanır."
                />
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Kurumsal etkinliklerde{" "}
                  <Link className="font-black text-violet-200 underline underline-offset-4" href="/kurumsal-organizasyon">
                    kurumsal etkinlik teknik prodüksiyonu
                  </Link>
                  ,{" "}
                  <Link className="font-black text-violet-200 underline underline-offset-4" href="/ses-isik-sistemleri">
                    ses ve ışık sistemleri
                  </Link>{" "}
                  ve{" "}
                  <Link className="font-black text-violet-200 underline underline-offset-4" href="/sahne-kiralama">
                    sahne kurulumu
                  </Link>{" "}
                  aynı teknik akış içinde değerlendirilirse teklif daha doğru çıkar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="led-ekran-olcusu-nasil-hesaplanir" className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-violet-700">
                  m² Hesabı
                </p>
                <h2 className="text-3xl font-black leading-tight md:text-5xl">
                  LED ekran ölçüsü nasıl hesaplanır?
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  LED ekran alanı genellikle genişlik x yükseklik hesabıyla m² olarak bulunur.
                  Ancak pratikte sahne genişliği, salon görüş açısı, izleyici mesafesi, kamera
                  aktarımı ve içerik oranı da bu ölçüyü etkiler.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <div className="flex items-center gap-3">
                  <Ruler className="text-violet-700" size={32} aria-hidden="true" />
                  <h3 className="text-2xl font-black">Basit hesap mantığı</h3>
                </div>
                <div className="mt-6 rounded-2xl bg-white p-6 font-mono text-lg font-black text-slate-950 shadow-sm">
                  ekran m² = genişlik x yükseklik
                </div>
                <p className="mt-5 text-base leading-7 text-slate-700">
                  Örnek: 6 m genişlik x 4 m yükseklik = 24 m² LED ekran. Bu ölçüde P2.9,
                  P3.9 veya P1.9 seçimi; izleyici mesafesi ve içerik kalitesine göre netleşir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="fiyat-teklifi-icin-gereken-bilgiler" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              eyebrow="Teklif İçin"
              title="Fiyat teklifi almak için gereken bilgiler"
              description="Eksik bilgiyle verilen LED ekran fiyatı çoğu zaman yanıltıcı olur. Aşağıdaki bilgiler gelirse m², panel tipi, reji ve lojistik kapsamını daha net hesaplayabiliriz."
              align="center"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {requiredInfo.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <Calculator className="text-violet-300" size={24} aria-hidden="true" />
                  <p className="mt-4 font-semibold leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ornek-fiyat-senaryolari" className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-violet-700">
                Senaryolar
              </p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Örnek fiyat senaryoları
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Aşağıdaki senaryolar kesin teklif değildir; ekran tipi, m², teknik reji,
                kurulum-söküm ve lojistik kapsamının nasıl değerlendirildiğini gösterir.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {scenarios.map((scenario) => (
                <article key={scenario.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <Layers className="text-violet-700" size={30} aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-black">{scenario.title}</h3>
                  <ul className="mt-5 space-y-3 text-slate-700">
                    {[scenario.meters, scenario.screen, scenario.detail, scenario.price].map((item) => (
                      <li key={item} className="flex gap-3">
                        <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={18} aria-hidden="true" />
                        <span className="leading-7">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <SectionHeader
              eyebrow="FAQ"
              title="LED ekran kiralama fiyatları hakkında sık sorulan sorular"
              description="m² hesabı, P1.9 fiyat farkı, teknik reji, kurulum ve şehir dışı lojistik hakkında en çok gelen sorular."
              align="center"
            />
            <div className="mt-10 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 open:border-violet-300/40 open:bg-violet-300/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-white">
                    {item.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-violet-200 transition group-open:rotate-180">
                      ⌄
                    </span>
                  </summary>
                  <p className="mt-5 border-l-4 border-violet-300 pl-5 leading-8 text-slate-300">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-slate-950">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
              <Image
                src={GALA_IMAGE}
                alt="Kurumsal gala için LED ekran kiralama fiyat teklifi ve sahne kurulumu"
                fill
                sizes="100vw"
                className="object-cover opacity-25"
                loading="lazy"
                unoptimized
              />
              <div className="absolute inset-0 bg-slate-950/65" />
              <div className="relative z-10 max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-200">
                  Teklif CTA
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                  LED ekran m², P1.9 ve teknik reji kapsamını birlikte fiyatlandıralım.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-200">
                  Ekran ölçüsü, şehir, mekan tipi ve içerik akışını paylaşın; standart LED ekran,
                  P1.9 Indoor LED, NovaStar görüntü işlemcisi, kurulum-söküm ve teknik ekip kapsamını net teklif olarak hazırlayalım.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-7 py-4 font-black text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200"
                  >
                    <MessageCircle size={20} aria-hidden="true" />
                    WhatsApp ile ölçü paylaş
                  </a>
                  <Link
                    href="/kurumsal-organizasyon"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-7 py-4 font-black text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                  >
                    Kurumsal organizasyon
                    <ArrowRight size={20} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
