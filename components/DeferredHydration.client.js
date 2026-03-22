// components/DeferredHydration.client.js
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Ağır client bileşenlerini yalnızca:
 * - Görünür olduklarında (IntersectionObserver), veya
 * - Tarayıcı boşta kaldığında (requestIdleCallback / RAF fallback)
 * hydrate eden küçük yardımcı bileşen.
 * * EKLENEN ÖZELLİK: Arama motoru botları (Googlebot vb.) için
 * gecikmeyi iptal edip içeriği anında sunarak SEO risklerini ortadan kaldırır.
 *
 * Kullanım:
 * <DeferredHydration idleTimeout={3000} rootMargin="200px">
 *   <HeavyComponent />
 * </DeferredHydration>
 */

// Basit ve hızlı bir bot tespit fonksiyonu
const isBot = () => {
  if (typeof navigator === "undefined") return false;
  return /bot|googlebot|crawler|spider|robot|crawling/i.test(
    navigator.userAgent
  );
};

export default function DeferredHydration({
  children,
  fallback = null,
  rootMargin = "200px",
  idleTimeout = 3000,
  as: Component = "div",
  className,
  forceHydrate = false,
  ...rest
}) {
  const [isHydrated, setHydrated] = useState(forceHydrate);
  const hasHydratedRef = useRef(forceHydrate);
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Zaten hydrate olduysa / zorunlu hydrate varsa hiçbir şey kurma
    if (hasHydratedRef.current || forceHydrate) {
      if (!hasHydratedRef.current) {
        hasHydratedRef.current = true;
        setHydrated(true);
      }
      return;
    }

    let observer;
    let idleId = null;
    let idleUsingRaf = false;
    let cancelled = false;

    const hydrateNow = () => {
      if (cancelled || hasHydratedRef.current) return;
      hasHydratedRef.current = true;
      setHydrated(true);

      if (observer) {
        observer.disconnect();
        observer = undefined;
      }

      if (idleId !== null) {
        if (!idleUsingRaf && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        } else {
          cancelAnimationFrame(idleId);
        }
        idleId = null;
      }
    };

    // --- SEO GÜVENLİĞİ: Eğer giren bir botsa, beklemeden hydrate et ---
    if (isBot()) {
      hydrateNow();
      return; // Diğer performans optimizasyonlarını kurmaya gerek yok
    }
    // ------------------------------------------------------------------

    // Görünür olunca hydrate et
    if ("IntersectionObserver" in window && ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              hydrateNow();
              break;
            }
          }
        },
        {
          rootMargin,
          threshold: 0.1,
        }
      );

      observer.observe(ref.current);
    }

    // Tarayıcı boşta kalınca yedek hydrate
    const scheduleIdle = () => {
      if (idleTimeout == null || idleTimeout < 0) return;

      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(
          (deadline) => {
            if (deadline.timeRemaining() > 10) {
              hydrateNow();
            }
          },
          { timeout: idleTimeout }
        );
      } else {
        idleUsingRaf = true;
        const start = performance.now();

        const loop = () => {
          if (performance.now() - start >= idleTimeout) {
            hydrateNow();
            return;
          }
          idleId = requestAnimationFrame(loop);
        };

        idleId = requestAnimationFrame(loop);
      }
    };

    scheduleIdle();

    return () => {
      cancelled = true;

      if (observer) {
        observer.disconnect();
        observer = undefined;
      }

      if (idleId !== null) {
        if (!idleUsingRaf && "cancelIdleCallback" in window) {
          window.cancelIdleCallback(idleId);
        } else {
          cancelAnimationFrame(idleId);
        }
      }
    };
  }, [rootMargin, idleTimeout, forceHydrate]);

  const busy = !isHydrated && Boolean(fallback);

  return (
    <Component
      ref={ref}
      className={className}
      aria-busy={busy || undefined}
      {...rest}
    >
      {isHydrated ? children : fallback}
    </Component>
  );
}
