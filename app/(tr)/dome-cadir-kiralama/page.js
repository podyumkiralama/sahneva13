// app/(tr)/dome-cadir-kiralama/page.js
//
// Dome, /cadir-kiralama'dan bilincli olarak ayrildi: farkli uretici, farkli
// kurulum, farkli kullanim. Arama niyeti de farkli — dome arayan kisi cadiri
// yapi olarak degil MEDYA YUZEYI olarak istiyor (360° mapping, deneyim alani,
// lansman konsepti).
//
// KAPSAM SINIRI: bu sayfa buyuk acikliklikli sistem anlatmaz. Membran gramaji
// ve yangin sinifi da yazilmaz — uretici /cadir-kiralama'dakinden farkli ve o
// sayfadaki "yaklasik 630 gr/m²" degeri dome'u KAPSAMAZ.
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import VideoEmbed from "@/components/VideoEmbed.client";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import PaymentOptionsNote from "@/components/payments/PaymentOptionsNote";
import JsonLdScript from "@/components/seo/JsonLd";
import { buildImageGallerySchema } from "@/lib/structuredData/imageGallery";
import { WEBSITE_ID } from "@/lib/seo/schemaIds";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import GlossaryTermLinks from "@/components/seo/GlossaryTermLinks";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { MessageCircle, Phone, CheckCircle, Eye } from "lucide-react";

/* ================== Sabitler ================== */
export const revalidate = 86400;

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com"
).replace(/\/$/, "");
const ORIGIN = SITE_URL;
const ORGANIZATION_ID = `${SITE_URL}/#org`;
const PAGE_PATH = "/dome-cadir-kiralama";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;
const PHONE = "+905453048671";
const PHONE_DISPLAY = "+90 545 304 86 71";
const WA_TEXT =
  "Merhaba, dome çadır kiralama için teklif istiyorum. Etkinlik türü: [lansman/fuar/deneyim alanı], Tarih: [gg.aa.yyyy], Alan: [kapalı/açık].";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_TEXT)}`;

// SAHA 2026 dome karesinin gercek olculeri (proje sayfasindaki kayitla ayni).
const HERO_IMAGE = {
  src: "/images/projects/saha-2026-dome-cadir-final.webp",
  width: 1439,
  height: 1023,
  alt: "SAHA 2026 fuarında kurulan dome çadır ve ambiyans aydınlatmalı markalı giriş cephesi",
};

const CaseGallery = dynamic(() => import("@/components/CaseGallery"));

export const metadata = {
  title: "Dome Çadır Kiralama",
  description:
    "360° mapping, lansman ve deneyim alanı kurguları için dome çadır kiralama. Pnömatik ve geodezik dome kurulumu, projeksiyon ve akustik planıyla birlikte.",
  alternates: buildLanguageAlternates({ tr: PAGE_URL, canonical: PAGE_URL }),
  openGraph: {
    title: "Dome Çadır Kiralama | 360° Mapping ve Deneyim Alanı",
    description:
      "Lansman, deneyim alanı ve konsept stant için dome çadır kiralama; projeksiyon, akustik ve kurulum tek planda.",
    url: PAGE_URL,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dome Çadır Kiralama | 360° Mapping ve Deneyim Alanı",
    description:
      "Lansman, deneyim alanı ve konsept stant için dome çadır kiralama çözümleri.",
    images: [`${ORIGIN}${HERO_IMAGE.src}`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const PAGE_SECTIONS = [
  { href: "#dome-nedir", label: "Dome nedir" },
  { href: "#mapping", label: "360° mapping" },
  { href: "#akustik", label: "Akustik" },
  { href: "#kullanim", label: "Kullanım senaryoları" },
  { href: "#referanslar", label: "Referanslar" },
  { href: "#kurulum", label: "Kurulum ve zemin" },
  { href: "#sss", label: "Sık sorulanlar" },
];

const DOME_TYPES = [
  {
    title: "Pnömatik Dome",
    badge: "Şişme membran",
    summary:
      "Tek kabuk membranın sürekli hava basıncıyla ayakta tutulduğu dome tipi. İç yüzey dikişsize yakın olduğu için projeksiyon yüzeyi olarak avantajlıdır.",
    points: [
      "İç hacimde taşıyıcı iskelet görünmez",
      "Basıncı sağlayan üfleyicinin kesintisiz enerjisi zorunludur",
      "Kurulum ve söküm hızlıdır",
    ],
  },
  {
    title: "Geodezik Dome",
    badge: "Üçgen kafes",
    summary:
      "Üçgen kafes çubuklardan oluşan taşıyıcı iskelet üzerine membran giydirilen dome tipi. Rüzgâr yükünü tüm küresel yüzeye dağıtır.",
    points: [
      "Enerji kesintisinden etkilenmez",
      "İskelet üzerine yük asılabilir",
      "Montaj sırası pnömatikten uzundur, daha geniş serim alanı ister",
    ],
  },
];

const USE_CASES = [
  {
    title: "Ürün lansmanı",
    detail:
      "Misafirin dış dünyadan koptuğu kapalı bir hacim; ürünün ilk göründüğü an 360° görüntü ve sesle aynı saniyede kurgulanır.",
  },
  {
    title: "Deneyim alanı",
    detail:
      "Fuar veya festival içinde sıraya girilen, içeride birkaç dakikalık bir gösterinin döngüyle tekrarlandığı bağımsız alan.",
  },
  {
    title: "Konsept stant",
    detail:
      "Standart fuar standından ayrışan kapalı hacim; markanın görsel dili duvara değil kubbenin tamamına yayılır.",
  },
  {
    title: "Planetaryum ve eğitim içeriği",
    detail:
      "Kubbe yüzeyinin tamamına yayılan bilim ve tanıtım içerikleri için oturma düzeniyle birlikte planlanan kurulum.",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/images/projects/saha-2026-dome-cadir-final.webp",
    alt: "SAHA 2026 fuarında kurulan dome çadır ve ambiyans aydınlatmalı markalı giriş cephesi",
  },
  {
    src: "/img/galeri/cadir-kiralama-4.webp",
    alt: "Gece kale duvarı önünde kurulum: solda geodezik dome iskeletleri, sağda tamamlanmış pnömatik dome",
  },
  {
    src: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-meydan-kurulumu.webp",
    alt: "DicleFest Şanlıurfa Topçu Meydanı’nda kurulan dome çadır",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-iskelet-kurulumu.webp",
    alt: "Dome çadırın taşıyıcı iskeletinin kurulumu ve saha operasyonu",
  },
  {
    src: "/img/blog/dome-cadir-projeksiyon-mapping.webp",
    alt: "Dome çadırın kavisli iç yüzeyinde 360° projeksiyon mapping uygulaması",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-giris-alani.webp",
    alt: "Dome çadırın markalı giriş alanı ve ambiyans aydınlatması",
  },
  {
    src: "/img/blog/dome-cadir-ic-mekan.webp",
    alt: "Dome çadır iç mekânı: kesintisiz küresel yüzey ve oturma düzeni",
  },
  {
    src: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-kurulum-sureci.webp",
    alt: "Meydanda kurulan dome çadırın geodezik iskeleti ve vinçle indirilen membran",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-kaplama-detayi.webp",
    alt: "Dome çadır membran kaplama detayı ve üçgen panel dokusu",
  },
  {
    src: "/img/blog/dome-cadir-gece-ambiyans.webp",
    alt: "Festival alanında gece aydınlatmalı dome çadır ve izleyici alanı",
  },
  {
    src: "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-dis-gorunum.webp",
    alt: "DicleFest Şanlıurfa dome çadır dış görünümü ve festival alanı",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-fuar-alani.webp",
    alt: "Kapalı fuar alanı içinde dome çadır kurulum süreci",
  },
];

const PROJECT_VIDEO = {
  videoId: "x-BYu0vgO2E",
  title: "SAHA 2026 Dome Çadır • Tamamlanmış Proje",
  uploadDate: "2026-05-02T17:00:00+03:00",
  description:
    "SAHA 2026 kapsamında kapalı fuar alanında kurulan dome çadırın final görünümü, markalı giriş cephesi ve alan atmosferi.",
};

const REFERENCE_CASES = [
  {
    title: "SAHA 2026 — Kapalı Fuar Alanında Dome",
    category: "Savunma ve havacılık fuarı",
    context:
      "Kapalı fuar holünün içinde, çevresindeki standlardan ayrışan bağımsız bir deneyim hacmine ihtiyaç vardı.",
    work: "Dome çadır, markalı giriş cephesi, zemin altyapısı ve ambiyans aydınlatması birlikte kuruldu.",
    result:
      "Ziyaretçi akışı giriş cephesinden yönlendirildi; dome, hol içinde kendi başına bir durak noktası oluşturdu.",
    href: "/projeler/saha-2026-dome-cadir-kurulumu",
  },
  {
    title: "DicleFest Şanlıurfa — Meydanda Geodezik Dome",
    category: "Açık alan festivali",
    context:
      "Topçu Meydanı’nda, açık alan koşullarında festivalin görsel odak noktası olacak bir yapı gerekiyordu.",
    work: "Geodezik dome, etkinlik çadırları, konser alanı ve oyun alanları aynı saha planı içinde kuruldu.",
    result:
      "Dome, meydan yerleşiminde hem yönlendirme noktası hem de festivalin görsel imzası olarak kullanıldı.",
    href: "/projeler/diclefest-sanliurfa",
  },
];

const FAQ_ITEMS = [
  {
    q: "Dome çadır nedir?",
    a: "Dome çadır, küresel kabuk formunda kurulan ve iç yüzeyi kesintisiz olduğu için 360° projeksiyona uygun bir geçici yapıdır. Klasik çadırdan farkı, alanı yalnızca hava koşullarından korumak yerine kendisinin bir görüntü ve ses yüzeyi olmasıdır. Lansman, deneyim alanı ve konsept stant kurgularında tercih edilir.",
  },
  {
    q: "Pnömatik dome ile geodezik dome arasındaki fark nedir?",
    a: "Pnömatik dome, tek kabuk membranın sürekli hava basıncıyla ayakta tutulduğu tiptir; iç hacimde iskelet görünmez ve kurulumu hızlıdır, ancak basıncı sağlayan üfleyicinin kesintisiz enerjisi zorunludur. Geodezik dome ise üçgen kafes iskelet üzerine membran giydirilerek kurulur; enerji kesintisinden etkilenmez ve iskelete yük asılabilir, buna karşılık montajı daha uzun sürer. Sahneva her iki tipte de kurulum yapar; seçim alanın kapalı ya da açık olmasına, etkinlik süresine ve asılacak teknik yüke göre yapılır.",
  },
  {
    q: "360° mapping için kaç projektör gerekir?",
    a: "Kubbe çapına ve yüzey alanına göre genellikle 4 ila 8 adet 20.000 ANSI lümen sınıfı projektörle homojen bir aydınlatma sağlanır. Projektörler kubbe çevresine dağıtılır ve görüntüler warp ile edge blending uygulanarak kavisli yüzeyde birleştirilir. Kesin sayı, içerik parlaklığı ve ortam karanlığı keşifte netleşir.",
  },
  {
    q: "Dome çadırın içinde ses nasıl kontrol ediliyor?",
    a: "Küresel yüzey sesi merkeze doğru odaklar; önlem alınmazsa kubbe içinde yankı ve odaklanma sorunu oluşur. Bu nedenle hoparlör yerleşimi kubbenin geometrisine göre planlanır, gerektiğinde yüzeye akustik önlem uygulanır. Ses kurgusu mapping içeriğiyle senkron çalışacak şekilde birlikte programlanır.",
  },
  {
    q: "Dome çadır hangi zeminlere kurulabilir?",
    a: "Dome; kapalı fuar holü zemini, beton, asfalt, parke ve çim yüzeylere kurulabilir. Sabitleme yöntemi zemine göre değişir: toprak ve çimde kazık ankrajı, sert zeminlerde balast ağırlığı kullanılır. Kapalı alanlarda ayrıca tavan yüksekliği ve giriş kapısı ölçüleri kurulumdan önce kontrol edilir.",
  },
  {
    q: "Dome kurulumu ne kadar sürer?",
    a: "Kurulum süresi dome tipine, çapına ve zemin hazırlığına göre değişir. Pnömatik yapılar geodezik yapılara göre daha kısa sürede kurulur. Kesin süre; ölçü, zemin ve saha erişimi netleştikten sonra keşif sırasında planlanır ve teklife yazılır.",
  },
  {
    q: "Dome çadırın içine sahne, ses ve LED ekran girer mi?",
    a: "Evet. Dome içine sahne, podyum, ses sistemi ve LED ekran entegre edilebilir. Geodezik yapılarda iskelete yük asılabilir; pnömatik yapılarda ise yükler membrana değil, zeminden yükselen bağımsız taşıyıcılara alınır. Asılacak yük proje bazında değerlendirilir.",
  },
  {
    q: "Dome çadır kiralama fiyatı nasıl belirleniyor?",
    a: "Fiyat; dome tipi ve çapı, kurulum süresi, zemin ve sabitleme yöntemi, projeksiyon ile ses kurgusunun kapsamı ve şehir dışı lojistik kalemlerine göre belirlenir. Mapping içeriği üretimi ayrı bir kalemdir. Tarih, alan ve konsept paylaşıldığında kalem kalem teklif iletilir.",
  },
];

/* ================== Hero ================== */
function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0a1429] py-16 text-white md:py-24"
      aria-labelledby="dome-hero-baslik"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={72}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a1429]/96 via-[#1e3a8a]/86 to-[#0f172a]/94"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:52px_52px]"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-5 py-2.5 backdrop-blur-xl">
          <span className="text-sm font-black tracking-[0.6px] text-white/90">
            DOME ÇADIR • 360° MAPPING • DENEYİM ALANI
          </span>
        </div>

        <h1
          id="dome-hero-baslik"
          className="mt-7 max-w-4xl text-[46px] font-black leading-[0.96] tracking-[-1.5px] text-white md:text-[64px] lg:text-[74px]"
        >
          Dome Çadır Kiralama
        </h1>

        <p className="mt-6 max-w-3xl text-[20px] font-semibold leading-[1.45] text-white/[0.94] md:text-[23px]">
          Dome, alanı hava koşullarından korumak için değil, kendisi bir görüntü ve ses
          yüzeyi olsun diye kurulur.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100/80 md:text-lg">
          Lansman, deneyim alanı ve konsept stant kurgularında pnömatik ve geodezik dome
          kurulumunu; projeksiyon, akustik ve zemin planıyla birlikte tek elden yürütüyoruz.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] px-9 text-[17px] font-black text-white shadow-[0_20px_55px_rgba(30,64,175,0.45)] transition hover:brightness-110"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            DOME İÇİN TEKLİF AL
          </Link>
          <Link
            href={`tel:${PHONE}`}
            className="inline-flex h-[58px] min-w-[220px] items-center justify-center gap-3 rounded-3xl border border-white/30 bg-white/[0.06] px-9 text-[17px] font-black text-white backdrop-blur-xl transition hover:bg-white/[0.14]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== Sayfa İçi Hızlı Geçiş ================== */
function SectionJumpNav() {
  return (
    <nav aria-label="Sayfa içi bölümler" className="border-b border-slate-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <ul className="flex snap-x gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PAGE_SECTIONS.map((section) => (
            <li key={section.href} className="snap-start">
              <Link
                href={section.href}
                className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ================== 1 — Dome Çadır Nedir ================== */
function WhatIsDome() {
  return (
    <section
      id="dome-nedir"
      className="scroll-mt-24 bg-white py-20"
      aria-labelledby="dome-nedir-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700">
            Yapı tipi
          </p>
          <h2
            id="dome-nedir-baslik"
            className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl"
          >
            Dome Çadır Nedir?
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-700">
            Dome çadır, küresel kabuk formunda kurulan ve iç yüzeyi kesintisiz olduğu için
            360° projeksiyona uygun bir geçici yapıdır. Klasik etkinlik çadırından ayrıldığı
            nokta işlevidir: dome, alanı korumak için değil, kendisi bir görüntü ve ses
            yüzeyi olsun diye kurulur.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {DOME_TYPES.map((type) => (
            <article
              key={type.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <span className="inline-flex w-fit rounded-full bg-blue-100 px-4 py-1 text-xs font-black uppercase tracking-wider text-blue-700">
                {type.badge}
              </span>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-gray-950">
                {type.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-gray-700">{type.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm leading-6 text-gray-700">
                {type.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="mt-8 m-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[16/9]">
            <Image
              src="/img/galeri/cadir-kiralama-4.webp"
              alt="Gece kale duvarı önünde kurulum: solda üçgen kafesli geodezik dome iskeletleri, sağda tamamlanmış pnömatik dome"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
              quality={80}
              loading="lazy"
            />
          </div>
          <figcaption className="px-6 py-5 text-sm leading-6 text-gray-700">
            Aynı sahada iki tip bir arada: solda henüz membranı giydirilmemiş geodezik
            iskeletler, sağda kurulumu tamamlanmış pnömatik dome.
          </figcaption>
        </figure>

        <p className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-gray-700">
          Fuar, festival, düğün ve protokol alanı gibi geniş kapalı hacim ihtiyaçlarında
          dome yerine pagoda, şeffaf veya büyük açıklıklı sistemler kullanılır —{" "}
          <Link
            href="/cadir-kiralama"
            className="font-black text-blue-700 underline underline-offset-4 hover:text-blue-800"
          >
            çadır kiralama
          </Link>{" "}
          sayfasında bu sistemlerin ölçüleri ve stok kapasitesi yer alır.
        </p>
      </div>
    </section>
  );
}

/* ================== 2 — 360° Mapping ================== */
function MappingSection() {
  return (
    <section
      id="mapping"
      className="scroll-mt-24 relative overflow-hidden bg-[#0a1429] py-20 text-white"
      aria-labelledby="mapping-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-10rem] top-8 h-80 w-80 rounded-full bg-[#1e3a8a]/25 blur-[110px]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-300">
              Görüntü kurgusu
            </p>
            <h2
              id="mapping-baslik"
              className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl"
            >
              360° Mapping Nasıl Planlanır?
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-100 md:text-lg">
              Dome çadırda projeksiyon, düz bir perdeye görüntü vermekten farklı bir iştir.
              Kubbenin kavisli yüzeyinde görüntü kaçınılmaz olarak bozulur; bu bozulma
              yazılımda düzeltilir ve birden fazla projektörün görüntüsü birbirine bindirilerek
              kesintisiz tek bir yüzey elde edilir.
            </p>

            <dl className="mt-8 space-y-5">
              {[
                {
                  t: "Projektör sayısı ve konumu",
                  d: "Kubbe çapına ve yüzey alanına göre genellikle 4 ila 8 adet 20.000 ANSI lümen sınıfı projektör kubbe çevresine dağıtılır. Sayı, içerik parlaklığı ve ortamın karanlık düzeyiyle birlikte belirlenir.",
                },
                {
                  t: "Warp ve edge blending",
                  d: "Kavisli yüzeydeki distorsiyon ve projektörler arası bindirme bölgeleri, MadMapper veya Watchout gibi yazılımlarla milimetrik olarak hizalanır.",
                },
                {
                  t: "Yüzey karakteri",
                  d: "İç yüzeyin dikişsiz ve mat görünmesi mapping kalitesini doğrudan belirler; parlak yüzeyler projektör ışığını noktasal olarak geri yansıtır.",
                },
                {
                  t: "Kalibrasyon",
                  d: "Lazer ölçüm ve noktasal hizalamayla görüntü bozulması sıfıra yakın seviyeye indirilir. Kalibrasyon, içerik sahaya gelmeden önce yapılır.",
                },
              ].map((item) => (
                <div
                  key={item.t}
                  className="rounded-3xl border border-white/[0.14] bg-slate-950/55 p-5 backdrop-blur-md"
                >
                  <dt className="text-lg font-black text-white">{item.t}</dt>
                  <dd className="mt-2 text-sm leading-7 text-cyan-50/[0.78]">{item.d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="m-0 overflow-hidden rounded-3xl border border-white/[0.14] bg-slate-950/55">
            <div className="relative aspect-[4/3]">
              <Image
                src="/img/blog/dome-cadir-projeksiyon-mapping.webp"
                alt="Dome çadırın kavisli iç yüzeyinde warp ve edge blending ile hizalanmış 360° projeksiyon mapping"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={78}
                loading="lazy"
              />
            </div>
            <figcaption className="px-6 py-5 text-sm leading-6 text-cyan-50/[0.78]">
              Kavisli yüzeyde birden fazla projektörün görüntüsü bindirme bölgelerinde
              birleştirilerek tek parça bir yüzey oluşturuluyor.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ================== 3 — Akustik ================== */
function AcousticsSection() {
  return (
    <section
      id="akustik"
      className="scroll-mt-24 bg-slate-50 py-20"
      aria-labelledby="akustik-baslik"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <p className="text-sm font-black uppercase tracking-widest text-blue-700">
          Ses davranışı
        </p>
        <h2
          id="akustik-baslik"
          className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl"
        >
          Kubbe İçinde Ses Neden Farklı Davranır?
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Küresel yüzey sesi dağıtmaz, merkeze doğru odaklar. Kubbenin her noktasından
          yansıyan ses dalgaları geometrik olarak aynı bölgede buluştuğu için, önlem
          alınmamış bir dome içinde konuşma anlaşılırlığı düşer ve müzikte yankı belirginleşir.
          Bu, dome’un kusuru değil küresel geometrinin doğal sonucudur; kurulum aşamasında
          planlanmayı gerektirir.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              t: "Hoparlör yerleşimi",
              d: "Hoparlörler kubbenin merkezine ses gönderecek biçimde değil, odaklanma bölgesini bölecek biçimde konumlandırılır.",
            },
            {
              t: "Yüzey önlemi",
              d: "Gerekli durumlarda iç yüzeye akustik emici uygulanır; uygulama mapping yüzeyini bozmayacak şekilde planlanır.",
            },
            {
              t: "İçerikle senkron",
              d: "Ses kurgusu mapping içeriğiyle aynı zaman çizgisinde programlanır; görüntü ve ses aynı anda tetiklenir.",
            },
          ].map((item) => (
            <article
              key={item.t}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-gray-950">{item.t}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-700">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== 4 — Kullanım Senaryoları ================== */
function UseCasesSection() {
  return (
    <section
      id="kullanim"
      className="scroll-mt-24 bg-white py-20"
      aria-labelledby="kullanim-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700">
            Kullanım senaryoları
          </p>
          <h2
            id="kullanim-baslik"
            className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl"
          >
            Dome Çadır Hangi Etkinliklerde Tercih Edilir?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {USE_CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
            >
              <h3 className="text-xl font-black text-gray-950">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-gray-700">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== 5 — Referanslar ================== */
function ReferencesSection() {
  return (
    <section
      id="referanslar"
      className="scroll-mt-24 bg-slate-50 py-20"
      aria-labelledby="referanslar-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <p className="text-sm font-black uppercase tracking-widest text-blue-700">
          Saha kanıtı
        </p>
        <h2
          id="referanslar-baslik"
          className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl"
        >
          Kurduğumuz Dome Çadır Projeleri
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {REFERENCE_CASES.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="inline-flex w-fit rounded-full bg-blue-100 px-4 py-1 text-xs font-black uppercase tracking-wider text-blue-700">
                {item.category}
              </span>
              <h3 className="mt-5 text-2xl font-black tracking-tight text-gray-950">
                {item.title}
              </h3>
              <dl className="mt-6 space-y-4 border-t border-slate-200 pt-5 text-sm leading-relaxed">
                <div>
                  <dt className="text-xs font-black uppercase tracking-wider text-slate-600">
                    İhtiyaç
                  </dt>
                  <dd className="mt-1 text-gray-700">{item.context}</dd>
                </div>
                <div>
                  <dt className="text-xs font-black uppercase tracking-wider text-slate-600">
                    Uygulama
                  </dt>
                  <dd className="mt-1 text-gray-700">{item.work}</dd>
                </div>
                <div>
                  <dt className="text-xs font-black uppercase tracking-wider text-emerald-700">
                    Sonuç
                  </dt>
                  <dd className="mt-1 flex gap-2 text-gray-700">
                    <CheckCircle
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span>{item.result}</span>
                  </dd>
                </div>
              </dl>
              <Link
                href={item.href}
                className="mt-6 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 text-sm font-black text-slate-900 transition hover:border-blue-300 hover:text-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                <Eye className="h-4 w-4" aria-hidden="true" />
                Proje sayfasını aç
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-black text-gray-950 md:text-3xl">
            Dome Kurulum Görselleri
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-700 md:text-base">
            Kapalı fuar alanı ve açık meydan kurulumlarından seçilmiş kareler.
          </p>
          <div className="mt-6">
            <CaseGallery images={GALLERY_IMAGES} visibleCount={4} />
          </div>
        </div>

        <article className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-video bg-black">
            <VideoEmbed
              videoId={PROJECT_VIDEO.videoId}
              title={PROJECT_VIDEO.title}
              thumbnailUrl={`https://i.ytimg.com/vi/${PROJECT_VIDEO.videoId}/hqdefault.jpg`}
            />
          </div>
          <div className="p-6">
            <h4 className="text-lg font-black text-gray-950">{PROJECT_VIDEO.title}</h4>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              {PROJECT_VIDEO.description}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ================== 6 — Kurulum ve Zemin ================== */
function InstallationSection() {
  return (
    <section
      id="kurulum"
      className="scroll-mt-24 bg-white py-20"
      aria-labelledby="kurulum-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
              Saha planı
            </p>
            <h2
              id="kurulum-baslik"
              className="mt-3 text-4xl font-black tracking-tight text-gray-950 md:text-5xl"
            >
              Dome Kurulumunda Zemin ve Saha Neyi Belirler?
            </h2>
            <p className="mt-6 text-base leading-8 text-gray-700 md:text-lg">
              Dome kurulumu, klasik çadırdan farklı bir montaj sırası ve daha geniş bir
              serim alanı ister; membran zemine yayılarak hazırlanır ve ancak sonra
              yükseltilir. Bu yüzden kurulum alanının kendisi kadar çevresindeki boşluk da
              planlanır.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  t: "Zemin ve sabitleme",
                  d: "Toprak ve çim yüzeylerde kazık ankrajı, beton, asfalt ve parkede balast ağırlığı kullanılır. Kazık çakılacak sahalarda yeraltı altyapısı önceden sorgulanır.",
                },
                {
                  t: "Kapalı alan kısıtları",
                  d: "Fuar holü gibi kapalı alanlarda tavan yüksekliği, kolon aksları ve yükleme kapısı ölçüleri kurulumdan önce kontrol edilir; dome bu ölçülere göre seçilir.",
                },
                {
                  t: "Enerji",
                  d: "Pnömatik yapılarda üfleyicinin kesintisiz beslenmesi zorunludur; jeneratör yedeği ve hat ayrımı saha planına baştan yazılır.",
                },
                {
                  t: "Serim alanı",
                  d: "Membranın yayılacağı geçici alan, kurulum günü için etkinlik yerleşiminden ayrı olarak rezerve edilir.",
                },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-black text-gray-950">{item.t}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-700">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          <figure className="m-0 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-kurulum-sureci.webp"
                alt="Meydanda kurulan dome çadırın geodezik iskeleti ve vinçle indirilen membran"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[center_38%]"
                quality={78}
                loading="lazy"
              />
            </div>
            <figcaption className="px-6 py-5 text-sm leading-6 text-gray-700">
              DicleFest Şanlıurfa: geodezik iskelet kurulduktan sonra membranın vinçle
              indirilmesi.
            </figcaption>
          </figure>
        </div>

        <p className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-base leading-7 text-gray-700">
          <strong className="font-black text-gray-950">Belgeler:</strong> Dome yapıların
          yangın ve statik belgeleri, kullanılacak tipe ve çapa göre proje bazında paylaşılır.
          Kurum ve fuar alanı başvurularında istenen evrak listesi teklif aşamasında birlikte
          netleştirilir.
        </p>
      </div>
    </section>
  );
}

/* ================== 7 — SSS ================== */
function FAQ() {
  return (
    <section
      id="sss"
      className="scroll-mt-24 bg-slate-50 py-20"
      aria-labelledby="dome-sss-baslik"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700">
            Sık sorulan sorular
          </p>
          <h2
            id="dome-sss-baslik"
            className="mt-3 text-4xl font-black text-gray-950 md:text-5xl"
          >
            Dome Çadır Hakkında Merak Edilenler
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-3xl border-2 border-transparent bg-white transition-colors duration-300 open:border-blue-200 open:shadow-sm [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-3xl p-6 text-lg font-black text-gray-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200">
                <span className="flex-1">{faq.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl leading-none text-blue-700 transition-transform duration-300 group-open:rotate-180"
                >
                  ⌄
                </span>
              </summary>
              <p className="px-6 pb-6 text-base leading-7 text-gray-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================== Kapanış CTA ================== */
function ClosingCta() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a1429] py-16 text-white"
      aria-labelledby="dome-cta-baslik"
    >
      <div
        className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
        aria-hidden="true"
      />
      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h2 id="dome-cta-baslik" className="text-3xl font-black md:text-4xl">
          Dome kurgunuzu birlikte netleştirelim
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100/80 md:text-lg">
          Tarih, alan ve konsept bilgisini paylaşın; dome tipi, projeksiyon kurgusu ve
          kurulum planını kalem kalem iletelim.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-green-700 px-8 text-[17px] font-black text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            WhatsApp’tan teklif alın
          </Link>
          <Link
            href={`tel:${PHONE}`}
            className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/[0.07] px-8 text-[17px] font-black text-white backdrop-blur-xl transition hover:bg-white/[0.14] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================== JSON-LD ================== */
function DomeRentalJsonLd() {
  const webPageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const pageDescription =
    "360° mapping, lansman ve deneyim alanı kurguları için dome çadır kiralama. Pnömatik ve geodezik dome kurulumu, projeksiyon ve akustik planıyla birlikte.";

  const provider = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Sahneva",
    url: ORIGIN,
    telephone: PHONE,
  };

  const serviceNode = {
    "@type": "Service",
    "@id": serviceId,
    name: "Dome Çadır Kiralama",
    serviceType: "Dome çadır kiralama ve 360° mapping kurulumu",
    url: PAGE_URL,
    description: pageDescription,
    provider,
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "City", name: "İstanbul" },
      { "@type": "AdministrativeArea", name: "Marmara Bölgesi" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dome Çadır Kiralama Çözümleri",
      itemListElement: DOME_TYPES.map((type, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: `${type.title} Kiralama`,
        description: type.summary,
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
      })),
    },
  };

  const gallerySchema = buildImageGallerySchema({
    images: GALLERY_IMAGES,
    origin: ORIGIN,
    pageUrl: PAGE_URL,
    serviceId,
    webPageId,
    name: "Dome çadır kurulum görselleri",
  });

  serviceNode.image = gallerySchema.imageUrls;

  const webPageNode = {
    "@type": "WebPage",
    "@id": webPageId,
    name: "Dome Çadır Kiralama | 360° Mapping ve Deneyim Alanı | Sahneva",
    description: pageDescription,
    url: PAGE_URL,
    inLanguage: "tr-TR",
    mainEntity: { "@id": serviceId },
    isPartOf: { "@id": WEBSITE_ID },
    publisher: provider,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${ORIGIN}${HERO_IMAGE.src}`,
      width: HERO_IMAGE.width,
      height: HERO_IMAGE.height,
    },
    image: [`${ORIGIN}${HERO_IMAGE.src}`, ...gallerySchema.imageUrls],
    hasPart: [
      ...(gallerySchema.galleryNode ? [{ "@id": gallerySchema.galleryId }] : []),
      ...gallerySchema.imageNodes.map((image) => ({ "@id": image["@id"] })),
    ],
  };

  const faqNode = {
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    isPartOf: { "@id": webPageId },
    about: { "@id": serviceId },
    mainEntityOfPage: { "@id": webPageId },
    inLanguage: "tr-TR",
    mainEntity: FAQ_ITEMS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const videoNode = {
    "@type": "VideoObject",
    name: PROJECT_VIDEO.title,
    description: PROJECT_VIDEO.description,
    uploadDate: PROJECT_VIDEO.uploadDate,
    thumbnailUrl: `https://img.youtube.com/vi/${PROJECT_VIDEO.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${PROJECT_VIDEO.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${PROJECT_VIDEO.videoId}`,
    inLanguage: "tr-TR",
    publisher: { "@id": ORGANIZATION_ID },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      webPageNode,
      serviceNode,
      ...(gallerySchema.galleryNode ? [gallerySchema.galleryNode] : []),
      ...gallerySchema.imageNodes,
      faqNode,
      videoNode,
    ],
  };

  return <JsonLdScript id="ld-json-dome-cadir" data={jsonLd} />;
}

/* ================== Sayfa Bileşeni ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${ORIGIN}/` },
    { name: "Hizmetler", url: `${ORIGIN}/hizmetler` },
    { name: "Çadır Kiralama", url: `${ORIGIN}/cadir-kiralama` },
    { name: "Dome Çadır Kiralama", url: PAGE_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={ORIGIN} />
      <DomeRentalJsonLd />

      <Hero />
      <SectionJumpNav />
      <WhatIsDome />
      <MappingSection />
      <AcousticsSection />
      <UseCasesSection />
      <ReferencesSection />
      <InstallationSection />
      <FAQ />

      <ServiceBlogLinks
        eyebrow="Dome içerik kümesi"
        title="Dome kurgusuna dair rehberler"
        description="Dome tipini, mapping kurgusunu ve etkinlik planını netleştirmeden önce okunacak rehberler."
        links={[
          {
            href: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
            label: "Dome Çadır ve 360° Mapping Rehberi",
            intent: "Pnömatik yapı, mapping ve senkronizasyon kurgusu",
          },
          {
            href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
            label: "Teknik Keşif ve Planlama Rehberi",
            intent: "Zemin, enerji ve saha erişimini kurulumdan önce netleştirmek için",
          },
          {
            href: "/blog/kurumsal-etkinlik-yonetimi",
            label: "Kurumsal Etkinlik Yönetimi Rehberi",
            intent: "Dome’u bütün etkinlik planına oturtmak için",
          },
        ]}
      />
      <GlossaryTermLinks
        servicePath="/dome-cadir-kiralama"
        title="Dome projelerinde geçen terimler"
        description="Mapping, ankraj ve rüzgâr yükü gibi başlıklar dome kurulumunun kapsamını belirler; tanımlar sözlükte."
      />
      <PaymentOptionsNote />
      <ClosingCta />
    </>
  );
}
