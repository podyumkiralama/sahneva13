// app/en/services/page.js
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID } from "@/lib/seo/schemaIds";

/* ───── META & ISR ───── */
export const metadata = {
  title: "Our Services | Professional Event Equipment Rentals",
  description:
    "Professional stage rentals, LED walls, sound-light systems, podiums, tents and full event production across Türkiye.",
  alternates: {
    canonical: `${BASE_SITE_URL}/en/services`,
    languages: {
      "tr-TR": `${BASE_SITE_URL}/hizmetler`,
      "en": `${BASE_SITE_URL}/en/services`,
      "ar": `${BASE_SITE_URL}/ar/services`,
      "x-default": `${BASE_SITE_URL}/en/services`,
    },
  },
  openGraph: {
    title: "Our Services | Sahneva - Professional Event Solutions",
    description:
      "Stage, LED wall, sound-light, podium, tent rentals and turnkey event production services across Türkiye.",
    url: `${BASE_SITE_URL}/en/services`,
    images: [
      {
        url: `${BASE_SITE_URL}/img/hizmetler-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Services – Stage, LED wall, sound-light and tent rental services",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Sahneva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Sahneva - Professional Event Solutions",
    description:
      "Stage, LED wall, sound-light, podium, tent rentals and turnkey event production services across Türkiye.",
    images: [`${BASE_SITE_URL}/img/hizmetler-hero.webp`],
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600;
const SITE_URL = BASE_SITE_URL;

/* ───── STRUCTURED DATA ───── */
function ServicesStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sahneva Services",
    description:
      "Professional stage rentals, LED walls, sound-light systems, podium, tent rentals and event production services",
    image: `${SITE_URL}/img/hizmetler-hero.webp`,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "TR",
    inLanguage: "en-US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Equipment Rental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Stage Rental",
            description: "Professional stage installation and rental services",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "10000.00",
            maxPrice: "200000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "LED Wall Rental",
            description: "High-resolution LED wall rental services",
          },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1700.00",
            priceCurrency: "TRY",
            unitText: "per day",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sound and Lighting Systems",
            description: "Professional sound and lighting system rental services",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "10000.00",
            maxPrice: "300000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Podium Rental",
            description: "Modular podium and catwalk solutions",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "250.00",
            maxPrice: "100000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Event Tent Rental" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "6000.00",
            maxPrice: "800000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Chair Rental" },
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "200.00",
            priceCurrency: "TRY",
            unitText: "per unit",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Table Rental" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            minPrice: "1000.00",
            maxPrice: "2000.00",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Istanbul Logistics" },
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "TRY",
            price: "7000.00",
          },
        },
      ],
    },
  };

  return (
    <JsonLd data={schema} />
  );
}

/* ───── SERVICES TABS FALLBACK ───── */
function ServicesTabsFallback() {
  const services = [
    {
      title: "Stage Rentals",
      description: "Professional truss systems, modular stage and catwalk solutions",
      anchor: "stage-services",
      items: [
        "Stage systems in 3x3m, 6x4m, 8x4m, 10x6m dimensions",
        "Aluminium truss systems and safety equipment",
        "Modular podium systems (1x1m, 2x1m) and catwalk layouts",
        "Stage decoration and branding services",
      ],
    },
    {
      title: "LED Wall Rentals",
      description: "High-resolution indoor and outdoor LED wall solutions",
      anchor: "led-services",
      items: [
        "Pixel pitch options P2.5, P3, P4, P5, P6",
        "Indoor and outdoor (IP65) LED cabinets",
        "Installation, technical operator and content management",
        "HD video processors and control systems",
      ],
    },
    {
      title: "Sound Systems",
      description: "Professional audio system rental and installation",
      anchor: "audio-services",
      items: [
        "Line array systems and digital mixers",
        "Wireless microphone systems (handheld, lapel)",
        "Audio technicians and operator services",
        "Sound testing and acoustic optimisation",
      ],
    },
    {
      title: "Lighting Systems",
      description: "Professional lighting and effect systems",
      anchor: "lighting-services",
      items: [
        "Moving head, spot and wash fixtures",
        "Laser, haze and special effect machines",
        "DMX control systems and operators",
        "Lighting programming and synchronisation",
      ],
    },
    {
      title: "Tent Rentals",
      description: "Event tents and temporary structure solutions",
      anchor: "tent-services",
      items: [
        "Pagoda, clear-span and industrial tent systems",
        "3x3m, 6x3m, 9x3m, 9x6m, 12x6m tent sizes",
        "Tent heating-cooling and lighting systems",
        "Flooring and decoration services",
      ],
    },
    {
      title: "Seating & Furniture",
      description: "Professional table and chair rental services",
      anchor: "seating-services",
      items: [
        "Banquet tables (round, rectangular)",
        "Conference and cocktail chairs",
        "Table linen and décor elements",
        "Installation and dismantling services",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {services.map((service) => (
        <section
          key={service.anchor}
          id={service.anchor}
          className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100"
        >
          <h3 className="text-2xl font-black text-neutral-900 mb-4">{service.title}</h3>
          <p className="text-neutral-700 mb-6 text-lg">{service.description}</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center gap-3 text-neutral-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

/* ───── MAIN COMPONENT ───── */
export default function EnglishServicesPage() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/en/services`;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Services", url: canonical },
  ];

  const QUICK_ACCESS = [
    {
      href: "#stage-services",
      title: "Stage & Podiums",
      description: "Truss roofs, modular stages and catwalk solutions",
      icon: "🎪",
      color: "from-blue-500 to-cyan-500",
    },
    {
      href: "#led-services",
      title: "LED Wall Rentals",
      description: "P2–P6 pixel pitch, indoor/outdoor solutions",
      icon: "🖥️",
      color: "from-green-500 to-emerald-500",
    },
    {
      href: "#audio-services",
      title: "Sound Systems",
      description: "Line-array audio, wireless mics, digital mixing",
      icon: "🎵",
      color: "from-orange-500 to-red-500",
    },
    {
      href: "#lighting-services",
      title: "Lighting Systems",
      description: "Moving-head fixtures, effects and DMX control",
      icon: "💡",
      color: "from-purple-500 to-pink-500",
    },
    {
      href: "#tent-services",
      title: "Event Tents",
      description: "Pagoda, clear-span and industrial tent systems",
      icon: "⛺",
      color: "from-teal-500 to-blue-500",
    },
    {
      href: "#seating-services",
      title: "Seating & Furniture",
      description: "Banquet, conference and cocktail furniture",
      icon: "🪑",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const SERVICE_FEATURES = [
    {
      icon: "⚡",
      title: "Same-Day Installation",
      description: "Professional setup and delivery within 2–6 hours",
    },
    {
      icon: "🛡️",
      title: "Safety Guaranteed",
      description: "ISO-standard safety protocols and quality control",
    },
    {
      icon: "💎",
      title: "Premium Equipment",
      description: "Latest-generation, well-maintained and high-quality gear",
    },
    {
      icon: "🌍",
      title: "Nationwide Coverage",
      description: "Technical crews and logistics across all 81 provinces",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Continuous technical assistance and consultancy",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "Detailed proposals with zero hidden costs",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-hidden">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <ServicesStructuredData />

      {/* Skip to Main Content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Skip to main content
      </a>

    {/* HERO SECTION */}
<section
  className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-14 lg:pt-16 text-white overflow-hidden"
  aria-labelledby="hero-title"
>
  {/* FULL-BLEED BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">
    <Image
      src="/img/hizmetler-hero.webp"
      alt="Sahneva Services - Professional Event Equipment and Technology Solutions"
      fill
      priority
      fetchPriority="high"
      quality={80}
      sizes="100vw"
      className="object-cover object-center"
    />

    {/* readability overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* gradient */}
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, rgba(15,23,42,0.65) 0%, rgba(30,58,138,0.35) 45%, rgba(88,28,135,0.28) 100%)",
      }}
    />

    {/* grid overlay */}
    <div
      className="absolute inset-0 opacity-35"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* glow blobs */}
    <div className="absolute -top-28 -right-28 w-96 h-96 bg-purple-500/14 rounded-full blur-3xl" />
    <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-blue-500/14 rounded-full blur-3xl" />
  </div>

  {/* BIG BACKGROUND TEXT */}
  <div
    className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
    aria-hidden="true"
  >
    <span className="text-[120px] lg:text-[180px] font-black text-white/5 tracking-wider">
      SERVICES
    </span>
  </div>

  {/* CONTENT */}
  <div className="relative z-10">
    <div className="container mx-auto px-4 py-10 md:py-12 text-center">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-white/90 text-sm font-medium">
            Nationwide Professional Service
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
        >
          <span className="block">PROFESSIONAL</span>
          <span className="text-blue-200">Services</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl 2xl:max-w-4xl mx-auto">
          From stages and LED walls to full-scale production,
          <br />
          <strong className="text-blue-300">premium solutions under one roof</strong>
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#service-list"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Browse our services"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                →
              </span>
            </span>
          </a>

          <a
            href="tel:+905453048671"
            className="group bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Call now for more information"
          >
            📞 Call Now
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll hint */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true">
    <div className="animate-bounce">
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
      </div>
    </div>
  </div>

  {/* bottom transition */}
  <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
</section>

<div id="main" className="relative" style={{ color: "#0f172a" }}>
        {/* QUICK ACCESS CARDS */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                All <span className="text-blue-700">Services</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Access every piece of equipment and support you need from a single partner
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUICK_ACCESS.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:scale-105"
                  aria-label={`Go to ${service.title} details`}
                >
                  <div
                    className="text-4xl mb-4 gradient-text gradient-text--safe-xl"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">{service.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>View details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE FEATURES */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-blue-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Why <span className="text-blue-700">Sahneva?</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                10+ years of expertise and specialised teams that deliver exceptional results
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4 gradient-text gradient-text--safe-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED SERVICE LIST */}
        <section id="service-list" className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Turnkey <span className="text-blue-700">Event Solutions</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                We manage every step professionally from stage installation to full production management
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8" />
            </div>

            <ServicesTabsFallback />
          </div>
        </section>

        {/* ADDITIONAL SERVICES */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-blue-900/95">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Additional <span className="text-blue-200">Services</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Complementary support to keep every aspect of your event running flawlessly
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      🎯
                    </span>
                    Event Management & Production
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Event planning and management",
                      "Technical production coordination",
                      "Artist and speaker management",
                      "Backstage and green room services",
                      "Security and crowd management",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      🚚
                    </span>
                    Logistics & Support Services
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Equipment transport and installation",
                      "Technical staffing",
                      "Travel and accommodation planning",
                      "Catering and hospitality",
                      "Cleaning and waste management",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      📸
                    </span>
                    Media & Visuals
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Professional photography",
                      "Video production and live streaming",
                      "Drone filming services",
                      "Social media management",
                      "Press and public relations",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      🎨
                    </span>
                    Design & Decor
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Venue design and decoration",
                      "Lighting design",
                      "Branding and graphic design",
                      "Custom carpentry and scenic builds",
                      "Floral design and landscaping",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Request a
              <span className="text-yellow-300">&nbsp;Proposal</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Tell us about your event and we will prepare a detailed quotation within two hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="tel:+905453048671"
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Call now for a detailed proposal"
              >
                <span className="flex items-center justify-center gap-2">
                  📞 Call Now
                </span>
              </a>

              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Chat on WhatsApp for a quick proposal (opens in a new tab)"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 WhatsApp
                </span>
              </a>

              <Link
                href="/en/contact"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Reach us via the contact form"
              >
                <span className="flex items-center justify-center gap-2">
                  📧 Email
                </span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ Response within 2 hours:</strong> During business hours we send detailed proposals and professional consultancy within two hours for every request.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
