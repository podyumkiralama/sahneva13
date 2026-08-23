"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import {
  LED_ESTIMATE_SCOPE_NOTE,
  calculateLedScreenEstimate,
} from "@/lib/ledEstimate";
import { LED_SCREEN_PRICING } from "@/lib/ledScreenPricing";

const SCREEN_TYPES = {
  standard: {
    label: "Standart LED ekran",
  },
  p19: {
    label: "P1.9 Indoor LED",
  },
};

const INITIAL_FORM_VALUES = Object.freeze({
  screenType: "standard",
  days: 1,
  width: 6,
  height: 3,
  watchout: false,
});

const WEB_MCP_LED_CALCULATOR_FORM_PROPS = {
  toolname: "calculateLedScreenEstimate",
  tooldescription:
    "Calculate an approximate LED screen rental starting price for Sahneva based on panel type, screen dimensions, rental days and optional Watchout production needs.",
};

const WEB_MCP_LED_FIELD_PROPS = {
  screenType: {
    toolparamdescription:
      "LED screen panel type or package, such as standard indoor/outdoor LED or P1.9 indoor LED.",
  },
  days: {
    toolparamdescription:
      "Number of rental days for the LED screen setup. Use at least one day.",
  },
  width: {
    toolparamdescription:
      "Requested LED screen width in meters.",
  },
  height: {
    toolparamdescription:
      "Requested LED screen height in meters.",
  },
  watchout: {
    toolparamdescription:
      "Whether advanced Watchout, mapping, multi-screen synchronization or enhanced visual control is required.",
  },
};

function formatPrice(value) {
  return `${Math.round(value).toLocaleString("tr-TR")} TL`;
}

function formatArea(value) {
  return `${value.toLocaleString("tr-TR", { maximumFractionDigits: 2 })} m²`;
}

function positiveNumber(value, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(parsed, 0);
}

function readSubmittedValues(form) {
  const formData = new FormData(form);
  const requestedScreenType = formData.get("screenType");

  return {
    screenType: requestedScreenType === "p19" ? "p19" : "standard",
    days: Math.max(Math.round(positiveNumber(formData.get("days"), 1)), 1),
    width: positiveNumber(formData.get("width")),
    height: positiveNumber(formData.get("height")),
    watchout: formData.has("watchout"),
  };
}

function estimateNote(estimate) {
  return estimate.usesMinimumPackage
    ? "Bu ölçüde m² hesabı yerine minimum kurulum paketi baz alınır."
    : "Bu ölçüde hesaplama m² başlangıç bedeli üzerinden yapılır.";
}

export default function LedPriceCalculator({ styles, phone, fallbackWhatsappUrl }) {
  const [screenType, setScreenType] = useState(INITIAL_FORM_VALUES.screenType);
  const [days, setDays] = useState(String(INITIAL_FORM_VALUES.days));
  const [width, setWidth] = useState(String(INITIAL_FORM_VALUES.width));
  const [height, setHeight] = useState(String(INITIAL_FORM_VALUES.height));
  const [watchout, setWatchout] = useState(INITIAL_FORM_VALUES.watchout);
  const [submittedValues, setSubmittedValues] = useState(INITIAL_FORM_VALUES);

  const result = useMemo(() => {
    const type = SCREEN_TYPES[submittedValues.screenType] || SCREEN_TYPES.standard;
    const estimate = calculateLedScreenEstimate({
      screenType: submittedValues.screenType,
      widthMeters: submittedValues.width,
      heightMeters: submittedValues.height,
      days: submittedValues.days,
      watchout: submittedValues.watchout,
    });

    const message =
      "Merhaba, LED ekran fiyat hesaplama sonucuna göre teklif almak istiyorum.\n" +
      `Ekran tipi: ${type.label}\n` +
      `Ölçü: ${estimate.dimensionsMeters.width}x${estimate.dimensionsMeters.height} m\n` +
      `Toplam alan: ${formatArea(estimate.areaSqm)}\n` +
      `Gün sayısı: ${estimate.days}\n` +
      `Watchout: ${submittedValues.watchout ? "Evet" : "Hayır"}\n` +
      `Yaklaşık başlangıç bedeli: ${formatPrice(estimate.estimatedTotal)}`;

    return {
      ...estimate,
      area: estimate.areaSqm,
      total: estimate.estimatedTotal,
      watchoutText: submittedValues.watchout
        ? `+${formatPrice(estimate.watchoutAmount)}`
        : "İsteğe bağlı",
      note: estimateNote(estimate),
      whatsappHref: phone
        ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        : fallbackWhatsappUrl,
    };
  }, [fallbackWhatsappUrl, phone, submittedValues]);

  function handleSubmit(event) {
    event.preventDefault();

    const nextValues = readSubmittedValues(event.currentTarget);
    const estimate = calculateLedScreenEstimate({
      screenType: nextValues.screenType,
      widthMeters: nextValues.width,
      heightMeters: nextValues.height,
      days: nextValues.days,
      watchout: nextValues.watchout,
    });
    const submitEvent = event.nativeEvent;

    if (
      submitEvent?.agentInvoked === true &&
      typeof submitEvent.respondWith === "function"
    ) {
      submitEvent.respondWith(
        Promise.resolve({
          status: "published_starting_estimate",
          ...estimate,
          finalPriceConfirmed: false,
          contactPage: new URL(
            "/iletisim",
            event.currentTarget.ownerDocument.location.origin,
          ).href,
          note: LED_ESTIMATE_SCOPE_NOTE,
        }),
      );
    }

    // An agent can populate native form controls without updating React state.
    // Sync both the visible fields and the submitted result from FormData.
    setScreenType(nextValues.screenType);
    setDays(String(nextValues.days));
    setWidth(String(nextValues.width));
    setHeight(String(nextValues.height));
    setWatchout(nextValues.watchout);
    setSubmittedValues(nextValues);
  }

  return (
    <div data-led-calculator style={styles.shell}>
      <div style={styles.grid}>
        <div style={styles.panel}>
          <p style={styles.eyebrow}>Hesaplama Aracı</p>
          <h2 style={styles.title}>LED ekran m² ve fiyat hesaplama</h2>
          <p style={styles.description}>
            Ekran ölçüsü, gün sayısı, panel tipi ve isteğe bağlı Watchout ihtiyacına göre yaklaşık başlangıç bedelini hesaplayın. Net teklif; kurulum saati, mekan erişimi, reji ve lojistik kapsamıyla birlikte kesinleşir.
          </p>

          <form
            style={styles.form}
            {...WEB_MCP_LED_CALCULATOR_FORM_PROPS}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="led-calc-type" style={styles.labelText}>
                Ekran tipi
              </label>
              <select
                id="led-calc-type"
                name="screenType"
                value={screenType}
                onChange={(event) => setScreenType(event.target.value)}
                required
                style={styles.input}
                {...WEB_MCP_LED_FIELD_PROPS.screenType}
              >
                <option value="standard">Standart indoor / outdoor LED</option>
                <option value="p19">P1.9 Indoor LED</option>
              </select>
            </div>

            <div>
              <label htmlFor="led-calc-days" style={styles.labelText}>
                Gün sayısı
              </label>
              <input
                id="led-calc-days"
                name="days"
                type="number"
                min="1"
                max="30"
                step="1"
                value={days}
                onChange={(event) => setDays(event.target.value)}
                required
                style={styles.input}
                {...WEB_MCP_LED_FIELD_PROPS.days}
              />
            </div>

            <div>
              <label htmlFor="led-calc-width" style={styles.labelText}>
                En (m)
              </label>
              <input
                id="led-calc-width"
                name="width"
                type="number"
                min="0.1"
                max="100"
                step="0.1"
                value={width}
                onChange={(event) => setWidth(event.target.value)}
                required
                style={styles.input}
                {...WEB_MCP_LED_FIELD_PROPS.width}
              />
            </div>

            <div>
              <label htmlFor="led-calc-height" style={styles.labelText}>
                Boy (m)
              </label>
              <input
                id="led-calc-height"
                name="height"
                type="number"
                min="0.1"
                max="50"
                step="0.1"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                required
                style={styles.input}
                {...WEB_MCP_LED_FIELD_PROPS.height}
              />
            </div>

            <label style={styles.checkboxLabel}>
              <input
                name="watchout"
                type="checkbox"
                checked={watchout}
                onChange={(event) => setWatchout(event.target.checked)}
                style={styles.checkbox}
                {...WEB_MCP_LED_FIELD_PROPS.watchout}
              />
              <span>
                <strong style={{ color: "#fff", display: "block" }}>Watchout / gelişmiş reji</strong>
                Mapping, çoklu ekran senkronizasyonu ve gelişmiş sahne akışlarında isteğe bağlı +{formatPrice(LED_SCREEN_PRICING.watchout)} olarak eklenir.
              </span>
            </label>

            <button
              type="submit"
              aria-controls="led-calculator-result"
              style={styles.submitButton}
            >
              Fiyatı Hesapla
            </button>
          </form>
        </div>

        <div id="led-calculator-result" style={styles.resultPanel}>
          <div aria-atomic="true" aria-live="polite" style={styles.resultCard}>
            <p style={styles.resultEyebrow}>Yaklaşık Başlangıç Bedeli</p>
            <p data-led-total style={styles.total}>
              {formatPrice(result.total)}
            </p>
            <p data-led-note style={styles.note}>
              {result.note}
            </p>
          </div>

          <div style={styles.rows}>
            {[
              ["Toplam alan", formatArea(result.area)],
              ["İlk gün bedeli", formatPrice(result.firstDay)],
              ["Watchout", result.watchoutText],
            ].map(([label, value]) => (
              <div key={label} style={styles.row}>
                <span style={styles.rowLabel}>{label}</span>
                <span style={styles.rowValue}>{value}</span>
              </div>
            ))}
          </div>

          <a
            href={result.whatsappHref}
            target="_blank"
            rel="nofollow noopener noreferrer"
            style={styles.whatsapp}
          >
            <MessageCircle size={20} aria-hidden="true" />
            Bu hesapla teklif iste
          </a>
        </div>
      </div>
    </div>
  );
}
