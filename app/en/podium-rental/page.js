// app/en/podium-rental/page.js
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import JsonLdScript from "@/components/seo/JsonLd";
import { Tent, Briefcase, Monitor, Music } from "lucide-react";

export const revalidate = 1800;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;

const WHATSAPP_URL = `https://wa.me/905453048671?text=${encodeURIComponent(
  "Hello, I would like to get a quote for podium rental."
)}`;

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

const UNIT_PRICES = {
  platform_m2_week: 270,
  carpet_m2_week: 130,
  skirt_ml_week: 100,
  ist_nakliye: 9000,
  currency: "TRY",
};

const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="h-96 w-full bg-gray-100 animate-pulse rounded-3xl border border-gray-200" />
  ),
});

const PriceEstimatorPodyum = dynamic(
  () => import("@/components/PriceEstimatorPodyum"),
  {
    loading: () => (
      <div className="h-80 w-full bg-gray-50 animate-pulse rounded-3xl border border-gray-200" />
    ),
  }
);

const SERVICES = [
  {
    icon: "🎭",
    title: "Modular Podium Systems",
    description: "Flexible and safe stage solutions with 1×1m and 2×1m modular panels",
    features: ["1×1m and 2×1m panels", "Non-slip surface", "40-100cm height", "Quick setup"],
  },
  {
    icon: "💍",
    title: "Wedding & Special Event Podiums",
    description: "Elegant and safe podium solutions for special occasions",
    features: ["Elegant appearance", "Safe structure", "Carpet covering", "Custom decoration"],
  },
  {
    icon: "🎤",
    title: "Concert & Performance Podiums",
    description: "Durable podium systems for professional stage performances",
    features: ["High durability", "Sound insulation", "Cable channels", "Safety equipment"],
  },
  {
    icon: "🏢",
    title: "Corporate Launch Podiums",
    description: "Professional and functional podium solutions for company events",
    features: ["Branded covering", "Ramp and stairs", "LED integration", "Professional setup"],
  },
  {
    icon: "🎪",
    title: "Exhibition & Fair Podiums",
    description: "Optimised podium systems for fairs and exhibitions",
    features: ["Modular design", "Quick setup", "Brand integration", "Portability"],
  },
  {
    icon: "🔧",
    title: "Technical Support & Site Management",
    description: "Technical support aligned with the site plan throughout setup, teardown and the event",
    features: ["Professional team", "Teardown service", "Site plan", "Emergency response option"],
  },
];

const PACKAGES = [
  {
    id: "pkg-mini",
    name: "Mini Podium — 12 m²",
    layout: { width: 3, depth: 4, area: 12, perimeter: 14 },
    height: "40 cm",
    includes: [
      "6 × (1×2 m) panels – total 12 m²",
      "Height: 40 cm",
      "Non-slip covering",
      "Transport + setup + teardown (Istanbul)",
    ],
    note: "Ideal for indoor speeches and mini performances.",
  },
  {
    id: "pkg-mid",
    name: "Medium Podium — 24 m²",
    layout: { width: 4, depth: 6, area: 24, perimeter: 20 },
    height: "60 cm",
    includes: [
      "12 × (1×2 m) panels – total 24 m²",
      "Height: 60 cm",
      "Non-slip covering, stairs",
      "Transport + setup + teardown (Istanbul) + on-site levelling",
    ],
    note: "For corporate stages and live performances.",
  },
  {
    id: "pkg-pro",
    name: "Pro Podium — 48 m²",
    layout: { width: 6, depth: 8, area: 48, perimeter: 28 },
    height: "80-100 cm",
    includes: [
      "24 × (1×2 m) panels – total 48 m²",
      "Height: 80–100 cm",
      "Non-slip covering, stairs, ramp, railings",
      "Transport + setup + teardown (Istanbul) + skirting/branding",
    ],
    note: "For large concert and rally stages.",
  },
];

const USE_CASES = [
  { icon: "💍", text: "Weddings, engagements and special events", desc: "Elegant podium solutions for special occasions" },
  { icon: "🎤", text: "Concerts, festivals and stage performances", desc: "Stages for professional performances" },
  { icon: "🏢", text: "Corporate launches and meetings", desc: "Professional solutions for company events" },
  { icon: "🎓", text: "Graduation ceremonies and school events", desc: "Podiums for educational institutions" },
  { icon: "🏛️", text: "Municipal ceremonies and official events", desc: "Official ceremonies and public events" },
  { icon: "🛍️", text: "Shopping mall events and fair stands", desc: "Solutions for commercial events" },
];

const TECHNICAL_SPECS = [
  {
    title: "Material Quality",
    icon: "🏗️",
    description: "Aluminium frame, steel connectors and non-slip surface",
    features: ["Aluminium frame system", "Steel connectors", "Non-slip covering", "UV-resistant surface"],
  },
  {
    title: "Safety Systems",
    icon: "🛡️",
    description: "Safety and stability systems compliant with TS EN standards",
    features: ["Non-slip covering", "Railing systems", "Stairs and ramp", "Anti-tip measures"],
  },
  {
    title: "Dimensions & Combinations",
    icon: "📐",
    description: "Flexible dimension and joining options with modular systems",
    features: ["1×1m and 2×1m panels", "40-100cm height", "Custom dimensions on request", "Mixed panel systems"],
  },
  {
    title: "Complementary Services",
    icon: "🔧",
    description: "Professional services that complete the podium setup",
    features: ["Carpet covering systems", "Skirt covering", "Branding and decoration", "Lighting integration"],
  },
  {
    title: "Site Process",
    icon: "⚡",
    description: "Transport, setup, teardown and on-time site management",
    features: ["2-6 hour setup", "Professional team", "Istanbul transport", "Teardown service"],
  },
  {
    title: "Technical Support",
    icon: "📞",
    description: "Technical support and emergency response options",
    features: ["Event day support", "Emergency response team", "Spare parts stock", "Maintenance option"],
  },
];

const FAQ_ITEMS = [
  {
    q: "How are podium rental prices calculated?",
    a: `Price is calculated based on area (m²), carpet (m²), skirt (metres) and Istanbul transport (setup+teardown included). Our 2026 unit prices: platform ${UNIT_PRICES.platform_m2_week} TRY/m², carpet ${UNIT_PRICES.carpet_m2_week} TRY/m², skirt ${UNIT_PRICES.skirt_ml_week} TRY/metre, Istanbul transport ${UNIT_PRICES.ist_nakliye} TRY (fixed).`,
  },
  {
    q: "How long does setup take?",
    a: "Standard 24-48 m² podiums are set up within 2-6 hours at most venues. Large areas and special requirements may require additional time.",
  },
  {
    q: "What panels do you use?",
    a: "We use 1×1m and 2×1m modular panels. The 1×1m panels provide flexibility on uneven surfaces, while 2×1m panels allow fast setup on main stages.",
  },
  {
    q: "Are carpet and skirt mandatory?",
    a: "They are not mandatory, but recommended for visual completeness and safety. The carpet is non-slip, and the skirt provides a professional look.",
  },
];

const RELATED_SERVICES = [
  { href: "/en/tent-rental", title: "Tent Rental", Icon: Tent, desc: "Professional tent systems and setup services" },
  { href: "/en/corporate-events", title: "Corporate Events", Icon: Briefcase, desc: "Professional event management and organisation solutions" },
  { href: "/en/led-screen-rental", title: "LED Screen Rental", Icon: Monitor, desc: "High-resolution LED screen and video wall solutions" },
  { href: "/en/sound-light-rental", title: "Sound & Light Systems", Icon: Music, desc: "Professional sound and lighting systems rental" },
];

const GALLERY_IMAGES = [
  "/img/podyum/1.webp", "/img/podyum/2.webp", "/img/podyum/3.webp",
  "/img/podyum/17.webp", "/img/podyum/18.webp", "/img/podyum/6.webp",
  "/img/podyum/7.webp", "/img/podyum/8.webp", "/img/podyum/9.webp",
  "/img/podyum/10.webp", "/img/podyum/11.webp", "/img/podyum/12.webp",
];

const PAGE_PATH = "/en/podium-rental";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;
const OG_IMAGE = `${ORIGIN}/img/podyum/hero.webp`;

export const metadata = {
  title: "Podium Rental | Modular Stage & Platform Systems",
  description:
    "Modular podium rental across Turkey for concerts, weddings and corporate events. Delivery, setup and teardown included.",
  alternates: buildLanguageAlternates({
    tr: "/podyum-kiralama",
    en: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    title: "Podium Rental | Modular Stage & Platform Systems | Sahneva",
    description:
      "Professional modular podium rental. Stage platforms for concerts, weddings, corporate events. Delivery, setup and teardown included.",
    url: PAGE_URL,
    siteName: "Sahneva",
    type: "website",
    locale: "en_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sahneva podium rental – modular stage and platform systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podium Rental | Modular Stage Platforms | Sahneva",
    description: "Professional modular podium rental across Türkiye. Setup, teardown and transport included.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function PodiumRentalJsonLd({ faqs }) {
  const orgId = `${ORIGIN}/#org`;
  const webId = `${ORIGIN}/#website`;
  const pageId = `${PAGE_URL}#webpage`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const serviceId = `${PAGE_URL}#service`;
  const faqId = `${PAGE_URL}#faq`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": webId,
        url: ORIGIN,
        name: "Sahneva",
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: PAGE_URL,
        name: "Podium Rental | Modular Stage & Platform Systems",
        description: "Professional modular podium rental across Türkiye. Delivery, setup and teardown included.",
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
        inLanguage: "en-US",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/en` },
          { "@type": "ListItem", position: 2, name: "Podium Rental", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Podium Rental",
        provider: { "@id": orgId },
        areaServed: { "@type": "Country", name: "Türkiye" },
        description: "Professional modular podium and stage platform rental with setup and teardown across Türkiye.",
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: "en-US",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

export default function PodiumRentalPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${ORIGIN}/en` },
    { name: "Podium Rental", url: PAGE_URL },
  ];

  return (
    <div className="relative">
      <PodiumRentalJsonLd faqs={FAQ_ITEMS} />
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0B1120] pt-20 pb-12 lg:pt-28 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
                Professional Stage Solutions
              </div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Podium Rental
              </h1>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Modular podium systems for concerts, weddings, corporate events and ceremonies.
                Professional setup and teardown included across Türkiye.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all"
                >
                  💬 Get a WhatsApp Quote
                </a>
                <a
                  href="tel:+905453048671"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all"
                >
                  📞 Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img/podyum/hero.webp"
                alt="Sahneva podium rental – professional modular stage platforms"
                width={640}
                height={480}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="rounded-3xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "500+", label: "Events" },
              { value: "12 m²", label: "Min. Size" },
              { value: "81", label: "Cities" },
              { value: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-2">Our Services</h2>
          <p className="text-neutral-600 mb-10">Comprehensive podium and stage solutions for every event type.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-600 mb-4">{s.description}</p>
                <ul className="space-y-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-700">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-2">Package Options</h2>
          <p className="text-neutral-600 mb-10">Ready-made packages for quick planning. Custom solutions available on request.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => {
              const price =
                pkg.layout.area * UNIT_PRICES.platform_m2_week +
                pkg.layout.area * UNIT_PRICES.carpet_m2_week +
                pkg.layout.perimeter * UNIT_PRICES.skirt_ml_week +
                UNIT_PRICES.ist_nakliye;
              return (
                <div key={pkg.id} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <h3 className="font-black text-xl text-neutral-900 mb-1">{pkg.name}</h3>
                  <p className="text-sm text-neutral-500 mb-4">{pkg.note}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                        <span className="text-blue-500">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <p className="text-xs text-neutral-500">Starting from (Istanbul)</p>
                    <p className="text-2xl font-black text-neutral-900">{price.toLocaleString("tr-TR")} ₺</p>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-neutral-500">* Prices are indicative for Istanbul. Contact us for accurate quotes for other cities.</p>
        </div>
      </section>

      {/* Price Estimator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-2">Price Calculator</h2>
          <p className="text-neutral-600 mb-8">Enter your dimensions for an instant estimate.</p>
          <PriceEstimatorPodyum unitPrices={UNIT_PRICES} />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-10">Who Uses Our Podiums?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u) => (
              <div key={u.text} className="flex items-start gap-3 rounded-xl bg-white border border-neutral-200 p-4">
                <span className="text-2xl">{u.icon}</span>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{u.text}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-10">Project Gallery</h2>
          <CaseGallery images={GALLERY_IMAGES} />
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-10">Technical Specifications</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TECHNICAL_SPECS.map((spec) => (
              <div key={spec.title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <div className="text-2xl mb-2">{spec.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-1">{spec.title}</h3>
                <p className="text-sm text-neutral-600 mb-3">{spec.description}</p>
                <ul className="space-y-1">
                  {spec.features.map((f) => (
                    <li key={f} className="text-xs text-neutral-700 flex items-center gap-1">
                      <span className="text-blue-500">•</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-neutral-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-neutral-200 p-6">
                <h3 className="font-bold text-neutral-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-neutral-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-10">Related Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl border border-neutral-200 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <s.Icon className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="font-bold text-neutral-900 group-hover:text-blue-700 text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-neutral-600">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-[#0B1120] to-purple-900 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Get a Quote?</h2>
          <p className="text-slate-300 mb-8">Contact us for a detailed quote. We respond within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:from-green-700 hover:to-emerald-700 transition-all"
            >
              💬 WhatsApp Quote
            </a>
            <Link
              href="/en/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>

      <ServiceBlogLinks
        title="Guides on this topic"
        links={[
          { href: "/blog/etkinlige-gore-podyum-tercihi", label: "Choosing a Podium by Event Type" },
          { href: "/blog/neden-podyum-sahne-tercih-edilir", label: "Why Choose a Podium Stage?" },
        ]}
      />
    </div>
  );
}
