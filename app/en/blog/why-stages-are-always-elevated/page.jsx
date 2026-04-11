import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONFIG ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

const BLOG_PATH = "/en/blog/why-stages-are-always-elevated";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const PODIUM_SERVICE_PATH = "/en/podium-rental";
const STAGE_SERVICE_PATH = "/en/stage-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const SOUND_LIGHT_PATH = "/en/sound-light-rental";

const FEATURED_IMAGE = "/img/galeri/led-ekran-kiralama-3.webp";
const HERO_IMAGE = FEATURED_IMAGE;
const OG_IMAGE = FEATURED_IMAGE;

const PUBLISH_DATE = "2025-12-29T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/why-stages-are-always-elevated/page.jsx", "2026-02-05T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva Editorial Team";

const WHATSAPP_NUMBER = "905453048671";
const WA_MSG = encodeURIComponent(
  "Hello, I'd like to plan a stage/podium for my event. I can share location and date details."
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`;

/* ================== IMAGES ================== */
const IMAGES = {
  hero: { src: "/img/galeri/led-ekran-kiralama-3.webp", alt: "Sahneva - Modern stage and LED screen installation" },
  blend: { src: "/img/blog/antik-modern-gecis.webp", alt: "Transition from ancient theatre stage to modern concert stage" },
  modernKonser: { src: "/img/blog/gelismis-sahne-sistemleri.webp", alt: "Sahneva - Advanced Concert stage" },
  modernSahne: { src: "/img/galeri/led-ekran-kiralama-3.webp", alt: "Sahneva - Modern stage installation" },
};

/* ================== META ================== */
export const metadata = {
  title: "Why Are Stages Always Elevated? A 2,500-Year-Old Secret",
  description:
    "From ancient platforms to modern concert stages: how elevated spaces evolved into today's LED and truss stage technologies.",

  alternates: { canonical: BLOG_URL, languages: { "tr-TR": `${SITE_URL}/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir`, "en-US": BLOG_URL, "x-default": BLOG_URL } },

  image: FEATURED_IMAGE,

  openGraph: {
    title: "Why Are Stages Always Elevated? A 2,500-Year-Old Secret",
    description:
      "The stage through history: ancient theatres, Roman forums, medieval squares, opera houses and modern truss systems.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",

    images: [
      {
        url: `${SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Why are stages always elevated – a 2,500-year historical and technical examination",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Why Are Stages Always Elevated? A 2,500-Year-Old Secret",
    description:
      "The evolution of the stage from antiquity to today: from word to performance, from wood to truss…",
    images: [`${SITE_URL}${FEATURED_IMAGE}`],
  },

  keywords: [
    "history of the stage",
    "stage history",
    "ancient theatre stage",
    "roman forum rostra",
    "opera stage",
    "modern concert stage",
    "truss stage",
    "podium",
    "stage rental",
    "podium rental",
    "podium installation",
  ],
};

/* ================== FAQ (SEO) ================== */
const FAQ_ITEMS = [
  {
    q: "Where did the concept of the stage first emerge?",
    a: "The origin of the stage goes back to elevated speaking platforms used to address crowds and be visible. Over time, together with theatre and performance culture, the stage transformed into a space designed for performance.",
  },
  {
    q: "How did ancient theatres influence modern stages?",
    a: "Ancient theatres shaped the distance between stage and audience, sightlines and acoustic thinking. Even today, concert and performance stages still use modern equivalents of this logic.",
  },
  {
    q: "When did modern stages become 'portable'?",
    a: "Especially in the 20th century, touring culture accelerated the need for stages to be modular and portable. Truss systems and standardised modules are the cornerstones of this transformation.",
  },
  {
    q: "What is the biggest difference between today's stage and the past?",
    a: "Modern stages are not just a platform; they are an engineering system with lighting, sound, LED screens and safety design. Yet the fundamental purpose of the stage remains the same: to establish communication with the crowd.",
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
        headline: metadata.title,
        description: metadata.description,
        image: `${SITE_URL}${FEATURED_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "en-US",
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@type": "Organization", name: "Sahneva Organizasyon", url: SITE_URL },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        mentions: [
          { "@type": "WebPage", "@id": `${SITE_URL}${STAGE_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${PODIUM_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${LED_SERVICE_PATH}` },
          { "@type": "WebPage", "@id": `${SITE_URL}${SOUND_LIGHT_PATH}` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${BLOG_URL}#faq`,
        mainEntity: FAQ_ITEMS.map((x) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: { "@type": "Answer", text: x.a },
        })),
      },
    ],
  };

  return <JsonLd data={schema} suppressHydrationWarning />;
}

/* ================== UI ================== */
function WatermarkedFigure({ src, alt, caption }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 900px"
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

const InfoBox = ({ icon, title, children }) => (
  <div className="not-prose border rounded-2xl p-6 bg-slate-900 border-slate-700 text-slate-100 my-10">
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

/* ================== PAGE ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: "Why Are Stages Always Elevated? A 2,500-Year-Old Secret", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      
            {/* HERO */}
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
        currentSlug={BLOG_PATH.replace("/en/blog/", "")}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/en/stage-rental"), label: "Stage Rental", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/en/podium-rental"), label: "Podium Rental", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/en/led-screen-rental"), label: "LED Screen", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

            <InfoBox icon="🧭" title="This Article's Route">
              This article is not a "technical training guide"; it is the cultural and historical journey of the stage. This story begins with the elevation of the word in ancient times and continues today with truss systems and LED screens.
            </InfoBox>

            <WatermarkedFigure
              src={IMAGES.blend.src}
              alt={IMAGES.blend.alt}
              caption="The transition from ancient stage conception to modern stage technology in a single frame."
            />

            <h2>1) The Beginning: Addressing a Crowd</h2>
            <p>
              The oldest form of the stage was not a "performance area" but a <strong>speaking area</strong>. People
              want two things in front of a crowd: to be seen and to be heard. A platform rising from the ground answers
              both these needs at once.
            </p>
            <p>
              That is why the stage is always conceived as an "elevated" space from the very beginning. Height is not only
              physical but also symbolic: it carries the speaker's words to the "centre."
            </p>

            <h2>2) Ancient Greece: The Birth of Theatre and Acoustics</h2>
            <p>
              Ancient Greek theatres are a turning point in stage history. This period is one of the first great eras
              in which the stage was designed not just for speech but for <strong>performance</strong>.
            </p>
            <p>
              Semi-circular seating arrangement, use of sloped terrain and the audience's clear view of the stage…
              Even today, when "sightlines" are discussed in concert venues, the root of that concept extends to the ancient
              theatre logic.
            </p>

            <h2>3) Rome: Forum, Performance and Power</h2>
            <p>
              With Rome, the idea of the stage splits into two branches: <strong>public speaking platforms</strong> and{" "}
              <strong>performance venues</strong>. Elevated speaking areas in the forums are not just practical; they are
              also a political image.
            </p>
            <p>
              Roman arenas and amphitheatres strengthen the "crowd management" side of the stage: entry-exit arrangements,
              area control and guiding the crowd.
            </p>

            <h2>4) The Middle Ages: Town Squares and Travelling Shows</h2>
            <p>
              In the Middle Ages, the stage becomes mostly temporary structures erected in city squares. Merchant caravans,
              travelling theatres, religious-themed performances… The stage ceases to be a fixed structure;{" "}
              <strong>it is assembled and dismantled</strong>.
            </p>
            <p>
              Today's "installation" culture (modular pieces, portable systems) actually overlaps with the logic of this period:
              the stage is transported wherever the event is.
            </p>

            <h2>5) The Renaissance: The Stage Becomes a "Space"</h2>
            <p>
              With the Renaissance, the stage acquires an architectural identity. The perspective concept, set design and
              the relationship of the stage with the audience are consciously crafted. The stage is no longer just a platform;
              it is a "world."
            </p>

            <h2>6) Opera Houses: Stage Engineering Begins</h2>
            <p>
              Opera houses transform the stage into a technical structure: under-stage mechanisms, set change systems,
              curtain arrangements… The stage begins to be thought of as a "machine" working behind the curtain.
            </p>
            <p>
              This era is the ancestor of many concepts we use today: directing light, visual composition,
              stage-backdrop separation and creating "focus" for the audience.
            </p>

            <h2>7) Electricity and Light: The Language of the Stage Changes</h2>
            <p>
              With the spread of electric light, the stage acquires a new language. Light is no longer just "illumination";
              it is part of the narrative. The stage becomes a visual composition that guides the audience's eyes.
            </p>

            <h2>8) The 20th Century: Touring Culture and the Portable Stage</h2>
            <p>
              The 20th century is another breaking point in stage history: tours. An artist travelling from city to city
              means the stage travels with them. This need gives birth to modular systems and standard parts.
            </p>

            <p>
              The load-bearing systems we call "truss" today are the product of this industry that developed to safely
              carry the stage's load (lighting, sound, visual elements).
            </p>

            <h2>9) Today: The Stage Is a System</h2>
            <p>
              The modern stage is no longer a single platform; it is a <strong>system</strong>. On and around it there is sound, lighting,{" "}
              <Link href={LED_SERVICE_PATH}>LED screens</Link> and stage language.
            </p>
            <p>
              So today, while the stage carries the simple "elevation" idea from antiquity, it also carries the
              technology of the modern world. The word may still be at the centre, but now it is technology that carries it.
            </p>

            <WatermarkedFigure
              src={IMAGES.modernKonser.src}
              alt={IMAGES.modernKonser.alt}
              caption="Modern concert stage: a system together with lighting, sound and visuals."
            />

            <h2>10) Why Is the Stage Still Elevated?</h2>
            <p>
              Because the stage is the oldest way to create a "focus" within a crowd. In ancient theatres this focus was
              built with stone. Today the same focus is built with steel supports and technological systems. But the idea is the same:
              <strong>to be seen, to be heard, to tell a story</strong>.
            </p>

            <InfoBox icon="🔗" title="Bridge from History to Today (Sahneva)">
              Stage technology changes, but the purpose of a good stage does not: to build a strong connection with the audience.
              For stage, podium and installation solutions at your event, you can browse our{" "}
              <Link href={STAGE_SERVICE_PATH}>stage rental</Link> and{" "}
              <Link href={PODIUM_SERVICE_PATH}>podium rental</Link> pages.
            </InfoBox>

            <h2 id="faq">Frequently Asked Questions</h2>
            <section className="not-prose space-y-3 mt-6">
              {FAQ_ITEMS.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200"
                >
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-600">
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                </details>
              ))}
            </section>

            <h2>What Does the Stage Mean to You?</h2>
            <p>
              For you, is the stage more about <strong>visuals</strong>, <strong>story</strong> or{" "}
              <strong>communication</strong>? Write in the comments—in the continuation of this article we can also discuss
              the stage's influence in "modern culture."
            </p>

            <div className="not-prose mt-12 rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white border border-white/10">
              <p className="m-0 text-lg font-semibold">
                Would you like to plan a stage, podium,{" "}
                <Link className="underline text-white" href={SOUND_LIGHT_PATH}>
                  sound & lighting
                </Link>{" "}
                and{" "}
                <Link className="underline text-white" href={LED_SERVICE_PATH}>
                  LED screen
                </Link>{" "}
                for your event?
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href={STAGE_SERVICE_PATH}
                  className="inline-flex items-center justify-center rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 px-6 transition-transform hover:-translate-y-0.5"
                >
                  Stage Rental
                </Link>
                <Link
                  href={PODIUM_SERVICE_PATH}
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 border border-white/20 transition-transform hover:-translate-y-0.5"
                >
                  Podium Rental
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <BlogRelatedLinks
              services={[
                { href: STAGE_SERVICE_PATH, label: "Stage Rental" },
                { href: PODIUM_SERVICE_PATH, label: "Podium Rental" },
              ]}
            />
      </BlogLayout>
    </>
  );}
