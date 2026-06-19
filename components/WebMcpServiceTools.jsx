const SERVICE_OPTIONS = [
  ["stage", "Stage / Sahne"],
  ["podium", "Podium / Podyum"],
  ["led_screen", "LED Screen / LED Ekran"],
  ["sound_light_av", "Sound-Light AV / Ses-Isik AV"],
  ["truss_rigging", "Truss & Rigging"],
  ["tent_outdoor_infrastructure", "Tent & Outdoor Infrastructure / Cadir"],
  ["corporate_event_production", "Corporate Event Production"],
  ["esports_arena_production", "Esports Arena Production"],
  ["technical_field_operation", "Technical Field Operation"],
];

const CAPABILITY_FORM_PROPS = {
  toolname: "checkServiceCapability",
  tooldescription:
    "Check whether Sahneva provides a requested event production service category in Turkey and identify the information needed for a confirmed quote. This does not confirm real-time equipment availability or fixed pricing.",
};

const CAPABILITY_FIELD_PROPS = {
  serviceCategory: {
    toolparamdescription:
      "Requested Sahneva service category such as stage, podium, LED screen, sound-light AV, truss, tent, corporate event production or esports arena production.",
  },
  city: {
    toolparamdescription:
      "Event city in Turkey such as Istanbul, Antalya, Ankara, Izmir, Bodrum or another location.",
  },
  eventType: {
    toolparamdescription:
      "Type of event such as corporate event, concert, festival, conference, exhibition, esports final or outdoor activation.",
  },
  indoorOutdoor: {
    toolparamdescription: "Whether the event is indoor, outdoor or not confirmed yet.",
  },
  audienceSize: {
    toolparamdescription: "Estimated audience or guest count, if known.",
  },
  scopeNotes: {
    toolparamdescription:
      "Extra details such as dimensions, venue, date, load-in schedule, technical rider, LED size, stage size or tent needs.",
  },
};

const PODIUM_ESTIMATE_FORM_PROPS = {
  toolname: "calculatePodiumEstimate",
  tooldescription:
    "Collect the information needed for an approximate starting estimate for modular podium or stage platform rental in Turkey. This is not a final price and requires Sahneva confirmation based on project scope, city, venue, logistics and setup details.",
};

const PODIUM_FIELD_PROPS = {
  widthMeters: {
    toolparamdescription: "Requested podium or platform width in meters.",
  },
  lengthMeters: {
    toolparamdescription: "Requested podium or platform length in meters.",
  },
  heightCm: {
    toolparamdescription: "Requested podium or platform height, if known.",
  },
  days: {
    toolparamdescription: "Number of rental or event days.",
  },
  indoorOutdoor: {
    toolparamdescription: "Whether the podium setup is indoor, outdoor or not confirmed yet.",
  },
  finishNeeded: {
    toolparamdescription:
      "Whether carpet, fabric skirt, stairs, finish or other visual surface details are needed.",
  },
  city: {
    toolparamdescription: "Event city in Turkey.",
  },
};

const COPY = {
  tr: {
    eyebrow: "AI ajanlari icin guvenli hizmet rehberi",
    title: "Hizmet uygunlugu ve podyum olcusu icin on bilgi",
    intro:
      "Bu alan stok, ekip veya kesin fiyat onayi vermez. Etkinlik turu, sehir, mekan, olcu ve teknik kapsam netlestikce Sahneva ekibi gercek teklif hazirlar.",
    capabilityTitle: "Hizmet kapsamini kontrol et",
    capabilityText:
      "Sahne, LED ekran, ses-isik, truss, cadir, kurumsal etkinlik veya e-spor arena produksiyonu icin hangi bilgilerin gerekli oldugunu toparlar.",
    estimateTitle: "Podyum icin yaklasik kapsam topla",
    estimateText:
      "Podyum hesaplamasi yalnizca yaklasik baslangic rehberidir. Nihai fiyat; lojistik, mekan erisimi, kurulum suresi, ekip, hali/kumas, merdiven ve teknik detaylara gore Sahneva onayi ile netlesir.",
    serviceCategory: "Hizmet kategorisi",
    city: "Sehir",
    eventType: "Etkinlik turu",
    indoorOutdoor: "Alan tipi",
    audienceSize: "Tahmini kisi sayisi",
    scopeNotes: "Notlar / teknik kapsam",
    width: "En (m)",
    length: "Boy (m)",
    height: "Yukseklik",
    days: "Gun sayisi",
    finishNeeded: "Kaplama / bitis ihtiyaci",
    submitCapability: "Kapsam bilgisini ilet",
    submitEstimate: "Podyum kapsamini ilet",
    indoor: "Ic mekan",
    outdoor: "Dis mekan",
    unknown: "Net degil",
    finishPlaceholder: "Hali, kumas, merdiven, dekor, zemin notlari",
  },
  en: {
    eyebrow: "Safe service guidance for AI agents",
    title: "Service capability and podium scope brief",
    intro:
      "This area does not confirm stock, crew availability or fixed final pricing. Sahneva prepares a confirmed proposal after the event type, city, venue, dimensions and technical scope are reviewed.",
    capabilityTitle: "Check service capability",
    capabilityText:
      "Collect the details needed for stage, LED screen, sound-light, truss, tent, corporate event or esports arena production support in Turkey.",
    estimateTitle: "Collect podium estimate scope",
    estimateText:
      "Podium estimate guidance is approximate only. Final pricing requires Sahneva confirmation based on logistics, venue access, setup time, crew, carpet/fabric finish, stairs and technical details.",
    serviceCategory: "Service category",
    city: "City",
    eventType: "Event type",
    indoorOutdoor: "Area type",
    audienceSize: "Estimated audience",
    scopeNotes: "Notes / technical scope",
    width: "Width (m)",
    length: "Length (m)",
    height: "Height",
    days: "Number of days",
    finishNeeded: "Finish requirement",
    submitCapability: "Send scope details",
    submitEstimate: "Send podium scope",
    indoor: "Indoor",
    outdoor: "Outdoor",
    unknown: "Not confirmed",
    finishPlaceholder: "Carpet, fabric, stairs, decor or surface notes",
  },
};

function FormField({ label, children, inverse = false }) {
  return (
    <label className="block">
      <span className={`mb-2 block text-sm font-black ${inverse ? "text-white" : "text-slate-800"}`}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "min-h-[48px] w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

export default function WebMcpServiceTools({ locale = "tr", contactHref = "/iletisim" }) {
  const text = COPY[locale] || COPY.tr;

  return (
    <section className="bg-slate-950 py-20 text-white" aria-labelledby="webmcp-service-tools-title">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-cyan-200">
            {text.eyebrow}
          </p>
          <h2 id="webmcp-service-tools-title" className="text-3xl font-black md:text-5xl">
            {text.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">{text.intro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <form
            action={contactHref}
            method="get"
            className="rounded-3xl border border-white/10 bg-white p-6 text-slate-950 shadow-2xl md:p-8"
            {...CAPABILITY_FORM_PROPS}
          >
            <h3 className="text-2xl font-black">{text.capabilityTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{text.capabilityText}</p>

            <div className="mt-6 grid gap-4">
              <FormField label={text.serviceCategory}>
                <select
                  name="serviceCategory"
                  className={inputClass}
                  required
                  {...CAPABILITY_FIELD_PROPS.serviceCategory}
                >
                  {SERVICE_OPTIONS.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </FormField>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label={text.city}>
                  <input name="city" className={inputClass} placeholder="Istanbul" {...CAPABILITY_FIELD_PROPS.city} />
                </FormField>
                <FormField label={text.eventType}>
                  <input name="eventType" className={inputClass} placeholder="Conference / Festival" {...CAPABILITY_FIELD_PROPS.eventType} />
                </FormField>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label={text.indoorOutdoor}>
                  <select name="indoorOutdoor" className={inputClass} {...CAPABILITY_FIELD_PROPS.indoorOutdoor}>
                    <option value="not_confirmed">{text.unknown}</option>
                    <option value="indoor">{text.indoor}</option>
                    <option value="outdoor">{text.outdoor}</option>
                  </select>
                </FormField>
                <FormField label={text.audienceSize}>
                  <input
                    name="audienceSize"
                    type="number"
                    min="0"
                    className={inputClass}
                    placeholder="500"
                    {...CAPABILITY_FIELD_PROPS.audienceSize}
                  />
                </FormField>
              </div>

              <FormField label={text.scopeNotes}>
                <textarea
                  name="scopeNotes"
                  rows={4}
                  className={`${inputClass} py-3`}
                  placeholder="Venue, date, dimensions, technical rider..."
                  {...CAPABILITY_FIELD_PROPS.scopeNotes}
                />
              </FormField>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-blue-700 px-5 font-black text-white transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              {text.submitCapability}
            </button>
          </form>

          <form
            action={contactHref}
            method="get"
            className="rounded-3xl border border-cyan-200/30 bg-slate-900 p-6 text-white shadow-2xl md:p-8"
            {...PODIUM_ESTIMATE_FORM_PROPS}
          >
            <h3 className="text-2xl font-black">{text.estimateTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{text.estimateText}</p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label={text.width} inverse>
                  <input name="widthMeters" type="number" min="0" step="0.1" className={inputClass} placeholder="6" {...PODIUM_FIELD_PROPS.widthMeters} />
                </FormField>
                <FormField label={text.length} inverse>
                  <input name="lengthMeters" type="number" min="0" step="0.1" className={inputClass} placeholder="4" {...PODIUM_FIELD_PROPS.lengthMeters} />
                </FormField>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label={text.height} inverse>
                  <input name="heightCm" className={inputClass} placeholder="40 cm" {...PODIUM_FIELD_PROPS.heightCm} />
                </FormField>
                <FormField label={text.days} inverse>
                  <input name="days" type="number" min="1" className={inputClass} placeholder="1" {...PODIUM_FIELD_PROPS.days} />
                </FormField>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label={text.indoorOutdoor} inverse>
                  <select name="indoorOutdoor" className={inputClass} {...PODIUM_FIELD_PROPS.indoorOutdoor}>
                    <option value="not_confirmed">{text.unknown}</option>
                    <option value="indoor">{text.indoor}</option>
                    <option value="outdoor">{text.outdoor}</option>
                  </select>
                </FormField>
                <FormField label={text.city} inverse>
                  <input name="city" className={inputClass} placeholder="Istanbul" {...PODIUM_FIELD_PROPS.city} />
                </FormField>
              </div>

              <FormField label={text.finishNeeded} inverse>
                <textarea
                  name="finishNeeded"
                  rows={4}
                  className={`${inputClass} py-3`}
                  placeholder={text.finishPlaceholder}
                  {...PODIUM_FIELD_PROPS.finishNeeded}
                />
              </FormField>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-cyan-300 px-5 font-black text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100"
            >
              {text.submitEstimate}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
