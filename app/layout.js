// app/layout.jsx
import "../styles/globals.css";
import { inter } from "./fonts";
import SkipLinks from "@/components/SkipLinks";
import NewTabAccessibility from "@/components/NewTabAccessibility.client";
import { headers } from "next/headers";

/* ================== VIEWPORT ================== */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://www.sahneva.com"),
  manifest: "/manifest.json",
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
      dir={dir}
      className={`${inter.variable} font-sans`}
      suppressHydrationWarning
    >
       <body className="min-h-screen antialiased flex flex-col font-sans">
        <SkipLinks />
        <NewTabAccessibility />
        {children}
      </body>
    </html>
  );
}
