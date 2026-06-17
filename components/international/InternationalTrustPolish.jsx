const TRUST_POLISH = {
  en: {
    badge: "Trusted Turkey-side coordination",
    title: "Your trusted technical production partner in Türkiye",
    text: "We help international brands manage local venues, logistics, access hours and technical production requirements with one experienced field team.",
    questions: [
      [
        "Can you coordinate directly with our international technical director?",
        "Yes. Our project coordination can align with your international technical director from the first briefing to technical planning, setup updates, rehearsal and event-day operation.",
      ],
      [
        "Do you have experience working in major hotels and convention centers in Turkey?",
        "Yes. Sahneva can plan technical production for business hotels, congress hotels, exhibition halls, historic venues and outdoor event areas in Istanbul, Antalya, Izmir, Ankara, Bodrum and other Turkish destinations.",
      ],
    ],
  },
  tr: {
    badge: "Türkiye tarafında güvenilir koordinasyon",
    title: "Türkiye’de güvenilir teknik prodüksiyon ortağınız",
    text: "Uluslararası markalar için yerel mekan süreci, lojistik, giriş saatleri ve teknik prodüksiyon ihtiyaçlarını tek deneyimli saha ekibiyle yönetiriz.",
    questions: [
      [
        "Uluslararası teknik direktörümüzle doğrudan koordinasyon kurabilir misiniz?",
        "Evet. Proje koordinasyonumuz ilk brief’ten teknik planlamaya, kurulum güncellemelerine, provaya ve etkinlik günü operasyonuna kadar uluslararası teknik direktörünüzle uyumlu ilerleyebilir.",
      ],
      [
        "Türkiye’de büyük oteller ve kongre merkezlerinde çalışma deneyiminiz var mı?",
        "Evet. Sahneva; İstanbul, Antalya, İzmir, Ankara, Bodrum ve diğer destinasyonlarda iş otelleri, kongre otelleri, fuar alanları, tarihi mekanlar ve açık hava etkinlik alanları için teknik prodüksiyon planlayabilir.",
      ],
    ],
  },
};

export default function InternationalTrustPolish({ locale = "en" }) {
  const content = TRUST_POLISH[locale] || TRUST_POLISH.en;

  return (
    <section className="bg-white py-16 text-slate-950">
      <div className="container mx-auto px-4">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">{content.badge}</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-tight md:text-5xl">{content.title}</h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-slate-600">{content.text}</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {content.questions.map(([question, answer]) => (
              <article key={question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{question}</h3>
                <p className="mt-4 leading-relaxed text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
