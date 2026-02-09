import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

/* ================== URLS ================== */
const slug = "/podyum-kiralama-fiyatlari";
const url = `${BASE_SITE_URL}${slug}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-02-09T00:00:00+03:00"; // bu sayfa yeni: yayın tarihi bugünün tarihi mantıklı
const PRICE_VALID_UNTIL = "2027-12-31";

/* ================== PRICES (2026) ================== */
const UNIT_PRICES = {
  platform_m2_week: 270, // TL
  carpet_m2_week: 130, // TL
  skirt_ml_week: 100, // TL (metre)
  ist_installation: 9000, // TL
  currency: "TRY",
};

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== SEO METADATA ================== */
export const metadata = {
  title: "Podyum Kiralama Fiyatları 2026 | m² Bazlı Güncel Liste | Sahneva",
  description:
    "2026 güncel podyum kiralama fiyatları: m² bazlı hesaplama, halı, skört ve İstanbul kurulum maliyetleri. Defile/konser için teklif alın.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Podyum Kiralama Fiyatları 2026 | Sahneva",
    description:
      "m² bazlı güncel fiyatlar, hesaplama örnekleri ve hızlı teklif. Defile/konser/düğün için podyum fiyat rehberi.",
    images: [{ url: `${BASE_SITE_URL}/img/podyum/hero.webp` }],
  },
};

/* ================== FAQ ================== */
const FAQ = [
  {
    q: "Podyum kiralama fiyatları neye göre değişir?",
    a: "Ana belirleyiciler m² (alan), yükseklik, zemin durumu, halı/kaplama, skört, kurulum-nakliye ve etkinliğin süresidir. Defile ve konser gibi yüksek trafik alan işlerde güvenlik ve taşıma kapasitesi standartları da maliyeti etkiler.",
  },
  {
    q: "Kısa süreli podyum kiralama mümkün mü?",
    a: "Evet. Günlük/haftalık kiralama yapılabilir. Kısa süreli işlerde kurulum-söküm ve lojistik kalemleri toplam maliyette daha belirgin hale gelir.",
  },
  {
    q: "İstanbul kurulum fiyatı sabit mi?",
    a: "İstanbul içi standart kurulum/söküm için başlangıç fiyatı aşağıdaki tabloda verilmiştir. Mekân erişimi (yük asansörü, merdiven, uzak mesafe taşıma vb.) ve keşif notlarına göre güncellenebilir.",
  },
  {
    q: "Hızlı teklif almak için hangi bilgiler gerekli?",
    a: "Tarih, il/ilçe, podyum ölçüsü (m²), yükseklik, halı/kaplama isteği, skört metre ihtiyacı ve mekânın kurulum şartları (zemin, giriş-çıkış, saat aralığı) yeterlidir.",
  },
  {
    q: "Fiyatlar KDV dahil mi?",
    a: "Tekliflerde KDV durumu ayrıca belirtilir. Kurumsal işlerde sözleşme/ödeme koşullarına göre netleştirilir.",
  },
  {
    q: "Defile ve konser podyumu fiyatları farklı mı?",
    a: "Genellikle evet. Defile ve konserlerde yük dağılımı, trafik yoğunluğu, güvenlik standardı, kablo/teknik entegrasyon ve zaman kısıtları artabildiği için bütçe farklılaşabilir.",
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
  const nowIso = new Date().toISOString();

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: BASE_SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Podyum Kiralama",
        item: `${BASE_SITE_URL}/podyum-kiralama`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Podyum Kiralama Fiyatları",
        item: url,
      },
    ],
  };

  const aggregateOffer = {
    "@type": "AggregateOffer",
    priceCurrency: UNIT_PRICES.currency,
    lowPrice: String(UNIT_PRICES.platform_m2_week),
    highPrice: String(
      UNIT_PRICES.platform_m2_week +
        UNIT_PRICES.carpet_m2_week +
        UNIT_PRICES.skirt_ml_week
    ),
    priceValidUntil: PRICE_VALID_UNTIL,
    availability: "https://schema.org/InStock",
    url,
  };

  const mainService = {
    "@type": "Service",
    name: "Podyum Kiralama Fiyatları (m² Bazlı)",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "İstanbul",
    },
    serviceType: "Podyum kiralama, kurulum ve söküm",
    offers: [
      {
        "@type": "Offer",
        name: "Platform (Podyum) Kiralama",
        price: String(UNIT_PRICES.platform_m2_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Halı Kaplama",
        price: String(UNIT_PRICES.carpet_m2_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "Skört (Etek Kaplama)",
        price: String(UNIT_PRICES.skirt_ml_week),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: "İstanbul Kurulum / Söküm",
        price: String(UNIT_PRICES.ist_installation),
        priceCurrency: UNIT_PRICES.currency,
        priceValidUntil: PRICE_VALID_UNTIL,
        availability: "https://schema.org/InStock",
        url,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "38",
    },
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
    name: "Podyum kiralama fiyat teklifi nasıl alınır?",
    description:
      "Hızlı teklif için gerekli bilgileri paylaşın, keşif ve planlamayla net bütçeyi çıkaralım.",
    step: [
      {
        "@type": "HowToStep",
        name: "Ölçü ve tarih bilgisini paylaşın",
        text: "Etkinlik tarihi, il/ilçe, podyum alanı (m²) ve yükseklik bilgisini iletin.",
      },
      {
        "@type": "HowToStep",
        name: "Opsiyonları netleştirelim",
        text: "Halı kaplama, skört metre ihtiyacı, merdiven/asansör gibi kurulum koşullarını belirleyin.",
      },
      {
        "@type": "HowToStep",
        name: "Teklif ve kurulum planı",
        text: "Net bütçe + kurulum-söküm saat planı + ekipman listesi ile teklif tarafınıza iletilir.",
      },
    ],
  };

  const webpage = {
    "@type": "WebPage",
    "@id": url,
    url,
    name: "Podyum Kiralama Fiyatları 2026",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    datePublished: PUBLISH_DATE,
    dateModified: nowIso,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${BASE_SITE_URL}/img/podyum/hero.webp`,
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, breadcrumb, mainService, aggregateOffer, faqPage, howTo],
  };
}

export default function Page() {
  // Örnek hesaplama (20 m² + halı + 20 ml skört + İstanbul kurulum)
  const sample = {
    m2: 20,
    skirt: 20,
    platform: 20 * UNIT_PRICES.platform_m2_week,
    carpet: 20 * UNIT_PRICES.carpet_m2_week,
    skirtCost: 20 * UNIT_PRICES.skirt_ml_week,
    install: UNIT_PRICES.ist_installation,
  };
  const sampleTotal =
    sample.platform + sample.carpet + sample.skirtCost + sample.install;

  const jsonLd = buildJsonLd();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Podyum Kiralama", url: "/podyum-kiralama" },
          { name: "Podyum Kiralama Fiyatları", url: "/podyum-kiralama-fiyatlari" },
        ]}
      />

      <Script
        id="ld-json-podyum-fiyat"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-white">
        {/* HERO */}
        <section className="relative bg-slate-950 text-white pt-20 pb-14 md:pb-16 lg:pt-24">
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/img/podyum/hero.webp"
              alt="Profesyonel podyum kurulumu"
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
                    2026 Güncel Liste • m² Bazlı Hesaplama
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
                  Podyum Kiralama <span className="text-blue-200">Fiyatları</span> 2026
                </h1>

                <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-4">
                  Podyum kiralama maliyeti; alan (m²), yükseklik, halı/kaplama, skört,
                  kurulum ve lojistik kalemlerine göre hesaplanır.
                </p>

                <p className="text-base md:text-xl text-white/75 leading-relaxed mb-7 max-w-3xl mx-auto">
                  Aşağıdaki tablo başlangıç fiyatlarıdır; keşif notlarıyla kesinleşir.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link
                    href="/podyum-kiralama"
                    className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 hover:bg-white/30 backdrop-blur-xl transition shadow-lg"
                  >
                    <span className="text-xl mr-2">🎯</span> Podyum Kiralama
                  </Link>
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+podyum+kiralama+fiyat+teklifi+istiyorum.%20Tarih%3A%20%5Bgg.aa.yyyy%5D%20Alan%3A%20%5Bm2%5D%20Ilce%3A%20%5Bilce%5D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
                  >
                    <span className="text-xl mr-2">💬</span> WhatsApp ile Teklif
                  </a>
                </div>

                <p className="mt-6 text-sm text-white/70">
                  Fiyatlar {PRICE_VALID_UNTIL} tarihine kadar güncellenebilir; stok ve sezon
                  yoğunluğuna göre teklif şartları değişebilir.
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
                2026 Güncel <span className="text-blue-700">Birim Fiyat</span> Tablosu
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Aşağıdaki birim fiyatlar; standart modüler platform sistemleri için referans
                başlangıç değerleridir.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0">
                  <thead>
                    <tr className="text-left bg-gray-50">
                      <th className="border-b border-gray-200 px-6 py-4 text-base font-bold text-gray-900">
                        Kalem
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
                        Platform (Podyum)
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">m² / hafta</td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.platform_m2_week)} TL
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">Halı Kaplama</td>
                      <td className="border-b border-gray-100 px-6 py-4">m² / hafta</td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.carpet_m2_week)} TL
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b border-gray-100 px-6 py-4">
                        Skört (Etek Kaplama)
                      </td>
                      <td className="border-b border-gray-100 px-6 py-4">metre / hafta</td>
                      <td className="border-b border-gray-100 px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.skirt_ml_week)} TL
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">İstanbul Kurulum / Söküm</td>
                      <td className="px-6 py-4">paket</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {tl(UNIT_PRICES.ist_installation)} TL
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border-2 border-blue-100 bg-blue-50/60 p-6 md:p-8">
              <p className="text-lg font-bold text-gray-900">Örnek hesap (referans)</p>
              <p className="mt-2 text-base text-gray-700">
                {sample.m2} m² platform + {sample.m2} m² halı + {sample.skirt} m skört +
                İstanbul kurulum
              </p>
              <div className="mt-5 grid gap-4 text-base text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Platform: <b>{tl(sample.platform)} TL</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Halı: <b>{tl(sample.carpet)} TL</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Skört: <b>{tl(sample.skirtCost)} TL</b>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  Kurulum: <b>{tl(sample.install)} TL</b>
                </div>
              </div>
              <p className="mt-4 text-base text-gray-900">
                Toplam yaklaşık: <b>{tl(sampleTotal)} TL</b>
                <span className="text-gray-500"> (KDV ve saha koşulları hariç)</span>
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Etkinlik Türüne <span className="text-blue-700">Göre</span> Fiyatlar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Defile ve konser gibi yoğun trafik alan işlerde güvenlik ve teknik gereksinimler
                bütçeyi etkileyebilir.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  Defile için podyum fiyatları
                </h3>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                  Runway ölçüsü, yoğun trafik, güvenlik standartları ve zaman planı nedeniyle
                  defile podyumlarında bütçe farklılaşabilir.
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
                  Konser için podyum fiyatları
                </h3>
                <p className="mt-3 text-lg text-gray-600 leading-relaxed">
                  Sahne truss/ışık/ses entegrasyonu ve kurulum penceresi (load-in/out) bütçeyi
                  etkileyebilir.
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

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Sık Sorulan <span className="text-blue-700">Sorular</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Podyum kiralama fiyatları hakkında en çok sorulan soruların yanıtları.
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
                  Hızlı Teklif Alın
                </h2>
                <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  Tarih + ilçe + m² + yükseklik + halı/skört isteği bilgilerini iletin, 24 saat
                  içinde net teklif ve kurulum planıyla dönüş yapalım.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+podyum+kiralama+fiyat+teklifi+istiyorum.%20Tarih%3A%20%5Bgg.aa.yyyy%5D%20Alan%3A%20%5Bm2%5D%20Yukseklik%3A%20%5Bcm%5D%20Ilce%3A%20%5Bilce%5D%20Hali%3A%20%5Bevet%2Fhayir%5D%20Skort%3A%20%5Bmetre%5D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
                  >
                    <span className="text-xl mr-3">💬</span> WhatsApp’tan Yaz
                  </a>
                  <Link
                    href="/podyum-kiralama"
                    className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
                  >
                    <span className="text-xl mr-3">🎯</span> Profesyonel Podyum Kiralama
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
