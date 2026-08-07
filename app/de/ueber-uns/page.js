import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const DE_ABOUT_URL = buildCanonical("/de/ueber-uns");
const DE_ABOUT_IMAGE = `${SITE_URL}/img/hakkimizda-hero-corporate.webp`;
const ORGANIZATION_ID = `${SITE_URL}/#org`;

const VALUES = [
  {
    title: "Sicherheit",
    text: "Vor der Freigabe prüfen wir Tragkonstruktion, Lastannahmen, Stromversorgung, Höhen und die Wege für den Aufbau – Punkt für Punkt und dokumentiert.",
  },
  {
    title: "Planbarkeit",
    text: "Transport, Aufbau, Test und Abbau werden so getaktet, dass sie auch in engen Zeitfenstern der Location aufgehen.",
  },
  {
    title: "Nachvollziehbarkeit",
    text: "Im Angebot stehen Equipment, Crew, Zeiten und Zuständigkeiten getrennt – Sie sehen, wofür jede Position steht.",
  },
];

const MILESTONES = [
  {
    year: "2012",
    title: "Gründung in Istanbul",
    text: "Start mit Bühnenbau und Podesten für Firmenveranstaltungen im Großraum Istanbul.",
  },
  {
    year: "2016",
    title: "Eigener LED- und Tonpark",
    text: "Aufbau eines eigenen Bestands an LED-Wänden, Beschallung und Lichttechnik – damit entfällt die Abhängigkeit von Subunternehmern bei den Kerngewerken.",
  },
  {
    year: "2019",
    title: "Landesweite Projekte",
    text: "Regelmäßige Produktionen außerhalb Istanbuls: Antalya, Ankara, Izmir und weitere Provinzen mit eigener Logistik.",
  },
  {
    year: "2022",
    title: "Großformate und E-Sport",
    text: "Produktionen mit mehreren hundert Quadratmetern LED-Fläche, Mehrkameraregie und Livestream – unter anderem für internationale E-Sport-Finals.",
  },
  {
    year: "Heute",
    title: "Über 700 Projekte",
    text: "Kongresse, Produktlaunches, Konzerte, Messen und Open-Air-Formate – als Hauptauftragnehmer oder als technischer Partner von Agenturen.",
  },
];

const CAPABILITIES = [
  {
    title: "Eigener Gerätepark",
    text: "Bühnenelemente, Traversen, LED-Kabinette, Line-Array-Systeme, Lichttechnik und Zelte im eigenen Bestand – geprüft, gewartet und einsatzbereit.",
  },
  {
    title: "Feste Technikcrew",
    text: "Eingespielte Teams für Bühnenbau, Ton, Licht, Video und Rigging. Bei Großprojekten arbeiten die Gewerke unter einer technischen Leitung.",
  },
  {
    title: "Eigene Logistik",
    text: "Fahrzeuge und Transportplanung im Haus. Anlieferzeiten richten sich nach den Vorgaben der Location, nicht umgekehrt.",
  },
  {
    title: "Planung vor dem Aufbau",
    text: "Grundriss, Lastannahme, Sichtachsen, Stromverteilung und Ablaufplan liegen vor dem ersten Transport fest.",
  },
];

const WORKING_MODELS = [
  {
    title: "Als Hauptauftragnehmer",
    text: "Unternehmen und Veranstalter beauftragen uns direkt mit der gesamten technischen Produktion. Planung, Equipment, Crew, Aufbau, Betrieb und Abbau laufen über einen Vertrag und einen Ansprechpartner.",
  },
  {
    title: "Als technischer Partner einer Agentur",
    text: "Agenturen aus dem In- und Ausland binden uns als lokalen Technikpartner ein. Sie führen den Kunden, wir liefern die Technik – Auftreten vor Ort, Kommunikation und Dokumentation richten sich nach Ihren Vorgaben.",
  },
];

export const metadata = {
  title: "Über uns — Ihr Technikteam in der Türkei",
  description:
    "Sahneva ist ein Team für Veranstaltungstechnik mit Sitz in Istanbul. Seit 2012 über 700 Projekte: Bühne, LED-Wand, Ton, Licht, Traversen und Zelte aus einer Hand.",
  alternates: {
    canonical: DE_ABOUT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/hakkimizda`,
      en: `${SITE_URL}/en/about`,
      de: DE_ABOUT_URL,
      ar: `${SITE_URL}/ar/about`,
      ru: `${SITE_URL}/ru/about`,
      zh: `${SITE_URL}/zh/about`,
      "x-default": `${SITE_URL}/en/about`,
    },
  },
  openGraph: {
    title: "Über uns — Technikteam für Veranstaltungen in der Türkei | Sahneva",
    description:
      "Sahneva ist ein Team für Veranstaltungstechnik mit Sitz in Istanbul. Seit 2012 über 700 Projekte: Bühne, LED-Wand, Ton, Licht, Traversen und Zelte aus einer Hand.",
    url: DE_ABOUT_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: DE_ABOUT_IMAGE,
        width: 1200,
        height: 630,
        alt: "Das Technikteam von Sahneva beim Aufbau einer Veranstaltung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns — Technikteam für Veranstaltungen in der Türkei | Sahneva",
    description:
      "Sahneva ist ein Team für Veranstaltungstechnik mit Sitz in Istanbul. Seit 2012 über 700 Projekte.",
    images: [DE_ABOUT_IMAGE],
  },
};

const ABOUT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${DE_ABOUT_URL}#webpage`,
      url: DE_ABOUT_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "de-DE",
      about: { "@id": ORGANIZATION_ID },
      breadcrumb: { "@id": `${DE_ABOUT_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${DE_ABOUT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/de` },
        { "@type": "ListItem", position: 2, name: "Über uns", item: DE_ABOUT_URL },
      ],
    },
  ],
};

export default function GermanAboutPage() {
  return (
    <div className="bg-white">
      <JsonLd id="de-about-jsonld" data={ABOUT_JSON_LD} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="/img/hakkimizda-hero-corporate.webp"
          alt="Sahneva Technikteam beim Aufbau einer Firmenveranstaltung"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/70 to-slate-950/92" />
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
              Über uns
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Ein Technikteam, das Veranstaltungen in der Türkei umsetzt
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.86]">
              Sahneva plant und realisiert seit 2012 die technische Produktion von Veranstaltungen –
              von der Bühne über LED-Wände bis zu Ton, Licht und Zelten. Sitz ist Istanbul, gearbeitet
              wird in der gesamten Türkei.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "2012", label: "seit der Gründung" },
                { value: "700+", label: "realisierte Projekte" },
                { value: "81", label: "Provinzen abgedeckt" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/[0.08] p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-bold text-white/[0.68]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_900px] lg:[contain-intrinsic-size:auto_600px] py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Wie wir arbeiten
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Technik ist bei uns keine Liste, sondern ein Ablauf
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
              Die meisten Probleme auf einer Veranstaltung entstehen nicht am Gerät, sondern an den
              Schnittstellen: zwischen Bühnenbau und Rigging, zwischen Zuspielung und Regie, zwischen
              Anlieferzeit und Hausordnung der Location. Deshalb halten wir diese Gewerke im eigenen
              Team – und planen den Ablauf, bevor das erste Fahrzeug losfährt.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {VALUES.map((value) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-black text-slate-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1000px] lg:[contain-intrinsic-size:auto_640px] bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Kapazität
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Was wir im eigenen Haus haben
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Eigener Bestand bedeutet vor allem eines: Wir sagen zu, was wir tatsächlich liefern
              können, und müssen für die Kerngewerke nicht auf die Verfügbarkeit Dritter warten.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {CAPABILITIES.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_1000px] lg:[contain-intrinsic-size:auto_640px] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Entwicklung
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Vom Bühnenbau zur kompletten Produktion
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {MILESTONES.map((milestone) => (
              <article
                key={milestone.year}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-600">
                  {milestone.year}
                </p>
                <h3 className="mt-3 text-lg font-black text-slate-950">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{milestone.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_800px] lg:[contain-intrinsic-size:auto_520px] bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Zusammenarbeit
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Zwei Modelle – je nachdem, wer den Kunden führt
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {WORKING_MODELS.map((model) => (
              <article
                key={model.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-black text-white">{model.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.74]">{model.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/de/kontakt"
              className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white transition hover:bg-emerald-600"
            >
              Angebot anfordern
            </Link>
            <Link
              href="/de/referenzen"
              className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white transition hover:bg-white/15"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
