// app/de/impressum/page.js
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLd from "@/components/seo/JsonLd";
import { COMPANY, COMPANY_INFO_COMPLETE } from "@/lib/legal/companyInfo";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { buildAiPreviewRobots, SITE_URL } from "@/lib/seo/seoConfig";

export const revalidate = 86400;

const PAGE_PATH = "/de/impressum";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata = {
  // Das Locale-Layout hängt " | Sahneva" an – Marke hier nicht wiederholen.
  title: "Impressum — Anbieterkennzeichnung",
  description:
    "Anbieterkennzeichnung von Sahneva: Firmierung, Rechtsform, Anschrift, Kontaktdaten, Registereintrag und Steuerangaben des Unternehmens mit Sitz in Istanbul.",
  alternates: buildLanguageAlternates({
    de: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    title: "Impressum | Sahneva",
    description:
      "Anbieterkennzeichnung von Sahneva: Firmierung, Rechtsform, Anschrift, Registereintrag und Steuerangaben.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: "Impressum | Sahneva",
    description:
      "Anbieterkennzeichnung von Sahneva: Firmierung, Rechtsform, Anschrift, Registereintrag und Steuerangaben.",
  },
  robots: buildAiPreviewRobots(COMPANY_INFO_COMPLETE),
};

const COMPANY_ROWS = [
  { label: "Firmierung", value: COMPANY.legalName },
  {
    label: "Rechtsform",
    value:
      "Limited Şirketi (LTD. ŞTİ.) — türkische Gesellschaft mit beschränkter Haftung, vergleichbar mit einer GmbH",
  },
  { label: "Marke", value: COMPANY.brandName },
  { label: "Anschrift", value: COMPANY.address },
  { label: "Land", value: "Türkei" },
];

const CONTACT_ROWS = [
  { label: "Telefon", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
  { label: "E-Mail", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { label: "Website", value: "www.sahneva.com", href: SITE_URL },
];

const REGISTRY_ROWS = [
  { label: "Handelsregisternummer (Ticaret Sicil No)", value: COMPANY.tradeRegistryNo },
  { label: "MERSİS-Nummer", value: COMPANY.mersisNo },
  { label: "Steuernummer (Vergi Kimlik No)", value: COMPANY.taxNumber },
  { label: "Zuständiges Finanzamt (Vergi Dairesi)", value: COMPANY.taxOffice },
  {
    label: "Tätigkeitsschlüssel",
    value: "823002 — Organisation von Kongressen und Fachmessen",
  },
];

const LEGAL_SECTIONS = [
  {
    id: "haftung-inhalte",
    heading: "Haftung für Inhalte",
    body: [
      "Die Inhalte dieser Website werden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
      "Angaben zu Maßen, Aufbauzeiten, Kapazitäten und Preisen sind Orientierungswerte. Verbindlich sind ausschließlich die Angaben in einem von uns erstellten Angebot beziehungsweise im geschlossenen Vertrag.",
    ],
  },
  {
    id: "haftung-links",
    heading: "Haftung für Links",
    body: [
      "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",
      "Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Werden uns Rechtsverletzungen bekannt, entfernen wir die betreffenden Links umgehend.",
    ],
  },
  {
    id: "urheberrecht",
    heading: "Urheberrecht",
    body: [
      "Texte, Fotografien, Videos und Grafiken auf dieser Website sind urheberrechtlich geschützt. Die gezeigten Projektaufnahmen stammen aus eigenen Produktionen.",
      "Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der gesetzlich zulässigen Fälle bedarf unserer vorherigen schriftlichen Zustimmung.",
    ],
  },
  {
    id: "hinweis-sitz",
    heading: "Hinweis zum Unternehmenssitz",
    body: [
      "Sahneva ist ein in der Türkei ansässiges Unternehmen und erbringt seine Leistungen in der Türkei. Die vorstehenden Angaben werden zur Transparenz gegenüber Auftraggebern aus dem deutschsprachigen Raum bereitgestellt.",
      "Da das Unternehmen seinen Sitz außerhalb der Europäischen Union hat, besteht keine EU-Umsatzsteuer-Identifikationsnummer. Maßgeblich ist die oben genannte türkische Steuernummer.",
    ],
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Impressum — Anbieterkennzeichnung",
      description: metadata.description,
      inLanguage: "de-DE",
      about: { "@id": ORGANIZATION_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${SITE_URL}/de` },
        { "@type": "ListItem", position: 2, name: "Impressum", item: PAGE_URL },
      ],
    },
  ],
};

function InfoTable({ title, rows }) {
  return (
    <section aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`}>
      <h2
        id={`${title.replace(/\s+/g, "-").toLowerCase()}-heading`}
        className="text-xl font-black text-white md:text-2xl"
      >
        {title}
      </h2>
      <dl className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.05]">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 p-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6">
            <dt className="text-sm font-black uppercase tracking-[0.08em] text-cyan-200">
              {row.label}
            </dt>
            <dd className="text-base leading-7 text-slate-200">
              {row.href ? (
                <a
                  className="font-bold text-cyan-200 underline underline-offset-4 hover:text-white"
                  href={row.href}
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export default function GermanImprintPage() {
  const breadcrumbItems = [
    { name: "Startseite", url: `${SITE_URL}/de` },
    { name: "Impressum", url: PAGE_URL },
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      <JsonLd id="de-impressum-jsonld" data={JSON_LD} />
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />

      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-20">
        <header className="border-b border-white/10 pb-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
            Rechtliche Hinweise
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
            Impressum
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Angaben zum Anbieter dieser Website und zum Unternehmen, das die auf diesen Seiten
            beschriebenen Leistungen erbringt.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <InfoTable title="Unternehmen" rows={COMPANY_ROWS} />
          <InfoTable title="Kontakt" rows={CONTACT_ROWS} />
          <InfoTable title="Register- und Steuerangaben" rows={REGISTRY_ROWS} />

          {LEGAL_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`}>
              <h2
                id={`${section.id}-heading`}
                className="text-xl font-black text-white md:text-2xl"
              >
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-8 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section id="datenschutz-hinweis" aria-labelledby="datenschutz-hinweis-heading">
            <h2 id="datenschutz-hinweis-heading" className="text-xl font-black text-white md:text-2xl">
              Datenschutz
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Wie wir personenbezogene Daten im Zusammenhang mit dieser Website verarbeiten und welche
              Rechte Ihnen dabei zustehen, erläutern wir in den{" "}
              <Link
                className="font-bold text-cyan-200 underline underline-offset-4 hover:text-white"
                href="/de/datenschutz"
              >
                Datenschutzhinweisen
              </Link>
              . Für Anfragen zu einem Projekt erreichen Sie uns über die{" "}
              <Link
                className="font-bold text-cyan-200 underline underline-offset-4 hover:text-white"
                href="/de/kontakt"
              >
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
