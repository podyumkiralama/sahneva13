/**
 * Published LED screen pricing used by the TR/EN buyer guides, service-page
 * summaries and the interactive estimate calculator.
 *
 * Update rates here first so visible copy, JSON-LD and calculator output do
 * not drift between locales.
 */
export const LED_SCREEN_PRICING = Object.freeze({
  currency: "TRY",
  priceValidUntil: "2027-12-31",
  standard: Object.freeze({
    perSqm: 1800,
    minimum: 35000,
  }),
  premiumP19: Object.freeze({
    perSqm: 4500,
    minimum: 50000,
    availableSqm: 300,
  }),
  watchout: 50000,
});
