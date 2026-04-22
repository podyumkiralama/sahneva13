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
    let cancelled = false;

    const loadInsights = () => {
      import("@vercel/speed-insights/next")
        .then((mod) => {
          if (!cancelled) {
            setSpeedInsights(() => mod.SpeedInsights);
          }
        })
        .catch(() => undefined);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleHandle = window.requestIdleCallback(loadInsights, { timeout: 5000 });
    } else if (typeof window !== "undefined") {
      timeoutHandle = window.setTimeout(loadInsights, 3200);
    }

    return () => {
      cancelled = true;
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
    };
  }, [SpeedInsights]);

  if (!SpeedInsights) {
    return null;
  }

  return <SpeedInsights />;
}
