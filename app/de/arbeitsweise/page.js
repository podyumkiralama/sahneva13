// app/de/arbeitsweise/page.js
import Image from "next/image";
import Link from "next/link";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/de/arbeitsweise";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/nasil-calisiriz/hero-surec.webp`;
const IMG_DIR = "/img/nasil-calisiriz";

export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "Arbeitsweise — unser Ablauf in 8 Schritten",
  description:
    "So läuft ein Projekt bei Sahneva: Bedarf klären, Angebot, Reservierung, technische Begehung, Aufbau, Betreuung am Veranstaltungstag und Abbau.",
  alternates: buildAlternatesForPath("/de/arbeitsweise"),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Arbeitsweise | Sahneva",
    description:
      "Bedarf → Angebot → Reservierung → Begehung → Aufbau → Veranstaltungstag → Abbau.",
    images: [
      { url: OG_IMAGE, width: 1200, height: 630, alt: "Der Projektablauf bei Sahneva" },
    ],
    siteName: "Sahneva",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbeitsweise | Sahneva",
    description:
      "Projektablauf bei Sahneva: Angebot, Begehung, Aufbau, Veranstaltungstag und Abbau.",
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const STEPS = [
  {
    stepNo: 1,
    label: "Erster Kontakt",
    title: "Anfrage und erste Abstimmung",
    text: "Sie schildern uns Ihren Bedarf – LED-Wand, Traversen, Bühne, Ton- und Lichttechnik – über das Kontaktformular oder per WhatsApp.",
    imageSrc: `${IMG_DIR}/01-ilk-iletisim.webp`,
    imageAlt: "Erste Kontaktaufnahme mit Sahneva und Klärung des Bedarfs",
  },
  {
    stepNo: 2,
    label: "Fachliche Beratung",
    title: "Beratung und Präzisierung",
    text: "Budget, Flächenmaße und technische Anforderungen werden geklärt; daraus entsteht ein erster Lösungsentwurf.",
    imageSrc: `${IMG_DIR}/02-uzman-gorusmesi.webp`,
    imageAlt: "Bedarfsanalyse und Planung im Beratungsgespräch",
  },
  {
    stepNo: 3,
    label: "Nach 48 Stunden",
    title: "Angebot und Optionen",
    text: "Innerhalb von 48 Stunden liegt ein ausführliches Angebot vor. Zelte sowie Tische und Stühle lassen sich als Optionen ergänzen.",
    imageSrc: `${IMG_DIR}/03-teklif.webp`,
    imageAlt: "Erstellung des Angebots und der Optionen",
  },
  {
    stepNo: 4,
    label: "Freigabe",
    title: "Freigabe und Reservierung",
    text: "Nach Ihrer Freigabe reservieren wir Equipment und Crew verbindlich; der Aufbauplan wird festgezurrt.",
    imageSrc: `${IMG_DIR}/04-onay-rezervasyon.webp`,
    imageAlt: "Reservierung von Equipment und Crew nach der Freigabe",
  },
  {
    stepNo: 5,
    label: "Ein Monat vorher",
    title: "Begehung und technische Abstimmung",
    text: "Etwa einen Monat vorher prüfen wir Zufahrt, Stromversorgung und Bodenverhältnisse; bei Bedarf findet eine Begehung vor Ort statt.",
    imageSrc: `${IMG_DIR}/05-teknik-kesif.webp`,
    imageAlt: "Technische Begehung und Abstimmung am Veranstaltungsort",
  },
  {
    stepNo: 6,
    label: "24 bis 48 Stunden vorher",
    title: "Aufbau und Tests",
    text: "Der Aufbau erfolgt 24 bis 48 Stunden vor der Veranstaltung. Ton, Licht und LED-Fläche werden eingemessen, Sicherheitsprüfungen abgeschlossen.",
    imageSrc: `${IMG_DIR}/06-kurulum.webp`,
    imageAlt: "Aufbau vor Ort und technische Tests",
  },
  {
    stepNo: 7,
    label: "Veranstaltungstag",
    title: "Betreuung im Betrieb",
    text: "Unser Team steuert den Ablauf vor Ort; Bild-, Video- und Tonwege werden durchgehend überwacht.",
    imageSrc: `${IMG_DIR}/07-etkinlik-gunu.webp`,
    imageAlt: "Betrieb und technische Leitung am Veranstaltungstag",
  },
  {
    stepNo: 8,
    label: "24 bis 48 Stunden danach",
    title: "Abbau und Übergabe",
    text: "Nach der Veranstaltung bauen wir ab, verladen das Equipment und übergeben die Fläche geordnet zurück.",
    imageSrc: `${IMG_DIR}/08-sokum.webp`,
    imageAlt: "Abbau und sichere Verladung des Equipments",
  },
];

const FAQS = [
  {
    q: "Wie lange dauert es bis zum Angebot",
    a: "In der Regel liefern wir das Angebot noch am selben Tag oder innerhalb von 24 bis 48 Stunden, nachdem der Bedarf geklärt ist. Ist eine Begehung nötig, richtet sich der Zeitrahmen nach dem Terminplan der Location.",
  },
  {
    q: "Ist eine Begehung vor Ort zwingend",
    a: "Nicht bei jedem Projekt. Bei großen Traversenkonstruktionen und dort, wo die Stromversorgung kritisch ist, empfehlen wir sie aber ausdrücklich.",
  },
  {
    q: "Wie viele Stunden vorher wird aufgebaut",
    a: "Je nach Projektgröße planen wir Aufbau und Tests 24 bis 48 Stunden im Voraus. Kleinere Aufbauten lassen sich am selben Tag abschließen.",
  },
  {
    q: "Können mehrere Gewerke zusammen beauftragt werden",
    a: "Ja. Bühne, Traversen, Ton- und Lichttechnik, Zelt sowie Bestuhlung lassen sich in einem Projekt und einem Angebot zusammenfassen.",
  },
];

const INCLUDED = [
  "Technische Planung und Lastannahme vor dem Aufbau",
  "Transport, Aufbau, Einmessung und Abnahme",
  "Technikcrew während der gesamten Veranstaltung",
  "Abbau, Verladung und geordnete Übergabe der Fläche",
];

const BRIEF_QUESTIONS = [
  "In welcher Stadt und an welcher Location findet die Veranstaltung statt?",
  "Welches Datum ist geplant und wann darf aufgebaut werden?",
  "Wie viele Gäste erwarten Sie und wie ist die Bestuhlung vorgesehen?",
  "Welche Gewerke brauchen Sie – Bühne, LED-Wand, Ton, Licht, Traversen, Zelt?",
  "Wird aufgezeichnet oder gestreamt?",
];

const QUICK_LINKS = [
  { href: "/de/led-wand-mieten", label: "LED-Wand mieten" },
  { href: "/de/buehne-mieten", label: "Bühne & Podest mieten" },
  { href: "/de/ton-und-lichttechnik", label: "Ton- und Lichttechnik" },
  { href: "/de/zelt-mieten", label: "Eventzelte mieten" },
  { href: "/de/firmenevents", label: "Firmenevents" },
];

const WHATSAPP_HREF =
  "https://wa.me/905453048671?text=Guten+Tag%2C+ich+h%C3%A4tte+gerne+ein+Angebot+f%C3%BCr+Veranstaltungstechnik+von+Sahneva.";

function ArbeitsweiseJsonLd() {
  const orgId = `${SITE}/#org`;
  const pageId = `${PAGE_URL}#webpage`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: PAGE_URL,
        name: "Arbeitsweise — unser Ablauf in 8 Schritten",
        description: metadata.description,
        inLanguage: "de-DE",
        about: { "@id": orgId },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        hasPart: [{ "@id": `${PAGE_URL}#howto` }, { "@id": `${PAGE_URL}#faq` }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE}/de` },
          { "@type": "ListItem", position: 2, name: "Arbeitsweise", item: PAGE_URL },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${PAGE_URL}#howto`,
        name: "Projektablauf bei Sahneva",
        description:
          "Von der ersten Anfrage bis zum Abbau: die acht Schritte einer technischen Eventproduktion.",
        inLanguage: "de-DE",
        totalTime: "P30D",
        step: STEPS.map((step) => ({
          "@type": "HowToStep",
          position: step.stepNo,
          name: step.title,
          text: step.text,
          image: `${SITE}${step.imageSrc}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        inLanguage: "de-DE",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} id="de-arbeitsweise-jsonld" />;
}

export default function GermanHowWeWorkPage() {
  return (
    <div className="bg-white">
      <ArbeitsweiseJsonLd />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src={`${IMG_DIR}/hero-surec.webp`}
          alt="Aufbau und technische Vorbereitung einer Veranstaltung durch Sahneva"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/72 to-slate-950/92" />
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
              Arbeitsweise
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              So läuft ein Projekt bei uns ab
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.86]">
              Acht Schritte von der ersten Anfrage bis zum Abbau. Zu jedem Schritt steht, was
              passiert und wann er stattfindet – damit Sie wissen, worauf Sie sich einstellen
              können und wann wir etwas von Ihnen brauchen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/de/kontakt"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white transition hover:bg-emerald-600"
              >
                Angebot anfordern
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white backdrop-blur transition hover:bg-white/15"
                aria-label="Über WhatsApp Kontakt aufnehmen (wird in einem neuen Tab geöffnet)"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_2200px] lg:[contain-intrinsic-size:auto_1600px] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Die acht Schritte
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Vom ersten Gespräch bis zur Übergabe der Fläche
            </h2>
          </div>

          <ol className="mt-10 space-y-6">
            {STEPS.map((step) => (
              <li
                key={step.stepNo}
                className="grid gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-[0.8fr_1.2fr] md:items-center"
              >
                <div className="relative h-56 w-full md:h-full md:min-h-[220px]">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:py-8 md:pr-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                      {step.stepNo}
                    </span>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-indigo-700">
                      {step.label}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-black text-slate-950 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700 md:text-base">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_900px] lg:[contain-intrinsic-size:auto_560px] bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto grid gap-6 px-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Was enthalten ist</h2>
            <ul className="mt-5 space-y-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Was wir im Briefing fragen</h2>
            <ul className="mt-5 space-y-3">
              {BRIEF_QUESTIONS.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">Direkt zu den Leistungen</h2>
            <ul className="mt-5 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[40px] items-center text-sm font-bold text-indigo-700 underline underline-offset-4 transition hover:text-indigo-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="content-visibility-auto [contain-intrinsic-size:auto_900px] lg:[contain-intrinsic-size:auto_560px] py-16 md:py-20"
      >
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Häufige Fragen zum Ablauf
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Was Kunden vor der Beauftragung wissen wollen
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Weitere Antworten zu Technik, Preisen und Logistik finden Sie in unseren{" "}
              <Link
                href="/de/faq"
                className="font-bold text-indigo-700 underline underline-offset-4 hover:text-indigo-900"
              >
                häufigen Fragen
              </Link>
              .
            </p>
          </div>
          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7">
            {FAQS.map((item) => (
              <article key={item.q} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-lg font-black text-slate-950">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black md:text-4xl">Schritt eins beginnt mit Ihrer Nachricht</h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              Stadt, Datum und Format genügen – den Rest klären wir im Gespräch.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/de/kontakt"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-emerald-500 px-7 text-base font-black text-white transition hover:bg-emerald-600"
            >
              Angebot anfordern
            </Link>
            <Link
              href="/de/referenzen"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
            >
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
