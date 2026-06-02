"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  CloudRain,
  Loader2,
  MessageCircle,
  ShieldCheck,
  ThermometerSun,
  Wind,
} from "lucide-react";

const CITIES = [
  { key: "istanbul", label: "İstanbul" },
  { key: "ankara", label: "Ankara" },
  { key: "izmir", label: "İzmir" },
  { key: "antalya", label: "Antalya" },
  { key: "bursa", label: "Bursa" },
  { key: "konya", label: "Konya" },
  { key: "gaziantep", label: "Gaziantep" },
];

const CITY_LABELS = CITIES.reduce((acc, city) => {
  acc[city.key] = city.label;
  return acc;
}, {});

const DEFAULT_WHATSAPP_TEXT = encodeURIComponent(
  "Merhaba, açık hava etkinliği için rüzgar, yağış ve zemin riskine göre güvenli kurulum planı hakkında teklif almak istiyorum.",
);

const DEFAULT_WHATSAPP_HREF = `https://wa.me/905453048671?text=${DEFAULT_WHATSAPP_TEXT}&utm_source=weather_widget&utm_medium=service_page_cta`;

function formatForecastDay(timestamp) {
  if (!timestamp) return "Gün";

  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date(timestamp * 1000));
}

function getRiskTone(day) {
  const windSpeed = Number(day?.windSpeed ?? 0);
  const pop = Number(day?.precipitationProbability ?? 0);

  if (windSpeed >= 10 || pop >= 70) {
    return {
      label: "Ek kontrol",
      className: "border-amber-300/30 bg-amber-400/10 text-amber-100",
    };
  }

  if (windSpeed >= 6 || pop >= 40) {
    return {
      label: "Planlama",
      className: "border-blue-300/30 bg-blue-400/10 text-blue-100",
    };
  }

  return {
    label: "Uygun",
    className: "border-emerald-300/30 bg-emerald-400/10 text-emerald-100",
  };
}

function WeatherSkeleton() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="min-h-[168px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.06] p-4"
        >
          <div className="h-4 w-20 rounded-full bg-white/15" />
          <div className="mt-5 h-5 w-28 rounded-full bg-white/10" />
          <div className="mt-6 h-3 w-full rounded-full bg-white/10" />
          <div className="mt-3 h-3 w-2/3 rounded-full bg-white/10" />
        </div>
      ))}
    </div>
  );
}

export default function EventWeatherWidget({
  defaultCity = "istanbul",
  whatsappHref = DEFAULT_WHATSAPP_HREF,
}) {
  const sectionRef = useRef(null);
  const normalizedDefaultCity = CITY_LABELS[defaultCity] ? defaultCity : "istanbul";
  const [selectedCity, setSelectedCity] = useState(normalizedDefaultCity);
  const [forecast, setForecast] = useState([]);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  const selectedCityLabel = useMemo(
    () => CITY_LABELS[selectedCity] ?? "İstanbul",
    [selectedCity],
  );

  useEffect(() => {
    if (hasEnteredViewport) return undefined;
    const node = sectionRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setHasEnteredViewport(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setHasEnteredViewport(true);
        observer.disconnect();
      },
      { rootMargin: "420px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  useEffect(() => {
    if (!hasEnteredViewport) return undefined;
    let isMounted = true;
    const controller = new AbortController();

    async function loadWeather() {
      setStatus("loading");
      setMessage("");

      try {
        const response = await fetch(`/api/weather?city=${selectedCity}`, {
          signal: controller.signal,
        });
        const data = await response.json();

        if (!isMounted) return;

        if (!response.ok) {
          setForecast([]);
          setMessage(data?.error ?? "Hava durumu tahmini şu anda alınamadı.");
          setStatus("error");
          return;
        }

        if (!Array.isArray(data?.daily) || data.daily.length === 0) {
          setForecast([]);
          setMessage("Bu şehir için 5 günlük tahmin verisi bulunamadı.");
          setStatus("empty");
          return;
        }

        setForecast(data.daily.slice(0, 5));
        setStatus("success");
      } catch (error) {
        if (!isMounted || error.name === "AbortError") return;
        setForecast([]);
        setMessage("Hava durumu servisine şu anda ulaşılamadı.");
        setStatus("error");
      }
    }

    loadWeather();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [hasEnteredViewport, selectedCity]);

  return (
    <section
      ref={sectionRef}
      className="content-visibility-auto [contain-intrinsic-size:auto_980px] lg:[contain-intrinsic-size:auto_760px] relative overflow-hidden bg-[#0B1120] py-14 text-white sm:py-18 lg:py-20"
      aria-labelledby="event-weather-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_44%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-extrabold text-blue-100">
            <ShieldCheck aria-hidden="true" className="h-4 w-4" />
            Açık hava kurulum güvenliği
          </div>
          <h2
            id="event-weather-title"
            className="text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl"
          >
            Açık Hava Etkinliklerinde Hava Durumu Planlaması
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Açık hava organizasyonlarında rüzgar, yağış ve zemin koşulları sahne
            kurulumu, çadır planlaması ve teknik ekipman güvenliği açısından
            kritik rol oynar. Etkinlik tarihiniz öncesinde hava durumunu kontrol
            ederek gerekli teknik önlemleri planlayabilirsiniz.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.45)] backdrop-blur sm:p-6">
          <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(240px,360px)_1fr] lg:items-end">
            <div>
              <label
                htmlFor="event-weather-city"
                className="text-sm font-bold text-slate-200"
              >
                Şehir seçin
              </label>
              <select
                id="event-weather-city"
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
                className="mt-2 min-h-[44px] w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-sm font-bold text-white outline-none transition-colors focus:border-blue-300 focus:ring-2 focus:ring-blue-500"
              >
                {CITIES.map((city) => (
                  <option key={city.key} value={city.key}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 lg:max-w-3xl lg:justify-self-end lg:text-right">
              {selectedCityLabel} için 5 günlük tahmin; rüzgar, yağış ve zemin
              hazırlığı açısından ön keşif niteliğindedir. Nihai kurulum kararı
              saha koşullarına göre verilir.
            </p>
          </div>

          <div className="min-h-[168px]" aria-live="polite">
            {status === "loading" ? (
              <div>
                <div className="mb-4 flex items-center gap-2 text-sm font-bold text-blue-100">
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Hava durumu tahmini yükleniyor...
                </div>
                <WeatherSkeleton />
              </div>
            ) : null}

            {status === "error" || status === "empty" ? (
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center">
                <p className="text-base font-bold text-white">
                  Tahmin verisi şu anda gösterilemiyor.
                </p>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                  {message ||
                    "Yağış, rüzgar ve zemin riskleri teklif aşamasında ayrıca planlanabilir."}
                </p>
              </div>
            ) : null}

            {status === "success" ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {forecast.map((day) => {
                  const risk = getRiskTone(day);

                  return (
                    <article
                      key={day.dt}
                      className="min-h-[168px] rounded-3xl border border-white/10 bg-slate-950/55 p-4 shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="max-w-[7.5rem] text-sm font-black leading-tight text-white">
                          {formatForecastDay(day.dt)}
                        </h3>
                        <span
                          className={`shrink-0 rounded-full border px-2 py-1 text-[11px] font-extrabold leading-tight ${risk.className}`}
                        >
                          {risk.label}
                        </span>
                      </div>
                      <p className="mt-3 min-h-[34px] text-sm font-medium capitalize leading-snug text-slate-300">
                        {day.description}
                      </p>

                      <dl className="mt-4 space-y-2.5 text-sm">
                        <div className="flex items-center justify-between gap-2">
                          <dt className="flex items-center gap-2 text-slate-400">
                            <ThermometerSun aria-hidden="true" className="h-4 w-4 shrink-0" />
                            Sıcaklık
                          </dt>
                          <dd className="text-right font-black leading-tight text-white">
                            {day.tempMin}° / {day.tempMax}°
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="flex items-center gap-2 text-slate-400">
                            <CloudRain aria-hidden="true" className="h-4 w-4 shrink-0" />
                            Yağış
                          </dt>
                          <dd className="font-black text-white">
                            %{day.precipitationProbability}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <dt className="flex items-center gap-2 text-slate-400">
                            <Wind aria-hidden="true" className="h-4 w-4 shrink-0" />
                            Rüzgar
                          </dt>
                          <dd className="text-right font-black leading-tight text-white">
                            {Number(day.windSpeed).toFixed(1)} m/s
                          </dd>
                        </div>
                      </dl>
                    </article>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-5xl flex-col gap-4 rounded-3xl border border-blue-300/20 bg-blue-500/10 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold leading-relaxed text-blue-50 sm:text-base">
            Yağmur, rüzgar ve zemin riskine göre güvenli kurulum planı için
            Sahneva ekibinden teklif alın.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-black text-white shadow-lg shadow-emerald-950/30 transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:ring-offset-2 focus:ring-offset-[#0B1120]"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}
