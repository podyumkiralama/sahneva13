import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { RUSSIAN_SERVICE_LIST } from "./serviceData";

const RU_SERVICES_URL = buildCanonical("/ru/services");
const RU_SERVICES_TITLE = "Услуги для мероприятий в Турции";
const RU_SERVICES_DESCRIPTION =
  "Аренда сцен, подиумов, LED-экранов, звука, света, truss, шатров, столов и стульев для мероприятий в Турции.";
const RU_SERVICES_IMAGE = `${SITE_URL}/img/hero-bg-desktop.webp`;

const SERVICE_KEYWORDS = [
  "аренда сцены в Турции",
  "аренда LED-экрана в Турции",
  "звук и свет для мероприятий",
  "аренда шатров",
  "корпоративные события",
  "технический продакшн",
];

const SERVICES_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Sahneva услуги для мероприятий в Турции",
  url: RU_SERVICES_URL,
  inLanguage: "ru",
  itemListElement: RUSSIAN_SERVICE_LIST.map((service, index) => ({
    "@type": "Offer",
    position: index + 1,
    url: `${SITE_URL}${service.href}`,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      areaServed: "Türkiye",
    },
  })),
};

export const metadata = {
  title: RU_SERVICES_TITLE,
  description: RU_SERVICES_DESCRIPTION,
  alternates: {
    canonical: RU_SERVICES_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hizmetler`,
      en: `${SITE_URL}/en/services`,
      ar: `${SITE_URL}/ar/services`,
      ru: RU_SERVICES_URL,
      "x-default": `${SITE_URL}/en/services`,
    },
  },
  openGraph: {
    title: `${RU_SERVICES_TITLE} | Sahneva`,
    description: RU_SERVICES_DESCRIPTION,
    url: RU_SERVICES_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: RU_SERVICES_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva - услуги для мероприятий в Турции",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RU_SERVICES_TITLE} | Sahneva`,
    description: RU_SERVICES_DESCRIPTION,
    images: [RU_SERVICES_IMAGE],
  },
};

export default function RussianServicesPage() {
  return (
    <div className="bg-white">
      <JsonLd data={SERVICES_JSON_LD} />
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", url: "/ru" },
          { name: "Услуги", url: "/ru/services" },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
        <div className="absolute inset-0 opacity-45" aria-hidden="true">
          <Image
            src="/img/hero-bg-desktop.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/80 to-blue-950/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Sahneva services
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Услуги для мероприятий в Турции
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/[0.82]">
              Сцены, LED-экраны, звук, свет, truss, шатры, мебель и площадочная
              команда для конференций, выставок, gala, концертов и open-air проектов в Турции.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {SERVICE_KEYWORDS.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-18">
        <div className="grid gap-6 lg:grid-cols-2">
          {RUSSIAN_SERVICE_LIST.map((service) => (
            <article
              key={service.slug}
              id={service.slug}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={`${service.title} - Sahneva`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
                    {service.eyebrow}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
                    {service.shortTitle}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-base leading-7 text-slate-700">{service.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.scenarios.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={service.href}
                    className="inline-flex min-h-[46px] items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
                  >
                    Подробнее
                  </Link>
                  <Link
                    href="/ru/contact"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-xl border border-slate-300 px-5 text-sm font-black text-slate-950 transition hover:border-slate-950"
                  >
                    Получить расчет
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          {[
            ["Где", "Стамбул, Анталья, Анкара, Измир и другие города Турции."],
            ["Что", "Сцена, LED, звук, свет, truss, шатер, столы и стулья."],
            ["Как", "Бриф, подбор комплекта, монтаж, тест, поддержка, демонтаж."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

