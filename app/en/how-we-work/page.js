// app/en/how-we-work/page.js
import HowItWorksClient from "@/app/(tr)/nasil-calisiyoruz/HowItWorksClient";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";

/* ================== SEO METADATA ================== */
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/en/how-we-work";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/nasil-calisiriz/hero-surec.webp`;

export const metadata = {
  title: "How We Work | Sahneva Event Process",
  description:
    "At Sahneva, the process is planned end-to-end: needs analysis, quote, technical survey, installation, and post-event dismantling.",
  alternates: buildLanguageAlternates({
    tr: "/nasil-calisiyoruz",
    en: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "How We Work | Sahneva",
    description: "Needs → quote → survey → installation → event day → dismantling.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "How Sahneva works" }],
    siteName: "Sahneva",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | Sahneva",
    description: "Sahneva process management: quote, survey, installation, event day, dismantling.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

/* ================== JSON-LD ================== */
function HowWeWorkJsonLd({ stepsData, faqs }) {
  const orgId = `${SITE}/#org`;
  const webId = `${SITE}/#website`;
  const pageId = `${PAGE_URL}#webpage`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const howtoId = `${PAGE_URL}#howto`;
  const faqId = `${PAGE_URL}#faq`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": webId,
        url: SITE,
        name: "Sahneva Organization",
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: PAGE_URL,
        name: "How We Work",
        description:
          "At Sahneva, the process is planned end-to-end: needs analysis, quote, technical survey, installation, and dismantling.",
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
        inLanguage: "en-US",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
          { "@type": "ListItem", position: 2, name: "How We Work", item: PAGE_URL },
        ],
      },
      {
        "@type": "HowTo",
        "@id": howtoId,
        name: "Sahneva Event and Rental Process",
        description:
          "How does the event planning, rental, installation, and operations process work with Sahneva? Step-by-step technical production guide.",
        inLanguage: "en-US",
        totalTime: "P3D",
        step: stepsData.map((s) => ({
          "@type": "HowToStep",
          position: s.stepNo,
          name: s.title,
          text: s.plainText,
          url: `${PAGE_URL}#step-${s.stepNo}`,
          image: `${SITE}${s.imageSrc}`,
        })),
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

  return (
    <JsonLdScript data={jsonLd} />
  );
}

export default function HowItWorksPage() {
  const IMG_DIR = "/img/nasil-calisiriz";

  const stepsData = [
    {
      stepNo: 1,
      label: "First contact",
      title: "Needs Form & Initial Contact",
      plainText:
        "Share your needs (LED screen, truss, stage, sound-lighting) with us via the contact form or WhatsApp.",
      imageSrc: `${IMG_DIR}/01-ilk-iletisim.webp`,
      imageAlt: "Initial contact with Sahneva and identifying needs",
    },
    {
      stepNo: 2,
      label: "Expert consultation",
      title: "Expert Consultation & Clarification",
      plainText:
        "Budget, area dimensions, and technical requirements are clarified; a suitable solution draft is prepared.",
      imageSrc: `${IMG_DIR}/02-uzman-gorusmesi.webp`,
      imageAlt: "Needs analysis and planning with a consultant",
    },
    {
      stepNo: 3,
      label: "48 hours later",
      title: "Quote & Proposal Package",
      plainText:
        "A detailed quote is submitted within 48 hours. Tents and table-chair options can be added.",
      imageSrc: `${IMG_DIR}/03-teklif.webp`,
      imageAlt: "Preparation of quote and options",
    },
    {
      stepNo: 4,
      label: "Approval",
      title: "Approval & Reservation",
      plainText:
        "After approval, equipment and team planning are reserved; the installation schedule is finalized.",
      imageSrc: `${IMG_DIR}/04-onay-rezervasyon.webp`,
      imageAlt: "Reservation and team planning after approval",
    },
    {
      stepNo: 5,
      label: "1 month before",
      title: "Survey & Technical Coordination",
      plainText:
        "One month before the event, site access, power, and ground conditions are checked; a technical survey is conducted if necessary.",
      imageSrc: `${IMG_DIR}/05-teknik-kesif.webp`,
      imageAlt: "Technical survey and site coordination",
    },
    {
      stepNo: 6,
      label: "24/48 hours before",
      title: "Installation & Tests",
      plainText:
        "Installation takes place 24-48 hours before the event. Sound-lighting and LED screen tests and safety checks are completed.",
      imageSrc: `${IMG_DIR}/06-kurulum.webp`,
      imageAlt: "On-site installation and testing process",
    },
    {
      stepNo: 7,
      label: "Big day",
      title: "Event Day Management",
      plainText:
        "The operations team manages the process on-site; broadcast, video, and audio streams are monitored without interruption.",
      imageSrc: `${IMG_DIR}/07-etkinlik-gunu.webp`,
      imageAlt: "Event day operations and technical management",
    },
    {
      stepNo: 8,
      label: "24/48 hours after",
      title: "Dismantling & Handover",
      plainText:
        "After the event, dismantling is carried out, equipment is collected, and the area is handed over in an orderly manner.",
      imageSrc: `${IMG_DIR}/08-sokum.webp`,
      imageAlt: "Dismantling and safe collection of equipment",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to prepare a quote?",
      a: "Generally, the quote is delivered the same day or within 24–48 hours after requirements are clarified. For projects requiring a site survey, the timeframe may vary depending on the site plan.",
    },
    {
      q: "Is a site survey mandatory?",
      a: "Not for every project. However, it is recommended for large truss installations and projects where power infrastructure is critical.",
    },
    {
      q: "How many hours before the event does installation take place?",
      a: "Depending on the project size, installation and tests are planned 24–48 hours in advance. Small installations can be completed on the same day.",
    },
    {
      q: "Can I get multiple services at the same time?",
      a: "Yes. We can package items such as stage, truss, sound-lighting, tent, and seating arrangement into a single project.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <HowWeWorkJsonLd stepsData={stepsData} faqs={faqs} />
      <HowItWorksClient stepsData={stepsData} faqs={faqs} />
    </main>
  );
}
