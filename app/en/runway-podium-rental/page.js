// app/en/runway-podium-rental/page.js
import Image from "next/image";
import Link from "next/link";
import { buildFaqSchema } from "@/lib/structuredData/faq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";

/* ================== 1. SETTINGS & CONSTANTS ================== */
export const revalidate = 1800;
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const WHATSAPP_URL = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Hello, I would like to request a quote for runway and podium rental."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. IMAGES ================== */
const HERO_IMAGE = "/img/podyum/defile-podyum-kiralama-hero.webp";

const CONTENT_IMAGES = [
  {
    src: "/img/podyum/defile-runway-tasarimi.webp",
    alt: "T-shape runway design – podium installation for fashion show",
    width: 1440,
    height: 1322,
  },
  {
    src: "/img/podyum/moda-defilesi-sahne.webp",
    alt: "Fashion show stage installation – professional lighting and backdrop integration",
    width: 1440,
    height: 1657,
  },
  {
    src: "/img/podyum/podyum-isik-entegrasyonu.webp",
    alt: "Podium lighting integration – LED-supported runway stage",
    width: 1194,
    height: 1913,
  },
];

/* ================== 3. CONTENT DATA ================== */
const SERVICES = [
  {
    icon: "👗",
    title: "Runway Design",
    description:
      "Straight, U-shape, and T-shape runway arrangements; planned to suit the flow of the collection and the architectural structure of the venue.",
    features: ["Straight runway", "U-shape runway", "T-shape runway", "Custom formats"],
  },
  {
    icon: "💡",
    title: "LED & Lighting Integration",
    description:
      "Transform the stage into a visual experience with dramatic lighting transitions, LED backdrop scenes, and projection mapping.",
    features: ["LED backdrop", "Projection mapping", "Stage lighting", "Color transitions"],
  },
  {
    icon: "🏗️",
    title: "Elevated Podium Platforms",
    description:
      "Safe and aesthetic elevated presentation platforms that maximize the audience&apos;s viewing angle.",
    features: ["Adjustable height", "Step transitions", "Non-slip surface", "Safety details"],
  },
  {
    icon: "🎨",
    title: "Custom Surface Coverings",
    description:
      "Make the stage align with the collection&apos;s aesthetic language with glossy, matte, or carpet surface options.",
    features: ["Glossy covering", "Matte covering", "Carpet covering", "Custom colors"],
  },
  {
    icon: "📸",
    title: "Photography & Video Shoot Areas",
    description:
      "Photography and video shooting zones planned with social media visibility and brand perception in mind.",
    features: ["360° shooting angle", "Backstage area", "Media positions", "Brand integration"],
  },
  {
    icon: "🔧",
    title: "Technical Support & Operations",
    description:
      "Installation, dismantling, and event-day technical support compatible with rehearsal hours and choreography flow.",
    features: ["Timed installation", "Spare parts", "Event day crew", "Emergency response"],
  },
];

const USE_CASES = [
  { icon: "👗", text: "Boutique designer shows", desc: "Custom podium for small, intimate collection presentations" },
  { icon: "🏆", text: "Fashion week presentations", desc: "Large stage for prestigious, high-attendance fashion weeks" },
  { icon: "🚀", text: "Product launches", desc: "Dramatic stage installations for prestigious brands" },
  { icon: "📷", text: "Showroom presentations", desc: "Corporate showroom and brand presentations" },
  { icon: "🛍️", text: "Pop-up store events", desc: "Temporary store opening and promotion organizations" },
  { icon: "🎬", text: "Ad & lookbook shoots", desc: "Custom stage installation for photography and video productions" },
];

const FAQ_ITEMS = [
  {
    q: "Which runway types are available for fashion shows?",
    a: "We offer straight (linear), U-shape, and T-shape runway designs. We plan the most suitable type together based on the collection&apos;s flow, model walking rhythm, and audience seating arrangement.",
  },
  {
    q: "What podium surface covering options are there?",
    a: "Glossy, matte, and carpet-covered options are available. For haute couture presentations, satin or special fabric coverings can also be applied on request.",
  },
  {
    q: "Is LED and projection integration possible?",
    a: "Yes, LED backdrop scenes, projection mapping, and stage lighting systems can be integrated into the podium installation. The lighting design is customized to match the collection&apos;s atmosphere.",
  },
  {
    q: "Can installation and dismantling be planned in line with rehearsal hours?",
    a: "Absolutely. We plan the installation and dismantling process in accordance with rehearsal hours, choreography flow, and broadcast schedule. Delivery, installation, and dismantling operations across Istanbul and Turkey are carried out by our professional teams.",
  },
  {
    q: "Do you only serve in Istanbul?",
    a: "No. Based primarily in Istanbul, we carry out podium and runway stage installations for fashion events across Turkey. For out-of-city projects, please request a custom quote.",
  },
];

const RELATED_SERVICES = [
  { href: "/en/podium-rental", title: "Podium Rental", icon: "🎭", desc: "Modular podium systems and professional installation" },
  { href: "/en/stage-rental", title: "Stage Rental", icon: "🏗️", desc: "Stages for concerts, conferences, and launch events" },
  { href: "/en/led-screen-rental", title: "LED Screen Rental", icon: "🖥️", desc: "High-resolution LED screen and video wall solutions" },
  { href: "/en/sound-light-rental", title: "Sound & Lighting Systems", icon: "🎵", desc: "Professional sound and lighting system rental" },
];

/* ================== 4. METADATA ================== */
export const metadata = {
  title: "Runway & Podium Rental | Fashion Event Stage",
  description:
    "Runway & fashion podium rental: T/U-shape, straight runway, LED backdrop, projection mapping + full technical support. Istanbul professional event stages.",
  alternates: {
    canonical: `${ORIGIN}/en/runway-podium-rental`,
    languages: {
      "tr-TR": `${ORIGIN}/defile-podyum-kiralama`,
      en: `${ORIGIN}/en/runway-podium-rental`,
      "x-default": `${ORIGIN}/defile-podyum-kiralama`,
    },
  },
  openGraph: {
    title: "Runway & Podium Rental | Sahneva",
    description:
      "T-shape runway, LED integration, and full technical support for fashion shows and podium events.",
    url: `${ORIGIN}/en/runway-podium-rental`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${ORIGIN}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Sahneva runway podium rental – professional runway stage solutions for fashion events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Runway & Podium Rental | Professional Fashion Stage Solutions | Sahneva",
    description:
      "T-shape, U-shape, and straight runway designs, LED integration, and professional installation for fashion shows.",
    images: [`${ORIGIN}${HERO_IMAGE}`],
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

/* ================== 5. COMPONENTS ================== */

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Runway & Podium Rental",
        description: metadata.description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "AdministrativeArea", name: "Istanbul" },
        serviceType: "Runway Podium Rental",
        inLanguage: "en-US",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Runway Podium Rental Services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.description,
            },
          })),
        },
      },
      buildFaqSchema ? buildFaqSchema(FAQ_ITEMS) : {},
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}

function HeroSection() {
  return (
    <section className="relative bg-slate-950 text-white pt-20 pb-14 md:pb-16 lg:pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={HERO_IMAGE}
          alt="Professional podium installation for fashion shows – runway stage design"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
          quality={60}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 via-pink-900/20 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-violet-900/25" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-violet-500/14 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-pink-500/12 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-2 mb-5">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.18)]"
                aria-hidden="true"
              />
              <span className="text-sm font-extrabold text-white">
                Professional Fashion Stage Service Across Istanbul
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
              Runway &amp;{" "}
              <span className="text-pink-200">Podium Rental</span>
            </h1>

            <p className="text-lg md:text-2xl text-white/90 leading-relaxed mb-3">
              Fashion Show • Runway • Fashion Week • Launch • Showroom
            </p>

            <p className="text-base md:text-xl text-white/75 leading-relaxed mb-7 max-w-3xl mx-auto">
              T-shape, U-shape, and straight runway designs, LED backdrop scenes, and{" "}
              <span className="font-semibold text-white">end-to-end technical support</span>{" "}
              for a sophisticated stage for your fashion events
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-9">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition"
              >
                <span className="text-xl mr-2">💬</span> Get a Quote Now
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/20 hover:bg-white/30 backdrop-blur-xl transition shadow-lg"
              >
                <span className="text-xl mr-2">👗</span> Our Services
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: "⭐", value: "4.8/5", label: "200+ Reviews" },
                { icon: "👗", value: "300+", label: "Fashion Events" },
                { icon: "🚀", value: "End-to-End", label: "Service" },
                { icon: "🛡️", value: "TS EN", label: "Safety Standards" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/12 px-4 py-4 text-center"
                >
                  <div className="text-2xl mb-1" aria-hidden="true">
                    {s.icon}
                  </div>
                  <div className="text-xl font-black">{s.value}</div>
                  <div className="text-sm text-white/70 font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <span className="sr-only">Runway Podium Rental - Sahneva Organization</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-violet-50/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Services Tailored to Fashion Events{" "}
            <span className="text-violet-700"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Managing the entire process from podium design to lighting integration, LED backdrop
            solutions to backstage planning
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 transition-all duration-500 h-full flex flex-col"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-violet-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 text-base text-gray-700 list-disc list-inside">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">📞</span> Get a Detailed Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Main article */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-violet-700 via-pink-700 to-violet-800 text-white p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  👗 Fashion Events
                </span>
                <span className="bg-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  ⭐ End-to-End Service
                </span>
                <span className="bg-violet-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                  🎯 Customizable Design
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                Runway &amp; Podium Rental | Professional Stage Solutions for Fashion Events
              </h2>
              <p className="text-violet-100 mt-4 text-lg md:text-xl leading-relaxed">
                The central element that carries the brand&apos;s identity, the collection&apos;s spirit, and the designer&apos;s vision: the stage
              </p>
            </header>

            <div className="p-8 md:p-10 prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
              <p>
                In the fashion world, the stage is not just a platform; it is the central element
                that carries the brand&apos;s identity, the collection&apos;s spirit, and the designer&apos;s
                vision. At <strong>Sahneva</strong>, our runway and podium rental services are
                specially planned to meet the unique aesthetic expectations of each fashion event.
              </p>

              <p>
                Whether you are organizing a boutique designer show, a large-attendance fashion
                week presentation, or a prestigious product launch; we provide a sophisticated,
                elegant, and technically flawless infrastructure for your event. Primarily in
                Istanbul and across Turkey, we manage the entire process end-to-end for fashion
                events, from podium design to lighting integration, LED backdrop solutions to
                backstage planning.
              </p>

              {/* 3 content images */}
              <div className="not-prose mt-8 grid gap-4 md:grid-cols-3 items-start">
                {CONTENT_IMAGES.map((img) => (
                  <figure
                    key={img.src}
                    className="group overflow-hidden rounded-2xl border border-gray-200 shadow-md"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </figure>
                ))}
              </div>

              <h3 className="flex items-center gap-3 mt-10">
                <span className="inline-flex bg-violet-100 text-violet-600 rounded-2xl p-2">🏗️</span>{" "}
                Flexible Staging Solutions for All Fashion Events
              </h3>
              <p>
                From intimate designer shows to large-scale podium productions, our stage rental
                solutions are designed with high load capacity, aesthetic integrity, and modular
                installation advantages. Working with fashion designers, agencies, and corporate
                brands, we serve a wide spectrum from fashion shows to special events, showroom
                presentations to temporary store launches.
              </p>
              <p>
                Our runway and podium rental scope includes straight, U-shape, or T-shape runway
                designs, elevated presentation platforms, LED-supported backdrop scenes, and
                photography shoot areas. Each installation is technically planned according to
                the collection&apos;s flow, model walking rhythm, and audience seating arrangement.
                Stage height, surface covering (glossy, matte, carpet), step transitions, and
                safety details are meticulously calculated.
              </p>

              <aside className="mt-8 rounded-2xl border-l-4 border-violet-500 bg-violet-50 p-5">
                <h4 className="font-black text-violet-700 text-lg mb-2">
                  💡 Customizable Podium and Stage Designs
                </h4>
                <p className="mb-0">
                  No two fashion events are the same. Whether you want a simple platform for a
                  minimal and modern collection or a daring runway design supported by dramatic
                  lighting transitions for a haute couture presentation, we make the stage part
                  of the collection. We transform your stage into a visually captivating
                  experience space with projection mapping, LED screen integration, custom
                  backdrop designs, and fabric coverings.
                </p>
              </aside>

              <h3 className="flex items-center gap-3 mt-10">
                <span className="inline-flex bg-pink-100 text-pink-600 rounded-2xl p-2">⚡</span>{" "}
                Comprehensive Technical Service and Operational Support
              </h3>
              <p>
                Timing is of critical importance at fashion events. We plan the installation and
                dismantling process in accordance with rehearsal hours, choreography flow, and
                broadcast schedule. Delivery, installation, and dismantling operations across
                Istanbul and Turkey are carried out by our professional teams.
              </p>
              <ul>
                <li>Professional lighting and sound system integration</li>
                <li>Truss installations and backdrop applications</li>
                <li>On-site technical support throughout the event</li>
                <li>Seamless infrastructure management with experienced technicians</li>
              </ul>

              <aside className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-5">
                <h4 className="font-black text-yellow-700 text-lg mb-2 flex items-center gap-2">
                  <span aria-hidden="true">💎</span> Why Sahneva for Your Fashion Events?
                </h4>
                <p className="mb-0 text-yellow-800">
                  We know that the visual impact of fashion presentations directly contributes to
                  brand value. We offer not just durable and reliable stage systems, but also
                  solutions that are aesthetic, elegant, and befitting high-end organizations.
                  With our stage designs based on engineering calculations, compliant with safety
                  standards, and visually powerful, we take your fashion events to the next level.
                </p>
              </aside>
            </div>
          </article>

          {/* Runway types */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-violet-600 to-pink-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Runway Design Options
              </h3>
              <p className="text-violet-100 mt-2 text-lg">
                Let&apos;s choose the best runway format for your collection together
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <h4 className="flex items-center gap-2 text-lg font-bold">
                <span className="inline-flex bg-violet-100 text-violet-600 rounded-xl p-2">➡️</span>{" "}
                Straight (Linear) Runway
              </h4>
              <p>Classic and elegant. Highlights models&apos; walk along a long line.</p>

              <h4 className="flex items-center gap-2 text-lg font-bold mt-6">
                <span className="inline-flex bg-pink-100 text-pink-600 rounded-xl p-2">🔄</span>{" "}
                U-Shape Runway
              </h4>
              <p>Provides a closer experience to the audience. Ideal for center-room audience viewing.</p>

              <h4 className="flex items-center gap-2 text-lg font-bold mt-6">
                <span className="inline-flex bg-yellow-100 text-yellow-600 rounded-xl p-2">✝️</span>{" "}
                T-Shape Runway
              </h4>
              <p>
                The most common fashion show format. Allows models to display the collection from the front and both sides.
              </p>
            </div>
          </article>

          {/* Technical integration */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <header className="bg-gradient-to-r from-pink-600 to-violet-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black leading-tight">
                Technical Integration Possibilities
              </h3>
              <p className="text-violet-100 mt-2 text-lg">
                Transform your stage into a visual and acoustic experience
              </p>
            </header>
            <div className="p-6 md:p-8 prose prose-lg max-w-none prose-p:text-gray-600">
              <ul>
                <li>LED backdrop and video wall integration</li>
                <li>Projection mapping applications</li>
                <li>Custom fabric and decorative backdrop systems</li>
                <li>Stage lighting and color transitions</li>
                <li>Sound systems and choreography music infrastructure</li>
                <li>Truss and suspended equipment installations</li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-violet-900/95">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Event Types{" "}
            <span className="text-pink-300">We Serve</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            From boutique shows to large-scale fashion weeks across a wide spectrum
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-400 to-pink-400 mx-auto mt-8 rounded-full" />
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {USE_CASES.map((uc, idx) => (
            <li
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-pink-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">{uc.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-12">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">💬</span> Get a Custom Quote for Your Event
          </Link>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: "300+", label: "Fashion Events", icon: "👗" },
    { value: "8+", label: "Years Experience", icon: "⭐" },
    { value: "End-to-End", label: "Service", icon: "🚀" },
    { value: "TS EN", label: "Safety Standard", icon: "🛡️" },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-violet-700 via-pink-700 to-violet-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="text-center group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black mb-1 text-white drop-shadow-lg">
                {stat.value}
              </div>
              <p className="text-pink-100 text-lg font-semibold">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Frequently Asked <span className="text-violet-700">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Common questions and answers about runway and podium rental
          </p>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((faq, index) => (
            <details
              key={index}
              className="group bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-all duration-500 open:bg-violet-50 open:border-violet-200 border-2 border-transparent open:border"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between text-xl font-bold text-gray-900">
                <span className="pr-4">{faq.q}</span>
                <span className="ml-4 transition-transform duration-500 group-open:rotate-180 text-violet-600 bg-violet-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  ⌄
                </span>
              </summary>
              <div className="mt-6 text-gray-700 leading-relaxed text-lg pl-4 border-l-4 border-violet-500">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Have more questions? Our expert team will call you with information.
          </p>
          <Link
            href="/en/faq"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3">📚</span>
            <span className="text-lg">View All FAQs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-violet-100/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Complementary <span className="text-violet-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Other professional event solutions to complement your runway and podium installation
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((service) => (
            <li key={service.href} className="h-full">
              <Link
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-200 transition-all duration-500 hover:scale-105 text-center h-full flex flex-col"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-violet-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{service.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-violet-700 to-pink-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Make Your Collection Unforgettable with an Impressive Stage
            </h2>
            <p className="text-violet-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Contact the Sahneva team to receive professional podium rental service for your
              next runway show or fashion event, plan technical details together, and receive a
              custom price quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-violet-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl"
              >
                <span className="text-xl mr-3">💬</span> Get a Quote Now
              </Link>
              <Link
                href="/en/podium-rental"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
              >
                <span className="text-xl mr-3">🎭</span> Podium Rental
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/en/runway-podium-rental`;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Services", url: `${baseUrl}/en/services` },
    { name: "Runway & Podium Rental", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StructuredData />
      <HeroSection />
      <ServicesSection />
      <ContentSection />
      <UseCasesSection />
      <StatsSection />
      <FAQSection />
      <RelatedServicesSection />
      <ServiceBlogLinks
        links={[
          { href: "/blog/etkinlige-gore-podyum-tercihi", label: "Choosing a Podium by Event Type" },
          { href: "/blog/neden-podyum-sahne-tercih-edilir", label: "Why Choose a Podium Stage?" },
        ]}
      />
      <CTASection />
    </>
  );
}
