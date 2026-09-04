export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import SiteHeader from "../../components/i18n/SiteHeader";
import SiteFooter from "../../components/i18n/SiteFooter";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import SupportLauncher from "@/components/support/SupportLauncher.client";
import { isStoreConfigured } from "@/lib/support/config";
import { isFilesConfigured } from "@/lib/support/files";
import { LOCALE_CONTENT } from "../../lib/i18n/localeContent";
import {
  AI_PREVIEW_ROBOTS,
  BASE_SITE_URL,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";

const content = LOCALE_CONTENT.ar;

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
    default: "سحنڤا | تأجير المسارح وشاشات LED والصوت والإضاءة في تركيا",
    template: "%s | Sahneva",
  },
  description:
    "تأجير المسارح وشاشات LED وأنظمة الصوت والإضاءة مع فرق فنية كاملة في جميع أنحاء تركيا.",
  applicationName: "Sahneva Organizasyon",
  appleWebApp: {
    capable: true,
    title: "Sahneva",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: buildCanonical("/ar"),
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

export default function ArabicLayout({ children }) {
  return (
    <html
      lang="ar"
      xmlLang="ar"
      dir={content.direction}
      data-scroll-behavior="smooth"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <AhrefsAnalytics />
        <SpeculationRules locale="ar" />
      </head>
      <body className="flex flex-col" dir={content.direction}>
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="ar" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <div id="_main_header">
        <SiteHeader
          locale="ar"
          strings={{ ...content.header, direction: content.direction }}
        />
      </div>
      <main
        id="_main_content"
        className="flex-1 pb-16 pt-0 focus-ring scroll-mt-4"
        role="main"
        aria-label="المحتوى الرئيسي"
        tabIndex={-1}
      >
        {children}
      </main>

      <SiteFooter strings={content.footer} />
      <SupportLauncher
          locale="ar"
          enabled={isStoreConfigured()}
          attachments={isFilesConfigured()}
        />
      <DeferredSpeedInsights />
    </div>
      </body>
    </html>
  );
}
