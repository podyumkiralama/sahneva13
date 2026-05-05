"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useSearchIndex from "@/lib/useSearchIndex";

const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white";

const MAX_RESULTS = 6;

const filterRoutes = (routes, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return routes.slice(0, MAX_RESULTS);

  return routes
    .filter((route) => {
      const labelMatch = route.label.toLowerCase().includes(q);
      const keywordMatch = route.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(q),
      );
      return labelMatch || keywordMatch;
    })
    .slice(0, MAX_RESULTS);
};

export default function NavbarSearchDropdown({ locale = "tr" }) {
  const isEn = locale === "en";
  const searchButtonLabel = isEn ? "Search" : "Ara";
  const searchAriaLabel = isEn ? "Search the site" : "Site içinde arama";
  const searchInputLabel = isEn ? "Search the site" : "Site içinde arama yapın";
  const searchPlaceholder = isEn ? "E.g. LED wall rental..." : "Örn: LED ekran kiralama...";
  const searchHint = isEn
    ? "Press Enter to open the search page."
    : "Enter ile arama sayfasına gidebilirsiniz.";
  const noResults = isEn ? "No matching page found." : "Eşleşen bir sayfa bulunamadı.";
  const viewAllLabel = isEn ? "View all results" : "Tüm sonuçları gör";

  const router = useRouter();
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { routes } = useSearchIndex(open);

  const results = useMemo(() => filterRoutes(routes, query), [routes, query]);
  const trimmedQuery = query.trim();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = trimmedQuery
      ? `/search?q=${encodeURIComponent(trimmedQuery)}`
      : "/search";
    closeSearch({ restoreFocus: false });
    router.push(target);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        className={`group inline-flex min-h-[44px] w-44 items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/90 px-3 text-neutral-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-100 hover:text-blue-800 xl:w-64 2xl:w-72 nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:text-slate-100 nav-dark:hover:bg-white/15 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
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
            <X aria-hidden="true" className="h-5 w-5 shrink-0 text-neutral-600 nav-dark:text-slate-200" />
          ) : (
            <Search aria-hidden="true" className="h-5 w-5 shrink-0 text-neutral-600 nav-dark:text-slate-200" />
          )}
          <span className="truncate text-left text-base font-medium text-neutral-600 nav-dark:text-slate-200">
            {searchButtonLabel}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="hidden h-8 min-w-8 items-center justify-center rounded-xl bg-white px-2 text-base font-extrabold text-neutral-500 shadow-sm ring-1 ring-black/5 xl:inline-flex nav-dark:bg-white/10 nav-dark:text-slate-300 nav-dark:ring-white/10"
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
          <form onSubmit={handleSubmit} className="border-b border-neutral-100 p-4 nav-dark:border-white/10">
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
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-9 pr-3 text-sm font-medium text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-600/20 nav-dark:border-white/10 nav-dark:bg-white/[0.06] nav-dark:text-white nav-dark:placeholder:text-slate-500"
              />
            </div>
            <p className="mt-2 text-xs font-medium text-neutral-500 nav-dark:text-slate-400">
              {searchHint}
            </p>
          </form>

          <div className="max-h-[320px] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-4 py-6 text-sm font-medium text-neutral-500 nav-dark:text-slate-400">
                {noResults}
              </div>
            ) : (
              <ul className="divide-y divide-neutral-100 nav-dark:divide-white/10">
                {results.map((route) => (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      prefetch={false}
                      onClick={() => closeSearch()}
                      className={`flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
                    >
                      <span className="text-lg" aria-hidden="true">
                        {route.icon}
                      </span>
                      <span className="font-bold text-neutral-900 nav-dark:text-white">
                        {route.label}
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
              className={`inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 no-underline transition-colors hover:text-blue-800 nav-dark:text-blue-300 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
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
