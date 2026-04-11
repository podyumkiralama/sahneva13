// app/(tr)/(site)/page.js

import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";

import ServicesTabs from "@/components/ServicesTabs";
import CorporateEvents from "@/components/CorporateEvents";
import CorporateIntro from "@/components/CorporateIntro";
import TechCapabilities from "@/components/TechCapabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import JsonLd from "@/components/seo/JsonLd";

import {
  HOME_PAGE_TITLE,
  buildAlternateLanguages,
  buildCanonical,
  getOgImageUrl,
} from "@/lib/seo/seoConfig";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

/* ================== ISR ================== */
export const revalidate = 3600;

/* ================== Dinamik bileşenler ================== */
const ProjectsGallery = dynamic(() => import("@/components/ProjectsGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galeri yükleniyor"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-32"
      role="status"
      aria-label="SSS yükleniyor"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">SSS yükleniyor...</span>
    </div>
  ),
});

const HOME_URL = `${BASE_SITE_URL}/`;
const WEBPAGE_ID = `${HOME_URL}#webpage`;
const SERVICE_ID = `${HOME_URL}#primary-service`;
const CATALOG_ID = `${HOME_URL}#catalog`;
const FAQ_ID = `${HOME_URL}#sss`;
const HERO_IMAGE_ID = `${HOME_URL}#hero-image`;
const OG_IMAGE_ID = `${HOME_URL}#og-image`;
const HOME_PAGE_DESCRIPTION =
  "Sahneva ile profesyonel sahne, podyum, LED ekran, ses ve ışık sistemleri kiralama çözümlerini keşfedin. İstanbul merkezli, Türkiye geneli hızlı kurulum.";
const PRICING_DISCLAIMER =
  "Fiyatlar; şehir, gün, metraj, kurulum ve ekipmana göre değişebilir. Net teklif için iletişime geçin.";

const ogUrl =
  getOgImageUrl?.({ path: "/img/hero-bg.webp", absolute: true }) ??
  `${BASE_SITE_URL}/img/hero-bg.webp`;

export const metadata = {
  title: { absolute: HOME_PAGE_TITLE },
  description: HOME_PAGE_DESCRIPTION,
  alternates: {
    canonical: buildCanonical("/"),
    languages: buildAlternateLanguages(),
  },
  openGraph: {
    url: HOME_URL,
    type: "website",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: ogUrl,
        width: 1200,
        height: 630,
        alt: "Sahneva sahne, podyum, LED ekran ve ses ışık kiralama çözümleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogUrl],
  },
  keywords: [
    "sahne kiralama",
    "podyum kiralama",
    "LED ekran kiralama",
    "ses ışık kiralama",
    "çadır kiralama",
    "etkinlik prodüksiyonu",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": WEBPAGE_ID,
      url: HOME_URL,
      name: HOME_PAGE_TITLE,
      description: HOME_PAGE_DESCRIPTION,
      inLanguage: "tr-TR",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      primaryImageOfPage: { "@id": HERO_IMAGE_ID },
    },

    {
      "@type": "ImageObject",
      "@id": HERO_IMAGE_ID,
      contentUrl: `${BASE_SITE_URL}/img/hero-bg.webp`,
      width: 1600,
      height: 900,
    },
    {
      "@type": "ImageObject",
      "@id": OG_IMAGE_ID,
      contentUrl: ogUrl,
      width: 1200,
      height: 630,
    },

    {
      "@type": "OfferCatalog",
      "@id": CATALOG_ID,
      name: "Etkinlik Ekipmanları Kiralama Kataloğu",
      url: HOME_URL,
      itemListElement: [
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/podyum-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Podyum Kiralama",
            url: `${BASE_SITE_URL}/podyum-kiralama`,
            image: `${BASE_SITE_URL}/img/hizmet-podyum.webp`,
            description: `Modüler podyum sahne kiralama hizmeti. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 250,
            priceCurrency: "TRY",
            unitText: "m²",
            unitCode: "MTK",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "MTK",
            },
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/led-ekran-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "LED Ekran Kiralama",
            url: `${BASE_SITE_URL}/led-ekran-kiralama`,
            image: `${BASE_SITE_URL}/img/hizmet-led-ekran.webp`,
            description: `İç/dış mekan LED ekran kiralama. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 1700,
            priceCurrency: "TRY",
            unitText: "DAY",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitText: "DAY",
            },
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/cadir-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Çadır Kiralama",
            url: `${BASE_SITE_URL}/cadir-kiralama`,
            description: `Etkinlik ve organizasyonlar için çadır kiralama. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 6000,
            maxPrice: 800000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Sandalye Kiralama",
            url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
            description: `Etkinlikler için sandalye kiralama. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 200,
            priceCurrency: "TRY",
            unitText: "adet",
            unitCode: "C62",
            referenceQuantity: {
              "@type": "QuantitativeValue",
              value: 1,
              unitCode: "C62",
            },
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Masa Kiralama",
            url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
            description: `Etkinlikler için masa kiralama. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 1000,
            maxPrice: 2000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/sahne-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Sahne Kiralama",
            url: `${BASE_SITE_URL}/sahne-kiralama`,
            image: `${BASE_SITE_URL}/img/hizmet-sahne.webp`,
            description: `Konser ve etkinlikler için sahne kiralama. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 10000,
            maxPrice: 200000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/ses-isik-sistemleri`,
          itemOffered: {
            "@type": "Service",
            name: "Ses-Işık Sistemleri",
            url: `${BASE_SITE_URL}/ses-isik-sistemleri`,
            description: `Ses ve ışık sistemleri kiralama hizmeti. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: 10000,
            maxPrice: 300000,
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/hizmetler`,
          itemOffered: {
            "@type": "Service",
            name: "İstanbul İçi Nakliye",
            url: `${BASE_SITE_URL}/hizmetler`,
            description: `İstanbul içi nakliye hizmeti. ${PRICING_DISCLAIMER}`,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: 7000,
            priceCurrency: "TRY",
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "Country", name: "Türkiye" },
          seller: { "@id": ORGANIZATION_ID },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": SERVICE_ID,
      name: "Etkinlik Ekipmanları Kiralama",
      description:
        "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama hizmeti. Kurulum, teknik operasyon ve söküm dahil.",
      url: HOME_URL,
      areaServed: { "@type": "Country", name: "Türkiye" },
      provider: { "@id": ORGANIZATION_ID },
      hasOfferCatalog: { "@id": CATALOG_ID },
      serviceType: "Event Production",
    },

    {
      "@type": "FAQPage",
      "@id": FAQ_ID,
      url: `${HOME_URL}#sss`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Sahne, podyum ve LED ekran kiralama hizmetini hangi şehirlerde veriyorsunuz",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sahneva olarak İstanbul merkezli çalışıyor ve Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama hizmeti sunuyoruz. Şehir dışı projelerde nakliye ve konaklama planlamasını ekibimizle birlikte organize ediyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Kiralama sürecinde keşif ve fiyat teklifi nasıl ilerliyor",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Talebiniz geldikten sonra etkinlik alanı, katılımcı sayısı ve ihtiyaç duyduğunuz ekipmanları birlikte netleştiriyoruz. Gerekirse ücretsiz keşif yapıyor, ardından sahne, podyum, LED ekran ve ses-ışık sistemleri için detaylı ve kalem kalem ayrılmış teklif paylaşıyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Kurulum ve söküm hizmete dahil mi",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Tüm sahne, podyum, LED ekran ve ses-ışık kiralamalarında profesyonel ekip tarafından kurulum, etkinlik süresince teknik takip ve etkinlik bitiminde söküm hizmeti standart olarak dahildir.",
          },
        },
        {
          "@type": "Question",
          name: "Sahne ve LED ekran kiralama fiyatları neye göre değişiyor",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fiyatlar; sahne veya podyum ölçüsü, LED ekran metrekaresi ve piksel aralığı, ses-ışık sistemi kapasitesi, etkinlik günü sayısı ve şehir içi/dışı olmasına göre değişir. Bütçenize uygun birkaç farklı paket seçeneği sunuyoruz.",
          },
        },
        {
          "@type": "Question",
          name: "Etkinlikten ne kadar önce rezervasyon yapmalıyım",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Özellikle yüksek sezonda (bahar-yaz dönemi) sahne, podyum ve LED ekran stoklarının dolmaması için en az 2–3 hafta öncesinden rezervasyon yapmanızı öneriyoruz. Acil projeler için ise aynı hafta içinde hızlı kurulum yapabildiğimiz durumlar da oluyor.",
          },
        },
      ],
    },
  ],
};

const BREADCRUMB_ITEMS = [{ name: "Ana Sayfa", url: `${HOME_URL}` }];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-black">
      <JsonLd data={HOME_JSON_LD} suppressHydrationWarning />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />

      <HeroSection />
      <div className="relative z-10 -mt-16 md:-mt-24 bg-[#0B1120]">
        <HeroBelow />
      </div>

      <div id="teklif-al" className="sr-only" />

      {/* Hizmetler */}
      <section
        aria-label="Hizmetler"
        className="content-visibility-auto bg-black"
      >
        <p className="sr-only">
          Türkiye geneli sahne kiralama, podyum kiralama, LED ekran kiralama, ses-ışık sistemleri,
          truss kiralama, çadır kiralama ve masa-sandalye kiralama çözümleri.
        </p>
        <a className="sr-only" href="/hizmetler">Tüm hizmetleri inceleyin</a>
        <ServicesTabs />
      </section>

      {/* Projeler */}
      <section
        aria-label="Projelerimiz"
        className="content-visibility-auto bg-black"
      >
        <p className="sr-only">
          500'den fazla kurumsal etkinlik, konser, fuar ve organizasyonda profesyonel çözüm ortağı olduk.
        </p>
        <a className="sr-only" href="/projeler">Projeleri inceleyin</a>
        <ProjectsGallery />
      </section>

      {/* Teknik */}
      <div className="content-visibility-auto bg-slate-900 py-10">
        <TechCapabilities />
      </div>

      {/* Kurumsal */}
      <div className="content-visibility-auto bg-slate-50 py-0 m-0 w-full">
        <CorporateEvents />
      </div>

      <div className="content-visibility-auto bg-black py-0 m-0 w-full">
        <CorporateIntro />
      </div>

      {/* Why Choose Us */}
      <div className="content-visibility-auto w-full p-0 m-0">
        <WhyChooseUs />
      </div>

      {/* FAQ */}
      <div className="content-visibility-auto w-full bg-transparent p-0 m-0">
        <Faq />
      </div>
    </div>
  );
}
