// app/en/about/page.js
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID } from "@/lib/seo/schemaIds";

/* ───── META & ISR ───── */
export const metadata = {
  title: "About Us | Sahneva - Professional Event Technologies",
  description:
    "Over 10 years of nationwide stage rentals, LED video walls, sound & lighting systems and full-scale event production. 700+ completed projects.",
  alternates: {
    canonical: "https://www.sahneva.com/en/about",
    languages: {
      "tr-TR": "https://www.sahneva.com/hakkimizda",
      "en": "https://www.sahneva.com/en/about",
      "ar": "https://www.sahneva.com/ar/about",
      "x-default": "https://www.sahneva.com/en/about",
    },
  },
  openGraph: {
    title: "About Us | Sahneva - Professional Event Technologies",
    description:
      "Professional event solutions across Türkiye with 10+ years of expertise. 700+ successful projects and 98% client satisfaction.",
    url: "https://www.sahneva.com/en/about",
    images: [
      {
        url: "https://www.sahneva.com/img/hakkimizda-hero-corporate.webp",
        width: 1200,
        height: 630,
        alt: "Sahneva Team – Professional Event Technologies, 10+ years of experience",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Sahneva",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Sahneva – Professional Event Technologies",
    description:
      "Professional event solutions across Türkiye with 10+ years of expertise. 700+ successful projects and 98% client satisfaction.",
    images: ["https://www.sahneva.com/img/hakkimizda-hero-corporate.webp"],
  },
  robots: { index: true, follow: true },
};

export const revalidate = 3600;
const SITE_URL = BASE_SITE_URL;

/* ───── STRUCTURED DATA ───── */
function AboutStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/en/about#webpage`,
    url: `${SITE_URL}/en/about`,
    name: "About Us | Sahneva - Professional Event Technologies",
    description:
      "Professional stage rentals, LED screens, sound-light systems and event production services",
    image: `${SITE_URL}/img/hakkimizda-hero-corporate.webp`,
    mainEntity: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Base64 blur placeholder
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ───── MAIN COMPONENT ───── */
export default function AboutPage() {
  const PHONE = "+905453048671";
  const WA_TEXT = "Hello%2C+I'm+messaging+from+the+about+page.+I+would+like+to+get+more+information.";
  const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "About Us", url: `${baseUrl}/en/about` },
  ];

  const TIMELINE = [
    {
      year: "2012",
      title: "Foundation",
      description:
        "We started providing professional stage and audio technologies. This year we built the customer-first service approach that still guides us today.",
      icon: "🚀",
    },
    {
      year: "2016",
      title: "Technology Investment",
      description:
        "We expanded into LED screens and visual systems, strengthening our production capabilities. Our Istanbul-based operation grew across Anatolia.",
      icon: "🖥️",
    },
    {
      year: "2020",
      title: "Corporate Transformation",
      description:
        "We completed our nationwide logistics network and became a trusted partner for large-scale corporate events across Türkiye.",
      icon: "🏢",
    },
    {
      year: "2024",
      title: "Innovation Leadership",
      description:
        "With next-generation gear, digital integrations and live streaming solutions, we created new standards in the sector and surpassed 700 projects.",
      icon: "⚡",
    },
  ];

  const VALUES = [
    {
      icon: "🛡️",
      title: "Quality & Safety",
      description:
        "ISO-standard quality control, occupational safety protocols and scheduled equipment maintenance",
    },
    {
      icon: "⚡",
      title: "Rapid Installation",
      description:
        "Same-day deployment with professional stage and technical delivery within 2-6 hours",
    },
    {
      icon: "💎",
      title: "Premium Equipment",
      description:
        "Latest-generation LED walls, professional sound systems and modular stage solutions",
    },
    {
      icon: "🌍",
      title: "Nationwide Coverage",
      description: "Technical crews and logistics ready to serve all 81 provinces",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Professional technical consultancy before, during and after every installation",
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "Detailed quotations with budget-friendly options and zero hidden fees",
    },
  ];

  const CLIENTS = [
    "Corporate brands and companies",
    "Municipalities and public institutions",
    "Event and production agencies",
    "Festival and concert organizers",
    "Wedding and private event planners",
    "Expo and trade show firms",
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <AboutStructuredData />

    {/* HERO */}
<section
  className="
    relative overflow-hidden bg-slate-950 text-white
    pt-16 md:pt-20
    min-h-[75svh] md:min-h-[70vh]
    flex items-center
  "
  aria-labelledby="hero-title"
>
  {/* FULL-BLEED BACKGROUND */}
  <div className="absolute inset-0 pointer-events-none">
    <Image
      src="/img/hakkimizda-hero-corporate.webp"
      alt="Sahneva professional crew with more than a decade of event technology experience"
      fill
      priority
      fetchPriority="high"
      className="object-cover object-center"
      sizes="100vw"
      quality={85}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
    />

    {/* readability overlay */}
    <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

    {/* gradient */}
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, rgba(30,58,138,0.42) 0%, rgba(88,28,135,0.22) 55%, rgba(2,6,23,0.62) 100%)",
      }}
    />
    <div
      className="absolute inset-0"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(180deg, rgba(2,6,23,0.74) 0%, rgba(2,6,23,0.18) 45%, rgba(2,6,23,0.82) 100%)",
      }}
    />

    {/* grid overlay */}
    <div
      className="absolute inset-0 opacity-30"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* glow blobs */}
    <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-blue-500/14 blur-3xl" />
    <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-purple-500/12 blur-3xl" />
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full">
    <div className="container mx-auto px-4 py-10 md:py-12 text-center">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/30 mb-6">
          <span className="relative flex w-2 h-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-green-500" />
          </span>
          <span className="text-sm font-bold text-white">
            Trusted partner since 2012
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]"
        >
          About Us <span className="text-blue-200">Sahneva</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/95 max-w-3xl 2xl:max-w-4xl mx-auto leading-relaxed font-light mb-4">
          Event Technologies • 10+ Years of Expertise • 700+ Productions
        </p>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal mb-8">
          As Türkiye's{" "}
          <span className="font-semibold text-white">
            leading event technology partner
          </span>{" "}
          we combine technical excellence with creative vision in every project
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us instantly on WhatsApp – opens in a new tab"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring shadow-lg min-h-[44px]"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-2">
              💬
            </span>
            <span className="text-base">Get in Touch</span>
          </Link>

          <Link
            href="#timeline"
            aria-label="Discover our company timeline"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white/50 text-white bg-slate-900/70 backdrop-blur-lg hover:bg-slate-900/85 hover:border-white/70 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg min-h-[44px]"
            role="button"
          >
            <span aria-hidden="true" className="text-xl mr-2">
              📖
            </span>
            <span className="text-base">Our Story</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">
              🎬
            </span>
            <div className="text-xl font-black text-white">700+</div>
            <div className="text-white/80 text-sm">Completed projects</div>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">
              ⭐
            </span>
            <div className="text-xl font-black text-white">12+</div>
            <div className="text-white/80 text-sm">Years of experience</div>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <span className="text-2xl mb-2" aria-hidden="true">
              🗺️
            </span>
            <div className="text-xl font-black text-white">81</div>
            <div className="text-white/80 text-sm">Cities served</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* safe bottom fade */}
  <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-white/10" />
</section>

        {/* WHO WE ARE */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="who-we-are-title"
        >
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
                  Who Are We?
                </p>
                <h2
                  id="who-we-are-title"
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5"
                >
                  Your trusted event technology partner since 2012
                </h2>
                <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-blue-600">Sahneva</strong> has been one of Türkiye's
                    leading event production companies since 2012. With a team specialised in stage
                    rentals, LED walls, sound-light systems and professional installation,
                    we bring every event to life through technical excellence and creative vision.
                  </p>
                  <p>
                    Our mission is to deliver <strong>reliable, innovative and customer-focused</strong> solutions
                    that handle your technical infrastructure seamlessly and amplify your brand value.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/img/ekip-calisma.webp"
                    alt="Sahneva professional crew preparing a stage and technical setup"
                    width={720}
                    height={540}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-slate-900/25 via-transparent to-white/10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-gradient-to-br from-blue-50/80 to-purple-50/60" aria-labelledby="values-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="values-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Our Values &
                <span className="gradient-text gradient-text--safe-xl"> Principles</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The pillars of our quality-driven, trustworthy and customer-centric mindset
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {VALUES.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105"
                >
                  <div className="text-4xl mb-4 gradient-text gradient-text--safe-xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="py-20 bg-white" aria-labelledby="timeline-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="timeline-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Our Journey &
                <span className="gradient-text gradient-text--safe-xl"> Success Story</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" aria-hidden="true" />
            </div>

            <div className="relative">
              <div
                className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full hidden lg:block"
                aria-hidden="true"
              />
              <div className="space-y-12 lg:space-y-0">
                {TIMELINE.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"} mb-8 lg:mb-0`}>
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl" aria-hidden="true">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {item.year}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 lg:flex items-center justify-center hidden" aria-hidden="true">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg" />
                    </div>

                    <div className="lg:w-1/2 hidden lg:block" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95" aria-labelledby="clients-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="clients-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Trusted
                <span className="gradient-text gradient-text--safe-xl"> Partners</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                For over a decade we have supported corporate brands, public institutions and creative agencies with turnkey production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {CLIENTS.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-400 rounded-full motion-safe:animate-pulse" aria-hidden="true" />
                    <span className="text-white font-medium group-hover:text-blue-300 transition-colors">{client}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                <h3 className="text-2xl font-black text-white mb-4">Why thousands of clients choose us</h3>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  Technical mastery, reliability and a customer-first mindset allow us to deliver more value with every production.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl border border-white/30 transition-all duration-300 hover:scale-105"
                    aria-label="Message us on WhatsApp"
                  >
                    💬 Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50/30" aria-labelledby="vision-title">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <div className="text-4xl mb-4" aria-hidden="true">🎯</div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To provide <strong>innovative, reliable and sustainable</strong> event technology solutions that elevate our clients' brands, delivering technical excellence and creative vision across Türkiye.
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Zero-error targets in technical infrastructure",
                    "98%+ success in customer satisfaction",
                    "Continuous innovation and equipment upgrades",
                    "Environmentally conscious and sustainable operations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To become <strong>Türkiye's largest event technology company</strong> by 2028 and grow into a global brand across Europe and the Middle East, setting new standards with digital transformation and green technologies.
                </p>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "100% coverage across all Turkish provinces",
                    "Expansion into Europe and the Middle East",
                    "Event solutions with AR/VR integrations",
                    "Carbon-neutral operations as a strategic goal",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600" aria-labelledby="cta-title">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 id="cta-title" className="text-4xl md:text-5xl font-black mb-6">
              Let's collaborate on your <span className="text-yellow-300">next production</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our experienced crew is ready to deliver the most suitable solutions for your event with more than a decade of know-how.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href={`tel:${PHONE}`}
                className="group bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Call now for professional consultation"
              >
                <span className="flex items-center justify-center gap-2">📞 Call now</span>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Reach us on WhatsApp for a quick quote"
              >
                <span className="flex items-center justify-center gap-2">💬 WhatsApp</span>
              </a>

              <Link
                href="/en/contact"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Contact us via email form"
              >
                <span className="flex items-center justify-center gap-2">📧 Email</span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ Response within 2 hours:</strong> During business hours we provide a detailed quotation and professional guidance within two hours.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}
