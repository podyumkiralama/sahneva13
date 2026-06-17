import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

const PUBG_FINAL_VIDEO_ID = "173gBurWSRQ";
const PUBG_FINAL_THUMBNAIL = "https://i.ytimg.com/vi/173gBurWSRQ/hqdefault.jpg";
const CONTACT_EMAIL = "info@sahneva.com";

const VIDEO_CONTENT = {
  en: {
    label: "Esports Final Reference",
    title: "Production Showcase: PUBG Turkiye Finals",
    text:
      "A large-scale esports final production featuring synchronized LED screens, concert-grade sound, show lighting, truss infrastructure and arena field operation.",
    action: "Watch PUBG Final Video",
    titleAttr: "PUBG esports final stage production with LED screen and arena lighting",
    meta: ["Esports event production Turkey", "Arena production Turkey", "LED screen systems"],
    emailIntro: "Prefer a formal event brief by email?",
    emailText: "Email your event brief, technical file, venue details or production scope directly to:",
    specsTitle: "Technical production standards",
    specs: [
      "Synchronous video playback and low-latency processing",
      "Heavy-duty rigging and structural planning approach",
      "High-refresh-rate LED panels for broadcast-quality visuals",
    ],
  },
  tr: {
    label: "E-Spor Final Referansı",
    title: "Production Showcase: PUBG Türkiye Finals",
    text:
      "Senkron LED ekranlar, konser seviyesinde ses sistemi, show ışıkları, truss altyapısı ve arena saha operasyonunu bir araya getiren büyük ölçekli e-spor final prodüksiyonu.",
    action: "PUBG Final Videosunu İzle",
    titleAttr: "PUBG e-spor finali LED ekranlı arena sahne prodüksiyonu",
    meta: ["E-spor prodüksiyonu", "Arena sahnesi", "LED ekran sistemleri"],
    emailIntro: "Kurumsal brief'i e-posta ile mi göndermek istiyorsunuz?",
    emailText: "Etkinlik brief'inizi, teknik dosyanızı, mekan bilgilerinizi veya prodüksiyon kapsamınızı doğrudan şu adrese gönderebilirsiniz:",
    specsTitle: "Teknik prodüksiyon standartları",
    specs: [
      "Senkron video oynatma ve düşük gecikmeli görüntü işleme",
      "Ağır hizmet rigging ve yapısal planlama yaklaşımı",
      "Yayın kalitesine uygun yüksek refresh rate LED paneller",
    ],
  },
  ar: {
    label: "مرجع نهائي الرياضات الإلكترونية",
    title: "إنتاج نهائي PUBG في القاعة",
    text:
      "مرجع لإنتاج نهائي كبير في الرياضات الإلكترونية يجمع شاشات LED متزامنة، صوتاً احترافياً، إضاءة عرض، بنية truss وتشغيلاً ميدانياً داخل القاعة.",
    action: "مشاهدة فيديو نهائي PUBG",
    titleAttr: "إنتاج مسرح نهائي PUBG مع شاشات LED وإضاءة القاعة",
    meta: ["إنتاج رياضات إلكترونية", "إنتاج قاعات", "أنظمة شاشات LED"],
    emailIntro: "تفضلون إرسال موجز الفعالية بالبريد؟",
    emailText: "يمكنكم إرسال موجز الفعالية أو تفاصيل المكان مباشرة إلى:",
    specsTitle: "معايير الإنتاج التقني",
    specs: [
      "تشغيل فيديو متزامن ومعالجة منخفضة التأخير",
      "تخطيط rigging قوي وآمن",
      "لوحات LED بمعدل تحديث عالٍ مناسبة للتصوير",
    ],
  },
  ru: {
    label: "Пример киберспортивного финала",
    title: "Production Showcase: PUBG Turkiye Finals",
    text:
      "Пример крупного киберспортивного финала с синхронными LED-экранами, концертным звуком, сценическим светом, truss-инфраструктурой и работой команды на арене.",
    action: "Смотреть видео финала PUBG",
    titleAttr: "Киберспортивный финал PUBG со сценой, LED-экраном и светом арены",
    meta: ["Киберспортивное событие", "Арена-продакшн", "LED-экраны"],
    emailIntro: "Предпочитаете отправить бриф по электронной почте?",
    emailText: "Отправьте бриф мероприятия, данные площадки или объем работ напрямую на:",
    specsTitle: "Технические стандарты",
    specs: [
      "Синхронное воспроизведение видео и обработка с низкой задержкой",
      "Усиленное rigging-планирование",
      "LED-панели с высокой частотой обновления для съемки",
    ],
  },
};

export default function PubgFinalVideoReference({ locale = "en" }) {
  const content = VIDEO_CONTENT[locale] || VIDEO_CONTENT.en;
  const isRtl = locale === "ar";

  return (
    <section dir={isRtl ? "rtl" : undefined} className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.24),transparent_34%),radial-gradient(circle_at_82%_46%,rgba(34,211,238,0.12),transparent_30%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/30 backdrop-blur md:p-6 lg:p-8">
          <header className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-100">
              {content.label}
            </p>
            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {content.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/[0.76] md:text-xl">
              {content.text}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {content.meta.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/[0.78]">
                  {item}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.16fr_0.84fr] lg:items-stretch">
            <div className="relative min-w-0">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
                <LazyVideoEmbed
                  videoId={PUBG_FINAL_VIDEO_ID}
                  title={content.titleAttr}
                  thumbnailUrl={PUBG_FINAL_THUMBNAIL}
                  playLabel={content.action}
                  className="rounded-[1.5rem]"
                />
              </div>
            </div>

            <aside className="grid gap-5 lg:content-center">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                <h3 className="text-lg font-black text-white">{content.specsTitle}</h3>
                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/[0.78]">
                  {content.specs.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-black text-emerald-200">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-cyan-200/20 bg-cyan-200/[0.08] p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-100">{content.emailIntro}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/[0.76]">
                  {content.emailText}{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-black text-cyan-100 underline decoration-cyan-200/40 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
