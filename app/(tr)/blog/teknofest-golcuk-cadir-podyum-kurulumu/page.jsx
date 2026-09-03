import Image from "next/image";
import Link from "next/link";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { ORGANIZATION_ID } from "@/lib/seo/schemaIds";
import { buildArticleAuthor } from "@/lib/structuredData/articleIdentity";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "teknofest-golcuk-cadir-podyum-kurulumu";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const PUBLISH_DATE = "2026-08-09T14:45:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/teknofest-golcuk-cadir-podyum-kurulumu/page.jsx",
  PUBLISH_DATE
);

const AUTHOR_NAME = "Sahneva İçerik Ekibi";
const TITLE = "TEKNOFEST Kapsamında Gölcük'te Büyük Ölçekli Çadır ve Podyum Kurulumu";
const META_TITLE = "TEKNOFEST Gölcük Çadır ve Podyum Kurulumu";
const SOCIAL_TITLE = META_TITLE + " | Sahneva";
const DESCRIPTION =
  "Sahneva, TEKNOFEST kapsamında Gölcük'te 1.500 m² çadır ve 1.350 m² podyumu bir günde kurdu; lojistik, saha kurulumu ve sökümü birlikte yönetti.";

const HERO_IMAGE = `/img/blog/${SLUG}-hero.webp`;
const ARTICLE_IMAGES = {
  platform: "/img/blog/teknofest-golcuk-podyum-zemin-kurulum.webp",
  interior: "/img/blog/teknofest-golcuk-cadir-ic-mekan-podyum.webp",
  logistics: "/img/blog/teknofest-golcuk-podyum-lojistik.webp",
  exterior: "/img/blog/teknofest-golcuk-etkinlik-cadiri-dis-gorunum.webp",
  project: "/img/blog/teknofest-golcuk-cadir-alani.webp",
};

const TENT_SERVICE_PATH = "/cadir-kiralama";
const TENT_CALCULATOR_PATH = "/cadir-hesaplama";
const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const REGIONAL_RENTAL_PATH = "/bolgesel-kiralama";

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinliğim için çadır ve podyum kurulumu hakkında teklif almak istiyorum."
  );

const TOC_ITEMS = [
  { href: "#golcuk-projesi", label: "Gölcük'te tek günlük kurulum" },
  { href: "#cadir-podyum", label: "Çadır ve podyum birlikte" },
  { href: "#lojistik", label: "Türkiye geneli lojistik" },
  { href: "#kurulum-sokum", label: "Kurulum ve söküm" },
  { href: "#etkinlik-altyapisi", label: "Etkinlik altyapısı planı" },
  { href: "#teklif", label: "Projenizi planlayın" },
];

export const metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({ canonical: BLOG_PATH, tr: BLOG_PATH }),
  image: HERO_IMAGE,
  category: "Çadır ve Podyum Kurulumu",
  keywords: [
    "çadır kiralama",
    "podyum kiralama",
    "etkinlik çadırı",
    "büyük metraj çadır kurulumu",
    "Türkiye geneli çadır ve podyum kurulumu",
    "etkinlik altyapısı",
    "lojistik",
    "kurulum ve söküm",
    "TEKNOFEST çadır kurulumu",
  ],
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  openGraph: {
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    url: BLOG_URL,
    siteName: "Sahneva",
    type: "article",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE}`,
        width: 1920,
        height: 1080,
        alt: "TEKNOFEST kapsamında Gölcük'te kurulan geniş ölçekli etkinlik çadırları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMAGE}`],
  },
};

function ArticleSchema() {
  const imageUrls = [HERO_IMAGE, ...Object.values(ARTICLE_IMAGES)].map((image) => `${SITE_URL}${image}`);

  return (
    <JsonLd
      id="ld-teknofest-golcuk-cadir-podyum-article"
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BlogPosting",
            "@id": `${BLOG_URL}#blogposting`,
            mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
            headline: TITLE,
            description: DESCRIPTION,
            image: imageUrls,
            datePublished: PUBLISH_DATE,
            dateModified: MODIFIED_DATE,
            inLanguage: "tr-TR",
            author: buildArticleAuthor(AUTHOR_NAME),
            publisher: { "@id": ORGANIZATION_ID },
            isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog` },
            about: [
              { "@type": "Service", name: "Çadır Kiralama", url: `${SITE_URL}${TENT_SERVICE_PATH}` },
              { "@type": "Service", name: "Podyum Kiralama", url: `${SITE_URL}${PODIUM_SERVICE_PATH}` },
            ],
          },
        ],
      }}
    />
  );
}

function ProjectImage({ src, alt, caption }) {
  return (
    <figure className="not-prose my-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
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

function ProjectCta() {
  return (
    <section id="teklif" className="not-prose my-12 rounded-3xl bg-slate-950 p-7 text-white shadow-xl md:p-10">
      <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-violet-200">Teklif ve proje planı</p>
      <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
        Çadır, podyum ve lojistik ihtiyacınızı birlikte planlayalım
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
        Etkinlik tarihinizi, şehrinizi, yaklaşık alan ölçünüzü ve kullanım senaryonuzu paylaşın. Sahneva,
        ihtiyacınıza uygun çadır, podyum, sevkiyat, kurulum ve söküm planını birlikte oluştursun.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href="/iletisim"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-violet-50"
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

export default function TeknofestGolcukCadirPodyumPage() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: TITLE, url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMAGE,
          alt: "TEKNOFEST kapsamında Gölcük'te kurulan geniş ölçekli etkinlik çadırları",
        }}
        pills={["TEKNOFEST", "Çadır Kiralama", "Podyum Kurulumu"]}
        title={TITLE}
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="6 dk okuma"
        tocItems={TOC_ITEMS}
        currentSlug={SLUG}
        currentCategory={metadata.category}
        currentKeywords={metadata.keywords}
        primaryLinks={[
          { href: TENT_SERVICE_PATH, label: "Çadır Kiralama" },
          { href: PODIUM_SERVICE_PATH, label: "Podyum Kiralama" },
          { href: "/iletisim", label: "Teklif Al" },
        ]}
        whatsappUrl={WA_URL}
      >
        <div className="mx-auto max-w-4xl">
          <div className="not-prose mb-10 rounded-2xl border-l-4 border-violet-600 bg-violet-50 px-6 py-5 text-lg font-medium leading-relaxed text-slate-800">
            Geniş ölçekli etkinlik alanlarında çadır, podyum, sevkiyat ve saha ekibi aynı planın parçalarıdır.
            Gölcük'teki bu kurulum, Sahneva'nın Türkiye geneli operasyon kapasitesini somutlaştıran projelerden biridir.
          </div>

          <p>
            Büyük ölçekli etkinliklerde ihtiyaç yalnızca <Link href={TENT_SERVICE_PATH}>çadır kiralama</Link> ya da{" "}
            <Link href={PODIUM_SERVICE_PATH}>podyum kiralama</Link> değildir. Alanın kullanım amacına göre planlanması,
            malzemelerin doğru sırayla sevk edilmesi, zemin sisteminin hazırlanması ve kurulum ekibinin koordinasyonu;
            aynı etkinlik altyapısı operasyonunun parçalarıdır. Sahneva, Türkiye'nin her şehrinde bu süreci tek bir proje
            planı üzerinden yürütür.
          </p>
          <p>
            TEKNOFEST kapsamında Gölcük, Kocaeli'nde gerçekleştirilen bu projede yaklaşık 1.500 m² çadır ve 1.350 m²
            podyum zemini, tek günlük planlı kurulumla hazırlandı. Geniş metrajlı projelerde sonuç; yalnızca ekipmanın
            miktarından değil, sahaya doğru zamanda ulaşan lojistikten ve birbirini takip eden kurulum adımlarından doğar.
          </p>

          <h2 id="golcuk-projesi">TEKNOFEST Kapsamında Gölcük'te Tek Günlük Kurulum</h2>
          <p>
            Bu projede çadır blokları geniş bir alana yerleştirilirken, podyum sistemi de iç kullanım yüzeyini
            tamamlayacak şekilde kurgulandı. Yaklaşık 1.500 m² çadır alanı; ziyaretçi hareketi, girişler, etkinlik
            bölümleri ve geçiş hatları için esnek bir kullanım hacmi oluşturdu. Yaklaşık 1.350 m² podyum ise çadırların
            içinde düzenli ve kesintisiz bir zemin alanı sağladı.
          </p>
          <p>
            Tek günlük kurulum hedefi, ekibin sahaya geldiği anda başlamaz. Sevkiyat sırası, çadır modüllerinin
            yerleşimi, podyum parçalarının dağılımı ve ekiplerin çalışma alanları önceden netleştirildiğinde, büyük
            metrajlı işler planlı biçimde ilerler. Gölcük projesinde de çadır ve zemin ekipleri aynı operasyon akışında
            çalışarak alanı etkinlik kullanımına hazır hâle getirdi.
          </p>
          <p>
            Bu ölçekteki bir etkinlik çadırı, kullanım amacına göre farklı bölümlere ayrılabilen esnek bir yapı sunar.
            Giriş alanlarından iç koridorlara, ziyaretçi akışından etkinlik ünitelerinin yerleşimine kadar her detay;
            çadırın yalnızca kapalı bir hacim değil, etkinliğin çalışacağı altyapı hâline gelmesini sağlar. Sahneva
            projeyi bu bütünü gözeterek planlar.
          </p>

          <ProjectImage
            src={ARTICLE_IMAGES.project}
            alt="TEKNOFEST kapsamında Gölcük'te hazırlanan geniş açıklıklı etkinlik çadırı"
            caption="TEKNOFEST kapsamındaki proje için kurulan geniş açıklıklı etkinlik çadırı."
          />

          <h2 id="cadir-podyum">Çadır ve Podyum Sistemleri Birlikte Planlandığında</h2>
          <p>
            Etkinlik çadırı, açık alanı programın ihtiyaçlarına göre tanımlanmış bir kullanım alanına dönüştürür.
            Podyum sistemi ise bu alanın zeminini tamamlar. Özellikle büyük metrajlı kurulumlarda bu iki hizmeti ayrı
            ayrı düşünmek yerine; çadır içi geçişler, kullanım bölgeleri, sahne veya stant yerleşimiyle birlikte ele
            almak daha verimli bir sonuç verir.
          </p>
          <p>
            Gölcük'teki projede podyum modülleri, çadırın iç yüzeyine uyum sağlayacak biçimde parça parça monte edildi.
            Bu yaklaşım, geniş alanın tekdüze ve kullanılabilir bir zemine dönüşmesini sağladı. Etkinliğin ihtiyacına
            göre podyum; karşılama alanı, sergileme düzeni, oturma bölümü, geçiş hattı ya da farklı etkinlik üniteleri
            için yapılandırılabilir.
          </p>
          <p>
            Çadır ve podyumun aynı ekip tarafından koordine edilmesi, uygulama sırasını da sadeleştirir. Çadırın
            kullanıma açılacak bölümleri ile zemin sisteminin tamamlanma sırası birbirine göre düzenlenir. Böylece saha
            ekibi, etkinlik takvimine uygun biçimde ilerleyen daha anlaşılır bir kurulum akışı elde eder.
          </p>

          <ProjectImage
            src={ARTICLE_IMAGES.platform}
            alt="Sahneva ekibinin etkinlik çadırı içinde modüler podyum zemini kurması"
            caption="Modüler podyum sistemi, geniş çadır alanının etkinlik kullanımına uygun bir zemine dönüşmesini sağlar."
          />

          <h2 id="lojistik">Türkiye Geneli Çadır ve Podyum Lojistiği</h2>
          <p>
            Büyük metraj çadır kurulumu, yalnızca sahadaki montajla değerlendirilmez. Çadır sistemleri, podyum
            parçaları, bağlantı ekipmanları ve tamamlayıcı malzemeler; kurulum sırasına göre hazırlanmalı ve etkinlik
            alanına doğru planla ulaşmalıdır. Bu nedenle lojistik, hizmetin arka planındaki bir detay değil; operasyonun
            doğrudan belirleyici unsurudur.
          </p>
          <p>
            Sahneva, Türkiye geneli çadır ve podyum kurulumu projelerinde sevkiyat ile saha operasyonunu aynı takvimde
            yönetir. Malzemelerin araçlara yüklenmesinden sahada ekiplerin konumlanmasına kadar her adım, kurulumu
            hızlandıracak bir sıra içinde planlanır. İstanbul dışındaki projelerde de şehir, alan büyüklüğü ve etkinlik
            takvimi; lojistik planın başlangıç noktalarını oluşturur.
          </p>
          <p>
            Bu yaklaşım, farklı şehirlerde gerçekleşen etkinliklerde hizmet standardının korunmasına yardımcı olur.
            Çadır sistemleri ve podyum modülleri, proje ihtiyacına göre hazırlanır; saha ekibi de etkinliğin kurulum
            programına göre görevlendirilir. Sonuçta şehir değişse bile ihtiyaç duyulan etkinlik altyapısı aynı
            koordinasyon anlayışıyla kurulabilir.
          </p>
          <p>
            Etkinliğiniz için ilk alan hesabını yapmak isterseniz <Link href={TENT_CALCULATOR_PATH}>çadır hesaplama
            aracını</Link> kullanabilir; detaylı proje planı için Sahneva ekibiyle iletişime geçebilirsiniz.
          </p>

          <ProjectImage
            src={ARTICLE_IMAGES.logistics}
            alt="Podyum ve zemin sistemlerinin etkinlik kurulumu için araçla sevk edilmesi"
            caption="Podyum parçalarının planlı sevkiyatı, büyük ölçekli etkinlik kurulumunun temel adımlarından biridir."
          />

          <h2 id="kurulum-sokum">Kurulum ve Söküm Sürecinde Tek Koordinasyon</h2>
          <p>
            Sahneva'nın hizmet modeli, ekipman teslimiyle sınırlı değildir. Proje ihtiyacı belirlendikten sonra çadır,
            podyum, lojistik, kurulum ve söküm aynı koordinasyon altında planlanır. Böylece etkinlik alanının hazırlık
            sürecinde farklı tedarikçiler arasında ayrı ayrı iş takibi yapmak yerine, bütünlüklü bir operasyon akışı
            oluşturulur.
          </p>
          <p>
            Kurulumda çadır yapısı, yan kapamalar, girişler ve iç yerleşim tamamlanırken podyum zemini de kullanım
            senaryosuna uygun olarak yerleştirilir. Etkinlik sonrasında söküm ekibi, malzemelerin toplanması ve sahadan
            ayrılması sürecini aynı planla yürütür. Bu düzen; fuarlar, festivaller, kurumsal etkinlikler ve geçici
            kullanım alanları için süreci daha yönetilebilir hâle getirir.
          </p>
          <p>
            Kurulum ve sökümün aynı operasyon zincirinde yer alması, etkinlik ekibinin odağını programına vermesine
            olanak tanır. Sahneva, altyapının sahaya taşınmasıyla başlayan ve etkinlik sonrasında toparlanmasıyla
            tamamlanan süreci planlayarak, büyük ölçekli projelerde tek bir iletişim noktası sunar.
          </p>

          <ProjectImage
            src={ARTICLE_IMAGES.interior}
            alt="Etkinlik çadırı içinde tamamlanan geniş podyum zemin alanı"
            caption="Çadır içindeki geniş podyum zemini, etkinlik alanının düzenli kullanımını destekler."
          />

          <h2 id="etkinlik-altyapisi">Büyük Ölçekli Etkinlik Altyapısı İçin Sahneva</h2>
          <p>
            Festival, fuar, kurumsal buluşma, açık hava organizasyonu veya geçici kullanım gerektiren geniş kapsamlı
            projelerde etkinlik altyapısı ilk adımlardan biridir. Çadırın alanı, podyumun yerleşimi, araçların sevkiyatı
            ve ekiplerin kurulum takvimi birlikte değerlendirildiğinde, etkinlik günü için ihtiyaç duyulan düzen daha
            erken kurulmuş olur.
          </p>
          <p>
            TEKNOFEST kapsamında Gölcük'te tamamlanan yaklaşık 1.500 m² çadır ve 1.350 m² podyum kurulumu, Sahneva'nın
            büyük ölçekli projelerdeki lojistik ve operasyon kapasitesini gösterir. Türkiye'nin her şehrinde etkinlik
            çadırı, podyum sistemi, zemin çözümü, kurulum ve söküm ihtiyacınız için proje ölçünüze uygun bir plan
            oluşturabilirsiniz.
          </p>
          <p>
            İhtiyacınız küçük bir karşılama alanından geniş kapsamlı bir festival yerleşimine kadar uzanabilir. Doğru
            başlangıç; etkinliğin amacı, alanın büyüklüğü, tarih ve kullanım düzenini birlikte değerlendirmektir.
            Sahneva bu bilgileri proje planına dönüştürerek çadır ve podyum çözümünü etkinlik akışınızla uyumlu hâle
            getirir.
          </p>

          <ProjectImage
            src={ARTICLE_IMAGES.exterior}
            alt="Geniş açıklıklı etkinlik çadırının dış görünümü ve giriş düzeni"
            caption="Geniş açıklıklı çadır sistemi, etkinlik alanında esnek giriş ve kullanım düzeni sağlar."
          />

          <BlogRelatedLinks
            services={[
              { href: TENT_SERVICE_PATH, label: "Çadır Kiralama" },
              { href: PODIUM_SERVICE_PATH, label: "Podyum Kiralama" },
              { href: REGIONAL_RENTAL_PATH, label: "Türkiye Geneli Bölgesel Kiralama" },
            ]}
          />

          <ProjectCta />
        </div>
      </BlogLayout>
    </>
  );
}
