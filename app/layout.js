// app/layout.jsx
import "../styles/globals.css";
import { inter } from "./fonts";
import SkipLinks from "@/components/SkipLinks";
import NewTabAccessibility from "@/components/NewTabAccessibility.client";
import { SpeedInsights } from "@vercel/speed-insights/next";
const DEFAULT_LANG = "tr";
const DEFAULT_DIR = "ltr";

/* ================== VIEWPORT ================== */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export const metadata = {
  manifest: "/manifest.json",
};

/* ================== ROOT LAYOUT ================== */
export default function RootLayout({ children }) {
  return (
    <html
      lang={DEFAULT_LANG}
      dir={DEFAULT_DIR}
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
       <body className="min-h-screen antialiased flex flex-col font-sans">
        <SkipLinks />
        <NewTabAccessibility />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
