import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

const PUBG_FINAL_VIDEO_ID = "173gBurWSRQ";
const PUBG_FINAL_THUMBNAIL = "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg";

const VIDEO_CONTENT = {
  en: {
    label: "Esports final reference",
    title: "Watch the PUBG Final Production",
    text:
      "See a real PUBG final production with LED screen systems, show lighting, stage setup, arena atmosphere and Sahneva's technical field operation.",
    note: "Click the image to play the video on this page.",
    titleAttr: "PUBG final esports stage production video",
  },
  tr: {
    label: "E-spor final referansı",
    title: "PUBG Final Prodüksiyonunu İzleyin",
    text:
      "LED ekran sistemleri, show ışıkları, sahne kurulumu, arena atmosferi ve Sahneva teknik saha operasyonunu gösteren gerçek PUBG final prodüksiyon videosunu izleyebilirsiniz.",
    note: "Videoyu bu sayfada oynatmak için görsele tıklayın.",
    titleAttr: "PUBG final e-spor sahne prodüksiyon videosu",
  },
  ar: {
    label: "مرجع نهائي رياضات إلكترونية",
    title: "شاهدوا إنتاج نهائي PUBG",
    text:
      "شاهدوا إنتاجاً حقيقياً لنهائي PUBG مع شاشات LED، إضاءة مسرحية، إعداد المسرح، أجواء القاعة والتشغيل التقني الميداني من Sahneva.",
    note: "انقروا على الصورة لتشغيل الفيديو داخل الصفحة.",
    titleAttr: "فيديو إنتاج مسرح نهائي PUBG للرياضات الإلكترونية",
  },
  ru: {
    label: "Референс киберспортивного финала",
    title: "Посмотрите продакшен финала PUBG",
    text:
      "Посмотрите реальный продакшен финала PUBG: LED-экраны, сценический свет, сценическая установка, атмосфера арены и техническая работа Sahneva на площадке.",
    note: "Нажмите на изображение, чтобы запустить видео на этой странице.",
    titleAttr: "Видео сценического продакшена финала PUBG",
  },
};

export default function PubgFinalVideoReference({ locale = "en" }) {
  const content = VIDEO_CONTENT[locale] || VIDEO_CONTENT.en;
  const isRtl = locale === "ar";

  return (
    <section dir={isRtl ? "rtl" : undefined} className="bg-slate-950 px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/25 backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-4">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
            <LazyVideoEmbed
              videoId={PUBG_FINAL_VIDEO_ID}
              title={content.titleAttr}
              thumbnailUrl={PUBG_FINAL_THUMBNAIL}
              className="rounded-[1.5rem]"
            />
          </div>

          <div className="p-6 md:p-9 lg:p-11">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-100">{content.label}</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">{content.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/[0.74]">{content.text}</p>
            <p className="mt-5 inline-flex rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-bold text-cyan-100">
              {content.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
