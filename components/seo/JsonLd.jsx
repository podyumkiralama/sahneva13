import { STATIC_CSP_NONCE } from "@/lib/security/staticCsp";

function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd({
  data,
  id,
  nonce = STATIC_CSP_NONCE,
  suppressHydrationWarning = false,
}) {
  if (!data) return null;

  return (
    <script
      id={id}
      nonce={nonce}
      type="application/ld+json"
      suppressHydrationWarning={suppressHydrationWarning}
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
