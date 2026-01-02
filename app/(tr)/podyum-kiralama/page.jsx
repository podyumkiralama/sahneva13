// app/podyum-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { buildFaqSchema } from "@/lib/structuredData/faq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

/* ================== 1. AYARLAR & SABİTLER ================== */
export const revalidate = 1800; // 30 Dakika ISR
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const WHATSAPP_URL = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Merhaba, podyum kiralama için teklif istiyorum."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. DİNAMİK FİYAT MOTORU ================== */
const UNIT_PRICES = {
  platform_m2_week: 250,
  carpet_m2_week: 120,
  skirt_ml_week: 90,
  istanbul_setup: 8000,
  currency: "TRY",
};

const calculatePackagePrice = (layout) => {
  const base = layout.area * UNIT_PRICES.platform_m2_week;
  const carpet = layout.area * UNIT_PRICES.carpet_m2_week;
  const skirt = layout.perimeter * UNIT_PRICES.skirt_ml_week;
  const total = base + carpet + skirt + UNIT_PRICES.istanbul_setup;
  return { base, carpet, skirt, total };
};

/* ================== 3. DİNAMİK BİLEŞENLER ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="h-96 w-full bg-gray-100 animate-pulse rounded-3xl border border-gray-200" />
  ),
});

const PriceEstimatorPodyum = dynamic(() => import("@/components/PriceEstimatorPodyum"), {
  loading: () => (
    <div className="h-80 w-full bg-gray-50 animate-pulse rounded-3xl border border-gray-200" />
  ),
});

/* ================== 4. İÇERİK VERİLERİ ================== */
const SERVICES = [
  {
    icon: "🎭",
    title: "Modüler Podyum Sistemleri",
    description: "1×1m ve 2×1m modüler paneller ile esnek ve güvenli sahne çözümleri",
    features: ["1×1m ve 2×1m paneller", "Kaymaz kaplama", "40-100cm yükseklik", "Hızlı kurulum"],
  },
  {
    icon: "💍",
    title: "Düğün & Özel Etkinlik Podyumları",
    description: "Özel günler için şık ve güvenli podyum çözümleri",
    features: ["Şık görünüm", "Güvenli yapı", "Halı kaplama", "Özel dekorasyon"],
  },
  {
    icon: "🎤",
    title: "Konser & Performans Podyumları",
    description: "Profesyonel sahne performansları için dayanıklı podyum sistemleri",
    features: ["Yüksek dayanıklılık", "Ses izolasyonu", "Kablo kanalları", "Güvenlik ekipmanları"],
  },
  {
    icon: "🏢",
    title: "Kurumsal Lansman Podyumları",
    description: "Şirket etkinlikleri için profesyonel ve fonksiyonel podyum çözümleri",
    features: ["Markalı kaplama", "Rampa ve merdiven", "LED entegrasyonu", "Profesyonel kurulum"],
  },
  {
    icon: "🎪",
    title: "Fuar & Sergi Podyumları",
    description: "Fuar ve sergi alanları için optimize edilmiş podyum sistemleri",
    features: ["Modüler tasarım", "Hızlı kurulum", "Marka entegrasyonu", "Taşınabilirlik"],
  },
  {
    icon: "🔧",
    title: "Teknik Destek & Kurulum",
    description: "Profesyonel kurulum, söküm ve 7/24 teknik destek hizmetleri",
    features: ["Profesyonel kurulum", "Söküm hizmeti", "7/24 destek", "Acil müdahale"],
  },
];

const PACKAGES = [
  {
    id: "pkg-mini",
    name: "Mini Podyum — 12 m²",
    layout: { width: 3, depth: 4, area: 12, perimeter: 14 },
    height: "40 cm",
    includes: ["6 × (1×2 m) panel – toplam 12 m²", "Yükseklik: 40 cm", "Kaymaz kaplama", "Kurulum + söküm"],
    note: "İç mekân konuşma/mini performanslar için ideal.",
  },
  {
    id: "pkg-orta",
    name: "Orta Podyum — 24 m²",
    layout: { width: 4, depth: 6, area: 24, perimeter: 20 },
    height: "60 cm",
    includes: ["12 × (1×2 m) panel – toplam 24 m²", "Yükseklik: 60 cm", "Kaymaz kaplama, merdiven", "Kurulum + söküm + yerinde dengeleme"],
    note: "Kurumsal sahneler ve canlı performanslar için.",
  },
  {
    id: "pkg-pro",
    name: "Pro Podyum — 48 m²",
    layout: { width: 6, depth: 8, area: 48, perimeter: 28 },
    height: "80-100 cm",
    includes: ["24 × (1×2 m) panel – toplam 48 m²", "Yükseklik: 80–100 cm", "Kaymaz kaplama, merdiven, rampa, korkuluk", "Kurulum + söküm + çevre etek/brandalama"],
    note: "Büyük konser/miting sahneleri için.",
  },
];

const USE_CASES = [
  { icon: "💍", text: "Düğün, nişan ve özel davetler", desc: "Özel günler için şık podyum çözümleri" },
  { icon: "🎤", text: "Konser, festival ve sahne performansları", desc: "Profesyonel performanslar için sahneler" },
  { icon: "🏢", text: "Kurumsal lansman ve toplantılar", desc: "Şirket etkinlikleri için profesyonel çözümler" },
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
    features: ["1×1m ve 2×1m paneller", "40-100cm yükseklik", "İsteğe özel ölçüler", "Karma panel sistemleri"],
  },
  {
    title: "Tamamlayıcı Hizmetler",
    icon: "🔧",
    description: "Podyum kurulumunu tamamlayan profesyonel hizmetler",
    features: ["Halı kaplama sistemleri", "Skört (etek) kaplama", "Markalama ve dekorasyon", "Aydınlatma entegrasyonu"],
  },
  {
    title: "Kurulum Süreçleri",
    icon: "⚡",
    description: "Hızlı ve profesyonel kurulum, söküm ve lojistik hizmetleri",
    features: ["2-6 saat kurulum", "Profesyonel ekip", "Lojistik desteği", "Söküm hizmeti"],
  },
  {
    title: "Teknik Destek",
    icon: "📞",
    description: "7/24 teknik destek ve acil müdahale hizmetleri",
    features: ["7/24 teknik destek", "Acil müdahale ekibi", "Yedek parça stoğu", "Bakım hizmetleri"],
  },
];

const FAQ_ITEMS = [
  {
    q: "Podyum kiralama fiyatları nasıl hesaplanır?",
    a: `Podyum kiralama fiyatları alan (m²), yükseklik, aksesuarlar ve nakliye esas alınarak hesaplanır. Platform fiyatımız ${UNIT_PRICES.platform_m2_week} TL/m²'dir. Detaylı teklif için iletişime geçebilirsiniz.`,
  },
  { q: "Kurulum ne kadar sürer?", a: "Standart 24-48 m² podyumlar çoğu mekânda 2-6 saat içinde kurulur. Geniş alanlar ve özel gereksinimler ek süre gerektirebilir." },
  { q: "Hangi panelleri kullanıyorsunuz?", a: "1×1m ve 2×1m modüler paneller kullanıyoruz. Düzensiz zeminlerde 1×1m paneller esneklik sağlarken, ana sahnelerde 2×1m paneller hızlı kurulum imkanı sunar." },
  { q: "Halı ve skört zorunlu mu?", a: "Zorunlu değildir ancak görsel bütünlük ve güvenlik için önerilir. Halı kaymaz özelliktedir, skört ise profesyonel görünüm kazandırır." },
];

const RELATED_SERVICES = [
  { href: "/cadir-kiralama", title: "Çadır Kiralama", icon: "🏕️", desc: "Profesyonel çadır sistemleri ve kurulum hizmetleri" },
  { href: "/kurumsal-organizasyon", title: "Kurumsal Organizasyon", icon: "🏢", desc: "Profesyonel etkinlik yönetimi ve organizasyon çözümleri" },
  { href: "/led-ekran-kiralama", title: "LED Ekran Kiralama", icon: "🖥️", desc: "Yüksek çözünürlüklü LED ekran ve video wall çözümleri" },
  { href: "/ses-isik-sistemleri", title: "Ses & Işık Sistemleri", icon: "🎵", desc: "Profesyonel ses ve ışık sistemleri kiralama" },
];

const GALLERY_IMAGES = [
  "/img/podyum/1.webp",
  "/img/podyum/2.webp",
  "/img/podyum/3.webp",
  "/img/galeri/podyum-kiralama-4.webp",
  "/img/galeri/podyum-kiralama-5.webp",
  "/img/galeri/podyum-kiralama-6.webp",
  "/img/galeri/podyum-kiralama-7.webp",
  "/img/galeri/podyum-kiralama-8.webp",
];

/* ================== 5. META DATA ================== */
export const metadata = {
  title: "Podyum Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Modüler podyum kiralama: 1×1 ve 2×1 paneller, kaymaz kaplama, halı ve skört opsiyonları. İstanbul geneli profesyonel kurulum.",
  alternates: { canonical: `${ORIGIN}/podyum-kiralama` },
  openGraph: {
    title: "Podyum Kiralama | Sahneva Organizasyon",
    description: "Modüler podyum sistemleri, kaymaz kaplama ve profesyonel kurulum.",
    url: `${ORIGIN}/podyum-kiralama`,
    type: "website",
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/og/sahneva-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon etkinlik prodüksiyon görseli",
      },
    ],
  },
};

/* ================== 6. BİLEŞENLER ================== */

// --- JSON-LD ---
function StructuredData() {
  const productSchemas = PACKAGES.map((pkg) => {
    const prices = calculatePackagePrice(pkg.layout);
    return {
      "@type": "Product",
      name: pkg.name,
      description: pkg.note,
      image: [`${ORIGIN}/img/podyum/hero.webp`],
      sku: pkg.id,
      brand: { "@type": "Brand", name: "Sahneva" },
      offers: {
        "@type": "Offer",
        url: `${ORIGIN}/podyum-kiralama#${pkg.id}`,
        priceCurrency: UNIT_PRICES.currency,
        price: prices.total,
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
      },
    };
  });

  const articleSchema = {
    "@type": "Article",
    headline: "Profesyonel Podyum Kiralama Rehberi",
    image: [`${ORIGIN}/img/podyum/hero.webp`],
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    datePublished: "2023-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    description: metadata.description,
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Podyum Kiralama",
        description: metadata.description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "State", name: "İstanbul" },
      },
      ...productSchemas,
      articleSchema,
      buildFaqSchema ? buildFaqSchema(FAQ_ITEMS) : {},
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * ✅ NEW HERO (GSC-safe):
 * - Metin görselin üstünde bindirme değil
 * - Metin önce geliyor, görsel sonra geliyor (blog gibi)
 * - Google snapshot’ta kaybolacak opacity/transparent hilesi yok
 */

<style
  dangerouslySetInnerHTML={{
    __html: `
      /* GSC / snapshot güvenlik: görünmeyen içerikleri zorla görünür yap */
      [data-reveal],
      [data-motion],
      [data-animate],
      .reveal,
      .motion,
      .animate-fade-in-up,
      .animate-fade-in,
      .opacity-0 {
        opacity: 1 !important;
        transform: none !important;
        filter: none !important;
      }
    `,
  }}
/>


// --- HERO SECTION (Modern + GSC-safe, tasarım aynı) ---
function HeroSection() {
  return (
    <section className="relative isolate bg-slate-950 pt-20">
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Image */}
        <Image
          src="/img/podyum/hero.webp"
          alt="Profesyonel podyum kurulumu"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="object-cover"
        />

        {/* Modern overlays (safe) */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/45 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-purple-900/45" />

        {/* Soft glow blobs */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="container mx-auto px-4">
        <div className="min-h-screen md:min-h-[80vh] flex items-center justify-center">
          {/* Content card (keeps readability + Google snapshot safe) */}
          <div className="w-full max-w-5xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-2 mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/70 blur-[1px]" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-green-500" />
              </span>
              <span className="text-sm font-extrabold text-white">
                İstanbul Geneli Profesyonel Hizmet
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
              Profesyonel{" "}
              <span className="text-blue-200">Podyum Kiralama</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-light mb-4">
              Düğün • Konser • Lansman • Festival • Kurumsal Etkinlikler
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
              Modüler podyum sistemleri, kaymaz kaplama ve{" "}
              <span className="font-semibold text-white">profesyonel kurulum</span>{" "}
              ile anahtar teslim çözümler
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
              >
                <span className="text-xl mr-2">💬</span> Hemen Teklif Al
              </Link>

              <Link
                href="#hizmetler"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/80 text-white bg-white/10 backdrop-blur-xl hover:bg-white/15 transition shadow-lg"
              >
                <span className="text-xl mr-2">🎯</span> Hizmetlerimiz
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <span className="text-2xl mb-2">⭐</span>
                <div className="text-xl font-black text-white">4.8/5</div>
                <div className="text-white/75 text-sm">200+ Değerlendirme</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <span className="text-2xl mb-2">🏆</span>
                <div className="text-xl font-black text-white">600+</div>
                <div className="text-white/75 text-sm">Etkinlik</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <span className="text-2xl mb-2">🚀</span>
                <div className="text-xl font-black text-white">2-6 Saat</div>
                <div className="text-white/75 text-sm">Kurulum Süresi</div>
              </div>
            </div>

            {/* ✅ GSC-safe hint: if you want extra safety, keep this */}
            <span className="sr-only">Podyum Kiralama - Sahneva Organizasyon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, accent }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
        {title}{" "}
        <span className="text-blue-700">{accent}</span>
      </h2>
      <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
    </div>
  );
}

// --- SERVICES SECTION ---
function ServicesSection() {
  return (
    <section id="hizmetler" className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Profesyonel" accent="Hizmetlerimiz" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          Podyum kiralama hizmetlerimiz: keşif, projelendirme, kurulum, teknik destek ve söküm
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 transition-all duration-300 h-full flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-black mb-4 text-gray-900">
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
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
          >
            <span className="text-xl mr-3">📞</span> Detaylı Teklif için İletişime Geçin
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- CALCULATOR SECTION ---
function CalculatorSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Hızlı" accent="Fiyat Hesaplama" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          Podyum ölçülerinizi girerek anında fiyat teklifi alın
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl p-8">
            <PriceEstimatorPodyum unitPrices={UNIT_PRICES} />
            <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-200">
              <p className="text-blue-800 text-lg">
                <strong>
                  İstanbul içi nakliye, kurulum ve söküm:{" "}
                  {new Intl.NumberFormat("tr-TR", {
                    style: "currency",
                    currency: "TRY",
                    maximumFractionDigits: 0,
                  }).format(UNIT_PRICES.istanbul_setup)}
                </strong>
                <br />
                *200 m²'ye kadar geçerlidir. Şehir dışı projeler için özel teklif alın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- PACKAGES SECTION ---
function PackagesSection() {
  const formatTRY = (n) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Podyum" accent="Paketlerimiz" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          İhtiyaçlarınıza uygun hazır paketler veya özel çözümler
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PACKAGES.map((pkg, index) => {
            const prices = calculatePackagePrice(pkg.layout);
            return (
              <article
                key={pkg.id}
                id={pkg.id}
                className="group h-full bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={GALLERY_IMAGES[index] || GALLERY_IMAGES[0]}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
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

                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Platform:</span>
                        <span className="font-semibold">{formatTRY(prices.base)}</span>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Halı + Skört:</span>
                        <span>{formatTRY(prices.carpet + prices.skirt)}</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-300 pt-2">
                        <span className="font-bold">Toplam (İstanbul):</span>
                        <span className="font-bold text-blue-700">{formatTRY(prices.total)}</span>
                      </div>
                    </div>
                  </div>

                  {pkg.note && (
                    <p className="text-sm text-gray-600 text-center mb-4">{pkg.note}</p>
                  )}
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl"
                  >
                    <span className="text-lg mr-2">💬</span> Hemen Teklif Al
                  </Link>
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

// --- GALLERY SECTION ---
function GallerySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Proje" accent="Galerimiz" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          Gerçekleştirdiğimiz başarılı podyum kurulumlarından örnekler
        </p>

        <div className="max-w-7xl mx-auto">
          <CaseGallery
            images={GALLERY_IMAGES.map((src) => ({
              src,
              alt: "Profesyonel podyum kurulum projesi - Sahneva",
            }))}
            visibleCount={8}
            priorityCount={3}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            <span className="text-xl mr-3">📸</span> Tüm Projeleri Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- TECHNICAL SPECS SECTION ---
function TechnicalSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Teknik" accent="Altyapımız" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          En son teknoloji ekipmanlar ve profesyonel teknik altyapı ile hizmetinizdeyiz
        </p>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TECHNICAL_SPECS.map((item, idx) => (
            <li key={idx} className="h-full">
              <article className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="font-black text-2xl text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{item.description}</p>
                <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                  {item.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// --- STATS BAND ---
function StatsSection() {
  const stats = [
    { value: "600+", label: "Başarılı Etkinlik", icon: "🎪" },
    { value: "50+", label: "Kurumsal Müşteri", icon: "🏢" },
    { value: "2-6", label: "Saat Kurulum", icon: "⏱️" },
    { value: "8+", label: "Yıl Deneyim", icon: "⭐" },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-lg">{stat.value}</div>
              <p className="text-blue-100 text-lg font-semibold mb-0">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- USE CASES SECTION ---
function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-blue-950/95 text-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Kullanım <span className="text-blue-200">Alanları</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Podyum çözümlerimizin tercih edildiği başlıca etkinlik türleri
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full" />
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc, idx) => (
            <li
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:border-white/35 transition-all duration-300"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl bg-white/15 rounded-2xl p-4" aria-hidden="true">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-black text-xl mb-2">{uc.text}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-black px-8 py-4 rounded-2xl bg-white text-blue-800 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-xl mr-3">💬</span> Etkinliğiniz için Özel Çözüm Alın
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- FAQ SECTION ---
function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionTitle title="Sık Sorulan" accent="Sorular" />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          Podyum kiralama hakkında merak edilen sorular ve cevapları
        </p>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-300 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-black text-gray-900">
                <span className="pr-4">{faq.q}</span>
                <span className="ml-4 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ⌄
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
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-black px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300"
          >
            <span className="text-xl mr-3">📚</span> Tüm SSS'yi Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- RELATED SERVICES SECTION ---
function RelatedServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30">
      <div className="container max-w-7xl mx-auto px-4">
        <SectionTitle title="Tamamlayıcı" accent="Hizmetlerimiz" />
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center -mt-10 mb-12">
          Podyum kurulumunuzu tamamlayacak diğer profesyonel etkinlik çözümlerimiz
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((service) => (
            <li key={service.href} className="h-full">
              <Link
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02] text-center h-full flex flex-col"
              >
                <div className="text-4xl mb-6" aria-hidden="true">{service.icon}</div>
                <h3 className="font-black text-xl text-gray-900 mb-4 flex-grow">
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

// --- CTA SECTION ---
function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Profesyonel Podyum Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun podyum sistemlerini sunalım. Ücretsiz keşif,
              profesyonel danışmanlık ve rekabetçi fiyat garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center font-black px-8 py-4 rounded-2xl bg-white text-blue-800 hover:shadow-2xl transition-all duration-300"
              >
                <span className="text-xl mr-3">📞</span> Hemen Teklif Al
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-black px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/15 transition-all duration-300"
              >
                <span className="text-xl mr-3">💬</span> WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== 7. SAYFA EXPORT ================== */
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
      <ServicesSection />
      <CalculatorSection />
      <PackagesSection />
      <GallerySection />
      <TechnicalSection />
      <StatsSection />
      <UseCasesSection />
      <FAQSection />
      <RelatedServicesSection />
      <CTASection />
    </>
  );
}
