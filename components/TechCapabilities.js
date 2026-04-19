// components/TechCapabilities.js

// —————————————————————————————————————————
// VERİLER (SEO Odaklı Teknik Detaylar)
// —————————————————————————————————————————

const DEFAULT_TECH_FEATURES = [
  "LED ekran, projeksiyon, mapping ve sahne ışıklandırmada son nesil ekipman kullanımı",
  "Uydu, fiber ve 5G destekli canlı yayın altyapısı ile kesintisiz yayın",
  "Çok kameralı çekim, karıştırıcı ve ses masasıyla eş zamanlı yönetim",
  "Katılımcı etkileşimi için interaktif çözümler ve dinamik grafik sistemleri",
  "Özel içerik oluşturma, video prodüksiyon ve post-prodüksiyon desteği",
];

const DEFAULT_INFRA_FEATURES = [
  "Kurumsal etkinlikler için modüler sahne ve truss sistemleri",
  "600 m²'ye kadar LED ekran kapasitesi ve yüksek parlaklık seçenekleri",
  "Büyük ölçekli konser ve kongreler için profesyonel ses ve akustik düzenlemeler",
  "Yedekli güç altyapısı ve jeneratör entegrasyonu",
  "Türkiye genelinde lojistik, kurulum ve teknik operasyon yönetimi",
];

const DEFAULT_DICTIONARY = {
  sectionPill: "Teknik Kapasite & Altyapı",
  sectionTitlePrefix: "Türkiye'nin",
  // ❗ boşluk yok
  sectionTitleHighlight: "1 Numaralı",
  sectionTitleSuffix: "Etkinlik Teknoloji Partneri",
  sectionDescription:
    "LED ekran kiralama teknolojisi, ses ışık sistemleri ve güvenilir altyapı çözümleriyle kurumsal organizasyon ihtiyaçlarını tek çatı altında topluyoruz.",
  card1Title: "Teknik Çözümler",
  card1DescPrefix: "olarak ",
  card1Desc:
    "projelerinize özel sahne kurulumu, LED ekran kiralama, görüntü ve yayın çözümlerini tek çatı altında sunuyoruz.",
  card1FeaturesAriaLabel: "Teknik Çözümler özellikleri",
  card1Features: DEFAULT_TECH_FEATURES,
  card2Title: "Büyük Kapasite ve Altyapı",
  card2Desc:
    "farklı ölçeklerdeki etkinlikler için Türkiye genelinde lojistik, kurulum ve operasyon desteği sağlıyoruz.",
  card2FeaturesAriaLabel: "Büyük Kapasite ve Altyapı özellikleri",
  card2Features: DEFAULT_INFRA_FEATURES,
};

// —————————————————————————————————————————
// ANA BİLEŞEN (Server Component)
// —————————————————————————————————————————

export default function TechCapabilities({
  dictionary: dictionaryOverride,
  sectionPaddingClassName = "py-16 md:py-20 2xl:py-24",
}) {
  const dictionary = { ...DEFAULT_DICTIONARY, ...(dictionaryOverride || {}) };

  return (
    <section
      className={`relative bg-[#0B1120] ${sectionPaddingClassName} overflow-hidden`}
      aria-labelledby="tech-capabilities-title"
    >
      {/* Arka Plan Efekti - Grid + Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ——— BAŞLIK ALANI ——— */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-16">
          {/* Hap Etiket */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"
                aria-hidden="true"
              />
              {dictionary.sectionPill}
            </span>
          </div>

          {/* Ana Başlık */}
          <h2
            id="tech-capabilities-title"
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            {dictionary.sectionTitlePrefix}
            {" "}
            <span className="gradient-text gradient-text--safe-xl">
              {dictionary.sectionTitleHighlight}
            </span>
            {" "}
            {dictionary.sectionTitleSuffix}
          </h2>

          {/* Açıklama */}
          <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {dictionary.sectionDescription}
          </p>
        </div>

        {/* ——— KARTLAR ——— */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SOL KART: TEKNİK ÇÖZÜMLER */}
          <article className="group relative h-full bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-6 mb-8">
              <div
                className="w-14 h-14 shrink-0 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                🚀
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {dictionary.card1Title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  <strong className="text-blue-400 font-bold">Sahneva</strong>{" "}
                  {dictionary.card1DescPrefix}{dictionary.card1Desc}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8" />

            <ul
              className="grid gap-4"
              aria-label={dictionary.card1FeaturesAriaLabel}
            >
              {dictionary.card1Features.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-slate-300 text-sm md:text-base group/li items-start"
                >
                  <div
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover/li:scale-150 transition-transform duration-200 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* SAĞ KART: ALTYAPI VE KAPASİTE */}
          <article className="group relative h-full bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/5 hover:border-purple-500/30 transition-all duration-500 shadow-2xl shadow-black/40">
            <div className="flex items-start gap-6 mb-8">
              <div
                className="w-14 h-14 shrink-0 bg-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                🏗️
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {dictionary.card2Title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {dictionary.card2Desc}
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-white/10 mb-8" />

            <ul
              className="grid gap-4"
              aria-label={dictionary.card2FeaturesAriaLabel}
            >
              {dictionary.card2Features.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-slate-300 text-sm md:text-base group/li items-start"
                >
                  <div
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 group-hover/li:scale-150 transition-transform duration-200 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
