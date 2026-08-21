// components/en/WhyInternationalClients.jsx
//
// "Why international clients choose Sahneva" bloğunun KISA sürümü — yalnızca
// /en ana sayfasında kullanılır. Aynı beş başlığın uzun sürümü
// /en/event-production-company-turkey sayfasında (lib/internationalEventProduction.js
// içindeki `en.why`) duruyor; iki metin bilinçli olarak farklı yazıldı, aksi
// hâlde iki sayfa birbirinin kopyası olur.

import Link from "next/link";

import { PROVINCES_COUNT } from "@/lib/stats";

const REASONS = [
  [
    "One Local Partner",
    "One contract, one team and one point of contact for the entire technical scope.",
  ],
  [
    "Nationwide Coverage",
    `Istanbul, Antalya, Izmir, Ankara, Bodrum and every other city across ${PROVINCES_COUNT} provinces.`,
  ],
  [
    "International Communication",
    "Briefing, technical planning and event-day coordination handled in English.",
  ],
  [
    "On-Site Responsibility",
    "The team that plans the production runs it on the day and dismantles it.",
  ],
  [
    "Local Knowledge",
    "Venue access, loading hours, power and city logistics settled before load-in.",
  ],
];

export default function WhyInternationalClients() {
  return (
    <section
      aria-labelledby="why-international-title"
      className="content-visibility-auto bg-[#0B1120] py-14 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-violet-300">
            For international teams
          </p>
          <h2
            id="why-international-title"
            className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl"
          >
            Why international clients choose Sahneva
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-6xl list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(([title, text]) => (
            <li
              key={title}
              className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6"
            >
              <h3 className="text-lg font-black text-white">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-white/75">{text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-base text-white/70">
          <Link
            href="/en/event-production-company-turkey"
            className="font-bold text-violet-200 underline underline-offset-4 hover:text-white"
          >
            See how we work with international agencies and brands
          </Link>
        </p>
      </div>
    </section>
  );
}
