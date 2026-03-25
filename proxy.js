import { NextResponse } from "next/server";

/**
 * Next.js proxy — runs on every matched request.
 * Keep this minimal/pass-through for maximum stability & performance.
 */
export const config = {
  matcher: [
    // Exclude API routes, Next.js internals, favicon, and any request with a file extension.
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};

export function proxy(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}
