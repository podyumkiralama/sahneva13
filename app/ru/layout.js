export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import CloudflareWebAnalytics from "@/components/analytics/CloudflareWebAnalytics";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import StickyVideoRailClient from "@/components/StickyVideoRail.client";
import JsonLd from "@/components/seo/JsonLd";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import { BASE_SITE_URL, buildAlternateLanguages, buildCanonical } from "@/lib/seo/seoConfig";
import {
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

const content = LOCALE_CONTENT.ru;
const OG_IMAGE_URL = `${BASE_SITE_URL}/img/hero-bg.webp`;

const LOGO_ID = `${BASE_SITE_URL}/#logo`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;

const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Sahneva Organizasyon",
      alternateName: "Sahneva",
      url: BASE_SITE_URL,
      logo: { "@id": LOGO_ID },
      description:
        "Профессиональная компания по производству мероприятий, предлагающая аренду сцен, подиумов, LED-экранов, звука, света и шатров по всей Турции.",
      knowsAbout: [
        "аренда сцены",
        "аренда подиума",
        "аренда LED-экрана",
        "аренда шатра",
        "организация корпоративных мероприятий",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905453048671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en", "ru"],
      },
      sameAs: [
        "https://www.instagram.com/sahnevaorganizasyon",
        "https://www.youtube.com/@sahneva",
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
        addressLocality: "Kagithane",
        addressRegion: "Istanbul",
        postalCode: "34400",
        addressCountry: "TR",
      },
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
        "Профессиональные решения для аренды сцен, подиумов, LED-экранов, звука, света и шатров.",
      inLanguage: "ru",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

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
    default: content.meta.title,
    template: "%s | Sahneva",
  },
  description: content.meta.description,
  applicationName: "Sahneva Organizasyon",
  alternates: {
    canonical: buildCanonical("/ru"),
    languages: buildAlternateLanguages(),
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: buildCanonical("/ru"),
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva - аренда сцен, LED-экранов, звука и света в Турции",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default function RussianLayout({ children }) {
  return (
    <html
      lang="ru"
      xmlLang="ru"
      dir={content.direction}
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <CloudflareWebAnalytics />
        <SpeculationRules locale="ru" />
      </head>
      <body className="flex flex-col">
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="ru" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
        <JsonLd id="global-ld-json-ru" data={globalJsonLd} />
        <div className="flex min-h-screen flex-col bg-white text-neutral-900">
          <div id="_main_header">
            <Navbar locale="ru" />
          </div>
          <main
            id="_main_content"
            className="flex-1 focus-ring scroll-mt-4"
            role="main"
            aria-label="Основное содержимое"
            tabIndex={-1}
          >
            {children}
          </main>
          <Footer locale="ru" />
          <StickyVideoRailClient locale="ru" />
          <DeferredSpeedInsights />
        </div>
      </body>
    </html>
  );
}
