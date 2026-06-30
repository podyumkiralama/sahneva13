import { TRUSTED_TYPES_POLICY_CODE } from "@/lib/security/inlineScripts";

export default function TrustedTypesPolicy() {
  // No nonce attribute: this script is allowed by its SHA-256 hash in the CSP.
  // The middleware injects a per-request nonce only into Next.js-generated scripts;
  // our custom inline scripts are covered by pre-computed hashes in cspHashes.js.
  return (
    <script
      id="trusted-types-policy"
      dangerouslySetInnerHTML={{ __html: TRUSTED_TYPES_POLICY_CODE }}
    />
  );
}
