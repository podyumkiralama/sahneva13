const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const STATIC_OG_IMAGE = `${SITE_URL}/img/og/sahneva-og.webp`;

export async function GET() {
  return Response.redirect(STATIC_OG_IMAGE, 307);
}
