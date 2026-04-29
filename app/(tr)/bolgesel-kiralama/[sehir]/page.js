import Link from "next/link";
import { notFound } from "next/navigation";

import JsonLdScript from "@/components/seo/JsonLd";
import {
  getCityContext,
  getRegionalCity,
  REGIONAL_CITIES,
} from "@/lib/seo/regionalCities";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const SERVICES = [
  { title: "Sahne Kiralama", href: "/sahne-kiralama" },
  { title: "Podyum Kiralama", href: "/podyum-kiralama" },
  { title: "LED Ekran Kiralama", href: "/led-ekran-kiralama" },
  { title: "Truss Kiralama", href: "/truss-kiralama" },
  { title: "Ses ve Işık Sistemleri", href: "/ses-isik-sistemleri" },
  { title: "Çadır Kiralama", href: "/cadir-kiralama" },
];

export const dynamic = "force-static";
export const dynamicParams = false;
export const revalidate = 86400;

export function generateStaticParams() {
  return REGIONAL_CITIES.map((city) => ({ sehir: city.slug }));
}

function getCityOrThrow(slug) {
  const city = getRegionalCity(slug);
  if (!city) notFound();
  return city;
}

export async function generateMetadata({ params }) {
  const { sehir } = await params;
  const city = getCityOrThrow(sehir);
  const context = getCityContext(city);
  const path = `/bolgesel-kiralama/${city.slug}`;
  const url = `${SITE}${path}`;

  return {
    title: `${city.name} Kiralama | Sahne, LED Ekran, Truss ve Ses Işık`,
    description: `${city.name} için ${context.meta}. Sahneva; keşif, lojistik, kurulum, test, etkinlik günü operasyonu ve söküm akışını tek ekipte planlar.`,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
        "x-default": url,
      },
    },
    openGraph: {
      type: "website",
      url,
      title: `${city.name} Kiralama | Sahneva`,
      description: `${city.name} bölgesinde sahne, podyum, LED ekran, truss, ses ve ışık sistemleri kiralama için şehir bazlı teknik planlama.`,
      images: [
        {
          url: `${SITE}/img/bolgesel-kiralama/hero.webp`,
          width: 1200,
          height: 630,
          alt: `${city.name} bölgesel kiralama hizmetleri`,
        },
      ],
      locale: "tr_TR",
      siteName: "Sahneva",
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.name} Kiralama | Sahneva`,
      description: `${city.name} için şehir bazlı etkinlik ekipmanı kiralama ve kurulum planı.`,
      images: [`${SITE}/img/bolgesel-kiralama/hero.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

function CityJsonLd({ city, context }) {
  const pageUrl = `${SITE}/bolgesel-kiralama/${city.slug}`;
  const orgId = `${SITE}/#org`;
  const webId = `${SITE}/#website`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: `${city.name} Kiralama | Sahne, LED Ekran, Truss ve Ses Işık`,
        description: `${city.name} için ${context.meta}.`,
        isPartOf: { "@id": webId },
        about: { "@id": serviceId },
        inLanguage: "tr-TR",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
          {
            "@type": "ListItem",
            position: 2,
            name: "Bölgesel Kiralama",
            item: `${SITE}/bolgesel-kiralama`,
          },
          { "@type": "ListItem", position: 3, name: city.name, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: `${city.name} Bölgesel Kiralama Hizmeti`,
        serviceType: "Etkinlik ekipmanı kiralama, kurulum ve teknik operasyon",
        description: `${city.name} için sahne, podyum, LED ekran, truss, ses ve ışık sistemleri kiralama planı.`,
        provider: { "@id": orgId },
        areaServed: { "@type": "City", name: city.name },
        mainEntityOfPage: { "@id": pageId },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${city.name} Kiralama Hizmetleri`,
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${SITE}${service.href}`,
              areaServed: { "@type": "City", name: city.name },
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": pageId },
        about: { "@id": serviceId },
        inLanguage: "tr-TR",
        mainEntity: [
          {
            "@type": "Question",
            name: `${city.name} için kiralama fiyatı nasıl belirlenir?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Fiyat; ${city.name} içindeki mekan erişimi, ekipman listesi, kurulum süresi, ekip sayısı ve lojistik planına göre hazırlanır.`,
            },
          },
          {
            "@type": "Question",
            name: `${city.name} için hangi hizmetleri birlikte alabilirim?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sahne, podyum, LED ekran, truss, ses ve ışık sistemleri aynı proje içinde birlikte planlanabilir.",
            },
          },
        ],
      },
    ],
  };

  return <JsonLdScript id={`ld-json-bolgesel-${city.slug}`} data={data} />;
}

export default async function CityRegionalRentalPage({ params }) {
  const { sehir } = await params;
  const city = getCityOrThrow(sehir);
  const context = getCityContext(city);
  const cityHref = `/bolgesel-kiralama/${city.slug}`;

  return (
    <main className="bg-slate-950 text-white">
      <CityJsonLd city={city} context={context} />

      <section className="relative overflow-hidden px-4 py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.22),transparent_36%),linear-gradient(135deg,#020617,#111827_45%,#0f172a)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Link
              href="/bolgesel-kiralama"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75 hover:bg-white/10"
            >
              Bölgesel kiralama ağı
            </Link>
            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {city.name} kiralama için şehir bazlı teknik plan
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              {city.name} bölgesinde {context.focus}. Sahneva; sahne, podyum,
              LED ekran, truss, ses ve ışık kalemlerini tek operasyon takviminde
              birleştirir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${cityHref}#teklif-bilgileri`}
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-black text-slate-950 hover:bg-white/90"
              >
                {city.name} için teklif al
              </Link>
              <Link
                href="/projeler"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-black text-white hover:bg-white/10"
              >
                Projeleri incele
              </Link>
            </div>
          </div>

          <aside
            aria-label={`${city.name} planlama özeti`}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
              Yerel bağlam
            </p>
            <h2 className="mt-3 text-2xl font-black">{city.name} için öne çıkan plan</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/72">{context.planning}</p>
            <div className="mt-6 grid gap-3">
              {context.serviceMix.map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white/85"
                >
                  {service}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-14 md:grid-cols-3">
        {SERVICES.slice(0, 6).map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]"
          >
            <h2 className="text-lg font-black">{service.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {city.name} etkinlikleri için bu hizmeti şehir lojistiği, kurulum
              süresi ve mekan şartlarına göre birlikte planlarız.
            </p>
          </Link>
        ))}
      </section>

      <section id="teklif-bilgileri" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-2xl font-black">{city.name} teklifinde hangi bilgiler hız kazandırır?</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Etkinlik tarihi ve kurulum saat aralığı",
              "Mekan adı, yükleme alanı ve zemin bilgisi",
              "Tahmini kişi sayısı ve seyir mesafesi",
              "Sahne, LED ekran, truss, ses ve ışık ihtiyaç listesi",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 text-sm text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
