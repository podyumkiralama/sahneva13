import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";
import { PODIUM_UNIT_PRICES, multiDayTotal } from "@/lib/pricing";
import { searchEntries } from "@/lib/search/core";
import { SAHNEVA_WEBMCP_TOOL_NAMES } from "@/lib/webmcp/toolNames";

export { SAHNEVA_WEBMCP_TOOL_NAMES };

const JSON_SCHEMA = "https://json-schema.org/draft/2020-12/schema";
const PRICE_VALID_UNTIL = "2027-12-31";

const TITLES = {
  tr: {
    search: "Sahneva sitesinde ara",
    service: "Doğru Sahneva hizmetini bul",
    quote: "Teklif briefi hazırla",
    led: "LED ekran başlangıç bedelini hesapla",
    podium: "Podyum başlangıç bedelini hesapla",
  },
  en: {
    search: "Search the Sahneva website",
    service: "Find the right Sahneva service",
    quote: "Prepare a quote brief",
    led: "Estimate an LED screen starting price",
    podium: "Estimate a stage platform starting price",
  },
  de: {
    search: "Sahneva-Website durchsuchen",
    service: "Passende Sahneva-Leistung finden",
    quote: "Angebotsbriefing vorbereiten",
    led: "Startpreis für eine LED-Wand berechnen",
    podium: "Startpreis für ein Podest berechnen",
  },
  ar: {
    search: "البحث في موقع Sahneva",
    service: "العثور على خدمة Sahneva المناسبة",
    quote: "إعداد موجز طلب عرض سعر",
    led: "تقدير السعر المبدئي لشاشة LED",
    podium: "تقدير السعر المبدئي للمنصة",
  },
  ru: {
    search: "Поиск по сайту Sahneva",
    service: "Подобрать услугу Sahneva",
    quote: "Подготовить бриф для расчёта",
    led: "Рассчитать стартовую цену LED-экрана",
    podium: "Рассчитать стартовую цену подиума",
  },
  zh: {
    search: "搜索 Sahneva 网站",
    service: "查找合适的 Sahneva 服务",
    quote: "准备报价需求简报",
    led: "估算 LED 屏幕起始价格",
    podium: "估算舞台平台起始价格",
  },
};

const LOCALE_PATHS = {
  tr: {
    contact: "/iletisim",
    services: {
      stage: "/sahne-kiralama",
      stage_platform: "/podyum-kiralama",
      led_screen: "/led-ekran-kiralama",
      sound_light_av: "/ses-isik-sistemleri",
      conference_congress_av: "/kurumsal-organizasyon",
      truss_rigging: "/truss-kiralama",
      tent_outdoor_infrastructure: "/cadir-kiralama",
      corporate_event_production: "/kurumsal-organizasyon",
      mice: "/turkiyede-etkinlik-cozum-ortagi",
      esports_arena_production: "/turkiyede-etkinlik-cozum-ortagi",
      technical_field_operation: "/turkiyede-etkinlik-cozum-ortagi",
    },
  },
  en: {
    contact: "/en/contact",
    services: {
      stage: "/en/stage-rental",
      stage_platform: "/en/podium-rental",
      led_screen: "/en/led-screen-rental",
      sound_light_av: "/en/sound-light-rental",
      conference_congress_av: "/en/conference-av-rental-istanbul",
      truss_rigging: "/en/truss-rental",
      tent_outdoor_infrastructure: "/en/tent-rental",
      corporate_event_production: "/en/corporate-events",
      mice: "/en/mice-turkey",
      esports_arena_production: "/en/event-production-company-turkey",
      technical_field_operation: "/en/event-production-company-turkey",
    },
  },
  de: {
    contact: "/de/kontakt",
    services: {
      stage: "/de/buehne-mieten",
      stage_platform: "/de/podium-preise",
      led_screen: "/de/led-wand-mieten",
      sound_light_av: "/de/ton-und-lichttechnik",
      conference_congress_av: "/de/firmenevents",
      truss_rigging: "/de/traversen-mieten",
      tent_outdoor_infrastructure: "/de/zelt-mieten",
      corporate_event_production: "/de/firmenevents",
      mice: "/de/mice-tuerkei",
      esports_arena_production: "/de/eventproduktion-tuerkei",
      technical_field_operation: "/de/eventproduktion-tuerkei",
    },
  },
  ru: {
    contact: "/ru/contact",
    services: {
      stage: "/ru/stage-rental",
      stage_platform: "/ru/stage-rental",
      led_screen: "/ru/led-screen-rental",
      sound_light_av: "/ru/sound-light-rental",
      conference_congress_av: "/ru/corporate-events",
      truss_rigging: "/ru/services",
      tent_outdoor_infrastructure: "/ru/tent-rental",
      corporate_event_production: "/ru/corporate-events",
      mice: "/ru/event-production-company-turkey",
      esports_arena_production: "/ru/event-production-company-turkey",
      technical_field_operation: "/ru/event-production-company-turkey",
    },
  },
  zh: {
    contact: "/zh/contact",
    services: {
      stage: "/zh/stage-rental",
      stage_platform: "/zh/stage-rental",
      led_screen: "/zh/led-screen-rental",
      sound_light_av: "/zh/sound-light-rental",
      conference_congress_av: "/zh/corporate-events",
      truss_rigging: "/zh/services",
      tent_outdoor_infrastructure: "/zh/tent-rental",
      corporate_event_production: "/zh/corporate-events",
      mice: "/zh/services",
      esports_arena_production: "/zh/services",
      technical_field_operation: "/zh/services",
    },
  },
  ar: {
    contact: "/ar/contact",
    services: {
      stage: "/ar/services",
      stage_platform: "/ar/services",
      led_screen: "/ar/services",
      sound_light_av: "/ar/services",
      conference_congress_av: "/ar/services",
      truss_rigging: "/ar/services",
      tent_outdoor_infrastructure: "/ar/services",
      corporate_event_production: "/ar/event-production-company-turkey",
      mice: "/ar/event-production-company-turkey",
      esports_arena_production: "/ar/event-production-company-turkey",
      technical_field_operation: "/ar/event-production-company-turkey",
    },
  },
};

const SERVICE_CATEGORIES = Object.freeze([
  "stage",
  "stage_platform",
  "led_screen",
  "sound_light_av",
  "conference_congress_av",
  "truss_rigging",
  "tent_outdoor_infrastructure",
  "corporate_event_production",
  "mice",
  "esports_arena_production",
  "technical_field_operation",
]);

const SERVICE_BRIEF_FIELDS = {
  stage: ["dimensions", "height", "venue access", "load requirements"],
  stage_platform: ["width", "length", "height", "surface finish", "stairs or ramp"],
  led_screen: ["screen dimensions", "indoor or outdoor", "viewing distance", "content source", "rigging"],
  sound_light_av: ["audience size", "venue dimensions", "microphone count", "performance format", "lighting brief"],
  conference_congress_av: ["room plan", "speaker programme", "presentation sources", "interpretation", "livestream"],
  truss_rigging: ["structure dimensions", "loads", "hanging points", "ceiling height", "wind exposure"],
  tent_outdoor_infrastructure: ["covered area", "ground type", "guest capacity", "weather exposure", "flooring or HVAC"],
  corporate_event_production: ["run of show", "speaker programme", "brand content", "venue plan", "rehearsal schedule"],
  mice: ["programme", "cities and venues", "room turns", "delegate count", "PCO or DMC scope"],
  esports_arena_production: ["arena layout", "player desks", "LED surfaces", "broadcast requirements", "rehearsal schedule"],
  technical_field_operation: ["load-in and load-out", "technical rider", "crew departments", "power and signal plan", "site handover"],
};

function inputObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new TypeError("Tool input must be an object.");
  }
  return value;
}

function toolInput(value, allowedKeys) {
  const input = inputObject(value);
  const unknownKey = Object.keys(input).find((key) => !allowedKeys.includes(key));
  if (unknownKey) throw new TypeError(`${unknownKey} is not supported.`);
  return input;
}

function stringValue(input, key, { required = false, maxLength = 500 } = {}) {
  const value = input[key];
  if (value == null || value === "") {
    if (required) throw new TypeError(`${key} is required.`);
    return "";
  }
  if (typeof value !== "string") throw new TypeError(`${key} must be a string.`);
  const trimmed = value.trim();
  if (required && !trimmed) throw new TypeError(`${key} is required.`);
  if (trimmed.length > maxLength) throw new RangeError(`${key} is too long.`);
  return trimmed;
}

function numberValue(input, key, { required = false, fallback, min = 0, max = 10000 } = {}) {
  const value = input[key];
  if (value == null || value === "") {
    if (required) throw new TypeError(`${key} is required.`);
    return fallback;
  }
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${key} must be a finite number.`);
  }
  if (value < min || value > max) throw new RangeError(`${key} is outside the supported range.`);
  return value;
}

function integerValue(input, key, options) {
  const value = numberValue(input, key, options);
  if (value == null) return value;
  if (!Number.isInteger(value)) throw new TypeError(`${key} must be an integer.`);
  return value;
}

function booleanValue(input, key, fallback = false) {
  const value = input[key];
  if (value == null) return fallback;
  if (typeof value !== "boolean") throw new TypeError(`${key} must be a boolean.`);
  return value;
}

function enumValue(input, key, values, fallback) {
  const value = input[key] ?? fallback;
  if (!values.includes(value)) throw new TypeError(`${key} is not supported.`);
  return value;
}

function throwIfAborted(options) {
  if (!options?.signal?.aborted) return;
  throw options.signal.reason ?? new DOMException("The tool call was cancelled.", "AbortError");
}

function absoluteUrl(origin, path) {
  return new URL(path, origin).href;
}

function localeConfig(locale) {
  return LOCALE_PATHS[locale] ?? LOCALE_PATHS.en;
}

function localizedTitles(locale) {
  return TITLES[locale] ?? TITLES.en;
}

function roundedMoney(value) {
  return Math.round(value);
}

function isIstanbulCity(value) {
  if (!value) return false;
  return value
    .trim()
    .normalize("NFC")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i") === "istanbul";
}

export function createSahnevaWebMcpTools({ locale = "en", origin }) {
  const config = localeConfig(locale);
  const title = localizedTitles(locale);
  const contactPage = absoluteUrl(origin, config.contact);

  return [
    {
      name: "searchSahnevaSite",
      title: title.search,
      description:
        "Search Sahneva service, project and guide pages. This is a read-only site search and does not navigate the page.",
      inputSchema: {
        $schema: JSON_SCHEMA,
        type: "object",
        additionalProperties: false,
        properties: {
          query: { type: "string", minLength: 1, maxLength: 120, description: "Search phrase." },
        },
        required: ["query"],
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      async execute(rawInput, options) {
        throwIfAborted(options);
        const input = toolInput(rawInput, ["query"]);
        const query = stringValue(input, "query", { required: true, maxLength: 120 });
        const response = await fetch(absoluteUrl(origin, "/api/search-index"), {
          headers: { Accept: "application/json" },
          signal: options?.signal,
        });
        if (!response.ok) throw new Error(`Site search failed with HTTP ${response.status}.`);
        const index = await response.json();
        const results = searchEntries(Array.isArray(index) ? index : [], query, { limit: 8 });
        return {
          query,
          searchPage: `${absoluteUrl(origin, "/search")}?q=${encodeURIComponent(query)}`,
          resultCount: results.length,
          results: results.map(({ label, href, description, type }) => ({
            title: label,
            url: absoluteUrl(origin, href),
            description,
            type,
          })),
        };
      },
    },
    {
      name: "findSahnevaService",
      title: title.service,
      description:
        "Match an event production need to the most relevant Sahneva page in the current language. The result is guidance only and does not confirm stock, crew, venue access or pricing.",
      inputSchema: {
        $schema: JSON_SCHEMA,
        type: "object",
        additionalProperties: false,
        properties: {
          serviceCategory: { type: "string", enum: SERVICE_CATEGORIES },
          city: { type: "string", maxLength: 100 },
          eventType: { type: "string", maxLength: 160 },
          scopeNotes: { type: "string", maxLength: 1000 },
        },
        required: ["serviceCategory"],
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      async execute(rawInput, options) {
        throwIfAborted(options);
        const input = toolInput(rawInput, [
          "serviceCategory",
          "city",
          "eventType",
          "scopeNotes",
        ]);
        const serviceCategory = enumValue(input, "serviceCategory", SERVICE_CATEGORIES);
        const city = stringValue(input, "city", { maxLength: 100 });
        const eventType = stringValue(input, "eventType", { maxLength: 160 });
        const scopeNotes = stringValue(input, "scopeNotes", { maxLength: 1000 });
        return {
          serviceCategory,
          servicePage: absoluteUrl(origin, config.services[serviceCategory]),
          contactPage,
          city: city || null,
          eventType: eventType || null,
          scopeNotes: scopeNotes || null,
          requiredBriefFields: ["event date", "city", "venue", "audience size", ...(SERVICE_BRIEF_FIELDS[serviceCategory] ?? [])],
          availabilityConfirmed: false,
          pricingConfirmed: false,
          nextStep: "Review the recommended page, then send the listed brief fields to Sahneva for confirmation.",
        };
      },
    },
    {
      name: "prepareSahnevaQuoteBrief",
      title: title.quote,
      description:
        "Prepare a reviewable event production quote brief and return the Sahneva contact page. This tool never submits a form, sends a message or contacts Sahneva.",
      inputSchema: {
        $schema: JSON_SCHEMA,
        type: "object",
        additionalProperties: false,
        properties: {
          eventType: { type: "string", minLength: 1, maxLength: 160 },
          eventDate: { type: "string", maxLength: 80 },
          city: { type: "string", maxLength: 100 },
          venue: { type: "string", maxLength: 200 },
          audienceSize: { type: "integer", minimum: 0, maximum: 1000000 },
          technicalScope: { type: "string", maxLength: 2000 },
          loadInOut: { type: "string", maxLength: 500 },
        },
        required: ["eventType"],
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      async execute(rawInput, options) {
        throwIfAborted(options);
        const input = toolInput(rawInput, [
          "eventType",
          "eventDate",
          "city",
          "venue",
          "audienceSize",
          "technicalScope",
          "loadInOut",
        ]);
        const brief = {
          eventType: stringValue(input, "eventType", { required: true, maxLength: 160 }),
          eventDate: stringValue(input, "eventDate", { maxLength: 80 }) || null,
          city: stringValue(input, "city", { maxLength: 100 }) || null,
          venue: stringValue(input, "venue", { maxLength: 200 }) || null,
          audienceSize: integerValue(input, "audienceSize", { min: 0, max: 1000000, fallback: null }),
          technicalScope: stringValue(input, "technicalScope", { maxLength: 2000 }) || null,
          loadInOut: stringValue(input, "loadInOut", { maxLength: 500 }) || null,
        };
        return {
          status: "ready_for_user_review",
          brief,
          missingRecommendedFields: Object.entries(brief)
            .filter(([, value]) => value == null || value === "")
            .map(([key]) => key),
          contactPage,
          submitted: false,
          instruction: "Review and complete the brief before submitting it through the Sahneva contact page.",
        };
      },
    },
    {
      name: "calculateSahnevaLedEstimate",
      title: title.led,
      description:
        "Calculate a read-only LED screen rental starting estimate from Sahneva's published rates. It is not a final quote and does not confirm equipment availability.",
      inputSchema: {
        $schema: JSON_SCHEMA,
        type: "object",
        additionalProperties: false,
        properties: {
          screenType: { type: "string", enum: ["standard", "p19"], default: "standard" },
          widthMeters: { type: "number", minimum: 0.1, maximum: 100 },
          heightMeters: { type: "number", minimum: 0.1, maximum: 50 },
          days: { type: "integer", minimum: 1, maximum: 30, default: 1 },
          watchout: { type: "boolean", default: false },
        },
        required: ["widthMeters", "heightMeters"],
      },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      async execute(rawInput, options) {
        throwIfAborted(options);
        const input = toolInput(rawInput, [
          "screenType",
          "widthMeters",
          "heightMeters",
          "days",
          "watchout",
        ]);
        const screenType = enumValue(input, "screenType", ["standard", "p19"], "standard");
        const width = numberValue(input, "widthMeters", { required: true, min: 0.1, max: 100 });
        const height = numberValue(input, "heightMeters", { required: true, min: 0.1, max: 50 });
        const days = integerValue(input, "days", { fallback: 1, min: 1, max: 30 });
        const watchout = booleanValue(input, "watchout");
        const pricing = screenType === "p19" ? LED_SCREEN_PRICING.premiumP19 : LED_SCREEN_PRICING.standard;
        const areaSqm = width * height;
        const calculatedDaily = areaSqm * pricing.perSqm;
        const usesMinimum = screenType === "standard"
          ? areaSqm <= 15 || calculatedDaily < pricing.minimum
          : calculatedDaily < pricing.minimum;
        const firstDay = usesMinimum ? pricing.minimum : calculatedDaily;
        const screenTotal = multiDayTotal(firstDay, days);
        const watchoutAmount = watchout ? LED_SCREEN_PRICING.watchout : 0;
        return {
          status: "published_starting_estimate",
          currency: LED_SCREEN_PRICING.currency,
          priceValidUntil: LED_SCREEN_PRICING.priceValidUntil,
          screenType,
          dimensionsMeters: { width, height },
          areaSqm,
          days,
          usesMinimumPackage: usesMinimum,
          firstDay: roundedMoney(firstDay),
          screenTotal: roundedMoney(screenTotal),
          watchoutAmount: roundedMoney(watchoutAmount),
          estimatedTotal: roundedMoney(screenTotal + watchoutAmount),
          finalPriceConfirmed: false,
          contactPage,
          note: "Venue access, rigging, processor, crew, power, content routing and logistics can change the final proposal.",
        };
      },
    },
    {
      name: "calculateSahnevaPodiumEstimate",
      title: title.podium,
      description:
        "Calculate a read-only modular stage platform starting estimate from Sahneva's published weekly rates. It is not a final quote and does not confirm availability.",
      inputSchema: {
        $schema: JSON_SCHEMA,
        type: "object",
        additionalProperties: false,
        properties: {
          widthMeters: { type: "number", minimum: 0.1, maximum: 100 },
          lengthMeters: { type: "number", minimum: 0.1, maximum: 100 },
          rentalWeeks: { type: "integer", minimum: 1, maximum: 12, default: 1 },
          city: { type: "string", maxLength: 100 },
          includeCarpet: { type: "boolean", default: false },
          includeSkirt: { type: "boolean", default: false },
        },
        required: ["widthMeters", "lengthMeters"],
      },
      annotations: { readOnlyHint: true, untrustedContentHint: false },
      async execute(rawInput, options) {
        throwIfAborted(options);
        const input = toolInput(rawInput, [
          "widthMeters",
          "lengthMeters",
          "rentalWeeks",
          "city",
          "includeCarpet",
          "includeSkirt",
        ]);
        const width = numberValue(input, "widthMeters", { required: true, min: 0.1, max: 100 });
        const length = numberValue(input, "lengthMeters", { required: true, min: 0.1, max: 100 });
        const rentalWeeks = integerValue(input, "rentalWeeks", { fallback: 1, min: 1, max: 12 });
        const city = stringValue(input, "city", { maxLength: 100 });
        const includeCarpet = booleanValue(input, "includeCarpet");
        const includeSkirt = booleanValue(input, "includeSkirt");
        const areaSqm = width * length;
        const perimeterMeters = 2 * (width + length);
        const platform = areaSqm * PODIUM_UNIT_PRICES.platformSqmWeek * rentalWeeks;
        const carpet = includeCarpet ? areaSqm * PODIUM_UNIT_PRICES.carpetSqmWeek * rentalWeeks : 0;
        const skirt = includeSkirt ? perimeterMeters * PODIUM_UNIT_PRICES.skirtMetreWeek * rentalWeeks : 0;
        const isIstanbul = isIstanbulCity(city);
        const publishedLogistics = isIstanbul && areaSqm <= 200
          ? PODIUM_UNIT_PRICES.istanbulTransport
          : null;
        const subtotal = platform + carpet + skirt;
        return {
          status: "published_starting_estimate",
          currency: PODIUM_UNIT_PRICES.currency,
          priceValidUntil: PRICE_VALID_UNTIL,
          dimensionsMeters: { width, length },
          areaSqm,
          perimeterMeters,
          rentalWeeks,
          lineItems: {
            platform: roundedMoney(platform),
            carpet: roundedMoney(carpet),
            skirt: roundedMoney(skirt),
            logistics: publishedLogistics == null ? null : roundedMoney(publishedLogistics),
          },
          estimatedTotal: publishedLogistics == null ? null : roundedMoney(subtotal + publishedLogistics),
          subtotalBeforeUnconfirmedLogistics: roundedMoney(subtotal),
          finalPriceConfirmed: false,
          contactPage,
          note: publishedLogistics == null
            ? "Logistics, installation and dismantling require a route and site-access review for this city or area."
            : "Published Istanbul logistics applies to projects up to 200 m²; height, stairs, ramps, access and special finishes can change the final proposal.",
        };
      },
    },
  ];
}
