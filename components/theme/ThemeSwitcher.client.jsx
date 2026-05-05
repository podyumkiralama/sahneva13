"use client";

import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const OPTIONS = [
  { value: "light", label: "Açık tema", Icon: Sun },
  { value: "dark", label: "Koyu tema", Icon: Moon },
  { value: "system", label: "Cihaz varsayılanı", Icon: Monitor },
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

export default function ThemeSwitcher({ align = "right" }) {
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
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:text-white nav-dark:hover:bg-white/15 nav-dark:hover:text-blue-200"
        title={`Tema: ${activeOption.label}`}
      >
        <ActiveIcon aria-hidden="true" className="h-4 w-4" />
        <span className="sr-only">Tema seçimi</span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Tema seçimi"
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
                    ? "bg-blue-50 text-blue-700 nav-dark:bg-white/10 nav-dark:text-blue-200"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-blue-700 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200"
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
