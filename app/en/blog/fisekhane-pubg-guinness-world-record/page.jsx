// app/en/blog/fisekhane-pubg-guinness-world-record/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== URLS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? BASE_SITE_URL).replace(/\/$/, "");
const SLUG = "fisekhane-pubg-guinness-world-record";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-01-25T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/fisekhane-pubg-guinness-world-record/page.jsx", "2026-02-08T00:00:00+03:00");

/* ================== AUTHOR ================== */
const AUTHOR_NAME = "Sahneva Technical";

/* ================== ASSETS ================== */
const HERO_IMAGE = "/img/blog/fisekhane-pubg-etkinlik.webp";
const OG_IMAGE = HERO_IMAGE;

const FEATURED_IMAGE = HERO_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/en/stage-rental";
const PODIUM_SERVICE_PATH = "/en/podium-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I'd like to get a quote for my project.");

const IMG_STAGE = "/img/blog/fisekhane-pubg-sahne-kurulumu.webp";
const IMG_GUINNESS = "/img/blog/fisekhane-pubg-guinness-rekoru.webp";
const IMG_CHOREO = "/img/blog/fisekhane-pubg-koreografili.webp";
const IMG_CONFETTI = "/img/blog/fisekhane-pubg-rekor-ani.webp";

/* ================== META ================== */
export const metadata = {
  title: "Fişekhane PUBG Mobile Guinness World Record™",
  description:
    "At the PUBG Mobile event held at Fişekhane, we provided the stage/podium, LED screen, sound-lighting, technical support and live broadcast/filming infrastructure.",
  image: HERO_IMAGE,
  alternates: { canonical: BLOG_URL },
  openGraph: {
    title: "PUBG Mobile Guinness World Record™ at Fişekhane | Sahneva Technical Support",
    description:
      "Technical support for stage/podium, LED screen, sound-lighting, technical operations and live broadcast/filming.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "PUBG Mobile event at Fişekhane and technical production atmosphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PUBG Mobile Guinness World Record™ at Fişekhane",
    description:
      "Technical support for stage/podium, LED screen, sound-lighting and live broadcast/filming infrastructure.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "fisekhane event",
    "pubg mobile event istanbul",
    "guinness world record pubg",
    "stage setup",
    "podium rental",
    "led screen rental",
    "sound system rental",
    "lighting system rental",
    "technical production",
    "live broadcast technical support",
  ],
  authors: [{ name: AUTHOR_NAME }],
};

/* ================== JSON-LD ================== */
function ArticleSchema() {
  const WEBPAGE_ID = `${BLOG_URL}#webpage`;
  const ARTICLE_ID = `${BLOG_URL}#article`;
  const PRIMARY_IMAGE_ID = `${BLOG_URL}#primaryimage`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": PRIMARY_IMAGE_ID,
        url: `${SITE_URL}${HERO_IMAGE}`,
        contentUrl: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
      },
      {
        "@type": "WebPage",
        "@id": WEBPAGE_ID,
        url: BLOG_URL,
        name: "PUBG Mobile Guinness World Record™ Turkey Gathering at Fişekhane",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      {
        "@type": "NewsArticle",
        "@id": ARTICLE_ID,
        isPartOf: { "@id": WEBPAGE_ID },
        mainEntityOfPage: { "@id": WEBPAGE_ID },
        headline:
          "PUBG Mobile Guinness World Record™ Turkey Gathering at Fişekhane: Technical Infrastructure Support",
        description:
          "At the PUBG Mobile event held at Fişekhane, we provided the stage/podium, LED screen, sound-lighting, technical support and live broadcast/filming infrastructure.",
        image: { "@id": PRIMARY_IMAGE_ID },
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        articleSection: ["Event", "E-Sports", "Technical Production"],
      },
      {
        "@type": "Event",
        "@id": `${BLOG_URL}#event`,
        name: "PUBG Mobile Guinness World Record™ Turkey Gathering",
        startDate: "2026-01-25T00:00:00+03:00",
        endDate: "2026-01-25T23:59:59+03:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "FİŞEKHANE",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Istanbul",
            addressCountry: "TR",
          },
        },
        organizer: { "@id": ORGANIZATION_ID },
      },
    ],
  };

  const safe = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  return (
    <Script
      id="pubg-fisekhane-ld-json"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}

/* ================== UI HELPERS ================== */
function Figure({ src, alt, caption, w = 1200, h = 800 }) {
  return (
    <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        className="w-full h-auto object-cover"
        sizes="(min-width: 1024px) 960px, 100vw"
        loading="lazy"
      />
      {caption ? (
        <figcaption className="px-4 py-3 text-sm text-gray-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/* ================== PAGE ================== */
export default function BlogPostFisekhanePubgGuinness() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: "Fişekhane PUBG Mobile Guinness World Record™", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Production & Technical", "Event Engineering"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="1–3 min read"
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

              <h2 id="brief-info">Brief Overview</h2>
              <p>
                At the PUBG Mobile gathering held at <strong>Fişekhane</strong> in Istanbul on
                January 25th, the stage and technical infrastructure requirements of the event were
                provided by us. From installation to in-event operations, a dedicated technical
                team on the ground ensured operational continuity throughout.
              </p>

              <Figure
                src={IMG_GUINNESS}
                alt="Celebration moment at Fişekhane after the PUBG Mobile Guinness World Record™"
                caption="Celebration moment at the PUBG Mobile event at Fişekhane after the Guinness World Record™."
              />

              <h2 id="services-provided">Services We Provided</h2>
              <p>
                We provided integrated support across all critical technical areas required for
                the event. We operated from a single plan so that stage flow, visual content
                management, sound-lighting balance and broadcast/filming processes could advance
                together.
              </p>

              <ul>
                <li>
                  <strong>Stage &amp; podium setup:</strong> Modular platform systems, front-of-stage
                  transitions and safe-use layout.
                </li>
                <li>
                  <strong>LED screen:</strong> Installation and integration suited to visual content
                  flow within the stage and venue.
                </li>
                <li>
                  <strong>Sound system:</strong> Placement according to venue acoustics, controlled
                  sound distribution and clear speech intelligibility.
                </li>
                <li>
                  <strong>Lighting design:</strong> Lighting balance supporting stage atmosphere and
                  camera image.
                </li>
                <li>
                  <strong>Technical support:</strong> Operational crew on-site during installation,
                  the event itself and teardown.
                </li>
                <li>
                  <strong>Live broadcast &amp; filming support:</strong> Broadcast stream management,
                  stage-image alignment and technical coordination.
                </li>
              </ul>

              <Figure
                src={IMG_CHOREO}
                alt="Choreographed moment at Fişekhane during the PUBG Mobile record event"
                caption="Simultaneous choreographed moments in the event flow required managing the production and stage layout alongside the broadcast side."
              />

              <h2 id="setup-operation">Setup and Operations</h2>
              <p>
                Stage/podium placement was planned taking into account the architectural structure
                of Fişekhane and the intensity of the event. During installation, cable routes,
                safe passage areas and technical equipment positions were defined, aiming for
                smooth operations throughout the event.
              </p>

              <Figure
                src={IMG_STAGE}
                alt="Stage and podium setup at Fişekhane before the PUBG Mobile event"
                caption="Pre-event stage/podium setup: venue flow and technical equipment placement were planned accordingly."
              />

              <h2 id="broadcast-filming">Live Broadcast and Filming Support</h2>
              <p>
                On the live broadcast and filming side, technical support was provided by
                considering the stage design, lighting balance and visual content flow together.
                This approach strengthened both the attendee experience and visual continuity.
              </p>

              <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-5 my-8 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="text-xl" aria-hidden="true">
                    ✅
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">
                      Integrated technical solution from a single point
                    </p>
                    <p className="text-slate-700 mt-2">
                      Stage/podium + LED screen + sound/lighting + technical crew + broadcast/filming
                      coordination — all managed within a single operations plan.
                    </p>
                  </div>
                </div>
              </div>

              <h2 id="record-moment">Record Moment and Atmosphere</h2>
              <p>
                Stage lighting, visual flow and venue layout were managed together to transform the
                record moment into a powerful atmosphere on stage. The resulting celebration
                atmosphere at the finale was one of the most powerful moments of the event.
              </p>

              <Figure
                src={IMG_CONFETTI}
                alt="General celebration atmosphere at Fişekhane after the PUBG Mobile Guinness World Record™"
                caption="Post-record celebration atmosphere: the final moment integrated with stage lights and venue design."
              />

              <h2 id="similar-events">For Similar Events</h2>
              <p>
                For e-sports, launches, concerts and{" "}
                <Link href="/en/corporate-events">corporate events</Link>: when stage, LED screen,
                sound-lighting, technical operations and broadcast/filming processes are planned
                together, risks decrease and event quality improves significantly.
              </p>

              <p>
                You can reach our team for{" "}
                <Link href="/en/podium-rental">podium</Link>,{" "}
                <Link href="/en/led-screen-rental">LED screen</Link> and{" "}
                <Link href="/en/sound-light-rental">sound/lighting</Link> solutions.
              </p>

              <div className="not-prose mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div>
                  <p className="text-lg font-semibold text-blue-900">
                    👉 Let us plan the technical setup for your event
                  </p>
                  <p className="text-sm text-blue-800">
                    Get an integrated quote including stage + LED screen + sound/lighting + broadcast/filming support.
                  </p>
                </div>

                <Link
                  href="/en/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
              </div>

              <BlogRelatedLinks
                services={[
                  { href: "/en/stage-rental", label: "Stage Rental" },
                  { href: "/en/led-screen-rental", label: "LED Screen Rental" },
                ]}
              />
      </BlogLayout>
    </>
  );
}
