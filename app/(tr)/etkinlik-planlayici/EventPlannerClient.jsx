"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Info, MessageCircle, Share2 } from "lucide-react";

import {
  EVENT_TYPES,
  OPTIONAL_ITEMS,
  PLANNER_DEFAULTS,
  VENUE_OPTIONS,
  buildBrief,
  formatTRY,
  parsePlannerParams,
  planEvent,
} from "@/lib/eventPlanner";

const PHONE = "905453048671";

/**
 * Adim adim ilerleyen bir sihirbaz yerine TEK EKRAN + CANLI SONUC tercih edildi:
 * toplam bes girdi var, bunlari uc ekrana bolmek degeri geciktirmekten baska ise
 * yaramazdi. Kullanici her degisiklikte kapsamin ve butcenin nasil degistigini
 * aninda goruyor; aracin ogretici degeri buradan geliyor.
 */
export default function EventPlannerClient() {
  const [eventType, setEventType] = useState(PLANNER_DEFAULTS.eventType);
  const [guests, setGuests] = useState(PLANNER_DEFAULTS.guests);
  const [venue, setVenue] = useState(PLANNER_DEFAULTS.venue);
  const [days, setDays] = useState(PLANNER_DEFAULTS.days);
  const [city, setCity] = useState(PLANNER_DEFAULTS.city);
  const [extras, setExtras] = useState(PLANNER_DEFAULTS.extras);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Paylasilan bir plan baglantisi acildiysa durumu URL'den geri yukle.
  // Sunucuda okunmuyor: searchParams sayfayi dinamik render'a zorluyordu.
  useEffect(() => {
    const shared = parsePlannerParams(window.location.search);
    setEventType(shared.eventType);
    setGuests(shared.guests);
    setVenue(shared.venue);
    setDays(shared.days);
    setCity(shared.city);
    setExtras(shared.extras);
    setHydrated(true);
  }, []);

  const plan = useMemo(
    () => planEvent({ eventType, guests, venue, days, extras }),
    [eventType, guests, venue, days, extras],
  );

  // Plani paylasilabilir kilar: URL'yi gezinme yapmadan gunceller, boylece
  // kullanici linki kopyalayip ekibine gonderebilir. Ilk mount'ta calismaz,
  // yoksa paylasilan parametreleri varsayilanlarla ezerdi.
  useEffect(() => {
    if (!hydrated) return;

    const params = new URLSearchParams({
      tur: eventType,
      kisi: String(guests),
      mekan: venue,
      gun: String(days),
    });
    if (city.trim()) params.set("sehir", city.trim());
    if (extras.length) params.set("ek", extras.join(","));

    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [hydrated, eventType, guests, venue, days, city, extras]);

  const toggleExtra = (key) =>
    setExtras((current) =>
      current.includes(key) ? current.filter((item) => item !== key) : [...current, key],
    );

  const brief = buildBrief(plan, { city: city.trim() });
  const whatsappUrl = `https://wa.me/${PHONE}?text=${encodeURIComponent(brief)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.href}\n\n${brief}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  // Turun zaten kapsadigi kalemler ek listesinde gosterilmez.
  const availableExtras = OPTIONAL_ITEMS.filter(
    (item) => !plan.type.needs.includes(item.key),
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-start">
      {/* ── Girdiler ── */}
      <div className="space-y-8">
        <fieldset>
          <legend className="text-lg font-black text-slate-950">1. Etkinlik türü</legend>
          <p className="mt-1 text-sm text-slate-600">
            Tür, hangi teknik kalemlerin tipik olduğunu belirler.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {EVENT_TYPES.map((type) => (
              <label
                key={type.key}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                  eventType === type.key
                    ? "border-blue-600 bg-blue-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  name="etkinlik-turu"
                  value={type.key}
                  checked={eventType === type.key}
                  onChange={() => setEventType(type.key)}
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <span className="text-sm font-bold text-slate-900">{type.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="grid gap-4 sm:grid-cols-2">
          <legend className="text-lg font-black text-slate-950">2. Ölçek</legend>
          <div className="mt-4 sm:col-span-1">
            <label htmlFor="planlayici-kisi" className="block text-sm font-bold text-slate-800">
              Kişi sayısı
            </label>
            <input
              id="planlayici-kisi"
              type="number"
              min={1}
              max={100000}
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="mt-2 min-h-[48px] w-full rounded-xl border border-slate-200 px-4 text-base font-semibold text-slate-900 focus-ring"
            />
          </div>
          <div className="mt-4 sm:col-span-1">
            <label htmlFor="planlayici-gun" className="block text-sm font-bold text-slate-800">
              Kaç gün sürecek?
            </label>
            <input
              id="planlayici-gun"
              type="number"
              min={1}
              max={30}
              value={days}
              onChange={(event) => setDays(event.target.value)}
              className="mt-2 min-h-[48px] w-full rounded-xl border border-slate-200 px-4 text-base font-semibold text-slate-900 focus-ring"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-black text-slate-950">3. Mekân</legend>
          <div className="mt-4 space-y-2">
            {VENUE_OPTIONS.map((option) => (
              <label
                key={option.key}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                  venue === option.key
                    ? "border-blue-600 bg-blue-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-blue-300"
                }`}
              >
                <input
                  type="radio"
                  name="mekan"
                  value={option.key}
                  checked={venue === option.key}
                  onChange={() => setVenue(option.key)}
                  className="mt-1 h-4 w-4 accent-blue-600"
                />
                <span>
                  <span className="block text-sm font-bold text-slate-900">{option.label}</span>
                  <span className="mt-0.5 block text-sm leading-6 text-slate-600">
                    {option.note}
                  </span>
                </span>
              </label>
            ))}
          </div>

          <div className="mt-4">
            <label htmlFor="planlayici-sehir" className="block text-sm font-bold text-slate-800">
              Şehir <span className="font-medium text-slate-500">(isteğe bağlı)</span>
            </label>
            <input
              id="planlayici-sehir"
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Örn: Ankara"
              className="mt-2 min-h-[48px] w-full rounded-xl border border-slate-200 px-4 text-base font-semibold text-slate-900 focus-ring"
            />
          </div>
        </fieldset>

        {availableExtras.length > 0 ? (
          <fieldset>
            <legend className="text-lg font-black text-slate-950">4. Kapsama ekleyin</legend>
            <p className="mt-1 text-sm text-slate-600">
              {plan.type.label} için tipik olmayan ama sık eklenen kalemler.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {availableExtras.map((item) => (
                <label
                  key={item.key}
                  className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                    extras.includes(item.key)
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={extras.includes(item.key)}
                    onChange={() => toggleExtra(item.key)}
                    className="mt-1 h-4 w-4 accent-blue-600"
                  />
                  <span>
                    <span className="block text-sm font-bold text-slate-900">{item.label}</span>
                    <span className="mt-0.5 block text-xs leading-5 text-slate-600">
                      {item.hint}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}
      </div>

      {/* ── Sonuç ── */}
      <aside
        aria-label="Önerilen teknik kapsam"
        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl lg:sticky lg:top-24"
      >
        <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
          Önerilen teknik kapsam
        </p>
        <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950">
          {plan.type.label} · {plan.guests.toLocaleString("tr-TR")} kişi
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{plan.type.note}</p>

        <ul className="mt-5 space-y-3" aria-live="polite">
          {plan.items.map((item) => (
            <li
              key={item.key}
              className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 last:border-0"
            >
              <span className="min-w-0">
                <Link
                  href={item.href}
                  className="text-sm font-black text-slate-900 underline underline-offset-4 hover:text-blue-700"
                >
                  {item.label}
                </Link>
                {item.optional ? (
                  <span className="ml-2 rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-700">
                    eklendi
                  </span>
                ) : null}
                <span className="mt-0.5 block text-xs leading-5 text-slate-600">
                  {item.detail}
                </span>
              </span>
              <span className="shrink-0 text-sm font-black text-slate-900">
                {item.priced ? (
                  formatTRY(item.price)
                ) : (
                  <span className="text-xs font-bold text-slate-500">projeye göre</span>
                )}
              </span>
            </li>
          ))}
        </ul>

        {plan.budget ? (
          <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
              Yaklaşık başlangıç aralığı
            </p>
            <p className="mt-2 text-2xl font-black leading-tight">
              {formatTRY(plan.budget.low)}
              <span className="mx-1.5 text-slate-400">–</span>
              {formatTRY(plan.budget.high)}
            </p>
            <p className="mt-3 text-xs leading-5 text-slate-300">
              Bu bir teklif değildir. Rakamlar sitede yayımlanan başlangıç bedellerinden
              hesaplanır; kesin fiyat keşif sonrası netleşir.
            </p>
          </div>
        ) : null}

        {plan.excluded.length > 0 ? (
          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-wide text-amber-900">
              <Info className="h-4 w-4" aria-hidden="true" />
              Aralığa dahil olmayanlar
            </p>
            <ul className="mt-2 space-y-1 text-xs leading-5 text-amber-900">
              {plan.excluded.map((entry) => (
                <li key={entry}>• {entry}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-5 text-sm font-black text-white transition hover:bg-green-700"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Bu planla WhatsApp&apos;tan teklif al
          </a>
          <Link
            href="/iletisim"
            className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-slate-950 px-5 text-sm font-black text-slate-950 transition hover:bg-slate-950 hover:text-white"
          >
            Formla teklif isteyin
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={handleCopy}
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-5 text-sm font-bold text-slate-700 transition hover:border-blue-400 hover:text-blue-800"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" aria-hidden="true" />
                Kopyalandı
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Planı kopyala ve paylaş
              </>
            )}
          </button>
          <p aria-live="polite" className="sr-only">
            {copied ? "Plan panoya kopyalandı." : ""}
          </p>
        </div>
      </aside>
    </div>
  );
}
