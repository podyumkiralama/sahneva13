import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/de/datenschutz`;
const PHONE = "+905453048671";
const MAIL = "info@sahneva.com";

export const metadata = {
  title: "Datenschutz | Umgang mit personenbezogenen Daten",
  description:
    "Wie Sahneva personenbezogene Daten erhebt, verarbeitet und schützt: Anfrageformular, Analyse-Cookies, eingebettete Videos sowie Ihre Rechte nach DSGVO und KVKK.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": `${SITE_URL}/gizlilik-politikasi`,
      en: `${SITE_URL}/en/privacy-policy`,
      de: PAGE_URL,
      "x-default": `${SITE_URL}/en/privacy-policy`,
    },
  },
  openGraph: {
    title: "Datenschutz | Sahneva",
    description:
      "Datenschutzhinweise von Sahneva Organizasyon: Verarbeitung personenbezogener Daten, Cookies, Auftragsverarbeiter und Betroffenenrechte.",
    url: PAGE_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Datenschutzhinweise von Sahneva Organizasyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datenschutz | Sahneva",
    description:
      "Datenschutzhinweise von Sahneva Organizasyon: Verarbeitung personenbezogener Daten, Cookies und Betroffenenrechte.",
    images: [`${SITE_URL}/img/hero-bg.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const SECTIONS = [
  {
    id: "verantwortlicher",
    heading: "1. Verantwortlicher",
    body: [
      "Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang mit dieser Website ist:",
    ],
    address: true,
  },
  {
    id: "daten",
    heading: "2. Welche Daten wir verarbeiten",
    body: [
      "Wir verarbeiten ausschließlich Daten, die Sie uns selbst übermitteln, sowie technische Daten, die beim Aufruf der Website anfallen.",
    ],
    list: [
      "Angaben aus dem Anfrageformular: Name, Telefonnummer, E-Mail-Adresse, Art der Veranstaltung und Ihre Projektbeschreibung.",
      "Kommunikationsdaten, wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren.",
      "Technische Zugriffsdaten, die der Server beim Seitenaufruf verarbeitet (IP-Adresse, Zeitpunkt, aufgerufene Seite, Browsertyp).",
      "Nutzungsdaten aus der Reichweitenmessung – ausschließlich dann, wenn Sie der Analyse zugestimmt haben.",
    ],
  },
  {
    id: "zwecke",
    heading: "3. Zwecke und Rechtsgrundlagen",
    list: [
      "Bearbeitung Ihrer Anfrage und Erstellung eines Angebots – Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).",
      "Betrieb, Sicherheit und Stabilität der Website – Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).",
      "Reichweitenmessung und Verbesserung der Inhalte – Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).",
      "Erfüllung gesetzlicher Aufbewahrungspflichten nach türkischem Recht – Art. 6 Abs. 1 lit. c DSGVO.",
    ],
  },
  {
    id: "formular",
    heading: "4. Anfrageformular",
    body: [
      "Das Anfrageformular auf dieser Website wird technisch über den Dienstleister Formspree abgewickelt. Die von Ihnen eingegebenen Angaben werden an Formspree übermittelt und von dort als E-Mail an unser Postfach zugestellt. Formspree verarbeitet die Daten dabei als Auftragsverarbeiter für uns.",
      "Ein verstecktes Feld dient allein der Abwehr automatisierter Einsendungen und wird nicht ausgewertet, wenn es – wie vorgesehen – leer bleibt.",
      "Wenn Sie die Übermittlung an einen externen Dienstleister vermeiden möchten, schreiben Sie uns stattdessen direkt eine E-Mail.",
    ],
  },
  {
    id: "cookies",
    heading: "5. Cookies und Reichweitenmessung",
    body: [
      "Für den Betrieb der Website notwendige Funktionen kommen ohne einwilligungspflichtige Cookies aus. Ihre Entscheidung zur Analyse speichern wir lokal in Ihrem Browser, damit wir Sie nicht bei jedem Besuch erneut fragen müssen.",
      "Analyse-Werkzeuge, die Cookies setzen, werden erst geladen, nachdem Sie zugestimmt haben. Ohne Ihre Einwilligung findet keine cookiebasierte Reichweitenmessung statt. Sie können Ihre Entscheidung jederzeit ändern, indem Sie die lokal gespeicherten Website-Daten in Ihrem Browser löschen.",
      "Daneben zählt ein cookiefreies Werkzeug die Seitenaufrufe in aggregierter Form. Es speichert keine Cookies und keine vergleichbaren Kennungen auf Ihrem Gerät, verfolgt Sie nicht über Websites hinweg und bildet keine persönlichen Profile – deshalb ist es nicht an Ihre Einwilligung gebunden. Rechtsgrundlage ist unser berechtigtes Interesse an einer datensparsamen Reichweitenmessung (Art. 6 Abs. 1 lit. f DSGVO).",
    ],
    list: [
      "Google Analytics – Auswertung der Seitennutzung, nur nach Einwilligung.",
      "Microsoft Clarity – anonymisierte Auswertung des Nutzungsverhaltens, nur nach Einwilligung.",
      "Ahrefs Web Analytics – cookiefreie, aggregierte Zählung der Seitenaufrufe, ohne Einwilligung.",
      "Vercel Speed Insights – Messung technischer Leistungswerte der Seiten.",
    ],
  },
  {
    id: "videos",
    heading: "6. Eingebettete Videos",
    body: [
      "Auf Seiten mit Projektvideos binden wir Inhalte von YouTube ein. Die Videos werden bewusst erst dann geladen, wenn Sie auf die Wiedergabe klicken: Bis dahin sehen Sie lediglich ein Vorschaubild, und es wird keine Verbindung zu YouTube aufgebaut, die Ihr Nutzungsverhalten übermitteln könnte.",
      "Sobald Sie ein Video starten, gelten die Datenschutzbestimmungen von Google Ireland Limited beziehungsweise Google LLC. Dabei können Daten wie Ihre IP-Adresse an Google übermittelt werden.",
    ],
  },
  {
    id: "empfaenger",
    heading: "7. Empfänger und Drittlandübermittlung",
    body: [
      "Personenbezogene Daten geben wir nicht zum Zweck der Werbung an Dritte weiter und verkaufen sie nicht.",
      "Eine Übermittlung erfolgt ausschließlich an Dienstleister, die uns beim Betrieb der Website und bei der Bearbeitung Ihrer Anfrage unterstützen (Hosting, Formularversand, Reichweitenmessung), sowie an Behörden, soweit wir gesetzlich dazu verpflichtet sind.",
      "Da unser Unternehmen seinen Sitz in der Türkei hat und einzelne Dienstleister in den USA ansässig sind, können Daten in Länder außerhalb des Europäischen Wirtschaftsraums übermittelt werden. Wir stützen solche Übermittlungen auf die Standardvertragsklauseln der Europäischen Kommission beziehungsweise auf Ihre ausdrückliche Einwilligung.",
    ],
  },
  {
    id: "speicherdauer",
    heading: "8. Speicherdauer",
    list: [
      "Anfragen ohne anschließenden Auftrag: Löschung, sobald der Vorgang abgeschlossen ist und keine Rückfragen mehr zu erwarten sind.",
      "Anfragen, aus denen ein Auftrag entsteht: Aufbewahrung für die Dauer der gesetzlichen Fristen zu Vertrags- und Buchhaltungsunterlagen.",
      "Technische Zugriffsdaten: Speicherung nur für den Zeitraum, der zur Gewährleistung von Sicherheit und Betrieb erforderlich ist.",
    ],
  },
  {
    id: "rechte",
    heading: "9. Ihre Rechte",
    body: [
      "Nach der DSGVO stehen Ihnen gegenüber uns die folgenden Rechte zu. Für Betroffene in der Türkei gelten die entsprechenden Rechte nach dem türkischen Datenschutzgesetz (KVKK) Art. 11.",
    ],
    list: [
      "Auskunft darüber, ob und welche Daten wir zu Ihnen verarbeiten (Art. 15 DSGVO).",
      "Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten (Art. 16 DSGVO).",
      "Löschung Ihrer Daten, soweit keine Aufbewahrungspflicht entgegensteht (Art. 17 DSGVO).",
      "Einschränkung der Verarbeitung (Art. 18 DSGVO).",
      "Datenübertragbarkeit in einem gängigen, maschinenlesbaren Format (Art. 20 DSGVO).",
      "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO).",
      "Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).",
      "Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO).",
    ],
  },
  {
    id: "sicherheit",
    heading: "10. Sicherheit",
    body: [
      "Die Website wird ausschließlich verschlüsselt über HTTPS ausgeliefert. Ergänzend setzen wir technische Schutzmaßnahmen auf Ebene des Browsers ein, die das Nachladen fremder Skripte unterbinden, sowie organisatorische Maßnahmen, die den Zugriff auf Anfragedaten auf die damit befassten Mitarbeitenden beschränken.",
    ],
  },
  {
    id: "aenderungen",
    heading: "11. Änderungen dieser Hinweise",
    body: [
      "Wir passen diese Datenschutzhinweise an, wenn sich die eingesetzten Dienste, die Funktionen der Website oder die rechtlichen Rahmenbedingungen ändern. Maßgeblich ist jeweils die auf dieser Seite veröffentlichte Fassung.",
    ],
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Datenschutz",
  url: PAGE_URL,
  description:
    "Datenschutzhinweise von Sahneva Organizasyon: Verarbeitung personenbezogener Daten, Cookies, Auftragsverarbeiter und Betroffenenrechte.",
  inLanguage: "de-DE",
  image: `${SITE_URL}/img/hero-bg.webp`,
  isPartOf: {
    "@type": "WebSite",
    name: "Sahneva",
    url: SITE_URL,
  },
};

export default function GermanPrivacyPage() {
  const breadcrumbItems = [
    { name: "Startseite", url: `${SITE_URL}/de` },
    { name: "Datenschutz", url: PAGE_URL },
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      <JsonLd id="de-privacy-jsonld" data={JSON_LD} />
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-20">
        <header className="border-b border-white/10 pb-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
            Rechtliche Hinweise
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            Datenschutz
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Diese Hinweise erläutern, welche personenbezogenen Daten wir im Zusammenhang mit dieser
            Website verarbeiten, zu welchem Zweck das geschieht und welche Rechte Sie dabei haben.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2
                id={`${section.id}-heading`}
                className="text-xl font-black text-white md:text-2xl"
              >
                {section.heading}
              </h2>

              {section.body?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}

              {section.address ? (
                <address className="mt-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 not-italic leading-8 text-slate-300">
                  <span className="font-black text-white">Sahneva Organizasyon</span>
                  <br />
                  Hamidiye, Anadolu Cd. 61 A
                  <br />
                  34400 Kağıthane / Istanbul, Türkei
                  <br />
                  Telefon:{" "}
                  <a className="font-bold text-cyan-200 hover:text-white" href={`tel:${PHONE}`}>
                    +90 545 304 86 71
                  </a>
                  <br />
                  E-Mail:{" "}
                  <a className="font-bold text-cyan-200 hover:text-white" href={`mailto:${MAIL}`}>
                    {MAIL}
                  </a>
                </address>
              ) : null}

              {section.list ? (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-8 text-slate-300">
                      <span
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section id="kontakt-datenschutz" aria-labelledby="kontakt-datenschutz-heading">
            <h2
              id="kontakt-datenschutz-heading"
              className="text-xl font-black text-white md:text-2xl"
            >
              12. Kontakt in Datenschutzfragen
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Für Auskünfte, Löschungen oder den Widerruf einer Einwilligung genügt eine formlose
              Nachricht an{" "}
              <a className="font-bold text-cyan-200 hover:text-white" href={`mailto:${MAIL}`}>
                {MAIL}
              </a>
              . Wir bearbeiten Ihr Anliegen innerhalb der gesetzlichen Fristen. Für Fragen zu einem
              laufenden Projekt erreichen Sie uns über die{" "}
              <Link className="font-bold text-cyan-200 hover:text-white" href="/de/kontakt">
                Kontaktseite
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
