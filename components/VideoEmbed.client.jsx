"use client";

import { useState } from "react";

export default function VideoEmbed({ videoId, title }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;

  if (isLoaded) {
    return (
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className="absolute inset-0 flex h-full w-full items-center justify-center bg-gray-900 text-white"
      aria-label={`${title} videosunu yükle`}
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.6)), url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="rounded-2xl bg-white/15 px-4 py-2 text-sm font-semibold shadow-lg">
        Videoyu Yükle
      </span>
    </button>
  );
}
