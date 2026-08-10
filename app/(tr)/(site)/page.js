// app/(tr)/(site)/page.js

import ShowCallFaq from "@/components/home-showcall/ShowCallFaq";
import ShowCallPayment from "@/components/home-showcall/ShowCallPayment";
import OperationTimeline from "@/components/home-showcall/core/OperationTimeline";
import ShowCallHero from "@/components/home-showcall/core/ShowCallHero";
import TechnicalServiceIndex from "@/components/home-showcall/core/TechnicalServiceIndex";
import BackstageCapacityProof from "@/components/home-showcall/editorial/BackstageCapacityProof";
import ClosingTrustBlock from "@/components/home-showcall/editorial/ClosingTrustBlock";
import EditorialProjectSpread from "@/components/home-showcall/editorial/EditorialProjectSpread";
import { homeDisplayFont } from "@/components/home-showcall/homeDisplayFont";
import JsonLd from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/lib/faqData";

import {
  AI_PREVIEW_ROBOTS,
  buildAlternateLanguages,
  buildCanonical,
  getOgImageUrl,
  HOME_PAGE_TITLE,
} from "@/lib/seo/seoConfig";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

/* ================== ISR ================== */
export const revalidate = 3600;

const HOME_URL = `${BASE_SITE_URL}/`;
const WEBPAGE_ID = `${HOME_URL}#webpage`;
const SERVICE_ID = `${HOME_URL}#primary-service`;
const CATALOG_ID = `${HOME_URL}#catalog`;
const FAQ_ID = `${HOME_URL}#sss`;
const HERO_IMAGE_ID = `${HOME_URL}#hero-image`;
const OG_IMAGE_ID = `${HOME_URL}#og-image`;
const HOME_PAGE_DESCRIPTION =
  "Sahne, podyum, LED ekran, ses ve ışık sistemlerini tek ekipten kiralayın. Türkiye geneli hızlı kurulum, 700+ proje deneyimiyle anahtar teslim prodüksiyon.";

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
  robots: AI_PREVIEW_ROBOTS,
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
      contentUrl: `${BASE_SITE_URL}/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp`,
      width: 4000,
      height: 1848,
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
    <div
      className={`${homeDisplayFont.variable} overflow-x-clip bg-[#090a0c] text-[#f2efe8]`}
    >
      <JsonLd data={HOME_JSON_LD} suppressHydrationWarning />

      <ShowCallHero />
      <TechnicalServiceIndex />
      <OperationTimeline />
      <EditorialProjectSpread />
      <BackstageCapacityProof />
      <ShowCallFaq items={FAQ_ITEMS} />
      <ShowCallPayment />
      <ClosingTrustBlock />
    </div>
  );
}
