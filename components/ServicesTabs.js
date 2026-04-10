// components/ServicesTabs.js
import Image from "next/image";
import Link from "next/link";
import { Layers, Layout, Monitor, Music, Tent, Users } from "lucide-react";

// —————————————————————————————————————————
// İKONLAR
// —————————————————————————————————————————

const TechCheckIcon = () => (
  <svg
    className="w-4 h-4 text-cyan-400 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// —————————————————————————————————————————
// VERİLER
// —————————————————————————————————————————

const DEFAULT_SERVICES = [
  {
    id: "sahne",
    title: "Sahne Kiralama",
    Icon: Layers,
    description:
      "Profesyonel modüler sahne sistemleri, truss kiralama ve güvenlik ekipmanları. Konser, festival, fuar ve özel etkinlikler için özel tasarım sahne çözümleri.",
    image: "/img/hizmet-sahne.webp",
    features: [
      "Modüler sahne (1x1m, 1x2m, 2x2m)",
      "Alüminyum truss sistemleri",
      "Güvenlik bariyerleri",
      "Yüksek kapasiteli platform",
    ],
    href: "/sahne-kiralama",
  },
  {
    id: "podyum",
    title: "Podyum Kiralama",
    Icon: Layout,
    description:
      "Modüler podyum sistemleri, özel tasarım podyumlar ve protokol masaları. Toplantı, lansman ve ödül törenleri için profesyonel çözümler.",
    image: "/img/hizmet-podyum.webp",
    features: [
      "Modüler podyum (30–90cm yükseklik)",
      "Protokol masaları",
      "Halı ve yüzey kaplama",
      "Hızlı kurulum",
    ],
    href: "/podyum-kiralama",
  },
  {
    id: "led",
    title: "LED Ekran Kiralama",
    Icon: Monitor,
    description:
      "Yüksek çözünürlüklü indoor/outdoor LED ekran kiralama çözümleri. P2, P3, P4, P5, P6 pixel pitch seçenekleri ile her türlü etkinlik için ideal.",
    image: "/img/galeri/led-ekran-kiralama-1.webp",
    features: [
      "P2–P6 pixel pitch",
      "IP65 outdoor ekranlar",
      "4500+ nit parlaklık",
      "HD video işleme",
    ],
    href: "/led-ekran-kiralama",
  },
  {
    id: "ses-isik",
    title: "Ses Işık Sistemleri",
    Icon: Music,
    description:
      "Profesyonel ses ışık sistemleri kiralama hizmeti. Konser, tiyatro, konferans ve özel etkinlikleriniz için komple ses ve ışık çözümleri.",
    image: "/img/ses-isik/ses-sistemi.webp",
    features: [
      "Line-array ses sistemleri",
      "Kablosuz mikrofonlar",
      "Moving head & spot ışıklar",
      "DMX ve lazer şovları",
    ],
    href: "/ses-isik-sistemleri",
  },
  {
    id: "cadir",
    title: "Çadır Kiralama",
    Icon: Tent,
    description:
      "Açık hava etkinlikleri için profesyonel çadır kiralama ve kurulumları. Su geçirmez, rüzgar dayanıklı çadır sistemleri ve aksesuarları.",
    image: "/img/galeri/cadir-kiralama-1.webp",
    features: [
      "3x3m – 6x6m sistemler",
      "Su geçirmez kumaş",
      "Zemin ve aydınlatma",
      "Profesyonel montaj",
    ],
    href: "/cadir-kiralama",
  },
  {
    id: "masa-sandalye",
    title: "Masa Sandalye Kiralama",
    Icon: Users,
    description:
      "Toplantı, davet, düğün ve özel etkinlikler için profesyonel masa sandalye kiralama hizmeti. Şık ve konforlu çözümler.",
    image: "/img/hizmet-masa.webp",
    features: [
      "Toplantı masaları",
      "Konforlu sandalyeler",
      "Düğün konseptleri",
      "Örtü ve dekorasyon",
    ],
    href: "/masa-sandalye-kiralama",
  },
];

const DEFAULT_DICTIONARY = {
  sectionPill: "Profesyonel Hizmet",
  sectionTitlePrefix: "Sahne kiralama, LED ekran kiralama ve",
  sectionTitleHighlight: "Hizmetlerimiz",
  sectionDesc:
    "Türkiye geneli sahne kiralama, podyum kiralama, LED ekran kiralama, ses ışık sistemleri, truss kiralama, çadır kiralama ve masa sandalye kiralama çözümleri sunuyoruz. Farklı şehirlerdeki ekibimizle tüm teknik süreci tek elden planlıyoruz.",

  tablistLabel: "Hizmet sekmeleri",
  featuresHeading: "Hizmet Özellikleri",
  ctaLabel: "Detaylı Bilgi ve Teklif Al",
  ctaTitle: "Detayları gör ve fiyat teklifi al",
  imageBadgeLabel: "Profesyonel Çözüm",
  imageAlt: "{{title}} hizmeti - Sahneva profesyonel çözümü",
};

const TITLE_TEMPLATE_TOKEN = /\{\{\s*title\s*\}\}/g;

// —————————————————————————————————————————
// YARDIMCI FONKSİYONLAR
// —————————————————————————————————————————

function formatTitleTemplate(template, title, fallback) {
  const source = template ?? fallback;
  if (typeof source === "function") return source(title);
  if (typeof source === "string") return source.replace(TITLE_TEMPLATE_TOKEN, title);
  return title;
}

function mergeDictionary(base, override = {}) {
  const result = { ...base };
  for (const [key, value] of Object.entries(override || {})) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      typeof base[key] === "object"
    ) {
      result[key] = mergeDictionary(base[key], value);
    } else if (value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

// —————————————————————————————————————————
// ANA BİLEŞEN
// —————————————————————————————————————————

export default function ServicesTabs({
  servicesData = DEFAULT_SERVICES,
  dictionary: dictionaryOverride,
  ariaLabelledBy,
  ariaDescribedBy,
  ariaLabel,
  regionLabelId = "services-section-title",
}) {
  const services =
    Array.isArray(servicesData) && servicesData.length
      ? servicesData
      : DEFAULT_SERVICES;

  const dictionary = mergeDictionary(DEFAULT_DICTIONARY, dictionaryOverride);
  const imageAltTemplate = dictionary?.imageAlt ?? DEFAULT_DICTIONARY.imageAlt;

  if (!services.length) return null;

  const headingId = ariaLabelledBy ?? regionLabelId;
  const descriptionId = !ariaLabelledBy ? `${headingId}-description` : undefined;
  const computedDescribedBy = ariaDescribedBy ?? descriptionId;

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-20 2xl:py-24 bg-[#0B1120]"
      aria-labelledby={headingId}
      aria-describedby={computedDescribedBy}
      aria-label={ariaLabel}
    >
      {/* Arka Plan */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 px-4 mx-auto w-full max-w-7xl">
        {/* ——— BAŞLIK ——— */}
        {!ariaLabelledBy && (
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-md">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"
                  aria-hidden="true"
                />
                {dictionary.sectionPill}
              </span>
            </div>

            <h2
              id={headingId}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight"
            >
              {dictionary.sectionTitlePrefix}{" "}
              <span className="gradient-text gradient-text--safe-xl">
                {dictionary.sectionTitleHighlight}
              </span>
            </h2>

            <p
              id={descriptionId}
              className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
            >
              {dictionary.sectionDesc}
            </p>
          </div>
        )}

        {/* ——— HİZMET AKORDEON ——— */}
        <div className="w-full space-y-3">
          {services.map((service, index) => (
            <details
              key={service.id}
              open={index === 0 ? true : undefined}
              className="group relative overflow-hidden bg-[#020617] border border-slate-800 shadow-2xl rounded-xl"
            >
              {/* Özet: akordeon başlığı */}
              <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none select-none text-slate-100 hover:text-white hover:bg-slate-900/60 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-indigo-400/60 group-open:bg-indigo-600/20 group-open:border-b group-open:border-slate-700">
                <span
                  className="flex items-center justify-center shrink-0"
                  aria-hidden="true"
                >
                  {service.Icon
                    ? <service.Icon size={22} />
                    : <span className="text-xl drop-shadow-sm">{service.icon}</span>}
                </span>
                <span className="font-bold text-sm md:text-base leading-tight">
                  {service.title}
                </span>
                {/* Chevron */}
                <svg
                  className="ml-auto w-4 h-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {/* Panel içeriği */}
              <div>
                {/* Hafif arka plan dokusu */}
                <div
                  className="pointer-events-none absolute inset-0 z-0"
                  aria-hidden="true"
                >
                  <div className="grid-overlay" />
                </div>

                <div className="relative z-10 grid lg:grid-cols-[1.08fr_0.92fr] gap-0 min-h-[460px]">

                  {/* SOL: METİN */}
                  <div className="p-7 md:p-9 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-3 drop-shadow-xl">
                        {service.title}
                      </h3>
                      <p className="text-slate-200 text-sm md:text-base leading-relaxed border-l-2 border-cyan-500/70 pl-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="mb-7">
                      <h4 className="text-white/80 font-bold flex items-center gap-2 mb-3 text-xs uppercase tracking-wider">
                        <span
                          className="w-4 h-[2px] bg-cyan-500"
                          aria-hidden="true"
                        />
                        {dictionary.featuresHeading}
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="group/feat flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 transition-colors"
                          >
                            <TechCheckIcon />
                            <span className="text-xs md:text-sm font-medium text-slate-200 group-hover/feat:text-white transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-2">
                      <Link
                        href={service.href}
                        className="group/cta inline-flex items-center gap-3 bg-cyan-400 text-slate-950 font-bold text-base px-6 py-3 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/60 focus:ring-offset-2 focus:ring-offset-slate-950"
                        title={formatTitleTemplate(
                          dictionary.ctaTitle,
                          service.title,
                          DEFAULT_DICTIONARY.ctaTitle
                        )}
                        aria-label={`${dictionary.ctaLabel} – ${service.title}`}
                      >
                        <span>{dictionary.ctaLabel}</span>
                        <div
                          className="w-6 h-6 rounded-full bg-cyan-500/80 flex items-center justify-center group-hover/cta:bg-slate-900 group-hover/cta:text-cyan-400 transition-colors"
                          aria-hidden="true"
                        >
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* SAĞ: GÖRSEL */}
                  <div className="relative order-1 lg:order-2 h-[260px] lg:h-auto min-h-full overflow-hidden group/img">
                    <Image
                      src={service.image}
                      alt={formatTitleTemplate(
                        imageAltTemplate,
                        service.title,
                        DEFAULT_DICTIONARY.imageAlt
                      )}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img:scale-105 nc-ServicesTabs-image-1"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      quality={78}
                      loading="lazy"
                      decoding="async"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-l from-transparent via-[#020617]/40 to-[#020617] lg:bg-gradient-to-r lg:from-[#020617] lg:via-transparent lg:to-transparent"
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent lg:hidden"
                      aria-hidden="true"
                    />

                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg">
                        {dictionary.imageBadgeLabel}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 z-20 lg:hidden">
                      <h4 className="text-xl font-black text-white drop-shadow-lg">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
