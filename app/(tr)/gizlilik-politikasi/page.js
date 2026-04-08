// app/gizlilik-politikasi/page.jsx
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const revalidate = 1800;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PHONE = "+905453048671";
const MAIL = "info@sahneva.com";

export const metadata = {
  title: "Gizlilik Politikası | KVKK ve GDPR Uyumlu",
  description:
    "Sahneva kişisel verilerinizi KVKK ve GDPR uyumlu olarak güvenle işler, saklar ve korur. Veri güvenliği detayları için gizlilik politikamızı inceleyin.",
  alternates: {
    canonical: `${SITE_URL}/gizlilik-politikasi`,
    languages: {
      "tr-TR": `${SITE_URL}/gizlilik-politikasi`,
      "x-default": `${SITE_URL}/gizlilik-politikasi`,
    },
  },
  openGraph: {
    title: "Gizlilik Politikası | Sahneva",
    description:
      "Sahneva Organizasyon’un KVKK ve GDPR uyumlu gizlilik politikası, çerez kullanımı ve veri işleme süreçleri.",
    url: `${SITE_URL}/gizlilik-politikasi`,
    siteName: "Sahneva",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon gizlilik politikası – KVKK ve GDPR uyumlu veri koruma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gizlilik Politikası | Sahneva",
    description:
      "Sahneva Organizasyon’un KVKK ve GDPR uyumlu gizlilik politikası, çerez kullanımı ve veri işleme süreçleri.",
    images: [`${SITE_URL}/img/hero-bg.webp`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gizlilik Politikası",
    url: `${SITE_URL}/gizlilik-politikasi`,
    description:
      "Sahneva Organizasyon’un KVKK ve GDPR uyumlu gizlilik politikası, çerez kullanımı ve veri işleme süreçleri.",
    inLanguage: "tr-TR",
    image: `${SITE_URL}/img/hero-bg.webp`,
    isPartOf: {
      "@type": "WebSite",
      name: "Sahneva",
      url: SITE_URL,
    },
  };
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Gizlilik Politikası", url: `${baseUrl}/gizlilik-politikasi` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      {/* JSON-LD */}
      <script
        id="ld-json-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <div className="bg-slate-950 text-slate-50">
        {/* Hero / Başlık */}
        <section className="relative border-b border-white/5 bg-gradient-to-b from-purple-900/40 via-slate-950 to-slate-950">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-400" aria-label="Sayfa konumu">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-slate-100 focus-ring rounded-md px-1 -mx-1"
                  >
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden="true" className="px-1">
                  /
                </li>
                <li className="text-slate-300">Gizlilik Politikası</li>
              </ol>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                  Gizlilik Politikası
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
                  Sahneva olarak; sahne, podyum, LED ekran, ses ve ışık sistemleri hizmetlerimiz sırasında
                  kişisel verilerinizin gizliliğine en üst düzeyde önem veriyoruz. Bu sayfada, verilerinizin
                  nasıl toplandığını, işlendiğini ve korunduğunu bulabilirsiniz.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    KVKK & GDPR uyumlu
                  </span>
                  <span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                    Güvenli iletişim (HTTPS)
                  </span>
                  <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100">
                    Çerez yönetimi
                  </span>
                </div>
              </div>

              {/* Özet / Hızlı Bilgi Kartı */}
              <aside
                aria-label="Gizlilik özeti"
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-purple-900/20 backdrop-blur"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  Kısa Özet
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Verilerinizi yalnızca hizmet sunmak, teklif hazırlamak ve siteyi iyileştirmek için
                  kullanıyoruz. Verileriniz hiçbir şekilde üçüncü kişilere satılmaz.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Veri sorumlusu</dt>
                    <dd className="text-slate-100">Sahneva Organizasyon</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">E-posta</dt>
                    <dd>
                      <a
                        href={`mailto:${MAIL}`}
                        className="text-sky-300 underline-offset-2 hover:underline"
                      >
                        {MAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Telefon</dt>
                    <dd>
                      <a
                        href={`tel:${PHONE}`}
                        className="text-sky-300 underline-offset-2 hover:underline"
                      >
                        0 (545) 304 86 71
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Son güncelleme</dt>
                    <dd className="text-slate-100">2025</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* İçerik + TOC */}
        <section className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <nav
                aria-label="Sayfa içi menü"
                className="sticky top-24 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300 backdrop-blur"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Bu sayfada
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#toplanan-veriler" className="hover:text-sky-300">
                      1. Toplanan Veriler
                    </a>
                  </li>
                  <li>
                    <a href="#isleme-amaclari" className="hover:text-sky-300">
                      2. İşleme Amaçları
                    </a>
                  </li>
                  <li>
                    <a href="#hukuki-dayanak" className="hover:text-sky-300">
                      3. Hukuki Dayanak
                    </a>
                  </li>
                  <li>
                    <a href="#saklama-sureleri" className="hover:text-sky-300">
                      4. Saklama Süreleri
                    </a>
                  </li>
                  <li>
                    <a href="#veri-aktarimi" className="hover:text-sky-300">
                      5. Veri Aktarımı
                    </a>
                  </li>
                  <li>
                    <a href="#haklariniz" className="hover:text-sky-300">
                      6. Haklarınız
                    </a>
                  </li>
                  <li>
                    <a href="#guvenlik" className="hover:text-sky-300">
                      7. Veri Güvenliği
                    </a>
                  </li>
                  <li>
                    <a href="#cerezler" className="hover:text-sky-300">
                      8. Çerezler
                    </a>
                  </li>
                  <li>
                    <a href="#degisiklikler" className="hover:text-sky-300">
                      9. Değişiklikler
                    </a>
                  </li>
                  <li>
                    <a href="#iletisim" className="hover:text-sky-300">
                      10. İletişim
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* İçerik */}
            <div className="space-y-10 text-sm leading-relaxed text-slate-200">
              {/* 1. Toplanan Veriler */}
              <section id="toplanan-veriler" aria-labelledby="toplanan-veriler-baslik">
                <h2
                  id="toplanan-veriler-baslik"
                  className="text-xl font-semibold text-slate-50"
                >
                  1. Topladığımız Veriler
                </h2>
                <p className="mt-3">
                  Teklif istediğinizde veya bizi aradığınızda verdiğiniz ad, telefon ve
                  e-posta bilgilerini kaydediyoruz. Etkinliğin yeri, tarihi ve kurulum
                  gereksinimleri ekibimizi doğru planlamamız için gerekiyor. Fatura
                  kesmemiz gerektiğinde şirket ya da vergi bilgilerini de alıyoruz.
                </p>
                <h3 className="mt-4 text-base font-semibold text-slate-50">
                  1.1. Siz Paylaştığınızda
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Ad, soyad, telefon numarası, e-posta adresi</li>
                  <li>Firma unvanı veya görev bilgisi (paylaşıldıysa)</li>
                  <li>Etkinlik türü, tarih ve lokasyon gibi proje detayları</li>
                  <li>WhatsApp ya da e-posta yoluyla ilettiğiniz ekipman talepleri</li>
                </ul>

                <h3 className="mt-4 text-base font-semibold text-slate-50">
                  1.2. Otomatik Olarak
                </h3>
                <p className="mt-2">
                  Sitenin hangi bölümlerinin işe yaradığını anlamak için Google Analytics
                  kullanıyoruz. Bu araç bize toplu istatistikler sunuyor; sizi bireysel
                  olarak tanımlamıyor:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Hangi sayfaların ziyaret edildiği ve ne kadar kalındığı</li>
                  <li>Tarayıcı türü ve ekran boyutu gibi teknik bilgiler</li>
                  <li>Anonimleştirilmiş IP adresi</li>
                </ul>
              </section>

              {/* 2. İşleme Amaçları */}
              <section id="isleme-amaclari" aria-labelledby="isleme-amaclari-baslik">
                <h2
                  id="isleme-amaclari-baslik"
                  className="text-xl font-semibold text-slate-50"
                >
                  2. Bu Bilgileri Neden Kullanıyoruz?
                </h2>
                <p className="mt-3">
                  Temel amacımız size hizmet verebilmek. Aldığınız teklifi hazırlamak,
                  kurulum ekibini doğru adrese yönlendirmek ve etkinlik sonrası destek
                  sağlamak için bu bilgilere ihtiyacımız var.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Podyum, sahne, LED ekran, ses ve ışık sistemi tekliflerini hazırlamak</li>
                  <li>Kurulum ve taşıma operasyonlarını planlamak</li>
                  <li>Fatura düzenlemek ve muhasebe kayıtlarını tutmak</li>
                  <li>Sitenin hangi içeriklerinin daha faydalı olduğunu görmek</li>
                  <li>Açıkça izin verdiğinizde kampanya veya duyuru iletmek</li>
                </ul>
                <p className="mt-2">
                  Pazarlama e-postası göndermek gibi bir alışkanlığımız yok; bunu
                  yapmadan önce her seferinde açıkça izin alırız.
                </p>
              </section>

              {/* 3. Hukuki Dayanak */}
              <section id="hukuki-dayanak" aria-labelledby="hukuki-dayanak-baslik">
                <h2
                  id="hukuki-dayanak-baslik"
                  className="text-xl font-semibold text-slate-50"
                >
                  3. Yasal Dayanaklarımız
                </h2>
                <p className="mt-3">
                  6698 sayılı KVKK çerçevesinde birkaç farklı hukuki sebebe dayanıyoruz.
                  Teklif vermekten kurulum yapmaya kadar her adımda sözleşme hazırlığı ve
                  ifası geçerli. Fatura ve muhasebe kayıtları için vergi ve ticaret
                  mevzuatından doğan yükümlülüklerimizi yerine getiriyoruz. Analitik için
                  ise meşru menfaat sebebine dayanıyoruz; bu kapsamdaki veriler anonimdir.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
                  <li>Hukuki yükümlülüklerimizin yerine getirilmesi</li>
                  <li>Sahneva&apos;nın meşru menfaatleri (sitenin iyileştirilmesi gibi)</li>
                  <li>Açık rızanızın bulunması (pazarlama gibi durumlarda)</li>
                </ul>
              </section>

              {/* 4. Saklama Süreleri */}
              <section id="saklama-sureleri" aria-labelledby="saklama-sureleri-baslik">
                <h2
                  id="saklama-sureleri-baslik"
                  className="text-xl font-semibold text-slate-50"
                >
                  4. Verileri Ne Kadar Saklıyoruz?
                </h2>
                <p className="mt-3">
                  Her verinin saklama süresi, neden toplandığına göre değişiyor. İşimiz
                  bitince verilerinizi tutmayı bırakıyoruz ya da anonimleştiriyoruz.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900/80 text-slate-300">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Veri Türü</th>
                        <th className="px-4 py-3 font-semibold">Saklama Süresi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-200">
                      <tr>
                        <td className="px-4 py-3">Teklif &amp; iletişim formu verileri</td>
                        <td className="px-4 py-3">3 yıl</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Müşteri yazışmaları ve proje kayıtları</td>
                        <td className="px-4 py-3">3 yıl</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Fatura ve muhasebe kayıtları</td>
                        <td className="px-4 py-3">Vergi mevzuatı gereği 5–10 yıl</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Analitik ve istatistik verileri</td>
                        <td className="px-4 py-3">26 aya kadar (GA4 varsayılanı)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Çerez verileri</td>
                        <td className="px-4 py-3">Tarayıcı ayarlarına ve çerez türüne göre</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 5. Veri Aktarımı */}
              <section id="veri-aktarimi" aria-labelledby="veri-aktarimi-baslik">
                <h2
                  id="veri-aktarimi-baslik"
                  className="text-xl font-semibold text-slate-50"
                >
                  5. Kiminle Paylaşıyoruz?
                </h2>
                <p className="mt-3">
                  Verilerinizi yalnızca işin gerektirdiği ölçüde ve aşağıdaki taraflarla
                  paylaşıyoruz. Hiçbir koşulda üçüncü kişilere satmıyor ya da izinsiz
                  pazarlama amacıyla aktarmıyoruz.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Lojistik ve taşıma hizmetleri sağlayıcıları (kurulum operasyonları için)</li>
                  <li>Muhasebe yazılımı ve barındırma altyapısı sağlayıcıları</li>
                  <li>Google Analytics — anonim kullanım istatistikleri için</li>
                  <li>Hukuki zorunluluk doğduğunda yetkili kamu kurumları</li>
                </ul>
                <p className="mt-2">
                  Bu tedarikçilerin tamamıyla KVKK&apos;ya uygun gizlilik sözleşmeleri yapıyoruz.
                </p>
              </section>

              {/* 6. Haklarınız */}
              <section id="haklariniz" aria-labelledby="haklariniz-baslik">
                <h2 id="haklariniz-baslik" className="text-xl font-semibold text-slate-50">
                  6. Haklarınız
                </h2>
                <p className="mt-3">
                  KVKK&apos;nın 11. maddesi size birçok hak tanıyor. Bunları kullanmak için
                  resmi bir form doldurmak zorunda değilsiniz; e-posta yeterli.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Verilerinizin işlenip işlenmediğini ve nasıl kullanıldığını sorabilirsiniz</li>
                  <li>Yanlış ya da eksik bir bilgi varsa düzeltilmesini isteyebilirsiniz</li>
                  <li>Saklama amacı bittiğinde silinmesini talep edebilirsiniz</li>
                  <li>Verilerinizin hangi üçüncü kişilere aktarıldığını öğrenebilirsiniz</li>
                  <li>Otomatik karar sistemlerinin sizi olumsuz etkileyen sonuçlarına itiraz edebilirsiniz</li>
                  <li>KVKK&apos;ya aykırı işlemden doğan zararın giderilmesini isteyebilirsiniz</li>
                </ul>
                <p className="mt-2">
                  Talebinizi{" "}
                  <a href={`mailto:${MAIL}`} className="text-sky-300 underline-offset-2 hover:underline">
                    {MAIL}
                  </a>{" "}
                  adresine iletmeniz yeterli. 30 gün içinde yanıtlıyoruz.
                </p>
              </section>

              {/* 7. Güvenlik */}
              <section id="guvenlik" aria-labelledby="guvenlik-baslik">
                <h2 id="guvenlik-baslik" className="text-xl font-semibold text-slate-50">
                  7. Veri Güvenliği
                </h2>
                <p className="mt-3">
                  Sitemiz HTTPS ile şifreli bağlantı üzerinden çalışıyor. Sistemlerimize
                  erişim yalnızca yetkili ekip üyeleriyle sınırlı; sunucu altyapısı
                  düzenli olarak güncelleniyor. Bir güvenlik sorunu tespit ettiğimizde
                  KVKK&apos;nın öngördüğü süreler içinde hem sizi hem de ilgili kurumu
                  bilgilendiririz.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>HTTPS üzerinden şifrelenmiş veri iletimi</li>
                  <li>Yetkisiz erişimi önleyen erişim kontrol mekanizmaları</li>
                  <li>Düzenli güncellenen sunucu ve yazılım altyapısı</li>
                  <li>Gerektiğinde yedekleme ve kurtarma prosedürleri</li>
                </ul>
              </section>

              {/* 8. Çerezler */}
              <section id="cerezler" aria-labelledby="cerezler-baslik">
                <h2 id="cerezler-baslik" className="text-xl font-semibold text-slate-50">
                  8. Çerezler
                </h2>
                <p className="mt-3">
                  Sitemizde iki tür çerez kullanıyoruz: sitenin çalışması için zorunlu
                  olanlar ve kullanımı ölçen analitik çerezler. Reklam amaçlı çerez
                  kullanmıyoruz.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Zorunlu çerezler:</strong> Form gönderimleri ve gezinti gibi
                    temel fonksiyonlar için gerekli; bunlar olmadan site düzgün çalışmaz.
                  </li>
                  <li>
                    <strong>Analitik çerezler (GA4):</strong> Hangi sayfaların daha
                    faydalı olduğunu toplu ve anonim olarak ölçer; kişisel profil
                    oluşturmaz.
                  </li>
                </ul>
                <p className="mt-2">
                  Tarayıcınızın ayarlarından çerezleri yönetebilir ya da tamamen
                  engelleyebilirsiniz. Zorunlu çerezleri kapatırsanız sitenin bazı
                  bölümleri beklendiği gibi çalışmayabilir.
                </p>
              </section>

              {/* 9. Değişiklikler */}
              <section id="degisiklikler" aria-labelledby="degisiklikler-baslik">
                <h2
                  id="degisiklikler-baslik"
                  className="text-xl font-semibold text-slate-50"
                >
                  9. Değişiklikler
                </h2>
                <p className="mt-3">
                  Hizmet kapsamımız veya yasal düzenlemeler değiştiğinde bu sayfayı
                  güncelliyoruz. Önemli bir değişiklik olduğunda bunu burada açıkça
                  belirtiyoruz. Güncel metin her zaman{" "}
                  <span className="text-sky-300">/gizlilik-politikasi</span> adresinde
                  bulunabilir.
                </p>
              </section>

              {/* 10. İletişim */}
              <section id="iletisim" aria-labelledby="iletisim-baslik">
                <h2 id="iletisim-baslik" className="text-xl font-semibold text-slate-50">
                  10. İletişim
                </h2>
                <p className="mt-3">
                  Gizlilik Politikası veya kişisel verilerinizin işlenmesiyle ilgili her türlü soru,
                  talep ve başvurunuz için aşağıdaki kanallardan bize ulaşabilirsiniz:
                </p>

                <div className="mt-4 rounded-3xl border border-purple-500/40 bg-gradient-to-r from-purple-900/50 via-slate-900 to-sky-900/40 p-5 shadow-lg shadow-purple-900/40">
                  <p className="text-sm text-slate-100">
                    <span className="font-semibold">Veri Sorumlusu:</span> Sahneva Organizasyon
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">E-posta:</span>{" "}
                    <a
                      href={`mailto:${MAIL}`}
                      className="text-sky-100 underline-offset-2 hover:underline"
                    >
                      {MAIL}
                    </a>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Telefon:</span>{" "}
                    <a
                      href={`tel:${PHONE}`}
                      className="text-sky-100 underline-offset-2 hover:underline"
                    >
                      0 (545) 304 86 71
                    </a>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Web sitesi:</span>{" "}
                    <Link
                      href="/"
                      className="text-sky-100 underline-offset-2 hover:underline"
                    >
                      www.sahneva.com
                    </Link>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-50 shadow-md shadow-black/40 ring-1 ring-white/10 transition hover:scale-[1.02] hover:bg-slate-900"
                    >
                      İletişim Sayfasına Git
                    </Link>
                    <a
                      href={`https://wa.me/${PHONE.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-900/60 transition hover:scale-[1.02] hover:bg-emerald-400"
                    >
                      WhatsApp Üzerinden Yaz
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
