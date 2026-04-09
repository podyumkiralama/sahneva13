import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONFIG ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const BLOG_PATH = "/en/blog/choosing-the-right-podium-for-your-event";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const PODIUM_SERVICE_PATH = "/en/podium-rental";
const STAGE_SERVICE_PATH = "/en/stage-rental";
const CORPORATE_SERVICE_PATH = "/en/corporate-events";
const TENT_SERVICE_PATH = "/en/tent-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const SOUND_LIGHT_PATH = "/en/sound-light-rental";

const FEATURED_IMAGE = "/img/galeri/podyum-kiralama-1.webp";

const PUBLISH_DATE = "2025-12-28T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/en/blog/choosing-the-right-podium-for-your-event/page.jsx",
  "2026-02-05T00:00:00+03:00"
);
const AUTHOR_NAME = "Sahneva Editorial Team";

const WHATSAPP_NUMBER = "905453048671";
const PHONE_E164 = "+905453048671";
const LEADMAGNET_MSG = encodeURIComponent(
  "Hello, I'd like free advice on choosing the right podium/stage for my event. I can share the event type and area dimensions."
);
const LEADMAGNET_WA = `https://wa.me/${WHATSAPP_NUMBER}?text=${LEADMAGNET_MSG}`;

/* ================== SECTION IMAGES ================== */
const SECTION_IMAGES = {
  hero: {
    src: "/img/galeri/podyum-kiralama-1.webp",
    alt: "Sahneva - Podium and stage setup tailored to the event",
  },
  kurumsal: {
    src: "/img/galeri/podyum-kiralama-2.webp",
    alt: "Sahneva - In-hotel corporate meeting stage and podium setup",
  },
  dugun: {
    src: "/img/galeri/podyum-kiralama-6.webp",
    alt: "Sahneva - Low and accessible podium for wedding and engagement events",
  },
  konser: {
    src: "/img/galeri/led-ekran-kiralama-1.webp",
    alt: "Sahneva - Outdoor concert stage and LED screen setup",
  },
  miting: {
    src: "/img/galeri/led-ekran-kiralama-3.webp",
    alt: "Sahneva - High stage and podium system with controlled entry for rallies",
  },
  altyapi: {
    src: "/img/galeri/cadir-kiralama-1.webp",
    alt: "Sahneva - 10 cm ground podium and carpet covering application inside a tent",
  },
};

const IMAGES = SECTION_IMAGES;
const HERO_IMAGE = FEATURED_IMAGE;
const OG_IMAGE = FEATURED_IMAGE;
const WA_URL = LEADMAGNET_WA;

/* ================== META ================== */
export const metadata = {
  title: "Choosing the Right Podium for Your Event",
  description:
    "Guide to choosing the right podium: the best solutions for weddings, corporate events, concerts and rallies. T-shape, flat runway and professional rental tips at Sahneva.",
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": `${SITE_URL}/blog/etkinlige-gore-podyum-tercihi`,
      "en-US": BLOG_URL,
    },
  },
  image: FEATURED_IMAGE,
  openGraph: {
    title: "Choosing the Right Podium for Your Event | Sahneva Blog",
    description:
      "Guide to correct podium height, surface preference, stair control and anchoring on 150 cm stages for weddings, corporate events, concerts and rallies.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Choosing the right podium for your event – podium guide for weddings, concerts, corporate and outdoor events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choosing the Right Podium for Your Event | Sahneva Blog",
    description:
      "Podium selection for events: height, surface, safety and setup tips.",
    images: [`${SITE_URL}${FEATURED_IMAGE}`],
  },
  keywords: [
    "podium rental",
    "podium for events",
    "modular podium systems",
    "stage setup service",
    "rental podium prices",
    "illuminated podium rental",
    "corporate meeting stage",
    "wedding stage",
    "concert stage",
    "rally stage",
    "10 cm ground podium",
    "sound lighting systems",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  other: {
    "article:published_time": PUBLISH_DATE,
    "article:modified_time": MODIFIED_DATE,
    "article:author": AUTHOR_NAME,
    "article:section": "Podium Rental",
  },
};

/* ================== FAQ ================== */
const FAQ_ITEMS = [
  {
    question: "How much weight can podiums carry?",
    answer:
      "Standard modular podium systems vary depending on the panel structure, but generally have a load-bearing capacity of between 500 kg and 750 kg per square metre.",
  },
  {
    question: "How long does setup take?",
    answer:
      "It varies by area size. The setup of an average 50 m² podium is typically completed within 1–2 hours. Ground conditions and access conditions may affect the duration.",
  },
  {
    question: "Is it suitable for outdoor events?",
    answer:
      "Yes. Solutions suitable for outdoor conditions are planned; safe use is targeted with non-slip surface options and ground levelling applications.",
  },
  {
    question: "Is a 150 cm stage safe for concerts and rallies?",
    answer:
      "A 150 cm stage is feasible; however, anchoring with connection brackets is mandatory to prevent wobbling. Without anchoring, 150 cm is risky.",
  },
  {
    question: "How many staircases should a concert/rally stage have?",
    answer:
      "For safety and control at concerts and rallies, access to the stage should be limited to a maximum of 2 staircases. This ensures controlled entry.",
  },
  {
    question: "Do you offer illuminated podium rental?",
    answer:
      "Illuminated podium rental options can be planned according to the concept of the event. Feasibility is confirmed based on the floor, electrical infrastructure and design preference.",
  },
];

/* ================== JSON-LD ================== */
function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata?.title,
        description: metadata?.description,
        image: `${SITE_URL}${FEATURED_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "en-US",
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: {
          "@type": "Organization",
          name: "Sahneva",
          url: SITE_URL,
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        mentions: [
          { "@type": "WebPage", "@id": `${SITE_URL}${PODIUM_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${STAGE_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${SOUND_LIGHT_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${LED_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${TENT_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${CORPORATE_SERVICE_PATH}` },
        ],
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

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }}
    />
  );
}

/* ================== UI HELPERS ================== */
const InfoBox = ({ icon, title, children, variant = "info" }) => {
  const styles =
    variant === "warn"
      ? "bg-amber-50 border-amber-200 text-amber-900"
      : "bg-blue-50 border-blue-200 text-blue-900";

  return (
    <div className={`not-prose border rounded-2xl p-6 ${styles}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl leading-none" aria-hidden="true">
          {icon}
        </span>
        <div>
          <p className="m-0 font-black text-base">{title}</p>
          <div className="mt-2 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
};

function WatermarkedFigure({ src, alt, caption }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-auto"
          loading="lazy"
        />
        <div className="absolute bottom-3 right-3 bg-black/55 text-white text-xs font-extrabold px-3 py-1.5 rounded-full backdrop-blur">
          Sahneva
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

const SpecTable = () => (
  <div className="not-prose overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className="px-5 py-4 bg-gray-50 border-b border-gray-200">
      <p className="m-0 font-black text-gray-900">Technical Specifications Table</p>
      <p className="m-0 mt-1 text-sm text-gray-600">
        Recommended height and surface preference by event type (for quick reference).
      </p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-5 py-3 font-bold text-gray-900">Event Type</th>
            <th className="px-5 py-3 font-bold text-gray-900">Recommended Height</th>
            <th className="px-5 py-3 font-bold text-gray-900">Surface Preference</th>
            <th className="px-5 py-3 font-bold text-gray-900">Note</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Wedding / Engagement",
              "40–80 cm",
              "White carpet / Plexiglass (option)",
              "Full front staircase (flow + safety)",
            ],
            [
              "Corporate Presentation (Hotel)",
              "≤ 80 cm",
              "Protocol carpet / Carpet covering",
              "Full staircase possible (accessibility)",
            ],
            [
              "Concert / Festival",
              "100–150 cm",
              "Non-slip surface / Black covering",
              "At 150 cm: anchoring + max 2 staircases",
            ],
            [
              "Rally",
              "100–150 cm",
              "Non-slip surface / Black covering",
              "Controlled entry: max 2 staircases + anchoring",
            ],
          ].map((r) => (
            <tr key={r[0]} className="border-b border-gray-100 last:border-0">
              <td className="px-5 py-4 font-semibold text-gray-900 whitespace-nowrap">
                {r[0]}
              </td>
              <td className="px-5 py-4 text-gray-700 whitespace-nowrap">{r[1]}</td>
              <td className="px-5 py-4 text-gray-700 whitespace-nowrap">{r[2]}</td>
              <td className="px-5 py-4 text-gray-700">{r[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

/* ================== PAGE ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: "Choosing the Right Podium for Your Event", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src:
            typeof IMAGES !== "undefined" && IMAGES?.hero?.src
              ? IMAGES.hero.src
              : typeof FEATURED_IMAGE !== "undefined"
              ? FEATURED_IMAGE
              : typeof HERO_IMAGE !== "undefined"
              ? HERO_IMAGE
              : typeof OG_IMAGE !== "undefined"
              ? OG_IMAGE
              : "",
          alt:
            typeof IMAGES !== "undefined" && IMAGES?.hero?.alt
              ? IMAGES.hero.alt
              : metadata?.title
              ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "")
              : "Sahneva Blog",
        }}
        pills={["Sahneva Blog", "Production & Technical", "Event Engineering"]}
        title={metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : ""}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="1\u20133 min read"
        currentSlug={BLOG_PATH.replace("/en/blog/", "")}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          {
            href:
              typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/en/stage-rental",
            label: "Stage Rental",
            icon: "🎭",
          },
          {
            href:
              typeof PODIUM_SERVICE_PATH !== "undefined"
                ? PODIUM_SERVICE_PATH
                : "/en/podium-rental",
            label: "Podium Rental",
            icon: "🧱",
          },
          {
            href:
              typeof LED_SERVICE_PATH !== "undefined"
                ? LED_SERVICE_PATH
                : "/en/led-screen-rental",
            label: "LED Screen",
            icon: "🟦",
          },
        ]}
        whatsappUrl={typeof WA_URL !== "undefined" ? WA_URL : undefined}
      >
        {/* SOCIAL PROOF */}
        <div className="not-prose mb-10">
          <InfoBox icon="✅" title="Field Experience">
            This guide is based on field practice gained through setups carried out at various scales.
            Choosing the correct dimensions at the planning stage ensures both{" "}
            <strong>fast setup</strong> and reduces <strong>safety</strong> risk.
          </InfoBox>
        </div>

        {/* TABLE */}
        <h2 id="tablo">Technical Specifications Table</h2>
        <p>
          You can quickly see the recommended podium height and surface preference by event type in the
          table below. If a visual show is targeted in the concept,{" "}
          <strong>illuminated podium rental</strong> options can be planned separately.
        </p>
        <SpecTable />

        {/* Corporate */}
        <h2 id="kurumsal">Corporate Events / In-Hotel Meetings</h2>
        <ul>
          <li>
            <strong>Recommended height:</strong> ≤ 80 cm
          </li>
          <li>
            <strong>Staircase:</strong> Full front staircase possible (accessibility)
          </li>
          <li>
            <strong>Surface:</strong> Protocol carpet / carpet covering
          </li>
          <li>
            <strong>See also:</strong> <Link href={CORPORATE_SERVICE_PATH}>Corporate events</Link>
          </li>
        </ul>
        <WatermarkedFigure
          src={SECTION_IMAGES.kurumsal.src}
          alt={SECTION_IMAGES.kurumsal.alt}
          caption="For corporate events the goal is: accessibility + order + clean appearance."
        />

        <InfoBox icon="💡" title="Pro Tip">
          At corporate events, making stage access easier (full staircase) is often more appropriate
          than "increasing height."
        </InfoBox>

        {/* Wedding */}
        <h2 id="dugun">Wedding / Engagement</h2>
        <ul>
          <li>
            <strong>Recommended height:</strong> 40–80 cm
          </li>
          <li>
            <strong>Critical rule:</strong> Full front staircase required (ease of stepping on and off)
          </li>
          <li>
            <strong>Surface:</strong> White carpet / plexiglass (option)
          </li>
          <li>
            <strong>Note:</strong> At weddings, the stage is an area that is "used", not just "viewed."
          </li>
        </ul>
        <WatermarkedFigure
          src={SECTION_IMAGES.dugun.src}
          alt={SECTION_IMAGES.dugun.alt}
          caption="At weddings, a full staircase makes the stage truly accessible."
        />

        {/* Concert */}
        <h2 id="konser">Concert / Festival</h2>
        <ul>
          <li>
            <strong>Recommended height:</strong> 100–150 cm (depending on topography and crowd)
          </li>
          <li>
            <strong>At 150 cm:</strong> anchoring with connection brackets is mandatory
          </li>
          <li>
            <strong>Staircase:</strong> Maximum 2 (controlled entry)
          </li>
          <li>
            <strong>See also:</strong> <Link href={LED_SERVICE_PATH}>LED screen rental</Link>
          </li>
        </ul>
        <WatermarkedFigure
          src={SECTION_IMAGES.konser.src}
          alt={SECTION_IMAGES.konser.alt}
          caption="At crowded events, anchoring + controlled entry are essential."
        />

        {/* Rally */}
        <h2 id="miting">Rally</h2>
        <ul>
          <li>
            <strong>Recommended height:</strong> 100–150 cm (depending on area and crowd)
          </li>
          <li>
            <strong>At 150 cm:</strong> anchoring mandatory (to prevent wobbling)
          </li>
          <li>
            <strong>Staircase:</strong> Maximum 2 (controlled access)
          </li>
          <li>
            <strong>Safety:</strong> Uncontrolled access to the stage must be prevented
          </li>
        </ul>
        <WatermarkedFigure
          src={SECTION_IMAGES.miting.src}
          alt={SECTION_IMAGES.miting.alt}
          caption="At rallies, controlled entry with max 2 staircases enhances safety."
        />

        {/* Infrastructure */}
        <h2 id="altyapi">Outdoor / Tent Infrastructure (10 cm + Carpet)</h2>
        <ul>
          <li>
            <strong>Floor:</strong> 10 cm ground podium + carpet
          </li>
          <li>
            <strong>Benefit:</strong> Table-chair stability + comfort + fast setup
          </li>
          <li>
            <strong>See also:</strong> <Link href={TENT_SERVICE_PATH}>Tent rental</Link>
          </li>
        </ul>
        <WatermarkedFigure
          src={SECTION_IMAGES.altyapi.src}
          alt={SECTION_IMAGES.altyapi.alt}
          caption="Ground podium (10 cm) + carpet provides comfort and stability outdoors."
        />

        <InfoBox icon="🔊" title="Recommendation">
          Alongside the podium setup, you can also check out our{" "}
          <Link href={SOUND_LIGHT_PATH}>Sound and Lighting Systems</Link>{" "}
          page to enhance your event's ambience.
        </InfoBox>

        {/* CHECKLIST */}
        <h2 id="checklist">Technical Checklist</h2>
        <div className="not-prose bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 my-8 space-y-4">
          <p className="m-0 text-sm text-gray-800 font-semibold">
            Clarify these items before requesting a quote:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
            <li>Event type (corporate / wedding / concert / rally)</li>
            <li>Planned stage height (≤80 / 40–80 / 100–150)</li>
            <li>Anchoring plan for 150 cm stages (connection brackets)</li>
            <li>Staircase plan (concert/rally max 2)</li>
            <li>If outdoor/tent: ground (10 cm + carpet) requirement</li>
            <li>Surface preference (carpet, plexiglass, glass, etc.)</li>
          </ul>
        </div>

        {/* CTA */}
        <h2 id="cta">💡 Looking for a Custom Solution for Your Event Plan?</h2>
        <div className="not-prose bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <p className="m-0 text-lg font-semibold relative z-10">
            For <strong>free advice</strong> on podium height, surface covering (carpet, plexiglass,
            glass) and staircase options, click the{" "}
            <Link className="underline underline-offset-4 text-white" href={PODIUM_SERVICE_PATH}>
              Get a Quote
            </Link>{" "}
            button now or reach us at {PHONE_E164}.
          </p>

          <p className="mt-3 mb-0 text-sm text-blue-100 relative z-10">
            Note: "<strong>Rental podium prices</strong>" vary by event; the correct dimensions + correct
            setup items determine the total cost. If needed,{" "}
            <Link className="underline underline-offset-4 text-white" href={STAGE_SERVICE_PATH}>
              stage setup service
            </Link>{" "}
            can also be planned together.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 relative z-10">
            <Link
              href={PODIUM_SERVICE_PATH}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 px-6 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400"
            >
              🧾 Get a Quote Now
            </Link>

            <a
              href={LEADMAGNET_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500"
            >
              💬 WhatsApp
            </a>

            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 border border-white/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/30"
            >
              📞 {PHONE_E164}
            </a>
          </div>
        </div>

        {/* FAQ */}
        <h2 id="faq">Frequently Asked Questions About Podium Rental</h2>
        <section aria-labelledby="faq-heading" className="not-prose space-y-3 mt-6">
          <h3 id="faq-heading" className="sr-only">
            Frequently asked questions about podium rental
          </h3>

          {FAQ_ITEMS.map((item, index) => (
            <details
              key={index}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200"
            >
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
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

        <p>
          To confirm the right dimensions for your event and plan all technical details from a single
          point, you can request a quote from our{" "}
          <Link href={PODIUM_SERVICE_PATH}>
            <strong>podium rental</strong>
          </Link>{" "}
          page.
        </p>

        <BlogRelatedLinks
          services={[
            { href: PODIUM_SERVICE_PATH, label: "Podium Rental" },
            { href: STAGE_SERVICE_PATH, label: "Stage Rental" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
