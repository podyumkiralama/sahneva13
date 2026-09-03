// English copy for the shared HowItWorksClient component.
// The component defaults to Turkish; this dictionary swaps both the interface
// labels and the internal links so English visitors stay inside /en/*.

export const EN_HOW_IT_WORKS_DICTIONARY = {
  stepsLabel: "Steps:",
  faqShortcut: "FAQ",
  stepBadge: "Step {{n}}",
  faqPrompt: "Click to read the answer.",
  ctaBriefHref: "/en/contact",
  ctaBriefLabel: "Contact / Share Brief",
  ctaWhatsappHref:
    "https://wa.me/905453048671?text=Hello%2C+I+would+like+to+discuss+the+production+process+for+an+event+in+Turkey.",
  ctaWhatsappLabel: "Write on WhatsApp",
  ctaWhatsappAria: "Contact us on WhatsApp (opens in a new tab)",
  heroBadges: ["Sahneva Organizasyon", "End-to-end installation", "Technical crew + operations"],
  heroTitle: "How We Work",
  heroSubtitle: "How events are planned, installed and run at Sahneva.",
  heroBody:
    "Needs → quote → site survey → installation → event day → dismantling. We manage the process end to end and stay on site with the technical crew.",
  heroImageAlt: "Sahneva event process: planning, installation and on-site operations",
  quickLinksLabel: "Quick links:",
  quickLinks: [
    { href: "/en/truss-rental", label: "Truss" },
    { href: "/en/podium-rental", label: "Stage / Podium" },
    { href: "/en/sound-light-rental", label: "Sound & Light" },
  ],
  includedTitle: "What Is Included?",
  includedItems: [
    "Needs analysis and quotation",
    "Technical site survey where needed",
    "Installation, testing and on-site operations",
    "Dismantling and clean handover",
  ],
  briefTitle: "What We Ask in the Brief",
  briefItems: [
    "Date, location and venue dimensions",
    "Stage size and height",
    "Run of show and content flow",
    "Power supply and access conditions",
  ],
  internalLinksTitle: "Related Services",
  internalLinks: [
    { href: "/en/led-screen-rental", label: "LED Screen Rental" },
    { href: "/en/truss-rental", label: "Truss Rental" },
    { href: "/en/podium-rental", label: "Stage / Podium Rental" },
    { href: "/en/sound-light-rental", label: "Sound & Lighting Systems" },
  ],
  stepsSectionAria: "Production process steps",
  stepsSectionTitle: "Main Process Steps",
  faqTitle: "Frequently Asked Questions",
  stepBodies: {
    1: [
      [
        { text: "Tell us what you need: " },
        { href: "/en/led-screen-rental", label: "LED screen" },
        { text: ", " },
        { href: "/en/truss-rental", label: "truss" },
        { text: ", " },
        { href: "/en/podium-rental", label: "stage platform" },
        { text: ", " },
        { href: "/en/sound-light-rental", label: "sound and lighting" },
        { text: "." },
      ],
      [
        { text: "Send your brief through the " },
        { href: "/en/contact", label: "contact form" },
        { text: " or write to us on WhatsApp." },
      ],
    ],
    3: [
      [
        { text: "Quotes can be extended with " },
        { href: "/en/tent-rental", label: "tent" },
        { text: " and " },
        { href: "/en/table-chair-rental", label: "table and chair" },
        { text: " options." },
      ],
    ],
    6: [
      [
        { text: "During installation and testing, " },
        { href: "/en/sound-light-rental", label: "sound and lighting" },
        { text: " and " },
        { href: "/en/led-screen-rental", label: "LED screen" },
        { text: " checks are completed together with the safety inspections." },
      ],
    ],
  },
};
