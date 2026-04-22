// app/en/blog/product-launch-event-organization/page.jsx
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONSTANTS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "product-launch-event-organization";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const PUBLISH_DATE = "2026-03-26T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/product-launch-event-organization/page.jsx", "2026-03-26T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva Editorial Team";
const HERO_IMAGE = "/img/kurumsal/lansman.webp";
const FEATURED_IMAGE = HERO_IMAGE;
const OG_IMAGE = HERO_IMAGE;
const IMAGES = null;
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I'd like to get a quote for a product launch.");

/* ================== META DATA ================== */
export const metadata = {
  title: "Product Launch Event Organization",
  description:
    "Stage, LED screen, sound-lighting and technical production for product launches. Turnkey setup and operation across Turkey.",
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "Product Launch Event Organization | Sahneva",
    description:
      "A flawless product launch with Sahneva: stage design, LED screen, sound-lighting, live broadcast and 360° visual experience solutions.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Product launch event organization – professional stage and LED screen production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Launch Event Organization | Sahneva",
    description: "A flawless product launch event organization with Sahneva.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  keywords: [
    "product launch",
    "launch event organization",
    "corporate launch",
    "stage rental launch",
    "LED screen launch",
    "event production",
    "launch stage design",
    "live broadcast launch",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
};

/* ================== FAQ DATA ================== */
const FAQ_ITEMS = [
  {
    question: "Is the technical site survey before the launch free of charge?",
    answer:
      "Yes, we offer our on-site technical survey service free of charge before project scoping.",
  },
  {
    question: "Do you organize hybrid (both in-person and online) launches?",
    answer:
      "Yes, with our robust internet infrastructure and multi-camera direction system, we can broadcast your launch live to the entire world simultaneously.",
  },
  {
    question: "Do you only rent equipment, or do you also provide crew support?",
    answer:
      "We are a production solutions partner. Along with the equipment, we also deploy our expert technical crew to manage the entire process.",
  },
];

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");

  const orgId = `${site}/#org`;
  const editorId = `${site}/#editor`;

  const modified =
    typeof MODIFIED_DATE !== "undefined" && MODIFIED_DATE ? MODIFIED_DATE : PUBLISH_DATE;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata?.title || "Blog Post",
        description: metadata?.description,
        image: `${site}${HERO_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
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
    { name: "Product Launch Event Organization", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Product Launch", "Corporate Production"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="5–7 min read"
        currentSlug={SLUG}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/en/stage-rental", label: "Stage Rental", icon: "🎭" },
          { href: "/en/led-screen-rental", label: "LED Screen", icon: "🟦" },
          { href: "/en/corporate-events", label: "Corporate Events", icon: "🏢" },
        ]}
        whatsappUrl={WA_URL}
      >

        <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
          <p className="text-lg text-gray-700 font-medium italic m-0">
            A product launch is the critical moment when your brand's new story begins. The
            lasting impact of this moment is directly tied not only to the product being
            presented, but also to the technical quality of the presentation itself.
          </p>
        </div>

        <p>
          As Sahneva, with 10+ years of experience gained since 2012 and over 1,200 successful
          projects, we never leave this critical moment to chance. We deliver flawless technical
          production solutions across Turkey.
        </p>

        <h2 id="technical-excellence">1. Why Technical Excellence?</h2>
        <p>
          When everything is going smoothly at a launch, a crackling sound or a minor image
          glitch on the screen can damage brand perception within seconds. Technical
          infrastructure at launches is far more critical than décor or catering — because light
          manages emotion and sound conveys the message.
        </p>

        <ul>
          <li>
            <strong>Strategic Stage Design:</strong> Modular, safety-compliant structures that
            center the product and align with your brand colors.
          </li>
          <li>
            <strong>Crystal-Clear Imagery:</strong> High-resolution LED screens at P2 and P3
            pixel pitch delivering impressive visuals even from the closest distances.
          </li>
          <li>
            <strong>Acoustic Engineering:</strong> Professional line array speaker systems that
            deliver equally clear sound from every point in the venue.
          </li>
          <li>
            <strong>Dramatic Lighting Scenarios:</strong> DMX-controlled professional light shows
            that build excitement to its peak the moment the product is revealed.
          </li>
        </ul>

        <h2 id="launch-solutions">2. Sahneva Launch Solutions: End-to-End Professionalism</h2>

        <h3>🎭 Stage and Technical Infrastructure</h3>
        <p>
          With our professional <Link href="/en/stage-rental">stage rental</Link> service
          available across Turkey, we transform venues of every scale into a showpiece. We keep
          safety at the forefront at all times with aluminum truss systems, safety barriers and
          engineering-approved installations.
        </p>

        <h3>📺 Visual Storytelling (LED Screen)</h3>
        <p>
          Product videos — the heart of the launch — come to life on our{" "}
          <Link href="/en/led-screen-rental">LED screens</Link> with 4500+ nit brightness. We
          don't just project images; with 360° laser-LED synchronization, we invite
          attendees into your brand's world.
        </p>

        <h3>🔊 Sound, Lighting and Direction Management</h3>
        <p>
          We manage the entire process from site survey to teardown. With{" "}
          <Link href="/en/sound-light-rental">live mixing</Link> and our experienced direction
          crew, we ensure the launch flow runs exactly as rehearsed — flawlessly, to the second.
        </p>

        <h3>🏕️ Prestigious Outdoor Solutions (Tent &amp; Dome)</h3>
        <p>
          If you're looking for an extraordinary venue, we create a prestigious atmosphere
          even outdoors with transparent <Link href="/en/tent-rental">tents</Link> and pneumatic
          dome structures capable of 360° projection mapping.
        </p>

        <h2 id="launch-timeline">3. Launch Timeline: Step by Step to Success</h2>

        <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm text-left bg-white min-w-[600px]">
            <caption className="sr-only">Launch Event Organization Timeline</caption>
            <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
              <tr>
                <th scope="col" className="p-4 font-bold">Phase</th>
                <th scope="col" className="p-4 font-bold">Process</th>
                <th scope="col" className="p-4 font-bold">Sahneva's Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Strategy &amp; Concept</th>
                <td className="p-4">T-60 Days</td>
                <td className="p-4">Venue selection and technical needs analysis.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Technical Survey</th>
                <td className="p-4">T-45 Days</td>
                <td className="p-4">Acoustic check, electrical load and floor analysis.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Design &amp; Planning</th>
                <td className="p-4">T-30 Days</td>
                <td className="p-4">3D stage design and lighting scenario creation.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Setup &amp; Testing</th>
                <td className="p-4">T-2 Days</td>
                <td className="p-4">System installation and full equipment stress testing.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Rehearsal</th>
                <td className="p-4">T-1 Day</td>
                <td className="p-4">Sound, lighting and presentation synchronization (General Rehearsal).</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <th scope="row" className="p-4 font-bold text-blue-600">Launch Day</th>
                <td className="p-4">D-Day</td>
                <td className="p-4">Live direction, operations management and real-time crisis control.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="why-sahneva">4. Why Choose Sahneva?</h2>

        <ul>
          <li>
            <strong>Nationwide Service:</strong> Operational capability with the same high quality
            standards in all 81 provinces of Turkey.
          </li>
          <li>
            <strong>Premium Inventory:</strong> A continuously updated, well-maintained fleet of
            the latest technology equipment.
          </li>
          <li>
            <strong>Crisis Management:</strong> A solution-oriented, composed technical team with
            10+ years of on-site experience.
          </li>
          <li>
            <strong>Corporate Assurance:</strong> Contracted work and insured equipment support.
          </li>
        </ul>

        <div className="not-prose my-12 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gray-900 text-white p-5 flex justify-between items-center">
            <span className="font-bold flex items-center gap-2 text-lg">📂 Success Story</span>
            <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full tracking-wide uppercase">Real Project</span>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              At the 2021 National Space Program Launch at Beştepe Congress Center, we made a
              technical contribution to one of Turkey's most important vision projects with
              our pneumatic dome structure and 360° synchronized technology solutions.
            </p>
            <Link
              href="/en/blog/national-space-program-launch-engineering-reflex"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Explore the Project Details →
            </Link>
          </div>
        </div>

        <h2 id="faq">5. Frequently Asked Questions</h2>
        <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
          <h3 id="faq-heading" className="sr-only">Frequently Asked Questions</h3>
          {FAQ_ITEMS.map((item, index) => (
            <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200">
              <summary
                className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors"
              >
                {item.question}
                <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-600">▼</span>
              </summary>
              <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                {item.answer}
              </div>
            </details>
          ))}
        </section>

        <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Ready to Bring Your Brand to the Stage?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
            Let us take your product launch beyond an ordinary event and transform it into a
            truly unforgettable experience. Leave the technical details and the stress to us —
            you simply enjoy your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Request a quote via WhatsApp — opens in new tab"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>💬</span> Message on WhatsApp
            </a>
            <a href="tel:+905453048671" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
              <span>📞</span> Call Now
            </a>
            <a href="mailto:info@sahneva.com" className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
              <span>✉️</span> Send an Email
            </a>
          </div>
        </div>

        <BlogRelatedLinks
          services={[
            { href: "/en/corporate-events", label: "Corporate Events" },
            { href: "/en/stage-rental", label: "Stage Rental" },
            { href: "/en/led-screen-rental", label: "LED Screen Rental" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
