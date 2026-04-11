import Image from "next/image";
import Link from "next/link";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

/* ================== CONSTANTS ================== */
const ORIGIN = "https://www.sahneva.com";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");

const SLUG = "how-stage-rental-prices-are-determined";
const BLOG_PATH = `/en/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/sahne-kiralama-fiyatlari-hero.webp";
const IMG_M2 = "/img/blog/sahne-kiralama-fiyatlari-m2-olcu.webp";
const IMG_TEKNIK = "/img/blog/sahne-kiralama-fiyatlari-teknik-sistemler.webp";
const IMG_CADIR = "/img/blog/sahne-kiralama-fiyatlari-cadir-m2.webp";
const IMG_RIDER = "/img/blog/sahne-kiralama-fiyatlari-teknik-rider.webp";

const TITLE = "How Are Stage Rental Prices Determined?";
const DESCRIPTION =
  "Stage rental prices are based on m². They become clear with truss, LED, sound-lighting and rider details. Share your technical requirements for an estimated budget.";
const AUTHOR_NAME = "Sahneva Editorial Team";
const FEATURED_IMAGE = HERO_IMG;
const HERO_IMAGE = HERO_IMG;
const OG_IMAGE = HERO_IMG;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/en/stage-rental";
const PODIUM_SERVICE_PATH = "/en/podium-rental";
const LED_SERVICE_PATH = "/en/led-screen-rental";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Hello, I'd like to get a quote for my project.");

const PUBLISH_DATE = "2026-01-05T09:00:00+03:00";

/* ================== META ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL, languages: { "tr-TR": `${SITE_URL}/blog/sahne-kiralama-fiyatlari-neye-gore-belirlenir`, "en-US": BLOG_URL, "x-default": BLOG_URL } },
  image: HERO_IMG,
  openGraph: {
    title: `${TITLE} | Sahneva`,
    description:
      "m², technical systems and technical rider: the real determinants of stage rental price. For a clear price on multi-layered events, technical requirements need to be defined.",
    url: BLOG_URL,
    type: "article",
    locale: "en_US",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "m² and technical requirements that affect stage rental prices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Stage price is determined by m²; the budget becomes clear when technical layers and rider are provided.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  robots: { index: true, follow: true },
};

/* ================== COMPONENTS ================== */
function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="not-prose my-8">
      <div className="relative overflow-hidden rounded-2xl bg-transparent">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-gray-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/* ================== PAGE ================== */
export default function Page() {
  
  const breadcrumbItems = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/en/blog` },
    { name: (metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "Blog"), url: BLOG_URL },
  ];

return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\\s*\\|\\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Production & Technical", "Event Engineering"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="7\u20139 min read"
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

          <div className="prose prose-lg max-w-none">
            {/* INTRO */}
            <p>
              "How much does a stage cost?" is one of the most frequently asked questions in the event industry.
              However, a stage is not a shelf product sold at a single price. A stage is a system that directly
              affects the center, flow, safety and visual perception of an event.{" "}
              <strong>the technical needs of the event</strong>.
            </p>

            <p>
              We prepared this guide to make things "clear" for agencies, municipalities, corporate teams and organizers.
              By the end of this article, you should be able to comfortably say:
              "Yes, I understand why the price changes. I know what information is needed for a firm price."
            </p>

            <h2>Why is stage rental not a single-line service?</h2>
            <p>
              Stage rental is often thought of as "platform installed, done." But the stage is the backbone of the event.
              There are layers that must be considered alongside the stage:
            </p>
            <ul>
              <li>
                <strong>Load-bearing structure:</strong> Modular podium, truss systems, roof solutions when needed.
              </li>
              <li>
                <strong>Visual layer:</strong> LED screens, stage backdrop, front-of-stage appearance.
              </li>
              <li>
                <strong>Sound and lighting:</strong> A speech system differs from a concert system; details like live music/orchestra fundamentally change the budget.
              </li>
              <li>
                <strong>Floor plan:</strong> Tent, entry-exit safety, barrier areas, protocol layout, camera angles.
              </li>
            </ul>
            <p>
              For this reason, when discussing stage pricing, answering "which stage?" correctly is essential.
              Not just the dimensions, but also the role the stage plays must be clarified.
            </p>

            {/* m2 */}
            <h2>1) At the most basic level, m² determines stage price</h2>
            <p>
              The most fundamental factor affecting stage rental price is the size of the stage (m²). The reason is simple:
              the modular structure used, the coverage area and the labour plan grow with the size.
              However, there is a critical point here: Stage size is most often determined not by "desire" but by{" "}
              <strong>venue and event flow</strong>.
            </p>

            <ImgFigure
              src={IMG_M2}
              alt="Stage size (m²) and area planning"
              caption="Stage size is clarified in most projects according to area/tent size; the company does not impose a size, it recommends one."
            />

            <h3>Why is the venue decisive?</h3>
            <p>
              In indoor venues and tent-interior work, saying "I want this size" is not always possible. Because
              there needs to be clearance behind the stage, on the sides, a front-of-stage safety line and audience arrangement.
              If the venue is tight, the stage size is naturally constrained. In this case, the technical team
              recommends the "most correct" possible size for the stage.
            </p>

            <h3>Why is tent size decisive?</h3>
            <p>
              In outdoor projects where a tent is to be used, the stage size is often shaped according to the "frame"
              carried by the tent. Aligning the stage with the tent makes the site manageable in terms of
              rain, wind, entry-exit and audience flow.
            </p>

            <h3>What does "stage should fill the environment" mean?</h3>
            <p>
              The stage is not just a floor to stand on. The stage creates an atmosphere with lighting, LED screens and visual design.
              If the stage is too small, the area looks "empty"; the event perception weakens. For this reason,
              in most projects, planning the stage larger—to the extent the space permits—yields better results.
              In some projects, having the stage go wall-to-wall gives the event a much stronger look.
            </p>

            {/* height */}
            <h2>2) Does stage height affect price?</h2>
            <p>
              Generally no. Stage height (40/60/80 cm etc.) is not the main price-determining factor.
              The installation logic is the same; stage height is selected more based on line of sight, protocol layout and on-stage needs.
              In short, the main axis of stage pricing is m² and technical scope.
            </p>

            {/* technical layers */}
            <h2>3) Technical layers: Truss, LED screen, sound and lighting</h2>
            <p>
              The stage is not considered in isolation. In most events, there are technical layers accompanying the stage.
              What affects the price here is not so much "present/absent" but rather{" "}
              <strong>quantity, brand and specification</strong>.
            </p>

            <ImgFigure
              src={IMG_TEKNIK}
              alt="Truss, LED screen and sound-lighting systems"
              caption="LED screens are most often priced daily; truss/podium is evaluated according to project scope."
            />

            <h3>Why are LED screens priced daily?</h3>
            <p>
              For LED screens (especially in outdoor use), equipment logistics, installation planning and the
              technical specifications of the screen are very well-suited to daily planning. Moreover, differences
              in pixel pitch, brand/series and outdoor durability on the LED screen side can create significant budget differences.
              This is why the LED screen item is most often priced daily.
            </p>

            <p>
              For details about LED screen service:{" "}
              <a href="https://www.sahneva.com/led-ekran-kiralama">LED Screen Rental</a>.
            </p>

            <h3>Why are truss and podium sometimes in the same daily/weekly band?</h3>
            <p>
              Truss and podium are the load-bearing infrastructure of the stage. Daily or weekly planning can be done
              depending on the project type; in some projects the daily/weekly price band may approach each other.
              Because the main cost is most often related to the installation-dismantling organisation, labour plan and project scope.
            </p>

            <p>
              For podium solutions:{" "}
              <a href="https://www.sahneva.com/podyum-kiralama">Podium Rental</a>.
            </p>

            <h3>Sound & lighting: speech vs concert are not the same</h3>
            <p>
              The system needed at a corporate speech event is not the same as at a concert with live music/orchestra.
              When live music comes into play, the on-stage monitor layout, microphone requirements, mixing and lighting
              setup grow. This is why the sound-lighting item is one of the most variable budget generators for the stage.
            </p>

            <p>
              For details:{" "}
              <a href="https://www.sahneva.com/ses-isik-sistemleri">Sound & Lighting Systems</a>.
            </p>

            {/* tent */}
            <h2>4) Tent: priced per m² and shapes the stage</h2>
            <p>
              Tent rental can indirectly affect stage price because it defines the frame of the area.
              Tent price is clear: calculated <strong>per m²</strong>. Outdoor events, grand openings,
              safety zones in front of buildings and similar projects frequently use tents.
            </p>

            <ImgFigure
              src={IMG_CADIR}
              alt="Tent rental m² calculation and outdoor installation plan"
              caption="Tent m² calculation can directly affect stage size and layout."
            />

            <p>
              For tent service:{" "}
              <a href="https://www.sahneva.com/cadir-kiralama">Tent Rental</a>.
            </p>

            {/* estimated vs firm */}
            <h2>5) Estimated price vs firm price: the most critical distinction</h2>
            <p>
              When discussing price, there are two separate worlds:
            </p>
            <ul>
              <li>
                <strong>Estimated price:</strong> A number given with an average assumption when technical requirements are not fully clear.
              </li>
              <li>
                <strong>Firm price:</strong> The definitive budget that emerges once the technical plan (rider/specification) and scope are finalised.
              </li>
            </ul>

            <p>
              Without a rider, the discussion is usually based on "an average stage + average installation + estimated technical layers."
              This is a starting point for planning; but it is not the "final word."
            </p>

            <h3>Why can't an estimated price be binding?</h3>
            <p>
              Because the event may not be single-layered. For example, the stage may take on different roles within one day:
              morning protocol speech, evening concert; a different programme after the concert. Also, every figure given
              without discussing the brand/quantity/specifications of LED screens, sound-lighting, truss and similar items
              is an "average."
            </p>

            <h3>What information improves this average?</h3>
            <p>
              For the estimated price to be more realistic, at minimum the following are required:
              venue/area information, desired stage size, event type (corporate or concert), whether LED is wanted,
              sound-lighting scope and event duration (number of days).
            </p>

            {/* rider */}
            <h2>6) Why does the price change when the technical rider arrives?</h2>
            <p>
              The technical rider reveals the real requirements of the event. Most importantly: a rider does not only come from the artist.
              Agencies, corporate teams, municipalities or political organisations can also produce a "technical plan/specification."
              This is where the firm price is born.
            </p>

            <ImgFigure
              src={IMG_RIDER}
              alt="Technical rider clarifying stage and equipment requirements"
              caption="The rider clarifies technical scope from stage size to LED/lighting/sound details."
            />

            <h3>Typical areas where the rider changes the price</h3>
            <ul>
              <li>
                <strong>Sound-lighting scope:</strong> Details such as live music, orchestra, backline fundamentally change the budget.
              </li>
              <li>
                <strong>LED screen:</strong> Once size, brand and usage (indoor/outdoor) are clear, costs become clear.
              </li>
              <li>
                <strong>Truss/podium plan:</strong> On-stage rigging, hanging needs, setup details.
              </li>
              <li>
                <strong>Flow and role change:</strong> If the same stage will be used for both concert and speech, the design changes.
              </li>
            </ul>

            <p>
              The critical sentence here is: Any price given without a rider is an "average." When the rider arrives,
              price changes are normal; because now technical reality is being discussed, not an estimate.
            </p>

            {/* why client determines size */}
            <h2>7) Why does the client determine the size? (Agency, municipality, corporate reality)</h2>
            <p>
              A common situation in the industry: The client says "I want a stage of this size." For the technical team,
              this sometimes raises a "why?" question. But on the ground there are very practical reasons for this:
            </p>
            <ul>
              <li>
                <strong>Agency contracts:</strong> Stage size and appearance may be written in the brief of the project.
              </li>
              <li>
                <strong>Brand visibility:</strong> Elements such as sponsor area, backdrop, LED design can determine the size.
              </li>
              <li>
                <strong>Camera and broadcast:</strong> Camera angles are directly related to stage depth and width.
              </li>
              <li>
                <strong>Protocol layout:</strong> Speaker area, lectern/podium, entry-exit, security layout.
              </li>
            </ul>

            <p>
              For this reason, stage size is not shaped only by the "artist"; it is shaped by all stakeholders of the organisation.
              The technical team tries to optimise the size; but if the organisation's request is technically feasible, it is implemented.
            </p>

            {/* multi-layered */}
            <h2>8) Multi-layered events: concert + speech + rally type scenarios</h2>
            <p>
              Building the stage only for the artist is not realistic in many projects. Some events are multi-layered:
              after the concert there may be a speech, the same stage may be reused according to the protocol flow.
              In this case the stage plan is designed not for a single need, but for{" "}
              <strong>multiple use</strong> scenarios.
            </p>

            <h3>How does this multiple use affect the price?</h3>
            <p>
              In multi-layered projects, what usually happens is: The stage is installed to handle the "most intensive use" scenario.
              Because expanding/shrinking the stage multiple times during the day is not practical. This also determines the
              size of the stage, the load-bearing structure and the technical layers. As a result, the price is shaped not by a
              single programme but by the{" "}
              <strong>technical requirements of the entire day</strong>.
            </p>

            <h3>Corporate events and grand openings</h3>
            <p>
              In corporate events, grand openings and launches there is most often no artist rider. In these projects,
              the stage is planned according to speech and visual flow; the price is more predictable. However, when live music
              is added (orchestra, backline etc.), the project can suddenly approach concert standard.
            </p>

            <p>
              For corporate planning:{" "}
              <Link href="/en/corporate-events">Corporate Events</Link>.
            </p>

            {/* logistics */}
            <h2>9) Within Istanbul and out of city: how does logistics affect it?</h2>
            <p>
              Logistics is a line item that varies from project to project. Projects within Istanbul and out-of-city projects
              are not the same. For out-of-city projects, transport costs are shaped by rates obtained from transport/logistics companies.
              For this reason, the "same price everywhere" approach is not realistic in practice.
            </p>

            {/* duration */}
            <h2>10) Rental duration: day-based planning</h2>
            <p>
              Stage rental duration can be planned on a day basis according to need. There can be a single-day event,
              or longer rentals can be made for multi-day fairs/festivals. The important thing here is to consider the
              project together with the installation-dismantling plan.
            </p>

            {/* Sahneva approach */}
            <h2>11) Sahneva approach: "not a single piece, but the complete solution"</h2>
            <p>
              Stage rental is not just about building a platform. Event infrastructure is a whole: stage, tent, flooring,
              LED screen, sound and lighting systems, backstage/front-of-stage appearance and site coordination are all planned together.
              This holistic approach; reduces surprises, speeds up communication and makes the event manageable "from a single hand."
            </p>
            <p>
              For this reason, during the quotation process, these questions matter as much as "stage price":
              "What event?", "Is there a technical plan?", "Is LED/sound-lighting included?", "Will the stage also be used in a different flow on the same day?"
              When these questions are clarified, the price is also clarified.
            </p>

            {/* Quick Summary */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mt-0">Quick Summary</h3>
              <ul className="mb-0">
                <li>
                  <strong>Stage price:</strong> Fundamentally m²
                </li>
                <li>
                  <strong>Height:</strong> Generally does not affect price
                </li>
                <li>
                  <strong>LED / sound-lighting / truss:</strong> Quantity + brand + specification
                </li>
                <li>
                  <strong>Tent:</strong> Per m², determines layout
                </li>
                <li>
                  <strong>Rider/technical plan:</strong> The main key to a firm price
                </li>
                <li>
                  <strong>Multi-layered event:</strong> Stage is planned not for a single role, but for the entire flow
                </li>
              </ul>
            </div>

            {/* CTA */}
            <h2>The fastest route to a firm price</h2>
            <p>
              To get a firm price; the event type, venue/area information, desired stage size and technical layers
              (LED, sound-lighting, truss, tent etc.) should be shared as clearly as possible. If there is an artist or live music,
              the technical rider is the main determinant of price.
            </p>

            <p>
              You can quickly get information from the relevant pages:
            </p>
            <ul>
              <li>
                <a href="https://www.sahneva.com/sahne-kiralama">Stage Rental</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/led-ekran-kiralama">LED Screen Rental</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/ses-isik-sistemleri">Sound & Lighting Systems</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/podyum-kiralama">Podium Rental</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/cadir-kiralama">Tent Rental</a>
              </li>
              <li>
                <Link href="/en/corporate-events">Corporate Events</Link>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/en/stage-rental"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white hover:bg-gray-800"
            >
              Stage Rental Details
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 font-bold text-gray-900 hover:bg-gray-50"
            >
              Discovery / Get a Quote
            </Link>
          </div>

          <BlogRelatedLinks
            services={[
              { href: "/en/stage-rental", label: "Stage Rental" },
              { href: "/en/podium-rental", label: "Podium Rental" },
            ]}
          />
      </BlogLayout>
    </>
  );}
