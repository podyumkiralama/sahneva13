// app/de/mice-tuerkei/page.js
import Image from "next/image";
import Link from "next/link";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

export const revalidate = 86400;

const ORIGIN = "https://www.sahneva.com";
const PAGE_PATH = "/de/mice-tuerkei";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;
const OG_IMAGE = `${ORIGIN}/img/kurumsal/konferans.webp`;

export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "MICE Türkei — Technik für Kongresse und Incentives",
  description:
    "Technische Produktion für MICE-Programme in der Türkei: Kongresse, Tagungen, Incentive-Reisen und Messeauftritte mit Bühne, LED-Wand, Ton, Licht und Crew vor Ort.",
  alternates: buildLanguageAlternates({
    en: "/en/mice-turkey",
    de: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: "/en/mice-turkey",
  }),
  openGraph: {
    title: "MICE Türkei — Technik für Kongresse und Incentives | Sahneva",
    description:
      "Technischer Partner für MICE-Programme in der Türkei: Kongresse, Tagungen, Incentives und Messeauftritte mit eigener Crew.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "de_DE",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kongressbühne mit LED-Wand und Beschallung von Sahneva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MICE Türkei — Technik für Kongresse und Incentives | Sahneva",
    description:
      "Technischer Partner für MICE-Programme in der Türkei mit Bühne, LED-Wand, Ton, Licht und Crew.",
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const PILLARS = [
  {
    letter: "M",
    title: "Meetings",
    text: "Tagungen und Führungskräftetreffen mit Sprachverständlichkeit im ganzen Saal, Präsentationssteuerung und dezenter Bühnengestaltung.",
    href: "/de/firmenevents",
  },
  {
    letter: "I",
    title: "Incentives",
    text: "Abendveranstaltungen, Galadinner und Programme im Freien – von der Beleuchtung der Fläche bis zur Bühne für die Abendshow.",
    href: "/de/zelt-mieten",
  },
  {
    letter: "C",
    title: "Conventions",
    text: "Kongresse mit Plenum und Parallelsessions, Dolmetscherkabinen, Aufzeichnung und einheitlicher Bildregie über alle Räume.",
    href: "/de/led-wand-mieten",
  },
  {
    letter: "E",
    title: "Exhibitions",
    text: "Messeauftritte und begleitende Ausstellungsflächen mit LED-Flächen, Traversen, Beschriftung und Standbeleuchtung.",
    href: "/de/traversen-mieten",
  },
];

const PARTNERS = [
  {
    title: "Für PCOs und Kongressveranstalter",
    text: "Sie führen Programm und Teilnehmer, wir übernehmen die technische Ebene: Plenum, Parallelräume, Dolmetschung, Aufzeichnung und die Crew, die zwischen den Sessions umbaut.",
  },
  {
    title: "Für DMCs und Incentive-Agenturen",
    text: "Wir liefern die Technik für Abendprogramme an ungewöhnlichen Orten – Stromversorgung, Beleuchtung, Beschallung und Bühne dort, wo vorher nichts davon vorhanden ist.",
  },
  {
    title: "Für Unternehmen mit eigenem Eventteam",
    text: "Wenn Ihr Team die Regie selbst führt, stellen wir Equipment und Techniker und ordnen uns Ihrem Ablaufplan und Ihrer Regie unter.",
  },
];

const VENUES = [
  {
    city: "Istanbul",
    text: "Kongresszentren, Businesshotels und historische Locations. Dichter Kalender, feste Anlieferzeiten und häufig nur ein Aufbaufenster in der Nacht.",
  },
  {
    city: "Antalya",
    text: "Kongresshotels und Resorts mit eigenen Hausregeln. Aufbau läuft parallel zum Hotelbetrieb, Zufahrt oft über Personalwege.",
  },
  {
    city: "Izmir",
    text: "Messegelände und Hallen mit klaren Traglast- und Höhenvorgaben, dazu Freiflächen für Rahmenprogramme.",
  },
  {
    city: "Ankara",
    text: "Protokollarische Formate mit festen Zeitfenstern, Sicherheitskontrollen und hohen Anforderungen an Redetechnik.",
  },
  {
    city: "Bodrum",
    text: "Incentive-Programme an Küstenstandorten. Wind, Salzluft und schmale Zufahrten bestimmen den Aufbau im Freien mit.",
  },
  {
    city: "Kappadokien",
    text: "Destination-Events an Orten ohne feste Infrastruktur – Stromversorgung, Beleuchtung und Bühne bringen wir vollständig mit.",
  },
];

const SCOPE = [
  "Plenum und Parallelräume mit einheitlicher Bild- und Tonregie",
  "Dolmetscherkabinen, Empfängertechnik und Verteilung im Saal",
  "Aufzeichnung, Livestream und Mehrkameraproduktion",
  "Registrierungs- und Empfangsbereiche mit Beschilderung und Licht",
  "Bühnenbild, LED-Flächen und Beschriftung im Corporate Design",
  "Technische Betreuung während des gesamten Programms",
];

const FAQ = [
  {
    q: "Arbeiten Sie mit PCOs und DMCs zusammen",
    a: "Ja, das ist einer unserer häufigsten Fälle. Der Veranstalter behält Programm und Teilnehmerführung, wir übernehmen die technische Produktion vor Ort – im Auftreten und in der Kommunikation nach Ihren Vorgaben.",
  },
  {
    q: "Können Sie mehrere Räume gleichzeitig betreuen",
    a: "Ja. Plenum und Parallelsessions planen wir mit getrennten Technikteams und einer gemeinsamen technischen Leitung, damit Umbauten zwischen den Sessions im Zeitplan bleiben.",
  },
  {
    q: "Übernehmen Sie auch Dolmetschtechnik",
    a: "Ja. Kabinen, Pulte, Empfänger und die Verteilung im Saal lassen sich einplanen; die Dolmetscher selbst stellt in der Regel der Veranstalter oder ein spezialisierter Dienstleister.",
  },
  {
    q: "Wie läuft die Abstimmung mit dem Hotel",
    a: "Wir stimmen uns direkt mit der Haustechnik ab: Anlieferzeiten, Zufahrt, Traglasten, Stromanschlüsse und die Frage, was während des laufenden Hotelbetriebs möglich ist. Das erspart Ihnen die Doppelkommunikation.",
  },
  {
    q: "Wie früh sollten wir für einen Kongress anfragen",
    a: "Bei mehrtägigen Kongressen mit Parallelräumen sind zwei bis drei Monate komfortabel, weil Equipment und Crew über mehrere Tage gebunden sind. Kürzere Vorläufe prüfen wir trotzdem.",
  },
  {
    q: "Läuft die Abstimmung auf Deutsch",
    a: "Ja. Briefing, Angebot, technische Planung und Statusmeldungen laufen auf Deutsch oder Englisch, je nachdem was für Ihr Team praktischer ist.",
  },
];

function MiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "de-DE",
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: `${ORIGIN}/de` },
          { "@type": "ListItem", position: 2, name: "Leistungen", item: `${ORIGIN}/de/leistungen` },
          { "@type": "ListItem", position: 3, name: "MICE Türkei", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Technische Produktion für MICE-Programme in der Türkei",
        serviceType: "MICE-Eventtechnik",
        description: metadata.description,
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          ...VENUES.map((venue) => ({ "@type": "City", name: venue.city })),
        ],
        audience: {
          "@type": "Audience",
          audienceType: "PCOs, DMCs, Incentive-Agenturen und Unternehmen mit eigenem Eventteam",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        inLanguage: "de-DE",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} id="de-mice-jsonld" />;
}

export default function GermanMicePage() {
  return (
    <div className="bg-white">
      <MiceJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${ORIGIN}/de` },
          { name: "MICE Türkei", url: PAGE_URL },
        ]}
        baseUrl={ORIGIN}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="/img/kurumsal/konferans.webp"
          alt="Kongressbühne mit Projektion, Beschallung und Lichttechnik"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/72 to-slate-950/92" />
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
              MICE Türkei
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Technik für Kongresse, Tagungen und Incentives in der Türkei
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.86]">
              MICE-Programme scheitern selten am Konzept, sondern an der Umsetzung vor Ort: an
              Anlieferzeiten, an der Stromversorgung im Ballsaal, am Umbau zwischen zwei Sessions.
              Genau diese Ebene übernehmen wir – als technischer Partner für PCOs, DMCs, Agenturen
              und Unternehmen mit eigenem Eventteam.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/de/kontakt"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white transition hover:bg-emerald-600"
              >
                Programm besprechen
              </Link>
              <Link
                href="/de/eventproduktion-tuerkei"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white transition hover:bg-white/15"
              >
                Zusammenarbeit im Detail
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Die vier Formate
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Was MICE technisch jeweils bedeutet
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <Link
                key={pillar.letter}
                href={pillar.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xl font-black text-white">
                  {pillar.letter}
                </span>
                <h3 className="mt-4 text-xl font-black text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.text}</p>
                <span className="mt-4 inline-flex text-sm font-black text-indigo-700 group-hover:text-indigo-900">
                  Passende Technik →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Zusammenarbeit
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Wir arbeiten hinter Ihnen, nicht neben Ihnen
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              In MICE-Projekten gibt es fast immer bereits einen Veranstalter mit Kundenbeziehung.
              Wir treten deshalb nicht in Konkurrenz zu Ihnen, sondern liefern die technische Ebene
              in Ihrem Namen und nach Ihren Vorgaben.
            </p>
          </div>
          <div className="grid gap-4">
            {PARTNERS.map((partner) => (
              <article
                key={partner.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">{partner.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{partner.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Leistungsumfang
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Was wir bei Kongressen übernehmen
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SCOPE.map((item) => (
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

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Destinationen
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Was in welcher Stadt anders läuft
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {VENUES.map((venue) => (
              <article
                key={venue.city}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-black text-white">{venue.city}</h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.74]">{venue.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Häufige Fragen
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Was Veranstalter vorab wissen wollen
            </h2>
          </div>
          <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-7">
            {FAQ.map((item) => (
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
            <h2 className="text-3xl font-black md:text-4xl">Ihr Programm steht schon?</h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              Senden Sie uns Ablaufplan, Location und Teilnehmerzahl – wir sagen Ihnen, was technisch
              nötig ist und was es kostet.
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
              href="/de/eventproduktion-antalya"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
            >
              Eventproduktion Antalya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
