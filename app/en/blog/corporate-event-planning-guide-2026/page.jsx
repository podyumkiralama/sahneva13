import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import InteractiveChecklist from "@/components/blog/InteractiveChecklist.client";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

export const revalidate = 86400;

const SLUG = "corporate-event-planning-guide-2026";
const BLOG_PATH = `/en/blog/corporate-event-planning-guide-2026`;
const url = `${BASE_SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE = "/img/blog/kurumsal-etkinlik-timeline.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva Editorial Team";
const PUBLISH_DATE = "2026-01-28T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/en/blog/corporate-event-planning-guide-2026/page.jsx",
  "2026-01-28T00:00:00+03:00"
);

export const metadata = {
  title: "2026 Corporate Event Planning Guide",
  description:
    "Corporate event planning guide: strategy, budget, timeline, stage-LED-tent, run-of-show and downloadable checklist.",
  alternates: {
    canonical: url,
    languages: {
      "tr-TR": `${BASE_SITE_URL}/blog/kurumsal-etkinlik-planlama-rehberi-2026`,
      "en-US": url,
    },
  },
  image: FEATURED_IMAGE,
  openGraph: {
    title: "2026 Corporate Event Planning Guide | Sahneva",
    description:
      "Corporate event planning guide: strategy, budget, timeline, stage-LED-tent, run-of-show and downloadable checklist.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "2026 Corporate Event Planning Guide featured image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 Corporate Event Planning Guide",
    description:
      "Strategy, budget, timeline and technical production checklist for corporate event planning.",
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "corporate event planning",
    "corporate event checklist",
    "stage rental",
    "LED screen rental",
    "technical production",
    "run of show",
    "event budget",
  ],
  authors: [{ name: AUTHOR_NAME }],
  date: PUBLISH_DATE,
  category: "Corporate Events",
  readTime: "12–14 min read",
  author: AUTHOR_NAME,
};

/* ---------- helpers (LIGHT BLOG THEME) ---------- */
function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function H2({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl"
    >
      {children}
    </h2>
  );
}

function ProTip({ title = "Pro Tip", children }) {
  return (
    <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
      <div className="text-sm font-semibold text-sky-900">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-700">{children}</div>
    </div>
  );
}

function Table({ caption, columns, rows }) {
  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {caption ? (
        <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
          {caption}
        </div>
      ) : null}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-700">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((r, idx) => (
              <tr key={idx}>
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Figure({ src, alt, caption, priority = false, loading = "lazy" }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full bg-slate-50">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-contain"
          loading={loading}
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function Page() {
  const publishedISO = PUBLISH_DATE;
  const publishedHuman = "January 28, 2026";
  const readingTime = "12–14 min read";
  const pdfHref = "/files/kurumsal-etkinlik-kontrol-listesi-2026.pdf";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline:
          "2026 Corporate Event Planning Guide: Checklist and Technical Tips",
        description:
          "Corporate event planning guide: strategy, budget, timeline, stage-LED-tent, run-of-show and downloadable checklist.",
        image: `${BASE_SITE_URL}${FEATURED_IMAGE}`,
        datePublished: publishedISO,
        dateModified: MODIFIED_DATE,
        inLanguage: "en-US",
        author: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "Sahneva",
        },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        url,
        about: [
          { "@type": "Thing", name: "Istanbul corporate event companies" },
          { "@type": "Thing", name: "Professional stage and LED screen rental" },
          { "@type": "Thing", name: "Technical production in event management" },
          { "@type": "Thing", name: "Hybrid event" },
          { "@type": "Thing", name: "Live streaming production" },
        ],
        citation: [
          "Kaltura – State of Virtual Events 2023 (technical glitches / drop-off)",
          "Eventcube – Event industry statistics & hybrid/virtual trends",
          "Assorted 2025–2026 event industry benchmarks (hybrid becoming the norm)",
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd
        id="ld-blogposting"
        data={jsonLd}
      />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Home", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/en/blog` },
              { name: "2026 Corporate Event Planning Guide", url },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Istanbul corporate event companies • technical production
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              2026 Corporate Event Planning Guide
              <span className="block text-slate-600">
                The Most Comprehensive Checklist and Technical Tips
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              In 2026, hybrid events are no longer "alternative" — they are
              becoming the norm. The critical point is this: if you don't manage
              the stage, LED screen, audio–lighting, and broadcast chain under a
              single plan, even the smallest glitch can quickly derail your flow
              and budget. This guide consolidates the entire process from
              strategy to run-of-show in one place.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>{publishedHuman}</span>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>Sahneva Editorial Team</span>
            </div>

            {/* CTA row */}
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Message on WhatsApp (quote in 2 hours)
              </a>

              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Get a Quote / Contact
              </Link>

              <a
                href={pdfHref}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Download Checklist PDF
              </a>
            </div>

            <Figure
              src={FEATURED_IMAGE}
              alt="Featured image for corporate event planning guide"
              caption="Corporate event planning guide: strategy, budget, run-of-show and technical production."
              priority
              loading="eager"
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard value="65–68%" label="Hybrid event rate (2025–2026 reports)" />
              <StatCard
                value="25–46%"
                label="Drop-off/crisis risk after technical failure"
              />
              <StatCard value="2–3 months" label="Ideal planning lead time" />
              <StatCard value="One Plan" label="Stage+LED+audio+lighting+broadcast flow" />
            </div>

            {/* Sources / footnote */}
            <p className="mt-4 text-xs leading-5 text-slate-500">
              Source note: For drop-off rates after technical glitches, see Kaltura "State of Virtual Events 2023"
              (~25% after 1–2 glitches, ~46% after 3+). Also Eventcube industry statistics and 2025–2026 benchmarks for hybrid trends.
            </p>

            <ProTip title="2026 note">
              In hybrid events, talking only about "square footage" isn't enough. LED screen + camera + audio/lighting +
              broadcast chain must all be documented in the same file; otherwise, a small on-site issue can turn into a major delay.
            </ProTip>
          </header>

          {/* Layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Main */}
            <article className="min-w-0">
              {/* TOC */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">
                  Article Roadmap
                </h2>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {[
                    ["#s1", "1. Event strategy"],
                    ["#s1a", "1A. Mission–Audience–SMART (2026)"],
                    ["#s2", "2. Team and role assignment"],
                    ["#s3", "3. Timeline"],
                    ["#s4", "4. Budget plan"],
                    ["#s5", "5. Theme and brand language"],
                    ["#s6", "6. Venue and technical survey"],
                    ["#s6a", "6A. Agenda and attendee engagement"],
                    ["#s7", "7. Stage and podium"],
                    ["#s8", "8. LED screen and broadcast"],
                    ["#s9", "9. Tent and outdoor risks"],
                    ["#s10", "10. Seating and flow"],
                    ["#s11", "11. Setup and rehearsal"],
                    ["#s11a", "11A. Event day checklist"],
                    ["#s12", "12. Post-event review"],
                    ["#s12a", "12A. Success measurement and feedback"],
                  ].map(([href, text]) => (
                    <li key={href}>
                      <a className="hover:text-slate-900" href={href}>
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>

              {/* s1 */}
              <section className="mt-10">
                <H2 id="s1">1. Define your event strategy</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Before diving into budget or venue, strategy must be clear: event type
                  (launch, dealer meeting, conference, gala), target audience, key message,
                  and success metrics. Since business volume is high in Istanbul, locking
                  decisions early ensures a solid{" "}
                  <strong className="font-semibold text-slate-900">
                    technical production plan in event management
                  </strong>.
                </p>

                <ProTip title="One-page strategy">
                  Purpose + audience + format + SMART goal + budget range… A one-page document
                  keeps stage, LED, audio-lighting and broadcast proposals aligned in the same framework.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s1_strategy"
                  items={[
                    "Has the event's purpose and target audience been documented?",
                    "Is the format clear (in-person / hybrid / live stream)?",
                    "Have success criteria been set (attendance, engagement, leads, satisfaction)?",
                    "Is the budget range and approval process defined?",
                  ]}
                />
              </section>

              {/* s1a */}
              <section className="mt-10">
                <H2 id="s1a">1A. Mission–Audience–SMART: The framework that locks strategy in 2026</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  "Attendance" alone doesn't count as a goal. Setting measurable targets for hybrid events
                  (e.g., "80% of attendees participate in all sessions") automatically clarifies LED content
                  flow, broadcast planning and stage transitions.
                </p>

                <InteractiveChecklist
                  storageKey="s1a_smart"
                  items={[
                    "Mission: Has the event's 'why' been written in one sentence?",
                    "Audience: Is the attendee profile clear (role/industry/need)?",
                    "Are SMART goals quantified and time-bound?",
                    "Has the goal document been shared with the team and suppliers?",
                  ]}
                />
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">2. Build your team and clarify roles</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  In corporate events, the "everything is on me" model doesn't work. Project management,
                  budget, content, stage–LED–audio–lighting, broadcast/filming, logistics and guest
                  management must each have separate owners. The most critical point: a single decision
                  authority.
                </p>

                <Table
                  caption="Sample role assignment (short)"
                  columns={["Responsibility", "Who?", "Output"]}
                  rows={[
                    ["Project lead", "Internal team", "Single plan, single decision point"],
                    ["Technical production", "Sahneva / technical team", "Stage+LED+audio-lighting+broadcast plan"],
                    ["Logistics", "Operations", "Transport/setup-teardown schedule"],
                    ["Content/brand", "Marketing", "Agenda + visuals + invitation flow"],
                  ]}
                />

                <InteractiveChecklist
                  storageKey="s2_team"
                  items={[
                    "Has the project owner (single decision point) been identified?",
                    "Is the technical production owner clear?",
                    "Have setup–teardown teams and working hours been planned?",
                    "Have external suppliers (catering, security, DJ, etc.) been listed?",
                  ]}
                />
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Build a backward timeline</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The timeline is the least visible yet most critical part of an event.
                  Technical survey, production, setup, rehearsal and event-day flow should all
                  be planned backwards from the event date.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-timeline.webp"
                  alt="Corporate event planning timeline"
                  caption="Sample timeline: backward plan from technical survey to rehearsal day."
                />

                <Table
                  caption="Practical timeline example (backward)"
                  columns={["Time", "Task", "Note"]}
                  rows={[
                    ["T-30 / T-21", "Technical survey + concept + initial quotes", "Stage/LED/tent dimensions finalized"],
                    ["T-14 / T-10", "Agenda locked + content production begins", "LED content and broadcast flow planned"],
                    ["T-7 / T-3", "Plan revisions + final confirmations", "Supplier schedules finalized"],
                    ["T-1", "Setup + test + rehearsal", "Sync tests, speaker rehearsal"],
                    ["T", "Execution", "Run-of-show + command chain"],
                  ]}
                />

                <InteractiveChecklist
                  storageKey="s3_timeline"
                  items={[
                    "Have decision and delivery dates been added to the timeline?",
                    "Has the technical survey date been set?",
                    "Are setup, rehearsal and teardown times confirmed?",
                    "Has the timeline been shared with the entire team?",
                  ]}
                />
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">4. Build a realistic budget (contingency is essential)</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  In 2026, the bulk of the budget concentrates on "venue + technical infrastructure."
                  Thinking of stage, LED screen, audio–lighting and broadcast chain as a single package
                  simplifies both cost and responsibility management. Leave 10–15% contingency for
                  last-minute requests.
                </p>

                <Figure
                  src="/img/blog/kurumsal-etkinlik-butce-infografik.webp"
                  alt="Corporate event budget breakdown infographic"
                  caption="Breaking the budget into line items reduces surprises. Write in the contingency from day one."
                />

                <Table
                  caption="Sample budget breakdown"
                  columns={["Line Item", "Estimated Share (%)", "Note"]}
                  rows={[
                    ["Venue + Technical Infrastructure", "35–45", "Stage / LED / Tent / Audio-lighting"],
                    [
                      "Technical Production Package (Sahneva integrated)",
                      "within 35–45",
                      "Single-source management; reduces revision, setup and operation time (especially at scale).",
                    ],
                    ["Catering & Refreshments", "20–25", "Special diets included"],
                    ["Decoration & Visuals", "15–20", "Think alongside LED content production"],
                    ["Staff & Logistics", "10–15", "Transport + setup crew"],
                    ["Contingency (unexpected)", "10–15", "Extra cables, backup operator, revisions, additional crew"],
                  ]}
                />

                <ProTip title="Turnkey note">
                  For large events, a "turnkey technical package" (stage + LED + audio/lighting + broadcast)
                  is the model with the fewest surprises. One plan, one responsibility.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s4_budget"
                  items={[
                    "Has the technical production budget been itemized separately?",
                    "Has contingency (10–15%) been added?",
                    "Are transport/setup/teardown durations realistic?",
                    "Are technical details (LED panel/refresh rate, etc.) clearly specified in quotes?",
                  ]}
                />
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. Theme and brand language</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The theme is the shared language of stage design, lighting colors, LED screen visuals
                  and printed/digital materials. Leaving LED content to the last week amplifies
                  "last-minute revision" crises on-site.
                </p>

                <InteractiveChecklist
                  storageKey="s5_theme"
                  items={[
                    "Is the theme aligned with the brand identity?",
                    "Have LED content files (resolution/format) been approved with the technical team?",
                    "Have social media/PR visual packages been planned?",
                  ]}
                />
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. Venue and technical survey</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A venue may look beautiful but pose significant technical risks: electrical capacity,
                  loading–unloading access, ceiling height, sightlines, internet infrastructure for
                  broadcasting… A technical survey prevents the most costly mistakes from the start.
                </p>

                <Table
                  caption="Quick technical survey checklist"
                  columns={["Area", "What to check?", "Why it matters"]}
                  rows={[
                    ["Electrical", "kW / circuits / breakers", "LED + audio-lighting load simultaneously"],
                    ["Layout", "sightlines / camera line", "LED and stage must be visible to everyone"],
                    ["Loading", "ramp/elevator/door", "Setup duration and crew safety"],
                    ["Internet", "upload speed / wired", "Hybrid and live stream stability"],
                  ]}
                />

                <InteractiveChecklist
                  storageKey="s6_survey"
                  items={[
                    "Has the electrical infrastructure and capacity been checked?",
                    "Have LED screen and stage sightlines been measured?",
                    "Is the loading–unloading plan clear?",
                    "Has internet (especially upload) been tested?",
                  ]}
                />
              </section>

              {/* s6a */}
              <section className="mt-10">
                <H2 id="s6a">6A. Run-of-show for hybrid flow</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The run-of-show file is a minute-by-minute flow including lighting, LED cues and
                  broadcast transitions. It is the safety net of technical production.
                </p>

                <ProTip title="Quick tactic">
                  Run the setup in "critical chain" order: power → LED → audio/lighting → broadcast.
                  This is the fastest sequence to follow.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s6a_runofshow"
                  items={[
                    "Is the run-of-show file ready minute by minute?",
                    "Have LED cues (intro/speaker/break/close) been written?",
                    "Have broadcast transitions (camera/overlay) been planned?",
                    "Has setup been planned according to the critical chain?",
                  ]}
                />
              </section>

              {/* s7 */}
              <section className="mt-10">
                <H2 id="s7">7. Stage and podium planning</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The stage is the heart of the event. If dimensions, height, steps, safety and
                  camera angles aren't planned correctly, both the experience and safety are affected.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/en/stage-rental">
                    Stage Rental
                  </Link>{" "}
                  •{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/en/podium-rental">
                    Podium Rental
                  </Link>
                </p>

                <Figure
                  src="/img/blog/kurumsal-sahne-podyum-yerlesim.webp"
                  alt="Corporate event stage and podium layout example"
                  caption="Stage/podium layout: sightline + camera line + step safety considered together."
                />

                <InteractiveChecklist
                  storageKey="s7_stage"
                  items={[
                    "Are stage dimensions and podium height confirmed?",
                    "Have steps and non-slip surfaces been planned?",
                    "Have camera and LED sightlines been checked?",
                    "Have edge safety / signage details been documented?",
                  ]}
                />
              </section>

              {/* s8 */}
              <section className="mt-10">
                <H2 id="s8">8. LED screen + broadcast + 2026 trends</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  The LED screen is no longer just a "backdrop" — it is the primary storytelling medium.
                  In hybrid events, LED + live broadcast integration, content flow and operator
                  coordination are planned together.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/en/led-screen-rental">
                    LED Screen Rental
                  </Link>{" "}
                  •{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/blog/led-ekran-teknoloji-trendleri-2026">
                    2026 LED trends
                  </Link>
                </p>

                <Figure
                  src="/img/blog/p2-led-ekran-kurumsal-etkinlik.webp"
                  alt="LED screen example for corporate event (P2/P3)"
                  caption="At close viewing distances, correct pixel pitch and content format are critical."
                />

                <InteractiveChecklist
                  storageKey="s8_led"
                  items={[
                    "Is the indoor/outdoor panel class correct (brightness)?",
                    "Are pixel pitch and refresh rate clearly specified in the quote?",
                    "Have content resolution/FPS/formats been approved?",
                    "If live streaming, has camera–LED–audio sync been tested?",
                  ]}
                />
              </section>

              {/* s9 */}
              <section className="mt-10">
                <H2 id="s9">9. Tent and outdoor risk management</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Risk management is essential for outdoor events: wind, rain, ground conditions
                  and safety. Tent–stage–LED integration must be planned down to cable routing.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/en/tent-rental">
                    Tent Rental
                  </Link>{" "}
                  •{" "}
                  <Link
                    className="font-semibold underline underline-offset-4"
                    href="/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping"
                  >
                    Dome Tent Guide
                  </Link>
                </p>

                <Figure
                  src="/img/blog/pagoda-cadir-kurumsal-etkinlik.webp"
                  alt="Pagoda/dome tent setup for corporate event"
                  caption="In outdoor events, a plan B and ground anchoring saves the day."
                />

                <InteractiveChecklist
                  storageKey="s9_tent"
                  items={[
                    "Are tent dimensions and load capacity plan confirmed?",
                    "Have ground anchoring and safety zones been established?",
                    "Have cable routes been mapped?",
                    "Is there a plan B for weather conditions?",
                  ]}
                />
              </section>

              {/* s10 */}
              <section className="mt-10">
                <H2 id="s10">10. Seating and attendee flow</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Seating arrangement must not block stage sightlines; transition areas,
                  registration/welcome and service flow must be clearly defined.
                </p>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  <Link className="font-semibold underline underline-offset-4" href="/masa-sandalye-kiralama">
                    Tables &amp; Chairs Rental
                  </Link>
                </p>

                <InteractiveChecklist
                  storageKey="s10_flow"
                  items={[
                    "Is the seating plan (conference/gala/cocktail) confirmed?",
                    "Have transit areas and signage been planned?",
                    "Is the registration/welcome desk location correct?",
                    "Are accessibility and emergency exits clear?",
                  ]}
                />
              </section>

              {/* s11 */}
              <section className="mt-10">
                <H2 id="s11">11. Setup, rehearsal and day-of management</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A smooth event is not "luck" — it's rehearsal and testing. Stage, LED,{" "}
                  <Link className="font-semibold underline underline-offset-4" href="/en/sound-light-rental">
                    audio and lighting systems
                  </Link>{" "}
                  and the broadcast chain must all be run together.
                </p>

                <ProTip title="Critical chain">
                  Clarify the setup sequence: power → LED → audio/lighting → broadcast. If this order
                  isn't followed, the job takes longer.
                </ProTip>

                <InteractiveChecklist
                  storageKey="s11_setup"
                  items={[
                    "Has the setup plan been shared with all crews?",
                    "Have audio–lighting–LED sync tests been completed?",
                    "Have speaker rehearsals been completed?",
                    "Is an emergency and backup scenario ready?",
                  ]}
                />
              </section>

              {/* s11a */}
              <section className="mt-10">
                <H2 id="s11a">11A. Event day checklist</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Event day is the "final round check" day. Supplier confirmation, venue walk-through
                  and equipment tests reduce crises.
                </p>

                <InteractiveChecklist
                  storageKey="s11a_dayof"
                  items={[
                    "Have arrival/setup times been confirmed with all suppliers?",
                    "Have speakers received the final agenda + technical requirements?",
                    "Are registration/welcome, signage and printed materials ready?",
                    "Has the final walk-through been completed?",
                    "Has all equipment been tested?",
                    "Is the team communication list and emergency procedure ready?",
                  ]}
                />
              </section>

              {/* s12 */}
              <section className="mt-10">
                <H2 id="s12">12. Post-event review</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  When the event ends, the report begins: budget variances, technical notes,
                  attendee feedback and "next project" lessons.
                </p>

                <InteractiveChecklist
                  storageKey="s12_post"
                  items={[
                    "Has the technical team debrief been conducted?",
                    "Have budget variances and reasons been noted?",
                    "Has attendee satisfaction data been collected?",
                    "Have photo/video outputs been received?",
                  ]}
                />
              </section>

              {/* s12a */}
              <section className="mt-10">
                <H2 id="s12a">12A. Success measurement and feedback</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A short survey (QR/email) + internal team debrief + comparison against SMART goals…
                  The quality of your next event comes from here.
                </p>

                <InteractiveChecklist
                  storageKey="s12a_roi"
                  items={[
                    "Has the post-event survey been sent?",
                    "Have feedback items been classified into strengths/weaknesses?",
                    "Has the debrief been conducted against SMART goals?",
                    "Have lead/satisfaction/attendance metrics been reported?",
                    "Have a summary and learnings been shared with stakeholders?",
                  ]}
                />
              </section>

              {/* CTA */}
              <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-slate-900">
                  Don't leave your event to chance
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  At Sahneva, with experience from{" "}
                  <strong className="font-semibold text-slate-900">300+ corporate projects</strong>,
                  we manage the entire process from technical survey to broadcast chain — all under
                  one roof, across{" "}
                  <strong className="font-semibold text-slate-900">81 provinces</strong>. Message us
                  on WhatsApp for a quick quote; for most projects, we turn around a detailed proposal
                  in{" "}
                  <strong className="font-semibold text-slate-900">under 2 hours</strong>.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Message on WhatsApp
                  </a>
                  <Link
                    href="/en/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Contact Form
                  </Link>
                  <a
                    href={pdfHref}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    PDF Checklist
                  </a>
                </div>
              </section>

              {/* Sources footer (clean) */}
              <section className="mt-10 text-xs leading-6 text-slate-500">
                <div className="font-semibold text-slate-700">Sources</div>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    Kaltura – State of Virtual Events 2023: Drop-off rates after technical glitches (~25% / ~46% range).
                  </li>
                  <li>
                    Eventcube – Event industry statistics &amp; hybrid/virtual trend compilations.
                  </li>
                  <li>
                    2025–2026 industry benchmarks: hybrid events becoming the norm and B2B ROI trends.
                  </li>
                </ul>
              </section>

              <SmartBlogSuggestions
                currentSlug={SLUG}
                currentCategory={metadata?.category}
                currentKeywords={metadata?.keywords}
              />

              <BlogRelatedLinks
                services={[
                  { href: "/en/corporate-events", label: "Corporate Events" },
                  { href: "/en/stage-rental", label: "Stage Rental" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Quick Quote</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Share your event details and we'll get back to you quickly.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/en/contact"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    Contact Form
                  </Link>
                  <a
                    href={pdfHref}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    PDF Checklist
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Services</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/en/corporate-events">Corporate Events</Link></li>
                  <li><Link className="hover:text-slate-900" href="/en/led-screen-rental">LED Screen Rental</Link></li>
                  <li><Link className="hover:text-slate-900" href="/en/sound-light-rental">Sound &amp; Lighting Systems</Link></li>
                  <li><Link className="hover:text-slate-900" href="/en/tent-rental">Tent Rental</Link></li>
                  <li><Link className="hover:text-slate-900" href="/en/stage-rental">Stage Rental</Link></li>
                  <li><Link className="hover:text-slate-900" href="/en/podium-rental">Podium Rental</Link></li>
                  <li><Link className="hover:text-slate-900" href="/masa-sandalye-kiralama">Tables &amp; Chairs Rental</Link></li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Related Articles</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li><Link className="hover:text-slate-900" href="/blog/led-ekran-teknoloji-trendleri-2026">2026 LED Screen Technology Trends</Link></li>
                  <li><Link className="hover:text-slate-900" href="/blog/ses-sistemlerinde-2026-yenilikleri-trendler">2026 Audio System Innovations</Link></li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping"
                    >
                      Dome Tent Guide: 360° Mapping
                    </Link>
                  </li>
                  <li><Link className="hover:text-slate-900" href="/blog/kurumsal-etkinlik-yonetimi">Corporate Event Management Guide</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
