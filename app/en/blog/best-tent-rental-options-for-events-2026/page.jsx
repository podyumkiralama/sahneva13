// app/en/blog/best-tent-rental-options-for-events-2026/page.jsx
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";

import heroImg from "@/public/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
import clearTopImg from "@/public/img/blog/kurumsal-etkinlik-cadir.webp";
import domeImg from "@/public/img/blog/dome-cadir-ic-mekan.webp";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONFIGURATION & CONSTANTS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const SLUG = "best-tent-rental-options-for-events-2026";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const FEATURED_IMAGE = "/img/blog/pagoda-cadir-kurumsal-etkinlik.webp";
const HERO_IMAGE = FEATURED_IMAGE;
const OG_IMAGE = FEATURED_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/en/stage-rental";
const PODIUM_SERVICE_PATH = "/en/podium-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I'd like to get a quote for my project.");

const PUBLISH_DATE = "2026-02-12T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/best-tent-rental-options-for-events-2026/page.jsx", "2026-02-05T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva Editorial Team";

const TITLE = "2026 Tent Rental Guide: Best Options for Events";
const DESCRIPTION =
  "From corporate events to weddings, from trade fairs to festivals: the 2026 tent rental guide. Quickly learn about the right tent selection, installation process and costs.";

/* ================== META DATA ================== */
export const metadata = {
  title: `${TITLE}`,
  description: DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
    languages: { "tr-TR": `${SITE_URL}/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026`, "en-US": BLOG_URL },
  },
  image: FEATURED_IMAGE,
  openGraph: {
    title: `${TITLE} | Sahneva`,
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "2026 tent rental guide for events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${FEATURED_IMAGE}`],
  },
  keywords: [
    "tent rental",
    "event tent",
    "corporate event",
    "wedding tent",
    "trade fair tent",
    "festival tent",
    "high peak tent",
    "modular tent",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Tent Rental",
  },
};

/* ================== FAQ DATA ================== */
const FAQ_ITEMS = [
  {
    question: "Which tent system is the safest for corporate events?",
    answer:
      "Aluminium construction frame tents are the safest and most technically compatible solution. They provide the ideal load-bearing structure for truss, LED screen and air-conditioning infrastructure.",
  },
  {
    question: "How should a tent be chosen for weddings and special occasions?",
    answer:
      "Clear-top or high-dome systems offer advantages in both aesthetics and ventilation. Ground analysis and wind load calculations must always be carried out.",
  },
  {
    question: "Which tents are preferred at trade fairs and festival sites?",
    answer:
      "High-peak and wide-module tents are suitable for high footfall. They should be considered alongside stand layout planning, fire exit corridors and electrical distribution planning.",
  },
  {
    question: "What affects tent rental costs the most?",
    answer:
      "Square footage, ground conditions, anchoring requirements, air conditioning, LED screen/stage integration and logistics costs are the main determinants of the price.",
  },
];

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");
  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata?.title || "Blog Post",
        description: metadata?.description,
        image: `${site}${FEATURED_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "en-US",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${site}/en/blog#blog` },
      },
      {
        "@type": "FAQPage",
        "@id": `${BLOG_URL}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <JsonLd data={schema} suppressHydrationWarning />;
}

/* ================== PAGE ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: TITLE, url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\\s*\\|\\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Production & Technical", "Event Engineering"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="2\u20134 min read"
        currentSlug={SLUG}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: STAGE_SERVICE_PATH, label: "Stage Rental", icon: "🎭" },
          { href: PODIUM_SERVICE_PATH, label: "Podium Rental", icon: "🧱" },
          { href: LED_SERVICE_PATH, label: "LED Screen", icon: "🟦" },
        ]}
        whatsappUrl={WA_URL}
      >

                <h2 id="why-tent">The invisible guarantee of your event: The tent</h2>
                <p>
                  In outdoor events, everything seems ready: the stage lights shine,
                  the sound is clear, the LED screens are crystal sharp... But suddenly the
                  wind picks up, the ground softens and that "perfect" setup starts to wobble.
                  It is only then that you realise the true unsung hero of the event is the{" "}
                  <strong>tent system</strong>.
                </p>
                <p>
                  The wrong tent choice puts not only comfort at risk, but the entire event's safety.
                  The right tent rental, on the other hand, is the invisible guarantee of the event. As Sahneva
                  Organization, speaking from years of field experience: tent rental is not a canopy job;
                  it is engineering, wind load calculation, ground analysis and operational planning.
                </p>
                <ul>
                  <li>Tent rental</li>
                  <li>Stage installation</li>
                  <li>LED screen systems</li>
                  <li>Sound and lighting integration</li>
                </ul>
                <p>
                  Based in Istanbul Kağıthane, our team provides turnkey services throughout Turkey.
                </p>

                <h2 id="corporate">1️⃣ Corporate Events, Launches and Dealer Meetings</h2>
                <p>
                  Prestige and technical safety must be considered together. The preferred system:
                  aluminium construction frame tents (4–6 m side height).
                </p>
                <ul>
                  <li>Truss systems are integrated without issues.</li>
                  <li>Line array sound systems can be hung.</li>
                  <li>Giant LED screen mounting is carried out safely.</li>
                  <li>Air conditioning and ventilation can be installed.</li>
                </ul>
                <p>
                  Field reality: On one launch project, we installed heavy truss and a 12-metre LED screen in a 300 m² area. Main beams were lifted with a forklift, the ground gradient was measured to the millimetre and anchoring was reinforced with concrete blocks. Not a single vibration occurred under tonnes of load.
                </p>
                <figure>
                  <Image
                    src={heroImg}
                    alt="Pagoda tent installation at corporate events"
                    width={heroImg.width}
                    height={heroImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption>
                    Pagoda and frame systems at corporate events are ideal for truss and LED integration.
                  </figcaption>
                </figure>

                <h2 id="wedding">2️⃣ Weddings, Engagement Parties and Special Occasions</h2>
                <p>
                  Aesthetics matter. But if the technical infrastructure is not solid, that aesthetic becomes a risk.
                  Preferred systems: clear-top tents, high-dome structures and 5–6 m ceiling heights.
                </p>
                <p>These systems are suitable for chandeliers, décor and light hangers; they ensure air circulation.</p>
                <p>
                  Safety detail: At one wedding, during a sudden storm, the evening passed without incident thanks to the ground hardness analysis, wind direction calculation, cross bracing and concrete block anchoring we had carried out in advance.
                </p>
                <figure>
                  <Image
                    src={clearTopImg}
                    alt="Clear-top wedding tent installation"
                    width={clearTopImg.width}
                    height={clearTopImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption>
                    Clear-top tents create a stunning atmosphere for décor and lighting installations.
                  </figcaption>
                </figure>

                <h2 id="fair">3️⃣ Trade Fairs, Exhibitions and Festival Sites</h2>
                <p>
                  Modular systems are essential for large areas and high footfall. Preferred options:
                  high-peak systems, Röder-type wide-module tents and structures from 100–1,000 m².
                </p>
                <ul>
                  <li>Stand layout plan</li>
                  <li>Fire exit corridors</li>
                  <li>Electrical distribution planning</li>
                  <li>Forklift entry/exit area</li>
                </ul>
                <p>
                  Poorly planned logistics can cause hours of delay. For this reason, our teams draw up a detailed technical plan before installation.
                </p>
                <figure>
                  <Image
                    src={domeImg}
                    alt="Wide-module tent example for festival and exhibition sites"
                    width={domeImg.width}
                    height={domeImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption>
                    High-peak and wide-span tents allow you to comfortably manage heavy footfall.
                  </figcaption>
                </figure>

                <h2 id="installation">Professional Tent Installation Process</h2>
                <p>"How long does installation take?" The answer: it depends on the ground, weather and site.</p>
                <div className="not-prose grid gap-4 md:grid-cols-3 my-8">
                  {[
                    {
                      title: "Technical Survey (2–4 Weeks Before)",
                      items: [
                        "Site measurement",
                        "Ground analysis (grass, asphalt, soil)",
                        "Wind direction and speed assessment",
                        "Logistics access planning",
                      ],
                    },
                    {
                      title: "Installation Day Operation",
                      items: [
                        "Forklift / crane positioning",
                        "Main load-bearing beam assembly",
                        "Canvas tensioning",
                        "Side panels and door systems",
                        "Double-check anchoring",
                      ],
                    },
                    {
                      title: "Safety Testing",
                      items: [
                        "Wind load check",
                        "Ground grip test",
                        "Final inspection of connection points",
                      ],
                    },
                  ].map((step) => (
                    <div key={step.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                      <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
                      <ul className="mt-3 space-y-2 text-xs text-gray-600">
                        {step.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p>
                  Large-scale jobs may require a team of 6–12 people, 1–2 forklifts and a full day of operation.
                </p>

                <h2 id="cost">Factors Affecting 2026 Tent Rental Costs</h2>
                <p>Costs vary according to square footage, duration, season, ground conditions and additional requirements.</p>
                <ul>
                  <li>Square footage</li>
                  <li>Ground conditions</li>
                  <li>Additional anchoring requirements</li>
                  <li>Air conditioning and climate control</li>
                  <li>LED screen / stage integration</li>
                  <li>Forklift / crane requirements</li>
                  <li>Logistics outside Istanbul</li>
                </ul>
                <div className="not-prose rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Always ask when requesting a quote:</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Has a technical survey been carried out?</li>
                    <li>• Is there a wind load calculation?</li>
                    <li>• Are health and safety standards applied?</li>
                    <li>• What anchoring method is used?</li>
                  </ul>
                </div>

                <h2 id="risk">The Biggest Risk: Lack of Planning</h2>
                <ul>
                  <li>Insufficient anchoring</li>
                  <li>Incorrect ground analysis</li>
                  <li>Forklift traffic not accounted for</li>
                  <li>Overloading</li>
                </ul>
                <p>Professional service brings risk close to zero.</p>

                <h2 id="conclusion">Conclusion: The Foundation of a Successful Event Is Trust</h2>
                <p>
                  The right tent does not only protect you from the rain; it carries your brand's reputation, the safety of your guests and the effort you have put in. While everyone watches the stage on the event day, behind the scenes the forklift operator performs millimetre-precise manoeuvres, the technical team double-checks connections and wind calculations are reviewed. And you watch with complete peace of mind.
                </p>
                <p className="font-semibold">As Sahneva Organization, we bring the sky safely down to the ground.</p>

                <h2 id="faq">Frequently Asked Questions</h2>
                <div className="not-prose space-y-3">
                  {FAQ_ITEMS.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-2xl border border-gray-200 bg-white p-4"
                    >
                      <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
                    </details>
                  ))}
                </div>
      </BlogLayout>
    </>
  );
}
