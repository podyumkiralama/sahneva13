"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { Play } from "lucide-react";

/* ===========================
   YouTube preconnect helpers
   =========================== */
let _ytPreconnectDone = false;

function ensureYouTubePreconnect() {
  if (typeof document === "undefined") return;
  if (_ytPreconnectDone) return;

  if (document.querySelector('link[data-yt-preconnect="1"]')) {
    _ytPreconnectDone = true;
    return;
  }

  _ytPreconnectDone = true;

  const links = [
    { rel: "preconnect", href: "https://www.youtube-nocookie.com" },
    { rel: "preconnect", href: "https://i.ytimg.com" },
    { rel: "preconnect", href: "https://www.google.com" },
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
const PLAY_LABELS = {
  tr: "Videoyu İzle",
  en: "Watch Video",
  ru: "Смотреть видео",
  ar: "شاهد الفيديو",
};

const PREVIEW_ERROR_LABELS = {
  tr: "Önizleme yüklenemedi",
  en: "Preview unavailable",
  ru: "Превью недоступно",
  ar: "المعاينة غير متاحة",
};

export default function VideoEmbed({
  videoId,
  title = "YouTube video",
  thumbnailUrl,
  autoplayOnClick = true,
  muteOnAutoplay = true,

  // ✅ Google mantığı: landing’de idle warmup kapalı kalsın (default false)
  warmupOnIdle = false,

  // ✅ sayfa açılışında 3P preconnect yapmasın
  preconnectOnMount = false,

  startSeconds = 0,
  playLabel,
  locale = "tr",
  className = "",
}) {
  const resolvedPlayLabel = playLabel ?? PLAY_LABELS[locale] ?? PLAY_LABELS.tr;
  const previewErrorLabel = PREVIEW_ERROR_LABELS[locale] ?? PREVIEW_ERROR_LABELS.tr;
  const thumbs = useMemo(() => {
    if (!videoId) return [];
    const base = `https://i.ytimg.com/vi/${videoId}`;
    const fallbackThumbs = [
      `${base}/maxresdefault.jpg`,
      `${base}/hqdefault.jpg`,
      `${base}/sddefault.jpg`,
      `${base}/mqdefault.jpg`,
    ];
    if (!thumbnailUrl) return fallbackThumbs;
    return [thumbnailUrl, ...fallbackThumbs];
  }, [videoId, thumbnailUrl]);

  const [isPlayed, setIsPlayed] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbFailed, setThumbFailed] = useState(false);

  const normalizedStartSeconds = useMemo(() => {
    const seconds = Number(startSeconds);
    return Number.isFinite(seconds) && seconds > 0 ? Math.floor(seconds) : 0;
  }, [startSeconds]);

  const baseEmbedUrl = useMemo(() => {
    if (!videoId) return "";
    const startParam = normalizedStartSeconds > 0 ? `&start=${normalizedStartSeconds}` : "";
    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1${startParam}`;
  }, [videoId, normalizedStartSeconds]);

  const clickEmbedUrl = useMemo(() => {
    if (!autoplayOnClick) return baseEmbedUrl;
    const params = new URLSearchParams();
    params.set("autoplay", "1");
    if (muteOnAutoplay) params.set("mute", "1");
    return `${baseEmbedUrl}&${params.toString()}`;
  }, [baseEmbedUrl, autoplayOnClick, muteOnAutoplay]);

  /**
   * ✅ EN KRİTİK DEĞİŞİKLİK:
   * Başlangıçta iframe yok: src boş.
   * Böylece YouTube hiç yüklenmez (Google mantığı).
   */
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    setIsPlayed(false);
    setThumbIndex(0);
    setThumbFailed(false);
    setIframeSrc(""); // ✅ reset: yine ilk yükte iframe yok
  }, [videoId, normalizedStartSeconds]);

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
    setIsPlayed(true);
    setIframeSrc(clickEmbedUrl); // ✅ tıklayınca iframe eklenir + autoplay başlar
  }, [clickEmbedUrl]);

  if (!videoId) return null;

  const currentThumb = thumbs[thumbIndex];

  return (
    <div className={`relative aspect-video rounded-3xl overflow-hidden shadow-xl ${className}`}>
      {/* ✅ Google mantığı: iframe sadece oynatınca DOM’a girer */}
      {iframeSrc ? (
        <iframe
          src={iframeSrc}
          title={title}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : null}

      {/* ✅ Overlay: kullanıcı tıklayana kadar thumbnail */}
      {!isPlayed ? (
        <button
          type="button"
          onClick={handlePlay}
          onMouseEnter={handleWarmup}
          onFocus={handleWarmup}
          aria-label={resolvedPlayLabel}
          className="absolute inset-0 z-10 group flex items-center justify-center bg-slate-950 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          {!thumbFailed ? (
            <img
              src={currentThumb}
              alt={title}
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
              <span className="text-sm text-white/70">{previewErrorLabel}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center justify-center gap-4">
            <span className="drop-shadow-2xl transition-transform duration-200 group-hover:scale-105 motion-reduce:transition-none" aria-hidden="true">
              <Play size={64} fill="currentColor" strokeWidth={1.5} />
            </span>
            <span className="rounded-2xl bg-white/20 px-6 py-3 text-base font-semibold shadow-lg backdrop-blur-md">
              {resolvedPlayLabel}
            </span>
            <span className="sr-only">{title}</span>
          </div>
        </button>
      ) : null}
    </div>
  );
}
