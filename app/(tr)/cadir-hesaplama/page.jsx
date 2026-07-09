import Link from "next/link";
import TentCalculatorClient from "./TentCalculatorClient";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const ORIGIN = SITE_URL;
const PAGE_URL = `${ORIGIN}/cadir-hesaplama`;

export const revalidate = 86400;

export const metadata = {
  title: "Çadır Hesaplama Aracı | Kaç m² Çadır Gerekir?",
  description:
    "Kişi sayısı, oturma düzeni, sahne, LED ekran ve catering alanına göre etkinliğiniz için önerilen çadır ölçüsünü ve yaklaşık m² ihtiyacını hesaplayın.",
  alternates: buildLanguageAlternates({ tr: PAGE_URL, canonical: PAGE_URL }),
  openGraph: {
    title: "Çadır Hesaplama Aracı | Sahneva",
    description:
      "Düğün, fuar, festival, iftar ve kurumsal etkinlikler için kaç m² çadır gerektiğini hesaplayın.",
    url: `${ORIGIN}/cadir-hesaplama`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${ORIGIN}/img/cadir/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Çadır hesaplama aracı - kaç kişiye kaç m² çadır gerekir",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const faqItems = [
  {
    question: "300 kişilik etkinlik için kaç m² çadır gerekir?",
    answer:
      "300 kişilik kokteyl düzeninde yaklaşık 300 m², yemekli masa düzeninde ise yaklaşık 480 m² alan gerekir. Sahne, LED ekran, catering ve karşılama alanı eklendiğinde önerilen çadır ölçüsü genellikle 20x30 m veya 20x40 m seviyesine çıkar.",
  },
  {
    question: "500 kişilik düğün çadırı kaç m² olmalı?",
    answer:
      "500 kişilik düğün veya yemekli davetlerde masa aralıkları, servis yolları, dans alanı ve sahne ihtiyacı nedeniyle çoğu projede 900 m² ve üzeri alan planlanır. Net ölçü masa planı ve zemin durumuna göre belirlenmelidir.",
  },
  {
    question: "LED ekran ve sahne alanı çadır hesabını değiştirir mi?",
    answer:
      "Evet. Sahne, LED ekran, reji, ses sistemi ve teknik ekip alanı çadır metrajını doğrudan etkiler. Küçük etkinliklerde 40-60 m² ek alan yeterli olabilirken, konser ve festival projelerinde backstage ve teknik alan çok daha geniş planlanır.",
  },
  {
    question: "Pagoda çadır mı büyük açıklıklı çadır mı seçilmeli?",
    answer:
      "3x3, 4x4 ve 5x5 pagoda çadırlar karşılama, fuaye, satış noktası ve VIP alan gibi modüler ihtiyaçlarda kullanılır. Kalabalık davet, fuar, festival ve kurumsal etkinliklerde ise 10 m, 20 m, 30 m veya 40 m açıklıklı büyük çadırlar daha doğru çözümdür.",
  },
  {
    question: "Çadır hesaplama sonucu kesin ölçü müdür?",
    answer:
      "Hayır. Hesaplama aracı yaklaşık planlama içindir. Net ölçü; zemin tipi, rüzgâr durumu, masa-sandalye yerleşimi, giriş-çıkış aksı, sahne, LED ekran, catering ve güvenlik koridorları değerlendirildikten sonra kesinleşir.",
  },
];

const tableRows = [
  { people: "100 kişi", cocktail: "100 m²", dining: "160 m²", wedding: "180 m²" },
  { people: "200 kişi", cocktail: "200 m²", dining: "320 m²", wedding: "360 m²" },
  { people: "300 kişi", cocktail: "300 m²", dining: "480 m²", wedding: "540 m²" },
  { people: "500 kişi", cocktail: "500 m²", dining: "800 m²", wedding: "900 m²" },
  { people: "1000 kişi", cocktail: "1000 m²", dining: "1600 m²", wedding: "1800 m²" },
];

const relatedLinks = [
  { href: "/cadir-kiralama", title: "Çadır Kiralama", text: "Pagoda, şeffaf ve büyük açıklıklı çadır sistemleri" },
  { href: "/sahne-kiralama", title: "Sahne Kiralama", text: "Etkinlik, konser, tören ve festival sahne çözümleri" },
  { href: "/led-ekran-kiralama", title: "LED Ekran Kiralama", text: "İç ve dış mekan LED ekran kurulumları" },
  { href: "/kurumsal-organizasyon", title: "Kurumsal Organizasyon", text: "Anahtar teslim etkinlik planlama ve saha yönetimi" },
];

const blogLinks = [
  {
    href: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026",
    title: "Çadır kiralama seçenekleri",
    text: "Pagoda, şeffaf, dome ve büyük açıklıklı çadırları etkinlik tipine göre karşılaştırın.",
  },
  {
    href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
    title: "Etkinlik teknik keşif rehberi",
    text: "Zemin, giriş saati, enerji, sahne ve kurulum planını teklif öncesi netleştirin.",
  },
  {
    href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
    title: "Kurumsal etkinlik planlama rehberi",
    text: "Lansman, fuar, gala ve açık hava etkinliklerinde teknik kapsamı doğru planlayın.",
  },
];

function JsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Çadır Hesaplama Aracı",
    url: `${ORIGIN}/cadir-hesaplama`,
    inLanguage: "tr-TR",
    description:
      "Kişi sayısı ve etkinlik düzenine göre yaklaşık çadır m² ihtiyacını hesaplayan Sahneva aracı.",
    publisher: {
      "@type": "Organization",
      name: "Sahneva",
      url: ORIGIN,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  );
}

export default function TentCalculatorPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <JsonLd />
      <TentCalculatorClient />

      <section className="relative border-t border-white/10 bg-[#0B1120] px-4 py-20">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-200">Planlama Rehberi</p>
              <h2 className="text-4xl font-black tracking-[-1px] md:text-5xl">
                Çadır ölçüsü sadece kişi sayısıyla belirlenmez
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Etkinlik çadırı planlanırken kişi sayısı başlangıç noktasıdır; ancak doğru ölçü için oturma düzeni, masa-sandalye yerleşimi, sahne, LED ekran, catering, backstage, giriş-çıkış aksı ve güvenlik koridorları birlikte değerlendirilmelidir. Bu nedenle aynı 300 kişilik etkinlik, kokteyl düzende daha kompakt çözülebilirken yemekli davet veya düğün düzeninde çok daha geniş bir çadır alanı isteyebilir.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Sahneva, çadır kiralama projelerinde yalnızca metrekare hesabı yapmaz; zeminin çim, beton, asfalt veya hassas yüzey olmasına göre sabitleme yöntemini, rüzgâr durumunu, su tahliye planını, teknik ekipman yerleşimini ve misafir akışını da projeye dahil eder. Bu yaklaşım özellikle belediye etkinlikleri, fuarlar, festivaller, kurumsal lansmanlar ve büyük ölçekli davetlerde güvenli kurulum için önemlidir.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Net proje planında{" "}
                <Link href="/cadir-kiralama" className="font-bold text-blue-100 underline underline-offset-4">
                  çadır kiralama
                </Link>{" "}
                kapsamı;{" "}
                <Link href="/sahne-kiralama" className="font-bold text-blue-100 underline underline-offset-4">
                  sahne kiralama
                </Link>
                ,{" "}
                <Link href="/led-ekran-kiralama" className="font-bold text-blue-100 underline underline-offset-4">
                  LED ekran kiralama
                </Link>{" "}
                ve{" "}
                <Link href="/ses-isik-sistemleri" className="font-bold text-blue-100 underline underline-offset-4">
                  ses-ışık sistemleri
                </Link>{" "}
                ihtiyaçlarıyla birlikte değerlendirilmelidir.
              </p>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl md:p-7">
              <h3 className="text-2xl font-black">Kişi sayısına göre yaklaşık çadır m² tablosu</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Aşağıdaki değerler teknik alan, sahne, LED ekran, catering ve karşılama bölümü hariç yaklaşık planlama değerleridir.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full min-w-[620px] text-left text-sm">
                  <thead className="bg-white/[0.08] text-slate-100">
                    <tr>
                      <th className="px-4 py-4 font-black">Kişi</th>
                      <th className="px-4 py-4 font-black">Kokteyl</th>
                      <th className="px-4 py-4 font-black">Yemekli</th>
                      <th className="px-4 py-4 font-black">Düğün/Davet</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-300">
                    {tableRows.map((row) => (
                      <tr key={row.people} className="bg-slate-950/30">
                        <td className="px-4 py-4 font-bold text-white">{row.people}</td>
                        <td className="px-4 py-4">{row.cocktail}</td>
                        <td className="px-4 py-4">{row.dining}</td>
                        <td className="px-4 py-4">{row.wedding}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-200">Örnek Kullanımlar</p>
            <h2 className="text-4xl font-black tracking-[-1px] md:text-5xl">
              Hangi etkinlikte nasıl çadır hesabı yapılır?
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-xl">
              <h3 className="text-2xl font-black">Düğün ve davet çadırı</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Düğünlerde masa aralıkları, gelin yolu, dans alanı, sahne, ışık sistemi ve servis geçişleri hesaba katılmalıdır. Bu yüzden kişi başı alan ihtiyacı kokteyl düzene göre daha yüksektir.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-xl">
              <h3 className="text-2xl font-black">Fuar ve festival çadırı</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Fuar ve festival projelerinde stand alanları, ziyaretçi akışı, teknik depo, backstage, sağlık noktası ve yönlendirme alanları ayrıca planlanır. Büyük açıklıklı çadırlar bu projelerde daha verimli olur.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 shadow-xl">
              <h3 className="text-2xl font-black">Kurumsal etkinlik çadırı</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Lansman, bayi toplantısı, belediye etkinliği ve kurumsal törenlerde protokol, basın, LED ekran, sahne, karşılama ve catering alanları birlikte düşünülmelidir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-200">Sıkça Sorulan Sorular</p>
            <h2 className="text-4xl font-black tracking-[-1px] md:text-5xl">Çadır hesaplama hakkında merak edilenler</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl open:bg-white/[0.08]">
                <summary className="cursor-pointer list-none text-lg font-black text-white">
                  {item.question}
                </summary>
                <p className="mt-4 leading-7 text-slate-300">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-200">İlgili Rehberler</p>
            <h2 className="text-3xl font-black tracking-[-0.5px] md:text-4xl">
              Çadır ölçüsünden sonra planlamayı netleştirin
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Hesaplama sonucunu doğru yorumlamak için çadır tipi, saha keşfi ve etkinlik akışını birlikte değerlendiren rehberlere göz atabilirsiniz.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {blogLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl transition hover:-translate-y-0.5 hover:bg-white/[0.09] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/50"
              >
                <span className="block text-lg font-black text-white group-hover:text-blue-100">{item.title}</span>
                <span className="mt-3 block text-sm leading-6 text-slate-300">{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] px-4 pb-24">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-blue-300/20 bg-gradient-to-br from-blue-500/20 via-white/[0.07] to-slate-950 p-6 shadow-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-200">Ana Hizmet Sayfası</p>
              <h2 className="text-4xl font-black tracking-[-1px] md:text-5xl">
                Net fiyat ve kurulum planı için çadır kiralama sayfasına geçin
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Hesaplama sayfası yaklaşık ölçüyü verir. Stok, fiyat, çadır tipleri, kurulum süreci, zemin sabitleme, nakliye ve anahtar teslim proje detayları için ana çadır kiralama hizmet sayfasını inceleyebilirsiniz.
              </p>
              <Link href="/cadir-kiralama" className="mt-7 inline-flex rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:scale-[1.01]">
                Çadır kiralama hizmetini incele
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:bg-white/[0.08]">
                  <span className="block text-lg font-black text-white">{item.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-300">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
