import { headers } from "next/headers";

function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default async function JsonLd({ data, id, suppressHydrationWarning = false }) {
  if (!data) return null;

  const nonce = (await headers()).get("x-nonce") ?? undefined;

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
