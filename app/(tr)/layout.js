// app/(tr)/layout.jsx
export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyVideoRailClient from "@/components/StickyVideoRail.client";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import SupportLauncher from "@/components/support/SupportLauncher.client";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";

import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import { isStoreConfigured } from "@/lib/support/config";
import { isFilesConfigured } from "@/lib/support/files";
import {
  AI_PREVIEW_ROBOTS,
  HOME_PAGE_TITLE,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import { BASE_SITE_URL } from "@/lib/seo/schemaIds";

import { buildDynamicOgImage, buildDynamicTwitterImages } from "@/lib/seo/dynamicOg";

const content = LOCALE_CONTENT.tr;

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
  robots: AI_PREVIEW_ROBOTS,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#6d28d9",
};

export default function TurkishLayout({ children }) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${inter.variable} font-sans`}>
      <head>
        <TrustedTypesPolicy />
        <AhrefsAnalytics />
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
        <SupportLauncher
          locale="tr"
          enabled={isStoreConfigured()}
          attachments={isFilesConfigured()}
        />
        <DeferredSpeedInsights />
      </body>
    </html>
  );
}
