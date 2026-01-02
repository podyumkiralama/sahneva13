// components/MotionPrimitives.client.jsx
'use client';

import { useRef, useEffect, useState } from 'react';

/**
 * SEO / Google snapshot uyumlu MotionWrapper:
 * - SSR’da (window yokken) içerik HER ZAMAN görünür (opacity-0 yok)
 * - Client’ta isterse yine IO animasyonu yapar
 *
 * Varsayılan: ssrVisible = true (güvenli)
 * Eğer animasyon mutlaka olsun dersen: ssrVisible={false} kullanırsın.
 */
export function MotionWrapper({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  as: Component = 'div',
  ssrVisible = true,
  ...props
}) {
  const ref = useRef(null);

  // ✅ Kritik: Server render’da içeriği görünür üret
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return !!ssrVisible; // SSR
    return false; // Client başlangıç (IO ile açacağız)
  });

  useEffect(() => {
    // Eğer SSR’da görünür basmayı seçtiysek, client’ta da görünür kalsın.
    if (ssrVisible) {
      setIsVisible(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    let observer;
    if ('IntersectionObserver' in window && ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      observer.observe(ref.current);
    } else {
      // IO yoksa direkt göster
      setIsVisible(true);
    }

    return () => observer?.disconnect?.();
  }, [ssrVisible]);

  const getInitialStyle = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-8 opacity-0';
      case 'fade-down':
        return '-translate-y-8 opacity-0';
      case 'scale':
        return 'scale-95 opacity-0';
      case 'blur':
        return 'blur-sm opacity-0';
      default:
        return 'opacity-0';
    }
  };

  const getVisibleStyle = () => {
    switch (animation) {
      case 'fade-up':
      case 'fade-down':
        return 'translate-y-0 opacity-100';
      case 'scale':
        return 'scale-100 opacity-100';
      case 'blur':
        return 'blur-0 opacity-100';
      default:
        return 'opacity-100';
    }
  };

  // ✅ SSR-visible seçiliyse initial hidden sınıfını hiç basma
  const motionClass = ssrVisible
    ? `transition-all duration-700 ease-out will-change-transform ${getVisibleStyle()}`
    : `transition-all duration-700 ease-out will-change-transform ${isVisible ? getVisibleStyle() : getInitialStyle()}`;

  return (
    <Component
      ref={ref}
      className={`${className} ${motionClass}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}