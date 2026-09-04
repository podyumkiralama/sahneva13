// app/en/blog/corporate-event-management/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { buildArticleAuthor } from "@/lib/structuredData/articleIdentity";

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
const ARTICLE_TITLE = "How to Plan the Technical Production of a Corporate Event";

/* ================== META DATA ================== */
export const metadata = {
  title: "Corporate Event Technical Production Guide",
  description:
    "Venue checks, stage design, LED screens, sound, lighting, rigging, power, rehearsal and backup planning for professional corporate events.",
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
    title: "Corporate Event Technical Production Guide | Sahneva",
    description:
      "Venue checks, stage design, LED screens, sound, lighting, rigging, power, rehearsal and backup planning for professional corporate events.",
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
    title: "Corporate Event Technical Production Guide",
    description:
      "Venue, stage, LED, sound, lighting, rigging, power, rehearsal and backup planning for corporate events.",
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  keywords: [
    "corporate event planning",
    "corporate event technical production",
    "event production",
    "stage rental",
    "LED screen rental",
    "sound lighting system",
    "event rigging",
    "technical production",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
};

/* ================== FAQ DATA ================== */
const FAQ_ITEMS = [
  {
    question: "How early should technical planning start for a corporate event?",
    answer:
      "Technical planning should start as soon as the venue, programme and audience profile are sufficiently defined. Large or complex productions need more lead time for the site survey, engineering, equipment allocation and rehearsal scheduling.",
  },
  {
    question: "What should be checked before confirming a venue?",
    answer:
      "Check ceiling height, rigging point locations and capacities, the load-in route and loading doors, available power, the FOH position, installation and dismantling windows, and audience sightlines. Any restriction can change the stage, LED, sound or lighting design.",
  },
  {
    question: "How is the correct LED screen size determined?",
    answer:
      "Screen size should be based on the content format, stage width, closest and farthest viewers, sightlines and ambient light. Pixel pitch is then selected for the viewing distance and required image detail, while rigging, power and processing requirements are checked as part of the same design.",
  },
  {
    question: "Is a technical rehearsal necessary?",
    answer:
      "For speaker-led, video-led or cue-heavy corporate events, a technical rehearsal is strongly recommended. It confirms presentations, media playback, microphone levels, stage movements, lighting cues and communication between the show team before guests arrive.",
  },
  {
    question: "What backup equipment should be prepared?",
    answer:
      "Backups should reflect the risks in the programme. Common priorities include spare microphones, secondary media playback, alternative signal paths, essential cables and adapters, a power contingency for critical equipment, and spares that can be replaced quickly during the show.",
  },
];

/* ================== SCHEMA (JSON-LD) ================== */
function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");

  const orgId = `${site}/#org`;

  const modified =
    typeof MODIFIED_DATE !== "undefined" && MODIFIED_DATE ? MODIFIED_DATE : PUBLISH_DATE;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: ARTICLE_TITLE,
        description: metadata?.description,
        image: `${site}/img/blog/kurumsal-etkinlik-hero.webp`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "en-US",
        author: buildArticleAuthor(AUTHOR_NAME),
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${site}/en/blog#blog` },
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
        locale="en"
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : ARTICLE_TITLE) }}
        pills={["Sahneva Blog", "Production & Technical", "Event Engineering"]}
        title={ARTICLE_TITLE}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="5\u20137 min read"
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
        <div className="bg-violet-50/50 p-6 rounded-xl border-l-4 border-violet-500 mb-8">
          <p className="text-lg text-gray-700 font-medium m-0">
            For event agencies and corporate organisers delivering <Link href="/en/corporate-events" className="font-semibold text-violet-700 underline underline-offset-4">corporate events</Link> in Türkiye, the technical plan turns an approved programme into a safe, buildable show. Stage, LED screen, sound, lighting, rigging and power must work as one production system.
          </p>
        </div>

        <p>
          This guide focuses on the decisions a production buyer should close with the technical partner before equipment is reserved. The aim is not to select isolated products, but to design an event production workflow that can be installed, tested, operated and dismantled within the venue schedule.
        </p>

        <h2 id="event-brief">1. Define the Event Brief</h2>
        <p>
          Technical production starts with one clear brief shared by the organiser, venue and production team. It should define the following points before detailed drawings and equipment lists are prepared:
        </p>
        <ul className="grid gap-x-8 sm:grid-cols-2">
          <li><strong>Event type:</strong> conference, launch, awards, gala or dealer meeting.</li>
          <li><strong>Audience size:</strong> seated, standing, VIP and press numbers.</li>
          <li><strong>Programme:</strong> speakers, panels, performances, presentations and video.</li>
          <li><strong>Venue:</strong> confirmed location, room or outdoor event area.</li>
          <li><strong>Schedule:</strong> load-in, rehearsal, guest access, show and dismantling.</li>
          <li><strong>Technical expectations:</strong> stage, screens, audio, lighting, recording or streaming.</li>
        </ul>

        <h2 id="venue-check">2. Check the Venue Before Designing the Production</h2>
        <p>
          A site survey should come before the final stage, LED, sound and lighting design. Photographs and floor plans are useful, but the technical team still needs verified dimensions, access information and venue restrictions.
        </p>
        <ul>
          <li><strong>Structure:</strong> ceiling height, rigging point positions, allowable loads and any suspension restrictions.</li>
          <li><strong>Access:</strong> vehicle route, loading doors, lifts, steps, load-in distance and technical access during the event.</li>
          <li><strong>Power:</strong> available supply, distribution locations and a suitable generator position if additional or contingency power is required.</li>
          <li><strong>Operation:</strong> FOH position, installation time, dismantling window and audience sightlines from the front, sides and rear.</li>
        </ul>
        <p>
          For outdoor or temporary venues, the survey should also cover ground conditions, weather protection and how the <Link href="/en/tent-rental">tent structure</Link> interacts with rigging, power and cable routes.
        </p>

        <figure className="my-8 not-prose">
          <Image
            src="/img/blog/kurumsal-etkinlik-cadir.webp"
            alt="Corporate event tent prepared for technical production"
            width={1200}
            height={750}
            sizes="(max-width: 768px) 100vw, 800px"
            className="w-full h-auto rounded-2xl shadow-lg"
            loading="lazy"
          />
        </figure>

        <h2 id="stage-audience-layout">3. Plan the Stage and Audience Layout</h2>
        <p>
          Stage dimensions should follow the programme, scenic elements, LED footprint, speaker movement and room geometry. A professional <Link href="/en/stage-rental">stage rental</Link> plan also checks platform height, stairs or ramps, edge protection, backstage access and the viewing angle from every audience zone.
        </p>
        <p>
          Speech-led events may need a branded <Link href="/en/podium-rental">podium</Link>, confidence monitors and clear routes between seating, backstage and the speaking position. VIP and protocol requirements should be reflected in entrances, reserved sightlines, stage furniture and safe circulation rather than added after installation.
        </p>

        <figure className="my-8 not-prose">
          <Image
            src="/img/blog/kurumsal-etkinlik-sahne-genel.webp"
            alt="Corporate launch stage, LED screen and podium installation"
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
            className="w-full h-auto rounded-2xl shadow-lg"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
            Stage dimensions, screen position and audience sightlines should be approved together.
          </figcaption>
        </figure>

        <h2 id="led-sound-lighting">4. Choose LED, Sound and Lighting as One System</h2>
        <p>
          The correct <Link href="/en/led-screen-rental">LED screen</Link> size depends on the content format, stage width, closest and farthest viewing positions, side angles and ambient light. Pixel pitch should be selected for the viewing distance and required image detail; screen weight, processing, signal distribution and power then feed back into the rigging and electrical plan.
        </p>
        <p>
          Sound coverage should be designed for the room, audience layout and acoustic conditions. Microphone requirements follow the programme: lectern, handheld, headset, panel and audience Q&amp;A all need different workflows. The <Link href="/en/sound-light-rental">sound and lighting system</Link> should combine clear speech, even audience coverage, speaker and camera lighting, safe audience illumination and atmospheric cues under one FOH plan.
        </p>

        <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
          <figure className="m-0">
            <Image
              src="/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp"
              alt="Wide LED screen integrated into a corporate event stage"
              width={1200}
              height={675}
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
              Screen size and pixel pitch must match the content and viewing distance.
            </figcaption>
          </figure>
          <figure className="m-0">
            <Image
              src="/img/blog/kurumsal-etkinlik-ses-backstage.webp"
              alt="Sound mixing desk and lighting control at a corporate event"
              width={1200}
              height={750}
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
              Audio, lighting, video and show control meet at the FOH position.
            </figcaption>
          </figure>
        </div>

        <h2 id="rigging-power-safety">5. Plan Rigging, Power and Safety</h2>
        <p>
          Truss and suspended equipment should be designed only after rigging points, point capacities, ceiling limits and venue procedures are confirmed. The plan must account for LED screens, lighting fixtures, loudspeakers, motors, cabling and any scenic loads without blocking technical or emergency access.
        </p>
        <p>
          Electrical distribution should be calculated from the complete system rather than individual equipment lists. Supply capacity, phase distribution, cable lengths and protected cable routing need to be agreed before load-in. A generator may be required where venue power is insufficient or where the risk plan calls for a separate contingency supply.
        </p>

        <h2 id="load-in-show-day">6. Load-In, Testing, Rehearsal and Show Day</h2>
        <p>
          A realistic schedule reserves separate time for installation, testing and rehearsal. Compressing all three into the final hours before doors open leaves little room to diagnose a signal, power, content or microphone issue.
        </p>
        <ol>
          <li><strong>Load-in and installation:</strong> coordinate vehicles, crews, stage, rigging, LED, sound, lighting, power and safe cable routes.</li>
          <li><strong>System testing:</strong> check presentation files, video formats, media playback, signal paths, microphones, loudspeaker coverage, lighting cues and communications.</li>
          <li><strong>Technical rehearsal:</strong> run speaker entrances, podium positions, panel changes, videos and show cues with the approved programme.</li>
          <li><strong>Show and dismantling:</strong> operate from clear cue sheets and responsibilities, then dismantle within the venue window and agreed access rules.</li>
        </ol>

        <h2 id="backup-redundancy">7. Backup and Redundancy</h2>
        <p>
          Backup planning should be proportional to the consequence of failure and the time available to recover. Priorities normally include backup microphones, secondary media playback with the final presentation files, spare signal paths, essential cables and adapters, a power contingency for show-critical equipment, and critical spares that the onsite team can replace quickly.
        </p>
        <p>
          <strong>Budget note:</strong> Technical production budgets depend on the venue, audience size, event duration, installation schedule, equipment specification and production complexity. A useful quotation separates the production scope, crew, logistics and operating period instead of forcing every event into fixed percentages.
        </p>

        <aside
          role="note"
          aria-labelledby="technical-checklist-title"
          className="not-prose my-10 rounded-2xl border border-violet-200 bg-violet-50/60 p-6"
        >
          <h3 id="technical-checklist-title" className="m-0 text-xl font-bold text-violet-950">
            Technical Checklist Before Final Approval
          </h3>
          <ul className="mt-4 grid gap-2 p-0 text-sm text-gray-700 sm:grid-cols-2">
            {[
              "Venue access confirmed",
              "Ceiling height checked",
              "Rigging capacity confirmed",
              "Power requirements calculated",
              "FOH position defined",
              "LED viewing distance checked",
              "Sound coverage planned",
              "Rehearsal time allocated",
              "Backup systems prepared",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 m-0 list-none">
                <span aria-hidden="true" className="font-bold text-violet-700">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <h2 id="faq">Frequently Asked Questions</h2>
        <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
          <h3 id="faq-heading" className="sr-only">Frequently Asked Questions</h3>
          {FAQ_ITEMS.map((item, index) => (
            <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-violet-100 open:border-violet-300 transition-all duration-200">
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

        <div className="not-prose mt-12 bg-gradient-to-br from-gray-900 to-violet-900 rounded-3xl p-7 md:p-9 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Planning Technical Production in Türkiye?</h3>
          <p className="text-violet-100 mb-7 max-w-2xl mx-auto relative z-10 text-base md:text-lg">
            Share the venue, audience size, programme and schedule. Sahneva can review the production scope and coordinate stage, LED screen, sound, lighting, rigging, installation and dismantling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="https://wa.me/905453048671"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label="Request a quote via WhatsApp — opens in a new tab"
              className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg"
            >
              <span>💬</span> Message on WhatsApp
            </a>
            <a href="tel:+905453048671" className="inline-flex items-center justify-center gap-2 bg-white text-violet-900 hover:bg-violet-50 font-bold py-4 px-8 rounded-xl transition-transform hover:-translate-y-1 shadow-lg">
              <span>📞</span> Call Now
            </a>
          </div>
        </div>

        <BlogRelatedLinks
          locale="en"
          services={[
            { href: "/en/corporate-events", label: "Corporate Events" },
            { href: "/en/stage-rental", label: "Stage Rental" },
          ]}
        />
      </BlogLayout>
    </>
  );}
