import Image from "next/image";
import Link from "next/link";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "etkinlikler-icin-led-ekran-secimi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const PUBLISH_DATE = "2026-04-12T09:00:00+03:00";
const MODIFIED_DATE = "2026-04-12T09:00:00+03:00";

const HERO_IMG = "/img/blog/etkinlikler-icin-led-ekran-secimi-hero.webp";
const CONFERENCE_IMG = "/img/blog/kurumsal-konferans-led-ekran-kurulumu.webp";
const INDOOR_IMG = "/img/blog/kurumsal-etkinlik-led-ekran-sahnesi.webp";
const LAUNCH_IMG = "/img/blog/marka-lansmani-led-ekran-standi.webp";
const OUTDOOR_IMG = "/img/blog/dis-mekan-led-ekran-sahne-kurulumu.webp";
const AUDITORIUM_IMG = "/img/blog/konferans-salonu-led-ekran-sunumu.webp";

const TITLE = "LED Ekran Seçimi Rehberi";
const DESCRIPTION =
  "Etkinlik için LED ekran seçimi: indoor/outdoor kullanım, pixel pitch, parlaklık, görüş açısı ve güvenli kurulum kriterlerini öğrenin.";

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinliğim için doğru LED ekran çözümünü belirlemek istiyorum. Teknik analiz ve teklif alabilir miyim?"
  );
const TOC_ITEMS = [
  { href: "#neden-eksik-kalir", label: "LED ekran neden kritik" },
  { href: "#led-ekran-turleri", label: "LED ekran türleri" },
  { href: "#secim-kriterleri", label: "Seçim kriterleri" },
  { href: "#etkinlikte-fark", label: "Etkinlikte fark yaratan yönler" },
  { href: "#kiralama-mi-satin-alma-mi", label: "Kiralama mı satın alma mı" },
  { href: "#sonuc", label: "Sonuç ve planlama" },
  { href: "#sss", label: "Sık sorulan sorular" },
];
const CORNERSTONE_LINKS = [
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  ...CONTENT_CLUSTERS.ledScreen.relatedServices,
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: BLOG_URL,
    languages: {
      "tr-TR": BLOG_URL,
      "x-default": BLOG_URL,
    },
  },
  image: HERO_IMG,
  category: "LED Ekran",
  readTime: "7-9 dk okuma",
  keywords: [
    "LED ekran seçimi",
    "LED ekran kiralama",
    "etkinlik LED ekran",
    "outdoor LED ekran",
    "indoor LED ekran",
    "pixel pitch",
    "LED ekran parlaklık",
    "sahne LED ekran",
  ],
  openGraph: {
    title: `${TITLE} | Sahneva`,
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Kurumsal etkinlikte sahne arkasında kullanılan profesyonel LED ekran kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etkinlikler İçin LED Ekran Seçimi",
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  robots: { index: true, follow: true },
};

const FAQ_ITEMS = [
  {
    question: "Etkinlik için LED ekran seçerken ilk bakılması gereken kriter nedir?",
    answer:
      "İlk kriter ekranın nerede kullanılacağıdır. İç mekan ve dış mekan LED ekranlar parlaklık, dayanıklılık, pixel pitch ve kurulum gereksinimleri açısından farklıdır.",
  },
  {
    question: "Pixel pitch değeri nasıl seçilir?",
    answer:
      "Pixel pitch, izleyici ile ekran arasındaki mesafeye göre seçilir. Yakın izleme mesafesinde daha düşük pixel pitch, uzak mesafede ise daha geniş pixel pitch yeterli olur.",
  },
  {
    question: "Dış mekan LED ekranlarda hangi özellikler önemlidir?",
    answer:
      "Yüksek parlaklık, geniş görüş açısı, IP65 ve üzeri koruma sınıfı, sağlam taşıyıcı sistem, rüzgar yükü planlaması ve hızlı servis erişimi dış mekan LED ekranlarda kritik kriterlerdir.",
  },
  {
    question: "LED ekran kiralamak mı satın almak mı daha doğru?",
    answer:
      "Kısa süreli etkinlikler, farklı mekanlarda yapılan organizasyonlar ve teknik ekip gerektiren projeler için kiralama daha esnektir. Sürekli aynı alanda kullanılacak sistemlerde satın alma değerlendirilebilir.",
  },
];

function ArticleSchema() {
  const orgId = `${SITE_URL}/#org`;
  const editorId = `${SITE_URL}/#editor`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
    headline: "LED Ekran Seçimi Rehberi",
        description: DESCRIPTION,
        image: [`${SITE_URL}${HERO_IMG}`, `${SITE_URL}${CONFERENCE_IMG}`, `${SITE_URL}${OUTDOOR_IMG}`],
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog` },
        about: [
          { "@type": "Thing", name: "LED ekran kiralama" },
          { "@type": "Thing", name: "Etkinlik prodüksiyonu" },
          { "@type": "Thing", name: "Sahne LED ekran kurulumu" },
        ],
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Sahneva",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/img/logo.png`,
          contentUrl: `${SITE_URL}/img/logo.png`,
        },
      },
      {
        "@type": "Person",
        "@id": editorId,
        name: AUTHOR_NAME,
        url: SITE_URL,
        worksFor: { "@id": orgId },
      },
      {
        "@type": "FAQPage",
        "@id": `${BLOG_URL}#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <JsonLd data={data} />;
}

function ImgFigure({ src, alt, caption, portrait = false }) {
  return (
    <figure className="not-prose my-10">
      <div
        className={[
          "relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm",
          portrait ? "mx-auto max-w-3xl" : "",
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          width={portrait ? 1000 : 1400}
          height={portrait ? 1333 : 1050}
          className="h-auto w-full object-cover"
          sizes={portrait ? "(max-width: 768px) 100vw, 768px" : "(max-width: 768px) 100vw, 1100px"}
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-gray-500">{caption}</figcaption> : null}
    </figure>
  );
}

function Checklist({ items }) {
  return (
    <div className="not-prose my-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
      <h2 className="m-0 text-2xl font-black text-slate-950">LED ekran teklifinden önce kısa kontrol listesi</h2>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "LED Ekran Seçimi Rehberi", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMG,
          alt: "Konferans salonunda geniş LED ekran kurulumu ve sahne prodüksiyonu",
        }}
        pills={["LED Ekran", "Kiralama Rehberi", "Etkinlik Prodüksiyonu"]}
        title="LED Ekran Seçimi Rehberi"
        highlight="Kiralama Rehberi"
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="7-9 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={SLUG}
        currentCategory="LED Ekran"
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama", icon: "▦" },
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "▣" },
          { href: "/ses-isik-sistemleri", label: "Ses & Işık", icon: "◉" },
        ]}
        whatsappUrl={WA_URL}
      >
        <p>
          Günümüzde büyük ölçekli bir etkinliği LED ekran olmadan planlamak neredeyse mümkün değil. LED
          ekranlar artık yalnızca görüntü veren teknik ekipmanlar değil; markanın sahnedeki gücünü
          temsil eden, izleyiciyle bağ kuran ve etkinliğin etkisini büyüten stratejik bir prodüksiyon
          bileşenidir.
        </p>

        <p>
          Doğru seçilmiş bir ekran organizasyonu sıradan bir akıştan çıkarıp profesyonel bir deneyime
          dönüştürürken, yanlış tercih tüm prodüksiyon algısını aşağı çekebilir. Bu nedenle amaç en büyük
          veya en pahalı ekranı seçmek değil, mekan, içerik ve izleyici mesafesine uygun sistemi kurmaktır.
        </p>

        <p>
          Sahneva olarak Türkiye genelinde <Link href="/led-ekran-kiralama">LED ekran kiralama</Link>,{" "}
          <Link href="/sahne-kiralama">sahne kiralama</Link>, podyum,{" "}
          <Link href="/ses-isik-sistemleri">ses ve ışık sistemleri</Link> alanlarında projeye özel
          prodüksiyon çözümleri planlıyoruz. Her projeye tek ekipman değil, sahada birlikte çalışan bir
          sistem olarak yaklaşıyoruz.
        </p>

        <ImgFigure
          src={CONFERENCE_IMG}
          alt="Kurumsal konferansta ana sahne ve yan ekranlardan oluşan LED ekran kurulumu"
          caption="Kurumsal konferanslarda ana ekran, yan ekran ve içerik akışı birlikte planlanmalıdır."
        />

        <h2 id="neden-eksik-kalir">LED ekran olmadan etkinlik neden eksik kalır?</h2>
        <p>
          Büyük salonlarda, açık hava etkinliklerinde ve kurumsal lansmanlarda izleyicinin sahneyi aynı
          kalitede görmesi her zaman mümkün değildir. LED ekran; konuşmacı görüntüsü, marka filmi, sunum,
          canlı yayın, sponsor alanı ve sahne atmosferi için merkezi bir yüzey sağlar.
        </p>

        <p>
          Özellikle arka sıralardaki izleyici için ekran yalnızca destek değil, etkinliğin ana deneyim
          noktasıdır. Bu yüzden LED ekran seçimi, sahne tasarımı ve içerik kurgusuyla birlikte ele
          alınmalıdır.
        </p>

        <h2 id="led-ekran-turleri">LED ekran türleri ve kullanım alanları</h2>

        <h3>Dış mekan LED ekranlar</h3>
        <p>
          Açık hava organizasyonlarında kullanılan LED ekranlar, güneş ışığı, rüzgar, yağmur ve geniş
          izleyici mesafesi gibi değişkenlere göre seçilir. Konserler, festivaller, spor etkinlikleri,
          belediye organizasyonları ve açık alan lansmanlarında yüksek parlaklık ve dayanıklı panel yapısı
          kritik hale gelir.
        </p>

        <ImgFigure
          src={OUTDOOR_IMG}
          alt="Açık hava etkinliğinde sahne arkasında ve yanlarda kullanılan dış mekan LED ekranlar"
          caption="Outdoor LED ekranlarda parlaklık, görüş açısı ve taşıyıcı sistem güvenliği birlikte değerlendirilir."
        />

        <h3>İç mekan LED ekranlar</h3>
        <p>
          Kapalı alanlarda kullanılan LED ekranlar çözünürlük, renk doğruluğu ve detay performansıyla öne
          çıkar. Konferans, bayi toplantısı, ürün lansmanı, fuar standı ve kurumsal sunumlarda izleyici
          ekrana daha yakın olduğu için pixel pitch seçimi çok daha hassas yapılmalıdır.
        </p>

        <ImgFigure
          src={INDOOR_IMG}
          alt="Kurumsal etkinlik salonunda sahne arkasında kullanılan iç mekan LED ekran"
          caption="Yakın izleme mesafesinde düşük pixel pitch ve doğru içerik çözünürlüğü daha net görüntü sağlar."
          portrait
        />

        <h3>Mobil ve hızlı kurulum çözümleri</h3>
        <p>
          Çok lokasyonlu etkinliklerde, kısa kurulum sürelerinde veya pop-up marka aktivitelerinde mobil
          LED çözümler önemli avantaj sağlar. Burada yalnızca panel kalitesi değil; taşıma, kurulum ekibi,
          enerji altyapısı ve hızlı test süreci de planlamaya dahil edilmelidir.
        </p>

        <h2 id="secim-kriterleri">LED ekran seçerken nelere dikkat edilmeli?</h2>
        <p>
          LED ekran seçimi sadece ölçü ve fiyat karşılaştırmasıyla yapılmaz. Mekanın fiziksel yapısı,
          izleyici konumu, içerik türü, kamera kullanımı ve etkinliğin süresi birlikte değerlendirilmelidir.
        </p>

        <h3>Pixel pitch neden önemlidir?</h3>
        <p>
          Pixel pitch, LED ekrandaki pikseller arasındaki mesafeyi ifade eder. İzleyici ekrana ne kadar
          yakınsa daha düşük pixel pitch gerekir. Uzak mesafelerde ise daha geniş pixel pitch, gereksiz
          maliyeti önleyerek yeterli görüntü kalitesi sunabilir.
        </p>

        <p>
          Örneğin küçük bir lansman salonunda P2.6 veya daha düşük aralıklar düşünülebilirken, geniş açık
          alanlarda P4-P6 gibi seçenekler etkinliğin yapısına göre yeterli olabilir. Buradaki karar,
          ezbere değil izleme mesafesine göre verilmelidir.
        </p>

        <ImgFigure
          src={LAUNCH_IMG}
          alt="Marka lansmanı alanında dekorla entegre kullanılan LED ekran standları"
          caption="Marka deneyimi projelerinde LED ekran yalnızca sahnede değil, karşılama ve deneyim alanlarında da kullanılabilir."
        />

        <h3>Parlaklık ve görüş açısı</h3>
        <p>
          Kapalı alanlarda daha düşük nit değerleri yeterli olabilir; ancak dış mekan LED ekranlarda
          güneş ışığına rağmen net görüntü sağlamak için yüksek parlaklık gerekir. Geniş görüş açısı ise
          salonun veya alanın farklı noktalarından aynı görüntü kalitesine yaklaşmayı sağlar.
        </p>

        <h3>Yenileme hızı ve kamera performansı</h3>
        <p>
          Profesyonel etkinliklerde kamera kaydı veya canlı yayın varsa yenileme hızı kritik hale gelir.
          Düşük yenileme hızına sahip ekranlar kamerada titreme, çizgilenme veya görüntü bozulması
          oluşturabilir. Bu nedenle panellerin yayın dostu olması teklif aşamasında mutlaka sorgulanmalıdır.
        </p>

        <h3>Kurulum güvenliği ve teknik ekip</h3>
        <p>
          LED ekran kurulumu panelden ibaret değildir. Truss, taşıyıcı sistem, enerji dağıtımı, data
          kablolama, medya oynatıcı, yedek panel ve canlı operasyon ekibi aynı planın parçalarıdır. Doğru
          teknik ekip, etkinlik sırasında oluşabilecek riskleri daha başlamadan azaltır.
        </p>

        <Checklist
          items={[
            "Mekan iç mekan mı dış mekan mı?",
            "Ekran ile izleyici arasındaki minimum mesafe kaç metre?",
            "Sunum, video, canlı kamera veya yayın olacak mı?",
            "Ekran tek parça mı, yan ekranlarla birlikte mi kullanılacak?",
            "Kurulum için yükleme alanı ve enerji altyapısı hazır mı?",
            "İçerikler hangi çözünürlük ve formatta hazırlanacak?",
            "Yedek panel ve teknik ekip etkinlik boyunca sahada olacak mı?",
            "Sahne, ses ve ışık sistemleriyle entegrasyon gerekiyor mu?",
          ]}
        />

        <h2 id="etkinlikte-fark">LED ekranlar etkinliklerde nasıl fark yaratır?</h2>
        <p>
          Doğru LED ekran kullanımı etkinliğin atmosferini tamamen değiştirebilir. Kurumsal etkinliklerde
          sunumları daha etkileyici hale getirir, marka algısını güçlendirir ve program akışını dinamik
          kılar. Konser ve festivallerde sahne deneyimini büyütür, arka sıralardaki izleyiciyi bile
          etkinliğin içine çeker.
        </p>

        <ImgFigure
          src={AUDITORIUM_IMG}
          alt="Konferans salonunda geniş LED ekran ve sahne sunumu"
          caption="Konferans salonlarında LED ekran, konuşmacı görünürlüğünü ve sunum okunabilirliğini güçlendirir."
          portrait
        />

        <p>
          Düğün, gala ve özel organizasyonlarda ise LED ekranlar duygusal içeriklerle güçlü bir atmosfer
          oluşturur. Fotoğraf, video, isim animasyonu, sahne arka planı ve canlı görüntü aktarımı gibi
          kullanımlar etkinliği daha akılda kalıcı hale getirir.
        </p>

        <h2 id="kiralama-mi-satin-alma-mi">LED ekran kiralama mı, satın alma mı?</h2>
        <p>
          Tek seferlik veya dönemsel etkinliklerde LED ekran kiralama çoğu zaman daha mantıklıdır. Çünkü
          panel seçimi, taşıma, kurulum, teknik ekip, bakım, yedek parça ve söküm süreci profesyonel ekip
          tarafından yönetilir. Satın alma ise ekranın sürekli aynı alanda kullanılacağı projelerde
          değerlendirilebilir.
        </p>

        <p>
          Etkinlik projelerinde ihtiyaçlar her defasında değişebildiği için kiralama modeli daha esnek
          çalışır. Bir projede iç mekan fine pitch ekran gerekirken, başka bir projede yüksek parlaklıklı
          outdoor ekran gerekebilir.
        </p>

        <h2 id="sonuc">Sonuç: doğru LED ekran, doğru planlama ile değer yaratır</h2>
        <p>
          LED ekran etkinliğin en güçlü görsel araçlarından biridir. Ancak bu gücün ortaya çıkması,
          doğru ekipman seçimi kadar doğru planlama ve profesyonel uygulamaya bağlıdır. Ekran ölçüsü,
          pixel pitch, parlaklık, içerik formatı, sahne yerleşimi ve teknik operasyon aynı masada
          değerlendirilmelidir.
        </p>

        <p>
          Sahneva olarak sahne, podyum, LED ekran, ses ve ışık sistemlerini tek çatı altında sunuyor;
          keşiften kurulum ve canlı destek sürecine kadar tüm operasyonu yönetiyoruz. Etkinliğiniz için
          en doğru LED ekran çözümünü belirlemek istiyorsanız, projeye özel teknik analiz yapılmadan karar
          vermemenizi öneririz.
        </p>

        <h2 id="sss">Sık sorulan sorular</h2>
        {FAQ_ITEMS.map((item) => (
          <section key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </section>
        ))}

        <BlogRelatedLinks
          services={[
            { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
            { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
            { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
