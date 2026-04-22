// components/StickyVideoRail.client.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const StickyVideoRailLazy = dynamic(() => import("./StickyVideoRail"), {
  ssr: false,
  loading: () => null,
});

export default function StickyVideoRailClient({ locale = "tr" }) {
  const [shouldRender, setShouldRender] = useState(false);
  const pathname = usePathname();
  const isHome =
    pathname === "/" || pathname === "/en" || pathname === "/ar";
  const shouldHide = pathname === "/cadir-kiralama" || isHome;

  useEffect(() => {
    if (shouldHide || typeof window === "undefined" || shouldRender) return;

    let idleId = null;
    let timerId = null;
    let didSchedule = false;

    const scheduleRender = () => {
      if (didSchedule) return;
      didSchedule = true;
      setShouldRender(true);
    };

    const onIntent = () => scheduleRender();

    window.addEventListener("scroll", onIntent, { passive: true, once: true });
    window.addEventListener("pointerdown", onIntent, { passive: true, once: true });
    window.addEventListener("keydown", onIntent, { once: true });

    // Kritik ilk yuklemeyi rahat birak; etkilesim yoksa daha sonra yukle.
    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(scheduleRender, { timeout: 12000 });
    } else {
      timerId = window.setTimeout(scheduleRender, 12000);
    }

    return () => {
      window.removeEventListener("scroll", onIntent);
      window.removeEventListener("pointerdown", onIntent);
      window.removeEventListener("keydown", onIntent);
      if (idleId && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [shouldHide, shouldRender]);

  if (shouldHide) return null;

  if (!shouldRender) return null;
  return <StickyVideoRailLazy locale={locale} />;
}
