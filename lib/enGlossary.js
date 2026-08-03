/**
 * English event production glossary.
 *
 * Single source for /en/glossary, its DefinedTermSet schema and the glossary
 * link blocks on English service pages. This is the English counterpart of
 * lib/glossary.js, not a translation layer on top of it: slugs, related pages
 * and wording are all English-native so the page can rank on English queries
 * ("what is pixel pitch", "clear span tent meaning") on its own.
 *
 * Field contract (same as the Turkish set):
 *   slug        -> in-page anchor (#slug) and DefinedTerm @id.
 *                  [a-z0-9-] only.
 *   term        -> displayed term
 *   aliases     -> alternative names for the same thing (alternateName)
 *   category    -> grouping key, must exist in EN_GLOSSARY_CATEGORIES
 *   definition  -> one-sentence summary (snippet / AI answer)
 *   detail      -> what it means in practice, on site
 *   related     -> related English service or guide page
 */

export const EN_GLOSSARY_CATEGORIES = [
  {
    key: "stage",
    title: "Stage & Platform",
    description:
      "Terms that describe the load-bearing structure and dimensioning of stage, podium and platform systems.",
  },
  {
    key: "video",
    title: "LED & Video",
    description:
      "Terms that come up in quotes and site surveys on the LED screen, video wall and content playback side.",
  },
  {
    key: "audio",
    title: "Sound Systems",
    description:
      "Audio terms that drive intelligibility, coverage and mixing decisions.",
  },
  {
    key: "lighting",
    title: "Lighting & Control",
    description:
      "Terms related to stage lighting, camera compatibility and lighting control.",
  },
  {
    key: "rigging",
    title: "Truss & Rigging",
    description:
      "Safety-critical terms around load-bearing structures, suspension and load calculation.",
  },
  {
    key: "tent",
    title: "Tents & Site",
    description:
      "Terms covering event tent types, anchoring and site planning.",
  },
  {
    key: "power",
    title: "Power & Electrical",
    description:
      "Terms that define power demand, distribution and electrical safety on an event site.",
  },
  {
    key: "events",
    title: "Event Formats & Corporate Production",
    description:
      "What formats such as product launches, dealer meetings, galas, congresses and exhibitions mean in terms of technical scope.",
  },
  {
    key: "operations",
    title: "Operations & Planning",
    description:
      "Project management terms describing site operations from survey to load-out.",
  },
];

export const EN_GLOSSARY_TERMS = [
  /* ---------------- Stage & Platform ---------------- */
  {
    slug: "modular-stage-deck",
    term: "Modular Stage Deck",
    aliases: ["Stage deck", "Modular stage panel", "Staging platform"],
    category: "stage",
    definition:
      "A portable stage system built from standard-sized panels that can be assembled to any footprint, with adjustable leg heights.",
    detail:
      "The common panel sizes are 2×1 m and 1×1 m. Leg heights are usually stepped between 20 and 100 cm, so the same deck set serves both a low runway and a high concert stage. When quoting, the conversation is about net square metres and height, not panel count.",
    related: { href: "/en/podium-rental", label: "Podium Rental" },
  },
  {
    slug: "stage-load-capacity",
    term: "Stage Load Capacity",
    aliases: ["Distributed load", "Point load", "kg/m²"],
    category: "stage",
    definition:
      "The weight a stage surface can safely carry per square metre, normally expressed in kg/m².",
    detail:
      "Two separate figures matter: distributed load (the weight spread by a crowd or by tables) and point load (a single concentrated weight such as a piano leg or a forklift wheel). If heavy scenery, a vehicle or a dense crowd will be on the stage, this value has to be raised during the site survey.",
    related: { href: "/en/stage-rental", label: "Stage Rental" },
  },
  {
    slug: "riser",
    term: "Riser",
    aliases: ["Drum riser", "Rolling riser"],
    category: "stage",
    definition:
      "A small platform used to lift a specific instrument, choir or speaker above the main stage level.",
    detail:
      "The drum riser is the most familiar example; choir tiers, orchestra levels and protocol rows are also solved with risers. Wheeled versions (rolling risers) are prepared backstage and pushed on during the show, which shortens changeover time significantly.",
    related: { href: "/en/concert-podium-rental", label: "Concert Podium Rental" },
  },
  {
    slug: "stage-skirting",
    term: "Stage Skirting",
    aliases: ["Skirt", "Stage skirt", "Valance"],
    category: "stage",
    definition:
      "Fabric that covers the side faces of a stage or podium, hiding the leg structure and the cabling underneath.",
    detail:
      "Beyond the visual finish it has a practical function: spare equipment, cable drums and technical cases stored under the stage stay out of sight. For events being filmed, matte black skirting is preferred because it reduces light reflection.",
    related: { href: "/en/podium-rental", label: "Podium Rental" },
  },
  {
    slug: "backstage",
    term: "Backstage",
    aliases: ["Back of house", "Green room area"],
    category: "stage",
    definition:
      "The enclosed area behind the stage reserved for preparation, waiting, technical equipment and crew.",
    detail:
      "It is the item most often skipped in a site plan. Artist waiting, costume changes, crew, spare equipment and the power distro need a depth of at least half the stage width. On tent projects this area goes straight into the square-metre calculation.",
    related: { href: "/en/how-we-work", label: "How We Work" },
  },
  {
    slug: "sightline",
    term: "Sightline",
    aliases: ["Line of sight", "Viewing angle"],
    category: "stage",
    definition:
      "The unobstructed line from where a guest sits or stands to the stage; the main criterion that sets stage height.",
    detail:
      "For standing audiences the stage usually rises to 80–120 cm so the back rows can see over the heads in front; for seated layouts 40–60 cm can be enough. Columns, pillars and chandeliers also cut sightlines, so this is assessed on the seating plan rather than on venue photos.",
    related: {
      href: "/en/blog/why-stages-are-always-elevated",
      label: "Why Stages Are Always Elevated",
    },
  },
  {
    slug: "access-ramp",
    term: "Access Ramp & Accessibility",
    aliases: ["Wheelchair access", "ADA ramp"],
    category: "stage",
    definition:
      "A sloped platform used instead of stairs so wheelchairs and equipment carts can reach the stage.",
    detail:
      "A safe gradient is around 1:12, meaning roughly 7 m of ramp to reach 60 cm of height. That footprint is missing from most floor plans. For public events and events with official guests, a ramp is planned as a requirement, not an option.",
    related: { href: "/en/podium-rental", label: "Podium Rental" },
  },
  {
    slug: "guardrails-and-stairs",
    term: "Guardrails & Stage Stairs",
    aliases: ["Guardrail", "Handrail", "Stage stairs"],
    category: "stage",
    definition:
      "The barrier that prevents falls from open stage edges and the step system that provides access to the stage.",
    detail:
      "Above 60 cm, guardrails on the rear and side edges are standard practice. Step heights must be equal, and strip lighting or luminous tape is applied so the stairs remain visible in the dark; a large share of stage accidents happen on the way down.",
    related: { href: "/en/stage-rental", label: "Stage Rental" },
  },
  {
    slug: "stage-plot",
    term: "Stage Plot",
    aliases: ["Stage layout", "Input list drawing"],
    category: "stage",
    definition:
      "A scaled drawing marking every piece of equipment, person and connection point on stage.",
    detail:
      "Microphones, monitors, instruments, the lectern, risers and cable entry points all appear on it. In live music the stage plot supplied by the band sets the build order; at a corporate event it settles lectern position, LED screen distance and the layout of the protocol seating.",
    related: {
      href: "/en/blog/event-technical-scouting-and-planning-guide",
      label: "Event Technical Site Survey Guide",
    },
  },
  {
    slug: "catwalk",
    term: "Catwalk (Runway Extension)",
    aliases: ["Runway", "T-stage", "Thrust"],
    category: "stage",
    definition:
      "A narrow platform extending from the main stage into the audience area, used for close contact in fashion shows and presentations.",
    detail:
      "For fashion shows the width is typically 1.5–2 m and the length 8–20 m depending on room depth. The walking surface must not creak or flex, so long catwalks carry more intermediate legs than a standard stage.",
    related: { href: "/en/runway-podium-rental", label: "Runway Podium Rental" },
  },

  /* ---------------- LED & Video ---------------- */
  {
    slug: "pixel-pitch",
    term: "Pixel Pitch",
    aliases: ["Pitch", "P value", "Pixel spacing"],
    category: "video",
    definition:
      "The distance in millimetres between the centres of two pixels on an LED panel; the number in a designation like P2.9 is this value.",
    detail:
      "The smaller the value, the higher the resolution and the cost. As a rule of thumb the minimum comfortable viewing distance in metres is close to the pixel pitch figure: a P3.9 screen reads cleanly from about 4 m. That is why P1.9–P2.5 is used for close indoor viewing and P3.9–P6 behind an outdoor stage.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "nit-brightness",
    term: "Nit (Brightness)",
    aliases: ["cd/m²", "Brightness", "Luminance"],
    category: "video",
    definition:
      "The unit measuring how much light an LED screen emits; the key value for daylight visibility.",
    detail:
      "Indoors 800–1500 nits is enough, while installations in direct sunlight need 4500 nits and above. The wrong brightness makes even the most expensive content invisible during the day, so the site survey asks where the sun sits relative to the screen through the day.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "video-wall",
    term: "Video Wall",
    aliases: ["LED wall", "LED video wall"],
    category: "video",
    definition:
      "A single large image surface created by joining multiple LED panels edge to edge.",
    detail:
      "Panels arrive in frames called cabinets; the most common cabinet sizes are 500×500 mm and 500×1000 mm. Total screen size is planned in multiples of those cabinets, which is why an in-between figure such as \"6×3.5 m screen\" is usually rounded to the cabinet grid.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "media-server",
    term: "Media Server",
    aliases: ["Playback server", "Watchout", "Playback system"],
    category: "video",
    definition:
      "A dedicated video server that distributes synchronised content to multiple screens and manages layers and transitions.",
    detail:
      "It is not needed to play a single video on a single screen. It becomes essential when side screens work together with the main screen, when presentation and live camera feeds are mixed, or when mapping is involved. That is why it appears as a separate line in a quote.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "video-mapping",
    term: "Video Mapping",
    aliases: ["Projection mapping", "360° mapping"],
    category: "video",
    definition:
      "The technique of shaping an image to the geometry of a surface and projecting it so it fits that surface exactly.",
    detail:
      "It is used on non-flat surfaces such as building façades, the inner shell of a dome tent or stage scenery. Surface measurement, throw distance and ambient darkness decide the result directly, so mapping projects are surveyed earlier than other jobs.",
    related: {
      href: "/en/blog/dome-tent-revolution-pneumatic-360-mapping",
      label: "Dome Tents & 360° Mapping",
    },
  },
  {
    slug: "moire",
    term: "Moiré Pattern",
    aliases: ["Moire", "Interference pattern"],
    category: "video",
    definition:
      "The wavy interference pattern that appears on camera when the pixel grid of an LED screen overlaps the grid of the camera sensor.",
    detail:
      "It is a spatial problem and has nothing to do with refresh rate. It is solved by changing the camera's distance, angle, focus point or zoom, or by defocusing the screen slightly. Finer pixel pitches show it less. On events with cameras it is checked from every camera angle during rehearsal.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "refresh-rate",
    term: "Refresh Rate",
    aliases: ["Scan lines", "Banding", "Hz"],
    category: "video",
    definition:
      "How many times per second an LED panel refreshes the image; it determines whether horizontal bands and scan lines appear on camera.",
    detail:
      "Unlike moiré this is a temporal issue: if panel refresh does not match camera shutter speed, rolling bands appear in the footage. For events being broadcast or recorded, panels of 3840 Hz and above are specified. A screen that looks perfect to the eye can still band on camera, so panel choice follows whether there will be a recording.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "led-cabinet",
    term: "LED Cabinet",
    aliases: ["Cabinet", "Panel frame", "LED tile"],
    category: "video",
    definition:
      "The standard-sized frame that holds the LED modules and forms the building block of the screen.",
    detail:
      "The most common sizes are 500×500 mm and 500×1000 mm. Total screen size is built in multiples of that grid, so an in-between figure such as \"6.3 × 3.7 m\" becomes 6×3.5 m or 6.5×4 m in practice. Asking for cabinet count rather than net square metres avoids surprises on final dimensions.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "led-processor",
    term: "LED Processor",
    aliases: ["Video processor", "Scaler", "NovaStar"],
    category: "video",
    definition:
      "The device that converts a source image to the actual pixel structure of the LED screen and distributes it to the panels.",
    detail:
      "Screen resolution rarely matches a standard video format such as 1920×1080, so the image has to be scaled; the processor does that. Backstage transitions, picture-in-picture and switching to a backup source are also handled here. Every LED installation has one, and it should not be confused with a media server.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "ip-rating",
    term: "IP Rating",
    aliases: ["IP65", "Ingress Protection", "Weatherproofing"],
    category: "video",
    definition:
      "A standard two-digit code expressing how well a device is protected against dust and water.",
    detail:
      "The first digit covers dust, the second water: IP65 is fully dust-tight and resistant to water jets. For outdoor LED screens the front face is expected to be IP65 and the rear at least IP54. On any outdoor project with a chance of rain, the panel's IP value belongs in the contract.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "indoor-outdoor-led",
    term: "Indoor vs Outdoor LED",
    aliases: ["Indoor LED", "Outdoor LED"],
    category: "video",
    definition:
      "The basic distinction between LED panels built for enclosed venues and those built for open air.",
    detail:
      "The difference is not only weatherproofing: outdoor panels run at far higher brightness and are thicker and heavier, while indoor panels offer finer pixel pitch and more accurate colour. An outdoor panel indoors makes the image harsh; an indoor panel outdoors disappears in daylight.",
    related: {
      href: "/en/blog/led-screen-technology-trends-2026",
      label: "LED Screen Technology Trends",
    },
  },
  {
    slug: "led-screen-area",
    term: "LED Screen m² Calculation",
    aliases: ["Screen square metres", "LED area calculation"],
    category: "video",
    definition:
      "The area figure obtained from width × height, which forms the basis of LED screen pricing.",
    detail:
      "Rental is normally priced per m² per day, and the panel type (standard vs P1.9 indoor) changes the unit rate. Installation, video processor, control position and technical crew are separate lines. When sizing a screen, the viewing distance from the back row and the pixel pitch are assessed together.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },
  {
    slug: "content-resolution",
    term: "Content Resolution",
    aliases: ["Native resolution", "Pixel-mapped content"],
    category: "video",
    definition:
      "Preparing the video and graphics sent to a screen at the screen's actual pixel dimensions.",
    detail:
      "LED screens are rarely a standard 16:9 shape; a 6×3 m P3.9 screen, for example, is roughly 1536×768 pixels. Content not built at that size gets scaled and text turns soft. Standard practice is to give the design team the screen's pixel dimensions at least a week before the event.",
    related: { href: "/en/led-screen-rental", label: "LED Screen Rental" },
  },

  /* ---------------- Sound ---------------- */
  {
    slug: "line-array",
    term: "Line Array",
    aliases: ["Flown speaker system", "Array"],
    category: "audio",
    definition:
      "A system of multiple speaker modules hung in a vertical column so sound carries evenly over long distances.",
    detail:
      "Its advantage over classic stacked (point source) systems is that it reduces the level difference between the front row and the back row. Module count and splay angles are calculated from the depth of the audience area, which is why a line array install starts from a plan of the audience floor.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "foh",
    term: "FOH (Front of House)",
    aliases: ["Mix position", "Control position"],
    category: "audio",
    definition:
      "The operating position within the audience area, facing the stage, where sound and lighting are mixed.",
    detail:
      "What the operator hears has to match what the audience hears, so the FOH position belongs inside the audience area rather than in a corner or against a wall. Floor plans normally reserve about 3×2 m for FOH plus a cable route.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "monitor-mix",
    term: "Monitor Mix",
    aliases: ["Stage monitor", "In-ear mix", "Foldback"],
    category: "audio",
    definition:
      "A separate mix prepared so people on stage can hear themselves, independent of the mix going to the audience.",
    detail:
      "It is delivered through stage wedges or in-ear systems. A single general monitor can be enough at a speaker-led corporate event, while live music needs a separate mix line per musician, which directly drives the channel count on the console.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "speech-intelligibility",
    term: "Speech Intelligibility (STI)",
    aliases: ["STI", "Clarity of speech"],
    category: "audio",
    definition:
      "The measure of how clearly speech is understood in a room; directly tied to reverberation time and speaker placement.",
    detail:
      "In glass-walled, high-ceilinged rooms with hard surfaces, adding volume does not fix the problem and often makes it worse. The fix is correct speaker aiming, adding delay speakers and, where needed, acoustic treatment. It is the first topic raised on conference and congress projects.",
    related: { href: "/en/corporate-events", label: "Corporate Events" },
  },
  {
    slug: "db-spl",
    term: "dB SPL",
    aliases: ["Decibel", "Sound pressure level"],
    category: "audio",
    definition:
      "The unit measuring perceived loudness of sound pressure; it determines how much power the system has to deliver.",
    detail:
      "A speech-led corporate event typically runs at 85–95 dB, a concert at 100–105 dB. The scale is logarithmic: every 3 dB increase demands twice the power. Municipal and venue limits also cap the maximum on most outdoor projects, and that figure should be established before the build.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "subwoofer-array",
    term: "Subwoofer & Array Configuration",
    aliases: ["Sub", "Cardioid array", "Bass array"],
    category: "audio",
    definition:
      "The speaker that reproduces low frequencies and the way those speakers are laid out across the site.",
    detail:
      "Bass radiates in every direction; subs lined up straight in front of the stage also send bass onto the stage and into neighbouring areas. A cardioid array runs the subs in a specific order and phase to cut the energy going backwards. It is preferred on open-air projects because it reduces stage rumble and neighbourhood complaints.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "feedback",
    term: "Feedback (Howlround)",
    aliases: ["Howlround", "Larsen effect", "Ringing"],
    category: "audio",
    definition:
      "The rapidly rising squeal caused by sound from a speaker re-entering the microphone.",
    detail:
      "The most common cause is a microphone sitting inside a speaker's coverage. The fix is not lowering the volume but correcting microphone and speaker placement, choosing a microphone with the right pattern and, if needed, notching the problem frequency. On events with a lectern microphone it is always tested during rehearsal.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "rf-coordination",
    term: "Wireless Frequency Coordination",
    aliases: ["RF coordination", "Wireless microphone frequencies"],
    category: "audio",
    definition:
      "Distributing wireless microphones and in-ears across frequencies that do not interfere with each other or with local broadcasts.",
    detail:
      "Every wireless channel running at the same time needs its own frequency, and those frequencies must not land on each other's harmonics. In dense environments such as hotels, exhibition halls and stadiums, coordination with the other crews on site is required. Above eight channels, planning is never left to the event day.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "delay-speaker",
    term: "Delay Speaker",
    aliases: ["Delay stack", "Fill speaker"],
    category: "audio",
    definition:
      "An additional speaker placed out in the field to cover areas far from the stage, with its signal intentionally delayed.",
    detail:
      "Sound travels roughly 343 m per second. A speaker 40 m from the stage running without delay makes the audience hear everything twice. Once the delay matches the distance, the sound is perceived as coming from a single source. On deep sites beyond 50 m it is what saves intelligibility.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "soundcheck",
    term: "Soundcheck & Line Check",
    aliases: ["Line check", "Sound rehearsal"],
    category: "audio",
    definition:
      "A line check verifies that every channel passes signal; a soundcheck sets the mix with the actual performance.",
    detail:
      "A line check is a technical control and takes 15–30 minutes; a soundcheck needs the artist or speaker present and runs longer. Corporate events are usually covered by a line check plus a short lectern test; in live music the soundcheck belongs in the schedule as its own line item.",
    related: { href: "/en/how-we-work", label: "How We Work" },
  },
  {
    slug: "microphone-types",
    term: "Microphone Types",
    aliases: ["Lavalier", "Handheld", "Headset", "Lectern microphone"],
    category: "audio",
    definition:
      "The families of microphone defined by how they are used; they set the balance between a speaker's freedom of movement and sound quality.",
    detail:
      "The handheld is the most reliable and the easiest to manage. A lavalier frees the hands but is exposed to clothing rustle. A headset gives the cleanest result for presenters moving around the stage. The lectern microphone is standard for formal addresses. Planning spare channels equal to the number of speakers is a field rule.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },

  /* ---------------- Lighting ---------------- */
  {
    slug: "dmx",
    term: "DMX",
    aliases: ["DMX512", "Lighting control protocol"],
    category: "lighting",
    definition:
      "The standard digital control protocol that allows stage lighting to be operated from a central console.",
    detail:
      "Each fixture takes an address and receives parameters such as colour, position and intensity over a channel range. Correct ordering and termination of the cable run prevents signal errors during the build, so a DMX plan is drawn up alongside the lighting plan.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "moving-head",
    term: "Moving Head",
    aliases: ["Intelligent fixture", "Automated light"],
    category: "lighting",
    definition:
      "A motorised stage fixture whose direction, colour and beam character can be controlled remotely.",
    detail:
      "There are three basic characters: spot for gobos and sharp beams, wash for wide soft coverage, and beam for the narrow shaft visible in the air. In a lighting list the split between these characters matters as much as the quantity.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "color-temperature",
    term: "Colour Temperature (K)",
    aliases: ["Kelvin", "White balance"],
    category: "lighting",
    definition:
      "The value in Kelvin expressing whether white light leans towards warm yellow or cool blue.",
    detail:
      "At events being recorded, every white source on stage has to sit at the same Kelvin value; otherwise skin tones break up on camera. When house lighting, LED screen and stage lighting are at different temperatures, white balance is set for all of them together during rehearsal.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "three-point-lighting",
    term: "Key, Fill & Back Light",
    aliases: ["Three-point lighting", "Key light", "Back light"],
    category: "lighting",
    definition:
      "The three-fixture lighting arrangement used to render a speaker or performer correctly on camera.",
    detail:
      "Key is the main light and covers the face; fill comes from the opposite side and softens the hard shadow; back comes from behind and separates the person from the background. On stages set in front of an LED screen, without a back light the person appears to dissolve into the screen.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "follow-spot",
    term: "Follow Spot",
    aliases: ["Followspot", "Tracking spot"],
    category: "lighting",
    definition:
      "A high-output spotlight, aimed manually, that keeps a moving person lit as they cross the stage.",
    detail:
      "It is used to catch award recipients coming on stage and to follow a soloist at a concert. It requires an operator and is normally positioned on a raised point at the back of the room; if that position is not reserved on the floor plan, solving it on the event day becomes difficult.",
    related: { href: "/en/corporate-events", label: "Corporate Events" },
  },
  {
    slug: "gobo",
    term: "Gobo",
    aliases: ["Pattern template", "Logo projection", "Breakup"],
    category: "lighting",
    definition:
      "A metal or glass template placed in front of a light to turn the beam into a pattern or a logo.",
    detail:
      "It is the most economical way to project a brand logo onto a wall, floor or stage backdrop. Custom logo gobos take a few working days to produce and must be ordered ahead of the event; stock patterns (stars, textures, window breakups) can be pulled from inventory.",
    related: { href: "/en/corporate-events", label: "Corporate Events" },
  },
  {
    slug: "haze-and-fog",
    term: "Haze & Fog",
    aliases: ["Hazer", "Fog machine", "Atmospherics"],
    category: "lighting",
    definition:
      "A fine particle cloud that makes light beams visible in the air; haze is even and translucent, fog is dense and short-lived.",
    detail:
      "Beam fixtures and aerial effects simply do not register without haze. It can, however, trigger fire detection systems; indoors the standard procedure is to get venue approval and, where needed, have detectors temporarily isolated.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "lighting-console",
    term: "Lighting Console",
    aliases: ["Light desk", "Lighting desk"],
    category: "lighting",
    definition:
      "The control surface where all fixtures are programmed over DMX and recalled scene by scene through the event.",
    detail:
      "Lighting cues are recorded during rehearsal and called in order as the show runs. Programming time grows with the number of cues, not the number of fixtures; a multi-part gala night needs several times the programming of a single-session conference.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "cri",
    term: "CRI (Colour Rendering Index)",
    aliases: ["Color Rendering Index", "Ra value"],
    category: "lighting",
    definition:
      "A 0–100 value expressing how closely a light source renders colours compared with daylight.",
    detail:
      "For events being recorded or broadcast, CRI 90 and above is expected; at low CRI skin tones look washed out and corporate identity colours come out wrong. At product launches, where the product's true colour has to read correctly, this value belongs in the quote stage.",
    related: {
      href: "/en/blog/product-launch-event-organization",
      label: "Product Launch Event Organization",
    },
  },

  /* ---------------- Truss & Rigging ---------------- */
  {
    slug: "truss",
    term: "Truss",
    aliases: ["Aluminium truss", "Lattice structure"],
    category: "rigging",
    definition:
      "A modular load-bearing system made of aluminium tubes in triangular or square section, used to carry lighting and screens.",
    detail:
      "The most common sections are 290 mm and 400 mm; the larger the section, the more it carries over the same span. Choosing truss depends as much on the span (distance between supports) and total suspended load as on the length.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "rigging",
    term: "Rigging",
    aliases: ["Suspension", "Flying", "Hanging"],
    category: "rigging",
    definition:
      "The work of safely suspending lighting, audio and screen equipment from a ceiling or load-bearing structure.",
    detail:
      "Capacity of the venue's hanging points, the slings and shackles to be used, load distribution and the secondary safety connection all sit under this heading. On indoor projects it is standard practice to request the venue's rigging point load documentation.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "ground-support",
    term: "Ground Support",
    aliases: ["Tower system", "Self-supporting structure"],
    category: "rigging",
    definition:
      "An independent structure that carries the load from the floor using towers and motors when suspension from the ceiling is not possible.",
    detail:
      "It is used outdoors, in heritage buildings and in venues with no rigging points. Because it requires calculations for floor loading, ballast weight and wind load, the build takes longer than flying from a ceiling.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "swl",
    term: "SWL (Safe Working Load)",
    aliases: ["Safe Working Load", "Working load limit"],
    category: "rigging",
    definition:
      "The maximum load a structural element can carry continuously once the safety factor has been applied.",
    detail:
      "It should not be confused with breaking load; SWL is the breaking load divided by the safety factor. The SWL of every element in the chain — truss, sling, motor and shackle — is checked separately, and the calculation follows the weakest link.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "chain-hoist",
    term: "Chain Hoist",
    aliases: ["Motor", "Chain motor", "Electric hoist"],
    category: "rigging",
    definition:
      "The electric lifting motor used to raise truss and equipment to a ceiling or tower, rated in tonnes.",
    detail:
      "Common event capacities are 500 kg, 1 tonne and 2 tonnes. The basic rules are that nobody stands underneath during a lift and that the load is backed up with a safety steel once it is in position. Motor count follows the truss span and the total load.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "sling-and-shackle",
    term: "Sling & Shackle",
    aliases: ["Sling", "Shackle", "Steel wire rope"],
    category: "rigging",
    definition:
      "The round sling or steel that connects the load to the support point, and the metal fitting that locks that connection.",
    detail:
      "Both carry a marked safe working load, and the weakest link governs the calculation. Where a sling passes over a sharp edge, edge protection is used; a worn or cut sling is never repaired on site, it is replaced.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "baseplate-and-ballast",
    term: "Baseplate & Ballast",
    aliases: ["Base plate", "Counterweight", "Ballast"],
    category: "rigging",
    definition:
      "The base plate that stops a ground-support tower from tipping and the counterweight placed on it.",
    detail:
      "Outdoors, the ballast required grows quickly as wind load rises; a single backdrop tower can need hundreds of kilos. Ballast logistics are a separate item in the build plan, because moving that weight onto site usually means an extra vehicle and extra crew.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "dynamic-load",
    term: "Dynamic Load",
    aliases: ["Shock load", "Moving load"],
    category: "rigging",
    definition:
      "The additional force applied on top of static weight by movement, wind or a sudden stop.",
    detail:
      "A suspended item pausing during a lift, or swinging in the wind, generates a force on the structure noticeably greater than its own weight. That is why the calculation is never a simple sum of kilos; the safety factor exists to absorb this uncertainty.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },

  /* ---------------- Tents ---------------- */
  {
    slug: "pagoda-tent",
    term: "Pagoda Tent",
    aliases: ["Pagoda", "Pyramid tent", "Peak marquee"],
    category: "tent",
    definition:
      "A modular event tent with a pyramid roof, typically produced in 3×3, 4×4 and 5×5 m sizes.",
    detail:
      "It suits small functions such as welcome points, registration desks, sales points, VIP areas and catering stations. Units can be lined up to form a corridor; where a large area is needed, a single clear-span tent is a more economical and cleaner solution.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "clear-span-tent",
    term: "Clear Span Tent",
    aliases: ["Clear span", "Hangar tent", "Marquee"],
    category: "tent",
    definition:
      "A large event tent with no internal support poles, with spans ranging from 10 to 40 m.",
    detail:
      "Having no internal columns leaves sightlines to the stage and table layouts free. The span (width) is fixed; length is extended in 5 m bays. So a \"20×30 m tent\" means a 20 m span and six bays of length.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "dome-tent",
    term: "Dome Tent",
    aliases: ["Geodesic dome", "Spherical tent"],
    category: "tent",
    definition:
      "A tent built as a spherical shell whose uninterrupted inner surface suits 360° projection.",
    detail:
      "It is preferred for launches and experiential spaces; a seamless-looking inner surface has a direct effect on mapping quality. The build follows a different assembly sequence from a classic tent and needs a larger lay-out area.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "anchoring",
    term: "Anchoring",
    aliases: ["Staking", "Ballasting", "Fixing"],
    category: "tent",
    definition:
      "The method of securing a tent and its supporting structures to the ground against wind.",
    detail:
      "Stakes are used on soil and grass, anchor bolts or concrete ballast on concrete and asphalt. If the ground type is not settled during the survey, the build day brings surprises; on sensitive surfaces (landscaping, new asphalt, a car park deck) drilling is not possible, so ballast weight and its logistics have to be planned in advance.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "sidewalls",
    term: "Sidewalls",
    aliases: ["Side panels", "Wall panels", "PVC walls"],
    category: "tent",
    definition:
      "The PVC panels that close the side faces of a tent and can be fitted or removed as needed.",
    detail:
      "They can be left open in summer for ventilation and closed for bad weather or heated events. Transparent window panels are chosen where there is a view, opaque panels where projection and LED are used inside. Door and emergency exit positions are set on the sidewall plan.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "tent-flooring",
    term: "Tent Flooring",
    aliases: ["Deck", "Platform floor", "Subfloor"],
    category: "tent",
    definition:
      "A portable floor system built over natural ground to provide a level, insulated surface.",
    detail:
      "It is required on sloped, muddy or grassy sites so table and chair layouts sit properly. The flooring layer raises tent cost noticeably, which makes slope one of the first values to measure when surveying a site. Carpet, laminate or timber finishes can be laid on top.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "wind-load",
    term: "Wind Load",
    aliases: ["Wind rating", "Wind resistance"],
    category: "tent",
    definition:
      "The force wind applies to a tent surface, which determines the anchoring requirement.",
    detail:
      "As a tent grows, the exposed surface and therefore the force rise quickly. Manufacturers normally state a wind speed limit; a plan for opening the sidewalls and clearing the area once that limit is exceeded has to be prepared in advance. On outdoor projects the evacuation scenario is part of the proposal.",
    related: {
      href: "/en/blog/best-tent-rental-options-for-events-2026",
      label: "Tent Rental Options",
    },
  },
  {
    slug: "tent-climate-control",
    term: "Tent Climate Control",
    aliases: ["Heating", "Cooling", "HVAC", "Air conditioning"],
    category: "tent",
    definition:
      "The heating or cooling system that keeps the temperature inside a tent within a comfortable range throughout the event.",
    detail:
      "Capacity is calculated on cubic metres, taking guest numbers, lighting load and outside temperature into account. Units sit outside and feed in through ducting, so extra space and electrical capacity are needed around the tent. On winter and summer projects this item raises power demand considerably.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "rainwater-drainage",
    term: "Rainwater Drainage",
    aliases: ["Guttering", "Drainage", "Waterproofing"],
    category: "tent",
    definition:
      "The arrangement for carrying water collected on a tent roof away from the site in a controlled way.",
    detail:
      "Gutters are used where tents are joined side by side, and water is directed off the site. Without a drainage plan, water pockets form on the roof and the collected weight strains the structure. Ground drainage has to be planned as well, otherwise water seeps into the tent.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },
  {
    slug: "clear-roof",
    term: "Clear Roof",
    aliases: ["Transparent roof", "Panoramic roof"],
    category: "tent",
    definition:
      "A tent roof using transparent PVC so the sky remains visible.",
    detail:
      "It creates a striking atmosphere for evening receptions, but during the day it produces a greenhouse effect that increases cooling demand and makes projection difficult. For events with a daytime programme it is planned together with an inner liner or partial shading.",
    related: { href: "/en/tent-rental", label: "Tent Rental" },
  },

  /* ---------------- Power & Electrical ---------------- */
  {
    slug: "kva-and-kw",
    term: "kVA and kW",
    aliases: ["Power demand", "Generator capacity"],
    category: "power",
    definition:
      "kW expresses the real power drawn while kVA expresses the apparent power the source must supply; generators are specified in kVA.",
    detail:
      "Equipment labels usually state kW, while generators are referred to in kVA. The difference comes from the power factor, and in practice a generator is chosen with capacity above the total kW demand. The high inrush current when motors start also has to be accounted for.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "three-phase-power",
    term: "Three-Phase and Single-Phase Power",
    aliases: ["Three phase", "400V", "230V"],
    category: "power",
    definition:
      "Single-phase is the domestic supply; three-phase is the industrial supply that carries high power over three phases.",
    detail:
      "High-draw items such as stage lighting, LED screens and climate control require three-phase. If the venue only has single-phase sockets, the demand cannot be met whatever it is, so the survey photographs the distribution board type and its amperage. Balanced loading across the phases is also checked during the build.",
    related: {
      href: "/en/blog/event-technical-scouting-and-planning-guide",
      label: "Event Technical Site Survey Guide",
    },
  },
  {
    slug: "power-distro",
    term: "Power Distribution Board",
    aliases: ["Power distro", "Distribution board", "Distro"],
    category: "power",
    definition:
      "The board that splits incoming power into protected outputs, separating the stage, lighting, audio and screen circuits.",
    detail:
      "Separating circuits stops a fault in one section from stopping the whole event. Feeding audio and lighting from separate circuits also reduces hum getting into the sound system. Because the distro position sets the cable routes, it is marked early on the floor plan.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "rcd",
    term: "Residual Current Device (RCD)",
    aliases: ["RCD", "Earth leakage breaker", "GFCI"],
    category: "power",
    definition:
      "A protective device that detects current leaking along an unintended path and cuts the circuit instantly.",
    detail:
      "It is critical outdoors, on damp ground and in tent installations; it is the component that prevents a fatal accident when a cable gets wet. On event builds it is a standard part of the distribution board and is tested after installation to confirm it trips.",
    related: { href: "/en/truss-rental", label: "Truss Rental" },
  },
  {
    slug: "cable-sizing",
    term: "Cable Sizing & Voltage Drop",
    aliases: ["Cable cross-section", "Voltage drop"],
    category: "power",
    definition:
      "The cross-sectional area that sets how much current a cable can carry, and the loss that occurs as voltage drops over long runs.",
    detail:
      "Running thin cable over a long distance both drops voltage and heats the cable. On outdoor projects the run between generator and stage can be hundreds of metres, so the cross-section is increased with distance. This is a weight and cost item that often goes unnoticed in build logistics.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },

  /* ---------------- Event Formats ---------------- */
  {
    slug: "product-launch",
    term: "Product Launch",
    aliases: ["Launch event", "Unveiling"],
    category: "events",
    definition:
      "A corporate event where a new product is shown for the first time, built short and high-impact around a single message.",
    detail:
      "What defines the technical scope is how the product appears: a drape reveal, an LED screen lifting, mapping or a lighting transition. That reveal moment needs rehearsal and is usually the single scene the whole technical design revolves around. Colour accuracy and recording quality matter most in this format.",
    related: {
      href: "/en/blog/product-launch-event-organization",
      label: "Product Launch Event Organization",
    },
  },
  {
    slug: "dealer-meeting",
    term: "Dealer Meeting",
    aliases: ["Dealer conference", "Partner meeting", "Sales kick-off"],
    category: "events",
    definition:
      "A multi-part format bringing dealers and business partners together, combining a plenary session, targets presentation and often an awards night.",
    detail:
      "Unlike a launch, it runs across a full day and requires more than one room configuration: conference layout by day, gala layout in the evening. That turnaround is the most critical item in the technical plan and normally needs a dedicated crew.",
    related: { href: "/en/corporate-events", label: "Corporate Events" },
  },
  {
    slug: "gala-dinner",
    term: "Gala Dinner",
    aliases: ["Awards night", "Gala night"],
    category: "events",
    definition:
      "An evening event running in a dining layout, with a stage programme and often an awards ceremony.",
    detail:
      "Round-table layouts make sightlines harder, so stage height and side screens matter more than in a conference layout. For the awards section, the on-and-off stage flow, follow spot and trophy handover choreography are written separately into the run of show.",
    related: { href: "/en/corporate-events", label: "Corporate Events" },
  },
  {
    slug: "congress-and-conference",
    term: "Congress & Conference",
    aliases: ["Congress", "Symposium", "Summit"],
    category: "events",
    definition:
      "A content-led format running with many speakers and parallel sessions.",
    detail:
      "The defining technical topic is speech intelligibility; the presentation flow must run without interruption and microphone handovers must not get confused. Parallel rooms run separate audio and video sets managed against a shared schedule.",
    related: { href: "/en/mice-turkey", label: "MICE Turkey" },
  },
  {
    slug: "hybrid-event",
    term: "Hybrid Event",
    aliases: ["Hybrid", "Live-streamed event"],
    category: "events",
    definition:
      "A format addressing the in-room audience and the online audience at the same time, running two separate experiences in parallel.",
    detail:
      "Audio and video prepared for the room are not directly suitable for broadcast: the stream needs its own audio mix, camera plan and screen feed. A hybrid event is therefore a second technical layer on top of the room production and should be budgeted separately.",
    related: {
      href: "/en/blog/corporate-event-planning-guide-2026",
      label: "Corporate Event Planning Guide",
    },
  },
  {
    slug: "simultaneous-interpretation",
    term: "Simultaneous Interpretation",
    aliases: ["Simultaneous translation", "Interpretation booth"],
    category: "events",
    definition:
      "A system in which speech is translated into another language in real time and delivered to listeners through headsets.",
    detail:
      "It requires a sound-insulated booth, an interpreter console and one receiver-headset per attendee. The booth needs a view of the stage, so its position is fixed early in the room layout. It is a standard line item at congresses and dealer meetings with international attendees.",
    related: {
      href: "/en/event-production-company-turkey",
      label: "Event Production Partner in Turkey",
    },
  },
  {
    slug: "exhibition-stand",
    term: "Exhibition & Stand",
    aliases: ["Trade fair", "Stand build", "Booth"],
    category: "events",
    definition:
      "A format in which many exhibitors build their own areas against a shared venue schedule.",
    detail:
      "Exhibition halls enforce strict build and dismantle windows, and missing them carries penalties. Goods lifts, forklift access and power applications are arranged with the hall management in advance. The technical plan is shaped by the venue's rules.",
    related: { href: "/en/projects", label: "Our Projects" },
  },
  {
    slug: "accreditation-and-registration",
    term: "Accreditation & Registration",
    aliases: ["Registration", "Check-in", "Badging"],
    category: "events",
    definition:
      "The process of identifying attendees at the entrance, issuing badges and granting access rights.",
    detail:
      "The entrance is the first place a crowd builds up; if desk count, waiting area and wayfinding are not planned here, the programme starts late. On most projects the need for pagoda tents and tables and chairs in the welcome area comes out of this step.",
    related: { href: "/en/table-chair-rental", label: "Table & Chair Rental" },
  },

  /* ---------------- Operations ---------------- */
  {
    slug: "site-survey",
    term: "Technical Site Survey",
    aliases: ["Site survey", "Site visit", "Recce"],
    category: "operations",
    definition:
      "Inspecting the event site in person before the build, covering dimensions, flooring, power, access and rigging points.",
    detail:
      "What the survey settles determines how accurate the quote is: vehicle access point, door and lift dimensions, ceiling height, distribution board capacity and the time access is granted. In quotes given without a survey, logistics and extra labour are the items that deviate most often.",
    related: {
      href: "/en/blog/event-technical-scouting-and-planning-guide",
      label: "Event Technical Site Survey Guide",
    },
  },
  {
    slug: "run-of-show",
    term: "Run of Show",
    aliases: ["ROS", "Cue sheet", "Minute-by-minute schedule"],
    category: "operations",
    definition:
      "The operations document defining an event minute by minute, together with stage, audio, lighting and video cues.",
    detail:
      "The presenter's opening line, the video playback moment, the lighting change and the stage transitions all appear on the same row. Rehearsal runs off this document; without it, transitions fall to operator initiative and the flow loses consistency.",
    related: { href: "/en/corporate-events", label: "Corporate Events" },
  },
  {
    slug: "load-in-load-out",
    term: "Load-in / Load-out",
    aliases: ["Build and dismantle", "Bump-in / bump-out"],
    category: "operations",
    definition:
      "The time windows in which equipment enters and is installed at a venue, and is dismantled and removed after the event.",
    detail:
      "In hotels and congress centres these windows are narrow and often fall overnight. Crew size, vehicle count and build sequence are planned directly around them; if the window narrows, cost rises because the crew has to grow.",
    related: { href: "/en/how-we-work", label: "How We Work" },
  },
  {
    slug: "power-redundancy",
    term: "Generator & Redundancy",
    aliases: ["Redundancy", "N+1", "Backup power"],
    category: "operations",
    definition:
      "Keeping a second source or device on standby so critical systems do not stop during a power interruption.",
    detail:
      "At outdoor events the generator is the primary source and a second generator is normally positioned as backup. Indoors, uninterruptible power is planned at minimum for the control position, the screen processor and the sound system.",
    related: { href: "/en/sound-light-rental", label: "Sound & Light Systems" },
  },
  {
    slug: "technical-rehearsal",
    term: "Technical Rehearsal",
    aliases: ["Rehearsal", "Dress rehearsal", "Tech run"],
    category: "operations",
    definition:
      "The preparation session after the build in which all systems are tested against the actual show flow.",
    detail:
      "Opening presentation files, setting microphone levels, recording lighting cues and trying the transitions all happen in this session. The site is planned to be ready at least two hours before the event start so the rehearsal can run.",
    related: { href: "/en/how-we-work", label: "How We Work" },
  },
  {
    slug: "turnkey-production",
    term: "Turnkey Production",
    aliases: ["Turnkey", "End-to-end production", "Main contractor"],
    category: "operations",
    definition:
      "Planning, equipment, installation, event-day operations and dismantle carried by a single team under a single contract.",
    detail:
      "The alternative is working as the technical production partner behind an agency; in that model the client relationship and creative direction stay with the agency while site and equipment responsibility sit with the technical team. Both models can be delivered by the same crew — the difference is where the contract and the responsibility line fall.",
    related: {
      href: "/en/event-production-company-turkey",
      label: "Event Production Partner in Turkey",
    },
  },
  {
    slug: "risk-assessment",
    term: "Risk Assessment & Health and Safety",
    aliases: ["Risk assessment", "Health and safety", "HSE"],
    category: "operations",
    definition:
      "Listing in advance the hazards that could arise during the build and the event, and defining a control for each one.",
    detail:
      "Working at height, electricity, lifting equipment, crowd management and weather are standard headings. Municipalities, exhibition halls and most corporate clients ask for this document before the build; not having it delays site access.",
    related: {
      href: "/en/blog/event-technical-scouting-and-planning-guide",
      label: "Event Technical Site Survey Guide",
    },
  },
  {
    slug: "capacity-calculation",
    term: "Capacity & Occupancy Calculation",
    aliases: ["Guest capacity", "Occupancy"],
    category: "operations",
    definition:
      "Working out how many people an area holds in a given seating layout, and the circulation routes that follow from it.",
    detail:
      "The same area holds roughly 1.6 times as many people in a cocktail layout as in a seated dinner layout. The calculation covers not only tables but service routes, emergency exit corridors and the welcome area. Tent and room size decisions come straight out of this figure.",
    related: { href: "/en/table-chair-rental", label: "Table & Chair Rental" },
  },
  {
    slug: "spare-equipment",
    term: "Spare Equipment",
    aliases: ["Spares", "Backup equipment", "Plan B"],
    category: "operations",
    definition:
      "A second copy of critical devices, kept ready on site in case they fail during the event.",
    detail:
      "Wireless microphones, the presentation computer, the video processor and cable sets are typical spare items. Because an event is live and does not repeat, there is no resupply option after a failure; spares are treated as insurance rather than a cost line.",
    related: { href: "/en/how-we-work", label: "How We Work" },
  },
  {
    slug: "production-schedule",
    term: "Production Schedule",
    aliases: ["Critical path", "Production timeline"],
    category: "operations",
    definition:
      "The plan dating every task from survey to dismantle, together with the dependencies between them.",
    detail:
      "Some tasks can only happen in sequence: lighting cannot be hung before the truss is up, content cannot be tested before the screen is built. That chain forms the critical path, and one delay in it shifts the whole schedule. The content delivery date is part of this schedule too.",
    related: {
      href: "/en/blog/corporate-event-planning-guide-2026",
      label: "Corporate Event Planning Guide",
    },
  },
];

/**
 * English service page -> glossary terms appearing on that page.
 *
 * Same purpose as the Turkish map: glossary entries link out to service pages,
 * this map closes the loop back. Only slugs are listed; the visible label and
 * definition always come from EN_GLOSSARY_TERMS.
 */
export const EN_SERVICE_GLOSSARY_TERMS = {
  "/en/stage-rental": [
    "modular-stage-deck",
    "stage-load-capacity",
    "riser",
    "sightline",
    "guardrails-and-stairs",
    "stage-skirting",
    "backstage",
    "stage-plot",
  ],
  "/en/podium-rental": [
    "modular-stage-deck",
    "stage-load-capacity",
    "access-ramp",
    "guardrails-and-stairs",
    "stage-skirting",
    "sightline",
    "catwalk",
  ],
  "/en/concert-podium-rental": [
    "riser",
    "stage-load-capacity",
    "line-array",
    "subwoofer-array",
    "ground-support",
    "follow-spot",
    "dynamic-load",
  ],
  "/en/runway-podium-rental": [
    "catwalk",
    "modular-stage-deck",
    "sightline",
    "stage-skirting",
    "follow-spot",
    "color-temperature",
    "cri",
  ],
  "/en/led-screen-rental": [
    "pixel-pitch",
    "nit-brightness",
    "video-wall",
    "led-cabinet",
    "led-processor",
    "ip-rating",
    "indoor-outdoor-led",
    "led-screen-area",
    "content-resolution",
    "media-server",
    "moire",
    "refresh-rate",
  ],
  "/en/sound-light-rental": [
    "line-array",
    "foh",
    "speech-intelligibility",
    "db-spl",
    "subwoofer-array",
    "delay-speaker",
    "microphone-types",
    "monitor-mix",
    "dmx",
    "moving-head",
    "follow-spot",
    "haze-and-fog",
    "three-point-lighting",
  ],
  "/en/truss-rental": [
    "truss",
    "rigging",
    "ground-support",
    "swl",
    "chain-hoist",
    "sling-and-shackle",
    "baseplate-and-ballast",
    "dynamic-load",
  ],
  "/en/tent-rental": [
    "pagoda-tent",
    "clear-span-tent",
    "dome-tent",
    "clear-roof",
    "sidewalls",
    "tent-flooring",
    "anchoring",
    "wind-load",
    "tent-climate-control",
    "rainwater-drainage",
  ],
  "/en/table-chair-rental": [
    "capacity-calculation",
    "gala-dinner",
    "congress-and-conference",
    "accreditation-and-registration",
    "exhibition-stand",
    "tent-flooring",
  ],
  "/en/corporate-events": [
    "product-launch",
    "dealer-meeting",
    "gala-dinner",
    "congress-and-conference",
    "hybrid-event",
    "simultaneous-interpretation",
    "accreditation-and-registration",
    "run-of-show",
    "site-survey",
    "turnkey-production",
    "production-schedule",
    "risk-assessment",
  ],
  "/en/mice-turkey": [
    "congress-and-conference",
    "simultaneous-interpretation",
    "hybrid-event",
    "accreditation-and-registration",
    "run-of-show",
    "turnkey-production",
  ],
};

/**
 * Returns the glossary entries for a given English service path. A slug listed
 * in the map but missing from EN_GLOSSARY_TERMS throws at build time rather
 * than being dropped silently, so a typo cannot reach production unnoticed.
 */
export function getEnServiceGlossaryTerms(servicePath) {
  const slugs = EN_SERVICE_GLOSSARY_TERMS[servicePath];
  if (!slugs) return [];

  return slugs.map((slug) => {
    const entry = EN_GLOSSARY_TERMS.find((term) => term.slug === slug);
    if (!entry) {
      throw new Error(
        `EN_SERVICE_GLOSSARY_TERMS["${servicePath}"] refers to an undefined glossary term: "${slug}"`,
      );
    }
    return entry;
  });
}

/**
 * Text normalization for search comparison.
 *
 * Kept separate from the Turkish helper on purpose: this one lowercases with
 * the English locale and folds the accented characters that show up in the
 * English copy ("moiré", "façade"). Server and client must use the same
 * function, otherwise index and query normalise differently and matches are
 * missed.
 */
export const normalizeEnSearchText = (value = "") =>
  value
    .toLocaleLowerCase("en")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Is the related page a commercial service page or a guide article? The quote
 * button is only shown on service pages; putting "get a quote" on a blog post
 * sets the wrong expectation.
 */
export const isEnServiceHref = (href = "") =>
  Boolean(href) && !href.startsWith("/en/blog/");

export const getEnGlossaryTermsByCategory = (categoryKey) =>
  EN_GLOSSARY_TERMS.filter((entry) => entry.category === categoryKey);

export const getEnGlossaryTerm = (slug) =>
  EN_GLOSSARY_TERMS.find((entry) => entry.slug === slug);

export const getEnGlossaryTermsAlphabetical = () =>
  [...EN_GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term, "en"));
