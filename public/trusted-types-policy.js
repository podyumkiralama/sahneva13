(() => {
  if (!window.trustedTypes || window.trustedTypes.defaultPolicy) return;

  const TRUSTED_SCRIPT_ORIGINS = new Set([
    window.location.origin,
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://va.vercel-scripts.com",
    "https://vercel.live",
    "https://www.clarity.ms",
    "https://scripts.clarity.ms",
    "https://static.cloudflareinsights.com",
  ]);

  function sanitizeHtml(value) {
    return String(value ?? "")
      .replace(/<\s*(script|iframe|object|embed|link|meta)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
      .replace(/<\s*(script|iframe|object|embed|link|meta)\b[^>]*\/?\s*>/gi, "")
      .replace(/\s+on[a-z0-9_-]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
      .replace(
        /\s+(href|src|xlink:href|formaction)\s*=\s*(["'])?\s*(javascript:|data:|vbscript:)[\s\S]*?\2/gi,
        ""
      )
      .replace(
        /\s+(href|src|xlink:href|formaction)\s*=\s*(javascript:|data:|vbscript:)[^\s>]*/gi,
        ""
      );
  }

  function allowTrustedScriptUrl(value) {
    const url = new URL(String(value), window.location.origin);
    if (TRUSTED_SCRIPT_ORIGINS.has(url.origin)) return url.toString();
    throw new TypeError(`Blocked untrusted script URL: ${value}`);
  }

  try {
    window.trustedTypes.createPolicy("default", {
      createHTML: sanitizeHtml,
      createScript: () => "",
      createScriptURL: allowTrustedScriptUrl,
    });
  } catch {
    // Another script may have registered the default policy first.
  }
})();
