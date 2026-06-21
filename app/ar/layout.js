export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import SiteHeader from "../../components/i18n/SiteHeader";
import SiteFooter from "../../components/i18n/SiteFooter";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import JsonLd from "@/components/seo/JsonLd";
import { LOCALE_CONTENT } from "../../lib/i18n/localeContent";
import {
  BASE_SITE_URL,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import {
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";
import CloudflareWebAnalytics from "@/components/analytics/CloudflareWebAnalytics";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration.client";
import SpeculationRules from "@/components/performance/SpeculationRules";

const content = LOCALE_CONTENT.ar;

const LOGO_ID = `${BASE_SITE_URL}/#logo`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;
const OG_IMAGE_URL = `${BASE_SITE_URL}/img/hero-bg.webp`;

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
        "شركة إنتاج فعاليات احترافية تقدم خدمات تأجير المسارح والمنصات وشاشات LED وأنظمة الصوت والإضاءة والخيام في جميع أنحاء تركيا.",
      knowsAbout: [
        "تأجير المسارح",
        "تأجير المنصات",
        "تأجير شاشات LED",
        "تأجير الخيام",
        "تنظيم الفعاليات",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905453048671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en", "ar"],
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
        "حلول إنتاج فعاليات احترافية لتأجير المسارح والمنصات وشاشات LED وأنظمة الصوت والإضاءة والخيام.",
      inLanguage: "ar",
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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default function ArabicLayout({ children }) {
  return (
    <html
      lang="ar"
      xmlLang="ar"
      dir={content.direction}
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <TrustedTypesPolicy />
        <CloudflareWebAnalytics />
        <SpeculationRules locale="ar" />
      </head>
      <body className="flex flex-col" dir={content.direction}>
        <span id="_page_top" className="sr-only" aria-hidden="true" />
        <SkipLinks locale="ar" />
        <AnalyticsConsentWrapper />
        <ServiceWorkerRegistration />
        <JsonLd id="global-ld-json-ar" data={globalJsonLd} />
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

      <div id="_main_footer">
        <SiteFooter strings={content.footer} />
      </div>
      <DeferredSpeedInsights />
    </div>
      </body>
    </html>
  );
}
