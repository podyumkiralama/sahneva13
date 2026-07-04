// Single source of truth for inline script content used in both
// CSP hash computation (next.config.mjs) and component rendering.
// Any change here MUST be reflected in the hash automatically — the
// config imports this file directly and recomputes at build time.

export const TRUSTED_TYPES_POLICY_CODE =
  `(()=>{if(!window.trustedTypes||window.__sahnevaTrustedTypesPolicyReady)return;const allowedExternalScripts=new Map([["https://www.googletagmanager.com",["/gtag/js"]],["https://va.vercel-scripts.com",["/v1/speed-insights/script.js","/v1/speed-insights/script.debug.js"]],["https://scripts.clarity.ms",["/"]],["https://www.clarity.ms",["/tag/"]]]),firstPartyHashedScriptPattern=new RegExp("^/[a-z0-9]{8,64}/script\\.js$","i");function isVercelLiveScriptUrl(url){return(url.hostname==="vercel.live"||url.hostname.endsWith(".vercel.live"))&&url.pathname.startsWith("/_next-live/")}function isAllowedScriptUrl(value){const url=new URL(value,window.location.origin);if(url.origin===window.location.origin)return url.pathname.startsWith("/_next/")||url.pathname.startsWith("/_vercel/speed-insights/")||url.pathname==="/sw.js"||firstPartyHashedScriptPattern.test(url.pathname);if(isVercelLiveScriptUrl(url))return true;const allowedPaths=allowedExternalScripts.get(url.origin);return!!allowedPaths&&allowedPaths.some(path=>url.pathname.startsWith(path))}try{window.trustedTypes.createPolicy("default",{createHTML(value){return value},createScriptURL(value){if(isAllowedScriptUrl(value))return value;throw new TypeError("Blocked untrusted script URL: "+value)}})}catch{return}window.__sahnevaTrustedTypesPolicyReady=true})();`;

export const SPECULATION_RULES_URLS = {
  tr: [
    "/hizmetler",
    "/kurumsal-organizasyon",
    "/podyum-kurulum-fiyatlari",
    "/led-ekran-kiralama-fiyatlari",
    "/led-ekran-kiralama",
    "/ses-isik-sistemleri",
    "/sahne-kiralama",
    "/iletisim",
  ],
  en: [
    "/en/services",
    "/en/corporate-events",
    "/en/podium-rental-prices",
    "/en/led-screen-rental",
    "/en/sound-light-rental",
    "/en/stage-rental",
    "/en/contact",
  ],
  ar: ["/ar/services", "/ar/contact"],
  ru: [
    "/ru/services",
    "/ru/stage-rental",
    "/ru/led-screen-rental",
    "/ru/sound-light-rental",
    "/ru/tent-rental",
    "/ru/corporate-events",
    "/ru/contact",
  ],
};

export function buildSpeculationRulesJson(locale) {
  const paths = SPECULATION_RULES_URLS[locale] ?? SPECULATION_RULES_URLS.tr;
  return JSON.stringify({
    prefetch: [
      {
        source: "document",
        where: { or: paths.map((path) => ({ href_matches: path })) },
        eagerness: "moderate",
      },
    ],
  });
}
