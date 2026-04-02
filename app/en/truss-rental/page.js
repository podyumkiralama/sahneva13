// app/en/truss-rental/page.js

import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";

/* ================== ISR ================== */
export const revalidate = 1800;

/* ================== Constants ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;

const PAGE_PATH = "/en/truss-rental";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;

const TITLE = "Truss Rental | Aluminum Truss Systems";
const DESCRIPTION =
  "Truss rental and installation for all types including square, triangular, circle, and arch. Transportation, assembly, dismantling, and on-site technical team support for LED screen, sound-lighting rigging, and stage portal.";

const OG_IMAGE = `${ORIGIN}/img/truss/truss-1.webp`;

/* ================== Contact ================== */
const PHONE = "+905453048671";

const WA_TEXT =
  "Hello%2C+I+would+like+a+quote+for+truss+rental.+Event%3A+%5Bconcert%2Ftrade+fair%2Flaunch%2Fwedding%5D%2C+Date%3A+%5Bdd.mm.yyyy%5D%2C+City%3A+%5Bcity%2Fdistrict%5D%2C+Type%3A+%5Bsquare%2Ftriangular%2Farch%2Fcircle%5D%2C+Dimensions%3A+%5Bwidth-depth-height%5D%2C+Additional+Needs%3A+%5BLED%2Flighting%2Fstage%5D.";

const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const getServiceWhatsappLink = (title) => {
  const text = `Hello, I would like information and a price quote for ${title} service. Event date: [dd.mm.yyyy], city: [city/district], type: [square/triangular/arch/circle], dimensions: [width-depth-height], additional needs: [LED/lighting/stage].`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

/* ================== Dynamic gallery (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Loading gallery">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" aria-hidden="true" />
      <span className="sr-only">Loading gallery...</span>
    </div>
  ),
});

/* ================== Metadata ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": `${ORIGIN}/truss-kiralama`,
      en: PAGE_URL,
      "x-default": `${ORIGIN}/truss-kiralama`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva Organization truss rental – square, triangular, and custom construction truss systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

/* ================== JSON-LD (Service + FAQ + Gallery Images) ================== */
function TrussJsonLd() {
  const galleryImages = TRUSS_GALLERY_IMAGES.map((img, i) => ({
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#image-${i + 1}`,
    url: `${ORIGIN}${img.src}`,
    contentUrl: `${ORIGIN}${img.src}`,
    caption: img.alt,
  }));

  const faqs = FAQ_ITEMS.map((f, i) => ({
    "@type": "Question",
    "@id": `${PAGE_URL}#faq-q-${i + 1}`,
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: "Sahneva Organization",
        url: ORIGIN,
      },
      {
        "@type": "LocalBusiness",
        "@id": LOCAL_BUSINESS_ID,
        name: "Sahneva Organization",
        url: ORIGIN,
        parentOrganization: { "@id": ORGANIZATION_ID },
        telephone: PHONE,
        areaServed: "TR",
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        primaryImageOfPage: { "@type": "ImageObject", "@id": `${PAGE_URL}#primaryimage`, url: OG_IMAGE },
        mainEntity: { "@id": `${PAGE_URL}#service` },
        hasPart: [
          { "@id": `${PAGE_URL}#faq` },
          { "@id": `${PAGE_URL}#gallery` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Truss Rental and Installation",
        serviceType: "Truss rental",
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: "TR",
        url: PAGE_URL,
        description:
          "Truss rental and professional installation and dismantling service including square truss, triangular truss, circle/oval truss, and arch (gate) truss for any event.",
        inLanguage: "en-US",
        offers: {
          "@type": "Offer",
          url: PAGE_URL,
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs,
      },
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#gallery`,
        name: "Truss Installation Gallery",
        url: `${PAGE_URL}#gallery`,
        hasPart: galleryImages,
      },
      ...galleryImages,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ================== Gallery Images ================== */
const TRUSS_GALLERY_IMAGES = [
  { src: "/img/truss/truss-1.webp", alt: "Square truss installation at a concert stage" },
  { src: "/img/truss/truss-2.webp", alt: "Truss support system for LED screen hanging" },
  { src: "/img/truss/truss-3.webp", alt: "Outdoor gate truss entrance arch installation" },
  { src: "/img/truss/truss-4.webp", alt: "Truss system in trade fair stand upper construction" },
  { src: "/img/truss/truss-5.webp", alt: "Circle truss stage upper construction" },
  { src: "/img/truss/truss-6.webp", alt: "Corporate event stage portal truss installation" },
  { src: "/img/truss/truss-7.webp", alt: "Wide-span truss installation at a festival stage" },
  { src: "/img/truss/truss-8.webp", alt: "Truss system for lighting and sound rigging outdoors" },
];

/* ================== FAQ ================== */
const FAQ_ITEMS = [
  {
    q: "What types of truss can you install?",
    a: "We can install any type of truss system suitable for the event, including square truss, triangular truss, circle/oval truss, arch (gate) truss, and installations requiring custom configurations.",
  },
  {
    q: "Can LED screens and lighting systems be hung on truss?",
    a: "Yes. The rigging for LED screens, lights, and related equipment is planned according to area, load distribution, height, and safety requirements. Additional anchoring and support solutions are applied when necessary.",
  },
  {
    q: "Do you provide installation and dismantling services?",
    a: "Yes. We can provide transportation, installation, dismantling, and on-site technical team support. Planning is made based on the event date, location, and rigging complexity.",
  },
  {
    q: "How are truss rental prices determined?",
    a: "Prices are determined on a project basis based on truss type, footage, height, rigging complexity, additional equipment (base/foot, connections, supports, motors, etc.), transportation, and event duration.",
  },
  {
    q: "Do you serve outside Istanbul?",
    a: "Yes. We can provide project-based services primarily in Istanbul and across Turkey.",
  },
];

/* ================== Section Components ================== */
function Hero() {
  return (
    <header className="pt-20 pb-14 md:pb-16 lg:pt-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-6xl 2xl:max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <li>
              <Link className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded" href="/en">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-semibold">Truss Rental</li>
          </ol>
        </nav>

        <p className="text-sm font-semibold text-blue-700">
          Stage • LED Screen • Lighting &amp; Sound • Trade Fair &amp; Events
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
          Truss Rental{" "}
          <span className="gradient-text gradient-text--safe-xl">
            and Installation
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl 2xl:max-w-4xl">
          We plan <strong>every type of truss</strong> system, including square, triangular, circle, and arch (gate),
          according to your event; providing transportation, installation-dismantling, and on-site technical team support.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02] transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            aria-label="Get a truss rental quote via WhatsApp (opens in new tab)"
          >
            <span aria-hidden="true" className="text-xl mr-3">💬</span>
            <span>Get a WhatsApp Quote</span>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            aria-label="Call us"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Call Now</span>
          </a>

          <a
            href="#quote"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
          >
            <span aria-hidden="true" className="text-xl mr-3">🧾</span>
            <span>Get a Price via Form</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3 text-gray-700">
          {[
            { title: "Installation + Dismantling", desc: "Full on-site operation with professional crew" },
            { title: "Transportation Included", desc: "Istanbul and project-based across Turkey" },
            { title: "Rigging Compatible", desc: "Planning for LED screens and lighting systems" },
          ].map((x) => (
            <li key={x.title} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <p className="font-black text-gray-900 text-lg">{x.title}</p>
              <p className="mt-2 text-gray-600 leading-relaxed">{x.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Content() {
  return (
    <section className="py-20 bg-white" aria-labelledby="content-heading">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <h2 id="content-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            What Is{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Truss Rental?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The right truss configuration for your event: a critical building block for safety, stability, and a professional look.
          </p>
        </header>

        <article className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
          <p>
            Truss is an aluminum structural system composed of modular parts, fixed with connecting elements,
            and used for load-bearing purposes. On stage, it ensures that lighting, sound, and LED screen
            equipment is safely carried and correctly positioned.
          </p>

          <p>
            As Sahneva Organization, we provide truss rental and installation services suitable for all types
            of configurations at concerts, festivals, trade fairs, launches, and corporate events, including{" "}
            <strong>square truss, triangular truss, circle/oval truss, and arch (gate) truss</strong>.
          </p>

          <h3>Which truss types do we install?</h3>
          <ul>
            <li><strong>Square Truss:</strong> Ideal for LED screen hanging and rigging with its high load capacity.</li>
            <li><strong>Triangular Truss:</strong> Provides flexibility in medium-scale configurations and decorative applications.</li>
            <li><strong>Circle / Oval Truss:</strong> Suitable for creative stage designs and center-stage configurations.</li>
            <li><strong>Arch (Gate) Truss:</strong> Frequently used for entrance arches, portals, and trade fair walkways.</li>
            <li><strong>Custom Configuration:</strong> Planned on a project basis according to area dimensions, height requirements, and concept design.</li>
          </ul>

          <h3>Where is truss used?</h3>
          <ul>
            <li>LED screen hanging and truss frame solutions</li>
            <li>Stage-top lighting rigging (moving head, wash, effect systems)</li>
            <li>Stage portal and backdrop support systems</li>
            <li>Trade fair stand upper constructions</li>
            <li>Open-air concert/festival stages (with additional anchoring depending on conditions)</li>
          </ul>

          <p className="not-prose mt-10 rounded-3xl bg-gray-50 border border-gray-100 p-8">
            <span className="font-black text-gray-900 block text-lg mb-2">Compatible Services</span>
            <span className="text-gray-700 leading-relaxed block">
              Truss systems are generally planned together with{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/en/led-screen-rental">
                LED Screen Rental
              </Link>
              ,{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/en/sound-light-rental">
                Sound &amp; Lighting Systems
              </Link>
              {" "}and{" "}
              <Link className="font-bold text-blue-700 hover:text-blue-900" href="/en/stage-rental">
                Stage Rental
              </Link>
              .
            </span>
          </p>
        </article>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white" aria-labelledby="gallery-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="gallery-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Truss Installation{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Examples from truss installations we have completed at concerts, festivals, trade fairs, and corporate events
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery images={TRUSS_GALLERY_IMAGES} visibleCount={8} priorityCount={2} />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Visit our projects page to see more of our work
          </p>
          <Link
            href="/en/projects"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            aria-label="View all projects"
          >
            <span aria-hidden="true" className="text-xl mr-3">📸</span>
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Technical() {
  const items = [
    {
      title: "Safety & Stability",
      icon: "🛡️",
      description:
        "The configuration is planned based on the equipment to be carried, height, span, and ground conditions.",
      features: ["Load distribution plan", "Correct connection points", "Project-based anchoring solutions"],
    },
    {
      title: "Rigging-Compatible Installation",
      icon: "🎛️",
      description:
        "Technical planning for LED screens, lights, and stage equipment ensures the operation runs smoothly.",
      features: ["LED hanging configurations", "Lighting bar/rigging plan", "Stage portal solutions"],
    },
    {
      title: "Operations & Timing",
      icon: "⏱️",
      description:
        "Transportation, installation, and dismantling are planned so as not to interrupt the event flow, and crew support is provided on site.",
      features: ["Installation-dismantling plan", "Site coordination", "Project-based survey/planning"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" aria-labelledby="technical-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="technical-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Technical{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Planning
            </span>{" "}
            &amp; Safety
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The most critical issue in truss installation is safety. Planning is done based on equipment type, height, and environmental conditions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl" aria-hidden="true">{it.icon}</div>
              <h3 className="mt-4 text-2xl font-black text-gray-900">{it.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{it.description}</p>
              <ul className="mt-6 space-y-2 text-gray-700">
                {it.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true">✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={getServiceWhatsappLink(it.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02] transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
                  aria-label={`Request a quote for ${it.title} via WhatsApp (opens in new tab)`}
                >
                  <span aria-hidden="true" className="mr-2">➡️</span>
                  <span>Get a Quote</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Contact Us for a Detailed Quote</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Questions and answers about truss rental and installation
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Frequently asked questions list">
          {FAQ_ITEMS.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const headingId = `faq-heading-${index}`;

            return (
              <article key={faq.q} role="listitem">
                <details
                  className="group bg-gray-50 rounded-3xl border-2 border-transparent transition-all duration-500 hover:bg-gray-100 open:bg-gray-100 open:border-blue-100 [&_summary::-webkit-details-marker]:hidden"
                  id={panelId}
                  aria-labelledby={headingId}
                >
                  <summary
                    id={headingId}
                    className="cursor-pointer w-full list-none text-left flex items-center justify-between gap-4 px-8 py-6 text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="pr-4 flex-1">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="ml-4 transition-transform duration-300 text-blue-600 bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>

                  <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 px-8 pb-0">
                    <div className="overflow-hidden text-gray-700 leading-relaxed text-lg pt-0 group-open:pt-2 group-open:pb-6">
                      <p className="pl-4 border-l-4 border-blue-500">{faq.a}</p>
                    </div>
                  </div>
                </details>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Have more questions? Our expert team will call you with information.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            aria-label="Message via WhatsApp (opens in new tab)"
          >
            <span aria-hidden="true" className="text-xl mr-3">💬</span>
            <span>Message via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="quote" className="py-20 bg-gradient-to-b from-white to-slate-50" aria-labelledby="quote-heading">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="quote-heading" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Get a Truss Rental{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Quote
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Simply share the information below for a clear and fast price.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "City / District",
            "Event date",
            "Installation duration (how many days)",
            "Configuration type (square/triangular/arch/circle)",
            "Dimension requirement (width-depth-height)",
            "Additional needs (LED screen / lighting / stage)",
          ].map((x) => (
            <div key={x} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <p className="font-bold text-gray-900">{x}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02] transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            aria-label="Get a quote via WhatsApp (opens in new tab)"
          >
            <span aria-hidden="true" className="text-xl mr-3">✅</span>
            <span>Get a Quote Now</span>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            aria-label="Call us"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Call Us</span>
          </a>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            Related services:{" "}
            <Link className="font-bold text-blue-700 hover:text-blue-900" href="/en/led-screen-rental">
              LED Screen Rental
            </Link>{" "}
            •{" "}
            <Link className="font-bold text-blue-700 hover:text-blue-900" href="/en/sound-light-rental">
              Sound &amp; Lighting Systems
            </Link>{" "}
            •{" "}
            <Link className="font-bold text-blue-700 hover:text-blue-900" href="/en/stage-rental">
              Stage Rental
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== PAGE ================== */
export default function Page() {
  return (
    <main>
      {/* JSON-LD */}
      <TrussJsonLd />

      {/* Breadcrumb JSON-LD */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: ORIGIN },
          { name: "Truss Rental", url: PAGE_URL },
        ]}
      />

      <Hero />
      <Content />
      <Gallery />
      <Technical />
      <FAQ />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/pmgc-dunya-finali-sahne-arkasi",
            label: "PMGC World Finals Behind the Scenes",
          },
          {
            href: "/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi",
            label: "National Space Program Launch: Engineering Reflection",
          },
        ]}
      />
      <Offer />
    </main>
  );
}
