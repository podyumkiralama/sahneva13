"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const SupportWidgetLazy = dynamic(() => import("./SupportWidget"), {
  ssr: false,
  loading: () => null,
});

export default function SupportLauncher({ locale = "tr", enabled = false }) {
  const [shouldRender, setShouldRender] = useState(false);
  const pathname = usePathname();

  // Panelin kendisi zaten sohbet ekranı; orada balon görünmemeli.
  const hidden = !enabled || pathname?.startsWith("/yonetim");

  useEffect(() => {
    if (hidden || shouldRender) return undefined;

    let idleId = null;
    let timerId = null;

    const show = () => setShouldRender(true);

    // İlk boyamayı serbest bırak: widget ya ilk etkileşimde ya da sayfa
    // boşa çıktığında yüklensin.
    window.addEventListener("scroll", show, { passive: true, once: true });
    window.addEventListener("pointerdown", show, { passive: true, once: true });
    window.addEventListener("keydown", show, { once: true });

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(show, { timeout: 5000 });
    } else {
      timerId = window.setTimeout(show, 5000);
    }

    return () => {
      window.removeEventListener("scroll", show);
      window.removeEventListener("pointerdown", show);
      window.removeEventListener("keydown", show);
      if (idleId && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [hidden, shouldRender]);

  if (hidden || !shouldRender) return null;

  return <SupportWidgetLazy locale={locale} />;
}
