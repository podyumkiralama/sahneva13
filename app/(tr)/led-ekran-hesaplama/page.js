import Link from "next/link";
import JsonLdScript from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import LedCalculatorClient from "./LedCalculatorClient";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/led-ekran-hesaplama`;

export const revalidate = 86400;

export const metadata = {
  title: "LED Ekran Hesaplama | m² ve Yaklaşık Fiyat Aracı",
  description:
    "LED ekran ölçüsü, panel tipi, gün sayısı ve Watchout ihtiyacına göre standart LED ve P1.9 Indoor LED için yaklaşık başlangıç bedelini hesaplayın.",
  alternates: buildLanguageAlternates({ tr: PAGE_URL, canonical: PAGE_URL }),
  openGraph: {
    title: "LED Ekran Hesaplama | Sahneva",
    description:
      "Standart LED ekran ve P1.9 Indoor LED için m² bazlı yaklaşık başlangıç bedeli hesaplama aracı.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp`,
        width: 1200,
        height: 630,
        alt: "LED ekran hesaplama aracı ve kurumsal etkinlik LED ekran kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Ekran Hesaplama | Sahneva",
    description: "Standart LED ekran ve P1.9 Indoor LED için yaklaşık m² başlangıç bedeli hesaplayın.",
    images: [`${SITE_URL}/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function JsonLd() {
  return (
    <JsonLdScript
      id="ld-json-led-ekran-hesaplama"
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "LED Ekran Hesaplama Aracı",
        url: PAGE_URL,
        inLanguage: "tr-TR",
        description:
          "Standart LED ekran ve P1.9 Indoor LED için m², gün sayısı ve Watchout ihtiyacına göre yaklaşık başlangıç bedeli hesaplayan Sahneva aracı.",
        publisher: {
          "@type": "Organization",
          name: "Sahneva",
          url: SITE_URL,
        },
      }}
    />
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <LedCalculatorClient />
      <section className="bg-slate-950 px-4 pb-20 text-white">
        <div className="mx-auto max-w-4xl rounded-[28px] border border-white/10 bg-white/[0.05] p-6 text-center md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200">Fiyat notu</p>
          <p className="mt-4 text-base leading-7 text-slate-300">
            Bu araç yaklaşık başlangıç bedeli verir. Detaylı m² bedelleri ve fiyatı etkileyen teknik kalemler için{" "}
            <Link href="/led-ekran-kiralama-fiyatlari" className="font-bold text-white underline underline-offset-4">
              LED ekran kiralama fiyatları
            </Link>{" "}
            sayfasını, hizmet kapsamı ve kurulum senaryoları için{" "}
            <Link href="/led-ekran-kiralama" className="font-bold text-white underline underline-offset-4">
              LED ekran kiralama
            </Link>{" "}
            ana hizmet sayfasını inceleyebilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
