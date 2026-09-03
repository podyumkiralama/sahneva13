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
import { buildArticleAuthor } from "@/lib/structuredData/articleIdentity";

export const revalidate = 86400;

const BLOG_PATH = "/en/blog/led-pixel-pitch-viewing-distance-guide";
const BLOG_URL = BASE_SITE_URL + BLOG_PATH;
const HERO_IMAGE =
  "/img/led/300m2-p19-indoor-led-ekran-kurumsal-etkinlik-sahneva.webp";
const CONFERENCE_IMAGE =
  "/img/led/kurumsal-konferans-led-ekran-sahne-isik-sahneva.webp";
const CURVED_IMAGE =
  "/img/led/absen-p19-kavisli-led-sahne-ust-bant-halka-sahneva.webp";
const CONTROL_IMAGE =
  "/img/led/p19-indoor-led-teknik-masa-kurumsal-konferans-sahneva.webp";
const PUBLISH_DATE = "2026-08-22T00:00:00+03:00";
const MODIFIED_DATE = PUBLISH_DATE;
const AUTHOR = "Sahneva Technical Production Team";
const DESCRIPTION =
  "Choose LED pixel pitch by viewing distance, content and camera use. Compare P1.9, P2.6 and P2.9 for conferences, launches and live events.";

const FAQ_ITEMS = [
  {
    question: "What LED pixel pitch should I consider for a 3 metre viewing distance?",
    answer:
      "P1.9 and P2.6 are sensible indoor candidates at a three metre minimum viewing distance, especially when the screen carries small text or is filmed. The final choice should be checked with the actual content, screen size and camera position rather than selected from distance alone.",
  },
  {
    question: "Is a lower pixel pitch always better?",
    answer:
      "No. A finer pitch adds pixel density, but it may add cost and processing load without a visible benefit for an audience that sits farther away. The useful target is the coarsest pitch that still makes the closest viewer, the content and the camera look right.",
  },
  {
    question: "Can a P2.9 LED wall be used for corporate presentations?",
    answer:
      "Yes, when the first row is far enough back and the presentation is designed for a large-format screen. Fine spreadsheets and small body text may justify P2.6 or P1.9, while bold slides, video and IMAG can work well on P2.9 at a suitable distance.",
  },
  {
    question: "How do I prepare content for an LED screen?",
    answer:
      "Ask the production team for the exact mapped pixel canvas, aspect ratio, frame rate and delivery format. Build the master content to that canvas, keep critical text inside a safe area and test playback before load-in.",
  },
  {
    question: "Does pixel pitch determine whether an LED wall is camera friendly?",
    answer:
      "Not by itself. Pitch affects the visible pixel structure and moire risk, while refresh configuration, scan behaviour, camera shutter, lens, distance and angle also affect the recorded image. A camera test is the reliable final check.",
  },
];

const TOC_ITEMS = [
  { href: "#what-pixel-pitch-means", label: "What pixel pitch means" },
  { href: "#viewing-distance", label: "Viewing-distance framework" },
  { href: "#p19-p26-p29", label: "P1.9, P2.6 and P2.9" },
  { href: "#content-resolution", label: "Content and native resolution" },
  { href: "#camera-curved-led", label: "Camera and curved LED" },
  { href: "#quote-checklist", label: "Quote checklist" },
];

const CORNERSTONE_LINKS = [
  { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  { href: "/en/led-screen-rental-prices", label: "LED Screen Rental Prices" },
];

export const metadata = {
  title: "LED Pixel Pitch and Viewing Distance Guide",
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({
    canonical: BLOG_PATH,
    en: BLOG_PATH,
  }),
  openGraph: {
    title: "LED Pixel Pitch and Viewing Distance Guide | Sahneva",
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: BASE_SITE_URL + HERO_IMAGE,
        width: 1600,
        height: 739,
        alt: "Large P1.9 LED screen installation at an indoor corporate event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Pixel Pitch and Viewing Distance Guide",
    description: DESCRIPTION,
    images: [BASE_SITE_URL + HERO_IMAGE],
  },
  keywords: [
    "pixel pitch viewing distance",
    "LED pixel pitch guide",
    "P1.9 LED screen",
    "P2.6 LED screen",
    "P2.9 LED screen",
    "LED viewing distance",
    "LED screen content resolution",
  ],
  authors: [{ name: AUTHOR }],
  author: AUTHOR,
  date: PUBLISH_DATE,
  image: HERO_IMAGE,
  readTime: "8–10 min read",
  category: "LED Screen Guides",
};

function Photo({ src, alt, caption, portrait = false }) {
  const figureClass = ["not-prose my-10", portrait ? "mx-auto max-w-3xl" : ""]
    .filter(Boolean)
    .join(" ");
  const frameClass = [
    "relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm",
    portrait ? "aspect-[3/4]" : "aspect-[16/9]",
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
          className="object-cover"
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
        <table className="min-w-[760px] w-full text-left text-sm">
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
        "@id": BLOG_URL + "#blogposting",
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        headline: "LED Pixel Pitch and Viewing Distance Guide",
        description: DESCRIPTION,
        url: BLOG_URL,
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        image: {
          "@type": "ImageObject",
          url: BASE_SITE_URL + HERO_IMAGE,
          width: 1600,
          height: 739,
        },
        author: buildArticleAuthor(AUTHOR),
        publisher: { "@id": ORGANIZATION_ID },
        isPartOf: { "@id": WEBSITE_ID },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Event planners, corporate buyers, agencies and technical production teams",
        },
        about: [
          { "@type": "Thing", name: "LED pixel pitch" },
          { "@type": "Thing", name: "LED viewing distance" },
          { "@type": "Thing", name: "P1.9, P2.6 and P2.9 LED panels" },
          { "@type": "Thing", name: "Event LED screen content resolution" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": BLOG_URL + "#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_SITE_URL + "/en" },
          { "@type": "ListItem", position: 2, name: "Blog", item: BASE_SITE_URL + "/en/blog" },
          { "@type": "ListItem", position: 3, name: "LED Pixel Pitch Guide", item: BLOG_URL },
        ],
      },
    ],
  };

  return <JsonLd id="ld-led-pixel-pitch-guide" data={data} />;
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
          { name: "LED Pixel Pitch Guide", url: BLOG_URL },
        ]}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Large P1.9 LED wall viewed from the audience area at an indoor event",
        }}
        pills={["LED Screen Guide", "Pixel Pitch", "Viewing Distance"]}
        title="LED Pixel Pitch"
        highlight="and Viewing Distance Guide"
        description="Select P1.9, P2.6 or P2.9 by the closest viewer, the content on screen and the camera plan—not by one distance formula alone."
        publishDate={PUBLISH_DATE}
        author={AUTHOR}
        readTime="8–10 min read"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={BLOG_PATH}
        currentCategory="LED Screen Guides"
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: "/en/led-screen-rental", label: "Explore LED Screen Rental" },
          { href: "/en/led-screen-rental-prices", label: "Understand LED Rental Costs" },
        ]}
        whatsappUrl="https://wa.me/905453048671?text=Hello%2C%20I%20need%20help%20selecting%20LED%20pixel%20pitch%20for%20an%20event."
      >
        <p>
          An LED wall can be the same physical size and still produce a very different result depending on
          its pixel pitch. The right choice starts with the closest audience position, but it does not end
          there. Presentation text, live camera feeds, screen dimensions, curved surfaces and the production
          budget all change what “close enough” means.
        </p>

        <p>
          This buyer&apos;s guide focuses on that decision. For equipment, installation and on-site operation,
          see <Link href="/en/led-screen-rental">LED screen rental</Link>. To compare the full quote scope—including
          panel area, processing, crew, rigging and logistics—use the dedicated{" "}
          <Link href="/en/led-screen-rental-prices">LED screen rental price guide</Link>.
        </p>

        <h2 id="what-pixel-pitch-means">What does LED pixel pitch mean?</h2>
        <p>
          Pixel pitch is the centre-to-centre distance between adjacent LED pixels, measured in millimetres.
          P1.9 therefore places pixels about 1.9 mm apart, while P2.9 places them about 2.9 mm apart. On two
          walls with the same physical dimensions, the P1.9 wall has more pixels and a higher native canvas.
        </p>
        <p>
          That extra density can make small text, interface graphics and fine lines look cleaner at close
          range. Once the audience moves farther away, however, the visible difference narrows. Buying the
          finest available pitch without checking the real viewing conditions can spend budget where the
          audience cannot see the benefit.
        </p>

        <Photo
          src={CONFERENCE_IMAGE}
          alt="Corporate conference stage using a multi-surface indoor LED screen design"
          caption="Pixel pitch is one part of the result. Screen scale, the nearest seats, slide design and sightlines must be reviewed together."
        />

        <h2 id="viewing-distance">Use viewing distance as a shortlist, not a guarantee</h2>
        <p>
          A common first-pass rule uses approximately one metre of minimum viewing distance for each
          millimetre of pitch. It is useful for creating a shortlist, not for signing off a system. At that
          threshold many viewers can still perceive pixel structure, particularly on bright high-contrast
          graphics. A more comfortable distance may be greater.
        </p>
        <p>
          Start with the <strong>closest meaningful viewer</strong>, not the final row. Then ask what that person
          must read. A product launch with small interface details may need a finer pitch than a concert wall
          showing bold motion graphics at the same distance.
        </p>

        <ComparisonTable
          label="LED pixel pitch and viewing-distance planning table"
          columns={["Pitch", "Practical first shortlist", "Typical event use", "Check before approval"]}
          rows={[
            ["P1.9", "About 2 m and beyond", "Close-view launches, detailed presentations, camera-led corporate shows", "Fine text, camera angle, processor map and total wall resolution"],
            ["P2.6", "About 2.6–4 m and beyond", "Conferences, dealer meetings, gala stages and exhibition presentations", "Closest seat, slide typography and camera rehearsal"],
            ["P2.9", "About 3–5 m and beyond", "Larger rooms, wider audiences, video-led programmes and side screens", "Whether small text is essential and how far the first row can be set back"],
            ["P3.9 or wider", "Longer audience distances", "Large stages and selected outdoor applications", "Brightness, weather rating, screen size and long-range sightlines"],
          ]}
        />

        <div className="not-prose my-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-slate-800">
          <p className="m-0 font-black">Important:</p>
          <p className="mt-2 mb-0 leading-7">
            These distances are planning ranges, not product warranties. Confirm the selected panel with a
            content sample and, when cameras are involved, a camera test under show lighting.
          </p>
        </div>

        <h2 id="p19-p26-p29">How P1.9, P2.6 and P2.9 fit real event briefs</h2>
        <p>
          Sahneva&apos;s current indoor rental stock includes Absen P1.9 and Unilumin P2.6 and P2.9 panels.
          That range allows the pitch to follow the brief instead of forcing every project onto one cabinet.
          A close-view product demonstration can prioritise P1.9, while a conference whose first row begins
          farther back may use P2.6 or P2.9 efficiently.
        </p>
        <p>
          The decision also changes with the wall&apos;s role. A central presentation wall carrying financial
          tables needs more detail than a high side banner carrying brand motion. One event can therefore use
          different pitches or screen treatments in different positions, provided the processing and content
          workflow is designed as one system.
        </p>

        <h3>When P1.9 earns its place</h3>
        <ul>
          <li>The first audience or camera position is close to the wall.</li>
          <li>The content contains small labels, interface detail or fine typography.</li>
          <li>The LED surface is part of a premium launch, broadcast or curved visual design.</li>
          <li>The native resolution gained from the finer pitch is actually used by the content.</li>
        </ul>

        <h3>When P2.6 or P2.9 may be the better buy</h3>
        <ul>
          <li>The audience is set farther back and the content uses event-scale typography.</li>
          <li>The project needs a larger total surface within a fixed production budget.</li>
          <li>Video, IMAG and brand motion are more important than spreadsheet-sized detail.</li>
          <li>A realistic content test shows no useful visual gain from a finer pitch.</li>
        </ul>

        <h2 id="content-resolution">Match the content canvas to the physical LED wall</h2>
        <p>
          Pitch and wall dimensions determine the wall&apos;s native pixel canvas. Divide the physical width in
          millimetres by the pitch to estimate horizontal pixels; do the same for height. A nominal 6 m × 3.5 m
          P2.6 wall, for example, is roughly 2,308 × 1,346 pixels before the exact cabinet map is confirmed.
        </p>
        <p>
          The production team should provide the final mapped resolution after cabinet layout and processor
          configuration. That is the canvas the content team needs—not simply “Full HD” or “4K”. Sending a
          16:9 video does not automatically make a non-16:9 scenic wall display correctly.
        </p>

        <ComparisonTable
          label="Content checks for an event LED screen"
          columns={["Content", "Why pitch matters", "Buyer check"]}
          rows={[
            ["Keynote slides", "Fine text and thin charts expose insufficient density first", "Approve the smallest font on the real wall or a representative panel"],
            ["Live camera feed", "Pixel structure and moire can appear differently through a lens", "Test shutter, angle, distance and show lighting"],
            ["Brand film", "Motion may look good at a wider pitch while static legal text does not", "Review both video and the smallest mandatory text"],
            ["Wide or curved canvas", "The physical aspect ratio may not match standard video", "Request an exact pixel map and safe-area template"],
          ]}
        />

        <h2 id="camera-curved-led">Camera use and curved LED need an additional test</h2>
        <p>
          Pixel pitch does not by itself make a wall camera friendly. Refresh configuration, scan behaviour,
          processor settings, camera shutter, lens choice, distance and angle all influence flicker, scan lines
          and moire. Include the actual camera chain in rehearsal whenever the event is streamed or recorded.
        </p>

        <Photo
          src={CONTROL_IMAGE}
          alt="Technical control position facing a P1.9 indoor LED wall during a corporate event"
          caption="A reliable camera result comes from testing the complete chain: LED wall, processor, content, show lighting and camera settings."
        />

        <p>
          Curved LED introduces another layer. Concave, convex and circular surfaces change the audience and
          camera angles across the wall. Content should be previewed on the mapped geometry, and seams,
          brightness continuity and the safe area should be assessed from more than one viewing position.
        </p>

        <Photo
          src={CURVED_IMAGE}
          alt="Absen P1.9 curved LED upper band and circular LED ring on an outdoor event stage"
          caption="A real P1.9 curved installation: the upper band, circular ring and central wall each require their own mapped canvas and viewing-angle check."
          portrait
        />

        <p>
          “Flexible LED” and cabinet-based curved LED are not interchangeable construction methods. If the
          brief includes an exhibition curve, cylindrical feature or circular ring, compare the two systems
          in the{" "}
          <Link href="/en/blog/flexible-vs-curved-led-screens-for-events">
            flexible vs. curved LED screens for events guide
          </Link>.
        </p>

        <h2 id="quote-checklist">What to include in an LED screen quote request</h2>
        <p>
          A useful brief lets suppliers quote the same scope. Share the following before comparing price:
        </p>
        <div className="not-prose my-8 grid gap-3 md:grid-cols-2">
          {[
            "Venue, hall and whether the screen is indoor or outdoor",
            "Screen width, height and any curved or split surfaces",
            "Closest audience seat and planned camera positions",
            "Content types: slides, video, IMAG, streaming or sponsor loops",
            "The smallest important text or graphic detail",
            "Build, rehearsal, show and de-rig access windows",
            "Rigging or ground-support constraints and available power",
            "Processor, operator, spare-panel and standby requirements",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-violet-100 bg-violet-50 px-5 py-4 text-sm font-semibold leading-6 text-slate-800">
              {item}
            </div>
          ))}
        </div>
        <p>
          Ask every supplier to state the proposed pitch, panel series, total active area, native mapped
          resolution, processor and included technical crew. This makes a{" "}
          <Link href="/en/led-screen-rental-prices">LED rental price comparison</Link> meaningful instead of
          comparing two unexplained square-metre totals.
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
            { href: "/en/led-screen-rental", label: "LED Screen Rental" },
            { href: "/en/led-screen-rental-prices", label: "LED Screen Rental Prices" },
            { href: "/en/event-production-istanbul", label: "Event Production Istanbul" },
            { href: "/en/corporate-events", label: "Corporate Event Production" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
