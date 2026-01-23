"use client";

import { useEffect, useMemo, useState, useCallback } from "react";

function warmupYouTube() {
  if (typeof document === "undefined") return;
  if (document.querySelector('link[data-yt-warmup="1"]')) return;

  const origins = [
    "https://www.youtube-nocookie.com",
    "https://www.google.com",
    "https://i.ytimg.com",
    "https://www.gstatic.com",
  ];

  for (const href of origins) {
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = href;
    preconnect.crossOrigin = "";
    preconnect.setAttribute("data-yt-warmup", "1");
    document.head.appendChild(preconnect);

    const dns = document.createElement("link");
    dns.rel = "dns-prefetch";
    dns.href = href;
    dns.setAttribute("data-yt-warmup", "1");
    document.head.appendChild(dns);
  }
}

export default function VideoEmbed({
  videoId,
  title = "YouTube video",
  autoLoad = false,
  autoplayOnClick = false,
  muteOnAutoplay = true,
  warmupOnIdle = false, // istersen true yap
  className = "",
}) {
  const thumbs = useMemo(() => {
    const base = `https://i.ytimg.com/vi/${videoId}`;
    return [
      `${base}/maxresdefault.jpg`,
      `${base}/hqdefault.jpg`,
      `${base}/sddefault.jpg`,
      `${base}/mqdefault.jpg`,
    ];
  }, [videoId]);

  const [isLoaded, setIsLoaded] = useState(Boolean(autoLoad));
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);

  const embedUrl = useMemo(() => {
    const base = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
    if (!autoplayOnClick) return base;

    const params = new URLSearchParams();
    params.set("autoplay", "1");
    if (muteOnAutoplay) params.set("mute", "1");
    return `${base}&${params.toString()}`;
  }, [videoId, autoplayOnClick, muteOnAutoplay]);

  useEffect(() => {
    setIsLoaded(Boolean(autoLoad));
    setThumbIndex(0);
    setThumbFailed(false);
  }, [videoId, autoLoad]);

  useEffect(() => {
    if (!warmupOnIdle) return;
    if (typeof window === "undefined") return;

    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => warmupYouTube(), { timeout: 1500 })
      : window.setTimeout(() => warmupYouTube(), 800);

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id);
      else window.clearTimeout(id);
    };
  }, [warmupOnIdle]);

  const handleWarmup = useCallback(() => {
    // hover/focus olduğunda hızlı warmup
    warmupYouTube();
  }, []);

  const handleLoad = useCallback(() => {
    warmupYouTube();
    setIsLoaded(true);
  }, []);

  const currentThumb = thumbs[thumbIndex];

  return (
    <div
      className={`relative aspect-video rounded-3xl overflow-hidden shadow-xl ${className}`}
    >
      {!isLoaded ? (
        <button
          type="button"
          onClick={handleLoad}
          onMouseEnter={handleWarmup}
          onFocus={handleWarmup}
          className="absolute inset-0 group flex items-center justify-center bg-slate-950 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
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
                // sıradaki thumb'a geç
                if (thumbIndex < thumbs.length - 1) setThumbIndex((i) => i + 1);
                else setThumbFailed(true);
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
              <span className="text-sm text-white/70">
                Önizleme yüklenemedi
              </span>
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
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  );
}
