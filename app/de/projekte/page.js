import Image from "next/image";
import Link from "next/link";
import CaseGallery from "@/components/CaseGallery";
import JsonLd from "@/components/seo/JsonLd";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { getFeaturedPortfolio } from "@/lib/portfolioGallery";

const DE_PROJECTS_URL = buildCanonical("/de/projekte");
const DE_PROJECTS_IMAGE = `${SITE_URL}/img/kurumsal/kurumsal-sahne-led-ekran.webp`;

const PROJECT_GROUPS = [
  {
    title: "LED-Wände und Bühnen",
    text: "Firmenkonferenzen, Produktlaunches und Videowalls für den Innen- und Außenbereich.",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
    href: "/de/led-wand-mieten",
  },
  {
    title: "Festivals und Konzerte",
    text: "Bühne, Traversen, Beschallung, Licht und Technikcrew unter dichtem Zeitplan.",
    image: "/img/sahne/galeri-1.webp",
    href: "/de/buehne-mieten",
  },
  {
    title: "Zelte und Veranstaltungsflächen",
    text: "Kuppel-, Pagoden- und Großzelte samt Mobiliar, Beleuchtung und Logistik.",
    image: "/img/galeri/cadir-kiralama-1.webp",
    href: "/de/zelt-mieten",
  },
  {
    title: "Firmenveranstaltungen",
    text: "Kongresse, Händlertagungen und Galaabende mit Bühnenbild, Regie und Betreuung vor Ort.",
    image: "/img/kurumsal/kurumsal-sahne-led-ekran.webp",
    href: "/de/firmenevents",
  },
];

const REFERENCE_PROJECTS = [
  {
    title: "Nationales Raumfahrtprogramm — Vorstellung",
    scope:
      "Pneumatische Kuppel, Bühne, LED-Wand und komplette technische Produktion für eine landesweit übertragene Veranstaltung.",
    tags: ["Kuppel", "LED-Wand", "Bühne", "Übertragung"],
  },
  {
    title: "E-Sport-Finale vor Publikum",
    scope:
      "Arena-Aufbau mit Bühne, großflächiger LED-Fläche, Beschallung, Lichtdesign und Mehrkameraregie über mehrere Turniertage.",
    tags: ["E-Sport", "LED-Wand", "Ton & Licht", "Regie"],
  },
  {
    title: "Internationaler Medizinkongress, Istanbul",
    scope:
      "Umlaufende 360°-LED-Konstruktion als begehbarer Markenraum auf der Ausstellungsfläche eines Pharmaunternehmens.",
    tags: ["Kongress", "360°-LED", "Messebau"],
  },
  {
    title: "Technologiefestival TEKNOFEST",
    scope:
      "Themenzelte, Innenausbau, Bühne, LED-Wand, Beschallung und Bestuhlung auf einem mehrtägigen Freigelände.",
    tags: ["Zelt", "Bühne", "LED-Wand", "Open Air"],
  },
];

export const metadata = {
  title: "Projekte — Eventproduktion in der Türkei",
  description:
    "Realisierte Produktionen von Sahneva: Bühnenbau, LED-Wände, Ton- und Lichttechnik sowie Zelte für Kongresse, Messen und Firmenevents in der Türkei.",
  alternates: {
    canonical: DE_PROJECTS_URL,
    languages: {
      "tr-TR": `${SITE_URL}/projeler`,
      en: `${SITE_URL}/en/projects`,
      de: DE_PROJECTS_URL,
      ar: `${SITE_URL}/ar/projects`,
      ru: `${SITE_URL}/ru/projects`,
      zh: `${SITE_URL}/zh/projects`,
      "x-default": `${SITE_URL}/projeler`,
    },
  },
  openGraph: {
    title: "Projekte — Referenzen aus der Eventproduktion in der Türkei | Sahneva",
    description:
      "Realisierte Produktionen von Sahneva: Bühnenbau, LED-Wände, Ton- und Lichttechnik sowie Zelte für Veranstaltungen in der Türkei.",
    url: DE_PROJECTS_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: DE_PROJECTS_IMAGE,
        width: 1200,
        height: 630,
        alt: "Bühne und LED-Wand bei einer von Sahneva produzierten Firmenveranstaltung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projekte — Referenzen aus der Eventproduktion in der Türkei | Sahneva",
    description:
      "Realisierte Produktionen von Sahneva für Kongresse, Festivals, Messen und Firmenveranstaltungen.",
    images: [DE_PROJECTS_IMAGE],
  },
};

const PROJECTS_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${DE_PROJECTS_URL}#webpage`,
      url: DE_PROJECTS_URL,
      name: metadata.openGraph.title,
      description: metadata.description,
      inLanguage: "de-DE",
      breadcrumb: { "@id": `${DE_PROJECTS_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${DE_PROJECTS_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/de` },
        { "@type": "ListItem", position: 2, name: "Projekte", item: DE_PROJECTS_URL },
      ],
    },
  ],
};

export default function GermanProjectsPage() {
  const galleryImages = getFeaturedPortfolio("de");

  return (
    <div className="bg-white">
      <JsonLd id="de-projects-jsonld" data={PROJECTS_JSON_LD} />

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100">
              Projekte
            </p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Realisierte Produktionen in der gesamten Türkei
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.84]">
              Über 700 Projekte in Kongressen, Produktlaunches, Konzerten, Messen und Open-Air-Formaten.
              Auf dieser Seite finden Sie den Umfang der Arbeiten; die bewegten Aufnahmen dazu liegen
              unter Referenzen.
            </p>
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_900px] lg:[contain-intrinsic-size:auto_600px] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Projektarten
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Wo unsere Technik zum Einsatz kommt
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROJECT_GROUPS.map((group) => (
              <Link
                key={group.title}
                href={group.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{group.text}</p>
                  <span className="mt-4 inline-flex text-sm font-black text-indigo-700 group-hover:text-indigo-900">
                    Leistung ansehen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility-auto [contain-intrinsic-size:auto_900px] lg:[contain-intrinsic-size:auto_600px] bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
              Ausgewählte Projekte
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Umfang statt Schlagworte
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Bei jedem Projekt steht, welche Gewerke tatsächlich von uns kamen – so lässt sich
              einschätzen, was für Ihr Vorhaben realistisch ist.
            </p>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {REFERENCE_PROJECTS.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{project.scope}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-indigo-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="content-visibility-auto [contain-intrinsic-size:auto_1000px] lg:[contain-intrinsic-size:auto_700px] py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-9 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-600">
                Bildergalerie
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                Aufnahmen von Aufbau und Veranstaltungstag
              </h2>
            </div>
            <CaseGallery images={galleryImages} visibleCount={8} locale="de" />
          </div>
        </section>
      ) : null}

      <section className="bg-slate-950 py-14 text-white">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black md:text-4xl">
              Videos aus laufenden Produktionen ansehen
            </h2>
            <p className="mt-3 text-base leading-7 text-white/[0.75]">
              Unter Referenzen finden Sie Aufnahmen aus Aufbau, Probe und Veranstaltungstag – nach
              Gewerk filterbar.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/de/referenzen"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-emerald-500 px-7 text-base font-black text-white transition hover:bg-emerald-600"
            >
              Referenzen ansehen
            </Link>
            <Link
              href="/de/kontakt"
              className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 text-base font-black text-white transition hover:bg-white/15"
            >
              Angebot anfordern
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
