// app/(tr)/(site)/page.js

import dynamic from "next/dynamic";

import HeroSection from "@/components/HeroSection";
import HeroBelow from "@/components/HeroBelow";

import ServicesTabs from "@/components/ServicesTabs";
import CorporateEvents from "@/components/CorporateEvents";
import TechCapabilities from "@/components/TechCapabilities";
import WhyChooseUs from "@/components/WhyChooseUs";
import DeferredHydration from "@/components/DeferredHydration.client";
import JsonLd from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/lib/faqData";

import {
  HOME_PAGE_TITLE,
  buildAlternateLanguages,
  buildCanonical,
  getOgImageUrl,
} from "@/lib/seo/seoConfig";
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

function SectionLoading({ label, height = "h-48" }) {
  return (
    <div
      className={`flex ${height} items-center justify-center`}
      role="status"
      aria-label={label}
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

const HOME_URL = `${BASE_SITE_URL}/`;
const WEBPAGE_ID = `${HOME_URL}#webpage`;
const SERVICE_ID = `${HOME_URL}#primary-service`;
const CATALOG_ID = `${HOME_URL}#catalog`;
const FAQ_ID = `${HOME_URL}#sss`;
const HERO_IMAGE_ID = `${HOME_URL}#hero-image`;
const OG_IMAGE_ID = `${HOME_URL}#og-image`;
const HOME_PAGE_DESCRIPTION =
  "Sahneva ile sahne kiralama, podyum, LED ekran, ses ve ışık sistemlerini tek ekipten kiralayın. Kurumsal lansman, düğün, nişan ve tüm etkinlik alanına Türkiye geneli hızlı kurulum.";

const ogUrl =
  getOgImageUrl?.({ path: "/img/hero-bg.webp", absolute: true }) ??
  `${BASE_SITE_URL}/img/hero-bg.webp`;

export const metadata = {
  title: {
    absolute: HOME_PAGE_TITLE,
  },
  description: HOME_PAGE_DESCRIPTION,
  alternates: {
    canonical: buildCanonical("/"),
    languages: buildAlternateLanguages(),
  },
  openGraph: {
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
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
    title: HOME_PAGE_TITLE,
    description: HOME_PAGE_DESCRIPTION,
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
            description: "Modüler podyum ve sahne platformu kiralama hizmeti.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/led-ekran-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "LED Ekran Kiralama",
            url: `${BASE_SITE_URL}/led-ekran-kiralama`,
            image: `${BASE_SITE_URL}/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp`,
            description:
              "İç ve dış mekan LED ekran, LED wall ve video wall kurulumları.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/cadir-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Çadır Kiralama",
            url: `${BASE_SITE_URL}/cadir-kiralama`,
            description:
              "Pagoda, dome ve büyük açıklıklı etkinlik çadırı kiralama hizmeti.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Sandalye Kiralama",
            url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
            description: "Etkinlikler için masa ve sandalye kiralama hizmeti.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Masa Kiralama",
            url: `${BASE_SITE_URL}/masa-sandalye-kiralama`,
            description: "Etkinlikler için masa kiralama ve yerleşim çözümleri.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/sahne-kiralama`,
          itemOffered: {
            "@type": "Service",
            name: "Sahne Kiralama",
            url: `${BASE_SITE_URL}/sahne-kiralama`,
            image: `${BASE_SITE_URL}/img/hizmet-sahne.webp`,
            description:
              "Konser, festival ve kurumsal etkinlikler için sahne kurulumu.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/ses-isik-sistemleri`,
          itemOffered: {
            "@type": "Service",
            name: "Ses-Işık Sistemleri",
            url: `${BASE_SITE_URL}/ses-isik-sistemleri`,
            description: "Ses, ışık, teknik reji ve canlı etkinlik operasyonu.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        },
        {
          "@type": "Offer",
          url: `${BASE_SITE_URL}/hizmetler`,
          itemOffered: {
            "@type": "Service",
            name: "İstanbul İçi Nakliye",
            url: `${BASE_SITE_URL}/hizmetler`,
            description: "İstanbul içi etkinlik ekipmanı lojistik hizmeti.",
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
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
      mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-black">
      <JsonLd data={HOME_JSON_LD} suppressHydrationWarning />

      <HeroSection />
      <div className="relative z-10 -mt-16 md:-mt-24 bg-[#0B1120]">
        <HeroBelow />
      </div>

      <div id="teklif-al" aria-hidden="true" />

      {/* Projeler */}
      <div className="content-visibility-auto cv-home-projects bg-black">
        <p className="sr-only">
          Sahneva, Türkiye genelinde kurumsal etkinlikler için sahne, LED ekran, ses-ışık, podyum, truss ve teknik prodüksiyon süreçlerini tek ekipten yöneten etkinlik teknoloji partneridir.
        </p>
        <p className="sr-only">
          700+ kurumsal etkinlik, konser, fuar ve organizasyonda profesyonel çözüm ortağı olduk.
        </p>
        <a className="sr-only" href="/projeler">Projeleri inceleyin</a>
        <ProjectsGallery />
      </div>

      {/* Hizmetler */}
      <div className="content-visibility-auto cv-home-services bg-black">
        <ServicesTabs maxItems={6} />
      </div>

      {/* Teknik */}
      <div className="content-visibility-auto cv-home-tech bg-[#0B1120] py-0">
        <TechCapabilities sectionPaddingClassName="pt-16 pb-8 md:pt-20 md:pb-10 2xl:pt-24 2xl:pb-12" />
      </div>

      {/* Kurumsal */}
      <div className="content-visibility-auto cv-home-corporate-events bg-slate-50 py-0 m-0 w-full">
        <CorporateEvents sectionPaddingClassName="pt-8 pb-16 md:pt-10 md:pb-24 2xl:pt-12 2xl:pb-28" />
      </div>

      {/* Why Choose Us */}
      <div className="content-visibility-auto cv-home-why w-full p-0 m-0">
        <WhyChooseUs />
      </div>

      {/* FAQ */}
      <div className="content-visibility-auto cv-home-faq w-full bg-transparent p-0 m-0">
        <DeferredHydration
          fallback={<SectionLoading label="SSS yükleniyor" height="h-64" />}
          rootMargin="500px"
          idleTimeout={6000}
        >
          <Faq />
        </DeferredHydration>
      </div>
    </div>
  );
}
