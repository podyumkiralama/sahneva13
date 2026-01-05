import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const SLUG = "pmgc-dunya-finali-sahne-arkasi";
const BLOG_PATH = `/blog/${SLUG}`;
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const HERO_IMG = "/img/blog/kurumsal-etkinlik-hero.webp";
const AWARD_IMG = "/img/blog/kurumsal-etkinlik-sahne-genel.webp";

const TITLE = "7 Gün, Sıfır Uyku, Milimetrik Tutku: PMGC Dünya Finali’nin Sahne Arkası";
const DESCRIPTION =
  "Ülker Arena’da gerçekleşen PMGC 2023 Dünya Finali’nde Sahneva’nın 7 günlük teknik maratonu: milimetrik sahne kurulumları, rigging güvenliği, global koordinasyon ve ödülle taçlanan uygulama.";

const PUBLISH_DATE = "2026-01-05T10:00:00+03:00";
const MODIFIED_DATE = "2026-01-05T10:00:00+03:00";
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const VIDEO_ID = "173gBurWSRQ";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}`;
const VIDEO_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export const metadata = {
  title: `${TITLE} | Sahneva Blog`,
  description: DESCRIPTION,
  alternates: { canonical: BLOG_URL },
  image: HERO_IMG,
  openGraph: {
    title: `${TITLE} | Sahneva Organizasyon`,
    description: DESCRIPTION,
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",
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
    title: TITLE,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\u003c") }}
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
        PMGC Dünya Finali
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
          priority={false}
        />
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-gray-600">{caption}</figcaption> : null}
    </figure>
  );
}

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      <ArticleSchema />
      <BreadcrumbJsonLd
        baseUrl={SITE_URL}
        items={[
          { name: "Ana Sayfa", url: SITE_URL },
          { name: "Blog", url: `${SITE_URL}/blog` },
          { name: TITLE, url: BLOG_URL },
        ]}
      />

      <section className="mx-auto w-full max-w-5xl px-4 py-12">
        <Breadcrumbs />

        <header className="mb-8">
          <p className="text-sm font-semibold text-blue-600">Case Study · PMGC 2023</p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{TITLE}</h1>
          <p className="mt-4 text-lg text-gray-700">{DESCRIPTION}</p>
        </header>

        <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
          <Image
            src={HERO_IMG}
            alt="PMGC 2023 Dünya Finali sahne kurulumu"
            width={2048}
            height={1003}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />
        </div>

        <article className="prose prose-lg max-w-none mt-10">
          <p>
            Bazı projeler vardır, sadece bir "iş" değil, bir mühendislik ve dayanıklılık testidir.
            2023 yılında Ülker Arena’nın devasa hacminde gerçekleşen PUBG Mobile Global
            Championship (PMGC), Sahneva için tam olarak böyle bir sınavdı.
          </p>

          <p>
            Bu dev organizasyonda, [Ajans Adı]’nın vizyoner liderliği altında teknik çözüm ortağı
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
            platformunda tescillendi. [Ajans Adı] ile birlikte yürüttüğümüz bu dev prodüksiyon,
            11. Masters of Events Corporate Awards (Ace of M.I.C.E.) töreninde;
            <strong> "En İyi Ses, Işık, Görüntü Uygulaması"</strong> ödülüne layık görüldü.
          </p>

          <ImgFigure
            src={AWARD_IMG}
            alt="Ace of M.I.C.E. Awards ödül töreninde alınan kupa"
            caption="Ace of M.I.C.E. 2023 - En İyi Ses, Işık, Görüntü Uygulaması ödülü."
          />

          <p>
            Bu ödül; Dimi ajansımızın vizyonu ile Sahneva’nın sahadaki kusursuz teknik uygulamasının
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
            <li>Resmi Kaynak: Ace of M.I.C.E. Awards Kazananlar Listesi</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
