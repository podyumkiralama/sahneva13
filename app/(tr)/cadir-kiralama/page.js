// app/(tr)/cadir-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

/* ================== REVALIDATE ================== */
export const revalidate = 1800;

/* ================== SABİTLER ================== */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+çadır+kiralama+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bdüğün%2Ffuar%2Fkonser%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

/* ================== HERO BLUR ================== */
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== DYNAMIC GALERİ ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title: "Çadır Kiralama | Profesyonel Etkinlik Çözümleri | Sahneva",
  description:
    "Pagoda, şeffaf dome ve endüstriyel çadır kiralama. Türkiye genelinde profesyonel kurulum ve anahtar teslim çözümler.",
  alternates: { canonical: `${ORIGIN}/cadir-kiralama` },
  openGraph: {
    title: "Çadır Kiralama | Sahneva Organizasyon",
    description:
      "Düğün, fuar, festival ve kurumsal etkinlikler için profesyonel çadır çözümleri.",
    url: `${ORIGIN}/cadir-kiralama`,
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${ORIGIN}/img/og/sahneva-og.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon",
      },
    ],
  },
};

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden pt-20">
      <Image
        src="/img/cadir/hero.webp"
        alt="Profesyonel çadır kiralama hizmetleri"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90" />

      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Profesyonel <span className="gradient-text">Çadır Kiralama</span>
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Düğün • Fuar • Festival • Kurumsal Etkinlikler
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={WHATSAPP}
            target="_blank"
            className="px-8 py-4 rounded-2xl bg-green-500 text-white font-bold hover:scale-105 transition"
          >
            💬 Hemen Teklif Al
          </Link>
          <Link
            href="#hizmetler"
            className="px-8 py-4 rounded-2xl border-2 border-white text-white hover:bg-white/20 transition"
          >
            🎯 Hizmetlerimiz
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== ANAHTAR TESLİM ================== */
function TurnkeyInfrastructure() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3">
          Anahtar Teslim Operasyon Gücü
        </p>
        <h2 className="text-4xl font-black mb-6">
          “Sıfırdan Kurulum” Odaklı Anahtar Teslim Çadır Altyapısı
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Sahneva, boş bir alanı tüm teknik gereksinimleri karşılanmış güvenli bir
          etkinlik alanına dönüştürür. Tüm süreç tek ekip tarafından planlanır ve
          yönetilir.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>• Zemin tipine uygun profesyonel ankraj ve sabitleme</li>
          <li>• Endüstriyel iklimlendirme çözümleri</li>
          <li>• Kesintisiz enerji ve yedekleme sistemleri</li>
          <li>• Saha içi teknik altyapı organizasyonu</li>
          <li>• Uçtan uca operasyon yönetimi</li>
        </ul>
      </div>
    </section>
  );
}

/* ================== HİZMETLER ================== */
function Services() {
  const services = [
    "Pagoda Çadır Sistemleri",
    "Şeffaf Dome Çadırlar",
    "Endüstriyel Çadırlar",
    "Fuar & Sergi Çadırları",
    "Aydınlatma ve Elektrik",
    "Kurulum & Teknik Destek",
  ];

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-black mb-12">
          Profesyonel Hizmetlerimiz
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold">{s}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== GALERİ ================== */
function Gallery() {
  const images = Array.from({ length: 8 }).map((_, i) => ({
    src: `/img/cadir/${i + 1}.webp`,
    alt: "Çadır kiralama proje görseli",
  }));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-black text-center mb-12">
          Proje Galerimiz
        </h2>
        <CaseGallery images={images} visibleCount={8} priorityCount={2} />
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
      <h2 className="text-4xl font-black mb-6">
        Etkinliğiniz İçin Profesyonel Çözüm Alın
      </h2>
      <Link
        href={WHATSAPP}
        target="_blank"
        className="inline-block mt-4 px-10 py-5 bg-white text-blue-700 rounded-2xl font-bold hover:scale-105 transition"
      >
        💬 WhatsApp’tan Yaz
      </Link>
    </section>
  );
}

/* ================== PAGE ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Hizmetler", url: `${SITE_URL}/hizmetler` },
    { name: "Çadır Kiralama", url: `${SITE_URL}/cadir-kiralama` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <Hero />
      <TurnkeyInfrastructure />
      <Services />
      <Gallery />
      <CTA />
    </>
  );
}