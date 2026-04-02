// app/en/concert-podium-rental/page.js
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
  "Hello, I would like to request a quote for concert podium rental."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== 2. CONTENT DATA ================== */
const SERVICES = [
  {
    icon: "🎤",
    title: "Main Stage Platforms",
    description:
      "High load-capacity main stage systems for headliner artists and main performances",
    features: [
      "Wide platform area",
      "High load capacity",
      "Steel truss integration",
      "Modular expansion",
    ],
  },
  {
    icon: "🎸",
    title: "Side Stage & Extensions",
    description:
      "Side platform solutions integrated with the main stage for dance teams, backing vocals, and instruments",
    features: [
      "Main stage integration",
      "Flexible sizing",
      "Safe walkways",
      "Technical access",
    ],
  },
  {
    icon: "🥁",
    title: "Drum Riser",
    description:
      "Custom-designed drum platforms for optimal sound projection and stage sight lines",
    features: [
      "Custom sizing",
      "Vibration management",
      "Sound isolation",
      "Safe cable channels",
    ],
  },
  {
    icon: "🎚️",
    title: "FOH & Technical Platforms",
    description:
      "Front-of-house and control area platforms for sound engineers and technical crew",
    features: [
      "FOH mixer platform",
      "Technical control area",
      "Cable management",
      "Ergonomic design",
    ],
  },
  {
    icon: "💡",
    title: "LED & Lighting Integration",
    description:
      "LED screen support structures, lighting truss systems, and stage lighting infrastructure",
    features: [
      "LED screen support",
      "Truss systems",
      "Light bar integration",
      "Heavy load capacity",
    ],
  },
  {
    icon: "🔧",
    title: "Technical Support & Site Management",
    description:
      "Uninterrupted technical support throughout installation, rehearsal, soundcheck, and the event",
    features: [
      "Rider-compliant installation",
      "Soundcheck support",
      "Event day support",
      "Dismantling service",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "How are concert podium rental prices determined?",
    a: "Concert stage pricing is determined based on stage area (m²), height, LED/truss integration, extra platforms (FOH, drums, side stage), and installation time. Special transportation fees apply for projects outside Istanbul.",
  },
  {
    q: "How many days of events do you serve?",
    a: "We provide services from single-day concerts to multi-day festivals. For multi-day festivals, the stage structure is erected and on-site technical support is provided throughout the event.",
  },
  {
    q: "Do you build stages compliant with technical riders?",
    a: "Yes. The artist's technical rider document is reviewed and stage dimensions, heights, cable runs, and technical platform positions are planned accordingly.",
  },
  {
    q: "How is safety ensured at outdoor concerts?",
    a: "For outdoor events, wind load calculations, ground analysis, and anchoring systems are planned in accordance with engineering standards. All connection points and load capacities use documented systems.",
  },
];

const RELATED_SERVICES = [
  {
    href: "/en/podium-rental",
    title: "Podium Rental",
    icon: "🎭",
    desc: "Modular podium solutions for all event types",
  },
  {
    href: "/en/runway-podium-rental",
    title: "Runway Podium Rental",
    icon: "👗",
    desc: "Fashion show and brand launch podiums",
  },
  {
    href: "/en/led-screen-rental",
    title: "LED Screen Rental",
    icon: "🖥️",
    desc: "High-resolution LED screen and video wall solutions",
  },
  {
    href: "/en/sound-light-rental",
    title: "Sound & Lighting Systems",
    icon: "🎵",
    desc: "Professional sound and lighting system rental",
  },
];

/* ================== 3. METADATA ================== */
export const metadata = {
  title: "Concert Podium Rental | Festival Stage Solutions",
  description:
    "Concert & festival podium rental: main platform, side towers, FOH, end-to-end technical support. Professional installation, fast service in Istanbul and across Turkey.",
  alternates: {
    canonical: `${ORIGIN}/en/concert-podium-rental`,
    languages: {
      "tr-TR": `${ORIGIN}/konser-icin-podyum-kiralama`,
      en: `${ORIGIN}/en/concert-podium-rental`,
      "x-default": `${ORIGIN}/konser-icin-podyum-kiralama`,
    },
  },
  openGraph: {
    title: "Concert Podium Rental | Sahneva",
    description:
      "Modular stage systems, LED integration, and professional installation for festivals and concerts.",
    url: `${ORIGIN}/en/concert-podium-rental`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${ORIGIN}/img/podyum/konser-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Professional stage and podium rental for concerts – Sahneva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concert Podium Rental | Festival Stage Solutions | Sahneva",
    description:
      "Professional stage installation for concerts and festival events.",
    images: [`${ORIGIN}/img/podyum/konser-hero.webp`],
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

/* ================== 4. COMPONENTS ================== */

// --- JSON-LD ---
function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Concert Podium Rental",
        description: metadata.description,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: { "@type": "AdministrativeArea", name: "Turkey" },
        serviceType: "Concert Stage Installation",
        inLanguage: "en-US",
      },
      buildFaqSchema(FAQ_ITEMS.map((f) => ({ question: f.q, answer: f.a }))),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// --- HERO ---
function HeroSection() {
  const stats = [
    { icon: "🎤", value: "500+", label: "Concerts & Festivals" },
    { icon: "🇹🇷", value: "Nationwide", label: "Service Area" },
    { icon: "⏱️", value: "8+ Years", label: "Stage Experience" },
    { icon: "🛡️", value: "Engineering", label: "Certified Systems" },
  ];

  return (
    <section
      className="relative min-h-[80vh] 2xl:min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b0f1a] via-blue-950 to-purple-950 pt-16 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/img/podyum/konser-hero.webp"
          alt="Professional stage and podium installation for concerts – Sahneva"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-40"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-purple-900/75"
        aria-hidden="true"
      />
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2 text-sm font-semibold text-blue-200 mb-8">
            <span aria-hidden="true">🎤</span> Concert &amp; Festival Stage Specialist
          </div>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-6 tracking-tight"
          >
            Concert{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Podium Rental
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Festival and live performance stage solutions — professional installation from
            small-scale indoor venues to open-air events with tens of thousands of attendees.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-xl mr-2" aria-hidden="true">💬</span> Get a Quote Now
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center font-extrabold px-8 py-4 rounded-2xl border-2 border-white/40 text-white bg-white/10 hover:bg-white/20 backdrop-blur-xl transition-all duration-300 shadow-lg"
            >
              <span className="text-xl mr-2" aria-hidden="true">🎪</span> Our Services
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/12 px-4 py-4 text-center"
              >
                <div className="text-2xl mb-1" aria-hidden="true">{s.icon}</div>
                <div className="text-xl font-black">{s.value}</div>
                <div className="text-sm text-white/70 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
          <span className="sr-only">Concert Podium Rental - Sahneva Organization</span>
        </div>
      </div>
      <div className="relative z-10 h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

// --- SERVICES ---
function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900">
            Concert Stage{" "}
            <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technical rider analysis, venue assessment, stage installation, and
            uninterrupted technical support on event day
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => (
            <article
              key={idx}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 transition-all duration-500 h-full flex flex-col"
            >
              <div
                className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
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
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3" aria-hidden="true">📞</span> Get a Quote for Your Concert Stage
          </Link>
        </div>
      </div>
    </section>
  );
}

// --- ARTICLE ---
function ArticlesSection() {
  return (
    <section id="article" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Concert Stage{" "}
            <span className="text-blue-700">Guide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights and technical knowledge on concert and festival stage installation
          </p>
        </div>

        {/* Intro paragraph + Image 1 (right) */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed">
              At concerts and festivals, the stage is not merely a platform where the artist
              stands; it is the central hub where lights, sound, LED screens, backstage
              operations, and the audience experience converge. At Sahneva, we plan and execute
              our concert podium rental and festival stage installation services to fit every
              scale, from small indoor events to open-air shows with tens of thousands of
              attendees.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              For concert stage installations carried out primarily in Istanbul and across
              Turkey, we use systems with engineered calculations, high load capacity, and
              compliance with safety standards. The artist&apos;s technical rider, sound system
              layout, lighting design, and LED integration are inseparable parts of stage
              planning.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-1.webp"
              alt="Concert stage installation – main platform and truss system"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Main stage platform and steel truss system installation
            </p>
          </div>
        </div>

        {/* Image 2 (left) + Professional Stage Solutions */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="inline-flex bg-blue-100 text-blue-600 rounded-2xl p-2 text-xl" aria-hidden="true">🎤</span>
              Professional Stage Solutions for Every Performance
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you are organizing a local concert or a large-scale music festival, we
              offer stage systems that can scale to your needs. Our stage systems are designed
              with durability, stability, and modular construction as priorities. Wind load
              calculations, ground analysis, and anchoring systems are meticulously planned for
              outdoor events. For indoor concerts, installation is carried out considering
              ceiling height, acoustic structure, and truss load capacity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              As part of our concert podium rental service, we provide main stage platforms,
              side stage extensions, technical platforms, and artist-specific area solutions.
              For large productions, stage extensions allow large orchestras, dance teams, or
              multiple performance layouts to be positioned comfortably.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-2.webp"
              alt="Festival stage wide-area installation – modular platform system"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Large-scale festival stage — modular expansion system
            </p>
          </div>
        </div>

        {/* Info box */}
        <aside className="rounded-3xl border-l-4 border-blue-500 bg-blue-50 p-8 md:p-10 mb-16 shadow-lg">
          <h3 className="text-2xl font-black text-blue-700 mb-5 flex items-center gap-3">
            <span aria-hidden="true">💡</span> What Do Our Concert and Festival Stages Include?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Main stages consist of wide, high load-capacity platforms for headliner artists
              and main performances. Elevated platform solutions are provided for groups, DJ
              performances, and dance teams.
            </p>
            <p>
              Drum risers are designed to custom dimensions for optimal sound projection and
              stage sight lines. For larger ensembles, flexible space is created with stage
              expansion modules. All our systems consist of non-slip surface coatings, safe
              connection points, and modular stage elements with high load ratings.
            </p>
          </div>
        </aside>

        {/* Customizable Festival Stage Design + Image 3 */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="inline-flex bg-purple-100 text-purple-600 rounded-2xl p-2 text-xl" aria-hidden="true">🎨</span>
              Customizable Festival Stage Design
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Every concert and festival has a different dynamic. For this reason, we design
              the stage in integrated fashion with the artist&apos;s stage show, LED screen
              configuration, lighting design, and sound system layout. Stages can be built to
              any desired size and height; side towers, FOH platforms, and technical control
              areas are included in the planning.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              For large open-air festivals, steel truss-roofed stage systems, branded top
              coverings, and weather-resistant structural elements are used. The installation
              process progresses in line with the rehearsal and soundcheck schedule.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-3.webp"
              alt="Outdoor concert podium – LED screen integration and truss system"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Open-air festival stage — LED integration and truss roof
            </p>
          </div>
        </div>

        {/* Image 4 (left) + End-to-End Stage Service */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-start mb-16">
          <div className="flex-1 prose prose-lg max-w-none">
            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
              <span className="inline-flex bg-green-100 text-green-600 rounded-2xl p-2 text-xl" aria-hidden="true">🔧</span>
              End-to-End Stage Service and Technical Support
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Sahneva team manages the entire process, including survey, design, delivery,
              installation, and dismantling. We conduct a venue assessment before the event to
              determine ideal stage dimensions and layout plan. During installation, our
              experienced technical team builds a safe and stable structure.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              On-site technical support is provided throughout the event to immediately address
              any needs that arise. Safety, timing, and operational discipline are the most
              critical elements of concert and festival organizations. For this reason, occupational
              safety standards and engineering calculations are the basis of all our stage
              installations.
            </p>
          </div>
          <div className="w-full lg:w-[420px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            <Image
              src="/img/podyum/konser-4.webp"
              alt="Drum riser and technical platform installation for concerts – Sahneva"
              width={840}
              height={560}
              className="w-full h-auto object-cover"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <p className="text-sm text-gray-500 text-center py-3 px-4 bg-gray-50">
              Drum riser and FOH technical platform installation
            </p>
          </div>
        </div>

        {/* Why Sahneva box */}
        <aside className="rounded-3xl border-l-4 border-yellow-400 bg-yellow-50 p-8 md:p-10 shadow-lg">
          <h3 className="text-2xl font-black text-yellow-700 mb-5 flex items-center gap-3">
            <span aria-hidden="true">💎</span> Why Sahneva for Concert Podium Rental?
          </h3>
          <p className="text-yellow-800 text-lg leading-relaxed mb-4">
            With high-quality equipment, an experienced technical team, and large-scale
            organization experience, we are a reliable solution partner for concert and festival
            stage installations. Our aim is not just to build a stage; it is to create a
            production infrastructure that amplifies the artist&apos;s performance and gives the
            audience an unforgettable experience.
          </p>
          <p className="text-yellow-800 text-lg leading-relaxed mb-6">
            For your concert or festival organization, you can contact Sahneva to receive
            professional stage installation and podium rental service, plan technical details
            together, and receive a custom price quote. Start your event with a powerful stage;
            create a performance experience that will remain in your audience&apos;s memory.
          </p>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-xl mr-3" aria-hidden="true">💬</span> Free Survey &amp; Quote
          </Link>
        </aside>
      </div>
    </section>
  );
}

// --- FAQ ---
function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-blue-700">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about concert and festival stage rental
          </p>
        </div>
        <dl className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-gray-100 bg-gray-50 p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <dt className="text-xl font-black text-gray-900 mb-3">
                {item.q}
              </dt>
              <dd className="text-gray-600 text-lg leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// --- RELATED SERVICES ---
function RelatedServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Related <span className="text-blue-700">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Other solutions to complement your event
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {RELATED_SERVICES.map((s, i) => (
            <Link
              key={i}
              href={s.href}
              className="group bg-white rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== 5. PAGE ================== */
export default function ConcertPodiumRentalPage() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/en/concert-podium-rental`;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Services", url: `${baseUrl}/en/services` },
    { name: "Concert Podium Rental", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <StructuredData />
      <HeroSection />
      <ServicesSection />
      <ArticlesSection />
      <FAQSection />
      <RelatedServicesSection />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/etkinlige-gore-podyum-tercihi",
            label: "Choosing a Podium by Event Type",
          },
          {
            href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
            label: "Why Is the Stage Always Elevated?",
          },
          {
            href: "/blog/neden-podyum-sahne-tercih-edilir",
            label: "Why Choose a Podium Stage?",
          },
        ]}
      />
    </>
  );
}
