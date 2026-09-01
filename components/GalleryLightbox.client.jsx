"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function GalleryLightbox({
  children,
  images = [],
  label = "Görsel galerisi",
}) {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const scrollYRef = useRef(0);

  const isOpen = Number.isInteger(currentIndex);
  const currentImage = isOpen ? images[currentIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setCurrentIndex(null);
  }, []);

  const navigate = useCallback(
    (direction) => {
      setCurrentIndex((previousIndex) => {
        if (!Number.isInteger(previousIndex) || images.length < 2) {
          return previousIndex;
        }

        if (direction === "previous") {
          return previousIndex === 0 ? images.length - 1 : previousIndex - 1;
        }

        return previousIndex === images.length - 1 ? 0 : previousIndex + 1;
      });
    },
    [images.length]
  );

  const openFromTrigger = useCallback(
    (trigger) => {
      const index = Number.parseInt(trigger?.getAttribute("data-lightbox-index") ?? "", 10);
      if (!Number.isInteger(index) || index < 0 || index >= images.length) return;

      lastTriggerRef.current = trigger;
      setCurrentIndex(index);
    },
    [images.length]
  );

  const handleGalleryClick = useCallback(
    (event) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest("[data-lightbox-index]");
      if (!trigger || !event.currentTarget.contains(trigger)) return;
      openFromTrigger(trigger);
    },
    [openFromTrigger]
  );

  const handleGalleryKeyDown = useCallback(
    (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest("[data-lightbox-index]");
      if (!trigger || !event.currentTarget.contains(trigger)) return;

      event.preventDefault();
      openFromTrigger(trigger);
    },
    [openFromTrigger]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const body = document.body;
    scrollYRef.current = window.scrollY;
    const previousStyles = {
      position: body.style.position,
      top: body.style.top,
      overflow: body.style.overflow,
      width: body.style.width,
    };
    const dialog = dialogRef.current;
    const backgroundElements = Array.from(body.children)
      .filter((element) => element !== dialog)
      .map((element) => ({
        element,
        wasInert: element.hasAttribute("inert"),
      }));

    for (const { element } of backgroundElements) {
      element.setAttribute("inert", "");
    }
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.overflow = "hidden";
    body.style.width = "100%";
    closeButtonRef.current?.focus();

    return () => {
      body.style.position = previousStyles.position;
      body.style.top = previousStyles.top;
      body.style.overflow = previousStyles.overflow;
      body.style.width = previousStyles.width;

      for (const { element, wasInert } of backgroundElements) {
        if (!wasInert) element.removeAttribute("inert");
      }

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollYRef.current);
      root.style.scrollBehavior = previousScrollBehavior;
      lastTriggerRef.current?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      const hasNavigationModifier = event.altKey || event.ctrlKey || event.metaKey;
      const focusIsInsideDialog = dialogRef.current?.contains(document.activeElement);

      if (event.key === "ArrowLeft" && !hasNavigationModifier && focusIsInsideDialog) {
        event.preventDefault();
        navigate("previous");
        return;
      }

      if (event.key === "ArrowRight" && !hasNavigationModifier && focusIsInsideDialog) {
        event.preventDefault();
        navigate("next");
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]):not([tabindex="-1"]), [href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (element) =>
          element instanceof HTMLElement &&
          !element.hidden &&
          element.getClientRects().length > 0
      );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, isOpen, navigate]);

  return (
    <>
      <div
        role="group"
        aria-label={label}
        onClick={handleGalleryClick}
        onKeyDown={handleGalleryKeyDown}
      >
        {children}
      </div>

      {mounted && isOpen && currentImage
        ? createPortal(
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-lightbox-title"
              aria-describedby="gallery-lightbox-description"
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-xl sm:p-6"
            >
              <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className="absolute inset-0 cursor-default border-0 bg-transparent p-0"
                onClick={close}
              />

              <h2 id="gallery-lightbox-title" className="sr-only">
                {label}
              </h2>
              <p id="gallery-lightbox-description" className="sr-only">
                {currentImage.alt}. Görsel {currentIndex + 1} / {images.length}. Escape ile kapatabilir, sağ ve sol ok tuşlarıyla gezebilirsiniz.
              </p>

              <button
                ref={closeButtonRef}
                type="button"
                className={`absolute right-4 top-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-black/70 ${FOCUS_RING}`}
                onClick={close}
                aria-label="Büyütülmüş görseli kapat"
              >
                <X size={24} aria-hidden="true" />
              </button>

              <div
                aria-live="polite"
                aria-atomic="true"
                data-lightbox-counter
                className="absolute left-4 top-4 z-30 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-sm font-bold text-white backdrop-blur"
              >
                <span aria-hidden="true">{currentIndex + 1} / {images.length}</span>
                <span className="sr-only">
                  {currentImage.alt}. {currentImage.caption ?? ""} Görsel {currentIndex + 1} / {images.length}.
                </span>
              </div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    className={`absolute left-3 top-1/2 z-30 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-black/70 sm:left-5 ${FOCUS_RING}`}
                    onClick={() => navigate("previous")}
                    aria-label="Önceki görsel"
                  >
                    <ChevronLeft size={30} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className={`absolute right-3 top-1/2 z-30 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur transition hover:bg-black/70 sm:right-5 ${FOCUS_RING}`}
                    onClick={() => navigate("next")}
                    aria-label="Sonraki görsel"
                  >
                    <ChevronRight size={30} aria-hidden="true" />
                  </button>
                </>
              ) : null}

              <figure className="relative z-10 flex h-[88vh] w-full max-w-7xl flex-col items-center justify-center">
                <div className="relative min-h-0 w-full flex-1">
                  <Image
                    key={currentImage.src}
                    src={currentImage.src}
                    alt={currentImage.alt ?? "LED ekran kurulum görseli"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                    className="object-contain"
                    quality={90}
                    loading="eager"
                    decoding="async"
                    unoptimized={Boolean(currentImage.unoptimized)}
                  />
                </div>
                {currentImage.caption ? (
                  <figcaption className="mt-3 max-w-4xl rounded-2xl border border-white/10 bg-black/55 px-4 py-3 text-center text-sm font-medium leading-6 text-white backdrop-blur">
                    {currentImage.caption}
                  </figcaption>
                ) : null}
              </figure>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
