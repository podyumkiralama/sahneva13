import Image from "next/image";

const PUBG_FINAL_VIDEO_URL = "https://www.youtube.com/watch?v=173gBurWSRQ";
const PUBG_FINAL_THUMBNAIL = "/img/blog/kurumsal-etkinlik-sahne-genel.webp";

const VIDEO_CONTENT = {
  en: {
    label: "Esports final reference",
    title: "Esports & Arena Production Reference",
    text:
      "Watch a large-scale PUBG final production reference featuring LED screen systems, show lighting, stage setup, arena atmosphere and technical field operation by Sahneva.",
    button: "Watch PUBG Final Video",
    alt: "PUBG esports final stage production with LED screen and arena lighting",
  },
  tr: {
    label: "E-spor final referansı",
    title: "E-Spor ve Arena Prodüksiyon Referansı",
    text:
      "LED ekran sistemleri, show ışıkları, sahne kurulumu, arena atmosferi ve teknik saha operasyonunu gösteren büyük ölçekli PUBG final prodüksiyon referansımızı izleyebilirsiniz.",
    button: "PUBG Final Videosunu İzle",
    alt: "PUBG e-spor finali LED ekranlı arena sahne prodüksiyonu",
  },
  ar: {
    label: "مرجع نهائي رياضات إلكترونية",
    title: "مرجع إنتاج للرياضات الإلكترونية والقاعات الكبيرة",
    text:
      "شاهدوا مرجع إنتاج نهائي PUBG واسع النطاق مع شاشات LED، إضاءة مسرحية، إعداد المسرح، أجواء القاعة والتشغيل التقني الميداني من Sahneva.",
    button: "مشاهدة فيديو نهائي PUBG",
    alt: "إنتاج مسرح نهائي PUBG للرياضات الإلكترونية مع شاشة LED وإضاءة قاعة",
  },
  ru: {
    label: "Референс киберспортивного финала",
    title: "Референс для киберспорта и аренских мероприятий",
    text:
      "Посмотрите референс крупного финала PUBG: LED-экраны, сценический свет, сценическая установка, атмосфера арены и полевая техническая работа Sahneva.",
    button: "Смотреть видео финала PUBG",
    alt: "Сценический продакшен финала PUBG с LED-экраном и аренским светом",
  },
};

export default function PubgFinalVideoReference({ locale = "en" }) {
  const content = VIDEO_CONTENT[locale] || VIDEO_CONTENT.en;
  const isRtl = locale === "ar";

  return (
    <section dir={isRtl ? "rtl" : undefined} className="bg-slate-950 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
          <div className="relative min-h-[280px] lg:min-h-[430px]">
            <Image
              src={PUBG_FINAL_THUMBNAIL}
              alt={content.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/15 text-3xl font-black shadow-2xl backdrop-blur transition group-hover:scale-105">
                ▶
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">{content.label}</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">{content.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/[0.72]">{content.text}</p>
            <div className="mt-8">
              <a
                href={PUBG_FINAL_VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-cyan-300 px-7 font-black text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {content.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
