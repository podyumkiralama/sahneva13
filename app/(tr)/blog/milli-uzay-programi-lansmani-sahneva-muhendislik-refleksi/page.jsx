import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "milli-uzay-programi-lansmani-sahneva-muhendislik-refleksi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/milli-uzay-programi-hero.webp";
const IMG_PODYUM = "/img/blog/milli-uzay-programi-podyum.webp";
const IMG_DOME = "/img/blog/milli-uzay-programi-dome.webp";
const IMG_LASER_LED = "/img/blog/milli-uzay-programi-lazer-led.webp";
const IMG_AKUSTIK = "/img/blog/milli-uzay-programi-akustik.webp";

const TITLE = "Milli Uzay Programı Lansmanı (2021): Sahneva’nın Mühendislik Refleksiyle Tasarlanan Kusursuz Sahne";
const DESCRIPTION =
  "2021 Milli Uzay Programı Lansmanı’nda Sahneva’nın mühendislik refleksiyle tasarladığı pnömatik dome, sessiz akustik çözümler ve 360° lazer–LED senkronizasyonu.";

const PUBLISH_DATE = "2021-02-09T00:00:00+03:00";
const MODIFIED_DATE = "2021-02-09T00:00:00+03:00";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const VIDEO_ID = "j1Tr5l8DVW8";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const VIDEO_THUMB = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export const metadata = {
  title: "Milli Uzay Programı Lansmanı (2021) | Mühendislik Refleksi",
  description: DESCRIPTION,
  keywords: [
    "Milli Uzay Programı",
    "Sahneva",
    "kurumsal lansman",
    "pnömatik dome",
    "lazer mapping",
    "led ekran kurulumu",
    "podyum sahne",
    "mühendislik sahne tasarımı",
    "Beştepe Kongre Merkezi",
  ],
  alternates: {
    canonical: BLOG_URL,
  },
  image: HERO_IMG,
  date: PUBLISH_DATE,
  category: "Kurumsal Organizasyon",
  readTime: "7 dk okuma",
  author: AUTHOR_NAME,
  openGraph: {
    title: "Milli Uzay Programı Lansmanı (2021) | Sahneva Mühendislik Refleksi",
    description:
      "Sahneva’nın Milli Uzay Programı Lansmanı’nda uyguladığı mühendislik çözümleri ve akıllı pnömatik sistemler.",
    url: BLOG_URL,
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Milli Uzay Programı Lansmanı – Sahneva",
      },
    ],
    locale: "tr_TR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milli Uzay Programı Lansmanı (2021) | Sahneva Mühendislik Refleksi",
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
};

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: TITLE,
        description: DESCRIPTION,
        image: `${SITE_URL}${HERO_IMG}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organizasyon",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/img/logo.webp` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        video: { "@id": `${BLOG_URL}#video` },
      },
      {
        "@type": "VideoObject",
        "@id": `${BLOG_URL}#video`,
        name: "Milli Uzay Programı Lansmanı 2021",
        description:
          "Milli Uzay Programı Lansmanı’nda Sahneva’nın mühendislik yaklaşımını anlatan video.",
        thumbnailUrl: [VIDEO_THUMB],
        uploadDate: PUBLISH_DATE,
        embedUrl: VIDEO_EMBED_URL,
        contentUrl: VIDEO_URL,
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organizasyon",
          url: SITE_URL,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}

const Breadcrumbs = () => (
  <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-600">
    <ol className="flex items-center space-x-2 flex-wrap">
      <li>
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Anasayfa
        </Link>
      </li>
      <li aria-hidden="true" className="text-gray-500">
        /
      </li>
      <li>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Blog
        </Link>
      </li>
      <li aria-hidden="true" className="text-gray-500">
        /
      </li>
      <li className="text-gray-900 font-medium truncate" aria-current="page">
        Milli Uzay Programı Lansmanı
      </li>
    </ol>
  </nav>
);

function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 960px"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-gray-600">{caption}</figcaption> : null}
    </figure>
  );
}

export default function Page() {
  
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: (metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "Blog"), url: BLOG_URL },
  ];

return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <section className="mx-auto w-full max-w-5xl px-4 py-12" aria-labelledby="page-title">
              <Breadcrumbs />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\\s*\\|\\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Prodüksiyon & Teknik", "Etkinlik Mühendisliği"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="3\u20135 dk okuma"
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/sahne-kiralama"), label: "Sahne Kiralama", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/podyum-kiralama"), label: "Podyum Kiralama", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/led-ekran-kiralama"), label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

          <p>
            9 Şubat 2021 tarihinde, Ankara Beştepe Millet Kongre ve Kültür Merkezi, Türkiye’nin
            gelecek 10 yıllık uzay vizyonunun açıklandığı tarihi bir ana tanıklık etti. Sahneva
            olarak biz; bu dev prodüksiyonun yalnızca teknik tedarikçisi değil, fiziksel
            imkânsızlıkları teknolojiyle çözen <strong>mühendislik partneri</strong> olarak sahadaydık.
          </p>
          <p>
            Bu ölçekte ve bu protokol seviyesinde gerçekleştirilen organizasyonlar, klasik sahne
            kurulumlarının çok ötesinde bir disiplin ve refleks gerektirir. Bizim için bu proje;
            ekipman yerleştirmekten ziyade, baştan sona tasarlanmış bir sistem problemiydi.
          </p>

          <h2 id="standartlarin-otesinde">1. Standartların Ötesinde: Cumhurbaşkanlığı Seviyesinde Uygulama</h2>
          <p>
            Böylesine yüksek bir protokol seviyesinde; ses, ışık, LED ekran ve podyum kurulumu
            yapmak, hata payının fiilen <strong>sıfır</strong> olduğu bir mühendislik yaklaşımı
            gerektirir. Lansman sahnesinde uyguladığımız tüm süreçler, <Link href="/kurumsal-organizasyon">kurumsal organizasyon</Link> projelerimizdeki standartların da ötesine taşındı.
          </p>

          <h3>Podyum ve Scaff Altyapısı</h3>
          <p>
            Salonun her noktasından kusursuz görüş açısı sağlamak amacıyla inşa ettiğimiz podyum
            ve scaff (iskele) sistemleri, milimetrik terazilerle ve detaylı yük hesaplarıyla
            kuruldu. Bu yapı yalnızca estetik değil; yüksek taşıma kapasitesi ve titreşim
            stabilitesi açısından da standart üstü bir performans sundu.
          </p>
          <ImgFigure
            src={IMG_PODYUM}
            alt="Milli Uzay Programı Lansmanı podyum sahne ve scaff altyapısı"
            caption="Podyum ve taşıyıcı scaff sistemleri; görünürlük, stabilite ve güvenlik için milimetrik hesaplarla kuruldu."
          />

          <h3>Görsel ve İşitsel Netlik</h3>
          <p>
            Yüksek çözünürlüklü dev LED duvarlar ve homojen ses dağılımı, Sahneva’nın her projesinde
            uyguladığı temel kalite standardıdır. Ancak bu lansmanı benzerlerinden ayıran unsur, bu
            standartların da ötesine geçen mühendislik yaklaşımı ve sistem bütünlüğüydü. Detaylı
            planlama süreci için <Link href="/led-ekran-kiralama">LED ekran kiralama</Link> ve
            <Link href="/sahne-kiralama"> sahne kiralama</Link> hizmetlerimizdeki metodolojiyi uyguladık.
          </p>

          <h2 id="akilli-sistem">2. Mühendislik Farkımız: Tavanda Gizli “Akıllı Sistem”</h2>
          <p>
            Pek çok firma sahne kurabilir, LED ekran dizebilir. Sahneva’yı farklı kılan nokta;
            mekânın tavanını pasif bir yüzey olmaktan çıkarıp <strong>aktif bir mühendislik sistemine</strong>
            dönüştürebilmesidir.
          </p>
          <p>
            Videonun odak noktası olan dairesel Dome (Kubbe) yapısı, bir dekor öğesi değil; başlı
            başına çalışan, veri üreten ve tepki veren bir ünitedir.
          </p>
          <ImgFigure
            src={IMG_DOME}
            alt="Pnömatik dome yapısı ve lazer mapping yüzeyi"
            caption="Pnömatik dome, lazer mapping için sabit gerginlik sağlayan akıllı bir sistem olarak tasarlandı."
          />

          <h3>Pnömatik Mimari ve Basınç Sensörleri</h3>
          <p>
            Tavandaki dev kubbenin iç bükey yüzeyinin lazer mapping için kusursuz düzlemde kalması
            gerekiyordu. Kumaş yüzeyin içerisine entegre ettiğimiz hassas basınç sensörleri, iç
            hacimdeki hava dengesini milisaniyelik verilerle sürekli ölçtü.
          </p>

          <h3>Akıllı Hava Yönetimi (Feedback Loop)</h3>
          <p>
            Basınç değerleri ideal seviyenin altına düştüğünde sensörlerden gelen veriyle kompresörler
            otomatik olarak devreye girdi. İdeal gerginliğe ulaşıldığında ise sistem kendini dengeledi.
            Bu geri besleme döngüsü sayesinde kumaş yüzey, lazer projeksiyon için “jilet gibi” sabit kaldı.
          </p>

          <h2 id="akustik">3. Akustik İzolasyon: Boru Hattı Mühendisliği</h2>
          <p>
            Beştepe gibi akustiğin kritik olduğu bir mekânda, dev pnömatik sistemlerin oluşturabileceği
            en ufak bir mekanik gürültü dahi kabul edilemezdi. Bu noktada problemi klasik yöntemlerle
            değil, <strong>mühendislik bakış açısıyla</strong> ele aldık.
          </p>
          <ImgFigure
            src={IMG_AKUSTIK}
            alt="Akustik izolasyon için dışarıdan içeriye taşınan kompresör sistemi"
            caption="Kompresörler salon dışına konumlandırıldı; ses izolasyonu boru hattı üzerinden sağlandı."
          />
          <p>
            Kompresör sistemlerini tamamen salonun dışına konumlandırdık. Hava, dış mekândan içeriye
            özel üretim hava hortumları ve planlanmış bir boru hattı sistemi aracılığıyla taşındı.
            Böylece dışarıdaki mekanik güç, iç mekâna yalnızca sessiz ve kontrollü bir basınç olarak yansıdı.
          </p>

          <h2 id="senkronizasyon">4. 360 Derece Senkronizasyon (Lazer & LED)</h2>
          <p>
            Lazer mapping uygulamalarının başarısı, yansıtma yüzeyinin mutlak stabilitesine bağlıdır.
            Geliştirdiğimiz pnömatik sistem sayesinde kubbe yüzeyi milimetrik dahi hareket etmedi.
          </p>
          <ImgFigure
            src={IMG_LASER_LED}
            alt="Lazer mapping ve LED senkronizasyonu"
            caption="Dome yüzeyi ile LED duvarlar arasındaki renk ve zamanlama kalibrasyonu kusursuz biçimde sağlandı."
          />
          <p>
            Bu sayede tavandaki galaksi animasyonları maksimum netlikte yansıtıldı. Yanlardaki LED
            duvarlarla lazer sistemleri arasında renk, parlaklık ve zamanlama kalibrasyonu kusursuz
            biçimde sağlandı. Salonun fiziksel sınırları algısal olarak tamamen ortadan kalktı ve
            izleyiciye yalnızca bir lansman değil, <strong>tam anlamıyla sürükleyici bir deneyim</strong>
            sunuldu.
          </p>

          <h2 id="neden-sahneva">5. Neden Sahneva?</h2>
          <p>
            Sahneva olarak kendimizi yalnızca ekipman kiralayan bir firma olarak değil,
            <strong> zorluk çözücü bir mühendislik ofisi</strong> olarak konumlandırıyoruz.
          </p>
          <p>
            Milli Uzay Programı Lansmanı’ndaki başarımız; podyumun sağlamlığından, LED ekranların
            büyüklüğünden değil; tavandaki basınç sensörlerinin algoritmasından ve dışarıdan içeriye
            çekilen o hava borusunun ardındaki mühendislik mantığından doğdu. Bizim farkımız; demiri
            birleştirmek değil, o demire ve kumaşa <strong>akıl katmaktır</strong>.
          </p>

          <h2 id="video">Öne Çıkan Video</h2>
          <p>
            Lansmanın atmosferini ve teknik detaylarını daha yakından görmek için aşağıdaki videoyu
            izleyebilirsiniz.
          </p>
          <div className="not-prose my-8" aria-labelledby="video-title">
            <div
              className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                title="Milli Uzay Programı Lansmanı Video"
                src={VIDEO_EMBED_URL}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p id="video-title" className="mt-3 text-sm text-gray-600">
              Video öne çıkan görsel: {VIDEO_THUMB}
            </p>
          </div>

          <h2 id="teknik-ozet">Teknik Vaka Analizi (Summary)</h2>
          <ul>
            <li><strong>Mekân:</strong> Beştepe Millet Kongre ve Kültür Merkezi, Ankara</li>
            <li><strong>Altyapı:</strong> Standart üstü podyum, scaff, LED ekran ve ışık uygulamaları</li>
            <li><strong>Ana İnovasyon:</strong> Basınç sensörlü, otomatik kontrollü pnömatik Dome sistemi</li>
            <li><strong>Akustik Çözüm:</strong> Harici kompresör yerleşimi ve kapalı boru hattı hava beslemesi</li>
            <li>
              <strong>Sonuç:</strong> Protokol seviyesinde sıfır hata toleransıyla, sessiz, stabil ve tam
              senkronize bir 360° görsel-işitsel atmosfer
            </li>
          </ul>

          <BlogRelatedLinks
            services={[
              { href: "/sahne-kiralama", label: "Sahne Kiralama" },
              { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
            ]}
          />
      </BlogLayout>
  );}
