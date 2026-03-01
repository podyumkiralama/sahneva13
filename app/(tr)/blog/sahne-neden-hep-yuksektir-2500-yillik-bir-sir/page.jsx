import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import BlogRelatedLinks from "@/components/blog/BlogRelatedLinks";
import BlogLayout from "@/components/blog/BlogLayout";
import { getLastModifiedDateTimeForFile } from "@/lib/seoLastModified";

/* ================== CONFIG ================== */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

const BLOG_PATH = "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir";
const BLOG_URL = `${SITE_URL}${BLOG_PATH}`;

const PODIUM_SERVICE_PATH = "/podyum-kiralama";
const STAGE_SERVICE_PATH = "/sahne-kiralama";
const LED_SERVICE_PATH = "/led-ekran-kiralama";
const SOUND_LIGHT_PATH = "/ses-isik-sistemleri";

const FEATURED_IMAGE = "/img/galeri/led-ekran-kiralama-3.webp";
const HERO_IMAGE = FEATURED_IMAGE;
const OG_IMAGE = FEATURED_IMAGE;

const PUBLISH_DATE = "2025-12-29T00:00:00+03:00";
const MODIFIED_DATE = getLastModifiedDateTimeForFile("app/(tr)/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir/page.jsx", "2026-02-05T00:00:00+03:00");
const AUTHOR_NAME = "Sahneva İçerik Ekibi";

const WHATSAPP_NUMBER = "905453048671";
const WA_MSG = encodeURIComponent(
  "Merhaba, etkinliğim için sahne/podyum planlamak istiyorum. Yer ve tarih bilgisini paylaşabilirim."
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`;

/* ================== IMAGES ================== */
const IMAGES = {
  hero: { src: "/img/galeri/led-ekran-kiralama-3.webp", alt: "Sahneva - Modern sahne ve LED ekran kurulumu" },
  blend: { src: "/img/blog/antik-modern-gecis.webp", alt: "Antik tiyatro sahnesinden modern konser sahnesine geçiş" },

  // iç görseller (mevcut galeriden)
  modernKonser: { src: "/img/blog/gelismis-sahne-sistemleri.webp", alt: "Sahneva - Gelişmiş Konser sahnesi" },
  modernSahne: { src: "/img/galeri/led-ekran-kiralama-3.webp", alt: "Sahneva - Modern sahne kurulumu" },
};

/* ================== META ================== */
export const metadata = {
  title: "Sahne Neden Hep Yüksektir? 2500 Yıllık Bir Sır",
  description:
    "Antik çağın konuşma platformlarından modern konser sahnelerine… Sahnenin yükseltilmiş bir alan olarak nasıl doğduğunu, yüzyıllar boyunca nasıl evrildiğini ve bugünün sahne teknolojilerine nasıl dönüştüğünü anlatan tarih yazısı.",

  alternates: { canonical: BLOG_URL },

  // ✅ BLOG KARTI SADECE BUNU OKUYOR
  image: FEATURED_IMAGE,

  openGraph: {
    title: "Sahne Neden Hep Yüksektir? 2500 Yıllık Bir Sır",
    description:
      "Tarihten bugüne sahne: antik tiyatrolar, Roma forumları, Orta Çağ meydanları, opera sahneleri ve modern truss sistemleri.",
    url: BLOG_URL,
    type: "article",
    locale: "tr_TR",
    siteName: "Sahneva Organizasyon",

    // ✅ DOĞRU OG KULLANIMI
    images: [
      {
        url: `${SITE_URL}${FEATURED_IMAGE}`,
        width: 1200,
        height: 630,
        alt: "Sahneva blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sahne Neden Hep Yüksektir? 2500 Yıllık Bir Sır",
    description:
      "Antik çağdan bugüne sahnenin evrimi: sözden gösteriye, ahşaptan truss’a…",
    images: [`${SITE_URL}${FEATURED_IMAGE}`],
  },

  keywords: [
    "sahnenin tarihi",
    "sahne tarihçesi",
    "antik tiyatro sahnesi",
    "roma forum rostra",
    "opera sahnesi",
    "modern konser sahnesi",
    "truss sahne",
    "podyum",
    "sahne kiralama",
    "podyum kiralama",
    "podyum kurulumu",
  ],
};

/* ================== FAQ (SEO) ================== */
const FAQ_ITEMS = [
  {
    q: "Sahne fikri ilk nerede ortaya çıktı?",
    a: "Sahnenin kökeni, kalabalığa seslenmek ve görünür olmak için kullanılan yükseltilmiş konuşma platformlarına dayanır. Zamanla tiyatro ve gösteri kültürüyle birlikte sahne, performans için tasarlanan bir mekâna dönüştü.",
  },
  {
    q: "Antik tiyatrolar modern sahneleri nasıl etkiledi?",
    a: "Antik tiyatrolar, sahne ile izleyici arasındaki mesafeyi, görüş hattını ve akustik düşünceyi şekillendirdi. Bugün konser ve gösteri sahnelerinde hâlâ bu mantığın modern karşılıkları kullanılır.",
  },
  {
    q: "Modern sahneler ne zaman “taşınabilir” hâle geldi?",
    a: "Özellikle 20. yüzyılda turne kültürü, sahnelerin modüler ve taşınabilir olmasını hızlandırdı. Truss sistemleri ve standartlaştırılmış modüller bu dönüşümün temel taşlarıdır.",
  },
  {
    q: "Bugünün sahnesini geçmişten ayıran en büyük fark nedir?",
    a: "Modern sahneler yalnızca bir platform değildir; ışık, ses, LED ekran ve güvenlik kurgusuyla bir mühendislik sistemidir. Buna rağmen sahnenin temel amacı hâlâ aynıdır: kalabalıkla iletişimi kurmak.",
  },
];

/* ================== JSON-LD ================== */
function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${BLOG_URL}#blogposting`,
        headline: metadata.title,
        description: metadata.description,
        image: `${SITE_URL}${FEATURED_IMAGE}`,
        datePublished: PUBLISH_DATE,
        dateModified: MODIFIED_DATE,
        inLanguage: "tr-TR",
        author: { "@type": "Person", name: AUTHOR_NAME },
        publisher: { "@type": "Organization", name: "Sahneva Organizasyon", url: SITE_URL },
        mainEntityOfPage: { "@type": "WebPage", "@id": BLOG_URL },
        relatedLink: [
          `${SITE_URL}${STAGE_SERVICE_PATH}`,
          `${SITE_URL}${PODIUM_SERVICE_PATH}`,
          `${SITE_URL}${LED_SERVICE_PATH}`,
          `${SITE_URL}${SOUND_LIGHT_PATH}`,
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${BLOG_URL}#faq`,
        mainEntity: FAQ_ITEMS.map((x) => ({
          "@type": "Question",
          name: x.q,
          acceptedAnswer: { "@type": "Answer", text: x.a },
        })),
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

/* ================== UI ================== */
function WatermarkedFigure({ src, alt, caption }) {
  return (
    <figure className="my-10 not-prose">
      <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 900px"
          className="w-full h-auto"
          loading="lazy"
        />
        <div className="absolute bottom-3 right-3 bg-black/55 text-white text-xs font-extrabold px-3 py-1.5 rounded-full backdrop-blur">
          Sahneva Uygulaması
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-gray-600 text-center font-medium">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

const InfoBox = ({ icon, title, children }) => (
  <div className="not-prose border rounded-2xl p-6 bg-slate-900 border-slate-700 text-slate-100 my-10">
    <div className="flex items-start gap-3">
      <span className="text-2xl leading-none" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="m-0 font-black text-base">{title}</p>
        <div className="mt-2 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);

/* ================== PAGE ================== */
export default function Page() {
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: "Sahne Neden Hep Yüksektir? 2500 Yıllık Bir Sır", url: BLOG_URL },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={SITE_URL} />
      <ArticleSchema />
      
            {/* HERO */}
      <BlogLayout
        siteUrl={SITE_URL}
        breadcrumbItems={breadcrumbItems}
        heroImage={{ src: (typeof IMAGES !== "undefined" && IMAGES?.hero?.src ? IMAGES.hero.src : (typeof FEATURED_IMAGE !== "undefined" ? FEATURED_IMAGE : (typeof HERO_IMAGE !== "undefined" ? HERO_IMAGE : (typeof OG_IMAGE !== "undefined" ? OG_IMAGE : "")))), alt: (typeof IMAGES !== "undefined" && IMAGES?.hero?.alt ? IMAGES.hero.alt : (metadata?.title ? String(metadata.title).replace(/\\s*\\|\\s*Sahneva.*$/, "") : "Sahneva Blog")) }}
        pills={["Sahneva Blog", "Prodüksiyon & Teknik", "Etkinlik Mühendisliği"]}
        title={(metadata?.title ? String(metadata.title).replace(/\s*\|\s*Sahneva.*$/, "") : "")}
        description={metadata?.description}
        publishDate={PUBLISH_DATE}
        author={AUTHOR_NAME}
        readTime="2\u20134 dk okuma"
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

            <InfoBox icon="🧭" title="Bu Yazının Rotası">
              Bu yazı bir “teknik eğitim rehber” değil; sahnenin kültürel ve tarihsel yolculuğu. Antik çağda sözün yükselmesiyle
              başlayan bu hikâye, bugün truss sistemleri ve LED ekranlarla devam ediyor.
            </InfoBox>

            <WatermarkedFigure
              src={IMAGES.blend.src}
              alt={IMAGES.blend.alt}
              caption="Antik sahne anlayışından modern sahne teknolojisine tek karede geçiş."
            />

            <h2>1) Başlangıç: Kalabalığa Seslenmek</h2>
            <p>
              Sahnenin en eski biçimi, bir “gösteri alanı” değil; bir <strong>konuşma alanıydı</strong>. İnsanlar
              kalabalık karşısında iki şey ister: görünür olmak ve duyulmak. Yerden yükselen bir platform, bu iki
              ihtiyaca aynı anda cevap verir.
            </p>
            <p>
              Bu yüzden sahne; ilk günden beri “yükseltilmiş” bir alan olarak düşünülür. Yükseklik, yalnızca fiziksel
              değil, aynı zamanda semboliktir: konuşanın sözünü “merkeze” taşır.
            </p>

            <h2>2) Antik Yunan: Tiyatro ve Akustiğin Doğuşu</h2>
            <p>
              Antik Yunan tiyatroları sahne tarihinin dönüm noktasıdır. Bu dönem, sahnenin sadece konuşma değil,
              <strong>performans</strong> için tasarlandığı ilk büyük dönemlerden biridir.
            </p>
            <p>
              Yarı dairesel oturma düzeni, eğimli arazi kullanımı ve seyircinin sahneyi rahat görmesi… Bugün bile konser
              alanlarında “görüş hattı” konuşuluyorsa, bunun kökü antik tiyatro mantığına uzanır.
            </p>

            <h2>3) Roma: Forum, Gösteri ve Güç</h2>
            <p>
              Roma ile birlikte sahne fikri iki kola ayrılır: <strong>kamusal konuşma platformları</strong> ve{" "}
              <strong>gösteri mekânları</strong>. Forumlarda yükseltilmiş konuşma alanları, sadece pratik değil; aynı
              zamanda politik bir imgedir.
            </p>
            <p>
              Roma arenası ve amfitiyatroları ise sahnenin “kalabalık yönetimi” tarafını güçlendirir: giriş-çıkış
              düzenleri, alan kontrolü ve kitlenin yönlendirilmesi.
            </p>

            <h2>4) Orta Çağ: Meydanlar ve Gezici Gösteriler</h2>
            <p>
              Orta Çağ’da sahne daha çok şehir meydanlarında kurulan geçici yapılara dönüşür. Tüccar kervanları, gezici
              tiyatrolar, dini temalı gösteriler… Sahne, sabit bir yapı olmaktan çıkar; <strong>kurulur ve sökülür</strong>.
            </p>
            <p>
              Bugünün “kurulum” kültürü (modüler parçalar, taşınabilir sistemler) aslında bu dönemin mantığıyla örtüşür:
              sahne, etkinlik neredeyse oraya taşınır.
            </p>

            <h2>5) Rönesans: Sahne “Mekân” Oluyor</h2>
            <p>
              Rönesans ile birlikte sahne, mimari bir kimlik kazanır. Perspektif anlayışı, dekor tasarımı ve sahnenin
              seyirciyle ilişkisi daha bilinçli kurgulanır. Sahne artık sadece bir platform değil; bir “dünya”dır.
            </p>

            <h2>6) Opera Evleri: Sahne Mühendisliği Başlıyor</h2>
            <p>
              Opera evleri sahneyi teknik bir yapıya dönüştürür: sahne altı mekanizmaları, dekor değişim sistemleri,
              perde kurgusu… Sahne; perde arkasında çalışan bir “makine” gibi düşünülmeye başlar.
            </p>
            <p>
              Bu dönem, bugün kullandığımız pek çok fikrin atasıdır: ışığın yönlendirilmesi, görsel kompozisyon,
              sahne-arka plan ayrımı ve seyirciye “odak” yaratma.
            </p>

            <h2>7) Elektrik ve Işık: Sahnenin Dili Değişiyor</h2>
            <p>
              Elektrik ışığının yaygınlaşmasıyla sahne, yeni bir dil kazanır. Işık artık sadece “aydınlatma” değil,
              anlatının bir parçasıdır. Sahne, izleyicinin gözünü yönlendiren bir görsel kompozisyona dönüşür.
            </p>

            <h2>8) 20. Yüzyıl: Turne Kültürü ve Taşınabilir Sahne</h2>
            <p>
              20. yüzyıl, sahne tarihinde başka bir kırılma noktasıdır: turneler. Bir sanatçının şehir şehir gezmesi,
              sahnenin de onunla birlikte taşınması demektir. Bu ihtiyaç, modüler sistemleri ve standart parçaları
              doğurur.
            </p>

            <p>
              Bugün “truss” dediğimiz taşıyıcı sistemler, sahnenin yükünü (ışık, ses, görsel öğeler) güvenli biçimde
              taşımak için gelişen bu endüstrinin ürünüdür.
            </p>

            <h2>9) Bugün: Sahne Bir Sistemdir</h2>
            <p>
              Modern sahne artık tek bir platform değil; bir <strong>sistem</strong>. Üstünde ve etrafında ses, ışık,{" "}
              <Link href={LED_SERVICE_PATH}>LED ekran</Link> ve sahne dili vardır.
            </p>
            <p>
              Yani bugün sahne; antik çağdaki basit “yükseklik” fikrini taşırken, aynı zamanda modern dünyanın
              teknolojisini de taşır. Söz hâlâ merkezde olabilir, ama artık onu taşıyan şey teknolojidir.
            </p>

            <WatermarkedFigure
              src={IMAGES.modernKonser.src}
              alt={IMAGES.modernKonser.alt}
              caption="Modern konser sahnesi: ışık, ses ve görselle birlikte bir sistem."
            />

            <h2>10) Sahne Neden Hâlâ Yüksek?</h2>
            <p>
              Çünkü sahne; kalabalığın içinde “odak” yaratmanın en eski yoludur. Antik tiyatrolarda bu odak taşla
              kuruluyordu. Bugün aynı odak, çelik taşıyıcılar ve teknolojik sistemlerle kuruluyor. Ama fikir aynı:
              <strong>görünür olmak, duyulmak, anlatmak</strong>.
            </p>

            <InfoBox icon="🔗" title="Tarihten Bugüne Köprü (Sahneva)">
              Sahne teknolojisi değişir, ama iyi sahnenin amacı değişmez: izleyiciyle güçlü bağ kurmak. Etkinliğinizde
              sahne, podyum ve kurulum çözümü için{" "}
              <Link href={STAGE_SERVICE_PATH}>sahne kiralama</Link> ve{" "}
              <Link href={PODIUM_SERVICE_PATH}>podyum kiralama</Link> sayfalarımıza göz atabilirsiniz.
            </InfoBox>

            <h2 id="faq">Sıkça Sorulan Sorular</h2>
            <section className="not-prose space-y-3 mt-6">
              {FAQ_ITEMS.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden open:ring-2 open:ring-blue-100 open:border-blue-300 transition-all duration-200"
                >
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer font-semibold text-gray-800 select-none bg-gray-50/50 hover:bg-gray-50 transition-colors">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180 text-gray-600">
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                </details>
              ))}
            </section>

            <h2>Senin İçin Sahnenin Anlamı Ne?</h2>
            <p>
              Sahne, senin için daha çok <strong>görsellik</strong> mi, <strong>hikâye</strong> mi yoksa{" "}
              <strong>iletişim</strong> mi? Yorumlarda yaz—bu yazının devamında sahnenin “modern kültürdeki” etkisini de
              konuşabiliriz.
            </p>

            <div className="not-prose mt-12 rounded-3xl p-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white border border-white/10">
              <p className="m-0 text-lg font-semibold">
                Etkinliğiniz için sahne, podyum,{" "}
                <Link className="underline text-white" href={SOUND_LIGHT_PATH}>
                  ses & ışık
                </Link>{" "}
                ve{" "}
                <Link className="underline text-white" href={LED_SERVICE_PATH}>
                  LED ekran
                </Link>{" "}
                planlamak ister misiniz?
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  href={STAGE_SERVICE_PATH}
                  className="inline-flex items-center justify-center rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 px-6 transition-transform hover:-translate-y-0.5"
                >
                  Sahne Kiralama
                </Link>
                <Link
                  href={PODIUM_SERVICE_PATH}
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 border border-white/20 transition-transform hover:-translate-y-0.5"
                >
                  Podyum Kiralama
                </Link>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 transition-transform hover:-translate-y-0.5"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <BlogRelatedLinks
              services={[
                { href: STAGE_SERVICE_PATH, label: "Sahne Kiralama" },
                { href: PODIUM_SERVICE_PATH, label: "Podyum Kiralama" },
              ]}
            />
      </BlogLayout>
    </>
  );}
