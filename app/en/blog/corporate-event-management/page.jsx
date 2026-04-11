// app/en/blog/corporate-event-management/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONFIG & CONSTANTS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const BLOG_URL = `${SITE_URL}/en/blog/corporate-event-management`;
const PUBLISH_DATE = "2025-12-15T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/corporate-event-management/page.jsx", "2026-02-08T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva Editorial Team";
const HERO_IMAGE = "/img/blog/kurumsal-etkinlik-hero.webp";
const FEATURED_IMAGE = HERO_IMAGE;
const OG_IMAGE = HERO_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/en/stage-rental";
const PODIUM_SERVICE_PATH = "/en/podium-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I'd like to get a quote for my project.");

/* ================== META DATA ================== */
export const metadata = {
  title: "Corporate Event Management and Technical Rental Guide",
  description:
    "Stage, podium, LED screen, sound-lighting and tent rental guide for seamless corporate events. Tips for launches and dealer meetings.",
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": `${SITE_URL}/blog/kurumsal-etkinlik-yonetimi`,
      "en-US": BLOG_URL,
      "x-default": BLOG_URL,
    },
  },
  image: HERO_IMAGE,
  openGraph: {
    title: "Corporate Event Management: Technical Rental Guide | Sahneva",
    description:
      "Professional technical solutions guide focused on stage, LED screen, sound-lighting and tent rental for launches, dealer meetings and corporate events.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Corporate event management – professional event organisation and technical production guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Management Guide",
    description: "Technical planning tips for your corporate events.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  keywords: [
    "corporate event management",
    "stage rental",
    "LED screen rental",
    "sound lighting system",
    "tent rental",
    "event organisation",
    "dealer meeting",
    "technical production",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
};

/* ================== FAQ DATA ================== */
const FAQ_ITEMS = [
  {
    question: "How far in advance should technical planning start for a corporate event?",
    answer:
      "Ideally, planning should begin at least 2–3 months in advance. Having enough time to survey the venue, determine stage and LED screen dimensions, calculate sound-lighting needs and create contingency plans both reduces budget overruns and minimises last-minute problems.",
  },
  {
    question: "What is the minimum technical equipment required for corporate events?",
    answer:
      "Although it varies by event type, the basic needs are generally a stage or podium, a sound system (speakers, microphones, mixer), an LED screen or projection for visual presentations, stage lighting and, if needed, tent and air-conditioning systems.",
  },
  {
    question: "Should I choose an LED screen or projection?",
    answer:
      "LED screens are usually preferred for brightly lit venues, large-scale and prestigious corporate events because they offer high brightness and contrast. Projection can be used in smaller, darker venues, but LED screens are more powerful for brand perception.",
  },
  {
    question: "Is a tent mandatory for outdoor corporate events?",
    answer:
      "It is not mandatory, but it is strongly recommended to reduce weather-related risks. Professional tent systems combined with floor covering, lighting and heating/cooling bring outdoor events to five-star hotel comfort.",
  },
  {
    question: "What technical services does Sahneva offer for corporate events?",
    answer:
      "Sahneva manages the entire technical process turnkey: from stage and podium installation to LED screens, from sound-lighting systems to truss and rigging infrastructure, from tent and floor covering to generator support.",
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
        image: `${site}/img/blog/kurumsal-etkinlik-hero.webp`,
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

/* ================== MAIN PAGE ================== */
export default function BlogPostCorporate() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: "Corporate Event Management", url: BLOG_URL },
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
        currentSlug={BLOG_URL.split("/").pop()}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/en/stage-rental"), label: "Stage Rental", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/en/podium-rental"), label: "Podium Rental", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/en/led-screen-rental"), label: "LED Screen", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

                
                <div className="bg-blue-50/50 p-6 rounded-xl border-l-4 border-blue-500 mb-8">
                  <p className="text-lg text-gray-700 font-medium italic m-0">
                    <Link href="/en/corporate-events">Corporate events</Link> are the most powerful stages where a company showcases its vision to stakeholders. The invisible hero behind this stage is a well-planned <strong>technical infrastructure</strong>.
                  </p>
                </div>

                <p>
                  You may be organising a product launch, an end-of-year awards ceremony or a dealer gathering. No matter how strong the content is, a technical glitch can turn perceptions negative within seconds. That is why technical planning is more critical than décor and catering.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-sahne-genel.webp"
                    alt="Corporate launch stage, LED screen and podium installation"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                  <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
                    Holistic stage design at a corporate launch strengthens brand perception.
                  </figcaption>
                </figure>

                {/* Pro Tip Box */}
                <div className="my-10 bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm not-prose">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0" aria-hidden="true">💡</span>
                    <div>
                      <h4 className="text-blue-900 font-bold mt-0 mb-2 text-lg">Professional Tip</h4>
                      <p className="mb-2 text-blue-800 text-base">
                        Starting event planning <strong>at least 2–3 months in advance</strong> and conducting a site survey jointly with the technical supplier:
                      </p>
                      <ul className="text-blue-800 list-disc pl-5 space-y-1 text-sm m-0">
                        <li className="m-0">Reduces budget overruns by 20%.</li>
                        <li className="m-0">Prevents electrical and stage size problems.</li>
                        <li className="m-0">Enables you to build a solid Plan B.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 id="sahne-podyum">1. Designing the Focal Point: Stage and Podium</h2>
                <p>
                  The heart of every event is the stage. The area where speakers and dignitaries stand must be visible from every point in the venue, safe and aesthetically pleasing. Getting a <Link href="/en/stage-rental">stage rental</Link> service built with TÜV-certified systems that match your corporate identity is foundational.
                </p>
                <p>
                  Especially for speech-heavy events, modular <Link href="/en/podium-rental">podium rental</Link> solutions come into play to allow dignitaries to move comfortably. A carpet-covered, skirted and secure podium gives speakers confidence.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-podyum-detay.webp"
                    alt="Protocol podium and stage detail at a corporate event"
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <h2 id="led-ekran">2. Visual Impact: LED Screen Technologies</h2>
                <p>
                  Corporate events are now remembered not only by what is said, but also by what is shown on screens. Projection devices have been replaced by high-brightness <Link href="/en/led-screen-rental">LED screen rental</Link> solutions.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp"
                    alt="Wide LED screen stage at a corporate event"
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                {/* Accessible Table */}
                <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm text-left bg-white min-w-[600px]">
                    <caption className="sr-only">LED Screen Selection Table</caption>
                    <thead className="bg-gray-50 text-gray-700 uppercase tracking-wider text-xs border-b">
                      <tr>
                        <th scope="col" className="p-4 font-bold">Pixel Pitch</th>
                        <th scope="col" className="p-4 font-bold">Ideal Distance</th>
                        <th scope="col" className="p-4 font-bold">Usage Area</th>
                        <th scope="col" className="p-4 font-bold">Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-blue-600">P2.9</th>
                        <td className="p-4">3m+</td>
                        <td className="p-4">Indoor (Launch)</td>
                        <td className="p-4 text-gray-600">$$$</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-blue-600">P3.9</th>
                        <td className="p-4">4m+</td>
                        <td className="p-4">Indoor (Conference)</td>
                        <td className="p-4 text-gray-600">$$</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <th scope="row" className="p-4 font-bold text-blue-600">P4.8</th>
                        <td className="p-4">5m+</td>
                        <td className="p-4">Indoor/Outdoor</td>
                        <td className="p-4 text-gray-600">$</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 id="ses-isik">3. Managing Emotion: Sound and Lighting</h2>
                <p>
                  "We can't hear you!" is every event organiser's nightmare. Line-array speaker systems and digital mixers ensure your message is delivered clearly. But hearing alone is not enough — you need to feel it. With robot lights and follow spots, you can transform an ordinary hall into a show venue with an experienced <Link href="/en/sound-light-rental">sound lighting system rental</Link> service.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-ses-backstage.webp"
                    alt="Sound mixing desk and lighting control at a corporate event"
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <h2 id="kurumsal-cadir">4. Venue Independence: Corporate Tents</h2>
                <p>
                  Weather is the biggest risk at outdoor events. Professional <Link href="/en/tent-rental">tent rental</Link> systems, combined with floor covering and climate control, offer five-star comfort in the open air.
                </p>

                <figure className="my-10 not-prose">
                  <Image
                    src="/img/blog/kurumsal-etkinlik-cadir.webp"
                    alt="Corporate event tent"
                    width={1200}
                    height={750}
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="w-full h-auto rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <h2 id="teknik-prova">5. Technical Rehearsal and Event Day Flow</h2>
                <p>
                  No matter how powerful the technical equipment is, no installation without a <strong>rehearsal</strong> provides full confidence. For corporate events, especially speech and video flows must be finalised on rehearsal day.
                </p>
                <ul>
                  <li>All presentation files should be gathered on one computer and tested on the LED screen.</li>
                  <li>Speakers' microphone use, stage entries and exits and where they will stand on stage should be rehearsed.</li>
                  <li>If there is a live stream, the streaming infrastructure should be tested with a trial connection at least 1 day before the event.</li>
                </ul>

                {/* CASE STUDY */}
                <div className="not-prose my-12 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gray-900 text-white p-5 flex justify-between items-center">
                    <span className="font-bold flex items-center gap-2 text-lg">📂 Case Study</span>
                    <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full tracking-wide uppercase">Real Project</span>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">XYZ Automotive - Year-End Dealer Meeting</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-red-50/50 p-4 rounded-xl border border-red-100">
                        <h4 className="text-sm font-bold text-red-600 uppercase mb-3 tracking-wide">Challenges & Needs</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2"><span className="text-red-500">✕</span> Poor acoustics for 800 people</li>
                          <li className="flex gap-2"><span className="text-red-500">✕</span> Complex video mapping request</li>
                          <li className="flex gap-2"><span className="text-red-500">✕</span> 6-hour limited installation time</li>
                        </ul>
                      </div>
                      <div className="bg-green-50/50 p-4 rounded-xl border border-green-100">
                        <h4 className="text-sm font-bold text-green-600 uppercase mb-3 tracking-wide">Sahneva Solution</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex gap-2"><span className="text-green-500">✓</span> Homogeneous sound with 12 Line-Array modules</li>
                          <li className="flex gap-2"><span className="text-green-500">✓</span> 60m² P2 LED Screen with Watchout system</li>
                          <li className="flex gap-2"><span className="text-green-500">✓</span> Delivered in 5 hours with a 14-person technical team</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                      <p className="text-green-800 font-medium text-lg m-0">
                        "Result: Zero technical disruption, 98% participant satisfaction."
                      </p>
                    </div>
                  </div>
                </div>

                <h2 id="butce-planlama">Realistic Budget Planning</h2>
                <p>For proper management of the technical budget, the average distribution is as follows:</p>

                <div className="not-prose bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 space-y-5">
                  {[
                    { label: "Sound and Lighting Systems", pct: 40, w: "40%", color: "bg-blue-600" },
                    { label: "Visuals (LED Screen)", pct: 30, w: "30%", color: "bg-purple-600" },
                    { label: "Stage and Infrastructure", pct: 20, w: "20%", color: "bg-indigo-500" },
                    { label: "Personnel & Logistics", pct: 10, w: "10%", color: "bg-gray-400" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1.5 text-sm font-bold text-gray-700">
                        <span>{item.label}</span>
                        <span>{item.pct}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out`} style={{ width: item.w }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* TECHNOLOGY TRENDS */}
                <div className="not-prose my-10 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="text-2xl">🚀</span> 2025 Technology Trends
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-5 border border-green-100">
                      <h4 className="font-bold text-lg mb-2 text-green-900">AR (Augmented Reality)</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        AR-supported LED screen solutions to transcend physical venue limits at product launches. Guests can examine products in 3D with their phones.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Hybrid Systems</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Integrated sound/lighting/video systems for both physical and online participation. Live stream quality is no longer a luxury, it is the standard.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WARNING BOX */}
                <div className="not-prose my-10 bg-red-50 border border-red-200 rounded-2xl p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="font-bold text-red-800 mb-4 text-lg flex items-center gap-2">
                      ⚠️ 5 Critical Contract Clauses
                    </h4>
                    <ol className="space-y-2 list-decimal list-inside text-sm text-red-900/80 font-medium">
                      <li><strong>Backup Equipment:</strong> 100% redundancy for every critical system.</li>
                      <li><strong>Insurance:</strong> At least £5M professional liability coverage.</li>
                      <li><strong>Timing:</strong> Clear installation/dismantling hours.</li>
                      <li><strong>Technical Team:</strong> Staff count and job descriptions.</li>
                      <li><strong>Cancellation Terms:</strong> Force majeure and refund policy.</li>
                    </ol>
                  </div>
                </div>

                {/* FAQ SECTION */}
                <h2 id="faq">Frequently Asked Questions</h2>
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

                {/* BOTTOM CTA */}
                <div className="not-prose mt-16 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  
                  <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Don&apos;t Leave Your Event to Chance</h3>
                  <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10 text-lg">
                    Let us represent your brand in the best possible way with our professional corporate event solutions. Contact us now for a free consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                    <a
                      href="https://wa.me/905453048671"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Request a quote via WhatsApp — opens in a new tab"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
                    >
                      <span>💬</span> Message on WhatsApp
                    </a>
                    <a href="tel:+905453048671" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
                      <span>📞</span> Call Now
                    </a>
                  </div>
                </div>

                <BlogRelatedLinks
                  services={[
                    { href: "/en/corporate-events", label: "Corporate Events" },
                    { href: "/en/stage-rental", label: "Stage Rental" },
                  ]}
                />
      </BlogLayout>
    </>
  );}
