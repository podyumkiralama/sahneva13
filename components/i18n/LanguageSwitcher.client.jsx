"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Languages } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const LOCALES = [
  { value: "tr", short: "TR", label: "Türkçe", href: "/" },
  { value: "en", short: "EN", label: "English", href: "/en" },
  { value: "ar", short: "AR", label: "العربية", href: "/ar" },
  { value: "ru", short: "RU", label: "Русский", href: "/ru" },
];

const PAGE_EQUIVALENTS = [
  { tr: "/", en: "/en", ar: "/ar", ru: "/ru" },
  { tr: "/hakkimizda", en: "/en/about", ar: "/ar/about", ru: "/ru/about" },
  { tr: "/blog", en: "/en/blog", ar: "/ar", ru: "/ru" },
  { tr: "/hizmetler", en: "/en/services", ar: "/ar/services", ru: "/ru/services" },
  { tr: "/projeler", en: "/en/projects", ar: "/ar/projects", ru: "/ru/projects" },
  { tr: "/iletisim", en: "/en/contact", ar: "/ar/contact", ru: "/ru/contact" },
  { tr: "/nasil-calisiyoruz", en: "/en/how-we-work", ar: "/ar/services", ru: "/ru/services" },
  { tr: "/bolgesel-kiralama", en: "/en/regional-rental", ar: "/ar/services", ru: "/ru/services" },
  { tr: "/sss", en: "/en/faq", ar: "/ar/services", ru: "/ru/services" },
  { tr: "/podyum-kiralama", en: "/en/podium-rental", ar: "/ar/services", ru: "/ru/services#stage" },
  { tr: "/led-ekran-kiralama", en: "/en/led-screen-rental", ar: "/ar/services", ru: "/ru/led-screen-rental" },
  { tr: "/sahne-kiralama", en: "/en/stage-rental", ar: "/ar/services", ru: "/ru/stage-rental" },
  { tr: "/ses-isik-sistemleri", en: "/en/sound-light-rental", ar: "/ar/services", ru: "/ru/sound-light-rental" },
  { tr: "/truss-kiralama", en: "/en/truss-rental", ar: "/ar/services", ru: "/ru/sound-light-rental" },
  { tr: "/cadir-kiralama", en: "/en/tent-rental", ar: "/ar/services", ru: "/ru/tent-rental" },
  { tr: "/masa-sandalye-kiralama", en: "/en/table-chair-rental", ar: "/ar/services", ru: "/ru/services#furniture" },
  { tr: "/kurumsal-organizasyon", en: "/en/corporate-events", ar: "/ar/services", ru: "/ru/corporate-events" },
  { tr: "/turkiyede-etkinlik-cozum-ortagi", en: "/en/event-production-company-turkey", ar: "/ar/services", ru: "/ru/services" },
  { tr: "/podyum-kiralama-fiyatlari", en: "/en/podium-rental-prices", ar: "/ar/services", ru: "/ru/contact" },
];

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

function getLocaleLinks(pathname, currentLocale) {
  const currentPath = normalizePath(pathname);
  const match = PAGE_EQUIVALENTS.find((page) =>
    LOCALES.some((locale) => page[locale.value] === currentPath),
  );

  if (match) {
    return LOCALES.map((locale) => ({
      ...locale,
      href: match[locale.value],
      active: locale.value === currentLocale,
    }));
  }

  return LOCALES.map((locale) => ({
    ...locale,
    active: locale.value === currentLocale,
  }));
}

export default function LanguageSwitcher({ locale = "tr", align = "right", compact = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const currentLocale = LOCALES.some((item) => item.value === locale) ? locale : "tr";
  const activeLocale = LOCALES.find((item) => item.value === currentLocale) || LOCALES[0];
  const links = useMemo(
    () => getLocaleLinks(pathname, currentLocale),
    [currentLocale, pathname],
  );
  const menuAlignClass = align === "left" ? "left-0" : "right-0";

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm font-extrabold text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:text-white nav-dark:hover:bg-white/15 nav-dark:hover:text-blue-200 ${compact ? "min-h-[40px] gap-1.5 px-2.5" : "min-h-[44px] gap-2 px-3"}`}
        title={`Dil: ${activeLocale.label}`}
      >
        <Languages aria-hidden="true" className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        <span aria-hidden="true">{activeLocale.short}</span>
        <span className="sr-only">Dil seçimi</span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Dil seçimi"
          className={`absolute ${menuAlignClass} top-full z-[90] mt-2 w-56 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl nav-dark:border-white/10 nav-dark:bg-[#111827]`}
        >
          {links.map((item) => (
            <Link
              key={item.value}
              href={item.href}
              prefetch={false}
              role="menuitem"
              hrefLang={item.value === "tr" ? "tr-TR" : item.value}
              aria-current={item.active ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold no-underline transition-colors ${
                item.active
                  ? "bg-blue-50 text-blue-700 nav-dark:bg-white/10 nav-dark:text-blue-200"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-blue-700 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200"
              }`}
            >
              <span className="inline-flex h-7 w-9 items-center justify-center rounded-lg border border-current/10 bg-current/[0.04] text-xs font-black">
                {item.short}
              </span>
              <span>{item.label}</span>
              {item.active ? <Check aria-hidden="true" className="ml-auto h-4 w-4" /> : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
