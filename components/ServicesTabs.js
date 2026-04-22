import Image from "next/image";
import Link from "next/link";
import { Layers, Monitor, Music, Tent, Users } from "lucide-react";

const PodiumIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <rect x="3" y="4" width="18" height="5" rx="1.5" />
    <path d="M6 9v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" />
    <path d="M10 18v2" />
    <path d="M14 18v2" />
  </svg>
);

const TechCheckIcon = () => (
  <svg
    className="w-4 h-4 text-cyan-400 shrink-0"
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
    Icon: PodiumIcon,
    description:
      "Modüler podyum sistemleri, özel tasarım podyumlar ve protokol masaları. Toplantı, lansman ve ödül törenleri için profesyonel çözümler.",
    image: "/img/hizmet-podyum.webp",
    features: [
      "Modüler podyum (30-90cm yükseklik)",
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
      "P2-P6 pixel pitch",
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
      "Moving head ve spot ışıklar",
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
      "3x3m - 6x6m sistemler",
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
  featuresHeading: "Hizmet Özellikleri",
  ctaLabel: "Detaylı Bilgi ve Teklif Al",
  ctaTitle: "Detayları gör ve fiyat teklifi al",
  imageBadgeLabel: "Profesyonel Çözüm",
  imageAlt: "{{title}} hizmeti - Sahneva profesyonel çözümü",
};

const TITLE_TEMPLATE_TOKEN = /\{\{\s*title\s*\}\}/g;

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

function ServiceCard({ service, dictionary, imageAltTemplate }) {
  const ServiceIcon = service.Icon;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#020617] shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={formatTitleTemplate(
            imageAltTemplate,
            service.title,
            DEFAULT_DICTIONARY.imageAlt,
          )}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          quality={72}
          loading="lazy"
          fetchPriority="auto"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/45 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/20 bg-black/55 px-3 py-1 text-sm font-bold text-white backdrop-blur">
            {dictionary.imageBadgeLabel}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg">
            {ServiceIcon ? (
              <ServiceIcon size={22} />
            ) : (
              <span aria-hidden="true" className="text-lg leading-none">
                {service.icon ?? "•"}
              </span>
            )}
          </span>
          <h3 className="text-2xl font-black text-white">{service.title}</h3>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <p className="border-l-2 border-cyan-400 pl-4 text-sm leading-relaxed text-white/90 md:text-base">
          {service.description}
        </p>

        <div className="mt-6">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/90">
            <span className="h-[2px] w-4 bg-cyan-500" aria-hidden="true" />
            {dictionary.featuresHeading}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3"
              >
                <TechCheckIcon />
                <span className="text-sm font-medium text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Link
            href={service.href}
            className="group inline-flex items-center gap-3 rounded-xl bg-cyan-200 px-6 py-3 text-base font-extrabold text-slate-950 shadow-[0_0_20px_rgba(165,243,252,0.28)] ring-1 ring-cyan-50/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_0_28px_rgba(165,243,252,0.42)] focus:outline-none focus:ring-4 focus:ring-cyan-200/70 focus:ring-offset-2 focus:ring-offset-slate-950"
            title={formatTitleTemplate(
              dictionary.ctaTitle,
              service.title,
              DEFAULT_DICTIONARY.ctaTitle,
            )}
            aria-label={`${dictionary.ctaLabel} - ${service.title}`}
          >
            <span>{dictionary.ctaLabel}</span>
            <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-white transition-colors group-hover:bg-cyan-950 group-hover:text-cyan-100"
              aria-hidden="true"
            >
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

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

  if (!services.length) return null;

  const dictionary = mergeDictionary(DEFAULT_DICTIONARY, dictionaryOverride);
  const imageAltTemplate = dictionary?.imageAlt ?? DEFAULT_DICTIONARY.imageAlt;
  const headingId = ariaLabelledBy ?? regionLabelId;
  const descriptionId = !ariaLabelledBy ? `${headingId}-description` : undefined;
  const computedDescribedBy = ariaDescribedBy ?? descriptionId;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0B1120] py-16 md:py-20 2xl:py-24"
      aria-labelledby={headingId}
      aria-describedby={computedDescribedBy}
      aria-label={ariaLabel}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay" />
        <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        {!ariaLabelledBy && (
          <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-sm font-bold uppercase tracking-[0.16em] text-cyan-400 shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
                {dictionary.sectionPill}
              </span>
            </div>

            <h2
              id={headingId}
              className="mb-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              {dictionary.sectionTitlePrefix}{" "}
              <span className="gradient-text gradient-text--safe-xl">
                {dictionary.sectionTitleHighlight}
              </span>
            </h2>

            <p
              id={descriptionId}
              className="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg"
            >
              {dictionary.sectionDesc}
            </p>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              dictionary={dictionary}
              imageAltTemplate={imageAltTemplate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
