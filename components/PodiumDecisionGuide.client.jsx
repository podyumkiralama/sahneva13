"use client";

import Link from "next/link";
import { ArrowRight, Check, Info, MessageCircle, RotateCcw } from "lucide-react";
import { useState } from "react";

const PODIUM_USES = [
  {
    key: "speaker",
    label: "Konuşma / panel",
    note: "Kürsü, konuşmacı hareketi ve salonun görüş hattı için.",
    plannerType: "kongre",
    guidance: "Konuşmacının rahat hareket edebileceği alan ile kürsü ve monitörün konumu birlikte düşünülür.",
  },
  {
    key: "award",
    label: "Ödül / protokol geçişi",
    note: "Sahneye güvenli iniş-çıkış ve fotoğraf alanı için.",
    plannerType: "gala",
    guidance: "Ödül alan kişi, sunucu ve fotoğraf karesinin aynı anda sığacağı boşluk planlanır.",
  },
  {
    key: "product",
    label: "Ürün gösterimi / lansman",
    note: "Ürün görünürlüğü, marka yüzeyi, kablo ve ekran entegrasyonu için.",
    plannerType: "lansman",
    guidance: "Ürünün taban ölçüsü tek başına yeterli değildir; çevresindeki sunum ve güvenli geçiş alanı da hesaba katılır.",
  },
  {
    key: "performance",
    label: "Performans / yoğun kullanım",
    note: "Hareket, ekipman ve daha yüksek sahne trafiği için.",
    plannerType: "konser",
    guidance: "Hareketli kullanımda yalnızca genişlik değil, yük dağılımı, kayıt bağlantıları ve güvenli kenar bitişleri de önem kazanır.",
  },
];

const AREA_OPTIONS = [
  {
    key: "mini",
    label: "Kompakt kullanım: 1–3 kişi",
    area: "12 m²",
    layout: "3 × 4 m",
    note: "Kısa konuşma, tek ürün veya küçük sunum için başlangıç ölçüsüdür.",
  },
  {
    key: "medium",
    label: "Orta ölçek: panel / ödül / lansman",
    area: "24 m²",
    layout: "4 × 6 m",
    note: "Birden fazla kişi, ürün ve ekran-kürsü yerleşimi için daha rahat bir çalışma alanı sağlar.",
  },
  {
    key: "large",
    label: "Geniş akış: performans veya kalabalık sahne",
    area: "48 m² ve üzeri",
    layout: "6 × 8 m",
    note: "Yoğun hareket, ekipman veya geniş ürün sunumu için özel yerleşimle değerlendirilir.",
  },
];

const VIEWING_OPTIONS = [
  {
    key: "near",
    label: "Katılımcılar yakın; küçük salon veya ön sıralı düzen",
    height: "40 cm",
    note: "Yakın izleme mesafesinde konuşmacıyı görünür kılan, iniş-çıkışı da kolaylaştıran başlangıç yüksekliğidir.",
  },
  {
    key: "mid",
    label: "Orta salon; arka sıraların da görüşü önemli",
    height: "60 cm",
    note: "Panel, kurumsal toplantı ve ödül akışında görüş hattını belirgin biçimde iyileştiren yaygın başlangıç yüksekliğidir.",
  },
  {
    key: "far",
    label: "Uzak seyirci, büyük salon veya güçlü görsel kurgu",
    height: "80–100 cm",
    note: "Yüksek platform ihtiyacında merdiven, korkuluk, rampa ve seyirci güvenliği daha baştan aynı planın parçası olur.",
  },
];

const ACCESS_OPTIONS = [
  {
    key: "steps",
    label: "Düz zemin; merdiven yeterli",
    note: "Standart iniş-çıkış noktası ve sahne üzerindeki geçişler planlanır.",
  },
  {
    key: "ramp",
    label: "Rampa gerekli",
    note: "Erişilebilirlik veya ekipman arabası için rampanın kaplayacağı alan ölçüye dahil edilir.",
  },
  {
    key: "ground",
    label: "Eşit olmayan zemin / açık alan",
    note: "Kot farkı, çim veya parke gibi yüzeyler için dengeleme ve sabitleme keşifte değerlendirilir.",
  },
];

function ChoiceButton({ active, children, description, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 ${
        active
          ? "border-violet-600 bg-violet-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-violet-300 hover:bg-slate-50"
      }`}
    >
      <span className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            active ? "border-violet-600 bg-violet-600 text-white" : "border-slate-300"
          }`}
          aria-hidden="true"
        >
          {active ? <Check className="h-3.5 w-3.5" /> : null}
        </span>
        <span>
          <span className="block text-sm font-black text-slate-950">{children}</span>
          {description ? <span className="mt-1 block text-sm leading-5 text-slate-600">{description}</span> : null}
        </span>
      </span>
    </button>
  );
}

function LearningNote({ children }) {
  return (
    <div className="mt-4 flex gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-4 text-sm leading-6 text-slate-700">
      <Info className="mt-0.5 h-5 w-5 shrink-0 text-violet-700" aria-hidden="true" />
      <p>{children}</p>
    </div>
  );
}

export default function PodiumDecisionGuide() {
  const [useKey, setUseKey] = useState("");
  const [areaKey, setAreaKey] = useState("");
  const [viewingKey, setViewingKey] = useState("");
  const [accessKey, setAccessKey] = useState("");

  const podiumUse = PODIUM_USES.find((item) => item.key === useKey);
  const area = AREA_OPTIONS.find((item) => item.key === areaKey);
  const viewing = VIEWING_OPTIONS.find((item) => item.key === viewingKey);
  const access = ACCESS_OPTIONS.find((item) => item.key === accessKey);
  const isReady = Boolean(podiumUse && area && viewing && access);

  const plannerUrl = podiumUse
    ? `/etkinlik-planlayici?tur=${podiumUse.plannerType}&ek=podium`
    : "/etkinlik-planlayici";
  const whatsappText = isReady
    ? `Merhaba, podyum kiralama rehberini tamamladım. Kullanım: ${podiumUse.label}; başlangıç alanı: ${area.area} (${area.layout}); görüşe göre yükseklik: ${viewing.height}; zemin/erişim: ${access.label}. Net ölçü ve kurulum planı için bilgi almak istiyorum.`
    : "Merhaba, podyum kiralama için bilgi almak istiyorum.";

  const reset = () => {
    setUseKey("");
    setAreaKey("");
    setViewingKey("");
    setAccessKey("");
  };

  return (
    <section
      id="podyum-kesif-rehberi"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 px-4 py-16 text-white sm:py-20"
      aria-labelledby="podyum-kesif-rehberi-baslik"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Podyum için soru-cevap rehberi</p>
            <h2 id="podyum-kesif-rehberi-baslik" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Podyum ölçüsünü bilmiyorsanız buradan başlayın
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Teknik terim bilmeniz gerekmez. Soruları sırayla yanıtlayın; her yanıtta neden bu bilgiyi istediğimizi ve size uygun başlangıç m²/yükseklik aralığını görün.
            </p>
          </div>
          {useKey ? (
            <button
              type="button"
              onClick={reset}
              className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Baştan seç
            </button>
          ) : null}
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <div className="space-y-7 rounded-[2rem] bg-white p-5 text-slate-900 sm:p-8">
            <fieldset>
              <legend className="text-base font-black">1. Podyumu en çok ne için kullanacaksınız?</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {PODIUM_USES.map((item) => (
                  <ChoiceButton
                    key={item.key}
                    active={useKey === item.key}
                    description={item.note}
                    onClick={() => {
                      setUseKey(item.key);
                      setAreaKey("");
                      setViewingKey("");
                      setAccessKey("");
                    }}
                  >
                    {item.label}
                  </ChoiceButton>
                ))}
              </div>
              {podiumUse ? <LearningNote>{podiumUse.guidance}</LearningNote> : null}
            </fieldset>

            {useKey ? (
              <fieldset>
                <legend className="text-base font-black">2. Podyumda ne kadar boş alana ihtiyacınız var?</legend>
                <p className="mt-1 text-sm leading-6 text-slate-600">Müşteriler bu bilgiyi genellikle “kaç metrekare gerekir?” diye sorar. En × boy hesabı size ilk yönü verir.</p>
                <div className="mt-3 grid gap-3">
                  {AREA_OPTIONS.map((item) => (
                    <ChoiceButton
                      key={item.key}
                      active={areaKey === item.key}
                      description={`${item.area} · ${item.layout} — ${item.note}`}
                      onClick={() => {
                        setAreaKey(item.key);
                        setViewingKey("");
                        setAccessKey("");
                      }}
                    >
                      {item.label}
                    </ChoiceButton>
                  ))}
                </div>
                <LearningNote>Örnek hesap: 3 × 4 m = 12 m², 4 × 6 m = 24 m² ve 6 × 8 m = 48 m². Ürün gösteriminde ürünün taban ölçüsüne ek olarak, çevresinde sunum ve güvenli geçiş boşluğu bırakılır.</LearningNote>
              </fieldset>
            ) : null}

            {areaKey ? (
              <fieldset>
                <legend className="text-base font-black">3. Katılımcılar podyumu hangi mesafeden izleyecek?</legend>
                <p className="mt-1 text-sm leading-6 text-slate-600">Yüksekliği yalnızca podyumun büyüklüğü değil, arka sıradaki konuğun görüşü de belirler.</p>
                <div className="mt-3 grid gap-3">
                  {VIEWING_OPTIONS.map((item) => (
                    <ChoiceButton
                      key={item.key}
                      active={viewingKey === item.key}
                      description={`${item.height} başlangıç yüksekliği — ${item.note}`}
                      onClick={() => {
                        setViewingKey(item.key);
                        setAccessKey("");
                      }}
                    >
                      {item.label}
                    </ChoiceButton>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {viewingKey ? (
              <fieldset>
                <legend className="text-base font-black">4. Zemin ve erişim için özel bir durum var mı?</legend>
                <p className="mt-1 text-sm leading-6 text-slate-600">Bu bilgi, yalnızca teslimatı değil; rampayı, dengelemeyi, korkuluğu ve güvenli kurulumu etkiler.</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {ACCESS_OPTIONS.map((item) => (
                    <ChoiceButton key={item.key} active={accessKey === item.key} description={item.note} onClick={() => setAccessKey(item.key)}>
                      {item.label}
                    </ChoiceButton>
                  ))}
                </div>
              </fieldset>
            ) : null}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7" aria-live="polite">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Sizin için başlangıç planı</p>
            {isReady ? (
              <>
                <h3 className="mt-3 text-2xl font-black leading-tight">Podyum ölçüsü ve yüksekliği netleşiyor</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Bu bir başlangıç önerisidir; nihai ölçü, zemin ve kullanım yükü saha keşfiyle kesinleşir.</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <article className="rounded-2xl bg-white/8 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-200">Önerilen başlangıç alanı</p>
                    <p className="mt-2 text-2xl font-black text-white">{area.area}</p>
                    <p className="mt-1 text-sm font-bold text-violet-100">{area.layout}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{area.note}</p>
                  </article>
                  <article className="rounded-2xl bg-white/8 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-200">Görüşe göre yükseklik</p>
                    <p className="mt-2 text-2xl font-black text-white">{viewing.height}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{viewing.note}</p>
                  </article>
                </div>

                <div className="mt-5 space-y-3">
                  <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-sm font-black text-white">Kullanıma göre not</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{podiumUse.guidance}</p>
                  </article>
                  <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-sm font-black text-white">Zemin ve erişim notu</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{access.note}</p>
                  </article>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-black text-white">Teklifi netleştirmek için son bilgiler</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    <li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />Etkinlik tarihi, ilçe ve kurulum/söküm saati</li>
                    <li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />Mekânın ölçülü planı veya alanın fotoğrafı</li>
                    <li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />Halı, skört, marka kaplaması ve ekran/ışık ihtiyacı</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/905453048671?text=${encodeURIComponent(whatsappText)}`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-black text-white transition hover:bg-emerald-600"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Bu planla bilgi alın
                  </a>
                  <Link href={plannerUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/25 px-5 text-sm font-black text-white transition hover:bg-white/10">
                    Etkinliğin tamamını planla
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </>
            ) : (
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
                Soruları tamamladığınızda m² hesabının nasıl okunduğunu, hangi yükseklik aralığının mantıklı olduğunu ve zemin/erişim için nelere bakılacağını burada göreceksiniz.
              </p>
            )}

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm font-black text-white">Terim desteği</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  ["moduler-podyum", "Modüler podyum"],
                  ["gorus-hatti", "Görüş hattı"],
                  ["rampa-erisim", "Rampa"],
                  ["sahne-yuku", "Sahne yükü"],
                  ["korkuluk-merdiven", "Korkuluk ve merdiven"],
                ].map(([slug, label]) => (
                  <Link key={slug} href={`/sozluk#${slug}`} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-violet-100 transition hover:bg-white/10 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
