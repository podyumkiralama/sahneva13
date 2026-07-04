// app/(tr)/podyum-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import JsonLd from "@/components/seo/JsonLd";
import {
  ArrowRight,
  Briefcase,
  CalendarCheck,
  ClipboardCheck,
  Layers,
  MessageCircle,
  Monitor,
  Music,
  Ruler,
} from "lucide-react";

/* ================== 1. AYARLAR & SABİTLER ================== */
export const revalidate = 86400;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const WHATSAPP_URL = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Merhaba, podyum kiralama için teklif istiyorum."
)}`;
const PRICE_VALID_UNTIL = `${new Date().getFullYear() + 1}-12-31`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. BİRİM FİYATLAR (2026) ================== */
const UNIT_PRICES = {
  platform_m2_week: 270,
  carpet_m2_week: 130,
  skirt_ml_week: 100,
  ist_nakliye: 9000, // İstanbul içi temel nakliye (kurulum + söküm dahil)
  currency: "TRY",
};

const calculatePackagePrice = (layout) => {
  const base = layout.area * UNIT_PRICES.platform_m2_week;
  const carpet = layout.area * UNIT_PRICES.carpet_m2_week;
  const skirt = layout.perimeter * UNIT_PRICES.skirt_ml_week;
  const nakliye = UNIT_PRICES.ist_nakliye;
  const total = base + carpet + skirt + nakliye;
  return { base, carpet, skirt, nakliye, total };
};

const formatTRY = (n) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(n);

/* ================== 3. DİNAMİK BİLEŞENLER ================== */
const PriceEstimatorPodyum = dynamic(
  () => import("@/components/PriceEstimatorPodyum"),
  {
    loading: () => (
      <div className="h-[560px] w-full bg-gray-50 animate-pulse rounded-3xl border border-gray-200" />
    ),
  }
);

/* ================== 4. İÇERİK VERİLERİ ================== */
const SERVICES = [
  {
    icon: "🎭",
    title: "Modüler Podyum Sistemleri",
    description:
      "1×1m ve 2×1m modüler paneller ile esnek ve güvenli sahne çözümleri",
    features: ["1×1m ve 2×1m paneller", "Kaymaz kaplama", "10-200cm yükseklik planı", "Hızlı kurulum"],
  },
  {
    icon: "🏛️",
    title: "Protokol ve Gala Platformları",
    description: "Gala, ödül gecesi ve protokol akışı için dengeli, şık ve kontrollü podyum çözümleri",
    features: ["Protokol yerleşimi", "Tok yürüyüş hissi", "Halı kaplama", "Marka görünürlüğü"],
  },
  {
    icon: "🎤",
    title: "Konser & Performans Podyumları",
    description:
      "Profesyonel sahne performansları için dayanıklı podyum sistemleri",
    features: ["Yüksek dayanıklılık", "Ses izolasyonu", "Kablo kanalları", "Güvenlik ekipmanları"],
  },
  {
    icon: "🏢",
    title: "Kurumsal Lansman Podyumları",
    description:
      "Şirket etkinlikleri için profesyonel ve fonksiyonel podyum çözümleri",
    features: ["Markalı kaplama", "Rampa ve merdiven", "LED entegrasyonu", "Profesyonel kurulum"],
  },
  {
    icon: "🎪",
    title: "Fuar & Sergi Podyumları",
    description:
      "Fuar ve sergi alanları için optimize edilmiş podyum sistemleri",
    features: ["Modüler tasarım", "Hızlı kurulum", "Marka entegrasyonu", "Taşınabilirlik"],
  },
  {
    icon: "🔧",
    title: "Teknik Destek & Saha Yönetimi",
    description:
      "Kurulum, söküm ve etkinlik boyunca saha planına uygun teknik destek",
    features: ["Profesyonel ekip", "Söküm hizmeti", "Saha planı", "Acil müdahale opsiyonu"],
  },
];

const PACKAGES = [
  {
    id: "pkg-mini",
    name: "Mini Podyum — 12 m²",
    layout: { width: 3, depth: 4, area: 12, perimeter: 14 },
    height: "40 cm",
    includes: [
      "6 × (1×2 m) panel – toplam 12 m²",
      "Yükseklik: 40 cm",
      "Kaymaz kaplama",
      "İstanbul içi nakliye + kurulum + söküm; Türkiye geneli lojistik planı",
    ],
    note: "İç mekân konuşma/mini performanslar için ideal.",
  },
  {
    id: "pkg-orta",
    name: "Orta Podyum — 24 m²",
    layout: { width: 4, depth: 6, area: 24, perimeter: 20 },
    height: "60 cm",
    includes: [
      "12 × (1×2 m) panel – toplam 24 m²",
      "Yükseklik: 60 cm",
      "Kaymaz kaplama, merdiven",
      "İstanbul içi nakliye + kurulum + söküm; Türkiye geneli lojistik planı",
    ],
    note: "Kurumsal sahneler ve canlı performanslar için.",
  },
  {
    id: "pkg-pro",
    name: "Pro Podyum — 48 m²",
    layout: { width: 6, depth: 8, area: 48, perimeter: 28 },
    height: "80-100 cm",
    includes: [
      "24 × (1×2 m) panel – toplam 48 m²",
      "Yükseklik: 80–100 cm",
      "Kaymaz kaplama, merdiven, rampa, korkuluk",
      "İstanbul içi nakliye + kurulum + söküm; Türkiye geneli lojistik planı",
    ],
    note: "Büyük konser/miting sahneleri için.",
  },
];

const FLOW_STEPS = [
  {
    Icon: Ruler,
    title: "Ölçü ve zemin netleşir",
    text: "Etkinlik alanı, yükseklik, m² ihtiyacı ve zemin durumu birlikte değerlendirilir.",
  },
  {
    Icon: ClipboardCheck,
    title: "Paket veya özel plan seçilir",
    text: "Mini, orta, pro paketlerden biri ya da mekâna özel podyum planı hazırlanır.",
  },
  {
    Icon: CalendarCheck,
    title: "Kurulum saati planlanır",
    text: "Nakliye, kurulum, dengeleme, söküm ve etkinlik takvimi tek akışta netleştirilir.",
  },
  {
    Icon: MessageCircle,
    title: "Net teklif paylaşılır",
    text: "Kaplama, skirt, rampa, korkuluk ve şehir dışı ihtiyaçları dahil edilerek teklif verilir.",
  },
];

const HERO_BADGES = [
  "12.000 m² podyum stoğu",
  "10 cm zemin kurulumunda 10.000 m² kapasite",
  "Karolaj planlı modüler sistem",
  "Türkiye geneli kurulum",
];

const PODIUM_STOCK_METRICS = [
  {
    value: "12.000 m²",
    label: "Toplam podyum stoğu",
    detail: "Kurumsal etkinlik, konser, fuar, lansman ve açık hava projeleri için planlanan özmal podyum envanteri.",
  },
  {
    value: "10.000 m²",
    label: "10 cm zemin kurulum kapasitesi",
    detail: "Geniş alanlı geçici zemin uygulamalarında karolaj planlı, dengeli ve hızlı saha kurulumu.",
  },
  {
    value: "600 m²",
    label: "Altı kayıt dönülmüş 2x1 özel podyum",
    detail: "Sahne, protokol ve performans alanlarında yüksek stabilite gerektiren kurulumlar için güçlendirilmiş sistem.",
  },
  {
    value: "81 il",
    label: "Türkiye geneli operasyon",
    detail: "Nakliye, kurulum, söküm ve saha koordinasyonu şehir ve etkinlik takvimine göre projelendirilir.",
  },
];

const PODIUM_HEIGHT_CAPACITIES = [
  { height: "10 cm", capacity: "10.000 m²", note: "Geniş zemin kurulumu" },
  { height: "20 cm", capacity: "4.000 m²", note: "Kurulum kapasitesi" },
  { height: "40 cm", capacity: "500 m²", note: "Kurulum kapasitesi" },
  { height: "60 cm", capacity: "500 m²", note: "Kurulum kapasitesi" },
  { height: "80 cm", capacity: "400 m²", note: "Kurulum kapasitesi" },
  { height: "100 cm", capacity: "500 m²", note: "Kurulum kapasitesi" },
  { height: "120 cm", capacity: "300 m²", note: "Kurulum kapasitesi" },
  { height: "140 cm", capacity: "200 m²", note: "Kurulum kapasitesi" },
  { height: "175 cm", capacity: "300 m²", note: "Kurulum kapasitesi" },
  { height: "200 cm", capacity: "150 m²", note: "Kurulum kapasitesi" },
];

const PACKAGE_GUIDE = [
  "Konuşma, panel veya küçük sunum için 12 m² mini podyum yeterli olur.",
  "Canlı müzik, lansman ve kurumsal toplantı için 24 m² orta podyum daha dengeli görünür.",
  "Konser, festival ve kalabalık sahne kullanımı için 48 m² ve üzeri özel plan önerilir.",
];

const USE_CASES = [
  { icon: "✨", text: "Gala, ödül gecesi ve protokol davetleri", desc: "Kurumsal prestij gerektiren alanlar için kontrollü platformlar" },
  { icon: "🎤", text: "Konser, festival ve sahne performansları", desc: "Profesyonel performanslar için sahneler" },
  { icon: "🏢", text: "Kurumsal lansman, konferans ve toplantılar", desc: "Marka etkinlikleri için profesyonel podyum altyapısı" },
  { icon: "🎓", text: "Mezuniyet törenleri ve okul etkinlikleri", desc: "Eğitim kurumları için podyumlar" },
  { icon: "🏛️", text: "Belediye organizasyonları ve törenler", desc: "Resmi törenler ve etkinlikler" },
  { icon: "🛍️", text: "AVM etkinlikleri ve fuar stantları", desc: "Ticari etkinlikler için çözümler" },
];

const TECHNICAL_SPECS = [
  {
    title: "Malzeme Kalitesi",
    icon: "🏗️",
    description: "Alüminyum karkas, çelik bağlantı elemanları ve kaymaz kaplama",
    features: ["Alüminyum karkas sistem", "Çelik bağlantı elemanları", "Kaymaz kaplama", "UV dayanımlı yüzey"],
  },
  {
    title: "Güvenlik Sistemleri",
    icon: "🛡️",
    description: "TS EN standartlarına uygun güvenlik ve stabilite sistemleri",
    features: ["Kaymaz kaplama", "Korkuluk sistemleri", "Merdiven ve rampa", "Anti-tip önlemler"],
  },
  {
    title: "Ölçü & Kombinasyonlar",
    icon: "📐",
    description: "Modüler sistemler ile esnek ölçü ve birleşim seçenekleri",
    features: ["1×1m ve 2×1m paneller", "10-200cm yükseklik planı", "İsteğe özel ölçüler", "Karma panel sistemleri"],
  },
  {
    title: "Tamamlayıcı Hizmetler",
    icon: "🔧",
    description: "Podyum kurulumunu tamamlayan profesyonel hizmetler",
    features: ["Halı kaplama sistemleri", "Skört (etek) kaplama", "Markalama ve dekorasyon", "Aydınlatma entegrasyonu"],
  },
  {
    title: "Saha Süreci",
    icon: "⚡",
    description: "Nakliye, kurulum, söküm ve zaman planına uygun saha yönetimi",
    features: ["2-6 saat kurulum", "Profesyonel ekip", "İstanbul ve Türkiye geneli lojistik", "Söküm hizmeti"],
  },
  {
    title: "Teknik Destek",
    icon: "📞",
    description: "Teknik destek ve acil müdahale opsiyonları",
    features: ["Etkinlik günü destek", "Acil müdahale ekibi", "Yedek parça stoğu", "Bakım opsiyonu"],
  },
];

const FAQ_ITEMS = [
  {
    q: "Podyum kiralama fiyatları nasıl hesaplanır?",
    a: `Fiyat; alan (m²), halı (m²), skört (metre), İstanbul içi temel nakliye ve Türkiye geneli lojistik kapsamına göre hesaplanır. 2026 birim fiyatlarımız: platform ${UNIT_PRICES.platform_m2_week} TL/m², halı ${UNIT_PRICES.carpet_m2_week} TL/m², skört ${UNIT_PRICES.skirt_ml_week} TL/metre, İstanbul içi temel nakliye ${UNIT_PRICES.ist_nakliye} TL. Şehir dışı projelerde lojistik ayrıca planlanır.`,
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "Standart 24-48 m² podyumlar çoğu mekânda 2-6 saat içinde kurulur. Geniş alanlar ve özel gereksinimler ek süre gerektirebilir.",
  },
  {
    q: "Hangi panelleri kullanıyorsunuz?",
    a: "1×1m ve 2×1m modüler paneller kullanıyoruz. Düzensiz zeminlerde 1×1m paneller esneklik sağlarken, ana sahnelerde 2×1m paneller hızlı kurulum imkanı sunar.",
  },
  {
    q: "Halı ve skört zorunlu mu?",
    a: "Zorunlu değildir ancak görsel bütünlük ve güvenlik için önerilir. Halı kaymaz özelliktedir, skört ise profesyonel görünüm kazandırır.",
  },
  {
    q: "Sahneva’nın podyum stoğu ne kadar?",
    a: "Sahneva toplamda 12.000 m² podyum stoğuna sahiptir. Bu stok, etkinlik tarihi, şehir, yükseklik ve proje ihtiyacına göre planlanarak kurulur.",
  },
  {
    q: "10 cm podyum zemin kurulumu kaç metrekare yapılabilir?",
    a: "Geniş zemin uygulamalarında 10 cm yükseklikte 10.000 m²’ye kadar podyum zemin kurulumu yapılabilmektedir. Bu kurulumlar karolaj planı ile dengeli ve güvenli şekilde projelendirilir.",
  },
  {
    q: "Karolaj podyum kurulumunda ne işe yarar?",
    a: "Karolaj, podyum modüllerinin düzenli ve dengeli bir sistemle yerleştirilmesini sağlar. Yük dağılımını iyileştirir, kullanım stabilitesini artırır ve geniş alanlarda daha güvenli bir geçici zemin oluşturur.",
  },
  {
    q: "Podyum etkinlik sırasında titreme yapar mı?",
    a: "Doğru ayak yerleşimi, kayıt bağlantıları, karolaj planı ve saha kontrolü ile kurulan profesyonel podyum sistemlerinde sarsıntı ve titreme hissi minimuma indirilir. Sahneva özellikle yüksek stabilite gerektiren alanlarda altı kayıt dönülmüş özel podyum sistemleri kullanabilir.",
  },
  {
    q: "Farklı yüksekliklerde podyum kurulumu yapılabilir mi?",
    a: "Evet. Sahneva 10 cm’den 200 cm’ye kadar farklı yüksekliklerde podyum kurulumu planlayabilir. Kapasite, istenen yükseklik, metrekare, zemin durumu ve etkinlik kullanımına göre netleştirilir.",
  },
];

const RELATED_SERVICES = [
  { href: "/sahne-kiralama", title: "Sahne Kiralama", Icon: Ruler, desc: "Podyum, sahne zemini ve platform altyapısını birlikte planlayın" },
  { href: "/kurumsal-organizasyon", title: "Kurumsal Organizasyon", Icon: Briefcase, desc: "Lansman, konferans ve gala için tek teknik operasyon akışı" },
  { href: "/led-ekran-kiralama", title: "LED Ekran Kiralama", Icon: Monitor, desc: "Sahne arkasında güçlü LED ekran ve video wall çözümleri" },
  { href: "/ses-isik-sistemleri", title: "Ses & Işık Sistemleri", Icon: Music, desc: "Podyum alanını tamamlayan ses, ışık ve atmosfer prodüksiyonu" },
  { href: "/truss-kiralama", title: "Truss Kiralama", Icon: Layers, desc: "Podyum üstü ışık, ekran ve dekor taşıyıcı truss sistemleri" },
  { href: "/turkiyede-etkinlik-cozum-ortagi", title: "Türkiye’de Etkinlik Çözüm Ortağı", Icon: Briefcase, desc: "Uluslararası ajans ve markalar için yerel podyum, sahne ve saha desteği" },
];

const GALLERY_IMAGES = [
  "/img/podyum/1.webp",
  "/img/podyum/2.webp",
  "/img/podyum/3.webp",
  "/img/podyum/17.webp",
  "/img/podyum/18.webp",
  "/img/podyum/6.webp",
  "/img/podyum/7.webp",
  "/img/podyum/8.webp",
  "/img/podyum/9.webp",
  "/img/podyum/10.webp",
  "/img/podyum/11.webp",
  "/img/podyum/12.webp",
  "/img/podyum/13.webp",
  "/img/podyum/14.webp",
  "/img/podyum/15.webp",
  "/img/podyum/16.webp",
];

const PROCESS_STEP_IMAGES = [
  { src: "/img/podyum/7.webp", alt: "Podyum kurulumunda zemin hazırlığı" },
  { src: "/img/podyum/23.webp", alt: "Podyum panel montaj aşaması" },
  { src: "/img/podyum/24.webp", alt: "Etkinlik öncesi son kontrol" },
];

/* ================== 5. META DATA ================== */
export const metadata = {
  title: "Podyum Kiralama | Kiralık Podyum ve Kurulum Çözümleri",
  description:
    "12.000 m² podyum stoğu, karolaj planlı kiralık podyum sistemleriyle Türkiye geneli podyum kiralama ve kurulumu. Konser, fuar ve kurumsal etkinlikler için modüler çözümler.",
  alternates: buildLanguageAlternates({
    tr: "/podyum-kiralama",
    en: "/en/podium-rental",
    xDefault: "/en/podium-rental",
  }),
  openGraph: {
    title: "Podyum Kiralama | Kiralık Podyum ve Kurulum Çözümleri | Sahneva",
    description:
      "12.000 m² podyum stoğu, karolaj planlı kiralık podyum sistemleriyle Türkiye geneli profesyonel kurulum kapasitesi.",
    url: `${ORIGIN}/podyum-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/podyum/22.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon podyum kiralama – modüler podyum sistemleri ve profesyonel sahne çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podyum Kiralama | Kiralık Podyum ve Kurulum | Sahneva",
    description:
      "12.000 m² podyum stoğu, 10.000 m² 10 cm zemin kapasitesi ve karolaj planlı titreşimsiz modüler podyum sistemleri.",
    images: [`${ORIGIN}/img/podyum/22.webp`],
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

/* ================== 6. BİLEŞENLER ================== */

// --- JSON-LD ---
function StructuredData() {
  const pageUrl = `${ORIGIN}/podyum-kiralama`;
  const serviceId = `${pageUrl}#service`;
  const webPageId = `${pageUrl}#webpage`;
  const gallerySchema = buildImageGallerySchema({
    images: GALLERY_IMAGES.map((src, index) => ({
      src,
      alt: `Podyum kiralama galeri görseli ${index + 1}`,
    })),
    origin: ORIGIN,
    pageUrl,
    serviceId,
    webPageId,
    limit: 8,
    name: "Podyum kiralama galeri görselleri",
  });

  const offerCatalogItems = PACKAGES.map((pkg) => {
    const prices = calculatePackagePrice(pkg.layout);
    return {
      "@type": "Offer",
      name: pkg.name,
      url: `${ORIGIN}/podyum-kiralama#${pkg.id}`,
      priceCurrency: UNIT_PRICES.currency,
      price: String(prices.total),
      itemOffered: {
        "@type": "Service",
        name: pkg.name,
        description: pkg.note,
      },
    };
  });

  const productSchemas = PACKAGES.map((pkg) => {
    const prices = calculatePackagePrice(pkg.layout);
    return {
      "@type": "Product",
      name: pkg.name,
      description: pkg.note,
      image: [`${ORIGIN}/img/podyum/22.webp`],
      sku: pkg.id,
      brand: { "@type": "Brand", name: "Sahneva" },
      offers: {
        "@type": "Offer",
        url: `${ORIGIN}/podyum-kiralama#${pkg.id}`,
        priceCurrency: UNIT_PRICES.currency,
        price: String(prices.total),
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    };
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Podyum Kiralama",
        description: metadata.description,
        url: pageUrl,
        image: gallerySchema.imageUrls,
        mainEntityOfPage: { "@id": webPageId },
        provider: { "@id": ORGANIZATION_ID },
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "AdministrativeArea", name: "İstanbul" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Podyum Kiralama Paketleri",
          itemListElement: offerCatalogItems,
        },
      },
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: pageUrl,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        mainEntity: { "@id": serviceId },
        image: [`${ORIGIN}/img/podyum/22.webp`, ...gallerySchema.imageUrls],
        hasPart: [
          ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
          ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
        ],
      },
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      ...productSchemas,
      buildFaqSchema ? buildFaqSchema(FAQ_ITEMS) : null,
    ].filter(Boolean),
  };

  return <JsonLd data={schema} />;
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070d] text-white pt-24 pb-14 md:pt-28 md:pb-20 lg:pt-32">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/img/podyum/110.webp"
          alt="LED ekran ve truss yapısıyla kurulmuş kademeli modüler podyum sahnesi"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
          quality={72}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,.94)_0%,rgba(2,6,23,.78)_40%,rgba(2,6,23,.45)_72%,rgba(2,6,23,.22)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/[0.72] to-transparent" />

        <div className="absolute left-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.16] blur-3xl" />
        <div className="absolute right-[-12rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-cyan-400/[0.12] blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/[0.16] bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.85)]"
                aria-hidden="true"
              />
              <span>Özmal podyum envanteri ve saha kurulumu</span>
            </div>

            <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Podyum Kiralama
              <span className="mt-2 block bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-3xl font-black text-transparent md:text-4xl lg:text-5xl">
                ve Kurulumu
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/[0.78] md:text-xl">
              Kurumsal etkinlikler, konserler, fuarlar, lansmanlar ve açık hava organizasyonları için geniş stoklu,
              karolaj planlı modüler podyum ve taşınabilir sahne platformu çözümleri.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {HERO_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.07] px-4 py-2 text-sm font-bold text-white/[0.88] backdrop-blur-md"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="group inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-green-700 px-8 py-3.5 font-black text-white shadow-[0_16px_38px_rgba(21,128,61,0.34)] transition hover:bg-green-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
              >
                Teklif Al
                <ArrowRight
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <Link
                href="#podyum-stok-kapasitesi"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/[0.18] bg-white/[0.07] px-8 py-3.5 font-black text-white backdrop-blur-md transition hover:border-blue-300/40 hover:bg-white/[0.12] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              >
                Stok Kapasitesini Gör
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {PODIUM_STOCK_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/[0.1] bg-white/[0.06] p-4 backdrop-blur-xl transition hover:border-blue-300/40 hover:bg-white/[0.1]"
                >
                  <div className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-xl font-black text-transparent md:text-2xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-bold text-blue-100 md:text-sm">{metric.label}</div>
                  <p className="mt-2 hidden text-xs leading-relaxed text-white/[0.6] lg:block">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

      </div>

      <div className="relative z-10 h-14 bg-gradient-to-b from-transparent to-[#0B1120]" />
    </section>
  );
}

function PodiumStockCapacitySection() {
  return (
    <section
      id="podyum-stok-kapasitesi"
      className="content-visibility-auto [contain-intrinsic-size:auto_2600px] md:[contain-intrinsic-size:auto_1900px] lg:[contain-intrinsic-size:auto_1350px] relative overflow-hidden bg-[#0B1120] py-16 text-white md:py-24"
      aria-labelledby="podyum-stok-title"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-[-14rem] top-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.16] blur-3xl" />
        <div className="absolute right-[-14rem] bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex border border-blue-300/[0.22] bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-blue-200">
              Özmal envanter gücü
            </div>
            <h2 id="podyum-stok-title" className="text-3xl font-black leading-tight md:text-5xl">
              Podyum Stok ve Kurulum Kapasitemiz
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/[0.72]">
              Sahneva, İstanbul podyum kiralama taleplerinden farklı şehirlerdeki büyük ölçekli platform
              kurulumlarına kadar zemin ihtiyaçlarına uygun geniş podyum stoğu ile{" "}
              <Link href="/bolgesel-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                Türkiye geneli kurulum
              </Link>{" "}
              yapabilen teknik altyapıya sahiptir. Toplamda 12.000 m² podyum stoğumuz bulunmaktadır. Bu stok;
              kurumsal etkinlikler, konserler, festival alanları, ödül törenleri, mezuniyet törenleri, fuarlar, lansmanlar,
              açık hava organizasyonları ve büyük ölçekli geçici zemin kurulumları için proje bazlı planlanır.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/[0.72]">
              Özellikle geniş alanlı zemin uygulamalarında 10 cm yükseklikte 10.000 m²’ye kadar podyum zemin
              kurulumu yapılabilmektedir. Bu tip kurulumlarda podyum yüzeyi, alanın ölçüsüne ve kullanım amacına
              göre karolaj düzeninde planlanır. Karolaj sistemi sayesinde podyum modülleri düzenli, dengeli ve
              güvenli bir zemin oluşturacak şekilde yerleştirilir.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/podyum-kurulum-fiyatlari"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-white px-5 py-3 font-black text-slate-950 transition hover:bg-blue-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Podyum kurulum fiyatları ve m² maliyeti
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl border border-white/[0.14] bg-white/[0.08] px-5 py-3 font-black text-white transition hover:bg-white/[0.14] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
              >
                Ölçü, yükseklik ve şehir bilgisiyle teklif al
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {PODIUM_STOCK_METRICS.map((metric) => (
              <article
                key={metric.label}
                className="border border-white/[0.12] bg-white/[0.07] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.32)] backdrop-blur-xl"
              >
                <p className="text-3xl font-black text-white md:text-4xl">{metric.value}</p>
                <h3 className="mt-2 text-base font-black text-blue-100">{metric.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/[0.64]">{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PODIUM_HEIGHT_CAPACITIES.map((item) => (
            <article
              key={item.height}
              className="border border-white/[0.12] bg-slate-950/[0.42] p-4 backdrop-blur transition hover:border-blue-300/40 hover:bg-white/[0.08]"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-200">{item.height}</p>
              <p className="mt-3 text-2xl font-black text-white">{item.capacity}</p>
              <p className="mt-1 text-sm font-semibold text-white/[0.58]">{item.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="border border-blue-300/[0.22] bg-blue-400/10 p-6 shadow-[0_24px_80px_rgba(37,99,235,0.18)] backdrop-blur-xl md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-200">
              Güçlendirilmiş özel sistem
            </p>
            <h3 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
              600 m² 2x1 özel podyum
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-white/[0.72]">
              Altı tamamen kayıt dönülmüş 2x1 metre modüllerden oluşan özel podyum sistemi; sahne, performans
              alanı, konuşmacı platformu, protokol alanı ve yüksek stabilite gerektiren kurulumlarda tercih edilir.
              Alt taşıyıcı yapısının kayıtlarla güçlendirilmiş olması sayesinde etkinlik sırasında sarsıntı, titreme
              ve esneme hissi minimuma indirilir.
            </p>

            <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/[0.14]">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/img/podyum/22.webp"
                  alt="Açık havada kurulan altı kayıtlı 2x1 modüler podyum sistemi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="border border-white/[0.12] bg-white/[0.07] p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-black leading-tight">
                Karolaj Planlı Modüler Podyum Kurulumu
              </h3>
              <p className="mt-4 leading-relaxed text-white/[0.68]">
                Geniş metrekareli podyum ve geçici zemin kurulumlarında karolaj planı, sistemin dengeli ve güvenli
                çalışması için kritik öneme sahiptir. Sahneva, podyum modüllerini gelişigüzel yerleştirmek yerine
                alan ölçüsü, zemin eğimi, kullanım yoğunluğu ve yük dağılımını dikkate alarak karolaj düzeniyle planlar.
              </p>
            </article>

            <article className="border border-white/[0.12] bg-white/[0.07] p-6 backdrop-blur-xl">
              <h3 className="text-2xl font-black leading-tight">
                Etkinlik Sırasında Sarsıntı ve Titreme Yapmayan Podyum
              </h3>
              <p className="mt-4 leading-relaxed text-white/[0.68]">
                Podyum kiralama projelerinde yalnızca metrekare ve yükseklik değil, kullanım sırasında oluşabilecek
                sarsıntı ve titreme de doğru değerlendirilmelidir. Doğru ayak yerleşimi, kayıt bağlantıları,
                karolaj planı ve saha kontrolü daha tok, dengeli ve güven veren bir kullanım sunar.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5 text-sm font-bold">
          {[
            { href: "/sahne-kiralama", label: "sahne kiralama" },
            { href: "/led-ekran-kiralama", label: "LED ekran kiralama" },
            { href: "/ses-isik-sistemleri", label: "ses ve ışık sistemleri" },
            { href: "/truss-kiralama", label: "truss kiralama" },
            { href: "/kurumsal-organizasyon", label: "kurumsal organizasyon" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-2 text-white/[0.78] transition hover:border-blue-300/40 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function PodiumFlowSection() {
  return (
    <section
      id="teklif-akisi"
      className="py-16 bg-white"
      aria-labelledby="teklif-akisi-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.82fr] gap-8 items-stretch">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-widest text-blue-700 mb-3">
              Doğru ölçü, doğru bütçe
            </p>
            <h2
              id="teklif-akisi-title"
              className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-5"
            >
              Podyum kiralama sürecini daha net ve hızlı ilerletiyoruz
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              İlk ekranda paketleri görüp yaklaşık bütçeyi anlayabilir, ardından
              m² hesaplayıcı ile kendi alanınıza göre hızlı bir tahmin alabilirsiniz.
              Final teklif; zemin, yükseklik, kaplama, rampa, korkuluk ve şehir
              dışı nakliye gibi detaylar netleşince paylaşılır.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {FLOW_STEPS.map(({ Icon, title, text }) => (
                <li
                  key={title}
                  className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm"
                >
                  <div
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-700 text-white"
                    aria-hidden="true"
                  >
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start overflow-hidden rounded-3xl border border-blue-200 bg-blue-50 shadow-sm">
            <div className="relative aspect-[16/10] bg-blue-100">
              <Image
                src="/img/podyum/9.webp"
                alt="Kurumsal etkinlik için kurulmuş podyum sistemi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={60}
                loading="lazy"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 right-5 text-lg font-black text-white">
                Kurulum öncesi ölçü, yükseklik ve kaplama birlikte netleşir.
              </p>
            </div>

            <div className="p-6 md:p-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">
                Hangi paketle başlamalı?
              </h3>
              <ul className="space-y-4">
                {PACKAGE_GUIDE.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-800 leading-relaxed">
                    <ArrowRight
                      className="mt-1 h-5 w-5 flex-shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-7 grid grid-cols-3 gap-3">
              {[
                ["12-48 m²", "Hazır paket"],
                ["10-200 cm", "Yükseklik planı"],
                ["2-6 saat", "Kurulum"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-blue-200 bg-white/80 p-3 text-center"
                >
                  <dt className="text-xs font-bold uppercase tracking-wide text-gray-600">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-black text-blue-800">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-green-700 px-6 py-3 font-black text-white shadow-lg transition hover:bg-green-800"
              >
                WhatsApp ile ölçü paylaş
              </a>
              <Link
                href="#paketler"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-blue-700 px-6 py-3 font-black text-blue-800 transition hover:bg-blue-100"
              >
                Paketleri incele
              </Link>
            </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="content-visibility-auto [contain-intrinsic-size:auto_2200px] md:[contain-intrinsic-size:auto_1500px] lg:[contain-intrinsic-size:auto_1200px] py-20 bg-gradient-to-b from-white to-blue-50/50"
      aria-labelledby="hizmetler-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="hizmetler-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Kurumsal <span className="text-blue-700">Podyum Uygulamaları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Keşif, karolaj planı, nakliye, kurulum, saha kontrolü ve söküm aynı teknik kapsam içinde yürütülür.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 transition-all duration-500 h-full flex flex-col"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3" aria-hidden="true">📞</span> Teknik kapsam için iletişime geçin
          </a>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section
      id="hesaplayici"
      className="content-visibility-auto [contain-intrinsic-size:auto_1100px] sm:[contain-intrinsic-size:auto_900px] py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="hesaplayici-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="hesaplayici-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teklif Aralığını <span className="text-blue-700">Hızlı Çıkarın</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum ölçüsü, kaplama ve lojistik bilgisini girerek kiralama görüşmesi öncesi yaklaşık bütçeyi görün.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl p-8">
            <PriceEstimatorPodyum unitPrices={UNIT_PRICES} />
            <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <p className="text-blue-800 text-lg">
                <strong>
                  İstanbul içi temel nakliye (kurulum + söküm dahil):{" "}
                  {formatTRY(UNIT_PRICES.ist_nakliye)}
                </strong>
                <br />
                *200 m²&apos;ye kadar İstanbul içi temel nakliye için geçerlidir. Türkiye geneli projelerde lojistik ayrıca planlanır.
              </p>
              <p className="mt-2 text-blue-800/80 text-sm">
                2026 birim fiyat listesi için{" "}
                <Link
                  className="underline font-semibold"
                  href="/podyum-kurulum-fiyatlari"
                  prefetch={false}
                >
                  podyum kurulum fiyatları ve m² maliyetleri
                </Link>{" "}
                sayfasını inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="paketler" className="py-20 bg-white" aria-labelledby="paketler-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="paketler-title"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Podyum <span className="text-blue-700">Paketlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyaçlarınıza uygun hazır paketler veya özel çözümler
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 max-w-7xl mx-auto">
          {PACKAGES.map((pkg, index) => {
            const prices = calculatePackagePrice(pkg.layout);
            return (
              <article
                key={pkg.id}
                id={pkg.id}
                className="group h-full bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={GALLERY_IMAGES[index] || GALLERY_IMAGES[0]}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={60}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white">{pkg.name}</h3>
                    <p className="text-white/90 text-sm">
                      {pkg.layout.width}×{pkg.layout.depth} m • {pkg.layout.area} m²
                    </p>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <ul className="space-y-2 mb-6 list-disc list-inside text-base text-gray-700">
                    {pkg.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="bg-white rounded-xl p-4 border border-gray-300 mb-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-800">
                        <span>Platform:</span>
                        <span className="font-semibold text-gray-900">{formatTRY(prices.base)}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Halı + Skört:</span>
                        <span className="font-medium text-gray-900">{formatTRY(prices.carpet + prices.skirt)}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Temel nakliye (İstanbul):</span>
                        <span className="font-medium text-gray-900">{formatTRY(prices.nakliye)}</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-300 pt-2">
                        <span className="font-bold text-gray-900">Başlangıç toplamı (İstanbul):</span>
                        <span className="font-bold text-blue-700">
                          {formatTRY(prices.total)}
                        </span>
                      </div>
                      <p className="pt-2 text-xs leading-relaxed text-gray-600">
                        Tahmini bütçedir; zemin, kurulum saati, ek güvenlik ekipmanı
                        ve şehir dışı nakliye durumuna göre netleşir.
                      </p>
                    </div>
                  </div>

                  {pkg.note && (
                    <p className="text-sm text-gray-600 text-center mb-4">
                      {pkg.note}
                    </p>
                  )}
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="mt-2 w-full min-h-[56px] inline-flex items-center justify-center font-bold px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
                  >
                    <span className="text-lg mr-2" aria-hidden="true">💬</span> Hemen Teklif Al
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            *Fiyatlar haftalık kiralama içindir. Günlük kiralama için iletişime geçin.
          </p>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const visibleImages = GALLERY_IMAGES.slice(0, 8);

  return (
    <section
      id="galeri"
      className="content-visibility-auto [contain-intrinsic-size:auto_1700px] lg:[contain-intrinsic-size:auto_1000px] py-20 bg-gradient-to-b from-white to-blue-50/50"
      aria-labelledby="galeri-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="galeri-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Proje <span className="text-blue-700">Galerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı podyum kurulumlarından örnekler
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {visibleImages.map((src, index) => (
              <li key={src}>
                <figure className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`Sahneva podyum kiralama proje örneği ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 300px"
                      quality={68}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            prefetch={false}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300"
          >
            <span className="text-xl mr-3" aria-hidden="true">📸</span> Tüm Projeleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}

function TechnicalSection() {
  return (
    <section
      id="teknik-altyapi"
      className="content-visibility-auto [contain-intrinsic-size:auto_2400px] md:[contain-intrinsic-size:auto_1500px] lg:[contain-intrinsic-size:auto_1100px] py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="teknik-altyapi-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="teknik-altyapi-title" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Teknik <span className="text-blue-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum kurulumu yalnızca platform parçalarının birleştirilmesi değildir. Sahneva, saha keşfi,
            zemin kot farkı kontrolü, karolaj planı, yük dağılımı, dengeleme ve sarsıntı kontrolünü aynı
            teknik plan içinde değerlendirerek farklı yüksekliklerde güvenli modüler podyum kurulumu yapar.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TECHNICAL_SPECS.map((item, idx) => (
            <li key={idx} className="h-full">
              <article className="group bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{item.icon}</span> {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "700+", label: "Başarılı Proje", icon: "🏆" },
    { value: "50+", label: "Kurumsal Müşteri", icon: "🏢" },
    { value: "2-6", label: "Saat Kurulum", icon: "⏱️" },
    { value: "10+", label: "Yıl Deneyim", icon: "⭐" },
  ];
  return (
    <section
      className="content-visibility-auto [contain-intrinsic-size:auto_600px] lg:[contain-intrinsic-size:auto_360px] py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white"
      aria-label="Sahneva podyum kiralama istatistikleri"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <article
              key={stat.label}
              className="text-center group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              aria-labelledby={`podyum-stat-${idx}-value`}
              aria-describedby={`podyum-stat-${idx}-label`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {stat.icon}
              </div>
              <p
                id={`podyum-stat-${idx}-value`}
                className="text-4xl md:text-5xl font-black mb-1 text-white drop-shadow-lg"
              >
                {stat.value}
              </p>
              <p id={`podyum-stat-${idx}-label`} className="text-blue-100 text-lg font-semibold mb-0">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section
      id="kullanim-alanlari"
      className="content-visibility-auto [contain-intrinsic-size:auto_2200px] md:[contain-intrinsic-size:auto_1400px] lg:[contain-intrinsic-size:auto_900px] py-20 bg-gradient-to-br from-gray-900 to-blue-900/95"
      aria-labelledby="kullanim-alanlari-title"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="kullanim-alanlari-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Kullanım <span className="text-cyan-300">Alanları</span>
          </h2>
          <p className="text-xl text-white/[0.85] max-w-3xl mx-auto leading-relaxed">
            Podyum çözümlerimizin tercih edildiği başlıca etkinlik türleri
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full" />
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc, idx) => (
            <li
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
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
                  <p className="text-white/70 text-lg leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3" aria-hidden="true">💬</span> Etkinliğiniz için Özel Çözüm Alın
          </a>
        </div>
      </div>
    </section>
  );
}

// --- PROCESS / KEYWORD-RICH SECTION (NO FAQ) ---
function ProcessAndTipsSection() {
  return (
    <section
      id="surec-ipuclari"
      className="content-visibility-auto [contain-intrinsic-size:auto_1900px] md:[contain-intrinsic-size:auto_1500px] lg:[contain-intrinsic-size:auto_1300px] py-20 bg-white"
      aria-labelledby="surec-ipuclari-title"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 id="surec-ipuclari-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Podyum Kiralama <span className="text-blue-700">Süreci</span> ve İpuçları
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İstanbul ve Türkiye genelinde podyum kiralama teklifinizi daha hızlı netleştirmek için süreç adımlarını ve kritik noktaları özetledik.
          </p>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {PROCESS_STEP_IMAGES.map((img) => (
            <figure key={img.src} className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md">
              <div className="relative aspect-[16/10]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={68}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.35] to-transparent" />
              </div>
            </figure>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* 1 */}
          <article className="rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Podyum kiralama süreci nasıl işler?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Podyum kiralama süreci; ölçü (m²) ve yükseklik belirleme, zemin/erişim kontrolü, net fiyatlandırma ve kurulum planlaması adımlarından oluşur.
              Onay sonrası İstanbul içi temel nakliye veya Türkiye geneli lojistik planlanır ve ekip, belirlenen load-in saatlerinde kurulumu tamamlar.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: "1) Ölçü & yükseklik", d: "m², yükseklik, kullanım amacı" },
                { t: "2) Zemin & erişim", d: "düz/eğim, kat/merdiven, taşıma mesafesi" },
                { t: "3) Net fiyat", d: "platform + halı + skört + lojistik kapsamı" },
                { t: "4) Kurulum planı", d: "saat aralığı, güvenlik, söküm" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-gray-50 p-4 border border-gray-100">
                  <p className="font-black text-gray-900">{x.t}</p>
                  <p className="text-gray-600">{x.d}</p>
                </div>
              ))}
            </div>
          </article>

          {/* 2 */}
          <article className="rounded-3xl border-2 border-blue-100 bg-blue-50/60 p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Kısa süreli podyum kiralama mümkün mü?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Evet, kısa süreli podyum kiralama mümkündür. Günlük, haftalık veya etkinlik bazlı kiralama yapılabilir.
              Defile, konser ve kurumsal lansman gibi organizasyonlarda aynı gün kurulum/söküm planlaması uygunluk durumuna göre yapılır.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 border border-blue-200">
              <p className="font-black text-gray-900 mb-1">Hızlı teklif için minimum bilgi</p>
              <p className="text-gray-700">
                Tarih • İlçe • m² • Yükseklik • Halı (evet/hayır) • Skört (metre)
              </p>
            </div>
          </article>

          {/* 3 */}
          <article className="rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Podyum kiralama yaparken dikkat edilmesi gerekenler
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Podyum kiralama yaparken metrekare hesabı, zemin dengesi, yük taşıma kapasitesi ve güvenlik detayları (kenar bitişi, merdiven/rampa gibi)
              mutlaka planlanmalıdır. Özellikle konser ve yoğun trafikli organizasyonlarda stabilite kontrolleri kritik önemdedir.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Podyum kiralama projelerinde zemin yükseltme, karolaj planı, kiralık podyum ve sahne ile stabil
              modüler podyum kurulumu ayrı değerlendirilir. Daha geniş konser veya ana sahne çözümleri için{" "}
              <Link
                href="/sahne-kiralama"
                prefetch={false}
                className="font-bold text-blue-700 underline underline-offset-4"
              >
                sahne kiralama
              </Link>{" "}
              hizmeti ayrıca incelenebilir.
            </p>

            <ul className="mt-6 space-y-2 text-lg text-gray-700 leading-relaxed">
              <li>• Zemin eğimi / bozuk yüzey için dengeleme planı</li>
              <li>• Trafik yoğunluğu için uygun yük dağılımı</li>
              <li>• Kablo geçişleri ve sahne entegrasyonu</li>
              <li>• Kenar güvenliği (korkuluk/bitiriş) ihtiyaçları</li>
            </ul>
          </article>

          {/* 4 */}
          <article className="rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Podyum kiralama ve ses sistemi kiralama birlikte yapılır mı?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Evet. Podyum kiralama hizmeti; ses sistemi, ışık sistemi ve LED ekran çözümleri ile birlikte tek paket planlanabilir.
              Bu yaklaşım kurulum süresini kısaltır, teknik uyumluluğu artırır ve sahada koordinasyonu kolaylaştırır.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/ses-isik-sistemleri"
                prefetch={false}
                className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-900 hover:border-blue-200 hover:text-blue-700 transition"
              >
                Ses &amp; Işık Sistemleri →
              </Link>
              <Link
                href="/led-ekran-kiralama"
                prefetch={false}
                className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-900 hover:border-blue-200 hover:text-blue-700 transition"
              >
                LED Ekran Kiralama →
              </Link>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-[56px] min-w-[180px] touch-manipulation items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-10 py-4 font-extrabold text-white shadow-lg transition hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
          >
            <span className="text-xl mr-2" aria-hidden="true">💬</span> Hızlı Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}


function FAQSection() {
  return (
    <section
      id="sss"
      className="content-visibility-auto [contain-intrinsic-size:auto_1400px] lg:[contain-intrinsic-size:auto_980px] py-20 bg-white"
      aria-labelledby="sss-title"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="sss-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Podyum kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <ul className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <li key={index}>
              <details className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border">
                <summary className="flex min-h-[56px] cursor-pointer touch-manipulation list-none items-center justify-between gap-4 py-2 text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">
                  <span className="pr-4">{faq.q}</span>
                  <span
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-500 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </summary>
                <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500">
                  {faq.a}
                </div>
              </details>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            prefetch={false}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span className="text-xl mr-3" aria-hidden="true">📚</span>
            <span className="text-lg">Tüm SSS&apos;yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section
      id="tamamlayici-hizmetler"
      className="content-visibility-auto [contain-intrinsic-size:auto_1800px] sm:[contain-intrinsic-size:auto_1100px] lg:[contain-intrinsic-size:auto_760px] py-20 bg-gradient-to-br from-gray-50 to-blue-100/30"
      aria-labelledby="tamamlayici-hizmetler-title"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="tamamlayici-hizmetler-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Tamamlayıcı <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Podyum kurulumunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((service) => (
            <li key={service.href} className="h-full">
              <Link
                href={service.href}
                prefetch={false}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col"
              >
                <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  <service.Icon size={36} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      className="content-visibility-auto [contain-intrinsic-size:auto_760px] lg:[contain-intrinsic-size:auto_520px] py-20 bg-white"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 id="cta-title" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Profesyonel Podyum Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun podyum sistemlerini sunalım. Ücretsiz keşif, profesyonel danışmanlık ve
              rekabetçi fiyat garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                prefetch={false}
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
              >
                <span className="text-xl mr-3" aria-hidden="true">📞</span> Hemen Teklif Al
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
              >
                <span className="text-xl mr-3" aria-hidden="true">💬</span> WhatsApp&apos;tan Yaz
              </a>
            </div>

            <p className="mt-6 text-sm text-white/80">
              2026 birim fiyat listesi için{" "}
              <Link
                className="underline font-semibold"
                href="/podyum-kurulum-fiyatlari"
                prefetch={false}
              >
                podyum kurulum fiyatları sayfası
              </Link>{" "}
              kısmına göz atabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/podyum-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Podyum Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StructuredData />
      <HeroSection />
      <PodiumStockCapacitySection />
      <PodiumFlowSection />
      <PackagesSection />
      <CalculatorSection />
      <ServicesSection />
      <GallerySection />
      <TechnicalSection />
      <StatsSection />
      <UseCasesSection />
      <ProcessAndTipsSection />
      <FAQSection />
      <RelatedServicesSection />
      <ServiceBlogLinks {...CONTENT_CLUSTERS.podium} links={CONTENT_CLUSTERS.podium.guides} />
      <CTASection />
    </>
  );
}
