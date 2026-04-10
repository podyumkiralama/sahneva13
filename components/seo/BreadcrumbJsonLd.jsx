import { buildBreadcrumbList, normalizeBaseUrl } from "@/lib/seo/breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";

export async function BreadcrumbJsonLd({ items, baseUrl }) {
  if (!items || items.length === 0) return null;

  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const data = buildBreadcrumbList({ baseUrl: normalizedBaseUrl, items });
  return <JsonLd data={data} />;
}
