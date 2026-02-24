import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import BlogLayout from "@/components/blog/BlogLayout";
import {
  BASE_SITE_URL,
  ORGANIZATION_ID,
  WEBSITE_ID,
} from "@/lib/seo/schemaIds";

export const revalidate = 86400;

const slug = "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi";
const url = `${BASE_SITE_URL}${slug}`;
const FEATURED_IMAGE = "/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/hero-konferans-salonu.webp";
const PUBLISH_DATE = "2026-02-23T00:00:00+03:00";
const MODIFIED_DATE = "2026-02-23T00:00:00+03:00";

const OG_IMAGE = `${BASE_SITE_URL}${FEATURED_IMAGE}`;

export const metadata = {
  title: "Etkinlik Teknik Keşif ve Planlama Rehberi",
  description:
    "Etkinliklerde teknik keşif süreci nasıl yürütülür? Mekân analizi, altyapı kontrolü ve prodüksiyon planlama adımları rehberi.",
  alternates: { canonical: url },
  openGraph: {
    title: "Etkinlik Teknik Keşif ve Planlama Rehberi | Sahneva",
    description:
      "Etkinliklerde teknik keşif süreci nasıl yürütülür? Mekân analizi, altyapı kontrolü ve prodüksiyon planlama adımları rehberi.",
    url,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva",
    images: [{ url: OG_IMAGE, width: 1600, height: 720, alt: "Etkinlik teknik keşif ve planlama — konferans salonu sahne kurulumu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etkinlik Teknik Keşif ve Planlama Rehberi | Sahneva",
    description:
      "Etkinliklerde teknik keşif süreci nasıl yürütülür? Mekân analizi, altyapı kontrolü ve prodüksiyon planlama adımları rehberi.",
    images: [OG_IMAGE],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: "Etkinlik Teknik Keşif ve Planlama Rehberi",
        description:
          "Etkinliklerde teknik keşif süreci nasıl yürütülür? Mekân analizi, altyapı kontrolü ve prodüksiyon planlama adımları rehberi.",
        inLanguage: "tr-TR",
        url,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        image: [{ "@type": "ImageObject", url: OG_IMAGE, width: 1600, height: 720 }],
        author: {
          "@type": "Organization",
          name: "Sahneva Organizasyon",
        },
        publisher: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "Sahneva Organizasyon",
          logo: {
            "@type": "ImageObject",
            url: `${BASE_SITE_URL}/img/sahneva-logo.svg`,
          },
        },
        isPartOf: { "@id": WEBSITE_ID },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Anasayfa",
            item: BASE_SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${BASE_SITE_URL}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Etkinlik Teknik Keşif ve Planlama Rehberi",
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="ld-article-etkinlik-teknik-kesif"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <BlogLayout
        siteUrl={BASE_SITE_URL}
        breadcrumbItems={[
          { name: "Anasayfa", url: BASE_SITE_URL },
          { name: "Blog", url: `${BASE_SITE_URL}/blog` },
          { name: "Etkinlik Teknik Keşif ve Planlama Rehberi", url },
        ]}
        heroImage={{
          src: FEATURED_IMAGE,
          alt: "Konferans salonunda LED ekranlı sahne ve oturma düzeni — teknik keşif için örnek kurulum",
        }}
        pills={["Teknik Keşif", "Prodüksiyon Planlama", "Etkinlik Rehberi"]}
        title="Etkinlik Teknik Keşif"
        highlight="ve Planlama Rehberi"
        description="Etkinliklerde teknik keşif sürecini adım adım planlayın: mekân analizi, elektrik-akustik kontrolü, video/ışık tasarımı ve uygulama öncesi risk yönetimi."
        publishDate={PUBLISH_DATE}
        author="Sahneva Organizasyon"
        readTime="11-13 dk okuma"
        primaryLinks={[
          { href: "/iletisim", label: "Ücretsiz Keşif Planlayın" },
          { href: "/hizmetler", label: "Hizmetlerimizi İnceleyin" },
        ]}
        whatsappUrl="https://wa.me/905453048671"
        currentSlug={slug}
        currentCategory="Etkinlik Planlama"
        currentKeywords={[
          "etkinlik teknik keşif",
          "prodüksiyon planlama",
          "sahne ses ışık",
        ]}
      >
          <div className="prose prose-slate max-w-none prose-headings:scroll-mt-28 prose-a:text-blue-700 hover:prose-a:text-blue-800">
            <figure className="not-prose mt-2">
              <Image
                src={FEATURED_IMAGE}
                alt="Konferans salonunda LED ekranlı sahne ve oturma düzeni — teknik keşif için örnek kurulum"
                width={1600}
                height={720}
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Teknik keşif, sahnenin görüş açısı, ekran yerleşimi ve ışık dağılımını etkinlik gününden önce netleştirir.
              </figcaption>
            </figure>

            <h2>Giriş</h2>
            <p>
              Görsel-işitsel yapılandırma, unutulmaz etkinliklerin temel unsurlarından biridir.
              Ses, ışık ve görsel efektlerin doğru planlanmış ve entegre edilmiş birleşimi;
              izleyici deneyimini güçlendirir, etkinliğin mesajını netleştirir ve katılımcıların
              zihninde kalıcı bir etki bırakır. Etkinliğin içeriği ne kadar güçlü olursa olsun,
              teknik altyapı bu içeriği taşıyacak kapasitede değilse hedeflenen etki oluşmaz.
            </p>
            <p>
              Bir etkinlik planlarken çoğu zaman sahne tasarımı, konuşmacı listesi veya davetli
              sayısı ön plana çıkar. Ancak seçilen mekânın teknik açıdan gerçekten uygun olup
              olmadığı çoğu zaman yüzeysel değerlendirilir. Oysa teknik altyapı,
              organizasyonun görünmeyen ama belirleyici katmanıdır.
            </p>
            <p>İşte bu noktada görsel-işitsel keşif ziyaretleri devreye girer.</p>
            <p>
              Keşif süreci yalnızca mekânı görmekten ibaret değildir. Elektrik kapasitesinden
              akustik yapıya, askı noktalarından internet altyapısına kadar birçok teknik
              unsurun sistematik biçimde değerlendirilmesini içerir. Bu değerlendirme, etkinlik
              günü karşılaşılabilecek teknik risklerin önceden tespit edilmesini sağlar.
            </p>
            <p>
              Sahneva olarak yaklaşımımız, teknik prodüksiyonu kurulum gününe bırakmamak üzerine
              kuruludur. Keşif aşamasında yapılan detaylı analiz; bütçe planlamasının doğru
              yapılmasını, gereksiz ekipman kullanımının önlenmesini ve eksik sistem riskinin
              ortadan kaldırılmasını sağlar.
            </p>
            <p>
              Bu rehberde, görsel-işitsel keşif ziyaretlerini adım adım ele alacak ve bir
              mekândan en yüksek teknik verimi nasıl elde edebileceğinizi ayrıntılı şekilde
              inceleyeceğiz.
            </p>

            <h2>Bölüm 1: Etkinliğinizin Görsel-İşitsel İhtiyaçlarını Anlamak</h2>
            <p>
              Başarılı bir keşif süreci, etkinliğin teknik ihtiyaçlarının doğru tanımlanmasıyla
              başlar. Teknik ekipman seçimine geçmeden önce, etkinliğin amacının netleşmiş
              olması gerekir. Çünkü teknik tasarım, hedefin hizmetindedir.
            </p>

            <h3>Etkinlik hedeflerini tanımlayın</h3>
            <p>
              Etkinliğinizin temel amacı nedir? Bilgilendirmek mi, ilham vermek mi, marka
              prestijini güçlendirmek mi, satış oluşturmak mı? Bu soruların net cevabı olmadan
              teknik planlama eksik kalır.
            </p>
            <p>
              Örneğin bir ürün lansmanında görsel kalite ve <Link href="/led-ekran-kiralama">LED ekran çözünürlüğü</Link> marka algısını doğrudan etkiler.
              Üst düzey yöneticilerin konuştuğu bir zirvede ise konuşma anlaşılabilirliği ve
              mikrofon kalitesi birinci öncelik haline gelir. Konser veya yüksek enerjili bir
              motivasyon etkinliğinde ise ses sisteminin gücü ve ışık tasarımının dinamizmi
              deneyimi belirler.
            </p>
            <figure className="not-prose mt-6">
              <Image
                src="/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/led-sahne-genis-plan.webp"
                alt="Geniş LED ekranlı sahne kurulumu — içerik okunabilirliği ve ekran yerleşimi planlama örneği"
                width={1440}
                height={665}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Video/LED planı yapılırken izleme mesafesi, çözünürlük ve içerik formatı birlikte değerlendirilir.
              </figcaption>
            </figure>

            <p>
              Görsel-işitsel unsurların rolü yalnızca destekleyici değildir; doğru kullanıldığında
              etkinliğin etkisini katlar. Bu nedenle teknik planlama, hedefin netleşmesiyle
              başlamalıdır.
            </p>

            <h3>Hedeflerinize ulaşmada görsel-işitsel kaynakların rolünü değerlendirin</h3>
            <p>
              Etkinliğin içeriğini ve formatını detaylandırmak, teknik ihtiyaçları netleştirmenin
              ikinci adımıdır. Panel mi düzenlenecek, sahne performansı mı olacak, hibrit yayın
              mı planlanıyor? Her format farklı altyapı gerektirir.
            </p>
            <p>
              Kullanılacak içerik türleri de belirleyicidir. Sunum dosyaları, video gösterimleri,
              canlı kamera görüntüleri, uzaktan bağlantılar veya sosyal medya entegrasyonları
              teknik kapasiteyi doğrudan etkiler.
            </p>
            <p>
              Bu aşamada yapılan doğru analiz, gereksiz ekipman kullanımını engeller ve bütçenin
              doğru dağıtılmasını sağlar. Amaç her zaman en büyük sistemi kurmak değil, hedefe
              en uygun sistemi kurmaktır.
            </p>
            <blockquote>
              Amaç her zaman en büyük sistemi kurmak değil, hedefe en uygun sistemi kurmaktır.
            </blockquote>

            <h3>Hedef kitlenin ihtiyaçlarını analiz edin</h3>
            <p>
              Teknik tasarımın başarısı, hedef kitlenin doğru analiz edilmesine bağlıdır.
              Katılımcıların profili, beklentileri ve etkinlikten almak istedikleri deneyim; ses,
              ışık ve video tasarımını etkiler.
            </p>
            <p>
              Genç ve dinamik bir kitle için daha hareketli bir ışık tasarımı uygun olabilirken,
              resmi bir kamu etkinliğinde daha kontrollü ve sade bir görsel dil tercih edilir.
              Akademik organizasyonlarda ekran okunabilirliği ve ses netliği öncelikli
              konulardır.
            </p>
            <p>
              Katılımcı sayısı da belirleyici faktördür. Küçük ölçekli bir toplantı ile yüzlerce
              kişilik bir organizasyon aynı teknik dağılım planıyla yönetilemez. Hoparlör
              yerleşimi, ekran boyutu ve sahne yüksekliği katılımcı yoğunluğuna göre
              planlanmalıdır.
            </p>

            <h3>Katılım beklentilerini değerlendirin</h3>
            <p>
              Etkinlikte soru-cevap oturumu olacak mı? Katılımcılar sahneye davet edilecek mi?
              Uzaktan bağlanan konuşmacılar olacak mı? Simultane çeviri gerekecek mi?
            </p>
            <p>
              Bu detaylar mikrofon seçimini, interkom sistemini, kamera yerleşimini ve yayın
              altyapısını doğrudan etkiler. Küçük gibi görünen bu sorular, teknik planlamada
              büyük fark yaratır.
            </p>

            <h3>Görsel-işitsel gereksinimlerinizi tanımlayın</h3>
            <p>
              Etkinliğin hedefleri ve katılımcı analizi netleştikten sonra temel teknik
              gereksinimler belirlenir. <Link href="/ses-isik-sistemleri">Ses sistemi</Link> kapasitesi,
              hoparlör kapsama alanı, mikrofon türleri, LED ekran çözünürlüğü, projeksiyon
              ihtiyacı, ışık kontrol sistemi ve gerekiyorsa rigging altyapısı bu aşamada
              planlanır.
            </p>
            <p>
              Ayrıca teknik detaylar da göz önünde bulundurulmalıdır. Ses çıkış gücü, hoparlör
              dağılımı, ışık dimmer kapasitesi, LED ekranın piksel pitch değeri ve multimedya
              format uyumluluğu gibi unsurlar performansı doğrudan etkiler.
            </p>
            <p>
              Doğru teknik analiz, kurulum günü sürpriz yaşanma ihtimalini önemli ölçüde azaltır.
            </p>

            <h2>Bölüm 2: Yerinde keşif ziyaretlerine hazırlanmak</h2>
            <p>
              Etkinliğin teknik ihtiyaçları netleştirildikten sonra, bu ihtiyaçları
              karşılayabilecek mekânların değerlendirilmesi gerekir. Mekân seçimi yalnızca
              görsel beğeniye dayalı bir karar değildir; teknik uygulanabilirliğin temelini
              oluşturur.
            </p>
            <figure className="not-prose mt-6">
              <Image
                src="/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/acik-hava-cadir-alan.webp"
                alt="Açık hava çadır alanı — zemin, erişim ve kurulum planı için keşif örneği"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Açık hava mekânlarında zemin durumu, yükleme/boşaltma ve hava koşullarına karşı B planı keşifte netleşir.
              </figcaption>
            </figure>


            <h3>Etkinlik mekânı arayışı</h3>
            <p>
              Uygun mekânı belirlerken konum, kapasite, alan dağılımı ve tavan yüksekliği gibi
              fiziksel özellikler ilk değerlendirme kriterleridir. Ancak bunların yanı sıra
              mekânın teknik geçmişi ve benzer organizasyonlara ev sahipliği yapıp yapmadığı da
              önemlidir.
            </p>
            <p>
              Büyük ölçekli lansmanlarda <Link href="/sahne-kiralama">sahne kurulumu</Link> için yeterli derinlik
              ve yükseklik gereklidir. LED ekran yerleşimi, askı noktaları ve ışık truss
              sistemleri için uygun alan bulunmalıdır. Kurumsal zirvelerde ise akustik kalite,
              konuşma netliği ve oturma düzeninin görüş açısı ön plana çıkar. Festival veya
              konser formatındaki etkinliklerde backstage alanı, FOH konumu ve elektrik altyapısı
              belirleyici unsurlar haline gelir.
            </p>
            <p>
              Mekânın mimari karakteri de etkinliğin temasına uyumlu olmalıdır. Resmi bir kamu
              organizasyonunda sade ve kontrollü bir atmosfer tercih edilirken, deneyim odaklı
              etkinliklerde daha esnek alanlar avantaj sağlayabilir.
            </p>

            <h3>Mekânın lojistiğini ve hizmetlerini değerlendirin</h3>
            <p>
              Teknik prodüksiyon süreci yalnızca sahne üzerinde gerçekleşmez; lojistik akış en az
              teknik kurulum kadar önemlidir. Ekipmanların mekâna giriş güzergâhı, yükleme ve
              boşaltma alanlarının uygunluğu, tır yanaşma imkânı ve kapı genişlikleri kontrol
              edilmelidir.
            </p>
            <figure className="not-prose mt-6">
              <Image
                src="/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/sahne-kurulum-platform.webp"
                alt="Sahne platform kurulumu — kurulum, güvenlik ve lojistik kontrol noktaları"
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Keşifte sahne ölçüleri, backstage akışı ve kablo güzergâhları netleştirilerek kurulum günü sürprizleri azaltılır.
              </figcaption>
            </figure>

            <p>
              Yük asansörlerinin kapasitesi ve kurulum süresi boyunca alanın erişilebilirliği de
              planlamada kritik rol oynar. Kurulum ve söküm için ayrılan zaman dilimi yeterli
              değilse, teknik risk artar.
            </p>
            <p>
              Elektrik altyapısı detaylı incelenmelidir. Ana elektrik panosunun kapasitesi, faz
              dağılımı ve priz sayısı, kurulacak sistemin güvenli çalışmasını doğrudan etkiler.
              İnternet altyapısının stabilitesi ve bant genişliği özellikle hibrit veya canlı
              yayın planlanan etkinliklerde kritik önem taşır.
            </p>
            <p>
              Yerinde teknik destek personelinin bulunup bulunmadığı da değerlendirilmelidir.
              Mekânın teknik ekibi ile prodüksiyon ekibi arasındaki koordinasyon, uygulama
              sürecinin sorunsuz ilerlemesini sağlar.
            </p>

            <h3>Mekân yönetimi ile iletişim</h3>
            <p>
              Keşif sürecinin sağlıklı ilerlemesi için mekân yönetimiyle açık ve şeffaf iletişim
              kurulmalıdır. Etkinlik tarihi, tahmini katılımcı sayısı, etkinlik süresi ve formatı
              net biçimde paylaşılmalıdır.
            </p>
            <p>
              Planlanan teknik kapsam da önceden belirtilmelidir. Ses sistemi ölçeği, LED ekran
              veya projeksiyon ihtiyacı, sahne tasarımı, <Link href="/ses-isik-sistemleri">ışık kurulumu</Link> ve
              olası rigging gereksinimleri hakkında genel çerçeve sunmak, keşif sırasında doğru
              bilgilerin hazır olmasını sağlar.
            </p>
            <p>
              Keşif ziyaretinin mümkünse mekânda başka bir etkinliğin olmadığı zaman diliminde
              planlanması önerilir. Alan boşken yapılan teknik incelemeler, ölçüm ve
              değerlendirme açısından daha sağlıklı sonuç verir.
            </p>
            <p>
              Keşif sırasında organizasyon sorumlusu, mekânın teknik temsilcisi ve prodüksiyon
              ekibinin aynı anda sahada bulunması koordinasyonu güçlendirir ve yanlış anlaşılmaları
              önler.
            </p>

            <h2>Bölüm 3: Mekânda görsel-işitsel keşif ziyareti gerçekleştirmek</h2>
            <p>
              Keşif günü, planlanan teknik tasarımın gerçek mekân koşullarıyla karşılaştırıldığı
              aşamadır. Bu ziyaret sistematik ve disiplinli şekilde yürütülmelidir.
            </p>

            <h3>Mekânın görsel-işitsel altyapısının değerlendirilmesi</h3>
            <p>
              Mekânda kurulu olan ses sistemleri, aydınlatma ekipmanları, projeksiyon cihazları
              ve sabit ekranlar detaylı biçimde incelenmelidir. Bu ekipmanların teknik kapasitesi
              ve güncelliği değerlendirilmelidir.
            </p>
            <p>
              Sistemlerin çalışır durumda olup olmadığı test edilmelidir. Mevcut altyapı küçük
              toplantılar için yeterli olabilir; ancak büyük ölçekli bir prodüksiyon için
              yetersiz kalabilir. Bu nedenle hedeflenen kalite seviyesi dikkate alınarak
              değerlendirme yapılmalıdır.
            </p>
            <p>
              Teklif ve maliyet şeffaflığı da bu aşamada önemlidir. Mekânın sunduğu
              görsel-işitsel ekipmanların kira bedeline dahil olup olmadığı netleştirilmelidir.
              Harici teknik ekip kullanımına izin verilip verilmediği ve ek ücret uygulanıp
              uygulanmayacağı öğrenilmelidir.
            </p>

            <h3>Elektrik gücünü, kablolamayı ve mevcut teknolojiyi kontrol edin</h3>
            <p>
              Elektrik kapasitesi keşif sürecinin en kritik başlıklarından biridir. Ana elektrik
              hattının gücü, faz dağılımı ve topraklama sistemi detaylı şekilde kontrol
              edilmelidir.
            </p>
            <p>
              LED ekranlar, hareketli ışık sistemleri ve güçlü ses ekipmanları yüksek enerji
              tüketir. Bu nedenle yük hesabı dikkatle yapılmalıdır. Gerekli durumlarda jeneratör
              desteği planlanmalıdır.
            </p>
            <p>
              Kablolama güzergâhı önceden belirlenmeli, kabloların güvenli şekilde döşenebileceği
              alanlar kontrol edilmelidir. Acil çıkış yollarının kapatılmaması temel güvenlik
              kuralıdır.
            </p>
            <p>
              Mekânda mevcut ağ altyapısı ve internet bant genişliği test edilmelidir. Özellikle
              canlı yayın veya uzaktan bağlantı planlanan etkinliklerde stabil bağlantı büyük
              önem taşır.
            </p>

            <h3>Akustiğin incelenmesi</h3>
            <p>
              Mekânın akustik özellikleri konuşma netliğini ve müzik performansını doğrudan
              etkiler. Yankı süresi, yansıma noktaları ve arka plan gürültüsü analiz edilmelidir.
            </p>
            <figure className="not-prose mt-6">
              <Image
                src="/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/tarihi-mekan-aydinlatma.webp"
                alt="Tarihi bir iç mekânda aydınlatma ve mimari yapı — akustik ve yansıma riskleri"
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Mimari yüzeyler yankıyı artırabilir; keşifte akustik riskler ve çözüm (absorber/perde/yerleşim) planlanır.
              </figcaption>
            </figure>

            <p>
              Duvar ve zemin kaplamaları ses dağılımını belirler. Sert yüzeyler yankıyı
              artırırken, absorbe edici malzemeler sesi dengeler. HVAC sistemlerinden gelen sabit
              sesler de değerlendirilmelidir.
            </p>
            <p>
              Bazı mekânlarda ses seviyesi sınırlaması olabilir. Yerleşim alanlarına yakın
              mekânlarda belirli desibel sınırları uygulanabilir. Bu durum özellikle yüksek
              enerjili etkinliklerde dikkate alınmalıdır.
            </p>

            <h3>Ses sistemini kontrol edin</h3>
            <p>
              Ses sistemi değerlendirilirken mikrofon türleri, hoparlör dağılımı ve sistemin genel
              performansı test edilmelidir. Konuşma ve müzik farklı senaryolarda denenmeli, alanın
              tamamında dengeli dağılım sağlanıp sağlanmadığı kontrol edilmelidir.
            </p>

            <figure className="not-prose mt-6">
              <Image
                src="/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/ses-sistemi-linearray.webp"
                alt="Profesyonel line array hoparlör sistemi — keşifte kapsama ve güç hesabı"
                width={1600}
                height={720}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Hoparlör kapsaması, gecikme planı ve güç gereksinimi keşif aşamasında ölçülerek planlanmalıdır.
              </figcaption>
            </figure>

            <p>
              Kaç mikrofon gerektiği, hangi mikrofon tipinin kullanılacağı, simultane çeviri
              ihtiyacı olup olmadığı bu aşamada netleşir. Interkom sistemi gereksinimi ve frekans
              koordinasyonu da değerlendirilmelidir.
            </p>
            <p>
              Ses masası kapasitesi, kanal sayısı ve çıkış dağılımı etkinlik gereksinimlerine
              uygun olmalıdır.
            </p>

            <h3>Görsel-işitsel içerik ve video ihtiyaçlarının değerlendirilmesi</h3>
            <p>
              Video ve görsel içerik, etkinliğin anlatım gücünü artıran en önemli unsurlardan
              biridir. Bu nedenle mekânın görsel altyapısı detaylı biçimde analiz edilmelidir.
              Ekran yerleşimi, çözünürlük, görüş açıları ve içerik akışı birlikte
              değerlendirilmelidir.
            </p>
            <p>
              Mekânda sabit ekran bulunup bulunmadığı, LED ekran kurulumu için uygun alan olup
              olmadığı ve projeksiyon kullanımına elverişli yüzeylerin varlığı kontrol edilmelidir.
              LED ekran tercih edilecekse piksel pitch değeri, izleme mesafesi ve içerik
              çözünürlüğü dikkate alınmalıdır. Küçük alanlarda yüksek çözünürlük avantaj
              sağlarken, büyük alanlarda doğru ölçeklendirme ön plana çıkar.
            </p>
            <p>
              Projeksiyon tercih edildiğinde ise doğal ışık miktarı, perde yüzeyinin kalitesi ve
              projeksiyon cihazının lumen gücü değerlendirilmelidir. Ön projeksiyon ile arka
              projeksiyon seçenekleri arasındaki farklar göz önünde bulundurulmalıdır.
            </p>
            <p>
              Ayrıca sahne içi monitör ihtiyacı, kontrol monitörleri ve kamera yerleşimi de
              planlanmalıdır. Çok kameralı kayıt yapılacaksa kamera açıları ve kablo güzergâhları
              önceden belirlenmelidir. Canlı yayın planlanıyorsa encoder kapasitesi, yayın
              altyapısı ve internet upload hızı test edilmelidir.
            </p>
            <p>
              Ekranların en-boy oranı ile içerik formatının uyumlu olması gerekir. Aksi halde
              görüntü kaybı veya siyah bant sorunu oluşabilir. Farklı ekranlarda aynı içeriğin mi
              yoksa farklı içeriklerin mi gösterileceği de önceden planlanmalıdır.
            </p>

            <h3>Aydınlatma koşullarının değerlendirilmesi</h3>
            <p>
              Aydınlatma, yalnızca sahneyi görünür kılmak için değil; atmosfer oluşturmak için de
              kullanılır. Bu nedenle mekânın doğal ve yapay ışık koşulları analiz edilmelidir.
            </p>
            <p>
              Etkinliğin yapılacağı saat diliminde mekânın aldığı doğal ışık miktarı
              değerlendirilmelidir. Gün ışığı, özellikle projeksiyon kullanımında görüntü
              kalitesini etkileyebilir. Pencerelerin karartılabilir olup olmadığı kontrol
              edilmelidir.
            </p>
            <p>
              Yapay aydınlatma altyapısında dimmer kapasitesi, kontrol masası imkânları ve mevcut
              armatürlerin gücü incelenmelidir. Sahne aydınlatmasında konuşmacının net görünmesi,
              gölge oluşmaması ve kamera çekimi için uygun ışık seviyesinin sağlanması önemlidir.
            </p>
            <p>
              Etkinliğin temasına uygun renk sıcaklığı ve ışık tasarımı planlanmalıdır. Resmi ve
              kurumsal organizasyonlarda dengeli ve sade bir ışık dili tercih edilirken, yaratıcı
              etkinliklerde daha dinamik çözümler uygulanabilir.
            </p>

            <h3>Rigging ve askı sistemleri</h3>
            <p>
              Bazı etkinliklerde ışık, hoparlör veya LED ekranların tavandan asılması gerekir. Bu
              durumda rigging altyapısı detaylı biçimde kontrol edilmelidir.
            </p>
            <figure className="not-prose mt-6">
              <Image
                src="/img/blog/etkinlik-teknik-kesif-ve-planlama-rehberi/rigging-truss-linearray.webp"
                alt="Truss ve rigging kurulumu — askı noktaları, yük dağılımı ve güvenlik kontrolü"
                width={1600}
                height={720}
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full rounded-2xl border border-slate-200 shadow-sm"
              />
              <figcaption className="mt-2 text-sm text-slate-600">
                Askı noktası kapasitesi ve yük dağılımı doğru hesaplanmazsa hem ekipman hem katılımcı güvenliği riske girer.
              </figcaption>
            </figure>

            <p>
              Askı noktalarının yük kapasitesi ve yerleşimi incelenmelidir. Mekânın teknik
              dokümantasyonunda belirtilen maksimum taşıma kapasitesi dikkate alınmalıdır. Gerekli
              durumlarda mühendislik hesapları yapılmalıdır.
            </p>
            <p>
              Kaldırma ekipmanları, motorlu zincir sistemleri ve güvenlik kilitleri kontrol
              edilmelidir. Askı sistemlerinin sertifikalı olup olmadığı ve daha önce ağır
              prodüksiyonlarda kullanılıp kullanılmadığı değerlendirilmelidir.
            </p>
            <p>
              <strong>Rigging uygulamalarında güvenlik birinci önceliktir.</strong> Yanlış hesaplanmış yük dağılımı
              hem ekipman hem katılımcı güvenliği açısından ciddi risk oluşturur. Bu nedenle uzman
              teknik ekip tarafından <Link href="/truss-kiralama">truss ve askı planlaması</Link> yapılması
              gerekir.
            </p>
            <blockquote>
              Rigging uygulamalarında güvenlik birinci önceliktir.
            </blockquote>

            <h2>Bölüm 4: Dokümanlar ve stratejik karar alma</h2>
            <p>
              Keşif süreci tamamlandığında elde edilen tüm teknik veriler sistematik biçimde kayıt
              altına alınmalıdır. Saha gözlemleri yazılı hale getirilmeli, ölçümler ve teknik
              kapasiteler belgelenmelidir.
            </p>
            <p>
              Kurulu sistemlerin marka ve modeli, elektrik panosu kapasitesi, internet altyapısı,
              askı noktası bilgileri ve akustik gözlemler dosyalanmalıdır. Bu dokümantasyon,
              teknik planlamanın temelini oluşturur.
            </p>
            <p>
              Mevcut altyapının etkinliğin gereksinimlerini karşılayıp karşılamadığı
              değerlendirilmelidir. Yetersiz görülen alanlar belirlenmeli ve gerekli ek bileşenler
              planlanmalıdır. Ek hoparlör, gecikme kuleleri, daha yüksek çözünürlüklü LED ekran,
              jeneratör desteği veya yedek internet hattı gibi ihtiyaçlar bu aşamada netleşir.
            </p>
            <p>
              <strong>Mekân sözleşmesi teknik açıdan incelenmelidir.</strong> Harici teknik ekip kullanımına izin
              verilip verilmediği, ek ekipman kurulumu için ücret talep edilip edilmediği,
              elektrik tüketimi için ek bedel uygulanıp uygulanmadığı kontrol edilmelidir. Kurulum
              ve söküm saatleri sözleşmede açıkça belirtilmelidir.
            </p>
            <blockquote>
              Mekân sözleşmesi teknik açıdan incelenmelidir.
            </blockquote>
            <p>
              Bazı mekânlarda ses seviyesi sınırlamaları veya belirli teknik kısıtlamalar
              bulunabilir. Bu maddelerin önceden bilinmesi, planlamanın doğru yapılmasını sağlar.
            </p>
            <p>
              Son karar aşamasında kalite, zaman ve bütçe dengesi birlikte değerlendirilmelidir.
              Teknik gereksinimler ile maliyet arasındaki ilişki analiz edilerek optimum çözüm
              belirlenmelidir.
            </p>
            <p>
              Profesyonel teknik danışmanlık, bu süreçte önemli avantaj sağlar. Uzman ekipler
              riskleri önceden görür, alternatif çözümler üretir ve uygulama sırasında oluşabilecek
              aksaklıkları minimize eder.
            </p>

            <div className="not-prose mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
              <h3 className="m-0 text-lg font-semibold text-slate-900">
                Teknik keşif planını ekibinizle standartlaştırın
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base">
                Keşif sürecinde aynı başlıkları her mekânda tutarlı değerlendirmek için pratik bir
                kontrol dokümanı büyük kolaylık sağlar. PDF formatındaki kontrol listesi;
                elektrik altyapısı, akustik, video-ışık planı, rigging güvenliği ve lojistik
                hazırlık maddelerini tek bir akışta toplar. Böylece teklif, kurulum ve uygulama
                aşamalarında ekipler arası iletişim hızlanır, kritik detayların atlanma riski azalır.
              </p>
              <div className="mt-5">
                <a
                  href="https://www.sahneva.com/files/kurumsal-etkinlik-kontrol-listesi-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
                >
                  PDF Kontrol Listesini Aç
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <h2>Sonuç</h2>
            <p>
              Görsel-işitsel keşif süreci, etkinliğin teknik başarısının temelini oluşturur. Doğru
              analiz yapılmadan başlanan kurulum süreci, etkinlik günü istenmeyen sürprizlere yol
              açabilir.
            </p>
            <p>
              Mekânın altyapısını detaylı biçimde incelemek, elektrik ve akustik koşulları analiz
              etmek, video ve aydınlatma imkânlarını doğru planlamak ve tüm verileri sistemli
              biçimde belgelemek; güçlü bir prodüksiyonun vazgeçilmez adımlarıdır.
            </p>
            <p>
              Sahneva olarak sahne, LED ekran, ses, ışık, rigging ve canlı yayın altyapısını
              planlama aşamasından itibaren disiplinli bir süreçle ele alıyoruz. Keşif
              ziyaretlerini yalnızca ön inceleme değil, teknik güvence süreci olarak
              değerlendiriyoruz.
            </p>
            <p><strong>Doğru keşif, güçlü prodüksiyonun temelidir.</strong></p>

            <div className="not-prose mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 md:p-6">
              <p className="m-0 text-sm leading-6 text-slate-700 md:text-base">
                Bir sonraki etkinliğinizde teknik riskleri ortadan kaldırmak için Sahneva
                uzmanlarıyla hemen iletişime geçin ve ücretsiz keşif planlayın.
              </p>
              <div className="mt-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                >
                  Ücretsiz Keşif Planlayın
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
      </BlogLayout>
    </>
  );
}
