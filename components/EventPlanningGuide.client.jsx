"use client";

import Link from "next/link";
import { ArrowRight, Check, ClipboardList, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const EVENT_OPTIONS = [
  {
    key: "kurumsal",
    label: "Kurumsal etkinlik",
    description: "Lansman, bayi toplantısı, kongre, gala veya şirket içi buluşma.",
    plannerType: "kongre",
  },
  {
    key: "konser",
    label: "Konser / festival",
    description: "Performans, seyirci akışı ve açık alan teknik altyapısı.",
    plannerType: "konser",
  },
  {
    key: "fuar",
    label: "Fuar / sergi",
    description: "Stand, ürün gösterimi ve ziyaretçi deneyimi odaklı kurulum.",
    plannerType: "fuar",
  },
  {
    key: "davet",
    label: "Davet / kutlama",
    description: "Yemekli düzen, dans alanı, sahne ve konuk konforu.",
    plannerType: "dugun",
  },
];

const CORPORATE_FORMATS = [
  {
    key: "sunum",
    label: "Sunum / panel",
    plannerType: "kongre",
    note: "Konuşmacının görünürlüğü, konuşulabilirlik ve sunum akışı öne çıkar.",
    services: [
      { label: "Podyum kiralama", href: "/podyum-kiralama", why: "Konuşmacı alanını ve görüş hattını düzenlemek için" },
      { label: "LED ekran kiralama", href: "/led-ekran-kiralama", why: "Sunumların arka sıradan okunabilmesi için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Mikrofon netliği ve kamera uyumu için" },
    ],
    checklist: ["Konuşmacı ve panelist sayısı", "Sunum, video veya canlı bağlantı ihtiyacı", "Seyircinin en uzak noktadan sahneye mesafesi"],
  },
  {
    key: "lansman",
    label: "Ürün / marka lansmanı",
    plannerType: "lansman",
    note: "Açılış anı, marka görünürlüğü ve içerik geçişleri birlikte planlanır.",
    services: [
      { label: "Podyum kiralama", href: "/podyum-kiralama", why: "Ürün ve konuşmacı için kontrollü bir odak alanı oluşturmak için" },
      { label: "LED ekran kiralama", href: "/led-ekran-kiralama", why: "Ürün filmi, geri sayım ve marka içeriği için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Açılış anını görünür ve duyulur kılmak için" },
    ],
    checklist: ["Ürün ortaya çıkışı veya sahneye giriş akışı", "Video, sunum ve müzik sıralaması", "Marka renkleri ve sahne arka planı"],
  },
  {
    key: "gala",
    label: "Gala / ödül gecesi",
    plannerType: "gala",
    note: "Masa düzeni, ödül geçişleri ve sahneye güvenli erişim belirleyicidir.",
    services: [
      { label: "Podyum kiralama", href: "/podyum-kiralama", why: "Ödül ve protokol geçişleri için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Anons, müzik ve sahne atmosferi için" },
      { label: "Masa ve sandalye kiralama", href: "/masa-sandalye-kiralama", why: "Yemekli düzen ve konuk konforu için" },
    ],
    checklist: ["Ödül alacak kişi ve sahneye çıkış sırası", "Masa düzeni ile sahne arasındaki görüş koridoru", "Fotoğraf ve video çekimi için sahne noktaları"],
  },
  {
    key: "bayi",
    label: "Bayi toplantısı",
    plannerType: "bayi",
    note: "Gündüz sunumu ile akşam yemeği veya ödül akışı arasında dönüşüm gerekebilir.",
    services: [
      { label: "Podyum kiralama", href: "/podyum-kiralama", why: "Sunum ve protokol alanını netleştirmek için" },
      { label: "LED ekran kiralama", href: "/led-ekran-kiralama", why: "Satış verisi ve ürün içeriklerini paylaşmak için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Uzun programda tutarlı ses ve sahne kontrolü için" },
    ],
    checklist: ["Gündüz ve akşam için yerleşim değişikliği", "Sunum, ödül ve eğlence bölümlerinin sırası", "Katılımcıların giriş ve karşılama akışı"],
  },
];

const OTHER_EVENT_PLANS = {
  konser: {
    note: "Seyir mesafesi, zemin, rüzgâr ve sahne trafiği aynı anda değerlendirilir.",
    services: [
      { label: "Sahne kiralama", href: "/sahne-kiralama", why: "Performans ve teknik ekipman için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Kapsama, miksaj ve sahne atmosferi için" },
      { label: "LED ekran kiralama", href: "/led-ekran-kiralama", why: "Uzak seyircinin sahneyi takip edebilmesi için" },
    ],
    checklist: ["Sanatçı teknik rider'ı", "Seyirci kapasitesi ve en uzak izleme mesafesi", "Kurulum, soundcheck ve söküm saatleri"],
  },
  fuar: {
    note: "Mekânın kurulum saatleri, stand ölçüsü ve ziyaretçi akışı en başta netleşmelidir.",
    services: [
      { label: "Podyum kiralama", href: "/podyum-kiralama", why: "Stand veya ürün gösterim alanını yükseltmek için" },
      { label: "LED ekran kiralama", href: "/led-ekran-kiralama", why: "Ürün içeriği ve marka görünürlüğü için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Sunum ve demo alanı için" },
    ],
    checklist: ["Standın net eni, boyu ve tavan yüksekliği", "Fuarın load-in / load-out saatleri", "Ekran ve ürün demosu için enerji noktaları"],
  },
  davet: {
    note: "Konuk konforu, servis yolları, dans alanı ve sahne birlikte yerleşir.",
    services: [
      { label: "Podyum kiralama", href: "/podyum-kiralama", why: "Konuşma, nikâh veya performans alanı için" },
      { label: "Masa ve sandalye kiralama", href: "/masa-sandalye-kiralama", why: "Oturma düzeni ve servis akışı için" },
      { label: "Ses ve ışık sistemleri", href: "/ses-isik-sistemleri", why: "Müzik, anons ve ambiyans için" },
    ],
    checklist: ["Yemekli veya kokteyl düzeni", "Dans alanı ve sahne konumu", "Servis, giriş ve fotoğraf alanları"],
  },
};

const VENUES = [
  { key: "salon", label: "Kapalı salon / otel", note: "Tavan yüksekliği, asma noktaları ve yükleme saatleri kontrol edilir." },
  { key: "acikalan", label: "Açık alan", note: "Zemin, hava koşulu, enerji ve gerekirse çadır değerlendirilir." },
];

const SCALES = [
  { key: "small", label: "1–100 kişi", guests: 80 },
  { key: "medium", label: "101–500 kişi", guests: 300 },
  { key: "large", label: "500+ kişi", guests: 700 },
];

function ChoiceButton({ active, children, onClick, description }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
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

export default function EventPlanningGuide() {
  const [eventKey, setEventKey] = useState("");
  const [corporateFormatKey, setCorporateFormatKey] = useState("");
  const [venueKey, setVenueKey] = useState("");
  const [scaleKey, setScaleKey] = useState("");

  const selectedEvent = EVENT_OPTIONS.find((event) => event.key === eventKey);
  const selectedFormat = CORPORATE_FORMATS.find((format) => format.key === corporateFormatKey);
  const selectedVenue = VENUES.find((venue) => venue.key === venueKey);
  const selectedScale = SCALES.find((scale) => scale.key === scaleKey);

  const plan = useMemo(() => {
    if (!selectedEvent) return null;
    if (selectedEvent.key === "kurumsal") return selectedFormat ?? null;
    return OTHER_EVENT_PLANS[selectedEvent.key];
  }, [selectedEvent, selectedFormat]);

  const isReady = Boolean(plan && selectedVenue && selectedScale);
  const plannerType = selectedFormat?.plannerType ?? selectedEvent?.plannerType;
  const plannerUrl = plannerType && selectedVenue && selectedScale
    ? `/etkinlik-planlayici?tur=${plannerType}&mekan=${selectedVenue.key}&kisi=${selectedScale.guests}`
    : "/etkinlik-planlayici";

  const reset = () => {
    setEventKey("");
    setCorporateFormatKey("");
    setVenueKey("");
    setScaleKey("");
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/5 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Kısa keşif</p>
          <h2 id="etkinlik-rehberi-baslik" className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Etkinliğiniz için doğru sorularla başlayın
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            Hizmet adı bilmek zorunda değilsiniz. Formatı, mekânı ve ölçeği seçin; önce hangi kararların netleşmesi gerektiğini, sonra da ilgili hizmetleri görün.
          </p>
        </div>
        {eventKey ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-800"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Baştan seç
          </button>
        ) : null}
      </div>

      <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.8fr)]">
        <div className="space-y-7">
          <fieldset>
            <legend className="text-base font-black text-slate-950">1. Nasıl bir etkinlik planlıyorsunuz?</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {EVENT_OPTIONS.map((event) => (
                <ChoiceButton
                  key={event.key}
                  active={event.key === eventKey}
                  description={event.description}
                  onClick={() => {
                    setEventKey(event.key);
                    setCorporateFormatKey("");
                    setVenueKey("");
                    setScaleKey("");
                  }}
                >
                  {event.label}
                </ChoiceButton>
              ))}
            </div>
          </fieldset>

          {eventKey === "kurumsal" ? (
            <fieldset>
              <legend className="text-base font-black text-slate-950">2. Kurumsal etkinliğin ana akışı ne?</legend>
              <p className="mt-1 text-sm leading-6 text-slate-600">Bu cevap, podyumun tek başına mı yoksa ekran, ses-ışık ve oturma düzeniyle mi planlanacağını belirler.</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {CORPORATE_FORMATS.map((format) => (
                  <ChoiceButton
                    key={format.key}
                    active={format.key === corporateFormatKey}
                    description={format.note}
                    onClick={() => setCorporateFormatKey(format.key)}
                  >
                    {format.label}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>
          ) : null}

          {eventKey ? (
            <fieldset>
              <legend className="text-base font-black text-slate-950">{eventKey === "kurumsal" ? "3" : "2"}. Etkinlik nerede yapılacak?</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {VENUES.map((venue) => (
                  <ChoiceButton
                    key={venue.key}
                    active={venue.key === venueKey}
                    description={venue.note}
                    onClick={() => setVenueKey(venue.key)}
                  >
                    {venue.label}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>
          ) : null}

          {eventKey ? (
            <fieldset>
              <legend className="text-base font-black text-slate-950">{eventKey === "kurumsal" ? "4" : "3"}. Yaklaşık kaç konuk bekliyorsunuz?</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {SCALES.map((scale) => (
                  <ChoiceButton
                    key={scale.key}
                    active={scale.key === scaleKey}
                    onClick={() => setScaleKey(scale.key)}
                  >
                    {scale.label}
                  </ChoiceButton>
                ))}
              </div>
            </fieldset>
          ) : null}
        </div>

        <aside className="rounded-3xl bg-slate-950 p-6 text-white sm:p-7" aria-live="polite">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">Size özel başlangıç noktası</p>
          {isReady ? (
            <>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                {selectedEvent.label}{selectedFormat ? ` · ${selectedFormat.label}` : ""}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{plan.note}</p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-black text-white">Öncelikli hizmetler</p>
                <ul className="mt-3 space-y-3">
                  {plan.services.map((service) => (
                    <li key={service.href} className="rounded-2xl bg-white/8 p-3">
                      <Link href={service.href} className="text-sm font-black text-white underline decoration-blue-300/60 underline-offset-4 hover:text-blue-200">
                        {service.label}
                      </Link>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{service.why}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-black text-white">Tekliften önce netleştirin</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  {plan.checklist.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                  {selectedVenue.key === "acikalan" ? (
                    <li className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      Zemin fotoğrafı, enerji kaynağı ve yağmur/rüzgâr planı
                    </li>
                  ) : null}
                  {selectedScale.key === "large" ? (
                    <li className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      En uzak sıranın sahneye ve ekrana mesafesi
                    </li>
                  ) : null}
                </ul>
              </div>

              <Link
                href={plannerUrl}
                className="mt-7 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-950 transition hover:bg-blue-50"
              >
                Kapsamı ve yaklaşık bütçeyi oluştur
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </>
          ) : (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
              <ClipboardList className="mb-3 h-6 w-6 text-blue-200" aria-hidden="true" />
              Seçimleriniz tamamlandığında, hangi hizmetlerin neden öne çıktığını ve ekibe hangi bilgileri vermeniz gerektiğini burada göreceksiniz.
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
