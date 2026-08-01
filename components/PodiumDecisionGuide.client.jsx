"use client";

import Link from "next/link";
import { ArrowRight, Check, MessageCircle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const EVENT_FORMATS = [
  { key: "kurumsal", label: "Kurumsal sunum / panel", plannerType: "kongre" },
  { key: "lansman", label: "Ürün / marka lansmanı", plannerType: "lansman" },
  { key: "gala", label: "Gala / ödül gecesi", plannerType: "gala" },
  { key: "performans", label: "Performans / konser", plannerType: "konser" },
  { key: "fuar", label: "Fuar / sergi", plannerType: "fuar" },
];

const PODIUM_USES = [
  { key: "speaker", label: "Konuşmacı veya panel", note: "Kürsü, konuşmacı hareketi ve salon görüşü" },
  { key: "award", label: "Ödül / protokol geçişi", note: "Sahneye iniş-çıkış ve fotoğraf noktaları" },
  { key: "product", label: "Ürün gösterimi", note: "Ürünün görünürlüğü, kablo ve ekran entegrasyonu" },
  { key: "performance", label: "Performans / yoğun trafik", note: "Yük, hareket ve sahne ekipmanı" },
];

const ACCESS_OPTIONS = [
  { key: "steps", label: "Merdiven yeterli", note: "Standart iniş-çıkış planı" },
  { key: "ramp", label: "Rampa gerekli", note: "Erişilebilirlik veya ekipman arabası için" },
  { key: "ground", label: "Zemin eşit değil / açık alan", note: "Dengeleme ve zemin hazırlığı için" },
];

const STAGE_TRAFFIC = [
  { key: "light", label: "1–5 kişi, hafif kullanım" },
  { key: "busy", label: "6+ kişi veya ekipmanlı kullanım" },
];

function ChoiceButton({ active, children, description, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
        active
          ? "border-blue-600 bg-blue-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
      }`}
    >
      <span className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            active ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300"
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

export default function PodiumDecisionGuide() {
  const [formatKey, setFormatKey] = useState("");
  const [useKey, setUseKey] = useState("");
  const [accessKey, setAccessKey] = useState("");
  const [trafficKey, setTrafficKey] = useState("");

  const format = EVENT_FORMATS.find((item) => item.key === formatKey);
  const podiumUse = PODIUM_USES.find((item) => item.key === useKey);
  const access = ACCESS_OPTIONS.find((item) => item.key === accessKey);
  const traffic = STAGE_TRAFFIC.find((item) => item.key === trafficKey);
  const isReady = Boolean(format && podiumUse && access && traffic);

  const advice = useMemo(() => {
    if (!isReady) return [];

    const items = [
      {
        title: "Ölçü ve görüş hattı",
        text: "Podyum ölçüsü yalnızca konuk sayısına göre belirlenmez. Aynı anda sahnede bulunacak kişi sayısı, kürsü/ürün konumu ve en uzak izleyicinin görüşü birlikte değerlendirilir.",
      },
      {
        title: "Yükseklik ve güvenli erişim",
        text: access.key === "ramp"
          ? "Rampa sonradan eklenen bir aksesuar değildir; podyum yüksekliğine göre kapladığı alan en baştan plana girer. Merdiven ve kenar güvenliği de aynı keşifte netleşir."
          : access.key === "ground"
            ? "Zemin eğimi, çim, parke veya kot farkı fotoğraf ve ölçüyle kontrol edilir. Dengeleme planı yapılmadan net bir platform yüksekliği söylemek doğru olmaz."
            : "Merdivenin sahne üzerindeki çıkış noktasını, protokol ve teknik ekibin birbirini kesmeyeceği şekilde planlayın.",
      },
      {
        title: "Kullanım yoğunluğu",
        text: traffic.key === "busy"
          ? "Birden fazla kişi, enstrüman veya hareketli performans varsa yük dağılımı, kayıt bağlantıları ve sahne trafiği ayrıca ele alınır."
          : "Kısa konuşma ve hafif kullanımda bile podyumun esnememesi, yüzeyin kaymaması ve kablo geçişlerinin gizlenmesi kontrol edilir.",
      },
    ];

    if (podiumUse.key === "product") {
      items.push({
        title: "Ürün ve içerik entegrasyonu",
        text: "Ürün açılışı varsa ekran, ışık ve kablo güzergâhı podyum planıyla birlikte ele alınmalıdır; sonradan eklenen kablolar hem görünümü hem güvenliği etkiler.",
      });
    }

    return items;
  }, [access, isReady, podiumUse, traffic]);

  const plannerUrl = format
    ? `/etkinlik-planlayici?tur=${format.plannerType}&ek=podium`
    : "/etkinlik-planlayici";
  const whatsappText = isReady
    ? `Merhaba, podyum kiralama için kısa keşif yaptım. Etkinlik: ${format.label}; kullanım: ${podiumUse.label}; erişim: ${access.label}; sahne trafiği: ${traffic.label}. Ölçü ve uygun podyum planı için bilgi almak istiyorum.`
    : "Merhaba, podyum kiralama için bilgi almak istiyorum.";

  const reset = () => {
    setFormatKey("");
    setUseKey("");
    setAccessKey("");
    setTrafficKey("");
  };

  return (
    <section
      id="podyum-kesif-rehberi"
      className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-16 text-white sm:py-20"
      aria-labelledby="podyum-kesif-rehberi-baslik"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Podyum için kısa keşif</p>
            <h2 id="podyum-kesif-rehberi-baslik" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Podyumdan önce doğru soruları yanıtlayın
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
              Metrekare tek başına yeterli değildir. Bu dört kısa yanıt, podyum teklifinde ölçü, yükseklik, erişim ve güvenlik için hangi bilgilerin gerektiğini gösterir.
            </p>
          </div>
          {formatKey ? (
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

        <div className="mt-9 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.82fr)]">
          <div className="space-y-7 rounded-[2rem] bg-white p-5 text-slate-900 sm:p-8">
            <fieldset>
              <legend className="text-base font-black">1. Podyum hangi etkinlikte kullanılacak?</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {EVENT_FORMATS.map((item) => (
                  <ChoiceButton
                    key={item.key}
                    active={formatKey === item.key}
                    onClick={() => {
                      setFormatKey(item.key);
                      setUseKey("");
                      setAccessKey("");
                      setTrafficKey("");
                    }}
                  >
                    {item.label}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>

            {formatKey ? (
              <fieldset>
                <legend className="text-base font-black">2. Podyumun temel kullanım amacı ne?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {PODIUM_USES.map((item) => (
                    <ChoiceButton
                      key={item.key}
                      active={useKey === item.key}
                      description={item.note}
                      onClick={() => {
                        setUseKey(item.key);
                        setAccessKey("");
                        setTrafficKey("");
                      }}
                    >
                      {item.label}
                    </ChoiceButton>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {useKey ? (
              <fieldset>
                <legend className="text-base font-black">3. Erişim veya zemin için özel bir durum var mı?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {ACCESS_OPTIONS.map((item) => (
                    <ChoiceButton
                      key={item.key}
                      active={accessKey === item.key}
                      description={item.note}
                      onClick={() => {
                        setAccessKey(item.key);
                        setTrafficKey("");
                      }}
                    >
                      {item.label}
                    </ChoiceButton>
                  ))}
                </div>
              </fieldset>
            ) : null}

            {accessKey ? (
              <fieldset>
                <legend className="text-base font-black">4. Sahne üzerindeki trafik nasıl olacak?</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {STAGE_TRAFFIC.map((item) => (
                    <ChoiceButton key={item.key} active={trafficKey === item.key} onClick={() => setTrafficKey(item.key)}>
                      {item.label}
                    </ChoiceButton>
                  ))}
                </div>
              </fieldset>
            ) : null}
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7" aria-live="polite">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Podyum planınız için notlar</p>
            {isReady ? (
              <>
                <h3 className="mt-3 text-2xl font-black leading-tight">Keşifte öne çıkacak başlıklar</h3>
                <div className="mt-5 space-y-3">
                  {advice.map((item) => (
                    <article key={item.title} className="rounded-2xl bg-white/8 p-4">
                      <h4 className="text-sm font-black text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-black">Önceden hazırlayın</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    <li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />Etkinlik tarihi, ilçe ve kurulum/söküm saati</li>
                    <li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />Mekân planı veya alanın ölçülü fotoğrafı</li>
                    <li className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />İstenen yaklaşık en, boy ve podyum yüksekliği</li>
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
                    Bu notlarla bilgi alın
                  </a>
                  <Link href={plannerUrl} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/25 px-5 text-sm font-black text-white transition hover:bg-white/10">
                    Etkinliğin tamamını planla
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </>
            ) : (
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
                Seçimleri tamamlayın; podyum yüksekliği, rampa, zemin ve sahne trafiğiyle ilgili dikkat edilmesi gerekenleri burada özetleyelim.
              </p>
            )}

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm font-black">Bu terimler işinizi kolaylaştırır</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  ["moduler-podyum", "Modüler podyum"],
                  ["gorus-hatti", "Görüş hattı"],
                  ["rampa-erisim", "Rampa"],
                  ["sahne-yuku", "Sahne yükü"],
                  ["korkuluk-merdiven", "Korkuluk ve merdiven"],
                ].map(([slug, label]) => (
                  <Link key={slug} href={`/sozluk#${slug}`} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-blue-100 transition hover:bg-white/10 hover:text-white">
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
