const TRUSTED_TYPES_POLICY_SOURCE = `
(() => {
  if (!window.trustedTypes || window.__sahnevaTrustedTypesPolicyReady) return;

  const allowedExternalScripts = new Map([
    ["https://www.googletagmanager.com", ["/gtag/js"]],
    ["https://va.vercel-scripts.com", ["/v1/speed-insights/script.js", "/v1/speed-insights/script.debug.js"]],
    ["https://static.cloudflareinsights.com", ["/beacon.min.js"]],
    ["https://scripts.clarity.ms", ["/0.8.45/clarity.js"]],
    ["https://www.clarity.ms", ["/tag/"]],
  ]);

  function isAllowedScriptUrl(value) {
    const url = new URL(value, window.location.origin);

    if (url.origin === window.location.origin) {
      return (
        url.pathname.startsWith("/_next/") ||
        url.pathname.startsWith("/_vercel/speed-insights/")
      );
    }

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
`;

export default function TrustedTypesPolicy({ nonce }) {
  return (
    <script
      id="trusted-types-policy"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: TRUSTED_TYPES_POLICY_SOURCE }}
    />
  );
}
