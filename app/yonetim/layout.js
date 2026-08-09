// Yönetim arayüzü kendi kök düzeninde duruyor: site menüsü, alt bilgi,
// analitik ve şema işaretlemesi buraya girmiyor.

import "../../styles/globals.css";
import { inter } from "../fonts";
import TrustedTypesPolicy from "@/components/security/TrustedTypesPolicy";

export const metadata = {
  title: "Sahneva Yönetim",
  // Sitenin manifest'i değil, panele özel olan. Ana ekrana eklendiğinde
  // ana sayfa yerine doğrudan panelde, kendi adı ve penceresiyle açılsın.
  manifest: "/destek-manifest.json",
  appleWebApp: {
    capable: true,
    title: "Sahneva Destek",
    statusBarStyle: "default",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} font-sans`}>
      {/* CSP `require-trusted-types-for 'script'` her sayfada geçerli; bu
          politika olmadan Next.js kendi parçalarını yükleyemez ve panel
          "Yükleniyor…" ekranında donar. */}
      <head>
        <TrustedTypesPolicy />
      </head>
      <body className="bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}
