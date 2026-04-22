// components/AnalyticsConsentWrapper.client.jsx
"use client";

import { useEffect } from "react";

const CONSENT_KEY = "user_analytics_consent";
const GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID;
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

// Consent Mode başlangıç durumu (default: denied)
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

// GA script'ini gerçekten sayfaya ekleyen fonksiyon
function loadGAScript(gaId) {
  if (typeof window === "undefined" || !gaId) return;

  // Aynı script'i ikinci defa eklemeyelim
  if (document.getElementById("ga-script")) return;
  const existingLoader = document.querySelector(
    'script[src^="https://www.googletagmanager.com/gtag/js"]'
  );
  if (existingLoader || window.__gaInitialized) return;
  window.__gaInitialized = true;

  const script = document.createElement("script");
  script.id = "ga-script";
  script.setAttribute("data-gtag-loader", "true");
  script.async = true;
  script.src = createTrustedScriptUrl(
    `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
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

export default function AnalyticsConsentWrapper() {
  useEffect(() => {
    if (!GA_ID) return;

    let timeoutHandle;
    let activationHandle;
    let activationUsingIdle = false;
    let listenersAttached = false;
    let activated = false;

    const events = ["pointerdown", "keydown", "touchstart", "wheel", "focusin"];

    const activate = () => {
      if (activated) return;
      activated = true;
      activationHandle = null;

      initConsentMode();

      const stored =
        typeof window !== "undefined"
          ? window.localStorage.getItem(CONSENT_KEY)
          : null;

      const isGranted = stored === "granted" || stored === null;

      if (isGranted) {
        if (stored === null) {
          window.localStorage.setItem(CONSENT_KEY, "granted");
        }
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        });

        loadGAScript(GA_ID);
      }
    };

    const scheduleActivation = (timeout = 1200) => {
      if (activated || activationHandle || typeof window === "undefined") return;

      if ("requestIdleCallback" in window) {
        activationUsingIdle = true;
        activationHandle = window.requestIdleCallback(activate, { timeout });
        return;
      }

      activationUsingIdle = false;
      activationHandle = window.setTimeout(activate, timeout);
    };

    const handleInteraction = () => {
      cleanupInteractionListeners();
      if (timeoutHandle) {
        window.clearTimeout(timeoutHandle);
        timeoutHandle = null;
      }
      scheduleActivation();
    };

    const cleanupInteractionListeners = () => {
      if (listenersAttached) {
        events.forEach((event) =>
          window.removeEventListener(event, handleInteraction)
        );
        listenersAttached = false;
      }
    };

    const cleanup = () => {
      cleanupInteractionListeners();
      if (timeoutHandle && typeof window !== "undefined") {
        window.clearTimeout(timeoutHandle);
        timeoutHandle = null;
      }
      if (activationHandle && typeof window !== "undefined") {
        if (activationUsingIdle && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(activationHandle);
        } else {
          window.clearTimeout(activationHandle);
        }
        activationHandle = null;
      }
    };

    if (typeof window !== "undefined") {
      listenersAttached = true;
      events.forEach((event) =>
        window.addEventListener(event, handleInteraction, { passive: true })
      );

      const connection = navigator.connection;
      const shouldSkipLateLoad =
        connection?.saveData ||
        ["slow-2g", "2g"].includes(connection?.effectiveType);

      if (!shouldSkipLateLoad) {
        timeoutHandle = window.setTimeout(() => scheduleActivation(1), 15000);
      }
    }

    return cleanup;
  }, []);

  return null;
}
