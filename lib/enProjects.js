// lib/enProjects.js
// English-language project case studies. Each entry powers /en/projects/[slug].
// Facts here are sourced from existing site content (our-work video library,
// TR project pages and EN blog posts) — do not add figures that are not
// already published elsewhere on the site.

export const EN_PROJECTS = [
  {
    slug: "eaaci-congress-istanbul-led-installation",
    title: "EAACI Congress Istanbul — 360° LED Wall Installation for Leti Pharma",
    shortTitle: "EAACI Congress Istanbul 360° LED Wall",
    // The /en layout applies a "%s | Sahneva" title template — do not repeat it here.
    metaTitle: "EAACI Congress Istanbul 360° LED Wall Installation",
    metaDescription:
      "Sahneva provided a 360-degree LED display solution for Leti Pharma at EAACI Congress Istanbul. Surrounding LED wall architecture for a congress exhibition stand.",
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
    body: [
      "International congresses put an unusual constraint on LED work: the exhibition hall build-up window is short, access is shared with dozens of other stands, and the screen has to look finished from every approach angle rather than from one seated audience direction. A 360-degree wall is the answer to that second constraint — there is no back of the stand.",
      "For Leti Pharma the LED surface was closed into a full loop so that delegates walking the hall met an active brand surface from any direction. Content mapping, panel alignment and the processing chain were prepared so the seam lines stayed invisible across the curve, and the structure was rigged to congress-venue load and access rules.",
    ],
    services: [
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
    metaTitle: "PMGC 2023 World Finals Esports Stage Production Istanbul",
    metaDescription:
      "Sahneva delivered stage, LED screen, rigging and lighting production for the PMGC 2023 World Finals at Ülker Arena Istanbul. Awarded Best Technical Application of the Year.",
    excerpt:
      "Seven days of arena build-up, rigging and global crew coordination for the PUBG Mobile Global Championship World Finals in Istanbul.",
    date: "2023-12-01",
    heroImage: "/img/blog/kurumsal-etkinlik-hero.webp",
    heroAlt:
      "Esports arena stage with large LED screens and show lighting in Istanbul",
    category: "Esports & Sports",
    lead:
      "Sahneva delivered the stage, LED screen, rigging and lighting production for the PMGC 2023 World Finals at Ülker Arena in Istanbul. The build took seven days of arena work and was recognised with the Best Technical Application of the Year award.",
    video: {
      id: "173gBurWSRQ",
      title: "PUBG Turkey Finals 2023 — stage and LED production",
      thumbnailUrl: "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg",
    },
    facts: [
      ["Event", "PMGC 2023 World Finals (PUBG Mobile Global Championship)"],
      ["Venue", "Ülker Arena, Istanbul"],
      ["Build-up", "7 days of arena installation"],
      ["Recognition", "Best Technical Application of the Year"],
    ],
    body: [
      "A global esports final is a broadcast set that an audience happens to sit inside. Every LED edge, truss line and lighting position is framed by cameras for a worldwide stream, so tolerances that would pass without comment at a corporate event become visible errors — the build was measured to the millimetre across twenty-metre spans.",
      "Overhead work was handled by industrial climbers under a rigging plan prepared for arena load points, and the technical crew worked alongside the tournament's international production team through the full seven-day build. Stage, LED, lighting and rehearsal operation ran as one field operation rather than separate subcontracted scopes.",
    ],
    services: [
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
    metaTitle: "Fişekhane PUBG Mobile Guinness World Record Production",
    metaDescription:
      "Sahneva provided stage, podium, LED screen, sound-lighting and live broadcast infrastructure for the Fişekhane PUBG Mobile Guinness World Record™ event in Istanbul.",
    excerpt:
      "Stage, podium, LED screen, sound-lighting and live broadcast infrastructure for a record-breaking gaming event at Fişekhane, Istanbul.",
    date: "2026-01-25",
    heroImage: "/img/blog/fisekhane-pubg-etkinlik.webp",
    heroAlt:
      "Fişekhane PUBG Mobile event stage with LED screen and audience in Istanbul",
    category: "Esports & Sports",
    lead:
      "Sahneva provided the stage, podium, LED screen, sound-lighting and live broadcast infrastructure for the PUBG Mobile Guinness World Record™ event at Fişekhane, Istanbul. The technical setup carried both the live audience experience and the broadcast feed from the record attempt.",
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
      ["Scope", "Stage, podium, LED screen, sound & lighting"],
      ["Also delivered", "Live broadcast and filming infrastructure"],
    ],
    body: [
      "A record attempt is one of the few event formats where the technical setup is part of the evidence. The audience formation has to be visible and countable on camera, the timing cues have to reach every participant at once, and the broadcast chain has to hold without a gap through the moment that gets adjudicated.",
      "Stage and podium carried the presentation and adjudication area, the LED screen drove the cue content the crowd followed, and the sound system covered the venue evenly so the choreography stayed synchronised. Broadcast and filming infrastructure was planned alongside the show systems rather than added on top of them.",
    ],
    services: [
      ["Stage Rental", "/en/stage-rental"],
      ["Podium Rental", "/en/podium-rental"],
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
    slug: "indoor-led-stage-installation-protocol-event",
    title: "Indoor LED & Stage Installation for a Protocol-Level Event",
    shortTitle: "Protocol-Level Indoor LED Stage",
    metaTitle: "Indoor LED and Stage Installation for a Protocol Event",
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
      ["Stage / podium", "24 × 8 m"],
      ["LED screen", "24 × 6 m, P2 pixel pitch"],
      ["Structure", "Truss plus scaffold skeleton"],
      ["Crew and schedule", "60 people, 2 working days"],
    ],
    body: [
      "Building a protocol-standard stage inside a temporary structure removes the anchor points a permanent venue would give you. The 40 m tent was erected outdoors first, the ground was prepared and carpeted, and only then could the podium and the LED carrier scaffold go up — which is why the sequence, not the equipment, set the two-day schedule.",
      "P2 pixel pitch was chosen because the front rows sit close to a 24×6 m surface, where a coarser panel would break up at viewing distance. Truss carried the sound and lighting positions above the stage, the signal chain was built with redundancy, and stage sightlines, acoustics and lighting balance were tested against protocol requirements before seating went in.",
    ],
    services: [
      ["Stage Rental", "/en/stage-rental"],
      ["Podium Rental", "/en/podium-rental"],
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
