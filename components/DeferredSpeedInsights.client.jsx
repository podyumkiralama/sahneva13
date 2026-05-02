"use client";

import { useEffect, useState } from "react";

const SLOW_CONNECTION_TYPES = new Set(["slow-2g", "2g"]);

// Avoid vendor-prefixed Network Information API properties that trigger Lighthouse
// "Deprecated API" warnings. Rely only on the standard `navigator.connection`
// shape when it exists.
function canLoadInsights() {
  if (typeof navigator === "undefined") return true;
  const connection = navigator.connection;
  if (!connection) return true;
  if (connection.saveData) return false;
  const effective = connection.effectiveType?.toLowerCase?.();
  if (effective && SLOW_CONNECTION_TYPES.has(effective)) return false;
  return true;
}

export default function DeferredSpeedInsights() {
  const [SpeedInsights, setSpeedInsights] = useState(null);

  useEffect(() => {
    if (!canLoadInsights()) return;
    if (SpeedInsights) return;

    let idleHandle;
    let timeoutHandle;
    let fallbackHandle;
    let cancelled = false;
    let hasScheduled = false;

    const loadInsights = () => {
      import("@vercel/speed-insights/next")
        .then((mod) => {
          if (!cancelled) {
            setSpeedInsights(() => mod.SpeedInsights);
          }
        })
        .catch(() => undefined);
    };

    const scheduleInsights = (timeout = 9000) => {
      if (cancelled || hasScheduled || typeof window === "undefined") return;
      hasScheduled = true;

      if ("requestIdleCallback" in window) {
        idleHandle = window.requestIdleCallback(loadInsights, { timeout });
        return;
      }

      timeoutHandle = window.setTimeout(loadInsights, timeout);
    };

    const scheduleAfterIntent = () => scheduleInsights(1200);

    if (typeof window !== "undefined") {
      window.addEventListener("pointerdown", scheduleAfterIntent, {
        passive: true,
        once: true,
      });
      window.addEventListener("keydown", scheduleAfterIntent, { once: true });
      window.addEventListener("scroll", scheduleAfterIntent, {
        passive: true,
        once: true,
      });

      // Keep real-user monitoring, but move the vendor script out of the
      // critical Lighthouse/TBT window when there is no early user intent.
      fallbackHandle = window.setTimeout(() => scheduleInsights(1200), 12000);
    }

    return () => {
      cancelled = true;
      if (typeof window !== "undefined") {
        window.removeEventListener("pointerdown", scheduleAfterIntent);
        window.removeEventListener("keydown", scheduleAfterIntent);
        window.removeEventListener("scroll", scheduleAfterIntent);
      }
      if (
        idleHandle &&
        typeof window !== "undefined" &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleHandle);
      }
      if (timeoutHandle && typeof window !== "undefined") {
        window.clearTimeout(timeoutHandle);
      }
      if (fallbackHandle && typeof window !== "undefined") {
        window.clearTimeout(fallbackHandle);
      }
    };
  }, [SpeedInsights]);

  if (!SpeedInsights) {
    return null;
  }

  return <SpeedInsights />;
}
