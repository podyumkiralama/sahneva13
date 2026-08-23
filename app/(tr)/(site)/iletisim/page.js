// app/(site)/iletisim/page.jsx
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import QuoteFormValidation from "@/components/QuoteFormValidation.client";
import { COMPANY } from "@/lib/legal/companyInfo";
import {
  BASE_SITE_URL,
  LOCAL_BUSINESS_ID,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

const PAGE_URL = `${BASE_SITE_URL}/iletisim`;

export const metadata = {
  title: "İletişim | Hızlı Teklif ve Kiralama Danışmanlığı",
  description:
    "Sahne kiralama, LED ekran, ses-ışık sistemleri için hemen ulaşın. Türkiye geneli hızlı kurulum ve profesyonel danışmanlık.",
  alternates: buildAlternatesForPath("/iletisim"),
  openGraph: {
    title: "İletişim | Sahneva",
    description:
      "Sahne, LED ekran, ses-ışık sistemleri için hemen teklif alın. Türkiye geneli hızlı kurulum ve profesyonel danışmanlık.",
    url: PAGE_URL,
    siteName: "Sahneva",
    images: [
      {
        url: `${BASE_SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon iletişim – sahne, LED ekran ve ses-ışık kiralama teklif alın",
      },
    ],
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | Sahneva",
    description:
      "Sahne, LED ekran, ses-ışık sistemleri için hemen teklif alın. Türkiye geneli hızlı kurulum ve profesyonel danışmanlık.",
    images: [`${BASE_SITE_URL}/img/hero-bg.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const PHONE = "+905453048671";
const MAIL = "info@sahneva.com";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
  "Merhaba, Sahneva web sitesinden ulaşıyorum. Etkinlik için teklif almak istiyorum."
)}`;

const GMB_PROFILE_URL = "https://g.page/r/CZhkMzkNOdgnEBI";
const GMB_REVIEW_URL = "https://g.page/r/CZhkMzkNOdgnEBI/review";

const WEB_MCP_QUOTE_FORM_PROPS = {
  toolname: "requestEventProductionQuote",
  tooldescription:
    "Submit an event production quote request to Sahneva for stage, LED screen, sound, lighting, truss, tent, podium and technical crew needs in Turkey.",
};

const WEB_MCP_QUOTE_FIELD_PROPS = {
  name: {
    toolparamdescription:
      "Full name of the person requesting the event production quote.",
  },
  phone: {
    toolparamdescription:
      "Phone number with country code for quote follow-up by Sahneva.",
  },
  email: {
    toolparamdescription:
      "Email address where Sahneva should send the proposal and technical details.",
  },
  eventType: {
    toolparamdescription:
      "Type of event such as corporate event, concert, festival, conference, exhibition or other.",
  },
  message: {
    toolparamdescription:
      "Event date, city or venue, estimated audience size, required equipment and production details.",
  },
  formSubject: {
    title: "Internal form subject",
    toolparamdescription:
      "Internal Formspree subject line used to identify this Sahneva quote request.",
  },
  redirectUrl: {
    title: "Post-submit redirect URL",
    toolparamdescription:
      "Internal redirect URL that sends the user to the Sahneva thank-you page after submission.",
  },
  spamTrap: {
    title: "Spam prevention field",
    toolparamdescription:
      "Hidden anti-spam field that should be left empty by real users and AI agents.",
  },
};

/* ───── STRUCTURED DATA (Rich Snippet) ───── */
function ContactStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${PAGE_URL}#contact-page`,
        url: PAGE_URL,
        name: "Sahneva ??leti??im",
        description:
          "Profesyonel sahne kiralama, LED ekran, ses-??????k sistemleri ileti??im bilgileri",
        image: `${BASE_SITE_URL}/img/hero-bg.webp`,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        mainEntity: { "@id": LOCAL_BUSINESS_ID },
        inLanguage: "tr-TR",
      },
    ],
  };

  return <JsonLd data={schema} />;
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden">
      <ContactStructuredData />

      {/* HERO */}
      <PageHero
        eyebrow="7/24 teknik destek"
        title="Bize"
        titleAccent="Ulaşın"
        description="Etkinliğiniz için <strong>en uygun çözümleri</strong> sunalım; <strong>2 saat içinde detaylı teklif</strong> hazırlıyoruz."
      />

      <div
        id="main"
        className="relative pb-28 md:pb-0"
        style={{ color: "#0f172a" }}
      >
        {/* Hızlı İletişim Kartları */}
        <section className="py-20 bg-gradient-to-br from-white to-violet-50/50">
          <div className="container max-w-6xl mx-auto px-4">
            
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                  Hızlı{" "}
                  <span className="gradient-text gradient-text--safe-xl">
                    İletişim
                  </span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                  Size en uygun iletişim yöntemiyle hemen bize ulaşın, 2 saat
                  içinde yanıt verelim
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8" />
              </div>
            

            
              <div
                className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                role="list"
                aria-label="Hızlı iletişim seçenekleri"
              >
                
                  <ContactCard
                    icon="📞"
                    title="Telefon ile Ara"
                    info="+90 545 304 86 71"
                    description="Hemen arayın, uzman ekibimizle görüşün"
                    href={`tel:${PHONE}`}
                    color="from-violet-700 to-purple-700"
                    buttonText="Hemen Ara"
                  />
                

                
                  <ContactCard
                    icon="💬"
                    title="WhatsApp"
                    info="Hızlı Mesaj"
                    description="WhatsApp'tan yazın, anında yanıt verelim"
                    href={WHATSAPP_URL}
                    color="from-green-700 to-emerald-700"
                    buttonText="WhatsApp'tan Yaz"
                  />
                

                
                  <ContactCard
                    icon="✉️"
                    title="E-posta"
                    info={MAIL}
                    description="Detaylı teklif için e-posta gönderin"
                    href={`mailto:${MAIL}?subject=Sahneva Teklif Talebi&body=Merhaba, etkinliğim hakkında detaylı teklif almak istiyorum.`}
                    color="from-purple-700 to-pink-700"
                    buttonText="E-posta Gönder"
                  />
                
              </div>
            
          </div>
        </section>

        {/* Harita + Form */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-violet-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Harita ve Konum */}
              <div className="space-y-8">
                
                  <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                      Konumumuz ve{" "}
                      <span className="gradient-text gradient-text--safe-xl">
                        İletişim
                      </span>
                    </h2>
                    <p className="text-xl text-neutral-600 mb-8">
                      Türkiye geneli hizmet veriyoruz. Ofisimizi ziyaret etmek
                      için haritayı kullanabilirsiniz.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 lg:mx-0 mx-auto" />
                  </div>
                

                
                  <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                    <iframe
                      title="Sahneva Konumu - Profesyonel Etkinlik Ekipmanları"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.7561988118855!2d28.97663777534253!3d41.096173214009205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7eef124ac6d%3A0x27d8390d39336498!2sSahneva%20Organizasyon!5e0!3m2!1str!2str!4v1780231301073!5m2!1str!2str"
                      width="100%"
                      height="300"
                      className="w-full nc-IletisimPage-map-1"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>

                  {/* Açık adres ve ticari bilgiler: mesafeli satış mevzuatı ve
                      ödeme kuruluşu denetimi bu bilgilerin sitede erişilebilir
                      olmasını gerektirir. Tek kaynak: lib/legal/companyInfo.js */}
                  <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-neutral-900">Firma Bilgileri</h3>
                    <address className="mt-3 not-italic text-neutral-700 leading-7">
                      <strong className="block text-neutral-900">{COMPANY.legalName}</strong>
                      {COMPANY.address}
                      <br />
                      Posta Kodu: {COMPANY.postalCode}
                      <br />
                      Vergi Dairesi / No: {COMPANY.taxOffice} / {COMPANY.taxNumber}
                      <br />
                      MERSİS No: {COMPANY.mersisNo}
                      <br />
                      Ticaret Sicil No: {COMPANY.tradeRegistryNo}
                    </address>
                    <p className="mt-3 text-sm text-neutral-600">
                      Ödeme, teslimat ve iade koşulları için{" "}
                      <Link href="/mesafeli-satis-sozlesmesi" className="text-[#6d28d9] hover:underline">
                        Mesafeli Satış Sözleşmesi
                      </Link>
                      ,{" "}
                      <Link href="/teslimat-ve-ifa-kosullari" className="text-[#6d28d9] hover:underline">
                        Teslimat ve İfa Koşulları
                      </Link>{" "}
                      ve{" "}
                      <Link href="/iptal-ve-iade-kosullari" className="text-[#6d28d9] hover:underline">
                        İptal ve İade Koşulları
                      </Link>{" "}
                      sayfalarımıza bakabilirsiniz.
                    </p>
                  </div>


                
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={GMB_PROFILE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-violet-700 to-purple-800 hover:from-violet-800 hover:to-purple-900 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label="Google Haritalar'da Sahneva profilini aç (yeni sekmede açılır)"
                    >
                      <span className="flex items-center justify-center gap-2">
                        📍 Haritalar'da Aç
                      </span>
                    </a>
                    <a
                      href={GMB_REVIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-amber-800 to-orange-800 hover:from-amber-900 hover:to-orange-900 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg"
                      aria-label="Google üzerinde Sahneva için yorum yaz (yeni sekmede açılır)"
                    >
                      <span className="flex items-center justify-center gap-2">
                        ⭐ Google'da Yorum Yap
                      </span>
                    </a>
                  </div>
                

                
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
                    <h3 className="text-2xl font-black text-neutral-900 mb-6 flex items-center gap-3">
                      <span className="text-3xl">🏢</span>
                      İletişim Bilgileri
                    </h3>
                    <div className="space-y-4" role="list" aria-label="Doğrudan iletişim yöntemleri">
                      <InfoRow label="Telefon" icon="📞">
                        <a
                          href={`tel:${PHONE}`}
                          className="inline-flex min-h-[44px] items-center text-violet-600 hover:text-violet-700 font-medium"
                        >
                          {PHONE}
                        </a>
                      </InfoRow>
                      <InfoRow label="WhatsApp" icon="💬">
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="inline-flex min-h-[44px] items-center text-green-800 hover:text-green-900 font-medium"
                        >
                          Hızlı Mesaj Gönder
                          <span className="sr-only"> (yeni sekmede açılır)</span>
                        </a>
                      </InfoRow>
                      <InfoRow label="E-posta" icon="✉️">
                        <a
                          href={`mailto:${MAIL}`}
                          className="inline-flex min-h-[44px] items-center text-purple-600 hover:text-purple-700 font-medium"
                        >
                          {MAIL}
                          <span className="sr-only"> (e-posta uygulamasını açar)</span>
                        </a>
                      </InfoRow>
                    </div>
                  </div>
                
              </div>

              {/* Teklif Formu */}
              
                <div
                  className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-8"
                  id="teklif-formu"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-neutral-900 mb-4">
                      Hızlı{" "}
                      <span className="gradient-text gradient-text--safe-xl">
                        Teklif Alın
                      </span>
                    </h2>
                    <p className="text-neutral-600">
                      Etkinlik bilgilerinizi bırakın, 2 saat içinde detaylı
                      teklif sunalım
                    </p>
                  </div>

                  <form
                    action="https://formspree.io/f/xanppven"
                    method="POST"
                    acceptCharset="UTF-8"
                    {...WEB_MCP_QUOTE_FORM_PROPS}
                    className="space-y-6"
                  >
                    <div
                      className="p-4 bg-violet-50 border border-violet-100 rounded-xl text-sm text-violet-900"
                      role="status"
                      aria-live="polite"
                    >
                      * ile işaretli alanlar zorunludur. Lütfen telefon numaranıza ülke kodunu ekleyin ve geçerli bir
                      e-posta adresi yazın ki size hızlıca dönüş yapabilelim.
                    </div>

                    <QuoteFormValidation locale="tr" />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-neutral-700 mb-2"
                        >
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Adınız ve soyadınız"
                          aria-describedby="name-help"
                          {...WEB_MCP_QUOTE_FIELD_PROPS.name}
                          className="w-full border border-neutral-300 rounded-xl p-4 transition-all duration-200 focus-ring focus-visible:border-violet-500/60"
                          required
                          autoComplete="name"
                          inputMode="text"
                        />
                        <p id="name-help" className="mt-2 text-xs text-neutral-500">
                          Teklifi hangi kişiyle paylaşacağımızı ve gerektiğinde kimi arayacağımızı belirtin.
                        </p>
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-neutral-700 mb-2"
                        >
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+90 ___ ___ __ __"
                          aria-describedby="phone-help"
                          {...WEB_MCP_QUOTE_FIELD_PROPS.phone}
                          className="w-full border border-neutral-300 rounded-xl p-4 transition-all duration-200 focus-ring focus-visible:border-violet-500/60"
                          required
                          autoComplete="tel"
                          inputMode="tel"
                        />
                        <p id="phone-help" className="mt-2 text-xs text-neutral-500">
                          Ülke koduyla birlikte yazarsanız ekibimiz sizi arayarak detayları hızla netleştirebilir.
                        </p>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email@example.com"
                        aria-describedby="email-help"
                        {...WEB_MCP_QUOTE_FIELD_PROPS.email}
                        className="w-full border border-neutral-300 rounded-xl p-4 transition-all duration-200 focus-ring focus-visible:border-violet-500/60"
                        required
                        autoComplete="email"
                        inputMode="email"
                      />
                      <p id="email-help" className="mt-2 text-xs text-neutral-500">
                        Teklif, teknik çizimler ve onay süreçleri için bu adresi kullanacağız.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        Etkinlik Türü *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        aria-describedby="event-type-help"
                        {...WEB_MCP_QUOTE_FIELD_PROPS.eventType}
                        className="w-full border border-neutral-300 rounded-xl p-4 transition-all duration-200 focus-ring focus-visible:border-violet-500/60"
                        required
                        autoComplete="off"
                      >
                        <option value="">Etkinlik türünü seçin</option>
                        <option value="Kurumsal Etkinlik">
                          Kurumsal Etkinlik
                        </option>
                        <option value="Konser">Konser</option>
                        <option value="Düğün">Düğün</option>
                        <option value="Festival">Festival</option>
                        <option value="Konferans">Konferans</option>
                        <option value="Sergi">Sergi</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                      <p id="event-type-help" className="mt-2 text-xs text-neutral-500">
                        En yakın seçeneği belirtmek, sahne, ekran ve ses sistemi önerilerimizi netleştirir.
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-neutral-700 mb-2"
                      >
                        Etkinlik Detayları *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Etkinlik tarihi, konumu, tahmini katılımcı sayısı ve ihtiyaç duyduğunuz ekipmanlar..."
                        rows={5}
                        aria-describedby="message-help"
                        {...WEB_MCP_QUOTE_FIELD_PROPS.message}
                        className="w-full border border-neutral-300 rounded-xl p-4 transition-all duration-200 focus-ring focus-visible:border-violet-500/60 resize-none"
                        required
                        autoComplete="off"
                      />
                      <p id="message-help" className="mt-2 text-xs text-neutral-500">
                        Tarih, mekan, hedef kitle ve ihtiyaç duyduğunuz ekipmanları yazdığınızda teklif süreci hızlanır.
                      </p>
                    </div>

                    {/* Formspree hidden fields */}
                    <input
                      type="hidden"
                      name="_subject"
                      value="Sahneva | Yeni Teklif Talebi"
                      {...WEB_MCP_QUOTE_FIELD_PROPS.formSubject}
                    />
                    <input
                      type="hidden"
                      name="_redirect"
                      value="https://www.sahneva.com/tesekkurler"
                      {...WEB_MCP_QUOTE_FIELD_PROPS.redirectUrl}
                    />
                    <input
                      type="text"
                      name="_gotcha"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      {...WEB_MCP_QUOTE_FIELD_PROPS.spamTrap}
                    />

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-violet-700 to-purple-800 hover:from-violet-800 hover:to-purple-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <span className="flex items-center justify-center gap-2">
                        🚀 Hemen Teklif Al
                      </span>
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      Formu göndererek{" "}
                      <Link
                        href="/gizlilik-politikasi"
                        className="text-violet-600 hover:text-violet-700 underline"
                      >
                        gizlilik politikamızı
                      </Link>{" "}
                      kabul etmiş olursunuz.
                    </p>
                  </form>
                </div>
              
            </div>
          </div>
        </section>

        {/* Acil Destek */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-violet-900/95">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Acil{" "}
                  <span className="gradient-text gradient-text--safe-xl">
                    Teknik Destek
                  </span>
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Mevcut etkinliğinizde teknik sorun mu yaşıyorsunuz?
                  <br />
                  7/24 acil destek hattımızdan hemen yardım alın.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a
                    href={`tel:${PHONE}`}
                    className="group bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                    aria-label="Acil teknik destek için hemen ara"
                  >
                    <span className="flex items-center justify-center gap-2">
                      🚨 Acil Destek Hattı
                    </span>
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                    aria-label="WhatsApp'tan acil destek iste (yeni sekmede açılır)"
                  >
                    <span className="flex items-center justify-center gap-2">
                      💬 WhatsApp Destek
                    </span>
                  </a>
                </div>

                <div className="mt-8 p-4 bg-yellow-500/20 rounded-xl border border-yellow-400/30 max-w-2xl mx-auto">
                  <p className="text-yellow-200 text-sm">
                    <strong>⏰ 7/24 Hizmet:</strong> Mevcut etkinliklerinizde
                    yaşadığınız teknik sorunlarda aynı gün içinde çözüm
                    sunuyoruz.
                  </p>
                </div>
              </div>
            
          </div>
        </section>

        {/* Hizmet sayfalarına yönlendirme */}
        <section className="py-16 bg-white" aria-labelledby="contact-services-title">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 id="contact-services-title" className="text-3xl font-black text-neutral-900 mb-4">
              Hangi Hizmet İçin Teklif Almak İstiyorsunuz?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-3xl mx-auto">
              Teklif istemeden önce ilgili hizmet sayfasındaki kapsam, ekipman ve fiyatı etkileyen detayları inceleyerek daha hızlı sonuç alabilirsiniz.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/sahne-kiralama" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Sahne Kiralama</Link>
              <Link href="/led-ekran-kiralama" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">LED Ekran Kiralama</Link>
              <Link href="/ses-isik-sistemleri" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Ses ve Işık Sistemleri</Link>
              <Link href="/podyum-kiralama" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Podyum Kiralama</Link>
              <Link href="/cadir-kiralama" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Çadır Kiralama</Link>
              <Link href="/truss-kiralama" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Truss Kiralama</Link>
              <Link href="/kurumsal-organizasyon" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Kurumsal Organizasyon</Link>
              <Link href="/masa-sandalye-kiralama" className="rounded-full border border-neutral-200 bg-neutral-50 px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:bg-violet-50 hover:text-violet-800">Masa Sandalye Kiralama</Link>
            </div>
          </div>
        </section>

        {/* Mobil bar için ekstra boşluk (yapışmayı engeller) */}
        <div className="mobile-action-bar-spacer md:hidden" aria-hidden="true" />
      </div>

      {/* Mobile CTA Bar */}
      <div
        data-mobile-action-bar
        className="mobile-action-bar fixed bottom-0 left-0 z-50 flex w-full bg-white px-2 pt-4 shadow-2xl border-t md:hidden"
      >
        <a
          href={`tel:${PHONE}`}
          className="flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-2 text-sm font-bold text-violet-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          aria-label="Sahneva'yı ara"
        >
          <span className="text-lg">📞</span>
          <span>Ara</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-2 text-sm font-bold text-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
          aria-label="WhatsApp üzerinden Sahneva'ya yaz (yeni sekmede açılır)"
        >
          <span className="text-lg">💬</span>
          <span>WhatsApp</span>
        </a>
        <a
          href="#teklif-formu"
          className="flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center rounded-lg px-2 text-sm font-bold text-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
          aria-label="Teklif formuna git"
        >
          <span className="text-lg">📝</span>
          <span>Teklif Al</span>
        </a>
      </div>
    </div>
  );
}

/* ───── YARDIMCI BİLEŞENLER ───── */
function ContactCard({ icon, title, info, description, href, color, buttonText }) {
  const headingId = `iletisim-kart-${title.toLowerCase().replace(/[^a-z0-9çğıöşü]+/gi, "-")}`;
  const descriptionId = `${headingId}-aciklama`;
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  const opensMailApp = typeof href === "string" && href.startsWith("mailto:");
  const extraHint = isExternal
    ? " (yeni sekmede açılır)"
    : opensMailApp
      ? " (e-posta uygulamasını açar)"
      : "";

  return (
    <div
      className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-violet-200 transition-all duration-500 hover:scale-105 text-center"
      role="listitem"
      aria-labelledby={headingId}
      aria-describedby={descriptionId}
    >
      <div className="text-5xl mb-4 gradient-text gradient-text--safe-xl" aria-hidden="true">
        {icon}
      </div>
      <h3
        id={headingId}
        className="text-xl font-black text-neutral-900 mb-3 group-hover:text-violet-600 transition-colors"
      >
        {title}
      </h3>
      <div className="text-2xl font-bold text-neutral-800 mb-2">{info}</div>
      <p id={descriptionId} className="text-neutral-600 mb-6 leading-relaxed">
        {description}
      </p>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? (href.includes("wa.me") ? "nofollow noopener noreferrer" : "noopener noreferrer") : undefined}
        aria-describedby={`${headingId} ${descriptionId}`}
        className={`inline-flex items-center justify-center bg-gradient-to-r ${color} hover:shadow-xl text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg`}
      >
        <span className="flex items-center gap-2">
          {buttonText}
          {extraHint ? <span className="sr-only">{extraHint}</span> : null}
        </span>
      </a>
    </div>
  );
}

function InfoRow({ label, icon, children }) {
  const labelId = `${label.toLowerCase().replace(/[^a-z0-9çğıöşü]+/gi, "-")}-etiket`;

  return (
    <div className="flex items-center gap-4" role="listitem" aria-labelledby={labelId}>
      <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center" aria-hidden="true">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <div id={labelId} className="font-semibold text-neutral-900">
          {label}
        </div>
        <div className="text-neutral-800">{children}</div>
      </div>
    </div>
  );
}
