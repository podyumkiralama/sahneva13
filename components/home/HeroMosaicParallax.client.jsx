"use client";

import { useCallback, useEffect, useRef } from "react";

const TILT_X_DEGREES = 2.4;
const TILT_Y_DEGREES = 3.2;
const IMAGE_SHIFT_X = 7;
const IMAGE_SHIFT_Y = 5;

const PARALLAX_PROPERTIES = [
  "--mosaic-tilt-x",
  "--mosaic-tilt-y",
  "--mosaic-image-x",
  "--mosaic-image-y",
];

function clearParallaxStyles(tile) {
  if (!tile) return;

  PARALLAX_PROPERTIES.forEach((property) => {
    tile.style.removeProperty(property);
  });
  tile.removeAttribute("data-parallax-active");
}

function addMediaListener(mediaQuery, listener) {
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }

  mediaQuery.addListener(listener);
  return () => mediaQuery.removeListener(listener);
}

export default function HeroMosaicParallax({ children, className }) {
  const shellRef = useRef(null);
  const activeTileRef = useRef(null);
  const animationFrameRef = useRef(null);
  const latestPositionRef = useRef(null);
  const parallaxEnabledRef = useRef(false);

  const resetParallax = useCallback(() => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    latestPositionRef.current = null;
    clearParallaxStyles(activeTileRef.current);
    activeTileRef.current = null;
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAvailability = () => {
      parallaxEnabledRef.current = finePointer.matches && !reducedMotion.matches;
      if (!parallaxEnabledRef.current) resetParallax();
    };

    updateAvailability();
    const removeFinePointerListener = addMediaListener(
      finePointer,
      updateAvailability,
    );
    const removeReducedMotionListener = addMediaListener(
      reducedMotion,
      updateAvailability,
    );
    window.addEventListener("blur", resetParallax);

    return () => {
      removeFinePointerListener();
      removeReducedMotionListener();
      window.removeEventListener("blur", resetParallax);
      resetParallax();
    };
  }, [resetParallax]);

  const handlePointerMove = (event) => {
    if (!parallaxEnabledRef.current || event.pointerType === "touch") {
      resetParallax();
      return;
    }

    const shell = shellRef.current;
    const eventTarget = event.target;
    if (!shell || !(eventTarget instanceof Element)) return;

    const tile = eventTarget.closest("[data-mosaic-parallax-tile]");
    if (!(tile instanceof HTMLElement) || !shell.contains(tile)) {
      resetParallax();
      return;
    }

    if (activeTileRef.current !== tile) {
      clearParallaxStyles(activeTileRef.current);
      activeTileRef.current = tile;
      tile.setAttribute("data-parallax-active", "true");
    }

    const bounds = tile.getBoundingClientRect();
    const normalizedX = Math.max(
      -1,
      Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2),
    );
    const normalizedY = Math.max(
      -1,
      Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2),
    );

    latestPositionRef.current = { tile, normalizedX, normalizedY };
    if (animationFrameRef.current !== null) return;

    animationFrameRef.current = window.requestAnimationFrame(() => {
      animationFrameRef.current = null;
      const latestPosition = latestPositionRef.current;
      if (!latestPosition || activeTileRef.current !== latestPosition.tile) return;

      latestPosition.tile.style.setProperty(
        "--mosaic-tilt-x",
        `${(-latestPosition.normalizedY * TILT_X_DEGREES).toFixed(2)}deg`,
      );
      latestPosition.tile.style.setProperty(
        "--mosaic-tilt-y",
        `${(latestPosition.normalizedX * TILT_Y_DEGREES).toFixed(2)}deg`,
      );
      latestPosition.tile.style.setProperty(
        "--mosaic-image-x",
        `${(-latestPosition.normalizedX * IMAGE_SHIFT_X).toFixed(2)}px`,
      );
      latestPosition.tile.style.setProperty(
        "--mosaic-image-y",
        `${(-latestPosition.normalizedY * IMAGE_SHIFT_Y).toFixed(2)}px`,
      );
    });
  };

  return (
    <div
      ref={shellRef}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
      onPointerCancel={resetParallax}
      onFocusCapture={resetParallax}
    >
      {children}
    </div>
  );
}
