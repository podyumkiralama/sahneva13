import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

function buildCsp({ siteUrl, isPreview }) {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://static.cloudflareinsights.com",
  ].join(" ");

  const connectSrc = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://*.clarity.ms",
    "https://static.cloudflareinsights.com",
    "wss://*.pusher.com",
    siteUrl,
  ].join(" ");

  const frameSrc = [
    "'self'",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.youtube-nocookie.com",
    "https://player.vimeo.com",
    "https://vercel.live",
    "https://*.vercel.live",
    "https://www.google.com/maps",
    "https://maps.google.com",
    "https://google.com/maps",
    "https://*.google.com",
  ].join(" ");

  const frameAncestors = isPreview
    ? "frame-ancestors 'self' https://vercel.live https://*.vercel.live;"
    : "frame-ancestors 'none';";

  return `
    default-src 'self';
    ${frameAncestors}
    base-uri 'self';
    object-src 'none';
    upgrade-insecure-requests;
    img-src 'self' data: blob: https:;
    font-src 'self' data: https://fonts.gstatic.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    script-src ${scriptSrc};
    script-src-elem ${scriptSrc};
    script-src-attr 'none';
    connect-src ${connectSrc};
    worker-src 'self' blob:;
    frame-src ${frameSrc};
    form-action 'self' https://formspree.io https://wa.me;
  `
    .replace(/\s{2,}/g, " ")
    .trim();
}

const QUERY_VARIANT_NOINDEX_PATHS = new Set([
  "/iletisim",
  "/en/contact",
  "/ar/contact",
]);

function shouldNoindexQueryVariant(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (!QUERY_VARIANT_NOINDEX_PATHS.has(pathname)) {
    return false;
  }

  return Array.from(searchParams.keys()).length > 0;
}

export function proxy(request) {
  const requestHeaders = new Headers(request.headers);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set(
    "Content-Security-Policy",
    buildCsp({
      siteUrl: request.nextUrl.origin,
      isPreview: request.nextUrl.hostname.endsWith("vercel.app"),
    })
  );

  if (shouldNoindexQueryVariant(request)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}
