function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd({ data, id, suppressHydrationWarning = true }) {
  if (!data) return null;

  // type="application/ld+json" is a data block — browsers do not execute it
  // and CSP script-src does not apply. No nonce needed.
  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning={suppressHydrationWarning}
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
