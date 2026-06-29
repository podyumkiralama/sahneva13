import { TRUSTED_TYPES_POLICY_CODE } from "@/lib/security/inlineScripts";
import { STATIC_CSP_NONCE } from "@/lib/security/staticCsp";

export default function TrustedTypesPolicy({ nonce = STATIC_CSP_NONCE }) {
  return (
    // Trusted Types must run before any third-party loader touches script URL
    // sinks. Inlined to eliminate the network round-trip while keeping sync execution.
    <script
      id="trusted-types-policy"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: TRUSTED_TYPES_POLICY_CODE }}
    />
  );
}
