(() => {
  if (!window.trustedTypes || window.trustedTypes.defaultPolicy) return;

  const BLOCKED_ELEMENTS = new Set([
    "SCRIPT",
    "IFRAME",
    "OBJECT",
    "EMBED",
    "LINK",
    "META",
  ]);
  const URL_ATTRIBUTES = new Set(["href", "src", "xlink:href", "formaction"]);
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

  function isUnsafeUrl(value) {
    const trimmedValue = String(value || "").trim();
    if (!trimmedValue) return false;

    try {
      const url = new URL(trimmedValue, window.location.origin);
      return ["javascript:", "data:", "vbscript:"].includes(url.protocol);
    } catch {
      return true;
    }
  }

  function sanitizeHtml(value) {
    const template = document.createElement("template");
    template.innerHTML = String(value ?? "");

    const walker = document.createTreeWalker(template.content, NodeFilter.SHOW_ELEMENT);
    const blockedNodes = [];

    while (walker.nextNode()) {
      const element = walker.currentNode;
      if (BLOCKED_ELEMENTS.has(element.tagName)) {
        blockedNodes.push(element);
        continue;
      }

      for (const attribute of [...element.attributes]) {
        const attributeName = attribute.name.toLowerCase();
        if (
          attributeName.startsWith("on") ||
          (URL_ATTRIBUTES.has(attributeName) && isUnsafeUrl(attribute.value))
        ) {
          element.removeAttribute(attribute.name);
        }
      }
    }

    blockedNodes.forEach((node) => node.remove());
    return template.innerHTML;
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
