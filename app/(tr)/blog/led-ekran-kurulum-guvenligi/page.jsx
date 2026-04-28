import Image from "next/image";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { CONTENT_CLUSTERS } from "@/lib/seo/contentClusters";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "led-ekran-kurulum-guvenligi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;
const AUTHOR_NAME = "Sahneva Icerik Ekibi";
const PUBLISH_DATE = "2026-04-28T09:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile(
  "app/(tr)/blog/led-ekran-kurulum-guvenligi/page.jsx",
  PUBLISH_DATE
);

const HERO_IMG = "/img/blog/dis-mekan-led-ekran-sahne-kurulumu.webp";
const DETAIL_IMG = "/img/blog/kurumsal-konferans-led-ekran-kurulumu.webp";
const OUTDOOR_IMG = "/img/blog/etkinlikler-icin-led-ekran-secimi-hero.webp";
const GALLERY_CONTROL_IMG = "/img/galeri/led-ekran-kiralama-1.webp";
const GALLERY_STAGE_IMG = "/img/galeri/led-ekran-kiralama-31.webp";
const GALLERY_BACKSTAGE_IMG = "/img/galeri/led-ekran-kiralama-32.webp";
const GALLERY_OUTDOOR_IMG = "/img/galeri/led-ekran-kiralama-30.webp";

const TITLE = "LED Ekran Kurulum Güvenliği | Etkinlikler İçin Saha Rehberi";
const DESCRIPTION =
  "Kiralık LED ekran kurulumunda taşıyıcı sistem, elektrik, rüzgar, kablolama, ISG, yüksekte çalışma ve mesleki yeterlilik başlıklarıyla güvenli etkinlik rehberi.";

const WA_URL =
  "https://wa.me/905453048671?text=" +
  encodeURIComponent(
    "Merhaba, etkinliğim için güvenli LED ekran kurulumu ve teknik keşif planı hakkında bilgi almak istiyorum."
  );

const TOC_ITEMS = [
  { href: "#neden-guvenlik", label: "Neden kritik" },
  { href: "#kesif", label: "Teknik keşif" },
  { href: "#tasiyici-sistem", label: "Taşıyıcı sistem" },
  { href: "#elektrik", label: "Elektrik güvenliği" },
  { href: "#hava-kosullari", label: "Açık hava koşulları" },
  { href: "#personel-isg", label: "Personel ve ISG" },
  { href: "#kontrol-listesi", label: "Kontrol listesi" },
  { href: "#sss", label: "SSS" },
];

const CORNERSTONE_LINKS = [
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/truss-kiralama", label: "Truss Kiralama" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
];

const SAFETY_CHECKS = [
  "Mekan ölçüsü, tavan yüksekliği ve zemin taşıma kapasitesi kontrol edilir.",
  "Ekranın askı mı, ground support mu, mobil şase mi olacağı kurulumdan önce netleşir.",
  "Panel ağırlığı, truss kapasitesi, ballast ve rüzgar yükü aynı hesapta değerlendirilir.",
  "Enerji hattı, kaçak akım, topraklama ve kablo güzergahı ayrı bir planla ilerler.",
  "Yüksekte çalışma, kişisel koruyucu donanım ve emniyet alanı kurulmadan montaj başlamaz.",
  "Kurulum sonrası görüntü, kontrol sistemi, yedek panel ve acil durum erişimi test edilir.",
];

const FAQ_ITEMS = [
  {
    question: "LED ekran kurulumunda en büyük risk nedir?",
    answer:
      "Etkinliklerde en büyük risk tek bir başlık değildir. Taşıyıcı sistemin yanlış seçilmesi, rüzgar yükünün hesaba katılmaması, elektrik hattının yetersiz kalması veya yetkisiz personelle kurulum yapılması aynı anda ciddi güvenlik riski oluşturabilir.",
  },
  {
    question: "Açık hava LED ekran kurulumunda nelere bakılır?",
    answer:
      "Açık hava kurulumlarında IP koruma sınıfı, parlaklık, rüzgar yükü, ballast, zemin sabitleme, kablo su yalıtımı ve acil söküm senaryosu birlikte değerlendirilir. Sadece ekranın outdoor olması güvenli kurulum için yeterli değildir.",
  },
  {
    question: "Yüksekte çalışma eğitimi LED ekran kurulumunda gerekli midir?",
    answer:
      "Truss, askı, rigging veya yüksek platform üzerinde çalışma varsa yüksekte çalışma bilinci, doğru kişisel koruyucu donanım ve saha gözetimi kritik hale gelir. Bu konu yalnızca hız değil, ekip ve izleyici güvenliği meselesidir.",
  },
  {
    question: "Mesleki yeterlilik ve ISG belgeleri neden önemlidir?",
    answer:
      "LED ekran kurulumu elektrik, mekanik taşıyıcı sistem ve yüksekte çalışma disiplinlerini bir araya getirir. Bu nedenle ekip üyelerinin iş sağlığı ve güvenliği kurallarını bilmesi, görev paylaşımının net olması ve gerekli mesleki yetkinliğe sahip olması kurulum kalitesini doğrudan etkiler.",
  },
  {
    question: "Kiralık LED ekranda güvenlik için müşteriden hangi bilgiler istenir?",
    answer:
      "Etkinlik tarihi, mekan, ekran ölçüsü, kullanım süresi, iç veya dış mekan bilgisi, izleyici mesafesi, enerji altyapısı ve kurulum saatleri ilk keşif için yeterlidir. Bu bilgilerle güvenli kurulum yöntemi ve ekip planı daha doğru hazırlanır.",
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
  image: HERO_IMG,
  category: "LED Ekran",
  readTime: "8-10 dk okuma",
  keywords: [
    "LED ekran kurulum güvenliği",
    "LED ekran kiralama güvenlik",
    "outdoor LED ekran kurulumu",
    "LED ekran ISG",
    "yüksekte çalışma LED ekran",
    "truss LED ekran kurulumu",
    "etkinlik güvenliği",
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
        alt: "Açık hava etkinliğinde güvenli LED ekran kurulumu ve sahne prodüksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LED Ekran Kurulum Güvenliği",
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  authors: [{ name: AUTHOR_NAME }],
  publisher: "Sahneva",
  robots: { index: true, follow: true },
};

function ArticleSchema() {
  const orgId = `${SITE_URL}/#org`;
  const editorId = `${SITE_URL}/#editor`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: TITLE,
        description: DESCRIPTION,
        image: [`${SITE_URL}${HERO_IMG}`, `${SITE_URL}${DETAIL_IMG}`, `${SITE_URL}${OUTDOOR_IMG}`],
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        author: { "@id": editorId },
        publisher: { "@id": orgId },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        isPartOf: { "@type": "Blog", "@id": `${SITE_URL}/blog#blog` },
        about: [
          { "@type": "Thing", name: "LED ekran kurulum güvenliği" },
          { "@type": "Thing", name: "İş sağlığı ve güvenliği" },
          { "@type": "Thing", name: "Etkinlik prodüksiyonu" },
          { "@type": "Service", "@id": `${SITE_URL}/led-ekran-kiralama#service` },
        ],
        mentions: [
          { "@type": "WebPage", "@id": `${SITE_URL}/led-ekran-kiralama` },
          { "@type": "WebPage", "@id": `${SITE_URL}/truss-kiralama` },
          { "@type": "WebPage", "@id": `${SITE_URL}/kurumsal-organizasyon` },
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

function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="not-prose my-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 100vw, 1100px"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-gray-500">{caption}</figcaption> : null}
    </figure>
  );
}

function FieldNote({ title, children }) {
  return (
    <div className="not-prose my-8 rounded-3xl border border-blue-100 bg-blue-50 p-6 md:p-8">
      <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-blue-700">Saha notu</p>
      <h3 className="mt-3 text-2xl font-black text-slate-950">{title}</h3>
      <div className="mt-3 text-base leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

function SafetyChecklist() {
  return (
    <section id="kontrol-listesi" className="not-prose my-12 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white md:p-8">
      <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-blue-200">Kontrol listesi</p>
      <h2 className="mt-3 text-3xl font-black">Etkinlik öncesi LED ekran güvenlik kontrolü</h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">
        Bu liste teklif aşamasında bile karar kalitesini artırır. Kurulum günü ekibin hızlanmasını değil, doğru sırayla ve güvenli çalışmasını sağlar.
      </p>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {SAFETY_CHECKS.map((item) => (
          <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function GalleryStrip() {
  const items = [
    {
      src: GALLERY_STAGE_IMG,
      alt: "İç mekanda podyum üzerinde test görüntüsüyle kurulan LED ekran",
      title: "Kurulum sonrası test görüntüsü",
      text: "Panel hizası, görüntü akışı ve sahne çevresi etkinlik başlamadan önce birlikte kontrol edilir.",
    },
    {
      src: GALLERY_BACKSTAGE_IMG,
      alt: "LED ekran kurulumu yanında ses ve kontrol ekipmanları",
      title: "Backstage ve kontrol alanı",
      text: "Görüntü, ses, enerji ve kablo düzeni ayrı masalar gibi değil, tek operasyon planı gibi yönetilir.",
    },
    {
      src: GALLERY_CONTROL_IMG,
      alt: "Kurumsal etkinlikte LED ekran ve kontrol bilgisayarları",
      title: "Operasyon noktası",
      text: "Etkinlik günü müdahale hızı için kontrol ekipmanının erişilebilir ve düzenli kalması gerekir.",
    },
    {
      src: GALLERY_OUTDOOR_IMG,
      alt: "Açık havada sahne önünde kurulan geniş LED ekran",
      title: "Açık hava senaryosu",
      text: "Outdoor kurulumlarda parlaklık kadar rüzgar, zemin, kablo koruması ve hava senaryosu da belirleyicidir.",
    },
  ];

  return (
    <section className="not-prose my-12 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
      <div className="max-w-3xl">
        <p className="m-0 text-sm font-black uppercase tracking-[0.18em] text-blue-700">Sahadan görüntüler</p>
        <h2 className="mt-3 text-3xl font-black text-slate-950">Güvenlik kararı görüntünün arkasında başlar</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          LED ekran sahnede tek parça görünür; fakat arkasında panel, taşıyıcı, enerji, ses, kontrol ve personel akışından oluşan çok katmanlı bir kurulum vardır.
        </p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <figure key={item.src} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <div className="relative aspect-[16/10]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            <figcaption className="p-4">
              <p className="m-0 text-base font-black text-slate-950">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const breadcrumbItems = [
    { name: "Anasayfa", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "LED Ekran Kurulum Güvenliği", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />

      <BlogLayout
        breadcrumbItems={breadcrumbItems}
        heroImage={{
          src: HERO_IMG,
          alt: "Açık hava etkinliğinde LED ekran kurulumu ve teknik güvenlik planı",
        }}
        pills={["Sahneva Blog", "LED Ekran", "ISG & Kurulum Güvenliği"]}
        title="LED Ekran Kurulum Güvenliği"
        highlight="Etkinlikler İçin Saha Rehberi"
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="8-10 dk okuma"
        primaryLinks={[
          { href: "/led-ekran-kiralama", label: "LED ekran teklifi al", icon: "→" },
          { href: "/kurumsal-organizasyon", label: "Kurumsal prodüksiyon", icon: "↗" },
        ]}
        whatsappUrl={WA_URL}
        tocItems={TOC_ITEMS}
        cornerstoneLinks={CORNERSTONE_LINKS}
        currentSlug={SLUG}
        currentCategory="LED Ekran"
        currentKeywords={["LED ekran", "kurulum güvenliği", "ISG", "outdoor LED", "truss"]}
      >
        <p>
          LED ekran kiralama tarafında en çok konuşulan konular genellikle pixel pitch, parlaklık, metrekare ve fiyat olur. Oysa etkinlik günü gerçek kaliteyi belirleyen daha sessiz bir katman vardır: ekranın güvenli kurulup kurulmadığı. Özellikle konser, festival, belediye etkinliği, fuar standı, kurumsal lansman ve açık hava organizasyonlarında LED ekran artık yalnızca görüntü yüzeyi değildir; taşıyıcı sistem, elektrik altyapısı, ekip hareketi ve izleyici güvenliğiyle birlikte düşünülmesi gereken bir prodüksiyon unsurudur.
        </p>

        <p>
          Bu rehber; LED ekran üretimi ya da satın alma kararından çok, kiralık LED ekranın etkinlik alanında güvenli şekilde kurulmasına odaklanır. Amaç, müşterinin teklif isterken hangi bilgileri paylaşması gerektiğini, organizasyon ekibinin hangi riskleri sorması gerektiğini ve teknik ekibin sahada hangi kontrol sırasını izlemesi gerektiğini anlaşılır hale getirmektir.
        </p>

        <ImgFigure
          src={DETAIL_IMG}
          alt="Kurumsal konferans alanında LED ekran ve truss kurulum planı"
          caption="İç mekan LED ekran kurulumlarında görünürlük kadar taşıyıcı sistem, kablo güzergahı ve enerji planı da kararın parçasıdır."
        />

        <h2 id="neden-guvenlik">LED ekran kurulum güvenliği neden kritik?</h2>
        <p>
          Etkinliklerde LED ekran çoğu zaman sahnenin en görünür parçasıdır. Büyük ölçülü ekranlar izleyiciye güçlü bir görsel deneyim sunar; fakat aynı zamanda ciddi ağırlık, yüksek elektrik tüketimi, kablo yoğunluğu ve mekanik bağlantı ihtiyacı doğurur. Bu yüzden güvenlik, sonradan eklenen bir kontrol değil, teklif aşamasında başlayan bir tasarım kararıdır.
        </p>

        <p>
          Örneğin aynı 24 metrekare LED ekran bir otel balo salonunda, açık hava meydanında, fuar standında veya konser sahnesinde farklı güvenlik kararları gerektirir. Salon içinde tavan yüksekliği ve kaçış yolları öne çıkarken, açık alanda rüzgar yükü, ballast, yağmur koruması ve zeminin taşıma davranışı öncelik kazanır.
        </p>

        <FieldNote title="Ekran ölçüsü tek başına yeterli bilgi değildir">
          <p>
            “4x3 metre LED ekran istiyoruz” cümlesi başlangıç için iyidir; ama güvenli teklif için mekan, kullanım süresi, iç/dış mekan bilgisi, izleyici mesafesi, kurulum saatleri, enerji noktası ve sahneyle ilişki de gerekir.
          </p>
        </FieldNote>

        <h2 id="kesif">Kurulum öncesi teknik keşif: güvenliğin başladığı yer</h2>
        <p>
          Güvenli LED ekran kurulumu, panel sahaya gelmeden önce başlar. Teknik keşifte ekranın nerede duracağı, izleyici akışı, ekipman giriş kapısı, yükleme alanı, zeminin düzlüğü, tavan yüksekliği, enerji erişimi ve acil durum yolları birlikte değerlendirilir. Bu aşamada yapılan doğru plan, kurulum günü panik kararlarını azaltır.
        </p>

        <p>
          Kurumsal etkinliklerde bu keşif genellikle salon planı ve run-of-show ile birlikte okunur. Fuar standında komşu stand sınırları, açık alanda rüzgar ve yağış senaryosu, konser alanında ise sahne-truss-rigging ilişkisi önem kazanır. Ekran yalnız başına değil, etkinlik akışının bir parçası olarak konumlandırılmalıdır.
        </p>

        <h2 id="tasiyici-sistem">Taşıyıcı sistem: askı, ground support veya mobil kurulum</h2>
        <p>
          LED ekranın güvenli kalması için ilk teknik karar taşıyıcı sistemdir. Ekran tavandan askılanacaksa rigging noktaları ve yük hesapları netleşmelidir. Zeminden yükselen ground support kullanılacaksa truss kapasitesi, ayak açıklığı, bağlantı elemanları ve gerekirse ballast planı hazırlanmalıdır. Mobil şase veya sahne üstü kurulumlarda ise ekranın sahneyle olan ağırlık ve titreşim ilişkisi ayrıca değerlendirilmelidir.
        </p>

        <p>
          Kiralık LED ekran panelleri modüler çalışır; bu avantaj hızlı kurulum sağlar. Fakat modüler sistemlerin güvenli olması için panel bağlantıları, kilit mekanizmaları, kabin hizası ve köşe korumaları dikkatle takip edilmelidir. Panel panel ilerleyen kurulumlarda küçük bir hizalama hatası, büyük ekranda taşıyıcı gerilim veya görüntü problemi olarak geri dönebilir.
        </p>

        <ImgFigure
          src={OUTDOOR_IMG}
          alt="Açık hava sahnesinde LED ekran ve taşıyıcı sistem kurulumu"
          caption="Açık hava kurulumlarında ekranın outdoor olması kadar taşıyıcı sistemin rüzgar ve zemin koşullarına göre planlanması da önemlidir."
        />

        <h2 id="elektrik">Elektrik güvenliği, topraklama ve kablo güzergahı</h2>
        <p>
          LED ekran kurulumlarında elektrik güvenliği ayrı bir disiplin gibi ele alınmalıdır. Güç dağıtımı, kaçak akım koruması, topraklama, kablo kesiti, jeneratör veya şehir elektriği kullanımı, UPS ihtiyacı ve kontrol sisteminin enerji sürekliliği etkinlik öncesinde netleşmelidir. Ekranın çalışması kadar güvenli çalışması da önemlidir.
        </p>

        <p>
          Kablo güzergahı hem ekip hem izleyici güvenliği için kritik bir başlıktır. Kablo kanalları, geçiş rampaları, suya karşı koruma, backstage düzeni ve acil çıkışların açık kalması sahada kontrol edilmelidir. Kablonun “bir şekilde bağlanması” değil, etkinlik boyunca ezilmeden, takılma riski oluşturmadan ve gerektiğinde hızlı müdahaleye izin verecek şekilde taşınması gerekir.
        </p>

        <h2 id="hava-kosullari">Açık hava LED ekranlarında rüzgar, yağmur ve ısı yönetimi</h2>
        <p>
          Outdoor LED ekran kurulumlarında güvenlik daha geniş düşünülür. Ekranın IP koruma sınıfı, parlaklığı ve görüş açısı kadar, rüzgar yükü ve saha koşullarına karşı stabil kalması gerekir. Açık alanda yağmur, nem, doğrudan güneş, toz ve sıcaklık değişimi hem görüntü performansını hem de ekipman ömrünü etkileyebilir.
        </p>

        <p>
          Güneş altında uzun süre çalışan panellerde ısı yönetimi, hava sirkülasyonu ve kabin arkasındaki servis erişimi önemlidir. Kış şartlarında ise düşük sıcaklık, nem ve kablo esnekliği gibi pratik başlıklar devreye girer. Bu yüzden açık hava kurulumlarında yalnızca “outdoor panel” ifadesi yeterli değildir; panelin nasıl taşınacağı, nasıl sabitleneceği ve hangi hava senaryosunda nasıl yönetileceği de planın içinde olmalıdır.
        </p>

        <h2 id="personel-isg">Personel güvenliği: ISG, yüksekte çalışma ve mesleki yeterlilik</h2>
        <p>
          LED ekran güvenliği yalnızca ekipman güvenliği değildir. Kurulum ekibinin güvenliği, izleyici güvenliğinin de ön şartıdır. Truss üzerinde çalışma, yüksek platformda panel montajı, makaslı platform kullanımı, ağır panel taşıma, kablo çekimi ve enerji bağlantısı gibi işler net görev dağılımı ve uygun kişisel koruyucu donanım gerektirir.
        </p>

        <p>
          Yüksekte çalışma yapılan sahalarda emniyet kemeri, baret, uygun ayakkabı, eldiven, güvenli erişim ekipmanı ve düşmeye karşı koruma önlemleri temel ihtiyaçtır. Ancak ekipmanın varlığı tek başına yeterli değildir; personelin bu ekipmanı doğru kullanmayı bilmesi gerekir. Bu nedenle yüksekte çalışma eğitimi, temel ISG bilinci ve sahada yetkili ekip lideri bulunması kurulum kalitesinin doğal parçası olmalıdır.
        </p>

        <p>
          Mesleki yeterlilik konusu da burada devreye girer. LED ekran kurulumu mekanik montaj, elektriksel güvenlik ve sahne prodüksiyon bilgisini bir araya getirir. Herkesin her işe müdahale ettiği bir kurulum düzeni yerine, görevlerin ayrıldığı ve yetkin personelin ilgili işi yürüttüğü bir saha düzeni daha güvenlidir. Elektrik tarafı, rigging tarafı, panel montajı ve görüntü kontrolü aynı plan içinde ama kendi sorumlularıyla ilerlemelidir.
        </p>

        <FieldNote title="Hızlı kurulum, kontrolsüz kurulum demek değildir">
          <p>
            Etkinlik sektöründe zaman baskısı çok gerçektir. Ama LED ekran kurulumunda hız, ancak doğru ekip, doğru hazırlık ve doğru görev paylaşımı varsa değerlidir. Güvenlik adımlarını atlayarak kazanılan süre, etkinlik günü daha büyük risk üretir.
          </p>
        </FieldNote>

        <h2>Etkinlik türüne göre güvenlik öncelikleri</h2>
        <p>
          Her etkinliğin risk haritası farklıdır. Konserde büyük ekran, güçlü ses sistemi ve yoğun izleyici hareketi birlikte düşünülür. Fuarda ekran çoğu zaman stand sınırları içinde çalışır; burada kablo düzeni, yaya akışı ve komşu stand güvenliği öne çıkar. Kurumsal lansmanda görüntü kalitesi kadar prova, konuşmacı geçişleri ve kamera çekimi önemlidir. Belediye etkinliklerinde ise açık hava şartları, kalabalık kontrolü ve uzun çalışma süresi daha belirleyici olur.
        </p>

        <p>
          Bu yüzden güvenli kurulum için tek tip şablon yerine, etkinliğe göre uyarlanan bir teknik plan gerekir. Aynı LED ekran sistemi, farklı sahalarda farklı taşıyıcı sistem ve farklı personel planı isteyebilir.
        </p>

        <GalleryStrip />

        <SafetyChecklist />

        <h2>Teklif isterken güvenlik için hangi bilgileri paylaşmalısınız?</h2>
        <p>
          LED ekran teklifi isterken yalnızca ekran ölçüsü ve tarih göndermek çoğu zaman yeterli olmaz. Mekan adı, şehir, kurulum-söküm saatleri, iç veya dış mekan bilgisi, tahmini izleyici sayısı, ekranın sahneye göre konumu, enerji altyapısı, varsa salon krokisi ve etkinlik akışı paylaşılırsa teknik ekip daha gerçekçi ve güvenli bir plan hazırlayabilir.
        </p>

        <p>
          Bu bilgiler fiyatı da daha sağlıklı hale getirir. Çünkü güvenli kurulum; ekip sayısı, truss ihtiyacı, kablo metrajı, jeneratör veya UPS ihtiyacı, yüksekte çalışma ekipmanı ve kurulum süresi gibi kalemleri doğrudan etkiler.
        </p>

        <h2>Sonuç: iyi LED ekran, güvenli kurulumla anlam kazanır</h2>
        <p>
          LED ekranın çözünürlüğü, parlaklığı ve renk kalitesi etkinlik deneyimini güçlendirir. Fakat sahada gerçekten profesyonel görünen iş, sadece görüntüsü iyi olan değil, kurulumu güvenli, kablosu düzenli, taşıyıcısı doğru hesaplanmış, ekibi yetkin ve acil durum planı düşünülmüş iştir.
        </p>

        <p>
          Sahneva tarafında LED ekran kiralama işini bu yüzden sadece panel tedariği olarak değil; keşif, taşıyıcı sistem, elektrik, görüntü kontrolü, ISG ve etkinlik günü operasyonuyla birlikte ele alıyoruz. Çünkü iyi prodüksiyon, izleyici ekrana baktığında başlar gibi görünür; ama aslında çok daha önce, sahada doğru sorular sorulduğunda başlar.
        </p>

        <section id="sss">
          <h2>Sık sorulan sorular</h2>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="my-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <summary className="cursor-pointer font-black text-slate-950">{item.question}</summary>
              <p className="mt-3">{item.answer}</p>
            </details>
          ))}
        </section>

        <BlogRelatedLinks
          services={[
            { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
            { href: "/truss-kiralama", label: "Truss Kiralama" },
            { href: "/sahne-kiralama", label: "Sahne Kiralama" },
            { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
            ...CONTENT_CLUSTERS.ledScreen.guides.filter((item) => item.href !== BLOG_PATH),
          ]}
        />
      </BlogLayout>
    </>
  );
}
