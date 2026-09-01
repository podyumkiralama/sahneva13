// components/StickyVideoRail.jsx
"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play } from "lucide-react";
import DeferredHydration from "@/components/DeferredHydration.client";

const VIDEOS = [
  {
    id: "173gBurWSRQ",
    title:
      "Sahneva Organizasyon – LED Ekran podyum sahne kurulumu  & Sahne Kurulum Öncesi",
    description: "Backstage, sahne kurulumu ve hazırlık görüntüleri.",
    thumbnail: "https://img.youtube.com/vi/173gBurWSRQ/hqdefault.jpg",
  },
  {
    id: "4ygMbL4FDRc",
    title: "Sahneva Organizasyon – LED Ekran podyum çadır & Sahne Kurulum",
    description: "LED ekran kurulum ve sahne ışıklandırma süreci.",
    thumbnail: "https://img.youtube.com/vi/4ygMbL4FDRc/hqdefault.jpg",
  },
  {
    id: "JNzGlNzNRuk",
    title: "Sahneva Organizasyon – LED Ekran Çadır podyum & Sahne Kurulum",
    description: "Podyum Sahne dom çadır kiralama kurulum süreci.",
    thumbnail: "https://img.youtube.com/vi/JNzGlNzNRuk/hqdefault.jpg",
  },
  {
    id: "_9Q7v0ZL304",
    title:
      "Sahneva Organizasyon – LED Ekran Çadır Masa sandalye podyum kiralama ",
    description: "Podyum Sahne masa sandalye çadır kiralama kurulum süreci.",
    thumbnail: "https://img.youtube.com/vi/_9Q7v0ZL304/hqdefault.jpg",
  },
  {
    id: "ah4ORjaQSMA",
    title:
      "Üniversite Mezuniyet Töreni Organizasyonu | Sahne, LED Ekran ve Ses–Işık Prodüksiyon",
    description:
      "Üniversite mezuniyet törenleri için profesyonel sahne, LED ekran, ses–ışık sistemleri ve tüm teknik prodüksiyon altyapısını sağlayarak kurumlara eksiksiz bir mezuniyet deneyimi sunuyoruz",
    thumbnail: "https://img.youtube.com/vi/ah4ORjaQSMA/hqdefault.jpg",
  },
  {
    id: "c72ILTyJH4A",
    title:
      "Helal Fuarı Organizasyonu | Sahneva Profesyonel Sahne, LED Ekran ve Teknik Prodüksiyon",
    description:
      "Helal Fuarı kapsamında gerçekleştirilen etkinlik ve organizasyon alanlarının sahne, LED ekran, ses–ışık ve teknik prodüksiyon kurulumlarını Sahneva olarak profesyonel ekiplerimizle gerçekleştirdik.",
    thumbnail: "https://img.youtube.com/vi/c72ILTyJH4A/hqdefault.jpg",
  },
  {
    id: "egd21AA1dZ0",
    title:
      "Ankara Gençlik Festivali Organizasyonu | Sahneva Sahne – LED Ekran – Teknik Prodüksiyon",
    description:
      "Ankara Gençlik Festivali için sahne, LED ekran, ses–ışık sistemleri ve tüm teknik prodüksiyon altyapısını Sahneva olarak profesyonel ekiplerimizle sağladık.",
    thumbnail: "https://img.youtube.com/vi/egd21AA1dZ0/hqdefault.jpg",
  },
  {
    id: "tyb1lG9KtiA",
    title:
      "Çadır Kurulumu Organizasyonu | Sahneva Profesyonel Etkinlik Çadırı & Teknik Altyapı",
    description:
      "Etkinlik, fuar, festival, kurumsal organizasyon, düğün, açılış ve özel proje alanlarında profesyonel çadır kurulumu hizmeti sunuyoruz.",
    thumbnail: "https://img.youtube.com/vi/tyb1lG9KtiA/hqdefault.jpg",
  },
  {
    id: "1R5Av0x5ouA",
    title:
      "Sahne Işık Şov | Sahneva Profesyonel Işık Tasarımı & Etkinlik Prodüksiyonu",
    description:
      "Konserler, festivaller, kurumsal etkinlikler, açılış törenleri ve gösteriler için profesyonel sahne ışık şovları hazırlıyoruz.",
    thumbnail: "https://img.youtube.com/vi/1R5Av0x5ouA/hqdefault.jpg",
  },
  {
    id: "HNDZ-wYVKLw",
    title:
      "Şirket Etkinliği & Lansman Organizasyonu | Profesyonel Sahne Kurulumu",
    description:
      "Kurumsal etkinlikler, lansmanlar, toplantılar, ödül törenleri ve marka etkinlikleri için profesyonel sahne, LED ekran, ses–ışık ve teknik prodüksiyon hizmeti sunuyoruz.",
    thumbnail: "https://img.youtube.com/vi/HNDZ-wYVKLw/hqdefault.jpg",
  },
];

const RUSSIAN_VIDEO_TEXT = {
  "173gBurWSRQ": {
    title: "Монтаж сцены, подиума и LED-экрана",
    description: "Закулисные кадры монтажа сцены и подготовки площадки.",
  },
  "4ygMbL4FDRc": {
    title: "Монтаж LED-экрана, подиума и шатра",
    description: "Установка LED-экрана и подготовка сценического освещения.",
  },
  JNzGlNzNRuk: {
    title: "Сцена, LED-экран и шатровая конструкция",
    description: "Монтаж подиума, сцены и купольного шатра для мероприятия.",
  },
  _9Q7v0ZL304: {
    title: "Подготовка площадки со сценой, LED-экраном и шатром",
    description: "Монтаж сцены, подиума и шатра, установка столов и стульев.",
  },
  ah4ORjaQSMA: {
    title: "Техническое обеспечение выпускной церемонии",
    description: "Сцена, LED-экран, звук и свет для университетской выпускной церемонии.",
  },
  c72ILTyJH4A: {
    title: "Сцена и LED-экран для выставки Halal Expo",
    description: "Монтаж сцены, LED-экрана, звука и света на выставочной площадке.",
  },
  egd21AA1dZ0: {
    title: "Техническое обеспечение молодёжного фестиваля в Анкаре",
    description: "Сцена, LED-экран, звук, свет и техническая инфраструктура фестиваля.",
  },
  tyb1lG9KtiA: {
    title: "Монтаж шатра и технической инфраструктуры",
    description: "Установка шатра для мероприятий, выставок, фестивалей и специальных проектов.",
  },
  "1R5Av0x5ouA": {
    title: "Сценическое световое шоу",
    description: "Световой дизайн для концертов, фестивалей, церемоний и представлений.",
  },
  "HNDZ-wYVKLw": {
    title: "Сцена для корпоративного мероприятия и презентации",
    description: "Сцена, LED-экран, звук и свет для корпоративной программы.",
  },
};

const RUSSIAN_VIDEOS = VIDEOS.map((video) => ({
  ...video,
  ...RUSSIAN_VIDEO_TEXT[video.id],
}));

const INITIAL_POSITION = { x: -24, y: -24 };

function StickyVideoRailInner({
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
  role,
  locale = "tr",
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [position, setPosition] = useState(INITIAL_POSITION);
  const [dragging, setDragging] = useState(false);

  const dragRef = useRef(null);
  const startPosRef = useRef({ mouseX: 0, mouseY: 0, x: 0, y: 0 });
  const dialogRef = useRef(null);
  const dialogCloseButtonRef = useRef(null);
  const dialogOpenerRef = useRef(null);
  const expandButtonRef = useRef(null);
  const minimizedButtonRef = useRef(null);
  const lastExternalFocusRef = useRef(null);
  const dialogReturnModeRef = useRef("opener");
  const scrollYRef = useRef(0);
  const headingId = useId();
  const descriptionId = useId();

  const computedHeadingId =
    ariaLabelledby ?? `sticky-video-rail-heading-${headingId}`;
  const computedDescriptionId =
    ariaDescribedby ?? `sticky-video-rail-description-${descriptionId}`;
  const computedRole =
    role ?? (ariaLabel || ariaLabelledby ? "region" : undefined);

  const isEn = locale === "en";
  const isRu = locale === "ru";
  const videoCopy = isEn
    ? {
        title: "Sahneva Video Gallery",
        description:
          "A draggable, expandable video player to watch Sahneva's featured videos and switch between clips in the playlist.",
        watch: "Watch Videos",
        open: "Open",
        openPlayer: "Open video player",
        movePlayer: "Move the video player. Use the arrow keys to reposition it.",
        collapse: "Collapse video player",
        collapseShort: "Collapse",
        minimize: "Minimize video player",
        minimizeShort: "Minimize",
        close: "Close video player",
        closeShort: "Close",
        clickToPlay: "Click to play",
        playlist: "Playlist",
        otherVideos: "Other videos",
        singleVideo: "Only one video is currently available.",
        videoSelection: "Video selection",
        expand: "Expand video",
        expandShort: "EXPAND",
        playerTitle: "Sahneva video player",
      }
    : isRu
      ? {
          title: "Видеогалерея Sahneva",
          description:
            "Перетаскиваемый видеоплеер с возможностью разворачивания и выбора других роликов из списка.",
          watch: "Смотреть видео",
          open: "Открыть",
          openPlayer: "Открыть видеоплеер",
          movePlayer:
            "Переместите видеоплеер. Для изменения положения используйте клавиши со стрелками.",
          collapse: "Уменьшить видеоплеер",
          collapseShort: "Уменьшить",
          minimize: "Свернуть видеоплеер",
          minimizeShort: "Свернуть",
          close: "Закрыть видеоплеер",
          closeShort: "Закрыть",
          clickToPlay: "Нажмите для воспроизведения",
          playlist: "Плейлист",
          otherVideos: "Другие видео",
          singleVideo: "Сейчас доступно только одно видео.",
          videoSelection: "Выбор видео",
          expand: "Развернуть видео",
          expandShort: "РАЗВЕРНУТЬ",
          playerTitle: "Видеоплеер Sahneva",
        }
      : {
          title: "Sahneva Video Galerisi",
          description:
            "Sahneva'nın öne çıkan videolarını oynatmak ve listedeki diğer kliplere geçiş yapmak için sürüklenebilir, açılır bir oynatıcı.",
          watch: "Videoları Görüntüle",
          open: "Aç",
          openPlayer: "Video oynatıcıyı aç",
          movePlayer:
            "Video oynatıcıyı taşı. Ok tuşlarıyla yeniden konumlandırabilirsiniz.",
          collapse: "Video oynatıcıyı küçült",
          collapseShort: "Küçült",
          minimize: "Video oynatıcıyı simge durumuna küçült",
          minimizeShort: "Simge",
          close: "Video oynatıcıyı kapat",
          closeShort: "Kapat",
          clickToPlay: "Oynatmak için tıklayın",
          playlist: "Oynatma Listesi",
          otherVideos: "Diğer videolar",
          singleVideo: "Şu anda sadece tek video var.",
          videoSelection: "Video seçimi",
          expand: "Videoyu büyüt",
          expandShort: "BÜYÜT",
          playerTitle: "Sahneva video oynatıcı",
        };
  const accessibleTitle = videoCopy.title;
  const accessibleDescription = videoCopy.description;
  const watchVideosLabel = videoCopy.watch;
  const openLabel = videoCopy.open;
  const openPlayerAriaLabel = videoCopy.openPlayer;
  const movePlayerAriaLabel = videoCopy.movePlayer;

  const videos = locale === "ru" ? RUSSIAN_VIDEOS : VIDEOS;
  const currentVideo = videos[activeIndex];
  const playlistForExpanded = videos.filter((_, i) => i !== activeIndex);

  // İlk mount + mobile tespiti
  useEffect(() => {
    setIsMounted(true);
    setIsOpen(true);
    setIsMinimized(true);
  }, []);

  const rememberExternalFocus = (event) => {
    const previousTarget = event.relatedTarget;
    if (
      previousTarget instanceof HTMLElement &&
      previousTarget.isConnected &&
      !event.currentTarget.contains(previousTarget)
    ) {
      lastExternalFocusRef.current = previousTarget;
    }
  };

  const handlePlay = () => {
    setHasStarted(true);
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleChangeVideo = (index) => {
    setActiveIndex(index);
    setHasStarted(false);
  };

  const handleExpand = (event) => {
    dialogOpenerRef.current = event.currentTarget;
    dialogReturnModeRef.current = "opener";
    setIsExpanded(true);
    setIsMinimized(false);
  };

  const handleCollapseFromExpanded = () => {
    dialogReturnModeRef.current = "opener";
    setIsExpanded(false);
  };

  const handleClose = () => {
    dialogReturnModeRef.current = "external";
    setIsOpen(false);
    setIsExpanded(false);
    setIsMinimized(false);
  };

  const handleToggleMinimize = () => {
    if (isExpanded) {
      dialogReturnModeRef.current = "minimized";
      setIsExpanded(false);
      setIsMinimized(true);
      return;
    }
    setIsMinimized((v) => !v);
  };

  // Expanded player is a true modal: keep keyboard and virtual focus inside,
  // prevent background scrolling, and return focus when the modal closes.
  useEffect(() => {
    if (!isMounted || !isOpen || !isExpanded || !dialogRef.current) {
      return undefined;
    }

    const dialog = dialogRef.current;
    const body = document.body;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      overflow: body.style.overflow,
      width: body.style.width,
    };
    const backgroundElements = Array.from(body.children)
      .filter((element) => element !== dialog)
      .map((element) => ({
        element,
        wasInert: element.hasAttribute("inert"),
      }));
    scrollYRef.current = window.scrollY;

    const getFocusableElements = () =>
      Array.from(
        dialog.querySelectorAll(
          'a[href], button:not([disabled]), iframe, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (element) =>
          element instanceof HTMLElement &&
          !element.hidden &&
          element.getAttribute("aria-hidden") !== "true" &&
          element.getAttribute("inert") === null
      );

    const focusInitialControl = () => {
      (dialogCloseButtonRef.current ?? getFocusableElements()[0] ?? dialog).focus();
    };

    const lockFrame = window.requestAnimationFrame(() => {
      for (const { element } of backgroundElements) {
        element.setAttribute("inert", "");
      }
      body.style.position = "fixed";
      body.style.top = `-${scrollYRef.current}px`;
      body.style.overflow = "hidden";
      body.style.width = "100%";
      focusInitialControl();
    });

    const handleDialogKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        dialogReturnModeRef.current = "opener";
        setIsExpanded(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (!focusableElements.length) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !dialog.contains(current))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || !dialog.contains(current))) {
        event.preventDefault();
        first.focus();
      }
    };

    const keepFocusInsideDialog = (event) => {
      if (!dialog.contains(event.target)) focusInitialControl();
    };

    document.addEventListener("keydown", handleDialogKeyDown, true);
    document.addEventListener("focusin", keepFocusInsideDialog, true);

    return () => {
      window.cancelAnimationFrame(lockFrame);
      document.removeEventListener("keydown", handleDialogKeyDown, true);
      document.removeEventListener("focusin", keepFocusInsideDialog, true);
      for (const { element, wasInert } of backgroundElements) {
        if (!wasInert) element.removeAttribute("inert");
      }
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.overflow = previousBodyStyles.overflow;
      body.style.width = previousBodyStyles.width;
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollYRef.current);
      root.style.scrollBehavior = previousScrollBehavior;

      window.requestAnimationFrame(() => {
        const returnTarget =
          dialogReturnModeRef.current === "minimized"
            ? minimizedButtonRef.current
            : dialogReturnModeRef.current === "opener"
              ? expandButtonRef.current ?? dialogOpenerRef.current
              : lastExternalFocusRef.current;

        if (returnTarget instanceof HTMLElement && returnTarget.isConnected) {
          returnTarget.focus();
        }
      });
    };
  }, [isExpanded, isMounted, isOpen]);

  // Preserve the compact player's existing Escape-to-dismiss behavior. The
  // expanded modal handles Escape separately so it can restore focus safely.
  useEffect(() => {
    if (!isMounted || !isOpen || isExpanded) return undefined;

    const handleCompactEscape = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      setIsMinimized(false);
    };

    window.addEventListener("keydown", handleCompactEscape);
    return () => window.removeEventListener("keydown", handleCompactEscape);
  }, [isExpanded, isMounted, isOpen]);

  // Drag hareketi (dependency fix: position eklendi)
  useEffect(() => {
    if (!dragging || !dragRef.current) return;

    const dragRafRef = { current: null };
    const pendingPosition = { ...position };

    const handleMove = (e) => {
      e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const dx = clientX - startPosRef.current.mouseX;
      const dy = clientY - startPosRef.current.mouseY;

      pendingPosition.x = startPosRef.current.x + dx;
      pendingPosition.y = startPosRef.current.y + dy;

      if (dragRafRef.current) return;
      dragRafRef.current = requestAnimationFrame(() => {
        setPosition({ ...pendingPosition });
        dragRafRef.current = null;
      });
    };

    const handleUp = () => {
      if (dragRafRef.current) {
        cancelAnimationFrame(dragRafRef.current);
        dragRafRef.current = null;
      }
      setDragging(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("touchend", handleUp);

    return () => {
      if (dragRafRef.current) cancelAnimationFrame(dragRafRef.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [dragging, position]);

  const startDrag = (e) => {
    if (isExpanded) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startPosRef.current = {
      mouseX: clientX,
      mouseY: clientY,
      x: position.x,
      y: position.y,
    };
    setDragging(true);
  };

  if (!isMounted) return null;

  // =============== Tam ekran / sinema modu ===============
  if (isExpanded && isOpen) {
    return createPortal(
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="mobile-safe-dialog fixed inset-0 z-[80] flex flex-col items-center bg-black/90 px-2 py-2 backdrop-blur-sm sm:px-6"
        aria-modal="true"
        role="dialog"
        aria-labelledby={ariaLabel ? undefined : computedHeadingId}
        aria-label={ariaLabel}
        aria-describedby={computedDescriptionId}
      >
        <div className="sr-only">
          <h2 id={computedHeadingId}>{accessibleTitle}</h2>
          <p id={computedDescriptionId}>{accessibleDescription}</p>
        </div>

        {/* ÜST BAR */}
        <div className="w-full max-w-6xl flex justify-between items-center mb-4 bg-black/80 rounded-xl px-4 py-3 border border-white/20">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm sm:text-base">
              {accessibleTitle}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCollapseFromExpanded}
              aria-label={videoCopy.collapse}
              className="rail-control group"
              data-variant="primary"
            >
              <span className="text-lg">↘️</span>
              <span className="hidden sm:inline">{videoCopy.collapseShort}</span>
            </button>
            <button
              type="button"
              onClick={handleToggleMinimize}
              aria-label={videoCopy.minimize}
              className="rail-control group"
              data-variant="muted"
            >
              <span className="text-lg">🗕</span>
              <span className="hidden sm:inline">{videoCopy.minimizeShort}</span>
            </button>
            <button
              ref={dialogCloseButtonRef}
              type="button"
              onClick={handleClose}
              aria-label={videoCopy.close}
              className="rail-control group"
              data-variant="danger"
            >
              <span className="text-lg">✕</span>
              <span className="hidden sm:inline">{videoCopy.closeShort}</span>
            </button>
          </div>
        </div>

        {/* İÇERİK */}
        <div className="relative w-full max-w-6xl flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Ana video */}
          <div className="flex-1 bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="relative w-full aspect-video">
              {!hasStarted && (
                <button
                  type="button"
                  onClick={handlePlay}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white z-10 hover:bg-black/30 transition-colors group"
                >
                  <img
                    src={currentVideo.thumbnail}
                    alt={currentVideo.title}
                    width="480"
                    height="270"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                  />
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 shadow-xl mb-4 group-hover:scale-110 transition-transform">
                    <span className="ml-1 text-3xl text-red-500">▶</span>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold px-4 text-center">
                    {currentVideo.title}
                  </p>
                  <p className="mt-2 text-sm text-white/80 max-w-xl px-4 text-center">
                    {videoCopy.clickToPlay}
                  </p>
                </button>
              )}
              {hasStarted && (
                <iframe
                  title={currentVideo.title || videoCopy.playerTitle}
                  src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&mute=0&rel=0&modestbranding=1&controls=1&playsinline=1`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )}
            </div>
          </div>

          {/* Playlist (GENİŞ) */}
          <aside className="w-full md:w-64 lg:w-72 bg-slate-900/90 border border-white/10 rounded-2xl shadow-xl flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {videoCopy.playlist}
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {videoCopy.otherVideos}
                  </p>
                </div>
              </div>
              <span className="text-xs bg-violet-500 text-white px-2 py-1 rounded-full">
                {playlistForExpanded.length}
              </span>
            </div>

            <div
              className="flex-1 overflow-y-auto custom-scroll px-1 py-1"
              role="radiogroup"
              aria-label={videoCopy.videoSelection}
            >
              {playlistForExpanded.length === 0 && (
                <p className="px-4 py-3 text-xs text-slate-400">
                  {videoCopy.singleVideo}
                </p>
              )}

              {playlistForExpanded.map((video) => {
                const index = videos.findIndex((v) => v.id === video.id);
                const isActive = index === activeIndex;

                return (
                  <label
                    key={video.id}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left text-slate-100 text-sm transition-colors border-b border-white/5 last:border-b-0 cursor-pointer focus-within:ring-2 focus-within:ring-violet-400 focus-within:ring-inset rounded-sm ${
                      isActive
                        ? "bg-violet-500/20 border-r-2 border-violet-500"
                        : "hover:bg-slate-800/80 border-r-2 border-transparent"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sticky-video-expanded"
                      className="sr-only"
                      checked={isActive}
                      onChange={() => handleChangeVideo(index)}
                    />
                    <div className="relative w-14 h-9 flex-shrink-0 rounded-md overflow-hidden bg-black">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        width="160"
                        height="90"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <span className="text-white text-xs">▶</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate font-medium text-xs sm:text-sm">
                        {video.title}
                      </p>
                      <p className="hidden sm:block text-xs text-slate-400 truncate">
                        {video.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </div>
          </aside>
        </div>
      </div>,
      document.body
    );
  }

  // =============== Minimize mod (simge) ===============
  if (isOpen && isMinimized) {
    return (
      <button
        ref={minimizedButtonRef}
        type="button"
        onFocus={rememberExternalFocus}
        onClick={() => {
          setIsMinimized(false);
          setIsExpanded(false);
          setIsOpen(true);
        }}
        className="mobile-fixed-bottom-end fixed bottom-4 right-4 z-[60] flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3 text-xs text-white shadow-lg transition-all duration-200 hover:from-purple-700 hover:to-violet-700 sm:bottom-6 sm:right-6 sm:text-sm group"
        aria-label={`${watchVideosLabel} - ${openLabel} - ${openPlayerAriaLabel}`}
      >
        <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs group-hover:scale-110 transition-transform" aria-hidden="true">
          <Play size={14} fill="currentColor" strokeWidth={2} />
        </span>
        <span className="hidden sm:inline font-medium">{watchVideosLabel}</span>
        <span className="sm:hidden font-medium">{openLabel}</span>
      </button>
    );
  }

  // =============== Kapalıysa ===============
  if (!isOpen) return null;

  // =============== Küçük sticky mod ===============
  return (
    <div
      ref={dragRef}
      onFocusCapture={rememberExternalFocus}
      className="mobile-fixed-bottom-end fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6"
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      role={computedRole}
      aria-labelledby={ariaLabel ? undefined : computedHeadingId}
      aria-label={ariaLabel}
      aria-describedby={computedDescriptionId}
    >
      <div className="sr-only">
        <h2 id={computedHeadingId}>{accessibleTitle}</h2>
        <p id={computedDescriptionId}>{accessibleDescription}</p>
      </div>

      <div className="w-[280px] overflow-hidden rounded-2xl border border-white/20 bg-slate-900/95 shadow-2xl backdrop-blur-lg sm:w-[340px]">
        {/* Başlık + drag alanı */}
        <div className="flex items-center justify-between px-4 py-3 cursor-move select-none bg-gradient-to-r from-slate-800 to-slate-900 border-b border-white/10">
          <button
            type="button"
            className="flex items-center gap-2 flex-1 cursor-move rounded text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-inset"
            aria-label={movePlayerAriaLabel}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onKeyDown={(e) => {
              const STEP = 40;
              const moves = {
                ArrowLeft: { x: -STEP, y: 0 },
                ArrowRight: { x: STEP, y: 0 },
                ArrowUp: { x: 0, y: -STEP },
                ArrowDown: { x: 0, y: STEP },
              };
              if (!moves[e.key]) return;
              e.preventDefault();
              const { x, y } = moves[e.key];
              setPosition((prev) => ({ x: prev.x + x, y: prev.y + y }));
            }}
          >
            <span className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {accessibleTitle}
            </span>
          </button>
          <div className="flex items-center gap-1">
            <button
              ref={expandButtonRef}
              type="button"
              onClick={handleExpand}
              aria-label={videoCopy.expand}
              className="rail-control group"
              data-variant="primary"
            >
              <span className="group-hover:scale-110 transition-transform text-sm">
                ⤢ {videoCopy.expandShort}
              </span>
            </button>
            <button
              type="button"
              onClick={handleToggleMinimize}
              aria-label={videoCopy.minimize}
              className="rail-control group"
              data-variant="muted"
            >
              <span className="group-hover:scale-110 transition-transform">🗕</span>
            </button>
            <button
              type="button"
              onClick={handleClose}
              aria-label={videoCopy.close}
              className="rail-control group"
              data-variant="danger"
            >
              <span className="group-hover:scale-110 transition-transform">✕</span>
            </button>
          </div>
        </div>

        {/* Video alanı */}
        <div className="relative w-full aspect-video bg-black">
          {!hasStarted && (
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white z-10 hover:bg-black/30 transition-colors group"
            >
              <img
                src={currentVideo.thumbnail}
                alt={currentVideo.title}
                width="640"
                height="360"
                className="absolute inset-0 w-full h-full object-cover -z-10"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl mb-3 group-hover:scale-110 transition-transform">
                <span className="ml-1 text-2xl text-red-500">▶</span>
              </div>
              <p className="text-sm font-semibold px-4 text-center line-clamp-2">
                {currentVideo.title}
              </p>
              <p className="mt-2 text-xs text-white/80 px-4 text-center">
                {videoCopy.clickToPlay}
              </p>
            </button>
          )}

          {hasStarted && (
            <iframe
              title={currentVideo.title || videoCopy.playerTitle}
              src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&playsinline=1`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>

        {/* Açılır mini liste */}
        <details className="group border-t border-white/10">
          <summary className="flex items-center justify-between px-4 py-3 text-sm text-slate-200 cursor-pointer select-none hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">{videoCopy.otherVideos}</span>
              <span className="text-xs bg-violet-500 text-white px-2 py-1 rounded-full">
                {videos.length - 1}
              </span>
            </div>
            <span className="text-lg group-open:rotate-180 transition-transform duration-200">
              ⌄
            </span>
          </summary>

          <div
            className="max-h-48 overflow-y-auto custom-scroll pb-2 bg-slate-800/50 px-1"
            role="radiogroup"
            aria-label={videoCopy.videoSelection}
          >
            {videos.map((video, idx) => {
              const isActive = idx === activeIndex;

              return (
                <label
                  key={video.id}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors border-r-2 cursor-pointer ${
                    isActive
                      ? "bg-violet-500/20 border-violet-500"
                      : "hover:bg-slate-700/50 border-transparent"
                  } focus-within:ring-2 focus-within:ring-violet-400 focus-within:ring-inset rounded-sm`}
                >
                  <input
                    type="radio"
                    name="sticky-video-mini"
                    className="sr-only"
                    checked={isActive}
                    onChange={() => handleChangeVideo(idx)}
                  />
                  <div className="relative w-12 h-8 rounded-md overflow-hidden bg-black flex-shrink-0">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      width="160"
                      height="90"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-sm text-white">▶</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-100 font-medium line-clamp-2 text-left">
                      {video.title}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </details>
      </div>
    </div>
  );
}

/**
 * Dışa açılan bileşen:
 * - DeferredHydration ile geç hydrate olur
 * - CLS etkilemez (fixed)
 */
export default function StickyVideoRail({
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
  role,
  locale = "tr",
  ...props
}) {
  return (
    <DeferredHydration
      rootMargin="600px"
      idleTimeout={5000}
      fallback={null}
      as="div"
      {...props}
    >
      <StickyVideoRailInner
        ariaLabel={ariaLabel}
        ariaLabelledby={ariaLabelledby}
        ariaDescribedby={ariaDescribedby}
        role={role}
        locale={locale}
      />
    </DeferredHydration>
  );
}
