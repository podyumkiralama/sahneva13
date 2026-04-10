"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSearchIndex from "@/lib/useSearchIndex";

const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white";

const MAX_RESULTS = 6;

const filterRoutes = (routes, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return routes.slice(0, MAX_RESULTS);

  return routes.filter((route) => {
    const labelMatch = route.label.toLowerCase().includes(q);
    const keywordMatch = route.keywords?.some((keyword) =>
      keyword.toLowerCase().includes(q),
    );
    return labelMatch || keywordMatch;
  }).slice(0, MAX_RESULTS);
};

export default function NavbarSearchDropdown({ locale = "tr" }) {
  const isEn = locale === "en";
  const searchButtonLabel = isEn ? "Search" : "Ara";
  const searchAriaLabel = isEn ? "Search the site" : "Site içinde arama";
  const searchInputLabel = isEn ? "Search the site" : "Site içinde arama yapın";
  const searchPlaceholder = isEn ? "E.g. LED wall rental..." : "Örn: LED ekran kiralama...";
  const searchHint = isEn
    ? "Press Enter to go to the search page."
    : "Enter ile arama sayfasına gidebilirsiniz.";
  const noResults = isEn ? "No matching page found." : "Eşleşen bir sayfa bulunamadı.";
  const viewAllLabel = isEn ? "View all results" : "Tüm sonuçları gör";
  const router = useRouter();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { routes } = useSearchIndex(open);

  const results = useMemo(() => filterRoutes(routes, query), [routes, query]);
  const trimmedQuery = query.trim();

  useEffect(() => {
    if (!open) return;

    const onClick = (event) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const target = trimmedQuery
      ? `/search?q=${encodeURIComponent(trimmedQuery)}`
      : "/search";
    setOpen(false);
    router.push(target);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-neutral-800 border border-transparent hover:border-neutral-200 hover:bg-neutral-50 transition-all duration-200 ${FOCUS_RING_CLASS}`}
        aria-label={searchAriaLabel}
        aria-expanded={open ? "true" : "false"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-lg" aria-hidden="true">
          🔍
        </span>
        <span className="hidden xl:inline">{searchButtonLabel}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-[min(480px,90vw)] rounded-2xl border border-neutral-200 bg-white shadow-2xl z-[80]">
          <form onSubmit={handleSubmit} className="p-4 border-b border-neutral-100">
            <label htmlFor="navbar-search-input" className="sr-only">
              {searchInputLabel}
            </label>
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                aria-hidden="true"
              >
                🔍
              </span>
              <input
                ref={inputRef}
                id="navbar-search-input"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-xl border border-neutral-200 bg-white py-2.5 pl-9 pr-3 text-sm text-neutral-800 focus-ring"
              />
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              {searchHint}
            </p>
          </form>

          <div className="max-h-[320px] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-4 py-6 text-sm text-neutral-500">
                {noResults}
              </div>
            ) : (
              <ul className="divide-y divide-neutral-100">
                {results.map((route) => (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-colors ${FOCUS_RING_CLASS}`}
                    >
                      <span className="text-lg" aria-hidden="true">
                        {route.icon}
                      </span>
                      <span className="font-semibold text-neutral-900">
                        {route.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t border-neutral-100 px-4 py-3">
            <Link
              href={trimmedQuery ? `/search?q=${encodeURIComponent(trimmedQuery)}` : "/search"}
              onClick={() => setOpen(false)}
              className={`inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 ${FOCUS_RING_CLASS}`}
            >
              {viewAllLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
