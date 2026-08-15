// components/en/CaseSpecStrip.jsx
//
// Vaka kartı şablonu: her proje aynı altı slotu aynı sırada gösterir, böylece
// iki vaka yan yana konduğunda okuyucu aynı yerde aynı bilgiyi arar.
//
// ÖNEMLİ: Slot yalnızca YAYIMLANMIŞ bir değeri varsa basılır. Bir projenin
// misafir sayısı veya LED m² bilgisi sitede hiçbir yerde geçmiyorsa o slot boş
// bırakılır — "yaklaşık", "arena ölçeğinde" gibi doldurma değerler yazılmaz.
// Aynı kural lib/enProjects.js başındaki notla birlikte geçerli.

const SPEC_SLOTS = [
  ["city", "📍", "City"],
  ["guests", "👥", "Guests"],
  ["led", "📐", "LED"],
  ["soundLight", "🎧", "Sound & Light"],
  ["stageTruss", "🏗️", "Stage & Truss"],
  ["liveStream", "🎥", "Live Stream"],
];

export default function CaseSpecStrip({ specs, className = "", labelledBy }) {
  if (!specs) return null;

  const filled = SPEC_SLOTS.filter(([key]) => specs[key]);
  if (!filled.length) return null;

  return (
    <dl
      className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
      aria-labelledby={labelledBy}
    >
      {filled.map(([key, icon, label]) => (
        <div
          key={key}
          className="rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-3"
        >
          <dt className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-200">
            <span aria-hidden="true">{icon}</span>
            {label}
          </dt>
          <dd className="mt-1.5 text-sm font-semibold leading-relaxed text-white/90">
            {specs[key]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
