// components/WhyChooseUs.js
const ICON_CLASS = "w-7 h-7";

const CheckStarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M12 3.5l2.472 4.79 5.292.79-3.832 3.736.905 5.281L12 15.98l-4.837 2.117.905-5.281-3.832-3.736 5.292-.79L12 3.5z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2.2L15 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BoltClockIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <circle cx="15" cy="9" r="4.25" />
    <path d="M15 7.5v2.25l1.5 1.25M11 4L6 12h4l-1 6 5-8h-4l1-6z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DisplayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <rect x="3.75" y="5" width="16.5" height="11" rx="2" />
    <path d="M10 19h4" strokeLinecap="round" />
    <path d="M6.5 8.5h2M10 8.5h2M13.5 8.5h2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <circle cx="9" cy="9" r="3" />
    <circle cx="17" cy="9.5" r="2.5" />
    <path d="M4.5 19.25a4.75 4.75 0 0 1 9.5 0" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 17.75c.45-.96 1.4-1.75 2.75-1.75 1.65 0 3.25 1.1 3.25 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CurrencyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <circle cx="12" cy="12" r="7.5" />
    <path d="M10 8.25h3.25a2.25 2.25 0 1 1 0 4.5H11m0 0H9.75m1.25 0v3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeMapIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <circle cx="12" cy="12" r="7.5" />
    <path d="M8.5 4.75C9.5 7 9.9 9.4 9.9 12c0 2.6-.4 5-1.4 7.25M15.5 4.75C14.5 7 14.1 9.4 14.1 12c0 2.6.4 5 1.4 7.25" strokeLinecap="round" />
    <path d="M5 9h14M5 15h14" strokeLinecap="round" />
  </svg>
);

const DEFAULT_FEATURES = [
  { icon: <CheckStarIcon className={ICON_CLASS} />, title: "Yüksek Müşteri Memnuniyeti", desc: "%98'in üzerinde müşteri memnuniyeti. Referanslar ve yorumlar bizim için en güçlü gösterge.", stat: "%98 Memnuniyet", gradient: "from-amber-400 to-orange-400", accentHoverClass: "group-hover:text-amber-200", pillClass: "bg-amber-500/10 border-amber-400/40 text-amber-100" },
  { icon: <BoltClockIcon className={ICON_CLASS} />, title: "Hızlı Kurulum ve Teslimat", desc: "Sahne, LED ekran ve ses-ışık kurulumlarında aynı gün içinde profesyonel montaj.", stat: "2–6 Saat", gradient: "from-cyan-400 to-sky-400", accentHoverClass: "group-hover:text-cyan-200", pillClass: "bg-cyan-500/10 border-cyan-400/40 text-cyan-100" },
  { icon: <DisplayIcon className={ICON_CLASS} />, title: "Premium LED Teknolojisi", desc: "P2–P6 indoor/outdoor LED ekranlarla yüksek parlaklık ve netlikte görüntüleme.", stat: "P2–P6", gradient: "from-violet-400 to-fuchsia-400", accentHoverClass: "group-hover:text-fuchsia-200", pillClass: "bg-fuchsia-500/10 border-fuchsia-400/40 text-fuchsia-100" },
  { icon: <UsersIcon className={ICON_CLASS} />, title: "Uzman Teknik Ekip", desc: "10+ yıl deneyimli, sahne, ses, ışık ve LED alanında uzman teknik kadro.", stat: "15+ Uzman", gradient: "from-emerald-400 to-green-400", accentHoverClass: "group-hover:text-emerald-200", pillClass: "bg-emerald-500/10 border-emerald-400/40 text-emerald-100" },
  { icon: <CurrencyIcon className={ICON_CLASS} />, title: "Rekabetçi Fiyat Garantisi", desc: "Kaliteden ödün vermeden bütçenize uygun, şeffaf ve öngörülebilir fiyatlandırma.", stat: "%30 Tasarruf", gradient: "from-amber-400 to-orange-500", accentHoverClass: "group-hover:text-amber-200", pillClass: "bg-amber-500/10 border-amber-400/40 text-amber-100" },
  { icon: <GlobeMapIcon className={ICON_CLASS} />, title: "Türkiye Geneli Hizmet", desc: "İstanbul merkezli ekibimizle 81 ilde etkinlik prodüksiyon desteği sağlıyoruz.", stat: "81 İl", gradient: "from-indigo-400 to-sky-400", accentHoverClass: "group-hover:text-sky-200", pillClass: "bg-indigo-500/10 border-indigo-400/40 text-indigo-100" },
];

const DEFAULT_DICTIONARY = {
  sectionPill: "Avantajlarımız",
  sectionTitlePrefix: "Neden",
  sectionTitleHighlight: "Sahneva",
  sectionTitleSuffix: "'yı Tercih Etmelisiniz",
  sectionDesc: "10+ yıllık deneyim, modern ekipmanlar ve uzman ekibimizle etkinliğinizin her detayı için yanınızdayız.",
  advantagesGroupAriaLabel: "Sahneva Altyapı Avantajları",
  bigLeftTitle: "Uçtan Uca Teknik Hizmet ve Profesyonel Çözümler",
  bigLeftDesc: "Sahneva olarak Türkiye genelinde sahne, podyum, LED ekran ve ses ışık sistemleri alanlarında komple teknik çözümler sunuyoruz.",
  bigLeftFeatures: [
    "IP65 dış mekân LED paneller, 4500+ nit parlaklık",
    "Profesyonel line-array ses sistemleri, dijital miksaj altyapısı",
    "Modüler podyum ve sahne platformları, truss kiralama çözümleri",
    "DMX kontrollü ışık sistemleri ve ambiyans aydınlatma",
  ],
  bigRightTitle: "Büyük Ölçekli Etkinlikler İçin Güçlü Altyapı",
  bigRightDesc: "Konser, miting, festival, fuar ve açık hava etkinlikleri için yüksek kapasiteli ekipman altyapımızla hizmet veriyoruz.",
  bigRightFeatures: [
    "100 m²+ LED ekran kurulumu (P3.9 outdoor, P2.6 indoor)",
    "Line-array ses sistemleri (JBL, RCF, dB vb.)",
    "Truss kule sistemleri ve roof sahne çözümleri",
    "Jeneratör, UPS ve yedekli enerji altyapısı",
  ],
  features: [
    { title: "Yüksek Müşteri Memnuniyeti", desc: "%98'in üzerinde müşteri memnuniyeti. Referanslar ve yorumlar bizim için en güçlü gösterge.", stat: "%98 Memnuniyet" },
    { title: "Hızlı Kurulum ve Teslimat", desc: "Sahne, LED ekran ve ses-ışık kurulumlarında aynı gün içinde profesyonel montaj.", stat: "2–6 Saat" },
    { title: "Premium LED Teknolojisi", desc: "P2–P6 indoor/outdoor LED ekranlarla yüksek parlaklık ve netlikte görüntüleme.", stat: "P2–P6" },
    { title: "Uzman Teknik Ekip", desc: "10+ yıl deneyimli, sahne, ses, ışık ve LED alanında uzman teknik kadro.", stat: "15+ Uzman" },
    { title: "Rekabetçi Fiyat Garantisi", desc: "Kaliteden ödün vermeden bütçenize uygun, şeffaf ve öngörülebilir fiyatlandırma.", stat: "%30 Tasarruf" },
    { title: "Türkiye Geneli Hizmet", desc: "İstanbul merkezli ekibimizle 81 ilde etkinlik prodüksiyon desteği sağlıyoruz.", stat: "81 İl" },
  ],
};

const toDomId = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ\s-]/gi, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export default function WhyChooseUs({ dictionary: dictionaryOverride }) {
  const dictionary = { ...DEFAULT_DICTIONARY, ...dictionaryOverride };
  const bigLeftTitleId = "why-big-tech-title";
  const bigRightTitleId = "why-big-scale-title";

  return (
    <section aria-labelledby="why-choose-title" className="relative overflow-hidden bg-[#0B1120]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 2xl:py-24">
        <header className="max-w-4xl mx-auto mb-16 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.16em] uppercase text-slate-300/90">{dictionary.sectionPill}</p>
          <h2 id="why-choose-title" className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-50">
            <span className="block">
              {dictionary.sectionTitlePrefix}{" "}
              <span className="gradient-text gradient-text--safe-xl">{dictionary.sectionTitleHighlight}</span>
              {dictionary.sectionTitleSuffix}
            </span>
          </h2>
          <div className="mt-4 h-px w-24 md:w-32 mx-auto md:mx-0 bg-gradient-to-r from-orange-400/70 via-amber-300/40 to-transparent" />
          <p className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed">{dictionary.sectionDesc}</p>
        </header>

        <div role="group" aria-label={dictionary.advantagesGroupAriaLabel} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <article aria-labelledby={bigLeftTitleId} className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
            <div className="flex items-start gap-3">
              <div className="text-3xl" aria-hidden="true">🚀</div>
              <h3 id={bigLeftTitleId} className="text-xl md:text-2xl font-bold text-white leading-snug">
                {dictionary.bigLeftTitle}
              </h3>
            </div>
            <p className="mt-4 text-slate-200 text-sm md:text-base leading-relaxed">
              {dictionary.bigLeftDesc}
            </p>
            <ul className="mt-5 space-y-2 text-sm md:text-[15px] text-slate-200 leading-relaxed">
              {(dictionary.bigLeftFeatures ?? DEFAULT_DICTIONARY.bigLeftFeatures).map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-[3px] text-sky-400" aria-hidden="true">•</span><span>{item}</span></li>
              ))}
            </ul>
          </article>

          <article aria-labelledby={bigRightTitleId} className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.8)]">
            <div className="flex items-start gap-3">
              <div className="text-3xl" aria-hidden="true">🎤</div>
              <h3 id={bigRightTitleId} className="text-xl md:text-2xl font-bold text-white leading-snug">
                {dictionary.bigRightTitle}
              </h3>
            </div>
            <p className="mt-4 text-slate-200 text-sm md:text-base leading-relaxed">
              {dictionary.bigRightDesc}
            </p>
            <ul className="mt-5 space-y-2 text-sm md:text-[15px] text-slate-200 leading-relaxed">
              {(dictionary.bigRightFeatures ?? DEFAULT_DICTIONARY.bigRightFeatures).map((item) => (
                <li key={item} className="flex items-start gap-2"><span className="mt-[3px] text-fuchsia-400" aria-hidden="true">•</span><span>{item}</span></li>
              ))}
            </ul>
          </article>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEFAULT_FEATURES.map((feature, index) => {
            const dictFeature =
              (dictionary.features ?? DEFAULT_DICTIONARY.features)[index] ?? feature;
            const featureTitleId = `why-adv-${toDomId(dictFeature.title)}-title`;
            return (
              <li key={feature.title}>
                <article
                  aria-labelledby={featureTitleId}
                  className="
                    group relative overflow-hidden
                    rounded-2xl p-6
                    bg-slate-900/70
                    border border-white/10
                    shadow-[0_18px_45px_rgba(0,0,0,0.6)]
                    transition-all duration-500
                    hover:-translate-y-[4px]
                    hover:shadow-[0_26px_70px_rgba(56,189,248,0.45)]
                  "
                >
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <div
                      className="
                        absolute left-1/2 -translate-x-1/2
                        bottom-[-34px]
                        w-56 h-56
                        rounded-full
                        blur-[55px]
                        opacity-80
                        bg-purple-500/45
                        transition-[background-color,opacity] duration-500
                        group-hover:bg-sky-500/55
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  <div
                    className={`
                      pointer-events-none
                      absolute inset-0
                      bg-gradient-to-br ${feature.gradient}
                      opacity-[0.03]
                      group-hover:opacity-[0.08]
                      transition-opacity duration-500
                    `}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="mb-3">
                      <div
                        className={`
                          inline-flex items-center justify-center
                          rounded-2xl p-3
                          bg-slate-950/80
                          ring-1 ring-white/10
                          shadow-[0_0_30px_rgba(15,23,42,0.9)]
                          bg-gradient-to-br ${feature.gradient}
                        `}
                      >
                        {feature.icon}
                      </div>
                    </div>

                    <span className={`inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full ${feature.pillClass}`}>{dictFeature.stat}</span>

                    <h4
                      id={featureTitleId}
                      className={`
                        text-lg font-semibold mt-1
                        text-slate-50
                        ${feature.accentHoverClass}
                        transition-colors duration-300
                      `}
                    >
                      {dictFeature.title}
                    </h4>

                    <p className="text-slate-200 text-sm leading-relaxed">{dictFeature.desc}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
