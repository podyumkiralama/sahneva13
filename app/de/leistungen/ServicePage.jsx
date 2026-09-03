import Image from "next/image";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import CaseGallery from "@/components/CaseGallery";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import { getPortfolioImages } from "@/lib/portfolioGallery";

import { GERMAN_SERVICE_LIST } from "./serviceData";

const WHATSAPP_TEXT = encodeURIComponent(
  "Guten Tag, ich hätte gerne ein Angebot für Veranstaltungstechnik von Sahneva.",
);

function buildServiceJsonLd(service) {
  const pageUrl = `${SITE_URL}${service.href}`;
  const serviceId = `${pageUrl}#service`;

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: service.title,
      description: service.description,
      inLanguage: "de-DE",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": serviceId },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: service.title,
      description: service.description,
      serviceType: service.shortTitle,
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "City", name: "Istanbul" },
        { "@type": "City", name: "Antalya" },
        { "@type": "City", name: "Ankara" },
        { "@type": "City", name: "Izmir" },
      ],
      // Tam kurum kimligi yalnizca domain kokunde tanimlidir.
      provider: { "@id": ORGANIZATION_ID },
    },
  ];


  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function RelatedServices({ currentSlug }) {
  const related = GERMAN_SERVICE_LIST.filter((item) => item.slug !== currentSlug).slice(0, 4);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {related.map((item) => (
        <Link
          key={item.slug}
          href={item.href}
          className="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-violet-300/50 hover:bg-white/[0.09]"
        >
          <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-200/80">
            {item.eyebrow}
          </p>
          <h3 className="mt-2 text-lg font-black text-white">{item.shortTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-white/[0.68]">{item.description}</p>
          <span className="mt-4 inline-flex text-sm font-black text-violet-200 group-hover:text-white">
            Details ansehen
          </span>
        </Link>
      ))}
    </div>
  );
}

export default function ServicePage({ service }) {
  const jsonLd = buildServiceJsonLd(service);
  const galleryImages = getPortfolioImages(service.gallery, "de");

  return (
    <div className="overflow-hidden bg-white">
      <JsonLd data={jsonLd} id={`de-${service.slug}-jsonld`} />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: "/de" },
          { name: "Leistungen", url: "/de/leistungen" },
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950/64 to-slate-950/90" />
        <div className="absolute inset-0 grid-overlay opacity-25" aria-hidden="true" />
        <div
          className="absolute -right-28 top-20 h-80 w-80 rounded-full bg-violet-400/18 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-violet-500/18 blur-[120px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto grid min-h-[72vh] gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <p className="inline-flex rounded-full border border-violet-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-violet-100 backdrop-blur">
              {service.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.86]">
              {service.description}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-violet-50/76">{service.intent}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/de/kontakt"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white shadow-[0_18px_42px_rgba(16,185,129,0.28)] transition hover:bg-emerald-600"
              >
                Angebot anfordern
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-200">
              Auf einen Blick
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
              <h2 className="text-xl font-black text-white">Das brauchen wir für ein Angebot</h2>
              <ul className="mt-4 space-y-3">
                {service.planningNotes.map((note) => (
                  <li
                    key={note}
                    className="flex gap-3 text-sm font-semibold leading-6 text-white/[0.78]"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300"
                      aria-hidden="true"
                    />
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
              Leistungsumfang
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Geplant nach Location, Stadt und Format – nicht nach Katalog
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">{service.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.scenarios.map((scenario) => (
                <span
                  key={scenario}
                  className="rounded-full bg-violet-50 px-3 py-2 text-xs font-black uppercase tracking-[0.08em] text-violet-700"
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
              Im Umfang enthalten
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Equipment, Aufbau und Betreuung vor Ort
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                  ✓
                </div>
                <p className="text-base font-bold leading-7 text-slate-800">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="content-visibility-auto [contain-intrinsic-size:auto_1200px] lg:[contain-intrinsic-size:auto_800px] bg-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                Projektgalerie
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                Aufnahmen von realisierten Projekten
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Die Bilder stammen aus dem Aufbau und vom Veranstaltungstag selbst – so sehen Sie
                direkt, wie unsere Arbeit vor Ort aussieht.
              </p>
            </div>
            <CaseGallery images={galleryImages} visibleCount={8} locale="de" />
            <div className="mt-8 text-center">
              <Link
                href="/de/referenzen"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border-2 border-violet-600 px-7 text-sm font-black text-violet-700 transition hover:bg-violet-600 hover:text-white"
              >
                Videos aus der Produktion ansehen
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="content-visibility-auto [contain-intrinsic-size:auto_950px] lg:[contain-intrinsic-size:auto_620px] bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
                Einsatzbereiche
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                Für Formate, bei denen Bild, Ablauf und Ausführung zählen
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-200">Ablauf</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Von der ersten Anfrage bis zum Abbau nachvollziehbar
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-4">
            {service.process.map((step, index) => (
              <article
                key={step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-200 text-base font-black text-slate-950">
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
              Häufige Fragen
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">Was vor dem Angebot oft gefragt wird</h2>
            <div className="mt-7 divide-y divide-slate-200">
              {service.faq.map((item) => (
                <article key={item.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Auf Ihre Location zugeschnitten
            </p>
            <h2 className="mt-3 text-3xl font-black">Senden Sie Stadt, Datum und Format</h2>
            <p className="mt-4 text-sm leading-7 text-white/[0.74]">
              Sie erhalten einen umsetzbaren technischen Plan: Equipment, Aufbau, Logistik, Crew und
              Betreuung während der Veranstaltung.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/de/kontakt"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-white px-6 font-black text-slate-950"
              >
                Kontakt aufnehmen
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
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-200">
              Weitere Leistungen
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Ein Technikteam für Ihre gesamte Produktion in der Türkei
            </h2>
            <p className="mt-4 text-base leading-8 text-white/[0.70]">
              Die meisten Projekte brauchen mehrere Gewerke gleichzeitig: Bühne, LED-Wand, Ton, Licht,
              Zelte, Laufstege, Traversen, Mobiliar und die Betreuung am Veranstaltungstag.
            </p>
          </div>
          <RelatedServices currentSlug={service.slug} />
        </div>
      </section>
    </div>
  );
}
