// Yönetim arayüzü kendi kök düzeninde duruyor: site menüsü, alt bilgi,
// analitik ve şema işaretlemesi buraya girmiyor.

import "../../styles/globals.css";
import { inter } from "../fonts";

export const metadata = {
  title: "Sahneva Yönetim",
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
      <body className="bg-slate-100 text-slate-900">{children}</body>
    </html>
  );
}
