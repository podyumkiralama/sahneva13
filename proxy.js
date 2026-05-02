import { NextResponse } from "next/server";
import { STATIC_CSP_NONCE } from "./lib/security/staticCsp";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

function buildCsp({ siteUrl, isPreview }) {
  const strictScriptSrc = [
    "'self'",
    `'nonce-${STATIC_CSP_NONCE}'`,
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://static.cloudflareinsights.com",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://*.vercel.live",
  ].join(" ");

  const connectSrc = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.google.com",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://k.clarity.ms",
    "https://z.clarity.ms",
    "https://l.clarity.ms",
    "https://*.clarity.ms",
    "https://static.cloudflareinsights.com",
    "https://cloudflareinsights.com",
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
    script-src ${strictScriptSrc};
    script-src-elem ${strictScriptSrc};
    script-src-attr 'none';
    connect-src ${connectSrc};
    worker-src 'self' blob:;
    frame-src ${frameSrc};
    form-action 'self' https://formspree.io https://wa.me;
    trusted-types nextjs goog#html sahneva#script-url nextjs#bundler default;
  `
    .replace(/\s{2,}/g, " ")
    .trim();
}

function isLocalHost(hostname) {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1"
  );
}

function getRequestHost(request) {
  const host = (
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    request.nextUrl.host
  )
    .split(",")[0]
    .trim();

  const [hostname, port] = host.split(":");

  if (!port || isLocalHost(hostname) || port === "80" || port === "443") {
    return host;
  }

  return hostname;
}

function getRequestHostname(request) {
  return getRequestHost(request).split(":")[0];
}

function shouldRedirectToHttps(request) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const { protocol } = request.nextUrl;
  const hostname = getRequestHostname(request);

  if (isLocalHost(hostname)) return false;

  return protocol === "http:" || forwardedProto === "http";
}

function applySecurityHeaders(response, { csp }) {
  response.headers.set("Content-Security-Policy", csp);
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

function shouldRedirectToCleanContactUrl(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (!QUERY_VARIANT_NOINDEX_PATHS.has(pathname)) {
    return false;
  }

  return Array.from(searchParams.keys()).length > 0;
}

export function proxy(request) {
  if (shouldRedirectToHttps(request)) {
    const url = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      `https://${getRequestHost(request)}`
    );

    return NextResponse.redirect(url, 308);
  }

  if (shouldRedirectToCleanContactUrl(request)) {
    const url = request.nextUrl.clone();
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  const isPreview = request.nextUrl.hostname.endsWith("vercel.app");
  const csp = buildCsp({
    siteUrl: request.nextUrl.origin,
    isPreview,
  });

  const response = NextResponse.next();

  applySecurityHeaders(response, { csp });

  if (shouldNoindexQueryVariant(request)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}
