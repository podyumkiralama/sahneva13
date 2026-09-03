// app/hizmetler/page.js
import { YEARS_OF_EXPERIENCE } from "@/lib/experience";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/PageHero";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import WebMcpServiceTools from "@/components/WebMcpServiceTools";
import { BASE_SITE_URL, ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";
import { PROVINCES_COUNT, setupDurationText } from "@/lib/stats";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

/* ───── META & ISR ───── */
export const metadata = {
  title: "Hizmetlerimiz | Etkinlik Ekipmanları Kiralama",
  description: "Profesyonel sahne kiralama, LED ekran, ses-ışık sistemleri, podyum, çadır kiralama ve etkinlik prodüksiyon hizmetleri. Türkiye geneli hızlı kurulum.",
  alternates: buildAlternatesForPath("/hizmetler"),
  openGraph: {
    title: "Hizmetlerimiz | Sahneva",
    description: "Sahne, LED ekran, ses-ışık, podyum, çadır kiralama ve komple etkinlik prodüksiyon hizmetleri. Türkiye genelinde profesyonel çözümler.",
    url: `${BASE_SITE_URL}/hizmetler`,
    images: [
      {
        url: `${BASE_SITE_URL}/img/hizmetler-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon – sahne, LED ekran, ses-ışık ve çadır kiralama hizmetleri",
      },
    ],
    type: "website",
    locale: "tr_TR",
    siteName: "Sahneva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hizmetlerimiz | Sahneva",
    description:
      "Sahne, LED ekran, ses-ışık, podyum, çadır kiralama ve komple etkinlik prodüksiyon hizmetleri. Türkiye genelinde profesyonel çözümler.",
    images: [`${BASE_SITE_URL}/img/hizmetler-hero.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

export const revalidate = 3600;
const SITE_URL = BASE_SITE_URL;

/* ───── STRUCTURED DATA ───── */
function ServicesStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Sahneva Hizmetler',
    'description': 'Profesyonel sahne kiralama, LED ekran, ses-ışık sistemleri, podyum, çadır kiralama ve etkinlik prodüksiyon hizmetleri',
    'image': `${SITE_URL}/img/hizmetler-hero.webp`,
    'provider': { '@id': ORGANIZATION_ID },
    'areaServed': 'TR',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Etkinlik Ekipmanları Kiralama Hizmetleri',
      'itemListElement': [
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Sahne Kiralama',
            'description': 'Profesyonel sahne kurulumu ve kiralama hizmetleri'
          },
        },
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': {
            '@type': 'Service',
            'name': 'LED Ekran Kiralama',
            'description': 'Yüksek çözünürlüklü LED ekran kiralama hizmetleri'
          }
        },
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Ses ve Işık Sistemleri',
            'description': 'Profesyonel ses ve ışık sistemi kiralama hizmetleri'
          }
        },
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Podyum Kiralama',
            'description': 'Modüler podyum sahne çözümleri'
          }
        },
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': { '@type': 'Service', 'name': 'Çadır Kiralama' }
        },
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': { '@type': 'Service', 'name': 'Sandalye Kiralama' }
        },
        {
          '@type': 'Offer',
          'businessFunction': 'http://purl.org/goodrelations/v1#LeaseOut',
          'itemOffered': { '@type': 'Service', 'name': 'Masa Kiralama' }
        },
        {
          '@type': 'Offer',
          'itemOffered': { '@type': 'Service', 'name': 'İstanbul İçi Nakliye' }
        }
      ]
    }
  };

  return (
    <JsonLd data={schema} />
  );
}

/* ───── SERVICES TABS FALLBACK ───── */
function ServicesTabsFallback() {
  const services = [
    {
      title: "Sahne Kiralama",
      description: "Profesyonel truss sistemleri, modüler sahne çözümleri",
      items: [
        "3x3m, 6x4m, 8x4m, 10x6m ölçülerinde sahne sistemleri",
        "Alüminyum truss sistemleri ve güvenlik ekipmanları",
        "Modüler sigma podyum sistemleri (1x1m, 2x1m)",
        "Sahne dekorasyonu ve brandalama hizmetleri"
      ]
    },
    {
      title: "LED Ekran Kiralama", 
      description: "Yüksek çözünürlüklü indoor ve outdoor LED ekran çözümleri",
      items: [
        "P2.5, P3, P4, P5, P6 pixel pitch seçenekleri",
        "İç mekan ve dış mekan (IP65) LED ekranlar",
        "Kurulum, teknik operatör ve içerik yönetimi",
        "HD video processor ve kontrol sistemleri"
      ]
    },
    {
      title: "Ses Sistemleri",
      description: "Profesyonel ses sistemi kiralama ve kurulum hizmetleri",
      items: [
        "Line array ses sistemleri ve dijital mikserler",
        "Kablosuz mikrofon sistemleri (handheld, lapel)",
        "Ses teknisyeni ve operatör hizmetleri",
        "Ses testi ve akustik optimizasyon"
      ]
    },
    {
      title: "Işık Sistemleri",
      description: "Profesyonel ışıklandırma ve efekt sistemleri",
      items: [
        "Moving head, spot ve wash ışıklar",
        "Lazer, haze ve özel efekt makineleri",
        "DMX kontrol sistemleri ve operatör",
        "Işık programlama ve senkronizasyon"
      ]
    },
    {
      title: "Çadır Kiralama",
      description: "Etkinlik çadırları ve geçici yapı çözümleri",
      items: [
        "Pagoda, şeffaf ve endüstriyel çadır sistemleri",
        "3x3m, 6x3m, 9x3m, 9x6m, 12x6m ölçülerinde çadırlar",
        "Çadır ısıtma-soğutma ve aydınlatma sistemleri",
        "Zemin kaplama ve dekorasyon hizmetleri"
      ]
    },
    {
      title: "Masa Sandalye Kiralama",
      description: "Profesyonel masa ve sandalye kiralama hizmetleri",
      items: [
        "Banket masaları (yuvarlak, dikdörtgen)",
        "Konferans ve kokteyl sandalyeleri",
        "Masa örtüsü ve dekorasyon ürünleri",
        "Kurulum ve toplama hizmetleri"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {services.map((service, index) => (
        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100">
          <h3 className="text-2xl font-black text-neutral-900 mb-4">{service.title}</h3>
          <p className="text-neutral-700 mb-6 text-lg">{service.description}</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center gap-3 text-neutral-700">
                <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ───── MAIN COMPONENT ───── */
export default function ServicesPage() {
  const baseUrl = SITE_URL;
  const canonical = `${baseUrl}/hizmetler`;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Hizmetler", url: canonical },
  ];

  const QUICK_ACCESS = [
    {
      href: "/sahne-kiralama",
      title: "Sahne Kiralama", 
      description: "Truss sistemleri, modüler sahne, profesyonel kurulum",
      icon: "🎪",
      color: "from-violet-600 to-purple-500"
    },
    {
      href: "/podyum-kiralama",
      title: "Podyum Kiralama",
      description: "1×1 ve 2×1 modüler paneller, güvenli tasarım",
      icon: "📐",
      color: "from-purple-500 to-pink-500"
    },
    {
      href: "/led-ekran-kiralama",
      title: "LED Ekran Kiralama",
      description: "P2–P6 pixel pitch, iç/dış mekân çözümleri",
      icon: "🖥️",
      color: "from-green-500 to-emerald-500"
    },
    {
      href: "/turkiyede-etkinlik-cozum-ortagi",
      title: "Türkiye’de Etkinlik Çözüm Ortağı",
      description: "Yabancı ajans ve markalar için yerel teknik prodüksiyon desteği",
      icon: "ğŸŒ",
      color: "from-violet-600 to-purple-500"
    },
    {
      href: "/ses-isik-sistemleri",
      title: "Ses & Işık Sistemleri",
      description: "Line array ses, robot ışık, DMX kontrol",
      icon: "🎵",
      color: "from-orange-500 to-red-500"
    },
    {
      href: "/cadir-kiralama", 
      title: "Çadır Kiralama",
      description: "Pagoda, şeffaf, endüstriyel çadır sistemleri",
      icon: "⛺",
      color: "from-teal-500 to-violet-500"
    },
    {
      href: "/masa-sandalye-kiralama",
      title: "Masa & Sandalye",
      description: "Banket, konferans, bistro tipi mobilyalar",
      icon: "🪑",
      color: "from-violet-500 to-purple-500"
    },
    {
      href: "/dijital-kursu-kiralama",
      title: "Dijital Kürsü Kiralama",
      description: "LED ekranlı ve şeffaf dijital sunum kürsüleri",
      icon: "🎙️",
      color: "from-violet-600 to-purple-500"
    },
    {
      href: "/sisme-oyun-parki-kiralama",
      title: "Şişme Oyun Parkı",
      description: "Kaydırak, engel parkuru, takım ve aktivite oyunları",
      icon: "🎯",
      color: "from-fuchsia-500 to-violet-600"
    }
  ];

  const SERVICE_FEATURES = [
    {
      icon: "⚡",
      title: "Planlı Kurulum",
      description: `Kapsama göre ${setupDurationText("overall", "tr")} içinde profesyonel kurulum ve teslimat`
    },
    {
      icon: "🛡️",
      title: "Güvenlik Planı",
      description: "Belgeli saha kontrolleri, iş güvenliği planı ve kalite kontrol"
    },
    {
      icon: "💎", 
      title: "Premium Ekipman",
      description: "Son teknoloji, bakımlı ve yüksek kaliteli ekipmanlar"
    },
    {
      icon: "🌍",
      title: "Türkiye Geneli",
      description: `${PROVINCES_COUNT} ilde teknik ekip ve lojistik altyapı`
    },
    {
      icon: "📞",
      title: "Proje Desteği",
      description: "Etkinlik takvimine göre teknik destek ve danışmanlık"
    },
    {
      icon: "💰", 
      title: "Şeffaf Fiyat",
      description: "Ekipman, ekip ve teslimat kapsamını gösteren detaylı teklif"
    }
  ];

  const PLANNING_GUIDES = [
    {
      href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
      title: "Etkinlik teknik keşif rehberi",
      description: "Mekan analizi, altyapı kontrolü ve kurulum planlama adımlarını teklif öncesi netleştirin.",
    },
    {
      href: "/konser-icin-podyum-kiralama",
      title: "Konser için podyum kiralama",
      description: "Festival ve konserlerde ana platform, yan kule ve FOH alanı planlamasını inceleyin.",
    },
    {
      href: "/podyum-kurulum-fiyatlari",
      title: "Podyum kurulum fiyatları",
      description: "Metrekare, yükseklik, kaplama ve nakliye kalemlerinin bütçeye etkisini görün.",
    },
    {
      href: "/blog/teknik-produksiyon-fiyatlandirma-rehberi-2026",
      title: "Teknik prodüksiyon fiyatlandırma",
      description: "Sahne, LED ekran, ses-ışık ve çadır kalemlerinde bütçe planlama rehberi.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-hidden">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <ServicesStructuredData />

      {/* Skip to Main Content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-violet-600 focus:text-white focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg transition-all duration-200"
      >
        Ana içeriğe atla
      </a>

      {/* ================== HERO ================== */}
      <PageHero
        eyebrow="Türkiye geneli profesyonel hizmet"
        title="Profesyonel"
        titleAccent="Hizmetlerimiz"
        description="Sahne, LED ekran, ses-ışık sistemlerinden komple etkinlik prodüksiyonuna kadar <strong>tek çatı altında premium çözümler</strong>."
        actions={[
          {
            key: "services",
            label: "Hizmetleri Keşfet",
            href: "#hizmet-listesi",
            ariaLabel: "Hizmetlerimizi inceleyin",
          },
          {
            key: "call",
            label: "Hemen Ara",
            href: "tel:+905453048671",
            ariaLabel: "Hemen ara - Detaylı bilgi için",
          },
        ]}
        image={{
          src: "/img/hizmetler-hero.webp",
          alt: "Sahneva Hizmetler - Profesyonel Etkinlik Ekipmanları ve Teknoloji Çözümleri",
          sizes: "100vw",
          quality: 78,
        }}
      />

<div id="main" className="relative" style={{ color: "#0f172a" }}>

        {/* ✅ HIZLI ERİŞİM KARTLARI */}
        <section className="py-20 bg-gradient-to-br from-white to-violet-50/50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Tüm <span className="text-violet-700">Hizmetlerimiz</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Etkinliğiniz için ihtiyaç duyduğunuz tüm ekipman ve hizmetleri tek noktadan temin edin
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUICK_ACCESS.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-violet-200 transition-all duration-500 hover:scale-105"
                  aria-label={`${service.title} sayfasına git`}
                >
                  <div className="text-4xl mb-4 gradient-text gradient-text--safe-xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-3 group-hover:text-violet-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-violet-600 font-semibold text-sm">
                    <span>Detayları Gör</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ HİZMET ÖZELLİKLERİ */}
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-violet-100/30">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Neden <span className="text-violet-700">Sahneva?</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                {YEARS_OF_EXPERIENCE} yıllık deneyimimiz ve uzman ekibimizle fark yaratıyoruz
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICE_FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-neutral-100 hover:border-violet-200 transition-all duration-500 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4 gradient-text gradient-text--safe-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-violet-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ DETAYLI HİZMET LİSTESİ */}
        <section id="hizmet-listesi" className="py-20 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Komple <span className="text-violet-700">Etkinlik Çözümleri</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Sahne kurulumundan organizasyon yönetimine kadar tüm süreci profesyonelce yönetiyoruz
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8"></div>
            </div>

            <ServicesTabsFallback />
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                Planlama <span className="text-violet-700">Rehberleri</span>
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Teklif almadan önce ekipman, keşif ve bütçe kararlarını daha netleştirmek için ilgili rehberlere göz atın.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-8" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLANNING_GUIDES.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
                >
                  <h3 className="text-lg font-black text-neutral-900 group-hover:text-violet-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-700">
                    Rehberi incele
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ EK HİZMETLER */}
        <section className="py-20 bg-gradient-to-br from-neutral-900 to-violet-900/95">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ek <span className="text-violet-200">Hizmetlerimiz</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Etkinliğinizin kusursuz geçmesi için ihtiyaç duyabileceğiniz tüm destek hizmetleri
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mt-8"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">🎯</span>
                    Organizasyon & Prodüksiyon
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Etkinlik planlama ve yönetimi",
                      "Teknik prodüksiyon koordinasyonu",
                      "Sanatçı ve konuşmacı koordinasyonu",
                      "Sahne arkası ve yeşil oda hizmetleri",
                      "Güvenlik ve crowd management"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-violet-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">🚚</span>
                    Lojistik & Destek Hizmetleri
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Ekipman taşıma ve kurulum",
                      "Teknik personel temini",
                      "Ulaşım ve konaklama organizasyonu",
                      "Catering ve ikram hizmetleri",
                      "Temizlik ve geri dönüşüm"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">📸</span>
                    Medya & Görüntüleme
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Profesyonel fotoğraf çekimi",
                      "Video prodüksiyon ve canlı yayın",
                      "Drone çekim hizmetleri",
                      "Sosyal medya yönetimi",
                      "Basın ve halkla ilişkiler"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
                    <span className="text-3xl">🎨</span>
                    Tasarım & Dekorasyon
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Mekan tasarımı ve dekorasyon",
                      "Aydınlatma tasarımı",
                      "Marka ve grafik tasarım",
                      "Özel ahşap dekorasyon",
                      "Çiçek düzenleme ve peyzaj"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WebMcpServiceTools locale="tr" contactHref="/iletisim" />

        {/* ✅ CTA SECTION */}
        <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600">
          <div className="container max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Hemen <span className="text-yellow-300">Teklif Alın</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Etkinliğiniz için en uygun çözümleri birlikte netleştirelim. Mesai saatlerinde hızlı
              ilk dönüş sağlarız; teklif süresi kapsamın netliğine ve keşif gereksinimine göre değişir.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <a
                href="tel:+905453048671"
                className="group bg-white text-violet-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="Hemen ara - Detaylı teklif için"
              >
                <span className="flex items-center justify-center gap-2">
                  📞 Hemen Ara
                </span>
              </a>

              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="group bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="WhatsApp'tan yaz - Hızlı teklif için (yeni sekmede açılır)"
              >
                <span className="flex items-center justify-center gap-2">
                  💬 WhatsApp
                </span>
              </a>

              <Link
                href="/iletisim"
                className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition-all duration-300 hover:scale-105 min-w-[200px] text-center"
                aria-label="İletişim formu ile ulaşın"
              >
                <span className="flex items-center justify-center gap-2">
                  📧 E-posta
                </span>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
              <p className="text-white/90 text-sm">
                <strong>⏱️ Hızlı ilk dönüş:</strong> Mesai saatlerinde hızlı ilk dönüş sağlarız.
                Teklif süresi kapsamın netliğine ve keşif gereksinimine göre değişir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
