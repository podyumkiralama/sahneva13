import { buildBreadcrumbList, normalizeBaseUrl } from "@/lib/seo/breadcrumbs";
import { headers } from "next/headers";

export async function BreadcrumbJsonLd({ items, baseUrl }) {
  if (!items || items.length === 0) return null;

  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const data = buildBreadcrumbList({ baseUrl: normalizedBaseUrl, items });
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <script
      nonce={nonce}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
