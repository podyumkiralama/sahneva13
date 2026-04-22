"use client";

const CONSENT_KEY = "user_analytics_consent";
const TRUSTED_SCRIPT_POLICY = "sahneva#script-url";
const GTAG_ORIGIN = "https://www.googletagmanager.com";
const GTAG_PATH = "/gtag/js";

function createTrustedScriptUrl(url) {
  if (typeof window === "undefined" || !window.trustedTypes) return url;

  window.__sahnevaTrustedScriptPolicy =
    window.__sahnevaTrustedScriptPolicy ||
    window.trustedTypes.createPolicy(TRUSTED_SCRIPT_POLICY, {
      createScriptURL(value) {
        const parsedUrl = new URL(value, window.location.origin);
        if (
          parsedUrl.origin === GTAG_ORIGIN &&
          parsedUrl.pathname === GTAG_PATH &&
          parsedUrl.searchParams.has("id")
        ) {
          return parsedUrl.toString();
        }

        throw new TypeError(`Blocked untrusted script URL: ${value}`);
      },
    });

  return window.__sahnevaTrustedScriptPolicy.createScriptURL(url);
}

function safeReadConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function safeWriteConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // localStorage can be unavailable in restricted browser modes.
  }
}

function initConsentMode() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function () {
      window.dataLayer.push(arguments);
    };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function loadGAScript(gaId) {
  if (typeof window === "undefined" || !gaId) return;
  if (document.getElementById("ga-script")) return;

  const existingLoader = document.querySelector(
    'script[src^="https://www.googletagmanager.com/gtag/js"]',
  );
  if (existingLoader || window.__gaInitialized) return;
  window.__gaInitialized = true;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.setAttribute("data-gtag-loader", "true");
  script.async = true;
  script.src = createTrustedScriptUrl(
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`,
  );
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  window.gtag("js", new Date());
  window.gtag("config", gaId, {
    anonymize_ip: true,
  });
}

export function activateAnalyticsConsent(gaId) {
  if (!gaId || typeof window === "undefined") return;

  initConsentMode();

  const stored = safeReadConsent();
  const isGranted = stored === "granted" || stored === null;

  if (!isGranted) return;

  if (stored === null) {
    safeWriteConsent("granted");
  }

  window.gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });

  loadGAScript(gaId);
}
