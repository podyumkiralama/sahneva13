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
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import {
  AI_PREVIEW_ROBOTS,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import { BASE_SITE_URL } from "@/lib/seo/schemaIds";

const content = LOCALE_CONTENT.en;
const OG_IMAGE_URL = `${BASE_SITE_URL}/img/hero-bg.webp`;

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
    default: "Sahneva | Stage, LED Screen, Sound & Lighting Rentals in Türkiye",
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
    title: "Sahneva | Stage, LED Screen, Sound & Lighting Rentals in Türkiye",
    description: content.meta.description,
    url: buildCanonical("/en"),
    siteName: "Sahneva",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva – stage, stage platform, LED screen, sound and lighting, and tent rental services across Türkiye",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva | Stage, LED Screen, Sound & Lighting Rentals in Türkiye",
    description: content.meta.description,
    images: [OG_IMAGE_URL],
  },
  alternates: {
    canonical: buildCanonical("/en"),
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

export default function EnglishLayout({ children }) {
  return (
    <html
      lang="en"
      xmlLang="en"
      dir="ltr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <AhrefsAnalytics />
        <SpeculationRules locale="en" />
      </head>
      <body className="flex flex-col">
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="en" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />

      <div className="min-h-screen text-slate-100 flex flex-col">
        <header
          id="_main_header"
          aria-label="Sahneva site header and main navigation"
          className="w-full relative z-50"
        >
          <Navbar locale="en" />
        </header>

        <main
          id="_main_content"
          aria-label="Sahneva main content"
          tabIndex={-1}
          className="relative flex-1 focus:outline-none scroll-mt-24 min-h-[1px]"
        >
          <div className="w-full overflow-visible">{children}</div>
        </main>

        <Footer
          id="_main_footer"
          ariaLabel="Sahneva site footer"
          descriptionId="_main_footer_desc"
          locale="en"
        />
        <StickyVideoRailClient locale="en" />
        <SupportLauncher
          locale="en"
          enabled={isStoreConfigured()}
          attachments={isFilesConfigured()}
        />
        <DeferredSpeedInsights />
      </div>
      </body>
    </html>
  );
}
