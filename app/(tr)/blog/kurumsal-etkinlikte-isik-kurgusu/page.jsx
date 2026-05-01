import Image from "next/image";
import Link from "next/link";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "kurumsal-etkinlikte-isik-kurgusu";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const AUTHOR_NAME = "Sahneva Prodüksiyon Ekibi";
const PUBLISH_DATE = "2026-05-01T09:00:00+03:00";
const MODIFIED_DATE = "2026-05-01T09:00:00+03:00";

const HERO_IMAGE = "/img/blog/kurumsal-etkinlikte-isik-kurgusu-hero.webp";
const BACKSTAGE_IMAGE =
  "/img/blog/kurumsal-etkinlikte-isik-kurgusu/isik-kontrol-masasi-ve-sahne-beam-16x9.webp";
const LAUNCH_IMAGE =
  "/img/blog/kurumsal-etkinlikte-isik-kurgusu/urun-lansmani-led-isik-kurgusu.webp";
const CORPORATE_STAGE_IMAGE = "/img/kurumsal/kurumsal-sahne-led-ekran.webp";
const GALA_IMAGE =
  "/img/blog/kurumsal-etkinlikte-isik-kurgusu/seffaf-cadir-gala-ambiyans-isigi.webp";
const STAGE_GALLERY_IMAGE =
  "/img/blog/kurumsal-etkinlikte-isik-kurgusu/konferans-sahne-led-on-isik-full-16x9.webp";
const STAGE_WIDE_IMAGE =
  "/img/blog/kurumsal-etkinlikte-isik-kurgusu/sahne-truss-isik-kurulum-full-16x9.webp";
const OUTDOOR_LIGHTING_IMAGE =
  "/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/stad-aydinlatma-show.webp";

const TITLE = "Kurumsal Etkinlikte Işık Kurgusu";
const DESCRIPTION =
  "Kurumsal etkinlikte ışık kurgusu; sahne, LED ekran, kamera ve marka atmosferini birlikte planlayan profesyonel prodüksiyon rehberi.";

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent("Merhaba, kurumsal etkinliğimiz için sahne, LED ekran, ses ve ışık kurgusu planlamak istiyorum.");

const TOC_ITEMS = [
  { href: "#kisa-cevap", label: "Kısa cevap" },
  { href: "#neden-onemli", label: "Neden önemli?" },
  { href: "#marka-kazanimi", label: "Markaya katkısı" },
  { href: "#planlama", label: "Planlama akışı" },
  { href: "#formatlar", label: "Konferans, lansman, gala" },
  { href: "#led-kamera", label: "LED ekran ve kamera" },
  { href: "#ekipman", label: "Ekipman seçimi" },
  { href: "#hatalar", label: "Sık yapılan hatalar" },
  { href: "#sss", label: "SSS" },
];

const FAQ_ITEMS = [
  {
    question: "Kurumsal etkinlikte ışık kurgusu neden önemlidir?",
    answer:
      "Kurumsal etkinlikte ışık kurgusu konuşmacı görünürlüğünü, LED ekran dengesini, kamera görüntüsünü, marka atmosferini ve sahne akışını doğrudan etkiler. Doğru ışık planı etkinliğin profesyonel algısını yükseltir.",
  },
  {
    question: "LED ekran kullanılan sahnede ışık nasıl ayarlanır?",
    answer:
      "LED ekran kullanılan sahnelerde ekran parlaklığı, sahne ön ışığı, kamera pozlaması ve konuşmacı konumu birlikte test edilmelidir. Ekran çok parlak kalırsa sahnedeki kişi zayıf görünür; ışık fazla sert olursa ekran içeriğiyle çakışabilir.",
  },
  {
    question: "Clay Paky gibi üst segment ışıklar her etkinlikte gerekli midir?",
    answer:
      "Hayır. Clay Paky gibi üst segment armatürler prestijli lansman, gala, ödül töreni ve büyük sahne etkisi istenen etkinliklerde güçlü sonuç verir. Konferans, panel veya kontrollü bütçeli etkinliklerde doğru Fresnel, LED bar, wash ve ön ışık kurgusu da profesyonel sonuç sağlayabilir.",
  },
  {
    question: "Xtylos ışıklar hangi etkinliklerde kullanılır?",
    answer:
      "Xtylos gibi lazer kaynaklı beam armatürler büyük sahnelerde, lansman final anlarında, konser destekli kurumsal etkinliklerde ve yüksek görsel etki istenen geçişlerde kullanılabilir. Kamera, haze, görüş açısı ve güvenlik planı birlikte değerlendirilmelidir.",
  },
  {
    question: "Canlı yayın yapılacak etkinliklerde ışık farklı mı planlanır?",
    answer:
      "Evet. Kameraların ışığı algılama biçimi insan gözünden farklıdır. Canlı yayın veya kayıt olan etkinliklerde parlama, titreme, kararma ve renk bozulması oluşmaması için kamera dostu ışık seviyesi, LED ekran parlaklığı ve çekim açıları birlikte test edilmelidir.",
  },
  {
    question: "Konferans ışığı nasıl olmalı?",
    answer:
      "Konferans ışığında öncelik konuşmacının yüzünü doğal ve net göstermektir. Fresnel veya yumuşak ön ışıklarla konuşmacı alanı dengeli aydınlatılmalı, LED ekran parlaklığı ve kamera görüntüsüyle birlikte test edilmelidir.",
  },
  {
    question: "Sahne ışık sistemi fiyatı neye göre değişir?",
    answer:
      "Fiyat; etkinlik türüne, mekan ölçüsüne, sahne büyüklüğüne, kullanılacak armatür sınıfına, truss ihtiyacına, kurulum süresine, teknik ekip sayısına ve kamera/canlı yayın gereksinimine göre değişir.",
  },
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
  image: HERO_IMAGE,
  category: "Ses & Işık",
  readTime: "11-13 dk okuma",
  keywords: [
    "kurumsal etkinlik ışık kurgusu",
    "sahne ışık tasarımı",
    "kurumsal etkinlik ışık sistemi",
    "LED ekran ışık dengesi",
    "konferans ışığı",
    "gala ışık tasarımı",
    "ürün lansmanı ışık kurgusu",
    "Clay Paky",
    "Xtylos",
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
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Kurumsal etkinlikte sahne ışık kurgusu ve teknik prodüksiyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  robots: { index: true, follow: true },
};

function ArticleSchema() {
  const orgId = `${SITE_URL}/#org`;
  const editorId = `${SITE_URL}/#editor`;
  const articleId = `${BLOG_URL}#article`;
  const webpageId = `${BLOG_URL}#webpage`;
  const imageId = `${BLOG_URL}#primaryimage`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: `${SITE_URL}${HERO_IMAGE}`,
        contentUrl: `${SITE_URL}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: BLOG_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "tr-TR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: { "@id": imageId },
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
      },
      {
        "@type": "BlogPosting",
        "@id": articleId,
        headline: "Kurumsal Etkinlikte Doğru Işık Kurgusu Nasıl Olmalı?",
        description: DESCRIPTION,
        image: { "@id": imageId },
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@id": webpageId },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog` },
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        about: [
          { "@type": "Thing", name: "Kurumsal etkinlik ışık kurgusu" },
          { "@type": "Thing", name: "Sahne ışık tasarımı" },
          { "@type": "Thing", name: "LED ekran ve kamera dengesi" },
          { "@type": "Thing", name: "Canlı yayın prodüksiyonu" },
        ],
        keywords: metadata.keywords,
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
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return <JsonLd id="kurumsal-isik-kurgusu-ld-json" data={data} />;
}

function ImgFigure({ src, alt, caption, aspect = "wide", position = "center" }) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[4/5] md:aspect-[3/4]"
      : aspect === "classic"
        ? "aspect-[4/3]"
        : "aspect-[16/9]";
  const positionClass =
    position === "top"
      ? "object-top"
      : position === "bottom"
        ? "object-bottom"
        : "object-center";

  return (
    <figure className="not-prose my-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className={`relative ${aspectClass} bg-slate-100`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${positionClass}`}
          sizes="(max-width: 1024px) 100vw, 1100px"
        />
      </div>
      {caption ? (
        <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function AnswerBox() {
  return (
    <section id="kisa-cevap" className="not-prose my-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-blue-700">
        Kısa cevap
      </p>
      <h2 className="mt-3 text-2xl font-black text-slate-950">
        Kurumsal etkinlikte ışık kurgusu nasıl olmalı?
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-800">
        Kurumsal etkinlikte doğru ışık kurgusu; sahne, LED ekran, ses sistemi,
        truss, kamera, yayın ve etkinlik akışıyla birlikte planlanmalıdır.
        Konferansta öncelik konuşmacının yüzünü net göstermekken, lansmanda
        ürünün ortaya çıkış anını büyütmek, gala ve ödül törenlerinde ise
        mekan atmosferini, sahne geçişlerini ve marka renklerini aynı görsel
        dilde birleştirmek gerekir.
      </p>
    </section>
  );
}

function Checklist() {
  const items = [
    "Mekan yüksekliği, truss noktası ve sahne ölçüsü",
    "LED ekran parlaklığı ve içerik yoğunluğu",
    "Konuşmacı, ürün, ödül ve fotoğraf alanları",
    "Kamera açıları, canlı yayın ve kayıt ihtiyacı",
    "Enerji altyapısı, kurulum süresi ve prova akışı",
    "Marka renkleri, gala atmosferi ve final anları",
  ];

  return (
    <div className="not-prose my-10 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black">Işık keşfi için hızlı kontrol listesi</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CorporateLightingArticlePage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Kurumsal Etkinlikte Işık Kurgusu", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMAGE,
          alt: "Kurumsal etkinlik sahnesinde profesyonel ışık kurgusu",
        }}
        pills={["Ses & Işık", "Kurumsal Etkinlik", "Teknik Prodüksiyon"]}
        title="Kurumsal Etkinlikte Doğru Işık Kurgusu"
        highlight="Nasıl Olmalı?"
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="11-13 dk okuma"
        tocItems={TOC_ITEMS}
        cornerstoneLinks={[
          { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
          { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
          { href: "/sahne-kiralama", label: "Sahne Kiralama" },
        ]}
        currentSlug={SLUG}
        currentCategory="Ses & Işık"
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: "/ses-isik-sistemleri", label: "Ses & Işık", icon: "◉" },
          { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", icon: "▣" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "▦" },
        ]}
        whatsappUrl={WA_URL}
      >
        <p>
          Kurumsal bir etkinlikte sahne, markanızın izleyicisiyle kurduğu en
          güçlü temas noktalarından biridir. Kusursuz bir sahne tasarımı ise
          ancak doğru ışık kurgusuyla hayat bulur. Çünkü ışık yalnızca mekanı
          aydınlatmaz; markanın prestijini yansıtır, konuşmacının mesajını
          güçlendirir, ürünün ortaya çıkış anını büyütür ve etkinliğin hikayesini
          izleyiciye hissettirir.
        </p>

        <p>
          Sahneva Organizasyon olarak ışığı yalnızca bir ekipman kalemi olarak
          değil, markanın sahnedeki sesi olarak görüyoruz. İster ürün lansmanı,
          ister uluslararası konferans, ister bayi toplantısı, ister prestijli
          bir gala gecesi olsun; sahnedeki her anın doğru duyguyu uyandırması
          için ışık planını <Link href="/kurumsal-organizasyon">kurumsal etkinlik</Link>{" "}
          akışının tamamıyla birlikte ele alıyoruz.
        </p>

        <AnswerBox />

        <h2 id="neden-onemli">Kurumsal etkinlikte ışık kurgusu neden önemlidir?</h2>
        <p>
          Kurumsal etkinliklerde ışık, çoğu zaman fark edilmediğinde bile algıyı
          yöneten en güçlü unsurlardan biridir. Sahnedeki konuşmacının yüzü
          karanlık kalıyorsa, LED ekran fazla parlak olduğu için kişi silik
          görünüyorsa veya kamera kaydında sahne patlamış görünüyorsa, etkinliğin
          genel kalitesi de bundan etkilenir. Işık doğru kurulduğunda izleyici
          neye odaklanacağını doğal olarak hisseder.
        </p>

        <p>
          Doğru ışık kurgusu, konuşmacının mimiklerini ve beden dilini okunur hale
          getirir. Konferans, panel ve kurumsal sunumlarda bu çok önemlidir; çünkü
          mesaj yalnızca sözlerle değil, sahnedeki duruşla da aktarılır. Işık zayıfsa
          konuşmacı geri planda kalır. Işık fazla sertse yüzlerde gölgeler, parlama
          ve doğal olmayan bir görünüm oluşur.
        </p>

        <p>
          Aynı zamanda her etkinlik artık dijital bir içeriktir. Basın fotoğrafları,
          sosyal medya paylaşımları, tanıtım videoları, canlı yayınlar ve etkinlik
          sonrası kullanılacak kurumsal görüntüler için ışık planı kameraya da uygun
          olmalıdır. İnsan gözü ile kamera lensi aynı şeyi görmez. Salonda iyi görünen
          bir ışık, kamera görüntüsünde yetersiz kalabilir.
        </p>

        <ImgFigure
          src={CORPORATE_STAGE_IMAGE}
          alt="Kurumsal etkinlik sahnesinde LED ekran, truss ve ışık dengesi"
          caption="Kurumsal sahnelerde ışık planı; LED ekran, truss yüksekliği, konuşmacı alanı ve kamera kadrajıyla birlikte okunmalıdır."
        />

        <h2 id="marka-kazanimi">Doğru ışık tasarımı markaya ne kazandırır?</h2>
        <p>
          Doğru ışık tasarımı, markanın sahnedeki etkisini yükseltir. Sahne dekoru,
          LED ekran, podyum, konuşmacı alanı ve ürün tanıtım noktası ışıkla doğru
          desteklendiğinde etkinlik daha planlı, daha güçlü ve daha prestijli
          algılanır. Özellikle kurumsal etkinliklerde bu algı önemlidir; çünkü
          izleyici yalnızca bir program izlemez, markanın organizasyon kalitesini de
          deneyimler.
        </p>

        <p>
          Kamera ve yayın görüntüsü bu kazanımların başında gelir. CEO konuşması,
          ürün tanıtımı, ödül anı, panel oturumu veya gala finali sonradan sosyal
          medya, basın, iç iletişim ya da tanıtım filmi için kullanılabilir. Işık
          doğru planlandığında konuşmacılar net görünür, sahne derinlik kazanır ve
          görüntüler kurumsal kaliteyi destekler.
        </p>

        <p>
          İzleyici dikkati de ışıkla yönetilir. Konferans ve panellerde doğru
          yönlendirilmiş ışık, izleyicinin dikkatini dağılmadan sahnede tutar.
          Ürün lansmanlarında ışık merak duygusunu artırır. Gala ve ödül törenlerinde
          ise ışık, mekanı sadece aydınlatmaz; geceye ritim, şıklık ve tören duygusu
          kazandırır.
        </p>

        <ImgFigure
          src={STAGE_GALLERY_IMAGE}
          alt="Konferans sahnesinde LED ekran, truss ve mavi ön ışık kurgusu"
          caption="Konferans ve forum sahnelerinde ışık, konuşmacı görünürlüğünü ve LED ekran okunabilirliğini aynı anda dengeler."
          position="top"
        />

        <h2 id="planlama">Işık kurgusu nasıl planlanır?</h2>
        <p>
          Işık kurgusu teknik keşifle başlar. Mekanın tavan yüksekliği, sahne ölçüsü,
          <Link href="/truss-kiralama"> truss kurulumu</Link>, LED ekran konumu,
          izleyici yerleşimi, kamera açıları, konuşmacı pozisyonu, enerji altyapısı
          ve kurulum süresi ışık planını doğrudan etkiler. Aynı ekipman bir otel balo
          salonunda başka, fuar alanında başka, açık hava sahnesinde başka sonuç verir.
        </p>

        <p>
          İlk karar etkinliğin türüdür. Konferans ve panelde netlik, yüz aydınlatması
          ve sunum okunabilirliği öne çıkar. Ürün lansmanında geçişler, karartmalar,
          vurgu ışıkları ve final anı daha önemlidir. Gala ve ödül törenlerinde sahne
          atmosferi, masa çevresi, fotoğraf alanı ve tören akışı birlikte düşünülür.
          Konser destekli kurumsal etkinliklerde ise hareketli ışıklar, beam efektleri,
          renk geçişleri ve sahne enerjisi daha fazla rol oynar.
        </p>

        <p>
          İkinci karar odak noktalarıdır. Konuşmacı nerede duracak? Ürün nereden
          çıkacak? LED ekran hangi parlaklıkta çalışacak? Kamera çekimi olacak mı?
          Marka logosu ışıkla vurgulanacak mı? Ödül alanı, podyum, dekor veya fotoğraf
          noktası ayrıca aydınlatılacak mı? Bu sorular netleşmeden yapılan ışık kurulumu
          çoğu zaman ya fazla genel kalır ya da etkinliğin kritik anlarını kaçırır.
        </p>

        <Checklist />

        <h2 id="formatlar">Konferans, lansman ve gala ışığı nasıl ayrışır?</h2>
        <h3>Konferans ve panel ışığı</h3>
        <p>
          Konferans, panel ve kurumsal toplantılarda ışığın ilk görevi konuşmacıyı
          doğru göstermektir. Bu tür etkinliklerde ışık şovdan önce okunabilirlik
          gelir. Konuşmacının yüzü, göz hizası ve beden dili net görünmelidir. Sahne
          önünden verilen ışık çok sert olursa yüzlerde parlama veya gölge oluşur.
          Işık zayıf kalırsa konuşmacı LED ekranın önünde silikleşir.
        </p>

        <p>
          Bu formatlarda Fresnel ve yumuşak ön ışık kullanımı önemlidir. Doğru açıyla
          yerleştirilen Fresnel ışıklar konuşmacı ve panel alanında doğal geçişli bir
          aydınlatma sağlar. Panel düzenlerinde moderatör, konuşmacılar, kürsü ve
          oturma alanı ayrı ayrı düşünülmelidir. Tek bir noktaya güçlü ışık vermek
          çoğu zaman yeterli olmaz.
        </p>

        <h3>Ürün lansmanı ışığı</h3>
        <p>
          Ürün lansmanlarında ışık, etkinliğin hikayesini kurar. Lansman sahnesinde
          merak oluşturma, beklenti yükseltme, ürün veya mesajı ortaya çıkarma ve final
          etkisi vardır. Işık bu geçişleri desteklemezse lansman anı sıradanlaşır.
          Doğru kurguda ışık, ürünü yalnızca görünür kılmaz; ortaya çıkış anını büyütür.
        </p>

        <ImgFigure
          src={LAUNCH_IMAGE}
          alt="Ürün lansmanı sahnesinde kırmızı LED ekran ve çizgisel ışık kurgusu"
          caption="Lansman sahnelerinde LED ekran, çizgisel ışıklar ve sahne geçişleri aynı görsel dilde çalıştığında final anı daha güçlü hissedilir."
        />

        <p>
          Bu tür etkinliklerde hareketli ışıklar, beam efektleri, LED barlar, kontrollü
          karartmalar ve sahne çizgisi ışıkları kullanılabilir. Ürün reveal anında
          ışığın odak noktasına yönelmesi, sahne arkasındaki çizgisel ışıkların devreye
          girmesi veya moving head armatürlerin sahneye hareket kazandırması, izleyici
          üzerindeki etkiyi artırır.
        </p>

        <h3>Gala ve ödül töreni ışığı</h3>
        <p>
          Gala ve ödül törenlerinde ışık yalnızca sahneye değil, mekanın tamamına
          hizmet eder. Sahne, masa düzeni, giriş alanı, fotoğraf noktası, ödül teslim
          alanı ve konuşmacı kürsüsü bir bütün olarak düşünülmelidir. Amaç yalnızca
          yüksek kontrastlı bir sahne yapmak değil; kontrollü, şık ve prestijli bir
          atmosfer oluşturmaktır.
        </p>

        <p>
          Ödül törenlerinde sahneye çıkış rotası ayrıca planlanmalıdır. Ödül alan
          kişinin yürüyüşü, fotoğraf anı ve kısa konuşma noktası ışıkla desteklenmelidir.
          Bu yapılmadığında kişi bir noktada iyi görünürken, diğer noktada gölgede
          kalabilir. Profesyonel planlama bu geçişleri önceden düşünür.
        </p>

        <ImgFigure
          src={GALA_IMAGE}
          alt="Şeffaf çadır gala etkinliğinde mavi ambiyans ışığı ve masa düzeni"
          caption="Gala ve davet formatlarında ışık, yalnızca sahneyi değil; masa düzeni, çadır mimarisi, giriş aksı ve misafir atmosferini de taşır."
        />

        <h2 id="led-kamera">LED ekran, kamera ve canlı yayın varsa ışık nasıl dengelenir?</h2>
        <p>
          <Link href="/led-ekran-kiralama">LED ekran</Link> kullanılan sahnelerde ışık
          planı daha hassas yapılmalıdır. Çünkü LED ekranın kendisi güçlü bir ışık
          kaynağıdır. Ekranın parlaklığı sahnedeki konuşmacıyı bastırabilir, kamera
          pozlamasını zorlayabilir veya yüzlerde istenmeyen renk yansımaları oluşturabilir.
          Bu nedenle LED ekran ile sahne ışığı birlikte ayarlanmalıdır.
        </p>

        <p>
          En sık yapılan hatalardan biri, LED ekran kurulup içerik test edildikten sonra
          ışığın ayrı düşünülmesidir. Oysa sahnedeki kişinin ekran önünde nasıl göründüğü,
          ekrandaki beyaz veya parlak sahnelerin yüz ışığını nasıl etkilediği ve kamera
          görüntüsünde ekranın patlayıp patlamadığı prova sırasında kontrol edilmelidir.
        </p>

        <p>
          Canlı yayın veya kamera kaydı olan etkinliklerde ışık artık sadece salondaki
          izleyici için değil, kayıt ve yayın görüntüsü için de tasarlanır. Konuşmacı
          yüzünde sert gölge olmamalıdır. Sahne arka planı fazla parlaksa kamera yüzü
          karanlık okuyabilir. LED ekranın refresh davranışı, kamera ayarları ve ışık
          frekansı birlikte kontrol edilmelidir.
        </p>

        <ImgFigure
          src={BACKSTAGE_IMAGE}
          alt="Işık kontrol masası, medya sunucuları ve sahne beam ışıkları"
          caption="Canlı yayın, LED içerik ve ışık geçişleri aynı kontrol akışında yönetildiğinde sahnedeki görüntü hem salonda hem kamerada tutarlı kalır."
        />

        <h2 id="ekipman">Profesyonel ışık ekipmanı seçimi: marka mı, kurgu mu?</h2>
        <p>
          Kurumsal etkinlikte ışık ekipmanı seçimi yalnızca marka tercihi değildir;
          etkinliğin hedefi, mekan ölçüsü, sahne kurgusu, kamera ihtiyacı ve bütçe
          seviyesiyle birlikte değerlendirilir. Clay Paky gibi üst segment armatürler
          özellikle lansman finali, gala, ödül töreni, konser ve yüksek prestijli marka
          etkinliklerinde güçlü bir görsel etki üretir.
        </p>

        <p>
          Xtylos gibi lazer kaynaklı beam armatürler ise büyük hacimli salonlarda, açık
          hava sahnelerinde veya yüksek etki istenen final anlarında çok güçlü ışık
          çizgileri oluşturabilir. Bu tip armatürler sahneye dramatik bir imza verir;
          fakat kamera, haze/duman kullanımı, izleyici görüş açısı ve güvenlik planı ile
          birlikte düşünülmelidir.
        </p>

        <p>
          Daha kontrollü bütçelerde farklı üretici gruplarıyla da doğru açı, doğru
          yerleşim, doğru dimmer seviyesi ve doğru kontrol masası kullanıldığında temiz,
          dengeli ve profesyonel bir ışık sonucu alınabilir. Eğer etkinlikte konuşmacı
          görünürlüğü ana mesele ise pahalı beam armatürlerden önce doğru ön ışık planı
          gerekir. Eğer sahnede büyük bir lansman anı varsa, daha etkili moving head veya
          beam çözümü bütçeyi haklı çıkarabilir.
        </p>

        <h2 id="acik-hava">Açık hava kurumsal etkinliklerinde ışık planı</h2>
        <p>
          Açık hava etkinliklerinde ışık planı salon etkinliklerine göre farklıdır.
          Güneşin batış saati, alanın büyüklüğü, sahnenin konumu, truss yüksekliği,
          rüzgar, yağmur ihtimali, enerji altyapısı ve izleyici mesafesi birlikte
          değerlendirilmelidir. Gündüz başlayan ve akşam devam eden etkinliklerde ışık
          etkisi saat saat değişir.
        </p>

        <p>
          Açık havada ışık yalnızca sahneyi değil, yürüyüş yollarını, giriş alanını,
          backstage bölgesini ve güvenli geçişleri de düşünmelidir. Kablo güzergahı,
          enerji dağıtımı, IP koruma sınıfı, truss sabitlemesi ve hava koşulları teknik
          planın parçasıdır. Özellikle festival, belediye etkinliği, açık hava lansmanı
          ve konser destekli kurumsal etkinliklerde ışık güvenliği, görsel etki kadar
          önemlidir.
        </p>

        <ImgFigure
          src={OUTDOOR_LIGHTING_IMAGE}
          alt="Açık hava etkinliğinde sahne ışığı ve alan aydınlatması"
          caption="Açık hava kurulumlarında ışık planı; güneş batış saati, alan ölçeği, truss güvenliği, enerji dağıtımı ve izleyici mesafesine göre yapılmalıdır."
        />

        <h2 id="hatalar">Kurumsal etkinliklerde en sık yapılan ışık hataları</h2>
        <p>
          Kurumsal etkinliklerde en sık yapılan hatalardan biri ışığı en sona bırakmaktır.
          Sahne, LED ekran, dekor ve ses planı bittikten sonra “ışık da ekleyelim”
          yaklaşımı çoğu zaman zayıf sonuç verir. Çünkü ışığın nereden geleceği, neye
          vuracağı, neyi gölgede bırakacağı ve hangi sahne anında nasıl değişeceği baştan
          düşünülmelidir.
        </p>

        <p>
          Bir diğer hata, ışık kalitesini yalnızca adet üzerinden değerlendirmektir. Çok
          sayıda yanlış açılandırılmış armatür yerine, daha az sayıda doğru konumlanmış
          ışık daha iyi sonuç verebilir. Özellikle konuşmacı etkinliklerinde yüz
          aydınlatması ihmal edilmemelidir. Sahne şık görünürken konuşmacının yüzü karanlık
          kalıyorsa ışık planı başarılı değildir.
        </p>

        <ImgFigure
          src={STAGE_WIDE_IMAGE}
          alt="Sahne truss ve ışık kurulumu sırasında teknik hazırlık alanı"
          caption="Kurulum aşamasında truss, ışık açıları, kablo güzergahı ve sahne yerleşimi birlikte çözülmediğinde etkinlik günü görüntü kalitesi doğrudan etkilenir."
        />

        <h2 id="sahneva">Sahneva ışık kurgusunu nasıl ele alır?</h2>
        <p>
          Sahneva Organizasyon, kurumsal etkinliklerde ışık kurgusunu sahne, LED ekran,
          ses sistemi, truss, kamera ve etkinlik akışıyla birlikte planlar. Çünkü sahada
          bu sistemler birbirinden ayrı çalışmaz. LED ekranın parlaklığı konuşmacı ışığını
          etkiler. Truss yüksekliği ışık açısını belirler. Kamera çekimi varsa ışık seviyesi
          değişir. Sahne ölçüsü ve dekor dili, hangi armatürün nerede kullanılacağını belirler.
        </p>

        <p>
          Bizim için doğru ışık kurgusu, etkinlik türüne göre doğru önceliği seçmekle
          başlar. Konferansta netlik, lansmanda etki, galada atmosfer, festivalde enerji,
          canlı yayında kamera uyumu öne çıkar. Hangi bütçe olursa olsun, ışık planı teknik
          keşif yapılmadan netleşmemelidir.
        </p>

        <h2>Sonuç</h2>
        <p>
          Kurumsal etkinlikte doğru ışık kurgusu; sahneyi aydınlatmak, konuşmacıyı görünür
          kılmak, LED ekranla denge kurmak, kamera görüntüsünü temiz almak ve marka atmosferini
          güçlendirmek için planlanan bütüncül bir prodüksiyon sürecidir. Başarılı bir ışık
          planı, etkinliğin türünü, mekan koşullarını, sahne tasarımını, teknik altyapıyı ve
          bütçeyi birlikte değerlendirir.
        </p>

        <p>
          Clay Paky, Xtylos, Fresnel, LED bar, moving head, wash ve beam gibi ekipmanların
          her biri farklı bir amaca hizmet eder. Önemli olan bu ekipmanları rastgele çoğaltmak
          değil, etkinlik akışı içinde doğru yerde ve doğru anda kullanmaktır. Kurumsal etkinlikte
          ışık iyi planlandığında sahne yalnızca görünür olmaz; markanın anlatısı daha güçlü,
          daha kontrollü ve daha prestijli hissedilir.
        </p>

        <h2 id="sss">Sık Sorulan Sorular</h2>
        {FAQ_ITEMS.map((item) => (
          <section key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </section>
        ))}

        <BlogRelatedLinks
          services={[
            { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
            { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
            { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
          ]}
        />
      </BlogLayout>
    </>
  );
}
