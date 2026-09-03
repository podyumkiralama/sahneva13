import Link from "next/link";
import { ArrowRight, Clapperboard, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import { getVideoFactProps } from "@/lib/seo/projectVideoFacts";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import VideoGallery from "./VideoGallery.client";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/de/referenzen";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
// Bewusst anders betitelt als /de/projekte, damit keine doppelten Titel entstehen.
const PAGE_TITLE = "Referenzen — Videos aus unseren Produktionen";
const PAGE_DESCRIPTION =
  "Videos realisierter Sahneva-Produktionen: Bühnen, LED-Wände, Ton, Licht und Zelte bei Festivals, Kongressen, Produktlaunches und E-Sport-Finals.";
const PUBLISHED_AT = "2026-08-04T00:00:00+03:00";

const PROJECT_VIDEOS = [
  {
    id: "z4DqZERYXkM",
    title: "Hauptbühne des Sıfır-Atık-Festivals",
    description:
      "Aufnahmen vom Aufbau der Hauptbühne: Bühnenkonstruktion, LED-Wand, Beschallung und Licht für ein mehrtägiges Festival.",
    services: ["Bühne", "LED-Wand", "Ton", "Licht"],
    youtubeUrl: "https://www.youtube.com/watch?v=z4DqZERYXkM",
    thumbnailUrl: "https://i.ytimg.com/vi/z4DqZERYXkM/maxresdefault.jpg",
    uploadDate: "2026-06-05T00:00:00+03:00",
  },
  {
    id: "x-BYu0vgO2E",
    title: "SAHA 2026 — Ausstellungsfläche und Produktion",
    description:
      "Geschlossene Fachausstellung: Sonderkonstruktion, Besucherführung am Eingang, Bodenaufbau, Kuppelzelt und Hintergrundbeleuchtung.",
    services: ["Kuppelzelt", "Ausstellungsfläche", "Bodenaufbau", "Licht"],
    youtubeUrl: "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    thumbnailUrl: "https://i.ytimg.com/vi/x-BYu0vgO2E/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "CVdYV5BkF3k",
    title: "Laser- und Projektionsanimation im Kuppelzelt",
    description:
      "Aufnahme vom Veranstaltungstag: Laser- und Projektionsanimation auf der Innenfläche eines Kuppelzelts.",
    services: ["Kuppelzelt", "Projektion", "Laseranimation", "Licht"],
    youtubeUrl: "https://www.youtube.com/shorts/CVdYV5BkF3k?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/CVdYV5BkF3k/hq2.jpg",
    uploadDate: "2026-01-21T03:16:02-08:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "Dicle Elektrik Batman — Firmenveranstaltung",
    description:
      "Zusammenspiel von Bühne, LED-Wand und Technikcrew bei einer Unternehmensveranstaltung außerhalb der Metropolregion.",
    services: ["Bühne", "LED-Wand", "Technikcrew", "Aufbau"],
    youtubeUrl: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
    thumbnailUrl: "https://i.ytimg.com/vi/JNzGlNzNRuk/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "4ygMbL4FDRc",
    title: "TÜBİTAK-Themenzelt „Weltraumwissenschaften“ — TEKNOFEST",
    description:
      "Zeltaufbau, Flächengestaltung und Produktion des TÜBİTAK-Themenzelts auf dem Technologiefestival TEKNOFEST.",
    services: ["Zelt", "TEKNOFEST", "Veranstaltungsfläche", "Produktion"],
    youtubeUrl: "https://www.youtube.com/watch?v=4ygMbL4FDRc",
    thumbnailUrl: "https://i.ytimg.com/vi/4ygMbL4FDRc/hqdefault.jpg",
    uploadDate: "2025-10-28T00:48:40-07:00",
  },
  {
    id: "7yjrrEtWrr0",
    title: "TEKNOFEST — Innenausbau und Technik im Zelt",
    description:
      "Aus dem Zeltbereich des Festivals: Innenausbau, Beschallung, LED-Wand, Bestuhlung und die technische Infrastruktur dahinter.",
    services: ["Zelt", "Innenausbau", "LED-Wand", "Beschallung", "Mobiliar"],
    youtubeUrl: "https://www.youtube.com/shorts/7yjrrEtWrr0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/7yjrrEtWrr0/hq2.jpg",
    uploadDate: "2025-10-17T16:56:21-07:00",
  },
  {
    id: "_9Q7v0ZL304",
    title: "TEKNOFEST — Bühne, LED-Wand, Ton und Licht",
    description:
      "Aufnahmen vom Gelände: Bühne, LED-Wand, Beschallung, Licht und Infrastruktur als zusammenhängender Aufbau.",
    services: ["Bühne", "LED-Wand", "Ton", "Licht"],
    youtubeUrl: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    thumbnailUrl: "https://i.ytimg.com/vi/_9Q7v0ZL304/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "c72ILTyJH4A",
    title: "Stadtverwaltung Fatih — Veranstaltung „400 Projekte in 5 Jahren“",
    description:
      "Bühne, LED-Wand, Beschallung, Licht und technische Produktion einer öffentlichen Veranstaltung mit großem Publikum.",
    services: ["Firmenevent", "Bühne", "LED-Wand", "Ton & Licht"],
    youtubeUrl: "https://www.youtube.com/watch?v=c72ILTyJH4A",
    thumbnailUrl: "https://i.ytimg.com/vi/c72ILTyJH4A/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "PUBG Türkiye 2023 — Finale",
    description:
      "Bühne, LED-Wand, Beschallung, Licht, Laufsteg und technische Produktion eines E-Sport-Finales vor Publikum.",
    services: ["E-Sport", "Bühne", "LED-Wand", "Ton & Licht"],
    youtubeUrl: "https://www.youtube.com/watch?v=173gBurWSRQ",
    thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    uploadDate: "2023-12-01T00:00:00+03:00",
  },
  {
    id: "1R5Av0x5ouA",
    title: "Technische Probe für ein PUBG-Turnier",
    description:
      "Probe vor dem Turnier: Bühne, LED-Wand und Lichtprogrammierung werden gemeinsam durchgefahren.",
    services: ["E-Sport", "Bühne", "LED-Wand", "Licht"],
    youtubeUrl: "https://www.youtube.com/watch?v=1R5Av0x5ouA",
    thumbnailUrl: "https://i.ytimg.com/vi/1R5Av0x5ouA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "i-KtuiLiBmI",
    title: "LED-Würfel als Bühnenelement",
    description:
      "Würfelförmige LED-Konstruktion im Einsatz für Markenauftritt, Bühnenbild und Veranstaltungsfläche.",
    services: ["LED-Würfel", "LED-Wand", "Bühnenbild", "Produktion"],
    youtubeUrl: "https://www.youtube.com/shorts/i-KtuiLiBmI?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/i-KtuiLiBmI/hq2.jpg",
    uploadDate: "2026-04-10T01:44:04-07:00",
  },
  {
    id: "AihkXPzPBi0",
    title: "LED-Wand bei einer Firmenkonferenz",
    description:
      "Konferenzbühne im Betrieb: LED-Wand, Präsentationsablauf, Markenauftritt und technische Umsetzung.",
    services: ["Firmenevent", "LED-Wand", "Konferenz", "Technische Produktion"],
    youtubeUrl: "https://www.youtube.com/shorts/AihkXPzPBi0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/AihkXPzPBi0/hq2.jpg",
    uploadDate: "2026-05-30T09:54:16-07:00",
  },
  {
    id: "tyb1lG9KtiA",
    title: "Zeltaufbau und Organisation der Fläche",
    description:
      "Aufbau eines Eventzelts: Tragrahmen, Plane, Verankerung und die Abstimmung der Crew auf der Fläche.",
    services: ["Zelt", "Aufbau", "Verankerung", "Crew vor Ort"],
    youtubeUrl: "https://www.youtube.com/watch?v=tyb1lG9KtiA&t=46s",
    thumbnailUrl: "https://i.ytimg.com/vi/tyb1lG9KtiA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
    startSeconds: 46,
  },
  {
    id: "xatodgyZ_S8",
    title: "Galaabend und Ausstellung zur ersten bemannten Raumfahrtmission der Türkei",
    description:
      "Bühne, LED-Wand, Ausstellungsfläche und technische Produktion für Galaabend und begleitende Ausstellung.",
    services: ["Galaabend", "Ausstellungsfläche", "LED-Wand", "Technische Produktion"],
    youtubeUrl: "https://www.youtube.com/watch?v=xatodgyZ_S8",
    thumbnailUrl: "https://i.ytimg.com/vi/xatodgyZ_S8/hqdefault.jpg",
    uploadDate: "2026-06-09T03:10:17-07:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "TUA 2021 — Vorstellung des nationalen Raumfahrtprogramms",
    description:
      "Hinter den Kulissen: Bühne, LED-Wand, pneumatische Kuppel und technische Produktion einer landesweit übertragenen Veranstaltung.",
    services: ["Launch", "Kuppel", "LED-Wand", "Bühne"],
    youtubeUrl: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
    thumbnailUrl: "https://i.ytimg.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
    uploadDate: "2021-02-09T00:00:00+03:00",
  },
  {
    id: "qiqiBN4Uhu4",
    title: "EAACI-Kongress Istanbul — 360°-LED-Wand für Leti Pharma",
    description:
      "Aufbau einer umlaufenden 360°-LED-Wand auf dem EAACI-Kongress in Istanbul. Die geschlossene LED-Konstruktion schafft einen begehbaren Markenraum auf der Ausstellungsfläche.",
    services: ["360°-LED-Wand", "LED-Wand", "Firmenevent", "Kongress", "Ausstellung"],
    youtubeUrl: "https://youtube.com/shorts/qiqiBN4Uhu4",
    thumbnailUrl: "https://i.ytimg.com/vi/qiqiBN4Uhu4/hq2.jpg",
    uploadDate: "2026-06-01T00:00:00+03:00",
  },
];

const [featuredVideo, ...remainingVideos] = PROJECT_VIDEOS;

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: buildAlternatesForPath("/de/referenzen"),
  openGraph: {
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: featuredVideo.thumbnailUrl,
        width: 1280,
        height: 720,
        alt: featuredVideo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    images: [featuredVideo.thumbnailUrl],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const VIDEO_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      inLanguage: "de-DE",
      datePublished: PUBLISHED_AT,
      about: { "@id": ORGANIZATION_ID },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sahneva", item: `${SITE_URL}/de` },
        { "@type": "ListItem", position: 2, name: "Referenzen", item: PAGE_URL },
      ],
    },
    ...PROJECT_VIDEOS.map((video) => ({
      "@type": "VideoObject",
      "@id": `${PAGE_URL}#video-${video.id}`,
      name: video.title,
      description: video.description,
      thumbnailUrl: [video.thumbnailUrl],
      uploadDate: video.uploadDate,
      contentUrl: video.youtubeUrl,
      embedUrl: `https://www.youtube.com/embed/${video.id}`,
      inLanguage: "de-DE",
      publisher: { "@id": ORGANIZATION_ID },
      isPartOf: { "@id": `${PAGE_URL}#webpage` },
    })),
  ],
};

export default function GermanOurWorkPage() {
  return (
    <div className="relative overflow-hidden bg-[#050B18] text-white">
      <JsonLd id="de-our-work-jsonld" data={VIDEO_JSON_LD} />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,rgba(124, 58, 237,0.22),transparent_60%)]"
        aria-hidden="true"
      />

      <section className="relative">
        <div className="container mx-auto px-4 pt-16 md:pt-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-100">
              <Clapperboard className="h-4 w-4" />
              Referenzen
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
              Aufnahmen aus dem Aufbau und vom Veranstaltungstag
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Diese Videos zeigen keine Renderings, sondern die tatsächliche Umsetzung: wie Bühnen
              entstehen, wie LED-Wände gerigged werden und wie Ton und Licht vor dem Publikum
              eingemessen sind. Bei jedem Projekt steht dabei, welche Gewerke Sahneva übernommen hat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/de/kontakt"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 font-black text-white transition hover:bg-emerald-600"
              >
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/de/projekte"
                className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white transition hover:bg-white/15"
              >
                Projektübersicht
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
              <LazyVideoEmbed
                videoId={featuredVideo.id}
                title={featuredVideo.title}
                thumbnailUrl={featuredVideo.thumbnailUrl}
                locale="de"
                className="rounded-[2rem]"
                {...getVideoFactProps(featuredVideo.id)}
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/25 bg-amber-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-100">
                <Sparkles className="h-4 w-4" />
                Ausgewähltes Projekt
              </span>
              <h2 className="mt-5 text-2xl font-black leading-tight md:text-4xl">
                {featuredVideo.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">{featuredVideo.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {featuredVideo.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-100"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-black md:text-4xl">Weitere Produktionen</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Filtern Sie nach Gewerk, um gezielt Bühnenbau, LED-Wände, Ton und Licht, Zelte oder
              E-Sport-Produktionen zu sehen.
            </p>
          </div>
          <VideoGallery videos={remainingVideos} />
        </div>
      </section>

      <section className="relative border-t border-white/10 py-14 md:py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Sie planen ein vergleichbares Projekt?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Senden Sie Stadt, Datum und Format – wir sagen Ihnen, welcher Aufbau dafür realistisch
              ist und was er kostet.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/de/kontakt"
              className="inline-flex min-h-[50px] items-center justify-center rounded-2xl bg-white px-7 font-black text-slate-950 transition hover:bg-slate-100"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/de/leistungen"
              className="inline-flex min-h-[50px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 font-black text-white transition hover:bg-white/15"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
