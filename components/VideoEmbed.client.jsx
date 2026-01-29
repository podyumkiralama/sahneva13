"use client";

import { useEffect, useMemo, useState, useCallback } from "react";

/* ===========================
   YouTube preconnect helpers
   =========================== */

let _ytPreconnectDone = false;

function ensureYouTubePreconnect() {
  if (typeof document === "undefined") return;
  if (_ytPreconnectDone) return;

  // If something already injected, don't duplicate
  if (document.querySelector('link[data-yt-preconnect="1"]')) {
    _ytPreconnectDone = true;
    return;
  }

  _ytPreconnectDone = true;

  const links = [
    // preconnect
    { rel: "preconnect", href: "https://www.youtube-nocookie.com" },
    { rel: "preconnect", href: "https://i.ytimg.com" },
    { rel: "preconnect", href: "https://www.google.com" },
    // dns-prefetch
    { rel: "dns-prefetch", href: "https://www.youtube-nocookie.com" },
    { rel: "dns-prefetch", href: "https://i.ytimg.com" },
  ];

  for (const { rel, href } of links) {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    link.setAttribute("data-yt-preconnect", "1");
    document.head.appendChild(link);
  }
}

function warmupYouTube() {
  ensureYouTubePreconnect();
}

/* ===========================
   Component
   =========================== */

export default function VideoEmbed({
  videoId,
  title = "YouTube video",
  autoLoad = false,
  autoplayOnClick = true,
  muteOnAutoplay = true,
  warmupOnIdle = false,
  preconnectOnMount = true,
  className = "",
}) {
  if (!videoId) return null;

  const thumbs = useMemo(() => {
    const base = `https://i.ytimg.com/vi/${videoId}`;
    return [
      `${base}/maxresdefault.jpg`,
      `${base}/hqdefault.jpg`,
      `${base}/sddefault.jpg`,
      `${base}/mqdefault.jpg`,
    ];
  }, [videoId]);

  // Overlay state (UX). Iframe is always present for SEO.
  const [isLoaded, setIsLoaded] = useState(Boolean(autoLoad));
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);

  // Base iframe URL (no autoplay): safe initial render
  const baseEmbedUrl = useMemo(() => {
    // playsinline=1 for iOS; modestbranding/rel for cleaner UI
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  }, [videoId]);

  // Click URL (autoplay optional)
  const clickEmbedUrl = useMemo(() => {
    if (!autoplayOnClick) return baseEmbedUrl;
    const params = new URLSearchParams();
    params.set("autoplay", "1");
    if (muteOnAutoplay) params.set("mute", "1");
    return `${baseEmbedUrl}&${params.toString()}`;
  }, [baseEmbedUrl, autoplayOnClick, muteOnAutoplay]);

  // Iframe src state: starts with base, becomes autoplay on click
  const [iframeSrc, setIframeSrc] = useState(baseEmbedUrl);

  useEffect(() => {
    setIsLoaded(Boolean(autoLoad));
    setThumbIndex(0);
    setThumbFailed(false);
    setIframeSrc(baseEmbedUrl);
  }, [videoId, autoLoad, baseEmbedUrl]);

  useEffect(() => {
    if (!preconnectOnMount) return;
    ensureYouTubePreconnect();
  }, [preconnectOnMount]);

  useEffect(() => {
    if (!warmupOnIdle) return;
    if (typeof window === "undefined") return;

    const id =
      window.requestIdleCallback?.(() => warmupYouTube(), { timeout: 1500 }) ??
      window.setTimeout(() => warmupYouTube(), 800);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, [warmupOnIdle]);

  const handleWarmup = useCallback(() => {
    warmupYouTube();
  }, []);

  const handlePlay = useCallback(() => {
    warmupYouTube();
    setIsLoaded(true);
    setIframeSrc(clickEmbedUrl);
  }, [clickEmbedUrl]);

  const currentThumb = thumbs[thumbIndex];

  return (
    <div
      className={`relative aspect-video rounded-3xl overflow-hidden shadow-xl ${className}`}
    >
      {/* ✅ SEO için: iframe HER ZAMAN DOM’da */}
      <iframe
        src={iframeSrc}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />

      {/* Overlay: click gelene kadar kapağı göster */}
      {!isLoaded ? (
        <button
          type="button"
          onClick={handlePlay}
          onMouseEnter={handleWarmup}
          onFocus={handleWarmup}
          className="absolute inset-0 z-10 group flex items-center justify-center bg-slate-950 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label={`${title} videosunu oynat`}
        >
          {!thumbFailed ? (
            <img
              src={currentThumb}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              onError={() => {
                if (thumbIndex < thumbs.length - 1) setThumbIndex((i) => i + 1);
                else setThumbFailed(true);
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              <span className="text-sm text-white/70">Önizleme yüklenemedi</span>
            </div>
          )}

          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center justify-center gap-4">
            <span
              className="text-7xl drop-shadow-2xl transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none"
              aria-hidden="true"
            >
              ▶
            </span>
            <span className="rounded-2xl bg-white/20 px-6 py-3 text-base font-semibold shadow-lg backdrop-blur-md">
              Videoyu İzle
            </span>
          </div>
        </button>
      ) : null}
    </div>
  );
}
