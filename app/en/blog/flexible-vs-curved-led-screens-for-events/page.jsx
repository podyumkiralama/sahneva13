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

const BLOG_PATH = "/en/blog/flexible-vs-curved-led-screens-for-events";
const BLOG_URL = BASE_SITE_URL + BLOG_PATH;
const HERO_IMAGE =
  "/img/led/absen-p19-kavisli-led-depo-on-montaj-sahneva.webp";
const CIRCLE_REAR_IMAGE =
  "/img/led/absen-p19-sekiz-panel-360-dairesel-led-arka-baglanti-sahneva.webp";
const REHEARSAL_IMAGE =
  "/img/led/absen-p19-kavisli-led-acik-hava-teknik-prova-sahneva.webp";
const FINAL_STAGE_IMAGE =
  "/img/led/absen-p19-kavisli-led-sahne-ust-bant-halka-sahneva.webp";
const PUBLISH_DATE = "2026-08-26T13:00:00+03:00";
const MODIFIED_DATE = PUBLISH_DATE;
const AUTHOR = "Sahneva Technical Production Team";
const DESCRIPTION =
  "Compare flexible LED modules with curved rental cabinets and see when Absen P1.9 fits circular exhibition stands and event stages in Turkey.";

const FAQ_ITEMS = [
  {
    question: "Is a flexible LED screen the same as a curved LED screen?",
    answer:
      "Not necessarily. Flexible LED usually refers to bendable or soft modules mounted to a shaped surface. A curved rental LED screen can instead use cabinet-based panels joined at planned angles. Both can produce curved forms, but their structure, servicing and suitable applications differ.",
  },
  {
    question: "Can P1.9 rental panels form a complete 360-degree circle?",
    answer:
      "Yes, when the selected cabinet geometry, support method and project dimensions allow it. In the Sahneva example shown here, eight Absen P1.9 panels were joined at 45 degrees each to form one complete 360-degree ring.",
  },
  {
    question: "Is the eight-panel LED ring the only available diameter?",
    answer:
      "No. It is the smallest circular configuration demonstrated with this panel setup. Larger diameters can be planned by changing the panel count and geometry, subject to structural support, content mapping, sightlines and the actual event brief.",
  },
  {
    question: "Are the joins on a curved rental LED wall completely invisible?",
    answer:
      "No responsible supplier should promise invisible joins under every condition. Accurate cabinet alignment, suitable content, brightness calibration and the intended viewing distance can create a visually continuous canvas, but the result should be checked from the audience and camera positions.",
  },
  {
    question: "When is a curved P1.9 LED screen useful for an event?",
    answer:
      "It is a strong candidate for close-view product launches, exhibition stands, circular stage elements and premium corporate events where fine content detail and a controlled curved form matter. The pitch and geometry still need to match the nearest viewer, camera plan and content canvas.",
  },
  {
    question: "What should I send for a curved LED screen quotation?",
    answer:
      "Send the venue, event date, indoor or outdoor use, required width and height, target radius or diameter, nearest viewing distance, camera positions, content type, installation window and any rigging or ground-support restrictions.",
  },
];

const TOC_ITEMS = [
  { href: "#quick-answer", label: "Quick answer" },
  { href: "#what-flexible-means", label: "What flexible LED means" },
  { href: "#curved-rental-cabinets", label: "Curved rental cabinets" },
  { href: "#comparison", label: "Side-by-side comparison" },
  { href: "#real-p19-case", label: "Real P1.9 circular case" },
  { href: "#choose-the-system", label: "How to choose" },
  { href: "#quote-brief", label: "Quotation brief" },
];

const CORNERSTONE_LINKS = [
  { href: "/en/led-screen-rental", label: "LED Screen Rental in Turkey" },
  { href: "/en/led-screen-rental-prices", label: "LED Screen Rental Prices" },
];

export const metadata = {
  title: "Flexible vs Curved LED Screens for Events",
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({
    canonical: BLOG_PATH,
    en: BLOG_PATH,
  }),
  openGraph: {
    title: "Flexible vs Curved LED Screens for Events | Sahneva",
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: BASE_SITE_URL + HERO_IMAGE,
        width: 1600,
        height: 900,
        alt: "Absen P1.9 curved LED panels preassembled for an event installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexible vs Curved LED Screens for Events",
    description: DESCRIPTION,
    images: [BASE_SITE_URL + HERO_IMAGE],
  },
  keywords: [
    "flexible LED screen rental Turkey",
    "flexible vs curved LED screen",
    "curved P1.9 LED Istanbul",
    "curved LED screen rental Turkey",
    "circular LED screen for events",
    "360 degree LED ring",
    "curved LED exhibition stand",
  ],
  authors: [{ name: AUTHOR }],
  author: AUTHOR,
  date: PUBLISH_DATE,
  image: HERO_IMAGE,
  readTime: "8–10 min read",
  category: "LED Screen Guides",
};

function Photo({ src, alt, caption, portrait = false, position = "center" }) {
  const figureClass = ["not-prose my-10", portrait ? "mx-auto max-w-3xl" : ""]
    .filter(Boolean)
    .join(" ");
  const frameClass = [
    "relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm",
    portrait ? "aspect-[4/5]" : "aspect-[16/9]",
  ].join(" ");

  return (
    <figure className={figureClass}>
      <div className={frameClass}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={
            portrait
              ? "(max-width: 768px) 100vw, 720px"
              : "(max-width: 1024px) 100vw, 1100px"
          }
          className={["object-cover", position === "top" ? "object-top" : "object-center"].join(" ")}
        />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-slate-500">{caption}</figcaption>
    </figure>
  );
}

function ComparisonTable({ columns, rows, label }) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div role="region" aria-label={label} tabIndex={0} className="overflow-x-auto">
        <table className="min-w-[820px] w-full text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              {columns.map((column) => (
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
        headline: "Flexible vs. Curved LED Screens for Events",
        description: DESCRIPTION,
        url: BLOG_URL,
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        image: {
          "@type": "ImageObject",
          url: BASE_SITE_URL + HERO_IMAGE,
          width: 1600,
          height: 900,
        },
        author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Sahneva" },
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        audience: {
          "@type": "BusinessAudience",
          audienceType:
            "Event planners, exhibition stand designers, agencies, corporate buyers and technical production teams",
        },
        about: [
          { "@type": "Thing", name: "Flexible LED screen modules" },
          { "@type": "Thing", name: "Curved rental LED cabinets" },
          { "@type": "Thing", name: "Absen P1.9 curved LED screen" },
          { "@type": "Thing", name: "Circular LED screens for events" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": BLOG_URL + "#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_SITE_URL + "/en" },
          { "@type": "ListItem", position: 2, name: "Blog", item: BASE_SITE_URL + "/en/blog" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Flexible vs Curved LED Screens",
            item: BLOG_URL,
          },
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

  return <JsonLd id="ld-flexible-vs-curved-led-guide" data={data} />;
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
          { name: "Flexible vs Curved LED Screens", url: BLOG_URL },
        ]}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Absen P1.9 curved LED panels preassembled in the Sahneva depot",
        }}
        pills={["LED Screen Guide", "Curved P1.9", "Event Design"]}
        title="Flexible vs. Curved LED Screens"
        highlight="for Events"
        description="Understand the difference between bendable LED modules and angle-set rental cabinets, then choose the right curved display method for a stand, stage or circular installation."
        publishDate={PUBLISH_DATE}
        author={AUTHOR}
        readTime="8–10 min read"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={BLOG_PATH}
        currentCategory="LED Screen Guides"
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: "/en/led-screen-rental", label: "Explore Curved LED Rental" },
          { href: "/en/led-screen-rental-prices", label: "Review LED Rental Costs" },
        ]}
        whatsappUrl="https://wa.me/905453048671?text=Hello%2C%20I%20need%20a%20curved%20or%20circular%20P1.9%20LED%20screen%20for%20an%20event."
      >
        <p>
          A search for <strong>flexible LED screen rental in Turkey</strong> can describe two very
          different technical requests. One buyer may need soft LED modules that follow a custom-built
          surface. Another may simply want a clean curve, a circular band or a cylindrical display for an
          exhibition stand or event stage. Those results do not always require the same product.
        </p>

        <p>
          This guide explains the difference without treating one construction method as universally
          superior. It also shows a real Sahneva Absen P1.9 installation in which eight rental panels were
          joined at 45 degrees to form a complete 360-degree circle. For equipment, installation and on-site
          operation, see <Link href="/en/led-screen-rental">LED screen rental in Turkey</Link>.
        </p>

        <h2 id="quick-answer">Quick answer: start with the shape, not the word “flexible”</h2>
        <div className="not-prose my-8 rounded-3xl border border-violet-200 bg-violet-50 p-6 text-slate-900 md:p-8">
          <p className="m-0 text-lg font-black text-violet-950">Planning a curved exhibition stand?</p>
          <p className="mt-3 mb-0 leading-7">
            If “flexible LED” in your brief means a smooth curved display rather than a bendable soft module,
            an angle-set P1.9 rental-cabinet system may be the better fit. It combines fine pixel pitch,
            repeatable cabinet geometry and serviceable rental hardware. The final radius, content map,
            viewing distance and camera plan still need project-specific confirmation.
          </p>
        </div>

        <p>
          Fine pitch does not automatically make every P1.9 system higher resolution than every flexible
          product. Resolution depends on the pitch, active surface and exact product being compared. In the
          same way, “seamless” should not be read as a promise that cabinet joins disappear under every
          camera and lighting condition. A better target is a carefully aligned, visually continuous canvas
          at the intended audience and camera positions.
        </p>

        <h2 id="what-flexible-means">What does “flexible LED screen” usually mean?</h2>
        <p>
          In product terminology, flexible or soft LED commonly refers to bendable modules that are fixed to
          a shaped support or cabinet. The module can follow a tighter or less regular curve than a standard
          rectangular rental cabinet. That makes the method useful for columns, sculptural forms and
          permanent or semi-permanent structures whose radius cannot be created with a conventional cabinet
          angle.
        </p>

        <p>
          The freedom of the module is only one part of the system. A supplier still has to explain the
          support surface, module access, power and data routing, replacement method, heat management,
          processor map and transport protection. “Flexible” is therefore not a complete technical
          specification by itself.
        </p>

        <h3>Questions to ask when a quotation says flexible LED</h3>
        <ul>
          <li>Is the proposed product a bendable soft module or a cabinet-based curved rental system?</li>
          <li>What pixel pitch, brightness and refresh configuration is being quoted?</li>
          <li>What radius can the complete system achieve—not only the loose module?</li>
          <li>How are failed modules, power units and data components accessed during an event?</li>
          <li>Is the shaped support included, and who is responsible for its structural design?</li>
        </ul>

        <h2 id="curved-rental-cabinets">How curved rental LED cabinets create a shaped screen</h2>
        <p>
          A cabinet-based curved rental wall uses repeatable panel units joined at a planned angle. The curve
          is created by the geometry of those joins rather than by bending the LED face freely. The approach
          is well suited to event production because panels remain transportable, replaceable and reusable
          across different projects.
        </p>

        <p>
          Sahneva&apos;s photographed application uses Absen P1.9 panels. Before load-in, the panels were
          preassembled in the depot to verify the intended form, rear access and connection path. This step
          is especially important for a <strong>curved P1.9 LED screen in Istanbul</strong> or a touring
          project elsewhere in Turkey because the physical geometry and the pixel canvas have to reach the
          venue as one coordinated plan.
        </p>

        <h2 id="comparison">Flexible modules vs. curved rental cabinets</h2>
        <ComparisonTable
          label="Comparison of flexible LED modules and curved rental LED cabinets"
          columns={["Decision point", "Flexible or soft LED modules", "Curved rental LED cabinets"]}
          rows={[
            [
              "How the shape is made",
              "Bendable modules follow a custom support surface",
              "Rigid cabinet units are joined at planned, repeatable angles",
            ],
            [
              "Best-fit geometry",
              "Tight, irregular or sculptural forms that need module-level freedom",
              "Planned concave, convex, polygonal or circular event forms",
            ],
            [
              "Pixel pitch",
              "Depends on the exact flexible product quoted",
              "Depends on the cabinet series; the Sahneva case shown here uses P1.9",
            ],
            [
              "Event servicing",
              "Access and replacement depend heavily on the custom support design",
              "Rental cabinets and connections can be tested, transported and replaced as repeatable units",
            ],
            [
              "Setup workflow",
              "Often requires a project-specific shaped base and module installation plan",
              "Can be preassembled, numbered and rebuilt to an approved geometry on site",
            ],
            [
              "What the buyer must approve",
              "Radius, module support, service access, surface continuity and pixel map",
              "Panel count, join angles, support method, sightlines, alignment and pixel map",
            ],
          ]}
        />

        <p>
          The practical choice follows the design. A tightly wrapped architectural column may justify soft
          modules. A circular hanging band, curved stage header or reusable exhibition feature may be better
          served by angle-set rental cabinets. The comparison must use named products and drawings; broad
          labels alone do not establish image quality or cost.
        </p>

        <h2 id="real-p19-case">Real P1.9 case: eight panels, 45 degrees, one circle</h2>
        <p>
          In the workshop setup below, eight Absen P1.9 panels were joined at 45-degree intervals. The
          geometry is direct: <strong>8 × 45° = 360°</strong>. This created the smallest complete circular
          configuration demonstrated with this panel setup. It was used as a physical check before the
          curved elements were integrated into the event stage.
        </p>

        <Photo
          src={CIRCLE_REAR_IMAGE}
          alt="Rear view of eight Absen P1.9 LED panels forming a 360-degree circle at 45-degree intervals"
          caption="The rear view documents the real geometry: eight panels joined at 45 degrees form one complete 360-degree LED ring."
          portrait
        />

        <p>
          This is not a statement that every circular project must use eight panels. Larger diameters can be
          developed by changing the panel count and planned geometry, provided the support method, load,
          content resolution and sightlines are recalculated. The correct drawing should state the active
          diameter, screen height, panel count and final mapped pixel canvas.
        </p>

        <Photo
          src={REHEARSAL_IMAGE}
          alt="Outdoor technical rehearsal with curved P1.9 LED bands and a circular LED ring"
          caption="Technical rehearsal checks the complete system: support, screen geometry, mapped content, viewing angles and show control."
        />

        <Photo
          src={FINAL_STAGE_IMAGE}
          alt="Completed event stage with a curved P1.9 LED upper band and circular LED ring"
          caption="The completed application combined a curved upper band, circular LED ring and central screen. Each surface had its own geometry and content map."
          portrait
          position="top"
        />

        <h2 id="choose-the-system">Which system fits your event design?</h2>
        <p>
          Use the visual objective to create a shortlist, then let the technical drawing decide the system.
          These are common starting points, not automatic product selections:
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Curved exhibition stand",
              text: "Angle-set fine-pitch cabinets can suit close-view branded content when the target radius matches the available geometry.",
            },
            {
              title: "Circular stage ring",
              text: "Confirm the inner and outer diameter, support method, service access and whether the audience sees the front, back or both sides.",
            },
            {
              title: "Sculptural or irregular surface",
              text: "Soft modules may be more appropriate when the form cannot be described by repeatable cabinet angles.",
            },
            {
              title: "Curved panoramic backdrop",
              text: "Cabinet pitch, nearest viewer, camera angle and the content safe area must be approved together.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="m-0 text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-3 mb-0 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <h3>Viewing distance and content still control the result</h3>
        <p>
          Shape does not replace the normal LED selection process. The nearest viewer, smallest text,
          brightness, camera use and active screen dimensions still determine whether P1.9, P2.6, P2.9 or
          another system is appropriate. Use the separate{" "}
          <Link href="/en/blog/led-pixel-pitch-viewing-distance-guide">
            LED pixel pitch and viewing-distance guide
          </Link>{" "}
          for that decision.
        </p>

        <h3>Curved content needs an exact pixel map</h3>
        <p>
          A standard 16:9 film rarely maps perfectly onto a circular ring or curved header. Request the
          active pixel canvas for every surface, then build the content around visible zones, join positions
          and audience angles. If the event is filmed, test camera shutter, moiré, brightness and content
          movement during rehearsal.
        </p>

        <p>
          The LED geometry also has to sit inside the wider stage, truss, power and access plan. For a brief
          that includes the whole show rather than only the screen, review{" "}
          <Link href="/en/event-production-company-turkey">
            event stage production support in Turkey
          </Link>.
        </p>

        <h2 id="quote-brief">Brief to send for a curved or flexible LED quotation</h2>
        <p>
          A useful quotation names the proposed construction method and makes competing offers comparable.
          Send these details before asking for a final system and price:
        </p>

        <div className="not-prose my-8 grid gap-3 md:grid-cols-2">
          {[
            "Venue, city, event date and indoor or outdoor use",
            "A drawing with target width, height, radius or diameter",
            "Whether the surface is concave, convex, circular or irregular",
            "Closest audience position and all camera positions",
            "Content type, smallest text and required pixel canvas",
            "Ground-supported, flown or integrated scenic structure",
            "Build, rehearsal, show and de-rig access windows",
            "Processor, operator, spare panel and backup expectations",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>

        <p>
          Ask the supplier to state whether the offer uses soft modules or rental cabinets, the exact panel
          series and pitch, panel count, support structure, active dimensions, mapped resolution, processing,
          installation crew and exclusions. The{" "}
          <Link href="/en/led-screen-rental-prices">LED screen rental price guide</Link> explains the other
          line items that should appear in a comparable quotation.
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
            { href: "/en/led-screen-rental", label: "LED Screen Rental in Turkey" },
            { href: "/en/led-screen-rental-prices", label: "LED Screen Rental Prices" },
            { href: "/en/event-production-company-turkey", label: "Event Production in Turkey" },
            { href: "/en/truss-rental", label: "Truss and Support Systems" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
