// app/en/blog/how-to-organize-corporate-event-in-turkey/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const BLOG_PATH = "/en/blog/how-to-organize-corporate-event-in-turkey";
const url = `${BASE_SITE_URL}${BLOG_PATH}`;
const FEATURED_IMAGE = "/img/kurumsal/hero.webp";
const AUTHOR_NAME = "Sahneva Editorial Team";
const PUBLISH_DATE = "2026-06-29T00:00:00+03:00";

export const metadata = {
  title: "How to Organize a Corporate Event in Turkey",
  description:
    "Guide for foreign companies planning corporate events in Turkey: city selection, local production partners, technical requirements, budget and logistics.",
  alternates: {
    canonical: url,
    languages: {
      "en-US": url,
      "x-default": url,
    },
  },
  openGraph: {
    title: "How to Organize a Corporate Event in Turkey — A Guide for International Companies | Sahneva",
    description:
      "Step-by-step guide for foreign companies and international event agencies planning corporate events, conferences, incentive galas and product launches in Turkey.",
    url,
    siteName: "Sahneva",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${BASE_SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Corporate event production in Turkey — conference stage setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Organize a Corporate Event in Turkey",
    description:
      "Guide for international companies planning corporate events, conferences and incentive galas in Turkey.",
    images: [`${BASE_SITE_URL}${FEATURED_IMAGE}`],
  },
  authors: [{ name: AUTHOR_NAME }],
  keywords: [
    "organize corporate event Turkey",
    "planning event Turkey international",
    "corporate event Turkey guide",
    "event production Turkey foreign company",
    "conference Turkey guide",
    "incentive event Turkey",
    "MICE Turkey guide",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const WHATSAPP = `https://wa.me/905453048671?text=${encodeURIComponent("Hello, we are an international company planning a corporate event in Turkey. We'd like to discuss technical production support.")}`;

/* ===== Shared layout components ===== */
function ProseSection({ id, children }) {
  return (
    <section id={id} className="py-8 md:py-10">
      {children}
    </section>
  );
}

function InlineCard({ title, children }) {
  return (
    <div className="my-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 md:p-6">
      {title && <div className="text-sm font-black uppercase tracking-[0.15em] text-blue-700 mb-2">{title}</div>}
      {children}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }) {
  return (
    <div className="my-6 border-l-4 border-blue-600 pl-5 py-2">
      <p className="text-gray-700 italic leading-relaxed">{children}</p>
    </div>
  );
}

/* ===== JSON-LD ===== */
function BlogJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: "How to Organize a Corporate Event in Turkey — A Guide for International Companies",
        description:
          "Complete guide for foreign companies planning corporate events in Turkey. City selection, local production partners, technical requirements and logistics for Istanbul, Antalya and beyond.",
        image: `${BASE_SITE_URL}${FEATURED_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: PUBLISH_DATE,
        author: { "@type": "Organization", name: AUTHOR_NAME, url: BASE_SITE_URL },
        publisher: { "@id": ORGANIZATION_ID },
        inLanguage: "en-US",
        isPartOf: { "@id": WEBSITE_ID },
        about: [
          { "@type": "Thing", name: "Corporate event production in Turkey" },
          { "@type": "Thing", name: "MICE events Turkey" },
          { "@type": "Thing", name: "International event planning Turkey" },
        ],
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_SITE_URL}/en/blog` },
          { "@type": "ListItem", position: 3, name: "How to Organize a Corporate Event in Turkey", item: url },
        ],
      },
    ],
  };

  return <JsonLd id="ld-json-blog-turkey-event-guide" data={jsonLd} />;
}

/* ===== Table of Contents ===== */
const TOC = [
  { id: "why-turkey", label: "Why Turkey for corporate events?" },
  { id: "choosing-city", label: "Choosing the right city" },
  { id: "event-formats", label: "Common event formats" },
  { id: "local-partner", label: "Finding a local production partner" },
  { id: "technical-production", label: "Technical production requirements" },
  { id: "timeline", label: "Planning timeline" },
  { id: "budget", label: "Budgeting your Turkey event" },
  { id: "logistics", label: "On-the-ground logistics" },
  { id: "checklist", label: "Pre-event checklist" },
];

/* ===== Page ===== */
export default function HowToOrganizeCorporateEventInTurkeyPage() {
  const breadcrumbItems = [
    { name: "Home", url: `${BASE_SITE_URL}/en` },
    { name: "Blog", url: `${BASE_SITE_URL}/en/blog` },
    { name: "How to Organize a Corporate Event in Turkey", url },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={BASE_SITE_URL} />
      <BlogJsonLd />

      <article className="bg-white">
        {/* Hero */}
        <div className="relative overflow-hidden bg-[#0B1120]">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={FEATURED_IMAGE}
              alt="Corporate event production in Turkey — conference stage and LED screen"
              fill
              priority
              className="object-cover opacity-40"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/70 to-[#0B1120]/30" />
          </div>

          <div className="relative z-10 container mx-auto px-4 pt-20 pb-14 md:pt-28 md:pb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                <Link href="/en/blog" className="hover:text-white/80 transition">Blog</Link>
                <span>/</span>
                <span className="text-white/80">International Events</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                How to Organize a Corporate Event in Turkey —{" "}
                <span className="text-blue-300">A Guide for International Companies</span>
              </h1>

              <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-2xl">
                Turkey is one of Europe's fastest-growing corporate event destinations. This guide covers everything international companies, PCOs and DMCs need to know before planning meetings, conferences, incentive galas or product launches in Turkey.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
                <span>{AUTHOR_NAME}</span>
                <span>·</span>
                <span>June 2026</span>
                <span>·</span>
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content grid */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-start max-w-6xl mx-auto">

            {/* Article body */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline">

              <ProseSection id="why-turkey">
                <h2>Why International Companies Choose Turkey for Corporate Events</h2>
                <p>
                  Turkey has moved into the top tier of global MICE destinations — and for good reason. Its geographic position between Europe, the Middle East and Central Asia makes it naturally accessible for multinational delegate groups. Istanbul's airport alone connects to over 300 destinations worldwide, and Antalya receives direct charter and scheduled flights from more than 50 countries during peak season.
                </p>
                <p>
                  But access is only part of the picture. The combination of world-class congress infrastructure, a broad range of five-star venues, relatively competitive event costs and a rich cultural offer has made Turkey a compelling alternative to Western European destinations for corporate events across almost every industry segment.
                </p>
                <InlineCard title="Key reasons international companies choose Turkey">
                  <CheckList items={[
                    "Central location between Europe, the Middle East and Asia",
                    "Direct flight connectivity from 300+ global destinations",
                    "Competitive pricing vs. comparable Western European venues",
                    "Large-capacity congress hotels in Istanbul and Antalya",
                    "Rich incentive programme potential (history, culture, gastronomy)",
                    "Strong government MICE support and tourism infrastructure",
                    "English-fluent hotel and event industry staff",
                    "Year-round event calendar with no single 'off-season'",
                  ]} />
                </InlineCard>
              </ProseSection>

              <ProseSection id="choosing-city">
                <h2>Choosing the Right City for Your Event in Turkey</h2>
                <p>
                  The city choice is the most consequential decision in a Turkey event plan. Each city serves a different delegate profile, event size and programme type.
                </p>

                <h3>Istanbul</h3>
                <p>
                  Istanbul is Turkey's business and cultural capital and its primary congress destination for high-profile international events. The city has a large inventory of five-star conference hotels — Hilton Bomonti, Raffles, Conrad, InterContinental, Swissôtel — alongside dedicated congress infrastructure like the Istanbul Congress Centre. For large international congresses (500–5,000+ delegates), executive meetings with Bosphorus views, pharmaceutical summits and prestige brand launches, Istanbul is usually the default choice.
                </p>
                <p>
                  The practical consideration: Istanbul is a large, busy city. Logistics require careful planning — hotel proximity to the congress venue, traffic during transfer periods and loading access windows at event properties can all create friction if not pre-planned with a local partner.
                </p>

                <h3>Antalya</h3>
                <p>
                  Antalya is Turkey's largest resort event destination and hosts more international incentive programs and resort-format congresses than any other Turkish city. The Belek, Kemer and Side resort zones contain massive five-star hotel properties — Regnum, Rixos, Titanic, Calista, Cornelia — many with ballrooms that hold 1,000–3,000+ guests and dedicated congress wings.
                </p>
                <p>
                  Antalya works best for incentive travel programs, dealer meetings, pharmaceutical congresses with resort-format social programmes, and any event where the overall destination experience is part of the offer. The Mediterranean climate makes it attractive from late March through November.
                </p>

                <h3>Izmir</h3>
                <p>
                  Izmir is Turkey's western gateway — a modern, livable city with strong academic, trade fair and regional congress credentials. The Izmir Fuar Alanı (Izmir International Fair) is the largest exhibition complex in Turkey, and the city's proximity to Ephesus provides an excellent incentive backdrop. Best for regional corporate meetings, trade exhibitions and academic congresses for the Aegean region.
                </p>

                <h3>Ankara</h3>
                <p>
                  Turkey's capital is the right choice for government, diplomatic, public sector and academic events. The city has strong protocol infrastructure but fewer resort-format options. Events here tend to be more formal: ministerial meetings, UN-related events, inter-governmental conferences and academic symposiums.
                </p>

                <InlineCard title="Quick city selector">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="text-left border-b border-blue-200">
                          <th className="py-2 pr-4 font-black text-slate-900">City</th>
                          <th className="py-2 pr-4 font-black text-slate-900">Best for</th>
                          <th className="py-2 font-black text-slate-900">Peak season</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-50">
                        {[
                          ["Istanbul", "Congresses, launches, executive meetings, galas", "Year-round"],
                          ["Antalya", "Incentives, dealer meetings, resort congresses", "Mar–Nov"],
                          ["Izmir", "Trade fairs, exhibitions, academic congresses", "Apr–Oct"],
                          ["Ankara", "Government, diplomatic, public sector events", "Year-round"],
                          ["Bodrum", "Premium incentives, brand experiences", "May–Sep"],
                          ["Cappadocia", "Unique destination incentive events", "Apr–Oct"],
                        ].map(([c, b, s]) => (
                          <tr key={c} className="text-slate-700">
                            <td className="py-2 pr-4 font-semibold">{c}</td>
                            <td className="py-2 pr-4">{b}</td>
                            <td className="py-2">{s}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </InlineCard>
              </ProseSection>

              <ProseSection id="event-formats">
                <h2>Common Corporate Event Formats in Turkey</h2>
                <p>
                  Turkey's event infrastructure supports the full range of corporate formats. These are the most common types international companies bring to Turkey, with their typical technical requirements:
                </p>
                <div className="space-y-4 not-prose my-6">
                  {[
                    {
                      title: "International Conferences & Congresses",
                      desc: "Multi-day programmes with plenary sessions, breakout rooms, poster halls, simultaneous interpretation and exhibition areas. Typical scale: 200–5,000 delegates. Technical requirement is complex — multi-room AV, SI systems, recording suites and exhibition lighting.",
                    },
                    {
                      title: "Incentive Travel Programmes",
                      desc: "Group reward events for top performers, dealer networks or VIP clients. Usually 100–500 people. Programme includes daytime experiences and evening gala events — the gala production (stage, lighting, sound, LED content) is the centrepiece and requires most technical investment.",
                    },
                    {
                      title: "Dealer & Channel Partner Meetings",
                      desc: "Annual gatherings for sales networks. Common in automotive, tech, pharma and FMCG. Two to three days: strategy presentations by day, gala/awards by evening. Need strong main stage, branded backdrop, presentation screens and clear sound for 300–1,500 people.",
                    },
                    {
                      title: "Product Launches",
                      desc: "New product or model reveal events — often held in resort ballrooms or dedicated event spaces. High-impact staging, LED content walls, reveal lighting and rehearsed show flow. The production quality is usually the most demanding of any format.",
                    },
                    {
                      title: "Executive & Board Meetings",
                      desc: "Smaller format (20–100 people) but expectations are high. Conference room AV, clear sound, presentation screens, simultaneous interpretation if multilingual, and professional lighting. Often combined with an incentive programme.",
                    },
                    {
                      title: "Trade Exhibitions & Brand Activations",
                      desc: "Booth-based events in exhibition halls. Technical requirement: LED video walls per booth, background sound, truss structures, demonstration stages and ambient lighting. Sahneva provides both booth AV and shared hall infrastructure.",
                    },
                  ].map((f) => (
                    <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="font-black text-gray-900 text-lg mb-2">{f.title}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </ProseSection>

              {/* Featured image between why-turkey and local-partner */}
              <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-sm my-8">
                <Image
                  src="/img/kurumsal/premium/kurumsal-organizasyon-hero-desktop.webp"
                  alt="Corporate event production in Turkey — full venue stage, LED screen and audience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 72vw"
                  quality={87}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <ProseSection id="local-partner">
                <h2>Why You Need a Local Technical Production Partner in Turkey</h2>
                <p>
                  This is the single most important piece of practical advice in this guide: <strong>do not try to manage Turkish event logistics remotely, without a local production partner</strong>.
                </p>
                <p>
                  The challenge for international companies is not equipment availability — Turkey has strong AV and staging inventory. The challenge is local knowledge: how hotels operate their loading docks, what time equipment can enter and exit the building, which floors have adequate power supply, how city traffic affects equipment delivery windows, and which local suppliers are reliable under pressure.
                </p>
                <Callout>
                  A good local production partner replaces the need for you to learn all of this. They know the venues, the logistics habits, the technical constraints — and they communicate in English so your international team stays in control.
                </Callout>

                <h3>What to look for in a local Turkey event production partner</h3>
                <CheckList items={[
                  "English-speaking project coordination (not just on-site translation — full production communication in English from day one)",
                  "Single point of contact for stage, AV, lighting, truss and tent — not a fragmented chain of sub-contractors",
                  "Verifiable references from international events (PCO, DMC or corporate brand references)",
                  "Willingness to join site inspections and engage with your technical rider",
                  "Clear RFP response process with itemised technical scope and budgets",
                  "Coverage across your chosen city and flexibility for other Turkish cities if needed",
                  "Backup equipment and contingency plans for critical technical systems",
                ]} />

                <InlineCard title="Sahneva as your local production partner">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Sahneva works with international companies, PCOs and DMCs as a local technical production arm in Turkey. We provide stage, LED screen, sound, lighting, truss and tent — all coordinated by an English-speaking project manager. We work in Istanbul, Antalya, Izmir, Ankara, Bodrum and across Turkey.{" "}
                    <Link href="/en/event-production-company-turkey" className="font-bold text-blue-700">
                      Learn more about our international partner model →
                    </Link>
                  </p>
                </InlineCard>
              </ProseSection>

              <ProseSection id="technical-production">
                <h2>Technical Production Requirements for Events in Turkey</h2>

                {/* Visual: conference LED + gala lighting side by side */}
                <div className="grid grid-cols-2 gap-3 my-6 not-prose">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                      src="/img/kurumsal/premium/konferans-led-ekran.webp"
                      alt="LED screen wall at a conference in Turkey"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 36vw"
                      quality={84}
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                      src="/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp"
                      alt="Gala event lighting design at a corporate event in Turkey"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 36vw"
                      quality={84}
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                      src="/img/kurumsal/premium/konferans-podium.webp"
                      alt="Conference speaker podium at a corporate event in Turkey"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 36vw"
                      quality={84}
                    />
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200">
                    <Image
                      src="/img/kurumsal/lansman.webp"
                      alt="Product launch stage with LED content at a corporate event in Turkey"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 36vw"
                      quality={84}
                    />
                  </div>
                </div>

                <p>
                  Turkish venues — particularly resort hotels — have technical infrastructure in place, but this rarely covers everything an international corporate event requires. Here is what you typically need to plan as external production:
                </p>

                <h3>Stage and podium</h3>
                <p>
                  Most hotel ballrooms have a fixed built-in stage, but its dimensions, finish quality and configuration rarely match the requirements of a product launch or branded congress. External stage extensions, custom podiums, branded backdrops and protocol platforms are almost always needed and must come from a production supplier.
                </p>

                <h3>LED screens</h3>
                <p>
                  Hotel built-in projectors or screens almost never meet the quality expectations of international corporate events. LED screens — indoor panels with P2.9 or P3.9 pixel pitch — deliver the image quality international companies expect. LED screens require an image processor, content routing system and a dedicated technical operator throughout the event.
                </p>

                <h3>Sound systems</h3>
                <p>
                  Hotel PA systems are designed for background music, not speech amplification for 500 delegates in a reverberant ballroom. Line-array speaker systems, wireless microphone management (with careful RF channel planning to avoid interference), monitor systems for speakers and a front-of-house mix engineer are typically required for any event over 100 people.
                </p>

                <h3>Simultaneous interpretation</h3>
                <p>
                  If your congress or meeting has more than one working language, SI infrastructure is essential: interpreter booths, transmitter system, receiver units and earpieces for delegates, plus channel management. This is a specialised technical requirement and must be planned early.
                </p>

                <h3>Lighting</h3>
                <p>
                  Stage lighting for speaker visibility, atmosphere lighting for evening events and brand-colour wash systems are typically not provided by the hotel to event standard. Moving head fixtures, LED wash lights and spotlight systems shape the visual quality of both daytime sessions and evening galas.
                </p>

                <h3>Power and backup</h3>
                <p>
                  For outdoor events, beach galas and large-scale productions in venues with limited power infrastructure, generator supply and UPS systems are required. For high-stakes events, backup control systems for critical technical channels are also recommended.
                </p>
              </ProseSection>

              <ProseSection id="timeline">
                <h2>Planning Timeline for a Corporate Event in Turkey</h2>
                <p>
                  International events in Turkey generally require a longer lead time than comparable domestic events, because of coordination across multiple time zones, hotel availability constraints (particularly in Antalya during peak season) and the time needed to develop a detailed technical scope.
                </p>

                <div className="space-y-3 my-6 not-prose">
                  {[
                    ["12+ months before", "Destination and city decision. Venue shortlist. Initial site inspection. Budget allocation."],
                    ["9–12 months before", "Venue contract. Technical partner selection. Initial production brief to local AV partner."],
                    ["6–9 months before", "Detailed technical production plan. Stage and LED screen layouts. SI and recording requirements confirmed. PCO/DMC local partner scope locked."],
                    ["3–6 months before", "Hotel technical coordination. Loading schedule. Power plan. Run-of-show first draft. Speaker programme confirmed."],
                    ["4–8 weeks before", "Site inspection with technical team. Final floor plan. Equipment list confirmed. Crew assignments. Backup plans documented."],
                    ["1–2 weeks before", "Delivery schedule. Hotel coordinator briefed. Technical run-through. Presenter rehearsal slots."],
                    ["Event day", "Morning technical checks. Full sound and screen test. Rehearsal. Event day operation with technical team on site throughout."],
                    ["Post-event", "Strike and load-out. Venue handover. Technical debrief. Recording delivery."],
                  ].map(([time, action]) => (
                    <div key={time} className="flex gap-4 items-start p-4 rounded-xl border border-slate-200 bg-white">
                      <div className="text-sm font-black text-blue-700 shrink-0 w-36">{time}</div>
                      <p className="text-sm text-gray-700 leading-relaxed">{action}</p>
                    </div>
                  ))}
                </div>
              </ProseSection>

              <ProseSection id="budget">
                <h2>Budgeting a Corporate Event in Turkey</h2>
                <p>
                  Turkey offers strong value relative to comparable Western European destinations. However, international event budgets in Turkey are often under-estimated because the total cost picture requires understanding which costs are hotel-inclusive and which require separate production budget.
                </p>

                <h3>What is typically included by the venue</h3>
                <CheckList items={[
                  "Basic built-in PA system (usually insufficient for large events)",
                  "Basic fixed lighting (not event-production standard)",
                  "Basic built-in projectors or screens (usually insufficient quality)",
                  "Tables, chairs and standard banquet setup",
                  "Venue coordinator (not a technical production manager)",
                ]} />

                <h3>What typically requires external production budget</h3>
                <CheckList items={[
                  "LED screens and video wall systems",
                  "Main stage build and branded podiums",
                  "Line-array sound system and RF management",
                  "Stage and atmosphere lighting design and equipment",
                  "Truss and rigging structures",
                  "Simultaneous interpretation systems",
                  "Technical crew (operators, stage managers, engineers)",
                  "Generator and backup power (for outdoor events)",
                  "Recording and live streaming",
                  "Event tents for outdoor areas",
                ]} />

                <Callout>
                  The most reliable way to get an accurate Turkey event production budget is to send a detailed technical brief to your local production partner and request an itemised quote. Request quotes from two or three suppliers to benchmark the market.
                </Callout>
              </ProseSection>

              <ProseSection id="logistics">
                <h2>On-the-Ground Logistics: What to Plan For</h2>
                <p>
                  Beyond technical production, these practical logistics points catch international event teams off-guard most often when working in Turkey for the first time.
                </p>

                <div className="space-y-4 not-prose my-6">
                  {[
                    {
                      t: "Venue loading access and windows",
                      d: "Turkish hotels — particularly resort properties — have strict rules about when and how equipment can be loaded in and out. Many have shared loading docks and scheduled windows. Your local production partner should coordinate this with the hotel technical team in advance. Last-minute loading access requests can derail an entire installation schedule.",
                    },
                    {
                      t: "Power supply confirmation",
                      d: "Always confirm available power capacity with the hotel technical department before finalising the technical plan. A large conference with full LED screen, sound and lighting can draw 80–200A or more. Some hotel ballrooms cannot provide this from the building supply — generator planning is the contingency.",
                    },
                    {
                      t: "Equipment customs and carnet",
                      d: "If you are shipping production equipment from outside Turkey, ATA Carnet documentation is required. Turkish customs processing for temporary import of AV equipment can take 2–4 working days if all documentation is complete. Plan freight arrivals accordingly.",
                    },
                    {
                      t: "City traffic and delivery timing in Istanbul",
                      d: "Istanbul's traffic is notoriously unpredictable. Equipment vehicles need specific delivery time windows — ideally early morning. Your local production partner should know the city patterns and plan accordingly. Venues in Antalya's resort zones are generally more accessible, but road works and seasonal traffic still require buffer time.",
                    },
                    {
                      t: "Hotel AV exclusivity clauses",
                      d: "Some Turkish hotels have exclusive or preferred supplier agreements for in-house AV. Confirm whether your chosen venue permits external production companies — and if so, whether there is an external contractor fee or insurance requirement. Most five-star properties in major MICE destinations allow external suppliers.",
                    },
                  ].map((item) => (
                    <div key={item.t} className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="font-black text-gray-900 mb-2">{item.t}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </ProseSection>

              <ProseSection id="checklist">
                <h2>Pre-Event Checklist for International Companies Planning Events in Turkey</h2>
                <InlineCard title="Strategy & destination">
                  <CheckList items={[
                    "Destination decision confirmed (city, zone, reason for choice)",
                    "Venue shortlist of 3–5 properties sent to hotel and venue teams",
                    "Site inspection completed (or video tour if remote at early stage)",
                    "Venue contract signed with all AV and technical access clauses reviewed",
                  ]} />
                </InlineCard>

                <InlineCard title="Local production partner">
                  <CheckList items={[
                    "Local technical production partner identified and contracted",
                    "Technical brief (event type, room, pax, technical expectations) sent",
                    "Itemised production quote received and approved",
                    "English-speaking project manager assigned by local partner",
                    "Site inspection with local technical team completed or scheduled",
                  ]} />
                </InlineCard>

                <InlineCard title="Technical scope">
                  <CheckList items={[
                    "Stage dimensions, configuration and load plan confirmed",
                    "LED screen sizes and pixel pitch approved",
                    "Sound system type and microphone plan agreed",
                    "Lighting design concept approved",
                    "SI requirement confirmed (languages, booth count, receiver count)",
                    "Recording and live-stream requirements confirmed",
                    "Power supply confirmed with hotel — generator booked if needed",
                  ]} />
                </InlineCard>

                <InlineCard title="Logistics">
                  <CheckList items={[
                    "Equipment delivery window booked with hotel loading dock",
                    "ATA Carnet prepared if shipping equipment from outside Turkey",
                    "Hotel external contractor permission confirmed in writing",
                    "Run-of-show document shared with local production team",
                    "Presenter rehearsal schedule agreed",
                    "Backup plan for critical technical systems documented",
                  ]} />
                </InlineCard>
              </ProseSection>

              {/* CTA within article */}
              <div className="my-10 rounded-3xl bg-[#0B1120] p-8 md:p-10 not-prose">
                <div className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
                  Sahneva · Local production partner in Türkiye
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Planning a Corporate Event in Turkey?
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Sahneva works with international companies, PCOs and DMCs as a local technical production partner in Turkey — covering stage, LED screen, sound, lighting, truss and tent across Istanbul, Antalya, Izmir, Ankara and nationwide. English-speaking project coordination from first brief to post-event handover.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500 transition text-sm"
                  >
                    Send Your Event Brief
                  </a>
                  <Link
                    href="/en/event-production-company-turkey"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10 transition text-sm"
                  >
                    Our International Partner Page
                  </Link>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block sticky top-24 self-start space-y-6">
              {/* Table of contents */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Contents</div>
                <nav>
                  <ul className="space-y-1">
                    {TOC.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-sm text-gray-700 hover:text-blue-700 transition block py-1 leading-snug"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Quick CTA */}
              <div className="rounded-2xl bg-blue-600 p-5 text-white">
                <div className="font-black text-lg mb-2">Planning an event in Turkey?</div>
                <p className="text-blue-100 text-sm leading-relaxed mb-4">
                  Send us your brief — city, event type, date, guest count. We respond within 24 hours.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 font-bold text-blue-700 hover:bg-blue-50 transition text-sm"
                >
                  WhatsApp Brief
                </a>
              </div>

              {/* Related links */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">Related</div>
                <ul className="space-y-2">
                  {[
                    { href: "/en/mice-turkey", label: "MICE Turkey — Production Guide" },
                    { href: "/en/event-production-antalya", label: "Event Production in Antalya" },
                    { href: "/en/event-production-company-turkey", label: "Our International Partner Page" },
                    { href: "/en/corporate-events", label: "Corporate Events" },
                    { href: "/en/blog/corporate-event-planning-guide-2026", label: "Corporate Event Planning Guide 2026" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-blue-700 hover:underline">
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
