"use client";

const CONSENT_KEY = "user_analytics_consent";
const TRUSTED_SCRIPT_POLICY = "sahneva#script-url";
const GTAG_ORIGIN = "https://www.googletagmanager.com";
const GTAG_PATH = "/gtag/js";
const CLARITY_ORIGIN = "https://www.clarity.ms";
const CLARITY_PATH_PREFIX = "/tag/";
const AHREFS_ANALYTICS_ORIGIN = "https://analytics.ahrefs.com";
const AHREFS_ANALYTICS_PATH = "/analytics.js";

function createTrustedScriptUrl(url) {
  if (typeof window === "undefined" || !window.trustedTypes) return url;

  window.__sahnevaTrustedScriptPolicy =
    window.__sahnevaTrustedScriptPolicy ||
    window.trustedTypes.createPolicy(TRUSTED_SCRIPT_POLICY, {
      createScriptURL(value) {
        const parsedUrl = new URL(value, window.location.origin);
        const isGtagUrl =
          parsedUrl.origin === GTAG_ORIGIN &&
          parsedUrl.pathname === GTAG_PATH &&
          parsedUrl.searchParams.has("id");

        const isClarityUrl =
          parsedUrl.origin === CLARITY_ORIGIN &&
          parsedUrl.pathname.startsWith(CLARITY_PATH_PREFIX);

        const isAhrefsAnalyticsUrl =
          parsedUrl.origin === AHREFS_ANALYTICS_ORIGIN &&
          parsedUrl.pathname === AHREFS_ANALYTICS_PATH;

        if (isGtagUrl || isClarityUrl || isAhrefsAnalyticsUrl) {
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
  window.gtag("config", gaId);
}

function loadClarityScript(clarityId) {
  if (typeof window === "undefined" || !clarityId) return;
  if (document.getElementById("clarity-script") || window.__clarityInitialized) return;
  window.__clarityInitialized = true;

  window.clarity =
    window.clarity ||
    function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };

  const script = document.createElement("script");
  script.id = "clarity-script";
  script.setAttribute("data-clarity-loader", "true");
  script.async = true;
  script.src = createTrustedScriptUrl(
    `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`,
  );
  document.head.appendChild(script);
}

function loadAhrefsAnalyticsScript(ahrefsAnalyticsKey) {
  if (typeof window === "undefined" || !ahrefsAnalyticsKey) return;
  if (
    document.getElementById("ahrefs-analytics-script") ||
    window.__ahrefsAnalyticsInitialized
  ) {
    return;
  }
  window.__ahrefsAnalyticsInitialized = true;

  const script = document.createElement("script");
  script.id = "ahrefs-analytics-script";
  script.async = true;
  script.setAttribute("data-key", ahrefsAnalyticsKey);
  script.src = createTrustedScriptUrl(
    `${AHREFS_ANALYTICS_ORIGIN}${AHREFS_ANALYTICS_PATH}`,
  );
  document.head.appendChild(script);
}

export function activateAnalyticsConsent({
  gaId,
  clarityId,
  ahrefsAnalyticsKey,
} = {}) {
  if ((!gaId && !clarityId && !ahrefsAnalyticsKey) || typeof window === "undefined") {
    return;
  }

  initConsentMode();

  const stored = safeReadConsent();
  if (stored !== "granted") return;

  if (gaId) {
    window.gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });

    loadGAScript(gaId);
  }

  loadClarityScript(clarityId);
  loadAhrefsAnalyticsScript(ahrefsAnalyticsKey);
}
