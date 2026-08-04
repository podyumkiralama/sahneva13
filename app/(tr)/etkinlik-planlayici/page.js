// app/(tr)/etkinlik-planlayici/page.js
import Link from "next/link";

import JsonLdScript from "@/components/seo/JsonLd";
import { buildLanguageAlternates } from "@/lib/seo/alternates";
import { buildCalculatorSchema } from "@/lib/structuredData/calculators";
import EventPlannerClient from "./EventPlannerClient";
import { AI_PREVIEW_ROBOTS } from "@/lib/seo/seoConfig";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/etkinlik-planlayici";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const revalidate = 86400;

export const metadata = {
  title: "Etkinlik Planlayıcı | Kapsam ve Bütçe Aracı",
  // Marka adı bilinçli olarak açıklamanın içinde: "sahneva" gibi marka
  // sorgularında Google, marka geçmeyen açıklamayı yok sayıp footer'daki genel
  // şirket metnini snippet olarak alıyordu.
  description:
    "Sahneva etkinlik planlayıcı: tür, kişi sayısı, mekân ve süreyi girin; sahne, LED ekran, ses-ışık ve çadır için önerilen kapsamı ve yaklaşık bütçeyi görün.",
  alternates: buildLanguageAlternates({
    tr: PAGE_PATH,
    canonical: PAGE_PATH,
    xDefault: PAGE_PATH,
  }),
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    title: "Etkinlik Planlayıcı | Sahneva",
    description:
      "Etkinliğiniz için hangi teknik kalemlerin gerektiğini ve yaklaşık bütçeyi tek ekranda hesaplayın.",
    images: [
      {
        url: `${SITE_URL}/img/kurumsal/hero.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva etkinlik planlayıcı — kapsam ve bütçe aracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Etkinlik Planlayıcı | Sahneva",
    description:
      "Sahne, LED ekran, ses-ışık, çadır ve mobilya ihtiyacınızı tek ekranda planlayın.",
    images: [`${SITE_URL}/img/kurumsal/hero.webp`],
  },
  robots: AI_PREVIEW_ROBOTS,
};

const PLANNER_SCHEMA = buildCalculatorSchema({
  path: PAGE_PATH,
  name: "Sahneva Etkinlik Planlayıcı",
  description:
    "Etkinlik türü, kişi sayısı, mekân ve süreye göre önerilen teknik kapsamı ve yaklaşık bütçe aralığını hesaplayan planlama aracı.",
  image: "/img/kurumsal/hero.webp",
  featureList: [
    "Etkinlik türüne göre gereken teknik kalemlerin önerilmesi",
    "Kişi sayısına göre sahne, LED ekran ve çadır ölçüsü hesaplama",
    "Gün sayısına göre kiralama bedelinin ölçeklenmesi",
    "Kapsama isteğe bağlı kalem ekleyip bütçeyi anlık güncelleme",
    "Hazır teknik brief'i WhatsApp'a taşıma ve planı paylaşılabilir bağlantıyla gönderme",
  ],
  howToName: "Etkinliğim için hangi teknik ekipmanlar gerekir?",
  howToDescription:
    "Etkinlik türü, kişi sayısı, mekân ve süreyi girerek önerilen teknik kapsamı ve yaklaşık bütçe aralığını adım adım çıkarın.",
  howToSteps: [
    {
      name: "Etkinlik türünü seçin",
      text: "Lansman, bayi toplantısı, gala, kongre, konser, düğün veya fuar seçin. Tür, hangi teknik kalemlerin tipik olduğunu belirler.",
    },
    {
      name: "Ölçeği girin",
      text: "Beklenen kişi sayısını ve etkinliğin kaç gün süreceğini girin. Sahne, ekran ve çadır ölçüsü bu değerlerden hesaplanır.",
    },
    {
      name: "Mekânı belirtin",
      text: "Kapalı salon mu, çadır gerektiren açık alan mı olduğunu seçin. Açık alanda çadır metrajı kapsama eklenir.",
    },
    {
      name: "Kapsamı düzenleyin",
      text: "Türe göre tipik olmayan ama ihtiyaç duyduğunuz kalemleri (LED ekran, podyum, mobilya) ekleyin; bütçe anında güncellenir.",
    },
    {
      name: "Planı teklife dönüştürün",
      text: "Çıkan kapsam bir başlangıç aralığıdır. Hazır brief'i WhatsApp'tan gönderin veya formla teklif isteyin; kesin fiyat keşif sonrası netleşir.",
    },
  ],
  about: [
    "etkinlik teknik prodüksiyonu",
    "etkinlik bütçesi",
    "sahne kiralama",
    "LED ekran kiralama",
    "çadır kiralama",
    "kurumsal organizasyon",
  ],
  breadcrumb: [
    { name: "Sahneva", url: "/" },
    { name: "Hizmetler", url: "/hizmetler" },
    { name: "Etkinlik Planlayıcı", url: PAGE_PATH },
  ],
});

export default function EventPlannerPage() {
  return (
    <div className="bg-white text-slate-900">
      <JsonLdScript id="ld-json-etkinlik-planlayici" data={PLANNER_SCHEMA} />

      <section className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.25),transparent_38%),linear-gradient(135deg,#020617,#111827_48%,#0f172a)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl">
          <nav aria-label="Site içi konum" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white/60">
              <li>
                <Link href="/" className="hover:text-white">
                  Ana Sayfa
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/hizmetler" className="hover:text-white">
                  Hizmetler
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/90">
                Etkinlik Planlayıcı
              </li>
            </ol>
          </nav>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            Etkinliğiniz için neye ihtiyacınız var?
          </h1>
          <p
            data-speakable
            className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Sahneva&apos;nın çadır ve LED hesaplayıcıları tek bir kalemi hesaplar. Bu araç ise
            etkinliğin tamamına bakar: türü, kişi sayısı, mekânı ve süresi verildiğinde sahne,
            LED ekran, ses-ışık, çadır ve mobilya ihtiyacını birlikte çıkarır; hazır bir teknik
            brief üretir.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <EventPlannerClient />
      </div>

      {/* Aracin sinirlarini acikca yazmak, cikan rakamin teklif sanilmasini onler. */}
      <section className="border-t border-slate-200 bg-slate-50 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-black tracking-tight">Bu rakamlar nereden geliyor?</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-slate-700">
            <p>
              Araç, sitede yayımlanan başlangıç bedellerini kullanır: çadırda m² fiyatı, LED
              ekranda m² fiyatı ve proje alt sınırı, sahne ve podyumda paket bedelleri, masa ve
              sandalyede günlük birim fiyatlar. Alan hesabı ise{" "}
              <Link
                href="/cadir-hesaplama"
                className="font-bold text-blue-700 underline underline-offset-4"
              >
                çadır hesaplama aracıyla
              </Link>{" "}
              aynı katsayıları kullanır: kokteyl düzende kişi başı 1 m², yemekli düzende 1,6 m²,
              düğün düzeninde 1,8 m² ve üzerine sahne, backstage, catering ve karşılama alanları.
            </p>
            <p>
              Ekran ölçüsü aslında kişi sayısına değil, <strong>salonun derinliğine</strong>
              bağlıdır; en arkadaki misafirin ekranı rahatça okuyabilmesi esastır. Araç kişi
              sayısını bir başlangıç noktası olarak kullanır. Salonun uzun ve dar ya da geniş
              ve kısa olması ölçüyü değiştirir; net ölçü keşifte belirlenir.
            </p>
            <p>
              Podyum iki ayrı şekilde geçer:{" "}
              <strong>sahne podyumu</strong> konuşmacı ve performans için yükseltilmiş
              platformdur, ölçüsü kişi sayısına göre belirlenir.{" "}
              <strong>Zemin podyumu</strong> ise çadırın tamamına döşenen tabandır; alanı
              çadırla aynıdır ve eğimli, çimli veya çamurlu zeminde masa düzeninin oturması
              için gerekir. İkisi ayrı kalemdir ve podyum haftalık fiyatlandığı için gün
              sayısıyla çarpılmaz.
            </p>
            <p>
              Fiyat verisi olmayan kalemler bütçe aralığına <strong>katılmaz</strong>. Truss,
              nakliye, jeneratör ve salon ölçeğinde ses-ışık, kapsam listesinde &ldquo;projeye
              göre&rdquo; olarak görünür ve aralığın dışında bırakılır. Bu yüzden çıkan aralık,
              gerçek bütçenin tavanı değil tabanıdır.
            </p>
            <p>
              Terimlerin ne anlama geldiğini{" "}
              <Link
                href="/sozluk"
                className="font-bold text-blue-700 underline underline-offset-4"
              >
                teknik sözlükte
              </Link>{" "}
              bulabilirsiniz. Kesin fiyat; ölçü, zemin, giriş saati, asma noktaları ve içerik
              akışı netleştikten sonra keşifle belirlenir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
