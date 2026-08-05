import Image from "next/image";
import Link from "next/link";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "etkinlik-produksiyonu-podyum-sahne-led-ses-isik";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const PUBLISH_DATE = "2026-08-05T09:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/etkinlik-produksiyonu-podyum-sahne-led-ses-isik/page.jsx",
  PUBLISH_DATE
);
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const HERO_IMAGE =
  "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-ana-sahne-teknik-produksiyon-hero.webp";

const ARTICLE_IMAGES = {
  podium:
    "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-podyum-sahne-zemin-detayi.webp",
  stage:
    "/img/projeler/sifir-atik-festivali/sifir-atik-festivali-sahne-ici-teknik-kontrol.webp",
  led:
    "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/kurumsal-etkinlik-led-ekran-yan-ekran-kurgusu.webp",
  rigging:
    "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-konser-alani-sahne-kurulumu.webp",
  broadcast:
    "/img/projeler/istanbul-amator-futbol-kuluplerine-nakdi-destek-programi/teknik-reji-canli-kamera-aktarim-kurulumu.webp",
  tent:
    "/img/projeler/diclefest-sanliurfa/diclefest-sanliurfa-dome-cadir-genel-alan.webp",
};

const TITLE = "Etkinlik Prodüksiyonu: Podyum, Sahne, LED Ekran, Ses ve Işık";
const DESCRIPTION =
  "Podyumdan ana sahneye, LED ekrandan ses ve ışık sistemlerine kadar profesyonel etkinlik prodüksiyonunun tüm aşamalarını keşfedin.";

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent("Merhaba, etkinliğim için teknik prodüksiyon planı ve fiyat teklifi almak istiyorum.");

const TOC_ITEMS = [
  { href: "#planlama", label: "Prodüksiyon nerede başlar?" },
  { href: "#podyum-platform", label: "Podyum ve platform" },
  { href: "#sahne-kurulumu", label: "Profesyonel sahne" },
  { href: "#led-ekran", label: "LED ekran sistemleri" },
  { href: "#ses-isik", label: "Ses ve ışık planı" },
  { href: "#truss-rigging", label: "Truss ve rigging" },
  { href: "#yayin-tercume", label: "Canlı yayın ve tercüme" },
  { href: "#acik-alan", label: "Çadır ve açık alan" },
  { href: "#teknik-kesif", label: "Keşif ve operasyon" },
  { href: "#sss", label: "Sık sorulan sorular" },
];

const CORNERSTONE_LINKS = [
  { href: "/sahne-kiralama", label: "Sahne Kurulumu" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  { href: "/truss-kiralama", label: "Truss ve Rigging" },
];

const FAQ_ITEMS = [
  {
    question: "Etkinlik prodüksiyonu hizmetine neler dahildir?",
    answer:
      "Kapsama göre podyum, sahne, LED ekran, ses ve ışık, truss, rigging, kamera, canlı yayın, simultane tercüme, çadır, teknik ekip, nakliye, kurulum ve söküm hizmetleri birlikte planlanabilir.",
  },
  {
    question: "Sahne ve LED ekran ölçüsü nasıl belirlenir?",
    answer:
      "Ölçüler; mekânın boyutu, izleyici mesafesi, katılımcı sayısı, sahnede yer alacak kişi sayısı, kamera açıları ve gösterilecek içeriğin formatına göre belirlenir. Nihai uygulama için teknik keşif gerekir.",
  },
  {
    question: "Etkinlik öncesinde teknik keşif yapılıyor mu?",
    answer:
      "Kapsamlı projelerde mekân ölçüleri, yükleme alanları, elektrik altyapısı, rigging noktaları, görüş açıları ve kurulum saatlerinin kontrol edilmesi önerilir. Keşif, uygulanabilir bir teknik planın temelidir.",
  },
  {
    question: "Sadece belirli bir ekipmanı kiralayabilir miyiz?",
    answer:
      "Evet. Yalnızca podyum, sahne, LED ekran, ses sistemi veya ışık sistemi talep edebilirsiniz. İhtiyaç duyulduğunda tüm teknik prodüksiyon aynı koordinasyon altında da yönetilebilir.",
  },
  {
    question: "Fiyat teklifi için hangi bilgiler gereklidir?",
    answer:
      "Etkinlik tarihi, şehir ve mekân, katılımcı sayısı, kurulum-söküm saatleri, sahne akışı, canlı yayın veya tercüme ihtiyacı ile istenen hizmetlerin paylaşılması teklif sürecini hızlandırır.",
  },
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({ canonical: BLOG_PATH, tr: BLOG_PATH }),
  image: HERO_IMAGE,
  category: "Etkinlik Prodüksiyonu",
  keywords: [
    "etkinlik prodüksiyonu",
    "sahne kurulumu",
    "podyum kiralama",
    "LED ekran kiralama",
    "ses sistemi",
    "ışık sistemi",
    "truss rigging",
    "canlı yayın",
    "simultane tercüme",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: BLOG_URL,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 4000,
        height: 1848,
        alt: "Sahne, LED ekran, line-array ses sistemi ve ışıkla tamamlanan Sahneva festival prodüksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
};

function ArticleSchema() {
  const site = String(SITE_URL || "").replace(/\/$/, "");
  const modified = MODIFIED_DATE || PUBLISH_DATE;

  return (
    <JsonLd
      id="ld-event-production-article"
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        headline: TITLE,
        description: DESCRIPTION,
        image: `${site}${HERO_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: modified,
        inLanguage: "tr-TR",
        author: { "@type": "Organization", name: AUTHOR_NAME },
        publisher: { "@type": "Organization", name: "Sahneva", url: site },
        isPartOf: { "@type": "Blog", "@id": `${site}/blog#blog` },
      }}
    />
  );
}

function FaqSchema() {
  return (
    <JsonLd
      id="ld-event-production-faq"
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

function Figure({ src, alt, caption, width, height }) {
  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) calc(100vw - 2rem), 896px"
        className="h-auto w-full"
        loading="lazy"
        quality={78}
      />
      <figcaption className="px-5 py-4 text-center text-sm font-medium leading-relaxed text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function InfoBox({ title, children }) {
  return (
    <aside
      role="note"
      aria-label={title}
      className="not-prose my-9 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-slate-50 p-6 shadow-sm"
    >
      <p className="m-0 text-base font-black text-blue-950">{title}</p>
      <div className="mt-2 text-base leading-relaxed text-slate-700">{children}</div>
    </aside>
  );
}

function ProductionCta() {
  return (
    <section className="not-prose my-12 rounded-3xl bg-slate-950 p-7 text-white shadow-xl md:p-10">
      <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-blue-200">Teklif ve teknik keşif</p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
        Etkinliğiniz için doğru sistemi birlikte planlayalım
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
        Tarih, mekân, katılımcı sayısı ve etkinlik akışını paylaşın. Sahne, LED ekran, ses, ışık ve tamamlayıcı
        hizmetleri gerçek ihtiyaca göre tek teknik plan içinde netleştirelim.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-blue-50"
        >
          Teklif isteyin
        </Link>
        <a
          href={WA_URL}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-bold text-white transition hover:bg-white/10"
        >
          WhatsApp ile ulaşın
        </a>
      </div>
    </section>
  );
}

export default function EventProductionBlogPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: TITLE, url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      <FaqSchema />

      <BlogLayout
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Sahne, LED ekran, line-array ses sistemi ve ışıkla tamamlanan Sahneva festival prodüksiyonu",
        }}
        pills={["Sahneva Blog", "Etkinlik Prodüksiyonu", "Teknik Rehber"]}
        title="Podyumdan Ana Sahneye: Profesyonel Etkinlik Prodüksiyonu Nasıl Planlanır?"
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="13 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={SLUG}
        currentCategory={metadata.category}
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: "/sahne-kiralama", label: "Sahne Kurulumu" },
          { href: "/led-ekran-kiralama", label: "LED Ekran" },
          { href: "/iletisim", label: "Teklif Al" },
        ]}
        whatsappUrl={WA_URL}
      >
        <div className="mx-auto max-w-4xl">
          <div className="not-prose mb-10 rounded-2xl border-l-4 border-blue-600 bg-blue-50 px-6 py-5 text-lg font-medium leading-relaxed text-slate-800">
            Başarılı etkinlik; tek tek kiralanmış ekipmanlardan değil, sahne, görüntü, ses, ışık, güvenlik ve
            operasyonun aynı plan içinde çalışmasından doğar.
          </div>

          <p>
            Başarılı bir etkinlik yalnızca iyi bir sahne, güçlü bir ses sistemi veya büyük bir LED ekrandan oluşmaz.
            Katılımcının mekâna girdiği ilk andan etkinliğin sona erdiği dakikaya kadar gördüğü, duyduğu ve
            hissettiği her ayrıntı aynı prodüksiyon planının parçasıdır.
          </p>
          <p>
            Kurumsal toplantılar, kongreler, lansmanlar, konserler, festivaller ve uluslararası organizasyonlarda
            podyum yüksekliğinden ekran çözünürlüğüne, ses dağılımından kamera görüntüsüne kadar verilen kararlar
            birbirini etkiler. Bu nedenle profesyonel etkinlik prodüksiyonu yalnızca ekipman kiralama değil; tasarım,
            mühendislik, lojistik, kurulum ve canlı operasyon süreçlerinin birlikte yönetilmesidir.
          </p>

          <h2 id="planlama">Etkinlik prodüksiyonu nerede başlar?</h2>
          <p>Teknik ekipman listesinden önce etkinliğin gerçek ihtiyacını belirlemek gerekir:</p>
          <ul>
            <li>Etkinliğin türü, amacı ve konuşma ya da gösteri akışı nedir?</li>
            <li>Katılımcı sayısı, mekânın ölçüleri ve tavan yüksekliği nedir?</li>
            <li>Sahneyi kaç kişi kullanacak; panel, konser, lansman veya yayın var mı?</li>
            <li>İzleyicilerin sahne ve ekranlara görüş açısı nasıl olacak?</li>
            <li>Yükleme, kurulum, prova ve söküm için ne kadar süre var?</li>
          </ul>
          <p>
            Bu bilgiler netleşmeden hazırlanan bir liste gereğinden büyük, yetersiz veya mekâna uyumsuz kalabilir.
            Sahneva’da proje; mekân, içerik ve izleyici deneyimi açısından değerlendirilir, ardından uygulanabilir
            teknik sistem oluşturulur.
          </p>

          <h2 id="podyum-platform">Podyum ve platform sistemleri</h2>
          <p>
            Podyum ilk bakışta etkinliğin en basit parçası gibi görünür. Oysa yanlış ölçülendirilmiş veya doğru
            sabitlenmemiş bir platform hem görünürlük hem de operasyon açısından sorun çıkarır. Konuşmacı platformu,
            defile yürüyüş yolu, ödül alanı, tribün yükseltisi ve LED ekran taşıyıcı zemini farklı teknik ihtiyaçlara
            sahiptir.
          </p>
          <p>
            Bir <Link href="/podyum-kiralama">podyum veya platform sistemi</Link> planlanırken net ölçü, taşıyacağı
            yük, yükseklik, merdiven-rampa ihtiyacı, zemin kaplaması, ön kapama ve güvenlik detayları birlikte ele
            alınır. Modüler sistemler, sahne ve dekorla uyumlu bir kurgu oluşturmak için projeye göre şekillendirilebilir.
          </p>
          <Figure
            src={ARTICLE_IMAGES.podium}
            width={1848}
            height={4000}
            alt="Sıfır Atık Festivali ana sahnesinde modüler podyum ve zemin uygulaması"
            caption="Sıfır Atık Festivali sahnesinde modüler podyum ve zemin katmanları; ekipman yerleşimi ve güvenli geçiş alanları birlikte planlandı."
          />

          <h2 id="sahne-kurulumu">Profesyonel sahne kurulumu</h2>
          <p>
            Sahne, etkinliğin yalnızca fiziksel merkezi değil; görsel anlatımın da ana unsurudur. Konuşmacılar,
            sanatçılar, ekranlar, dekorlar ve ışık sistemleri aynı sahne tasarımı içinde dengeli biçimde
            konumlandırılmalıdır. Bu yüzden sahne genişliği ve yüksekliği tek başına yeterli bir karar değildir.
          </p>

          <h3>Kurumsal etkinlik ve kongre sahneleri</h3>
          <p>
            Kurumsal sahnelerde konuşmacının görünürlüğü, sunum ekranlarının okunabilirliği ve markanın görsel dili
            öne çıkar. Ana ekran, yan ekranlar, kürsü, panel koltukları ve dekoratif yüzeyler tek bir akışın parçası
            olmalıdır. <Link href="/sahne-kiralama">Sahne kurulumu</Link> bu nedenle salon yerleşimi ve kamera
            açılarıyla birlikte düşünülür.
          </p>

          <h3>Konser ve festival sahneleri</h3>
          <p>
            Konserlerde ses, ışık, video, rigging ve sanatçı operasyonları aynı anda çalışır. Sahne çatısı,
            taşıyıcılar, güvenlik alanları, sahne arkası geçişleri ve hava koşulları ayrı ayrı değerlendirilir;
            provalar ise canlı akışın teknik sigortasıdır.
          </p>

          <h3>Lansman ve hibrit etkinlik sahneleri</h3>
          <p>
            Ürün lansmanlarında sahne yalnızca bir sunum alanı değildir. LED yüzeyler, ışık geçişleri, video içeriği,
            özel dekor ve kamera kadrajı, ürünü doğru anda görünür kılan aynı anlatının parçalarıdır. Fiziksel ve
            ekran başındaki deneyimin birlikte planlanması için <Link href="/sozluk#hibrit-etkinlik">canlı yayınlı
            hibrit etkinlik</Link> yaklaşımı başlangıçtan itibaren ele alınmalıdır.
          </p>
          <Figure
            src={ARTICLE_IMAGES.stage}
            width={4000}
            height={1848}
            alt="LED ekran, sahne podyumu, ışık ve enstrümanlarla teknik prova yapan ekip"
            caption="Ana sahne, LED ekran, podyum, ses ve ışık bileşenlerinin prova aşamasında birlikte kontrol edilmesi canlı günündeki riski azaltır."
          />

          <h2 id="led-ekran">LED ekran sistemleri</h2>
          <p>
            LED ekranlar; sunum, canlı kamera görüntüsü, sponsor içeriği ve sahne tasarımını güçlendirmek için
            etkinlik prodüksiyonunun merkezindedir. Ancak doğru seçim yalnızca ekranın metrekaresinden ibaret değildir.
            İzleme mesafesi, çözünürlük, parlaklık, kullanım alanı ve içerik formatı birlikte değerlendirilir.
          </p>

          <h3>İç mekân, dış mekân ve sahne yüzeyleri</h3>
          <p>
            Kongre, toplantı ve gala gibi iç mekânlarda yakın izleme mesafesine uygun piksel aralığı gerekir. Açık
            hava etkinliklerinde ise yüksek parlaklık, hava koşullarına uygun kabin yapısı ve güvenli taşıyıcı sistem
            önceliklidir. Şeffaf LED, mesh ve LED zemin gibi sistemler de sahnenin aktif bir görsel yüzeye dönüşmesini
            sağlayabilir. Ayrıntılı seçenekler için <Link href="/led-ekran-kiralama">LED ekran kiralama</Link>
            sayfasını inceleyebilirsiniz.
          </p>
          <Figure
            src={ARTICLE_IMAGES.led}
            width={1600}
            height={739}
            alt="Kurumsal protokol etkinliğinde ana LED ekran, yan ekranlar ve sahne ışık kurgusu"
            caption="İç mekân kurumsal etkinliğinde ana LED ekran, yan ekranlar ve sahne ışığı; salonun her noktasından okunabilirlik için birlikte kurgulandı."
          />

          <h2 id="ses-isik">Ses sistemi ve ışık tasarımı</h2>
          <p>
            Profesyonel ses sistemi yalnızca yüksek ses vermek anlamına gelmez. Konuşmanın anlaşılır, müziğin dengeli
            ve ses seviyesinin salonun her bölümünde olabildiğince eşit olması gerekir. Katılımcı sayısı, alanın
            ölçüsü, akustik yapısı, mikrofon türleri, monitör ihtiyacı ve yayın bağlantıları bu planı belirler.
          </p>
          <p>
            Işık ise sahnenin görünürlüğünü sağlamanın yanında etkinliğin atmosferini kurar. Sahne önü ışıkları,
            moving head’ler, LED barlar, ambiyans aydınlatması ve takip spotları; konuşmacı, dekor, marka rengi ve
            müzik akışıyla uyumlu olmalıdır. <Link href="/ses-isik-sistemleri">Ses ve ışık sistemleri</Link> kamera
            kaydı veya canlı yayın varsa titreşimsiz çalışma ve renk sıcaklığı bakımından ayrıca kontrol edilir.
          </p>
          <InfoBox title="Kamera için de doğru ışık gerekir">
            Salonda etkileyici görünen bir ışık kurgusu, kamera açısından doğru planlanmadığında aşırı parlak ya da
            karanlık bir görüntü üretebilir. Işık, LED içeriği ve kamera kadrajı aynı teknik provada birlikte test
            edilmelidir.
          </InfoBox>

          <h2 id="truss-rigging">Truss ve rigging sistemleri</h2>
          <p>
            LED ekranların, ışık cihazlarının, ses sistemlerinin ve dekoratif yapıların güvenli şekilde taşınması için{" "}
            <Link href="/truss-kiralama">truss ve rigging sistemleri</Link> kullanılır. Planlamada ekipmanın toplam
            ağırlığı, yük dağılımı, mekânın taşıma noktaları ve motor kapasitesi birlikte hesaplanır.
          </p>
          <p>
            Hareketli ekran, ışık köprüsü veya sahne dekoru kullanılacak projelerde güvenlik, görsel tasarımın önünde
            tutulur. Teknik ekip; askı noktaları, sabitleme, erişim alanı ve gösteri akışındaki olası hareketleri
            kurulumdan önce netleştirir.
          </p>
          <Figure
            src={ARTICLE_IMAGES.rigging}
            width={3264}
            height={1472}
            alt="Dicle Fest açık hava sahnesinde truss, line-array, LED ekran ve ışık sistemleri"
            caption="Dicle Fest açık hava sahnesinde truss, line-array, LED ekran ve ışık sistemleri açık alan koşullarıyla birlikte planlandı."
          />

          <h2 id="yayin-tercume">Canlı yayın, kamera ve simultane tercüme</h2>
          <p>
            Fiziksel etkinlik ve dijital yayın artık iki ayrı operasyon değildir. Sahne tasarımı, LED içerikleri,
            ışık sistemi ve kamera açıları proje aşamasında birlikte değerlendirilmelidir. Reji, görüntü mikseri,
            kamera operatörleri, grafik sistemleri, kayıt altyapısı ve yayın bağlantısı; hem salondaki hem de ekran
            başındaki izleyicinin deneyimini belirler.
          </p>

          <h3>Canlı yayın ve çok kameralı reji</h3>
          <p>
            Canlı kamera sinyalinin LED ekrana aktarılması, sunumlarla karıştırılması ve çevrim içi platformlara
            yayınlanması için saha reji akışı hazırlanır. Kameraların görüşünü kapatmayan dekorlar ve yayın formatına
            uygun içerikler, profesyonel bir canlı yayın deneyimi için temel gerekliliklerdir.
          </p>

          <h3>Simultane tercüme ve kongre akışı</h3>
          <p>
            Uluslararası toplantılarda tercüman kabinleri, dinleme cihazları, tercüman konsolları ve salon ses
            sistemi uyumlu çalışmalıdır. <Link href="/sozluk#simultane-ceviri">Simultane tercüme</Link> kanalları
            canlı yayına da entegre edilebilir; böylece çevrim içi katılımcılar kendi dillerinden etkinliği takip edebilir.
          </p>
          <Figure
            src={ARTICLE_IMAGES.broadcast}
            width={1600}
            height={739}
            alt="Kamera, görüntü mikseri ve LED ekranla yürütülen canlı yayın reji operasyonu"
            caption="Kamera, görüntü mikseri ve sahne ekranı aynı reji akışında kontrol edilerek salon ve canlı yayın deneyimi eş zamanlı yönetildi."
          />

          <h2 id="acik-alan">Çadır ve açık alan etkinlikleri</h2>
          <p>
            Açık hava organizasyonlarında prodüksiyon planı, hava koşullarını da kapsar. Sahne, ses, ışık ve LED
            ekranın yanında çadır, zemin kaplama, enerji dağıtımı ve yağmur koruma çözümleri de aynı projeye dahil
            edilebilir. Katılımcı sayısı, zemin yapısı, rüzgâr koşulları ve kurulacak teknik ekipman;{" "}
            <Link href="/cadir-kiralama">çadır sisteminin</Link> seçiminde belirleyicidir.
          </p>
          <Figure
            src={ARTICLE_IMAGES.tent}
            width={4096}
            height={1840}
            alt="Dicle Fest'te kurulan dome çadır, etkinlik alanı ve ziyaretçi akışı"
            caption="Dicle Fest etkinlik alanında dome çadır, ziyaretçi akışı ve yardımcı etkinlik yapıları birlikte kurgulandı."
          />

          <h2 id="teknik-kesif">Teknik keşif ve etkinlik günü operasyonu</h2>
          <p>
            Mekân planları sahadaki gerçek koşulları her zaman tam göstermez. Yükleme kapıları, asansör kapasitesi,
            kolonlar, elektrik panoları, rigging noktaları, LED ekran görüş açıları ve kamera konumları teknik keşifte
            netleşir. Keşif sonrasında hazırlanan yerleşim planı, belirsizlikleri kurulumdan önce görünür kılar.
          </p>
          <p>
            Profesyonel hizmet, ekipman kurulduğunda sona ermez. Prova, run-of-show, sahne geçişleri, video
            gösterimleri ve teknik müdahale planı etkinlik gününde ortak bir akışla yürütülmelidir. Tüm hizmetlerin tek
            koordinasyon altında çalışması; iletişimi hızlandırır, elektrik ve veri altyapısını doğru hesaplatır ve
            soruna daha hızlı müdahale edilmesini sağlar.
          </p>
          <p>
            Sahneva’nın farklı ölçeklerdeki uygulamalarını görmek için <Link href="/yaptiklarimiz">Yaptıklarımız</Link>
            sayfasını; mekan, ekipman ve teklif ayrıntıları için ise <Link href="/iletisim">iletişim sayfasını</Link>
            ziyaret edebilirsiniz.
          </p>

          <ProductionCta />

          <section id="sss" aria-labelledby="sss-baslik">
            <h2 id="sss-baslik">Sık sorulan sorular</h2>
            <div className="not-prose mt-7 space-y-4">
              {FAQ_ITEMS.map((item) => (
                <section key={item.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="m-0 text-lg font-black text-slate-950">{item.question}</h3>
                  <p className="mb-0 mt-3 text-base leading-relaxed text-slate-700">{item.answer}</p>
                </section>
              ))}
            </div>
          </section>

          <BlogRelatedLinks
            services={[
              { href: "/podyum-kiralama", label: "Podyum ve Platform Kiralama" },
              { href: "/sahne-kiralama", label: "Sahne Kurulumu" },
              { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
              { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
              { href: "/truss-kiralama", label: "Truss ve Rigging" },
              { href: "/cadir-kiralama", label: "Çadır Kiralama" },
              { href: "/yaptiklarimiz", label: "Yaptıklarımız" },
            ]}
          />
        </div>
      </BlogLayout>
    </>
  );
}
