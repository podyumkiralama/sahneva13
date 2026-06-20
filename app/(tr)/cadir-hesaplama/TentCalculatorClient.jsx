"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, CheckCircle, MessageCircle, Ruler, Tent, Users } from "lucide-react";

const PHONE = "905453048671";

const layoutRates = {
  theatre: { label: "Tiyatro düzeni", sqm: 0.8, note: "Konferans, seminer, tören ve sahne karşısı oturumlar için." },
  cocktail: { label: "Kokteyl / ayakta", sqm: 1.0, note: "Lansman, fuar, festival ve ayakta karşılama alanları için." },
  dining: { label: "Yemekli masa düzeni", sqm: 1.6, note: "İftar, gala, düğün ve masa düzenli kurumsal davetler için." },
  wedding: { label: "Düğün / davet düzeni", sqm: 1.8, note: "Masa, geçiş, dans ve servis boşluğu gereken davetler için." },
};

const extras = [
  { key: "stage", label: "Sahne alanı", sqm: 40 },
  { key: "led", label: "LED ekran / teknik alan", sqm: 20 },
  { key: "dance", label: "Dans alanı", sqm: 50 },
  { key: "catering", label: "Catering / servis alanı", sqm: 35 },
  { key: "backstage", label: "Backstage / depo", sqm: 30 },
  { key: "foyer", label: "Karşılama / fuaye", sqm: 25 },
];

const tentSizes = [
  { label: "3x3 Pagoda", width: 3, length: 3, type: "Pagoda" },
  { label: "4x4 Pagoda", width: 4, length: 4, type: "Pagoda" },
  { label: "5x5 Pagoda", width: 5, length: 5, type: "Pagoda" },
  { label: "10x20 m Çadır", width: 10, length: 20, type: "Büyük çadır" },
  { label: "20x20 m Çadır", width: 20, length: 20, type: "Büyük çadır" },
  { label: "20x30 m Çadır", width: 20, length: 30, type: "Büyük çadır" },
  { label: "20x40 m Çadır", width: 20, length: 40, type: "Büyük çadır" },
  { label: "30x40 m Çadır", width: 30, length: 40, type: "Büyük çadır" },
  { label: "30x60 m Çadır", width: 30, length: 60, type: "Büyük çadır" },
  { label: "40x60 m Çadır", width: 40, length: 60, type: "Büyük çadır" },
  { label: "40x100 m Çadır", width: 40, length: 100, type: "Büyük çadır" },
].map((item) => ({ ...item, area: item.width * item.length }));

export default function TentCalculatorClient() {
  const [people, setPeople] = useState(300);
  const [layout, setLayout] = useState("cocktail");
  const [selectedExtras, setSelectedExtras] = useState(["stage", "led"]);

  const result = useMemo(() => {
    const count = Math.max(Number(people) || 0, 0);
    const personArea = count * layoutRates[layout].sqm;
    const extraArea = extras
      .filter((item) => selectedExtras.includes(item.key))
      .reduce((total, item) => total + item.sqm, 0);
    const totalArea = Math.ceil((personArea + extraArea) * 1.12);
    const recommended = tentSizes.find((tent) => tent.area >= totalArea) || tentSizes[tentSizes.length - 1];
    const estimatedPrice = recommended.type === "Pagoda" ? null : recommended.area * 430;

    return { count, personArea: Math.ceil(personArea), extraArea, totalArea, recommended, estimatedPrice };
  }, [people, layout, selectedExtras]);

  const selectedExtraLabels = extras
    .filter((item) => selectedExtras.includes(item.key))
    .map((item) => item.label);

  const whatsappText = encodeURIComponent(
    `Merhaba, çadır kiralama hesaplama sayfasından teklif istiyorum.\nKişi sayısı: ${people}\nDüzen: ${layoutRates[layout].label}\nEk alanlar: ${selectedExtraLabels.length ? selectedExtraLabels.join(", ") : "Yok"}\nÖnerilen ölçü: ${result.recommended.label}\nYaklaşık ihtiyaç: ${result.totalArea} m²`
  );

  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[130px]" />
      <div className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm font-black text-blue-100 shadow-[0_20px_70px_rgba(30,58,138,0.25)] backdrop-blur-xl">
            <Calculator className="h-4 w-4" />
            ÇADIR HESAPLAMA ARACI
          </div>
          <h1 className="text-[44px] font-black leading-[0.96] tracking-[-1.4px] md:text-[68px]">
            Kaç kişiye kaç m² çadır gerekir?
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Kişi sayısı, oturma düzeni ve sahne, LED ekran, catering gibi ek alanlara göre etkinliğiniz için yaklaşık çadır ölçüsünü hesaplayın.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[34px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl md:p-7">
            <label className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
              <Users className="h-4 w-4 text-blue-200" />
              Kişi sayısı
            </label>
            <input
              type="number"
              min="1"
              value={people}
              onChange={(event) => setPeople(event.target.value)}
              className="mb-7 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4 text-2xl font-black text-white outline-none ring-blue-400/30 transition focus:ring-4"
            />

            <label className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
              <Ruler className="h-4 w-4 text-blue-200" />
              Oturma / kullanım düzeni
            </label>
            <div className="mb-7 grid gap-3 sm:grid-cols-2">
              {Object.entries(layoutRates).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setLayout(key)}
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    layout === key
                      ? "border-blue-300 bg-blue-500/20 text-white shadow-[0_15px_50px_rgba(59,130,246,0.18)]"
                      : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                  }`}
                >
                  <span className="block font-black">{item.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-400">Yaklaşık {item.sqm} m² / kişi</span>
                  <span className="mt-2 block text-xs leading-5 text-slate-400">{item.note}</span>
                </button>
              ))}
            </div>

            <label className="mb-3 flex items-center gap-2 text-sm font-black text-slate-100">
              <CheckCircle className="h-4 w-4 text-blue-200" />
              Ek alanlar
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              {extras.map((item) => {
                const active = selectedExtras.includes(item.key);
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() =>
                      setSelectedExtras((current) =>
                        active ? current.filter((key) => key !== item.key) : [...current, item.key]
                      )
                    }
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      active
                        ? "border-blue-300 bg-blue-500/20 text-white shadow-[0_15px_50px_rgba(59,130,246,0.18)]"
                        : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span className="block font-black">{item.label}</span>
                    <span className="mt-1 block text-xs text-slate-400">+{item.sqm} m²</span>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="rounded-[34px] border border-blue-300/20 bg-gradient-to-br from-blue-500/20 via-white/[0.07] to-slate-950 p-5 shadow-2xl md:p-7">
            <div className="mb-7 flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-400/20 ring-1 ring-blue-200/20">
                <Tent className="h-7 w-7 text-blue-100" />
              </div>
              <div>
                <p className="text-sm font-black uppercase tracking-[0.4px] text-blue-100">Önerilen çadır</p>
                <h2 className="mt-1 text-3xl font-black tracking-[-0.5px]">{result.recommended.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{result.recommended.type} • {result.recommended.area} m² kurulum alanı</p>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Yaklaşık toplam ihtiyaç</p>
                <p className="mt-1 text-4xl font-black">{result.totalArea} m²</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Kişi alanı</p>
                  <p className="mt-1 text-2xl font-black">{result.personArea} m²</p>
                </div>
                <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Ek alan</p>
                  <p className="mt-1 text-2xl font-black">{result.extraArea} m²</p>
                </div>
              </div>
              {result.estimatedPrice ? (
                <div className="rounded-2xl bg-slate-950/50 p-4 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">Yaklaşık çadır bedeli</p>
                  <p className="mt-1 text-3xl font-black">{result.estimatedPrice.toLocaleString("tr-TR")} TL</p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">430 TL / m² baz alınmıştır. Nakliye, zemin, iklimlendirme ve ek ekipman dahil değildir.</p>
                </div>
              ) : null}
            </div>

            <a
              href={`https://wa.me/${PHONE}?text=${whatsappText}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-black text-slate-950 transition hover:scale-[1.01]"
            >
              <MessageCircle className="h-5 w-5" />
              Bu ölçü için teklif al
            </a>

            <Link
              href="/cadir-kiralama"
              className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 text-base font-black text-white transition hover:bg-white/[0.1]"
            >
              Çadır kiralama sayfasına dön
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              Bu hesap yaklaşık planlama içindir. Net ölçü; zemin, rüzgâr, masa-sandalye planı, sahne, LED ekran ve giriş-çıkış aksına göre keşif sonrası netleşir.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
