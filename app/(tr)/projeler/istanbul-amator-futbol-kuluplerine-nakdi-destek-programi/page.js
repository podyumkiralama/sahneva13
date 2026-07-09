import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Layers3,
  MapPin,
  MonitorCheck,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Volume2,
} from "lucide-react";

import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const IMAGE_BASE = "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi";
const PROJECT_NAME = "İstanbul Amatör Futbol Kulüplerine 180 Milyon TL Nakdi Destek Programı";
const VENUE_NAME = "Millet Bahçesi Hangar";
const H1 = "Kapalı Alan LED Ekran ve Sahne Kurulumu";
const SEO_TITLE = "Amatör Futbol Programı | LED Sahne";
const DESCRIPTION =
  "İstanbul Amatör Futbol Kulüpleri destek programında LED ekran, sahne, podyum, ses-ışık, truss ve protokol kurulumu Sahneva tarafından yönetildi.";
const OG_DESCRIPTION =
  "Kapalı alan protokol etkinliğinde LED ekran, sahne, podyum, ses-ışık, truss, teknik reji ve salon düzeni Sahneva tarafından yönetildi.";
const PUBLISHED_AT = "2026-05-19T12:00:00+03:00";
const MODIFIED_AT = "2026-05-19T12:00:00+03:00";

const IMAGES = {
  hero: {
    src: `${IMAGE_BASE}/istanbul-amator-futbol-kulupleri-led-ekran-sahne-kurulumu.webp`,
    width: 1600,
    height: 739,
    alt: "Millet Bahçesi Hangar İstanbul Amatör Futbol Kulüpleri Destek Programı LED ekran ve sahne kurulumu",
    title: "Millet Bahçesi Hangar LED Ekran ve Sahne Kurulumu",
    caption:
      "Millet Bahçesi Hangar’da gerçekleştirilen programda ana LED ekran, yan ekranlar, sahne, podyum ve ışık sistemi kapalı alan protokol akışına uygun şekilde kuruldu.",
  },
  mainStage: {
    src: `${IMAGE_BASE}/amator-futbol-kulupleri-destek-programi-ana-sahne.webp`,
    width: 1600,
    height: 739,
    alt: "Amatör Futbol Kulüpleri Destek Programı ana sahne LED ekran ve podyum kurulumu",
    title: "Amatör Futbol Kulüpleri Destek Programı Ana Sahne",
    caption:
      "Ana sahne kurgusunda geniş LED ekran yüzeyi, konuşmacı podyumu, basamak geçişleri ve sahne ışığı aynı aks üzerinde planlandı.",
  },
  ledSetup: {
    src: `${IMAGE_BASE}/kapali-alan-protokol-etkinligi-led-ekran-kurulumu.webp`,
    width: 1600,
    height: 739,
    alt: "Millet Bahçesi Hangar kapalı alan protokol etkinliği LED ekran ve sahne teknik kurulumu",
    title: "Millet Bahçesi Hangar Protokol Etkinliği LED Ekran Kurulumu",
    caption:
      "Merkez LED ekran, yan ekranlar ve sahne üstü konuşmacı alanı salonun görüş açılarına göre birlikte değerlendirildi.",
  },
  salonLayout: {
    src: `${IMAGE_BASE}/protokol-etkinligi-salon-yemek-duzeni.webp`,
    width: 1600,
    height: 739,
    alt: "Millet Bahçesi Hangar kapalı alan protokol etkinliği salon düzeni",
    title: "Millet Bahçesi Hangar Protokol Etkinliği Salon Düzeni",
    caption:
      "Salon yerleşimi; sahne görüş açısı, protokol akışı, masa düzeni ve LED ekran görünürlüğü dikkate alınarak değerlendirildi.",
  },
  controlDesk: {
    src: `${IMAGE_BASE}/ses-isik-reji-teknik-masa-kurulumu.webp`,
    width: 1600,
    height: 739,
    alt: "Kapalı alan protokol etkinliği ses ışık reji ve teknik masa kurulumu",
    title: "Ses Işık Reji ve Teknik Masa Kurulumu",
    caption:
      "Teknik reji alanı; LED ekran içerik akışı, ses, ışık ve sahne yönetiminin kontrol edildiği operasyon noktası olarak konumlandırıldı.",
  },
  trussDetail: {
    src: `${IMAGE_BASE}/truss-isik-sistemi-sahne-arka-kurulum-detayi.webp`,
    width: 739,
    height: 1600,
    alt: "Truss ışık sistemi ve sahne arkası teknik kurulum detayı",
    title: "Truss Işık Sistemi ve Sahne Arkası Kurulum Detayı",
    caption:
      "Sahne arkasındaki taşıyıcı yapı, LED ekran kurulumu ve ışık sistemi için teknik erişim ve güvenli montaj alanı oluşturdu.",
    portrait: true,
  },
  platform: {
    src: `${IMAGE_BASE}/sahne-podyum-basamak-platform-kurulumu.webp`,
    width: 1600,
    height: 739,
    alt: "Sahne podyum basamak platform ve LED ekran kurulum detayı",
    title: "Sahne Podyum Basamak ve Platform Kurulumu",
    caption:
      "Sahne yüksekliği, basamak geçişleri, podyum ve platform yüzeyi konuşmacı erişimi ve salon görünürlüğü için birlikte kurgulandı.",
  },
  sideScreens: {
    src: `${IMAGE_BASE}/kurumsal-etkinlik-led-ekran-yan-ekran-kurgusu.webp`,
    width: 1600,
    height: 739,
    alt: "Kurumsal etkinlik ana LED ekran ve yan ekran kurgusu",
    title: "Kurumsal Etkinlik LED Ekran ve Yan Ekran Kurgusu",
    caption:
      "Yan ekranlar, büyük salon içinde sahne içeriklerinin ve konuşmacı görüntüsünün daha geniş alana taşınmasını destekledi.",
  },
  liveControl: {
    src: `${IMAGE_BASE}/teknik-reji-canli-kamera-aktarim-kurulumu.webp`,
    width: 1600,
    height: 739,
    alt: "Sahneva teknik reji canlı kamera aktarımı ve LED ekran kontrol kurulumu",
    title: "Teknik Reji Canlı Kamera Aktarım Kurulumu",
    caption:
      "Kamera aktarımı, sahne üstü konuşmacı takibi ve LED ekran içerik yönetimi teknik reji alanından koordine edildi.",
  },
  wideSalon: {
    src: `${IMAGE_BASE}/kapali-alan-protokol-salon-led-ekran-genis-aci.webp`,
    width: 1600,
    height: 739,
    alt: "Millet Bahçesi Hangar kapalı alan protokol salonu geniş açı LED ekran sahne kurulumu",
    title: "Millet Bahçesi Hangar Geniş Açı Protokol Salonu Kurulumu",
    caption:
      "Geniş salon ölçeğinde sahne, yan ekran, masa düzeni ve teknik ışık hattı aynı etkinlik akışını destekleyecek şekilde kuruldu.",
  },
  flagScene: {
    src: `${IMAGE_BASE}/kapali-alan-turk-bayragi-led-ekran-salon-kurgusu.webp`,
    width: 1600,
    height: 739,
    alt: "Kapalı alan protokol etkinliği LED ekran Türk bayrağı salon kurgusu",
    title: "Kapalı Alan LED Ekran Salon Kurgusu",
    caption:
      "Ana ekran ve yan ekranlar, program akışındaki görsel geçişlerin salonun tamamından net izlenebilmesi için kullanıldı.",
  },
  welcomeArea: {
    src: `${IMAGE_BASE}/amator-futbol-kulupleri-destek-programi-karsilama-alani.webp`,
    width: 1600,
    height: 739,
    alt: "Amatör Futbol Kulüpleri Destek Programı karşılama ve operasyon alanı",
    title: "Amatör Futbol Kulüpleri Destek Programı Karşılama Alanı",
    caption:
      "Program adı ve görsel dili, salon içi yönlendirme ve karşılama alanında etkinlik bütünlüğünü destekleyecek şekilde taşındı.",
  },
};

const HERO_IMAGE = IMAGES.hero;
const GALLERY_IMAGES = Object.values(IMAGES);

const PROJECT_FACTS = [
  { label: "Mekân", value: "Millet Bahçesi Hangar", icon: Building2 },
  { label: "Lokasyon", value: "İstanbul", icon: MapPin },
  { label: "Proje Tipi", value: "Kapalı Alan Protokol Etkinliği", icon: Sparkles },
  { label: "Kapsam", value: "LED Ekran, Sahne, Podyum, Ses-Işık, Truss, Teknik Reji", icon: RadioTower },
];

const SCOPE_ITEMS = [
  "Büyük LED ekran kurulumu",
  "Yan ekranlar ve sahne görsel bütünlüğü",
  "Sahne, podyum, basamak ve platform uygulaması",
  "Ses ve ışık sistemleri",
  "Truss altyapısı ve sahne arkası teknik erişim",
  "Teknik reji ve canlı görüntü aktarımı",
  "Salon, protokol ve yemek düzeni",
  "Kapalı alan etkinlik prodüksiyonu",
];

const TECHNICAL_MEASUREMENTS = [
  { label: "Ana sahne", value: "16 x 8 m scaff sistem" },
  { label: "Ana LED ekran", value: "16 x 6 m" },
  { label: "Yan LED ekranlar", value: "4 adet, her biri 4 x 2.5 m" },
  { label: "LED pixel pitch", value: "1.9 mm LED ekran" },
  { label: "Salon düzeni", value: "2500 sandalye düzeni" },
  { label: "Ağırlama operasyonu", value: "3000 kişilik catering/ağırlama operasyonu" },
  { label: "Line array ses", value: "24 adet JBL VTX A12 line array" },
];

const EQUIPMENT_GROUPS = [
  {
    title: "Ses Sistemi",
    description:
      "Konuşmacı netliği ve salon genelinde kontrollü ses dağılımı için line array omurgası kuruldu.",
    items: ["24 adet JBL VTX A12 line array ses sistemi"],
    icon: Volume2,
  },
  {
    title: "Işık Sistemi",
    description:
      "Sahne odağı, protokol görünürlüğü ve LED ekranla uyumlu atmosfer için hareketli ışık ve wash grubu birlikte planlandı.",
    items: [
      "15 adet Clay Paky K20 B-EYE LED wash",
      "15 adet Clay Paky Mythos 2",
      "10 adet Martin MAC Viper",
      "50 adet FOS Cyclone Pro D2",
    ],
    icon: Sparkles,
  },
  {
    title: "LED Kontrol",
    description:
      "Ana LED ekran ve yan ekranların içerik akışı, görüntü kararlılığı ve sinyal yönetimi processor altyapısı üzerinden yürütüldü.",
    items: ["2 adet NovaStar VX1000 processor"],
    icon: MonitorCheck,
  },
  {
    title: "Teknik Reji",
    description:
      "Işık kontrolü, sahne akışı ve teknik masa yönetimi kapalı alan protokol düzenine göre konumlandırıldı.",
    items: ["1 adet grandMA3 NPU", "1 adet grandMA3 light", "Pioneer DJM-A9 mixer"],
    icon: RadioTower,
  },
  {
    title: "Mikrofon Altyapısı",
    description:
      "Konuşmacı geçişleri ve protokol sunumları için güvenilir Shure mikrofon altyapısı hazırlandı.",
    items: ["Shure mikrofonlar"],
    icon: CheckCircle2,
  },
];

export const revalidate = 86400;

export const metadata = {
  title: SEO_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "article",
    title: SEO_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: OG_DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMAGE.src}`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function AmateurFootballSupportProjectPage() {
  const jsonLd = buildJsonLd();

  return (
    <div className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <JsonLd data={jsonLd} />
      <SiteBackground />

      <section className="relative px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <Breadcrumb />
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-blue-100">
              Referans Proje / Kapalı Alan Protokol Etkinliği
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              {H1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Millet Bahçesi Hangar’da gerçekleştirilen {PROJECT_NAME} referansında Sahneva; LED ekran,
              sahne, podyum, JBL VTX line array ses sistemi, Clay Paky ve Martin ışık kurgusu,
              NovaStar LED kontrol ve grandMA3 reji altyapısını tek teknik plan altında yönetti.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+kapal%C4%B1+alan+protokol+etkinli%C4%9Fi+LED+ekran+ve+sahne+kurulumu+i%C3%A7in+teklif+almak+istiyorum."
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Teklif Al
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/kurumsal-organizasyon"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Kurumsal Organizasyon Hizmetleri
              </Link>
            </div>
          </div>

          <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-blue-950/30">
            <div className="relative aspect-[16/9]">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                title={HERO_IMAGE.title}
                width={HERO_IMAGE.width}
                height={HERO_IMAGE.height}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/72 via-transparent to-transparent" />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300">
              {HERO_IMAGE.caption}
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_FACTS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur">
              <Icon className="mb-4 h-5 w-5 text-blue-200" aria-hidden="true" />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100/80">{label}</p>
              <p className="mt-2 text-base font-bold leading-snug text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="proje-ozeti">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionEyebrow>Proje Özeti</SectionEyebrow>
            <h2 id="proje-ozeti" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Geniş katılımlı protokol programı için sakin ve güçlü teknik akış.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-200 md:text-lg">
              <p>
                {PROJECT_NAME}, Millet Bahçesi Hangar’da gerçekleştirilen kapalı alan protokol
                etkinliği ölçeğinde bir prodüksiyon çalışmasıdır. Sahneva bu projede yalnızca
                ekipman kurulumu değil; salonun görüş açıları, LED ekran yerleşimi, konuşmacı takibi,
                sahne görünürlüğü, teknik masa konumu, podyum geçişleri ve protokol akışını
                destekleyen bütüncül bir kurulum yaklaşımıyla görev aldı.
              </p>
              <p>
                Bu referansta odak etkinlik anlatısından çok, Sahneva’nın kapalı alanda kurduğu LED
                ekran, sahne, ses, ışık, mikrofon, LED kontrol ve teknik reji altyapısının sahadaki
                gücüdür. Ekipman seçimi; salon ölçeği, yakın izleme mesafesi, konuşmacı görünürlüğü
                ve kesintisiz teknik akış dikkate alınarak yapıldı.
              </p>
              <p>
                Kapalı alan protokol etkinliklerinde sahne, LED ekran, ses-ışık, podyum, truss ve
                teknik reji birbirinden bağımsız ekipman kalemleri değildir. Metin, görsel ve sahne
                odağı; programın kurumsal/protokol yapısına uygun kontrollü bir prodüksiyon diliyle
                kuruldu.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-white">Teknik Kapsam</h2>
            <ul className="mt-6 grid gap-3">
              {SCOPE_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-[#0B1120]/55 px-4 py-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <TechnicalEquipmentSection />

      <CaseSection
        eyebrow="LED Ekran ve Sahne Kurgusu"
        title="Ana LED ekran, yan ekranlar ve sahne aynı görsel omurgada buluştu."
        icon={MonitorCheck}
        images={[IMAGES.mainStage, IMAGES.ledSetup, IMAGES.sideScreens]}
      >
        <p>
          Programın ana sahne kurgusunda geniş LED ekran yüzeyi, yan ekranlar ve konuşmacı alanı
          birlikte planlandı. Büyük salonlarda LED ekran yalnızca arka plan görseli değil; konuşmacı
          takibi, salon içi görünürlük, marka algısı ve protokol akışı için ana iletişim yüzeyidir.
        </p>
        <p>
          <Link href="/led-ekran-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            P1.9 indoor LED ekran çözümleri
          </Link>{" "}
          tarafında yeni premium envanter olarak konumlandırılan altyapı, bu projede yakın izleme
          mesafesi ve yüksek çözünürlüklü sahne görünürlüğü için kullanıldı. 16 x 6 m ana LED ekran
          ve 4 adet 4 x 2.5 m yan LED ekran, 3840Hz tazeleme oranı ve 1.9m üzeri izleme mesafesine
          uygun P1.9 LED envanteriyle planlandı.
        </p>
        <p>
          Bu nedenle{" "}
          <Link href="/led-ekran-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            LED ekran çözümleri
          </Link>{" "}
          ve{" "}
          <Link href="/sahne-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            sahne kurulumu
          </Link>{" "}
          aynı hizalama, görüş açısı ve teknik erişim planı içinde değerlendirildi.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Ses, Işık ve Teknik Reji"
        title="Konuşmacı görünürlüğü, ses netliği ve canlı aktarım aynı rejide yönetildi."
        icon={Volume2}
        images={[IMAGES.controlDesk, IMAGES.liveControl, IMAGES.trussDetail]}
        flip
      >
        <p>
          Kapalı alan protokol etkinliklerinde sesin anlaşılır olması, ışığın sahne odağını doğru
          taşıması ve teknik rejinin akışı kesintisiz yönetmesi kritik önem taşır.
        </p>
        <p>
          Bu projede sahne ışıkları,{" "}
          <Link href="/truss-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            truss sistemleri
          </Link>
          , teknik masa, kamera aktarımı ve{" "}
          <Link href="/ses-isik-sistemleri" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            ses ve ışık sistemleri
          </Link>{" "}
          aynı operasyon planına bağlandı. Böylece salondaki katılımcılar ve ekran üzerinden
          konuşmacıyı takip eden izleyiciler için net bir etkinlik deneyimi oluşturuldu.
        </p>
      </CaseSection>

      <CaseSection
        eyebrow="Podyum, Platform ve Salon Düzeni"
        title="Sahne yüksekliği ve salon yerleşimi protokol akışına göre dengelendi."
        icon={Layers3}
        images={[IMAGES.platform, IMAGES.salonLayout, IMAGES.wideSalon, IMAGES.flagScene]}
      >
        <p>
          Ana sahne 16 x 8 m ölçüsünde scaff sistemle kuruldu. Sahne yüksekliği, basamak geçişleri,
          podyum/platform yüzeyi, 2500 sandalye düzeni ve 3000 kişilik catering operasyonu aynı salon
          yerleşimi içinde değerlendirildi.
        </p>
        <p>
          Bu projede sahne ile salon arasındaki ilişki; protokol masalarının görüş açısı, konuşmacı
          erişimi, servis akışı ve izleyici deneyimi dikkate alınarak planlandı. Böylece sahne,
          podyum, LED ekran ve salon ağırlama akışı birbirinden kopuk kalmadan aynı teknik yerleşim
          üzerinde çalıştı.
        </p>
        <p>
          <Link href="/podyum-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            Podyum ve platform çözümleri
          </Link>{" "}
          ile{" "}
          <Link href="/kurumsal-organizasyon" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
            kurumsal organizasyon
          </Link>{" "}
          projelerinde teknik kurulumun yalnızca sahnede değil, tüm salon akışında karşılık bulması gerekir.
        </p>
      </CaseSection>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="galeri">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Galeri</SectionEyebrow>
              <h2 id="galeri" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Sahne, LED ekran, reji ve salon düzeninden seçili kareler
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Galeri; kapalı alan protokol etkinliği için hazırlanan ana sahne, LED ekran, yan ekran,
              teknik reji, truss, platform ve salon düzeni detaylarını birlikte gösterir.
            </p>
          </div>
          <MediaGrid images={GALLERY_IMAGES} gallery />
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/25 via-white/[0.07] to-slate-950 p-8 text-center shadow-2xl shadow-blue-950/30 backdrop-blur md:p-12">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Kapalı Alan Protokol Etkinliğiniz İçin Tek Elden Teknik Prodüksiyon
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Sahneva; LED ekran, sahne, podyum, ses-ışık, truss, teknik reji ve salon akışını aynı
            teknik plan içinde kurarak protokol ve kurumsal etkinliklerde güçlü, okunaklı ve kontrollü
            bir sahne deneyimi oluşturur.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+kapal%C4%B1+alan+protokol+etkinli%C4%9Fi+teknik+prod%C3%BCksiyon+i%C3%A7in+teklif+almak+istiyorum."
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Teklif Al
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href="/kurumsal-organizasyon"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Kurumsal Organizasyon Hizmetlerini İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
      <Link href="/" className="hover:text-white">Ana Sayfa</Link>
      <span aria-hidden="true">/</span>
      <Link href="/projeler" className="hover:text-white">Projeler</Link>
      <span aria-hidden="true">/</span>
      <span className="text-white">Amatör Futbol Kulüpleri Destek Programı</span>
    </nav>
  );
}

function TechnicalEquipmentSection() {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="teknik-ekipman-altyapisi">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-4xl">
          <SectionEyebrow>Kullanılan Teknik Sistemler</SectionEyebrow>
          <h2 id="teknik-ekipman-altyapisi" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
            Teknik ekipman altyapısı
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-200 md:text-lg">
            Bu proje sayfasında etkinlik adı referans bağlamıdır; asıl gösterilen güç Sahneva’nın
            kapalı alanda kurduğu ses, ışık, LED kontrol, teknik reji ve mikrofon altyapısıdır.
            Ekipman omurgası, sahne üzerindeki konuşmacı odağı ile salonun tamamındaki izleme
            deneyimini aynı teknik plan içinde taşımak için seçildi.
          </p>
        </div>

        <div className="mb-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-blue-300/20 bg-blue-500/10 p-6 shadow-2xl shadow-blue-950/20 backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-100">Teknik Not</p>
            <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
              1.9 mm LED ekran ilk kullanım vurgusu
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-200">
              Bu projede Sahneva, 1.9 mm LED ekran altyapısını ilk kez kullanarak kapalı alan
              protokol etkinliğinde daha yüksek çözünürlüklü ve yakın mesafeden net izlenebilen
              bir görsel yüzey oluşturdu.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Sahneva’nın{" "}
              <Link href="/led-ekran-kiralama" className="font-black text-blue-100 underline decoration-blue-300/50 underline-offset-4">
                P1.9 indoor LED ekran çözümleri
              </Link>{" "}
              sayfasında yeni premium envanter olarak konumlandırılan P1.9 indoor LED altyapısı,
              bu referansta ana sahne ve yan ekran görünürlüğünü destekleyen ana görüntü zemini oldu.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {TECHNICAL_MEASUREMENTS.map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-[#0B1120]/70 p-5 shadow-xl shadow-black/15">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100/90">{label}</p>
                <p className="mt-2 text-lg font-black leading-snug text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {EQUIPMENT_GROUPS.map(({ title, description, items, icon: Icon }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/20 backdrop-blur">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-100">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-black tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm font-bold leading-snug text-slate-100">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" aria-hidden="true" />
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

function CaseSection({ eyebrow, title, icon: Icon, images, children, flip = false }) {
  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby={slugify(title)}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start ${flip ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
          <div className="mt-3 flex items-start gap-4">
            <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-100">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 id={slugify(title)} className="text-3xl font-black tracking-tight md:text-4xl">
              {title}
            </h2>
          </div>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-200 md:text-lg">
            {children}
          </div>
        </div>
        <MediaGrid images={images} featured={images.length <= 3} compact />
      </div>
    </section>
  );
}

function MediaGrid({ images, featured = false, gallery = false, compact = false }) {
  const gridClass = gallery
    ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    : "grid gap-5 sm:grid-cols-2";

  return (
    <div className={gridClass}>
      {images.map((image, index) => (
        <ImageFigure
          key={image.src}
          image={image}
          className={featured && index === 0 ? "sm:col-span-2" : ""}
          compact={compact}
        />
      ))}
    </div>
  );
}

function ImageFigure({ image, className = "", compact = false }) {
  const aspectClass = image.portrait ? "aspect-[9/16]" : compact ? "aspect-[16/11]" : "aspect-[16/10]";
  const objectClass = image.portrait ? "object-contain bg-slate-950" : "object-cover";

  return (
    <figure className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl shadow-black/20 ${className}`}>
      <div className={`relative ${aspectClass}`}>
        <Image
          src={image.src}
          alt={image.alt}
          title={image.title}
          width={image.width}
          height={image.height}
          loading="lazy"
          sizes={className.includes("col-span") ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className={`h-full w-full ${objectClass} transition duration-700 group-hover:scale-[1.03]`}
        />
      </div>
      <figcaption className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-slate-300">
        {image.caption}
      </figcaption>
    </figure>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="m-0 text-xs font-black uppercase tracking-[0.28em] text-blue-200">
      {children}
    </p>
  );
}

function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_86%_22%,rgba(14,165,233,0.1),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.2),#0B1120_92%)]" />
      <div className="absolute inset-0 grid-overlay opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B1120] to-transparent" />
    </div>
  );
}

function buildJsonLd() {
  const imageObjects = GALLERY_IMAGES.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#image-${index + 1}`,
    contentUrl: `${SITE_URL}${image.src}`,
    url: `${SITE_URL}${image.src}`,
    name: image.title,
    caption: image.caption,
    width: image.width,
    height: image.height,
    inLanguage: "tr-TR",
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Sahneva",
        url: SITE_URL,
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: SEO_TITLE,
        description: DESCRIPTION,
        inLanguage: "tr-TR",
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        primaryImageOfPage: { "@id": `${PAGE_URL}#image-1` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#project` },
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": ["CreativeWork", "Project"],
        "@id": `${PAGE_URL}#project`,
        name: PROJECT_NAME,
        headline: H1,
        description: OG_DESCRIPTION,
        url: PAGE_URL,
        image: GALLERY_IMAGES.map((image) => `${SITE_URL}${image.src}`),
        provider: { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        locationCreated: {
          "@type": "Place",
          name: VENUE_NAME,
          address: {
            "@type": "PostalAddress",
            addressLocality: "İstanbul",
            addressCountry: "TR",
          },
        },
        inLanguage: "tr-TR",
        about: [
          "LED ekran kurulumu",
          "sahne kurulumu",
          "kapalı alan protokol etkinliği",
          "ses ışık sistemleri",
          "teknik reji",
          "truss sistemleri",
          "podyum ve platform kurulumu",
          "kurumsal organizasyon",
          "JBL VTX A12 line array ses sistemi",
          "Clay Paky K20 B-EYE LED wash",
          "Clay Paky Mythos 2",
          "Martin MAC Viper",
          "FOS Cyclone Pro D2",
          "NovaStar VX1000 LED processor",
          "grandMA3 ışık kontrol altyapısı",
          "Pioneer DJM-A9 mixer",
          "Shure mikrofon altyapısı",
          "16 x 8 m scaff sahne sistemi",
          "16 x 6 m ana LED ekran",
          "4 adet 4 x 2.5 m yan LED ekran",
          "1.9 mm P1.9 indoor LED ekran",
          "3840Hz tazeleme oranı",
          "2500 sandalye düzeni",
          "3000 kişilik catering/ağırlama operasyonu",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE_URL}/projeler` },
          { "@type": "ListItem", position: 3, name: PROJECT_NAME, item: PAGE_URL },
        ],
      },
      ...imageObjects,
    ],
  };
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
