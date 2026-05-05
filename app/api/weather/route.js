import { NextResponse } from "next/server";

const CITY_COORDINATES = {
  istanbul: { name: "İstanbul", lat: 41.0082, lon: 28.9784 },
  ankara: { name: "Ankara", lat: 39.9334, lon: 32.8597 },
  izmir: { name: "İzmir", lat: 38.4237, lon: 27.1428 },
  antalya: { name: "Antalya", lat: 36.8969, lon: 30.7133 },
  bursa: { name: "Bursa", lat: 40.1826, lon: 29.0665 },
  konya: { name: "Konya", lat: 37.8746, lon: 32.4932 },
  gaziantep: { name: "Gaziantep", lat: 37.0662, lon: 37.3833 },
};

const CACHE_CONTROL = "public, s-maxage=900, stale-while-revalidate=1800";

function createJsonResponse(payload, init = {}) {
  const headers = new Headers(init.headers);
  headers.set("Cache-Control", init.cacheControl ?? CACHE_CONTROL);

  return NextResponse.json(payload, {
    ...init,
    headers,
  });
}

function normalizeCity(value) {
  const key = typeof value === "string" ? value.toLowerCase().trim() : "";
  return CITY_COORDINATES[key] ? key : "istanbul";
}

function getLocalDateKey(timestamp, timezoneOffsetSeconds = 0) {
  const localDate = new Date((timestamp + timezoneOffsetSeconds) * 1000);
  return localDate.toISOString().slice(0, 10);
}

function pickRepresentativeForecast(items = []) {
  if (!items.length) return null;

  return items.reduce((closest, item) => {
    const itemHour = new Date((item.dt ?? 0) * 1000).getUTCHours();
    const closestHour = new Date((closest.dt ?? 0) * 1000).getUTCHours();
    return Math.abs(itemHour - 12) < Math.abs(closestHour - 12) ? item : closest;
  }, items[0]);
}

function summarizeForecastDay(items = []) {
  const representative = pickRepresentativeForecast(items);
  const weather = representative?.weather?.[0] ?? items[0]?.weather?.[0];

  return {
    dt: representative?.dt ?? items[0]?.dt,
    description: weather?.description ?? "Tahmin bilgisi bekleniyor",
    icon: weather?.icon ?? null,
    tempMin: Math.round(
      Math.min(...items.map((item) => Number(item.main?.temp_min ?? item.main?.temp ?? 0))),
    ),
    tempMax: Math.round(
      Math.max(...items.map((item) => Number(item.main?.temp_max ?? item.main?.temp ?? 0))),
    ),
    precipitationProbability: Math.round(
      Math.max(...items.map((item) => Number(item.pop ?? 0))) * 100,
    ),
    windSpeed: Number(
      Math.max(...items.map((item) => Number(item.wind?.speed ?? 0))).toFixed(1),
    ),
  };
}

function buildDailyForecast(list = [], timezoneOffsetSeconds = 0) {
  const grouped = new Map();

  for (const item of list) {
    if (!item?.dt) continue;
    const key = getLocalDateKey(item.dt, timezoneOffsetSeconds);
    const group = grouped.get(key) ?? [];
    group.push(item);
    grouped.set(key, group);
  }

  return Array.from(grouped.values()).slice(0, 5).map(summarizeForecastDay);
}

export async function GET(request) {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return createJsonResponse(
      {
        error:
          "Hava durumu verisi şu anda yapılandırılmadı. Teklif planlaması için Sahneva ekibiyle iletişime geçebilirsiniz.",
      },
      {
        status: 503,
        cacheControl: "no-store",
      },
    );
  }

  const { searchParams } = new URL(request.url);
  const cityKey = normalizeCity(searchParams.get("city"));
  const city = CITY_COORDINATES[cityKey];

  const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
  url.searchParams.set("lat", String(city.lat));
  url.searchParams.set("lon", String(city.lon));
  url.searchParams.set("units", "metric");
  url.searchParams.set("lang", "tr");
  url.searchParams.set("appid", apiKey);

  try {
    const response = await fetch(url, {
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return createJsonResponse(
        {
          error:
            "Hava durumu tahmini alınamadı. Açık hava kurulum planı için ekibimizden destek alabilirsiniz.",
        },
        {
          status: response.status,
          cacheControl: "public, s-maxage=300, stale-while-revalidate=900",
        },
      );
    }

    const data = await response.json();
    const timezoneOffsetSeconds = Number(data.city?.timezone ?? 0);
    const daily = Array.isArray(data.list)
      ? buildDailyForecast(data.list, timezoneOffsetSeconds)
      : [];

    return createJsonResponse({
      city: city.name,
      cityKey,
      timezone: data.city?.timezone ?? "Europe/Istanbul",
      daily,
    });
  } catch {
    return createJsonResponse(
      {
        error:
          "Hava durumu servisine ulaşılamadı. Yağış, rüzgar ve zemin riski için teklif aşamasında teknik planlama yapılabilir.",
      },
      {
        status: 502,
        cacheControl: "public, s-maxage=300, stale-while-revalidate=900",
      },
    );
  }
}
