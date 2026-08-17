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
import JsonLd from "@/components/seo/JsonLd";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import {
  AI_PREVIEW_ROBOTS,
  BASE_SITE_URL,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import {
  LOCAL_BUSINESS_IDENTITY,
  ORGANIZATION_IDENTITY,
} from "@/lib/structuredData/organizationIdentity";
import {
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  SOCIAL_PROFILES,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

const content = LOCALE_CONTENT.zh;
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
      ...ORGANIZATION_IDENTITY,
      name: "Sahneva Organizasyon",
      alternateName: "Sahneva",
      url: BASE_SITE_URL,
      logo: { "@id": LOGO_ID },
      description:
        "土耳其专业活动技术制作公司，提供舞台、T台、LED屏幕、音响灯光及篷房租赁服务，覆盖土耳其全境。",
      knowsAbout: [
        "舞台租赁",
        "T台租赁",
        "LED屏幕租赁",
        "篷房租赁",
        "企业活动制作",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905453048671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en", "de", "ar", "ru", "zh"],
      },
      sameAs: SOCIAL_PROFILES,
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
        postalCode: "34408",
        addressCountry: "TR",
      },
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
        "舞台、T台、LED屏幕、音响灯光与篷房租赁的专业活动技术解决方案。",
      inLanguage: "zh",
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
        <JsonLd id="global-ld-json-zh" data={globalJsonLd} />
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
