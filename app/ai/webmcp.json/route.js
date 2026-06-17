import { SITE_URL } from "@/lib/seo/seoConfig";

export const revalidate = 3600;

export async function GET() {
  return Response.redirect(`${SITE_URL}/.well-known/webmcp.json`, 308);
}
