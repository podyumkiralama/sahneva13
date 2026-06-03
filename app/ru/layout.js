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
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import { BASE_SITE_URL, buildAlternateLanguages, buildCanonical } from "@/lib/seo/seoConfig";

const content = LOCALE_CONTENT.ru;
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
