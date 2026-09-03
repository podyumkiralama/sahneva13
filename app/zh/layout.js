export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import AhrefsAnalytics from "@/components/analytics/AhrefsAnalytics";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import StickyVideoRailClient from "@/components/StickyVideoRail.client";
import SupportLauncher from "@/components/support/SupportLauncher.client";
import { isStoreConfigured } from "@/lib/support/config";
import { isFilesConfigured } from "@/lib/support/files";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import {
  AI_PREVIEW_ROBOTS,
  BASE_SITE_URL,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";

const content = LOCALE_CONTENT.zh;
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
    default: content.meta.title,
    template: "%s | Sahneva",
  },
  description: content.meta.description,
  applicationName: "Sahneva Organizasyon",
  alternates: {
    canonical: buildCanonical("/zh"),
    languages: buildAlternateLanguages(),
  },
  robots: AI_PREVIEW_ROBOTS,
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: buildCanonical("/zh"),
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Sahneva - 土耳其舞台、LED屏幕、音响灯光租赁",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#6d28d9",
};

export default function ChineseLayout({ children }) {
  return (
    <html
      lang="zh-CN"
      xmlLang="zh-CN"
      dir={content.direction}
      data-scroll-behavior="smooth"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <AhrefsAnalytics />
        <SpeculationRules locale="zh" />
      </head>
      <body className="flex flex-col">
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="zh" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
        <div className="flex min-h-screen flex-col bg-white text-neutral-900">
          <div id="_main_header">
            <Navbar locale="zh" />
          </div>
          <main
            id="_main_content"
            className="flex-1 focus-ring scroll-mt-4"
            role="main"
            aria-label="主要内容"
            tabIndex={-1}
          >
            {children}
          </main>
          <Footer locale="zh" />
          <StickyVideoRailClient locale="zh" />
          <SupportLauncher
          locale="zh"
          enabled={isStoreConfigured()}
          attachments={isFilesConfigured()}
        />
          <DeferredSpeedInsights />
        </div>
      </body>
    </html>
  );
}
