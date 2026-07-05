// app/(tr)/podyum-kurulum-fiyatlari/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLd from "@/components/seo/JsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";

export const revalidate = 86400;

/* ================== URLS ================== */
const slug = "/podyum-kurulum-fiyatlari";
const url = `${BASE_SITE_URL}${slug}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-06-22T00:00:00+03:00";
const PRICE_VALID_UNTIL = "2027-12-31";

/* ================== PRICES (2026) ================== */
const UNIT_PRICES = {
  platform_m2_week: 270, // TL
  carpet_m2_week: 130, // TL
  skirt_ml_week: 100, // TL (metre)
  ist_nakliye: 9000, // TL (İstanbul içi sabit)
  currency: "TRY",
};

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const PRICE_GALLERY_IMAGES = [
  {
    src: "/img/podyum/6.webp",
    alt: "Kurulum sırasında podyum modüllerinin hizalanması ve yüzey hazırlığı",
  },
  {
    src: "/img/podyum/7.webp",
    alt: "Tamamlanmış podyum uygulamasında kenar bitişi ve yüzey kalitesi",
  },
  {
    src: "/img/podyum/8.webp",
    alt: "Etkinlik alanında tamamlanan podyumun kullanım anından bir görünüm",
  },
];

/* ================== SEO METADATA ================== */
export const metadata = {
  title: "Podyum Kurulum Fiyatları 2026 | m² Podyum Maliyeti",
  description:
    "Podyum kurulum fiyatları; metrekare, yükseklik, halı kaplama, kumaş giydirme, nakliye ve etkinlik süresine göre değişir. Sahneva'dan hızlı fiyat alın.",
  alternates: buildLanguageAlternates({
    tr: slug,
    en: "/en/podium-rental-prices",
    xDefault: "/en/podium-rental-prices",
  }),
  openGraph: {
    type: "website",
    url,
    title: "Podyum Kurulum Fiyatları 2026 | m² Podyum Maliyeti | Sahneva",
    description:
      "m² bazlı podyum kurulum maliyeti, halı kaplama, kumaş giydirme, nakliye ve söküm kalemleri. 2026 güncel fiyat rehberi ve hızlı teklif.",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Podyum kurulum fiyatları 2026 – m² bazlı maliyet hesaplama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podyum Kurulum Fiyatları 2026 | m² Podyum Maliyeti",
    description:
      "m² bazlı podyum kurulum maliyeti, halı kaplama, kumaş giydirme, nakliye ve söküm kalemleri. 2026 güncel fiyat rehberi.",
    images: [`${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`],
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

/* ================== FAQ (Fiyat / Maliyet Intent) ================== */
const FAQ = [
  {
    q: "Podyum kurulum fiyatları 2026 yılında nasıl hesaplanır?",
    a: "Podyum kurulum maliyeti; platform alanı (m²), halı kaplama (m²), skört/kumaş giydirme (metre) ve İstanbul içi nakliye (kurulum+söküm dahil) kalemleri üzerinden hesaplanır.",
  },
  {
    q: "Podyum m² maliyeti ne kadar?",
    a: `2026 yılı için modüler platform kurulum maliyeti ${UNIT_PRICES.platform_m2_week} TL/m², halı kaplama ${UNIT_PRICES.carpet_m2_week} TL/m² başlangıç fiyatıyla uygulanmaktadır. Zemin durumu, yükseklik ve saha koşullarına göre netleşir.`,
  },
  {
    q: "Kurulum, nakliye ve söküm fiyata dahil mi?",
    a: `Evet. İstanbul içi sabit nakliye bedeli ${UNIT_PRICES.ist_nakliye} TL'dir ve kurulum ile söküm bu bedele dahildir. Şehir dışı projelerde lojistik ayrıca planlanır.`,
  },
  {
    q: "Halı kaplama ve kumaş giydirme ekstra maliyet oluşturur mu?",
    a: "Halı kaplama m² başına, skört/kumaş giydirme ise metre başına ayrıca hesaplanır. Fiyat tablosundaki birim değerler referans başlangıç maliyetleridir.",
  },
  {
    q: "Podyum yüksekliği kurulum fiyatını nasıl etkiler?",
    a: "Yükseklik arttıkça merdiven, korkuluk ve dengeleme ihtiyacı da artar. Bu bileşenler toplam kurulum maliyetini doğrudan etkiler.",
  },
  {
    q: "Etkinlik türüne göre podyum kurulum maliyeti farklı mı?",
    a: "Konserlerde ses/ışık/LED teknik entegrasyonu, defilelerde yoğun trafik ve runway ölçüsü, kurumsal etkinliklerde ise saha erişim detayları toplam maliyeti etkiler.",
  },
  {
    q: "Hızlı teklif için hangi bilgiler gerekli?",
    a: "Tarih, il/ilçe, alan (m²), yükseklik, halı isteği, skört metre ihtiyacı ve mekân erişim bilgisi (kat/merdiven/yük asansörü) yeterlidir.",
  },
  {
    q: "Fiyatlar KDV dahil mi?",
    a: "Tekliflerde KDV durumu ayrıca belirtilir. Kurumsal işlerde ödeme/sözleşme koşullarına göre netleşir.",
  },
];

/* ================== HELPERS ================== */
function tl(n) {
  try {
    return new Intl.NumberFormat("tr-TR").format(n);
  } catch {
    return String(n);
  }
}

/* ================== JSON-LD ================== */
function buildJsonLd() {
  const serviceId = `${url}#service`;
  const webPageId = `${url}#webpage`;
  const gallerySchema = buildImageGallerySchema({
    images: PRICE_GALLERY_IMAGES,
    origin: BASE_SITE_URL,
    pageUrl: url,
    serviceId,
    webPageId,
    name: "Podyum kurulum fiyatları galeri görselleri",
  });

  const exampleLow =
    12 * UNIT_PRICES.platform_m2_week +
    12 * UNIT_PRICES.carpet_m2_week +
    14 * UNIT_PRICES.skirt_ml_week +
    UNIT_PRICES.ist_nakliye;

  const exampleHigh =
    48 * UNIT_PRICES.platform_m2_week +
    48 * UNIT_PRICES.carpet_m2_week +
    28 * UNIT_PRICES.skirt_ml_week +
    UNIT_PRICES.ist_nakliye;

  const aggregateOffer = {
    "@type": "AggregateOffer",
    priceCurrency: UNIT_PRICES.currency,
    lowPrice: String(exampleLow),
    highPrice: String(exampleHigh),
    offerCount: "4",
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: "https://schema.org/InStock",
    url,
  };

  const mainService = {
    "@type": "Service",
    "@id": serviceId,
    name: "Podyum Kurulum Fiyatları (m² Bazlı) — 2026",
    url,
    image: gallerySchema.imageUrls,
    mainEntityOfPage: { "@id": webPageId },
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "AdministrativeArea", name: "İstanbul" },
    ],
    serviceType: "Podyum kurulum fiyatları ve maliyet hesaplama (platform/halı/skört/nakliye)",
    offers: [
      {
        "@type": "Offer",
        name: "Platform (Modüler Podyum) Kurulum — 2026",
        price: String(UNIT_PRICES.platform_m2_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Halı Kaplama Maliyeti — 2026",
        price: String(UNIT_PRICES.carpet_m2_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Skört / Kumaş Giydirme Maliyeti — 2026",
        price: String(UNIT_PRICES.skirt_ml_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "İstanbul İçi Nakliye ve Söküm Bedeli — 2026",
        price: String(UNIT_PRICES.ist_nakliye),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    mainEntity: FAQ.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };

  const howTo = {
    "@type": "HowTo",
    name: "Podyum kurulum fiyat teklifi nasıl alınır?",
    description:
      "Hızlı teklif için gerekli bilgileri paylaşın, ölçü ve saha planına göre net kurulum maliyetini çıkaralım.",
    step: [
      {
        "@type": "HowToStep",
        name: "Ölçü ve tarih bilgisini paylaşın",
        text: "Etkinlik tarihi, il/ilçe, alan (m²) ve yükseklik bilgisini iletin.",
      },
      {
        "@type": "HowToStep",
        name: "Kaplama opsiyonlarını netleştirelim",
        text: "Halı, skört/kumaş giydirme metre ihtiyacı ve mekân erişimini belirtin.",
      },
      {
        "@type": "HowToStep",
        name: "Net teklif ve saha planı",
        text: "Birim fiyatlara göre kalem kalem toplam maliyet + saha planı ile teklif paylaşılır.",
      },
    ],
  };

  const webpage = {
    "@type": "WebPage",
    "@id": webPageId,
    url,
    name: "Podyum Kurulum Fiyatları 2026",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`,
    },
    image: [
      `${BASE_SITE_URL}/img/podyum/podyum-kiralama-fiyatlari-hero.webp`,
      ...gallerySchema.imageUrls,
    ],
    mainEntity: { "@id": serviceId },
    hasPart: [
      ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
      ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      webpage,
      mainService,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      aggregateOffer,
      faqPage,
      howTo,
    ],
  };
}

export default function Page() {
  const sample = {
    m2: 20,
    skirt: 20,
    platform: 20 * UNIT_PRICES.platform_m2_week,
    carpet: 20 * UNIT_PRICES.carpet_m2_week,
    skirtCost: 20 * UNIT_PRICES.skirt_ml_week,
    nakliye: UNIT_PRICES.ist_nakliye,
  };
  const sampleTotal =
    sample.platform + sample.carpet + sample.skirtCost + sample.nakliye;

  const ranges = [
    { label: "Mini (12 m²)", m2: 12, skirt: 14 },
    { label: "Orta (24 m²)", m2: 24, skirt: 20 },
    { label: "Pro (48 m²)", m2: 48, skirt: 28 },
  ].map((r) => {
    const platform = r.m2 * UNIT_PRICES.platform_m2_week;
    const carpet = r.m2 * UNIT_PRICES.carpet_m2_week;
    const skirt = r.skirt * UNIT_PRICES.skirt_ml_week;
    const total = platform + carpet + skirt + UNIT_PRICES.ist_nakliye;
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.1);
    return { ...r, platform, carpet, skirt, total, low, high };
  });

  const jsonLd = buildJsonLd();

  const districtsAvrupa = [
    "Beşiktaş", "Şişli", "Beyoğlu", "Sarıyer", "Kağıthane",
    "Bakırköy", "Bahçelievler", "Başakşehir", "Esenyurt", "Beylikdüzü",
    "Avcılar", "Zeytinburnu",
  ];

  const districtsAnadolu = [
    "Kadıköy", "Üsküdar", "Ataşehir", "Maltepe", "Kartal",
    "Pendik", "Tuzla", "Sancaktepe", "Çekmeköy", "Ümraniye",
    "Beykoz", "Şile",
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: `${BASE_SITE_URL}/` },
          { name: "Podyum Kiralama", url: `${BASE_SITE_URL}/podyum-kiralama` },
          { name: "Podyum Kurulum Fiyatları", url },
        ]}
      />

      <JsonLd id="ld-json-podyum-kurulum-fiyat" data={jsonLd} />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative bg-slate-950 text-white pt-20 pb-14 md:pb-16 lg:pt-24">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/img/podyum/podyum-kiralama-fiyatlari-hero.webp"
              alt="Podyum kurulum maliyeti ve modüler podyum kurulum fiyat tablosu"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="100vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/45 via-purple-900/20 to-slate-950/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-purple-900/25" />
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-2 mb-5">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.2)]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-extrabold text-white">
                    2026 Güncel Liste • m² Bazlı Maliyet Hesaplama
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
                  Podyum Kurulum <span className="text-blue-200">Fiyatları</span>{" "}
                  2026
                </h1>

                <p className="text-base md:text-xl text-white/85 leading-relaxed mb-4 max-w-3xl mx-auto">
                  <b>Podyum kurulum fiyatları</b>; metrekare, yükseklik, halı kaplama,
                  kumaş giydirme, nakliye ve söküm kalemlerine göre değişir.
                  Bu sayfada <b>m² podyum maliyeti</b>, etkinlik türüne göre bütçe
                  aralıkları ve örnek hesaplamalar yer alır.
                </p>

                <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-5">
                  Platform (m²) · Halı kaplama (m²) · Kumaş/skört (metre) ·{" "}
                  <b>İstanbul içi nakliye ve söküm bedeli</b>
                </p>

                <p className="mx-auto mb-6 max-w-3xl text-sm md:text-base text-white/75">
                  Podyum kiralama hizmeti hakkında genel bilgi almak için{" "}
                  <Link className="font-semibold text-white underline underline-offset-4" href="/podyum-kiralama">
                    podyum kiralama
                  </Link>{" "}
                  ana sayfasını inceleyebilirsiniz. Bu sayfada ise podyum kurulum
                  fiyatları, m² maliyetleri ve fiyatı etkileyen unsurları açıklıyoruz.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href="/podyum-kiralama"
                    className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 hover:bg-white/30 backdrop-blur-xl transition shadow-lg"
                  >
                    <span className="text-xl mr-2">🎯</span> Podyum Kiralama
                  </Link>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+podyum+kurulum+fiyat+teklifi+istiyorum.%20Tarih%3A%20%5Bgg.aa.yyyy%5D%20Alan%3A%20%5Bm2%5D%20Ilce%3A%20%5Bilce%5D"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
                  >
                    <span className="text-xl mr-2">💬</span> WhatsApp ile Teklif
                  </a>
                </div>

                <p className="mt-6 text-sm text-white/70">
                  Fiyatlar {PRICE_VALID_UNTIL} tarihine kadar güncellenebilir;
                  sezon yoğunluğuna göre teklif şartları değişebilir.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
        </section>

        {/* PRICING TABLE */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Podyum Fiyatları <span className="text-blue-700">Neye Göre</span>{" "}
                Değişir?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Podyum kurulum ücreti; platform alanı, halı/kumaş kaplama, merdiven
                ve nakliye gibi kalemlerin toplamından oluşur. Aşağıdaki tablo
                2026 yılı referans başlangıç birim maliyetlerini göstermektedir.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0">
                  <caption className="sr-only">
                    2026 podyum kurulum birim fiyatları: platform m² maliyeti, halı kaplama,
                    skört/kumaş giydirme ve İstanbul içi nakliye (kurulum+söküm dahil).
                  </caption>
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Maliyet Kalemi
                      </th>
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Birim
                      </th>
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Fiyat
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-gray-700">
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Platform (Modüler Podyum) Kurulum
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">
                        m² / hafta
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.platform_m2_week)} TL
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Halı Kaplama Maliyeti
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">
                        m² / hafta
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.carpet_m2_week)} TL
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Kumaş Giydirme / Skört (Etek Kaplama)
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">
                        metre / hafta
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.skirt_ml_week)} TL
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        Nakliye ve Söküm Bedeli (İstanbul İçi Sabit)
                      </td>
                      <td className="px-6 py-4">sabit</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.ist_nakliye)} TL
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-500 text-center">
              Not: Fiyatlar referans başlangıç değerleridir. KDV ve saha koşulları
              (erişim, saat, zemin) teklifte netleşir.
            </p>

            {/* M2 MALIYET HESAPLAMA */}
            <div className="mt-10 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
                m² Podyum Kurulum Maliyeti Nasıl Hesaplanır?
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                Toplam podyum kurulum ücreti; platform m² × birim fiyat + halı m² × birim
                fiyat + kumaş/skört metre × birim fiyat + nakliye ve söküm bedeli
                formülüyle hesaplanır. Aşağıdaki örnek hesap ve aralık tablosu bu formülü
                somutlaştırır.
              </p>
            </div>

            {/* FACTORS + M2 RANGES */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  Kurulum, Nakliye ve Söküm Fiyata Dahil mi?
                </h2>
                <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
                  <li>• İstanbul içi sabit nakliye bedeli kurulum ve söküm dahildir</li>
                  <li>• Zemin durumu (düz/bozuk/eğimli) ve dengeleme ihtiyacı</li>
                  <li>• Saha penceresi (gece çalışma, kısa load-in, aynı gün söküm)</li>
                  <li>• Mekân erişimi (kat, merdiven, yük asansörü, uzak taşıma)</li>
                  <li>• Teknik entegrasyon (ses/ışık/LED ile birlikte çalışma)</li>
                  <li>• Şehir dışı projeler için lojistik ayrıca planlanır</li>
                  <li>• Sezon yoğunluğu ve ekip/araç planlaması</li>
                </ul>
                <p className="mt-5 text-base text-gray-600">
                  Net kurulum maliyeti için tarih + ilçe + m² + yükseklik bilgisini
                  paylaşın; kalem kalem teklif çıkaralım.
                </p>
              </div>

              {/* M2 RANGES */}
              <div className="rounded-3xl border-2 border-blue-100 bg-blue-50/60 p-8 shadow-lg">
                <h2 className="text-3xl font-black text-gray-900 mb-4">
                  m²'ye Göre Referans Kurulum Maliyeti
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Aşağıdaki aralıklar; İstanbul içi nakliye (kurulum+söküm dahil),
                  halı + kumaş giydirme dahil örnek senaryolardır.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full border-separate border-spacing-0 bg-white rounded-2xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="border-b border-gray-200 px-5 py-4 text-base font-bold text-gray-900">
                          Paket
                        </th>
                        <th className="border-b border-gray-200 px-5 py-4 text-base font-bold text-gray-900">
                          Alan (m²)
                        </th>
                        <th className="border-b border-gray-200 px-5 py-4 text-base font-bold text-gray-900">
                          Maliyet Aralığı
                          <span className="ml-2 whitespace-nowrap rounded-full bg-blue-100 px-2 py-1 text-xs font-extrabold text-blue-800">
                            Haftalık
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-base text-gray-700">
                      {ranges.map((r) => (
                        <tr key={r.label}>
                          <td className="border-b border-gray-100 px-5 py-4 font-semibold text-gray-900">
                            {r.label}
                          </td>
                          <td className="border-b border-gray-100 px-5 py-4">
                            {r.m2}
                          </td>
                          <td className="border-b border-gray-100 px-5 py-4">
                            <span className="font-semibold text-gray-900">
                              {tl(r.low)} – {tl(r.high)} TL
                            </span>
                            <span className="ml-2 whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-xs font-extrabold text-blue-700">
                              / Haftalık
                            </span>
                            <span className="text-gray-500"> (referans)</span>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td className="px-5 py-4 font-semibold text-gray-900">
                          Örnek (20 m²)
                        </td>
                        <td className="px-5 py-4">20</td>
                        <td className="px-5 py-4">
                          <span className="font-semibold text-gray-900">
                            {tl(sampleTotal)} TL
                          </span>{" "}
                          <span className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-1 text-xs font-extrabold text-blue-700">
                            / Haftalık
                          </span>{" "}
                          <span className="text-gray-500">
                            (KDV ve saha koşulları hariç)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-5 text-base text-gray-600">
                  Net kurulum maliyeti için tarih + ilçe + m² + yükseklik + halı/skört
                  bilgisini gönderin.
                </p>
              </div>
            </div>

            <figure className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/img/podyum/6.webp"
                alt="Kurulum sırasında podyum modüllerinin hizalanması ve yüzey hazırlığı"
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[380px] object-cover"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                Saha hazırlığı ve modüler podyum kurulumu için hizalama adımı.
              </figcaption>
            </figure>

            {/* HALI KUMAS MERDIVEN */}
            <div className="mt-14 rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Halı, Kumaş ve Merdiven Ekstra Maliyetleri
              </h2>
              <div className="grid gap-6 lg:grid-cols-3 text-lg text-gray-700 leading-relaxed">
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Halı kaplama maliyeti</p>
                  <p>
                    Halı kaplama m² başına ayrıca hesaplanır. Renk, yoğunluk ve
                    özel kesim gereksinimleri birim maliyeti etkileyebilir.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Kumaş giydirme / skört</p>
                  <p>
                    Podyum kenarlarını kapatan kumaş giydirme (skört) metre başına
                    hesaplanır. Defile ve törenler için görsel bütünlük sağlar.
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <p className="font-bold text-gray-900 mb-2">Merdiven ve korkuluk</p>
                  <p>
                    Yüksekliğe bağlı olarak merdiven, rampa ve korkuluk ihtiyacı
                    doğar. Bu bileşenler toplam kurulum maliyetine eklenir.
                  </p>
                </div>
              </div>
            </div>

            <figure className="mt-10 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/img/podyum/7.webp"
                alt="Tamamlanmış podyum uygulamasında kenar bitişi ve yüzey kalitesi"
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[380px] object-cover"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                Bitiş detaylarında yüzey kalitesi ve kenar güvenliği örneği.
              </figcaption>
            </figure>

            {/* ISTANBUL DISTRICTS */}
            <div className="mt-14 rounded-3xl border-2 border-gray-100 bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                İstanbul'da Podyum Kurulum Fiyatları
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                İstanbul genelinde podyum kurulum maliyeti; nakliye ve saha planı
                mekân erişimine ve saat penceresine göre oluşturulur.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    Avrupa Yakası
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {districtsAvrupa.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-800"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    Anadolu Yakası
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {districtsAnadolu.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-800"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-6 text-base text-gray-600">
                Şehir dışı işler için lojistik plan ayrıca yapılır.
              </p>
            </div>

            {/* SAMPLE CALC */}
            <div className="mt-14 rounded-3xl border-2 border-blue-100 bg-blue-50/60 p-6 md:p-8">
              <p className="text-lg font-bold text-gray-900">
                Örnek kurulum maliyeti hesabı (referans)
              </p>
              <p className="mt-2 text-base text-gray-700">
                {sample.m2} m² platform + {sample.m2} m² halı kaplama + {sample.skirt} m
                kumaş giydirme + İstanbul içi nakliye ve söküm bedeli
              </p>
              <div className="mt-5 grid gap-4 text-base text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Platform: <b>{tl(sample.platform)} TL</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Halı: <b>{tl(sample.carpet)} TL</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Kumaş/Skört: <b>{tl(sample.skirtCost)} TL</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Nakliye+Söküm: <b>{tl(sample.nakliye)} TL</b>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-900">
                Toplam yaklaşık kurulum maliyeti: <b>{tl(sampleTotal)} TL</b>
                <span className="text-gray-500">
                  {" "}
                  (KDV ve saha koşulları hariç)
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Etkinlik Türüne <span className="text-blue-700">Göre</span> Podyum Maliyetleri
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Etkinlik türü, trafik yoğunluğu ve teknik entegrasyon podyum kurulum
                maliyetini doğrudan etkiler.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  Defile için sahne podyum kurulum fiyatı
                </h3>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                  Runway ölçüsü, yoğun trafik ve zaman planı nedeniyle maliyet
                  farklılaşabilir. Kumaş giydirme ve halı kaplama genellikle zorunludur.
                </p>
                <Link
                  href="/defile-podyum-kiralama"
                  className="mt-6 inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-900 hover:border-blue-200 hover:text-blue-700 transition"
                >
                  Defile Podyumu Sayfası →
                </Link>
              </div>

              <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  Konser için sahne podyum kurulum fiyatı
                </h3>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                  Truss/ışık/ses entegrasyonu ve load-in/out saatleri kurulum
                  maliyetini etkileyebilir.
                </p>
                <Link
                  href="/konser-icin-podyum-kiralama"
                  className="mt-6 inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl border-2 border-gray-200 text-gray-900 hover:border-blue-200 hover:text-blue-700 transition"
                >
                  Konser Podyumu Sayfası →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <figure className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
              <Image
                src="/img/podyum/8.webp"
                alt="Etkinlik alanında tamamlanan podyumun kullanım anından bir görünüm"
                width={1600}
                height={1000}
                className="w-full h-[280px] md:h-[420px] object-cover"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-sm text-gray-600 bg-gray-50">
                Etkinlik kullanım senaryosunda podyum görünümü.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Sık Sorulan <span className="text-blue-700">Sorular</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Podyum kurulum maliyeti ve teklif süreci hakkında en çok sorulan sorular.
              </p>
            </div>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900">
                    <span className="pr-4">{item.q}</span>
                    <span className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                      ⌄
                    </span>
                  </summary>
                  <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                  Podyum Kiralama Hizmeti İçin Hızlı Teklif Alın
                </h2>
                <p className="text-blue-100 text-xl mb-4 max-w-3xl mx-auto leading-relaxed">
                  Tarih + ilçe + m² + yükseklik + halı/kumaş bilgilerini iletin,
                  24 saat içinde net podyum kurulum maliyeti ve saha planıyla dönüş yapalım.
                </p>
                <p className="text-blue-200 text-base mb-8 max-w-2xl mx-auto">
                  Podyum kurulum fiyatları ve m² maliyetleri hakkında bilgi almak için
                  bu sayfayı inceliyorsunuz.{" "}
                  <Link href="/podyum-kiralama" className="font-bold text-white underline underline-offset-4">
                    Podyum kiralama hizmeti
                  </Link>{" "}
                  hakkında genel bilgi için ana sayfamızı ziyaret edin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+podyum+kurulum+fiyat+teklifi+istiyorum.%20Tarih%3A%20%5Bgg.aa.yyyy%5D%20Alan%3A%20%5Bm2%5D%20Yukseklik%3A%20%5Bcm%5D%20Ilce%3A%20%5Bilce%5D%20Hali%3A%20%5Bevet%2Fhayir%5D%20Skort%3A%20%5Bmetre%5D"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
                  >
                    <span className="text-xl mr-3">💬</span> WhatsApp'tan Yaz
                  </a>

                  <Link
                    href="/podyum-kiralama"
                    className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
                  >
                    <span className="text-xl mr-3">🎯</span> Podyum Kiralama Hizmeti
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
