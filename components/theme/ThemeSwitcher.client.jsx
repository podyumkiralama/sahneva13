"use client";

import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const THEME_LABELS = {
  tr: { menu: "Tema seçimi", prefix: "Tema", light: "Açık tema", dark: "Koyu tema", system: "Cihaz varsayılanı" },
  en: { menu: "Theme selection", prefix: "Theme", light: "Light theme", dark: "Dark theme", system: "System default" },
  ar: { menu: "اختيار المظهر", prefix: "المظهر", light: "مظهر فاتح", dark: "مظهر داكن", system: "إعداد النظام" },
  ru: { menu: "Выбор темы", prefix: "Тема", light: "Светлая тема", dark: "Темная тема", system: "Системная" },
  zh: { menu: "主题选择", prefix: "主题", light: "浅色主题", dark: "深色主题", system: "跟随系统" },
  de: { menu: "Design auswählen", prefix: "Design", light: "Helles Design", dark: "Dunkles Design", system: "Systemeinstellung" },
};

const OPTION_META = [
  { value: "light", Icon: Sun },
  { value: "dark", Icon: Moon },
  { value: "system", Icon: Monitor },
];

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getFinalTheme(value) {
  return value === "system" ? getSystemTheme() : value;
}

function applyNavbarTheme(value) {
  if (typeof document === "undefined") return;

  const selected = getFinalTheme(value);
  document.documentElement.dataset.navTheme = selected;
  document.documentElement.classList.toggle("nav-dark", selected === "dark");
  document.documentElement.classList.toggle("nav-light", selected === "light");
}

export default function ThemeSwitcher({ align = "right", compact = false, locale = "tr" }) {
  const t = THEME_LABELS[locale] ?? THEME_LABELS.tr;
  const OPTIONS = OPTION_META.map((option) => ({ ...option, label: t[option.value] }));
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");
  const rootRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("sahneva-navbar-theme") || "system";
    setTheme(saved);
    applyNavbarTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      const current = localStorage.getItem("sahneva-navbar-theme") || "system";
      if (current === "system") applyNavbarTheme("system");
    };

    media.addEventListener?.("change", onSystemChange);
    return () => media.removeEventListener?.("change", onSystemChange);
  }, []);

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

  const activeOption = OPTIONS.find((option) => option.value === theme) || OPTIONS[2];
  const ActiveIcon = activeOption.Icon;
  const menuAlignClass = align === "left" ? "left-0" : "right-0";

  const selectTheme = (value) => {
    localStorage.setItem("sahneva-navbar-theme", value);
    setTheme(value);
    applyNavbarTheme(value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:text-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-white nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:text-white nav-dark:hover:bg-white/15 nav-dark:hover:text-violet-200 ${compact ? "min-h-[40px] min-w-[40px] px-2.5" : "min-h-12 min-w-12 px-3"}`}
        title={`${t.prefix}: ${activeOption.label}`}
      >
        <ActiveIcon aria-hidden="true" className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        <span className="sr-only">{t.menu}</span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label={t.menu}
          className={`absolute ${menuAlignClass} top-full z-[90] mt-2 w-56 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl nav-dark:border-white/10 nav-dark:bg-[#111827]`}
        >
          {OPTIONS.map((option) => {
            const selected = option.value === theme;
            const OptionIcon = option.Icon;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => selectTheme(option.value)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition-colors ${
                  selected
                    ? "bg-violet-50 text-violet-700 nav-dark:bg-white/10 nav-dark:text-violet-200"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-violet-700 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 nav-dark:hover:text-violet-200"
                }`}
              >
                <OptionIcon aria-hidden="true" className="h-4 w-4" />
                <span>{option.label}</span>
                {selected ? <Check aria-hidden="true" className="ml-auto h-4 w-4" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
