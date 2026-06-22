import { STATIC_CSP_NONCE } from "@/lib/security/staticCsp";

const SHOULD_RENDER_SPECULATION_RULES = process.env.CSP_STRICT_SCRIPTS !== "true";

const SPECULATION_RULES_BY_LOCALE = {
  tr: [
    "/hizmetler",
    "/kurumsal-organizasyon",
    "/podyum-kurulum-fiyatlari",
    "/led-ekran-kiralama-fiyatlari",
    "/led-ekran-kiralama",
    "/ses-isik-sistemleri",
    "/sahne-kiralama",
    "/iletisim",
  ],
  en: [
    "/en/services",
    "/en/corporate-events",
    "/en/podium-rental-prices",
    "/en/led-screen-rental",
    "/en/sound-light-rental",
    "/en/stage-rental",
    "/en/contact",
  ],
  ar: ["/ar/services", "/ar/contact"],
  ru: [
    "/ru/services",
    "/ru/stage-rental",
    "/ru/led-screen-rental",
    "/ru/sound-light-rental",
    "/ru/tent-rental",
    "/ru/corporate-events",
    "/ru/contact",
  ],
};

function buildSpeculationRules(locale) {
  const paths = SPECULATION_RULES_BY_LOCALE[locale] ?? SPECULATION_RULES_BY_LOCALE.tr;

  return {
    prefetch: [
      {
        source: "document",
        where: {
          or: paths.map((path) => ({ href_matches: path })),
        },
        eagerness: "moderate",
      },
    ],
  };
}

export default function SpeculationRules({ locale = "tr", nonce = STATIC_CSP_NONCE }) {
  if (!SHOULD_RENDER_SPECULATION_RULES) {
    // Inline speculation rules are a non-critical performance hint. Strict CSP
    // test mode disables them instead of re-adding script-src unsafe-inline.
    return null;
  }

  return (
    <script
      id={`speculation-rules-${locale}`}
      type="speculationrules"
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSpeculationRules(locale)),
      }}
    />
  );
}
