// app/(tr)/etkinlik-personel-temini/page.jsx
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import {
  ArrowRight,
  BadgeCheck,
  BrushCleaning,
  ClipboardCheck,
  Clock,
  Coffee,
  HardHat,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

export const revalidate = 86400;

/* ================== Sabitler ================== */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");

const ORIGIN = SITE_URL;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#local`;

const PAGE_PATH = "/etkinlik-personel-temini";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;

// Not: duzen sonuna " | Sahneva" ekliyor; baslik 60 karakteri asmasin diye kisa.
const TITLE = "Etkinlik Personel Temini | Güvenlik ve Temizlik";
const DESCRIPTION =
  "Festival ve kurumsal etkinlikler için personel temini: belgeli güvenlik, temizlik, ikram, hostes ve teknik ekip. Süpervizör yönetiminde vardiyalı kadro.";

const OG_IMAGE = `${ORIGIN}/img/ekip-calisma.webp`;

const PHONE = "+905453048671";
const WA_TEXT = encodeURIComponent(
  "Merhaba, etkinlik personel temini için teklif istiyorum. Etkinlik: [festival/kurumsal/lansman], Tarih: [gg.aa.yyyy], Şehir: [il/ilçe], Süre: [gün], İhtiyaç: [güvenlik/temizlik/ikram/hostes/teknik], Tahmini kişi sayısı: [kişi]."
);
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

/* ================== İçerik Verileri ================== */
const TEAMS = [
  {
    icon: ShieldCheck,
    title: "Güvenlik Personeli",
    description:
      "5188 sayılı kanun kapsamında belgeli özel güvenlik görevlileri. Giriş kontrolü, alan güvenliği, sahne önü ve protokol bölgesi.",
    points: ["Belgeli özel güvenlik", "Giriş ve akreditasyon kontrolü", "Alan ve sahne önü güvenliği"],
  },
  {
    icon: BrushCleaning,
    title: "Temizlik Personeli",
    description:
      "Etkinlik öncesi alan hazırlığı, etkinlik boyunca sürekli temizlik ve etkinlik sonrası toplama.",
    points: ["Alan hazırlığı", "Etkinlik boyunca devriye temizlik", "Söküm sonrası toplama"],
  },
  {
    icon: Coffee,
    title: "İkram Personeli",
    description:
      "Catering ve ikram servisinde görevli ekip; protokol ikramı, stant ve genel alan servisi.",
    points: ["Protokol ikramı", "Stant ve alan servisi", "Servis düzeni ve tazeleme"],
  },
  {
    icon: UserCheck,
    title: "Hostes ve Karşılama",
    description:
      "Davetli karşılama, yönlendirme, kayıt masası ve protokol refakati için sunum düzeyi yüksek ekip.",
    points: ["Karşılama ve yönlendirme", "Kayıt ve akreditasyon masası", "Protokol refakati"],
  },
  {
    icon: Users,
    title: "Servis Personeli",
    description:
      "Salon ve alan içi servis operasyonu; oturma düzeni, masa servisi ve etkinlik akışında destek.",
    points: ["Salon ve masa servisi", "Oturma düzeni desteği", "Akış içi operasyon"],
  },
  {
    icon: HardHat,
    title: "Teknik Ekip",
    description:
      "Sahne, ses, ışık ve LED ekran kurulumunda görevli teknik personel; kurulum, operasyon ve söküm.",
    points: ["Kurulum ve söküm", "Etkinlik boyunca teknik operasyon", "Ekipmanla birlikte tek ekip"],
  },
];

const PHASES = [
  {
    step: "01",
    title: "Etkinlik Öncesi",
    description:
      "Alan hazırlığı, kurulum desteği ve güvenlik çemberinin devreye alınması. Kadro etkinlik gününden önce sahada olur.",
  },
  {
    step: "02",
    title: "Etkinlik Süresince",
    description:
      "Vardiyalı çalışma düzeniyle kesintisiz operasyon. Her ekibin başında süpervizör bulunur, tek noktadan koordine edilir.",
  },
  {
    step: "03",
    title: "Etkinlik Sonrası",
    description:
      "Alan toplama, temizlik ve söküm süreci. Alan teslim edildiği duruma getirilerek kapatılır.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Güvenlik personeliniz belgeli mi?",
    a: "Evet. Görevlendirdiğimiz özel güvenlik personeli 5188 sayılı kanun kapsamında belgelidir. Etkinlik alanlarında güvenlik hizmeti yalnızca belgeli personelle verilebilir.",
  },
  {
    q: "Kaç kişilik ekip sağlayabiliyorsunuz?",
    a: "Kadro etkinliğin ölçeğine, alan büyüklüğüne ve süresine göre planlanır. Küçük ölçekli kurumsal etkinliklerden çok günlü festival organizasyonlarına kadar farklı büyüklüklerde ekip kuruyoruz. Net sayı, alan ve program bilgisi paylaşıldıktan sonra çıkarılır.",
  },
  {
    q: "Personel ve ekipmanı birlikte alabilir miyim?",
    a: "Evet, tercih edilen çalışma biçimi budur. Sahne, LED ekran, ses-ışık ve çadır gibi ekipmanları da biz sağladığımız için kurulum, operasyon ve personel tek sözleşmede toplanır; sahada tek muhatap olur.",
  },
  {
    q: "Vardiya düzeni nasıl kurgulanıyor?",
    a: "Etkinlik süresi ve çalışma saatleri dikkate alınarak vardiya planı çıkarılır. Uzun süren etkinliklerde kadro vardiyalara bölünerek kesintisiz hizmet sağlanır; planlama teklif aşamasında netleştirilir.",
  },
  {
    q: "Süpervizör hizmeti dahil mi?",
    a: "Güvenlik ve temizlik ekiplerinde süpervizör görevlendiriyoruz. Süpervizör ekibin saha yönetiminden sorumludur ve organizasyon tarafındaki yetkiliyle doğrudan iletişim kurar.",
  },
  {
    q: "Türkiye genelinde hizmet veriyor musunuz?",
    a: "Evet. İstanbul merkezli çalışıyoruz ve Türkiye genelinde etkinliklere ekip çıkarıyoruz. Şehir dışı işlerde ulaşım ve konaklama planlaması teklife dahil edilir.",
  },
];

const RELATED = [
  { href: "/sahne-kiralama", label: "Sahne Kiralama", note: "Sahne kurulumu ve teknik prodüksiyon" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama", note: "Festival ve etkinlik alanı çadırları" },
  { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri", note: "Ses, ışık ve sahne teknik altyapısı" },
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", note: "Uçtan uca kurumsal etkinlik prodüksiyonu" },
];

/* ================== Metadata ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({
    tr: PAGE_PATH,
    canonical: PAGE_PATH,
  }),
  openGraph: {
    title: `${TITLE} | Sahneva`,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva ekibi etkinlik hazırlığı sırasında",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Sahneva`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== Yapisal Veri ================== */
function StaffingStructuredData() {
  const faqs = FAQ_ITEMS.map((f, i) => ({
    "@type": "Question",
    "@id": `${PAGE_URL}#faq-q-${i + 1}`,
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          "@id": `${PAGE_URL}#primaryimage`,
          url: OG_IMAGE,
        },
        mainEntity: { "@id": `${PAGE_URL}#service` },
        hasPart: [{ "@id": `${PAGE_URL}#faq` }],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Etkinlik Personel Temini",
        serviceType: "Etkinlik personel temini",
        provider: { "@id": LOCAL_BUSINESS_ID },
        areaServed: "TR",
        url: PAGE_URL,
        description:
          "Festival ve kurumsal etkinlikler için belgeli güvenlik, temizlik, ikram, hostes, servis ve teknik personel temini; süpervizör yönetiminde vardiyalı kadro.",
        offers: {
          "@type": "Offer",
          url: PAGE_URL,
          availability: "https://schema.org/InStock",
          priceCurrency: "TRY",
          // Not: kadro etkinlik olceğine gore kuruldugu icin fiyat eklenmiyor.
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs,
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

/* ================== Sayfa ================== */
export default function Page() {
  return (
    <div className="bg-white">
      <StaffingStructuredData />
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: ORIGIN },
          { name: "Etkinlik Personel Temini", url: PAGE_URL },
        ]}
      />

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/img/ekip-calisma.webp"
            alt="Sahneva ekibi etkinlik hazırlığı sırasında"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Etkinlik Operasyon Hizmetleri
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Etkinlik Personel Temini
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Festival ve kurumsal etkinlikler için belgeli güvenlik, temizlik, ikram,
            hostes, servis ve teknik personel. Kadro süpervizör yönetiminde,
            vardiyalı düzende sahaya çıkar.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-4 font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp&apos;tan teklif alın
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              İletişim formu
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Kadrolar ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900">
          Sağladığımız personel kadroları
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Etkinliğin ölçeğine göre tek bir kadro ya da birden fazla ekibi birlikte
          kuruyoruz. Her ekibin görev tanımı ve saha sorumlusu baştan netleşir.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAMS.map((team) => {
            const Icon = team.icon;
            return (
              <article
                key={team.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <Icon className="h-9 w-9 text-amber-600" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {team.title}
                </h3>
                <p className="mt-3 text-slate-600">{team.description}</p>
                <ul className="mt-5 space-y-2">
                  {team.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                      <BadgeCheck
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* ---------- Operasyon akisi ---------- */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-slate-900">
            Kadro etkinliğin üç aşamasında da sahada
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Personel yalnızca etkinlik günü değil, hazırlık ve söküm dönemlerinde de
            görevde olur. Alan teslim alındığı andan kapanışa kadar aynı ekip çalışır.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PHASES.map((phase) => (
              <div
                key={phase.step}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-4xl font-bold text-amber-500">{phase.step}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {phase.title}
                </h3>
                <p className="mt-3 text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Fark ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Personel ve ekipman aynı yerden
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              Personel şirketleri ekip gönderir, prodüksiyon firmaları ekipman kurar;
              aradaki koordinasyon çoğu zaman organizatörün üzerinde kalır. Biz sahneyi,
              LED ekranı, ses-ışık sistemini ve çadırı da sağladığımız için kurulum,
              operasyon ve personel tek planda buluşur.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Sahada tek muhatap, tek sözleşme",
                "Süpervizör yönetiminde ekip koordinasyonu",
                "Belgeli özel güvenlik personeli",
                `${YEARS_OF_EXPERIENCE} yıllık etkinlik prodüksiyonu deneyimi`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ClipboardCheck
                    className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600"
                    aria-hidden="true"
                  />
                  <span className="text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <Clock className="h-10 w-10 text-amber-600" aria-hidden="true" />
            <h3 className="mt-5 text-2xl font-semibold text-slate-900">
              Vardiya planlaması
            </h3>
            <p className="mt-4 text-slate-600">
              Çok günlü etkinliklerde kadro vardiyalara bölünür; gece ve gündüz
              dilimlerinde kesintisiz görev sürer. Vardiya sayısı, kişi başı çalışma
              süresi ve nöbet devri teklif aşamasında yazılı olarak netleştirilir.
            </p>
            <p className="mt-4 text-slate-600">
              Şehir dışı etkinliklerde ulaşım ve konaklama planlaması da bu aşamada
              hesaplanır.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Kurumsal etkinlik ---------- */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold">
            Kurumsal etkinlik personel temini
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Lansman, bayi toplantısı, gala ve ödül töreni gibi kurumsal etkinliklerde
            ihtiyaç genelde daha dar bir kadrodur: karşılama ve kayıt masası için hostes,
            salon içi servis, protokol ikramı ve giriş kontrolü için güvenlik.
          </p>
          <p className="mt-4 text-lg text-slate-300">
            Bu formatlarda ekip, etkinliğin teknik kurulumunu yapan kadroyla birlikte
            çalışır; davetli karşılamadan sahne akışına kadar tek bir operasyon planı
            yürür.
          </p>
          <Link
            href="/kurumsal-organizasyon"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-amber-400 hover:text-amber-300"
          >
            Kurumsal organizasyon hizmetimiz
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ---------- SSS ---------- */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-3xl font-bold text-slate-900">Sık sorulan sorular</h2>
        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900 marker:hidden">
                {item.q}
              </summary>
              <p className="mt-4 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- Ilgili hizmetler ---------- */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900">İlgili hizmetler</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RELATED.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-amber-400 hover:shadow-sm"
              >
                <span className="font-semibold text-slate-900">{item.label}</span>
                <span className="mt-2 block text-sm text-slate-600">{item.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Etkinliğiniz için kadro planlayalım
        </h2>
        <p className="mt-5 text-lg text-slate-600">
          Etkinliğin tarihini, şehrini, süresini ve alan büyüklüğünü paylaşın; ihtiyaç
          duyulan ekip yapısını ve kişi sayısını çıkarıp teklif hazırlayalım.
        </p>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Teklif briefi gönderin
        </a>
      </section>
    </div>
  );
}
