import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Layers3,
  MapPin,
  Music2,
  ShieldCheck,
  Sparkles,
  Tent,
  UsersRound,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/projeler/diclefest-sanliurfa";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const IMAGE_BASE = "/img/projeler/diclefest-sanliurfa";
const TITLE = "DicleFest Şanlıurfa Festival Alanı Kurulumu ve Etkinlik Yönetimi";
const SEO_TITLE = "DicleFest Şanlıurfa | Dome Çadır, LED Ekran ve Konser Alanı";
const DESCRIPTION =
  "Şanlıurfa DicleFest kapsamında dome çadırlar, etkinlik çadırları, oyun alanları, konser alanı, dekor uygulamaları ve festival saha operasyonu Sahneva koordinasyonunda yönetildi.";
const OG_DESCRIPTION =
  "Topçu Meydanı’nda düzenlenen DicleFest Şanlıurfa projesinde dome çadırlar, oyun alanları, konser alanı, dekor uygulamaları ve açık alan festival operasyonu Sahneva koordinasyonunda yönetildi.";
const PUBLISHED_AT = "2026-05-16T12:00:00+03:00";
const MODIFIED_AT = "2026-05-16T17:30:00+03:00";
const DICLEFEST_SOURCE_URL = "https://diclefest.com/etkinlikler/";

const IMAGES = {
  domeGeneral: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dome-cadir-genel-alan.webp`,
    width: 4096,
    height: 1840,
    alt: "DicleFest Şanlıurfa Topçu Meydanı dome çadır ve festival genel alan kurulumu",
    title: "DicleFest Şanlıurfa Dome Çadır ve Genel Festival Alanı",
    caption:
      "Topçu Meydanı’nda kurulan DicleFest Şanlıurfa alanında dome çadır, etkinlik çadırları ve ziyaretçi akışı birlikte planlandı.",
  },
  openArea: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-acik-alan-festival-yerlesimi.webp`,
    width: 4096,
    height: 1840,
    alt: "Şanlıurfa DicleFest açık alan festival yerleşimi ve ziyaretçi yönlendirme alanı",
    title: "DicleFest Şanlıurfa Açık Alan Festival Yerleşimi",
    caption:
      "Açık alan festival kurgusunda ziyaretçi dolaşımı, etkinlik çadırları, bariyerleme ve marka alanları aynı operasyon planı içinde ele alındı.",
  },
  domeSquare: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dome-cadir-meydan-kurulumu.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa dome çadır meydan kurulumu",
    title: "DicleFest Şanlıurfa Dome Çadır Meydan Kurulumu",
    caption: "Dome çadır, festival alanının ana odak noktalarından biri olarak konumlandırıldı.",
  },
  topcuSquare: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-topcu-meydani-festival-alani.webp`,
    width: 4096,
    height: 1840,
    alt: "Topçu Meydanı DicleFest Şanlıurfa festival alanı ve çadır yerleşimi",
    title: "Topçu Meydanı DicleFest Festival Alanı",
    caption:
      "Geniş meydan yapısı, festival alanının çok noktalı deneyim kurgusuna uygun şekilde değerlendirildi.",
  },
  concertSetup: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-konser-alani-sahne-kurulumu.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa konser alanı sahne kurulumu ve seyirci bariyerleri",
    title: "DicleFest Şanlıurfa Konser Alanı ve Sahne Kurulumu",
    caption:
      "Konser alanı; izleyici güvenliği, sahne görünürlüğü, teknik erişim ve saha akışı dikkate alınarak konumlandırıldı.",
  },
  stageBarrier: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-sahne-ve-bariyerleme.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa sahne kurulumu ve bariyerleme uygulaması",
    title: "DicleFest Şanlıurfa Sahne ve Bariyerleme",
    caption:
      "Sahne çevresindeki bariyerleme, konser alanı güvenliği ve izleyici akışının yönetimi için planlandı.",
  },
  concertAtmosphere: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-konser-atmosferi.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa konser atmosferi ve izleyici alanı",
    title: "DicleFest Şanlıurfa Konser Atmosferi",
    caption:
      "Festival programının konser bölümü, meydan etkinliğinin ana buluşma alanlarından biri olarak öne çıktı.",
  },
  ledStage: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-led-ekran-sahne-deneyimi.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa sahne LED ekran ve izleyici deneyimi",
    title: "DicleFest Şanlıurfa Sahne Deneyimi",
    caption:
      "Sahne, ekran ve izleyici düzeni, festival deneyiminin güçlü görünmesi için bütüncül şekilde değerlendirildi.",
  },
  tentExperience: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-cadir-ici-deneyim-alani.webp`,
    width: 4096,
    height: 1840,
    alt: "DicleFest Şanlıurfa çadır içi deneyim alanı ve marka uygulamaları",
    title: "DicleFest Şanlıurfa Çadır İçi Deneyim Alanı",
    caption:
      "Çadır içi alanlar; ziyaretçi deneyimi, marka görünürlüğü ve etkinlik akışı dikkate alınarak düzenlendi.",
  },
  techStand: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-teknoloji-deneyim-standi.webp`,
    width: 4096,
    height: 1840,
    alt: "DicleFest Şanlıurfa teknoloji deneyim standı ve etkinlik çadırı",
    title: "DicleFest Şanlıurfa Teknoloji Deneyim Standı",
    caption:
      "Teknoloji ve bilgilendirme alanları, festivalin enerji ve farkındalık temasını destekleyen temas noktaları olarak kurgulandı.",
  },
  indoorStand: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-cadir-ici-stant-alani.webp`,
    width: 4096,
    height: 1840,
    alt: "DicleFest Şanlıurfa çadır içi stant alanı ve ziyaretçi geçiş düzeni",
    title: "DicleFest Şanlıurfa Çadır İçi Stant Alanı",
    caption:
      "Stant ve deneyim noktaları, ziyaretçi geçişlerini aksatmayacak şekilde sahaya yerleştirildi.",
  },
  welcomeDesk: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-kayit-ve-karsilama-alani.webp`,
    width: 4096,
    height: 1840,
    alt: "DicleFest Şanlıurfa karşılama alanı ve etkinlik operasyon masası",
    title: "DicleFest Şanlıurfa Karşılama ve Operasyon Alanı",
    caption:
      "Karşılama ve operasyon noktaları, ziyaretçilerin alana düzenli şekilde yönlendirilmesi için planlandı.",
  },
  tentInterior: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-etkinlik-cadiri-ic-alan.webp`,
    width: 4096,
    height: 1840,
    alt: "DicleFest Şanlıurfa etkinlik çadırı iç alan düzeni",
    title: "DicleFest Şanlıurfa Etkinlik Çadırı İç Alan",
    caption:
      "Etkinlik çadırları, farklı aktivite ve deneyim alanlarının aynı festival kurgusu içinde çalışmasına imkân verdi.",
  },
  tableTennis: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-oyun-alani-masa-tenisi.webp`,
    width: 1840,
    height: 4096,
    alt: "DicleFest Şanlıurfa oyun alanı masa tenisi aktivite bölümü",
    title: "DicleFest Şanlıurfa Oyun Alanı",
    caption:
      "Çocuklar ve gençler için hazırlanan oyun alanları, festivalin interaktif deneyim tarafını güçlendirdi.",
    portrait: true,
  },
  foosball: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-oyun-alani-langirt.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa langırt oyun alanı ve aktivite bölümü",
    title: "DicleFest Şanlıurfa Langırt Aktivite Alanı",
    caption:
      "Oyun alanları, ziyaretçilerin festival içinde farklı deneyim noktalarına katılımını artıracak şekilde yerleştirildi.",
  },
  trussGame: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-aktivite-alani-truss-oyun-kurgusu.webp`,
    width: 1472,
    height: 3264,
    alt: "DicleFest Şanlıurfa aktivite alanı truss oyun kurgusu",
    title: "DicleFest Şanlıurfa Aktivite Alanı Kurulumu",
    caption:
      "Aktivite alanları, festivalin eğlence ve deneyim odağını destekleyen saha bileşenleri olarak konumlandırıldı.",
    portrait: true,
  },
  tableTennisWide: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-masa-tenisi-aktivite-alani.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa masa tenisi aktivite alanı ve ziyaretçi deneyimi",
    title: "DicleFest Şanlıurfa Masa Tenisi Aktivite Alanı",
    caption: "Festival alanında farklı yaş gruplarına hitap eden aktivite noktaları oluşturuldu.",
  },
  gamePortrait: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-oyun-alani-dikey-kurulum.webp`,
    width: 1472,
    height: 3264,
    alt: "DicleFest Şanlıurfa oyun alanı dikey kurulum detayı",
    title: "DicleFest Şanlıurfa Oyun Alanı Kurulum Detayı",
    caption: "Oyun alanı kurulumları, açık alan koşullarına uygun şekilde sahaya adapte edildi.",
    portrait: true,
  },
  youthArea: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-cocuk-ve-genclik-etkinlik-alani.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa çocuk ve gençlik etkinlik alanı",
    title: "DicleFest Şanlıurfa Çocuk ve Gençlik Etkinlik Alanı",
    caption:
      "Çocuklara ve gençlere yönelik etkinlik alanları, festivalin katılımcı deneyimini güçlendiren bölümler arasında yer aldı.",
  },
  participantTent: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-etkinlik-cadiri-katilimci-alani.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa etkinlik çadırı katılımcı alanı",
    title: "DicleFest Şanlıurfa Etkinlik Çadırı Katılımcı Alanı",
    caption:
      "Etkinlik çadırları, ziyaretçilerin farklı içeriklerle temas kurabileceği kontrollü alanlar oluşturdu.",
  },
  photoDecor: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dekor-ve-fotograf-alani.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa dekor ve fotoğraf alanı marka deneyimi",
    title: "DicleFest Şanlıurfa Dekor ve Fotoğraf Alanı",
    caption:
      "Dekor ve fotoğraf alanları, festivalin marka görünürlüğünü ve ziyaretçi paylaşım deneyimini destekledi.",
  },
  brandPoint: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-marka-deneyim-noktasi.webp`,
    width: 1472,
    height: 3264,
    alt: "DicleFest Şanlıurfa marka deneyim noktası ve dekor kurulumu",
    title: "DicleFest Şanlıurfa Marka Deneyim Noktası",
    caption:
      "Marka deneyim noktaları, ziyaretçilerin festival temasını görsel olarak algılayabileceği şekilde tasarlandı.",
    portrait: true,
  },
  decorApps: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dekor-uygulamalari.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa dekor uygulamaları ve marka alanları",
    title: "DicleFest Şanlıurfa Dekor Uygulamaları",
    caption:
      "Dekor uygulamaları, festival alanında bütünlüklü bir marka dili oluşturmak için kullanıldı.",
  },
  podiumFloor: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-podyum-zemin-kurulumu.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa podyum ve zemin kurulumu hazırlık aşaması",
    title: "DicleFest Şanlıurfa Podyum ve Zemin Kurulumu",
    caption:
      "Festival alanındaki zemin ve podyum uygulamaları, saha kullanımına uygun şekilde hazırlandı.",
  },
  platformFloor: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-zemin-platform-hazirligi.webp`,
    width: 3264,
    height: 1472,
    alt: "DicleFest Şanlıurfa zemin platform hazırlığı ve açık alan uygulaması",
    title: "DicleFest Şanlıurfa Zemin Platform Hazırlığı",
    caption:
      "Açık alan etkinliklerinde zemin hazırlığı, güvenli ve düzenli saha deneyiminin temel parçalarından biridir.",
  },
  platformDetail: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-basamak-ve-platform-detayi.webp`,
    width: 1600,
    height: 721,
    alt: "DicleFest Şanlıurfa basamak ve platform uygulama detayı",
    title: "DicleFest Şanlıurfa Platform Detayı",
    caption:
      "Platform ve basamak detayları, etkinlik alanı içindeki geçişleri destekleyen uygulamalar arasında yer aldı.",
  },
  domeBuild: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dome-cadir-kurulum-sureci.webp`,
    width: 4000,
    height: 1848,
    alt: "DicleFest Şanlıurfa dome çadır kurulum süreci",
    title: "DicleFest Şanlıurfa Dome Çadır Kurulum Süreci",
    caption: "Dome çadır kurulumu, festival alanının ana yapısal hazırlıklarından biri olarak yürütüldü.",
  },
  domeExterior: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dome-cadir-dis-gorunum.webp`,
    width: 4000,
    height: 1848,
    alt: "DicleFest Şanlıurfa dome çadır dış görünüm ve kurulum alanı",
    title: "DicleFest Şanlıurfa Dome Çadır Dış Görünüm",
    caption: "Dome çadır, festival alanında hem işlevsel hem de görsel olarak güçlü bir odak noktası oluşturdu.",
  },
  domeDistance: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-dome-cadir-uzak-gorunum.webp`,
    width: 1440,
    height: 2560,
    alt: "DicleFest Şanlıurfa dome çadır uzak görünüm",
    title: "DicleFest Şanlıurfa Dome Çadır Uzak Görünüm",
    caption: "Dome çadırın meydan içindeki konumu, alan ölçeğini ve festival yerleşimini gösteriyor.",
    portrait: true,
  },
  tentActivityDetail: {
    src: `${IMAGE_BASE}/diclefest-sanliurfa-cadir-ici-aktivite-detayi.webp`,
    width: 1472,
    height: 3264,
    alt: "DicleFest Şanlıurfa çadır içi aktivite detayı",
    title: "DicleFest Şanlıurfa Çadır İçi Aktivite Detayı",
    caption:
      "Çadır içi aktivite alanları, ziyaretçilerin festival boyunca farklı deneyimlere katılmasını sağladı.",
    portrait: true,
  },
};

const HERO_IMAGE = IMAGES.domeGeneral;

const PROJECT_FACTS = [
  { label: "Lokasyon", value: "Şanlıurfa / Topçu Meydanı", icon: MapPin },
  { label: "Tarih", value: "14–17 Mayıs 2026", icon: CalendarDays },
  { label: "Proje Tipi", value: "Açık Alan Festival Kurulumu", icon: Sparkles },
  { label: "Kapsam", value: "Dome Çadır, Oyun Alanları, Konser Alanı, Dekor, Saha Operasyonu", icon: Layers3 },
];

const PROJECT_SCOPE = [
  "Dome çadır ve etkinlik çadırları",
  "Oyun ve aktivite alanları",
  "Konser alanı ve sahne çevresi",
  "Dekor ve marka deneyim noktaları",
  "Karşılama ve yönlendirme alanları",
  "Bariyerleme ve ziyaretçi akışı",
  "Podyum, zemin ve platform uygulamaları",
  "Açık alan festival saha operasyonu",
];

const SECTION_DATA = [
  {
    eyebrow: "Alan Kurgusu",
    title: "Dome Çadır ve Festival Alanı Kurgusu",
    icon: Tent,
    copy: [
      "DicleFest Şanlıurfa’da dome çadır, festivalin hem görsel hem de işlevsel merkezlerinden biri olarak ele alındı. Açık meydan koşullarında çadırların doğru konumlandırılması; ziyaretçi akışını, marka görünürlüğünü, etkinlik deneyimini ve teknik erişimi doğrudan etkiler.",
      "Bu nedenle dome çadır ve etkinlik çadırları, festival alanının genel dolaşım planı içinde değerlendirildi. Ziyaretçilerin alana girişinden etkinlik noktalarına yönlenmesine kadar tüm hareket kurgusu; çadırlar, bariyerleme, dekor alanları ve aktivite bölümleriyle birlikte planlandı.",
    ],
    images: [IMAGES.domeGeneral, IMAGES.domeSquare, IMAGES.domeExterior],
  },
  {
    eyebrow: "Katılımcı Deneyimi",
    title: "Oyun ve Deneyim Alanları",
    icon: Gamepad2,
    copy: [
      "DicleFest’in yalnızca izlenen bir etkinlik değil, ziyaretçilerin aktif olarak dahil olduğu bir festival deneyimi sunması hedeflendi. Bu kapsamda oyun alanları, gençlik aktiviteleri, masa tenisi ve langırt gibi etkileşimli bölümler festival sahasına yerleştirildi.",
      "Oyun alanlarının konumlandırılmasında kalabalık yoğunluğu, güvenli geçiş mesafeleri, bekleme noktaları ve ailelerin rahat hareket edebilmesi dikkate alındı. Böylece festival alanı, farklı yaş gruplarına aynı anda hitap eden canlı bir deneyim alanına dönüştü.",
    ],
    images: [IMAGES.tableTennis, IMAGES.foosball, IMAGES.youthArea, IMAGES.tableTennisWide],
  },
  {
    eyebrow: "Sahne Operasyonu",
    title: "Konser Alanı ve Sahne Operasyonu",
    icon: Music2,
    copy: [
      "Festivalin konser alanı, izleyici yoğunluğu ve teknik operasyon ihtiyaçları göz önünde bulundurularak kurgulandı. Sahne yerleşimi, bariyerleme, izleyici yönlendirmesi ve teknik erişim noktaları aynı plan içinde değerlendirildi.",
      "Açık alan konserlerinde sahnenin konumu yalnızca görünürlük açısından değil, güvenlik, ses yayılımı, ekipman erişimi ve kalabalık yönetimi açısından da belirleyicidir. DicleFest Şanlıurfa’da konser alanı, festivalin ana buluşma noktalarından biri olacak şekilde planlandı.",
    ],
    images: [IMAGES.concertSetup, IMAGES.stageBarrier, IMAGES.concertAtmosphere, IMAGES.ledStage],
  },
  {
    eyebrow: "Marka Deneyimi",
    title: "Dekor, Marka Alanları ve Ziyaretçi Akışı",
    icon: UsersRound,
    copy: [
      "DicleFest Şanlıurfa’da dekor uygulamaları ve marka deneyim noktaları, festivalin genel görsel bütünlüğünü destekleyecek şekilde sahaya yerleştirildi. Fotoğraf alanları, karşılama noktaları, çadır içi stantlar ve deneyim alanları ziyaretçilerin festival içinde doğal olarak temas kuracağı noktalara konumlandırıldı.",
      "Bu yaklaşım, etkinlik alanının yalnızca teknik olarak çalışmasını değil, aynı zamanda marka algısını güçlendiren düzenli ve paylaşılabilir bir festival atmosferi oluşturmasını sağladı.",
    ],
    images: [IMAGES.photoDecor, IMAGES.brandPoint, IMAGES.decorApps, IMAGES.welcomeDesk, IMAGES.techStand],
  },
  {
    eyebrow: "Saha Yönetimi",
    title: "Açık Alan Festival Yönetimi",
    icon: ShieldCheck,
    copy: [
      "Açık alan festivallerinde başarı, tek tek ekipmanların kurulmasından çok daha fazlasını gerektirir. Çadırların konumu, oyun alanlarının dağılımı, sahne yerleşimi, bariyerleme, dekor noktaları, ziyaretçi geçişleri ve teknik operasyon alanları birbirini doğrudan etkiler.",
      "DicleFest Şanlıurfa projesinde tüm bu başlıklar aynı saha planı içinde ele alındı. Sahneva’nın bu projedeki rolü; dome çadır, etkinlik çadırları, konser alanı, oyun alanları ve dekor uygulamalarını birbirinden kopuk unsurlar olarak değil, tek bir festival deneyiminin parçaları olarak yönetmek oldu.",
    ],
    images: [
      IMAGES.openArea,
      IMAGES.topcuSquare,
      IMAGES.tentExperience,
      IMAGES.indoorStand,
      IMAGES.tentInterior,
      IMAGES.participantTent,
    ],
  },
];

const INSTALLATION_IMAGES = [
  IMAGES.domeBuild,
  IMAGES.podiumFloor,
  IMAGES.platformFloor,
  IMAGES.platformDetail,
];

const GALLERY_IMAGES = [
  IMAGES.domeGeneral,
  IMAGES.openArea,
  IMAGES.concertSetup,
  IMAGES.tableTennis,
  IMAGES.foosball,
  IMAGES.photoDecor,
  IMAGES.tentExperience,
  IMAGES.techStand,
  IMAGES.youthArea,
  IMAGES.stageBarrier,
  IMAGES.domeExterior,
  IMAGES.welcomeDesk,
  IMAGES.trussGame,
  IMAGES.gamePortrait,
  IMAGES.domeDistance,
  IMAGES.tentActivityDetail,
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

export default function DicleFestSanliurfaProjectPage() {
  const jsonLd = buildJsonLd();

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <JsonLd data={jsonLd} />
      <SiteBackground />

      <section className="relative px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Breadcrumb />
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-blue-100">
              Referans Proje / Açık Alan Festival
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              {TITLE}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Şanlıurfa Topçu Meydanı’nda düzenlenen DicleFest kapsamında dome çadırlar, etkinlik
              çadırları, oyun alanları, konser alanı, dekor uygulamaları ve genel festival saha
              operasyonu <Link href="/" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">Sahneva</Link>{" "}
              koordinasyonunda yönetildi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+DicleFest+%C5%9Eanl%C4%B1urfa+benzeri+a%C3%A7%C4%B1k+alan+festival+kurulumu+i%C3%A7in+teklif+almak+istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Projeniz İçin Teklif Al
                <ArrowRight className="h-4 w-4" />
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
            <div className="relative aspect-[16/10]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent" />
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
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100/80">{label}</p>
              <p className="mt-2 text-base font-bold leading-snug text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="diclefest-ozet">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <SectionEyebrow>Proje Hikayesi</SectionEyebrow>
            <h2 id="diclefest-ozet" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Enerji, teknoloji, eğlence ve konser deneyimi aynı meydan planında buluştu.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                Dicle Elektrik tarafından hayata geçirilen DicleFest’in Şanlıurfa ayağında, Sahneva
                açık alan festival kurulumu ve saha uygulama yönetimi tarafında görev aldı.
                DicleFest Şanlıurfa, enerji, teknoloji, eğlence ve konser deneyimini aynı açık alanda
                buluşturan geniş kapsamlı bir festival projesi olarak Topçu Meydanı’nda gerçekleştirildi.
              </p>
              <p>
                14–17 Mayıs 2026 tarihleri arasında düzenlenen festival; planetaryum deneyimi,
                teknoloji tanıtım alanları, çocuklara ve gençlere yönelik oyun ve aktivite bölümleri,
                proje sergileri ve konser programıyla çok katmanlı bir etkinlik yapısına sahipti.
                Bu ölçekte bir meydan organizasyonunda yalnızca sahne kurmak ya da çadır yerleştirmek
                yeterli değildir; ziyaretçi akışı, alan güvenliği, teknik altyapı, marka deneyimi,
                dekor uygulamaları ve operasyon yönetimi birlikte planlanmalıdır.
              </p>
              <p>
                Sahneva olarak DicleFest Şanlıurfa projesinde dome çadırlar, etkinlik çadırları,
                oyun alanları, konser alanı, dekor uygulamaları ve genel festival saha kurgusunu
                bütüncül bir{" "}
                <Link href="/kurumsal-organizasyon" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                  kurumsal organizasyon
                </Link>{" "}
                yönetimi anlayışıyla ele aldık. Dome çadır, festivalin en dikkat çeken yapısal
                öğelerinden biri olarak konumlandırılırken; oyun alanları, etkinlik çadırları,
                sergi ve deneyim noktaları, konser alanı ve marka dekorları aynı saha dili içinde
                birleştirildi.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8">
            <h2 className="text-2xl font-black tracking-tight text-white">Proje Kapsamı</h2>
            <ul className="mt-6 grid gap-3">
              {PROJECT_SCOPE.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-[#0B1120]/55 px-4 py-3 text-sm font-semibold text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-200" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {SECTION_DATA.map((section, index) => (
        <CaseSection key={section.title} section={section} flip={index % 2 === 1} />
      ))}

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="kurulumdan-festivale">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <SectionEyebrow>Kurulum Süreci</SectionEyebrow>
            <h2 id="kurulumdan-festivale" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Kurulumdan Festival Deneyimine
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
              DicleFest Şanlıurfa’nın sahaya uygulanma sürecinde zemin hazırlığı, platform
              uygulamaları, dome çadır kurulumu, etkinlik çadırlarının yerleşimi ve festival alanındaki
              geçiş düzenleri adım adım planlandı. Açık alan etkinliklerinde kurulum süreci, etkinlik
              günü deneyiminin temelini oluşturur. Bu nedenle saha hazırlığı yalnızca hızlı kurulum
              hedefiyle değil, güvenli kullanım, düzenli akış ve güçlü görsel sonuç hedefiyle yürütüldü.
              Bu süreçte{" "}
              <Link href="/podyum-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                podyum ve zemin uygulamaları
              </Link>{" "}
              saha planının önemli parçalarından biri oldu.
            </p>
          </div>
          <MediaGrid images={INSTALLATION_IMAGES} featured />
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="etkinlik-bilgisi">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-300/20 bg-blue-400/[0.08] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <SectionEyebrow>Etkinlik Bilgisi</SectionEyebrow>
              <h2 id="etkinlik-bilgisi" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                DicleFest Şanlıurfa resmi etkinlik bağlamı
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                DicleFest Şanlıurfa, 14–17 Mayıs 2026 tarihleri arasında Şanlıurfa Topçu
                Meydanı’nda düzenlenen; teknoloji alanları, planetaryum, oyun ve aktivite bölümleri
                ile konserleri kapsayan açık alan festivalidir. Sahneva bu projede dome çadırlar,
                etkinlik çadırları, oyun alanları, konser alanı, dekor uygulamaları ve saha operasyonu
                tarafında görev almıştır.
              </p>
              <a
                href={DICLEFEST_SOURCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-200/25 bg-white/10 px-5 py-3 text-sm font-black text-blue-100 transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                DicleFest resmi etkinlik bilgileri
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="baglantili-hizmetler">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionEyebrow>Bağlantılı Teknik Hizmetler</SectionEyebrow>
              <h2 id="baglantili-hizmetler" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Festival teknik altyapısı tek plan altında ele alındı.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                Açık alan festival operasyonunda{" "}
                <Link href="/sahne-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                  sahne kurulumu
                </Link>
                ,{" "}
                <Link href="/led-ekran-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                  LED ekran çözümleri
                </Link>
                ,{" "}
                <Link href="/ses-isik-sistemleri" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                  ses ve ışık sistemleri
                </Link>
                ,{" "}
                <Link href="/truss-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                  truss sistemleri
                </Link>
                ,{" "}
                <Link href="/cadir-kiralama" className="font-bold text-blue-200 underline decoration-blue-300/40 underline-offset-4">
                  etkinlik çadırı ve dome çadır çözümleri
                </Link>{" "}
                ve ziyaretçi yönlendirme başlıkları birbirinden bağımsız değil, aynı saha akışının
                parçalarıdır.
              </p>
              <p>
                Bu nedenle DicleFest Şanlıurfa kapsamında festival teknik altyapısı, oyun alanı
                kurulumu, etkinlik çadırı kurulumu ve konser alanı kurulumu tek saha operasyonu
                içinde değerlendirildi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="diclefest-galeri">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Galeri</SectionEyebrow>
              <h2 id="diclefest-galeri" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                DicleFest Şanlıurfa saha uygulamasından seçili kareler
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              Galeri; dome çadır, açık alan yerleşimi, konser alanı, oyun alanları, dekor uygulamaları
              ve çadır içi deneyim noktalarını aynı proje akışı içinde gösterir.
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
            Açık Alan Festivaliniz İçin Uçtan Uca Saha Yönetimi
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Sahneva, açık alan festivalleri, kurumsal etkinlikler, konserler, lansmanlar ve marka
            deneyim projelerinde sahne, çadır, podyum, LED ekran, ses-ışık, truss, dekor ve saha
            operasyonunu tek plan altında yönetir. Etkinlik alanınızın ölçeğine, lokasyonuna ve
            ziyaretçi yoğunluğuna göre güvenli, düzenli ve güçlü bir saha kurgusu oluşturur.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+a%C3%A7%C4%B1k+alan+festival+saha+y%C3%B6netimi+i%C3%A7in+teklif+almak+istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Teklif Al
              <ArrowRight className="h-4 w-4" />
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
    </main>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-300">
      <Link href="/" className="hover:text-white">Ana Sayfa</Link>
      <span aria-hidden="true">/</span>
      <Link href="/projeler" className="hover:text-white">Projeler</Link>
      <span aria-hidden="true">/</span>
      <span className="text-white">DicleFest Şanlıurfa</span>
    </nav>
  );
}

function CaseSection({ section, flip = false }) {
  const Icon = section.icon;

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby={slugify(section.title)}>
      <div className={`mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start ${flip ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div>
          <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
          <div className="mt-3 flex items-start gap-4">
            <span className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-blue-100">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 id={slugify(section.title)} className="text-3xl font-black tracking-tight md:text-4xl">
              {section.title}
            </h2>
          </div>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
            {section.copy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <MediaGrid images={section.images} featured={section.images.length <= 3} compact />
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_85%_30%,rgba(14,165,233,0.1),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.2),#0B1120_92%)]" />
      <div className="absolute inset-0 grid-overlay opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0B1120] to-transparent" />
    </div>
  );
}

function buildJsonLd() {
  const imageObjects = Object.values(IMAGES).map((image, index) => ({
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
        name: TITLE,
        headline: TITLE,
        description: OG_DESCRIPTION,
        url: PAGE_URL,
        image: GALLERY_IMAGES.map((image) => `${SITE_URL}${image.src}`),
        provider: { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        temporalCoverage: "2026-05-14/2026-05-17",
        locationCreated: {
          "@type": "Place",
          name: "Şanlıurfa Topçu Meydanı",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Şanlıurfa",
            addressCountry: "TR",
          },
        },
        inLanguage: "tr-TR",
        about: [
          "DicleFest Şanlıurfa",
          "açık alan festival kurulumu",
          "dome çadır kurulumu",
          "oyun alanları",
          "konser alanı",
          "festival saha yönetimi",
          "kurumsal organizasyon",
        ],
        citation: DICLEFEST_SOURCE_URL,
      },
      {
        "@type": "Event",
        "@id": `${PAGE_URL}#event-context`,
        name: "DicleFest Şanlıurfa",
        startDate: "2026-05-14",
        endDate: "2026-05-17",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Şanlıurfa Topçu Meydanı",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Şanlıurfa",
            addressCountry: "TR",
          },
        },
        description:
          "DicleFest Şanlıurfa; teknoloji alanları, planetaryum, oyun ve aktivite bölümleri ile konserleri kapsayan açık alan festivalidir.",
        url: DICLEFEST_SOURCE_URL,
        provider: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE_URL}/projeler` },
          { "@type": "ListItem", position: 3, name: "DicleFest Şanlıurfa", item: PAGE_URL },
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
