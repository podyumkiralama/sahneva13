import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "national-space-program-launch-engineering-reflex";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/milli-uzay-programi-hero.webp";
const IMG_PODYUM = "/img/blog/milli-uzay-programi-podyum.webp";
const IMG_DOME = "/img/blog/milli-uzay-programi-dome.webp";
const IMG_LASER_LED = "/img/blog/milli-uzay-programi-lazer-led.webp";
const IMG_AKUSTIK = "/img/blog/milli-uzay-programi-akustik.webp";

const TITLE = "National Space Program Launch (2021): A Perfect Stage Designed with Sahneva's Engineering Reflex";
const DESCRIPTION =
  "At the 2021 National Space Program Launch, Sahneva engineered a pneumatic dome, silent acoustics and 360° laser-LED synchronization.";

const PUBLISH_DATE = "2021-02-09T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/national-space-program-launch-engineering-reflex/page.jsx", "2026-02-05T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva Editorial Team";

const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I read your blog post. I'd like to get a quote for my project.");

const VIDEO_ID = "j1Tr5l8DVW8";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const VIDEO_THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export const metadata = {
  title: "National Space Program Launch (2021) | Engineering Reflex",
  description: DESCRIPTION,
  keywords: [
    "National Space Program",
    "Sahneva",
    "corporate launch",
    "pneumatic dome",
    "laser mapping",
    "led screen installation",
    "podium stage",
    "engineering stage design",
    "Beştepe Congress Center",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMG,
  date: PUBLISH_DATE,
  category: "Corporate Events",
  readTime: "7 min read",
  author: AUTHOR_NAME,
  openGraph: {
    title: "National Space Program Launch (2021) | Sahneva Engineering Reflex",
    description:
      "Engineering solutions applied by Sahneva at the National Space Program Launch and intelligent pneumatic systems.",
    url: BLOG_URL,
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "National Space Program Launch – Sahneva",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Space Program Launch (2021) | Sahneva Engineering Reflex",
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
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
        name: "National Space Program Launch 2021",
        description:
          "Video presenting Sahneva's engineering approach at the National Space Program Launch.",
        thumbnailUrl: [VIDEO_THUMB],
        uploadDate: PUBLISH_DATE,
        embedUrl: VIDEO_EMBED_URL,
        contentUrl: VIDEO_URL,
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organization",
          url: SITE_URL,
        },
      },
    ],
  };

  return <JsonLd data={schema} suppressHydrationWarning />;
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
            On February 9, 2021, Ankara's Beştepe Millet Congress and Culture Center bore witness
            to a historic moment when Turkey's 10-year space vision was unveiled. As Sahneva, we
            were on the ground not merely as a technical supplier for this mega production, but as
            an <strong>engineering partner</strong> that solved physical impossibilities with technology.
          </p>
          <p>
            Events carried out at this scale and protocol level require a discipline and reflex
            that goes far beyond conventional stage setups. For us, this project was a systems
            engineering problem — designed from scratch.
          </p>

          <h2 id="beyond-standards">1. Beyond Standards: Presidential-Level Execution</h2>
          <p>
            Setting up sound, lighting, LED screens and a podium at such a high protocol level
            requires an engineering approach where the margin of error is effectively{" "}
            <strong>zero</strong>. Every process we implemented on the launch stage went beyond
            even the standards of our <Link href="/en/corporate-events">corporate events</Link> projects.
          </p>

          <h3>Podium and Scaffolding Infrastructure</h3>
          <p>
            The podium and scaffolding systems we built to provide a perfect line of sight from
            every point in the hall were assembled with millimetric leveling and detailed load
            calculations. These structures delivered not only aesthetics but also above-standard
            performance in terms of high load capacity and vibration stability.
          </p>
          <ImgFigure
            src={IMG_PODYUM}
            alt="National Space Program Launch podium stage and scaffolding infrastructure"
            caption="Podium and load-bearing scaffolding systems were built with millimetric calculations for visibility, stability and safety."
          />

          <h3>Visual and Audio Clarity</h3>
          <p>
            High-resolution mega LED walls and homogeneous sound distribution are the fundamental
            quality standards Sahneva applies to every project. What set this launch apart,
            however, was an engineering approach and system integrity that went beyond even those
            standards. We applied the methodology from our{" "}
            <Link href="/en/led-screen-rental">LED screen rental</Link> and{" "}
            <Link href="/en/stage-rental">stage rental</Link> services throughout the detailed
            planning process.
          </p>

          <h2 id="smart-system">2. Our Engineering Difference: A Hidden "Smart System" in the Ceiling</h2>
          <p>
            Many companies can build a stage or stack LED screens. What sets Sahneva apart is the
            ability to transform a venue's ceiling from a passive surface into an{" "}
            <strong>active engineering system</strong>.
          </p>
          <p>
            The circular Dome structure — the focal point of the video — is not a decorative
            element; it is a self-contained unit that operates, generates data, and responds.
          </p>
          <ImgFigure
            src={IMG_DOME}
            alt="Pneumatic dome structure and laser mapping surface"
            caption="The pneumatic dome was designed as a smart system providing constant tension for laser mapping."
          />

          <h3>Pneumatic Architecture and Pressure Sensors</h3>
          <p>
            The concave surface of the massive ceiling dome needed to remain on a perfect plane
            for laser mapping. Precision pressure sensors integrated into the fabric surface
            continuously measured the air balance inside the volume with millisecond-level data.
          </p>

          <h3>Intelligent Air Management (Feedback Loop)</h3>
          <p>
            When pressure values dropped below the ideal level, the data from the sensors
            triggered the compressors automatically. Once the ideal tension was reached, the
            system balanced itself. Thanks to this feedback loop, the fabric surface remained
            razor-flat for laser projection.
          </p>

          <h2 id="acoustics">3. Acoustic Isolation: Pipeline Engineering</h2>
          <p>
            In a venue like Beştepe where acoustics are critical, even the slightest mechanical
            noise from massive pneumatic systems was completely unacceptable. At this point, we
            tackled the problem not with conventional methods, but with an{" "}
            <strong>engineering mindset</strong>.
          </p>
          <ImgFigure
            src={IMG_AKUSTIK}
            alt="Compressor system routed from outside to inside for acoustic isolation"
            caption="Compressors were positioned outside the hall; sound isolation was achieved via the pipeline system."
          />
          <p>
            We positioned the compressor systems entirely outside the hall. Air was transported
            from the exterior to the interior through custom-manufactured air hoses and a planned
            pipeline system. In this way, the mechanical power outside was reflected inside only
            as silent, controlled pressure.
          </p>

          <h2 id="synchronization">4. 360-Degree Synchronization (Laser &amp; LED)</h2>
          <p>
            The success of laser mapping applications depends on the absolute stability of the
            projection surface. Thanks to the pneumatic system we developed, the dome surface did
            not move even a millimeter.
          </p>
          <ImgFigure
            src={IMG_LASER_LED}
            alt="Laser mapping and LED synchronization"
            caption="Color and timing calibration between the dome surface and LED walls was achieved flawlessly."
          />
          <p>
            As a result, the galaxy animations on the ceiling were projected with maximum clarity.
            Color, brightness and timing calibration between the side LED walls and the laser
            systems were achieved flawlessly. The physical boundaries of the hall disappeared
            perceptually, and attendees were given not just a launch — but a{" "}
            <strong>fully immersive experience</strong>.
          </p>

          <h2 id="why-sahneva">5. Why Sahneva?</h2>
          <p>
            As Sahneva, we position ourselves not merely as an equipment rental company, but as a{" "}
            <strong>problem-solving engineering office</strong>.
          </p>
          <p>
            Our success at the National Space Program Launch did not come from the sturdiness of
            the podium or the size of the LED screens — it came from the algorithm of the pressure
            sensors in the ceiling and the engineering logic behind that air pipe drawn from the
            outside. Our difference is not joining the steel, but <strong>adding intelligence</strong>{" "}
            to that steel and fabric.
          </p>

          <h2 id="video">Featured Video</h2>
          <p>
            Watch the video below to get a closer look at the atmosphere and technical details of
            the launch.
          </p>
          <div className="not-prose my-8" aria-labelledby="video-title">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                title="National Space Program Launch Video"
                src={VIDEO_EMBED_URL}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p id="video-title" className="mt-3 text-sm text-gray-600">
              Video thumbnail: {VIDEO_THUMB}
            </p>
          </div>

          <h2 id="technical-summary">Technical Case Analysis (Summary)</h2>
          <ul>
            <li><strong>Venue:</strong> Beştepe Millet Congress and Culture Center, Ankara</li>
            <li><strong>Infrastructure:</strong> Above-standard podium, scaffolding, LED screen and lighting applications</li>
            <li><strong>Key Innovation:</strong> Pressure-sensor-equipped, automatically controlled pneumatic Dome system</li>
            <li><strong>Acoustic Solution:</strong> External compressor placement and closed pipeline air supply</li>
            <li>
              <strong>Result:</strong> A silent, stable and fully synchronized 360° audiovisual atmosphere
              with zero error tolerance at presidential protocol level
            </li>
          </ul>

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
