// components/en/ProductionCapabilities.jsx
//
// Ürettiğimiz etkinlik formatları — hizmet (ekipman) listesinden ayrı bir
// katman. Yeni sayfa AÇILMADI: bunlar tek bölüm olarak duruyor, çünkü her biri
// için ayrı sayfa açmak mevcut hizmet sayfalarıyla kanibalizasyon yaratırdı.
//
// Yalnızca gerçekten sayfası olan iki başlık link; kalanlar düz metin. Sayfası
// olmayan bir başlığa link uydurmak yerine metin bırakmak doğru olan.

import Link from "next/link";

const CAPABILITIES = [
  ["Corporate Events", "/en/corporate-events"],
  ["International Conferences", "/en/mice-turkey"],
  ["Product Launches", null],
  ["Exhibitions & Trade Shows", null],
  ["Gala & Awards", null],
  ["Concerts & Festivals", null],
  ["Sports Events", null],
  ["Esports", null],
  ["Brand Activations", null],
  ["Hybrid & Live Streaming", null],
];

const ITEM_CLASS =
  "flex min-h-[64px] items-center rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-base font-bold text-white";

export default function ProductionCapabilities() {
  return (
    <section
      aria-labelledby="production-capabilities-title"
      className="content-visibility-auto bg-[#0B1120] py-14 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            What we produce
          </p>
          <h2
            id="production-capabilities-title"
            className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl"
          >
            Production capabilities
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            The same technical departments — stage, LED, sound, lighting, truss and crew — are
            configured differently for each event format. These are the formats we build for.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-6xl list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(([label, href]) => (
            <li key={label}>
              {href ? (
                <Link
                  href={href}
                  className={`${ITEM_CLASS} transition hover:border-cyan-300/50 hover:bg-white/[0.1]`}
                >
                  <span className="underline decoration-cyan-300/60 underline-offset-4">
                    {label}
                  </span>
                </Link>
              ) : (
                <span className={ITEM_CLASS}>{label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
