import { NextResponse } from "next/server";
import { buildCsp } from "./lib/security/buildCsp.js";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://www.sahneva.com";

function isPreviewEnv() {
  return (
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
  );
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

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

const HSTS_VALUE = "max-age=63072000; includeSubDomains; preload";

function shouldRedirectToWww(request) {
  const hostname = getRequestHostname(request);
  return hostname === "sahneva.com";
}

export function proxy(request) {
  if (shouldRedirectToHttps(request)) {
    const url = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      `https://${getRequestHost(request)}`
    );

    const response = NextResponse.redirect(url, 308);
    response.headers.set("Strict-Transport-Security", HSTS_VALUE);
    return response;
  }

  if (shouldRedirectToWww(request)) {
    const url = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      `https://www.sahneva.com`
    );

    const response = NextResponse.redirect(url, 308);
    response.headers.set("Strict-Transport-Security", HSTS_VALUE);
    return response;
  }

  if (shouldRedirectToCleanContactUrl(request)) {
    const url = request.nextUrl.clone();
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  // Nonce-based strict CSP was evaluated and reverted: most pages are
  // ISR/static (revalidate cached), so Next.js's own inline scripts (React
  // flight data) are baked into cached HTML without the per-request nonce and
  // get blocked. Per CSP spec, a nonce present in script-src also disables
  // 'unsafe-inline' entirely, so the two can't be mixed as a fallback.
  // Trusted Types (components/security/TrustedTypesPolicy.jsx) is the primary
  // DOM-XSS defense; other CSP directives (object-src none, frame-ancestors
  // none, host allowlists) stay strict.
  const csp = buildCsp({
    siteUrl: SITE_URL,
    isPreview: isPreviewEnv(),
    allowUnsafeInline: true,
  });

  const response = NextResponse.next();
  response.headers.set("Content-Security-Policy", csp);

  if (shouldNoindexQueryVariant(request)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}
