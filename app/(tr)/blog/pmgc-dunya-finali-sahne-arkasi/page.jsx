import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "pmgc-dunya-finali-sahne-arkasi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/kurumsal-etkinlik-hero.webp";
const AWARD_IMG = "/img/blog/kurumsal-etkinlik-sahne-genel.webp";

const TITLE = "7 Gün, Sıfır Uyku, Milimetrik Tutku: PMGC Dünya Finali’nin Sahne Arkası";
const DESCRIPTION =
  "Ülker Arena PMGC 2023 Dünya Finali sahne arkası: 7 günlük milimetrik kurulum, rigging güvenliği, global koordinasyon ve ödül alan prodüksiyon detayları.";

const PUBLISH_DATE = "2026-01-05T10:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/(tr)/blog/pmgc-dunya-finali-sahne-arkasi/page.jsx", "2026-02-05T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const WA_URL = "https://wa.me/905453048671?text=" + encodeURIComponent("Merhaba, blog yazınızı okudum. Projem için teklif almak istiyorum.");

const VIDEO_ID = "173gBurWSRQ";
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const metadata = {
  title: "PMGC 2023 Dünya Finali'nin Sahne Arkası",
  description: DESCRIPTION,
  alternates: buildLanguageAlternates({
    canonical: BLOG_PATH,
    tr: BLOG_PATH,
    en: "/en/blog/pmgc-world-finals-behind-the-scenes",
  }),
  image: HERO_IMG,
  openGraph: {
    title: "PMGC 2023 Dünya Finali'nin Sahne Arkası | Sahneva",
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
        alt: "PMGC 2023 Dünya Finali sahne kurulumu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PMGC 2023 Dünya Finali'nin Sahne Arkası",
    description: DESCRIPTION,
    images: [`${SITE_URL}${HERO_IMG}`],
  },
  keywords: [
    "PMGC 2023",
    "PUBG Mobile Global Championship",
    "Ülker Arena",
    "sahne kurulum",
    "rigging",
    "LED ekran",
    "sahne mühendisliği",
    "Ace of M.I.C.E. Awards",
  ],
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
        name: "PMGC 2023 Grand Finals - Istanbul",
        description:
          "PMGC 2023 Dünya Finali’nin sahne arkası ve açılış atmosferini gösteren resmi video.",
        thumbnailUrl: [VIDEO_THUMB],
        uploadDate: PUBLISH_DATE,
        embedUrl: VIDEO_EMBED_URL,
        contentUrl: VIDEO_URL,
        mainEntityOfPage: BLOG_URL,
        publisher: {
          "@type": "Organization",
          name: "Sahneva Organizasyon",
          url: SITE_URL,
        },
      },
    ],
  };

  return <JsonLd data={schema} suppressHydrationWarning />;
}

function ImgFigure({ src, alt, caption }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative overflow-hidden rounded-2xl bg-transparent">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 960px"
          priority={false}
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
    { name: TITLE, url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: HERO_IMG, alt: TITLE }}
        pills={["Sahneva Blog", "Prodüksiyon & Teknik", "Etkinlik Mühendisliği"]}
        title={TITLE}
        description={DESCRIPTION}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="7 dk okuma"
        currentSlug={SLUG}
        currentCategory={metadata?.category}
        currentKeywords={metadata?.keywords}
        primaryLinks={[
          { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎭" },
          { href: "/podyum-kiralama", label: "Podyum Kiralama", icon: "🧱" },
          { href: "/led-ekran-kiralama", label: "LED Ekran", icon: "🟦" },
        ]}
        whatsappUrl={WA_URL}
      >

          <p>
            Bazı projeler vardır, sadece bir "iş" değil, bir mühendislik ve dayanıklılık testidir.
            2023 yılında Ülker Arena’nın devasa hacminde gerçekleşen PUBG Mobile Global
            Championship (PMGC), Sahneva için tam olarak böyle bir sınavdı.
          </p>

          <p>
            Bu dev organizasyonda, Dimi Ajans’nın vizyoner liderliği altında teknik çözüm ortağı
            olarak yer aldık. İşte o 7 günlük uykusuz maratonun, Google Translate ile örülen ve
            milimetrik hesaplarla biten başarı hikayesi.
          </p>

          <h2>1. 20 Metrede 1 Milimetrenin Hesabı</h2>
          <p>
            Kurumsal bir prodüksiyonda "hata payı" bizim için sadece bir teoridir; sahada ise bu
            pay "sıfır"dır. 20 metre uzunluğundaki dev sahneyi inşa ederken biliyorduk ki;
            başlangıçtaki 1 mm'lik bir sapma, hattın sonunda geometrik bir kabusa ve LED
            ekranların birbirine tam oturmamasına sebep olacaktı.
          </p>
          <p>
            7 gün boyunca her bir MDF plakayı, adeta bir saat ustası titizliğiyle birleştirdik. O
            sahne bittiğinde, üzerinden geçen tonlarca ağırlığa rağmen yüzey jilet gibi pürüzsüzdü.
            Çünkü biliyoruz: 4K yayınlanan bir dünya finalinde dijital gözler asla yalan söylemez.
          </p>

          <h2>2. Havada Asılı Kalan Sorumluluk: Rigging ve Dağcılar</h2>
          <p>
            Arena’nın tavanında, boşlukta çalışan endüstriyel dağcılarımızla kurduğumuz o hassas
            denge, işin en riskli kısmıydı. Tonlarca ağırlığındaki LED küpü ve ışık sistemlerini
            yukarı çekerken sadece mühendislik değil, müthiş bir senkronizasyon gerekiyordu.
            Sahneva ekibi olarak, her bir motorun ve truss bağlantısının emniyetini milimetrik bir
            disiplinle yönettik.
          </p>

          <h2>3. Ortak Dilimiz: Teknoloji ve Global Koordinasyon</h2>
          <p>
            Etkinliğin sahibi küresel bir dev olunca, sahadaki dilimiz de "evrensel" oldu. Çinli
            mühendis ekibiyle teknik detayları tartışırken, dil bariyerini Google Translate ile aştık.
            Telefon ekranlarından birbirimize çevirdiğimiz "Sinyal akışı" ve "Rigging noktaları"
            mesajları, aslında bir süre sonra yerini teknik bir anlayış birliğine bıraktı. Dilimiz
            farklı olsa da, hedefimiz tekti: Kusursuz bir açılış seremonisi.
          </p>

          <h2>4. Ve Beklenen Ödül: Yılın En İyi Teknik Uygulaması</h2>
          <p>
            Tüm bu uykusuz gecelerin ve verdiğimiz teknik emeğin karşılığı, sektörün en prestijli
            platformunda tescillendi. Dimi Ajans ile birlikte yürüttüğümüz bu dev prodüksiyon,
            11. Masters of Events Corporate Awards (Ace of M.I.C.E.) töreninde;
            <strong> "En İyi Ses, Işık, Görüntü Uygulaması"</strong> ödülüne layık görüldü.
          </p>

          <ImgFigure
            src={AWARD_IMG}
            alt="Ace of M.I.C.E. Awards ödül töreninde alınan kupa"
            caption="Ace of M.I.C.E. 2023 - En İyi Ses, Işık, Görüntü Uygulaması ödülü."
          />

          <p>
            Bu ödül; ajansımızın vizyonu ile Sahneva’nın sahadaki kusursuz teknik uygulamasının
            birleştiği noktada geldi. Bizim için bu kupa; uykusuz geçen o 7 günün, milimetrik
            marangozluk hesaplarımızın ve "imkansız" denilen kurulumları hayata geçiren
            ekibimizin zaferidir.
          </p>

          <h2>PMGC 2023 Grand Finals - Istanbul</h2>
          <p>
            Sahnenin ışık, LED ve mimari etkisini görmek için aşağıdaki videoyu izleyebilirsiniz.
          </p>
          <div className="not-prose my-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute left-0 top-0 h-full w-full"
                src={VIDEO_EMBED_URL}
                title="PMGC 2023 Grand Finals - Istanbul"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <h2>Neden Sahneva?</h2>
          <p>
            Biz sadece ekipman kiralamıyoruz; biz dev ajansların ve global markaların en karmaşık
            projelerdeki "güvenilir teknik kası" oluyoruz. PMGC 2023’te olduğu gibi, dil
            bariyerlerini yıkarak ve milimetrik hesaplardan ödün vermeyerek dünya standartlarında
            işler inşa etmeye devam ediyoruz.
          </p>

          <h3>Referanslar</h3>
          <ul>
            <li>Proje: PMGC 2023 Grand Finals - Istanbul</li>
            <li>Ödül: Ace of M.I.C.E. 2023 - En İyi Ses, Işık, Görüntü Uygulaması</li>
            <li>
              Resmi Kaynak:{" "}
              <a
                href="https://aceofmice.com/ace-of-m-i-c-e-awards/kazananlar/"
                target="_blank"
                rel="noreferrer"
              >
                Ace of M.I.C.E. Awards Kazananlar Listesi
              </a>
            </li>
          </ul>

          <BlogRelatedLinks
            services={[
              { href: "/sahne-kiralama", label: "Sahne Kiralama" },
              { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
            ]}
          />
      </BlogLayout>
    </>
  );
}
