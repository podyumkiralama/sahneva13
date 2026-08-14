import JsonLd from "@/components/seo/JsonLd";
import QuoteFormValidation from "@/components/QuoteFormValidation.client";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const DE_CONTACT_URL = buildCanonical("/de/kontakt");
const DE_CONTACT_IMAGE = `${SITE_URL}/img/hero-bg.webp`;
const FORM_ENDPOINT = "https://formspree.io/f/xanppven";
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;

const WEB_MCP_QUOTE_FORM_PROPS = {
  toolname: "requestEventProductionQuote",
  tooldescription:
    "Submit an event production quote request to Sahneva for stage, LED screen, sound, lighting, truss, tent, podium and technical crew needs in Turkey.",
};

const WEB_MCP_QUOTE_FIELD_PROPS = {
  name: {
    toolparamdescription: "Full name of the person requesting the event production quote.",
  },
  phone: {
    toolparamdescription: "Phone number with country code for quote follow-up by Sahneva.",
  },
  email: {
    toolparamdescription: "Email address where the written quote should be sent.",
  },
  eventType: {
    toolparamdescription: "Type of event: corporate event, conference, concert, exhibition, esports or other.",
  },
  message: {
    toolparamdescription:
      "Event details: city, date, venue, expected attendance and required equipment.",
  },
  formSubject: {
    toolparamdescription: "Internal subject line used for the quote request email.",
  },
  redirectUrl: {
    toolparamdescription: "URL the visitor is redirected to after a successful submission.",
  },
  spamTrap: {
    toolparamdescription: "Hidden anti-spam field that must remain empty.",
  },
};

const CONTACT_CHANNELS = [
  {
    title: "E-Mail",
    value: "info@sahneva.com",
    href: "mailto:info@sahneva.com",
    description:
      "Für Ausschreibungen, Leistungsverzeichnisse und Unterlagen mit Anhang der geeignete Weg.",
  },
  {
    title: "WhatsApp",
    value: "+90 545 304 86 71",
    href: "https://wa.me/905453048671?text=Guten+Tag%2C+ich+h%C3%A4tte+gerne+ein+Angebot+f%C3%BCr+Veranstaltungstechnik+von+Sahneva.",
    description: "Datum, Stadt und eine kurze Beschreibung genügen für eine erste Rückmeldung.",
  },
  {
    title: "Telefon",
    value: "+90 545 304 86 71",
    href: "tel:+905453048671",
    description:
      "Wenn es eilt oder Sie kurzfristig die Verfügbarkeit von Crew und Equipment klären möchten.",
  },
];

const BRIEF_ITEMS = [
  "Stadt, Location, Datum und das Zeitfenster für den Aufbau.",
  "Format der Veranstaltung und erwartete Teilnehmerzahl.",
  "Benötigte Gewerke: Bühne, LED-Wand, Ton, Licht, Traversen, Zelt oder Mobiliar.",
  "Besonderheiten: Branding, Livestream, Protokollablauf oder Bedingungen im Freien.",
];

const RESPONSE_STEPS = [
  {
    title: "Eingang und Rückfragen",
    text: "Wir prüfen Ihre Angaben und melden uns – meist innerhalb von zwei Stunden während der Geschäftszeiten – mit gezielten Rückfragen zu Location und Ablauf.",
  },
  {
    title: "Technischer Vorschlag",
    text: "Sie erhalten eine Aufstellung mit Equipment, Crew, Aufbauzeiten und Logistik, aus der hervorgeht, welche Position wofür steht.",
  },
  {
    title: "Abstimmung und Freigabe",
    text: "Änderungen am Umfang arbeiten wir ein, bis Leistungsumfang und Preis stimmig sind. Danach reservieren wir Termin und Crew verbindlich.",
  },
];

const WORKING_LANGUAGES = [
  "Deutsch",
  "Englisch",
  "Türkisch",
];

export const metadata = {
  title: "Kontakt — Angebot für Veranstaltungstechnik",
  description:
    "Sahneva kontaktieren: Bühne, LED-Wand, Ton- und Lichttechnik, Zelte und Mobiliar für Ihre Veranstaltung in der Türkei. Angebot auf Deutsch, Englisch oder Türkisch.",
  alternates: {
    canonical: DE_CONTACT_URL,
    languages: {
      "tr-TR": `${SITE_URL}/iletisim`,
      en: `${SITE_URL}/en/contact`,
      de: DE_CONTACT_URL,
      ar: `${SITE_URL}/ar/contact`,
      ru: `${SITE_URL}/ru/contact`,
      zh: `${SITE_URL}/zh/contact`,
      "x-default": `${SITE_URL}/en/contact`,
    },
  },
  openGraph: {
    title: "Kontakt — Angebot für Veranstaltungstechnik in der Türkei | Sahneva",
    description:
      "Sahneva kontaktieren: Bühne, LED-Wand, Ton- und Lichttechnik, Zelte und Mobiliar für Ihre Veranstaltung in der Türkei. Angebot auf Deutsch, Englisch oder Türkisch.",
    url: DE_CONTACT_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: DE_CONTACT_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kontakt zu Sahneva für Veranstaltungen in der Türkei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt — Angebot für Veranstaltungstechnik in der Türkei | Sahneva",
    description:
      "Sahneva kontaktieren: Bühne, LED-Wand, Ton- und Lichttechnik, Zelte und Mobiliar für Ihre Veranstaltung in der Türkei.",
    images: [DE_CONTACT_IMAGE],
  },
};

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${DE_CONTACT_URL}#webpage`,
      url: DE_CONTACT_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "de-DE",
      about: { "@id": LOCAL_BUSINESS_ID },
      mainEntity: { "@id": LOCAL_BUSINESS_ID },
      breadcrumb: { "@id": `${DE_CONTACT_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${DE_CONTACT_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/de` },
        { "@type": "ListItem", position: 2, name: metadata.title, item: DE_CONTACT_URL },
      ],
    },
  ],
};

export default function GermanContactPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10">
      <JsonLd id="de-contact-jsonld" data={CONTACT_JSON_LD} />
      <header className="max-w-3xl space-y-3">
        <h1 className="text-3xl font-black text-neutral-900">Sahneva kontaktieren</h1>
        <p className="text-base leading-7 text-neutral-600">
          Schildern Sie uns Ihre Veranstaltung – Sie erhalten einen technischen Vorschlag mit
          Equipmentliste, Crew, Aufbauzeiten und Kalkulation. Die Abstimmung läuft auf Deutsch,
          Englisch oder Türkisch.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {CONTACT_CHANNELS.map((channel) => (
          <a
            key={channel.title}
            href={channel.href}
            className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-lg font-black text-neutral-900">{channel.title}</h2>
            <p className="mt-2 text-base font-bold text-indigo-600">{channel.value}</p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{channel.description}</p>
          </a>
        ))}
      </div>

      <section className="rounded-3xl border border-indigo-100 bg-indigo-50/70 p-6 md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">
          Was wir für ein belastbares Angebot brauchen
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-700">
          Je genauer diese vier Punkte feststehen, desto verbindlicher fällt die Kalkulation aus –
          und desto weniger muss später nachgeschoben werden.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {BRIEF_ITEMS.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/70 bg-white p-4 text-sm leading-6 text-neutral-700 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="angebot-formular"
        className="grid scroll-mt-24 gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:grid-cols-[0.8fr_1.2fr] md:p-8"
      >
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
            Angebot anfordern
          </p>
          <h2 className="mt-3 text-3xl font-black text-neutral-900">
            Senden Sie uns die Eckdaten Ihrer Veranstaltung.
          </h2>
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Stadt, Datum, Format, Teilnehmerzahl und gewünschte Technik genügen für den Einstieg.
            Unser Team antwortet mit einer technischen Einschätzung zum Umfang.
          </p>
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">
              Korrespondenzsprachen
            </p>
            <p className="mt-2 text-sm font-bold text-neutral-800">
              {WORKING_LANGUAGES.join(" · ")}
            </p>
          </div>
        </div>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          acceptCharset="UTF-8"
          {...WEB_MCP_QUOTE_FORM_PROPS}
          className="space-y-5"
        >
          <QuoteFormValidation locale="de" />

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-black text-neutral-800">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                {...WEB_MCP_QUOTE_FIELD_PROPS.name}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-black text-neutral-800">
                Telefon (mit Ländervorwahl) *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="+49 ..."
                {...WEB_MCP_QUOTE_FIELD_PROPS.phone}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-black text-neutral-800">
                E-Mail-Adresse *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="name@beispiel.de"
                {...WEB_MCP_QUOTE_FIELD_PROPS.email}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-sm font-black text-neutral-800">
                Art der Veranstaltung *
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                autoComplete="off"
                {...WEB_MCP_QUOTE_FIELD_PROPS.eventType}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
              >
                <option value="">Bitte auswählen</option>
                <option value="Corporate Event">Firmenveranstaltung</option>
                <option value="Conference">Konferenz oder Kongress</option>
                <option value="Concert">Konzert oder Festival</option>
                <option value="Exhibition">Messe oder Ausstellung</option>
                <option value="Esports Event">E-Sport-Veranstaltung</option>
                <option value="Other">Sonstiges</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-black text-neutral-800">
              Angaben zur Veranstaltung *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              autoComplete="off"
              placeholder="Stadt, Datum, Location, Teilnehmerzahl, benötigte Technik ..."
              {...WEB_MCP_QUOTE_FIELD_PROPS.message}
              className="mt-2 w-full resize-none rounded-2xl border border-neutral-200 px-4 py-3 text-neutral-900 outline-none transition focus-visible:border-indigo-500 focus-visible:ring-4 focus-visible:ring-indigo-100"
            />
          </div>

          <input
            type="hidden"
            name="_subject"
            value="Sahneva | German Proposal Request"
            {...WEB_MCP_QUOTE_FIELD_PROPS.formSubject}
          />
          <input
            type="hidden"
            name="_redirect"
            value="https://www.sahneva.com/tesekkurler"
            {...WEB_MCP_QUOTE_FIELD_PROPS.redirectUrl}
          />
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            {...WEB_MCP_QUOTE_FIELD_PROPS.spamTrap}
          />

          <button
            type="submit"
            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 text-sm font-black text-white transition hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
          >
            Anfrage senden
          </button>
        </form>
      </section>

      <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-black text-neutral-900">Wie es nach Ihrer Anfrage weitergeht</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {RESPONSE_STEPS.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-black text-neutral-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-700">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Standort
            </p>
            <h2 className="mt-3 text-2xl font-black">Istanbul – im Einsatz in der gesamten Türkei</h2>
            <p className="mt-4 text-sm leading-7 text-white/[0.74]">
              Unser Lager und die Werkstatt liegen in Kağıthane, Istanbul. Von dort aus fahren Crew
              und Equipment zu Projekten in Antalya, Ankara, Izmir und allen weiteren Provinzen.
              Anfahrt, Transport und Unterbringung weisen wir im Angebot getrennt aus.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
            <p className="text-sm font-black text-white">Sahneva Organizasyon</p>
            <p className="mt-3 text-sm leading-6 text-white/[0.74]">
              Hamidiye, Anadolu Cd. 61 A<br />
              34408 Kağıthane / Istanbul<br />
              Türkei
            </p>
            <p className="mt-4 text-sm leading-6 text-white/[0.74]">
              Erreichbarkeit: rund um die Uhr
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
