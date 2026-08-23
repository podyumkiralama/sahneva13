import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";
import { multiDayTotal } from "@/lib/pricing";

export const LED_SCREEN_TYPE_VALUES = Object.freeze(["standard", "p19"]);
export const LED_ESTIMATE_SCOPE_NOTE =
  "Venue access, rigging, processor, crew, power, content routing and logistics can change the final proposal.";

function finiteNumber(value, name, { min, max }) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number.`);
  }
  if (value < min || value > max) {
    throw new RangeError(`${name} is outside the supported range.`);
  }
  return value;
}

function roundedMoney(value) {
  return Math.round(value);
}

/**
 * Shared LED estimate engine for the visible calculator and WebMCP tools.
 * Callers validate/collect input independently; all output uses the same rates
 * and multi-day rule so declarative and imperative results cannot drift.
 */
export function calculateLedScreenEstimate({
  screenType = "standard",
  widthMeters,
  heightMeters,
  days = 1,
  watchout = false,
}) {
  if (!LED_SCREEN_TYPE_VALUES.includes(screenType)) {
    throw new TypeError("screenType is not supported.");
  }
  const width = finiteNumber(widthMeters, "widthMeters", { min: 0.1, max: 100 });
  const height = finiteNumber(heightMeters, "heightMeters", { min: 0.1, max: 50 });
  const rentalDays = finiteNumber(days, "days", { min: 1, max: 30 });
  if (!Number.isInteger(rentalDays)) throw new TypeError("days must be an integer.");
  if (typeof watchout !== "boolean") throw new TypeError("watchout must be a boolean.");

  const pricing = screenType === "p19"
    ? LED_SCREEN_PRICING.premiumP19
    : LED_SCREEN_PRICING.standard;
  const areaSqm = width * height;
  const calculatedDaily = areaSqm * pricing.perSqm;
  const usesMinimumPackage = screenType === "standard"
    ? areaSqm <= 15 || calculatedDaily < pricing.minimum
    : calculatedDaily < pricing.minimum;
  const firstDay = usesMinimumPackage ? pricing.minimum : calculatedDaily;
  const screenTotal = multiDayTotal(firstDay, rentalDays);
  const watchoutAmount = watchout ? LED_SCREEN_PRICING.watchout : 0;

  return {
    currency: LED_SCREEN_PRICING.currency,
    priceValidUntil: LED_SCREEN_PRICING.priceValidUntil,
    screenType,
    dimensionsMeters: { width, height },
    areaSqm,
    days: rentalDays,
    usesMinimumPackage,
    firstDay: roundedMoney(firstDay),
    screenTotal: roundedMoney(screenTotal),
    watchoutAmount: roundedMoney(watchoutAmount),
    estimatedTotal: roundedMoney(screenTotal + watchoutAmount),
  };
}
