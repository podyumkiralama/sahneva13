// components/blog/InteractiveChecklist.client.jsx
"use client";

import { useEffect, useMemo, useState } from "react";

function normalizeKey(key) {
  return (key || "checklist")
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-")
    .slice(0, 80);
}

export default function InteractiveChecklist({
  title = "Kontrol Listesi",
  items = [],
  storageKey,
}) {
  const key = useMemo(() => `sv_ck_${normalizeKey(storageKey)}`, [storageKey]);

  const [checked, setChecked] = useState(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(checked));
    } catch {
      // ignore
    }
  }, [checked, key]);

  const doneCount = useMemo(
    () => items.reduce((acc, _, i) => acc + (checked[i] ? 1 : 0), 0),
    [items, checked]
  );

  const toggle = (i) => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  const reset = () => setChecked({});

  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-xs text-slate-500">
            {doneCount}/{items.length} tamamlandı
          </div>
        </div>

        <button
          type="button"
          onClick={reset}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          Sıfırla
        </button>
      </div>

      <ul className="mt-3 space-y-2">
        {items.map((t, i) => {
          const isOn = !!checked[i];
          return (
            <li key={i} className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => toggle(i)}
                className={[
                  "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                  isOn
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700",
                ].join(" ")}
                aria-pressed={isOn}
                aria-label={isOn ? "İşaret kaldır" : "İşaretle"}
              >
                ✓
              </button>

              <button
                type="button"
                onClick={() => toggle(i)}
                className="text-left text-sm leading-6 text-slate-700 hover:text-slate-900"
              >
                {t}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
