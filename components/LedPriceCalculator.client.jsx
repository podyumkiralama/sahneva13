"use client";

import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";

const SCREEN_TYPES = {
  standard: { label: "Standart LED ekran", sqm: 1800, minimum: 35000 },
  p19: { label: "P1.9 Indoor LED", sqm: 4500, minimum: 50000 },
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

export default function LedPriceCalculator({ styles, phone, fallbackWhatsappUrl }) {
  const [screenType, setScreenType] = useState("standard");
  const [days, setDays] = useState("1");
  const [width, setWidth] = useState("6");
  const [height, setHeight] = useState("3");
  const [watchout, setWatchout] = useState(false);

  const result = useMemo(() => {
    const type = SCREEN_TYPES[screenType] || SCREEN_TYPES.standard;
    const parsedDays = Math.max(positiveNumber(days, 1), 1);
    const parsedWidth = positiveNumber(width);
    const parsedHeight = positiveNumber(height);
    const area = parsedWidth * parsedHeight;
    const baseDaily = area * type.sqm;
    const hasValidArea = area > 0;
    const usesMinimum = hasValidArea
      ? screenType === "standard"
        ? area <= 15 || baseDaily < type.minimum
        : baseDaily < type.minimum
      : false;
    const firstDay = hasValidArea ? (usesMinimum ? type.minimum : baseDaily) : 0;
    const dayTotal = firstDay * parsedDays;
    const watchoutPrice = watchout ? 50000 : 0;
    const total = dayTotal + watchoutPrice;

    const message =
      "Merhaba, LED ekran fiyat hesaplama sonucuna göre teklif almak istiyorum.\n" +
      `Ekran tipi: ${type.label}\n` +
      `Ölçü: ${parsedWidth}x${parsedHeight} m\n` +
      `Toplam alan: ${formatArea(area)}\n` +
      `Gün sayısı: ${parsedDays}\n` +
      `Watchout: ${watchout ? "Evet" : "Hayır"}\n` +
      `Yaklaşık başlangıç bedeli: ${formatPrice(total)}`;

    return {
      area,
      firstDay,
      total,
      watchoutText: watchout ? "+50.000 TL" : "İsteğe bağlı",
      note: !hasValidArea
        ? "Ölçü girildiğinde yaklaşık başlangıç bedeli hesaplanır."
        : usesMinimum
          ? "Bu ölçüde m² hesabı yerine minimum kurulum paketi baz alınır."
          : "Bu ölçüde hesaplama m² başlangıç bedeli üzerinden yapılır.",
      whatsappHref: phone
        ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
        : fallbackWhatsappUrl,
    };
  }, [days, fallbackWhatsappUrl, height, phone, screenType, watchout, width]);

  return (
    <div data-led-calculator style={styles.shell}>
      <div style={styles.grid}>
        <div style={styles.panel}>
          <p style={styles.eyebrow}>Hesaplama Aracı</p>
          <h2 style={styles.title}>LED ekran m² ve fiyat hesaplama</h2>
          <p style={styles.description}>
            Ekran ölçüsü, gün sayısı, panel tipi ve isteğe bağlı Watchout ihtiyacına göre yaklaşık başlangıç bedelini hesaplayın. Net teklif; kurulum saati, mekan erişimi, reji ve lojistik kapsamıyla birlikte kesinleşir.
          </p>

          <form style={styles.form} onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="led-calc-type" style={styles.labelText}>
                Ekran tipi
              </label>
              <select
                id="led-calc-type"
                name="screenType"
                value={screenType}
                onChange={(event) => setScreenType(event.target.value)}
                style={styles.input}
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
                value={days}
                onChange={(event) => setDays(event.target.value)}
                style={styles.input}
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
                min="1"
                step="0.5"
                value={width}
                onChange={(event) => setWidth(event.target.value)}
                style={styles.input}
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
                min="1"
                step="0.5"
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                style={styles.input}
              />
            </div>

            <label style={styles.checkboxLabel}>
              <input
                name="watchout"
                type="checkbox"
                checked={watchout}
                onChange={(event) => setWatchout(event.target.checked)}
                style={styles.checkbox}
              />
              <span>
                <strong style={{ color: "#fff", display: "block" }}>Watchout / gelişmiş reji</strong>
                Mapping, çoklu ekran senkronizasyonu ve gelişmiş sahne akışlarında isteğe bağlı +50.000 TL olarak eklenir.
              </span>
            </label>
          </form>
        </div>

        <div style={styles.resultPanel}>
          <div style={styles.resultCard}>
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
            rel="noopener noreferrer"
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
