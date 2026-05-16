"use client";

import { useEffect, useRef } from "react";

const MAX_DPR = 1.25;

function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function SahnevaShaderGradient({ className = "" }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;

    if (!host || !canvas || prefersReducedMotion()) {
      return undefined;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) {
      return undefined;
    }

    let frameId = 0;
    let isVisible = true;
    let lastWidth = 0;
    let lastHeight = 0;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      if (width === lastWidth && height === lastHeight && canvas.width > 0) {
        return;
      }

      lastWidth = width;
      lastHeight = height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawBlob = (cx, cy, rx, ry, rotation, color, alpha) => {
      context.save();
      context.translate(cx, cy);
      context.rotate(rotation);
      context.scale(rx, ry);

      const gradient = context.createRadialGradient(0, 0, 0.04, 0, 0, 1);
      gradient.addColorStop(0, `${color}${alpha})`);
      gradient.addColorStop(0.42, `${color}${alpha * 0.78})`);
      gradient.addColorStop(0.78, `${color}${alpha * 0.18})`);
      gradient.addColorStop(1, `${color}0)`);

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(0, 0, 1, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    const render = (timestamp) => {
      if (!isVisible) {
        frameId = window.requestAnimationFrame(render);
        return;
      }

      resize();

      const width = lastWidth;
      const height = lastHeight;
      const t = timestamp * 0.00011;

      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "source-over";

      context.save();
      context.beginPath();
      context.ellipse(width * 0.82, height * 0.2, width * 0.52, height * 0.42, -0.22, 0, Math.PI * 2);
      context.clip();

      context.fillStyle = "rgba(10, 18, 38, 0.02)";
      context.fillRect(0, 0, width, height);

      drawBlob(
        width * (0.64 + Math.sin(t) * 0.012),
        height * (0.28 + Math.cos(t * 1.2) * 0.008),
        width * 0.22,
        height * 0.16,
        -0.18,
        "rgba(224,242,254,",
        0.34,
      );
      drawBlob(
        width * (0.74 + Math.sin(t * 0.9) * 0.014),
        height * (0.34 + Math.cos(t * 1.1) * 0.01),
        width * 0.28,
        height * 0.2,
        -0.16,
        "rgba(103,232,249,",
        0.28,
      );
      drawBlob(
        width * (0.82 + Math.cos(t * 0.8) * 0.012),
        height * (0.3 + Math.sin(t * 1.15) * 0.008),
        width * 0.34,
        height * 0.22,
        -0.12,
        "rgba(59,130,246,",
        0.26,
      );
      drawBlob(
        width * (0.88 + Math.sin(t * 0.7) * 0.01),
        height * (0.26 + Math.cos(t * 0.95) * 0.008),
        width * 0.26,
        height * 0.18,
        -0.08,
        "rgba(99,102,241,",
        0.18,
      );

      context.globalCompositeOperation = "screen";
      context.strokeStyle = "rgba(255,255,255,0.05)";
      context.lineWidth = 1;

      for (let i = 0; i < 18; i += 1) {
        const offset = (i * 17 + timestamp * 0.005) % (width * 0.5);
        context.beginPath();
        context.moveTo(width * 0.56 + offset, height * 0.04);
        context.lineTo(width * 0.34 + offset, height * 0.7);
        context.stroke();
      }

      context.restore();
      frameId = window.requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.05 },
    );

    observer.observe(host);
    resize();
    frameId = window.requestAnimationFrame(render);

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(host);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 right-0 hidden w-[54%] overflow-hidden md:block ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.14) 10%, rgba(0,0,0,0.74) 22%, rgba(0,0,0,1) 38%, rgba(0,0,0,1) 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.14) 10%, rgba(0,0,0,0.74) 22%, rgba(0,0,0,1) 38%, rgba(0,0,0,1) 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute right-[-6%] top-[-10%] h-[120%] w-[112%] opacity-[0.56] mix-blend-screen"
      />
    </div>
  );
}
