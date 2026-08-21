// components/PriceEstimatorPodyum.jsx
"use client";

import { useCallback, useId, useMemo, useState } from "react";

import ExternalLink from "@/components/ExternalLink";

const COPY = {
  tr: {
    heading: "Hızlı Fiyat Hesaplama",
    srDesc:
      "Ölçüleri, konumu ve paket seçeneklerini güncellediğinizde toplam maliyetler otomatik olarak hesaplanır.",
    locationLabel: "Konum",
    locationInCity: "İstanbul içi",
    locationOutOfCity: "Şehir dışı",
    widthLabel: "Genişlik (m)",
    widthAria: "Podyum genişlik (metre)",
    depthLabel: "Derinlik (m)",
    depthAria: "Podyum derinlik (metre)",
    areaLabel: "Alan",
    perimeterLabel: "Çevre",
    platformLabel: "Platform",
    carpetRow: "Halı (ops.)",
    skirtRow: "Skört (ops.)",
    logisticsRow: "Nakliye + Kurulum/Söküm",
    quoteOver200: "200 m² üzeri: Teklife göre",
    quoteOutOfCity: "Şehir dışı: Teklife göre",
    packageTotal: "Önerilen Paket (Halı + Skört)",
    grandTotal: "Genel Toplam (Paket + Nakliye/Kurulum)",
    note: (amount) =>
      `*İstanbul içi ≤200 m² projelerde sabit ${amount} uygulanır. Üzeri ve şehir dışı projelerde keşfe/rota ve vardiyaya göre hesaplanır.`,
    waLabel: "WhatsApp’tan Sor",
    waAria: "WhatsApp’tan Sor — yeni sekmede açılır",
    waText: "Merhaba Sahneva, Podyum fiyat hesaplayıcısından yazıyorum.",
    liveLogisticsIncluded: (amount) => `Nakliye ve kurulum dahil ${amount}`,
    liveLogisticsOver200: "200 metrekare üzeri projelerde nakliye ve kurulum teklife göre",
    liveLogisticsOutOfCity: "Şehir dışı projelerde nakliye ve kurulum teklife göre",
    liveUnset: "Belirtilmedi",
    liveSummary: (pkg, logistics, total) =>
      `Önerilen paket toplamı ${pkg}. ${logistics}. Genel toplam: ${total}.`,
  },
  en: {
    heading: "Quick Price Estimate",
    srDesc:
      "Total costs are recalculated automatically as you update the dimensions, location and package options.",
    locationLabel: "Location",
    locationInCity: "Within Istanbul",
    locationOutOfCity: "Outside Istanbul",
    widthLabel: "Width (m)",
    widthAria: "Podium width in metres",
    depthLabel: "Depth (m)",
    depthAria: "Podium depth in metres",
    areaLabel: "Area",
    perimeterLabel: "Perimeter",
    platformLabel: "Platform",
    carpetRow: "Carpet (opt.)",
    skirtRow: "Skirt (opt.)",
    logisticsRow: "Transport + Installation/Dismantling",
    quoteOver200: "Over 200 m²: on quotation",
    quoteOutOfCity: "Outside Istanbul: on quotation",
    packageTotal: "Recommended Package (Carpet + Skirt)",
    grandTotal: "Grand Total (Package + Transport/Installation)",
    note: (amount) =>
      `*A fixed ${amount} applies to projects of 200 m² or less within Istanbul. Larger projects and projects outside Istanbul are calculated per site survey, route and shift.`,
    waLabel: "Ask on WhatsApp",
    waAria: "Ask on WhatsApp — opens in a new tab",
    waText: "Hello Sahneva, I am writing from the podium price calculator.",
    liveLogisticsIncluded: (amount) => `Transport and installation included: ${amount}`,
    liveLogisticsOver200: "Transport and installation are quoted separately above 200 square metres",
    liveLogisticsOutOfCity: "Transport and installation are quoted separately outside Istanbul",
    liveUnset: "Not specified",
    liveSummary: (pkg, logistics, total) =>
      `Recommended package total ${pkg}. ${logistics}. Grand total: ${total}.`,
  },
};

export default function PriceEstimatorPodyum({ unitPrices, className = "", locale = "tr" }) {
  const t = COPY[locale] ?? COPY.tr;
  const money = useCallback((value) => formatTRY(value, locale), [locale]);
  const [w, setW] = useState(4);
  const [d, setD] = useState(6);
  const [loc, setLoc] = useState("istanbul"); // istanbul | sehir-disi

  const presets = [
    { w: 3, d: 4, label: "3×4" },
    { w: 4, d: 6, label: "4×6" },
    { w: 6, d: 8, label: "6×8" },
  ];

  const { area, perimeter, base, carpet, skirt, paketToplam, lojistikTL, genelToplam } = useMemo(() => {
    const area = Math.max(1, Math.round(Number(w) * Number(d)));
    const perimeter = 2 * (Number(w) + Number(d));
    const base = area * unitPrices.platform_m2_week;
    const carpet = area * unitPrices.carpet_m2_week;
    const skirt = perimeter * unitPrices.skirt_ml_week;
    const paketToplam = base + carpet + skirt;

    // İstanbul içi ≤200 m² sabit temel nakliye; aksi durumda teklife göre (dahil edilmez)
    const lojistikTL =
      loc === "istanbul" && area <= 200
        ? unitPrices.ist_nakliye
        : null;

    const genelToplam = paketToplam + (lojistikTL ?? 0);

    return { area, perimeter, base, carpet, skirt, paketToplam, lojistikTL, genelToplam };
  }, [w, d, loc, unitPrices]);

  const liveTotalText = useMemo(() => {
    const lojistikMetni =
      loc === "istanbul"
        ? area <= 200
          ? t.liveLogisticsIncluded(money(lojistikTL ?? 0))
          : t.liveLogisticsOver200
        : t.liveLogisticsOutOfCity;

    const genelToplamMetni = lojistikTL ? money(genelToplam) : t.liveUnset;

    return t.liveSummary(money(paketToplam), lojistikMetni, genelToplamMetni);
  }, [area, genelToplam, loc, lojistikTL, paketToplam, t, money]);

  return (
    <div
      className={[
        "mx-auto w-full max-w-2xl rounded-2xl border border-neutral-300 bg-white shadow-sm ring-1 ring-black/10",
        className,
      ].join(" ")}
      role="region"
      aria-labelledby="podyum-fiyat-hesaplayici"
      aria-describedby="podyum-fiyat-hesaplayici-aciklama"
    >
      {/* Üst şerit */}
      <div className="rounded-t-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent px-4 py-3 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 id="podyum-fiyat-hesaplayici" className="text-sm font-semibold text-neutral-900">
            {t.heading}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {presets.map((p) => {
              const isActive = p.w === w && p.d === d;
              return (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => {
                    setW(p.w);
                    setD(p.d);
                  }}
                  className={[
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-[background,transform] active:scale-[.98]",
                    isActive
                      ? "border-primary/60 bg-primary/20 text-violet-900"
                      : "border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gövde */}
      <div className="px-4 py-4 sm:px-6 sm:py-6">
        <p id="podyum-fiyat-hesaplayici-aciklama" className="sr-only">
          {t.srDesc}
        </p>

        {/* Konum seçimi */}
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          <SelectField
            label={t.locationLabel}
            value={loc}
            onChange={setLoc}
            name="konum"
            options={[
              { value: "istanbul", label: t.locationInCity },
              { value: "sehir-disi", label: t.locationOutOfCity },
            ]}
          />
          <Field
            label={t.widthLabel}
            value={w}
            onChange={(v) => setW(sanitizeNum(v))}
            name="genislik"
            inputProps={{ min: 1, step: 0.5, "aria-label": t.widthAria }}
          />
          <Field
            label={t.depthLabel}
            value={d}
            onChange={(v) => setD(sanitizeNum(v))}
            name="derinlik"
            inputProps={{ min: 1, step: 0.5, "aria-label": t.depthAria }}
          />
        </div>

        {/* Özet kartları */}
        <div className="grid gap-3 sm:grid-cols-3">
          <Info label={t.areaLabel} value={`${area} m²`} />
          <Info label={t.perimeterLabel} value={`${perimeter} m`} />
          <Info label={t.platformLabel} value={money(base)} emphasize />
        </div>

        {/* Ayrıntı + Toplam */}
        <div className="mt-4 rounded-xl border border-primary/25 bg-primary/10 p-4">
          <Row left={t.carpetRow} right={money(carpet)} />
          <Row left={t.skirtRow} right={money(skirt)} />
          <Row
            left={t.logisticsRow}
            right={
              loc === "istanbul"
                ? (area <= 200 ? money(lojistikTL ?? 0) : t.quoteOver200)
                : t.quoteOutOfCity
            }
          />
          <div className="my-3 h-px w-full bg-primary/10" />
          <div className="flex items-baseline justify-between" aria-live="polite" aria-atomic="true">
            <span className="text-[13px] font-medium text-neutral-900">{t.packageTotal}</span>
            <span className="text-base font-semibold tracking-tight text-neutral-900">{money(paketToplam)}</span>
          </div>
          <div className="mt-1 flex items-baseline justify-between" aria-live="polite" aria-atomic="true">
            <span className="text-[13px] font-medium text-neutral-900">{t.grandTotal}</span>
            <span className="text-lg font-bold tracking-tight text-violet-800">
              {lojistikTL ? money(genelToplam) : "—"}
            </span>
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {liveTotalText}
          </p>
        </div>

        {/* Alt satır */}
        <div className="mt-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <span className="text-xs text-neutral-700">
            {t.note(money(unitPrices.ist_nakliye))}
          </span>
          <ExternalLink
            locale={locale}
            nofollow
            href={`https://wa.me/905453048671?text=${encodeURIComponent(t.waText)}`}
            className="inline-flex items-center rounded-lg border border-violet-300 bg-white px-3 py-1.5 text-xs font-semibold text-violet-800 hover:bg-violet-50"
            ariaLabel={t.waAria}
          >
            {t.waLabel}
          </ExternalLink>
        </div>
      </div>
    </div>
  );
}

/* ---- Küçük yardımcı bileşenler ---- */

function Field({ label, value, onChange, name, inputProps = {} }) {
  const reactId = useId();
  const inputId = name ?? reactId;
  return (
    <label className="text-xs" htmlFor={inputId}>
      <span className="block font-medium text-neutral-700">{label}</span>
      <input
        id={inputId}
        name={name ?? inputId}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-1 w-full rounded-xl border border-neutral-300 bg-white
          px-3 py-2 text-sm text-neutral-900 transition-colors duration-200 focus-ring
          focus-visible:border-primary/40
        "
        {...inputProps}
      />
    </label>
  );
}

function SelectField({ label, value, onChange, options, name }) {
  const reactId = useId();
  const selectId = name ?? reactId;
  return (
    <label className="text-xs" htmlFor={selectId}>
      <span className="block font-medium text-neutral-700">{label}</span>
      <select
        id={selectId}
        name={name ?? selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-1 w-full rounded-xl border border-neutral-300 bg-white
          px-3 py-2 text-sm text-neutral-900 transition-colors duration-200 focus-ring
          focus-visible:border-primary/40
        "
        aria-label={label}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Info({ label, value, emphasize = false }) {
  return (
    <div className="rounded-xl border border-neutral-300 bg-white p-3">
      <div className="text-xs font-medium text-neutral-700">{label}</div>
      <div className={["font-semibold text-neutral-900", emphasize ? "text-violet-800" : ""].join(" ")}>{value}</div>
    </div>
  );
}

function Row({ left, right }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-neutral-800">{left}</span>
      <span className="font-semibold text-neutral-900">{right}</span>
    </div>
  );
}

function sanitizeNum(v) {
  const n = Number(v);
  if (Number.isNaN(n) || n <= 0) return 1;
  return Math.round(n * 2) / 2; // 0.5 adım
}

function formatTRY(n, locale = "tr") {
  try {
    return new Intl.NumberFormat(locale === "en" ? "en-GB" : "tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} TL`;
  }
}
