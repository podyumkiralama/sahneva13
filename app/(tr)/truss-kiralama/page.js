// app/(tr)/truss-kiralama/page.jsx

import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import PaymentOptionsNote from "@/components/payments/PaymentOptionsNote";
import { buildAlternatesForPath } from "@/lib/seo/alternates";
import ServiceBlogLinks from "@/components/seo/ServiceBlogLinks";
import RegionalCityLinks from "@/components/RegionalCityLinks";
import ServiceGuideShowcase from "@/components/seo/ServiceGuideShowcase";
import JsonLdScript from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import GlossaryTermLinks from "@/components/seo/GlossaryTermLinks";
import ServiceDecisionGuide from "@/components/ServiceDecisionGuide.client";
import { SERVICE_DECISION_GUIDES } from "@/lib/serviceDecisionGuides";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";

/* ================== ISR ================== */
export const revalidate = 86400;

/* ================== Sabitler ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(
  /\/$/,
  ""
);

const ORIGIN = SITE_URL;

const PAGE_PATH = "/truss-kiralama";
const PAGE_URL = `${ORIGIN}${PAGE_PATH}`;

const TITLE = "Truss Kiralama | Alüminyum Truss Sistemleri";
const DESCRIPTION =
  "Kare, üçgen, daire ve kemer alüminyum truss kiralama. Sahne truss, LED ekran ve ses-ışık rigging kurulumu için proje bazlı fiyat teklifi alın.";

const OG_IMAGE = `${ORIGIN}/img/truss/truss-1.webp`;

/* ================== İletişim ================== */
/** !!! burayı ne yapalım: LED ekran sayfasındaki PHONE düzenine göre güncelledim. */
const PHONE = "+905453048671";

/** WhatsApp mesajını truss’a göre optimize ettim (dönüşüm + net brief) */
const WA_TEXT =
  "Merhaba%2C+truss+kiralama+icin+teklif+istiyorum.+Etkinlik%3A+%5Bkonser%2Ffuar%2Flansman%2Fdugun%5D%2C+Tarih%3A+%5Bgg.aa.yyyy%5D%2C+Sehir%3A+%5Bil%2Filce%5D%2C+Kurgu%3A+%5Bkare%2Fucgen%2Fkemer%2Fcircle%5D%2C+Olcu%3A+%5Ben-boy-yukseklik%5D%2C+Ek+Ihtiyac%3A+%5BLED%2FisIk%2Fsahne%5D.";

const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}?text=${WA_TEXT}`;

const getServiceWhatsappLink = (title) => {
  const text = `Merhaba, ${title} hizmeti için bilgi ve fiyat teklifi almak istiyorum. Etkinlik tarihi: [gg.aa.yyyy], şehir: [il/ilçe], kurgu: [kare/üçgen/kemer/circle], ölçü: [en-boy-yükseklik], ek ihtiyaç: [LED/ışık/sahne].`;
  return `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(text)}`;
};

/* ================== Dinamik galeri (CaseGallery) ================== */
const CaseGallery = dynamic(() => import("@/components/CaseGallery"), {
  loading: () => (
    <div className="flex justify-center items-center h-64" role="status" aria-label="Galeri yükleniyor">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600" aria-hidden="true" />
      <span className="sr-only">Galeri yükleniyor...</span>
    </div>
  ),
});

/* ================== Metadata ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildAlternatesForPath("/truss-kiralama"),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon truss kiralama – kare, üçgen ve özel konstrüksiyon truss sistemleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: AI_PREVIEW_ROBOTS,
};

/* ================== JSON-LD (Service + FAQ + Gallery Images) ================== */
function TrussStructuredData() {
  const galleryImages = TRUSS_GALLERY_IMAGES.map((img, i) => ({
    "@type": "ImageObject",
    "@id": `${PAGE_URL}#image-${i + 1}`,
    url: `${ORIGIN}${img.src}`,
    contentUrl: `${ORIGIN}${img.src}`,
    caption: img.alt,
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
        primaryImageOfPage: { "@type": "ImageObject", "@id": `${PAGE_URL}#primaryimage`, url: OG_IMAGE },
        mainEntity: { "@id": `${PAGE_URL}#service` },
        hasPart: [
          { "@id": `${PAGE_URL}#gallery` },
        ],
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Truss Kiralama ve Kurulum",
        serviceType: "Truss kiralama",
        provider: { "@id": ORGANIZATION_ID },
        areaServed: "TR",
        url: PAGE_URL,
        description:
          "Kare truss, üçgen truss, circle/oval truss ve kemer (gate) truss dahil; etkinliğe özel truss kiralama ve profesyonel kurulum-söküm hizmeti.",
        offers: {
          "@type": "Offer",
          url: PAGE_URL,
          businessFunction: "http://purl.org/goodrelations/v1#LeaseOut",
          // Not: fiyat proje bazlı; price eklemiyoruz. Rich results için Offer var ama fiyat yok.
        },
      },
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#gallery`,
        name: "Truss Kurulum Galerisi",
        url: `${PAGE_URL}#galeri`,
        hasPart: galleryImages.map((image) => ({ "@id": image["@id"] })),
      },
      ...galleryImages,
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}

/* ================== Galeri Görselleri ================== */
/** /public/img/truss altında olacak şekilde */
const TRUSS_GALLERY_IMAGES = [
  { src: "/img/truss/truss-1.webp", alt: "Konser sahnesinde kare truss kurulumu" },
  { src: "/img/truss/truss-2.webp", alt: "LED ekran askı için truss taşıyıcı sistem" },
  { src: "/img/truss/truss-3.webp", alt: "Açık alan gate truss giriş takı kurulumu" },
  { src: "/img/truss/truss-4.webp", alt: "Fuar stand üst konstrüksiyonunda truss sistemi" },
  { src: "/img/truss/truss-5.webp", alt: "Circle truss ile sahne üst konstrüksiyon" },
  { src: "/img/truss/truss-6.webp", alt: "Kurumsal etkinlik sahne portalı truss kurulumu" },
  { src: "/img/truss/truss-7.webp", alt: "Festival sahnesinde geniş açıklıklı truss kurulumu" },
  { src: "/img/truss/truss-8.webp", alt: "Açık alanda ışık ve ses rigging için truss sistemi" },
];

const GUIDE_CONTENTS = [
  { href: "#truss-kurgu-secimi", label: "Truss kurgusu nasıl seçilir?" },
  { href: "#truss-guvenlik", label: "Güvenlik ve yük planlaması" },
  { href: "#truss-fiyat", label: "Fiyatı etkileyen kalemler" },
  { href: "#truss-entegrasyon", label: "LED, ışık ve sahne entegrasyonu" },
];

const GUIDE_CHAPTERS = [
  {
    id: "truss-kurgu-secimi",
    title: "Truss kurgusu etkinlik formatına göre seçilmeli",
    body:
      "Kare, üçgen, circle veya gate truss seçimi yalnızca görünüme göre yapılmaz. Taşıyacak ekipman, açıklık, yükseklik, zemin ve seyirci yerleşimi aynı anda değerlendirilir.",
    points: [
      "Konser ve festival için yük taşıma kapasitesi yüksek kare truss",
      "Fuar, giriş takı ve marka alanları için gate veya özel form",
      "Merkez sahne ve premium lansmanlar için circle/oval truss",
      "Dar alanlarda dekoratif ve hafif kurgu için üçgen truss",
    ],
  },
  {
    id: "truss-guvenlik",
    title: "Güvenlik, kurulumdan önce teknik planda çözülü olmalı",
    body:
      "Truss kurulumu, ekipman asma noktaları ve rüzgar/zemin koşulları netlenmeden sahaya inmemelidir. Bu sayede operasyon sırasında ek parça, gecikme veya riskli yük bindirme ihtimali azalır.",
    points: [
      "Yük dağılımı ve bağlantı noktaları",
      "Zemin tipi, kot farkı ve sabitleme ihtiyacı",
      "LED ekran veya ışık ağırlığı",
      "Kurulum-söküm saatleri ve saha giriş planı",
    ],
  },
  {
    id: "truss-fiyat",
    title: "Truss kiralama fiyatı metrajdan fazlasına bağlıdır",
    body:
      "Fiyatı truss tipi, toplam metre, yükseklik, motor/ayak ihtiyacı, nakliye, montaj ekibi ve etkinlik süresi birlikte belirler. Bu nedenle teklif formunda yalnızca 'kaç metre truss' bilgisi yeterli olmaz.",
    points: [
      "Kurgu tipi ve toplam metraj",
      "Nakliye mesafesi ve kurulum süresi",
      "Ek destek, base plate, motor veya rigging parçaları",
      "Sahada teknik ekip bulunma ihtiyacı",
    ],
  },
  {
    id: "truss-entegrasyon",
    title: "Truss, teknik prodüksiyonun taşıyıcı omurgasıdır",
    body:
      "LED ekran, ses, ışık ve sahne tasarımı birlikte planlandığında truss yalnızca metal taşıyıcı değil, etkinliğin görünürlüğünü ve operasyon güvenliğini belirleyen ana altyapı olur.",
    points: [
      "LED ekran frame ve askı kurgusu",
      "Moving head, wash ve efekt ışıkları için rigging",
      "Sahne portalı ve backdrop taşıyıcı sistem",
      "Fuar standı üst konstrüksiyon ve marka alanları",
    ],
  },
];

const GUIDE_CHECKLIST = [
  "Şehir, mekan ve kurulum alanının ölçüsü",
  "İstenen truss formu: kare, üçgen, gate, circle veya özel kurgu",
  "Asılacak LED ekran, ışık veya ses ekipmanı",
  "Kurulum ve söküm için izin verilen saat aralığı",
  "Zemin tipi, açık alan/kapalı alan bilgisi ve yükseklik ihtiyacı",
  "Etkinlik tarihi ve operasyonun kaç gün süreceği",
];

/* ================== FAQ ================== */
const FAQ_ITEMS = [
  {
    q: "Hangi alüminyum truss çeşitlerini kurabiliyorsunuz?",
    a: "Kare truss, üçgen truss, circle/oval truss, kemer (gate) truss ve özel kurgu gerektiren kurulumlar dahil etkinliğe uygun her türlü truss sistemini kurabiliyoruz.",
  },
  {
    q: "LED ekran ve ışık sistemleri truss’a asılabilir mi?",
    a: "Evet. LED ekran, ışık ve ilgili ekipmanlar için kurgu; alan, yük dağılımı, yükseklik ve güvenlik gerekliliklerine göre planlanır. Gerekli durumlarda ek sabitleme ve destek çözümleri uygulanır.",
  },
  {
    q: "Kurulum ve söküm hizmeti veriyor musunuz?",
    a: "Evet. Nakliye, kurulum, söküm ve sahada teknik ekip desteği sağlayabiliyoruz. Etkinlik tarihine, lokasyona ve kurgu karmaşıklığına göre planlama yapılır.",
  },
  {
    q: "Truss kiralama fiyatları nasıl belirlenir?",
    a: "Fiyat; truss tipi, metraj, yükseklik, kurgu karmaşıklığı, ek ekipman (base/foot, bağlantılar, destek, motor vb.), nakliye ve etkinlik süresine göre proje bazlı belirlenir.",
  },
  {
    q: "İstanbul dışında hizmet veriyor musunuz?",
    a: "Evet. İstanbul başta olmak üzere Türkiye genelinde proje bazlı hizmet verebiliyoruz.",
  },
  {
    q: "Sahne truss kiralama hizmetine neler dahildir?",
    a: "Sahne truss kiralama hizmeti; alan ve yük planı, uygun alüminyum truss seçimi, bağlantı ve sabitleme parçaları, nakliye, kurulum, LED ekran veya ışık rigging entegrasyonu, saha kontrolü ve söküm kalemlerini proje ihtiyacına göre kapsar.",
  },
];

/* ================== Bölüm Bileşenleri ================== */
const HERO_METRICS = [
  {
    value: "Kurulum + Söküm",
    label: "Saha operasyonu",
    detail: "Profesyonel ekip ile sahada tam operasyon",
  },
  {
    value: "Nakliye Dahil",
    label: "Lojistik",
    detail: "İstanbul ve proje bazlı Türkiye geneli",
  },
  {
    value: "Rigging Uyumlu",
    label: "Taşıyıcı planlama",
    detail: "LED ekran ve ışık sistemleri için planlama",
  },
  {
    value: "Taksitli Ödeme",
    label: "Kredi kartı",
    detail: "Teklifte anlaştığımız tutarı online kartla ödeyebilirsiniz",
  },
];

const HERO_ACTIONS = [
  {
    key: "whatsapp",
    label: "WhatsApp Teklif Al",
    href: WHATSAPP,
    external: true,
    ariaLabel: "WhatsApp üzerinden truss kiralama teklifi al (yeni sekmede açılır)",
  },
  {
    key: "call",
    label: "Hemen Ara",
    href: `tel:${PHONE}`,
    ariaLabel: "Telefonla ara",
  },
  {
    key: "form",
    label: "Form ile Fiyat Al",
    href: "#cta",
  },
];

function Hero() {
  return (
    <PageHero
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Truss Kiralama" },
      ]}
      eyebrow="Sahne · LED ekran · Işık & ses · Fuar & organizasyon"
      title="Truss Kiralama"
      titleAccent="ve Sahne Truss Kurulumu"
      titleWide
      description="Kare, üçgen, circle ve kemer (gate) dahil <strong>her türlü truss</strong> sistemini etkinliğinize göre planlıyor; nakliye, kurulum-söküm ve sahada teknik ekip desteği sağlıyoruz."
      actions={HERO_ACTIONS}
      metrics={HERO_METRICS}
      image={{
        src: "/img/truss/truss-1.webp",
        alt: "Konser sahnesinde kare truss kurulumu",
        sizes: "100vw",
        quality: 68,
      }}
    />
  );
}

function Content() {
  return (
    <section
      id="hizmetler" className="py-20 bg-white" aria-labelledby="hizmetler-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="text-center mb-16">
          <h2 id="hizmetler-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Truss Kiralama{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Nedir?
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Etkinliğinize uygun truss kurgusu: güvenlik, stabilite ve profesyonel görünüm için kritik bir yapı taşıdır.
          </p>
        </header>

        <article className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
          <p>
            Truss; modüler parçalardan oluşan, bağlantı elemanları ile sabitlenen ve yük taşıma amacıyla kullanılan
            alüminyum konstrüksiyon sistemidir. Truss sahne kurgularında ışık, ses ve LED ekran ekipmanlarının güvenli
            şekilde taşınmasını ve doğru konumlandırılmasını sağlar.
          </p>

          <p>
            Sahneva Organizasyon olarak konser, festival, fuar, lansman ve kurumsal etkinliklerde;
            <strong> kare truss, üçgen truss, circle/oval truss ve kemer (gate) truss</strong> dahil her türlü kurguya
            uygun truss kiralama, truss sahne ve kurulum hizmeti sunuyoruz.
          </p>

          <h3>Hangi alüminyum truss çeşitlerini kuruyoruz?</h3>
          <ul>
            <li><strong>Kare Truss:</strong> Yüksek taşıma kapasitesi ile LED ekran askıları ve rigging için idealdir.</li>
            <li><strong>Üçgen Truss:</strong> Orta ölçekli kurgu ve dekoratif uygulamalarda esneklik sağlar.</li>
            <li><strong>Circle / Oval Truss:</strong> Yaratıcı sahne tasarımları ve merkez sahne kurguları için uygundur.</li>
            <li><strong>Kemer (Gate) Truss:</strong> Giriş takı, portal ve fuar geçişlerinde sık kullanılır.</li>
            <li><strong>Özel Kurgu:</strong> Alan ölçüsüne, yükseklik ihtiyacına ve konsept tasarıma göre proje bazlı planlanır.</li>
          </ul>

          <h3>Truss nerelerde kullanılır?</h3>
          <ul>
            <li>LED ekran askı ve truss frame çözümleri</li>
            <li>Sahne üstü ışık rigging (moving head, wash, efekt sistemleri)</li>
            <li>Sahne portalı ve backdrop taşıyıcı sistemler</li>
            <li>Fuar stand üst konstrüksiyonları</li>
            <li>Açık alan konser/festival sahneleri (koşullara göre ek sabitleme ile)</li>
          </ul>

          <p className="not-prose mt-10 rounded-3xl bg-gray-50 border border-gray-100 p-8">
            <span className="font-black text-gray-900 block text-lg mb-2">Uyumlu Hizmetler</span>
            <span className="text-gray-700 leading-relaxed block">
              Truss sistemleri genellikle{" "}
              <Link className="font-bold text-violet-700 hover:text-violet-900" href="/led-ekran-kiralama">
                LED Ekran Kiralama
              </Link>
              ,{" "}
              <Link className="font-bold text-violet-700 hover:text-violet-900" href="/ses-isik-sistemleri">
                Ses ve Işık Sistemleri Kiralama
              </Link>{" "}
              ve{" "}
              <Link className="font-bold text-violet-700 hover:text-violet-900" href="/sahne-kiralama">
                Sahne Kiralama
              </Link>{" "}
              ile birlikte planlanır.
            </span>
          </p>
        </article>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-white" aria-labelledby="galeri-baslik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            id="galeri-baslik"
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900"
          >
            Truss Kurulum{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Galerimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Konser, festival, fuar ve kurumsal etkinliklerde gerçekleştirdiğimiz truss kurulumlarından örnekler
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <CaseGallery images={TRUSS_GALLERY_IMAGES} visibleCount={8} />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg mb-6">
            Daha fazla projemizi incelemek için projeler sayfamızı ziyaret edin
          </p>
          <Link
            href="/projeler"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-violet-600 text-violet-700 hover:bg-violet-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
            aria-label="Tüm projeleri görüntüle"
          >
            <span aria-hidden="true" className="text-xl mr-3">📸</span>
            <span>Tüm Projeleri Görüntüle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Technical() {
  const items = [
    {
      title: "Güvenlik & Stabilite",
      icon: "🛡️",
      description:
        "Kurgu; taşınacak ekipman, yükseklik, açıklık (span) ve zemin koşullarına göre planlanır.",
      features: ["Yük dağılımı planı", "Doğru bağlantı noktaları", "Proje bazlı sabitleme çözümleri"],
    },
    {
      title: "Rigging Uyumlu Kurulum",
      icon: "🎛️",
      description:
        "LED ekran, ışık ve sahne ekipmanları için teknik planlama; operasyonun sorunsuz ilerlemesini sağlar.",
      features: ["LED askı kurguları", "Işık bar/rigging planı", "Sahne portalı çözümleri"],
    },
    {
      title: "Operasyon & Zamanlama",
      icon: "⏱️",
      description:
        "Nakliye, kurulum ve söküm; etkinlik akışını bölmeyecek şekilde planlanır ve sahada ekip desteği sağlanır.",
      features: ["Kurulum-söküm planı", "Saha koordinasyonu", "Proje bazlı keşif/planlama"],
    },
  ];

  return (
    <section
      id="teknik-altyapi" className="py-20 bg-gradient-to-b from-white to-slate-50" aria-labelledby="teknik-altyapi-baslik">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 id="teknik-altyapi-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Teknik{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Planlama
            </span>{" "}
            & Güvenlik
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Truss kurulumunda en kritik konu güvenliktir. Planlama; ekipman türü, yükseklik ve ortam koşullarına göre yapılır.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl" aria-hidden="true">{it.icon}</div>
              <h3 className="mt-4 text-2xl font-black text-gray-900">{it.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">{it.description}</p>
              <ul className="mt-6 space-y-2 text-gray-700">
                {it.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden="true">✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={getServiceWhatsappLink(it.title)}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center font-bold px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-[1.02] transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
                  aria-label={`${it.title} için WhatsApp üzerinden teklif iste (yeni sekmede açılır)`}
                >
                  <span aria-hidden="true" className="mr-2">➡️</span>
                  <span>Teklif Al</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Detaylı Teklif için İletişime Geçin</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section
      id="sss" className="py-20 bg-white" aria-labelledby="sss-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 id="sss-baslik" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Sık Sorulan{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Sorular
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Truss kiralama ve kurulum hakkında merak edilen sorular ve cevapları
          </p>
        </div>

        <div className="space-y-4" role="list" aria-label="Sık sorulan sorular listesi">
          {FAQ_ITEMS.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const headingId = `faq-heading-${index}`;

            return (
              <article key={faq.q} role="listitem">
                <details
                  className="group bg-gray-50 rounded-3xl border-2 border-transparent transition-all duration-500 hover:bg-gray-100 open:bg-gray-100 open:border-violet-100 [&_summary::-webkit-details-marker]:hidden"
                  id={panelId}
                  aria-labelledby={headingId}
                >
                  <summary
                    id={headingId}
                    className="cursor-pointer w-full list-none text-left flex items-center justify-between gap-4 px-8 py-6 text-xl font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-3xl"
                  >
                    <span className="pr-4 flex-1">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className="ml-4 transition-transform duration-300 text-violet-600 bg-violet-100 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 group-open:rotate-180"
                    >
                      ⌄
                    </span>
                  </summary>

                  <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-300 px-8 pb-0">
                    <div className="overflow-hidden text-gray-700 leading-relaxed text-lg pt-0 group-open:pt-2 group-open:pb-6">
                      <p className="pl-4 border-l-4 border-violet-500">{faq.a}</p>
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
          <a
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105 transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
            aria-label="WhatsApp üzerinden iletişime geç (yeni sekmede açılır)"
          >
            <span aria-hidden="true" className="text-xl mr-3">💬</span>
            <span>WhatsApp’tan Yaz</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-white to-slate-50" aria-labelledby="cta-baslik">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="cta-baslik" className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Truss Kiralama{" "}
            <span className="gradient-text gradient-text--safe-xl">
              Teklifi Alın
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Net ve hızlı fiyatlandırma için aşağıdaki bilgileri paylaşmanız yeterli.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Şehir / İlçe",
            "Etkinlik tarihi",
            "Kurulum süresi (kaç gün)",
            "Kurgu türü (kare/üçgen/kemer/circle)",
            "Ölçü ihtiyacı (en-boy-yükseklik)",
            "Ek ihtiyaçlar (LED ekran / ışık / sahne)",
          ].map((x) => (
            <div key={x} className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
              <p className="font-bold text-gray-900">{x}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-[1.02] transform transition-all duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-500"
            aria-label="WhatsApp üzerinden teklif al (yeni sekmede açılır)"
          >
            <span aria-hidden="true" className="text-xl mr-3">✅</span>
            <span>Hemen Teklif Al</span>
          </a>

          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-2xl border-2 border-violet-600 text-violet-700 hover:bg-violet-600 hover:text-white transform transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-300"
            aria-label="Telefonla ara"
          >
            <span aria-hidden="true" className="text-xl mr-3">📞</span>
            <span>Telefonla Ara</span>
          </a>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            İlgili hizmetler:{" "}
            <Link className="font-bold text-violet-700 hover:text-violet-900" href="/led-ekran-kiralama">
              LED Ekran Kiralama
            </Link>{" "}
            •{" "}
            <Link className="font-bold text-violet-700 hover:text-violet-900" href="/ses-isik-sistemleri">
              Ses & Işık Sistemleri
            </Link>{" "}
            •{" "}
            <Link className="font-bold text-violet-700 hover:text-violet-900" href="/sahne-kiralama">
              Sahne Kiralama
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================== PAGE ================== */
/* ================== Tamamlayıcı Hizmetler ================== */
function RelatedServices() {
  const services = [
    {
      href: "/sahne-kiralama",
      title: "Sahne Kiralama",
      desc: "Truss portalının üzerine oturacağı modüler sahne ve platform sistemleri",
    },
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      desc: "Truss'a asılacak moving head, spot ve line array kurgusu",
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      desc: "Ground support ve truss taşıyıcıya monte LED ekran çözümleri",
    },
    {
      href: "/podyum-kiralama",
      title: "Podyum Kiralama",
      desc: "Konferans ve protokol alanları için modüler podyum sistemleri",
    },
  ];

  return (
    <section
      id="tamamlayici-hizmetler"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_760px] bg-gradient-to-br from-gray-50 to-violet-100/30 py-20"
      aria-labelledby="tamamlayici-hizmetler-baslik"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <h2
            id="tamamlayici-hizmetler-baslik"
            className="mb-6 text-4xl font-black text-gray-900 md:text-5xl"
          >
            Tamamlayıcı <span className="text-violet-700">Hizmetlerimiz</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Truss kurgusunu tamamlayan sahne, ışık ve ekran sistemleri; aynı teknik ekipten planlanır.
          </p>
          <div
            className="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-violet-600 to-purple-600"
            aria-hidden="true"
          />
        </div>

        <nav aria-label="Tamamlayıcı hizmetler">
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="focus-ring group flex h-full flex-col rounded-3xl border-2 border-gray-100 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:border-violet-200 hover:shadow-2xl"
              >
                <h3 className="mb-4 flex-grow text-xl font-bold text-gray-900 transition-colors group-hover:text-violet-700">
                  {service.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      {/* JSON-LD */}
      <TrussStructuredData />

      {/* Breadcrumb JSON-LD (sende hazır component var) */}
      <BreadcrumbJsonLd
        items={[
          { name: "Ana Sayfa", url: ORIGIN },
          { name: "Truss Kiralama", url: PAGE_URL },
        ]}
      />

      <Hero />
      <ServiceDecisionGuide guide={SERVICE_DECISION_GUIDES.truss} />
      <Content />
      <Gallery />
      <Technical />
      <ServiceGuideShowcase
        eyebrow="Truss kiralama rehberi"
        title="Truss sistemini doğru seçmek için hızlı karar rehberi"
        description="Arama niyeti yalnızca fiyat değil; güvenli kurgu, ekipman entegrasyonu ve sahada sorunsuz operasyon. Bu rehber karar sürecini netleştirir."
        contents={GUIDE_CONTENTS}
        chapters={GUIDE_CHAPTERS}
        checklist={GUIDE_CHECKLIST}
        cta={{
          href: WHATSAPP,
          label: "Truss teklif briefi gönder",
          ariaLabel: "WhatsApp üzerinden truss kiralama teklif briefi gönder",
        }}
        visual={{
          src: "/img/truss/truss-1.webp",
          alt: "Konser sahnesinde kare truss kurulumu",
          title: "Gerçek saha kurulumu",
          caption: "Truss formu, yük taşıma ve teknik ekipman entegrasyonu aynı planda çözülür.",
        }}
      />
      <FAQ />
      <RelatedServices />
      <ServiceBlogLinks
        links={[
          {
            href: "/blog/pmgc-dunya-finali-sahne-arkasi",
            label: "PMGC Dünya Finali Sahne Arkası",
          },
          {
            href: "/blog/milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi",
            label: "Milli Uzay Programı Lansmanı: Mühendislik Refleksi",
          },
        ]}
      />
      <GlossaryTermLinks
        servicePath="/truss-kiralama"
        title="Truss ve rigging'de geçen terimler"
        description="SWL, dinamik yük, ground support ve baseplate balast; truss kurgusunun güvenlik sınırını belirleyen başlıklar. Tanımlar sözlükte."
      />
      <RegionalCityLinks service="truss kiralama" />
      <PaymentOptionsNote />
      <Offer />
    </div>
  );
}
