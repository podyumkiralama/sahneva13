import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "pmgc-world-finals-behind-the-scenes";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/kurumsal-etkinlik-hero.webp";
const AWARD_IMG = "/img/blog/kurumsal-etkinlik-sahne-genel.webp";

const TITLE = "7 Days, Zero Sleep, Millimetric Passion: Behind the Scenes of the PMGC World Finals";
const DESCRIPTION =
  "Ülker Arena PMGC 2023 World Finals behind the scenes: 7 days of millimetric setup, rigging safety, global coordination and award-winning production details.";

const PUBLISH_DATE = "2026-01-05T10:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/pmgc-world-finals-behind-the-scenes/page.jsx", "2026-02-05T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva Editorial Team";

const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I read your blog post. I'd like to get a quote for my project.");

const VIDEO_ID = "173gBurWSRQ";
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const metadata = {
  title: "Behind the Scenes of PMGC 2023 World Finals",
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  image: HERO_IMG,
  openGraph: {
    title: "Behind the Scenes of PMGC 2023 World Finals | Sahneva",
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "PMGC 2023 World Finals stage setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Behind the Scenes of PMGC 2023 World Finals",
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  keywords: [
    "PMGC 2023",
    "PUBG Mobile Global Championship",
    "Ülker Arena",
    "stage setup",
    "rigging",
    "LED screen",
    "stage engineering",
    "Ace of M.I.C.E. Awards",
  ],
};

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: TITLE,
        description: DESCRIPTION,
        image: `${SITE_URL}${HERO_IMG}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "en-US",
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organization",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.webp` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        video: { "@id": `${BLOG_URL}#video` },
      },
      {
        "@type": "VideoObject",
        "@id": `${BLOG_URL}#video`,
        name: "PMGC 2023 Grand Finals - Istanbul",
        description:
          "Official video showing the behind-the-scenes and opening atmosphere of the PMGC 2023 World Finals.",
        thumbnailUrl: [VIDEO_THUMB],
        uploadDate: PUBLISH_DATE,
        embedUrl: VIDEO_EMBED_URL,
        contentUrl: VIDEO_URL,
        mainEntityOfPage: BLOG_URL,
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organization",
          url: SITE_URL,
        },
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

function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative overflow-hidden rounded-2xl bg-transparent">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 960px"
          priority={false}
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-gray-600">{caption}</figcaption> : null}
    </figure>
  );
}

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: TITLE, url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: HERO_IMG, alt: TITLE }}
        pills={["Sahneva Blog", "Production & Technical", "Event Engineering"]}
        title={TITLE}
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="7 min read"
        currentSlug={SLUG}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/en/stage-rental", label: "Stage Rental", icon: "🎭" },
          { href: "/en/podium-rental", label: "Podium Rental", icon: "🧱" },
          { href: "/en/led-screen-rental", label: "LED Screen", icon: "🟦" },
        ]}
        whatsappUrl={WA_URL}
      >

          <p>
            Some projects are not just a "job" — they are a test of engineering and endurance.
            The PUBG Mobile Global Championship (PMGC) held in 2023 within the massive volume of
            Ülker Arena was exactly that kind of challenge for Sahneva.
          </p>

          <p>
            In this monumental event, we served as the technical solutions partner under the
            visionary leadership of Dimi Agency. Here is the success story of that 7-day sleepless
            marathon — stitched together with Google Translate and finished with millimetric
            precision.
          </p>

          <h2>1. The Calculation of 1 Millimeter at 20 Meters</h2>
          <p>
            In a corporate production, "margin of error" is just a theory for us; on the ground,
            that margin is zero. When building the 20-meter-long mega stage, we knew that a 1 mm
            deviation at the start would create a geometric nightmare by the end — and the LED
            screens would not fit together perfectly.
          </p>
          <p>
            For 7 days, we joined every single MDF panel with the precision of a watchmaker.
            When the stage was complete, despite the tons of weight passing over it, the surface
            was as smooth as a razor blade. Because we know: digital eyes at a 4K-broadcast world
            final never lie.
          </p>

          <h2>2. Responsibility Suspended in the Air: Rigging and Industrial Climbers</h2>
          <p>
            The delicate balance we established with our industrial climbers working in the void
            of the arena ceiling was the riskiest part of the job. Lifting tons of LED cubes and
            lighting systems into the air required not just engineering, but extraordinary
            synchronization. As the Sahneva team, we managed the safety of every motor and truss
            connection with millimetric discipline.
          </p>

          <h2>3. Our Common Language: Technology and Global Coordination</h2>
          <p>
            When the event owner is a global giant, our language on the ground becomes
            "universal." While discussing technical details with the Chinese engineering team,
            we overcame the language barrier with Google Translate. Messages like "Signal flow"
            and "Rigging points" translated on phone screens eventually gave way to a genuine
            technical understanding. Our languages were different, but our goal was one: a
            flawless opening ceremony.
          </p>

          <h2>4. The Earned Award: Best Technical Application of the Year</h2>
          <p>
            The reward for all those sleepless nights and technical effort was recognized at the
            industry's most prestigious platform. This mega production, carried out together with
            Dimi Agency, was honored with the{" "}
            <strong>"Best Audio, Visual &amp; Lighting Application"</strong> award at the 11th
            Masters of Events Corporate Awards (Ace of M.I.C.E.) ceremony.
          </p>

          <ImgFigure
            src={AWARD_IMG}
            alt="Trophy received at the Ace of M.I.C.E. Awards ceremony"
            caption="Ace of M.I.C.E. 2023 – Best Audio, Visual & Lighting Application award."
          />

          <p>
            This award came at the intersection of our agency's vision and Sahneva's flawless
            technical execution on the ground. For us, this trophy is the victory of those 7
            sleepless days, our millimetric carpentry calculations, and the team that brought
            "impossible" installations to life.
          </p>

          <h2>PMGC 2023 Grand Finals - Istanbul</h2>
          <p>
            Watch the video below to see the light, LED, and architectural impact of the stage.
          </p>
          <div className="not-prose my-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={VIDEO_EMBED_URL}
                title="PMGC 2023 Grand Finals - Istanbul"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <h2>Why Sahneva?</h2>
          <p>
            We don't just rent equipment; we become the "reliable technical muscle" for major
            agencies and global brands in their most complex projects. Just as we did at PMGC
            2023, we continue to build world-class work by breaking down language barriers and
            never compromising on millimetric precision.
          </p>

          <h3>References</h3>
          <ul>
            <li>Project: PMGC 2023 Grand Finals - Istanbul</li>
            <li>Award: Ace of M.I.C.E. 2023 – Best Audio, Visual &amp; Lighting Application</li>
            <li>
              Official Source:{" "}
              <a
                href="https://aceofmice.com/ace-of-m-i-c-e-awards/kazananlar/"
                target="_blank"
                rel="noreferrer"
              >
                Ace of M.I.C.E. Awards Winners List
              </a>
            </li>
          </ul>

          <BlogRelatedLinks
            services={[
              { href: "/en/stage-rental", label: "Stage Rental" },
              { href: "/en/sound-light-rental", label: "Sound & Lighting Systems" },
            ]}
          />
      </BlogLayout>
    </>
  );
}
