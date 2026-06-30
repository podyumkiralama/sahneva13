import { buildSpeculationRulesJson } from "@/lib/security/inlineScripts";

export default function SpeculationRules({ locale = "tr" }) {
  // No nonce attribute: allowed by per-locale SHA-256 hashes in the CSP (cspHashes.js).
  return (
    <script
      id={`speculation-rules-${locale}`}
      type="speculationrules"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: buildSpeculationRulesJson(locale),
      }}
    />
  );
}
