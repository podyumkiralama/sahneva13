// app/(tr)/(site)/page.js

import dynamic from "next/dynamic";
import Link from "next/link";

import TurkishHomepageHero, {
  TR_HOME_PRIMARY_IMAGE,
} from "@/components/home/TurkishHomepageHero";

import TurkishHomeServices from "@/components/home/TurkishHomeServices";
import TurkishHomeDecisionDesk from "@/components/home/TurkishHomeDecisionDesk";
import TurkishHomeFieldProof from "@/components/home/TurkishHomeFieldProof";
import JsonLd from "@/components/seo/JsonLd";
import sectionStyles from "@/components/TurkishProjectsSection.module.css";
import { FAQ_ITEMS } from "@/lib/faqData";

import {
  AI_PREVIEW_ROBOTS,
  buildAlternateLanguages,
  buildCanonical,
  getOgImageUrl,
  HOME_PAGE_TITLE,
} from "@/lib/seo/seoConfig";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { PROJECTS_COMPLETED } from "@/lib/stats";

/* ================== ISR ================== */
export const revalidate = 3600;

/* ================== Dinamik bileşenler ================== */
const ProjectsGallery = dynamic(() => import("@/components/ProjectsGallery"), {
  loading: () => (
    <div
      className={sectionStyles.loading}
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

const TR_HOME_PROJECT_GALLERIES = {
  "Milli Uzay Programı Lansmanı": {
    images: [
      "/img/blog/milli-uzay-programi-podyum.webp",
      "/img/blog/milli-uzay-programi-hero.webp",
      "/img/blog/milli-uzay-programi-lazer-led.webp",
    ],
    description: "Dome, lazer–LED ve akustik prodüksiyonu",
    code: "01 / MİLLİ UZAY / 2021",
    shortTitle: "Milli Uzay Lansmanı",
    meta: "DOME · LAZER–LED · AKUSTİK",
    coverPosition: "50% 45%",
    stats: "Immersive Lansman Prodüksiyonu",
  },
  "Fişekhane PUBG Dünya Rekoru": {
    images: [
      "/img/blog/fisekhane-pubg-koreografili.webp",
      "/img/blog/fisekhane-pubg-etkinlik.webp",
      "/img/blog/fisekhane-pubg-guinness-rekoru.webp",
    ],
    description: "Guinness Dünya Rekoru etkinlik prodüksiyonu",
    code: "02 / FİŞEKHANE / PUBG",
    shortTitle: "PUBG Dünya Rekoru",
    meta: "SAHNE · LED · SES–IŞIK · REJİ",
    coverPosition: "50% 44%",
    stats: "Guinness Dünya Rekoru",
  },
  "Sıfır Atık Festivali": {
    images: [
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-vinc-destekli-sahne-kurulumu.webp",
      "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-dev-led-ekran-goruntu-sistemi.webp",
    ],
    description: "Festival ana sahne sistemleri",
    code: "03 / SIFIR ATIK / FESTİVAL",
    shortTitle: "Festival Ana Sahnesi",
    meta: "SAHNE · LED · LINE ARRAY · TRUSS",
    coverPosition: "50% 50%",
    stats: "Festival Prodüksiyonu",
  },
};

const HOME_URL = `${BASE_SITE_URL}/`;
const WEBPAGE_ID = `${HOME_URL}#webpage`;
const SERVICE_ID = `${HOME_URL}#primary-service`;
const CATALOG_ID = `${HOME_URL}#catalog`;
const FAQ_ID = `${HOME_URL}#sss`;
const HERO_IMAGE_ID = `${HOME_URL}#hero-image`;
const OG_IMAGE_ID = `${HOME_URL}#og-image`;
const HOME_PAGE_DESCRIPTION =
  `Sahne, podyum, LED ekran, ses ve ışık sistemlerini tek ekipten kiralayın. Türkiye geneli hızlı kurulum, ${PROJECTS_COMPLETED} proje deneyimiyle anahtar teslim prodüksiyon.`;

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
      contentUrl: `${BASE_SITE_URL}${TR_HOME_PRIMARY_IMAGE.src}`,
      width: TR_HOME_PRIMARY_IMAGE.width,
      height: TR_HOME_PRIMARY_IMAGE.height,
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

      <TurkishHomepageHero />

      {/* Hizmetler */}
      <div className="content-visibility-auto [contain-intrinsic-size:auto_1100px] lg:[contain-intrinsic-size:auto_850px]">
        <TurkishHomeServices />
      </div>

      {/* Projeler */}
      <div
        className={`${sectionStyles.sectionRoot} content-visibility-auto [contain-intrinsic-size:auto_650px] lg:[contain-intrinsic-size:auto_730px]`}
      >
        <div className={sectionStyles.header}>
          <div className={sectionStyles.headingBlock}>
            <p className={sectionStyles.eyebrow}>
              Projeler / 03
            </p>
            <h2
              id="tr-projects-title"
              className={sectionStyles.heading}
            >
              Seçilmiş Projeler
            </h2>
          </div>

          <div className={sectionStyles.introBlock}>
            <p
              id="tr-projects-description"
              className={sectionStyles.description}
            >
              Sahne, LED ekran, ses–ışık ve dome yapıdan üç gerçek
              saha kaydı.
            </p>
            <div className={sectionStyles.links}>
              <Link
                href="/projeler"
                className={sectionStyles.primaryLink}
              >
                Tüm projeleri incele →
              </Link>
            </div>
          </div>
        </div>
        <ProjectsGallery
          compact
          showHeader={false}
          variant="heroMosaic"
          galleries={TR_HOME_PROJECT_GALLERIES}
          ariaLabelledby="tr-projects-title"
          ariaDescribedby="tr-projects-description"
        />
      </div>

      <div className="content-visibility-auto [contain-intrinsic-size:auto_1520px] lg:[contain-intrinsic-size:auto_1240px]">
        <TurkishHomeFieldProof />
      </div>
      <div className="content-visibility-auto [contain-intrinsic-size:auto_1580px] lg:[contain-intrinsic-size:auto_1060px]">
        <TurkishHomeDecisionDesk />
      </div>
    </div>
  );
}
