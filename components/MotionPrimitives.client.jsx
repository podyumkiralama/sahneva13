// components/MotionPrimitives.client.jsx
"use client";

import { useRef, useEffect, useState } from "react";

export function MotionWrapper({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  as: Component = "div",
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true); // ✅ default VISIBLE

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    // IntersectionObserver yoksa (bot / eski env) görünür kalsın
    if (!("IntersectionObserver" in window)) return;

    // ✅ sadece “yaklaşınca” animasyon, ama opacity ile saklama yok
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getInitialStyle = () => {
    switch (animation) {
      case "fade-up":
        return "translate-y-6"; // ✅ opacity yok
      case "fade-down":
        return "-translate-y-6";
      case "scale":
        return "scale-[0.98]";
      case "blur":
        return "blur-[2px]";
      default:
        return "";
    }
  };

  const getVisibleStyle = () => {
    switch (animation) {
      case "fade-up":
      case "fade-down":
        return "translate-y-0";
      case "scale":
        return "scale-100";
      case "blur":
        return "blur-0";
      default:
        return "";
    }
  };

  return (
    <Component
      ref={ref}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        isVisible ? getVisibleStyle() : getInitialStyle()
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
