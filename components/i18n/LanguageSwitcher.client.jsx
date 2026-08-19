"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Languages } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { HREFLANG_CODE, getSwitcherTargets } from "@/lib/i18n/pageEquivalents";

// Yalnizca gorunum bilgisi. Hangi dilin hangi adrese gittigi burada DEGIL,
// lib/i18n/pageEquivalents.js'te tanimlidir — hreflang ile ayni tablo.
const LOCALE_UI = [
  { value: "tr", short: "TR", label: "Türkçe" },
  { value: "en", short: "EN", label: "English" },
  { value: "de", short: "DE", label: "Deutsch" },
  { value: "ar", short: "AR", label: "العربية" },
  { value: "ru", short: "RU", label: "Русский" },
  { value: "zh", short: "ZH", label: "中文" },
];

const SWITCHER_LABELS = {
  tr: { label: "Dil seçimi", prefix: "Dil" },
  en: { label: "Language selection", prefix: "Language" },
  de: { label: "Sprachauswahl", prefix: "Sprache" },
  ar: { label: "اختيار اللغة", prefix: "اللغة" },
  ru: { label: "Выбор языка", prefix: "Язык" },
  zh: { label: "语言选择", prefix: "语言" },
};

// Hedefleri ortak esdegerlik tablosu belirler: once gercek ceviri, yoksa en
// yakin sayfa, o da yoksa dilin ana sayfasi. Bu yuzden burada eslesme yoksa
// diye ayri bir dal yok — tablo her dil icin bir adres dondurur.
function getLocaleLinks(pathname, currentLocale) {
  const targets = getSwitcherTargets(pathname);

  return LOCALE_UI.map((locale) => ({
    ...locale,
    href: targets[locale.value],
    active: locale.value === currentLocale,
  }));
}

export default function LanguageSwitcher({ locale = "tr", align = "right", compact = false }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const currentLocale = LOCALE_UI.some((item) => item.value === locale) ? locale : "tr";
  const switcherLabels = SWITCHER_LABELS[currentLocale] ?? SWITCHER_LABELS.tr;
  const activeLocale = LOCALE_UI.find((item) => item.value === currentLocale) || LOCALE_UI[0];
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
        title={`${switcherLabels.prefix}: ${activeLocale.label}`}
      >
        <Languages aria-hidden="true" className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        <span aria-hidden="true">{activeLocale.short}</span>
        <span className="sr-only">{switcherLabels.label}</span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={switcherLabels.label}
          className={`absolute ${menuAlignClass} top-full z-[90] mt-2 w-56 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl nav-dark:border-white/10 nav-dark:bg-[#111827]`}
        >
          {links.map((item) => (
            <Link
              key={item.value}
              href={item.href}
              prefetch={false}
              role="menuitem"
              hrefLang={HREFLANG_CODE[item.value]}
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
