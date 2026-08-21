"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useSearchIndex from "@/lib/useSearchIndex";
import { SEARCH_TYPES, highlightSegments, searchEntries } from "@/lib/search/core";

const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white";

const MAX_RESULTS = 7;

const WEB_MCP_SEARCH_FORM_PROPS = {
  toolname: "searchSite",
  tooldescription: "Search Sahneva pages, services, projects and blog content.",
};

const WEB_MCP_SEARCH_INPUT_PROPS = {
  toolparamdescription:
    "Search query for Sahneva services, event production pages, projects and blog articles.",
};

/**
 * Eslesen parcalari isaretler. Sunucudaki /search sayfasiyla ayni cekirdegi
 * kullanir; daha once buradaki filtre ayri yazilmisti ve `toLowerCase()`
 * kullandigi icin Turkce sorgularda ("IŞIK", "ruzgar") calismiyordu.
 */
function Highlighted({ text, query }) {
  if (!text) return null;

  return highlightSegments(text, query).map((segment, index) =>
    segment.match ? (
      <mark key={index} className="rounded bg-amber-100 px-0.5 text-inherit nav-dark:bg-amber-400/25 nav-dark:text-inherit">
        {segment.text}
      </mark>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  );
}

export default function NavbarSearchDropdown({ locale = "tr", compact = false }) {
  const isEn = locale === "en";
  const isZh = locale === "zh";
  const isDe = locale === "de";
  const searchButtonLabel = isEn ? "Search" : isZh ? "搜索" : isDe ? "Suche" : "Ara";
  const searchAriaLabel = isEn ? "Search the site" : isZh ? "站内搜索" : isDe ? "Website durchsuchen" : "Site içinde arama";
  const searchInputLabel = isEn ? "Search the site" : isZh ? "在网站内搜索" : isDe ? "Website durchsuchen" : "Site içinde arama yapın";
  const searchPlaceholder = isEn ? "E.g. LED wall rental..." : isZh ? "例如：LED屏幕租赁..." : isDe ? "z. B. LED-Wand mieten ..." : "Örn: LED ekran kiralama...";
  const searchHint = isEn
    ? "Press Enter to open the search page."
    : isZh
      ? "按 Enter 键打开搜索页面。"
      : isDe
        ? "Mit Enter gelangen Sie zur Suchseite."
        : "Enter ile arama sayfasına gidebilirsiniz.";
  const noResults = isEn ? "No matching page found." : isZh ? "未找到匹配的页面。" : isDe ? "Keine passende Seite gefunden." : "Eşleşen bir sayfa bulunamadı.";
  const viewAllLabel = isEn ? "View all results" : isZh ? "查看全部结果" : isDe ? "Alle Ergebnisse ansehen" : "Tüm sonuçları gör";

  const router = useRouter();
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { routes } = useSearchIndex(open);

  const trimmedQuery = query.trim();
  const results = useMemo(
    () => searchEntries(routes, trimmedQuery, { limit: MAX_RESULTS }),
    [routes, trimmedQuery],
  );

  // Ok tuslariyla gezinme: acilir listede klavye kullanicisi her sonuca
  // Tab'layarak inmek zorunda kalmasin.
  const [activeIndex, setActiveIndex] = useState(-1);
  const listRef = useRef(null);

  useEffect(() => {
    setActiveIndex(-1);
  }, [trimmedQuery]);

  const closeSearch = useCallback(({ restoreFocus = true } = {}) => {
    if (restoreFocus) {
      buttonRef.current?.focus();
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onClick = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        closeSearch({ restoreFocus: false });
      }
    };

    const onKey = (event) => {
      if (event.key === "Escape") closeSearch();
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [closeSearch, open]);

  useEffect(() => {
    const onSlashShortcut = (event) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if (isTyping) return;

      event.preventDefault();
      setOpen(true);
    };

    document.addEventListener("keydown", onSlashShortcut);
    return () => document.removeEventListener("keydown", onSlashShortcut);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ok tuslariyla bir sonuc secildiyse Enter arama sayfasina degil o sonuca gider.
    const selected = activeIndex >= 0 ? results[activeIndex] : null;
    const target = selected
      ? selected.href
      : trimmedQuery
        ? `/search?q=${encodeURIComponent(trimmedQuery)}`
        : "/search";

    closeSearch({ restoreFocus: false });
    router.push(target);
  };

  const handleInputKeyDown = (event) => {
    if (results.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % results.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? results.length - 1 : current - 1));
    }
  };

  // Secili sonucu gorunur tut (liste kaydirilabilir).
  useEffect(() => {
    if (activeIndex < 0) return;
    const option = listRef.current?.querySelectorAll("[data-search-option]")[activeIndex];
    option?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={`group inline-flex items-center justify-between rounded-xl border border-violet-100 bg-violet-50/90 text-neutral-700 shadow-sm transition-all duration-200 hover:border-violet-200 hover:bg-violet-100 hover:text-violet-800 nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:text-slate-100 nav-dark:hover:bg-white/15 nav-dark:hover:text-violet-200 ${compact ? "min-h-[40px] w-24 gap-1.5 px-2.5 xl:w-28" : "min-h-[44px] w-28 gap-2 px-3 xl:w-32"} ${FOCUS_RING_CLASS}`}
        aria-expanded={open ? "true" : "false"}
        aria-haspopup="dialog"
        title={searchButtonLabel}
        onClick={() => {
          if (open) {
            closeSearch({ restoreFocus: false });
            return;
          }
          setOpen(true);
        }}
      >
        <span className="flex min-w-0 items-center gap-2">
          {open ? (
            <X aria-hidden="true" className={`${compact ? "h-4 w-4" : "h-5 w-5"} shrink-0 text-neutral-600 nav-dark:text-slate-200`} />
          ) : (
            <Search aria-hidden="true" className={`${compact ? "h-4 w-4" : "h-5 w-5"} shrink-0 text-neutral-600 nav-dark:text-slate-200`} />
          )}
          <span className="truncate text-left text-sm font-bold text-neutral-600 nav-dark:text-slate-200">
            {searchButtonLabel}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="hidden h-7 min-w-7 items-center justify-center rounded-lg bg-white px-2 text-sm font-extrabold text-neutral-500 shadow-sm ring-1 ring-black/5 xl:inline-flex nav-dark:bg-white/10 nav-dark:text-slate-300 nav-dark:ring-white/10"
        >
          /
        </span>
        <span className="sr-only">{searchAriaLabel}</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-label={searchAriaLabel}
          className="absolute right-0 z-[90] mt-2 w-[min(480px,90vw)] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl nav-dark:border-white/10 nav-dark:bg-[#111827]"
        >
          <form
            action="/search"
            method="GET"
            onSubmit={handleSubmit}
            {...WEB_MCP_SEARCH_FORM_PROPS}
            className="border-b border-neutral-100 p-4 nav-dark:border-white/10"
          >
            <label htmlFor="navbar-search-input" className="sr-only">
              {searchInputLabel}
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500 nav-dark:text-slate-400"
                aria-hidden="true"
              />
              <input
                ref={inputRef}
                id="navbar-search-input"
                type="text"
                name="q"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleInputKeyDown}
                role="combobox"
                aria-expanded="true"
                aria-controls="navbar-search-results"
                aria-activedescendant={
                  activeIndex >= 0 ? `navbar-search-option-${activeIndex}` : undefined
                }
                autoComplete="off"
                placeholder={searchPlaceholder}
                {...WEB_MCP_SEARCH_INPUT_PROPS}
                className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-9 pr-3 text-sm font-medium text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-violet-300 focus:ring-2 focus:ring-violet-600/20 nav-dark:border-white/10 nav-dark:bg-white/[0.06] nav-dark:text-white nav-dark:placeholder:text-slate-500"
              />
            </div>
            <p className="mt-2 text-xs font-medium text-neutral-500 nav-dark:text-slate-400">
              {searchHint}
            </p>
          </form>

          <div ref={listRef} className="max-h-[360px] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-4 py-6 text-sm font-medium text-neutral-500 nav-dark:text-slate-400">
                {noResults}
              </div>
            ) : (
              <ul
                id="navbar-search-results"
                role="listbox"
                className="divide-y divide-neutral-100 nav-dark:divide-white/10"
              >
                {results.map((route, index) => (
                  <li key={route.href} role="presentation">
                    <Link
                      id={`navbar-search-option-${index}`}
                      data-search-option
                      role="option"
                      aria-selected={index === activeIndex}
                      href={route.href}
                      prefetch={false}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => closeSearch()}
                      className={`flex items-start gap-3 px-4 py-3 text-sm text-neutral-700 no-underline transition-colors hover:bg-violet-50 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 ${FOCUS_RING_CLASS} ${
                        index === activeIndex ? "bg-violet-50 nav-dark:bg-white/10" : ""
                      }`}
                    >
                      <span className="mt-0.5 text-lg" aria-hidden="true">
                        {route.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="font-bold text-neutral-900 nav-dark:text-white">
                            <Highlighted text={route.label} query={trimmedQuery} />
                          </span>
                          {SEARCH_TYPES[route.type] ? (
                            <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-bold text-neutral-600 nav-dark:bg-white/10 nav-dark:text-slate-300">
                              {SEARCH_TYPES[route.type].label}
                            </span>
                          ) : null}
                        </span>
                        {route.description ? (
                          <span className="mt-0.5 block line-clamp-2 text-xs leading-5 text-neutral-500 nav-dark:text-slate-400">
                            <Highlighted text={route.description} query={trimmedQuery} />
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-neutral-100 px-4 py-3 nav-dark:border-white/10">
            <Link
              href={trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search"}
              prefetch={false}
              onClick={() => closeSearch()}
              className={`inline-flex items-center gap-2 text-sm font-extrabold text-violet-700 no-underline transition-colors hover:text-violet-800 nav-dark:text-violet-300 nav-dark:hover:text-violet-200 ${FOCUS_RING_CLASS}`}
            >
              {viewAllLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
