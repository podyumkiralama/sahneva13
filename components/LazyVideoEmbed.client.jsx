"use client";

import dynamic from "next/dynamic";

const VideoEmbed = dynamic(() => import("@/components/VideoEmbed.client"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 flex items-center justify-center bg-slate-950 text-white"
      role="status"
      aria-label="Video yükleniyor"
    >
      <span className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold">
        Video hazırlanıyor
      </span>
    </div>
  ),
});

export default function LazyVideoEmbed(props) {
  return <VideoEmbed {...props} />;
}
