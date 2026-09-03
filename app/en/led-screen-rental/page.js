// app/en/led-screen-rental/page.js

import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import GlossaryTermLinks from "@/components/seo/GlossaryTermLinks";
import Image from "next/image";
import Link from "next/link";
import StaticResponsiveImage from "@/components/media/StaticResponsiveImage";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { PROJECTS_COMPLETED, PROVINCES_COUNT } from "@/lib/stats";
import { getLastModifiedForFile } from "@/lib/seoLastModified";
import { getHomeResponsiveImage } from "@/lib/homeResponsiveImages";
import {
  Activity,
  ArrowRight,
  Armchair,
  BookOpen,
  Briefcase,
  Camera,
  Clock3,
  Cpu,
  Eye,
  Hammer,
  Headphones,
  Layers,
  MapPin,
  MessageCircle,
  Monitor,
  Music,
  Phone,
  Settings,
  Shield,
  SlidersHorizontal,
  Star,
  Sun,
  Tent,
  Tv,
  Users,
  Zap,
} from "lucide-react";

/* ================== Constants ================== */
export const revalidate = 86400;
const ORIGIN = "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const PAGE_LAST_MODIFIED = getLastModifiedForFile(
  "app/en/led-screen-rental/page.js",
  "2026-08-26",
);
const PHONE = "+905453048671";
const WA_TEXT =
  "Hello, I'd like to request a professional quote for our LED screen rental project. Event type: [Concert/Expo/Wedding], Date: [Date], City: [City].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;
const CURVED_P19_RING_IMAGE =
  "/img/led/absen-p19-sekiz-panel-360-dairesel-led-arka-baglanti-sahneva.webp";
const CURVED_P19_STAGE_IMAGE =
  "/img/led/absen-p19-kavisli-led-sahne-ust-bant-halka-sahneva.webp";
const P19_PROOF_DISPLAY_IMAGE =
  "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp";
const P19_TECHNICAL_CONTROL_IMAGE =
  "/img/led/p19-indoor-led-teknik-masa-kurumsal-konferans-sahneva.webp";
const CORPORATE_CONFERENCE_IMAGE =
  "/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp";
const GALA_STAGE_HERO_DESKTOP =
  "/img/led/gala-led-sahne-video-wall-sahneva-hero-desktop.webp";
const GALA_STAGE_HERO_TABLET =
  "/img/led/gala-led-sahne-video-wall-sahneva-hero-tablet.webp";
const GALA_STAGE_HERO_MOBILE =
  "/img/led/gala-led-sahne-video-wall-sahneva-hero-mobile.webp";
const OUTDOOR_CONCERT_IMAGE =
  "/img/led/acik-hava-konser-led-ekran-sahneva.webp";

function QuotaSafeLedImage({ src, alt, fill, unoptimized, ...props }) {
  if (getHomeResponsiveImage(src)) {
    return <StaticResponsiveImage src={src} alt={alt} {...props} />;
  }

  return <Image src={src} alt={alt} fill={fill} unoptimized={unoptimized} {...props} />;
}

const getServiceWhatsappLink = (title) => {
  const text = `Hello, I would like a technical assessment and proposal for ${title}. Event date: [dd.mm.yyyy], venue: [indoor/outdoor], estimated screen size: [xx m2].`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

/* ================== META ================== */
export const metadata = {
  title: "LED Screen & LED Wall Rental in Turkey",
  description:
    "LED screen and LED wall rental in Turkey with indoor, outdoor, P1.9 curved and circular systems, 4K processing, installation and on-site operators.",
  alternates: buildAlternatesForPath("/en/led-screen-rental"),
  openGraph: {
    title: "LED Screen & LED Wall Rental in Turkey | Sahneva",
    description:
      "Indoor, outdoor and curved LED screen rental in Turkey with Absen P1.9, Unilumin P2.6/P2.9, installation, processing and on-site operators.",
    url: `${ORIGIN}/en/led-screen-rental`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [{
      url: `${ORIGIN}${GALA_STAGE_HERO_DESKTOP}`,
      width: 1440,
      height: 810,
      alt: "Premium LED wall and stage production by Sahneva"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Screen & LED Wall Rental in Turkey | Sahneva",
    description:
      "LED screen rental with P1.9 curved indoor and outdoor LED walls, NovaStar processing and nationwide installation crews.",
    images: [`${ORIGIN}${GALA_STAGE_HERO_DESKTOP}`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== Helpers & data ================== */
const slugify = (s) =>
  s.toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: GALA_STAGE_HERO_DESKTOP,
  tabletSrc: GALA_STAGE_HERO_TABLET,
  mobileSrc: GALA_STAGE_HERO_MOBILE,
  alt: "Premium corporate stage with a large LED wall, lighting and technical production by Sahneva",
};

const SERVICES = [
  {
    Icon: Monitor,
    image: P19_PROOF_DISPLAY_IMAGE,
    title: "Indoor & Curved LED Screens",
    description: "High-resolution Absen and Unilumin systems for launches, conferences, exhibitions and close-view corporate productions.",
    features: ["Absen P1.9 curved indoor", "Unilumin P2.6 / P2.9", "Circular and concave layouts", "NovaStar processing"],
    cta: "Discuss an indoor setup",
  },
  {
    Icon: Sun,
    image: OUTDOOR_CONCERT_IMAGE,
    title: "Outdoor LED Screens",
    description: "High-brightness, weather-resistant LED walls for concerts, festivals and open-air brand experiences.",
    features: ["P4–P6 pixel pitch", "5000–6500+ nit", "IP65 weatherproof", "UV-resistant panels"],
    cta: "Plan an outdoor screen",
  },
  {
    Icon: Layers,
    image: CURVED_P19_STAGE_IMAGE,
    title: "LED Video Wall Systems",
    description: "Modular, curved and circular LED canvases designed as part of the stage architecture.",
    features: ["Modular design", "Curved and circular layouts", "High refresh rates", "Professional controllers"],
    cta: "Explore creative formats",
  },
  {
    Icon: Cpu,
    image: P19_TECHNICAL_CONTROL_IMAGE,
    title: "Control & Broadcast Systems",
    description: "Professional processing, media playback, presentation switching and live broadcast integration.",
    features: ["Novastar processors", "4K scaling", "Media servers", "Live streaming support"],
    cta: "Plan the control system",
  },
  {
    Icon: Zap,
    image: CORPORATE_CONFERENCE_IMAGE,
    title: "Installation & Rigging",
    description: "Coordinated delivery, rigging, installation, safety checks and dismantling by one field team.",
    features: ["Ground stack setups", "Truss rigging", "Safety systems", "Fast assembly"],
    cta: "Request an installation plan",
  },
  {
    Icon: Headphones,
    image: "/img/led/absen-p19-led-teknik-ekip-kablo-hazirlik-sahneva.webp",
    title: "Operator & Technical Support",
    description: "Experienced operators manage content, playback and on-site technical continuity throughout the event.",
    features: ["Professional operators", "Content management", "24/7 technical support", "Emergency response"],
    cta: "Add an on-site operator",
  },
];

const USE_CASES = [
  {
    Icon: Music,
    title: "Concerts & festivals",
    desc: "Main stage LED walls with side screens and IMAG support"
  },
  {
    Icon: Briefcase,
    title: "Corporate launches",
    desc: "Professional presentation backdrops and brand showcases"
  },
  {
    Icon: Tent,
    title: "Trade shows & exhibitions",
    desc: "Booth integrations and interactive digital displays"
  },
  {
    Icon: Activity,
    title: "Sports & stadium events",
    desc: "Giant screens, scoreboards and fan engagement content"
  },
  {
    Icon: Tv,
    title: "Retail & public spaces",
    desc: "Advertising loops and informational signage"
  },
  {
    Icon: Camera,
    title: "Private celebrations",
    desc: "Live ceremony broadcasts and photo/video displays"
  },
  {
    Icon: Users,
    title: "Public events",
    desc: "Reliable high-visibility systems for ceremonies and city events"
  },
  {
    Icon: Headphones,
    title: "Broadcast & studio",
    desc: "Camera-ready playback, processing and technical show control"
  },
];

/* ================== HERO ================== */
const HERO_BADGES = [
  "Indoor LED",
  "Outdoor LED",
  "Curved & Circular LED",
  "Processing & Technical Crew",
  "Nationwide Delivery",
];

const HERO_ACTIONS = [
  {
    key: "quote",
    label: "Request a Proposal",
    href: WHATSAPP,
    external: true,
    ariaLabel: "Request an LED screen rental proposal on WhatsApp",
  },
  {
    key: "services",
    label: "Explore Our Capabilities",
    href: "#services",
    ariaLabel: "Explore Sahneva LED screen capabilities",
  },
];

const HERO_METRICS = [
  {
    value: "Indoor",
    label: "High-resolution LED",
    detail: "Premium LED walls for conferences, launches, studios and close-view environments.",
  },
  {
    value: "Outdoor",
    label: "High-brightness systems",
    detail: "Weather-ready visual systems for festivals, concerts and open-air productions.",
  },
  {
    value: PROJECTS_COMPLETED,
    label: "Delivered productions",
    detail: "A visual portfolio spanning corporate events, exhibitions and large-scale stages.",
  },
  {
    value: `${PROVINCES_COUNT} cities`,
    label: "Nationwide operation",
    detail: "Transport, installation, show operation and dismantling coordinated by one team.",
  },
];

function Hero() {
  return (
    <PageHero
      eyebrow="Premium LED screen rental in Istanbul and across Turkey"
      title="LED Screen Rental"
      description="Premium indoor, outdoor, curved and circular LED walls planned as part of the complete event environment. Sahneva coordinates visual design, nationwide transport, installation, processing, show operation and dismantling through one production team."
      badges={HERO_BADGES}
      actions={HERO_ACTIONS}
      metrics={HERO_METRICS}
      image={{
        src: HERO.src,
        alt: HERO.alt,
        width: 1440,
        height: 810,
        sources: [
          { media: "(max-width: 640px)", srcSet: HERO.mobileSrc },
          { media: "(max-width: 1024px)", srcSet: HERO.tabletSrc },
        ],
      }}
    />
  );
}

/* ================== Services ================== */
function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-white to-violet-50/50 py-14 md:py-16" aria-labelledby="services-title">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-9 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Visual production portfolio</p>
          <h2 id="services-title" className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">
            LED solutions designed for <span className="text-violet-700">premium event environments</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            Explore indoor, outdoor, curved and broadcast-ready LED systems through real Sahneva installations.
          </p>
        </div>

        <div
          role="region"
          aria-label="LED screen service cards, scroll horizontally"
          tabIndex={0}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <article key={id} className="group relative min-h-[380px] w-[84vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl sm:w-auto" aria-labelledby={id}>
                <QuotaSafeLedImage
                  src={service.image}
                  alt={`${service.title} delivered by Sahneva`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/10" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
                  <div className="mb-3 inline-flex rounded-xl border border-white/15 bg-white/10 p-2.5 text-violet-100 backdrop-blur-sm">
                    <service.Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 id={id} className="text-xl font-black md:text-2xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{service.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {service.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-xs font-bold text-white/90 backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={getServiceWhatsappLink(service.title)}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 text-sm font-black text-slate-950 transition hover:bg-violet-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
                  >
                    {service.cta}
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================== Real curved P1.9 application ================== */
function CurvedP19Proof() {
  return (
    <section
      id="curved-circular-led-screen"
      className="bg-[#0B1120] py-16 text-white md:py-20"
      aria-labelledby="curved-p19-heading"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-300">
              Real Absen P1.9 application
            </p>
            <h2 id="curved-p19-heading" className="mt-3 text-3xl font-black leading-tight md:text-5xl">
              Curved and circular <span className="text-violet-300">LED screen installation</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              During workshop pre-assembly, eight Absen P1.9 panels were joined at 45° per panel to form a
              closed 360° LED ring. This is our smallest circular configuration; larger diameters can be
              planned by adapting the panel count and joint angles to the project dimensions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              For curved P1.9 LED screen rental in Istanbul or elsewhere in Turkey, the final diameter,
              screen resolution, support method and content canvas are confirmed against the stage design.
            </p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-violet-300/30 bg-violet-300/10 px-5 py-3 font-black text-violet-100 transition hover:bg-violet-300/20 focus-ring sm:w-fit"
            aria-label="Discuss a curved LED screen project on WhatsApp (opens in a new tab)"
          >
            Discuss a curved LED build
          </a>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl">
            <div className="relative h-[340px] overflow-hidden bg-slate-950 md:h-[460px]">
              <QuotaSafeLedImage
                src={CURVED_P19_RING_IMAGE}
                alt="Rear connections of eight Absen P1.9 LED panels joined at 45 degrees to form a 360-degree circular display"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 38vw"
                loading="lazy"
              />
            </div>
            <figcaption className="p-5">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-violet-300">
                Smallest circular format
              </span>
              <h3 className="mt-2 text-xl font-black">8 panels × 45° = 360°</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                The rear view shows the cabinet joints and the complete circular geometry before the screen is
                prepared for the event site.
              </p>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl">
            <div className="relative h-[340px] overflow-hidden bg-slate-950 md:h-[460px]">
              <QuotaSafeLedImage
                src={CURVED_P19_STAGE_IMAGE}
                alt="Absen P1.9 curved upper LED band and circular LED ring installed on an event stage"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 62vw"
                loading="lazy"
              />
            </div>
            <figcaption className="p-5">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-violet-300">
                Event-site application
              </span>
              <h3 className="mt-2 text-xl font-black">Curved upper band and circular LED ring</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                The curved elements were installed with the main stage wall and checked as separate mapped
                canvases during the image rehearsal.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ================== Gallery ================== */
const GALLERY_IMAGES = [
  {
    src: P19_PROOF_DISPLAY_IMAGE,
    alt: "Large Absen P1.9 LED wall in a premium corporate event stage",
    caption: "A large-format P1.9 LED canvas integrated with lighting, scenic design and stage architecture.",
  },
  {
    src: P19_TECHNICAL_CONTROL_IMAGE,
    alt: "Professional LED control desk during a corporate production",
    caption: "Processing, playback and technical monitoring managed from a dedicated show-control position.",
  },
  {
    src: CORPORATE_CONFERENCE_IMAGE,
    alt: "Corporate conference LED wall with professional stage lighting",
    caption: "A presentation-led corporate environment planned for clear content, balanced light and camera use.",
  },
  {
    src: "/img/led/led-wall-urun-lansmani-hybrid-sahneva.webp",
    alt: "Hybrid product launch with a premium LED wall",
    caption: "A clean visual backdrop for product launches, executive presentations and hybrid broadcasts.",
  },
  {
    src: "/img/led/led-ekran-fuar-lansman-salon-kurulumu-sahneva.webp",
    alt: "LED wall installation for an exhibition and launch venue",
    caption: "Brand content carried across a wide-format LED surface in an indoor event venue.",
  },
  {
    src: "/img/led/gala-led-sahne-video-wall-sahneva.webp",
    alt: "Gala stage with LED video wall and show lighting",
    caption: "A cinematic gala setup combining LED content, stage depth and carefully layered lighting.",
  },
  {
    src: OUTDOOR_CONCERT_IMAGE,
    alt: "Outdoor concert stage with a high-brightness LED screen",
    caption: "High-brightness LED visuals designed for open-air viewing distances and live performance content.",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-14 md:py-16" aria-labelledby="gallery-heading">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Sahneva visual archive</p>
            <h2 id="gallery-heading" className="mt-3 text-3xl font-black leading-tight text-gray-900 md:text-5xl">
              Real installations. <span className="text-violet-700">Premium visual impact.</span>
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 md:text-lg">
              Selected corporate, launch, gala and outdoor installations from Sahneva&apos;s field portfolio.
            </p>
          </div>
          <Link href="/en/projects" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-violet-200 bg-white px-5 text-sm font-black text-violet-800 transition hover:bg-violet-50 lg:self-auto">
            <Eye size={18} aria-hidden="true" />
            View all projects
          </Link>
        </div>

        <div className="mb-12 grid items-start gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="relative self-start overflow-hidden rounded-3xl border border-gray-200 bg-slate-900 shadow-xl">
            <div className="relative h-[420px] sm:h-[520px] lg:h-[690px]">
              <QuotaSafeLedImage src={GALLERY_IMAGES[0].src} alt={GALLERY_IMAGES[0].alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 max-w-2xl">
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-violet-200 backdrop-blur">Featured installation</div>
                <h3 className="text-3xl font-black text-white md:text-4xl">Corporate stage design with Absen P1.9 LED</h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{GALLERY_IMAGES[0].caption}</p>
              </div>
            </div>
          </article>

          <div
            role="region"
            aria-label="Featured LED installation gallery, scroll horizontally"
            tabIndex={0}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {GALLERY_IMAGES.slice(1, 3).map((image) => (
              <article key={image.src} className="w-[82vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg lg:w-auto">
                <div className="relative h-[240px] lg:h-[260px]">
                  <QuotaSafeLedImage src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                </div>
                <div className="p-5"><p className="text-sm font-semibold leading-relaxed text-gray-700">{image.caption}</p></div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-black text-gray-900 md:text-3xl">Selected field applications</h3>
          <p className="mt-2 text-base text-gray-600">A closer look at the visual character, scale and technical finish of our LED productions.</p>
          <div
            role="region"
            aria-label="LED field application gallery, scroll horizontally"
            tabIndex={0}
            className="-mx-4 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4"
          >
            {GALLERY_IMAGES.slice(3).map((image) => (
              <article key={image.src} className="w-[80vw] shrink-0 snap-start overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl md:w-auto">
                <div className="relative h-[320px] md:h-[360px]">
                  <QuotaSafeLedImage src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" />
                </div>
                <div className="p-5"><p className="text-sm font-semibold leading-relaxed text-gray-700">{image.caption}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Technical infrastructure ================== */
function Technical() {
  const technicalItems = [
    {
      category: "pixel",
      title: "Pixel technologies",
      description: "Pixel-pitch options selected around viewing distance, content detail and camera use",
      Icon: Eye,
      features: ["P1.9: Close-view indoor detail", "P2.6 / P2.9: Indoor event formats", "P3.9 / P4: Hybrid and outdoor use", "P6: Long-distance viewing"]
    },
    {
      category: "brightness",
      title: "Brightness & visibility",
      description: "Optimised luminance for indoor venues and open-air sunlight",
      Icon: Sun,
      features: ["Indoor: 800–1500 nit", "Outdoor: 3500–6500 nit", "Auto brightness control", "Daylight clarity"]
    },
    {
      category: "protection",
      title: "Protection systems",
      description: "Weather-resistant cabinets with IP-rated sealing and robust build",
      Icon: Shield,
      features: ["IP65 front protection", "IP54 rear sealing", "UV-resistant housing", "Dust-proof modules"]
    },
    {
      category: "control",
      title: "Control systems",
      description: "Professional video processing, switching and redundancy",
      Icon: Settings,
      features: ["Novastar processors", "4K video scaling", "Media servers", "Remote monitoring"]
    },
    {
      category: "rigging",
      title: "Rigging systems",
      description: "Engineered structures for rapid and safe installations",
      Icon: Zap,
      features: ["Ground stack platforms", "Truss rigging", "Motorised hoists", "Quick-lock mechanisms"]
    },
    {
      category: "support",
      title: "Technical support",
      description: "Round-the-clock engineers with backup inventory and diagnostics",
      Icon: Headphones,
      features: ["24/7 technical hotline", "Spare module stock", "Rapid response crew", "Remote diagnostics"]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-14 md:py-20" aria-labelledby="technical-title">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-700">Engineered for the show</p>
          <h2 id="technical-title" className="mt-3 text-3xl font-black text-gray-900 md:text-5xl lg:text-6xl">
            Technical <span className="text-violet-700">infrastructure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Core specifications stay easy to scan; detailed configuration is available only when you need it.
          </p>
        </div>

        <div
          role="region"
          aria-label="LED technical infrastructure cards, scroll horizontally"
          tabIndex={0}
          className="-mx-4 flex max-w-7xl snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-auto md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3 lg:gap-6"
        >
          {technicalItems.map((item) => {
            const detailsId = `${slugify(item.title)}-details`;

            return (
            <div key={item.category} className="group w-[82vw] shrink-0 snap-start md:w-auto">
              <div className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="mb-3 flex items-center gap-3 text-xl font-black text-gray-900 transition-colors group-hover:text-violet-700">
                  <span className="text-violet-700 transition-transform duration-300 group-hover:scale-110">
                    <item.Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">{item.description}</p>
                <details className="mt-4 rounded-xl border border-gray-100 bg-gray-50/70 p-4">
                  <summary
                    aria-controls={detailsId}
                    className="flex min-h-11 cursor-pointer select-none items-center rounded-lg font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2"
                  >
                    View specifications
                  </summary>
                  <ul id={detailsId} className="mt-3 space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-700" aria-hidden="true" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================== Performance stats ================== */
function StatsBand() {
  const stats = [
    { value: "400 m²", label: "Absen P1.9 indoor inventory" },
    { value: PROJECTS_COMPLETED, label: "Delivered productions" },
    { value: `${PROVINCES_COUNT} provinces`, label: "Nationwide installation" },
    { value: `${YEARS_OF_EXPERIENCE}`, label: "Years of experience" },
  ];

  return (
    <section id="field-proof" className="bg-[#0B1120] py-10" aria-label="LED screen field proof and service coverage">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm md:p-6">
              <div className="text-2xl font-black text-white md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-sm leading-snug text-white/75">{stat.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Use cases ================== */
function UseCases() {
  return (
    <section className="bg-slate-950 py-14 md:py-20" aria-labelledby="use-cases-title">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center md:mb-14">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-violet-400">Built around the event</p>
          <h2 id="use-cases-title" className="mt-3 text-3xl font-black text-white md:text-5xl lg:text-6xl">
            LED systems for <span className="text-violet-400">every show format</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            A production-ready visual system, configured around the venue, content, audience and camera plan.
          </p>
        </div>

        <div
          role="region"
          aria-label="LED screen use cases, scroll horizontally"
          tabIndex={0}
          className="-mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:overflow-visible md:px-0 md:pb-0"
        >
          <ul className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {USE_CASES.map((uc) => (
              <li key={uc.title} className="group w-[82vw] shrink-0 snap-start rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 md:w-auto">
                <div className="mb-5 text-violet-400 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  <uc.Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase leading-tight tracking-wide text-white">{uc.title}</h3>
                <p className="border-t border-white/10 pt-3 text-sm leading-relaxed text-white/75">{uc.desc}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
            aria-label="Request a tailored solution for your event on WhatsApp (opens in a new tab)"
          >
            <MessageCircle size={20} aria-hidden="true" className="mr-3" />
            <span>Request a tailored solution for your event</span>
            <span className="sr-only">(opens in a new tab)</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== FAQ ================== */
const FAQ_SCHEMA_ITEMS = [
  {
    question: "What is included in an LED screen rental project?",
    answer:
      "Each project is planned around the screen system, support structure, video processing, transport, installation, on-site crew, show operation and dismantling. The final scope is confirmed after the venue, content and production requirements are reviewed.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Standard LED wall builds take 2 to 6 hours. Up to 20 square metres typically completes within 2 to 3 hours, 20 to 50 square metres within 3 to 4 hours and large-format installs within 4 to 6 hours. Complex rigging or custom structures may require more time.",
  },
  {
    question: "Can LED screens operate in rain?",
    answer:
      "Yes. Outdoor cabinets feature IP65 front protection and can operate safely in rain. In extreme storms or high winds, operation may be paused for safety.",
  },
  {
    question: "Which pixel pitch should I choose?",
    answer:
      "Start with the closest viewing distance, content detail and camera plan. P1.9 suits close-view presentations and camera-led productions, P2.6 or P2.9 covers many indoor conference and launch layouts, and P3.9 is considered for longer viewing distances and outdoor stages.",
  },
  {
    question: "Can you build curved or circular LED screens?",
    answer:
      "Yes. Sahneva's 400 m² Absen P1.9 inventory supports curved and circular indoor LED configurations. In one workshop-tested build, eight panels joined at 45 degrees formed a closed 360-degree ring. Larger diameters are planned with additional panels and project-specific geometry after the required dimensions are confirmed.",
  },
  {
    question: "Can this system be used as a flexible LED alternative?",
    answer:
      "Yes, when a brief uses flexible LED to mean a planned curved or circular display rather than a freely bendable soft module. Sahneva's photographed Absen P1.9 system uses rental cabinets joined at planned angles, so it is a different product type from flexible LED modules. We confirm the radius, dimensions, viewing distance and support method before recommending it as the alternative.",
  },
  {
    question: "Do you provide LED screen rental outside Istanbul?",
    answer:
      "Yes. We provide indoor and outdoor LED wall rental across Turkey, including nationwide transport, installation, video processing, on-site operators and dismantling. International agencies can coordinate the complete local scope through one English-speaking production contact.",
  },
];

function FAQ() {
  const faqs = [
    {
      q: "What is included in an LED screen rental project?",
      a: "Each project is planned around the screen system, support structure, video processing, transport, installation, on-site crew, show operation and dismantling. The final scope is confirmed after the venue, content and production requirements are reviewed."
    },
    {
      q: "How long does installation take?",
      a: "Standard LED wall builds take 2–6 hours. Up to 20 m² typically completes within 2–3 hours, 20–50 m² within 3–4 hours and large-format 50 m²+ installs within 4–6 hours. Complex rigging or custom structures may extend to 24 hours."
    },
    {
      q: "Can LED screens operate in rain?",
      a: "Yes. Our outdoor cabinets feature IP65 front protection and can operate safely in rain. The rating ensures full dust protection and resistance to water jets. In extreme storms or high winds we recommend pausing operation for safety."
    },
    {
      q: "Which pixel pitch should I choose?",
      a: "Start with the closest viewing distance, content detail and camera plan. P1.9 suits close-view presentations and camera-led productions, P2.6 or P2.9 covers many indoor conference and launch layouts, and P3.9 is considered for longer viewing distances and outdoor stages."
    },
    {
      q: "Can you build curved or circular LED screens?",
      a: "Yes. Sahneva's 400 m² Absen P1.9 inventory supports curved and circular indoor LED configurations. In one workshop-tested build, eight panels joined at 45 degrees formed a closed 360-degree ring. Larger diameters are planned with additional panels and project-specific geometry after the required dimensions are confirmed."
    },
    {
      q: "Can this system be used as a flexible LED alternative?",
      a: "Yes, when a brief uses flexible LED to mean a planned curved or circular display rather than a freely bendable soft module. Sahneva's photographed Absen P1.9 system uses rental cabinets joined at planned angles, so it is a different product type from flexible LED modules. We confirm the radius, dimensions, viewing distance and support method before recommending it as the alternative."
    },
    {
      q: "Do you provide LED screen rental outside Istanbul?",
      a: "Yes. We provide indoor and outdoor LED wall rental across Turkey, including nationwide transport, installation, video processing, on-site operators and dismantling. International agencies can coordinate the complete local scope through one English-speaking production contact."
    },
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="faq-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Frequently asked <span className="gradient-text gradient-text--safe-xl">questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Answers to the most common LED screen rental questions
          </p>
        </div>

        <ul className="space-y-6 list-none" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            return (
              <li key={index}>
                <details
                  className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-violet-50 open:border-violet-200 border-2 border-transparent open:border"
                >
                  <summary
                    className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="ml-4 transition-transform duration-500 group-open:rotate-180 text-violet-600 bg-violet-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                    >
                      ⌄
                    </span>
                  </summary>
                  <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-violet-500" role="region">
                    {faq.a}
                  </div>
                </details>
              </li>
            );
          })}
        </ul>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Need more details? Our engineers can call you back with tailored advice.
          </p>
          <Link
            href="/en/faq#led"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
  aria-label="Explore all LED screen FAQs"
          >
            <BookOpen size={20} aria-hidden="true" className="mr-3" />
            <span className="text-lg">View LED screen FAQs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Complementary services ================== */
function RelatedServices() {
  const services = [
    {
      href: "/en/av-rental-istanbul",
      title: "AV rental in Istanbul",
      Icon: SlidersHorizontal,
      desc: "Screens bundled with audio, microphones, lighting and streaming for Istanbul events"
    },
    {
      href: "/en/sound-light-rental",
      title: "Sound & lighting systems",
      Icon: Music,
      desc: "Concert-grade audio, lighting design and truss solutions"
    },
    {
      href: "/en/stage-rental",
      title: "Stage rental",
      Icon: Hammer,
      desc: "Modular and portable stages engineered for any venue"
    },
    {
      href: "/en/table-chair-rental",
      title: "Table & chair rentals",
      Icon: Armchair,
      desc: "Banquet seating, cocktail furniture and layout planning"
    },
    {
      href: "/en/tent-rental",
      title: "Event tents",
      Icon: Tent,
      desc: "Aluminium structure tents and weatherproof covered areas"
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-violet-100/30"
      aria-labelledby="complementary-services-title"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="complementary-services-title"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Complementary{" "}
            <span className="gradient-text gradient-text--safe-xl">
              services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Additional event technology that completes your LED wall experience
          </p>
          <div 
            className="w-32 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8 rounded-full" 
            aria-hidden="true" 
          />
        </div>

        <nav aria-label="Complementary services">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg focus-ring"
              >
                <div 
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-700 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <service.Icon size={24} strokeWidth={1.7} />
                </div>
                <h3 className="mb-3 text-lg font-black leading-tight text-gray-900 transition-colors group-hover:text-violet-700">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <div className="sr-only">
          <p>
            This section lists complementary services that enhance your LED installation.
            Activate any service card to open the relevant English service detail page.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-title">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-violet-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" aria-hidden="true"></div>
          <div className="relative z-10">
            <h2 id="cta-title" className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Ready for immersive LED screen solutions?
            </h2>
            <p className="text-violet-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Share your event plan and we will recommend the ideal LED configuration with free site survey,
              technical planning, visual integration and one coordinated production scope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus-ring shadow-lg"
              >
                <Phone size={20} aria-hidden="true" className="mr-3" />
                <span className="text-lg">Request a proposal</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
                aria-label="Message us on WhatsApp (opens in a new tab)"
              >
                <MessageCircle size={20} aria-hidden="true" className="mr-3" />
                <span className="text-lg">Message us on WhatsApp</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-violet-100 md:text-base">
              <span className="inline-flex items-center gap-2"><MapPin size={18} aria-hidden="true" />Service in {PROVINCES_COUNT} provinces</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={18} aria-hidden="true" />24/7 technical support</span>
              <span className="inline-flex items-center gap-2"><Star size={18} aria-hidden="true" />{YEARS_OF_EXPERIENCE} years of experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
function LedScreenJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "LED Screen and LED Wall Rental in Turkey",
        description: "LED screen rental in Turkey with Absen P1.9 curved and circular indoor displays, Unilumin P2.6/P2.9 panels, outdoor LED walls, video processors, installation teams and on-site operators.",
          provider: { "@id": ORGANIZATION_ID },
        areaServed: "TR",
        serviceType: "LED screen, LED wall, curved LED and circular LED display rental",
        image: [
          `${ORIGIN}${HERO.src}`,
          `${ORIGIN}${CURVED_P19_RING_IMAGE}`,
          `${ORIGIN}${CURVED_P19_STAGE_IMAGE}`,
        ],
        offers: {
          "@type": "Offer",
          description: "Comprehensive LED wall rental with installation and operators"
        },
        url: `${ORIGIN}/en/led-screen-rental`,
      },
      {
        "@type": "WebPage",
        name: "LED Screen & LED Wall Rental in Turkey | Sahneva",
        description: "LED screen rental in Turkey with P1.9 curved indoor, P2.6/P2.9 and outdoor LED walls, processing, installation and on-site operators.",
        url: `${ORIGIN}/en/led-screen-rental`,
        inLanguage: "en",
        dateModified: PAGE_LAST_MODIFIED,
        image: [
          `${ORIGIN}${HERO.src}`,
          `${ORIGIN}${CURVED_P19_RING_IMAGE}`,
          `${ORIGIN}${CURVED_P19_STAGE_IMAGE}`,
        ],
        mainEntity: {
          "@type": "Service",
          name: "LED Screen Rental"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${ORIGIN}/en/led-screen-rental#faq`,
        mainEntity: FAQ_SCHEMA_ITEMS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

/* ================== Page component ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/en/led-screen-rental`;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Services", url: `${baseUrl}/en/services` },
    { name: "LED Screen Rental", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <LedScreenJsonLd />
      <Hero />
      <Services />
      <CurvedP19Proof />
      <Gallery />
      <Technical />
      <StatsBand />
      <UseCases />
      <FAQ />
      <RelatedServices />
      <GlossaryTermLinks
        locale="en"
        servicePath="/en/led-screen-rental"
        title="Terms used in an LED screen quote"
        description="Pixel pitch, nits, cabinets and the video processor shape image quality and the technical production plan; the definitions are in the glossary."
      />
      <ServiceBlogLinks
        locale="en"
        links={[
          { href: "/en/blog/flexible-vs-curved-led-screens-for-events", label: "Flexible vs. Curved LED Screens for Events" },
          { href: "/en/blog/led-pixel-pitch-viewing-distance-guide", label: "LED Pixel Pitch & Viewing Distance Guide" },
          { href: "/en/blog/led-screen-technology-trends-2026", label: "2026 LED Screen Technology Trends" },
        ]}
        relatedServices={[
          { href: "/en/av-rental-istanbul", label: "AV Rental Istanbul", intent: "LED bundled with audio, lighting and crew for Istanbul events" },
          { href: "/en/conference-av-rental-istanbul", label: "Conference AV Rental Istanbul", intent: "Plenary and exhibition-stand screens inside congress venues" },
        ]}
      />
      <CTA />
    </>
  );
}
