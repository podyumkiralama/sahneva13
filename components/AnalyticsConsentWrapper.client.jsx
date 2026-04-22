"use client";

import { useEffect, useState } from "react";

const GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "user_analytics_consent";

const ACTIVATION_EVENTS = [
  "pointerdown",
  "keydown",
  "touchstart",
  "wheel",
  "focusin",
];

const CONSENT_COPY = {
  tr: {
    body: "Deneyimi iyileştirmek için anonim analitik çerezleri kullanabiliriz. Onay vermezseniz analitik çalışmaz.",
    accept: "Kabul et",
    reject: "Reddet",
  },
  en: {
    body: "We can use anonymous analytics cookies to improve the experience. Analytics stays off unless you consent.",
    accept: "Accept",
    reject: "Reject",
  },
  ar: {
    body: "يمكننا استخدام ملفات تحليلات مجهولة لتحسين التجربة. تبقى التحليلات متوقفة ما لم توافق.",
    accept: "قبول",
    reject: "رفض",
  },
};

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

function resolveConsentLocale() {
  if (typeof document === "undefined") return "tr";
  const lang = document.documentElement.lang?.toLowerCase?.() ?? "tr";
  if (lang.startsWith("ar")) return "ar";
  if (lang.startsWith("en")) return "en";
  return "tr";
}

function shouldSkipLateLoad() {
  if (typeof navigator === "undefined") return false;
  const connection = navigator.connection;
  if (!connection) return false;
  return (
    connection.saveData ||
    ["slow-2g", "2g"].includes(connection.effectiveType)
  );
}

function loadAnalytics() {
  return import("./AnalyticsConsentRuntime.client")
    .then((mod) => mod.activateAnalyticsConsent(GA_ID))
    .catch(() => undefined);
}

export default function AnalyticsConsentWrapper() {
  const [promptLocale, setPromptLocale] = useState(null);

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return undefined;

    const stored = safeReadConsent();
    if (stored === "denied") return undefined;
    if (stored !== "granted") {
      setPromptLocale(resolveConsentLocale());
      return undefined;
    }

    let activated = false;
    let activationHandle = null;
    let activationUsesIdle = false;
    let fallbackTimer = null;
    let listenersAttached = false;

    const cleanupInteractionListeners = () => {
      if (!listenersAttached) return;
      ACTIVATION_EVENTS.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
      listenersAttached = false;
    };

    const activate = () => {
      if (activated) return;
      activated = true;
      activationHandle = null;
      cleanupInteractionListeners();

      loadAnalytics();
    };

    const scheduleActivation = (timeout = 250) => {
      if (activated || activationHandle) return;

      if ("requestIdleCallback" in window) {
        activationUsesIdle = true;
        activationHandle = window.requestIdleCallback(activate, { timeout });
        return;
      }

      activationUsesIdle = false;
      activationHandle = window.setTimeout(activate, timeout);
    };

    function handleInteraction() {
      cleanupInteractionListeners();
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
      scheduleActivation();
    }

    listenersAttached = true;
    ACTIVATION_EVENTS.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    if (!shouldSkipLateLoad()) {
      fallbackTimer = window.setTimeout(() => scheduleActivation(1), 15000);
    }

    return () => {
      cleanupInteractionListeners();
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
      if (activationHandle) {
        if (activationUsesIdle && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(activationHandle);
        } else {
          window.clearTimeout(activationHandle);
        }
      }
    };
  }, []);

  if (!promptLocale || !GA_ID) return null;

  const copy = CONSENT_COPY[promptLocale] ?? CONSENT_COPY.tr;

  const acceptConsent = () => {
    safeWriteConsent("granted");
    setPromptLocale(null);
    loadAnalytics();
  };

  const rejectConsent = () => {
    safeWriteConsent("denied");
    setPromptLocale(null);
  };

  return (
    <div
      dir={promptLocale === "ar" ? "rtl" : "ltr"}
      role="dialog"
      aria-live="polite"
      aria-label="Analytics consent"
      className="fixed inset-x-3 bottom-3 z-[80] mx-auto max-w-3xl rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 shadow-2xl sm:inset-x-6 sm:flex sm:items-center sm:justify-between sm:gap-4"
    >
      <p className="text-sm leading-6 text-neutral-700">{copy.body}</p>
      <div className="mt-3 flex shrink-0 items-center gap-2 sm:mt-0">
        <button
          type="button"
          onClick={rejectConsent}
          className="min-h-11 rounded-md border border-neutral-300 px-4 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {copy.reject}
        </button>
        <button
          type="button"
          onClick={acceptConsent}
          className="min-h-11 rounded-md bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {copy.accept}
        </button>
      </div>
    </div>
  );
}
