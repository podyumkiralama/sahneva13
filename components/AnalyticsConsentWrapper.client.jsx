"use client";

import { useEffect } from "react";

const GA_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.NEXT_PUBLIC_GA_ID;

const ACTIVATION_EVENTS = [
  "pointerdown",
  "keydown",
  "touchstart",
  "wheel",
  "focusin",
];

function shouldSkipLateLoad() {
  if (typeof navigator === "undefined") return false;
  const connection = navigator.connection;
  if (!connection) return false;
  return (
    connection.saveData ||
    ["slow-2g", "2g"].includes(connection.effectiveType)
  );
}

export default function AnalyticsConsentWrapper() {
  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return undefined;

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

      import("./AnalyticsConsentRuntime.client")
        .then((mod) => mod.activateAnalyticsConsent(GA_ID))
        .catch(() => {});
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

  return null;
}
