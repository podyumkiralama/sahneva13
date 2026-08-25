"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "./HeroProjectVideoDialog.module.css";

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

const DEFAULT_DIALOG_LABELS = {
  eyebrow: "Proje kayd\u0131 / Sahneva",
  closeLabel: "Proje videosunu kapat",
};

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

export default function HeroMosaicParallax({
  children,
  className,
  videos = [],
  dialogLabels: dialogLabelsOverride,
}) {
  const dialogLabels = { ...DEFAULT_DIALOG_LABELS, ...dialogLabelsOverride };
  const shellRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const videoTriggerRef = useRef(null);
  const activeTileRef = useRef(null);
  const animationFrameRef = useRef(null);
  const latestPositionRef = useRef(null);
  const parallaxEnabledRef = useRef(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const activeVideo =
    activeVideoIndex === null ? null : videos[activeVideoIndex] ?? null;

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

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !activeVideo) return;

    if (!dialog.open) dialog.showModal();
    closeButtonRef.current?.focus();
  }, [activeVideo]);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [activeVideo]);

  const handleDialogClose = useCallback(() => {
    setActiveVideoIndex(null);
    window.requestAnimationFrame(() => videoTriggerRef.current?.focus());
  }, []);

  const closeVideo = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleMosaicClick = useCallback(
    (event) => {
      const eventTarget = event.target;
      if (!(eventTarget instanceof Element)) return;

      const trigger = eventTarget.closest("[data-mosaic-video-index]");
      if (!(trigger instanceof HTMLButtonElement)) return;

      const index = Number(trigger.dataset.mosaicVideoIndex);
      if (!Number.isInteger(index) || !videos[index]) return;

      resetParallax();
      videoTriggerRef.current = trigger;
      setActiveVideoIndex(index);
    },
    [resetParallax, videos],
  );

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return;

    // Only native buttons marked as video triggers are actionable. Keeping
    // delegation off the wrapper avoids presenting the mosaic itself as an
    // interactive control while preserving keyboard-generated click events.
    shell.addEventListener("click", handleMosaicClick);
    return () => shell.removeEventListener("click", handleMosaicClick);
  }, [handleMosaicClick]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !activeVideo) return;

    const handleBackdropClick = (event) => {
      if (event.currentTarget === event.target) closeVideo();
    };

    dialog.addEventListener("click", handleBackdropClick);
    return () => dialog.removeEventListener("click", handleBackdropClick);
  }, [activeVideo, closeVideo]);

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

      {activeVideo ? (
        <dialog
          ref={dialogRef}
          id="hero-project-video-dialog"
          className={styles.dialog}
          aria-labelledby="hero-project-video-title"
          onClose={handleDialogClose}
        >
          <div className={styles.window}>
            <header className={styles.header}>
              <div>
                <p className={styles.eyebrow}>{dialogLabels.eyebrow}</p>
                <h2 id="hero-project-video-title" className={styles.title}>
                  {activeVideo.videoTitle}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.closeButton}
                onClick={closeVideo}
                aria-label={dialogLabels.closeLabel}
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className={styles.videoFrame}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1`}
                title={activeVideo.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <footer className={styles.footer}>
              <span>{activeVideo.videoMeta}</span>
              <Link
                href={activeVideo.href}
                prefetch={false}
                className={styles.videoCta}
              >
                {activeVideo.ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </footer>
          </div>
        </dialog>
      ) : null}
    </div>
  );
}
