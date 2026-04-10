function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JsonLd({ data, id, suppressHydrationWarning = false }) {
  if (!data) return null;

  return (
    <script
      id={id}
      type="application/ld+json"
      suppressHydrationWarning={suppressHydrationWarning}
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
