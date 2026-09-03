// lib/enProjects.js
// English-language project case studies. Each entry powers /en/projects/[slug].
// Facts here are sourced from existing site content (our-work video library,
// TR project pages and EN blog posts) — do not add figures that are not
// already published elsewhere on the site.
//
// `specs` alanı ortak vaka kartı şablonudur (components/en/CaseSpecStrip.jsx):
// city / guests / led / soundLight / stageTruss / liveStream. Bir slotun
// yayımlanmış karşılığı yoksa o anahtar hiç yazılmaz; şerit boş slotu atlar.
// "Yaklaşık", "arena ölçeğinde" gibi doldurma değerlerle slot doldurulmaz.

export const EN_PROJECTS = [
  {
    slug: "eaaci-congress-istanbul-led-installation",
    title: "EAACI Congress Istanbul — 360° LED Wall Installation for Leti Pharma",
    shortTitle: "EAACI Congress Istanbul 360° LED Wall",
    // The /en layout applies a "%s | Sahneva" title template — do not repeat it here.
    metaTitle: "EAACI Congress Istanbul 360° LED Wall Installation",
    metaDescription:
      "Sahneva installed a 360-degree LED wall for Leti Pharma at EAACI Congress Istanbul, creating a surrounding display for the exhibition stand.",
    excerpt:
      "A fully surrounding LED screen architecture built for Leti Pharma's exhibition space at EAACI Congress Istanbul.",
    date: "2026-06-23",
    heroImage: "/img/led/gala-led-sahne-video-wall-sahneva.webp",
    heroAlt:
      "360 degree LED wall installation for a corporate congress exhibition stand",
    category: "Congress & Exhibition",
    // Entity-defining lead sentence: written so an LLM can extract the
    // organization, the client, the service and the venue from one sentence.
    lead:
      "Sahneva provided a 360-degree LED display solution for Leti Pharma at EAACI Congress Istanbul. The surrounding LED wall architecture turned a standard congress exhibition space into an immersive brand environment for international congress delegates.",
    video: {
      id: "qiqiBN4Uhu4",
      title: "EAACI Congress Istanbul — Leti Pharma 360° LED Wall Installation",
      thumbnailUrl: "https://i.ytimg.com/vi/qiqiBN4Uhu4/hq2.jpg",
    },
    facts: [
      ["Client", "Leti Pharma"],
      ["Event", "EAACI Congress Istanbul"],
      ["Scope", "360° LED wall, exhibition stand integration"],
      ["Environment", "Indoor congress exhibition hall"],
    ],
    specs: {
      city: "Istanbul",
      led: "360° surrounding LED wall, seam-aligned across the curve",
      stageTruss: "Exhibition stand structure rigged to congress-venue load and access rules",
    },
    body: [
      "International congresses put an unusual constraint on LED work: the exhibition hall build-up window is short, access is shared with dozens of other stands, and the screen has to look finished from every approach angle rather than from one seated audience direction. A 360-degree wall is the answer to that second constraint — there is no back of the stand.",
      "For Leti Pharma the LED surface was closed into a full loop so that delegates walking the hall met an active brand surface from any direction. Content mapping, panel alignment and the processing chain were prepared so the seam lines stayed invisible across the curve, and the structure was rigged to congress-venue load and access rules.",
    ],
    services: [
      ["Conference AV Rental Istanbul", "/en/conference-av-rental-istanbul"],
      ["LED Screen Rental", "/en/led-screen-rental"],
      ["Corporate Events", "/en/corporate-events"],
      ["Stage Rental", "/en/stage-rental"],
      ["Sound & Lighting Rental", "/en/sound-light-rental"],
    ],
    keywords: [
      "EAACI Congress Istanbul",
      "360 degree LED wall",
      "congress LED screen rental",
      "exhibition stand LED",
      "event production company Turkey",
    ],
  },

  {
    slug: "pmgc-2023-world-finals-esports-production-istanbul",
    title: "PMGC 2023 World Finals — Esports Stage Production at Ülker Arena",
    shortTitle: "PMGC 2023 World Finals",
    metaTitle: "PMGC 2023 World Finals | Esports Stage Production",
    metaDescription:
      "Sahneva delivered stage, LED, rigging and lighting for the PMGC 2023 World Finals at Ülker Arena Istanbul during a seven-day arena build.",
    excerpt:
      "Seven days of arena build-up, rigging and global crew coordination for the PUBG Mobile Global Championship World Finals in Istanbul.",
    date: "2023-12-01",
    heroImage: "/img/blog/kurumsal-etkinlik-hero.webp",
    heroAlt:
      "Esports arena stage with large LED screens and show lighting in Istanbul",
    category: "Esports & Sports",
    lead:
      "Sahneva delivered the stage, LED screen, rigging and lighting production for the PMGC 2023 World Finals at Ülker Arena in Istanbul. The build took seven days of arena work; the official 2024 ACE of M.I.C.E. winners list records DİMİ as the recipient for the PMGC 2023 project.",
    video: {
      id: "173gBurWSRQ",
      title: "PUBG Turkey Finals 2023 — stage and LED production",
      thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    },
    facts: [
      ["Event", "PMGC 2023 World Finals (PUBG Mobile Global Championship)"],
      ["Venue", "Ülker Arena, Istanbul"],
      ["Build-up", "7 days of arena installation"],
      ["Recognition", "2024 ACE of M.I.C.E. listing: DİMİ / PUBG Mobile World Championship 2023"],
    ],
    specs: {
      city: "Istanbul — Ülker Arena",
      led: "Arena LED screens aligned to the millimetre across twenty-metre spans",
      soundLight: "Show lighting positions set to arena rigging load points",
      stageTruss: "Arena stage and truss rig, seven-day build by industrial climbers",
      liveStream: "Broadcast-framed set built for the worldwide tournament stream",
    },
    body: [
      "A global esports final is a broadcast set that an audience happens to sit inside. Every LED edge, truss line and lighting position is framed by cameras for a worldwide stream, so tolerances that would pass without comment at a corporate event become visible errors — the build was measured to the millimetre across twenty-metre spans.",
      "Overhead work was handled by industrial climbers under a rigging plan prepared for arena load points, and the technical crew worked alongside the tournament's international production team through the full seven-day build. Stage, LED, lighting and rehearsal operation ran as one field operation rather than separate subcontracted scopes.",
    ],
    services: [
      ["Event Production Istanbul", "/en/event-production-istanbul"],
      ["Stage Rental", "/en/stage-rental"],
      ["LED Screen Rental", "/en/led-screen-rental"],
      ["Truss Rental", "/en/truss-rental"],
      ["Sound & Lighting Rental", "/en/sound-light-rental"],
    ],
    relatedReading: {
      href: "/en/blog/pmgc-world-finals-behind-the-scenes",
      label: "Behind the Scenes of PMGC 2023 World Finals",
    },
    keywords: [
      "esports event production Istanbul",
      "PMGC 2023 World Finals",
      "arena stage production Turkey",
      "esports LED screen rental",
      "event production company Turkey",
    ],
  },

  {
    slug: "fisekhane-pubg-mobile-guinness-world-record",
    title: "Fişekhane PUBG Mobile Guinness World Record™ — Technical Production",
    shortTitle: "Fişekhane PUBG Mobile World Record",
    metaTitle: "Fişekhane PUBG Mobile Guinness World Record",
    metaDescription:
      "Sahneva provided the stage platform, LED screen, sound and lighting, plus live broadcast support for the PUBG Mobile record event at Fişekhane, Istanbul.",
    excerpt:
      "Stage platform, LED screen, sound and lighting, and live broadcast infrastructure for a record-breaking gaming event at Fişekhane, Istanbul.",
    date: "2026-01-25",
    heroImage: "/img/blog/fisekhane-pubg-etkinlik.webp",
    heroAlt:
      "Fişekhane PUBG Mobile event stage with LED screen and audience in Istanbul",
    category: "Esports & Sports",
    lead:
      "Sahneva provided the stage platform, LED screen, sound and lighting, and live broadcast infrastructure for the PUBG Mobile Guinness World Record™ event at Fişekhane, Istanbul. The technical setup carried both the live audience experience and the broadcast feed from the record attempt.",
    gallery: [
      [
        "/img/blog/fisekhane-pubg-sahne-kurulumu.webp",
        "Stage and LED screen installation at the Fişekhane PUBG Mobile event",
      ],
      [
        "/img/blog/fisekhane-pubg-koreografili.webp",
        "Choreographed audience formation during the PUBG Mobile record attempt",
      ],
      [
        "/img/blog/fisekhane-pubg-guinness-rekoru.webp",
        "Guinness World Record moment at the Fişekhane PUBG Mobile event",
      ],
      [
        "/img/blog/fisekhane-pubg-rekor-ani.webp",
        "Confetti and celebration at the moment the record was confirmed",
      ],
    ],
    facts: [
      ["Event", "PUBG Mobile Guinness World Record™ attempt"],
      ["Venue", "Fişekhane, Istanbul"],
      ["Scope", "Stage platform, LED screen, sound & lighting"],
      ["Also delivered", "Live broadcast and filming infrastructure"],
    ],
    specs: {
      city: "Istanbul — Fişekhane",
      led: "Stage and field LED screens carrying the crowd cue content",
      soundLight: "Sound system covering the venue evenly to keep the choreography synchronised",
      stageTruss: "Stage platform for the presentation and adjudication area",
      liveStream: "Live broadcast and filming infrastructure planned alongside the show systems",
    },
    body: [
      "A record attempt is one of the few event formats where the technical setup is part of the evidence. The audience formation has to be visible and countable on camera, the timing cues have to reach every participant at once, and the broadcast chain has to hold without a gap through the moment that gets adjudicated.",
      "The stage platform carried the presentation and adjudication area, the LED screen drove the cue content the crowd followed, and the sound system covered the venue evenly so the choreography stayed synchronised. Broadcast and filming infrastructure was planned alongside the show systems rather than added on top of them.",
    ],
    services: [
      ["Stage Rental", "/en/stage-rental"],
      ["Stage Platform Rental", "/en/podium-rental"],
      ["LED Screen Rental", "/en/led-screen-rental"],
      ["Sound & Lighting Rental", "/en/sound-light-rental"],
    ],
    relatedReading: {
      href: "/en/blog/fisekhane-pubg-guinness-world-record",
      label: "Fişekhane PUBG Mobile Guinness World Record™",
    },
    keywords: [
      "gaming event production Istanbul",
      "PUBG Mobile Guinness World Record",
      "live broadcast event production Turkey",
      "stage and LED screen rental Istanbul",
    ],
  },

  {
    // TR tarafında yalnızca /yaptiklarimiz video kütüphanesinde vardı; EN'de
    // vaka sayfası yoktu. Etkinliğe dair yayımlanmış tek kapsam bilgisi
    // "sahne, LED ekran, sergi alanı, teknik prodüksiyon" — misafir sayısı,
    // m² ve şehir bilgisi hiçbir yerde yayımlanmadığı için yazılmadı.
    slug: "beyond-the-horizon-gala-space-mission-exhibition",
    title: "Beyond the Horizon Gala — Stage, LED and Exhibition Production",
    shortTitle: "Beyond the Horizon Gala",
    metaTitle: "Beyond the Horizon Gala — Stage & LED Production",
    metaDescription:
      "Stage, LED screen, exhibition area and technical production for the Beyond the Horizon Gala and Türkiye's first manned space mission exhibition.",
    excerpt:
      "A gala stage and a walk-through exhibition built as one technical scope for Türkiye's first manned space mission programme.",
    date: "2026-06-09",
    heroImage: "/img/kurumsal/premium/kurumsal-organizasyon-gala-isik-kanit.webp",
    heroAlt: "Gala stage with LED screen and show lighting at a corporate evening event",
    category: "Gala & Exhibition",
    lead:
      "Sahneva provided the stage, LED screen, exhibition area and technical production for the Beyond the Horizon Gala and the exhibition marking Türkiye's first manned space mission. The gala programme and the walk-through exhibition were built and operated as a single technical scope.",
    video: {
      id: "xatodgyZ_S8",
      title: "Beyond the Horizon Gala & Türkiye's First Manned Space Mission Exhibition",
      thumbnailUrl: "https://i.ytimg.com/vi/xatodgyZ_S8/hqdefault.jpg",
    },
    facts: [
      ["Event", "Beyond the Horizon Gala and manned space mission exhibition"],
      ["Scope", "Gala stage, LED screen, exhibition area"],
      ["Format", "Seated gala programme plus walk-through exhibition"],
      ["Delivery", "Technical production under one field team"],
    ],
    specs: {
      led: "LED screens for the gala stage and the exhibition area",
      stageTruss: "Gala stage build plus exhibition area structures",
    },
    body: [
      "A gala paired with an exhibition is two productions sharing one venue and one schedule. The seated programme wants a single focal point, controlled light levels and a clean sound field; the exhibition wants even circulation, readable surfaces at arm's length and content that holds up when a visitor stops in front of it for thirty seconds. Building them as separate scopes is how the two ends up fighting each other over power, cabling routes and load-in windows.",
      "Here they were planned as one scope. The gala stage and its LED surface were set for the seated programme, while the exhibition area carried its own screens and structures sized for close viewing rather than stage distance. One technical team held the power distribution, cable routing and installation sequence for both, so the exhibition could be finished and tested without cutting into the stage rehearsal window.",
      "The same approach applies to any programme that combines a formal ceremony with an experience area — dealer meetings with a product walk-through, congresses with a sponsor hall, launches with a demo zone. The decision that matters is made before load-in: one team owning both halves, or two suppliers negotiating the same floor.",
    ],
    services: [
      ["Stage Rental", "/en/stage-rental"],
      ["LED Screen Rental", "/en/led-screen-rental"],
      ["Corporate Events", "/en/corporate-events"],
      ["Sound & Lighting Rental", "/en/sound-light-rental"],
    ],
    keywords: [
      "gala event production Turkey",
      "exhibition stage production",
      "LED screen rental gala",
      "event production company Turkey",
    ],
  },

  {
    slug: "millet-bahcesi-hangar-event-production",
    title:
      "Millet Bahçesi Hangar — Indoor Protocol Event Production in Istanbul",
    shortTitle: "Millet Bahçesi Hangar Event Production",
    metaTitle: "Millet Bahçesi Hangar Event Production",
    metaDescription:
      "Case study: a 16×8 m scaffold stage, 16×6 m P1.9 LED wall, four side screens and JBL VTX A12 audio at Millet Bahçesi Hangar, Istanbul.",
    excerpt:
      "A documented indoor protocol-event setup at Millet Bahçesi Hangar, combining a P1.9 LED system, scaffold stage, JBL VTX A12 audio and hall operations.",
    date: "2026-05-19",
    heroImage:
      "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kapali-alan-protokol-salon-led-ekran-genis-aci.webp",
    heroAlt:
      "Wide view of the one-event stage, P1.9 LED screens and hall layout at Millet Bahçesi Hangar in Istanbul",
    category: "Corporate & Protocol",
    trEquivalent:
      "/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi",
    lead:
      "This case study documents Sahneva's one-event technical configuration for the 180 Million TRY Cash Support Programme for Istanbul Amateur Football Clubs at Millet Bahçesi Hangar. The stage, P1.9 LED screens, audio, lighting, truss, technical control and hall layout were coordinated as one indoor protocol-event build.",
    gallery: [
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/istanbul-amator-futbol-kulupleri-led-ekran-sahne-kurulumu.webp",
        "Completed P1.9 LED screen, scaffold stage and presentation area for the sports-sector protocol programme at Millet Bahçesi Hangar",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/amator-futbol-kulupleri-destek-programi-ana-sahne.webp",
        "Main stage with its 16 by 6 metre P1.9 LED wall and presentation lectern in the documented event setup",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kapali-alan-protokol-etkinligi-led-ekran-kurulumu.webp",
        "Central LED wall and side screens aligned with the indoor protocol-event stage",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/protokol-etkinligi-salon-yemek-duzeni.webp",
        "Hall and hospitality layout facing the main and side LED screens at Millet Bahçesi Hangar",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kurumsal-etkinlik-led-ekran-yan-ekran-kurgusu.webp",
        "Side LED screen carrying the live stage image across the large indoor hall",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/ses-isik-reji-teknik-masa-kurulumu.webp",
        "Sound, lighting and LED control desks positioned for the event-day technical operation",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/teknik-reji-canli-kamera-aktarim-kurulumu.webp",
        "Technical control area coordinating the live camera relay and LED screen content",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/sahne-podyum-basamak-platform-kurulumu.webp",
        "Stage steps, deck surface and platform details in front of the P1.9 LED wall",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/truss-isik-sistemi-sahne-arka-kurulum-detayi.webp",
        "Rear scaffold and truss structure providing installation and technical access behind the stage",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kapali-alan-turk-bayragi-led-ekran-salon-kurgusu.webp",
        "Programme graphics displayed across the central and side LED screens during the event",
      ],
      [
        "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/amator-futbol-kulupleri-destek-programi-karsilama-alani.webp",
        "Branded welcome and operations area for the Istanbul Amateur Football Clubs programme",
      ],
    ],
    facts: [
      ["Event", "180 Million TRY Cash Support Programme for Istanbul Amateur Football Clubs"],
      ["Venue", "Millet Bahçesi Hangar, Istanbul"],
      ["Stage and main LED", "16 × 8 m scaffold stage; 16 × 6 m P1.9 LED"],
      ["Hall plan", "2,500-chair layout; hospitality operation for 3,000 people"],
    ],
    specs: {
      city: "Istanbul — Millet Bahçesi Hangar",
      led: "16 × 6 m P1.9 main wall plus four 4 × 2.5 m side screens",
      soundLight:
        "24 JBL VTX A12 line-array elements, event lighting and technical control",
      stageTruss:
        "16 × 8 m scaffold-supported main stage with truss infrastructure",
    },
    body: [
      "The figures on this page belong to this completed event configuration. They do not state the venue's permanent seating capacity or define a fixed venue package. For this programme, the hall was arranged with 2,500 chairs, while the catering and hospitality operation was planned for 3,000 people.",
      "The visual system combined a 16 × 6 m P1.9 main LED wall with four 4 × 2.5 m side screens. The main screen provided a high-resolution surface for the presentation area, while the side screens carried programme content and the live camera image farther across the hall.",
      "The 16 × 8 m main stage was built on a scaffold system, with its steps, deck surface, truss positions and rear technical access planned around the LED structure. This kept the stage, screen and audience sightlines within one installation plan rather than treating them as separate equipment orders.",
      "A 24-element JBL VTX A12 line-array system supported speech coverage in the hall. The technical control area coordinated LED content, sound, lighting and the live camera relay as one event-day operation.",
    ],
    services: [
      ["Hangar Event Venue Istanbul", "/en/hangar-event-venue-istanbul"],
      ["Event Production Istanbul", "/en/event-production-istanbul"],
      ["LED Screen Rental", "/en/led-screen-rental"],
      ["Stage Rental", "/en/stage-rental"],
      ["Sound & Lighting Rental", "/en/sound-light-rental"],
      ["Truss Rental", "/en/truss-rental"],
      ["Stage Platform Rental", "/en/podium-rental"],
    ],
    keywords: [
      "Millet Bahçesi Hangar event production",
      "indoor protocol event Istanbul",
      "P1.9 LED screen installation",
      "scaffold stage installation Istanbul",
      "sports event production Istanbul",
      "large indoor event AV",
    ],
  },

  {
    slug: "indoor-led-stage-installation-protocol-event",
    title: "Indoor LED & Stage Installation for a Protocol-Level Event",
    shortTitle: "Protocol-Level Indoor LED Stage",
    metaTitle: "Indoor LED & Stage Build for a Protocol Event",
    metaDescription:
      "A 24×8 m stage and 24×6 m P2 LED screen built inside a 40 m tent with scaffold and truss support — completed in two days by a 60-person crew.",
    excerpt:
      "A 24×8 m stage and 24×6 m P2 LED screen built inside a 40 m tent, completed in two working days by a 60-person crew.",
    date: "2024-10-23",
    heroImage: "/img/projeler/kapali-alan-led/1.webp",
    heroAlt:
      "Protocol-level indoor LED stage installation with 24x6 m P2 LED screen and truss structure",
    category: "Corporate & Protocol",
    trEquivalent: "/projeler/kapali-alan-led-sahne-kurulumu",
    lead:
      "Sahneva built a 24×8 m stage and a 24×6 m P2 LED screen inside a 40 m tent for a protocol-level event, supported by a scaffold and truss structure. A 60-person crew completed the installation in two working days.",
    gallery: [
      [
        "/img/projeler/kapali-alan-led/4.webp",
        "P2 LED screen and stage area with green wall decor at a protocol-level event",
      ],
      [
        "/img/projeler/kapali-alan-led/5.webp",
        "General view of the completed LED screen installation on the 24x8 m stage",
      ],
      [
        "/img/projeler/kapali-alan-led/6.webp",
        "Wide indoor event stage supported by a scaffold and truss skeleton system",
      ],
      [
        "/img/projeler/kapali-alan-led/8.webp",
        "Front view of the stage and seating layout prepared for protocol seating order",
      ],
    ],
    facts: [
      ["Stage platform", "24 × 8 m"],
      ["LED screen", "24 × 6 m, P2 pixel pitch"],
      ["Structure", "Truss plus scaffold skeleton"],
      ["Crew and schedule", "60 people, 2 working days"],
    ],
    specs: {
      led: "24 × 6 m, P2 pixel pitch",
      soundLight: "Sound and lighting positions carried on truss above the stage",
      stageTruss: "24 × 8 m stage on a truss plus scaffold skeleton, inside a 40 m tent",
    },
    body: [
      "Building a protocol-standard stage inside a temporary structure removes the anchor points a permanent venue would give you. The 40 m tent was erected outdoors first, the ground was prepared and carpeted, and only then could the stage platform and the LED carrier scaffold go up — which is why the sequence, not the equipment, set the two-day schedule.",
      "P2 pixel pitch was chosen because the front rows sit close to a 24×6 m surface, where a coarser panel would break up at viewing distance. Truss carried the sound and lighting positions above the stage, the signal chain was built with redundancy, and stage sightlines, acoustics and lighting balance were tested against protocol requirements before seating went in.",
    ],
    services: [
      ["Event Production Istanbul", "/en/event-production-istanbul"],
      ["Stage Rental", "/en/stage-rental"],
      ["Stage Platform Rental", "/en/podium-rental"],
      ["LED Screen Rental", "/en/led-screen-rental"],
      ["Tent Rental", "/en/tent-rental"],
      ["Truss Rental", "/en/truss-rental"],
    ],
    keywords: [
      "indoor LED stage installation",
      "P2 LED screen rental",
      "protocol event stage production Turkey",
      "tent stage installation",
    ],
  },
];

export function getEnProjects() {
  return [...EN_PROJECTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getEnProject(slug) {
  return EN_PROJECTS.find((project) => project.slug === slug) ?? null;
}

export function getEnProjectSlugs() {
  return EN_PROJECTS.map((project) => project.slug);
}
