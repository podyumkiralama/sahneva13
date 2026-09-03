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

const content = LOCALE_CONTENT.de;
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
  viewportFit: "cover",
  themeColor: "#6d28d9",
};

export default function GermanLayout({ children }) {
  return (
    <html
      lang="de"
      xmlLang="de"
      dir="ltr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <AhrefsAnalytics />
        <SpeculationRules locale="de" />
      </head>
      <body className="flex flex-col">
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="de" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />

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
