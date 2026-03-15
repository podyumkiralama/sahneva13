import Image from "next/image";
import Link from "next/link";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

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
  "Sahne kiralama fiyatları m² bazlıdır. Truss, LED, ses-ışık ve rider detaylarıyla netleşir. Tahmini bütçe ve fiyatlar için bizimle teknik bilgi paylaşın.";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const FEATURED_IMAGE = HERO_IMG;
const HERO_IMAGE = HERO_IMG;
const OG_IMAGE = HERO_IMG;
const IMAGES = null;
const STAGE_SERVICE_PATH = "/sahne-kiralama";
const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const LED_SERVICE_PATH = "/led-ekran-kiralama";
const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Merhaba, projem için teklif almak istiyorum.");

const PUBLISH_DATE = "2026-01-05T09:00:00+03:00";

/* ================== META ================== */
export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  image: HERO_IMG,
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

/* ================== KÜÇÜK BİLEŞENLER ================== */
function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="not-prose my-8">
      <div className="relative overflow-hidden rounded-2xl bg-transparent">
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
  
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: (metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "Blog"), url: BLOG_URL },
  ];

return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\\s*\\|\\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Prodüksiyon & Teknik", "Etkinlik Mühendisliği"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="7\u20139 dk okuma"
        currentSlug={BLOG_PATH.replace("/blog/", "")}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: (typeof STAGE_SERVICE_PATH !== "undefined" ? STAGE_SERVICE_PATH : "/sahne-kiralama"), label: "Sahne Kiralama", icon: "🎭" },
          { href: (typeof PODIUM_SERVICE_PATH !== "undefined" ? PODIUM_SERVICE_PATH : "/podyum-kiralama"), label: "Podyum Kiralama", icon: "🧱" },
          { href: (typeof LED_SERVICE_PATH !== "undefined" ? LED_SERVICE_PATH : "/led-ekran-kiralama"), label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={(typeof WA_URL !== "undefined" ? WA_URL : undefined)}
      >

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
              <Link href="/kurumsal-organizasyon">Kurumsal Organizasyon</Link>.
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
                <Link href="/kurumsal-organizasyon">Kurumsal Organizasyon</Link>
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

          <BlogRelatedLinks
            services={[
              { href: "/sahne-kiralama", label: "Sahne Kiralama" },
              { href: "/podyum-kiralama", label: "Podyum Kiralama" },
            ]}
          />
      </BlogLayout>
    </>
  );}
