import Image from "next/image";
import Link from "next/link";

/* ================== SABİTLER ================== */
const ORIGIN = "https://www.sahneva.com";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? ORIGIN).replace(/\/$/, "");

const SLUG = "sahne-kiralama-fiyatlari-neye-gore-belirlenir";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

/* OG IMAGE = HERO */
const HERO_IMG = "/img/blog/sahne-kiralama-fiyatlari-hero.webp";
const IMG_M2 = "/img/blog/sahne-kiralama-fiyatlari-m2-olcu.webp";
const IMG_TEKNIK = "/img/blog/sahne-kiralama-fiyatlari-teknik-sistemler.webp";
const IMG_CADIR = "/img/blog/sahne-kiralama-fiyatlari-cadir-m2.webp";
const IMG_RIDER = "/img/blog/sahne-kiralama-fiyatlari-teknik-rider.webp";

const TITLE = "Sahne Kiralama Fiyatları Neye Göre Belirlenir?";
const DESCRIPTION =
  "Sahne kiralama fiyatı en temelde m² üzerinden şekillenir. Yükseklik fiyatı etkilemez; truss, LED ekran, ses-ışık ve çadır gibi teknik katmanlar ile teknik rider geldiğinde fiyat netleşir. Rider yoksa verilen fiyatlar tahminidir.";

const PUBLISH_DATE = "2026-01-05T09:00:00+03:00";
const MODIFIED_DATE = "2026-01-05T09:00:00+03:00";

/* ================== META ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  openGraph: {
    title: `${TITLE} | Sahneva Organizasyon`,
    description:
      "m², teknik sistemler ve teknik rider: sahne kiralama fiyatının gerçek belirleyicileri. Çok katmanlı etkinliklerde net fiyat için teknik ihtiyaçların netleşmesi gerekir.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
    images: [
      {
        url: `${SITE_URL}${HERO_IMG}`,
        width: 1200,
        height: 630,
        alt: "Sahne kiralama fiyatlarını etkileyen m² ve teknik ihtiyaçlar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Sahne fiyatı m²’ye göre belirlenir; teknik katmanlar ve rider geldiğinde bütçe netleşir.",
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  robots: { index: true, follow: true },
};

/* ================== JSON-LD HELPERS ================== */
function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function buildBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: TITLE, item: BLOG_URL },
    ],
  };
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
  };
}

function buildFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Sahne kiralama fiyatını en çok ne belirler?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sahne kiralama fiyatını en temelde sahnenin ölçüsü (m²) belirler. Mekân/alan, çadır ölçüsü, teknik katmanlar (truss, LED, ses-ışık) ve etkinliğin teknik ihtiyaçları toplam bütçeyi şekillendirir.",
        },
      },
      {
        "@type": "Question",
        name: "Sahne yüksekliği fiyatı etkiler mi?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Genellikle hayır. Sahne yüksekliği (40/60/80 cm gibi) çoğu projede fiyatı belirleyen ana unsur değildir. Fiyatın ana ekseni m² ve teknik kapsamdır.",
        },
      },
      {
        "@type": "Question",
        name: "Rider yokken verilen fiyat net midir?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Rider (teknik şartname) yokken verilen fiyatlar ortalama/tahmini olur. Teknik ihtiyaçlar netleştiğinde (rider veya ajans/organizasyon teknik planı) fiyat yeniden şekillenebilir.",
        },
      },
      {
        "@type": "Question",
        name: "LED ekran, truss ve ses-ışık nasıl fiyatlanır?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "LED ekranlar çoğunlukla günlük fiyatlanır; truss ve podyum sistemleri proje kapsamına göre günlük/haftalık değerlendirilir. Marka, adet ve teknik özellikler fiyatı doğrudan etkiler. Ses-ışıkta konuşma sistemi ile konser sistemi aynı değildir.",
        },
      },
      {
        "@type": "Question",
        name: "Çadır kiralama fiyatı neye göre belirlenir?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Çadır fiyatı m² üzerinden belirlenir. Açık hava etkinliklerinde, açılışlarda ve güvenlik alanı oluşturulan projelerde çadır ölçüsü hem çadır hem de sahne planını etkileyebilir.",
        },
      },
      {
        "@type": "Question",
        name: "Net fiyat almak için hangi bilgiler gerekir?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Net fiyat için en azından mekân/alan bilgisi, istenen sahne ölçüsü, etkinlik süresi ve teknik katmanlar (LED, ses-ışık, truss, çadır vb.) netleşmelidir. Sanatçı/canlı müzik varsa teknik rider fiyatın ana belirleyicisidir.",
        },
      },
    ],
  };
}

/* ================== KÜÇÜK BİLEŞENLER ================== */
function PillLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 hover:bg-white/15"
    >
      {children}
    </Link>
  );
}

function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="not-prose my-8">
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          loading="lazy"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-gray-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/* ================== SAYFA ================== */
export default function Page() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd();
  const articleJsonLd = buildArticleJsonLd();
  const faqJsonLd = buildFaqJsonLd();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* HERO (OG = HERO) */}
      <header className="relative overflow-hidden bg-gray-950 py-20 text-white">
  {/* Background image */}
  <Image
    src={HERO_IMG}
    alt="Sahne kiralama fiyatlarını etkileyen m² ve teknik ihtiyaçlar"
    fill
    priority
    fetchPriority="high"
    sizes="100vw"
    className="object-cover"
  />

  {/* Readability scrims */}
  <div aria-hidden="true" className="absolute inset-0 bg-black/55" />
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70"
  />
  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.70)_70%)]"
  />

  <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center">
    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 backdrop-blur-md shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
      Rehber • m² • Teknik Rider • Çok Katmanlı Etkinlik
    </p>

    <h1 className="text-balance text-3xl font-black tracking-tight md:text-5xl drop-shadow-[0_8px_28px_rgba(0,0,0,0.80)]">
      {TITLE}
    </h1>

    <p className="mx-auto mt-5 max-w-3xl text-pretty text-base text-white/90 md:text-lg drop-shadow-[0_6px_20px_rgba(0,0,0,0.85)]">
      Sahne kiralama fiyatı tek bir rakam değildir. En temelde m² belirler; yükseklik
      fiyatı etkilemez. Truss, LED ekran, ses-ışık ve çadır gibi teknik katmanlar ile
      teknik rider geldiğinde fiyat netleşir. Rider yoksa konuşulan fiyatlar ortalamadır.
    </p>

    <div className="mt-7 flex flex-wrap justify-center gap-2 text-sm">
      <PillLink href="/sahne-kiralama">Sahne Kiralama</PillLink>
      <PillLink href="/podyum-kiralama">Podyum Kiralama</PillLink>
      <PillLink href="/led-ekran-kiralama">LED Ekran Kiralama</PillLink>
      <PillLink href="/ses-isik-sistemleri">Ses & Işık</PillLink>
      <PillLink href="/cadir-kiralama">Çadır Kiralama</PillLink>
      <PillLink href="/kurumsal-organizasyon">Kurumsal Organizasyon</PillLink>
    </div>
  </div>
</header>
      <main className="bg-white">
        <article className="mx-auto w-full max-w-4xl px-4 py-12">
          <div className="prose prose-lg max-w-none">
            {/* GİRİŞ */}
            <p>
              “Sahne kaç para?” sorusu, etkinlik sektöründe en sık duyduğumuz sorulardan biri.
              Ancak sahne, raf ürünü gibi tek fiyatla satılan bir parça değildir. Sahne; etkinliğin
              merkezini, akışını, güvenliğini ve görsel algısını doğrudan etkileyen bir sistemdir.
              Bu yüzden sahne kiralama fiyatı; sadece “platform” üzerinden değil,{" "}
              <strong>etkinliğin teknik ihtiyaçları</strong> üzerinden şekillenir.
            </p>

            <p>
              Bu rehberi; ajanslar, belediyeler, kurumsal ekipler ve organizatörler için “net”
              hale getirmek amacıyla hazırladık. Yazının sonunda şunu rahatça söyleyebilmelisin:
              “Evet, fiyatın neden değiştiğini anladım. Net fiyat için hangi bilgiler gerekiyor
              biliyorum.”
            </p>

            <h2>Sahne kiralama neden tek kalem bir hizmet değildir?</h2>
            <p>
              Sahne kiralama, çoğu zaman “platform kuruldu, bitti” gibi düşünülür. Oysa sahne,
              etkinliğin omurgasıdır. Sahneyle birlikte düşünülmesi gereken katmanlar vardır:
            </p>
            <ul>
              <li>
                <strong>Taşıyıcı yapı:</strong> Modüler podyum, truss sistemleri, gerektiğinde çatı çözümleri.
              </li>
              <li>
                <strong>Görsel katman:</strong> LED ekranlar, sahne arkası, sahne önü görünümü.
              </li>
              <li>
                <strong>Ses ve ışık:</strong> Konuşma sistemi ile konser sistemi farklıdır; canlı müzik/orkestra
                gibi detaylar bütçeyi kökten değiştirir.
              </li>
              <li>
                <strong>Alan planı:</strong> Çadır, giriş-çıkış güvenliği, bariyer alanları, protokol düzeni,
                kamera açıları.
              </li>
            </ul>
            <p>
              Bu nedenle sahne fiyatı konuşulurken “hangi sahne?” sorusunu doğru cevaplamak gerekir.
              Sadece ölçüyü değil, sahnenin taşıdığı rolü de netleştirmek şarttır.
            </p>

            {/* m2 */}
            <h2>1) Sahne fiyatını en temelde m² belirler</h2>
            <p>
              Sahne kiralama fiyatını etkileyen en temel unsur, sahnenin ölçüsüdür (m²). Bunun nedeni basit:
              kullanılan modüler yapı, kaplama alanı ve işçilik planı, ölçüyle birlikte büyür.
              Ancak burada kritik bir nokta var: Sahne ölçüsünü çoğu zaman “istek” değil,{" "}
              <strong>mekân ve etkinlik akışı</strong> belirler.
            </p>

            <ImgFigure
              src={IMG_M2}
              alt="Sahne ölçüsü (m²) ve alan planlaması"
              caption="Sahne ölçüsü çoğu projede alan/çadır ölçüsüne göre netleşir; firma ölçüyü dayatmaz, tavsiye eder."
            />

            <h3>Mekân neden belirleyicidir?</h3>
            <p>
              Kapalı salonlarda ve çadır içi işlerde “şu ölçü olsun” demek her zaman mümkün değildir. Çünkü
              sahnenin arkasında pay, yanında pay, sahne önü güvenlik hattı ve seyirci düzeni gerekir.
              Mekân dar ise, sahne ölçüsü de doğal olarak sınırlandırılır. Bu durumda teknik ekip
              sahnenin “olabilecek en doğru” ölçüsünü önerir.
            </p>

            <h3>Çadır ölçüsü neden belirleyicidir?</h3>
            <p>
              Açık hava projelerinde çadır kullanılacaksa, sahne ölçüsü çoğu zaman çadırın taşıdığı “çerçeveye”
              göre şekillenir. Sahnenin çadıra göre hizalanması; yağmur, rüzgâr, giriş-çıkış ve seyirci akışı gibi
              konularda sahayı yönetilebilir hale getirir.
            </p>

            <h3>“Sahne ortamı doldurmalı” ne demek?</h3>
            <p>
              Sahne sadece üstüne çıkılan bir zemin değildir. Sahne; ışıkla, LED ekranla, görsel tasarımla bir
              atmosfer kurar. Sahne küçük kalırsa, alan “boş” görünür; etkinlik algısı zayıflar. Bu nedenle
              çoğu projede alanın izin verdiği ölçüde sahnenin daha “dolu” planlanması daha doğru sonuç verir.
              Hatta bazı işlerde sahnenin duvardan duvara gelmesi, etkinliğe çok daha güçlü bir görüntü kazandırır.
            </p>

            {/* yükseklik */}
            <h2>2) Sahne yüksekliği fiyatı etkiler mi?</h2>
            <p>
              Genellikle hayır. Sahne yüksekliği (40/60/80 cm gibi) fiyatı belirleyen ana unsur değildir.
              Kurulum mantığı aynıdır; sahne yüksekliği daha çok görüş açısı, protokol düzeni ve sahne üstü
              ihtiyaçlara göre seçilir. Kısacası sahnede fiyatın ana ekseni m² ve teknik kapsamdır.
            </p>

            {/* teknik katmanlar */}
            <h2>3) Teknik katmanlar: Truss, LED ekran, ses ve ışık</h2>
            <p>
              Sahne tek başına düşünülmez. Çoğu etkinlikte sahneye eşlik eden teknik katmanlar vardır.
              Burada fiyatı etkileyen şey “var/yok”tan çok; <strong>adet, marka ve özellik</strong>tir.
            </p>

            <ImgFigure
              src={IMG_TEKNIK}
              alt="Truss, LED ekran ve ses-ışık sistemleri"
              caption="LED ekran çoğunlukla günlük fiyatlanır; truss/podyum ise proje kapsamına göre değerlendirilir."
            />

            <h3>LED ekran neden günlük fiyatlanır?</h3>
            <p>
              LED ekranlarda (özellikle dış mekân kullanımlarında) ekipman lojistiği, kurulum planı ve ekranın
              teknik özellikleri günlük planlamaya çok uygundur. Üstelik LED ekran tarafında piksel aralığı,
              marka/seri ve dış mekân dayanımı gibi farklar ciddi bütçe farkı yaratabilir.
              Bu yüzden LED ekran kalemi çoğu zaman günlük olarak fiyatlanır.
            </p>

            <p>
              LED ekran hizmeti hakkında detay için:{" "}
              <a href="https://www.sahneva.com/led-ekran-kiralama">LED Ekran Kiralama</a>.
            </p>

            <h3>Truss ve podyum neden bazen günlük/haftalık aynı bantta olur?</h3>
            <p>
              Truss ve podyum, sahnenin taşıyıcı altyapısıdır. Proje türüne göre günlük veya haftalık planlama
              yapılabilir; bazı işlerde günlük/haftalık fiyat bandı birbirine yaklaşabilir. Çünkü asıl maliyet,
              çoğu zaman kurulum-söküm organizasyonu, işçilik planı ve proje kapsamıyla ilgilidir.
            </p>

            <p>
              Podyum çözümleri için:{" "}
              <a href="https://www.sahneva.com/podyum-kiralama">Podyum Kiralama</a>.
            </p>

            <h3>Ses & ışık: konuşma ile konser aynı değildir</h3>
            <p>
              Kurumsal bir konuşma etkinliğinde ihtiyaç duyulan sistemle, canlı müzik/orkestra bulunan bir konserde
              ihtiyaç duyulan sistem aynı değildir. Canlı müzik devreye girdiğinde; sahne üstü monitor düzeni,
              mikrofon ihtiyaçları, miks ve ışık kurgusu büyür. Bu nedenle ses-ışık kalemi; sahnenin en değişken
              bütçe üreticilerinden biridir.
            </p>

            <p>
              Detaylar için:{" "}
              <a href="https://www.sahneva.com/ses-isik-sistemleri">Ses & Işık Sistemleri</a>.
            </p>

            {/* çadır */}
            <h2>4) Çadır: m² üzerinden fiyatlanır ve sahneyi şekillendirir</h2>
            <p>
              Çadır kiralama, sahne fiyatını dolaylı biçimde etkileyebilir çünkü alanın çerçevesini belirler.
              Çadır fiyatı ise net: <strong>m² üzerinden</strong> hesaplanır. Açık hava etkinlikleri, açılışlar,
              bina önlerinde güvenlik alanları gibi projelerde çadır çok sık tercih edilir.
            </p>

            <ImgFigure
              src={IMG_CADIR}
              alt="Çadır kiralama m² hesabı ve açık hava kurulum planı"
              caption="Çadır m² hesabı, sahne ölçüsünü ve yerleşimi doğrudan etkileyebilir."
            />

            <p>
              Çadır hizmeti için:{" "}
              <a href="https://www.sahneva.com/cadir-kiralama">Çadır Kiralama</a>.
            </p>

            {/* tahmini vs net */}
            <h2>5) Tahmini fiyat vs net fiyat: en kritik ayrım</h2>
            <p>
              Fiyat konusu konuşulurken iki ayrı dünya vardır:
            </p>
            <ul>
              <li>
                <strong>Tahmini fiyat:</strong> Teknik ihtiyaçlar tam net değilken, ortalama bir varsayımla verilen rakam.
              </li>
              <li>
                <strong>Net fiyat:</strong> Teknik plan (rider/şartname) ve kapsam netleşince ortaya çıkan kesin bütçe.
              </li>
            </ul>

            <p>
              Rider yokken genellikle “ortalama bir sahne + ortalama bir kurulum + tahmini teknik katmanlar” üzerinden
              konuşulur. Bu, planlama için bir başlangıçtır; ancak “son söz” değildir.
            </p>

            <h3>Tahmini fiyat neden bağlayıcı olamaz?</h3>
            <p>
              Çünkü etkinlik; tek katmanlı olmayabilir. Mesela sahne bir gün içinde farklı rollere bürünebilir:
              gündüz protokol konuşması, akşam konser; konser sonrası farklı bir program. Ayrıca LED ekran, ses-ışık,
              truss gibi kalemlerin marka/adet/özellikleri konuşulmadan verilen her rakam “ortalama”dır.
            </p>

            <h3>Bu ortalamayı hangi bilgiler iyileştirir?</h3>
            <p>
              Tahmini fiyatın daha gerçekçi olabilmesi için en azından şunlar gerekir:
              mekân/alan bilgisi, istenen sahne ölçüsü, etkinliğin türü (kurumsal mı konser mi), LED isteniyor mu,
              ses-ışık kapsamı ve etkinlik süresi (gün sayısı).
            </p>

            {/* rider */}
            <h2>6) Teknik rider geldiğinde fiyat neden değişir?</h2>
            <p>
              Teknik rider, etkinliğin gerçek ihtiyaçlarını ortaya koyar. En önemlisi: rider sadece sanatçıdan gelmez.
              Ajanslar, kurumsal ekipler, belediyeler veya siyasi organizasyonlar da “teknik plan/şartname” çıkarabilir.
              İşte net fiyat bu noktada doğar.
            </p>

            <ImgFigure
              src={IMG_RIDER}
              alt="Teknik rider ile sahne ve ekipman gereksinimlerinin netleşmesi"
              caption="Rider; sahne ölçüsünden LED/ışık/ses detaylarına kadar teknik kapsamı netleştirir."
            />

            <h3>Rider’ın fiyatı değiştirdiği tipik alanlar</h3>
            <ul>
              <li>
                <strong>Ses-ışık kapsamı:</strong> Canlı müzik, orkestra, backline gibi detaylar bütçeyi kökten değiştirir.
              </li>
              <li>
                <strong>LED ekran:</strong> Ölçü, marka ve kullanım (iç/dış) netleşince maliyet netleşir.
              </li>
              <li>
                <strong>Truss/podyum planı:</strong> Sahne üstü taşıma, asma ihtiyaçları, kurgu detayları.
              </li>
              <li>
                <strong>Akış ve rol değişimi:</strong> Aynı sahne hem konser hem konuşma için kullanılacaksa tasarım değişir.
              </li>
            </ul>

            <p>
              Buradaki kritik cümle şu: Rider olmadan verilen fiyat “ortalama”dır. Rider geldiğinde fiyatın değişmesi
              normaldir; çünkü artık tahmin değil, teknik gerçek konuşulur.
            </p>

            {/* müşteri ölçüyü neden belirler */}
            <h2>7) Müşteri ölçüyü neden belirler? (Ajans, belediye, kurumsal gerçekliği)</h2>
            <p>
              Sektörde sık görülen bir durum: Müşteri “şu ölçüde sahne istiyorum” der. Bu, bazen teknik ekip için
              “neden?” sorusunu doğurur. Ama sahada bunun çok pratik nedenleri vardır:
            </p>
            <ul>
              <li>
                <strong>Ajans sözleşmeleri:</strong> Sahne ölçüsü ve görünüm, işin brief’inde yazılı olabilir.
              </li>
              <li>
                <strong>Marka görünürlüğü:</strong> Sponsor alanı, arka fon, LED tasarımı gibi unsurlar ölçüyü belirleyebilir.
              </li>
              <li>
                <strong>Kamera ve yayın:</strong> Kamera açıları, sahne derinliği ve genişliğiyle doğrudan ilişkilidir.
              </li>
              <li>
                <strong>Protokol düzeni:</strong> Konuşmacı alanı, kürsü/podyum, giriş-çıkış, güvenlik düzeni.
              </li>
            </ul>

            <p>
              Bu nedenle sahne ölçüsü sadece “sanatçı” üzerinden değil; organizasyonun tüm paydaşları üzerinden şekillenir.
              Teknik ekip, ölçüyü optimize etmeye çalışır; ancak organizasyonun talebi teknik olarak mümkünse uygulanır.
            </p>

            {/* çok katmanlı */}
            <h2>8) Çok katmanlı etkinlikler: konser + konuşma + miting gibi senaryolar</h2>
            <p>
              Sahneyi sadece sanatçı için kurmak, birçok projede gerçekçi değildir. Bazı etkinlikler çok katmanlıdır:
              konserin ardından konuşma yapılabilir, aynı sahne protokol akışına göre yeniden kullanılabilir.
              Bu durumda sahne planı; tek bir ihtiyaca değil, <strong>çoklu kullanım</strong> senaryosuna göre kurgulanır.
            </p>

            <h3>Bu çoklu kullanım fiyatı nasıl etkiler?</h3>
            <p>
              Çok katmanlı işlerde genellikle şu olur: Sahne “en yoğun kullanım” senaryosunu kaldıracak şekilde kurulur.
              Çünkü sahneyi gün içinde defalarca büyütmek/küçültmek pratik değildir. Bu da sahnenin ölçüsünü,
              taşıyıcı yapıyı ve teknik katmanları belirler. Sonuç olarak fiyat, tek bir programın değil,{" "}
              <strong>tüm günün</strong> teknik ihtiyacına göre şekillenir.
            </p>

            <h3>Kurumsal etkinlikler ve açılışlar</h3>
            <p>
              Kurumsal etkinlik, açılış ve lansman gibi işlerde çoğu zaman sanatçı rider’ı yoktur. Bu işlerde sahne,
              konuşma ve görsel akışa göre planlanır; fiyat daha öngörülebilirdir. Ancak canlı müzik eklendiğinde
              (orkestra, backline vb.) iş bir anda konser standardına yaklaşabilir.
            </p>

            <p>
              Kurumsal planlama için:{" "}
              <a href="https://www.sahneva.com/kurumsal-organizasyon">Kurumsal Organizasyon</a>.
            </p>

            {/* nakliye */}
            <h2>9) İstanbul içi ve şehir dışı: lojistik nasıl etkiler?</h2>
            <p>
              Lojistik, projeden projeye değişen bir kalemdir. İstanbul içi işler ile şehir dışı işler aynı değildir.
              Şehir dışı projelerde nakliye; çoğu zaman nakliye/lojistik firmalarından alınan fiyatlara göre şekillenir.
              Bu nedenle “her yerde aynı fiyat” yaklaşımı sahada gerçekçi değildir.
            </p>

            {/* süre */}
            <h2>10) Kiralama süresi: gün bazlı planlama</h2>
            <p>
              Sahne kiralama süresi, ihtiyaca göre gün bazlı planlanabilir. Tek günlük bir etkinlik olduğu gibi,
              birkaç gün süren fuar/şenlik gibi işlerde daha uzun kiralama yapılabilir. Burada önemli olan,
              projenin kurulum-söküm planıyla birlikte değerlendirilmesidir.
            </p>

            {/* Sahneva yaklaşımı (Atawa'dan ilham, özgün) */}
            <h2>11) Sahneva yaklaşımı: “tek parça değil, bütün çözüm”</h2>
            <p>
              Sahne kiralama sadece platform kurmak değildir. Etkinlik altyapısı bir bütündür: sahne, çadır, zemin,
              LED ekran, ses ve ışık sistemleri, sahne arkası/önü görünümü ve saha koordinasyonu birlikte planlanır.
              Bu bütün yaklaşım; sürprizleri azaltır, iletişimi hızlandırır ve etkinliği “tek elden” yönetilebilir hale getirir.
            </p>
            <p>
              Bu nedenle teklif sürecinde “sahne fiyatı” sorusu kadar şu sorular da önemlidir:
              “Hangi etkinlik?”, “Teknik plan var mı?”, “LED/ses-ışık dahil mi?”, “Sahne aynı gün başka akışta da kullanılacak mı?”
              Bu sorular netleştiğinde fiyat da netleşir.
            </p>

            {/* Hızlı Özet */}
            <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="mt-0">Hızlı Özet</h3>
              <ul className="mb-0">
                <li>
                  <strong>Sahne fiyatı:</strong> En temelde m²
                </li>
                <li>
                  <strong>Yükseklik:</strong> Genelde fiyatı etkilemez
                </li>
                <li>
                  <strong>LED / ses-ışık / truss:</strong> Adet + marka + özellik
                </li>
                <li>
                  <strong>Çadır:</strong> m² üzerinden, yerleşimi belirler
                </li>
                <li>
                  <strong>Rider/teknik plan:</strong> Net fiyatın ana anahtarı
                </li>
                <li>
                  <strong>Çok katmanlı etkinlik:</strong> Sahne tek role göre değil, tüm akışa göre planlanır
                </li>
              </ul>
            </div>

            {/* CTA */}
            <h2>Net fiyat için en hızlı yol</h2>
            <p>
              Net fiyat almak için; etkinlik türünü, mekân/alan bilgisini, istenen sahne ölçüsünü ve teknik katmanları
              (LED, ses-ışık, truss, çadır vb.) mümkün olduğunca net paylaşmak gerekir. Sanatçı veya canlı müzik varsa
              teknik rider fiyatın ana belirleyicisidir.
            </p>

            <p>
              İlgili sayfalardan hızlıca bilgi alabilirsin:
            </p>
            <ul>
              <li>
                <a href="https://www.sahneva.com/sahne-kiralama">Sahne Kiralama</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/led-ekran-kiralama">LED Ekran Kiralama</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/ses-isik-sistemleri">Ses & Işık Sistemleri</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/podyum-kiralama">Podyum Kiralama</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/cadir-kiralama">Çadır Kiralama</a>
              </li>
              <li>
                <a href="https://www.sahneva.com/kurumsal-organizasyon">Kurumsal Organizasyon</a>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/sahne-kiralama"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white hover:bg-gray-800"
            >
              Sahne Kiralama Detayları
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-4 font-bold text-gray-900 hover:bg-gray-50"
            >
              Keşif / Teklif Al
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
