// app/de/podium-preise/page.js
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLd from "@/components/seo/JsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

export const revalidate = 86400;

const slug = "/de/podium-preise";
const url = `${BASE_SITE_URL}${slug}`;

const PRICE_VALID_UNTIL = "2027-12-31";

/* Einheitspreise – identisch mit der türkischen und englischen Preisseite. */
const UNIT_PRICES = {
  platform_m2_week: 270,
  carpet_m2_week: 130,
  skirt_ml_week: 100,
  ist_transport: 9000,
  currency: "TRY",
};

function tl(n) {
  try {
    return new Intl.NumberFormat("de-DE").format(n);
  } catch {
    return String(n);
  }
}

const EXAMPLES = [
  {
    name: "Kompakt",
    area: 12,
    skirt: 14,
    text: "Podest für Rednerpult und Preisverleihung in einem Saal.",
  },
  {
    name: "Mittel",
    area: 24,
    skirt: 20,
    text: "Bühne für Podiumsdiskussion oder Präsentation mit Sitzgruppe.",
  },
  {
    name: "Groß",
    area: 48,
    skirt: 28,
    text: "Hauptbühne für Firmenveranstaltung mit LED-Rückwand und Technik.",
  },
];

function calc(area, skirt) {
  return (
    area * UNIT_PRICES.platform_m2_week +
    area * UNIT_PRICES.carpet_m2_week +
    skirt * UNIT_PRICES.skirt_ml_week +
    UNIT_PRICES.ist_transport
  );
}

const PRICE_ROWS = [
  {
    item: "Podestfläche",
    unit: "je m² / Woche",
    price: UNIT_PRICES.platform_m2_week,
    note: "Modulare Elemente inklusive Stützen, Höhenverstellung und Montage.",
  },
  {
    item: "Teppichbelag",
    unit: "je m² / Woche",
    price: UNIT_PRICES.carpet_m2_week,
    note: "Oberflächenbelag auf der Podestfläche, Farbe nach Absprache.",
  },
  {
    item: "Frontverkleidung",
    unit: "je laufendem Meter / Woche",
    price: UNIT_PRICES.skirt_ml_week,
    note: "Verkleidung der sichtbaren Kanten, meist umlaufend an drei Seiten.",
  },
  {
    item: "Transport Istanbul",
    unit: "pauschal",
    price: UNIT_PRICES.ist_transport,
    note: "Anlieferung, Aufbau und Abbau im Stadtgebiet Istanbul.",
  },
];

const FAQ = [
  {
    q: "Wie setzt sich der Preis für ein Podest zusammen",
    a: `Aus vier Positionen: Podestfläche je m², Teppichbelag je m², Frontverkleidung je laufendem Meter und der Transportpauschale. Für Istanbul beträgt die Transportpauschale ${tl(UNIT_PRICES.ist_transport)} TRY und schließt Aufbau und Abbau ein.`,
  },
  {
    q: "Sind Aufbau und Abbau im Preis enthalten",
    a: "Ja. In der Transportpauschale für Istanbul sind Anlieferung, Aufbau und Abbau enthalten. Für andere Städte kalkulieren wir Transport, Anfahrt und gegebenenfalls Unterbringung der Crew getrennt aus.",
  },
  {
    q: "Gelten die Preise auch außerhalb von Istanbul",
    a: "Die Einheitspreise für Fläche, Teppich und Verkleidung bleiben gleich. Es ändert sich die Transportposition, weil Entfernung, Fahrzeit und Unterbringung der Crew hinzukommen.",
  },
  {
    q: "Wovon hängt der Preis noch ab",
    a: "Von Podesthöhe, Bodenbeschaffenheit, Zufahrt zur Location, verfügbarem Aufbaufenster und davon, ob Treppen, Geländer oder Rampen nötig sind. Diese Punkte klären wir vor dem verbindlichen Angebot.",
  },
  {
    q: "Was brauchen Sie für ein verbindliches Angebot",
    a: "Datum, Stadt und Stadtteil, Fläche in m², gewünschte Höhe, ob Teppich benötigt wird, die laufenden Meter Verkleidung sowie Angaben zur Zufahrt (Etage, Treppen, Lastenaufzug).",
  },
  {
    q: "Verstehen sich die Preise inklusive Steuern",
    a: "Die angegebenen Beträge sind Nettopreise. Die gesetzliche türkische Mehrwertsteuer wird im Angebot getrennt ausgewiesen.",
  },
  {
    q: "Wie lange gilt ein Angebot",
    a: "Die hier gelisteten Einheitspreise sind bis zum 31.12.2027 kalkuliert. Ein konkretes Angebot ist ab Ausstellung gültig; verbindlich reserviert wird der Termin mit der Anzahlung.",
  },
];

export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "Podium mieten: Preise nach m²",
  description:
    "Preise für Podeste nach Quadratmeter: Fläche, Teppich, Frontverkleidung und Transportpauschale für Istanbul mit Aufbau und Abbau – inklusive Rechenbeispielen.",
  alternates: buildLanguageAlternates({
    tr: "/podyum-kurulum-fiyatlari",
    en: "/en/podium-rental-prices",
    de: slug,
    canonical: slug,
    xDefault: "/en/podium-rental-prices",
  }),
  openGraph: {
    title: "Podium mieten: Preise nach m² | Sahneva",
    description:
      "Einheitspreise für Podestfläche, Teppich und Frontverkleidung sowie die Transportpauschale für Istanbul – mit Rechenbeispielen.",
    url,
    type: "website",
    siteName: "Sahneva",
    locale: "de_DE",
    images: [
      {
        url: `${BASE_SITE_URL}/img/podyum/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Podestaufbau von Sahneva mit Preisangaben nach Quadratmeter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podium mieten: Preise nach m² | Sahneva",
    description:
      "Einheitspreise für Podestfläche, Teppich und Frontverkleidung sowie die Transportpauschale für Istanbul.",
    images: [`${BASE_SITE_URL}/img/podyum/hero.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

function PriceJsonLd() {
  const low = calc(EXAMPLES[0].area, EXAMPLES[0].skirt);
  const high = calc(EXAMPLES[2].area, EXAMPLES[2].skirt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Podium mieten: Preise nach m²",
        description: metadata.description,
        inLanguage: "de-DE",
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "OfferCatalog",
        "@id": `${url}#catalog`,
        name: "Preise für Podestvermietung nach m²",
        url,
        itemListElement: PRICE_ROWS.map((row) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: row.item,
            provider: { "@id": ORGANIZATION_ID },
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
          price: String(row.price),
          priceCurrency: UNIT_PRICES.currency,
          priceValidUntil: PRICE_VALID_UNTIL,
          availability: "https://schema.org/InStock",
        })),
      },
      {
        "@type": "AggregateOffer",
        "@id": `${url}#aggregate`,
        priceCurrency: UNIT_PRICES.currency,
        lowPrice: String(low),
        highPrice: String(high),
        offerCount: EXAMPLES.length,
        priceValidUntil: PRICE_VALID_UNTIL,
        url,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: "de-DE",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return <JsonLd data={jsonLd} id="de-podium-preise-jsonld" />;
}

export default function GermanPodiumPricesPage() {
  const breadcrumbItems = [
    { name: "Startseite", url: `${BASE_SITE_URL}/de` },
    { name: "Leistungen", url: `${BASE_SITE_URL}/de/leistungen` },
    { name: "Podium mieten: Preise", url },
  ];

  return (
    <div className="bg-white">
      <PriceJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={BASE_SITE_URL} />

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100">
              Preise
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Podium mieten: Preise nach Quadratmeter
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.86]">
              Wir rechnen nicht mit Paketpreisen, sondern mit vier nachvollziehbaren Positionen:
              Fläche, Teppich, Frontverkleidung und Transport. Unten stehen die Einheitspreise und
              drei durchgerechnete Beispiele, damit Sie die Größenordnung vor der Anfrage einschätzen
              können.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Einheitspreise
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Woraus sich der Preis zusammensetzt
            </h2>
          </div>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Einheitspreise für Podestvermietung in türkischen Lira
              </caption>
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th scope="col" className="py-3 pr-4 text-sm font-black text-slate-950">
                    Position
                  </th>
                  <th scope="col" className="py-3 pr-4 text-sm font-black text-slate-950">
                    Einheit
                  </th>
                  <th scope="col" className="py-3 pr-4 text-sm font-black text-slate-950">
                    Preis
                  </th>
                  <th scope="col" className="py-3 text-sm font-black text-slate-950">
                    Hinweis
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((row) => (
                  <tr key={row.item} className="border-b border-slate-200">
                    <td className="py-4 pr-4 text-base font-bold text-slate-900">{row.item}</td>
                    <td className="py-4 pr-4 text-sm text-slate-700">{row.unit}</td>
                    <td className="py-4 pr-4 text-base font-black text-indigo-700">
                      {tl(row.price)} TRY
                    </td>
                    <td className="py-4 text-sm leading-6 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600">
            Alle Beträge sind Nettopreise in türkischen Lira; die gesetzliche Mehrwertsteuer weisen
            wir im Angebot getrennt aus. Die Transportpauschale gilt für das Stadtgebiet Istanbul und
            enthält Aufbau und Abbau. Für andere Städte kalkulieren wir Transport, Anfahrt und
            Unterbringung der Crew separat.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Rechenbeispiele
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Drei typische Aufbauten, durchgerechnet
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Jedes Beispiel enthält Podestfläche mit Teppich, die angegebene Verkleidung und die
              Transportpauschale für Istanbul.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {EXAMPLES.map((example) => {
              const total = calc(example.area, example.skirt);
              return (
                <article
                  key={example.name}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-indigo-600">
                    {example.name}
                  </p>
                  <p className="mt-4 text-3xl font-black text-slate-950">{tl(total)} TRY</p>
                  <p className="mt-2 text-sm text-slate-600">netto, zzgl. MwSt.</p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
                    <li>{example.area} m² Podestfläche mit Teppich</li>
                    <li>{example.skirt} lfm Frontverkleidung</li>
                    <li>Transport Istanbul inkl. Auf- und Abbau</li>
                  </ul>
                  <p className="mt-5 text-sm leading-6 text-slate-600">{example.text}</p>
                </article>
              );
            })}
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
              Was vor der Preisanfrage oft gefragt wird
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Details zur Konstruktion selbst finden Sie auf der Seite{" "}
              <Link
                href="/de/buehne-mieten"
                className="font-bold text-indigo-700 underline underline-offset-4 hover:text-indigo-900"
              >
                Bühne mieten
              </Link>
              .
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
            <h2 className="text-3xl font-black md:text-4xl">Verbindliches Angebot anfordern</h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              Senden Sie Fläche, Höhe, Stadt und Datum – Sie erhalten eine Kalkulation, in der jede
              Position einzeln ausgewiesen ist.
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
              href="/de/buehne-mieten"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
            >
              Bühne mieten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
