// components/HeroBelow.jsx
import { HERO_FEATURES_TR } from "@/lib/heroFeatures";

const DEFAULT_PROCESS_STEPS = [
  {
    title: "Keşif & Planlama",
    desc: "Mekân ölçüleri, kapasite ve konsept doğrulaması ile doğru paket seçimi",
    badge: "1",
  },
  {
    title: "Kurulum & Test",
    desc: "Saha ekibi, güvenlik ve yedek güç kontrolleriyle aynı gün devreye alma",
    badge: "2",
  },
  {
    title: "Canlı Yönetim",
    desc: "Operatör, rejisör ve teknik sorumlu ile kontrollü etkinlik akışı",
    badge: "3",
  },
];

const DEFAULT_DICTIONARY = {
  processSteps: DEFAULT_PROCESS_STEPS,
  features: HERO_FEATURES_TR,
  featuresAriaLabel: "Öne çıkan hizmet avantajları",
  processAriaLabel: "Proje akış adımları",
  sectionBadge: "Süreç & Güvence",
  sectionTitle: "Keşiften kuruluma tek ekip, net zaman çizelgesi",
  sectionDesc:
    "Sahneva; keşif, statik kontrol, LED içerik hazırlığı, truss kiralama ve sahne üstü operasyonu aynı plan içinde toplar. Böylece etkinlik günü kimin neyi yöneteceği baştan bellidir.",
  srHeading: "Sahne Kiralama Hizmet Özellikleri ve Danışmanlık",
};

function HeroFeatureGrid({ features, ariaLabel }) {
  return (
    <ul
      className="grid grid-cols-1 gap-3 list-none p-0 m-0 sm:grid-cols-3"
      aria-label={ariaLabel}
    >
      {features.map((item) => (
        <li key={item.title} className="flex min-w-0">
          <article className="flex h-full w-full items-center gap-3 rounded-xl border border-white/10 bg-slate-900/55 p-4 shadow-md">
            <div
              className={`shrink-0 rounded-lg bg-white/5 p-2.5 text-2xl ${item.color}`}
              aria-hidden="true"
            >
              {item.icon}
            </div>

            <div>
              <p className="font-bold text-white">{item.title}</p>
              <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

function ProcessList({ steps, ariaLabel }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-3"
      role="region"
      aria-label={ariaLabel}
    >
      {steps.map((step) => (
        <article
          key={step.title}
          className="relative h-full rounded-2xl border border-white/10 bg-slate-900/55 p-4 backdrop-blur-[2px] shadow-md"
        >
          <div className="absolute -top-3 left-4 inline-flex items-center justify-center rounded-full bg-white text-blue-900 font-bold w-8 h-8 shadow-lg">
            {step.badge}
          </div>
          <h3 className="text-white font-semibold text-lg mt-2 mb-2">
            {step.title}
          </h3>
          <p className="text-slate-200/80 text-sm leading-relaxed">
            {step.desc}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function HeroBelow({ dictionary: dictionaryOverride } = {}) {
  const d = { ...DEFAULT_DICTIONARY, ...dictionaryOverride };
  return (
    <section
      className="home-section home-section--surface relative mt-0 overflow-hidden bg-slate-950 py-8 md:py-10"
      aria-labelledby="hero-supporting-title"
    >
      {/* Hero -> HeroBelow geçişini yumuşat (beyaz band hissi azalır) */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-10 h-16 bg-gradient-to-b from-slate-950/0 via-slate-950/70 to-slate-950"
        aria-hidden="true"
      />

      <div className="home-container mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-2">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-200/80 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            <span
              className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"
              aria-hidden="true"
            />
            {d.sectionBadge}
          </p>

          <h2 id="hero-supporting-title" className="max-w-2xl text-2xl font-black leading-tight text-white text-balance md:text-3xl">
            {d.sectionTitle}
          </h2>

          <p className="max-w-3xl text-base leading-relaxed text-slate-200/80 md:text-lg">
            {d.sectionDesc}
          </p>
        </div>

        <div className="relative z-10">
          <HeroFeatureGrid features={d.features} ariaLabel={d.featuresAriaLabel} />
        </div>

        <ProcessList steps={d.processSteps} ariaLabel={d.processAriaLabel} />
      </div>
    </section>
  );
}
