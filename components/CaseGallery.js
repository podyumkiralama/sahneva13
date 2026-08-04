// components/CaseGallery.js
"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

const GRID_ASPECTS = [
  "aspect-[4/5]",
  "aspect-[16/10]",
  "aspect-[1/1]",
  "aspect-[5/4]",
  "aspect-[3/4]",
  "aspect-[16/9]",
];

const FOCUS_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const LIGHTBOX_RING =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const LABELS = {
  tr: {
    galleryLabel: "Proje galerisi",
    galleryTitle: "Görsel galerisi",
    fallbackAlt: (n) => `Proje galerisi görseli ${n}`,
    openLarge: (alt) => `${alt} - büyük görseli aç`,
    preview: (alt) => `${alt} - önizleme`,
    enlarge: (alt) => `${alt} - görseli büyüt`,
    openGallery: "Galeriyi aç",
    close: "Galeriyi kapat",
    prev: "Önceki görsel",
    next: "Sonraki görsel",
    goTo: (n) => `${n}. görsele git`,
    thumb: (alt) => `${alt} küçük önizleme`,
    more: (n) => `+${n} görsel`,
    hiddenNote: (n) =>
      `Galeride ${n} adet daha görsel bulunuyor. Lightbox açıldığında tüm görseller gezilebilir.`,
    keyboardHint: "Escape ile kapatabilir, ok tuşlarıyla gezebilirsiniz.",
  },
  en: {
    galleryLabel: "Project gallery",
    galleryTitle: "Image gallery",
    fallbackAlt: (n) => `Project gallery image ${n}`,
    openLarge: (alt) => `${alt} - open larger image`,
    preview: (alt) => `${alt} - preview`,
    enlarge: (alt) => `${alt} - enlarge image`,
    openGallery: "Open gallery",
    close: "Close gallery",
    prev: "Previous image",
    next: "Next image",
    goTo: (n) => `Go to image ${n}`,
    thumb: (alt) => `${alt} thumbnail`,
    more: (n) => `+${n} images`,
    hiddenNote: (n) =>
      `${n} more images are available. All images can be browsed once the lightbox is open.`,
    keyboardHint: "Press Escape to close, use arrow keys to navigate.",
  },
  ru: {
    galleryLabel: "Галерея проектов",
    galleryTitle: "Галерея изображений",
    fallbackAlt: (n) => `Изображение галереи проектов ${n}`,
    openLarge: (alt) => `${alt} - открыть увеличенное изображение`,
    preview: (alt) => `${alt} - предпросмотр`,
    enlarge: (alt) => `${alt} - увеличить изображение`,
    openGallery: "Открыть галерею",
    close: "Закрыть галерею",
    prev: "Предыдущее изображение",
    next: "Следующее изображение",
    goTo: (n) => `Перейти к изображению ${n}`,
    thumb: (alt) => `${alt} миниатюра`,
    more: (n) => `+${n} фото`,
    hiddenNote: (n) =>
      `В галерее есть еще ${n} изображений. Все изображения доступны после открытия лайтбокса.`,
    keyboardHint: "Escape — закрыть, стрелки — навигация.",
  },
  zh: {
    galleryLabel: "项目图库",
    galleryTitle: "图片库",
    fallbackAlt: (n) => `项目图库图片 ${n}`,
    openLarge: (alt) => `${alt} - 打开大图`,
    preview: (alt) => `${alt} - 预览`,
    enlarge: (alt) => `${alt} - 放大图片`,
    openGallery: "打开图库",
    close: "关闭图库",
    prev: "上一张图片",
    next: "下一张图片",
    goTo: (n) => `跳转到第 ${n} 张图片`,
    thumb: (alt) => `${alt} 缩略图`,
    more: (n) => `+${n} 张图片`,
    hiddenNote: (n) => `图库中还有 ${n} 张图片，打开灯箱后可浏览全部图片。`,
    keyboardHint: "按 Escape 关闭，使用方向键浏览。",
  },
  ar: {
    galleryLabel: "معرض المشاريع",
    galleryTitle: "معرض الصور",
    fallbackAlt: (n) => `صورة معرض المشاريع ${n}`,
    openLarge: (alt) => `${alt} - افتح الصورة المكبرة`,
    preview: (alt) => `${alt} - معاينة`,
    enlarge: (alt) => `${alt} - تكبير الصورة`,
    openGallery: "افتح المعرض",
    close: "أغلق المعرض",
    prev: "الصورة السابقة",
    next: "الصورة التالية",
    goTo: (n) => `انتقل إلى الصورة ${n}`,
    thumb: (alt) => `${alt} صورة مصغرة`,
    more: (n) => `+${n} صورة`,
    hiddenNote: (n) => `يوجد ${n} صورة إضافية. يمكن تصفح كل الصور بعد فتح العارض.`,
    keyboardHint: "اضغط Escape للإغلاق واستخدم الأسهم للتنقل.",
  },
  de: {
    galleryLabel: "Projektgalerie",
    galleryTitle: "Bildergalerie",
    fallbackAlt: (n) => `Bild ${n} aus der Projektgalerie`,
    openLarge: (alt) => `${alt} – große Ansicht öffnen`,
    preview: (alt) => `${alt} – Vorschau`,
    enlarge: (alt) => `${alt} – Bild vergrößern`,
    openGallery: "Galerie öffnen",
    close: "Galerie schließen",
    prev: "Vorheriges Bild",
    next: "Nächstes Bild",
    goTo: (n) => `Zu Bild ${n} wechseln`,
    thumb: (alt) => `${alt} – Vorschaubild`,
    more: (n) => `+${n} Bilder`,
    hiddenNote: (n) =>
      `Es gibt ${n} weitere Bilder. Nach dem Öffnen der Galerie lassen sich alle Aufnahmen durchblättern.`,
    keyboardHint: "Mit Escape schließen, mit den Pfeiltasten blättern.",
  },
};

function getImageAlt(image, index, t) {
  return image?.alt || t.fallbackAlt(index + 1);
}

function CaseGallery({
  images = [],
  visibleCount = 4,
  layout = "grid",
  // Vaka galerisi her zaman katlamanın altında duruyor. Buradaki görselleri eager
  // yüklemek, hero'nun LCP isteğiyle bant genişliği için yarışıyordu; varsayılan 0.
  // Galeri gerçekten ilk ekranda olan bir sayfa çıkarsa açıkça >0 geçilmeli.
  priorityCount = 0,
  locale = "tr",
}) {
  const t = LABELS[locale] ?? LABELS.tr;
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastFocus = useRef(null);
  const scrollYRef = useRef(0);
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });

  const displayImages = useMemo(
    () => (visibleCount ? images.slice(0, visibleCount) : images),
    [images, visibleCount]
  );

  const hasHiddenImages =
    Boolean(visibleCount) && images.length > displayImages.length;
  const hiddenCount = Math.max(images.length - displayImages.length, 0);
  const mainImage = displayImages[activeIndex] || displayImages[0];
  const currentImage = images[currentIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
    setCurrentIndex(0);
  }, [images]);

  const openLightbox = useCallback(
    (index) => {
      if (!images.length) return;
      lastFocus.current = document.activeElement;
      setCurrentIndex(Math.min(Math.max(index, 0), images.length - 1));
      setOpen(true);
    },
    [images.length]
  );

  const closeLightbox = useCallback(() => {
    setOpen(false);
  }, []);

  const navigate = useCallback(
    (direction) => {
      setCurrentIndex((prev) => {
        if (!images.length) return prev;
        if (direction === "prev") return prev === 0 ? images.length - 1 : prev - 1;
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    },
    [images.length]
  );

  const handlePrev = useCallback(() => navigate("prev"), [navigate]);
  const handleNext = useCallback(() => navigate("next"), [navigate]);

  const handleBackdropClick = useCallback(
    (event) => {
      if (event.target === event.currentTarget) closeLightbox();
    },
    [closeLightbox]
  );

  const handleTouchStart = useCallback((event) => {
    const touch = event.touches?.[0];
    if (!touch) return;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (event) => {
      if (images.length <= 1) return;
      const touch = event.changedTouches?.[0];
      if (!touch) return;

      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;
      if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY)) return;

      if (deltaX > 0) handlePrev();
      else handleNext();
    },
    [handleNext, handlePrev, images.length]
  );

  useEffect(() => {
    if (!open) return undefined;
    const body = document.body;
    scrollYRef.current = window.scrollY;
    const previousStyles = {
      position: body.style.position,
      top: body.style.top,
      overflow: body.style.overflow,
      width: body.style.width,
    };

    const lockFrame = window.requestAnimationFrame(() => {
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.overflow = "hidden";
      body.style.width = "100%";
      closeBtnRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(lockFrame);
      body.style.position = previousStyles.position;
      body.style.top = previousStyles.top;
      body.style.overflow = previousStyles.overflow;
      body.style.width = previousStyles.width;
      window.scrollTo(0, scrollYRef.current);
      lastFocus.current?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigate("prev");
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigate("next");
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, navigate, open]);

  if (!images.length) return null;

  return (
    <div className="w-full">
      {layout === "featured" ? (
        <div className="space-y-5" aria-label={t.galleryLabel}>
          <button
            type="button"
            className={`group relative mx-auto block aspect-[4/3] max-h-[62vh] min-h-[220px] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${FOCUS_RING}`}
            onClick={() => openLightbox(activeIndex)}
            aria-label={t.openLarge(getImageAlt(mainImage, activeIndex, t))}
          >
            {mainImage && (
              <Image
                key={mainImage.src}
                src={mainImage.src}
                alt={getImageAlt(mainImage, activeIndex, t)}
                fill
                sizes="(max-width: 1024px) 100vw, 72vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                loading={priorityCount > 0 ? "eager" : "lazy"}
                decoding="async"
                quality={78}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-80" />
            <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-black text-slate-950 shadow-lg">
              {t.openGallery}
            </span>
          </button>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {displayImages.map((img, index) => (
              <button
                key={`${img.src}-${index}`}
                type="button"
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border bg-white transition duration-300 ${FOCUS_RING} ${
                  index === activeIndex
                    ? "border-blue-600 shadow-lg shadow-blue-900/15"
                    : "border-slate-200 hover:border-blue-400 hover:shadow-md"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setCurrentIndex(index);
                }}
                aria-label={t.preview(getImageAlt(img, index, t))}
              >
                <Image
                  src={img.src}
                  alt={getImageAlt(img, index, t)}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover"
                  loading={index < priorityCount ? "eager" : "lazy"}
                  decoding="async"
                  quality={65}
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
          aria-label={t.galleryLabel}
        >
          {displayImages.map((img, index) => {
            const isLastVisible = hasHiddenImages && index === displayImages.length - 1;
            const aspect = GRID_ASPECTS[index % GRID_ASPECTS.length];

            return (
              <figure
                key={`${img.src}-${index}`}
                className={`${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              >
                <button
                  type="button"
                  className={`group relative block w-full overflow-hidden rounded-[1.4rem] border border-slate-200 bg-slate-100 shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl ${FOCUS_RING} ${
                    index === 0 ? "aspect-[4/3] h-full" : aspect
                  }`}
                  onClick={() => openLightbox(index)}
                  aria-label={t.enlarge(getImageAlt(img, index, t))}
                >
                  <Image
                    src={img.src}
                    alt={getImageAlt(img, index, t)}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, 50vw"
                        : "(max-width: 768px) 50vw, 25vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-105"
                    loading={index < priorityCount ? "eager" : "lazy"}
                    decoding="async"
                    quality={index === 0 ? 68 : 60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <span aria-hidden="true" className="absolute left-3 top-3 rounded-full bg-black/65 px-2.5 py-1 text-xs font-bold text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                    {index + 1} / {images.length}
                  </span>
                  {isLastVisible && (
                    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-slate-950/70 text-center text-lg font-black text-white backdrop-blur-sm">
                      {t.more(hiddenCount)}
                    </span>
                  )}
                </button>
                {img.caption && (
                  <figcaption className="mt-2 px-1 text-center text-sm leading-snug text-slate-600">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            );
          })}
        </div>
      )}

      {hasHiddenImages && (
        <p className="sr-only">{t.hiddenNote(hiddenCount)}</p>
      )}

      {mounted && open && currentImage
        ? createPortal(
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-gallery-title"
              aria-describedby="case-gallery-description"
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 p-3 backdrop-blur-xl sm:p-5"
              onClick={handleBackdropClick}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
          <h2 id="case-gallery-title" className="sr-only">
            {t.galleryTitle}
          </h2>
          <p id="case-gallery-description" className="sr-only">
            {getImageAlt(currentImage, currentIndex, t)}. {currentIndex + 1} /{" "}
            {images.length}. {t.keyboardHint}
          </p>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/70 to-transparent" />

          <button
            ref={closeBtnRef}
            type="button"
            className={`absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 ${LIGHTBOX_RING}`}
            onClick={closeLightbox}
            aria-label={t.close}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white backdrop-blur">
            {currentIndex + 1} / {images.length}
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className={`absolute left-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:inline-flex ${LIGHTBOX_RING}`}
                onClick={handlePrev}
                aria-label={t.prev}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className={`absolute right-3 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:inline-flex ${LIGHTBOX_RING}`}
                onClick={handleNext}
                aria-label={t.next}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}

          <div className="relative h-[78vh] w-full max-w-7xl">
            <Image
              key={currentImage.src}
              src={currentImage.src}
              alt={getImageAlt(currentImage, currentIndex, t)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
              className="object-contain"
              quality={90}
              loading="eager"
              decoding="async"
            />
          </div>

          {currentImage.caption || currentImage.alt ? (
            <div className="absolute inset-x-4 bottom-20 z-20 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/55 px-4 py-3 text-center text-sm font-medium text-white shadow-2xl backdrop-blur md:bottom-24">
              {currentImage.caption || currentImage.alt}
            </div>
          ) : null}

          {images.length > 1 && (
            <div className="absolute inset-x-3 bottom-3 z-20 mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-2 backdrop-blur">
              {images.map((img, index) => (
                <button
                  key={`${img.src}-thumb-${index}`}
                  type="button"
                  className={`relative h-14 w-20 flex-none overflow-hidden rounded-xl border transition ${LIGHTBOX_RING} ${
                    index === currentIndex
                      ? "border-white opacity-100"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={t.goTo(index + 1)}
                >
                  <Image
                    src={img.src}
                    alt={t.thumb(getImageAlt(img, index, t))}
                    fill
                    sizes="80px"
                    className="object-cover"
                    quality={45}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
            </div>,
            document.body
          )
        : null}
    </div>
  );
}

export default React.memo(CaseGallery);
