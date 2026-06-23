"use client";

import { useMemo, useState } from "react";
import { Check, PlayCircle, SlidersHorizontal } from "lucide-react";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

const VIDEO_FILTERS = [
  {
    id: "all",
    label: "Все",
    matches: () => true,
  },
  {
    id: "led",
    label: "LED Экран",
    matches: (text) => text.includes("led"),
  },
  {
    id: "stage",
    label: "Сцена",
    matches: (text) =>
      text.includes("сцена") || text.includes("подиум") || text.includes("ферма"),
  },
  {
    id: "tent",
    label: "Тент / Дом",
    matches: (text) => text.includes("тент") || text.includes("дом"),
  },
  {
    id: "corporate",
    label: "Корпоратив",
    matches: (text) =>
      text.includes("корпоратив") ||
      text.includes("гала") ||
      text.includes("запуск") ||
      text.includes("совещани") ||
      text.includes("выставк") ||
      text.includes("конгресс"),
  },
  {
    id: "sound-light",
    label: "Звук и свет",
    matches: (text) =>
      text.includes("звук") ||
      text.includes("свет") ||
      text.includes("проекци") ||
      text.includes("лазер"),
  },
  {
    id: "esports",
    label: "Киберспорт",
    matches: (text) => text.includes("киберспорт") || text.includes("pubg"),
  },
];

function searchableText(video) {
  return [video.title, video.description, ...(video.services ?? [])].join(" ").toLowerCase();
}

function ProjectVideoCard({ video, index }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-3 shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-white/[0.075]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.16),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-black">
        <LazyVideoEmbed
          videoId={video.id}
          title={video.title}
          thumbnailUrl={video.thumbnailUrl}
          startSeconds={video.startSeconds}
          locale="ru"
          className="rounded-[1.4rem]"
        />
        <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs font-black text-white backdrop-blur">
          <PlayCircle className="h-4 w-4" />
          Видео {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div className="relative p-5">
        <h2 className="text-xl font-black leading-tight text-white md:text-2xl">{video.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">{video.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Услуги в этом видео">
          {video.services.map((service) => (
            <li key={service} className="rounded-full border border-blue-300/20 bg-blue-500/10 px-3 py-1 text-xs font-black text-blue-100">
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function VideoGallery({ videos }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterSummaries = useMemo(
    () =>
      VIDEO_FILTERS.map((filter) => ({
        ...filter,
        count: videos.filter((video) => filter.matches(searchableText(video))).length,
      })),
    [videos],
  );

  const filteredVideos = useMemo(() => {
    const selectedFilter = VIDEO_FILTERS.find((filter) => filter.id === activeFilter) ?? VIDEO_FILTERS[0];
    return videos.filter((video) => selectedFilter.matches(searchableText(video)));
  }, [activeFilter, videos]);

  return (
    <>
      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-slate-300 shadow-xl shadow-black/10 backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-blue-100">
              <SlidersHorizontal className="h-4 w-4" />
              Фильтр проектов
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">
              {filteredVideos.length}/{videos.length} видео
            </span>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end" aria-label="Фильтры видеопроектов">
            {filterSummaries.map((filter) => {
              const isActive = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`inline-flex min-h-[36px] items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-black transition ${
                    isActive
                      ? "border-blue-200 bg-blue-300 text-slate-950 shadow-lg shadow-blue-950/20"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-blue-200/50 hover:bg-white/10"
                  }`}
                >
                  {isActive ? <Check className="h-3.5 w-3.5" /> : null}
                  {filter.label}
                  <span className={isActive ? "text-slate-700" : "text-slate-400"}>{filter.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {filteredVideos.map((video, index) => (
          <ProjectVideoCard key={video.id} video={video} index={index} />
        ))}
      </div>
    </>
  );
}
