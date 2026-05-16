import { NextResponse } from "next/server";

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

  const response = NextResponse.next();

  if (shouldNoindexQueryVariant(request)) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }

  return response;
}
