"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { ADDITIONAL_DAY_DISCOUNT, multiDaySaving, multiDayTotal } from "@/lib/pricing";
import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";
import { Calculator, CheckCircle, MessageCircle, Monitor, Ruler, Sparkles } from "lucide-react";

const PHONE = "905453048671";

const screenTypes = {
  indoor: {
    label: "İç mekan LED ekran",
    sqmPrice: LED_SCREEN_PRICING.standard.perSqm,
    minimum: LED_SCREEN_PRICING.standard.minimum,
    smallLimit: 15,
    note: "AVM, otel, konferans, lansman ve kurumsal salon etkinlikleri için.",
  },
  outdoor: {
    label: "Dış mekan LED ekran",
    sqmPrice: LED_SCREEN_PRICING.standard.perSqm,
    minimum: LED_SCREEN_PRICING.standard.minimum,
    smallLimit: 15,
    note: "Festival, konser, belediye etkinliği ve açık hava organizasyonları için.",
  },
  direction: {
    label: "LED yönlendirme ekranı",
    sqmPrice: 5000,
    minimum: 5000,
    smallLimit: 1,
    note: "Giriş, kayıt, yönlendirme ve sponsor görünürlüğü için adet bazlı planlanır.",
  },
};

const pitchOptions = {
  indoor: ["P1.9", "P2.5", "P2.9", "P3.9"],
  outdoor: ["P3.9", "P4.8", "P5", "P6"],
  direction: ["Standart yönlendirme", "P3.9", "P4"],
};

const extras = [
  {
    key: "watchout",
    label: "Watchout / gelişmiş reji",
    price: LED_SCREEN_PRICING.watchout,
    premium: true,
    description: "Mapping, lansman, senkron video, çoklu ekran ve gelişmiş sahne akışlarında önerilir.",
  },
  {
    key: "truss",
    label: "Truss taşıyıcı sistem",
    price: 0,
    description: "Ölçü, yükseklik ve sahaya göre ayrıca fiyatlandırılır.",
  },
  {
    key: "generator",
    label: "Jeneratör",
    price: 0,
    description: "Enerji altyapısı olmayan alanlarda proje bazlı eklenir.",
  },
  {
    key: "sound",
    label: "Ses sistemi entegrasyonu",
    price: 0,
    description: "Konuşma, konser veya sahne programlarında ayrıca planlanır.",
  },
];

function formatPrice(value) {
  return `${Math.round(value).toLocaleString("tr-TR")} TL`;
}

export default function LedCalculatorClient() {
  const [screenType, setScreenType] = useState("outdoor");
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(3);
  const [days, setDays] = useState(1);
  const [pitch, setPitch] = useState("P3.9");
  const [selectedExtras, setSelectedExtras] = useState([]);

  const result = useMemo(() => {
    const type = screenTypes[screenType];
    const numericWidth = Math.max(Number(width) || 0, 0);
    const numericHeight = Math.max(Number(height) || 0, 0);
    const numericDays = Math.max(Number(days) || 1, 1);
    const area = screenType === "direction" ? numericWidth : numericWidth * numericHeight;
    const isP19Indoor = screenType === "indoor" && pitch === "P1.9";
    const sqmPrice = isP19Indoor ? LED_SCREEN_PRICING.premiumP19.perSqm : type.sqmPrice;
    const minimum = isP19Indoor ? LED_SCREEN_PRICING.premiumP19.minimum : type.minimum;
    const baseDaily = screenType === "direction" ? type.sqmPrice * numericWidth : area * sqmPrice;
    const usesMinimum =
      screenType === "direction"
        ? baseDaily < minimum
        : isP19Indoor
          ? baseDaily < minimum
          : area <= type.smallLimit || baseDaily < minimum;
    const firstDay = usesMinimum ? minimum : baseDaily;
    // Günlük bedeli gün sayısıyla düz çarpmak, proje alt sınırını da çarpıyordu:
    // 3 günlük küçük bir ekran 105.000 TL çıkıyordu. Doğrusu, ilk günden sonraki
    // her günün %25 indirimli olması (bkz. lib/pricing.js).
    const dayTotal = multiDayTotal(firstDay, numericDays);
    const daySaving = multiDaySaving(firstDay, numericDays);
    const paidExtras = extras
      .filter((item) => selectedExtras.includes(item.key) && item.price > 0)
      .reduce((total, item) => total + item.price, 0);

    return {
      type,
      sqmPrice,
      area,
      firstDay,
      dayTotal,
      daySaving,
      paidExtras,
      grandTotal: dayTotal + paidExtras,
      usesMinimum,
      numericDays,
      numericWidth,
      numericHeight,
    };
  }, [screenType, width, height, days, pitch, selectedExtras]);

  const selectedExtraLabels = extras
    .filter((item) => selectedExtras.includes(item.key))
    .map((item) => item.label);

  const whatsappText = encodeURIComponent(
    `Merhaba, LED ekran hesaplama sayfasından teklif istiyorum.\nEkran tipi: ${screenTypes[screenType].label}\nÖlçü: ${screenType === "direction" ? `${width} adet yönlendirme ekranı` : `${width}x${height} m`}\nToplam alan: ${result.area.toFixed(2)} m²\nPixel pitch: ${pitch}\nGün sayısı: ${days}\nEk hizmetler: ${selectedExtraLabels.length ? selectedExtraLabels.join(", ") : "Yok"}\nYaklaşık başlangıç bedeli: ${formatPrice(result.grandTotal)}`
  );

  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-[130px]" />
      <div className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-violet-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm font-black text-violet-100 shadow-[0_20px_70px_rgba(76, 29, 149,0.25)] backdrop-blur-xl">
            <Calculator className="h-4 w-4" />
            LED EKRAN HESAPLAMA ARACI
          </div>
          <h1 className="text-[44px] font-black leading-[0.96] tracking-[-1.4px] md:text-[68px]">
            LED ekran m² ve fiyat hesaplama
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Ekran ölçüsü, iç/dış mekan seçimi, gün sayısı ve isteğe bağlı Watchout gibi gelişmiş reji ihtiyaçlarına göre yaklaşık başlangıç bedelini hesaplayın.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl md:p-7">
            <fieldset className="mb-7">
              <legend className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
                <Monitor className="h-4 w-4 text-violet-200" />
                LED ekran tipi
              </legend>
              <div className="grid gap-3 md:grid-cols-3">
                {Object.entries(screenTypes).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={screenType === key}
                    onClick={() => {
                      setScreenType(key);
                      setPitch(pitchOptions[key][0]);
                      if (key === "direction") {
                        setHeight(1);
                        setWidth(1);
                      }
                    }}
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      screenType === key
                        ? "border-violet-300 bg-violet-500/20 text-white shadow-[0_15px_50px_rgba(139, 92, 246,0.18)]"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="block font-black">{item.label}</span>
                    <span className="mt-2 block text-xs leading-5 text-slate-400">{item.note}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mb-7 grid gap-4 sm:grid-cols-3">
              <div>
                <label htmlFor="led-hesaplama-en" className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
                  <Ruler className="h-4 w-4 text-violet-200" />
                  {screenType === "direction" ? "Adet" : "En (m)"}
                </label>
                <input
                  id="led-hesaplama-en"
                  type="number"
                  min="1"
                  step="0.5"
                  value={width}
                  onChange={(event) => setWidth(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-2xl font-black text-white outline-none ring-violet-400/30 transition focus:ring-4"
                />
              </div>

              {screenType !== "direction" ? (
                <div>
                  <label htmlFor="led-hesaplama-boy" className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
                    <Ruler className="h-4 w-4 text-violet-200" />
                    Boy (m)
                  </label>
                  <input
                    id="led-hesaplama-boy"
                    type="number"
                    min="1"
                    step="0.5"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-2xl font-black text-white outline-none ring-violet-400/30 transition focus:ring-4"
                  />
                </div>
              ) : null}

              <div>
                <label htmlFor="led-hesaplama-gun" className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
                  <CheckCircle className="h-4 w-4 text-violet-200" />
                  Gün sayısı
                </label>
                <input
                  id="led-hesaplama-gun"
                  type="number"
                  min="1"
                  value={days}
                  onChange={(event) => setDays(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-2xl font-black text-white outline-none ring-violet-400/30 transition focus:ring-4"
                />
              </div>
            </div>

            <fieldset className="mb-7">
              <legend className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
                <Sparkles className="h-4 w-4 text-violet-200" />
                Pixel pitch
              </legend>
              <div className="grid gap-3 sm:grid-cols-4">
                {pitchOptions[screenType].map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={pitch === item}
                    onClick={() => setPitch(item)}
                    className={`rounded-2xl border px-4 py-3 text-center font-black transition ${
                      pitch === item
                        ? "border-violet-300 bg-violet-500/20 text-white"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
                <CheckCircle className="h-4 w-4 text-violet-200" />
                Ek hizmetler
              </legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {extras.map((item) => {
                  const active = selectedExtras.includes(item.key);
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setSelectedExtras((current) =>
                          active ? current.filter((key) => key !== item.key) : [...current, item.key]
                        )
                      }
                      className={`rounded-2xl border px-4 py-4 text-left transition ${
                        active
                          ? "border-violet-300 bg-violet-500/20 text-white shadow-[0_15px_50px_rgba(139, 92, 246,0.18)]"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="block font-black">{item.label}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-400">
                        {item.price > 0 ? `+${formatPrice(item.price)}` : "Proje bazlı"}
                      </span>
                      <span className="mt-2 block text-xs leading-5 text-slate-400">{item.description}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <aside className="rounded-[34px] border border-violet-300/20 bg-gradient-to-br from-violet-500/20 via-white/[0.07] to-slate-950 p-5 shadow-2xl md:p-7">
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-400/20 ring-1 ring-violet-200/20">
                <Monitor className="h-7 w-7 text-violet-100" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.4px] text-violet-100">Hesap sonucu</p>
                <h2 className="mt-1 text-3xl font-black tracking-[-0.5px]">{result.area.toFixed(2)} m² LED ekran</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{result.type.label} • {pitch}</p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Yaklaşık başlangıç bedeli</p>
                <p className="mt-1 text-4xl font-black">{formatPrice(result.grandTotal)}</p>
                {result.usesMinimum ? (
                  <p className="mt-2 text-xs leading-5 text-amber-100">
                    Küçük ekranlarda m² hesabı yerine minimum kurulum paketi uygulanır.
                  </p>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">İlk gün / paket</p>
                  <p className="mt-1 text-2xl font-black">{formatPrice(result.firstDay)}</p>
                </div>
                <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Ek hizmet</p>
                  <p className="mt-1 text-2xl font-black">{formatPrice(result.paidExtras)}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Gün hesabı</p>
                <p className="mt-1 text-xl font-black">{result.numericDays} gün</p>
                {result.numericDays > 1 ? (
                  <p className="mt-2 inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-black text-emerald-300">
                    Çok gün indirimi: −{formatPrice(result.daySaving)}
                  </p>
                ) : null}
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  İlk gün tam bedel üzerinden hesaplanır; sonraki her gün
                  %{Math.round(ADDITIONAL_DAY_DISCOUNT * 100)} indirimlidir. Net fiyat tarih,
                  lokasyon ve kurulum saatine göre belirlenir.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${PHONE}?text=${whatsappText}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-black text-slate-950 transition hover:scale-[1.01]"
            >
              <MessageCircle className="h-5 w-5" />
              Bu LED ölçüsü için teklif al
            </a>

            <Link
              href="/led-ekran-kiralama"
              className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-base font-black text-white transition hover:bg-white/[0.1]"
            >
              LED ekran kiralama sayfasına dön
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Bu hesap yaklaşık başlangıç bedeli verir. Net teklif; lokasyon, kurulum yüksekliği, truss, enerji, içerik cihazı, operatör ve etkinlik süresine göre hazırlanır.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
