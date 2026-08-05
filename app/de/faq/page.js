// app/de/faq/page.js
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLd from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/de/faq`;

/* ================== META ================== */
export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "Häufige Fragen zur Veranstaltungstechnik",
  description:
    "Antworten zu Bühne, LED-Wand, Ton- und Lichttechnik sowie Zelten: Aufbauzeiten, Logistik, Personal, Preisbildung und Vertragsbedingungen in der Türkei.",
  alternates: buildLanguageAlternates({
    tr: "/sss",
    en: "/en/faq",
    de: "/de/faq",
    canonical: "/de/faq",
    xDefault: "/en/faq",
  }),
  openGraph: {
    title: "Häufige Fragen | Sahneva",
    description:
      "Antworten zu Bühne, LED-Wand, Ton- und Lichttechnik sowie Zelten für Veranstaltungen in der Türkei.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "de_DE",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva – häufige Fragen zur Vermietung von Veranstaltungstechnik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Häufige Fragen | Sahneva",
    description:
      "Antworten zu Bühne, LED-Wand, Ton- und Lichttechnik sowie Zelten für Veranstaltungen in der Türkei.",
    images: [`${SITE_URL}/img/hero-bg.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== DATEN ================== */
const FAQ_CATEGORIES = [
  {
    id: "allgemein",
    icon: "🧭",
    title: "Allgemeines & Zusammenarbeit",
    items: [
      {
        q: "Haben Sie Erfahrung mit Firmenveranstaltungen",
        a: "Ja. Wir haben mehrere hundert Produktlaunches, Konferenzen, Händlertagungen, Großveranstaltungen und Konzerte in der gesamten Türkei technisch umgesetzt.",
      },
      {
        q: "Arbeiten Sie auch als Technikpartner hinter einer Agentur",
        a: "Ja, das ist eines unserer beiden Arbeitsmodelle. Entweder beauftragen Sie uns direkt mit der gesamten Produktion, oder wir liefern die Technik im Hintergrund Ihrer Agentur – mit Ihrem Auftritt vor Ort und Ihrer Ansprechpartnerstruktur gegenüber dem Endkunden.",
      },
      {
        q: "In welcher Sprache läuft die Abstimmung",
        a: "Auf Deutsch, Englisch oder Türkisch. Angebote, Equipmentlisten und Ablaufpläne stellen wir in der Sprache bereit, in der Sie anfragen.",
      },
      {
        q: "Wie groß ist die Crew am Veranstaltungstag",
        a: "Das hängt vom Umfang ab. Kompakte Veranstaltungen laufen mit zwei bis drei Technikern, große Produktionen mit eigenen Teams für Ton, Licht, Video, Bühne und Kamera – zusammen über zehn Personen.",
      },
      {
        q: "Sind Sie in der gesamten Türkei im Einsatz",
        a: "Ja. Unser Team sitzt in Istanbul und fährt in alle 81 Provinzen. Für Projekte außerhalb Istanbuls weisen wir Transport, Anfahrt und Unterbringung im Angebot getrennt aus.",
      },
      {
        q: "Ist Ihr Equipment aktuell und wie wird es gewartet",
        a: "Das Equipment wird nach festem Plan gewartet. Vor jedem Projekt laufen Funktionstests, und für kritische Geräte halten wir Ersatz bereit.",
      },
    ],
  },
  {
    id: "buehne",
    icon: "🎪",
    title: "Bühne & Podeste",
    href: "/de/buehne-mieten",
    hrefLabel: "Zur Seite Bühne mieten",
    items: [
      {
        q: "Wie lange dauert der Aufbau einer Bühne",
        a: "Für eine Bühne von etwa 8×6 m rechnen wir mit zwei bis vier Stunden ab Anlieferung. Zufahrt, Weg zum Aufbauort, Bühnenhöhe und ein eventuelles Traversendach verändern diesen Wert.",
      },
      {
        q: "Welche Bühnenhöhen sind möglich",
        a: "Die Stützen sind höhenverstellbar; üblich sind 20 bis 100 cm. Die passende Höhe ergibt sich aus Sichtachsen, Bestuhlung und Raumhöhe der Location.",
      },
      {
        q: "Ist ein Aufbau auf unebenem oder weichem Untergrund möglich",
        a: "Ja. Gefälle und Unebenheiten gleichen wir über die verstellbaren Stützen aus, bei weichem Boden kommen zusätzlich Lastverteilplatten zum Einsatz.",
      },
      {
        q: "Sind Treppen und Geländer enthalten",
        a: "Treppen mit Handlauf und Geländer gehören zum Standardumfang, sobald die Bühnenhöhe es erfordert. Rampen für barrierearmen Zugang planen wir auf Wunsch ein.",
      },
      {
        q: "Können Sie auch einen Laufsteg bauen",
        a: "Ja. Laufstege planen wir nach Länge, Höhe, Kamerapositionen und Sitzreihen – einschließlich der Lichtführung entlang der Strecke.",
      },
    ],
  },
  {
    id: "led",
    icon: "🖥️",
    title: "LED-Wand",
    href: "/de/led-wand-mieten",
    hrefLabel: "Zur Seite LED-Wand mieten",
    items: [
      {
        q: "Welcher Pixelabstand ist der richtige",
        a: "Als Faustregel entspricht der kürzeste sinnvolle Betrachtungsabstand in Metern etwa dem Pixelabstand in Millimetern. Bei P3 wirkt das Bild ab rund drei Metern geschlossen. Für Konferenzen mit nahem Publikum empfehlen wir P2 bis P3, für Bühnen und Außenflächen P3.9 bis P6.",
      },
      {
        q: "Funktioniert eine LED-Wand bei Tageslicht",
        a: "Ja, mit Outdoor-Kabinetten und über 4.500 nit Helligkeit. Bei direkter Sonneneinstrahlung planen wir zusätzlich die Ausrichtung so, dass kein flacher Einfallswinkel den Kontrast zerstört.",
      },
      {
        q: "Wie groß kann die LED-Fläche sein",
        a: "Bis etwa 600 m². Die tatsächliche Obergrenze richtet sich nach Traglast der Aufhängung beziehungsweise Bodenbeschaffenheit sowie nach der verfügbaren Stromversorgung.",
      },
      {
        q: "In welchem Format brauchen Sie unsere Inhalte",
        a: "Wir arbeiten mit gängigen Video- und Bildformaten. Entscheidend ist, dass die Auflösung Ihrer Dateien zum tatsächlichen Pixelraster der Fläche passt – die Zielauflösung nennen wir nach der Planung.",
      },
      {
        q: "Ist ein Techniker während der Veranstaltung dabei",
        a: "Ja. Bei jeder LED-Vermietung ist ein Operator eingeplant, der Zuspielung, Umschaltungen, Helligkeit und Farbabgleich über das gesamte Programm betreut.",
      },
    ],
  },
  {
    id: "ton-licht",
    icon: "🎭",
    title: "Ton- und Lichttechnik",
    href: "/de/ton-und-lichttechnik",
    hrefLabel: "Zur Seite Ton- und Lichttechnik",
    items: [
      {
        q: "Wie viel Beschallung braucht mein Raum",
        a: "Das hängt von Raumgröße, Nachhallzeit, Sitzordnung und Programm ab. Eine Tagung mit 300 Personen benötigt ein deutlich kleineres System als ein Konzert mit derselben Teilnehmerzahl.",
      },
      {
        q: "Sind Techniker im Preis enthalten",
        a: "Ja. Ton- und Lichttechniker sind Bestandteil der Vermietung – für Aufbau, Einmessung, Betrieb während des Programms und Abbau.",
      },
      {
        q: "Wie viele Funkmikrofone sind möglich",
        a: "Die Zahl richtet sich nach der Frequenzsituation vor Ort. Wir koordinieren die Frequenzen vorab und planen für die wichtigsten Positionen Ersatzstrecken ein.",
      },
      {
        q: "Können Sie Licht auf unseren Ablaufplan programmieren",
        a: "Ja. Wir übernehmen Ablaufplan und Rider und speichern Licht- und Tonszenen entlang der Programmpunkte, sodass Übergänge im Betrieb abrufbar sind.",
      },
      {
        q: "Übernehmen Sie auch die Stromversorgung",
        a: "Ja. Wir prüfen die vorhandenen Anschlüsse und ergänzen Verteilung, Generator sowie unterbrechungsfreie Versorgung für die kritischen Wege.",
      },
    ],
  },
  {
    id: "zelt",
    icon: "⛺",
    title: "Zelte & Flächen im Freien",
    href: "/de/zelt-mieten",
    hrefLabel: "Zur Seite Zelt mieten",
    items: [
      {
        q: "Welche Zeltgröße brauche ich",
        a: "Als Anhaltspunkt rechnen wir bei Stehempfängen mit etwa 0,8 m² und bei Bestuhlung an runden Tischen mit rund 1,5 m² je Gast. Bühne, Catering und Technik kommen als eigene Flächen hinzu.",
      },
      {
        q: "Ist ein Aufbau auf Asphalt möglich",
        a: "Ja. Auf Asphalt und Beton verankern wir nicht im Boden, sondern arbeiten mit Ballast, der auf die zu erwartende Windlast ausgelegt wird.",
      },
      {
        q: "Sind die Zelte beheizbar",
        a: "Ja. Heizung oder Kühlung planen wir abhängig von Jahreszeit, Zeltgröße und Gästezahl mit ein, ebenso die dafür nötige Stromversorgung.",
      },
      {
        q: "Wie lange dauert der Zeltaufbau",
        a: "Ein Pagodenzelt steht in ein bis zwei Stunden. Für größere stützenfreie Hallen mit Bodenaufbau und Technik planen wir je nach Größe einen bis mehrere Tage ein.",
      },
      {
        q: "Ist der Abbau in der Miete enthalten",
        a: "Ja. Auf- und Abbau sind Bestandteil der Miete. Den Abbauzeitpunkt stimmen wir mit dem Ende Ihrer Veranstaltung und den Vorgaben des Geländes ab.",
      },
    ],
  },
  {
    id: "angebot",
    icon: "📄",
    title: "Angebot, Vertrag & Zahlung",
    href: "/de/kontakt",
    hrefLabel: "Angebot anfordern",
    items: [
      {
        q: "Wie entsteht der Preis",
        a: "Aus Equipmentliste, Gesamtdauer (Aufbau, Veranstaltung, Abbau), Stadt und Logistikplanung, Personalbedarf und Zubehör. Auf Wunsch stellen wir mehrere Varianten mit unterschiedlichem Umfang gegenüber.",
      },
      {
        q: "Wie lange dauert es bis zum Angebot",
        a: "In der Regel noch am selben Tag oder innerhalb von 24 bis 48 Stunden, sobald der Bedarf geklärt ist. Ist eine Begehung nötig, richtet sich der Zeitrahmen nach dem Terminplan der Location.",
      },
      {
        q: "Ist eine Begehung vor Ort kostenpflichtig",
        a: "Nein. Wo eine Begehung sinnvoll ist, führen wir sie ohne zusätzliche Kosten durch und prüfen dabei Maße, Stromanschlüsse und Anlieferbedingungen.",
      },
      {
        q: "Wie wird ein Termin verbindlich",
        a: "Mit einer Anzahlung wird die Reservierung verbindlich; Equipment und Crew sind ab diesem Zeitpunkt für Ihren Termin geblockt.",
      },
      {
        q: "Wie sind die Stornobedingungen",
        a: "Die Bedingungen stehen im Vertrag. Bereits angefallene Produktions- und Logistikkosten werden abhängig davon berücksichtigt, wie kurzfristig vor dem Veranstaltungstermin storniert wird.",
      },
      {
        q: "Wie früh sollten wir anfragen",
        a: "Für größere Formate sind vier bis acht Wochen komfortabel, weil Location, Equipment und Crew dann gemeinsam planbar sind. Kurzfristige Anfragen prüfen wir trotzdem – die Machbarkeit hängt vom Termin und der Stadt ab.",
      },
    ],
  },
];

const WHATSAPP_HREF =
  "https://wa.me/905453048671?text=Guten+Tag%2C+ich+h%C3%A4tte+gerne+ein+Angebot+f%C3%BCr+Veranstaltungstechnik+von+Sahneva.";

export default function GermanFaqPage() {
  const mainEntity = FAQ_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    inLanguage: "de-DE",
    mainEntity,
  };

  const breadcrumbItems = [
    { name: "Startseite", url: `${SITE_URL}/de` },
    { name: "Häufige Fragen", url: PAGE_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <JsonLd data={jsonLd} id="de-faq-jsonld" />

      <div className="bg-gradient-to-b from-slate-950 via-[#0b1020] to-slate-950">
        <div className="container py-10 text-slate-100 md:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-[34px]">
              Häufige Fragen
            </h1>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Antworten zu Technik, Aufbau, Personal und Preisbildung. Falls Ihre Frage offen
              bleibt, schildern Sie uns Ihr Projekt über die{" "}
              <Link
                href="/de/kontakt"
                className="font-bold text-cyan-300 underline underline-offset-4 hover:text-cyan-100"
              >
                Kontaktseite
              </Link>
              .
            </p>
          </div>

          <nav aria-label="Themenbereiche" className="mt-8 flex flex-wrap justify-center gap-2">
            {FAQ_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-400/70 hover:text-cyan-100"
              >
                <span aria-hidden="true">{category.icon}</span>
                {category.title}
              </a>
            ))}
          </nav>

          <div className="mt-10 space-y-6">
            {FAQ_CATEGORIES.map((category) => (
              <section
                key={category.id}
                id={category.id}
                aria-labelledby={`${category.id}-heading`}
                className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2
                    id={`${category.id}-heading`}
                    className="flex items-center gap-3 text-xl font-black text-white md:text-2xl"
                  >
                    <span aria-hidden="true">{category.icon}</span>
                    {category.title}
                  </h2>
                  {category.href ? (
                    <Link
                      href={category.href}
                      className="inline-flex min-h-[40px] items-center text-sm font-bold text-cyan-300 underline underline-offset-4 transition hover:text-cyan-100"
                    >
                      {category.hrefLabel}
                    </Link>
                  ) : null}
                </div>

                <div className="mt-6 divide-y divide-white/10">
                  {category.items.map((item) => (
                    <article key={item.q} className="py-5 first:pt-0 last:pb-0">
                      <h3 className="text-base font-black text-white md:text-lg">{item.q}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.a}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
            <a
              href="tel:+905453048671"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-400"
            >
              📞 Jetzt anrufen
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-100"
              aria-label="Frage über WhatsApp stellen – wird in einem neuen Tab geöffnet"
            >
              💬 Über WhatsApp fragen
            </a>
            <Link
              href="/de/arbeitsweise"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 font-semibold text-slate-100 transition hover:border-cyan-400/70 hover:text-cyan-100"
            >
              🧭 Unsere Arbeitsweise
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
