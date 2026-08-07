// app/de/eventproduktion-antalya/page.js
import Image from "next/image";
import Link from "next/link";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLdScript from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

export const revalidate = 86400;

const ORIGIN = "https://www.sahneva.com";
const PAGE_PATH = "/de/eventproduktion-antalya";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;
const OG_IMAGE = `${ORIGIN}/img/kurumsal/kurumsal-sahne-led-ekran.webp`;
const PHONE = "+905453048671";

export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "Eventproduktion Antalya — Hotels & Resorts",
  description:
    "Veranstaltungstechnik in Antalya: Bühne, LED-Wand, Ton und Licht für Kongresshotels und Resorts in Belek, Kemer, Side und Lara – mit eigener Crew vor Ort.",
  alternates: buildLanguageAlternates({
    en: "/en/event-production-antalya",
    de: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: "/en/event-production-antalya",
  }),
  openGraph: {
    title: "Eventproduktion Antalya — Technik für Hotels & Resorts | Sahneva",
    description:
      "Bühne, LED-Wand, Ton und Licht für Kongresshotels und Resorts in Antalya, Belek, Kemer, Side und Lara.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "de_DE",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bühne mit LED-Wand bei einer Hotelveranstaltung in Antalya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eventproduktion Antalya — Technik für Hotels & Resorts | Sahneva",
    description:
      "Veranstaltungstechnik für Kongresshotels und Resorts in Antalya, Belek, Kemer, Side und Lara.",
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const REGIONS = [
  {
    name: "Belek",
    text: "Dichte Konzentration großer Kongresshotels mit eigenen Ballsälen und Freiflächen. Aufbau läuft parallel zum Hotelbetrieb, Anlieferung meist über Wirtschaftswege.",
  },
  {
    name: "Lara & Stadtgebiet Antalya",
    text: "Stadtnahe Hotels und Kongresszentren, kurze Wege vom Flughafen und gute Erreichbarkeit für Technik und Crew.",
  },
  {
    name: "Kemer",
    text: "Resorts an Hanglagen mit teils engen Zufahrten. Transportfahrzeuggröße und Umschlagpunkte klären wir vorab.",
  },
  {
    name: "Side & Manavgat",
    text: "Weitläufige Resortanlagen mit Strandbereichen – Bühne und Licht im Freien brauchen Verankerung und Wetterkonzept.",
  },
  {
    name: "Alanya",
    text: "Größere Entfernung zum Zentrum von Antalya; Transport und Unterbringung der Crew werden eigene Positionen im Angebot.",
  },
  {
    name: "Kaş & Kalkan",
    text: "Kleinere, exklusive Locations ohne feste Veranstaltungsinfrastruktur. Strom, Licht und Bühne bringen wir vollständig mit.",
  },
];

const VENUE_TYPES = [
  {
    title: "Ballsaal im Kongresshotel",
    text: "Feste Deckenhöhe, vorhandene Riggingpunkte oder Ground Support, Beschallung abgestimmt auf die Akustik des Saals und Zusammenarbeit mit der Haustechnik.",
  },
  {
    title: "Poolbereich und Gartenfläche",
    text: "Abendveranstaltungen im Freien mit Ballastverankerung, wetterfestem Aufbau, Ambientelicht und einer Stromversorgung, die den Hotelbetrieb nicht stört.",
  },
  {
    title: "Strandbereich",
    text: "Aufbau auf Sand mit Lastverteilplatten, Berücksichtigung von Wind und Salzluft sowie einem Ablauf für den Abbau noch in der Nacht.",
  },
  {
    title: "Amphitheater und Showbühne",
    text: "Vorhandene Bühnen im Resort werden mit LED-Fläche, Licht und Beschallung ergänzt, statt sie komplett neu aufzubauen.",
  },
];

const PRACTICAL = [
  {
    title: "Abstimmung mit der Haustechnik",
    text: "Anlieferzeiten, Zufahrt, Traglasten, Stromanschlüsse und die Frage, was während des laufenden Hotelbetriebs erlaubt ist – das klären wir direkt mit dem Haus, nicht über Sie.",
  },
  {
    title: "Aufbau ohne Störung des Betriebs",
    text: "In Resorts sind zur Aufbauzeit Gäste vor Ort. Laute Arbeiten, Wege durch öffentliche Bereiche und Kranarbeiten planen wir in die freigegebenen Zeitfenster.",
  },
  {
    title: "Wetter als Planungsgröße",
    text: "Für Aufbauten im Freien legen wir vorab Grenzwerte fest: ab welcher Windgeschwindigkeit Banner abgenommen und Dächer abgelassen werden, und wer diese Entscheidung trifft.",
  },
  {
    title: "Transport aus Istanbul",
    text: "Equipment kommt in der Regel per LKW aus unserem Lager. Fahrzeit und Unterbringung der Crew weisen wir im Angebot getrennt aus, damit die Kalkulation nachvollziehbar bleibt.",
  },
];

const FAQ = [
  {
    q: "Sind Sie in Antalya mit eigener Crew vor Ort",
    a: "Unsere Crew reist mit dem Equipment aus Istanbul an und bleibt über Aufbau, Veranstaltung und Abbau vor Ort. Das ist derselbe Personenkreis, der die Technik geplant hat – dadurch entfällt eine Übergabe an ein fremdes Team.",
  },
  {
    q: "Können Sie mit unserem Hotel direkt sprechen",
    a: "Ja, das ist der Regelfall. Wir stimmen Anlieferzeiten, Zufahrt, Stromanschlüsse und Traglasten direkt mit der Haustechnik ab und melden Ihnen nur das Ergebnis.",
  },
  {
    q: "Wie viel Vorlauf brauchen Sie für Antalya",
    a: "Der Transport aus Istanbul dauert etwa einen Tag. Für größere Aufbauten planen wir Anreise und Aufbau ein bis zwei Tage vor der Veranstaltung; kurzfristigere Termine prüfen wir nach Verfügbarkeit.",
  },
  {
    q: "Was kostet die Anfahrt nach Antalya",
    a: "Transport, Fahrzeit und Unterbringung der Crew stehen als eigene Positionen im Angebot. Die Einheitspreise für Equipment und Aufbau bleiben dieselben wie in Istanbul.",
  },
  {
    q: "Funktioniert ein Aufbau direkt am Strand",
    a: "Ja, mit Vorbereitung. Auf Sand arbeiten wir mit Lastverteilplatten und Ballast statt Erdnägeln; Windlast und Salzluft fließen in die Auswahl der Konstruktion ein.",
  },
  {
    q: "Übernehmen Sie auch die Abendveranstaltung im Freien",
    a: "Ja. Bühne, Beschallung, Ambientelicht, Stromversorgung und die Betreuung während des Programms lassen sich als ein Umfang planen – auch dann, wenn tagsüber im Ballsaal getagt wird.",
  },
];

function AntalyaJsonLd() {
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
          { "@type": "ListItem", position: 3, name: "Eventproduktion Antalya", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Eventproduktion und Veranstaltungstechnik in Antalya",
        serviceType: "Veranstaltungstechnik",
        description: metadata.description,
        telephone: PHONE,
        areaServed: [
          { "@type": "City", name: "Antalya" },
          ...REGIONS.map((region) => ({ "@type": "Place", name: region.name })),
        ],
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

  return <JsonLdScript data={jsonLd} id="de-antalya-jsonld" />;
}

export default function GermanAntalyaPage() {
  return (
    <div className="bg-white">
      <AntalyaJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Startseite", url: `${ORIGIN}/de` },
          { name: "Eventproduktion Antalya", url: PAGE_URL },
        ]}
        baseUrl={ORIGIN}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Image
          src="/img/kurumsal/kurumsal-sahne-led-ekran.webp"
          alt="Bühne mit LED-Wand bei einer Hotelveranstaltung"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/72 to-slate-950/92" />
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">
              Antalya
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Eventproduktion in Antalya – Technik für Hotels und Resorts
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.86]">
              Antalya ist für Tagungen und Incentives aus dem deutschsprachigen Raum eine der ersten
              Adressen. Technisch bringt das eigene Bedingungen mit: Aufbau im laufenden Hotelbetrieb,
              Zufahrt über Wirtschaftswege, Abendprogramm im Freien und Wetter, das den Plan ändern
              kann. Genau darauf ist unsere Planung ausgelegt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/de/kontakt"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-emerald-500 px-7 font-black text-white transition hover:bg-emerald-600"
              >
                Angebot anfordern
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                Direkt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Regionen
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
              Wo wir in und um Antalya arbeiten
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => (
              <article
                key={region.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">{region.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{region.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Veranstaltungsorte
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Vier Situationen, vier Herangehensweisen
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {VENUE_TYPES.map((venue) => (
              <article
                key={venue.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">{venue.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{venue.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
              Praxis vor Ort
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Was in Antalya den Unterschied macht
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {PRACTICAL.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/[0.74]">{item.text}</p>
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
              Antalya im Detail
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Wenn Ihr Programm mehrere Städte umfasst, finden Sie unter{" "}
              <Link
                href="/de/mice-tuerkei"
                className="font-bold text-indigo-700 underline underline-offset-4 hover:text-indigo-900"
              >
                MICE Türkei
              </Link>{" "}
              den Überblick.
            </p>
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
            <h2 className="text-3xl font-black md:text-4xl">Veranstaltung in Antalya geplant?</h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              Nennen Sie uns Hotel, Datum und Format – wir klären den Rest mit dem Haus und melden
              uns mit einem Vorschlag.
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
              href="/de/firmenevents"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
            >
              Firmenevents
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
