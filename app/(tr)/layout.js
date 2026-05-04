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
import CloudflareWebAnalytics from "@/components/analytics/CloudflareWebAnalytics";
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

const EDITOR_ORGANIZATION_ID = `${BASE_SITE_URL}/#editor`;
const LOGO_ID = `${BASE_SITE_URL}/#logo`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;

/* ================== JSON-LD: GLOBAL GRAPH ================== */
const globalJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
    },
  ],
};

/* ================== META ================== */
export const metadata = {
  metadataBase: new URL(BASE_SITE_URL),
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

export default function TurkishLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} font-sans`}>
      <head>
        <TrustedTypesPolicy />
        <CloudflareWebAnalytics />
        <SpeculationRules locale="tr" />
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Sahneva Organizasyon"
          href="/opensearch.xml"
        />
      </head>
      <body>
        <SkipLinks locale="tr" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
        <JsonLd id="global-ld-json" data={globalJsonLd} />
        <Navbar />
        {children}
        <Footer />
        <StickyVideoRailClient />
        <DeferredSpeedInsights />
      </body>
    </html>
  );
}
