// app/en/stage-rental/page.js
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import JsonLdScript from "@/components/seo/JsonLd";
import { Music, Layout, Monitor, Layers } from "lucide-react";

/* ================== Constants ================== */
export const revalidate = 1800;
const ORIGIN = "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const WEBSITE_ID = `${ORIGIN}/#website`;
const SITE_URL = ORIGIN;
const PHONE = "+905453048671";
const PAGE_TITLE = "Stage Rental | Professional Stage Solutions";
const PAGE_TITLE_BRANDED = `${PAGE_TITLE} | Sahneva`;
const WA_TEXT =
  "Hello%2C+I%27d+like+to+request+a+quote+for+stage+rental.+Event+type%3A+%5Bconcert%2Fconference%2Flaunch%5D%2C+Date%3A+%5Bdd.mm.yyyy%5D%2C+Estimated+audience%3A+%5Bxxx%5D%2C+Stage+size%3A+%5Bsqm%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dynamic gallery ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Gallery loading"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Loading gallery…</span>
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title: PAGE_TITLE,
  description:
    "Turnkey stage rental in Turkey: truss, modular decks, LED screens, sound & lighting for concerts, conferences and festivals. Nationwide crew and fast setup.",
  alternates: buildLanguageAlternates({
    tr: "/sahne-kiralama",
    en: "/en/stage-rental",
    canonical: "/en/stage-rental",
    xDefault: "/en/stage-rental",
  }),
  openGraph: {
    title: PAGE_TITLE_BRANDED,
    description:
      "Turnkey stage production with truss, podium, LED screen, sound and lighting for concerts, conferences, launches and festivals.",
    url: `${ORIGIN}/en/stage-rental`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${ORIGIN}/img/hizmet-sahne.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva professional stage rental — concert stage with truss, LED wall and lighting installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE_BRANDED,
    description:
      "Concert, conference, launch and festival stage rentals with truss, LED, sound and lighting systems.",
    images: [`${ORIGIN}/img/hizmet-sahne.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* ================== Helpers & constants ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const HERO = {
  src: "/img/hizmet-sahne.webp",
  alt: "Professional stage setup with truss roof, LED wall and concert lighting rig",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🎭",
    title: "Modular Stage Systems",
    description:
      "1×1 m and 2×1 m stage decks for flexible, fast indoor and outdoor builds",
    features: [
      "1×1 & 2×1 decks",
      "Modular configurations",
      "Fast installation",
      "Anti-slip finishes",
    ],
  },
  {
    icon: "🏗️",
    title: "Truss & Rigging Systems",
    description:
      "Aluminium truss roofs, professional rigging hardware and certified safety planning",
    features: [
      "Aluminium truss",
      "Professional rigging",
      "Safety inspections",
      "Static calculations",
    ],
  },
  {
    icon: "🖥️",
    title: "LED Wall Integration",
    description:
      "P2–P6 LED cabinets, video wall processors and live broadcast solutions",
    features: [
      "P2–P6 LED cabinets",
      "Video wall systems",
      "Live streaming",
      "4K playback",
    ],
  },
  {
    icon: "🎵",
    title: "Sound & Lighting Systems",
    description:
      "Concert-grade sound reinforcement, lighting design and live show control",
    features: [
      "Line-array PA systems",
      "Lighting design",
      "DMX control",
      "Live operations",
    ],
  },
  {
    icon: "⚡",
    title: "Technical Infrastructure",
    description:
      "Power distribution, cable management and professional backstage services",
    features: [
      "Power distribution",
      "Cable management",
      "Technical infrastructure",
      "Professional crew",
    ],
  },
  {
    icon: "🔧",
    title: "Turnkey Delivery",
    description:
      "Installation, live operation, de-rigging and 24/7 technical assistance included",
    features: [
      "Setup & dismantle",
      "Show operation",
      "Technical management",
      "24/7 support",
    ],
  },
];

const USE_CASES = [
  {
    icon: "🎵",
    text: "Concerts and music festivals",
    desc: "Main stages, side stages and acoustic rigs tailored for live performances",
  },
  {
    icon: "💼",
    text: "Corporate conferences and meetings",
    desc: "Stage environments for keynote sessions, AGMs and industry conferences",
  },
  {
    icon: "🚀",
    text: "Product launches and brand activations",
    desc: "Immersive staging to showcase new products and services with impactful visuals",
  },
  {
    icon: "🏆",
    text: "Award ceremonies and galas",
    desc: "Elegant stage backdrops, LED walls and lighting for premium occasions",
  },
  {
    icon: "🎓",
    text: "Graduations and school events",
    desc: "Stage platforms and PA systems for graduation ceremonies and school performances",
  },
  {
    icon: "🛍️",
    text: "Shopping mall and retail events",
    desc: "Compact stage builds optimised for high-footfall promotional activations",
  },
];

// Package data
const PACKAGES = [
  {
    id: "mini-stage",
    name: "Mini Stage — 16 m²",
    badge: "Small Events",
    specs: {
      area: "16 m²",
      dimensions: "4×4 m",
      height: "40 cm",
      truss: "6 m straight truss",
    },
    includes: [
      "8 × (2×1 m) decks — 16 m²",
      "40 cm height with anti-slip surface",
      "6 m straight truss backdrop",
      "2 LED bars + 2 spot lights",
      "Setup, testing and dismantle",
    ],
    note: "Ideal for talks, press briefings and intimate indoor events.",
  },
  {
    id: "standard-stage",
    name: "Standard Stage — 24 m²",
    badge: "Popular",
    specs: {
      area: "24 m²",
      dimensions: "6×4 m",
      height: "60 cm",
      truss: "12 m U-truss",
    },
    includes: [
      "12 × (2×1 m) decks — 24 m²",
      "60 cm height with front skirt",
      "U-shaped 12 m truss roof",
      "4 moving heads + 6 wash lights",
      "2.1 PA system, digital mixer, wireless mic",
      "Setup, live technical operation, dismantle",
    ],
    note: "Designed for corporate launches, mixed talk + performance shows and mall events.",
  },
  {
    id: "concert-stage",
    name: "Concert Stage — 48 m²",
    badge: "Professional",
    specs: {
      area: "48 m²",
      dimensions: "8×6 m",
      height: "80–100 cm",
      truss: "20 m truss system",
    },
    includes: [
      "24 × (2×1 m) decks — 48 m²",
      "80–100 cm height with ramp/handrails",
      "12 m front truss + 8 m side tower truss",
      "Line-array PA, stage monitors, backline infrastructure",
      "LED wall (e.g. 5×3 m) + scaler",
      "Lighting: moving heads, wash, blinders, haze",
      "Setup, soundcheck, show operation, dismantle",
    ],
    note: "Perfect for concerts, festivals and large-scale outdoor gatherings.",
  },
];

/* ================== HERO ================== */
function Hero() {
  return (
    <section
      className="
        relative isolate overflow-hidden bg-slate-900 text-white
        flex items-center justify-center
        pt-20 pb-14 md:pb-16 lg:pt-24
      "
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes={HERO.sizes}
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-800/70 to-blue-950/90"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-purple-900/60"
          aria-hidden="true"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
              </span>
              <span className="text-sm font-bold text-white">
                Nationwide Professional Installation
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
            >
              Professional{" "}
              <span className="text-blue-200">Stage Rental</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
              Concerts • Conferences • Launches • Rallies • Festivals
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-6">
              Truss systems, modular decks and LED walls —{" "}
              <span className="font-semibold text-white">
                turnkey stage solutions
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Request a stage rental quote via WhatsApp"
                className="inline-flex min-h-[44px] items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transition-all duration-300 hover:shadow-xl focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-2">
                  💬
                </span>
                <span className="text-base">Request a Quote</span>
              </Link>

              <Link
                href="#packages"
                aria-label="See our turnkey stage packages"
                className="inline-flex min-h-[44px] items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white/50 text-white bg-slate-900/85 backdrop-blur-lg hover:bg-slate-900/95 hover:border-white/70 hover:scale-105 transition-all duration-300 focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-2">
                  🎯
                </span>
                <span className="text-base">View Packages</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <span className="text-2xl mb-2" aria-hidden="true">
                  ⭐
                </span>
                <div className="text-xl font-black text-white">4.9/5</div>
                <div className="text-white/80 text-sm">183+ Reviews</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <span className="text-2xl mb-2" aria-hidden="true">
                  🏆
                </span>
                <div className="text-xl font-black text-white">700+</div>
                <div className="text-white/80 text-sm">Projects</div>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                <span className="text-2xl mb-2" aria-hidden="true">
                  🚀
                </span>
                <div className="text-xl font-black text-white">81 Provinces</div>
                <div className="text-white/80 text-sm">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Services ================== */
function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Professional{" "}
            <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stage rental capabilities: modular decks, truss rigging, LED
            integration and professional technical operation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <div key={id} className="group">
                <article
                  className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group-hover:scale-105 transition-all duration-500 h-full flex flex-col"
                  aria-labelledby={id}
                >
                  <div
                    className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3
                    id={id}
                    className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📞
            </span>
            <span>Discuss Your Technical Scope</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Packages ================== */
function Packages() {
  const formatTRY = (n) =>
    new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);

  const packagePrices = {
    "mini-stage": 19500,
    "standard-stage": 32500,
    "concert-stage": 65000,
  };

  return (
    <section
      id="packages"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="packages-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="packages-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Turnkey{" "}
            <span className="text-blue-700">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready-made stage configurations tailored to your venue size and
            performance needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <article
              key={pkg.id}
              id={`price-${index + 1}`}
              className="group"
            >
              <div
                className={`bg-white rounded-3xl border-2 shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 h-full flex flex-col ${
                  pkg.badge === "Popular"
                    ? "border-blue-500 ring-4 ring-blue-500/20 transform scale-105 group-hover:scale-110"
                    : "border-gray-100 group-hover:scale-105"
                }`}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-700 to-purple-700 p-8 text-white relative overflow-hidden">
                  {pkg.badge && (
                    <div
                      className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold ${
                        pkg.badge === "Popular"
                          ? "bg-orange-500"
                          : pkg.badge === "Professional"
                          ? "bg-blue-600"
                          : "bg-green-500"
                      }`}
                    >
                      {pkg.badge}
                    </div>
                  )}
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {pkg.id === "mini-stage" && "💼"}
                    {pkg.id === "standard-stage" && "🏆"}
                    {pkg.id === "concert-stage" && "🚀"}
                  </div>
                  <h3 className="text-2xl font-black mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-4 text-blue-100 text-sm">
                    <span>{pkg.specs.dimensions}</span>
                    <span>•</span>
                    <span>{pkg.specs.area}</span>
                    <span>•</span>
                    <span>{pkg.specs.height}</span>
                  </div>
                  <p className="text-blue-100 text-lg mt-2">{pkg.note}</p>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow">
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                      <span
                        className="w-2 h-2 bg-blue-600 rounded-full"
                        aria-hidden="true"
                      />
                      Package Contents
                    </h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span
                            className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-800 uppercase tracking-wider font-semibold">
                        Daily Rental (Istanbul)
                      </div>
                      <div className="text-3xl font-black text-gray-900 mt-2">
                        {formatTRY(packagePrices[pkg.id])}
                        <span className="text-sm text-gray-800 font-normal ml-2">
                          + VAT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="p-8 pt-0">
                  <Link
                    href={`${WHATSAPP}&package=${encodeURIComponent(pkg.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center font-bold px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
                  >
                    <span aria-hidden="true" className="text-xl mr-2">
                      💬
                    </span>
                    <span>Request This Package</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Gallery ================== */
const GALLERY_IMAGES = [
  {
    src: "/img/sahne/1.webp",
    alt: "Concert stage with professional truss roof, LED wall and lighting installation",
  },
  {
    src: "/img/sahne/2.webp",
    alt: "Conference stage with integrated LED display and modern professional lighting",
  },
  {
    src: "/img/sahne/3.webp",
    alt: "Outdoor festival stage featuring extensive lighting and audio rig",
  },
  {
    src: "/img/sahne/4.webp",
    alt: "Corporate launch stage with branded backdrop and LED wall integration",
  },
  {
    src: "/img/sahne/5.webp",
    alt: "Wedding stage with decorative setup and romantic lighting design",
  },
  {
    src: "/img/sahne/6.webp",
    alt: "Award ceremony stage with protocol layout and premium lighting",
  },
  {
    src: "/img/sahne/7.webp",
    alt: "Nationwide stage rental service — professional equipment and crew",
  },
  {
    src: "/img/sahne/8.webp",
    alt: "High-quality stage equipment and technical infrastructure — Sahneva",
  },
];

function Gallery() {
  return (
    <section className="py-20 bg-white" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="gallery-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Project{" "}
            <span className="text-blue-700">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Highlights from successful stage productions we delivered across
            Turkey
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery
            images={GALLERY_IMAGES}
            visibleCount={8}
            priorityCount={2}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Explore more reference projects in our full portfolio
          </p>
          <Link
            href="/en/projects"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📸
            </span>
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Technical Infrastructure ================== */
function Technical() {
  const technicalItems = [
    {
      category: "decks",
      title: "Stage Deck Systems",
      description:
        "1×1 m and 2×1 m modular decks with adjustable legs and anti-slip finishes",
      features: [
        "1×1 & 2×1 decks",
        "20–100 cm height",
        "Anti-slip coating",
        "Stairs & ramps",
      ],
    },
    {
      category: "truss",
      title: "Truss & Rigging",
      description:
        "Aluminium truss roofs, professional rigging hardware and safety equipment",
      features: [
        "Aluminium truss",
        "Professional rigging",
        "Static calculations",
        "Safety systems",
      ],
    },
    {
      category: "led",
      title: "LED Display Systems",
      description:
        "P2–P6 LED cabinets, video wall processors and live feed solutions",
      features: [
        "P2–P6 LED panels",
        "Video wall systems",
        "4K processing",
        "Live streaming",
      ],
    },
    {
      category: "audio",
      title: "Audio Systems",
      description:
        "Professional line-array speakers, digital mixers and wireless microphone packages",
      features: [
        "Line-array systems",
        "Digital mixers",
        "Wireless microphones",
        "Monitor systems",
      ],
    },
    {
      category: "lighting",
      title: "Lighting Systems",
      description:
        "Moving heads, LED wash fixtures and professional lighting design",
      features: [
        "Moving heads",
        "LED wash lights",
        "DMX control",
        "Lighting design",
      ],
    },
    {
      category: "safety",
      title: "Safety Infrastructure",
      description:
        "Handrails, accessibility ramps, emergency exits and crowd safety planning",
      features: [
        "Perimeter handrails",
        "Accessibility ramps",
        "Emergency exit planning",
        "Safety equipment",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="technical-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="technical-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Technical{" "}
            <span className="text-blue-700">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art staging technology and certified technical crew at
            your service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.category} className="group">
              <div className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-500 h-full">
                <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.category === "decks" && "🎭"}
                    {item.category === "truss" && "🏗️"}
                    {item.category === "led" && "🖥️"}
                    {item.category === "audio" && "🎵"}
                    {item.category === "lighting" && "💡"}
                    {item.category === "safety" && "🛡️"}
                  </span>
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span
                        className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Stats Band ================== */
function StatsBand() {
  const stats = [
    { value: "300+", label: "Stage Installations", icon: "🏆" },
    { value: "50+", label: "Concert Projects", icon: "🎵" },
    { value: "81", label: "Cities Served", icon: "🗺️" },
    { value: "8+", label: "Years of Experience", icon: "⭐" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white"
      aria-label="Stage rental achievements"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`stage-stat-${index}-value`}
              aria-describedby={`stage-stat-${index}-label`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <h3
                  id={`stage-stat-${index}-value`}
                  className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`stage-stat-${index}-label`}
                  className="text-blue-100 text-lg font-semibold"
                >
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Use Cases ================== */
function UseCases() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95"
      aria-labelledby="usecases-heading"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="usecases-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Where Our{" "}
            <span className="text-blue-300">Stages Shine</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            The primary event formats that benefit most from our stage
            engineering expertise
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          role="list"
        >
          {USE_CASES.map((uc) => (
            <div
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
              role="listitem"
            >
              <div className="flex flex-col items-start gap-4">
                <div
                  className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              💬
            </span>
            <span>Get a Custom Event Solution</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Insights & Expert Guidance ================== */
function Articles() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="articles-heading"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="articles-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Insights &{" "}
            <span className="text-blue-700">Expert Guidance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technical recommendations and best practices for planning a
            professional stage production
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Article */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-black/10"
                aria-hidden="true"
              ></div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    📚 Comprehensive Guide
                  </span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    ⭐ Expert Insight
                  </span>
                  <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    🎯 Practical Tips
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Professional Stage Rental: Turnkey Solutions for
                  Show-Stopping Events
                </h3>
                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Modular stage decks, truss rigging, LED integration and an
                  on-site technical crew ensure seamless experiences for
                  concerts, conferences and premium brand events
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-blue-100 text-blue-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🎭
                      </span>
                      Modular Stage Systems
                    </h4>
                    <p>
                      <strong className="text-gray-900">Sahneva</strong>{" "}
                      delivers{" "}
                      <Link
                        href="/en/stage-rental"
                        className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                      >
                        professional stage rental
                      </Link>{" "}
                      services across Turkey to corporate and entertainment
                      industry standards.
                    </p>
                    <p>
                      Whether your event requires a concert main stage or a
                      corporate conference platform, we provide detailed
                      technical scouting, stage optimisation, professional
                      installation and show operation — all as a{" "}
                      <strong className="text-gray-900">
                        single turnkey solution
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🏗️
                      </span>
                      Truss &amp; Safety Systems
                    </h4>
                    <p>
                      All truss systems are manufactured from aluminium and
                      installed to the highest safety standards, with full
                      static calculations and structural load testing completed
                      before every event.
                    </p>
                    <p>
                      With 1×1 m and 2×1 m modular panel options, we deliver
                      solutions optimised to your venue and event type —
                      eliminating both safety and functionality concerns in a
                      single pass.
                    </p>
                  </div>
                </div>

                {/* Key Info Box */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-2xl p-6 mb-8">
                  <h5 className="font-black text-blue-700 text-xl mb-4 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      💡
                    </span>
                    Technical Selection Strategy
                  </h5>
                  <p className="text-gray-700 text-lg mb-0 leading-relaxed">
                    Event type and audience size are the most critical factors
                    when selecting a stage. We recommend 12–24 m² for small
                    events (50–100 guests), 24–48 m² for mid-size events
                    (100–300 guests) and 48+ m² for large events (300+
                    guests). For outdoor events, wind loading and ground
                    stability should always be assessed first.
                  </p>
                </div>

                {/* Success Factors Grid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span
                      className="bg-green-100 text-green-600 rounded-2xl p-3"
                      aria-hidden="true"
                    >
                      🚀
                    </span>
                    Critical Success Factors
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "🎯",
                        title: "Right Size Selection",
                        desc: "Stage dimensions optimised to audience size and event type",
                      },
                      {
                        icon: "📊",
                        title: "Safety Optimisation",
                        desc: "Static calculations, rigging safety checks and emergency planning",
                      },
                      {
                        icon: "🔒",
                        title: "Technical Integration",
                        desc: "Seamless integration of audio, lighting and LED systems",
                      },
                      {
                        icon: "🎭",
                        title: "Professional Crew",
                        desc: "Experienced technical team and live show operation management",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                            aria-hidden="true"
                          >
                            {item.icon}
                          </span>
                          <div>
                            <h5 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                  <h5 className="font-black text-yellow-700 text-lg mb-3 flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">
                      💎
                    </span>
                    Why Sahneva?
                  </h5>
                  <p className="text-yellow-800 mb-0">
                    <strong>
                      10+ years of experience, 700+ successful projects and
                      nationwide service across 81 cities
                    </strong>{" "}
                    make Sahneva a reliable stage partner. We deploy the latest
                    technology, expert crews and 24/7 technical support on
                    every project.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Side Articles */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Truss &amp; Rigging Systems
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Essential safety principles and engineering standards for
                reliable staging
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Truss structures are the backbone of stage safety. Every
                  system we install complies with EN 13814 fairground and event
                  safety standards and undergoes rigorous inspection before
                  each show.
                </p>
                <p>
                  Aluminium alloys, high safety factors, certified rigging
                  hardware and experienced crews ensure dependable performance
                  for any event scale or format.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span
                      className="bg-purple-100 text-purple-600 rounded-xl p-2"
                      aria-hidden="true"
                    >
                      🏗️
                    </span>
                    Truss Standards
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      6061-T6 aluminium construction
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      5:1 minimum safety factor
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Certified rigging hardware and hoists
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Static and dynamic load testing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Event-Specific Stage Strategies
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Tailored staging approaches for different event formats
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-blue-100 text-blue-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🎵
                      </span>
                      Concert &amp; Festival
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      High-stability platforms, wide performance areas,
                      line-array audio and professional lighting/LED integration
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        💼
                      </span>
                      Corporate Events
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Polished backdrops, branding integration, speaker-friendly
                      design and professional presentation areas
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-green-100 text-green-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        💒
                      </span>
                      Weddings &amp; Private Galas
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Decorative finishes, integrated dance floors, ceremonial
                      stage platforms and ambient lighting design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================== FAQ ================== */
const FAQ_ITEMS = [
  {
    question: "How much does stage rental cost?",
    answer:
      "Pricing depends on stage size and technical scope. Mini Stage (16 m²) starts at 19,500 TL, Standard Stage (24 m²) at 32,500 TL and Concert Stage (48 m²) at 65,000 TL. All packages include professional setup, sound and lighting systems and technical crew support.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A standard stage setup takes 4–8 hours. Compact 16 m² builds finish in 4–6 hours, mid-size 16–48 m² stages in 6–8 hours, while large concert stages may require 8–12 hours. Complex truss and rigging projects can extend up to 24 hours.",
  },
  {
    question: "Is the equipment suitable for outdoor events?",
    answer:
      "Yes. All stage systems are engineered for outdoor use with wind-load calculations, ground stability assessments, weatherproof equipment and emergency planning. For extreme weather conditions we recommend temporary suspension as a safety precaution.",
  },
  {
    question: "Are sound and lighting systems included?",
    answer:
      "Every package includes core sound and lighting. Mini Stage features 2 LED bars and 2 spot lights. Standard Stage adds 4 moving heads, 6 wash lights and a 2.1 PA system with wireless microphone. Concert Stage includes a line-array PA, stage monitors and a full professional lighting rig. Additional equipment is available on request.",
  },
];

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Frequently Asked{" "}
            <span className="text-blue-700">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Answers to common questions about stage rental, logistics and
            technical delivery
          </p>
        </div>

        <div
          className="space-y-6"
          role="list"
          aria-label="Frequently asked questions list"
        >
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-blue-50 open:border-blue-200 border-2 border-transparent open:border"
            >
              <summary
                className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900"
              >
                <span className="pr-4">{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="ml-4 transition-transform duration-500 group-open:rotate-180 text-blue-600 bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                >
                  ⌄
                </span>
              </summary>
              <div
                className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-blue-500"
                role="region"
              >
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Still have questions? Our experts will call you back with tailored
            recommendations.
          </p>
          <Link
            href="/en/faq"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
            aria-label="View all frequently asked questions about stage rental"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📚
            </span>
            <span className="text-lg">View All FAQs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Related Services ================== */
function RelatedServices() {
  const services = [
    {
      href: "/en/sound-light-rental",
      title: "Sound & Lighting Systems",
      Icon: Music,
      desc: "Concert-grade audio and lighting hire",
    },
    {
      href: "/en/podium-rental",
      title: "Podium Rental",
      Icon: Layout,
      desc: "Modular stage deck systems",
    },
    {
      href: "/en/led-screen-rental",
      title: "LED Screen Rental",
      Icon: Monitor,
      desc: "Professional LED walls and video processors",
    },
    {
      href: "/en/truss-rental",
      title: "Truss Rental",
      Icon: Layers,
      desc: "Aluminium truss systems for any event scale",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30"
      aria-labelledby="related-services-heading"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="related-services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Complementary{" "}
            <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete your event setup with our integrated production solutions
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <nav aria-label="Complementary services">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus-ring h-full flex flex-col"
                aria-label={`${service.title} — ${service.desc}`}
              >
                <div
                  className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <service.Icon size={36} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <div className="sr-only">
          <p>
            This section lists other event production services that complement
            your stage rental. Activate any card to open detailed service
            information.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
          ></div>
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            >
              Ready for a Show-Stopping Stage?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Share your event concept and we will prepare stage drawings, gear
              lists and an itemised quotation within the same day. Site surveys
              and consultancy are complimentary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  📞
                </span>
                <span className="text-lg">Request a Proposal</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  💬
                </span>
                <span className="text-lg">Chat on WhatsApp</span>
              </a>
            </div>
            <div className="mt-8 text-blue-200 text-lg">
              📍 Nationwide service • ⏰ 24/7 technical support • ⭐ 10+ years
              of experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
function StageJsonLd() {
  const pageUrl = `${ORIGIN}/en/stage-rental`;
  const pageDescription = metadata?.description || "";
  const webPageId = `${pageUrl}#webpage`;

  const provider = { "@id": ORGANIZATION_ID };

  // Uses the Turkish slug to look up shared product schema data (no en-US entry exists).
  // The actual page URL and inLanguage are overridden below.
  const { service: serviceSchema, products } = buildServiceProductSchema({
    slug: "/sahne-kiralama",
    locale: "tr-TR",
  });

  const baseService = {
    "@type": "Service",
    name: "Stage Rental",
    description: pageDescription,
    provider,
    areaServed: { "@type": "Country", name: "Turkey" },
  };

  const serviceNode = {
    ...(serviceSchema || {}),
    ...baseService,
    "@type": "Service",
    "@id": serviceSchema?.["@id"] || `${pageUrl}#service`,
    provider,
    url: pageUrl,
    mainEntityOfPage: { "@id": webPageId },
  };

  const serviceId = serviceNode["@id"];
  const productNodes = products ?? [];
  const faqSchema = buildFaqSchema(FAQ_ITEMS);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "WebPage",
        "@id": webPageId,
        name: PAGE_TITLE_BRANDED,
        description: pageDescription,
        url: pageUrl,
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": serviceId },
        publisher: provider,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${ORIGIN}${HERO.src}`,
          width: 1200,
          height: 630,
          caption: HERO.alt,
        },
        mainEntity: { "@id": serviceId },
      },
      ...productNodes,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
      <JsonLdScript
        id="ld-json-stage"
        data={jsonLd}
      />
    );
}

/* ================== Page Component ================== */
export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/en/stage-rental`;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Services", url: `${baseUrl}/en/services` },
    { name: "Stage Rental", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StageJsonLd />
      <Hero />
      <Services />
      <Packages />
      <Gallery />
      <Technical />
      <StatsBand />
      <UseCases />
      <Articles />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        title="Related Guides on Stage Rental"
        links={[
          {
            href: "/en/blog/how-stage-rental-prices-are-determined",
            label: "How Are Stage Rental Prices Determined?",
          },
          {
            href: "/en/blog/why-stages-are-always-elevated",
            label: "Why Are Stages Always Elevated? A 2,500-Year History",
          },
        ]}
      />
      <CTA />
    </>
  );
}
