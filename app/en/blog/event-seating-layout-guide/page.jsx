import Image from "next/image";
import Link from "next/link";
import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import JsonLd from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const BLOG_PATH = "/en/blog/event-seating-layout-guide";
const BLOG_URL = BASE_SITE_URL + BLOG_PATH;
const HERO_IMAGE = "/img/sandalye/1.webp";
const THEATRE_IMAGE = "/img/sandalye/4.webp";
const DINNER_IMAGE = "/img/sandalye/6.webp";
const OUTDOOR_IMAGE = "/img/sandalye/sandalye-masa-kiralama-sahneva.webp";
const PUBLISH_DATE = "2026-08-22T00:00:00+03:00";
const MODIFIED_DATE = PUBLISH_DATE;
const AUTHOR = "Sahneva Event Operations Team";
const DESCRIPTION =
  "Compare theatre, classroom, banquet, cabaret and cocktail event layouts. Plan capacity, sightlines, service aisles, accessibility and furniture rental.";

const FAQ_ITEMS = [
  {
    question: "Which event seating layout fits the most guests?",
    answer:
      "Theatre style normally gives the highest seated density because it uses rows of chairs without tables. The approved count still depends on the venue plan, aisle widths, exits, accessibility spaces, stage footprint and local safety requirements.",
  },
  {
    question: "What is the difference between banquet and cabaret seating?",
    answer:
      "Banquet seating usually places guests around the full table for dining and conversation. Cabaret seating leaves the stage-facing side open, improving sightlines and note-taking but reducing the number of guests at each table.",
  },
  {
    question: "When should I choose classroom seating?",
    answer:
      "Choose classroom seating when attendees need a writing surface for training, workshops, laptops or detailed notes. It needs more floor area than theatre style and requires careful power, cable and service planning.",
  },
  {
    question: "Does cocktail layout mean there are no chairs?",
    answer:
      "Not necessarily. A cocktail plan is mainly standing and circulation-led, but it should normally include selected seats or lounge areas for accessibility, longer dwell times and guests who need to rest.",
  },
  {
    question: "What information is needed for a table and chair rental quote?",
    answer:
      "Share the venue, date, guest count, programme, preferred layout, meal or service format, indoor or outdoor conditions, access times and required furniture finish. A scaled floor plan and stage dimensions make the quote more accurate.",
  },
];

const TOC_ITEMS = [
  { href: "#choose-by-programme", label: "Choose by programme" },
  { href: "#layout-comparison", label: "Compare five layouts" },
  { href: "#capacity-safety", label: "Capacity and safety" },
  { href: "#sightlines-service", label: "Sightlines and service flow" },
  { href: "#rental-brief", label: "Furniture rental brief" },
  { href: "#faq", label: "Frequently asked questions" },
];

const CORNERSTONE_LINKS = [
  { href: "/en/table-chair-rental", label: "Table and Chair Rental" },
  { href: "/en/corporate-events", label: "Corporate Event Production" },
];

export const metadata = {
  title: "Event Seating Layout Guide: 5 Formats Compared",
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({
    canonical: BLOG_PATH,
    en: BLOG_PATH,
  }),
  openGraph: {
    title: "Event Seating Layout Guide | Sahneva",
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: BASE_SITE_URL + HERO_IMAGE,
        width: 2048,
        height: 1536,
        alt: "Banquet seating layout prepared in a large event ballroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Seating Layout Guide: 5 Formats Compared",
    description: DESCRIPTION,
    images: [BASE_SITE_URL + HERO_IMAGE],
  },
  keywords: [
    "event seating layout",
    "banquet seating layout",
    "theatre seating layout",
    "classroom seating layout",
    "cabaret seating layout",
    "cocktail event layout",
    "event table and chair rental",
  ],
  authors: [{ name: AUTHOR }],
  author: AUTHOR,
  date: PUBLISH_DATE,
  image: HERO_IMAGE,
  readTime: "8–10 min read",
  category: "Event Planning Guides",
};

function Photo({ src, alt, caption, position = "center" }) {
  return (
    <figure className="not-prose my-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 1100px"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function ComparisonTable({ rows }) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div
        role="region"
        aria-label="Event seating layout comparison"
        tabIndex={0}
        className="overflow-x-auto"
      >
        <table className="min-w-[820px] w-full text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              {["Layout", "Best for", "Space tendency", "Main advantage", "Main trade-off"].map((column) => (
                <th key={column} scope="col" className="px-5 py-4 font-bold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {rows.map((row) => (
              <tr key={row[0]} className="align-top">
                {row.map((cell) => (
                  <td key={cell} className="px-5 py-4 leading-6">
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

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": BLOG_URL + "#article",
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        headline: "Event Seating Layout Guide: Theatre, Classroom, Banquet, Cabaret and Cocktail",
        description: DESCRIPTION,
        url: BLOG_URL,
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        image: {
          "@type": "ImageObject",
          url: BASE_SITE_URL + HERO_IMAGE,
          width: 2048,
          height: 1536,
        },
        author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Sahneva" },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Event planners, corporate buyers, venues, agencies and PCO teams",
        },
        about: [
          { "@type": "Thing", name: "Event seating layout" },
          { "@type": "Thing", name: "Banquet seating layout" },
          { "@type": "Thing", name: "Theatre, classroom, cabaret and cocktail layouts" },
          { "@type": "Thing", name: "Event table and chair rental" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": BLOG_URL + "#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_SITE_URL + "/en" },
          { "@type": "ListItem", position: 2, name: "Blog", item: BASE_SITE_URL + "/en/blog" },
          { "@type": "ListItem", position: 3, name: "Event Seating Layout Guide", item: BLOG_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": BLOG_URL + "#faq",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <JsonLd id="ld-event-seating-layout-guide" data={data} />;
}

export default function Page() {
  return (
    <>
      <StructuredData />

      <BlogLayout
        locale="en"
        breadcrumbItems={[
          { name: "Home", url: BASE_SITE_URL + "/en" },
          { name: "Blog", url: BASE_SITE_URL + "/en/blog" },
          { name: "Event Seating Layout Guide", url: BLOG_URL },
        ]}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Round banquet tables and chairs arranged in a large corporate event ballroom",
        }}
        pills={["Event Planning", "Seating Layout", "Buyer Guide"]}
        title="Event Seating Layout Guide"
        highlight="5 Formats Compared"
        description="Compare theatre, classroom, banquet, cabaret and cocktail layouts by programme, capacity, sightline, service and furniture needs."
        publishDate={PUBLISH_DATE}
        author={AUTHOR}
        readTime="8–10 min read"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={BLOG_PATH}
        currentCategory="Event Planning Guides"
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: "/en/table-chair-rental", label: "Explore Table and Chair Rental" },
          { href: "/en/corporate-events", label: "Plan a Corporate Event" },
        ]}
        whatsappUrl="https://wa.me/905453048671?text=Hello%2C%20I%20need%20tables%2C%20chairs%20and%20a%20seating%20layout%20for%20an%20event."
      >
        <p>
          A seating plan is not decoration added after the programme is finished. It determines how many
          people can enter, what they can see, how they take notes, how catering moves and how quickly the room
          can be cleared. The same ballroom can therefore support very different guest counts depending on
          whether it is set in theatre, classroom, banquet, cabaret or cocktail style.
        </p>
        <p>
          This guide helps buyers choose a format before requesting{" "}
          <Link href="/en/table-chair-rental">table and chair rental</Link>. The final drawing must still be
          approved against the venue&apos;s capacity, exits, accessibility provisions and local safety rules.
        </p>

        <h2 id="choose-by-programme">Choose the layout from the programme, not the room photo</h2>
        <p>
          Start with what guests need to do. If they mainly watch a keynote, rows of chairs make sense. If they
          write or use laptops, they need a table surface. If dinner and conversation drive the evening, table
          service and guest interaction take priority. A layout copied from another event may look attractive
          while working against your own programme.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["Watch", "Theatre", "Keynotes, ceremonies, panels and high-capacity sessions"],
            ["Learn", "Classroom", "Training, workshops, laptops and detailed note-taking"],
            ["Dine", "Banquet", "Gala dinners, awards and hosted table conversation"],
            ["Watch + dine", "Cabaret", "Stage-led programmes with tables facing forward"],
            ["Move + network", "Cocktail", "Receptions, launches and free-flowing brand experiences"],
          ].map(([goal, layout, use]) => (
            <div key={layout} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="m-0 text-xs font-black uppercase tracking-[0.16em] text-violet-700">{goal}</p>
              <h3 className="mt-2 mb-0 text-xl font-black text-slate-950">{layout}</h3>
              <p className="mt-2 mb-0 text-sm leading-6 text-slate-600">{use}</p>
            </div>
          ))}
        </div>

        <Photo
          src={HERO_IMAGE}
          alt="Corporate gala ballroom prepared with round banquet tables and black chairs"
          caption="A banquet layout is a full operational plan: guest tables, catering routes, production positions and emergency paths all share the room."
        />

        <h2 id="layout-comparison">Theatre, classroom, banquet, cabaret and cocktail compared</h2>
        <ComparisonTable
          rows={[
            ["Theatre", "Keynotes, ceremonies, conferences", "Highest seated density", "Clear focus on the stage", "No writing or dining surface"],
            ["Classroom", "Training, workshops, laptops", "Lower than theatre", "A work surface for every attendee", "More floor area, power and cable planning"],
            ["Banquet", "Gala dinners, awards, hosted meals", "Medium to low", "Dining and table conversation", "Some guests sit with their back or side to the stage"],
            ["Cabaret", "Awards, corporate shows, stage-led dining", "Lower than banquet", "Tables open toward the stage", "Fewer seats per table"],
            ["Cocktail", "Receptions, networking, launches", "High standing capacity", "Movement and informal interaction", "Limited seating and less focus during long presentations"],
          ]}
        />

        <h3>Theatre seating layout</h3>
        <p>
          Theatre style uses forward-facing rows with one focal direction. It is efficient for conferences,
          opening ceremonies, panel sessions and graduations. The critical details are row spacing, central
          and side aisles, wheelchair positions, camera lanes and whether the final rows can still see the
          stage and screen.
        </p>

        <Photo
          src={THEATRE_IMAGE}
          alt="Outdoor theatre-style seating with white chairs facing an event stage"
          caption="Theatre style gives strong capacity, but the centre aisle, side access, stage height and rear sightlines must remain part of the drawing."
          position="center 62%"
        />

        <h3>Classroom seating layout</h3>
        <p>
          Classroom style places chairs behind narrow tables facing the stage. It suits training, exams,
          workshops and sessions where attendees use laptops or documents. Confirm table depth, chair pull-back
          space, cable routes, charging points and whether facilitators need to move between rows.
        </p>

        <h3>Banquet seating layout</h3>
        <p>
          Banquet style uses round or rectangular dining tables with seating around the full perimeter. It
          supports conversation and formal service, but not every guest naturally faces the stage. Screen
          positions, chair angles and table spacing should be reviewed from the side and rear tables—not only
          from the VIP position.
        </p>

        <Photo
          src={DINNER_IMAGE}
          alt="Round banquet tables with black chairs facing a live event stage"
          caption="The space between tables must work for guests, waiting staff and production crew after every chair is occupied."
        />

        <h3>Cabaret seating layout</h3>
        <p>
          Cabaret style keeps the stage-facing side of a round table open. Guests retain a table surface while
          looking forward without turning around. It is useful for awards, dealer meetings and entertainment-led
          dinners, but the reduced seats per table increase the floor area required per guest.
        </p>

        <h3>Cocktail event layout</h3>
        <p>
          Cocktail style is built around standing guests, poseur tables and circulation. It works for launches,
          networking and short receptions where people move between content or brand zones. Add selected lounge
          or standard-height seating, keep service queues out of main routes and avoid placing tall tables where
          they block the stage or LED screen.
        </p>

        <h2 id="capacity-safety">Calculate capacity from net usable space</h2>
        <p>
          Do not divide the room&apos;s headline square metres by a generic “space per person” figure and call
          the plan finished. Remove the stage, backstage, technical control, screens, catering stations, bars,
          registration, storage and fixed obstructions first. What remains is the net planning area.
        </p>
        <p>
          The venue&apos;s approved occupancy and fire plan are the upper boundaries. The working capacity may
          be lower once the programme and production footprint are added. A final scaled plan should show:
        </p>
        <ul>
          <li>the number and dimensions of every table and chair type;</li>
          <li>main and cross aisles, exits and no-storage zones;</li>
          <li>accessible routes, wheelchair positions and companion seating;</li>
          <li>stage, steps, screens, speakers, cameras and technical control;</li>
          <li>catering, registration, cloakroom and queue positions;</li>
          <li>outdoor ground conditions and a weather plan where relevant.</li>
        </ul>

        <Photo
          src={OUTDOOR_IMAGE}
          alt="Outdoor banquet installation with dining tables, chairs, production cases and a covered stage area"
          caption="Outdoor plans need the same operational detail as ballrooms, plus ground, weather, lighting, power and protected service routes."
        />

        <h2 id="sightlines-service">Test sightlines and service flow with the room occupied</h2>
        <p>
          A clear view in an empty hall can disappear when guests stand, waiters circulate or a camera platform
          is added. Plot the closest and farthest seats, check side angles to the LED screen, and make sure table
          centrepieces do not block the stage. For banquet and cabaret formats, test a seated eye line from more
          than one table orientation.
        </p>
        <p>
          Service paths must also work after chairs are pulled back. Catering teams need a route that does not
          cross the show-call position, camera lane or emergency aisle. For a combined technical and operational
          plan, the{" "}<Link href="/en/blog/corporate-event-planning-guide-2026">corporate event planning
          guide</Link> covers run-of-show, load-in and rehearsal decisions.
        </p>

        <h2 id="rental-brief">Brief the table and chair supplier on the whole room</h2>
        <p>
          A furniture list alone cannot confirm that the layout works. Send a brief that explains both the
          quantities and the programme around them:
        </p>
        <div className="not-prose my-8 grid gap-3 md:grid-cols-2">
          {[
            "Venue, hall, date and indoor or outdoor conditions",
            "Confirmed and maximum expected guest counts",
            "Programme format and required layout",
            "Stage, LED screen, camera and technical-control footprint",
            "Meal, coffee, bar and waiting-service format",
            "Furniture style, table size, linen and colour requirements",
            "Accessible seating and reserved-position requirements",
            "Delivery, setup, inspection and collection windows",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800">
              {item}
            </div>
          ))}
        </div>
        <p>
          Sahneva can coordinate furniture delivery, placement and collection with{" "}
          <Link href="/en/stage-rental">stage installation</Link>,{" "}
          <Link href="/en/led-screen-rental">LED screen production</Link> and the rest of the event load-in.
          That shared schedule helps prevent furniture from blocking rigging, cable routes or equipment access.
        </p>

        <h2 id="faq">Frequently asked questions</h2>
        {FAQ_ITEMS.map((item) => (
          <section key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </section>
        ))}

        <BlogRelatedLinks
          locale="en"
          services={[
            { href: "/en/table-chair-rental", label: "Table and Chair Rental" },
            { href: "/en/corporate-events", label: "Corporate Event Production" },
            { href: "/en/tent-rental", label: "Event Tent Rental" },
            { href: "/en/stage-rental", label: "Stage Rental" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
