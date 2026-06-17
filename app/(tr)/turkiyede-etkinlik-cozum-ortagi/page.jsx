import Image from "next/image";
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { SITE_URL } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";

export const revalidate = 1800;

const PAGE_PATH = "/turkiyede-etkinlik-cozum-ortagi";
const EN_PATH = "/en/event-production-company-turkey";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const HERO_IMAGE = "/img/kurumsal/kurumsal-sahne-led-ekran.webp";
const OG_IMAGE = `${SITE_URL}${HERO_IMAGE}`;
const PHONE = "+905453048671";
const WHATSAPP_URL = `https://wa.me/${PHONE.replace("+", "")}?text=Merhaba%2C%20T%C3%BCrkiye%27de%20planlanan%20uluslararas%C4%B1%20bir%20etkinlik%20i%C3%A7in%20teknik%20prod%C3%BCksiyon%20deste%C4%9Fi%20almak%20istiyoruz.`;

const SERVICES = [
  {
    title: "Sahne ve podyum sistemleri",
    text: "Ana sahne, modüler podyum, protokol platformu ve performans alanları; mekan erişimi, yük ve izleyici akışına göre planlanır.",
    href: "/sahne-kiralama",
  },
  {
    title: "LED ekran ve video wall",
    text: "İç mekan LED, dış mekan LED, LED wall ve video wall kurulumları görüntü işlemcisi, içerik akışı ve operatör desteğiyle hazırlanır.",
    href: "/led-ekran-kiralama",
  },
  {
    title: "Ses, ışık ve teknik reji",
    text: "Line array ses, sahne ışığı, mikrofon, kontrol masası ve etkinlik günü teknik ekip desteği tek prodüksiyon planında toplanır.",
    href: "/ses-isik-sistemleri",
  },
  {
    title: "Truss, rigging ve çadır yapıları",
    text: "Truss, scaffold destek, etkinlik çadırı ve geçici kapalı alanlar; açık hava, kapalı alan ve hibrit projelere göre kurgulanır.",
    href: "/truss-kiralama",
  },
];

const CITIES = ["İstanbul", "Antalya", "İzmir", "Ankara", "Bodrum", "Türkiye geneli lojistik"];

const PROCESS = [
  {
    title: "Brief ve kapsam",
    text: "Etkinlik tipi, tarih, şehir, mekan, kişi sayısı, sahne formatı, LED ekran ihtiyacı ve teknik beklentiler netleştirilir.",
  },
  {
    title: "Teknik planlama",
    text: "Sahne, LED ekran, ses, ışık, truss, çadır, enerji ve backstage akışı için uygulanabilir bir saha planı oluşturulur.",
  },
  {
    title: "Lojistik ve kurulum",
    text: "Ekipman, araç, teknik ekip, giriş saatleri ve kurulum sırası mekan veya ajans ekibiyle koordine edilir.",
  },
  {
    title: "Etkinlik günü operasyon",
    text: "Teknik ekip; ses kontrolü, ekran akışı, sahne geçişleri ve operasyon desteği için sahada görev alır.",
  },
  {
    title: "Söküm ve teslim",
    text: "Etkinlik sonrası söküm, yükleme ve alan teslimi aynı teknik sorumluluk içinde tamamlanır.",
  },
];

const EVENT_TYPES = [
  "Kurumsal konferanslar",
  "Marka lansmanları",
  "Uluslararası kongreler",
  "Gala ve protokol etkinlikleri",
  "Festival ve konserler",
  "Fuar ve sergi projeleri",
];

const FAQ_ITEMS = [
  {
    q: "Sahneva Türkiye'ye gelecek yabancı ajanslara destek verir mi?",
    a: "Evet. Sahneva, Türkiye'de etkinlik planlayan uluslararası şirketler, ajanslar ve markalar için sahne, LED ekran, ses, ışık, truss, çadır ve teknik ekip desteğini yerel çözüm ortağı olarak planlar.",
  },
  {
    q: "Hangi şehirlerde hizmet veriyorsunuz?",
    a: "İstanbul, Antalya, İzmir, Ankara ve Bodrum başta olmak üzere birçok şehirde proje planlıyoruz. Etkinlik kapsamına göre Türkiye geneli lojistik ve kurulum desteği sağlanabilir.",
  },
  {
    q: "Sahne, LED ekran, ses ve ışık tek kapsamda alınabilir mi?",
    a: "Evet. Uluslararası etkinliklerde farklı tedarikçileri ayrı ayrı yönetmek yerine sahne, podyum, LED ekran, ses, ışık, truss, çadır ve teknik ekibi tek plan altında toplamak daha kontrollü bir akış sağlar.",
  },
  {
    q: "Teklif için hangi bilgiler gerekir?",
    a: "Etkinlik tarihi, şehir, mekan, etkinlik formatı, kişi sayısı, istenen sahne ölçüsü, LED ekran ölçüsü, ses-ışık beklentisi ve kurulum saatleri ilk teklif için yeterlidir.",
  },
  {
    q: "İngilizce iletişim kurulabilir mi?",
    a: "Evet. Brief, teknik plan, teklif ve etkinlik günü koordinasyon süreçleri uluslararası ekipler için İngilizce yürütülebilir.",
  },
];

export const metadata = {
  title: {
    absolute: "Türkiye'de Etkinlik Çözüm Ortağı | Sahneva",
  },
  description:
    "Türkiye'de etkinlik planlayan uluslararası şirketler için sahne, LED ekran, ses, ışık, truss, çadır ve teknik prodüksiyon desteği.",
  alternates: buildLanguageAlternates({
    tr: PAGE_PATH,
    en: EN_PATH,
    canonical: PAGE_PATH,
    xDefault: EN_PATH,
  }),
  openGraph: {
    title: "Türkiye'de Etkinlik Çözüm Ortağı | Sahneva",
    description:
      "Uluslararası şirketler ve ajanslar için Türkiye'de sahne, LED ekran, ses, ışık, truss ve etkinlik teknik prodüksiyon desteği.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Türkiye'de etkinlik çözüm ortağı Sahneva sahne ve LED ekran kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkiye'de Etkinlik Çözüm Ortağı | Sahneva",
    description:
      "Türkiye'de etkinlik planlayan uluslararası markalar için teknik prodüksiyon ve saha operasyonu desteği.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function JsonLd() {
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const serviceId = `${PAGE_URL}#service`;
  const faqId = `${PAGE_URL}#faq`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Türkiye'de Etkinlik Çözüm Ortağı",
        description: metadata.description,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": serviceId },
        hasPart: [{ "@id": faqId }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
          { "@type": "ListItem", position: 3, name: "Türkiye'de Etkinlik Çözüm Ortağı", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Türkiye'de etkinlik çözüm ortağı",
        serviceType: "Etkinlik teknik prodüksiyonu",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          { "@type": "City", name: "İstanbul" },
          { "@type": "City", name: "Antalya" },
          { "@type": "City", name: "İzmir" },
          { "@type": "City", name: "Ankara" },
          { "@type": "City", name: "Bodrum" },
        ],
        audience: {
          "@type": "Audience",
          audienceType: "Türkiye'de etkinlik planlayan uluslararası şirketler, ajanslar ve markalar",
        },
        description:
          "Türkiye'de sahne, LED ekran, ses, ışık, truss, çadır, teknik ekip, kurulum ve etkinlik günü operasyon desteği.",
        image: OG_IMAGE,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
          url: PAGE_URL,
          description: "Türkiye'de planlanan uluslararası etkinlikler için proje bazlı teknik prodüksiyon teklifi.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: "tr-TR",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return <JsonLdScript id="ld-json-turkiyede-etkinlik-cozum-ortagi" data={data} />;
}

function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`text-sm font-black uppercase tracking-[0.28em] ${dark ? "text-cyan-200" : "text-blue-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-black tracking-tight md:text-5xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/[0.72]" : "text-slate-600"}`}>{text}</p>
    </header>
  );
}

export default function TurkiyedeEtkinlikCozumOrtagiPage() {
  return (
    <>
      <JsonLd />
      <main className="overflow-hidden bg-white text-slate-950">
        <section className="relative bg-[#080D1B] py-24 text-white md:py-28">
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080D1B] via-[#080D1B]/90 to-[#0B1B3A]/70" />
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
              }}
            />
          </div>

          <div className="container relative mx-auto grid gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-cyan-200/25 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Türkiye'de yerel teknik prodüksiyon ortağı
              </div>
              <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Türkiye'de etkinlik planlayan uluslararası markalar için çözüm ortağı
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/[0.82]">
                Sahneva; İstanbul, Antalya, İzmir, Ankara, Bodrum ve Türkiye genelinde etkinlik planlayan
                uluslararası şirketler, ajanslar ve markalar için sahne, LED ekran, ses, ışık, truss, çadır ve
                teknik prodüksiyon çözümlerini tek ekipten planlar.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 font-black text-slate-950 transition hover:bg-emerald-400"
                >
                  WhatsApp'tan Teklif Al
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-3 font-black text-white transition hover:bg-white/15"
                >
                  Ekiple İletişime Geç
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/12 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">Üretim kapsamı</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Sahne", "LED ekran", "Ses", "Işık", "Truss", "Çadır"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="text-lg font-black">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-cyan-200/20 bg-cyan-200/10 p-5">
                <p className="text-3xl font-black">700+ proje</p>
                <p className="mt-2 text-white/[0.72]">Planlama, kurulum, operasyon ve söküm için tek teknik sorumluluk.</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Neden yerel ortak?"
              title="Türkiye'deki etkinliklerde teknik kontrol sahada başlar"
              text="Yabancı bir marka veya ajans Türkiye'ye geldiğinde ihtiyaç yalnızca ekipman kiralama değildir. Mekan erişimi, şehir lojistiği, enerji dağılımı, kurulum saatleri, teknik ekip ve etkinlik günü operasyonu birlikte yönetilmelidir."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Mekan ve şehir bilgisi", "Yükleme alanı, trafik, giriş saatleri ve yerel operasyon alışkanlıkları planın parçası olur."],
                ["Tek teknik sorumluluk", "Sahne, LED ekran, ses, ışık ve truss birbirinden kopuk değil, tek prodüksiyon kapsamı olarak ilerler."],
                ["Anlaşılır iletişim", "Brief, teknik plan, teklif ve saha koordinasyonu uluslararası ekipler için İngilizce yürütülebilir."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Anahtar teslim teknik prodüksiyon"
              title="Sahne, LED ekran, ses, ışık, truss ve çadır desteği"
              text="Prodüksiyon kapsamı; ajans brief'ine ve mekan koşullarına göre tüm teknik altyapı veya seçili hizmet kalemleri olarak planlanabilir."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-black group-hover:text-blue-700">{service.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{service.text}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1120] py-20 text-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Şehirler ve etkinlik türleri"
              title="Türkiye'de etkinlik yapacak firmalar için yerel saha gücü"
              text="Sahneva; kurumsal etkinlik, lansman, fuar, konser, kongre ve marka deneyimi projelerinde uluslararası planlama ekiplerine Türkiye tarafında teknik prodüksiyon desteği verir."
              dark
            />
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
                <h3 className="text-2xl font-black">Sık çalışılan şehirler</h3>
                <div className="mt-6 flex flex-wrap gap-3">
                  {CITIES.map((city) => (
                    <span key={city} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 font-bold text-white/85">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {EVENT_TYPES.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="font-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Çalışma akışı"
              title="İlk brief'ten alan teslimine kadar"
              text="Süreç, uluslararası ekiplerin Türkiye tarafındaki prodüksiyonu seyahat öncesinde, yükleme öncesinde ve etkinlik günü net şekilde görmesi için kurgulanır."
            />
            <div className="grid gap-5 lg:grid-cols-5">
              {PROCESS.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <span className="text-sm font-black text-blue-700">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow="Sık sorulanlar"
              title="Uluslararası etkinlik ekipleri için kısa cevaplar"
              text="Türkiye'de yerel teknik prodüksiyon ortağı arayan markalar ve ajanslar için temel soruları netleştirdik."
            />
            <div className="mx-auto max-w-4xl space-y-4">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <summary className="cursor-pointer text-lg font-black">{item.q}</summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111827] py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black md:text-5xl">Türkiye'de uluslararası bir etkinlik mi planlıyorsunuz?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/[0.72]">
              Şehir, tarih, mekan, kişi sayısı ve teknik beklentilerinizi paylaşın. Sahne, LED ekran, ses, ışık, truss,
              çadır ve teknik ekip kapsamını net bir prodüksiyon planı olarak hazırlayalım.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-7 py-3 font-black text-slate-950 transition hover:bg-emerald-400"
              >
                WhatsApp'tan Yazın
              </a>
              <Link
                href="/iletisim"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-3 font-black text-white transition hover:bg-white/15"
              >
                Etkinlik Bilgisi Gönderin
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
