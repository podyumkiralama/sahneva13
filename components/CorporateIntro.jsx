// components/CorporateIntro.jsx
import Image from "next/image";
import Link from "next/link";
import RichText from "@/components/RichText";

const CheckIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0 text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const DEFAULT_DICTIONARY = {
  badge: "Kurumsal Organizasyon ve Etkinlik Prod\u00fcksiyonu",
  heading: "Markan\u0131z i\u00e7in",
  headingHighlight: "u\u00e7tan uca sahne ve teknik y\u00f6netim",
  description:
    "Lansman, bayi toplant\u0131s\u0131, konferans ve fuarlar\u0131n\u0131zda; <strong>sahne, LED ekran kiralama, ses-\u0131\u015f\u0131k ve truss yap\u0131lar\u0131</strong> dahil t\u00fcm teknik altyap\u0131y\u0131 tek ekipten y\u00f6netiyoruz. Teknik riskleri sizden al\u0131p, kusursuz g\u00f6r\u00fcnen bir etkinlik ak\u0131\u015f\u0131 tasarl\u0131yoruz.",
  linkHref: "/kurumsal-organizasyon",
  linkText: "Kurumsal organizasyon \u00e7\u00f6z\u00fcmleri",
  linkSuffix: " sayfam\u0131zda s\u00fcreci ad\u0131m ad\u0131m payla\u015f\u0131yoruz.",
  processHeading: "A'dan Z'ye teknik y\u00f6netim",
  processSteps: [
    {
      step: "1",
      title: "Ke\u015fif & Brief",
      text: "Mekan ve ak\u0131\u015f analizi ile ihtiya\u00e7lar\u0131 netle\u015ftiriyoruz.",
    },
    {
      step: "2",
      title: "Teknik Tasar\u0131m",
      text: "3D sahne plan\u0131, ses-\u0131\u015f\u0131k ve LED yerle\u015fimini projelendiriyoruz.",
    },
    {
      step: "3",
      title: "Kurulum & Test",
      text: "T\u00fcm sahne, ses-\u0131\u015f\u0131k ve g\u00f6r\u00fcnt\u00fc sistemlerini yedekli kuruyoruz.",
    },
    {
      step: "4",
      title: "Canl\u0131 Y\u00f6netim",
      text: "G\u00fcn boyu reji, teknik takip ve kapan\u0131\u015f sonras\u0131 s\u00f6k\u00fcm.",
    },
  ],
  techStandardsHeading: "Teknik standartlar\u0131m\u0131z",
  techStandards: [
    "Akustik & enerji y\u00fck hesaplar\u0131",
    "3D sahne & LED yerle\u015fim plan\u0131",
    "Yedekli ses ve g\u00f6r\u00fcnt\u00fc hatlar\u0131",
    "Truss statik ve ta\u015f\u0131ma kontrolleri",
    "Renk kalibrasyonu & parlakl\u0131k ayar\u0131",
    "Acil durum senaryosu ve yedek sistem",
  ],
  stats: [
    { value: "250+", label: "Kurumsal etkinlik" },
    { value: "15+", label: "Y\u0131ll\u0131k saha deneyimi" },
    { value: "7/24", label: "Teknik destek" },
  ],
  imageAlt:
    "Kurumsal lansman sahne kurulumu, LED ekran kiralama ve profesyonel \u0131\u015f\u0131k sistemleri ile canl\u0131 etkinlik.",
  imageBadge1: "Canl\u0131 Reji",
  imageCaption: "Kurumsal lansman sahne kurulumu",
  imageCaptionSub:
    "\u0130stanbul \u2022 2000+ kat\u0131l\u0131mc\u0131 \u2022 \u00c7ok kameral\u0131 canl\u0131 yay\u0131n & tam teknik prod\u00fcksiyon",
  card1Label: "Tek elden y\u00f6netim",
  card1Text:
    "Sahne, LED ekran, ses-\u0131\u015f\u0131k, truss, jenerat\u00f6r ve reji ekiplerini ayn\u0131 teknik ekip alt\u0131nda topluyoruz. Siz tek bir muhatap ile t\u00fcm s\u00fcreci y\u00f6netiyorsunuz.",
  card2Label: "Sahneva Organizasyon",
  card2Badge: "Kurumsal \u00e7\u00f6z\u00fcm orta\u011f\u0131n\u0131z",
  card2Text:
    "Marka yakla\u015f\u0131m\u0131n\u0131z\u0131 anlayan, teknik dili sadele\u015ftirerek y\u00f6neten bir ekip ile \u00e7al\u0131\u015f\u0131n. Brief'ten s\u00f6k\u00fcme kadar t\u00fcm s\u00fcreci sizin ad\u0131n\u0131za takip ediyoruz.",
};

export default function CorporateIntro({ dictionary: dictionaryOverride } = {}) {
  const d = { ...DEFAULT_DICTIONARY, ...dictionaryOverride };

  return (
    <section
      aria-labelledby="corporate-intro-heading"
      className="relative overflow-hidden bg-[#0B1120] py-16 md:py-20 lg:py-24 2xl:py-28"
    >
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl md:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-300 shadow-[0_0_18px_rgba(8,47,73,0.8)]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.9)]"
              aria-hidden="true"
            />
            {d.badge}
          </div>

          <h2
            id="corporate-intro-heading"
            className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-[2.3rem]"
          >
            {d.heading}{" "}
            <span className="gradient-text gradient-text--safe-xl">
              {d.headingHighlight}
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-[15px]">
            <RichText text={d.description} />{" "}
            <Link
              href={d.linkHref}
              className="font-semibold text-cyan-200 underline underline-offset-4 hover:text-cyan-100"
            >
              {d.linkText}
            </Link>
            {d.linkSuffix}
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-7 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.9)] sm:p-6 md:p-7">
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                <span className="h-[1px] w-6 bg-cyan-400" aria-hidden="true" />
                {d.processHeading}
              </h3>

              <ol className="grid gap-3 sm:grid-cols-2">
                {d.processSteps.map((item) => (
                  <li
                    key={item.step}
                    className="flex items-start gap-3 rounded-xl border border-slate-800/70 bg-slate-900/60 p-3.5 transition-colors hover:border-cyan-500/60 hover:bg-slate-900/90"
                  >
                    <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500/70 bg-slate-950 text-[11px] font-bold text-cyan-300 shadow-[0_0_14px_rgba(8,47,73,0.9)]">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-slate-50">
                        {item.title}
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border-t border-slate-800/80 pt-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="text-cyan-400" aria-hidden="true">
                  *
                </span>
                {d.techStandardsHeading}
              </h3>

              <div className="rounded-xl border border-slate-800 bg-black/40 p-4">
                <ul className="grid gap-x-4 gap-y-2 sm:grid-cols-2">
                  {d.techStandards.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-xs font-medium text-slate-200 sm:text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-3 pt-1 sm:grid-cols-3">
              {d.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 px-3 py-2.5 text-left"
                >
                  <div className="text-lg font-bold leading-tight text-cyan-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-[0_22px_60px_rgba(15,23,42,1)]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[4/3] md:aspect-[16/9]">
                <Image
                  src="/img/kurumsal/kurumsal-sahne-led-ekran.webp"
                  alt={d.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                  decoding="async"
                  loading="lazy"
                  quality={72}
                />

                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/60 bg-emerald-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-100 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    {d.imageBadge1}
                  </span>
                  <span className="inline-flex items-center rounded-full border border-cyan-400/70 bg-cyan-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-100 backdrop-blur-md">
                    P3.9 LED Screen
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-10">
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {d.imageCaption}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-200 sm:text-xs">
                    {d.imageCaptionSub}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-lg text-cyan-300"
                    aria-hidden="true"
                  >
                    S
                  </span>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {d.card1Label}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                  {d.card1Text}
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/45 bg-gradient-to-br from-slate-950 via-slate-950 to-sky-950/70 p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-[13px] font-bold text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      {d.card2Label}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold text-cyan-200/80">
                    {d.card2Badge}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-sky-50/90 sm:text-sm">
                  {d.card2Text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
