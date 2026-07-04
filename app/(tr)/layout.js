// app/(tr)/layout.jsx
export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyVideoRailClient from "@/components/StickyVideoRail.client";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import JsonLd from "@/components/seo/JsonLd";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";

import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import {
  HOME_PAGE_TITLE,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import {
  BASE_SITE_URL,
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

import { buildDynamicOgImage, buildDynamicTwitterImages } from "@/lib/seo/dynamicOg";

const content = LOCALE_CONTENT.tr;

const LOGO_ID = `${BASE_SITE_URL}/#logo`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;
const OG_IMAGE_URL = `${BASE_SITE_URL}/img/hero-bg.webp`;

/* ================== JSON-LD: GLOBAL GRAPH ================== */
const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      caption: "Sahneva Organizasyon logosu",
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Sahneva Organizasyon",
      alternateName: ["Sahneva", "Sahneva Teknik"],
      url: BASE_SITE_URL,
      logo: { "@id": LOGO_ID },
      image: LOGO_URL,
      description:
        "Sahneva Organizasyon; sahne, podyum, LED ekran, ses-ışık, truss, çadır ve kurumsal etkinlik teknik prodüksiyonu alanlarında Türkiye genelinde hizmet veren etkinlik prodüksiyon firmasıdır.",
      telephone: "+905453048671",
      foundingLocation: {
        "@type": "Place",
        name: "İstanbul, Türkiye",
      },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "İstanbul" },
      ],
      knowsAbout: [
        "kurumsal organizasyon",
        "sahne kiralama",
        "podyum kiralama",
        "LED ekran kiralama",
        "ses ve ışık sistemleri",
        "truss kiralama",
        "çadır kiralama",
        "teknik prodüksiyon",
        "etkinlik teknik keşfi",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+905453048671",
          contactType: "customer service",
          areaServed: "TR",
          availableLanguage: ["tr"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": LOCAL_BUSINESS_ID,
      name: "Sahneva Organizasyon",
      alternateName: "Sahneva",
      url: BASE_SITE_URL,
      image: OG_IMAGE_URL,
      logo: { "@id": LOGO_ID },
      telephone: "+905453048671",
      priceRange: "₺₺₺",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.096173214009205,
        longitude: 28.97663777534253,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hamidiye, Anadolu Cd. 61 A",
        addressLocality: "Kağıthane",
        addressRegion: "İstanbul",
        postalCode: "34400",
        addressCountry: "TR",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: "TR",
      parentOrganization: { "@id": ORGANIZATION_ID },
      sameAs: [
        "https://www.instagram.com/sahnevaorganizasyon",
        "https://www.youtube.com/@sahneva",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE_SITE_URL,
      name: "Sahneva Organizasyon",
      alternateName: "Sahneva",
      description:
        "Sahne, podyum, LED ekran, ses-ışık ve çadır kiralama hizmetleri için profesyonel etkinlik prodüksiyon çözümleri.",
      inLanguage: "tr-TR",
      about: [
        "sahne kiralama",
        "podyum kiralama",
        "led ekran kiralama",
        "çadır kiralama",
        "kurumsal organizasyon",
      ],
      publisher: { "@id": ORGANIZATION_ID },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

/* ================== META ================== */
export const metadata = {
  metadataBase: new URL(BASE_SITE_URL),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  title: {
    default: HOME_PAGE_TITLE,
    template: `%s | Sahneva`,
  },
  description: content.meta.description,
  openGraph: {
    title: HOME_PAGE_TITLE,
    description: content.meta.description,
    url: buildCanonical("/"),
    siteName: "Sahneva",
    type: "website",
    locale: "tr_TR",
    images: [
      buildDynamicOgImage({
        title: HOME_PAGE_TITLE,
        description: content.meta.description,
      }),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_PAGE_TITLE,
    description: content.meta.description,
    images: buildDynamicTwitterImages({
      title: HOME_PAGE_TITLE,
      description: content.meta.description,
    }),
  },
  alternates: {
    canonical: buildCanonical("/"),
    languages: buildAlternateLanguages(),
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default function TurkishLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} font-sans`}>
      <head>
        <TrustedTypesPolicy />
        <SpeculationRules locale="tr" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Sahneva Organizasyon"
          href="/opensearch.xml"
        />
      </head>
      <body className="flex flex-col">
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="tr" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
        <JsonLd id="global-ld-json" data={globalJsonLd} />
        <header
          id="_main_header"
          aria-label="Sahneva site ust menusu ve ana navigasyon"
          className="relative z-50 w-full"
        >
          <Navbar />
        </header>
        <main
          id="_main_content"
          aria-label="Sahneva ana icerik"
          tabIndex={-1}
          className="relative min-h-[1px] flex-1 scroll-mt-24 focus:outline-none"
        >
          {children}
        </main>
        <Footer
          id="_main_footer"
          ariaLabel="Sahneva site alt bilgisi"
          descriptionId="_main_footer_desc"
        />
        <StickyVideoRailClient />
        <DeferredSpeedInsights />
      </body>
    </html>
  );
}
