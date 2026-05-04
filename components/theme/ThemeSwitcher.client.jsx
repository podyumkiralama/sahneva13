"use client";

import { useEffect, useRef, useState } from "react";

const OPTIONS = [
  { value: "light", label: "Açık tema", icon: "☀️" },
  { value: "dark", label: "Koyu tema", icon: "🌙" },
  { value: "system", label: "Cihaz varsayılanı", icon: "◐" },
];

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(value) {
  if (typeof document === "undefined") return;

  const selected = value === "system" ? getSystemTheme() : value;
  document.documentElement.dataset.theme = selected;
  document.documentElement.classList.toggle("dark", selected === "dark");
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("system");
  const rootRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("sahneva-theme") || "system";
    setTheme(saved);
    applyTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      const current = localStorage.getItem("sahneva-theme") || "system";
      if (current === "system") applyTheme("system");
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

  const selectTheme = (value) => {
    localStorage.setItem("sahneva-theme", value);
    setTheme(value);
    applyTheme(value);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 text-neutral-700 shadow-sm transition-all duration-200 hover:bg-neutral-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
        title={`Tema: ${activeOption.label}`}
      >
        <span aria-hidden="true" className="text-lg leading-none">
          {activeOption.icon}
        </span>
        <span className="sr-only">Tema seçimi</span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Tema seçimi"
          className="absolute right-0 top-full z-[90] mt-2 w-56 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl"
        >
          {OPTIONS.map((option) => {
            const selected = option.value === theme;
            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => selectTheme(option.value)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition-colors ${
                  selected
                    ? "bg-blue-50 text-blue-700"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-blue-700"
                }`}
              >
                <span aria-hidden="true" className="w-6 text-lg">
                  {option.icon}
                </span>
                <span>{option.label}</span>
                {selected ? (
                  <span aria-hidden="true" className="ml-auto text-blue-600">
                    ✓
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
