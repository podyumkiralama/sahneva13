import { STATIC_CSP_NONCE } from "@/lib/security/staticCsp";

const SPECULATION_RULES_BY_LOCALE = {
  tr: [
    "/hizmetler",
    "/kurumsal-organizasyon",
    "/podyum-kiralama-fiyatlari",
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
  return (
    <script
      id={`speculation-rules-${locale}`}
      type="speculationrules"
      nonce={nonce}
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildSpeculationRules(locale)),
      }}
    />
  );
}
