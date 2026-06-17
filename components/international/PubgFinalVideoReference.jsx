import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

const PUBG_FINAL_VIDEO_ID = "173gBurWSRQ";
const PUBG_FINAL_THUMBNAIL = "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg";

const VIDEO_CONTENT = {
  en: {
    label: "Esports Final Reference",
    title: "PUBG Final Arena Production",
    text:
      "Watch a large-scale PUBG final production reference featuring LED screen systems, show lighting, stage setup, arena atmosphere and technical field operation.",
    action: "Watch PUBG Final Video",
    titleAttr: "PUBG esports final stage production with LED screen and arena lighting",
    meta: ["Esports event production Turkey", "Arena production Turkey", "LED screen systems"],
  },
  tr: {
    label: "E-Spor Final Referansı",
    title: "PUBG Final Arena Prodüksiyonu",
    text:
      "LED ekran sistemleri, show ışıkları, sahne kurulumu, arena atmosferi ve teknik saha operasyonunu gösteren büyük ölçekli PUBG final prodüksiyon referansımızı izleyebilirsiniz.",
    action: "PUBG Final Videosunu İzle",
    titleAttr: "PUBG e-spor finali LED ekranlı arena sahne prodüksiyonu",
    meta: ["E-spor prodüksiyonu", "Arena sahnesi", "LED ekran sistemleri"],
  },
  ar: {
    label: "مرجع نهائي الرياضات الإلكترونية",
    title: "إنتاج نهائي PUBG في القاعة",
    text:
      "شاهدوا مرجعاً ميدانياً لنهائي PUBG يوضح أنظمة شاشات LED، إضاءة العرض، إعداد المسرح، أجواء القاعة وإدارة التشغيل التقني في الموقع.",
    action: "مشاهدة فيديو نهائي PUBG",
    titleAttr: "إنتاج مسرح نهائي PUBG مع شاشات LED وإضاءة القاعة",
    meta: ["إنتاج رياضات إلكترونية", "إنتاج قاعات", "أنظمة شاشات LED"],
  },
  ru: {
    label: "Пример киберспортивного финала",
    title: "Арена-продакшн финала PUBG",
    text:
      "Посмотрите пример крупного финала PUBG: LED-экраны, сценический свет, сцена, атмосфера арены и техническая работа команды на площадке.",
    action: "Смотреть видео финала PUBG",
    titleAttr: "Киберспортивный финал PUBG со сценой, LED-экраном и светом арены",
    meta: ["Киберспортивное событие", "Арена-продакшн", "LED-экраны"],
  },
};

export default function PubgFinalVideoReference({ locale = "en" }) {
  const content = VIDEO_CONTENT[locale] || VIDEO_CONTENT.en;
  const isRtl = locale === "ar";

  return (
    <section dir={isRtl ? "rtl" : undefined} className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(34,211,238,0.12),transparent_30%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-4">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
              <LazyVideoEmbed
                videoId={PUBG_FINAL_VIDEO_ID}
                title={content.titleAttr}
                thumbnailUrl={PUBG_FINAL_THUMBNAIL}
                playLabel={content.action}
                className="rounded-[1.5rem]"
              />
            </div>
          </div>

          <div className="p-6 md:p-9 lg:p-11">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
              {content.label}
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">{content.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/[0.76]">{content.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {content.meta.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/[0.78]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
