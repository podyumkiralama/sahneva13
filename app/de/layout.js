export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyVideoRailClient from "@/components/StickyVideoRail.client";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import SupportLauncher from "@/components/support/SupportLauncher.client";
import { isStoreConfigured } from "@/lib/support/config";
import { isFilesConfigured } from "@/lib/support/files";
import JsonLd from "@/components/seo/JsonLd";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import {
  LOCAL_BUSINESS_IDENTITY,
  ORGANIZATION_IDENTITY,
} from "@/lib/structuredData/organizationIdentity";
import {
  AI_PREVIEW_ROBOTS,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import {
  BASE_SITE_URL,
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  SOCIAL_PROFILES,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

const content = LOCALE_CONTENT.de;

const LOGO_ID = `${BASE_SITE_URL}/#logo`;
const OG_IMAGE_URL = `${BASE_SITE_URL}/img/hero-bg.webp`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;

/* ================== JSON-LD: GLOBAL GRAPH (Deutsch) ================== */
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
      ...ORGANIZATION_IDENTITY,
      name: "Sahneva Organizasyon",
      alternateName: "Sahneva",
      url: BASE_SITE_URL,
      logo: { "@id": LOGO_ID },
      description:
        "Sahneva ist ein Dienstleister für Veranstaltungstechnik mit Sitz in Istanbul. Das Unternehmen plant und realisiert Bühnenbau, LED-Wände, Beschallung, Licht und technische Produktion für Firmenveranstaltungen, Kongresse und internationale Events in der gesamten Türkei.",
      knowsAbout: [
        "Veranstaltungstechnik",
        "Eventproduktion",
        "Bühnenbau",
        "Bühne mieten",
        "Podest mieten",
        "LED-Wand mieten",
        "Beschallungstechnik",
        "Line-Array-Systeme",
        "Lichtdesign",
        "Traversensysteme",
        "Zeltvermietung",
        "Livestream und Übertragung",
        "Firmenveranstaltungen",
        "Kongress- und Messeproduktion",
        "E-Sport-Produktion",
      ],
      sameAs: SOCIAL_PROFILES,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905453048671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en", "de", "ar", "ru", "zh"],
      },
    },

    {
      "@type": "LocalBusiness",
      "@id": LOCAL_BUSINESS_ID,
      ...LOCAL_BUSINESS_IDENTITY,
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
      sameAs: SOCIAL_PROFILES,
    },

    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: BASE_SITE_URL,
      name: "Sahneva Organizasyon",
      alternateName: "Sahneva",
      description:
        "Veranstaltungstechnik in der Türkei: Bühnen, Podeste, LED-Wände, Ton- und Lichttechnik sowie Zelte mieten – inklusive Planung und Aufbau.",
      inLanguage: "de-DE",
      about: [
        "Bühne mieten",
        "Podest mieten",
        "LED-Wand mieten",
        "Zelt mieten",
        "Firmenveranstaltungen",
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
    default: "Sahneva | Bühne, LED-Wand und Veranstaltungstechnik in der Türkei",
    template: "%s | Sahneva",
  },
  applicationName: "Sahneva Organizasyon",
  appleWebApp: {
    capable: true,
    title: "Sahneva",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  description: content.meta.description,
  openGraph: {
    title: "Sahneva | Bühne, LED-Wand und Veranstaltungstechnik in der Türkei",
    description: content.meta.description,
    url: buildCanonical("/de"),
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva – Bühnen, Podeste, LED-Wände, Ton- und Lichttechnik sowie Zelte in der gesamten Türkei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva | Bühne, LED-Wand und Veranstaltungstechnik in der Türkei",
    description: content.meta.description,
    images: [OG_IMAGE_URL],
  },
  alternates: {
    canonical: buildCanonical("/de"),
    languages: buildAlternateLanguages(),
  },
  robots: AI_PREVIEW_ROBOTS,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default function GermanLayout({ children }) {
  return (
    <html
      lang="de"
      xmlLang="de"
      dir="ltr"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <SpeculationRules locale="de" />
      </head>
      <body className="flex flex-col">
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="de" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
        <JsonLd id="global-ld-json-de" data={globalJsonLd} />

        <div className="min-h-screen text-slate-100 flex flex-col">
          <header
            id="_main_header"
            aria-label="Kopfbereich und Hauptnavigation der Sahneva-Website"
            className="w-full relative z-50"
          >
            <Navbar locale="de" />
          </header>

          <main
            id="_main_content"
            aria-label="Hauptinhalt von Sahneva"
            tabIndex={-1}
            className="relative flex-1 focus:outline-none scroll-mt-24 min-h-[1px]"
          >
            <div className="w-full overflow-visible">{children}</div>
          </main>

          <Footer
            id="_main_footer"
            ariaLabel="Fußzeile der Sahneva-Website"
            descriptionId="_main_footer_desc"
            locale="de"
          />
          <StickyVideoRailClient locale="de" />
          <SupportLauncher
          locale="de"
          enabled={isStoreConfigured()}
          attachments={isFilesConfigured()}
        />
          <DeferredSpeedInsights />
        </div>
      </body>
    </html>
  );
}
