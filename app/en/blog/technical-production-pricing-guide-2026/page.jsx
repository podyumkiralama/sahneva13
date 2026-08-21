import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import SmartBlogSuggestions from "@/components/blog/SmartBlogSuggestions";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";
import { PROJECTS_COMPLETED } from "@/lib/stats";

export const revalidate = 86400;

// 21 Agustos 2026 — yazi alici tarafina cevrildi.
// Onceki hali tedarikci mantigina gore kurulmustu: "add-ons are the real
// profit", "raising prices during peak periods optimises total revenue",
// deger satisi, psikolojik fiyatlama. Musteriye donuk bir sitede bu hem teklife
// guveni dusuruyor hem de rakibe fiyatlama stratejisi ogretiyordu.
// Karlilik / upsell / gelir optimizasyonu bolumleri tamamen kaldirildi.
// URL, canonical ve yayin tarihi korundu.

const slug = "/en/blog/technical-production-pricing-guide-2026";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/kurumsal-etkinlik-led-ekran-sahne.webp";
const OG_IMAGE = FEATURED_IMAGE;
const AUTHOR_NAME = "Sahneva Content Team";
const PUBLISH_DATE = "2026-04-07T00:00:00+03:00";
const MODIFIED_DATE = "2026-08-21T00:00:00+03:00";

const PAGE_TITLE = "Event Technical Production Costs 2026";
const PAGE_DESCRIPTION =
  "What drives stage, LED, sound and lighting production cost, which line items are quoted separately, and how to compare event production quotes.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: buildLanguageAlternates({
    canonical: slug,
    tr: "/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026",
    en: slug,
  }),
  image: FEATURED_IMAGE,
  openGraph: {
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${BASE_SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Event technical production cost breakdown — stage, LED screen and sound-lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Sahneva`,
    description: PAGE_DESCRIPTION,
    images: [`${BASE_SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "event technical production costs",
    "AV production budget",
    "comparing event production quotes",
    "stage rental cost",
    "LED screen rental cost",
    "sound and lighting budget",
    "event production quotation",
    "AV quote comparison",
  ],
  authors: [{ name: AUTHOR_NAME }],
  date: PUBLISH_DATE,
  category: "Pricing",
  readTime: "8 min read",
  author: AUTHOR_NAME,
};

/* ---------- helpers ---------- */
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

function ProTip({ title = "Worth checking", children }) {
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
      <div role="region" aria-label="Comparison table, scroll horizontally" tabIndex={0} className="overflow-x-auto">
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

/* ---------- FAQ ---------- */
const FAQ_ITEMS = [
  {
    q: "What makes up the cost of event technical production?",
    a: "Six things move it more than anything else: the physical scale of the build (stage area, screen size, rig weight), the class of equipment, the number of crew and how many shifts they work, build and de-rig time, transport distance, and the constraints of the venue itself. Equipment is rarely the largest line; crew, time and access usually are.",
  },
  {
    q: "Which items should appear separately on an AV production quote?",
    a: "Equipment by discipline, crew by role and shift, transport, setup and dismantling, consumables such as carpet and skirting, power distribution, rigging and load engineering, operators for the live window, and any standby or redundancy. Seeing them itemised is not a sign of padding — it is how you check that nothing has been quietly left out.",
  },
  {
    q: "Why do two suppliers quote very different prices for the same event?",
    a: "Almost always because they are quoting different scopes. One may include setup and dismantling in the equipment line while the other lists it separately; one may assume the venue supplies power; one may have priced a lower pixel pitch or fewer crew. Normalise the scope first — same area, same specification, same days, same crew — and the gap usually narrows sharply.",
  },
  {
    q: "Does the season or the city change the price?",
    a: "Yes. Production is time-bound: the same equipment cannot serve two events on the same day, so peak dates carry less flexibility. Distance from the supplier's warehouse adds transport and, beyond a certain range, crew accommodation. Venue access — lift dimensions, dock hours, night-only load-in — can add a shift regardless of the equipment list.",
  },
  {
    q: "What are the warning signs of a risky quote?",
    a: "A single lump sum with no breakdown, no stated crew count, no build and de-rig times, transport marked to be confirmed, LED quoted without a pixel pitch, rigging without a load calculation, and no mention of who covers standby if something fails. Each of these is a cost that has not disappeared — it has just not been written down yet.",
  },
  {
    q: "What information do you need to price an event accurately?",
    a: "Venue and hall name, event date plus build-up and de-rig access windows, expected audience and seating layout, event format, what has to appear on screen, and whether the session is streamed or recorded. With those six, a quotation can be itemised rather than estimated.",
  },
];

export default function Page() {
  const publishedISO = PUBLISH_DATE;
  const publishedHuman = "April 7, 2026";
  const updatedHuman = "August 21, 2026";
  const readingTime = "8 min read";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#post`,
        mainEntityOfPage: { "@id": url },
        headline: "Event Technical Production Costs: A 2026 Buyer's Guide",
        description: PAGE_DESCRIPTION,
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
        audience: {
          "@type": "BusinessAudience",
          name: "Event organisers, corporate buyers, agencies and PCOs budgeting technical production",
        },
        about: [
          { "@type": "Thing", name: "Event technical production costs" },
          { "@type": "Thing", name: "AV production budget" },
          { "@type": "Thing", name: "Comparing event production quotes" },
          { "@type": "Thing", name: "Event production quotation line items" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd id="ld-blogposting" data={jsonLd} />

      <div className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pt-14">
          <BreadcrumbJsonLd
            items={[
              { name: "Home", url: BASE_SITE_URL },
              { name: "Blog", url: `${BASE_SITE_URL}/en/blog` },
              { name: "Event Technical Production Costs 2026", url },
            ]}
          />

          {/* Header */}
          <header>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700">
              Budgeting • technical production • reading a quote
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Event Technical Production Costs{" "}
              <span className="block text-slate-600">
                A 2026 Buyer&apos;s Guide
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              Most people budgeting an event for the first time assume the
              equipment list is the price. It rarely is. Crew, build time and
              how hard it is to get a truck to the loading dock routinely move
              a technical production budget more than the choice of speaker or
              LED panel does. This guide sets out what actually drives the
              number, which items you should expect to see quoted separately,
              and how to compare two proposals that look nothing alike.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <time dateTime={publishedISO}>{publishedHuman}</time>
              <span aria-hidden="true">•</span>
              <span>Updated {updatedHuman}</span>
              <span aria-hidden="true">•</span>
              <span>{readingTime}</span>
              <span aria-hidden="true">•</span>
              <span>{AUTHOR_NAME}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Message on WhatsApp
              </a>

              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Get an itemised quote
              </Link>
            </div>

            <Figure
              src={FEATURED_IMAGE}
              alt="Corporate event build with stage, LED screen and sound-lighting system in place"
              caption="A corporate build with stage, LED screen and sound-lighting in place. What you can see is the equipment; what moves the budget is the crew and the hours it took to get there."
              priority
              loading="eager"
            />
          </header>

          {/* Layout */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Main */}
            <article className="min-w-0">
              {/* TOC */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-base font-semibold text-slate-900">
                  In This Article
                </h2>
                <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {[
                    ["#s1", "1. What drives the cost"],
                    ["#s2", "2. Line items quoted separately"],
                    ["#s3", "3. Season, city, venue and logistics"],
                    ["#s4", "4. Comparing quotes on the same scope"],
                    ["#s5", "5. Signs of a risky quote"],
                    ["#s6", "6. The brief to send"],
                    ["#faq", "Frequently asked questions"],
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
                <H2 id="s1">1. What drives the cost of technical production</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A technical production budget is built from six inputs. Change
                  any one of them and the total moves; change the venue and
                  several move at once. Understanding which lever you are
                  pulling is what turns a budget conversation from haggling into
                  a scope decision.
                </p>

                <Table
                  caption="The six inputs that move a technical production budget"
                  columns={["Input", "What it covers", "Why it moves the total"]}
                  rows={[
                    [
                      "Physical scale",
                      "Stage area in m², screen size, rig weight, tent span",
                      "Drives material quantity, but also truck count and crew hours — scale rarely rises alone",
                    ],
                    [
                      "Equipment class",
                      "Pixel pitch, PA type, fixture quality, deck load rating",
                      "A finer pixel pitch or a line array costs more per m² and often needs more processing behind it",
                    ],
                    [
                      "Crew and shifts",
                      "Riggers, audio, lighting, video, stage hands, operators",
                      "Usually the largest single line on a mid-size build; shift count matters more than headcount",
                    ],
                    [
                      "Build and de-rig time",
                      "Hours on site before doors and after the last guest",
                      "A two-day build is not twice a one-day build — it adds accommodation, standby and venue hire",
                    ],
                    [
                      "Transport",
                      "Vehicle count, distance, loading equipment",
                      "Distance from the warehouse; beyond a certain range, crew travel and accommodation follow",
                    ],
                    [
                      "Venue constraints",
                      "Lift size, dock hours, ceiling height, power, rigging points",
                      "Can add an entire shift without changing a single item on the equipment list",
                    ],
                  ]}
                />

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  The counter-intuitive one is the last. Two identical
                  specifications in two different rooms can differ
                  substantially in price purely because one venue has a goods
                  lift that takes a full-size deck and the other does not. This
                  is why a site survey usually precedes an accurate quotation
                  rather than following it — the room decides what is possible
                  before the budget decides what is affordable.
                </p>

                <ProTip title="Where the money usually is">
                  On most corporate builds, equipment hire is not the biggest
                  line. Crew, build hours and logistics together typically
                  outweigh it. If a quote shows equipment as almost the entire
                  cost, ask where the crew and installation time have gone —
                  they have not stopped existing.
                </ProTip>
              </section>

              {/* s2 */}
              <section className="mt-10">
                <H2 id="s2">2. Line items that can be priced separately</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  An itemised quotation is not a longer bill; it is a readable
                  one. Each of the following is a genuinely distinct cost, and
                  seeing them listed lets you check that nothing has been
                  assumed away. If a line is missing, it has usually been
                  omitted from the scope rather than provided free.
                </p>

                <Table
                  caption="Line items you should expect to see, and what each one covers"
                  columns={["Line item", "What it should cover", "What to ask if it is missing"]}
                  rows={[
                    [
                      "Equipment by discipline",
                      "Stage, LED, audio, lighting, truss listed separately with specification",
                      "Which specification was assumed — pitch, PA type, deck rating?",
                    ],
                    [
                      "Crew by role and shift",
                      "How many people, in which roles, across how many shifts",
                      "Who installs it, and who operates it during the event?",
                    ],
                    [
                      "Transport",
                      "Vehicles, distance, loading equipment such as forklift or crane",
                      "Is delivery included, and from where?",
                    ],
                    [
                      "Setup and dismantling",
                      "Build and de-rig as scheduled hours, not a vague allowance",
                      "When does the crew arrive, and when is the venue handed back?",
                    ],
                    [
                      "Surfaces and finishing",
                      "Carpet, skirting, edge protection, ramps and stairs",
                      "Is the platform delivered finished or bare?",
                    ],
                    [
                      "Power and distribution",
                      "Distribution, cabling, ramping, generator if required",
                      "Is house power assumed sufficient, and who verified that?",
                    ],
                    [
                      "Rigging and load engineering",
                      "Point loads, calculations, ground support where roof rigging is unavailable",
                      "Who signs off the load calculation for the venue?",
                    ],
                    [
                      "Operators for the live window",
                      "Audio, lighting and presentation operators during the show",
                      "Is anyone at the desk once the doors open?",
                    ],
                    [
                      "Standby and redundancy",
                      "Spare channels, backup playback, on-call crew",
                      "What happens if a critical path fails mid-session?",
                    ],
                  ]}
                />

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  For a worked example of how area, covering and transport
                  combine on a single discipline, our{" "}
                  <Link
                    href="/en/podium-rental-prices"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    stage platform rental prices
                  </Link>{" "}
                  page publishes the m² rates and shows the arithmetic on a
                  sample build.
                </p>
              </section>

              {/* s3 */}
              <section className="mt-10">
                <H2 id="s3">3. Season, city, venue and logistics</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Production is time-bound in a way that most rented goods are
                  not: the same LED wall cannot be at two events on the same
                  evening. That single constraint explains most of the variation
                  you will see between dates, and most of the flexibility you
                  will find outside them.
                </p>

                <Table
                  caption="Factors outside the equipment list that change the number"
                  columns={["Factor", "Typical effect on a quote"]}
                  rows={[
                    [
                      "Peak dates",
                      "Summer weekends, the graduation and awards seasons and year-end carry the least availability. Crew and stock are committed earliest here, so late enquiries have fewer options rather than simply higher prices.",
                    ],
                    [
                      "Weekday and off-season",
                      "Midweek and winter dates are where genuine flexibility exists — on crew scheduling, on build windows and on how long equipment can stay on site.",
                    ],
                    [
                      "Distance from the warehouse",
                      "Transport scales with distance, and past a certain range crew travel and overnight accommodation join the calculation.",
                    ],
                    [
                      "Venue access",
                      "Goods lift dimensions, dock booking hours and corridor turns cap what can physically reach the room, and can force an overnight build.",
                    ],
                    [
                      "Indoor versus outdoor",
                      "Outdoor adds weather-rated equipment, ballast or anchoring, generator power and a contingency plan — all of which are real line items.",
                    ],
                    [
                      "Shared build windows",
                      "In congress and exhibition venues you share the floor and the freight lift with other contractors, which lengthens the build without adding equipment.",
                    ],
                  ]}
                />

                <ProTip title="If your date is flexible">
                  Moving a corporate event from a Saturday in June to a weekday
                  outside peak season usually widens what is available to you
                  more than it lowers the headline price. Ask what the crew and
                  stock situation looks like on your alternative dates before
                  you fix the calendar.
                </ProTip>
              </section>

              {/* s4 */}
              <section className="mt-10">
                <H2 id="s4">4. Comparing quotes on the same scope</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Two quotes for the same event routinely differ by a wide
                  margin, and the reason is almost never that one supplier is
                  simply expensive. It is that they are quoting different work.
                  Before comparing totals, normalise the scope — then compare
                  like with like.
                </p>

                <Table
                  caption="Normalise these before you compare totals"
                  columns={["Check", "What to line up across both quotes"]}
                  rows={[
                    ["Area and dimensions", "Stage m², screen dimensions in metres, deck height — not just descriptive words"],
                    ["Specification", "Pixel pitch, PA type, fixture count, deck load rating"],
                    ["Days", "Rental days versus event days; is the build day charged?"],
                    ["Crew", "Number of people, roles, and how many shifts each"],
                    ["Included or excluded", "Transport, setup, de-rig, power, rigging, operators"],
                    ["Site assumptions", "Who supplies power, whether a survey has happened, which access route was assumed"],
                    ["Contingency", "Standby crew, spare channels, backup playback path"],
                    ["Tax and terms", "Whether the figure includes VAT, and the payment schedule"],
                  ]}
                />

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  Once these are aligned, a remaining gap is meaningful and
                  worth asking about directly. In our experience the honest
                  answers are usually one of three: a different equipment class,
                  a different crew assumption, or one supplier having already
                  surveyed the venue while the other has not.
                </p>
              </section>

              {/* s5 */}
              <section className="mt-10">
                <H2 id="s5">5. Signs of a missing or risky quote</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  A cheap quote and an incomplete quote look identical until
                  build day. These are the omissions that most often turn into a
                  variation order later, when you have no leverage and no time.
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  {[
                    ["One lump sum, no breakdown", "You cannot remove what you do not need, and you cannot see what was never included."],
                    ["No crew count or shift plan", "Labour is usually the largest variable. If it is not stated, it has not been scoped."],
                    ["No build and de-rig times", "Access hours are a venue constraint. A quote that ignores them has not read the venue's rules."],
                    ["Transport 'to be confirmed'", "Distance is knowable at quotation stage. Leaving it open moves a known cost into your risk column."],
                    ["LED quoted with no pixel pitch", "Pitch drives both price and whether the front row can read the screen."],
                    ["Rigging with no load calculation", "This is a safety document, not paperwork. Its absence is the most serious item on this list."],
                    ["No standby or redundancy mentioned", "Ask what happens if the critical path fails during the live window."],
                    ["VAT and payment terms unstated", "A figure that turns out to be pre-tax reorders your comparison entirely."],
                  ].map(([title, body]) => (
                    <li key={title} className="flex gap-3">
                      <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden="true" />
                      <span>
                        <strong className="font-semibold text-slate-900">{title}.</strong>{" "}
                        {body}
                      </span>
                    </li>
                  ))}
                </ul>

                <ProTip title="The single most useful question">
                  Ask any supplier: &quot;What is explicitly excluded from this
                  quote?&quot; A well-scoped proposal answers it in a sentence.
                  A vague one cannot answer it at all, and that is the
                  information you were looking for.
                </ProTip>
              </section>

              {/* s6 */}
              <section className="mt-10">
                <H2 id="s6">6. The brief to send for an accurate price</H2>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Most quotation rounds go through two or three revisions
                  because the first brief was incomplete. Sending the following
                  up front usually means the first quotation is close to the
                  final one, and every line in it is traceable to something you
                  asked for.
                </p>

                <Table
                  caption="Send these six and the quotation can be itemised rather than estimated"
                  columns={["Item", "Why it changes the quote"]}
                  rows={[
                    [
                      "Venue and hall name",
                      "Ceiling height, rigging points and the load-in route are known properties of a named room. This single field rules most technical options in or out.",
                    ],
                    [
                      "Dates and access windows",
                      "Event date plus when the room is genuinely available for build and de-rig. Shared build windows need flagging early.",
                    ],
                    [
                      "Audience and layout",
                      "Headcount and seating style — theatre, cabaret, standing. Coverage and sightlines follow the layout, not the guest count alone.",
                    ],
                    [
                      "Event format",
                      "Conference, launch, gala, awards, concert or exhibition. Format sets stage geometry, microphone count and crew size.",
                    ],
                    [
                      "What appears on screen",
                      "Presentations, video playback, live camera. This decides the screen, the processing chain and whether an operator is needed.",
                    ],
                    [
                      "Streaming or recording",
                      "Whether the session goes out live or is captured, and to which platform. Camera and encode are separate scope.",
                    ],
                  ]}
                />

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  If part of the brief is genuinely undecided, say so rather
                  than guessing. A good supplier will quote the uncertain
                  element as a clearly marked option instead of burying an
                  assumption inside the total.
                </p>
              </section>

              {/* FAQ */}
              <section className="mt-10">
                <H2 id="faq">Frequently asked questions</H2>
                <div className="mt-4 space-y-4">
                  {FAQ_ITEMS.map((item) => (
                    <details
                      key={item.q}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900 md:text-base">
                        {item.q}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Get an itemised quote for your event
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  Sahneva has delivered{" "}
                  <strong className="font-semibold text-slate-900">
                    {PROJECTS_COMPLETED} projects
                  </strong>{" "}
                  covering stage, sound-lighting, LED screen and tent, managing
                  the process from technical survey to de-rig under one
                  contract. Send the six items above and you will get a
                  quotation broken down by line, with anything uncertain marked
                  as an option rather than folded into the total.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
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
                </div>
              </section>

              <SmartBlogSuggestions
                locale="en"
                currentSlug={slug.replace("/en/blog/", "")}
                currentCategory={metadata?.category}
                currentKeywords={metadata?.keywords}
              />

              <BlogRelatedLinks
                locale="en"
                services={[
                  { href: "/en/stage-rental", label: "Stage Rental" },
                  { href: "/en/led-screen-rental", label: "LED Screen Rental" },
                  { href: "/en/sound-light-rental", label: "Sound & Lighting Systems" },
                  { href: "/en/tent-rental", label: "Tent Rental" },
                  { href: "/en/podium-rental", label: "Stage Platform Rental" },
                ]}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Quick Quote
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Share your event details and we&apos;ll scope it quickly.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://wa.me/905453048671"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
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
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Published prices
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Our stage platform rates are published by m², with a worked
                  example.
                </p>
                <Link
                  className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
                  href="/en/podium-rental-prices"
                >
                  Stage platform prices 2026 →
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Services
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link className="hover:text-slate-900" href="/en/stage-rental">
                      Stage Rental
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-900" href="/en/led-screen-rental">
                      LED Screen Rental
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-900" href="/en/sound-light-rental">
                      Sound &amp; Lighting Systems
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-900" href="/en/tent-rental">
                      Tent Rental
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-slate-900" href="/en/av-rental-istanbul">
                      AV Rental Istanbul
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">
                  Related Articles
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/how-stage-rental-prices-are-determined"
                    >
                      How Are Stage Rental Prices Determined?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/corporate-event-planning-guide-2026"
                    >
                      2026 Corporate Event Planning Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/event-technical-scouting-and-planning-guide"
                    >
                      Event Technical Scouting and Planning Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:text-slate-900"
                      href="/en/blog/corporate-event-management"
                    >
                      Corporate Event Management Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
