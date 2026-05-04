import { SITE_URL } from "@/lib/seo/seoConfig";

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const siteUrl = SITE_URL.replace(/\/$/, "");
  const searchTemplate = `${siteUrl}/search?q={searchTerms}`;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Sahneva</ShortName>
  <Description>Sahneva Organizasyon site içi arama</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Language>tr-TR</Language>
  <Image height="32" width="32" type="image/png">${escapeXml(siteUrl)}/favicon-32x32.png</Image>
  <Url type="text/html" method="get" template="${escapeXml(searchTemplate)}" />
</OpenSearchDescription>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/opensearchdescription+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  });
}
