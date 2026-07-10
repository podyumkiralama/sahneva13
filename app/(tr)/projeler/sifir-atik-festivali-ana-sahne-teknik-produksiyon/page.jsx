import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Construction,
  Gauge,
  Layers3,
  Lightbulb,
  MonitorPlay,
  Music2,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import LazyVideoEmbed from "@/components/LazyVideoEmbed.client";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/projeler/sifir-atik-festivali-ana-sahne-teknik-produksiyon";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const IMAGE_BASE = "/img/projeler/sifir-atik-festivali";
const VIDEO_THUMBNAIL_URL = "https://img.youtube.com/vi/z4DqZERYXkM/maxresdefault.jpg";

const PROJECT_NAME = "Sıfır Atık Festivali Ana Sahne Teknik Prodüksiyonu";
const META_DESCRIPTION =
  "Sıfır Atık Festivali ana sahnesinde LED ekran, ses, ışık, truss ve podyum kurulumuyla teknik prodüksiyon Sahneva tarafından sahada yönetildi.";
const PUBLISHED_AT = "2026-06-04T12:00:00+03:00";
const MODIFIED_AT = "2026-06-04T12:00:00+03:00";
const PROJECT_VIDEO = {
  id: "z4DqZERYXkM",
  name: "Sıfır Atık Festivali Ana Sahne Gerçek Saha Operasyonu Videosu",
  title: "Ana Sahne Gerçek Saha Operasyonu Videosu",
  eyebrow: "Gerçek Etkinlik Görüntüsü",
  description:
    "Bu video, Sıfır Atık Festivali ana sahne teknik prodüksiyonunun gerçek etkinlik anındaki saha operasyonunu gösterir. Ana sahne, dev LED ekranlar, line array ses sistemi, sahne ışıkları, truss/scaffold taşıyıcı yapı, podyum, backstage reji, patch ve enerji/sinyal altyapısı Sahneva operasyon planı içinde sahada yönetildi.",
  caption:
    "Sıfır Atık Festivali ana sahnesinde canlı performans sırasında sahne, LED ekran, ses, ışık, truss/scaffold, podyum ve backstage teknik altyapının sahadaki kullanımını gösteren gerçek operasyon görüntüsü.",
  schemaDescription:
    "Sıfır Atık Festivali ana sahnesinde canlı performans sırasında ana sahne, LED ekran, line array ses, ışık, truss/scaffold, podyum, backstage reji, patch ve teknik altyapının gerçek etkinlik anındaki kullanımını gösteren Sahneva saha operasyonu videosu.",
  thumbnailUrl: VIDEO_THUMBNAIL_URL,
  uploadDate: "2026-06-05T00:00:00+03:00",
  embedUrl: "https://www.youtube.com/embed/z4DqZERYXkM",
  contentUrl: "https://www.youtube.com/watch?v=z4DqZERYXkM",
};

const IMAGES = {
  hero: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp`,
    width: 4000,
    height: 1848,
    alt: "Sıfır Atık Festivali ana sahne teknik prodüksiyonu, dev LED ekranlar ve açık hava festival sahnesi",
    title: "Ana Sahne Teknik Prodüksiyon Ölçeği",
    caption:
      "Ana sahne, dev LED ekranlar, truss taşıyıcı yapı ve performans alanı aynı teknik operasyon planı içinde yönetildi.",
  },
  wideStage: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-ana-sahne-led-ekran-genis-plan.webp`,
    width: 4000,
    height: 1848,
    alt: "Sıfır Atık Festivali ana sahne geniş açı LED ekran ve seyirci alanı kurulumu",
    title: "Proje Ölçeği ve Ana Sahne Yerleşimi",
    caption:
      "Geniş izleyici alanı, ana LED ekran, yan LED ekranlar ve sahne görüş aksı açık hava festival ölçeğine göre planlandı.",
  },
  craneSetup: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-vinc-destekli-sahne-kurulumu.webp`,
    width: 4000,
    height: 1848,
    alt: "Sıfır Atık Festivali vinç destekli ana sahne ve LED ekran kurulum operasyonu",
    title: "Vinç Destekli Kurulum Operasyonu",
    caption:
      "Taşıyıcı sistem, sahne üst yapısı ve LED yüzeylerin montajında vinç destekli saha operasyonu yürütüldü.",
  },
  stageInside: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-sahne-ici-podyum-truss-kurulumu.webp`,
    width: 4000,
    height: 1848,
    alt: "Sıfır Atık Festivali sahne içi podyum, truss ve LED ekran kurulum düzeni",
    title: "Sahne İçi Podyum ve Truss Düzeni",
    caption:
      "Sahne içi çalışma alanı, podyum yüzeyi, truss hatları ve teknik erişim koridorları kurulum öncesi düzenlendi.",
  },
  podiumFloor: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-podyum-sahne-zemin-detayi.webp`,
    width: 1848,
    height: 4000,
    alt: "Sıfır Atık Festivali podyum sahne zemini ve performans alanı detay kurulumu",
    title: "Podyum ve Performans Zemini",
    caption:
      "Sahne zemini, performans alanı ve yan geçişler güvenli yük taşıma ve sahne içi akış dikkate alınarak hazırlandı.",
  },
  lineArray: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-line-array-ses-sistemi-detayi.webp`,
    width: 1848,
    height: 4000,
    alt: "Sıfır Atık Festivali line array ses sistemi ve sahne yan teknik kurulum detayı",
    title: "Line Array Ses Sistemi",
    caption:
      "Açık hava festival alanına uygun line array yerleşimi, sahne önü dolgu ve performans ihtiyaçlarıyla birlikte ele alındı.",
  },
  rackWide: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-backstage-ses-rack-altyapisi.webp`,
    width: 1848,
    height: 4000,
    alt: "Sıfır Atık Festivali backstage ses rack altyapısı ve teknik bağlantı düzeni",
    title: "Backstage Ses Rack Altyapısı",
    caption:
      "Backstage rack düzeni; ses, enerji ve teknik bağlantıların kontrollü şekilde yönetilmesi için yapılandırıldı.",
  },
  ledClose: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-dev-led-ekran-goruntu-sistemi.webp`,
    width: 4000,
    height: 1848,
    alt: "Sıfır Atık Festivali dev ana LED ekran görüntü sistemi ve sahne içerik akışı",
    title: "Dev LED Ekran ve Görüntü Sistemi",
    caption:
      "Ana LED ekran ve yan ekranlar; sponsor görünürlüğü, sahne içeriği ve geniş izleyici alanına yönelik görsel iletişim için konumlandırıldı.",
  },
  patch: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-backstage-patch-sinyal-dagitimi.webp`,
    width: 1848,
    height: 4000,
    alt: "Sıfır Atık Festivali backstage patch, kablolama ve sinyal dağıtımı teknik çalışması",
    title: "Patch ve Sinyal Dağıtımı",
    caption:
      "Patch bağlantıları, data/sinyal hatları ve kablo güzergahları backstage operasyon düzenine göre ayrıştırıldı.",
  },
  rackClose: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-teknik-rack-enerji-sinyal-altyapisi.webp`,
    width: 1848,
    height: 4000,
    alt: "Sıfır Atık Festivali teknik rack, enerji ve sinyal altyapısı yakın plan bağlantıları",
    title: "Teknik Rack, Enerji ve Sinyal Altyapısı",
    caption:
      "Enerji, ses ve görüntü sinyali; rack yapısı içinde ayrıştırılarak etkinlik akışı öncesinde kontrol edildi.",
  },
  rehearsal: {
    src: `${IMAGE_BASE}/sifir-atik-festivali-sahne-ici-teknik-kontrol.webp`,
    width: 4000,
    height: 1848,
    alt: "Sıfır Atık Festivali sahne içi teknik kontrol ve canlı performans akışı",
    title: "Sahne İçi Teknik Kontrol",
    caption:
      "Canlı performans akışında LED görüntü, sahne yönetimi, ses bağlantıları ve performans alanı birlikte takip edildi.",
  },
};

const HERO_STATS = [
  { value: "Ana Sahne", label: "Festival ölçeğinde üst yapı" },
  { value: "LED + Ses", label: "Görüntü ve line array altyapısı" },
  { value: "Reji & Patch", label: "Backstage teknik kontrol" },
  { value: "Vinçli Kurulum", label: "Saha montaj operasyonu" },
];

const PROJECT_SCOPE = [
  "Büyük ölçekli açık hava ana sahne kurulumu",
  "Dev ana LED ekran ve sağ-sol yan LED ekranlar",
  "Line array ses sistemi ve sahne önü destekleri",
  "Sahne ışık rigleri, truss ve scaffold taşıyıcı yapı",
  "Backstage reji, patch ve sinyal dağıtımı",
  "Vinç destekli kurulum ve saha ekip koordinasyonu",
  "Podyum, yan platform ve sahne zemin çözümleri",
  "Etkinlik boyunca teknik ekip desteği",
];

const TECHNICAL_PROOF = [
  {
    title: "Proje Ölçeği",
    label: "Ana sahne geniş açı",
    image: IMAGES.wideStage,
    text:
      "Geniş izleyici alanına bakan ana sahne; LED ekran yüzeyleri, performans alanı, bariyer aksı ve teknik erişim noktalarıyla birlikte planlandı.",
  },
  {
    title: "Görüntü Sistemi",
    label: "LED ekran yakın plan",
    image: IMAGES.ledClose,
    text:
      "Ana LED ekran; sahne içeriği, sponsor iletişimi ve canlı içerik akışının geniş festival alanında okunabilir kalması için merkezde konumlandırıldı.",
  },
  {
    title: "Backstage Altyapı",
    label: "Ses rack ve patch",
    image: IMAGES.patch,
    text:
      "Backstage bölümünde patch, data/sinyal, ses ve enerji hatları ayrıştırılarak reji masasının sahneyle kontrollü haberleşmesi sağlandı.",
  },
  {
    title: "Saha Operasyonu",
    label: "Vinç destekli montaj",
    image: IMAGES.craneSetup,
    text:
      "Truss, scaffold ve LED taşıyıcı yüzeylerin montajında vinç destekli saha operasyonu yürütülerek ağır ekipman yerleşimi planlı şekilde tamamlandı.",
  },
  {
    title: "Performans Alanı",
    label: "Podyum ve sahne zemini",
    image: IMAGES.podiumFloor,
    text:
      "Podyum yüzeyi, yan platform geçişleri ve performans zemini; ekipman yerleşimi, sanatçı akışı ve sahne içi güvenli hareket için hazırlandı.",
  },
  {
    title: "Teknik Kontrol",
    label: "Sahne içi kontrol",
    image: IMAGES.rehearsal,
    text:
      "Etkinlik akışında LED içerik, ses bağlantıları, sahne ışıkları ve canlı performans düzeni birlikte kontrol edilerek saha operasyonu yönetildi.",
  },
];

const STORY_SECTIONS = [
  {
    eyebrow: "Proje Özeti",
    title: "Ana sahne teknik prodüksiyonu tek saha planında toplandı.",
    image: IMAGES.wideStage,
    paragraphs: [
      "Sıfır Atık Festivali; çevre bilinci, sürdürülebilir yaşam, geri dönüşüm ve toplumsal farkındalık temalarını bir araya getiren geniş katılımlı açık hava festival organizasyonudur. Bu ölçekteki organizasyonlarda ana sahne teknik altyapısı yalnızca konser ve konuşma akışı için değil, marka görünürlüğü, sponsor iletişimi, canlı içerik ve izleyici deneyimi için de kritik rol oynar.",
      "Sahneva bu projede yalnızca ekipman sağlayan bir firma olarak değil; ana sahne, LED ekran, ses, ışık, truss, scaffold, podyum, backstage reji, patch, enerji/sinyal dağıtımı ve vinç destekli kurulum sürecini sahada yöneten teknik çözüm ortağı olarak konumlandı.",
    ],
  },
  {
    eyebrow: "Ana Sahne Kurulumu",
    title: "Sahne üst yapısı, podyum ve performans alanı birlikte kurgulandı.",
    image: IMAGES.stageInside,
    links: [{ href: "/sahne-kiralama", label: "sahne kiralama" }],
    paragraphs: [
      "Ana sahne kurulumu; geniş açıklıklı sahne alanı, sahne podyumu, yan platformlar, sahne içi perdeleme ve güvenli ekipman yerleşimiyle birlikte yürütüldü. Performans alanının sahne trafiğini taşıyabilmesi için podyum yüzeyi, teknik geçişler ve ekipman konumları ayrı ayrı değerlendirildi.",
      "Sahne içinde kullanılan taşıyıcı yapı ve perdeleme düzeni, hem izleyiciye dönük güçlü bir festival görünümü oluşturdu hem de backstage teknik ekibin sahneye hızlı erişebilmesini sağladı.",
    ],
  },
  {
    eyebrow: "LED Ekran ve Görüntü Sistemi",
    title: "Ana LED ekran ve yan LED yüzeyler festival iletişiminin merkezine alındı.",
    image: IMAGES.ledClose,
    links: [
      { href: "/led-ekran-kiralama", label: "LED ekran kiralama" },
      { href: "/led-ekran-kiralama-fiyatlari", label: "LED ekran kiralama fiyatları" },
    ],
    paragraphs: [
      "Ana LED ekran ve sağ-sol yan LED ekranlar; sahnedeki konuşma, performans, sponsor içerikleri ve marka mesajlarının geniş açık hava alanında görünür kalması için planlandı. LED yüzeyler yalnızca dekoratif bir arka plan değil, festivalin canlı iletişim altyapısı olarak değerlendirildi.",
      "Görüntü sistemi tarafında içerik akışı, sahne arkasındaki kontrol düzeni ve ekran konumları birlikte ele alınarak izleyici alanının farklı noktalarından okunabilir bir sahne görünümü hedeflendi.",
    ],
  },
  {
    eyebrow: "Ses Sistemi ve Line Array",
    title: "Geniş alana uygun line array ses sistemi sahne akışına göre konumlandırıldı.",
    image: IMAGES.lineArray,
    links: [{ href: "/ses-isik-sistemleri", label: "ses ışık sistemleri" }],
    paragraphs: [
      "Festival alanının açık hava karakteri, izleyici yoğunluğu ve sahne içi performans ihtiyaçları dikkate alınarak line array ses sistemi kuruldu. Sahne önü dolgu, monitor ihtiyaçları, mikrofon altyapısı ve canlı performans bağlantıları ana sistemle birlikte değerlendirildi.",
      "Ses altyapısı yalnızca ana hoparlör yerleşiminden oluşmadı; backstage rack düzeni, kablo güzergahları ve reji bağlantılarıyla beraber çalışacak şekilde planlandı.",
    ],
  },
  {
    eyebrow: "Işık, Truss ve Scaffold",
    title: "Taşıyıcı sistem, ışık rigleri ve vinçli montaj saha güvenliğiyle birlikte yönetildi.",
    image: IMAGES.craneSetup,
    links: [{ href: "/truss-kiralama", label: "truss kiralama" }],
    paragraphs: [
      "Sahne üstü ışık rigleri, truss hatları, scaffold taşıyıcı sistem ve güvenli askı noktaları kurulum öncesinde yük planı üzerinden ele alındı. Vinç destekli montaj operasyonu, ağır sahne bileşenlerinin güvenli şekilde yerine alınmasını sağladı.",
      "Işık ve taşıyıcı sistem kurgusu, sahnenin hem gündüz görünürlüğünü hem de akşam etkinlik atmosferini destekleyecek biçimde ana prodüksiyon planına dahil edildi.",
    ],
  },
  {
    eyebrow: "Backstage Reji, Patch ve Sinyal Dağıtımı",
    title: "Reji, patch, enerji ve sinyal hatları sahne arkasında ayrıştırıldı.",
    image: IMAGES.rackClose,
    links: [],
    paragraphs: [
      "Backstage teknik altyapıda ses rackleri, patch bağlantıları, data/sinyal hatları ve enerji dağıtım noktaları düzenli bir operasyon akışıyla yapılandırıldı. Bu bölüm, festival sahnesinin görünmeyen ama sahne akışını taşıyan teknik omurgası olarak çalıştı.",
      "Kablo yönetimi, rack yerleşimi ve sinyal ayrımı sayesinde reji ekibi; LED ekran, ses, ışık ve sahne içi bağlantıları aynı kontrol düzeni içinde takip edebildi.",
    ],
  },
  {
    eyebrow: "Podyum ve Sahne Zemin Çözümleri",
    title: "Performans zemini, yan geçişler ve ekipman yükleri için hazırlandı.",
    image: IMAGES.podiumFloor,
    links: [{ href: "/podyum-kiralama", label: "podyum kiralama" }],
    paragraphs: [
      "Sahne podyumu, yan platformlar ve performans alanı; güvenli yük taşıma, sahne içi hareket ve ekipman konumlandırma ihtiyaçlarına göre ele alındı. Siyah sahne görünümü, festival konsepti ve LED ekran yüzeyleriyle bütünlüklü bir sahne algısı oluşturdu.",
      "Podyum ve zemin uygulaması, yalnızca yükseltilmiş bir platform değil; ses, ışık, görüntü ve performans trafiğini taşıyan teknik sahne altyapısının parçası olarak planlandı.",
    ],
  },
  {
    eyebrow: "Kurulum Süreci ve Saha Operasyonu",
    title: "Montajdan etkinlik gününe kadar tüm teknik akış sahada koordine edildi.",
    image: IMAGES.rehearsal,
    links: [],
    paragraphs: [
      "Kurulum sürecinde vinç destekli montaj, ekipman yerleşimi, LED hizalama, ses-ışık kontrolleri, enerji kontrolleri ve sahne akışı adım adım yürütüldü. Sahne içi teknik kontroller, performans, görüntü ve ses akışının birlikte çalışmasını sağladı.",
      "Sahneva operasyon ekibi, festival boyunca teknik destek vererek ana sahne prodüksiyonunun görünür sahne deneyimi ile backstage altyapı düzenini aynı disiplin içinde yönetti.",
    ],
  },
];

const RELATED_SERVICES = [
  { href: "/sahne-kiralama", title: "Sahne Kiralama", desc: "Ana sahne, yan platform ve açık hava performans alanı kurulumları." },
  { href: "/led-ekran-kiralama", title: "LED Ekran Kiralama", desc: "Ana LED ekran, yan ekran ve sahne görüntü altyapısı çözümleri." },
  { href: "/led-ekran-kiralama-fiyatlari", title: "LED Ekran Kiralama Fiyatları", desc: "m², panel tipi, reji ve kurulum kapsamına göre bütçe rehberi." },
  { href: "/ses-isik-sistemleri", title: "Ses Işık Sistemleri", desc: "Line array ses, sahne ışık ve teknik reji planlaması." },
  { href: "/truss-kiralama", title: "Truss Kiralama", desc: "Sahne üst yapısı, askı noktaları ve taşıyıcı sistem çözümleri." },
  { href: "/podyum-kiralama", title: "Podyum Kiralama", desc: "Performans zemini, yan platform ve modüler podyum kurulumları." },
];

const FAQ_ITEMS = [
  {
    q: "Festival ana sahne kurulumu kaç günde tamamlanır?",
    a: "Kurulum süresi sahne ölçüsü, LED ekran alanı, truss/scaffold yapısı, ses-ışık kapsamı ve saha erişimine göre belirlenir. Büyük ölçekli açık hava projelerinde montaj, teknik kontrol ve etkinlik günü saha operasyonu birlikte planlanır.",
  },
  {
    q: "Açık hava festivalinde LED ekran neden önemlidir?",
    a: "LED ekran; sponsor içerikleri, sahne konuşmaları, canlı görüntü, marka mesajı ve performans akışını geniş izleyici alanında görünür hale getirir. Ana sahne iletişiminin merkezinde yer alır.",
  },
  {
    q: "Sahne, LED ekran, ses ve ışık tek firma tarafından kurulabilir mi?",
    a: "Evet. Sahneva, ana sahne, LED ekran, ses sistemi, ışık, truss, podyum, backstage reji ve saha operasyonunu tek teknik plan altında koordine edebilir.",
  },
  {
    q: "Line array ses sistemi hangi etkinliklerde kullanılır?",
    a: "Line array ses sistemleri konser, festival, meydan etkinliği, belediye organizasyonu ve geniş katılımlı açık hava projelerinde dengeli ses dağılımı için tercih edilir.",
  },
  {
    q: "Truss ve scaffold sistemleri sahnede neden kullanılır?",
    a: "Truss ve scaffold sistemleri; LED ekran, ışık, perdeleme, ses ekipmanı ve sahne üst yapısını güvenli taşıma amacıyla kullanılır. Yük planı, askı noktaları ve montaj sırası projeye göre hazırlanır.",
  },
  {
    q: "Backstage reji ve patch altyapısı ne işe yarar?",
    a: "Backstage reji ve patch altyapısı; ses, görüntü, ışık, data ve enerji hatlarının sahne arkasında kontrollü şekilde yönetilmesini sağlar. Bu yapı, canlı etkinlik akışının teknik kontrol merkezidir.",
  },
  {
    q: "Sahne kurulumunda vinç kullanımı ne zaman gerekir?",
    a: "Vinç kullanımı; ağır truss parçaları, scaffold taşıyıcı yapı, büyük LED ekran yüzeyleri veya yüksek sahne üst yapılarının güvenli şekilde konumlandırılması gereken projelerde planlanır.",
  },
  {
    q: "Sahneva büyük ölçekli festival projelerinde teknik ekip sağlar mı?",
    a: "Evet. Sahneva, büyük ölçekli festival ve açık hava ana sahne projelerinde kurulum, teknik kontrol, etkinlik günü saha desteği ve söküm süreçleri için saha ekibi sağlar.",
  },
];

export const metadata = {
  title: "Sıfır Atık Festivali Ana Sahne Teknik Prodüksiyonu",
  description: META_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "Sıfır Atık Festivali Ana Sahne Teknik Prodüksiyonu | Sahneva",
    description: META_DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${IMAGES.hero.src}`,
        width: 1200,
        height: 630,
        alt: IMAGES.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sıfır Atık Festivali Ana Sahne Teknik Prodüksiyonu | Sahneva",
    description: META_DESCRIPTION,
    images: [`${SITE_URL}${IMAGES.hero.src}`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function Eyebrow({ children }) {
  return (
    <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
      {children}
    </p>
  );
}

function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(37,99,235,0.18),transparent_34%),linear-gradient(180deg,#0B1120_0%,#020617_100%)]" />
      <div className="absolute inset-0 grid-overlay opacity-45" />
      <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#020617] to-transparent" />
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm !text-white/80">
      <Link href="/" className="transition hover:text-white">Ana Sayfa</Link>
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
      <Link href="/projeler" className="transition hover:text-white">Projeler</Link>
      <ChevronRight className="h-4 w-4" aria-hidden="true" />
      <span className="text-white">Sıfır Atık Festivali</span>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb />

        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-extrabold text-cyan-100 shadow-[0_18px_50px_rgba(8,145,178,0.22)]">
              <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
              Festival Ana Sahne Operasyonu
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
              Sıfır Atık Festivali Ana Sahne Teknik Prodüksiyonu
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed !text-white/90 sm:text-xl">
              Ana sahne, dev LED ekranlar, line array ses sistemi, ışık rigleri, truss/scaffold taşıyıcı yapı,
              podyum, backstage reji, patch ve enerji/sinyal dağıtımı tek saha operasyonu içinde yönetildi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+festival+ana+sahne+teknik+prod%C3%BCksiyonu+i%C3%A7in+teklif+almak+istiyorum."
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 font-black text-white shadow-[0_18px_48px_rgba(16,185,129,0.26)] transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                WhatsApp ile Teklif Al
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
              <Link
                href="/sahne-kiralama"
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-3 font-black text-white backdrop-blur transition hover:bg-white/[0.1] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
              >
                Sahne Çözümlerini İncele
              </Link>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <div className="relative aspect-[16/10]">
              <Image
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/72 via-transparent to-transparent" />
            </div>
            <figcaption className="border-t border-white/10 bg-slate-950/76 p-5 text-sm leading-relaxed !text-white/85">
              {IMAGES.hero.caption}
            </figcaption>
          </figure>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Proje teknik özetleri">
          {HERO_STATS.map((item) => (
            <li key={item.value} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-2xl font-black text-white">{item.value}</p>
              <p className="mt-2 text-sm font-semibold leading-relaxed !text-cyan-100/80">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, children }) {
  return (
    <header className="mx-auto max-w-4xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-lg leading-relaxed !text-white/85">{children}</p> : null}
    </header>
  );
}

function ImageCard({ image, priority = false }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
      <div className={`relative ${image.height > image.width ? "aspect-[4/5]" : "aspect-[16/9]"}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 48vw"
          priority={priority}
          className="object-cover"
        />
      </div>
      <figcaption className="border-t border-white/10 bg-slate-950/72 p-4 text-sm leading-relaxed !text-white/85">
        <span className="block font-black text-cyan-100">{image.title}</span>
        <span className="mt-1 block">{image.caption}</span>
      </figcaption>
    </figure>
  );
}

function InlineLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-100 transition hover:bg-cyan-300/16"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

function StorySection({ section, index }) {
  const isReverse = index % 2 === 1;

  return (
    <section className="relative px-4 py-14 sm:px-6 lg:px-8" aria-labelledby={`story-${index}`}>
      <div className={`mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center ${isReverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <Eyebrow>{section.eyebrow}</Eyebrow>
          <h2 id={`story-${index}`} className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
            {section.title}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed md:text-lg">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="!text-white/85">{paragraph}</p>
            ))}
          </div>
          <InlineLinks links={section.links} />
        </div>
        <ImageCard image={section.image} />
      </div>
    </section>
  );
}

function VideoSection() {
  const proofItems = [
    "Ana sahne ve dev LED ekran kullanımı",
    "Line array ses sistemi ve sahne ışıkları",
    "Truss/scaffold taşıyıcı yapı ve podyum",
    "Backstage reji, patch ve enerji/sinyal altyapısı",
  ];

  return (
    <section
      id="ana-sahne-gercek-saha-operasyonu-videosu"
      className="content-visibility-auto [contain-intrinsic-size:auto_980px] md:[contain-intrinsic-size:auto_760px] px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="ana-sahne-gercek-saha-operasyonu-title"
    >
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow>{PROJECT_VIDEO.eyebrow}</Eyebrow>
            <h2
              id="ana-sahne-gercek-saha-operasyonu-title"
              className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl"
            >
              {PROJECT_VIDEO.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed !text-white/85">{PROJECT_VIDEO.description}</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {proofItems.map((item) => (
                <li key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-4 py-3 text-sm font-black text-cyan-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <figure className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-3">
            <LazyVideoEmbed
              videoId={PROJECT_VIDEO.id}
              title={PROJECT_VIDEO.name}
              thumbnailUrl={PROJECT_VIDEO.thumbnailUrl}
              className="rounded-[1.25rem]"
            />
            <figcaption className="px-2 pt-4 text-sm leading-relaxed !text-white/80">
              {PROJECT_VIDEO.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function ScopeSection() {
  const icons = [MonitorPlay, Music2, Lightbulb, Layers3, SlidersHorizontal, Construction, ShieldCheck, Gauge];

  return (
    <section className="content-visibility-auto [contain-intrinsic-size:auto_1100px] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="one-cikanlar">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Bu Projede Öne Çıkanlar" title="Büyük ölçekli ana sahne operasyonunun teknik kapsamı">
          Sıfır Atık Festivali projesinde görünür sahne deneyimi ile backstage teknik altyapı aynı prodüksiyon disiplini içinde ele alındı.
        </SectionHeader>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECT_SCOPE.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <li key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <Icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
                <p className="mt-4 text-base font-black leading-snug text-white">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function TechnicalProofSection() {
  return (
    <section className="content-visibility-auto [contain-intrinsic-size:auto_2200px] lg:[contain-intrinsic-size:auto_1400px] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="teknik-kanit">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Teknik Kanıt Akışı" title="Her görsel operasyonun ayrı bir parçasını gösteriyor">
          Görseller yalnızca galeri olarak değil; proje ölçeği, görüntü sistemi, backstage altyapı, vinçli montaj, podyum zemini ve sahne içi kontrol için teknik kanıt olarak konumlandırıldı.
        </SectionHeader>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_PROOF.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
              <div className={`relative ${item.image.height > item.image.width ? "aspect-[4/5]" : "aspect-[16/10]"}`}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{item.label}</p>
                <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed !text-white/85">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedServicesSection() {
  return (
    <section className="content-visibility-auto [contain-intrinsic-size:auto_900px] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="ilgili-hizmetler">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="İlgili Hizmetler" title="Ana sahne prodüksiyonunu tamamlayan hizmetler">
          Festival sahnesi; sahne, LED ekran, ses, ışık, truss, podyum ve teknik reji başlıklarının birlikte planlandığı bir saha operasyonudur.
        </SectionHeader>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
            >
              <h3 className="text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed !text-white/80">{service.desc}</p>
              <span className="mt-5 inline-flex items-center text-sm font-black text-cyan-300">
                İncele
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="content-visibility-auto [contain-intrinsic-size:auto_1000px] px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="sss">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="SSS" title="Festival ana sahne prodüksiyonu hakkında sık sorulan sorular" />

        <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-lg font-black text-white">
                <span>{item.q}</span>
                <span className="mt-1 rounded-full border border-white/10 bg-white/10 p-1 text-cyan-200 transition group-open:rotate-45">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-relaxed !text-white/85">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="px-4 pb-20 pt-10 sm:px-6 lg:px-8" aria-labelledby="cta-title">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.18),rgba(37,99,235,0.12),rgba(2,6,23,0.92))] p-8 shadow-[0_28px_90px_rgba(8,145,178,0.18)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Eyebrow>Teknik Prodüksiyon Planı</Eyebrow>
            <h2 id="cta-title" className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Festival ana sahnenizi tek teknik operasyon planıyla hazırlayalım.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed !text-white/85">
              Sahne ölçüsü, LED ekran alanı, ses-ışık kapsamı, truss/scaffold taşıyıcı yapı, podyum ve şehir bilgisini paylaşın; kurulum planını sade bir teklif olarak hazırlayalım.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+a%C3%A7%C4%B1k+hava+festival+ana+sahne+teknik+prod%C3%BCksiyonu+i%C3%A7in+bilgi+almak+istiyorum."
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 font-black text-white transition hover:bg-emerald-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
            >
              WhatsApp Destek
            </a>
            <Link
              href="/kurumsal-organizasyon"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-white/15 bg-white/[0.08] px-6 py-3 font-black text-white transition hover:bg-white/[0.12] focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300"
            >
              Kurumsal Prodüksiyon
            </Link>
          </div>
        </div>
      </div>
    </section>
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

  const serviceNodes = RELATED_SERVICES.map((service, index) => ({
    "@type": "Service",
    "@id": `${PAGE_URL}#service-${index + 1}`,
    name: service.title,
    description: service.desc,
    url: `${SITE_URL}${service.href}`,
    provider: { "@id": `${SITE_URL}/#org` },
  }));

  const videoNode = {
    "@type": "VideoObject",
    "@id": `${PAGE_URL}#video`,
    name: PROJECT_VIDEO.name,
    description: PROJECT_VIDEO.schemaDescription,
    thumbnailUrl: PROJECT_VIDEO.thumbnailUrl,
    uploadDate: PROJECT_VIDEO.uploadDate,
    embedUrl: PROJECT_VIDEO.embedUrl,
    contentUrl: PROJECT_VIDEO.contentUrl,
    inLanguage: "tr-TR",
    publisher: { "@id": `${SITE_URL}/#org` },
    url: `${PAGE_URL}#ana-sahne-gercek-saha-operasyonu-videosu`,
  };

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
        name: PROJECT_NAME,
        description: META_DESCRIPTION,
        inLanguage: "tr-TR",
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        primaryImageOfPage: { "@id": `${PAGE_URL}#image-1` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#project` },
        hasPart: [
          { "@id": `${PAGE_URL}#faq` },
          { "@id": videoNode["@id"] },
          ...serviceNodes.map((node) => ({ "@id": node["@id"] })),
        ],
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": ["CreativeWork", "Project"],
        "@id": `${PAGE_URL}#project`,
        name: PROJECT_NAME,
        headline: PROJECT_NAME,
        description: META_DESCRIPTION,
        url: PAGE_URL,
        image: Object.values(IMAGES).map((image) => `${SITE_URL}${image.src}`),
        provider: { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        inLanguage: "tr-TR",
        subjectOf: { "@id": videoNode["@id"] },
        about: [
          "Sıfır Atık Festivali",
          "ana sahne teknik prodüksiyonu",
          "LED ekran kiralama",
          "line array ses sistemi",
          "truss ve scaffold taşıyıcı sistem",
          "backstage reji ve patch",
          "podyum kurulumu",
          "açık hava festival sahnesi",
        ],
        workExample: serviceNodes.map((node) => ({ "@id": node["@id"] })),
      },
      videoNode,
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE_URL}/projeler` },
          { "@type": "ListItem", position: 3, name: PROJECT_NAME, item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        inLanguage: "tr-TR",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      ...serviceNodes,
      ...imageObjects,
    ],
  };
}

export default function ZeroWasteFestivalProjectPage() {
  const jsonLd = buildJsonLd();

  return (
    <div className="zero-waste-project-page relative isolate min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <JsonLd data={jsonLd} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .zero-waste-project-page p {
              color: rgba(226, 232, 240, 0.92) !important;
            }

            .zero-waste-project-page p[class*="text-cyan"] {
              color: rgb(165, 243, 252) !important;
            }

            .zero-waste-project-page p[class*="text-white"] {
              color: rgba(255, 255, 255, 0.88) !important;
            }

            .zero-waste-project-page figcaption {
              color: rgba(226, 232, 240, 0.9) !important;
            }
          `,
        }}
      />
      <SiteBackground />
      <div className="relative z-10">
        <HeroSection />

        <section className="px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="kisa-bilgi">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <Eyebrow>Festival Bağlamı</Eyebrow>
                <h2 id="kisa-bilgi" className="mt-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                  Sürdürülebilirlik temasını taşıyan açık hava festival sahnesi
                </h2>
              </div>
              <div className="space-y-4 text-base leading-relaxed md:text-lg">
                <p className="!text-white/85">
                  Sıfır Atık Festivali; çevre bilinci, sürdürülebilir yaşam, geri dönüşüm ve toplumsal farkındalık temalarını bir araya getiren geniş katılımlı açık hava festival organizasyonudur.
                </p>
                <p className="!text-white/85">
                  Bu tür organizasyonlarda ana sahne teknik altyapısı; konser, konuşma akışı, sponsor görünürlüğü, canlı içerik ve izleyici deneyimini aynı anda taşıyan kritik bir prodüksiyon merkezidir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {STORY_SECTIONS.map((section, index) => (
          <StorySection key={section.title} section={section} index={index} />
        ))}

        <VideoSection />
        <ScopeSection />
        <TechnicalProofSection />
        <RelatedServicesSection />
        <FaqSection />
        <CtaSection />
      </div>
    </div>
  );
}
