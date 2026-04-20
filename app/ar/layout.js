export const revalidate = 86400;

import "../../styles/globals.css";
import { inter } from "../fonts";
import SiteHeader from "../../components/i18n/SiteHeader";
import SiteFooter from "../../components/i18n/SiteFooter";
import DeferredSpeedInsights from "@/components/DeferredSpeedInsights.client";
import { LOCALE_CONTENT } from "../../lib/i18n/localeContent";
import {
  BASE_SITE_URL,
  buildAlternateLanguages,
  buildCanonical,
} from "@/lib/seo/seoConfig";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";

const content = LOCALE_CONTENT.ar;

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
    default: "سحنڤا | تأجير المسارح وشاشات LED والصوت والإضاءة في تركيا",
    template: "%s | Sahneva",
  },
  description:
    "تأجير المسارح وشاشات LED وأنظمة الصوت والإضاءة مع فرق فنية كاملة في جميع أنحاء تركيا.",
  applicationName: "Sahneva Organizasyon",
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
      <body className="flex flex-col" dir={content.direction}>
        <SkipLinks locale="ar" />
        <AnalyticsConsentWrapper />
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
