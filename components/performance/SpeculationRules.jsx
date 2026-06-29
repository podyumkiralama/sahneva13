import { buildSpeculationRulesJson } from "@/lib/security/inlineScripts";
import { STATIC_CSP_NONCE } from "@/lib/security/staticCsp";

export default function SpeculationRules({ locale = "tr", nonce = STATIC_CSP_NONCE }) {
  return (
    <script
      id={`speculation-rules-${locale}`}
      type="speculationrules"
      nonce={nonce}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: buildSpeculationRulesJson(locale),
      }}
    />
  );
}
