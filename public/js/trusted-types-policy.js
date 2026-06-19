(() => {
  if (!window.trustedTypes || window.__sahnevaTrustedTypesPolicyReady) return;

  const allowedExternalScripts = new Map([
    ["https://www.googletagmanager.com", ["/gtag/js"]],
    [
      "https://va.vercel-scripts.com",
      ["/v1/speed-insights/script.js", "/v1/speed-insights/script.debug.js"],
    ],
    ["https://static.cloudflareinsights.com", ["/beacon.min.js"]],
    ["https://scripts.clarity.ms", ["/"]],
    ["https://www.clarity.ms", ["/tag/"]],
  ]);

  const firstPartyHashedScriptPattern = new RegExp(
    "^/[a-z0-9]{8,64}/script\\.js$",
    "i"
  );

  function isVercelLiveScriptUrl(url) {
    return (
      (url.hostname === "vercel.live" || url.hostname.endsWith(".vercel.live")) &&
      url.pathname.startsWith("/_next-live/")
    );
  }

  function isAllowedScriptUrl(value) {
    const url = new URL(value, window.location.origin);

    if (url.origin === window.location.origin) {
      return (
        url.pathname.startsWith("/_next/") ||
        url.pathname.startsWith("/_vercel/speed-insights/") ||
        url.pathname === "/sw.js" ||
        firstPartyHashedScriptPattern.test(url.pathname)
      );
    }

    if (isVercelLiveScriptUrl(url)) return true;

    const allowedPaths = allowedExternalScripts.get(url.origin);
    if (!allowedPaths) return false;

    return allowedPaths.some((path) => url.pathname.startsWith(path));
  }

  try {
    window.trustedTypes.createPolicy("default", {
      createHTML(value) {
        return value;
      },
      createScriptURL(value) {
        if (isAllowedScriptUrl(value)) return value;
        throw new TypeError("Blocked untrusted script URL: " + value);
      },
    });
  } catch {
    return;
  }

  window.__sahnevaTrustedTypesPolicyReady = true;
})();
