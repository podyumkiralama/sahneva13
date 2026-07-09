import Link from "next/link";
import { ArrowRight, Clapperboard, Sparkles } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";
import VideoGallery from "./VideoGallery.client";

export const revalidate = 86400;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/en/our-work";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "Our Work | Stage, LED Screen & Event Production Projects";
const PAGE_DESCRIPTION =
  "Explore stage, LED screen, podium, sound, lighting, truss, tent and corporate event projects completed by Sahneva — with real on-site video references.";
const PUBLISHED_AT = "2026-06-08T00:00:00+03:00";

const PROJECT_VIDEOS = [
  {
    id: "z4DqZERYXkM",
    title: "Concert Stage and LED Screen Installation",
    description:
      "A project video selected from Sahneva's completed stage, LED screen, sound, lighting and technical production work.",
    services: ["Stage", "LED Screen", "Sound", "Lighting"],
    youtubeUrl: "https://www.youtube.com/watch?v=z4DqZERYXkM",
    thumbnailUrl: "https://i.ytimg.com/vi/z4DqZERYXkM/maxresdefault.jpg",
    uploadDate: "2026-06-05T00:00:00+03:00",
  },
  {
    id: "x-BYu0vgO2E",
    title: "SAHA 2026 Special Event Venue and Fair Production",
    description:
      "On-site footage from an indoor fair featuring custom structures, entry axis, floor infrastructure, dome tent and ambient lighting.",
    services: ["Dome Tent", "Fair Venue", "Flooring", "Lighting"],
    youtubeUrl: "https://www.youtube.com/watch?v=x-BYu0vgO2E",
    thumbnailUrl: "https://i.ytimg.com/vi/x-BYu0vgO2E/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "CVdYV5BkF3k",
    title: "Laser Projection Animation in Dome Tent",
    description:
      "Implementation footage from an event atmosphere created with laser and projection animation projected onto a dome tent ceiling.",
    services: ["Dome Tent", "Projection", "Laser Animation", "Lighting"],
    youtubeUrl: "https://www.youtube.com/shorts/CVdYV5BkF3k?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/CVdYV5BkF3k/hq2.jpg",
    uploadDate: "2026-01-21T03:16:02-08:00",
  },
  {
    id: "JNzGlNzNRuk",
    title: "Fast Setup and Technical Preparation",
    description:
      "A real-time clip showing stage, LED screen and technical crew coordination under tight deadlines.",
    services: ["Stage", "LED Screen", "Technical Team", "Setup"],
    youtubeUrl: "https://www.youtube.com/watch?v=JNzGlNzNRuk",
    thumbnailUrl: "https://i.ytimg.com/vi/JNzGlNzNRuk/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "4ygMbL4FDRc",
    title: "TÜBİTAK Space Science Tent – TEKNOFEST",
    description:
      "Project video selected from tent, event venue and field production work for the TÜBİTAK Space Science Tent at TEKNOFEST.",
    services: ["Tent", "TEKNOFEST", "Event Venue", "Production"],
    youtubeUrl: "https://www.youtube.com/watch?v=4ygMbL4FDRc",
    thumbnailUrl: "https://i.ytimg.com/vi/4ygMbL4FDRc/hqdefault.jpg",
    uploadDate: "2025-10-28T00:48:40-07:00",
  },
  {
    id: "7yjrrEtWrr0",
    title: "TEKNOFEST Tent Interior Decoration and Technical Infrastructure",
    description:
      "Implementation footage from the TEKNOFEST tent area covering interior decoration, sound system, LED screen, table-chair layout and event infrastructure.",
    services: ["Tent", "Decoration", "LED Screen", "Sound System", "Table & Chair"],
    youtubeUrl: "https://www.youtube.com/shorts/7yjrrEtWrr0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/7yjrrEtWrr0/hq2.jpg",
    uploadDate: "2025-10-17T16:56:21-07:00",
  },
  {
    id: "_9Q7v0ZL304",
    title: "TEKNOFEST Stage, LED Screen, Sound and Lighting Installation",
    description:
      "Field footage of stage, LED screen, sound, lighting and technical infrastructure integration at the TEKNOFEST event venue.",
    services: ["Stage", "LED Screen", "Sound", "Lighting"],
    youtubeUrl: "https://www.youtube.com/watch?v=_9Q7v0ZL304",
    thumbnailUrl: "https://i.ytimg.com/vi/_9Q7v0ZL304/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "c72ILTyJH4A",
    title: "Fatih Municipality – 400 Projects in 5 Years Event",
    description:
      "Field footage from the stage, LED screen, sound-lighting and technical production setup for Fatih Municipality's 400 projects event.",
    services: ["Corporate Event", "Stage", "LED Screen", "Sound & Lighting"],
    youtubeUrl: "https://www.youtube.com/watch?v=c72ILTyJH4A",
    thumbnailUrl: "https://i.ytimg.com/vi/c72ILTyJH4A/hqdefault.jpg",
    uploadDate: "2026-04-29T00:00:00+03:00",
  },
  {
    id: "173gBurWSRQ",
    title: "PUBG Turkey Finals 2023",
    description:
      "Field footage from the stage, LED screen, sound-lighting, podium and technical production setup for PUBG Turkey Finals 2023.",
    services: ["E-Sports", "Stage", "LED Screen", "Sound & Lighting"],
    youtubeUrl: "https://www.youtube.com/watch?v=173gBurWSRQ",
    thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    uploadDate: "2023-12-01T00:00:00+03:00",
  },
  {
    id: "1R5Av0x5ouA",
    title: "PUBG Stage, LED Screen and Lighting Rehearsals",
    description:
      "Technical rehearsal footage from the stage, LED screen and lighting rehearsals prepared for the PUBG event.",
    services: ["E-Sports", "Stage", "LED Screen", "Lighting"],
    youtubeUrl: "https://www.youtube.com/watch?v=1R5Av0x5ouA",
    thumbnailUrl: "https://i.ytimg.com/vi/1R5Av0x5ouA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
  },
  {
    id: "i-KtuiLiBmI",
    title: "Cube LED Screen Rental",
    description:
      "An eye-catching LED screen application for brand, stage and event venue using a creative cube LED display surface.",
    services: ["Cube LED", "LED Screen", "Stage Design", "Production"],
    youtubeUrl: "https://www.youtube.com/shorts/i-KtuiLiBmI?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/i-KtuiLiBmI/hq2.jpg",
    uploadDate: "2026-04-10T01:44:04-07:00",
  },
  {
    id: "AihkXPzPBi0",
    title: "LED Screen at a Corporate Event Meeting",
    description:
      "Implementation footage from a corporate meeting stage covering LED screen, presentation flow, brand visibility and technical production.",
    services: ["Corporate Event", "LED Screen", "Meeting", "Technical Production"],
    youtubeUrl: "https://www.youtube.com/shorts/AihkXPzPBi0?feature=share",
    thumbnailUrl: "https://i.ytimg.com/vi/AihkXPzPBi0/hq2.jpg",
    uploadDate: "2026-05-30T09:54:16-07:00",
  },
  {
    id: "tyb1lG9KtiA",
    title: "Tent Setup and Field Organization",
    description:
      "An implementation clip showing the load-bearing structure, canvas, anchoring and field coordination during event tent installation.",
    services: ["Tent", "Setup", "Anchoring", "Field Team"],
    youtubeUrl: "https://www.youtube.com/watch?v=tyb1lG9KtiA&t=46s",
    thumbnailUrl: "https://i.ytimg.com/vi/tyb1lG9KtiA/hqdefault.jpg",
    uploadDate: "2025-11-17T00:00:00+03:00",
    startSeconds: 46,
  },
  {
    id: "xatodgyZ_S8",
    title: "Beyond the Horizon Gala & Turkey's First Manned Space Mission Exhibition",
    description:
      "Project video from the stage, LED screen, exhibition area and technical production setup for the Beyond the Horizon Gala and Turkey's first manned space mission exhibition.",
    services: ["Gala", "Exhibition Area", "LED Screen", "Technical Production"],
    youtubeUrl: "https://www.youtube.com/watch?v=xatodgyZ_S8",
    thumbnailUrl: "https://i.ytimg.com/vi/xatodgyZ_S8/hqdefault.jpg",
    uploadDate: "2026-06-09T03:10:17-07:00",
  },
  {
    id: "j1Tr5l8DVW8",
    title: "National Space Program Launch 2021",
    description:
      "Behind-the-scenes footage from the stage, LED screen, pneumatic dome structure and technical production setup for the TUA National Space Program Launch.",
    services: ["Launch", "Dome", "LED Screen", "Stage"],
    youtubeUrl: "https://www.youtube.com/watch?v=j1Tr5l8DVW8",
    thumbnailUrl: "https://i.ytimg.com/vi/j1Tr5l8DVW8/hqdefault.jpg",
    uploadDate: "2021-02-09T00:00:00+03:00",
  },
  {
    id: "qiqiBN4Uhu4",
    title: "EAACI Congress Istanbul — Leti Pharma 360° LED Wall Installation",
    description:
      "Implementation footage from the 360° LED wall installation for Leti Pharma at EAACI Congress Istanbul. A fully surrounding LED screen architecture created an immersive brand experience in the corporate exhibition space.",
    services: ["360° LED Wall", "LED Screen", "Corporate Event", "Congress", "Exhibition"],
    youtubeUrl: "https://youtube.com/shorts/qiqiBN4Uhu4",
    thumbnailUrl: "https://i.ytimg.com/vi/qiqiBN4Uhu4/hq2.jpg",
    uploadDate: "2026-06-23T00:00:00+03:00",
  },
];

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": `${SITE_URL}/yaptiklarimiz`,
      "en": PAGE_URL,
      "ru": `${SITE_URL}/ru/our-work`,
      "ar": `${SITE_URL}/ar/our-work`,
      "x-default": `${SITE_URL}/yaptiklarimiz`,
    },
  },
  openGraph: {
    type: "website",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: PROJECT_VIDEOS[0].thumbnailUrl,
        width: 1280,
        height: 720,
        alt: PROJECT_VIDEOS[0].title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [PROJECT_VIDEOS[0].thumbnailUrl],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function OurWorkStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        inLanguage: "en-US",
        datePublished: PUBLISHED_AT,
        dateModified: PUBLISHED_AT,
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#video-list` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Our Work", item: PAGE_URL },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#video-list`,
        name: "Sahneva Our Work Video List",
        itemListElement: PROJECT_VIDEOS.map((video, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${PAGE_URL}#video-${video.id}` },
        })),
      },
      ...PROJECT_VIDEOS.map((video) => ({
        "@type": "VideoObject",
        "@id": `${PAGE_URL}#video-${video.id}`,
        name: video.title,
        description: video.description,
        thumbnailUrl: [video.thumbnailUrl, `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`],
        embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1${video.startSeconds ? `&start=${video.startSeconds}` : ""}`,
        contentUrl: video.youtubeUrl,
        url: video.youtubeUrl,
        ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
        inLanguage: "en-US",
      })),
    ],
  };

  return <JsonLd data={jsonLd} />;
}

function SectionEyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100 shadow-lg shadow-blue-950/20 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_18px_rgba(147,197,253,0.85)]" />
      {children}
    </div>
  );
}

export default function OurWorkPage() {
  const featuredVideo = PROJECT_VIDEOS[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <OurWorkStructuredData />

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.16),transparent_28%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,auto,64px_64px,64px_64px]" aria-hidden="true" />
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-32 top-36 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/65">
            <Link href="/en" className="transition hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-white">Our Work</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionEyebrow>Video Project Showcase</SectionEyebrow>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Our completed stage, LED screen and event production projects
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
                We bring together on-site references showing how we install stage, LED screen, sound-lighting, truss, podium and tent solutions at real event venues.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/en/contact"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/20 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Get a Quote for a Similar Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/en/projects"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                >
                  Browse Project Details
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="mb-3 flex items-center justify-between gap-3 px-2 pt-1 text-sm text-slate-300">
                  <span className="inline-flex items-center gap-2 font-black text-white">
                    <Sparkles className="h-4 w-4 text-blue-200" />
                    Featured Video
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-blue-100">Sahneva</span>
                </div>
                <LazyVideoEmbed
                  videoId={featuredVideo.id}
                  title={featuredVideo.title}
                  thumbnailUrl={featuredVideo.thumbnailUrl}
                  startSeconds={featuredVideo.startSeconds}
                  locale="en"
                  className="rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="video-gallery-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_20%,rgba(59,130,246,0.10),transparent_32%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Video Gallery</SectionEyebrow>
              <h2 id="video-gallery-title" className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                From setup to event day — real work from the field
              </h2>
            </div>
          </div>
          <VideoGallery videos={PROJECT_VIDEOS} />
        </div>
      </section>

      <section className="relative px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-blue-950/20 backdrop-blur">
          <div className="relative p-8 md:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_35%)]" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-blue-100">
                  <Clapperboard className="h-4 w-4" />
                  Sahneva Project Archive
                </div>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Let's plan a similar setup for your event.
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  We deliver end-to-end solutions for concerts, festivals, corporate events, product launches and outdoor events — covering stage, LED screen, podium, sound, lighting, truss and tent from a single source.
                </p>
              </div>
              <Link
                href="/en/contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3 text-sm font-black text-white shadow-xl shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
