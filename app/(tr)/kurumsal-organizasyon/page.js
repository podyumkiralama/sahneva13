// app/kurumsal-organizasyon/page.jsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { buildFaqSchema } from "@/lib/structuredData/faq";
import { buildServiceProductSchema } from "@/lib/structuredData/serviceProducts";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";

/* ================== Sabitler ================== */
export const revalidate = 1800;
const ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.sahneva.com";
const ORGANIZATION_ID = `${ORIGIN}/#org`;
const PHONE = "+905453048671";
const WA_TEXT =
  "Merhaba%2C+kurumsal+organizasyon+icin+teklif+istiyorum.+Etkinlik+turu%3A+%5Bkonferans%2Flansman%2Fgala%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Kisi+sayisi%3A+%5Bxxx%5D.";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

// Base64 blur placeholder
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div
      className="flex justify-center items-center h-64"
      role="status"
      aria-label="Galeri yükleniyor"
    >
      <div
        className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"
        aria-hidden="true"
      />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

/* ================== META ================== */
export const metadata = {
  title:
    "Kurumsal Organizasyon Şirketleri | İstanbul Etkinlik ve Organizasyon Kiralama",
  description:
    "İstanbul kurumsal organizasyon şirketleri arasında profesyonel sahne, LED ekran, ses ve etkinlik prodüksiyon çözümleri. Büyük organizasyon yönetimi ve organizasyon kiralama hizmetleri.",
  alternates: { canonical: `${ORIGIN}/kurumsal-organizasyon` },
  openGraph: {
    title:
      "Kurumsal Organizasyon Şirketleri | İstanbul Etkinlik ve Organizasyon Kiralama",
    description:
      "İstanbul kurumsal organizasyon şirketleri arasında profesyonel sahne, LED ekran, ses ve etkinlik prodüksiyon çözümleri. Büyük organizasyon yönetimi ve organizasyon kiralama hizmetleri.",
    url: `${ORIGIN}/kurumsal-organizasyon`,
    type: "website",
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Kurumsal organizasyon için konferans sahnesi ve etkinlik düzeni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kurumsal Organizasyon Şirketleri | İstanbul Etkinlik ve Organizasyon Kiralama",
    description:
      "İstanbul kurumsal organizasyon şirketleri arasında profesyonel sahne, LED ekran, ses ve etkinlik prodüksiyon çözümleri. Büyük organizasyon yönetimi ve organizasyon kiralama hizmetleri.",
    images: [`${ORIGIN}/img/kurumsal/hero.webp`],
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

/* ================== Yardımcılar & Sabitler ================== */
const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, " ve ")
    .replace(/[^a-z0-9çğıöşü\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* ================== Premium arka plan (faq ile aynı çizgi+glow hissi) ================== */
function PremiumGridBg() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[120px]" />
      <div className="absolute -bottom-48 right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
    </div>
  );
}

const KEYWORD_CHIPS = [
  "Kurumsal organizasyon şirketleri",
  "Kurumsal etkinlik organizasyon şirketleri",
  "Etkinlik organizasyon",
  "Büyük organizasyon şirketleri",
  "Event organizasyon şirketleri",
  "Kurumsal etkinlik",
  "Organizasyon kiralama",
];

function TrustBar() {
  return (
    <section className="py-10 bg-white" aria-label="Kurumsal segment ve standartlar">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { t: "Kurumsal Segment", d: "Holding • global marka • kamu • üniversite" },
            { t: "Operasyon Modeli", d: "Planlama → keşif → kurulum → yönetim → rapor" },
            { t: "Teknik Standart", d: "Yedekli güç • yedek kontrol • saha güvenliği" },
            { t: "Coğrafi Kapsam", d: "İstanbul merkezli • Türkiye geneli" },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-black text-gray-900">{x.t}</div>
              <div className="mt-2 text-gray-600 leading-relaxed">{x.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsightsBlock() {
  return (
    <section className="py-20 bg-white" aria-labelledby="insights-baslik">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 id="insights-baslik" className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
            Kurumsal Rehber ve İçgörüler
          </h2>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600">
            Strateji, teknik keşif ve risk yönetimini tek akışta topladığınızda premium kalite standardı oluşur.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-black text-gray-900">Strateji → Planlama</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Tek sayfa strateji, SMART hedefler ve geriye dönük timeline ile kapsamı sabitleyin. Run-of-show ile tüm
              paydaşları aynı akışa alın.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-black text-gray-900">Teknik → Operasyon</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Teknik keşif, güç planı, kablolama ve yedekli sistemler premium standardın temelidir. Prova ve senaryo
              simülasyonu riski düşürür.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
            <h3 className="text-xl font-black text-gray-900">Bütçe → Risk</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              %10–15 contingency, açık hava B planı ve kritik zincir yaklaşımı ile bütçeyi “kesinti maliyeti”
              perspektifinden yönetin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const HERO = {
  src: "/img/kurumsal/hero.webp",
  alt: "Profesyonel kurumsal organizasyon - Konferans sahnesi ve etkinlik düzenlemesi",
  sizes: "(max-width: 768px) 100vw, 100vw",
};

const SERVICES = [
  {
    icon: "🎤",
    title: "Konferans & Seminer Organizasyonu",
    description:
      "Profesyonel ses sistemi, LED ekran ve aydınlatma çözümleri ile etkileyici konferanslar",
    features: [
      "Simultane çeviri sistemleri",
      "Kablosuz mikrofon sistemleri",
      "Kayıt ve canlı yayın",
      "Akustik optimizasyon",
    ],
  },
  {
    icon: "🚀",
    title: "Ürün Lansman Organizasyonu",
    description:
      "Etkileyici görsel şovlar ve interaktif deneyimler ile unutulmaz lansmanlar",
    features: [
      "3D mapping ve projeksiyon",
      "Özel sahne tasarımı",
      "Medya duvarları",
      "Interaktif ekranlar",
    ],
  },
  {
    icon: "🎭",
    title: "Gala & Ödül Töreni",
    description:
      "Şık ve profesyonel organizasyon çözümleri ile kurumsal galalar",
    features: [
      "Kırmızı halı kurulumu",
      "Özel aydınlatma tasarımı",
      "Sahne dekorasyonu",
      "VIP alanları",
    ],
  },
  {
    icon: "🏟️",
    title: "Miting & Açık Hava Organizasyonu",
    description:
      "Büyük kitlelere yönelik profesyonel açık hava etkinlik çözümleri",
    features: [
      "Yüksek parlaklıklı LED ekranlar",
      "Güçlü ses sistemleri",
      "Jeneratör ve altyapı",
      "Güvenlik önlemleri",
    ],
  },
  {
    icon: "🛣️",
    title: "Roadshow & Fuar Organizasyonu",
    description:
      "Mobil ve esnek organizasyon çözümleri ile marka deneyimi",
    features: [
      "Taşınabilir sahne sistemleri",
      "Hızlı kurulum çözümleri",
      "Marka entegrasyonu",
      "Interaktif standlar",
    ],
  },
  {
    icon: "💡",
    title: "Teknik Altyapı & Destek",
    description:
      "Profesyonel teknik altyapı ve 7/24 teknik destek hizmetleri",
    features: [
      "Jeneratör sistemleri",
      "UPS kesintisiz güç",
      "Acil durum planlaması",
      "7/24 teknik destek",
    ],
  },
];

const USE_CASES = [
  {
    icon: "🎤",
    text: "Konferans ve Seminerler",
    desc: "Profesyonel bilgi paylaşım platformları",
  },
  {
    icon: "🚀",
    text: "Ürün Lansmanları",
    desc: "Yeni ürün ve hizmet tanıtım etkinlikleri",
  },
  {
    icon: "🎭",
    text: "Gala ve Ödül Törenleri",
    desc: "Kurumsal başarı kutlamaları",
  },
  {
    icon: "🏟️",
    text: "Kurumsal Mitingler",
    desc: "Açık hava kurumsal buluşmaları",
  },
  {
    icon: "🛣️",
    text: "Roadshow ve Fuarlar",
    desc: "Mobil tanıtım ve marka deneyimi",
  },
  {
    icon: "💍",
    text: "Kurumsal Sosyal Etkinlikler",
    desc: "Yılbaşı partileri ve kutlamalar",
  },
];

const PLANNING_STEPS = [
  {
    title: "Hedef & format belirleme",
    description:
      "Kurumsal organizasyonun başarısı, hedefin netleştirilmesiyle başlar. Konferans, lansman, gala ya da bayi toplantısı gibi formatlar; içerik, akış ve teknik gereksinimleri belirler. Hedef kitleyi ve ana mesajı netleştirmek, kurumsal etkinlik organizasyonu bütçesini doğru yönetmenizi sağlar. Böylece zaman çizelgesi, konuşmacı planı ve teknik ihtiyaçlar tek bir çatı altında toplanır.",
    checklist: [
      "Etkinlik amacı ve başarı metriği",
      "Format ve içerik akışı",
      "Katılımcı profili",
    ],
  },
  {
    title: "Mekân & kapasite analizi",
    description:
      "Mekân seçimi; kapasite, erişilebilirlik, yükleme alanı ve akustik gibi kriterleri içerir. İstanbul gibi büyük şehirlerde ulaşım ve park planı ekstra önem kazanır. Alanın tavan yüksekliği ve sahne yerleşimi, sahne ve LED ekran kurulumunu doğrudan etkiler. Bu aşamada yangın çıkışları, fuaye alanı ve kayıt noktaları da planlanmalıdır.",
    checklist: [
      "Kapasite ve oturma düzeni",
      "Teknik kurulum alanları",
      "Giriş-çıkış ve güvenlik",
    ],
  },
  {
    title: "Teknik altyapı kontrol listesi",
    description:
      "Sahne, ses, ışık ve LED ekran gereksinimleri kurumsal organizasyonun algısını belirler. İçerik yoğunluğu ve izleme mesafesi LED ekran çözünürlüğünü belirlerken, ses sistemi oturum tipine göre projelendirilir. Güç altyapısı ve yedekleme planı, kesintisiz yayın için kritik rol oynar. Teknik çizimler ve kablolama planları bu noktada tamamlanır.",
    checklist: [
      "Sahne ölçüsü ve görünürlük",
      "Ses-ışık ve LED ekran planı",
      "Güç ve yedek sistemler",
    ],
  },
  {
    title: "Kurulum, prova ve etkinlik günü akışı",
    description:
      "Kurulum planı, ekipmanların sahaya gelişinden prova saatine kadar net bir zaman çizelgesi ister. Provalarda sunum akışı, ışık senaryosu ve sahne geçişleri test edilir. Etkinlik günü; kayıt, sahne yönetimi ve back office koordinasyonu eş zamanlı yürütülür. Profesyonel kurumsal organizasyon firması, bu adımları tek elden yöneterek riski azaltır.",
    checklist: ["Kurulum zaman planı", "Prova ve teknik testler", "Gün akışı"],
  },
  {
    title: "Söküm & raporlama",
    description:
      "Etkinlik bittiğinde söküm ve iade süreci planlı yürütülmelidir. Tüm ekipman kontrol edilerek hasar raporu ve teslim tutanakları hazırlanır. Katılımcı geri bildirimleri, operasyonel raporlarla birlikte değerlendirilir. Bu analiz, bir sonraki kurumsal organizasyon için iyileştirme alanlarını netleştirir.",
    checklist: [
      "Söküm ve teslim planı",
      "Hasar ve envanter kontrolü",
      "Geri bildirim raporu",
    ],
  },
];

/* ================== HERO ================== */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-14 md:pb-16 lg:pt-28" aria-labelledby="hero-title">
      <PremiumGridBg />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* SOL */}
          <div className="text-white">
            <nav className="text-white/60 text-sm mb-4" aria-label="Breadcrumb">
              <span>🏠</span> <span className="mx-2">Ana Sayfa</span>
              <span className="mx-2">›</span>
              <span className="text-white/80">Kurumsal Organizasyon</span>
            </nav>

            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Büyük Ölçekli Kurumsal Organizasyonlarda{" "}
              <span className="text-blue-200">Stratejik Prodüksiyon Partneriniz</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Konferans, lansman, gala ve yüksek katılımlı şirket etkinliklerinde;
              <span className="text-white font-semibold"> planlama</span>,{" "}
              <span className="text-white font-semibold">risk yönetimi</span> ve{" "}
              <span className="text-white font-semibold">yedekli teknik altyapı</span> ile uçtan uca operasyon yönetimi.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Link
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp üzerinden hemen teklif alın"
                className="inline-flex items-center justify-center font-bold px-7 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-500 transition-all duration-200 focus-ring shadow-lg shadow-blue-600/20"
              >
                Hemen Teklif Al
              </Link>

              <Link
                href="#hizmetler"
                aria-label="Hizmetlerimiz hakkında daha fazla bilgi edinin"
                className="inline-flex items-center justify-center font-bold px-7 py-4 rounded-2xl border border-white/20 text-white bg-white/5 backdrop-blur hover:bg-white/10 transition-all duration-200 focus-ring"
              >
                Hizmetlerimizi İnceleyin
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {KEYWORD_CHIPS.map((k) => (
                <span key={k} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* SAĞ: Görsel kart */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={HERO.src}
                  alt={HERO.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes={HERO.sizes}
                  quality={88}
                  blurDataURL={BLUR_DATA_URL}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
              </div>

              <div className="p-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { k: "Operasyon", v: "Uçtan uca" },
                    { k: "Altyapı", v: "Yedekli" },
                    { k: "Plan", v: "Run-of-show" },
                  ].map((item) => (
                    <div key={item.k} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-white">
                      <div className="text-xs text-white/60 font-semibold">{item.k}</div>
                      <div className="mt-1 text-sm font-bold">{item.v}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  Kurumsal organizasyon yalnızca kurulum değil; planlama, risk ve görünürlük yönetimidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ================== Üst Bilgilendirme ================== */
function IntroSection() {
  return (
    <section
      className="py-16 bg-white"
      aria-labelledby="kurumsal-intro-baslik"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <h2
              id="kurumsal-intro-baslik"
              className="text-3xl md:text-4xl font-black text-gray-900"
            >
              Kurumsal Etkinlik Organizasyon Şirketleri Ne Sunar?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kurumsal etkinlik organizasyon şirketleri; strateji, içerik ve
              teknik prodüksiyonu aynı masada toplayarak markalara güven veren
              bir etkinlik deneyimi sunar. İstanbul kurumsal organizasyon
              ihtiyaçlarında doğru planlama; lansman organizasyonu,
              bayi toplantısı organizasyonu veya gala gecesi organizasyonu gibi
              formatlarda hedef kitleye uygun akışı ve teknik kurguyu bir arada
              yönetmeyi sağlar. Böylece şirket etkinliği yalnızca bir buluşma
              değil, marka algısını güçlendiren ölçülebilir bir iletişim
              platformuna dönüşür.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sahneva olarak İstanbul merkezli ekiplerimizle Türkiye genelinde
              kurumsal etkinlik organizasyonu yönetiyoruz; marka lansmanı,
              konferans ve gala gibi formatlarda sahne, ses-ışık ve LED ekran
              çözümlerini uçtan uca planlıyoruz. Deneyimli bir prodüksiyon
              firmasıyla çalışmak, kurumsal organizasyon şirketleri arasında
              kaliteyi belirleyen teknik standartlara erişmenizi sağlar. Böylece
              operasyon tek elden yürür, riskler azalır ve marka mesajı doğru
              zamanda doğru sahnede görünür.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Bu sayfada neler bulacaksınız?
              </h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  "Kurumsal organizasyonun kapsamı ve temel kavramlar",
                  "Planlama adımları ve teknik altyapı kontrol listesi",
                  "Hizmet türleri ve kullanım senaryoları",
                  "Fiyatı etkileyen faktörler ve operasyon ipuçları",
                  "Sık sorulan sorular ve hızlı yanıtlar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full bg-blue-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Hızlı Özet</h3>
              <ul className="space-y-3 text-white/90">
                {[
                  "Planlama: hedef, format, bütçe ve zaman çizelgesi",
                  "Teknik altyapı: sahne, ses-ışık ve LED ekran entegrasyonu",
                  "Operasyon & saha yönetimi: kurulum, prova ve etkinlik akışı",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full bg-white"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/img/kurumsal/4.webp"
                alt="Kurumsal etkinlik organizasyonu için sahne ve görsel kurulum"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== Otorite İçerikleri ================== */
function SelectionSection() {
  return (
    <section className="py-20 bg-slate-50" aria-labelledby="secim-baslik">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="text-center">
          <h2
            id="secim-baslik"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Kurumsal Organizasyon Şirketleri Nasıl Seçilir?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Doğru iş ortağı seçimi, şirket etkinliği planlamasının en kritik
            adımıdır. Kurumsal organizasyon şirketleri, yalnızca teknik ekipman
            sağlayan firmalar değildir; aynı zamanda marka lansmanı veya
            kurumsal toplantı gibi stratejik buluşmalarda içerik akışını,
            sahne kurgusunu ve etkinlik organizasyon süreçlerini yöneten uzman
            ekiplerdir. İstanbul kurumsal organizasyon projelerinde deneyim
            sahibi bir prodüksiyon firması, hem şehir içi lojistik hem de mekan
            yönetimi konusunda hızlı hareket eder ve zaman kaybını azaltır.
          </p>
        </div>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Seçim sürecinde referans kontrolü yapmak, daha önce gerçekleştirilen
            lansman organizasyonu ve büyük ölçekli etkinliklerdeki başarı
            göstergelerini görmek açısından önemlidir. Teknik ekip kapasitesi
            yalnızca sahne kurulumuna değil, aynı zamanda LED ekran, ses ve ışık
            tasarımına hakimiyet göstermelidir. İstanbul ölçekli organizasyon
            deneyimi olan ekipler; trafik, kurulum saatleri, alan güvenliği ve
            belediye izinleri gibi detayları öngörerek operasyon planını daha
            gerçekçi bir takvime oturtur.
          </p>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/img/kurumsal/2.webp"
              alt="Kurumsal organizasyon şirketi seçimi için referans ve teknik ekip değerlendirmesi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </div>
          <p>
            Sözleşme ve planlama aşamasında şeffaflık da kritiktir. İş planında
            sorumlulukların netleştirilmesi, hizmet kapsamının açık şekilde
            belirtilmesi ve teslim takvimi üzerinde mutabakat sağlanması,
            kurumsal etkinlik organizasyonu sürecinin sorunsuz ilerlemesine
            yardımcı olur. Referansların yanında, ekipmanın bakım kayıtları ve
            güvenlik sertifikaları gibi belgeler de karar sürecini destekleyen
            somut veri kaynaklarıdır.
          </p>
          <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
            {[
              "Referans projeler ve ölçülebilir başarı metrikleri",
              "Teknik ekip kapasitesi ve uzmanlık sertifikaları",
              "LED, sahne ve ses altyapısında güncel ekipman parkı",
              "İstanbul ölçekli organizasyon deneyimi ve yerel tedarik ağı",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AdvantagesSectionBlock() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="avantajlar-baslik"
    >
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <div className="text-center">
          <h2
            id="avantajlar-baslik"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Büyük Organizasyon Şirketleri ile Çalışmanın Avantajları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyon şirketleri arasında ölçek ve deneyim farkı,
            etkinliğin güvenliğini ve görünürlüğünü doğrudan etkiler. Büyük
            organizasyon şirketleri; kapsamlı ekip, güçlü tedarik ağı ve çoklu
            lokasyon yönetimi ile aynı anda birden fazla proje yürütebilir. Bu
            durum özellikle bayi toplantısı organizasyonu, lansman organizasyonu
            ve gala gecesi organizasyonu gibi yüksek görünürlük isteyen
            formatlarda markalara daha istikrarlı bir operasyon sunar.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            Kurumsal etkinlik organizasyon şirketleri, yalnızca etkinlik günü
            değil, hazırlık sürecinde de marka ekibinin stratejik partneridir.
            Hedef kitle iletişimi, içerik akışı, sahne tasarımı ve medya planı
            birlikte ele alındığında marka lansmanı gibi projelerde tutarlılık
            sağlanır. Bu yaklaşım, büyük organizasyon şirketleri ile çalışmanın
            neden uzun vadeli bir yatırım olarak görülmesi gerektiğini ortaya
            koyar.
          </p>
          <div className="relative aspect-[16/9] w-full max-w-4xl mx-auto overflow-hidden rounded-2xl">
            <Image
              src="/img/kurumsal/3.webp"
              alt="Büyük organizasyon şirketleriyle çalışmanın avantajlarını yansıtan sahne kurulumu"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <p>
            Sözleşme ve planlama aşamasında şeffaflık da kritiktir. İş planında
            sorumlulukların netleştirilmesi, hizmet kapsamının açık şekilde
            belirtilmesi ve teslim takvimi üzerinde mutabakat sağlanması,
            kurumsal etkinlik organizasyonu sürecinin sorunsuz ilerlemesine
            yardımcı olur. Referansların yanında, ekipmanın bakım kayıtları ve
            güvenlik sertifikaları gibi belgeler de karar sürecini destekleyen
            somut veri kaynaklarıdır.
          </p>
          <ul className="grid gap-3 md:grid-cols-2 text-gray-800">
            {[
              "Referans projeler ve ölçülebilir başarı metrikleri",
              "Teknik ekip kapasitesi ve uzmanlık sertifikaları",
              "LED, sahne ve ses altyapısında güncel ekipman parkı",
              "İstanbul ölçekli organizasyon deneyimi ve yerel tedarik ağı",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 rounded-full bg-blue-600"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DifferencesSectionBlock() {
  return (
    <section
      className="py-20 bg-slate-50"
      aria-labelledby="farklar-baslik"
    >
      <div className="container mx-auto px-4 max-w-6xl space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2
          id="farklar-baslik"
          className="text-3xl md:text-4xl font-black text-gray-900"
        >
          Büyük Organizasyon Şirketleri ile Küçük Firmalar Arasındaki Fark
        </h2>
        <p>
          Büyük organizasyon şirketleri, etkinlik ölçeği büyüdükçe devreye giren
          karmaşık ihtiyaçları yönetme konusunda daha kapsamlı bir altyapı
          sunar. Ekipman parkı geniştir; aynı anda farklı sahnelerde LED ekran,
          ses sistemi ve ışık kurulumlarını sürdürebilir. Küçük firmalar ise
          daha butik hizmet sağlayabilir, fakat yüksek katılımlı etkinliklerde
          yedek sistem bulunmaması operasyon riskini artırır.
        </p>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="/img/kurumsal/6.webp"
            alt="Büyük organizasyon şirketleri ile küçük firmalar arasındaki ekipman ve operasyon farkları"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>
        <p>
          Yedek sistem yaklaşımı büyük etkinliklerde kritik bir güvenlik
          katmanıdır. Örneğin marka lansmanı sırasında yaşanacak bir ses
          kesintisi veya görüntü kaybı, etkinlik algısını olumsuz etkiler. Büyük
          organizasyon şirketleri, yedek jeneratör, UPS, alternatif mikrofon ve
          yedek LED kontrol ünitesi gibi önlemlerle kesintisiz bir deneyim
          sağlar. Operasyon ekibi ise sahada hızlı müdahale edebilmek için görev
          paylaşımı ve acil durum senaryolarıyla çalışır.
        </p>
        <p>
          Operasyon ekibi büyüklüğü, etkinlik günündeki koordinasyonu belirler.
          Büyük organizasyon şirketleri, saha yönetimi için ayrı sorumlular,
          teknik yönetmenler ve güvenlik koordinatörleri görevlendirir. Bu
          yaklaşım, şirket etkinliği boyunca sahne akışının aksamasını engeller,
          katılımcı deneyimini korur ve markanın profesyonel algısını
          güçlendirir.
        </p>
        <p>
          Risk yönetimi sadece teknik aksaklıklarla sınırlı değildir; kitle
          yönetimi, güvenlik, sahne akış planı ve protokol düzeni de büyük
          organizasyonlarda profesyonel bir koordinasyon gerektirir. Büyük
          organizasyon şirketleri, kurumsal etkinlik organizasyon şirketleri
          arasında bu koordinasyonu standartlaştıran süreçlere sahiptir ve
          yatırımın geri dönüşünü ölçen raporlamalarla markalara stratejik veri
          sunar.
        </p>
      </div>
    </section>
  );
}

function TechnicalInfrastructureSectionBlock() {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="teknik-altyapi-baslik"
    >
      <div className="container mx-auto px-4 max-w-6xl space-y-6 text-lg text-gray-700 leading-relaxed">
        <h2
          id="teknik-altyapi-baslik"
          className="text-3xl md:text-4xl font-black text-gray-900"
        >
          Event Organizasyon Şirketleri İçin Teknik Altyapı
        </h2>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="/img/kurumsal/1.webp"
            alt="Event organizasyonlarında sahne, LED ekran ve teknik altyapı düzeni"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>
        <p>
          Event organizasyon şirketleri için teknik altyapı, etkinliğin
          bütünsel başarısını belirleyen ana faktördür. Sahne tasarımı, LED
          ekran senaryosu, ses sistemi yerleşimi ve ışık programlaması aynı anda
          planlandığında, şirket etkinliği boyunca izleyicinin dikkatini canlı
          tutan bir akış yaratılır. Bu süreçte akustik analiz, görüntüleme
          mesafeleri ve sahne görüş açıları mutlaka değerlendirilmelidir.
        </p>
        <p>
          Lansman organizasyonu ve bayi toplantısı organizasyonu gibi yüksek
          bilgi aktarımı gerektiren formatlarda, konuşmacıların sesi net
          duyulmalı ve sahne üzerindeki içerik her noktadan görünür olmalıdır.
          Büyük organizasyon şirketleri, farklı salon tiplerinde LED ekran
          çözünürlüğünü ve ses gücünü optimize ederek katılımcı deneyimini
          artırır. Teknik ekip, sahne arkasında provalar ve senkronizasyon
          kontrolleriyle etkinlik günündeki riskleri azaltır.
        </p>
        <p>
          Günümüzde event organizasyon şirketleri için canlı yayın ve hibrit
          etkinlik altyapısı da kritik bir ihtiyaç haline geldi. Kamera rejisi,
          yayın kodlayıcıları, uzaktan katılım platformları ve etkileşimli
          içerik yazılımları; özellikle ulusal markaların lansman organizasyonu
          gibi projelerinde standart hale geldi. Bu nedenle teknik altyapıda
          yalnızca sahne ekipmanlarına değil, dijital prodüksiyon kapasitesine
          de yatırım yapılması gerekir.
        </p>
        <p>
          İstanbul kurumsal organizasyon projelerinde sık kullanılan mekan
          çeşitliliği, teknik altyapıda esneklik gerektirir. Kapalı salonlar,
          açık hava alanları veya kongre merkezlerinde farklı güç altyapıları
          bulunur. Bu nedenle prodüksiyon firması, jeneratör kapasitesi, güç
          dağıtım planı ve kablolama güvenliği gibi ayrıntılarda uzman bir
          planlama sunmalıdır. Böylece gala gecesi organizasyonu gibi yüksek
          prestijli etkinliklerde kesintisiz bir sahne performansı sağlanır.
        </p>
        <p>
          Teknik altyapının sürdürülebilir olması, yalnızca etkinlik günü değil,
          kurulum ve prova dönemlerinde de disiplin gerektirir. Event
          organizasyon şirketleri; güvenlik bariyerleri, sahne yük hesapları ve
          acil çıkış planları gibi detayları da aynı şablonda yönetmelidir. Bu
          yaklaşım, kurumsal organizasyon şirketleri arasında güvenilirlik ve
          otorite algısını güçlendiren en önemli kriterlerden biridir.
        </p>
      </div>
    </section>
  );
}

function RentalSectionBlock() {
  return (
    <section
      className="py-20 bg-slate-50"
      aria-labelledby="kiralama-baslik"
    >
      <div className="container mx-auto px-4 max-w-6xl space-y-6 text-lg text-gray-700 leading-relaxed">
        <div className="text-center">
          <h2
            id="kiralama-baslik"
            className="text-3xl md:text-4xl font-black text-gray-900"
          >
            Organizasyon Kiralama Hizmetleri
          </h2>
        </div>
        <h3 className="text-2xl font-black text-gray-900">
          Organizasyon Kiralama Nedir?
        </h3>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src="/img/kurumsal/5.webp"
            alt="Organizasyon kiralama hizmetleri için sahne ve teknik ekipman kurulumu"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>
        <p>
          Organizasyon kiralama, kurumsal etkinliklerde ihtiyaç duyulan teknik
          ekipmanların satın alınmadan, proje bazlı olarak temin edilmesidir.
          Özellikle sahne kiralama, LED ekran kiralama ve ses sistemi kiralama
          gibi çözümler, bütçeyi verimli kullanmayı sağlar. Etkinlik ölçeğine
          göre belirlenen ekipmanlar, kurulum ve operasyon desteğiyle birlikte
          planlandığında markalara hızlı ve güvenilir bir çözüm sunar.
        </p>
        <p>
          Kurumsal organizasyon şirketleri, organizasyon kiralama sürecini uçtan
          uca yönettiğinde sahne akışı netleşir ve riskler azalır. Örneğin büyük
          organizasyon şirketleri, truss sistem kiralama ve dome çadır kiralama
          gibi özel yapı ihtiyaçlarında mühendislik hesaplarıyla güvenli kurulum
          garantisi verir. Mekan yapısına göre doğru ekipman seçimi, marka
          lansmanı veya gala gecesi organizasyonu gibi prestijli buluşmalarda
          profesyonel bir görünüm yaratır.
        </p>
        <p>
          Organizasyon kiralama fiyatları; etkinlik süresi, kurulum alanı,
          ekipman kapasitesi ve teknik personel ihtiyacına göre belirlenir. Bu
          nedenle teklif alınırken kullanılacak sahne ölçüleri, LED ekran
          metrajı ve ses sistemi kapasitesi gibi kalemlerin netleştirilmesi
          önemlidir. Şeffaf bir bütçe tablosu, markaların büyük organizasyon
          şirketleriyle çalışırken kaynak planlamasını doğru yapmasına yardımcı
          olur.
        </p>
        <p>
          Sahneva’da organizasyon kiralama çözümleri;{" "}
          <Link href="/sahne-kiralama" className="text-blue-700 font-semibold">
            sahne kiralama
          </Link>
          ,{" "}
          <Link href="/led-ekran-kiralama" className="text-blue-700 font-semibold">
            LED ekran kiralama
          </Link>
          ,{" "}
          <Link href="/ses-sistemi-kiralama" className="text-blue-700 font-semibold">
            ses sistemi kiralama
          </Link>{" "}
          ve{" "}
          <Link href="/cadir-kiralama" className="text-blue-700 font-semibold">
            çadır kiralama
          </Link>{" "}
          hizmetlerini kapsar. Detaylı operasyon örnekleri ve sektörel
          içgörüler için{" "}
          <Link href="/blog" className="text-blue-700 font-semibold">
            blog
          </Link>{" "}
          içeriklerimiz de yol gösterici bir kaynak olarak kullanılabilir.
        </p>
        <p>
          Organizasyon kiralama hizmetlerinde önemli olan sadece ekipmanı temin
          etmek değil, doğru uygulama planıyla desteklemektir. Bu nedenle
          kurulum, prova, etkinlik yönetimi ve söküm planı tek bir çatı altında
          ilerlemelidir. Böylece kurumsal etkinlik organizasyon şirketleri,
          markaların stratejik hedefleriyle uyumlu ve sürdürülebilir bir
          etkinlik deneyimi sunar.
        </p>
      </div>
    </section>
  );
}

/* ================== Planlama Rehberi ================== */
function PlanningGuide() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-blue-50/40"
      aria-labelledby="planlama-rehberi-baslik"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            id="planlama-rehberi-baslik"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
          >
            Kurumsal Organizasyon Nasıl Planlanır?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aşağıdaki adımlar, kurumsal organizasyon sürecini netleştirir ve
            operasyonu ölçülebilir hale getirir. Her başlık, sahne kurulumu ve
            etkinlik deneyimi için kritik kontrol noktalarını içerir.
          </p>
        </div>

        <div className="grid gap-8">
          {PLANNING_STEPS.map((step) => (
            <article
              key={step.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6 md:p-8"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                {step.description}
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-gray-700">
                {step.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-2 w-2 rounded-full bg-blue-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Hizmetler ================== */
function Services() {
  return (
    <section
      id="hizmetler"
      className="py-20 bg-gradient-to-b from-white to-blue-50/50"
      aria-labelledby="hizmetler-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Kurumsal{" "}
            <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyon hizmetlerimiz: planlama, teknik tasarım,
            kurulum, operasyon ve destek
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service) => {
            const id = `svc-${slugify(service.title)}`;
            return (
              <article
                key={id}
                className="bg-white rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl p-8 group hover:scale-105 transition-all duration-500 h-full flex flex-col"
                aria-labelledby={id}
              >
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3
                  id={id}
                  className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span
                        className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📞
            </span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Galeri ================== */
const GALLERY_IMAGES = [
  {
    src: "/img/kurumsal/1.webp",
    alt: "Konferans organizasyonu - Profesyonel sahne ve LED ekran kurulumu",
  },
  {
    src: "/img/kurumsal/2.webp",
    alt: "Ürün lansmanı - Etkileyici görsel şov ve sahne tasarımı",
  },
  {
    src: "/img/kurumsal/3.webp",
    alt: "Gala organizasyonu - Şık dekorasyon ve aydınlatma",
  },
  {
    src: "/img/kurumsal/4.webp",
    alt: "Miting organizasyonu - Açık hava ses ve LED ekran sistemleri",
  },
  {
    src: "/img/kurumsal/5.webp",
    alt: "Roadshow organizasyonu - Mobil sahne ve marka standı",
  },
  {
    src: "/img/kurumsal/6.webp",
    alt: "Seminer organizasyonu - Profesyonel ses ve projeksiyon sistemi",
  },
  {
    src: "/img/kurumsal/7.webp",
    alt: "Kurumsal yemek organizasyonu - Özel masa düzeni ve aydınlatma",
  },
  {
    src: "/img/kurumsal/8.webp",
    alt: "Fuar organizasyonu - Interaktif stand ve marka deneyimi",
  },
  {
    src: "/img/kurumsal/9.webp",
    alt: "Ödül töreni - Kırmızı halı ve özel sahne düzeni",
  },
  {
    src: "/img/kurumsal/10.webp",
    alt: "Kurumsal etkinlik - Geniş katılımlı toplantı organizasyonu",
  },
];

function Gallery() {
  return (
    <section className="py-20 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="galeri-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Kurumsal{" "}
            <span className="text-blue-700">Projelerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Gerçekleştirdiğimiz başarılı kurumsal organizasyonlardan örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery
            images={GALLERY_IMAGES}
            visibleCount={8}
            priorityCount={4}
            layout="featured"
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla kurumsal projemizi incelemek için galerimizi keşfedin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transform transition-all duration-300 focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📸
            </span>
            <span>Tüm Projeleri Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Teknik Altyapı ================== */
function Technical() {
  const technicalItems = [
    {
      category: "sahne",
      title: "Sahne Sistemleri",
      description:
        "Modüler sahne platformları ve profesyonel sahne tasarım çözümleri",
      features: [
        "Modüler sahne sistemleri",
        "30-200 m² kapasite",
        "Çelik konstrüksiyon",
        "Anti-slip yüzey",
      ],
    },
    {
      category: "led",
      title: "LED Ekran Sistemleri",
      description:
        "Yüksek çözünürlüklü LED ekranlar ve video wall çözümleri",
      features: [
        "P2.5-P6 piksel aralığı",
        "1500-6500 nit parlaklık",
        "4K çözünürlük",
        "Hızlı kurulum",
      ],
    },
    {
      category: "ses",
      title: "Ses Sistemleri",
      description:
        "Profesyonel ses sistemleri ve akustik optimizasyon çözümleri",
      features: [
        "Line-array ses sistemleri",
        "Kablosuz mikrofon",
        "Dijital mixing",
        "360° ses dağılımı",
      ],
    },
    {
      category: "isik",
      title: "Aydınlatma Sistemleri",
      description:
        "Profesyonel aydınlatma ve ışık koreografi çözümleri",
      features: [
        "LED wash ışıklar",
        "Hareketli kafalar",
        "DMX kontrol",
        "Işık koreografi",
      ],
    },
    {
      category: "guc",
      title: "Güç Altyapısı",
      description: "Kesintisiz güç sistemleri ve elektrik altyapı çözümleri",
      features: [
        "Jeneratör sistemleri",
        "UPS kesintisiz güç",
        "Güç dağıtım üniteleri",
        "Acil aydınlatma",
      ],
    },
    {
      category: "yayin",
      title: "Yayın Sistemleri",
      description: "Canlı yayın, kayıt ve streaming çözümleri",
      features: [
        "4K kamera sistemleri",
        "Canlı yayın entegrasyonu",
        "Çoklu kamera miksaj",
        "Ses kayıt sistemleri",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      aria-labelledby="altyapi-baslik"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="altyapi-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Teknik{" "}
            <span className="text-blue-700">Altyapımız</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En son teknoloji ekipmanlar ve profesyonel teknik altyapı ile
            kurumsal etkinliklerinizdeyiz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {technicalItems.map((item) => (
            <article
              key={item.category}
              className="bg-white rounded-3xl border-2 border-gray-100 p-8 shadow-lg hover:shadow-xl group hover:scale-105 transition-all duration-500 h-full"
            >
              <h3 className="font-bold text-2xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">
                  {item.category === "sahne" && "🎭"}
                  {item.category === "led" && "🖥️"}
                  {item.category === "ses" && "🔊"}
                  {item.category === "isik" && "💡"}
                  {item.category === "guc" && "⚡"}
                  {item.category === "yayin" && "📹"}
                </span>
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span
                      className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== İstatistik Bant ================== */
function StatsBand() {
  const stats = [
    { value: "500+", label: "Kurumsal Etkinlik", icon: "🎪" },
    { value: "50+", label: "Kurumsal Müşteri", icon: "🏢" },
    { value: "81", label: "İlde Hizmet", icon: "🗺️" },
    { value: "10+", label: "Yıl Deneyim", icon: "⭐" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white"
      aria-label="Başarı İstatistiklerimiz"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="text-center group"
              role="group"
              aria-labelledby={`kurum-stat-${index}-value`}
              aria-describedby={`kurum-stat-${index}-label`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                <div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <h3
                  id={`kurum-stat-${index}-value`}
                  className="text-4xl md:text-5xl font-black mb-2 text-white drop-shadow-lg"
                >
                  {stat.value}
                </h3>
                <p
                  id={`kurum-stat-${index}-label`}
                  className="text-blue-100 text-lg font-semibold"
                >
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Kullanım Alanları ================== */
function UseCases() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/95"
      aria-labelledby="kullanim-alanlari-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="kullanim-alanlari-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Organizasyon{" "}
            <span className="text-blue-200">Türleri</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyon çözümlerimizin tercih edildiği başlıca
            etkinlik türleri ve özel çözümlerimiz
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          role="list"
        >
          {USE_CASES.map((uc) => (
            <article
              key={uc.text}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 group hover:scale-105"
              role="listitem"
            >
              <div className="flex flex-col items-start gap-4">
                <div
                  className="text-3xl bg-white/20 rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {uc.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    {uc.text}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              💬
            </span>
            <span>Etkinliğiniz için Özel Çözüm Alın</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Bilgi & Rehber ================== */
function Articles() {
  const galleryHighlights = [
    {
      src: "/img/kurumsal/1.webp",
      alt: "Kurumsal organizasyon - Konferans sahnesi ve LED ekran kurulumu",
      label: "Konferans Sahnesi",
    },
    {
      src: "/img/kurumsal/3.webp",
      alt: "Kurumsal organizasyon - Gala gecesi dekorasyonu ve ışık tasarımı",
      label: "Gala Gecesi",
    },
    {
      src: "/img/kurumsal/5.webp",
      alt: "Kurumsal organizasyon - Roadshow sahne ve marka deneyimi",
      label: "Roadshow Deneyimi",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-gray-50/50"
      aria-labelledby="bilgi-rehber-baslik"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2
            id="bilgi-rehber-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Kurumsal{" "}
            <span className="text-blue-700">Rehber</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyon hakkında uzman görüşleri ve teknik bilgiler
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Ana Makale */}
          <article className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 text-white p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-black/10"
                aria-hidden="true"
              ></div>
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    📚 Kapsamlı Rehber
                  </span>
                  <span className="bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    ⭐ Uzman Görüşü
                  </span>
                  <span className="bg-blue-500/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold">
                    🎯 Pratik Çözümler
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
                  Profesyonel Kurumsal Organizasyon: Etkinlik Başarınız İçin Tam
                  Kapsamlı Çözümler
                </h3>
                <div className="relative aspect-[16/9] w-full mt-6 rounded-2xl overflow-hidden">
                  <Image
                    src={galleryHighlights[0].src}
                    alt={galleryHighlights[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 80vw"
                  />
                </div>
                <p className="text-blue-100 mt-4 text-lg md:text-xl leading-relaxed">
                  Kurumsal standartlar, detaylı planlama süreçleri ve
                  ölçülebilir kalite garantisi ile etkinliklerinizde mükemmel
                  performans
                </p>
              </div>
            </header>

            <div className="p-8 md:p-10">
              <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-em:text-gray-600 prose-ul:mt-6 prose-ul:mb-6 prose-li:marker:text-blue-500">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-blue-100 text-blue-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🎯
                      </span>
                      Kurumsal Organizasyon ve Strateji
                    </h4>
                    <p>
                      <strong className="text-gray-900">Sahneva</strong>,
                      Türkiye genelinde{" "}
                      <Link
                        href="/kurumsal-organizasyon"
                        className="font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
                      >
                        profesyonel kurumsal organizasyon
                      </Link>{" "}
                      hizmetleriyle kurumsal standartta çözümler sunmaktadır.
                    </p>
                    <p>
                      Etkinliğiniz ister konferans, ister lansman olsun; detaylı
                      planlama, teknik projelendirme, profesyonel operasyon ve
                      sonrası destek dahil{" "}
                      <strong className="text-gray-900">
                        uçtan uca hizmet
                      </strong>{" "}
                      modelimizle tek ekipten kapsamlı yönetim sağlıyoruz.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-2xl font-black text-gray-900 flex items-center gap-4">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-2xl p-3"
                        aria-hidden="true"
                      >
                        🚀
                      </span>
                      Özel Organizasyon Çözümleri
                    </h4>
                    <p>
                      Konferans organizasyonlarımız profesyonel ses ve görüntü
                      sistemleriyle etkileyici deneyimler sunarken, lansman
                      organizasyonları marka değerinizi artıracak görsel
                      şovlarla destekleniyor.
                    </p>
                    <p>
                      Gala ve ödül törenlerinde şık tasarımlar ve özel
                      aydınlatma çözümleri sunarken, miting organizasyonlarında
                      geniş kitlelere hitap eden teknik altyapı sağlıyoruz.
                    </p>
                  </div>
                </div>

                {/* Önemli Bilgi Kutusu */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-2xl p-6 mb-8">
                  <h5 className="font-black text-blue-700 text-xl mb-4 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      💡
                    </span>
                    Profesyonel Organizasyon Stratejisi
                  </h5>
                  <p className="text-gray-700 text-lg mb-0 leading-relaxed">
                    Organizasyon stratejimiz kurumsal ihtiyaçlarınıza ve hedef
                    kitlenize göre şekillenir. Konferans organizasyonlarında
                    teknik mükemmellik ön planda tutulurken, lansman ve galalarda
                    marka deneyimi ve görsel zekice etki önceliklendirilir.
                  </p>
                </div>

                {/* Başarı Faktörleri Grid */}
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-4">
                    <span
                      className="bg-green-100 text-green-600 rounded-2xl p-3"
                      aria-hidden="true"
                    >
                      🏆
                    </span>
                    Kritik Başarı Faktörleri
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "📊",
                        title: "Detaylı Planlama ve Analiz",
                        desc: "İhtiyaç analizi, risk değerlendirmesi ve kapsamlı planlama",
                      },
                      {
                        icon: "🎨",
                        title: "Tasarım ve Yaratıcılık",
                        desc: "Özgün tema tasarımı, marka entegrasyonu ve görsel strateji",
                      },
                      {
                        icon: "🔧",
                        title: "Teknik Mükemmellik",
                        desc: "Son teknoloji ekipman, yedekli sistemler ve kalite kontrol",
                      },
                      {
                        icon: "⏱️",
                        title: "Zaman Yönetimi",
                        desc: "Kritik yol analizi, zaman planlaması ve proje yönetimi",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-blue-200"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                            aria-hidden="true"
                          >
                            {item.icon}
                          </span>
                          <div>
                            <h5 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mt-8">
                  <h5 className="font-black text-yellow-700 text-lg mb-3 flex items-center gap-3">
                    <span className="text-xl" aria-hidden="true">
                      💎
                    </span>
                    Neden Sahneva?
                  </h5>
                  <p className="text-yellow-800 mb-0">
                    <strong>
                      10+ yıllık deneyim, 500+ başarılı kurumsal etkinlik ve 81
                      ilde hizmet
                    </strong>{" "}
                    ile kurumsal organizasyon konusunda güvenilir çözüm
                    ortağınız. Profesyonel ekip, son teknoloji ekipman ve 7/24
                    operasyonel destek garantisi.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Yan Makaleler */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Teknik Entegrasyon ve Operasyon Süreçleri
              </h3>
              <div className="relative aspect-[16/9] w-full mt-6 rounded-2xl overflow-hidden">
                <Image
                  src={galleryHighlights[1].src}
                  alt={galleryHighlights[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-blue-100 mt-2 text-lg">
                Profesyonel kurulum, yedekli sistemler ve operasyonel
                mükemmellik
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <p>
                  Kurumsal organizasyon sürecimiz detaylı planlama ve teknik
                  projelendirme ile başlar. Mekan analizi, teknik ihtiyaçlar ve
                  operasyonel gereksinimler titizlikle değerlendirilir.
                </p>
                <p>
                  Profesyonel operasyon ekibimiz etkinlik öncesi tüm sistemleri
                  kurar, test eder ve etkinlik süresince kesintisiz destek
                  sağlar.
                </p>

                <div className="bg-gray-50 rounded-2xl p-5 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-3">
                    <span
                      className="bg-purple-100 text-purple-600 rounded-xl p-2"
                      aria-hidden="true"
                    >
                      📋
                    </span>
                    Operasyonel Standartlar
                  </h4>
                  <ul className="text-gray-700 space-y-2 text-base">
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Yedekli teknik altyapı ve ekipman
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Profesyonel operatör ve teknik ekip
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      7/24 teknik destek ve acil müdahale
                    </li>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"
                        aria-hidden="true"
                      />
                      Kalite kontrol ve test prosedürleri
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 h-full">
            <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                Etkinlik Türlerine Özel Stratejiler
              </h3>
              <p className="text-blue-100 mt-2 text-lg">
                Her kurumsal etkinlik türüne özel organizasyon stratejileri ve
                çözümler
              </p>
            </header>

            <div className="p-6 md:p-8">
              <div className="relative aspect-[16/9] w-full mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={galleryHighlights[2].src}
                  alt={galleryHighlights[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="prose prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-2xl p-5 border border-blue-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-blue-100 text-blue-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🎤
                      </span>
                      Konferans ve Seminerler
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Net ses iletimi, yüksek çözünürlüklü görüntü, interaktif
                      katılım sistemleri
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-5 border border-purple-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-purple-100 text-purple-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🚀
                      </span>
                      Ürün Lansmanları
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Etkileyici görsel şovlar, marka deneyimi, medya
                      ilişkileri, sosyal medya entegrasyonu
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-2xl p-5 border border-green-200">
                    <h4 className="font-bold text-gray-900 text-lg flex items-center gap-3 mb-2">
                      <span
                        className="bg-green-100 text-green-600 rounded-xl p-2"
                        aria-hidden="true"
                      >
                        🎭
                      </span>
                      Gala ve Ödül Törenleri
                    </h4>
                    <p className="text-gray-700 text-base mb-0">
                      Şık dekorasyon, özel aydınlatma, kırmızı halı, VIP
                      protokol, fotoğraf/video çekim
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ================== SSS ================== */
const FAQ_ITEMS = [
  {
    q: "Kurumsal organizasyon şirketleri ne yapar?",
    a: "Kurumsal organizasyon şirketleri, etkinliğin hedef belirleme, içerik akışı, teknik prodüksiyon ve saha operasyonunu yönetir. Lansman organizasyonu, bayi toplantısı organizasyonu veya gala gecesi organizasyonu gibi formatlarda sahne, ses-ışık ve LED ekran gibi bileşenleri tek koordinasyon altında birleştirir.",
  },
  {
    q: "Büyük organizasyon şirketleri neden tercih edilir?",
    a: "Büyük organizasyon şirketleri, geniş ekipman parkı, yedek sistemler ve güçlü operasyon ekipleri sayesinde risk yönetimini daha etkin yapar. Bu yapı, şirket etkinliği ve marka lansmanı gibi yüksek görünürlüklü projelerde kesintisiz bir deneyim sunar.",
  },
  {
    q: "Organizasyon kiralama fiyatları neye göre belirlenir?",
    a: "Organizasyon kiralama fiyatları; sahne ölçüsü, LED ekran metrajı, ses sistemi kapasitesi, kurulum süresi ve teknik personel ihtiyacına göre belirlenir. Mekan koşulları ve etkinlik süresi arttıkça bütçe kalemleri de güncellenir.",
  },
  {
    q: "İstanbul’da kurumsal etkinlik firması seçerken nelere dikkat edilmeli?",
    a: "İstanbul kurumsal organizasyon projelerinde referans kontrolü, teknik ekip kapasitesi, LED/sahne/ses altyapısı ve yerel operasyon deneyimi kritik başlıklardır. Sözleşme kapsamının netleştirilmesi ve risk planının paylaşılması sağlıklı bir seçim süreci sunar.",
  },
  {
    q: "Event organizasyon şirketleri teknik ekipman sağlar mı?",
    a: "Evet. Event organizasyon şirketleri; sahne, LED ekran, ses-ışık, truss ve güç altyapısı gibi teknik ekipmanları sağlayabilir ve kurulumdan operasyona kadar yönetebilir. Doğru ekipman seçimi etkinliğin kalitesini doğrudan artırır.",
  },
];

function FAQ() {
  return (
    <section className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            id="sss-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Sık Sorulan{" "}
            <span className="text-blue-700">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kurumsal organizasyon hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div
          className="space-y-6"
          role="list"
          aria-label="Sık sorulan sorular listesi"
        >
          {FAQ_ITEMS.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const headingId = `faq-heading-${index}`;

            return (
              <article key={faq.q} role="listitem">
                <details
                  className="group bg-gray-50 rounded-3xl border-2 border-transparent transition-all duration-500 hover:bg-gray-100 open:bg-blue-50 open:border-blue-200 [&_summary::-webkit-details-marker]:hidden"
                  id={panelId}
                  aria-labelledby={headingId}
                >
                  <summary
                    id={headingId}
                    className="cursor-pointer w-full list-none text-left flex items-center justify-between gap-4 px-8 py-6 text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl"
                    role="button"
                    tabIndex={0}
                  >
                    <span className="pr-4 flex-1">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="ml-4 transition-transform duration-300 text-blue-600 bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>

                  <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 px-8 pb-0">
                    <div className="overflow-hidden text-gray-700 leading-relaxed text-lg pt-0 group-open:pt-2 group-open:pb-6">
                      <p className="pl-4 border-l-4 border-blue-500">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </details>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla sorunuz mu var? Uzman ekibimiz sizi arayıp bilgilendirsin.
          </p>
          <Link
            href="/sss"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus-ring"
            aria-label="Sık Sorulan Sorular sayfasındaki tüm soruları görüntüle"
          >
            <span aria-hidden="true" className="text-xl mr-3">
              📚
            </span>
            <span className="text-lg">Tüm SSS'yi Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    {
      href: "/cadir-kiralama",
      title: "Çadır Kiralama",
      icon: "🏕️",
      desc: "Profesyonel çadır sistemleri ve kurulum hizmetleri",
    },
    {
      href: "/podyum-kiralama",
      title: "Podyum Kiralama",
      icon: "📐",
      desc: "Profesyonel sahne platformları ve podyum sistemleri",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      icon: "🖥️",
      desc: "Yüksek çözünürlüklü LED ekran ve video wall çözümleri",
    },
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      icon: "🎵",
      desc: "Profesyonel ses ve ışık sistemleri kiralama",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-100/30"
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="tamamlayici-hizmetler-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6"
          >
            Tamamlayıcı{" "}
            <span className="text-blue-700">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal organizasyonunuzu tamamlayacak diğer profesyonel etkinlik
            çözümlerimiz
          </p>
          <div
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"
            aria-hidden="true"
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-blue-200 transition-all duration-500 hover:scale-105 text-center focus-ring h-full flex flex-col"
                aria-label={`${service.title} - ${service.desc}`}
              >
                <div
                  className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 flex-grow">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>

        <div className="sr-only">
          <p>
            Bu bölümde kurumsal organizasyonunuzu tamamlayacak diğer
            hizmetlerimiz bulunmaktadır. Her bir hizmet kartına tıklayarak
            ilgili sayfaya gidebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== CTA ================== */
function CTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="cta-baslik">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div
            className="absolute inset-0 bg-black/10"
            aria-hidden="true"
          ></div>
          <div className="relative z-10">
            <h2
              id="cta-baslik"
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-6"
            >
              Profesyonel Kurumsal Çözümlere Hazır Mısınız?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Kurumsal etkinliğiniz için en uygun organizasyon çözümlerini
              sunalım. Ücretsiz danışmanlık, detaylı planlama ve rekabetçi fiyat
              garantisi ile hizmetinizdeyiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-white text-blue-700 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  📞
                </span>
                <span className="text-lg">Hemen Teklif Al</span>
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-white text-white bg-transparent hover:bg-white/20 hover:scale-105 transform transition-all duration-300 focus-ring shadow-lg"
              >
                <span aria-hidden="true" className="text-xl mr-3">
                  💬
                </span>
                <span className="text-lg">WhatsApp'tan Yaz</span>
              </a>
            </div>
            <div className="mt-8 text-blue-200 text-lg">
              📍 81 ilde hizmet • ⏰ 7/24 operasyonel destek • ⭐ 10+ yıl deneyim
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
/* Burada next/script yerine düz <script> kullanıyoruz.
   Böylece bu sayfa için ekstra client-side JS yükü oluşmuyor. */
function JsonLd() {
  const pageUrl = `${ORIGIN}/kurumsal-organizasyon`;
  const pageDescription = metadata.description;

  const provider = { "@id": ORGANIZATION_ID };

  const { service: serviceSchema, products } = buildServiceProductSchema({
    slug: "/kurumsal-organizasyon",
    locale: "tr-TR",
  });

  const baseService = {
    "@type": "Service",
    name: "Kurumsal Organizasyon Hizmetleri",
    description: pageDescription,
    provider,
    areaServed: "İstanbul",
    serviceType: [
      "Kurumsal Etkinlik Organizasyonu",
      "Event Organizasyon",
      "Organizasyon Kiralama",
      "Büyük Organizasyon Yönetimi",
    ],
  };

  const serviceNode = serviceSchema
    ? { ...serviceSchema, ...baseService, provider, url: pageUrl }
    : { ...baseService, "@id": `${pageUrl}#service`, url: pageUrl };

  const serviceId = serviceNode["@id"] ?? `${pageUrl}#service`;
  serviceNode["@id"] = serviceId;
  serviceNode.mainEntityOfPage = { "@id": pageUrl };

  const productNodes = products ?? [];
  const faqSchema = buildFaqSchema(FAQ_ITEMS);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode,
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: metadata.title,
        description: pageDescription,
        url: pageUrl,
        mainEntity: {
          "@id": serviceId,
        },
      },
      ...productNodes,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <script
      id="ld-json-kurumsal"
      type="application/ld+json"
      // Burada JSON string'ini direkt gömüyoruz; ekstra JS çalışmıyor.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const baseUrl = ORIGIN;
  const canonical = `${baseUrl}/kurumsal-organizasyon`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: `${baseUrl}/hizmetler` },
    { name: "Kurumsal Organizasyon", url: canonical },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <JsonLd />
      <Hero />
      <TrustBar />
      <IntroSection />
      <SelectionSection />
      <PlanningGuide />
      <Services />
      <InsightsBlock />
      <Gallery />
      <AdvantagesSectionBlock />
      <Technical />
      <DifferencesSectionBlock />
      <StatsBand />
      <UseCases />
      <TechnicalInfrastructureSectionBlock />
      <Articles />
      <RentalSectionBlock />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/kurumsal-etkinlik-yonetimi",
            label: "Kurumsal Etkinlik Yönetimi Rehberi",
          },
          {
            href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
            label: "2026 Kurumsal Etkinlik Planlama Rehberi",
          },
        ]}
      />
      <CTA />
    </>
  );
}
