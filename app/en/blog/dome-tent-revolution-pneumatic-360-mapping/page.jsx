// app/en/blog/dome-tent-revolution-pneumatic-360-mapping/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";

import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== URLS ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? BASE_SITE_URL).replace(/\/$/, "");
const SLUG = "dome-tent-revolution-pneumatic-360-mapping";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* ================== DATES ================== */
const PUBLISH_DATE = "2026-01-20T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/en/blog/dome-tent-revolution-pneumatic-360-mapping/page.jsx", "2026-02-05T00:00:00+03:00");

/* ================== AUTHOR ================== */
const AUTHOR_NAME = "Sahneva Technical";

/* ================== ASSETS ================== */
const HERO_IMAGE = "/img/blog/dome-cadir-360-mapping-hero.webp";
const OG_IMAGE = HERO_IMAGE;

const FEATURED_IMAGE = HERO_IMAGE;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/en/stage-rental";
const PODIUM_SERVICE_PATH = "/en/podium-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I'd like to get a quote for my project.");

const IMG_KURULUM = "/img/blog/dome-cadir-kurulum.webp";
const IMG_IC_MEKAN = "/img/blog/dome-cadir-ic-mekan.webp";
const IMG_MAPPING = "/img/blog/dome-cadir-projeksiyon-mapping.webp";
const IMG_GECE = "/img/blog/dome-cadir-gece-ambiyans.webp";

const YT_URL = "https://www.youtube.com/watch?v=JNzGlNzNRuk";
const YT_ID = "JNzGlNzNRuk";
const YT_EMBED = `https://www.youtube-nocookie.com/embed/${YT_ID}?rel=0&modestbranding=1`;
const YT_THUMB = `https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`;
const YT_LASER_URL = "https://youtube.com/shorts/CVdYV5BkF3k";
const YT_LASER_ID = "CVdYV5BkF3k";
const YT_LASER_EMBED = `https://www.youtube-nocookie.com/embed/${YT_LASER_ID}?rel=0&modestbranding=1`;
const YT_LASER_THUMB = `https://img.youtube.com/vi/${YT_LASER_ID}/hqdefault.jpg`;

/* ================== META ================== */
export const metadata = {
  title: "Dome Tent Revolution at Corporate Events: 360° Mapping",
  description:
    "Dome tent and 360° video mapping revolution at corporate launches. Dicle Fest case study, rapid installation, acoustic synchronisation and full project details.",
  image: HERO_IMAGE,
  alternates: {
    canonical: BLOG_URL,
    languages: { "tr-TR": `${SITE_URL}/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping`, "en-US": BLOG_URL, "x-default": BLOG_URL },
  },
  openGraph: {
    title: "Dome Tent Revolution at Corporate Events: Pneumatic Structure and 360° Mapping",
    description:
      "360° mapping inside a dome tent: engineering, installation speed, acoustic control and fully synchronised production approach.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Dome tent revolution at corporate events – pneumatic structure and 360° mapping application",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dome Tent + 360° Mapping: The Future of Corporate Launches",
    description:
      "Immersive launch experiences with pneumatic dome and 360° video mapping.",
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  keywords: [
    "dome tent rental",
    "pneumatic dome tent",
    "geodesic dome",
    "360 video mapping",
    "projection mapping",
    "corporate launch",
    "technical production",
    "tent rental",
  ],
  authors: [{ name: AUTHOR_NAME }],
};

/* ================== JSON-LD ================== */
function ArticleSchema() {
  const WEBPAGE_ID = `${BLOG_URL}#webpage`;
  const ARTICLE_ID = `${BLOG_URL}#article`;
  const PRIMARY_IMAGE_ID = `${BLOG_URL}#primaryimage`;
  const VIDEO_ID = `${BLOG_URL}#video`;
  const VIDEO_LASER_ID = `${BLOG_URL}#laser-video`;
  const LOGO_ID = `${SITE_URL}/#logo`;

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
        name: "Dome Tent Revolution at Corporate Events: Pneumatic Structure and 360° Mapping for the Future of Launches",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        primaryImageOfPage: { "@id": PRIMARY_IMAGE_ID },
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      {
        "@type": "VideoObject",
        "@id": VIDEO_ID,
        name: "Dome Tent & 360° Mapping Example",
        description:
          "Example video of a 360° video mapping application inside a dome tent.",
        uploadDate: "2025-11-17T00:00:00+03:00",
        embedUrl: `https://www.youtube-nocookie.com/embed/${YT_ID}`,
        contentUrl: YT_URL,
        thumbnailUrl: YT_THUMB,
      },
      {
        "@type": "VideoObject",
        "@id": VIDEO_LASER_ID,
        name: "Laser Projection Mapping Example",
        description:
          "Short video showing the flow and effects of laser projection mapping content.",
        uploadDate: "2025-11-17T00:00:00+03:00",
        embedUrl: `https://www.youtube-nocookie.com/embed/${YT_LASER_ID}`,
        contentUrl: YT_LASER_URL,
        thumbnailUrl: YT_LASER_THUMB,
      },
      {
        "@type": "Article",
        "@id": ARTICLE_ID,
        isPartOf: { "@id": WEBPAGE_ID },
        mainEntityOfPage: { "@id": WEBPAGE_ID },
        headline:
          "Dome Tent Revolution at Corporate Events: Pneumatic Structure and 360° Mapping for the Future of Launches",
        description:
          "Immersive launches with pneumatic/geodesic dome tent + 360° mapping: Batman Dicle Electricity – Dicle Fest case study, installation, acoustics and synchronisation.",
        image: { "@id": PRIMARY_IMAGE_ID },
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en-US",
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        video: [{ "@id": VIDEO_ID }, { "@id": VIDEO_LASER_ID }],
      },
      {
        "@type": "ImageObject",
        "@id": LOGO_ID,
      },
    ],
  };

  return <JsonLd id="article-ld-json" data={jsonLd} />;
}

/* ================== UI HELPERS ================== */
function YouTubeEmbed({ title, embedUrl }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-sm">
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ================== PAGE ================== */
export default function BlogPostDome360Mapping() {
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: "Dome Tent + 360° Mapping", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
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

              <p>
                In the corporate world, prestige is now being redefined beyond the confines of classic hotel ballrooms—through futuristic event structures that open to the sky and breathe with technology. As of 2026, the new darling of corporate launches is clear:{" "}
                <strong>Pneumatic Dome Tent Structures</strong> and{" "}
                <strong>360° Video Mapping</strong> engineering.
              </p>

              <p>
                These systems do not merely tell the brand story; they place the attendee at the very heart of the narrative, making them part of the experience.
                As Sahneva Technical, the massive geodesic dome structure we brought to life for the Batman Dicle Electricity – Dicle Fest project is one of the most concrete and impressive examples of this transformation in Turkey.
              </p>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_IC_MEKAN}
                  alt="Dome tent interior: column-free wide volume and unobstructed sightlines for a 360° experience"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h2 id="dome-power">1. The Corporate Power of Dome Tents: Why Should You Rent One?</h2>
              <p>
                Geodesic and pneumatic dome tents—leaving classic tent and temporary structure systems behind—give brands an "innovative, powerful and visionary" perception.
              </p>

              <h3 id="immersive">1.1 Immersive (All-Encompassing) Atmosphere</h3>
              <p>
                Thanks to the transparent outer surface, the event space takes on a timeless spirit:
              </p>
              <ul>
                <li>
                  <strong>Daytime:</strong> A bright launch space bathed in natural light.
                </li>
                <li>
                  <strong>Night-time:</strong> A futuristic atmosphere merging with the stars.
                </li>
                <li>
                  <strong>Inner Surface:</strong> Brand-specific 360° content that delivers an uninterrupted visual experience surrounding every attendee.
                </li>
              </ul>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_GECE}
                  alt="Dome tent at night: futuristic silhouette from outside"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h3 id="safety">1.2 Engineering Marvel and Safety</h3>
              <p>
                The large structure erected in Batman ensures maximum resistance thanks to the geodesic form that distributes wind load evenly across the entire surface. The column-free structure provides a wide, unobstructed interior volume, bringing stage sightlines, LED screen placement and sound distribution to the ideal level.
              </p>

              <h3 id="fast-installation">1.3 Fast and Modular Operation</h3>
              <p>
                With Sahneva engineering, dome installation, ground and infrastructure integration and technical system placement were completed in as little as <strong>4 hours</strong>.
              </p>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_KURULUM}
                  alt="Dome tent installation process: modular assembly and fast operation"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <p>
                Dome tent systems can be seamlessly and safely integrated with professional stages, LED screens, line array sound systems and moving head lights.
              </p>

              <h2 id="mapping">2. 360° Mapping Engineering: The Dicle Electricity Batman Case Study</h2>
              <p>
                The 360° mapping system used at the Batman launch transformed the dome's inner surface into a massive digital stage.
              </p>

              <div className="not-prose my-8">
                <YouTubeEmbed
                  title="Dome Tent & 360° Mapping Video"
                  embedUrl={YT_EMBED}
                />
                <p className="mt-3 text-sm text-gray-600">
                  Video source:{" "}
                  <a href={YT_URL} target="_blank" rel="noopener noreferrer">
                    YouTube
                  </a>{" "}
                  (embed: youtube-nocookie).
                </p>
              </div>

              <div className="not-prose my-8">
                <YouTubeEmbed
                  title="Laser Projection Mapping Video"
                  embedUrl={YT_LASER_EMBED}
                />
                <p className="mt-3 text-sm text-gray-600">
                  Video source:{" "}
                  <a href={YT_LASER_URL} target="_blank" rel="noopener noreferrer">
                    YouTube Shorts
                  </a>{" "}
                  (laser projection mapping content).
                </p>
              </div>

              <h3 id="projection">2.1 Lumen Power + Warp &amp; Edge Blending</h3>
              <ul>
                <li>
                  <strong>High Lumen Power:</strong> Homogeneous illumination is achieved with 4–8 projectors in the 20,000 ANSI lumen class, calculated according to diameter/area.
                </li>
                <li>
                  <strong>Warp &amp; Edge Blending:</strong> Distortion and overlaps on the curved surface are corrected to millimetre precision using software such as MadMapper/Watchout.
                </li>
              </ul>

              <figure className="not-prose rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm my-8">
                <Image
                  src={IMG_MAPPING}
                  alt="Projection mapping: warp and edge blending alignment on a curved surface"
                  width={960}
                  height={540}
                  className="w-full h-full object-cover"
                />
              </figure>

              <h3 id="sync">2.2 Full Synchronisation</h3>
              <p>
                Mapping content works in full real-time synchronisation with speech moments, beats from the line array system and moving head light effects. The "wow effect" begins the moment an attendee steps inside.
              </p>

              <h2 id="challenges">3. Technical Challenges and Sahneva Solutions</h2>
              <ul>
                <li>
                  <strong>Acoustic Echo Control:</strong> The focused echo of the round geometry is brought under control through correct line array positioning and acoustic treatment.
                </li>
                <li>
                  <strong>RF / Spectrum Safety:</strong> Real-time analysis and collision prevention against 5G/RF interference in open areas provides "invisible cable safety."
                </li>
                <li>
                  <strong>Precise Calibration:</strong> Laser measurement and point-by-point alignment reduce image distortion to near zero.
                </li>
              </ul>

              <h2 id="conclusion">Conclusion: Experience the Launch of the Future Today</h2>
              <p>
                As of 2026, corporate events feel incomplete without dome tent and 360° mapping engineering. We treat these structures not merely as a tent, but as a production system centred on data, engineering and experience.
              </p>

              <p className="not-prose mt-6">
                Are you planning a project of Dicle Fest calibre?
              </p>

              <div className="not-prose mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <div>
                  <p className="text-lg font-semibold text-blue-900">
                    👉 Dome Tent &amp; Technical Production Quote
                  </p>
                  <p className="text-sm text-blue-800">
                    Get in touch within 2 hours for a 3D layout plan and mapping concept.
                  </p>
                  <p className="text-sm text-blue-800 mt-2">
                    Other options:{" "}
                    <Link href="/en/tent-rental" className="underline font-semibold">
                      View our tent rental options
                    </Link>
                  </p>
                </div>

                <Link
                  href="/en/stage-rental"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
              </div>

              <BlogRelatedLinks
                services={[
                  { href: "/en/tent-rental", label: "Tent Rental" },
                  { href: "/en/stage-rental", label: "Stage Rental" },
                ]}
              />
      </BlogLayout>
    </>
  );
}
