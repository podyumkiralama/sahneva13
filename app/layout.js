// app/layout.jsx

/* ================== ISR – global varsayılan ================== */
export const revalidate = 86400; // 24 saatte bir yenile (sayfa bazlı kurallar bunu ezer)

import "../styles/globals.css";
import { inter } from "./fonts";
import SkipLinks from "@/components/SkipLinks";
import AnalyticsConsentWrapper from "@/components/AnalyticsConsentWrapper.client";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/seo/seoConfig";

/* ================== VIEWPORT ================== */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

/* ================== ROOT LAYOUT ================== */
export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";

  let lang = "tr";
  let dir = "ltr";
  if (pathname.startsWith("/en")) {
    lang = "en";
  } else if (pathname.startsWith("/ar")) {
    lang = "ar";
    dir = "rtl";
  }

  return (
    <html
      lang={lang}
      xmlLang={lang}
      dir={dir}
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="flex flex-col">
        <SkipLinks locale={lang} />
        <AnalyticsConsentWrapper />
        {children}
      </body>
    </html>
  );
}
