// app/(tr)/blog/dome-cadir-360-mapping-lansman-2026/page.jsx
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.sahneva.com";
const SLUG = "dome-cadir-360-mapping-lansman-2026";
const CANONICAL = `${SITE_URL}/blog/${SLUG}`;

const HERO = {
  src: "/img/blog/dome-cadir-360-mapping-hero.webp",
  alt: "Kurumsal etkinliklerde pnömatik dome çadır ve 360° video mapping uygulaması",
};

const IMAGES = [
  {
    src: "/img/blog/dome-cadir-kurulum.webp",
    alt: "Pnömatik dome çadır kurulumu ve zemin entegrasyonu",
    caption: "Dome kurulumunda hız + güvenlik + modüler entegrasyon",
  },
  {
    src: "/img/blog/dome-cadir-ic-mekan.webp",
    alt: "Dome çadır iç mekan geniş hacim ve kolonsuz yapı",
    caption: "Kolonsuz hacim, sahne görüşü ve akustik yerleşimi kolaylaştırır",
  },
  {
    src: "/img/blog/dome-cadir-projeksiyon-mapping.webp",
    alt: "Kavisli yüzeylerde 360 derece projeksiyon video mapping kurulumu",
    caption: "Warp & edge blending ile kavisli yüzeylerde kusursuz görüntü",
  },
  {
    src: "/img/blog/dome-cadir-gece-ambiyans.webp",
    alt: "Gece ambiyansında dome çadır ve ışık efektleri",
    caption: "Gece atmosferi: ışık tasarımı + mapping senkronu",
  },
];

export const metadata = {
  title:
    "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping | Sahneva",
  description:
    "2026'da kurumsal lansmanların yeni standardı: pnömatik dome çadır yapıları ve 360° video mapping. Kurulum, akustik, RF güvenliği ve teknik prodüksiyon ipuçları.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    url: CANONICAL,
    title:
      "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping",
    description:
      "Pnömatik dome çadır + 360° video mapping ile fütüristik lansman deneyimi. Teknik entegrasyon, akustik ve güvenlik detayları.",
    images: [
      {
        url: `${SITE_URL}${HERO.src}`,
        width: 1200,
        height: 630,
        alt: HERO.alt,
      },
    ],
    siteName: "Sahneva Organizasyon",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping",
    description:
      "2026 trendleri: dome çadır yapıları ve 360° mapping mühendisliği.",
    images: [`${SITE_URL}${HERO.src}`],
  },
};

function Prose({ children }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
      {children}
    </div>
  );
}

export default function Page() {
  const published = "2026-01-20";
  const modified = "2026-01-20";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Kurumsal Etkinliklerde Dome Çadır Devrimi: Pnömatik Yapı ve 360° Mapping ile Geleceğin Lansmanları",
    description:
      "Pnömatik dome çadır yapıları ve 360° video mapping ile 2026 kurumsal lansman trendleri. Kurulum, akustik, RF güvenliği ve teknik entegrasyon.",
    inLanguage: "tr-TR",
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: CANONICAL,
    author: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sahneva Organizasyon",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/logo.png`,
      },
    },
    image: [`${SITE_URL}${HERO.src}`],
    video: {
      "@type": "VideoObject",
      name:
        "Dome Çadır ve 360° Mapping Uygulaması (Kurumsal Etkinlik Videosu)",
      description:
        "Pnömatik dome çadır ve 360° video mapping ile kurumsal etkinlik prodüksiyon örneği.",
      uploadDate: published,
      embedUrl: "https://www.youtube.com/embed/JNzGlNzNRuk",
      thumbnailUrl: [`${SITE_URL}${HERO.src}`],
    },
  };

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.22]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,.55), transparent 45%), radial-gradient(circle at 80% 30%, rgba(168,85,247,.55), transparent 45%), linear-gradient(to bottom, rgba(2,6,23,0.2), rgba(2,6,23,1))",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.22]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative container mx-auto px-4 pt-24 pb-10">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm text-white/70">
              Yayın Tarihi: <time dateTime={published}>20 Ocak 2026</time> · Okuma
              Süresi: 9 dk · Kategori: Teknik Prodüksiyon / Çadır Kiralama
            </p>

            <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
              Kurumsal Etkinliklerde Dome Çadır Devrimi
              <span className="block text-white/85 mt-2 text-xl md:text-2xl font-semibold">
                Pnömatik Yapı ve 360° Mapping ile Geleceğin Lansmanları
              </span>
            </h1>

            <p className="mt-5 text-white/85 text-base md:text-lg leading-relaxed">
              Kurumsal dünyada prestij, artık klasik salonların sınırlarını
              aşarak; gökyüzüne açılan, teknolojiyle nefes alan fütüristik
              etkinlik yapıları ile yeniden tanımlanıyor. 2026 itibarıyla
              lansmanların yeni gözdesi: <strong>Pnömatik Dome Çadır</strong> ve{" "}
              <strong>360° Video Mapping</strong> mühendisliği.
            </p>

            <div className="mt-7 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="relative aspect-[16/9]">
                <Image
                  src={HERO.src}
                  alt={HERO.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                  quality={85}
                />
              </div>
            </div>

            {/* CTA Row */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-bold bg-white text-black hover:opacity-90 transition"
              >
                Teknik Projelendirme İstiyorum
              </Link>
              <Link
                href="/cadir-kiralama"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-bold bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                Çadır Kiralama Sayfasına Git
              </Link>
            </div>

            <p className="mt-4 text-sm text-white/70">
              Ayrıca:{" "}
              <Link href="/cadir-kiralama" className="underline underline-offset-4">
                Diğer çadır kiralama seçeneklerimizi görün
              </Link>{" "}
              (pagoda, şeffaf çadır, tünel, depo/şantiye çözümleri ve daha fazlası).
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="container mx-auto px-4 pb-16">
        <article className="mx-auto max-w-4xl">
          <Prose>
            <h2>1. Dome Çadırın Kurumsal Gücü: Neden Kiralamalısınız?</h2>
            <p>
              Geodezik ve pnömatik dome çadırlar, markaya “yenilikçi – güçlü –
              vizyoner” algısı kazandırır. Asıl fark, sadece formda değil;
              içeride oluşan <strong>immersif</strong> atmosfer ve kusursuz
              teknik entegrasyondadır.
            </p>

            <h3>İmmersif Atmosfer</h3>
            <ul>
              <li>Gündüz doğal ışık ve ferah hacim</li>
              <li>Gece yıldızlarla bütünleşen dramatik siluet</li>
              <li>
                İç yüzeyde markaya özel <strong>360° içerik</strong> ile kesintisiz
                görsel deneyim
              </li>
            </ul>

            <h3>Mühendislik ve Güvenlik</h3>
            <p>
              Geodezik form rüzgâr yükünü tüm yüzeye dağıtır; kolonsuz iç hacim
              sahne görüş açılarını, LED ekran yerleşimini ve ses dağılımını
              optimize eder.
            </p>

            <h3>Hızlı ve Modüler Operasyon</h3>
            <p>
              Dome kurulumu + zemin entegrasyonu + teknik sistem yerleşimi doğru
              planlandığında saatler içinde yayına hazır hale gelir. Bu, lansman
              takvimlerinde kritik avantajdır.
            </p>

            <h2>2. 360° Mapping Mühendisliği: Kavisli Yüzeyde Kusursuz Görüntü</h2>
            <p>
              Dome’un iç yüzeyi, doğru projeksiyon gücü ve doğru yazılım akışıyla
              dev bir dijital sahneye dönüşür. Buradaki kilit kavramlar:
              <strong> lümen planlama</strong>, <strong>warp</strong> ve{" "}
              <strong>edge blending</strong>.
            </p>

            <h3>Projektör Gücü ve Homojenlik</h3>
            <p>
              Çap/alan hesaplarına göre 20.000 ANSI lümen sınıfında çoklu
              projeksiyon kurulur; kör nokta kalmaması için kapsama haritası
              çıkarılır.
            </p>

            <h3>Warp & Edge Blending</h3>
            <p>
              MadMapper / Watchout benzeri çözümlerle kavisli yüzeyde bozulmalar
              milimetrik düzeltilir; projeksiyonlar arasında “ek yeri” görünmez.
            </p>

            <h2>3. Teknik Zorluklar ve Sahneva Çözümleri</h2>
            <h3>Akustik Yankı Kontrolü</h3>
            <p>
              Yuvarlak geometrinin oluşturduğu odaklanmış yankı; doğru line array
              yerleşimi, delay planı ve gerekirse akustik yüzeylerle kontrol altına alınır.
            </p>

            <h3>RF ve Spektrum Güvenliği</h3>
            <p>
              Açık alanda 5G ve RF kirliliği artar. Bu yüzden gerçek zamanlı
              spektrum analiziyle frekans planı canlı şekilde izlenir.
            </p>

            <h2>Video</h2>
            <p>
              Aşağıdaki videoda dome çadır + 360° mapping uygulamasının sahadaki
              etkisini görebilirsin:
            </p>

            <div className="not-prose mt-4 rounded-3xl overflow-hidden border border-white/10 bg-black">
              <div className="relative aspect-video">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/JNzGlNzNRuk"
                  title="Dome Çadır ve 360° Mapping"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <h2>Görsel Örnekler</h2>
          </Prose>

          {/* Gallery */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {IMAGES.map((img) => (
              <figure
                key={img.src}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 520px"
                    quality={85}
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-white/75">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Outro + cross-link */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-extrabold">Sonuç: Geleceğin Lansmanını Bugün Yaşayın</h3>
            <p className="mt-3 text-white/85 leading-relaxed">
              Dome çadır ve 360° mapping, etkinliği yalnızca “mekân” olmaktan çıkarıp
              markanın hikâyesini içine alan bir deneyim sahnesine dönüştürür.
              Eğer benzer bir kurulum planlıyorsan, çadır tipine göre doğru çözümü
              seçmek kritik.
            </p>

            <p className="mt-4 text-white/85">
              <Link href="/cadir-kiralama" className="underline underline-offset-4 font-semibold">
                Diğer çadır kiralama seçeneklerimizi görün
              </Link>{" "}
              ve etkinliğine en uygun yapıyı birlikte belirleyelim.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/ses-isik-sistemleri"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-bold bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                Ses & Işık Sistemleri Kataloğu
              </Link>
              <Link
                href="/teklif-al"
                className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-bold bg-white text-black hover:opacity-90 transition"
              >
                Hemen Teklif Al
              </Link>
            </div>
          </div>

          {/* JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </article>
      </section>
    </main>
  );
}
