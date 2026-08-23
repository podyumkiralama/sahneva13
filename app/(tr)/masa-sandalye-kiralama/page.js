// app/masa-sandalye-kiralama/page.jsx
import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import Link from "next/link";
import dynamic from "next/dynamic";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import RegionalCityLinks from "@/components/RegionalCityLinks";
import PaymentOptionsNote from "@/components/payments/PaymentOptionsNote";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import JsonLdScript from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import { Music, Layers, Monitor, Tent } from "lucide-react";
import GlossaryTermLinks from "@/components/seo/GlossaryTermLinks";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { PROJECTS_COMPLETED, PROVINCES_COUNT } from "@/lib/stats";

/* ================== Sabitler ================== */
export const revalidate = 86400;
const ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const WEBSITE_ID = `${ORIGIN}/#website`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+masa+sandalye+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bdavet%2Fkonferans%2Fkokteyl%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik galeri ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galeri yükleniyor"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"
        aria-hidden="true"
      />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title: "Masa Sandalye Kiralama İstanbul | Davet & Toplantı",
  description:
    "Masa sandalye kiralama: Napolyon ve konferans sandalyesi, banket-bistro masa, örtü-kılıf. İstanbul'da düğün ve kurumsal etkinliklere hızlı teslim.",
  alternates: buildAlternatesForPath("/masa-sandalye-kiralama"),
  openGraph: {
    title: "Masa Sandalye Kiralama | Sahneva",
    description:
      "Davet, konferans ve kokteyl düzenleri için masa sandalye kiralama. Örtü-kılıf, planlama ve profesyonel kurulum.",
    url: `${ORIGIN}/masa-sandalye-kiralama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/sandalye/1.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon masa sandalye kiralama – düğün, kurumsal etkinlik ve organizasyon için profesyonel çözümler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masa Sandalye Kiralama | Profesyonel Çözümler | Sahneva",
    description:
      "Napolyon ve konferans sandalyeleri, banket ve bistro masalar, örtü-kılıf; numaralandırma ve profesyonel yerleşim.",
    images: [`${ORIGIN}/img/sandalye/1.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/sandalye/1.webp",
  alt: "Profesyonel masa sandalye kurulumu - Şık davet düzeni ve dekorasyon",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🪑",
    title: "Napolyon Sandalye Kiralama",
    description:
      "Klasik ve şık tasarım, ahşap/PP seçenekleri ile davetler için ideal",
    features: [
      "Ahşap & PP modeller",
      "Beyaz/Krem renk",
      "Stackable tasarım",
      "Rahat oturum",
    ],
  },
  {
    icon: "💼",
    title: "Konferans Sandalyesi Kiralama",
    description:
      "Yastıklı, profesyonel görünüm, uzun süreli oturumlar için konfor",
    features: [
      "Yastıklı oturma",
      "Profesyonel görünüm",
      "Katlanabilir",
      "Hafif taşınabilir",
    ],
  },
  {
    icon: "🎪",
    title: "Banket Masa Kiralama",
    description:
      "Yuvarlak ve dikdörtgen masalar, her etkinliğe uygun çözümler",
    features: [
      "Ø180 yuvarlak",
      "180×75 dikdörtgen",
      "Hızlı kurulum",
      "Sağlam yapı",
    ],
  },
  {
    icon: "🥂",
    title: "Bistro Masa Kiralama",
    description:
      "Kokteyl ve networking etkinlikleri için kompakt çözümler",
    features: ["Ø60-80 cm", "Hafif tasarım", "Stretch kılıf", "Mobil kullanım"],
  },
  {
    icon: "🧵",
    title: "Örtü & Kılıf Sistemleri",
    description:
      "Keten, tafta, stretch kumaşlar ile zengin renk ve doku seçenekleri",
    features: [
      "Keten örtüler",
      "Tafta şallar",
      "Stretch kılıflar",
      "20+ renk",
    ],
  },
  {
    icon: "🗺️",
    title: "Planlama & Yerleşim",
    description:
      "Oturma planı, numaralandırma ve profesyonel yerleşim hizmetleri",
    features: [
      "Oturma planı",
      "Masa numaralandırma",
      "Profesyonel kurulum",
      "Yönlendirme",
    ],
  },
];

const USE_CASES = [
  {
    icon: "💒",
    text: "Düğün ve nişan organizasyonları",
    desc: "Davet masaları, yuvarlak banket düzeni ve şık sandalyeler",
  },
  {
    icon: "🏢",
    text: "Kurumsal toplantı ve konferanslar",
    desc: "Konferans sandalyeleri, dikdörtgen masalar ve profesyonel setup",
  },
  {
    icon: "🎓",
    text: "Seminer ve eğitim etkinlikleri",
    desc: "Sınıf düzeni, not masaları ve konforlu oturum",
  },
  {
    icon: "🥂",
    text: "Kokteyl ve lansman partileri",
    desc: "Bistro masalar, high-top seçenekleri ve mobil düzen",
  },
  {
    icon: "🎭",
    text: "Festival ve açık hava etkinlikleri",
    desc: "Dayanıklı sandalyeler, pratik masa sistemleri",
  },
  {
    icon: "🏆",
    text: "Ödül törenleri ve galalar",
    desc: "Protokol sandalyeleri, premium masa düzenleri",
  },
];

// =====================  PAKET VERİLERİ  =====================
const PACKAGES = [
  {
    id: "davet-100",
    name: "Davet Seti — 100 Kişi",
    badge: "Popüler",
    specs: {
      people: 100,
      tables: { type: "Yuvarlak Ø180", count: 10 },
      chairs: { type: "Napolyon", count: 100 },
      linens: { tablecloth: 10, runner: 10 },
    },
    includes: [
      "10 × yuvarlak banket masa (Ø180 cm)",
      "100 × Napolyon sandalye (beyaz/krem)",
      "Keten masa örtüsü + runner",
      "Teslimat, yerleşim ve toplama",
    ],
    note: "Düğün, nişan ve kurumsal yemekler için şık görünüm.",
  },

  {
    id: "konferans-60",
    name: "Konferans Seti — 60 Kişi",
    badge: "Kurumsal",
    specs: {
      people: 60,
      tables: { type: "Dikdörtgen 180×75", count: 10 },
      chairs: { type: "Konferans", count: 60 },
      linens: { tablecloth: 10 },
    },
    includes: [
      "10 × dikdörtgen masa (180×75 cm)",
      "60 × konferans sandalyesi (yastıklı)",
      "Numaralandırma ve oturma planı yerleşimi",
      "Teslimat + kurulum",
    ],
    note: "Seminer, eğitim ve panel düzenleri için.",
  },

  {
    id: "kokteyl-15",
    name: "Kokteyl Seti — 15 Ünite",
    badge: "Hafif Kurulum",
    specs: {
      people: 90,
      tables: { type: "Bistro Ø60–80", count: 15 },
      chairs: { type: "", count: 0 },
      linens: { stretchCover: 15 },
    },
    includes: [
      "15 × bistro kokteyl masası (Ø60–80 cm)",
      "Stretch kılıf (beyaz/siyah/renkli)",
      "Opsiyon: fırfır/tafta şal",
      "Teslimat + toplama",
    ],
    note: "Lansman, açılış ve networking alanları için.",
  }
];

/* ================== HERO ================== */
const HERO_BADGES = [
  "Düğün",
  "Nişan",
  "Konferans",
  "Kokteyl",
  "Kurumsal etkinlik",
];

const HERO_ACTIONS = [
  {
    key: "quote",
    label: "Hemen Teklif Al",
    href: WHATSAPP,
    external: true,
    ariaLabel: "WhatsApp üzerinden hemen teklif alın",
  },
  {
    key: "packages",
    label: "Fiyat ve Paketler",
    href: "#fiyatlar",
    ariaLabel: "Fiyat ve paket seçeneklerini inceleyin",
  },
];

const HERO_METRICS = [
  {
    value: "Geniş",
    label: "Stok kapasitesi",
    detail: "Napolyon, konferans sandalyesi ve banket masa stoğu.",
  },
  {
    value: PROJECTS_COMPLETED,
    label: "Tamamlanan proje",
    detail: "Düğünden kurumsal konferansa geniş yerleşim deneyimi.",
  },
  {
    value: `${PROVINCES_COUNT} İl`,
    label: "Hizmet bölgesi",
    detail: "İstanbul merkezli, Türkiye geneli teslimat ve kurulum.",
  },
  {
    value: "Kart",
    label: "Taksitli ödeme",
    detail: "Teklifte anlaşılan tutar online kredi kartıyla ödenebilir.",
  },
];

function Hero() {
  return (
    <PageHero
      eyebrow="İstanbul geneli hızlı teslim"
      title="Profesyonel"
      titleAccent="Masa Sandalye Kiralama"
      titleWide
      description="İstanbul'da düğün, nişan ve kurumsal organizasyonlar için kiralık masa ve sandalye seçenekleri sunuyoruz: Napolyon ve konferans sandalyeleri, banket masalar, örtü-kılıf sistemleri ile <strong>yerleşim planı ve hızlı kurulum</strong>."
      badges={HERO_BADGES}
      actions={HERO_ACTIONS}
      metrics={HERO_METRICS}
      image={{
        src: HERO.src,
        alt: HERO.alt,
        sizes: HERO.sizes,
        quality: 70,
        blurDataURL: BLUR_DATA_URL,
      }}
    />
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section
      id="hizmetler"
      className="py-20 bg-gradient-to-b from-white to-violet-50/50"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Masa Sandalye{" "}
            <span className="text-violet-700">
              Kiralama Seçenekleri
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Masa sandalye kiralama hizmetlerimiz: geniş envanter, örtü-kılıf
            sistemleri, sandalye kiralama ihtiyacı için doğru ürün seçimi ve
            profesyonel yerleşim
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
                    className="text-2xl font-black mb-4 text-gray-900 group-hover:text-violet-600 transition-colors"
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
                          className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex-shrink-0"
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📞
            </span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Paketler ================== */
function Packages() {
  const formatTRY = (n) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);

  // Basit fiyatlandırma (gerçek projede API'den gelecek)
  const packagePrices = {
    "davet-100": 12500,
    "konferans-60": 9800,
    "kokteyl-15": 7200,
  };

  return (
    <section
      id="fiyatlar"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="fiyatlar-baslik"
    >
      <div className="container mx-auto px-4">
        {/* Başlık Bloğu */}
        <div className="text-center mb-16">
          <h2
            id="fiyatlar-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Masa Sandalye Kiralama{" "}
            <span className="text-violet-700">
              Fiyatları ve Paketler
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Farklı etkinlik türleri için{" "}
            <strong className="text-gray-900">
              anahtar teslim masa sandalye çözümleri
            </strong>
            . Paketler ihtiyaçlarınıza göre özelleştirilebilir.
          </p>
        </div>

        {/* Paket Kartları */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PACKAGES.map((pkg, index) => {
            const isPopular = pkg.badge === "Popüler";
            const isCorporate = pkg.badge === "Kurumsal";

            const headingId = `pkg-${pkg.id}-title`;

            return (
              <article
                key={pkg.id}
                id={`fiyat-${index + 1}`}
                className={`group h-full`}
                aria-labelledby={headingId}
              >
                <div
                  className={`rounded-3xl border-2 shadow-xl overflow-hidden transition-all duration-500 flex flex-col bg-white ${
                    isPopular
                      ? "border-violet-600 ring-4 ring-violet-500/20 transform scale-[1.03] group-hover:scale-[1.06]"
                      : "border-gray-100 group-hover:scale-105"
                  }`}
                >
                  {/* HEADER */}
                  <header className="relative p-8 text-white bg-gradient-to-r from-violet-900 via-purple-900 to-violet-900 overflow-hidden">
                    {/* Hafif pattern / overlay */}
                  <div
                    className="absolute inset-0 grid-overlay"
                    aria-hidden="true"
                    style={{
                      "--grid-overlay-top": "rgba(139, 92, 246,0.6)",
                      "--grid-overlay-bottom": "rgba(147,51,234,0.6)",
                      "--grid-overlay-opacity": "0.4",
                      "--grid-overlay-blur": "28px",
                    }}
                  />
                    <div className="relative z-10">
                      {/* Badge */}
                      {pkg.badge && (
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide bg-white text-slate-900 shadow-sm">
                          <span aria-hidden="true">
                            {isPopular && "⭐"}
                            {isCorporate && "🏢"}
                            {!isPopular && !isCorporate && "✅"}
                          </span>
                          <span>{pkg.badge}</span>
                        </div>
                      )}

                      {/* İkon */}
                      <div
                        className="text-4xl mb-4"
                        aria-hidden="true"
                      >
                        {pkg.id === "davet-100" && "💒"}
                        {pkg.id === "konferans-60" && "🏢"}
                        {pkg.id === "kokteyl-15" && "🥂"}
                      </div>

                      {/* Başlık ve alt metin */}
                      <h3
                        id={headingId}
                        className="text-2xl font-black mb-2 leading-tight"
                      >
                        {pkg.name}
                      </h3>
                      <p className="text-violet-100 text-base md:text-lg leading-relaxed">
                        {pkg.note}
                      </p>
                    </div>
                  </header>

                  {/* İçerik */}
                  <div className="p-8 flex-grow">
                    {/* Özet Bilgi Satırı */}
                    <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-700">
                      {pkg.specs?.people && (
                        <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-violet-700 border border-violet-100">
                          <span aria-hidden="true">👥</span>
                          <span>{pkg.specs.people} kişilik düzen</span>
                        </div>
                      )}
                      {pkg.specs?.tables && (
                        <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-purple-700 border border-purple-100">
                          <span aria-hidden="true">🪑</span>
                          <span>
                            {pkg.specs.tables.count}× {pkg.specs.tables.type}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Paket İçeriği */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                        <span
                          className="w-2 h-2 bg-violet-600 rounded-full"
                          aria-hidden="true"
                        />
                        Paket İçeriği
                      </h4>
                      <ul className="space-y-3">
                        {pkg.includes.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span
                              className="mt-2 w-2 h-2 bg-green-500 rounded-full flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fiyat Bloğu */}
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                      <div className="text-center mb-3">
                        <div className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                          Günlük Kira (İstanbul)
                        </div>
                        <div className="mt-2 text-3xl font-black text-gray-900">
                          {formatTRY(packagePrices[pkg.id])}
                          <span className="text-sm text-gray-500 font-normal ml-1">
                            + KDV
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 text-center">
                        Fiyatlara teslimat, profesyonel yerleşim ve toplama
                        dahildir. İstanbul dışı organizasyonlar için özel teklif
                        isteyin.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-8 pt-0">
                    <Link
                      href={`${WHATSAPP}&package=${encodeURIComponent(
                        pkg.name
                      )}`}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="w-full inline-flex items-center justify-center font-bold px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
                      aria-label={`${pkg.name} paketi için WhatsApp üzerinden teklif al`}
                    >
                      <span
                        aria-hidden="true"
                        className="text-xl mr-2"
                      >
                        💬
                      </span>
                      <span>Bu Paket için Teklif Al</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  {
    src: "/img/sandalye/1.webp",
    alt: "Yuvarlak banket masa ve Napolyon sandalyelerle 100 kişilik davet düzeni",
  },
  {
    src: "/img/sandalye/2.webp",
    alt: "Konferans düzeninde sıralı yastıklı sandalyeler ve dikdörtgen masalar",
  },
  {
    src: "/img/sandalye/3.webp",
    alt: "Bistro masalarla kokteyl alanı - stretch kılıf ve şal ile dekoratif detaylar",
  },
  {
    src: "/img/sandalye/sandalye-masa.webp",
    alt: "Düğün organizasyonunda şık masa düzeni ve dekorasyon",
  },
  {
    src: "/img/sandalye/beyaz-deri-sandalye.webp",
    alt: "Kurumsal toplantıda konferans sandalyeleri ve masa düzeni",
  },
  {
    src: "/img/sandalye/hilton-sandalye.webp",
    alt: "Açık hava etkinliğinde dayanıklı masa sandalye kurulumu",
  },
  {
    src: "/img/sandalye/sandalye.webp",
    alt: "Kurumsal bir etkinlik için hazırlanmış sandalye düzeni",
  },
  {
    src: "/img/sandalye/sandalye-masa-kiralama-sahneva.webp",
    alt: "Düğün, bayi toplantısı ve fuar organizasyonları için masa sandalye düzeni",
  },
];

function Gallery() {
  return (
    <section
      id="galeri" className="py-20 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="galeri-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Proje{" "}
            <span className="text-violet-700">
              Galerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı masa sandalye kurulumlarından örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery
            images={GALLERY_IMAGES}
            visibleCount={8}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📸
            </span>
            <span>Tüm Projeleri Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const technicalItems = [
    {
      category: "sandalye",
      title: "Sandalye Çeşitleri",
      description:
        "Napolyon, konferans ve protokol sandalyeleri ile her ihtiyaca uygun",
      features: [
        "Napolyon (ahşap/PP)",
        "Konferans (yastıklı)",
        "Protokol sandalyeleri",
        "Stackable tasarım",
      ],
    },
    {
      category: "masa",
      title: "Masa Sistemleri",
      description: "Banket, konferans ve bistro masalar ile esnek çözümler",
      features: [
        "Ø180 banket masalar",
        "180×75 dikdörtgen",
        "Bistro masalar",
        "Hızlı kurulum",
      ],
    },
    {
      category: "ortu",
      title: "Örtü & Kılıf",
      description: "Zengin renk ve kumaş seçenekleri ile estetik çözümler",
      features: [
        "Keten masa örtüleri",
        "Tafta şallar",
        "Stretch kılıflar",
        "20+ renk seçeneği",
      ],
    },
    {
      category: "planlama",
      title: "Planlama Sistemleri",
      description: "Profesyonel oturma planı ve yerleşim hizmetleri",
      features: [
        "Oturma planı tasarımı",
        "Masa numaralandırma",
        "Yönlendirme tabelaları",
        "Alan optimizasyonu",
      ],
    },
    {
      category: "lojistik",
      title: "Lojistik & Kurulum",
      description: "Hızlı teslimat ve profesyonel kurulum hizmetleri",
      features: [
        "Aynı gün teslimat",
        "Profesyonel kurulum",
        "Yerleşim hizmeti",
        "Toplama & taşıma",
      ],
    },
    {
      category: "destek",
      title: "Teknik Destek",
      description: "7/24 teknik destek ve operasyon yönetimi",
      features: [
        "7/24 teknik destek",
        "Operasyon yönetimi",
        "Acil müdahale",
        "Profesyonel ekip",
      ],
    },
  ];

  return (
    <section
      id="teknik-altyapi"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="teknik-altyapi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="teknik-altyapi-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Teknik{" "}
            <span className="text-violet-700">
              Altyapımız
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Geniş envanter, profesyonel ekipman ve uzman ekip ile
            hizmetinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-violet-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "sandalye" && "🪑"}
                    {item.category === "masa" && "🎪"}
                    {item.category === "ortu" && "🧵"}
                    {item.category === "planlama" && "🗺️"}
                    {item.category === "lojistik" && "🚚"}
                    {item.category === "destek" && "📞"}
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
                        className="w-2 h-2 bg-gradient-to-r from-green-500 to-violet-500 rounded-full flex-shrink-0"
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

/* ================== İstatistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: "3000+", label: "Sandalye", icon: "🪑" },
    { value: "500+", label: "Masa", icon: "🎪" },
    { value: PROJECTS_COMPLETED, label: "Başarılı Proje", icon: "🏆" },
    { value: `${PROVINCES_COUNT}`, label: "İlde Hizmet", icon: "🗺️" },
  ];

  return (
    <section
      id="saha-kaniti"
      aria-label="Masa sandalye saha kanıtı: stok, proje ve hizmet sayıları"
      className="py-20 bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`masa-stat-${index}-value`}
              aria-describedby={`masa-stat-${index}-label`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <h3
                  id={`masa-stat-${index}-value`}
                  className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`masa-stat-${index}-label`}
                  className="text-violet-100 text-lg font-semibold"
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

/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <section
      id="kullanim-alanlari"
      className="py-20 bg-gradient-to-br from-gray-900 to-violet-900/95"
      aria-labelledby="kullanim-alanlari-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kullanim-alanlari-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Kullanım{" "}
            <span className="text-violet-700">
              Alanları
            </span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Masa sandalye çözümlerimizin tercih edildiği başlıca etkinlik
            türleri ve özel çözümlerimiz
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
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
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors">
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
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              💬
            </span>
            <span>Etkinliğiniz için Özel Çözüm Alın</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function Articles() {
  return (
    <section
      id="rehber"
      className="py-20 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="rehber-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="rehber-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Bilgi &{" "}
            <span className="text-violet-700">
              Profesyonel Rehber
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Masa sandalye kiralama ve etkinlik planlama hakkında uzman görüşleri
            ve teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ana Makale */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-violet-700 via-purple-700 to-violet-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-black/10"
                aria-hidden="true"
              ></div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    📚 Kapsamlı Rehber
                  </span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    ⭐ Uzman Görüşü
                  </span>
                  <span className="bg-violet-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    🎯 Pratik Çözümler
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Masa Sandalye Kiralama: Etkinlik Başarınız İçin Konfor ve
                  Estetik
                </h3>
                <p className="text-violet-100 mt-4 text-lg md:text-xl leading-relaxed">
                  En doğru ürün seçimi, profesyonel yerleşim ve estetik detaylar
                  ile etkinliklerinizde mükemmel performans
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-violet-500">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-violet-100 text-violet-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🪑
                      </span>
                      Sandalye Seçimi Stratejisi
                    </h4>
                    <p>
                      <strong className="text-gray-900">Sahneva</strong>,
                      Türkiye genelinde{" "}
                      <strong className="text-gray-900">profesyonel masa sandalye kiralama</strong>{" "}
                      hizmetleriyle kurumsal standartta çözümler sunmaktadır.
                    </p>
                    <p>
                      Etkinliğiniz ister düğün organizasyonu, ister kurumsal
                      konferans olsun; detaylı ihtiyaç analizi, ürün
                      optimizasyonu, profesyonel kurulum ve canlı operasyon
                      dahil{" "}
                      <strong className="text-gray-900">
                        anahtar teslim çözümler
                      </strong>{" "}
                      sunuyoruz.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🎪
                      </span>
                      Masa Sistemleri ve Yerleşim
                    </h4>
                    <p>
                      Davet etkinliklerinde yuvarlak banket masalar,
                      konferanslarda dikdörtgen masalar, kokteyl etkinliklerinde
                      ise bistro masalar ile her koşulda fonksiyonel ve estetik
                      çözümler sunuyoruz.
                    </p>
                    <p>
                      Ø180 yuvarlak, 180×75 dikdörtgen ve Ø60-80 bistro masa
                      seçeneklerimizle, mekan boyutuna ve etkinlik türüne göre
                      optimize edilmiş çözümler sunarak hem konfor hem de
                      estetik sorunlarını ortadan kaldırıyoruz.
                    </p>
                  </div>
                </div>

                {/* Önemli Bilgi Kutusu */}
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 rounded-r-2xl p-6 mb-8">
                  <h5 className="font-black text-violet-700 text-xl mb-4 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      💡
                    </span>
                    Teknik Seçim Stratejisi
                  </h5>
                  <p className="text-gray-700 text-lg mb-0 leading-relaxed">
                    Masa sandalye seçiminde etkinlik süresi ve konfor ihtiyacı
                    en kritik faktördür. Kısa süreli etkinlikler için Napolyon
                    sandalyeler, uzun süreli oturumlar için konferans
                    sandalyeleri öneriyoruz. Açık hava etkinliklerinde ise
                    dayanıklılık ve hava koşullarına uygunluk öncelikli
                    değerlendirilmelidir.
                  </p>
                </div>

                {/* Başarı Faktörleri Grid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span
                      className="bg-green-100 text-green-600 rounded-2xl p-3"
                      aria-hidden="true"
                    >
                      🚀
                    </span>
                    Kritik Başarı Faktörleri
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "🎯",
                        title: "Doğru Ürün Seçimi",
                        desc: "Etkinlik türüne ve süresine göre optimize edilmiş ürün seçimi",
                      },
                      {
                        icon: "📊",
                        title: "Alan Optimizasyonu",
                        desc: "Mekan boyutlarına göre doğru masa yerleşimi ve sirkülasyon alanları",
                      },
                      {
                        icon: "🔒",
                        title: "Konfor ve Ergonomi",
                        desc: "Uzun süreli oturumlar için ergonomik sandalye seçimleri",
                      },
                      {
                        icon: "🎭",
                        title: "Estetik Detaylar",
                        desc: "Örtü, kılıf ve dekorasyon ile bütünsel görünüm",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-violet-200"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                            aria-hidden="true"
                          >
                            {item.icon}
                          </span>
                          <div>
                            <h5 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-violet-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                  <h5 className="font-black text-yellow-700 text-lg mb-3 flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">
                      💎
                    </span>
                    Neden Sahneva?
                  </h5>
                  <p className="text-yellow-800 mb-0">
                    <strong>
                      {YEARS_OF_EXPERIENCE} yıllık deneyim, {PROJECTS_COMPLETED} başarılı proje ve {PROVINCES_COUNT} ilde hizmet
                    </strong>{" "}
                    ile masa sandalye kiralama konusunda güvenilir çözüm
                    ortağınız. Geniş envanter, uzman ekip ve 7/24 teknik destek
                    planıyla çalışan sandalye kiralama firması.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Yan Makaleler */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-violet-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Örtü & Kılıf Sistemleri
              </h3>
              <p className="text-violet-100 mt-2 text-lg">
                Estetik görünüm ve profesyonel sunum için doğru kumaş seçimleri
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Masa örtüsü ve kılıf seçimleri etkinliğinizin estetik
                  görünümünü doğrudan etkiler. Keten kumaşlar şıklık ve
                  doğallık, tafta kumaşlar parlaklık ve lüks, stretch kılıflar
                  ise pratiklik ve modern görünüm sunar.
                </p>
                <p>
                  20+ renk seçeneğimiz ile marka kimliğinize veya etkinlik
                  temanıza uygun renk kombinasyonları oluşturabilir, runner ve
                  şal detayları ile masalarınızı özelleştirebilirsiniz.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span
                      className="bg-purple-100 text-purple-600 rounded-xl p-2"
                      aria-hidden="true"
                    >
                      🎨
                    </span>
                    Renk ve Kumaş Seçenekleri
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Keten: Beyaz, Krem, Fildişi, Bej
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Tafta: Altın, Gümüş, Bordo, Lacivert
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Stretch: Siyah, Beyaz, Kırmızı, Mavi
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Özel renk talepleri için özel kumaş
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-violet-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Planlama & Yerleşim Stratejileri
              </h3>
              <p className="text-violet-100 mt-2 text-lg">
                Profesyonel oturma planı ve alan optimizasyonu için uzman
                ipuçları
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-violet-50 rounded-2xl p-5 border border-violet-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-violet-100 text-violet-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        💒
                      </span>
                      Düğün & Davet
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Yuvarlak masalarda 8-10 kişi ideal, dans pisti çevresinde
                      2.5m sirkülasyon, masa numaralandırma ve yönlendirme
                      sistemleri
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🏢
                      </span>
                      Konferans & Toplantı
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Sahne görüşü için tiyatro/sınıf düzeni, U/boardroom
                      toplantı masaları, acil çıkış akslarında 1.5m serbest
                      alan
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-green-100 text-green-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🥂
                      </span>
                      Kokteyl & Networking
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Bistro masalar ile mobil düzen, high-top seçenekleri,
                      yüksek trafik akışı için optimize edilmiş yerleşim
                    </p>
                  </div>
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
const FAQ_ITEMS = [
  {
    q: "Masa sandalye kiralama fiyatları neye göre belirlenir?",
    a: "Masa sandalye kiralama fiyatları; ürün tipi (Napolyon/konferans sandalyesi, banket/bistro masa), adet, örtü-kılıf seçimi, kurulum-söküm iş gücü ve İstanbul içi nakliye kalemine göre hesaplanır. Küçük etkinliklerde tek kalem, büyük organizasyonlarda paket fiyatlandırması daha avantajlıdır. Net rakam için etkinlik tarihi, kişi sayısı ve düzen tipini paylaşmanız yeterlidir.",
  },
  {
    q: "Düğün ve nişan için masa sandalye kiralama nasıl planlanır?",
    a: "Düğün ve nişan organizasyonlarında masa sandalye planlaması üç adımda netleşir: (1) Davetli sayısına göre masa adedi ve düzeni (yuvarlak banket veya dikdörtgen), (2) sandalye modeli ve örtü-kılıf renk seçimi, (3) mekânın kurulum-söküm saatleri. Bu bilgilerle hazırlanan karolaj planı sayesinde hem estetik hem de sirkülasyon doğru kurulur. İstanbul'da çalışıyoruz; etkinlik tarihini paylaşın, saha planını birlikte hazırlayalım.",
  },
  {
    q: "İstanbul'da masa sandalye kiralama teslimat ve kurulum nasıl yapılır?",
    a: "İstanbul genelinde masa sandalye kiralama sürecinde ekibimiz etkinlik öncesinde belirlenen saatte mekâna gelir, yerleşim planına göre masaları ve sandalyeleri kurar, örtü-kılıf giydirme dahil tüm düzeni tamamlar. Etkinlik bitiminde söküm ve nakliye de aynı paket kapsamında gerçekleştirilir. İstanbul içi nakliye ücrete dahildir; İstanbul dışı talepler için ayrıca fiyatlandırılır.",
  },
  {
    q: "Kurumsal etkinliklerde masa sandalye yerleşimi nasıl hazırlanır?",
    a: "Kurumsal etkinliklerde masa sandalye yerleşimi; toplantı formatına (konferans, gala, kokteyl), katılımcı sayısına, sahne ve podyum konumuna ve sirkülasyon ihtiyacına göre planlanır. Tiyatro düzeni, sınıf düzeni veya banket düzeni arasında seçim yapılır; her düzen için masa-sandalye adedi, geçiş mesafeleri ve teknik ekipman alanı önceden hesaplanır. Kurumsal etkinlikler için yerleşim planı hizmetimiz paket kapsamındadır.",
  },
  {
    q: "Aynı gün teslim mümkün mü?",
    a: "Evet, program uygunluğuna bağlı olarak İstanbul içi aynı gün teslim seçeneğimiz bulunmaktadır. Acil ihtiyaçlarınız için WhatsApp hattımızdan hemen iletişime geçebilirsiniz.",
  },
  {
    q: "Örtü ve kılıf renk seçenekleri neler?",
    a: "Keten örtülerde beyaz, krem, fildişi; tafta şallarda altın, gümüş, bordo, lacivert; stretch kılıflarda ise beyaz, siyah, kırmızı, mavi başta olmak üzere 20+ renk seçeneğimiz bulunmaktadır. Özel renk talepleriniz için özel kumaş temin edebiliriz.",
  },
  {
    q: "Kurulum ve toplama hizmeti veriyor musunuz?",
    a: "Evet, tüm paketlerimizde teslimat, profesyonel kurulum, yerleşim ve etkinlik sonrası toplama hizmetleri anahtar teslim olarak sunulmaktadır. Deneyimli ekibimiz etkinlik öncesi planlama ile en uygun yerleşimi sağlar.",
  },
];

function FAQ() {
  return (
    <section
      id="sss" className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="sss-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Sık Sorulan{" "}
            <span className="text-violet-700">
              Sorular
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Masa sandalye kiralama hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-violet-50 open:border-violet-200 border-2 border-transparent open:border"
            >
              <summary
                className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900"
              >
                <span className="pr-4">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 transition-transform duration-500 group-open:rotate-180 text-violet-600 bg-violet-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                >
                  ⌄
                </span>
              </summary>
              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-violet-500">
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
            aria-label="Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📚
            </span>
            <span className="text-lg">Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      Icon: Music,
      desc: "Profesyonel ses ve ışık sistemleri kiralama",
    },
    {
      href: "/sahne-kiralama",
      title: "Sahne Kiralama",
      Icon: Layers,
      desc: "Portatif ve modüler sahne sistemleri kiralama",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      Icon: Monitor,
      desc: "Profesyonel LED ekran ve video wall sistemleri",
    },
    {
      href: "/cadir-kiralama",
      title: "Çadır Kiralama",
      Icon: Tent,
      desc: "Profesyonel etkinlik çadırları ve tenteli alan çözümleri",
    },
  ];

  return (
    <section
      id="tamamlayici-hizmetler"
      className="py-20 bg-gradient-to-br from-gray-50 to-violet-100/30"
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="tamamlayici-hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Tamamlayıcı{" "}
            <span className="text-violet-700">
              Hizmetlerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Masa sandalye kurulumunuzu tamamlayacak diğer profesyonel etkinlik
            çözümlerimiz
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-200 transition-all duration-500 hover:scale-105 text-center focus-ring h-full flex flex-col"
              >
                <div
                  className="mb-6 text-violet-600 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <service.Icon size={36} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <div className="sr-only">
          <p>
            Bu bölümde masa sandalye kurulumunuzu tamamlayacak diğer
            hizmetlerimiz bulunmaktadır. Her bir hizmet kartına tıklayarak
            ilgili sayfaya gidebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section
      id="cta" className="py-20 bg-white" aria-labelledby="cta-baslik">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-violet-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
          ></div>
          <div className="relative z-10">
            <h2
              id="cta-baslik"
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            >
              Profesyonel Masa Sandalye Çözümlerine Hazır Mısınız?
            </h2>
            <p className="text-violet-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Etkinliğiniz için en uygun masa sandalye sistemlerini sunalım.
              Ücretsiz keşif, profesyonel danışmanlık ve rekabetçi fiyat
              garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  📞
                </span>
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  💬
                </span>
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>
            <div className="mt-8 text-violet-200 text-lg">
              📍 {PROVINCES_COUNT} ilde hizmet • ⏰ 7/24 teknik destek • ⭐ {YEARS_OF_EXPERIENCE} yıl deneyim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
/* Burada next/script yerine düz <script> kullanıyoruz.
   Böylece bu sayfa için ekstra client-side JS yükü oluşmuyor. */
function TableChairJsonLd() {
  const pageUrl = `${ORIGIN}/masa-sandalye-kiralama`;
  const pageDescription = metadata.description;
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  const { service: serviceSchema, products } = buildServiceProductSchema({
    slug: "/masa-sandalye-kiralama",
    locale: "tr-TR",
  });

  // ❗ Burada sadece aggregateRating'i çıkardık, diğer her şey aynı.
  const baseService = {
    "@type": "Service",
    name: "Masa Sandalye Kiralama",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Türkiye" },
  };

  const serviceNode = serviceSchema
    ? {
        ...serviceSchema,
        ...baseService,
        provider,
        url: pageUrl,
        mainEntityOfPage: { "@id": webPageId },
      }
    : {
        ...baseService,
        "@id": `${pageUrl}#service`,
        url: pageUrl,
        mainEntityOfPage: { "@id": webPageId },
      };

  const serviceId = serviceNode["@id"] ?? `${pageUrl}#service`;
  serviceNode["@id"] = serviceId;

  const productNodes = products ?? [];
  const faqSchema = buildFaqSchema(FAQ_ITEMS, {
    id: `${pageUrl}#faq`,
    pageId: webPageId,
    serviceId,
    inLanguage: "tr-TR",
  });
  const gallerySchema = buildImageGallerySchema({
    images: GALLERY_IMAGES,
    origin: ORIGIN,
    pageUrl,
    serviceId,
    webPageId,
    name: "Masa sandalye kiralama galeri görselleri",
  });

  serviceNode.image = gallerySchema.imageUrls;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "WebPage",
        "@id": webPageId,
        name: "Masa Sandalye Kiralama | Profesyonel Çözümler | Sahneva",
        description: pageDescription,
        url: pageUrl,
        inLanguage: "tr-TR",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": serviceId },
        publisher: provider,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${ORIGIN}${HERO.src}`,
        },
        mainEntity: { "@id": serviceId },
        image: [`${ORIGIN}${HERO.src}`, ...gallerySchema.imageUrls],
        hasPart: [
          ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
          ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
        ],
      },
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      ...productNodes,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
      <JsonLdScript
        id="ld-json-masa-sandalye"
        data={jsonLd}
      />
    );
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/masa-sandalye-kiralama`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Masa Sandalye Kiralama", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <TableChairJsonLd />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <Technical />
      <StatsBand />
      <UseCases />
      <Articles />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/kurumsal-etkinlik-yonetimi",
            label: "Kurumsal Etkinlik Yönetimi Rehberi",
          },
          {
            href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
            label: "2026 Kurumsal Etkinlik Planlama Rehberi",
          },
        ]}
      />
      <GlossaryTermLinks
        servicePath="/masa-sandalye-kiralama"
        title="Davet ve toplantı düzeninde geçen terimler"
        description="Kapasite hesabı, gala düzeni ve karşılama alanı planlaması masa-sandalye ihtiyacını doğrudan etkiler; terimler sözlükte açıklanıyor."
      />
      <RegionalCityLinks service="masa sandalye kiralama" />
      <PaymentOptionsNote />
      <CTA />
    </>
  );
}
