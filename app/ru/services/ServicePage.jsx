import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo/seoConfig";

import { RUSSIAN_SERVICE_LIST } from "./serviceData";

const WHATSAPP_TEXT =
  "%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D1%8F%20%D0%B2%20%D0%A2%D1%83%D1%80%D1%86%D0%B8%D0%B8.";

const BUSINESS_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Hamidiye, Anadolu Cd. 61 A",
  addressLocality: "Kagithane",
  addressRegion: "Istanbul",
  postalCode: "34400",
  addressCountry: "TR",
};

function buildServiceJsonLd(service) {
  const pageUrl = `${SITE_URL}${service.href}`;
  const faqId = `${pageUrl}#faq`;
  const serviceId = `${pageUrl}#service`;

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: service.title,
      description: service.description,
      inLanguage: "ru-RU",
      isPartOf: { "@id": `${SITE_URL}/ru#website` },
      about: { "@id": serviceId },
      hasPart: [{ "@id": faqId }],
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: service.title,
      description: service.description,
      serviceType: service.shortTitle,
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "Стамбул" },
        { "@type": "City", name: "Анталья" },
        { "@type": "City", name: "Анкара" },
        { "@type": "City", name: "Измир" },
      ],
      provider: {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/ru#business`,
        name: "Sahneva Organizasyon",
        url: `${SITE_URL}/ru`,
        telephone: "+90 545 304 86 71",
        address: BUSINESS_ADDRESS,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        priceCurrency: "TRY",
      },
    },
  ];

  if (service.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      inLanguage: "ru-RU",
      mainEntity: service.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function RelatedServices({ currentSlug }) {
  const related = RUSSIAN_SERVICE_LIST.filter((item) => item.slug !== currentSlug).slice(0, 4);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {related.map((item) => (
        <Link
          key={item.slug}
          href={item.href}
          className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-cyan-300/50 hover:bg-white/[0.09]"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200/80">
            {item.eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-black text-white">{item.shortTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-white/[0.68]">{item.description}</p>
          <span className="mt-4 inline-flex text-sm font-black text-cyan-200 group-hover:text-white">
            Подробнее
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function ServicePage({ service }) {
  const jsonLd = buildServiceJsonLd(service);

  return (
    <div className="overflow-hidden bg-white">
      <JsonLd data={jsonLd} id={`ru-${service.slug}-jsonld`} />
      <BreadcrumbJsonLd
        items={[
          { name: "Главная", url: "/ru" },
          { name: "Услуги", url: "/ru/services" },
          { name: service.shortTitle, url: service.href },
        ]}
        baseUrl={SITE_URL}
      />

      <section className="relative min-h-[72vh] overflow-hidden bg-slate-950 text-white">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/64 to-slate-950/90" />
        <div className="absolute inset-0 grid-overlay opacity-25" aria-hidden="true" />
        <div
          className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-cyan-400/18 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/18 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto grid min-h-[72vh] gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.86]">
              {service.description}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50/76">
              {service.intent}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ru/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white shadow-[0_18px_42px_rgba(16,185,129,0.28)] transition hover:bg-emerald-600"
              >
                Получить расчет
              </Link>
              <a
                href={`https://wa.me/905453048671?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/14 bg-white/[0.08] p-5 shadow-2xl backdrop-blur md:p-6">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Быстрый ориентир
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {service.heroStats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="rounded-2xl bg-slate-950/54 p-4">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-bold text-white/[0.66]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/58 p-5">
              <h2 className="text-xl font-black text-white">Что важно для расчета</h2>
              <ul className="mt-4 space-y-3">
                {service.planningNotes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm font-semibold leading-6 text-white/[0.78]">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1250px] lg:[contain-intrinsic-size:auto_760px] bg-white py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Комплект услуги
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Технический план под площадку, город и формат события
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              {service.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.scenarios.map((scenario) => (
                <span
                  key={scenario}
                  className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-indigo-700"
                >
                  {scenario}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.highlights.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1180px] lg:[contain-intrinsic-size:auto_760px] bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Что входит
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Оборудование, монтаж и поддержка на площадке
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                  ✓
                </div>
                <p className="text-base font-bold leading-7 text-slate-800">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_950px] lg:[contain-intrinsic-size:auto_620px] bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
                Сценарии использования
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                Для событий, где важны видимость, темп и аккуратная техническая работа
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {service.useCases.map((item) => (
                <article key={item.title} className="rounded-3xl bg-slate-950 p-6 text-white">
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.72]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_980px] lg:[contain-intrinsic-size:auto_620px] bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Процесс
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              От брифа до демонтажа в понятной последовательности
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <article
                key={step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-200 text-base font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-7 text-white/[0.76]">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="content-visibility-auto [contain-intrinsic-size:auto_1100px] lg:[contain-intrinsic-size:auto_760px] bg-white py-16 md:py-20"
      >
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1fr_0.88fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Вопросы
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Частые вопросы перед расчетом
            </h2>
            <div className="mt-7 divide-y divide-slate-200">
              {service.faq.map((item) => (
                <article key={item.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Расчет под вашу площадку
            </p>
            <h2 className="mt-3 text-3xl font-black">Отправьте город, дату и формат</h2>
            <p className="mt-4 text-sm leading-7 text-white/[0.74]">
              Мы подберем рабочий комплект для мероприятия в Турции: оборудование, монтаж,
              логистику, команду и техническую поддержку на площадке.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/ru/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 font-black text-slate-950"
              >
                Связаться
              </Link>
              <a
                href={`https://wa.me/905453048671?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 font-black text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1100px] lg:[contain-intrinsic-size:auto_620px] bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Дополнительные услуги
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Соберите мероприятие в Турции одной технической командой
            </h2>
            <p className="mt-4 text-base leading-8 text-white/[0.70]">
              Часто один проект требует сразу несколько направлений: сцена, LED, звук,
              свет, шатер, подиум, truss, мебель и поддержка в день события.
            </p>
          </div>
          <RelatedServices currentSlug={service.slug} />
        </div>
      </section>
    </div>
  );
}

