import Image from "next/image";
import Link from "next/link";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const ORIGIN = "https://www.sahneva.com";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");

const SLUG = "mezuniyet-organizasyonlari-2026-istanbul-rehberi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/mezuniyet-toreni-sahnesi.webp";
const IMG_STAGE = "/img/blog/mezuniyet-toreni-sahnesi.webp";
const IMG_SHOW = "/img/blog/mezuniyet-toreni-gorsel-sow.webp";
const IMG_LED = "/img/blog/mezuniyet-toreni-led-ekran.webp";

const TITLE = "Mezuniyet Organizasyonları 2026: İstanbul’da Profesyonel Planlama ve Büyük Ölçekli Prodüksiyon Rehberi";
const DESCRIPTION =
  "Mezuniyet töreni organizasyonu 2026 rehberi: İstanbul’da sahne, LED ekran, ses-ışık, canlı yayın ve mezuniyet partisi planlamasını profesyonel düzeye çıkaran kapsamlı yol haritası.";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const PUBLISH_DATE = "2026-02-10T09:00:00+03:00";
const MODIFIED_DATE = "2026-02-10T09:00:00+03:00";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  image: HERO_IMG,
  openGraph: {
    title: `${TITLE} | Sahneva Organizasyon`,
    description:
      "Mezuniyet töreni organizasyonu için 2026 trendleri, büyük ölçekli prodüksiyon planlama adımları, İstanbul mekân seçimi ve teknik altyapı rehberi.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Mezuniyet töreni organizasyonu için profesyonel sahne ve ışık düzeni",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mezuniyet Töreni Organizasyonu 2026 Rehberi",
    description:
      "İstanbul mezuniyet organizasyonlarında sahne, LED ekran, ses-ışık ve canlı yayın planlaması için güncel rehber.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  keywords: [
    "mezuniyet töreni organizasyonu",
    "mezuniyet organizasyonları 2026",
    "İstanbul mezuniyet organizasyonu",
    "mezuniyet partisi",
    "mezuniyet sahne kurulumu",
    "LED ekran mezuniyet",
    "mezuniyet organizasyon planlama",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  date: PUBLISH_DATE,
  robots: { index: true, follow: true },
};

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function buildArticleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BLOG_URL}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
    headline: TITLE,
    description: DESCRIPTION,
    image: [`${SITE_URL}${HERO_IMG}`],
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.webp` },
    },
    keywords: metadata.keywords,
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Mezuniyet töreni organizasyonu için ne kadar önce planlamaya başlanmalı?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "İstanbul’da 500+ katılımlı mezuniyet töreni organizasyonu için ideal süre 4–6 aydır. Mekân rezervasyonu, teknik keşif, sahne-LED ölçüleri ve prova planı bu sürede netleşir.",
        },
      },
      {
        "@type": "Question",
        name: "LED ekran mezuniyet organizasyonlarında neden kritik?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "LED ekran, isim senkronu, canlı kamera ve tören akışı için merkez noktadır. Güneş altında okunabilir parlaklık ve doğru konumlandırma, mezuniyet töreni organizasyonu kalitesini doğrudan artırır.",
        },
      },
      {
        "@type": "Question",
        name: "Mezuniyet partisi ile resmi tören aynı sahnede yapılabilir mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Evet, ancak ışık, ses ve sahne akışı iki modlu planlanmalıdır. Resmi törenden partiye geçişte ışık senaryosu ve ses profili yeniden kurgulanmalıdır.",
        },
      },
    ],
  };
}

export default function BlogPostGraduationGuide() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Mezuniyet Organizasyonları 2026", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <JsonLd data={buildArticleJsonLd()} />
      <JsonLd data={buildFaqJsonLd()} />

      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMG,
          alt: "Mezuniyet töreni organizasyonu için profesyonel sahne kurulumu",
        }}
        pills={["Mezuniyet Töreni", "İstanbul 2026", "Prodüksiyon Rehberi"]}
        title="Mezuniyet Organizasyonları 2026"
        highlight="Büyük Ölçekli Prodüksiyon"
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="8–10 dk okuma"
        currentSlug={SLUG}
        primaryLinks={[
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🟦" },
          { href: "/ses-isik-sistemleri", label: "Ses & Işık", icon: "🔊" },
        ]}
      >
        <p>
          Mezuniyet organizasyonları, yalnızca bir kep atma anından ibaret değildir. Bu özel gün; yılların
          emeğini, ailelerin gururunu ve öğrencilerin yeni bir hayata attığı ilk adımı temsil eder. İstanbul’da
          mezuniyet töreni organizasyonu planlamak ise artık sıradan bir okul etkinliği değil, tam anlamıyla
          profesyonel bir prodüksiyon sürecidir.
        </p>

        <p>
          300 kişilik bir lise mezuniyeti ile 1500 kişilik üniversite töreni arasında sahne kurulumu, LED ekran
          senkronu, ses dağılımı, ışık senaryosu ve operasyon yönetimi açısından büyük farklar vardır. Bu rehberde,
          İstanbul mezuniyet organizasyonlarını 2026 trendleriyle birlikte kapsamlı şekilde ele alıyoruz.
        </p>

        <h2>Mezuniyet Organizasyonları Nedir ve Neden Profesyonel Planlama Gerektirir?</h2>
        <p>
          Mezuniyet organizasyonları; diploma töreni, sahne programı, ödül seremonisi ve çoğu zaman mezuniyet partisi
          bölümlerinden oluşan çok katmanlı etkinliklerdir. İstanbul mezuniyet etkinliklerinde genellikle 500 – 1500
          arası katılımcı, protokol ve akademik kadro, aile katılımı ve canlı yayın ihtiyacı bir arada bulunur. Bu
          ölçek, mezuniyet töreni organizasyonu süreçlerini profesyonel planlama gerektiren bir prodüksiyona dönüştürür.
        </p>

        <figure className="my-8">
          <Image
            src={IMG_STAGE}
            alt="Mezuniyet töreni sahnesi ve podyum kurulumu"
            width={1200}
            height={800}
            className="w-full rounded-2xl shadow-lg"
          />
          <figcaption className="mt-2 text-sm text-gray-500">
            Mezuniyet töreni organizasyonu için sahne, yürüyüş platformu ve protokol alanı aynı anda planlanmalıdır.
          </figcaption>
        </figure>

        <h2>Mezuniyet Organizasyonu ile Mezuniyet Organizasyon Arasındaki Fark</h2>
        <p>
          Arama verilerinde hem “mezuniyet organizasyonu” hem de “mezuniyet organizasyon” ifadeleri yüksek hacimde
          aranır. Pratikte iki kullanım benzer anlam taşır; ancak sektörde “mezuniyet organizasyonu” çoğu zaman tören,
          sahne, teknik altyapı ve parti dahil bütün süreci ifade eder. İstanbul mezuniyet planlamalarında her iki ifade
          de artık profesyonel prodüksiyon gerektiren etkinlikleri temsil eder.
        </p>

        <h2>İstanbul Mezuniyet Etkinlikleri Neden Daha Karmaşık?</h2>
        <p>
          İstanbul mezuniyet organizasyonları diğer şehirlerden birkaç açıdan ayrılır: ulaşım ve trafik planlaması,
          mekân çeşitliliği, açık alanlarda rüzgâr ve hava faktörü, büyük katılım oranı nedeniyle ses ve görüntü altyapısı
          gibi unsurlar kritik hale gelir. Bu nedenle keşif süreci ve teknik risk analizi olmazsa olmazdır.
        </p>

        <h2>Profesyonel Mezuniyet Organizasyonunun Temel Bileşenleri</h2>
        <h3>1. Sahne ve Platform Tasarımı</h3>
        <p>
          Mezuniyet törenlerinde sahne yalnızca konuşma yapılan alan değildir. Diploma yürüyüşü, kep atma anı ve toplu
          fotoğraf için güvenli ve geniş bir platform gerekir. Statik yük hesabı yapılmış truss sistem, modüler yükseltilmiş
          sahne ve protokol alanı ayrımı profesyonel planlamanın temelidir.
        </p>

        <h3>2. LED Ekran ve Görsel Entegrasyon</h3>
        <p>
          Modern mezuniyet organizasyonları LED ekransız düşünülemez. Dış mekânda güneş altında okunabilir yüksek
          parlaklığa sahip paneller kullanılmalıdır. İsim senkronu, canlı kamera ve okul tanıtım içerikleri LED ekran
          üzerinden yönetildiğinde mezuniyet töreni organizasyonu çok daha güçlü bir etki yaratır.
        </p>

        <figure className="my-8">
          <Image
            src={IMG_LED}
            alt="Mezuniyet töreninde LED ekran ve isim senkronu"
            width={1200}
            height={800}
            className="w-full rounded-2xl shadow-lg"
          />
          <figcaption className="mt-2 text-sm text-gray-500">
            LED ekran senkronu, mezuniyet organizasyonlarında duygusal etkiyi artıran en güçlü detaylardan biridir.
          </figcaption>
        </figure>

        <h3>3. Profesyonel Ses Dağılımı</h3>
        <p>
          500 kişi üzeri mezuniyet organizasyonlarında standart hoparlör sistemleri yetersiz kalır. Line array kuleleri,
          doğru açı hesaplaması ve alan metrekare hesabı yapılmalıdır. Aksi halde arka sıralardaki misafirler konuşmaları
          net duyamaz ve organizasyon kalitesi düşer.
        </p>

        <h3>4. Işık Tasarımı ve Final Şovu</h3>
        <p>
          Mezuniyet partisi bölümünde moving head ışık şovları, lazer efektleri, konfeti finali ve DJ geçiş sahnesi öne çıkar.
          Resmi törenden eğlenceye geçişte ışık senaryosu tamamen değişir. 2026 mezuniyet organizasyonları, daha dinamik ve
          sosyal medya odaklı sahne ışık tasarımları ile öne çıkıyor.
        </p>

        <figure className="my-8">
          <Image
            src={IMG_SHOW}
            alt="Mezuniyet organizasyonlarında ışık şovu ve final sahnesi"
            width={1200}
            height={800}
            className="w-full rounded-2xl shadow-lg"
          />
          <figcaption className="mt-2 text-sm text-gray-500">
            Mezuniyet partisi bölümünde ışık tasarımı, görsel şovu güçlendirir ve etkinliğin finale bağlanmasını sağlar.
          </figcaption>
        </figure>

        <h2>İstanbul Mezuniyet Mekanları ve Doğru Yer Seçimi</h2>
        <p>
          Mekân seçimi yalnızca kapasiteyle sınırlı değildir. Teknik altyapı, rüzgar yönü, zemin sertliği, elektrik kapasitesi
          ve ses yalıtımı gibi detaylar İstanbul mezuniyet organizasyonlarında en az manzara kadar önemlidir. 2026 sezonu için
          açık alan tercihleri yükselirken, hibrit (yarı açık – yarı kapalı) model daha fazla tercih edilmektedir.
        </p>

        <h2>Mezuniyet Partisi ve Büyük Ölçekli Prodüksiyon Yönetimi</h2>
        <p>
          Mezuniyet organizasyonu iki ayrı duygusal katmandan oluşur: resmi tören ve mezuniyet partisi. Bu iki bölümün teknik
          akışı farklı planlanmalıdır. Resmi törende net konuşma sesi ve sade ışık gerekirken; mezuniyet partisi başladığında
          dinamik ışık tasarımı, bas yoğunluğu ve görsel efektler devreye girer.
        </p>

        <h2>2026 Mezuniyet Organizasyon Fikirleri: Yeni Trendler</h2>
        <ul>
          <li><strong>LED entegre isim senkronu:</strong> Diploma anında öğrencinin adı LED ekranda animasyonla görünür.</li>
          <li><strong>Drone ile kep atma çekimi:</strong> Açık alan mezuniyet töreni organizasyonu için güçlü bir görsel içerik sağlar.</li>
          <li><strong>Festival konsepti:</strong> DJ performansı ve geniş sahne kurulumu ile kampüslerde festival havası yaratılır.</li>
          <li><strong>Hızlı sahne geçişi:</strong> Tören bitimiyle ışık rengi ve sahne arka planı değişerek profesyonel algıyı artırır.</li>
        </ul>

        <h2>Canlı Yayın ve Reji Yönetimi</h2>
        <p>
          Mezuniyet organizasyonları artık sadece fiziksel katılımla sınırlı kalmıyor. Aile üyelerinin farklı şehir veya ülkelerde
          bulunması nedeniyle canlı yayın ihtiyacı artıyor. Çoklu kamera sistemi, reji masası ve yedek internet hattı 2026
          mezuniyet töreni organizasyonu planlamalarının standardı haline geldi.
        </p>

        <div className="my-10 grid gap-6 lg:grid-cols-2">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full rounded-2xl border border-gray-200"
              src="https://www.youtube.com/embed/w28sVIG7U08?si=LrHhdmuHGqyFTVhi"
              title="Mezuniyet organizasyonu sahne ve prodüksiyon örneği"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full rounded-2xl border border-gray-200"
              src="https://www.youtube.com/embed/pWpVKKHSdwQ?si=8zWBDwbdN0U8W5kg"
              title="İstanbul mezuniyet töreni organizasyonu video örneği"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <h2>Mezuniyet Organizasyonunu 5 Adımda Profesyonel Planlamak</h2>
        <ol>
          <li><strong>Stratejik planlama:</strong> Tarih, saat ve mekân seçiminden önce teknik gereksinimler belirlenmelidir.</li>
          <li><strong>Davet ve kayıt yönetimi:</strong> QR kodlu giriş ve dijital doğrulama kalabalığı yönetir.</li>
          <li><strong>Diploma akışı:</strong> İsim listesi ve LED içerikleri önceden rejiye yüklenmelidir.</li>
          <li><strong>İletişim ve içerik:</strong> Etkinlik öncesi/sonrası sosyal medya görünürlüğü planlanmalıdır.</li>
          <li><strong>Mezuniyet sonrası topluluk:</strong> Mezunlarla bağ kurmak kurumsal imajı güçlendirir.</li>
        </ol>

        <h2>Kriz ve Acil Durum Planlaması</h2>
        <p>
          Profesyonel mezuniyet töreni organizasyonu mutlaka yedekli plan içerir. Elektrik kesintisi, şiddetli rüzgar,
          yağış, mikrofon arızası ve program gecikmesi gibi riskler için jeneratör, yedek mikrofon, alternatif sahne planı
          ve acil durum tahliye planı hazır olmalıdır.
        </p>

        <h2>Sonuç</h2>
        <p>
          Mezuniyet organizasyonları; planlama, mühendislik ve duygunun birleştiği özel etkinliklerdir. İstanbul mezuniyet
          organizasyonları ise ölçek ve prestij açısından daha kapsamlı bir yönetim gerektirir. Doğru mekân, güçlü teknik
          altyapı ve profesyonel sahne yönetimiyle mezuniyet töreni organizasyonu unutulmaz bir deneyime dönüşür.
        </p>

        <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h3 className="mt-0">Mezuniyet organizasyonu için profesyonel destek</h3>
          <p className="mb-4">
            İstanbul’da mezuniyet töreni organizasyonu planlıyorsanız, sahne, LED ekran, ses-ışık ve teknik prodüksiyonu tek
            elden yönetmek için Sahneva ekibinden teklif alabilirsiniz.
          </p>
          <Link href="/iletisim" className="font-semibold text-blue-700 hover:underline">
            İletişime geçin →
          </Link>
        </div>
      </BlogLayout>

      <section className="bg-white pb-16">
        <div className="container mx-auto px-4">
          <BlogRelatedLinks
            currentSlug={SLUG}
            services={[
              { href: "/sahne-kiralama", label: "Sahne Kiralama" },
              { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
              { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
