import Link from "next/link";

import RegionalRentalClient from "./RegionalRentalClient";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import JsonLdScript from "@/components/seo/JsonLd";
import { REGIONAL_CITIES } from "@/lib/seo/regionalCities";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://www.sahneva.com";

const PAGE_PATH = "/bolgesel-kiralama";
const PAGE_URL = `${SITE}${PAGE_PATH}`;
const OG_IMAGE = `${SITE}/img/bolgesel-kiralama/hero.webp`;

export const metadata = {
  title: "Bölgesel Kiralama | Türkiye Geneli",
  description:
    "Türkiye genelinde LED ekran, truss, sahne/podyum ve ses-ışık kiralama. İstanbul, Ankara, İzmir ve Antalya için kurulum dahil planlama.",
  alternates: buildLanguageAlternates({
    tr: PAGE_PATH,
    en: "/en/regional-rental",
    xDefault: "/en/regional-rental",
  }),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Bölgesel Kiralama | Sahneva",
    description:
      "Türkiye genelinde etkinlik ekipmanı kiralama: LED ekran, truss, sahne/podyum, ses-ışık. Kurulum, operasyon ve söküm dahil.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sahneva Bölgesel Kiralama" }],
    siteName: "Sahneva",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bölgesel Kiralama | Sahneva",
    description:
      "Türkiye genelinde etkinlik ekipmanı kiralama. Şehrinizi seçin, hızlı teklif alın.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

function RegionalRentalJsonLd({ services, faqs, steps, regions }) {
  const orgId = `${SITE}/#org`;
  const webId = `${SITE}/#website`;
  const pageId = `${PAGE_URL}#webpage`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const catalogId = `${PAGE_URL}#offerCatalog`;
  const faqId = `${PAGE_URL}#faq`;
  const howtoId = `${PAGE_URL}#howto`;
  const serviceId = `${PAGE_URL}#service`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Sahneva Organizasyon",
        url: SITE,
        telephone: "+90 545 304 86 71",
        areaServed: { "@type": "Country", name: "Türkiye" },
      },
      {
        "@type": "WebSite",
        "@id": webId,
        url: SITE,
        name: "Sahneva Organizasyon",
        publisher: { "@id": orgId },
        inLanguage: "tr-TR",
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: PAGE_URL,
        name: "Bölgesel Kiralama",
        description:
          "Türkiye genelinde etkinlik ekipmanı kiralama: LED ekran, truss, sahne/podyum ve ses-ışık sistemleri. Kurulum, test ve söküm dahil.",
        isPartOf: { "@id": webId },
        about: { "@id": serviceId },
        inLanguage: "tr-TR",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
          { "@type": "ListItem", position: 2, name: "Bölgesel Kiralama", item: PAGE_URL },
        ],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Bölgesel Kiralama",
        serviceType: "Etkinlik ekipmanı kiralama, kurulum ve operasyon",
        provider: { "@id": orgId },
        areaServed: [
          { "@type": "Country", name: "Türkiye" },
          ...regions.map((region) => ({ "@type": "City", name: region.name })),
        ],
        hasOfferCatalog: { "@id": catalogId },
      },
      {
        "@type": "OfferCatalog",
        "@id": catalogId,
        name: "Bölgesel Kiralama Hizmetleri",
        itemListElement: services.map((service, idx) => ({
          "@type": "Offer",
          position: idx + 1,
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `${SITE}${service.href}`,
            areaServed: { "@type": "Country", name: "Türkiye" },
          },
        })),
      },
      {
        "@type": "HowTo",
        "@id": howtoId,
        name: "Bölgesel kiralama süreci nasıl ilerler?",
        description:
          "Brief, teklif, lojistik planlama, kurulum/test, etkinlik operasyonu ve söküm adımlarıyla uçtan uca süreç.",
        inLanguage: "tr-TR",
        step: steps.map((step, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: step.title,
          text: step.desc,
          url: `${PAGE_URL}#${step.id}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        inLanguage: "tr-TR",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

function CityDirectory() {
  return (
    <section
      aria-labelledby="tum-sehirler-baslik"
      className="relative bg-slate-950 px-4 pb-20 text-white"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
            81 il statik kiralama ağı
          </p>
          <h2 id="tum-sehirler-baslik" className="mt-3 text-2xl font-black md:text-3xl">
            Şehriniz için yerel kiralama planını açın
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/68">
            Her şehir sayfası build anında üretilir; şehir adı, yerel operasyon bağlamı
            ve City tabanlı areaServed schema sinyaliyle çalışır.
          </p>
        </div>

        <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {REGIONAL_CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/bolgesel-kiralama/${city.slug}`}
              prefetch={false}
              className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-bold text-white/82 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {city.name} kiralama
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const regions = [
    {
      name: "İstanbul",
      slug: "istanbul",
      desc: "Kurumsal etkinlik, fuar, konser ve lansmanlar.",
      focus:
        "Yüksek tempolu kurumsal takvim, fuar merkezi erişimi ve aynı gün prova ihtiyaçlarıyla öne çıkar.",
      planning:
        "Salon teslim saati, yükleme alanı ve run-of-show akışı ilk briefte netleşirse teklif çok daha sağlam çıkar.",
      services: ["/led-ekran-kiralama", "/podyum-kiralama", "/ses-isik-sistemleri"],
    },
    {
      name: "Ankara",
      slug: "ankara",
      desc: "Kongre, salon etkinliği, kamu ve kurum organizasyonları.",
      focus:
        "Kongre merkezleri ve kurumsal salonlarda protokol akışı ile sunum netliği genelde ana belirleyici olur.",
      planning:
        "Kürsü, delegasyon oturumu, ekran görünürlüğü ve mikrofon planı aynı teknik tabloda toplandığında operasyon rahatlar.",
      services: ["/podyum-kiralama", "/ses-isik-sistemleri", "/led-ekran-kiralama"],
    },
    {
      name: "İzmir",
      slug: "izmir",
      desc: "Açık hava sahne, festival ve sahil etkinlikleri.",
      focus:
        "Açık hava projelerinde rüzgar, zemin ve enerji planı genellikle ekipman listesinden daha kritik hale gelir.",
      planning:
        "Sahil ve festival alanlarında LED parlaklığı, truss güvenliği ve kablo güzergahını önden netleştiriyoruz.",
      services: ["/truss-kiralama", "/led-ekran-kiralama", "/ses-isik-sistemleri"],
    },
    {
      name: "Bursa",
      slug: "bursa",
      desc: "Fuar alanları, bayi toplantıları ve sahne kurulumları.",
      focus:
        "Fuar ve bayi toplantısı projelerinde hızlı kurulum-söküm penceresi ile marka sunumu aynı anda dengelenmeli.",
      planning:
        "Stand yakını ekran kullanımı, sahne akışı ve ses dağılımını mekan sirkülasyonuna göre kuruyoruz.",
      services: ["/led-ekran-kiralama", "/podyum-kiralama", "/masa-sandalye-kiralama"],
    },
    {
      name: "Antalya",
      slug: "antalya",
      desc: "Otel etkinlikleri, gala, kongre ve turizm organizasyonları.",
      focus:
        "Otel ve resort projelerinde salon dönüşümleri, gala temposu ve misafir deneyimi aynı plan içinde yönetilmeli.",
      planning:
        "Kongre salonundan gala kurulumuna geçişlerde sahne, dekoratif ışık ve ekran içeriğini tek ekipte toplamak süre kazandırır.",
      services: ["/ses-isik-sistemleri", "/led-ekran-kiralama", "/cadir-kiralama"],
    },
    {
      name: "Kocaeli",
      slug: "kocaeli",
      desc: "Fabrika etkinlikleri, lansman ve kurumsal kurulumlar.",
      focus:
        "Endüstriyel alanlarda elektrik, yükleme ve güvenlik prosedürleri etkinlik kurgusunun ana parçası olur.",
      planning:
        "Fabrika içi lansman ve kurumsal buluşmalarda zemin, kablo geçişi ve ses yayılımını saha kurallarına göre şekillendiriyoruz.",
      services: ["/truss-kiralama", "/podyum-kiralama", "/ses-isik-sistemleri"],
    },
    {
      name: "Sakarya",
      slug: "sakarya",
      desc: "Açık alan kurulumları, truss ve sahne projeleri.",
      focus:
        "Belediye etkinlikleri ve geniş açık alan projelerinde kurulum hızı ile saha güvenliği birlikte ele alınmalı.",
      planning:
        "Açık alan sahnelerinde yükseklik, bariyerleme, ses kapsaması ve seyir akışını ilk planda kuruyoruz.",
      services: ["/truss-kiralama", "/podyum-kiralama", "/ses-isik-sistemleri"],
    },
    {
      name: "Tekirdağ",
      slug: "tekirdag",
      desc: "Festival, sahne, ses-ışık ve LED ekran kurulumları.",
      focus:
        "Festival ve açık hava programlarında lojistik zamanlaması ile dayanımlı ekipman seçimi en kritik iki başlıktır.",
      planning:
        "LED ekran görünürlüğü, sahne yerleşimi ve ses-ışık senaryosunu rüzgar ve seyir mesafesine göre dengeliyoruz.",
      services: ["/led-ekran-kiralama", "/truss-kiralama", "/ses-isik-sistemleri"],
    },
  ];

  const services = [
    { title: "LED Ekran Kiralama", href: "/led-ekran-kiralama" },
    { title: "Truss Kiralama", href: "/truss-kiralama" },
    { title: "Sahne / Podyum Kiralama", href: "/podyum-kiralama" },
    { title: "Ses & Işık Sistemleri", href: "/ses-isik-sistemleri" },
    { title: "Çadır Kiralama", href: "/cadir-kiralama" },
    { title: "Masa & Sandalye Kiralama", href: "/masa-sandalye-kiralama" },
  ];

  const steps = [
    { id: "hizmetler", title: "Hizmetler", desc: "Kiralama kalemlerini seçin ve paketleyin." },
    { id: "surec", title: "Süreç", desc: "Brief → teklif → lojistik → kurulum/test → operasyon → söküm." },
    { id: "bolgeler", title: "Bölgeler", desc: "Şehre göre planlama ve takvim netleşir." },
    { id: "sehir-notlari", title: "Şehir notları", desc: "Öne çıkan şehirler için pratik planlama farkları." },
    { id: "planlama", title: "Planlama", desc: "Enerji, zemin, yükseklik, güvenlik ve erişim kontrol listesi." },
    { id: "sss", title: "FAQ", desc: "Bölgesel kiralama hakkında sık sorulanlar." },
  ];

  const faqs = [
    {
      q: "Bölgesel kiralama ne demek?",
      a: "Etkinlik ekipmanlarını LED ekran, truss, sahne/podyum ve ses-ışık dahil bulunduğunuz şehre göre planlayıp kurulum ve söküm dahil uçtan uca hizmet vermemizdir.",
    },
    {
      q: "Türkiye genelinde hizmet veriyor musunuz?",
      a: "Evet. Operasyon planına göre Türkiye genelinde kurulum ve teknik ekip desteği sağlayabiliriz.",
    },
    {
      q: "Fiyatlar şehre göre değişiyor mu?",
      a: "Evet. Mesafe, kurulum süresi, ekip sayısı ve ekipman setine göre değişebilir. En doğru fiyat için brief yeterlidir.",
    },
    {
      q: "Aynı projede birden fazla hizmet alabilir miyim?",
      a: "Evet. LED ekran, truss, sahne/podyum ve ses-ışık gibi kalemleri tek paket halinde planlayabiliriz.",
    },
    {
      q: "Kurulum ne zaman yapılır?",
      a: "Proje büyüklüğüne göre 24-48 saat önce kurulum ve test planlanır. Bazı küçük kurulumlar aynı gün tamamlanabilir.",
    },
    {
      q: "Güvenlik ve iş sağlığı süreçleri nasıl yönetiliyor?",
      a: "Kurulumda zemin ve ankraj, yükseklik güvenliği, kablolama ve geçiş yolları kontrol edilir. Proje tipine göre ek önlemler planlanır.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      <RegionalRentalJsonLd services={services} faqs={faqs} steps={steps} regions={regions} />
      <RegionalRentalClient regions={regions} services={services} faqs={faqs} steps={steps} />
      <CityDirectory />
    </main>
  );
}
