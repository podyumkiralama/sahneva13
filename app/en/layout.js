export const revalidate = 86400;

import "../../styles/globals.css";
import { headers } from "next/headers";
import { inter } from "../fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyVideoRailClient from "@/components/StickyVideoRail.client";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import JsonLd from "@/components/seo/JsonLd";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";
import {
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import {
  BASE_SITE_URL,
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

const content = LOCALE_CONTENT.en;

const EDITOR_ID = `${BASE_SITE_URL}/#editor-en`;
const LOGO_ID = `${BASE_SITE_URL}/#logo`;
const OG_IMAGE_URL = `${BASE_SITE_URL}/img/hero-bg.webp`;
const LOGO_URL = `${BASE_SITE_URL}/img/logo.png`;

/* ================== JSON-LD: GLOBAL GRAPH (English) ================== */
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
        "Professional event production company offering stage, podium, LED screen, sound-light and tent rental services nationwide across Türkiye.",
      knowsAbout: [
        "podium rental",
        "stage rental",
        "modular stage rental",
        "LED screen rental",
        "tent rental",
        "corporate event organization",
      ],
      sameAs: [
        "https://www.instagram.com/sahnevaorganizasyon",
        "https://www.youtube.com/@sahneva",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+905453048671",
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en", "ar"],
      },
    },

    {
      "@type": "Person",
      "@id": EDITOR_ID,
      name: "Sahneva Editor",
      url: BASE_SITE_URL,
      worksFor: { "@id": ORGANIZATION_ID },
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
        latitude: 41.0961692,
        longitude: 28.9792127,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Anadolu Caddesi No:61A, Hamidiye Mahallesi",
        addressLocality: "Istanbul",
        addressRegion: "Istanbul",
        postalCode: "34400",
        addressCountry: "TR",
      },
      openingHours: "Mo-Su 00:00-23:59",
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
        "Professional event production solutions for stage, podium, LED screen, sound-light and tent rentals.",
      inLanguage: "en-US",
      about: [
        "stage rental",
        "podium rental",
        "LED screen rental",
        "tent rental",
        "corporate events",
      ],
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

/* ================== META ================== */
export const metadata = {
  metadataBase: new URL(BASE_SITE_URL),
  icons: {
    icon: [
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
  description: content.meta.description,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
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
        alt: "Sahneva – stage, podium, LED screen, sound-light and tent rental services across Türkiye",
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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default async function EnglishLayout({ children }) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html
      lang="en"
      xmlLang="en"
      dir="ltr"
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex flex-col">
        <SkipLinks locale="en" />
        <AnalyticsConsentWrapper />
      <JsonLd id="global-ld-json-en" data={globalJsonLd} nonce={nonce} />

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
        <DeferredSpeedInsights />
      </div>
      </body>
    </html>
  );
}
