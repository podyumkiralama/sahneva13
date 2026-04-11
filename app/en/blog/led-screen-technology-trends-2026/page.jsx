// app/en/blog/led-screen-technology-trends-2026/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import stageWideImg from "@/public/img/blog/led-2026-sahne-genis.webp";
import cobMacroImg from "@/public/img/blog/cob-led-macro.webp";
import pixelPitchComparison from "@/public/img/blog/pixel-pitch-karsilastirma.webp";
import cobSmdComparison from "@/public/img/blog/cob-smd-yapisal-fark.webp";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONFIGURATION & CONSTANTS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const SLUG = "led-screen-technology-trends-2026";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const LED_SERVICE_PATH = "/en/led-screen-rental";
const LED_SERVICE_URL = `${SITE_URL}${LED_SERVICE_PATH}`;

const FEATURED_IMAGE = "/img/blog/led-2026-hero.webp";

const PUBLISH_DATE = "2025-12-15T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/led-screen-technology-trends-2026/page.jsx", "2026-02-09T00:00:00+03:00");

const AUTHOR_NAME = "Sahneva Editorial Team";

const WHATSAPP_NUMBER = "905453048671";
const LEADMAGNET_MSG = encodeURIComponent(
  "Hello, I'd like to receive the LED Screen Technical Quote Checklist PDF. I can also share the event type, venue size and viewing distance."
);
const LEADMAGNET_WA = `https://wa.me/${WHATSAPP_NUMBER}?text=${LEADMAGNET_MSG}`;

const HERO_IMAGE = FEATURED_IMAGE;
const OG_IMAGE = FEATURED_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/en/stage-rental";
const PODIUM_SERVICE_PATH = "/en/podium-rental";
const WA_URL = LEADMAGNET_WA;

/* ================== META DATA ================== */
export const metadata = {
  title: "2026 LED Screen Trends: COB and Stage Design",
  description:
    "2026 LED screen trends: COB panels, ultra-low pixel pitch, HDR stage design. Technical guide and innovations for launches, festivals and corporate events.",
  alternates: {
    canonical: BLOG_URL,
    languages: { "tr-TR": `${SITE_URL}/blog/led-ekran-teknoloji-trendleri-2026`, "en-US": BLOG_URL, "x-default": BLOG_URL },
  },
  image: FEATURED_IMAGE,
  openGraph: {
    title: "2026 LED Screen Technology Trends and Event Design | Sahneva",
    description:
      "How are event stages transforming in 2026 with COB LED panels, 2nd-generation drivers and HDR content production?",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "LED screen technology trends 2026 – COB panel, fine pitch and HDR stage design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 LED Screen Technology Trends",
    description:
      "A new era in stage design with COB LED, fine pixel pitch and HDR content.",
    images: [`${SITE_URL}${FEATURED_IMAGE}`],
  },
  keywords: [
    "LED screen trends 2026",
    "COB LED panel",
    "fine pitch LED",
    "HDR LED screen",
    "3840Hz refresh rate",
    "event LED screen rental",
    "stage LED screen design",
    "LED screen rental prices",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "LED Screen Rental",
  },
};

/* ================== FAQ DATA ================== */
const FAQ_ITEMS = [
  {
    question: "What is the key difference between a COB LED panel and an SMD LED panel?",
    answer:
      "In COB (Chip on Board) LED panels, the LED chips are integrated on a single surface, providing more homogeneous light, higher contrast and a more durable screen surface. In SMD panels, each pixel consists of three separate LED components.",
  },
  {
    question: "What is the ideal pixel pitch for indoor stages in 2026?",
    answer:
      "For corporate events, launches and near-broadcast work, the P1.9–P2.6 range is generally preferred. At viewing distances of 6–20 metres, it delivers a sharp image for both cameras and audience.",
  },
  {
    question: "Does HDR-capable LED screen really make a difference?",
    answer:
      "Yes. HDR-capable LED screens create a more realistic perception, especially in product launches, through deep blacks and vivid colour transitions. The effect becomes pronounced with professional content production and correct calibration.",
  },
  {
    question: "What technical information must I request when getting an LED screen quote?",
    answer:
      "Pixel pitch, refresh rate (3840Hz+ recommended), panel type (COB/SMD), brightness (cd/m²), spare panel stock, installation time and content resolution/FPS recommendation should all be clearly stated in writing.",
  },
  {
    question: "What kind of solutions does Sahneva offer in line with 2026 trends?",
    answer:
      "Sahneva provides fine-pitch indoor panels, LED screen systems with high refresh rates, colour calibration, media server integration and a complete stage–sound–lighting infrastructure on a turnkey basis.",
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
        mentions: [{ "@type": "WebPage", "@id": LED_SERVICE_URL }],
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

/* ================== UI COMPONENTS ================== */
const InfoBox = ({ icon, title, children, variant = "info" }) => {
  const styles =
    variant === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-900"
      : "bg-blue-50 border-blue-200 text-blue-900";

  const titleText = variant === "warn" ? "Warning" : "Pro Tip";

  return (
    <div className={`not-prose border rounded-2xl p-6 ${styles}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none" aria-hidden="true">
          {icon}
        </span>
        <div>
          <p className="m-0 font-black text-base">
            {title || titleText}
          </p>
          <div className="mt-2 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

/* ================== PAGE ================== */
export default function LedTrends2026Page() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: "2026 LED Screen Technology Trends", url: BLOG_URL },
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
        readTime="3\u20135 min read"
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

                <div className="bg-blue-50/60 p-6 rounded-xl border-l-4 border-blue-500 mb-8 not-prose">
                  <p className="text-lg text-gray-700 font-semibold italic m-0">
                    "Any LED screen will do" is over. In 2026, brands demand pixel pitch, driver technology, HDR support and camera-friendly flicker performance all at once.
                  </p>
                  <p className="text-sm text-gray-600 mt-3 mb-0">
                    This guide has been prepared to help you build a technical checklist before requesting a quote and make the right comparisons during the{" "}
                    <Link href={LED_SERVICE_PATH}>LED screen rental</Link>{" "}
                    process.
                  </p>
                </div>

                <p>
                  You may be planning a major launch, a global dealer conference or a hybrid congress. The LED screen is the most visible element of the stage; that is why, during the selection process, you need to read not just square footage but also technical criteria such as{" "}
                  <strong>pixel pitch, refresh rate and content compatibility</strong> correctly.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src={stageWideImg}
                    alt="Modern corporate stage with wide LED screen and lighting design"
                    width={stageWideImg.width}
                    height={stageWideImg.height}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
                    In 2026 stage designs, the LED screen is at the centre of the story, not the décor.
                  </figcaption>
                </figure>

                <h2 id="fine-pitch">1. The Fine-Pitch and P1.x Era</h2>
                <p>
                  On indoor stages, the <strong>P1.5–P2.6</strong> range is now the new normal. A lower pixel pitch means sharper text and clearer graphics at the same stage size.
                  The difference becomes even more visible on jobs with camera coverage.
                </p>

                <InfoBox icon="⚠️" title="Warning" variant="warn">
                  Renting an HDR panel and using SDR content wastes your budget. If you want HDR, content production must also be built to an HDR pipeline.
                </InfoBox>

                <figure className="my-10 not-prose">
                  <Image
                    src={pixelPitchComparison}
                    alt="General comparison image representing fine-pitch and wider pixel pitch on LED screens"
                    width={pixelPitchComparison.width}
                    height={pixelPitchComparison.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg border border-gray-100"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
                    As pixel pitch decreases, text and details appear sharp even at close range.
                  </figcaption>
                </figure>

                <h2 id="cob-led">2. COB LED 2.0: Durability and Black Level</h2>
                <p>
                  In COB (Chip on Board) panels, the LED chips are in an integrated structure under a protective layer. This provides both more homogeneous light and better durability.
                  The black level (contrast) advantage is especially strong for premium indoor stages.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src={cobMacroImg}
                    alt="Close-up view of a COB LED panel surface"
                    width={cobMacroImg.width}
                    height={cobMacroImg.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
                    COB LED panels offer an advantage in reflection control and black level thanks to their smooth surface structure.
                  </figcaption>
                </figure>

                <figure className="my-10 not-prose">
                  <Image
                    src={cobSmdComparison}
                    alt="Comparison image representing COB and SMD LED structural difference"
                    width={cobSmdComparison.width}
                    height={cobSmdComparison.height}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg border border-gray-100"
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
                    COB surface structure reduces damage risk; SMD is more common for outdoor use.
                  </figcaption>
                </figure>

                <h2 id="hdr">3. HDR Content and Colour Calibration</h2>
                <p>
                  HDR is not just "brighter": it means a wider dynamic range, more accurate tone transitions and deeper blacks.
                  The effect is maximised on stage when combined with <strong>calibration</strong> and content production.
                </p>

                <div className="not-prose my-10 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-2xl" aria-hidden="true">🎨</span>
                    3-Step Workflow for HDR
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                    <li>Obtain colour profile / recommended values from the technical team for the panel brand/model.</li>
                    <li>Give the content agency the LUT / profile target (do not waste an HDR panel with SDR content).</li>
                    <li>Carry out live calibration on stage after installation (shared optimum for both camera and eye).</li>
                  </ol>
                </div>

                {/* CASE STUDY */}
                <h2 id="case-study">Case Study: LED Selection at a 2025 Corporate Launch</h2>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 my-8">
                  <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
                    <div className="max-w-2xl">
                      <p className="m-0 text-gray-900 font-black text-lg">
                        Scenario: 600-person venue + live broadcast + product launch
                      </p>
                      <p className="mt-2 mb-0 text-sm text-gray-700">
                        Goal: Reduce camera banding/flicker risk, achieve premium black level and sharp typography on stage.
                      </p>
                      <ul className="mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
                        <li>Recommendation: Fine-pitch (P2.x) + 3840Hz+ driver</li>
                        <li>Content: HDR pipeline + on-stage calibration</li>
                        <li>Risk mitigation: Spare panels + rapid response plan</li>
                      </ul>
                    </div>
                    <div className="w-full md:w-64">
                      <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
                        <p className="m-0 text-xs uppercase tracking-wide text-gray-500 font-bold">
                          Result
                        </p>
                        <p className="mt-2 mb-0 text-sm text-gray-800">
                          Reduced camera flicker risk + sharper text + a more "premium" stage perception.
                        </p>
                        <Link
                          href={LED_SERVICE_PATH}
                          className="mt-4 inline-flex items-center justify-center w-full rounded-xl bg-gray-900 hover:bg-black text-white font-semibold px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
                        >
                          Get a quote for a similar setup
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COMPARISON TABLE */}
                <h2 id="comparison">2026 Panel Comparison</h2>
                <p>
                  Compare quotes using criteria like the ones below rather than on "m²" alone. This way you choose the most suitable panel within the same budget.
                </p>

                <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm text-left bg-white min-w-[760px]">
                    <caption className="sr-only">2026 LED panel comparison table</caption>
                    <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
                      <tr>
                        <th scope="col" className="p-4 font-black">Criterion</th>
                        <th scope="col" className="p-4 font-black">P1.5</th>
                        <th scope="col" className="p-4 font-black">P2.6</th>
                        <th scope="col" className="p-4 font-black">COB (indoor)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-gray-900">Viewing distance</th>
                        <td className="p-4">Very close</td>
                        <td className="p-4">Medium</td>
                        <td className="p-4">Close–medium</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-gray-900">Camera suitability</th>
                        <td className="p-4">⭐⭐⭐⭐⭐</td>
                        <td className="p-4">⭐⭐⭐⭐</td>
                        <td className="p-4">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-gray-900">Durability</th>
                        <td className="p-4">⭐⭐⭐</td>
                        <td className="p-4">⭐⭐⭐</td>
                        <td className="p-4">⭐⭐⭐⭐⭐</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-gray-900">Corporate use</th>
                        <td className="p-4">Premium</td>
                        <td className="p-4">Value/Performance</td>
                        <td className="p-4">Premium+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* MISTAKES */}
                <h2 id="mistakes">5 Critical Mistakes When Choosing an LED Screen in 2026</h2>
                <div className="not-prose bg-white border border-gray-200 rounded-2xl p-6 md:p-8 my-8 shadow-sm">
                  <ol className="list-decimal list-inside space-y-3 text-sm text-gray-800">
                    <li>
                      <strong>Requesting quotes based on m² only:</strong> A quote that does not state pixel pitch / refresh rate cannot be compared.
                    </li>
                    <li>
                      <strong>Not accounting for camera angles:</strong> If there is a live broadcast, 3840Hz+ and correct calibration are essential.
                    </li>
                    <li>
                      <strong>HDR panel + SDR content:</strong> If content production is not built to an HDR pipeline, the effect is lost.
                    </li>
                    <li>
                      <strong>Not asking about spare panels and a response plan:</strong> Without risk management, a minor fault turns into a major loss.
                    </li>
                    <li>
                      <strong>Not planning installation time realistically:</strong> Stage integration (sound/lighting) must be planned together.
                    </li>
                  </ol>
                </div>

                {/* BUDGET */}
                <h2 id="budget">How Is an LED Screen Budget Broken Down?</h2>
                <p>
                  The answer to "why is the price like this?" is usually hidden in the breakdown of line items. Typical breakdown on 2026 projects:
                </p>

                <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  {[
                    { k: "45%", v: "LED panels (pixel pitch + quality)" },
                    { k: "20%", v: "Installation & technical crew" },
                    { k: "15%", v: "Media server / content compatibility & signal chain" },
                    { k: "10%", v: "Spare panels / contingency" },
                    { k: "10%", v: "Stage integration (sound/lighting/rigging)" },
                  ].map((x) => (
                    <div key={x.k + x.v} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                      <div className="text-2xl font-black text-gray-900">{x.k}</div>
                      <p className="mt-2 mb-0 text-sm text-gray-700">{x.v}</p>
                    </div>
                  ))}
                </div>

                <p>
                  Rather than simply asking about price when requesting a quote, clarify what is included under each of these line items. While you are here, you can also review the installation, crew and technical operation scope from our{" "}
                  <Link href={LED_SERVICE_PATH}>LED screen rental</Link>{" "}
                  page.
                </p>

                {/* CHECKLIST + LEAD MAGNET */}
                <h2 id="technical-checklist">Technical Checklist + PDF</h2>
                <div className="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 my-8 space-y-4">
                  <p className="m-0 text-sm text-gray-800 font-semibold">
                    If the following are not clearly stated in your quote document, ask for them in writing:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                    <li>LED panel brand/model</li>
                    <li>Pixel pitch (P1.5 / P1.9 / P2.6, etc.)</li>
                    <li>Refresh rate (3840Hz+ recommended)</li>
                    <li>Brightness (cd/m²) + indoor/outdoor class</li>
                    <li>Spare panel stock + fault response plan</li>
                    <li>Content resolution / FPS recommendation</li>
                  </ul>

                  <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                    <a
                      href={LEADMAGNET_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Request LED screen technical quote checklist PDF via WhatsApp – opens in new tab"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                    >
                      <span aria-hidden="true">📄</span>
                      Request Checklist PDF via WhatsApp
                    </a>

                    <Link
                      href={LED_SERVICE_PATH}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold px-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
                    >
                      <span aria-hidden="true">🖥️</span>
                      Get an LED Screen Rental Quote
                    </Link>
                  </div>

                  <InfoBox icon="💡" title="Pro Tip">
                    When comparing quotes, you cannot measure "panel quality" on its own: <strong>panel + driver + content + calibration</strong> must all be evaluated together.
                  </InfoBox>
                </div>

                {/* FAQ */}
                <h2 id="faq">Frequently Asked Questions</h2>
                <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
                  <h3 id="faq-heading" className="sr-only">
                    Frequently asked questions about LED screen trends
                  </h3>
                  {FAQ_ITEMS.map((item, index) => (
                    <details
                      key={index}
                      className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200"
                    >
                      <summary
                        className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors"
                      >
                        {item.question}
                        <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-600">
                          ▼
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </section>

                {/* FINAL CTA */}
                <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                  <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">
                    Let's Design Your 2026 LED Screen Project Together
                  </h3>
                  <p className="text-blue-100 mb-6 max-w-xl mx-auto relative z-10 text-lg">
                    Let us elevate your stage to a premium level with fine-pitch LED, COB, high refresh rates and the right content production.
                  </p>

                  <p className="text-blue-100 max-w-xl mx-auto relative z-10 text-sm mb-6">
                    You can review{" "}
                    <Link
                      href={LED_SERVICE_PATH}
                      className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white"
                    >
                      our LED screen rental solutions
                    </Link>{" "}
                    and clarify the right panel/installation plan for your project.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <a
                      href={LEADMAGNET_WA}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get a quick quote via WhatsApp – opens in new tab"
                      className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
                    >
                      <span aria-hidden="true">💬</span> Message on WhatsApp
                    </a>
                    <a
                      href="tel:+905453048671"
                      className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
                    >
                      <span aria-hidden="true">📞</span> Call Now
                    </a>
                  </div>
                </div>

                <BlogRelatedLinks
                  services={[
                    { href: "/en/led-screen-rental", label: "LED Screen Rental" },
                    { href: "/en/stage-rental", label: "Stage Rental" },
                  ]}
                />
      </BlogLayout>
    </>
  );
}
