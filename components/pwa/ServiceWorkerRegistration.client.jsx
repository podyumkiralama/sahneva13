"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      typeof window === "undefined" ||
      !("serviceWorker" in navigator)
    ) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      } catch {
        // PWA registration is progressive enhancement; keep the page silent if blocked.
      }
    };

    let idleHandle;
    let timerHandle;

    const scheduleRegistration = () => {
      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(registerServiceWorker, {
          timeout: 10000,
        });
        return;
      }

      timerHandle = window.setTimeout(registerServiceWorker, 10000);
    };

    if (document.readyState === "complete") {
      scheduleRegistration();
      return () => {
        if (idleHandle && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleHandle);
        }
        if (timerHandle) window.clearTimeout(timerHandle);
      };
    }

    window.addEventListener("load", scheduleRegistration, { once: true });
    return () => {
      window.removeEventListener("load", scheduleRegistration);
      if (idleHandle && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleHandle);
      }
      if (timerHandle) window.clearTimeout(timerHandle);
    };
  }, []);

  return null;
}
