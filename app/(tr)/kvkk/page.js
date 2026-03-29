// app/kvkk/page.jsx
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "KVKK ve Gizlilik Politikası | Kişisel Veri Koruması",
  description:
    "Sahneva KVKK ve Gizlilik Politikası: kişisel verilerin işlenmesi, saklanması, aktarımı ve haklarınız hakkında bilgilendirme.",
  alternates: { canonical: `${SITE_URL}/kvkk`, languages: { "tr-TR": `${SITE_URL}/kvkk`, "x-default": `${SITE_URL}/kvkk` } },
  openGraph: {
    title: "KVKK / Gizlilik | Sahneva",
    description:
      "Sahneva Organizasyon’un KVKK ve Gizlilik Politikası hakkında bilgilendirme.",
    url: `${SITE_URL}/kvkk`,
    type: "website",
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organizasyon KVKK gizlilik politikası – kişisel veri işleme bilgilendirmesi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KVKK / Gizlilik | Sahneva",
    description:
      "Sahneva Organizasyon’un KVKK ve Gizlilik Politikası hakkında bilgilendirme.",
    images: [`${SITE_URL}/img/hero-bg.webp`],
  },
  robots: { index: true, follow: true },
};

export default function KvkkPage() {
  const updatedAt = "11 Ekim 2025"; // ihtiyaç oldukça güncelle
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "KVKK", url: `${baseUrl}/kvkk` },
  ];

  return (
    <div className="container max-w-3xl mx-auto px-4 py-10 md:py-14">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">KVKK / Gizlilik Politikası</h1>
        <p className="text-sm text-neutral-600 mt-1">Son güncelleme: {updatedAt}</p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-7">
        <p>
          Sahne, podyum, LED ekran ve ses–ışık ekipmanı kiralama süreçlerimizde sizinle iletişim
          kurabilmek ve işlerinizi doğru planlayabilmek için bazı kişisel bilgilere ihtiyaç
          duyuyoruz. Bu bilgileri nasıl kullandığımızı, kimlerle paylaştığımızı ve haklarınızı
          açık bir şekilde anlatmak istedik.
        </p>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">Veri Sorumlusu</h2>
          <p className="mt-1">
            Sahneva — İstanbul / Türkiye<br />
            E-posta: <a className="text-[#6d28d9] hover:underline" href="mailto:info@sahneva.com">info@sahneva.com</a><br />
            Telefon: <a className="text-[#6d28d9] hover:underline" href="tel:+905453048671">+90 545 304 8671</a>
          </p>
        </div>

        <h2 className="text-xl font-semibold">1. Hangi Bilgileri Topluyoruz?</h2>
        <p>
          Teklif formu doldurduğunuzda veya bizi aradığınızda paylaştığınız ad, telefon ve
          e-posta gibi iletişim bilgilerini kaydediyoruz. Etkinliğin yapılacağı yer, tarih ve
          ekipman gereksinimleri de operasyon planlaması için bize gerekiyor. Bunların yanı sıra
          fatura düzenleyebilmek için şirket veya vergi bilgilerini alıyoruz. Web sitemizi
          ziyaret ettiğinizde ise hangi sayfaların ilgi gördüğünü anlamak için Google Analytics
          aracılığıyla anonim kullanım istatistikleri topluyoruz; bu veriler kişiselleştirilmiş
          değil, yalnızca toplu hâlde işleniyor.
        </p>

        <h2 className="text-xl font-semibold">2. Bu Bilgileri Neden Kullanıyoruz?</h2>
        <p>
          Temel amacımız size hizmet sunmak. Aldığınız teklifi hazırlamak, kurulum ekibini
          doğru yere yönlendirmek, fatura kesmek ve etkinlik sonrası destek vermek için bu
          bilgileri kullanıyoruz. Sitenin hangi bölümlerinin daha faydalı olduğunu görmek ve
          içerikleri geliştirmek için de analitik verilerden yararlanıyoruz. Pazarlama e-postası
          göndermek gibi bir alışkanlığımız yok; bunu yapmadan önce açıkça izin alırız.
        </p>

        <h2 className="text-xl font-semibold">3. Yasal Dayanaklarımız</h2>
        <p>
          6698 sayılı KVKK çerçevesinde verilerinizi işlerken birkaç farklı hukuki sebebe
          dayanıyoruz. Sözleşme hazırlığı ve ifası en sık başvurduğumuz sebep: teklif
          vermeden kurulum yapmaya kadar her adımda buna ihtiyaç var. Fatura ve muhasebe
          kayıtları için ise vergi ve ticaret mevzuatından doğan yasal yükümlülüklerimizi
          yerine getiriyoruz. Analitik ve site performansı için meşru menfaat sebebine
          dayanıyoruz; bu kapsamda topladığımız veriler tamamen anonimdir.
        </p>

        <h2 className="text-xl font-semibold">4. Bilgileri Nasıl Topluyoruz?</h2>
        <p>
          Web sitemizdeki teklif ve iletişim formları, telefon veya WhatsApp görüşmeleri,
          e-posta yazışmaları ve kurulum günlerindeki saha koordinasyonu sırasında bilgi
          topluyoruz. Hiçbir zaman sosyal medya veya üçüncü taraflardan bilgi satın almıyoruz.
        </p>

        <h2 className="text-xl font-semibold">5. Kimlerle Paylaşıyoruz?</h2>
        <p>
          Kurulum için gereken lojistik ve taşıma hizmetleri, muhasebe yazılımı ve barındırma
          altyapısı gibi iş ortaklarımızla yalnızca ilgili işin gerektirdiği kadarını
          paylaşıyoruz. Tüm bu tedarikçilerle KVKK'ya uygun sözleşmeler yapıyoruz. Yetkili
          kamu kurumları talep ettiğinde yasal zorunluluk olduğu için bilgi verebiliyoruz;
          bunun dışında verilerinizi kimseye satmıyor ya da ticari amaçla devretmiyoruz.
        </p>

        <h2 className="text-xl font-semibold">6. Yurt Dışına Aktarım</h2>
        <p>
          Google Analytics ve kullandığımız bazı bulut altyapı hizmetleri yurt dışı
          sunucularında çalışıyor. Bu aktarımlar, KVKK'nın 9. maddesi kapsamında gerekli
          güvenceler sağlanarak gerçekleştiriliyor. Söz konusu hizmetlerin gizlilik
          politikaları, ilgili sağlayıcıların kendi sitelerinde yayınlanıyor.
        </p>

        <h2 className="text-xl font-semibold">7. Ne Kadar Saklıyoruz?</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Teklif, sözleşme ve fatura kayıtları: vergi ve ticaret mevzuatının gerektirdiği süreler (genellikle 5–10 yıl).</li>
          <li>İletişim ve proje yazışmaları: olası anlaşmazlıklara karşı zamanaşımı süreleriyle orantılı biçimde.</li>
          <li>Analitik veriler: Google Analytics varsayılan saklama süreleri çerçevesinde ve anonim olarak.</li>
        </ul>
        <p>
          Saklama amacı ortadan kalktığında veriler güvenli biçimde siliniyor ya da
          anonimleştiriliyor.
        </p>

        <h2 className="text-xl font-semibold">8. Çerezler</h2>
        <p>
          Sitemizde yalnızca zorunlu çerezler ve Google Analytics 4 analitik çerezleri
          kullanıyoruz. GA4 sayfa görüntüleme ve tıklama gibi etkileşimleri toplu olarak
          ölçüyor; bireysel ziyaretçi profili çıkarmıyor. Tarayıcınızın çerez ayarlarından
          bu çerezleri istediğiniz zaman silebilir veya engelleyebilirsiniz. Zorunlu çerezler
          dışındakileri kapatırsanız sitenin bazı bölümleri beklendiği gibi çalışmayabilir.
        </p>

        <h2 className="text-xl font-semibold">9. Haklarınız</h2>
        <p>
          KVKK'nın 11. maddesi size şu hakları tanıyor: verilerinizin işlenip işlenmediğini
          sorabilir, işleniyorsa hangi amaçla kullanıldığını öğrenebilirsiniz. Yanlış veya
          eksik bir bilgi varsa düzeltilmesini isteyebilirsiniz. Saklama gerekçesi ortadan
          kalkmışsa silinmesini talep edebilirsiniz. Otomatik bir sistemin sizi olumsuz
          etkileyen bir karar almasına itiraz etme hakkınız da bulunuyor.
        </p>
        <p>
          Bu haklardan herhangi birini kullanmak için{" "}
          <a className="text-[#6d28d9] hover:underline" href="mailto:info@sahneva.com">
            info@sahneva.com
          </a>{" "}
          adresine e-posta atmanız yeterli. Talebinizi en geç 30 gün içinde yanıtlıyoruz.
        </p>

        <h2 className="text-xl font-semibold">10. Güvenlik</h2>
        <p>
          Site HTTPS ile şifreli bağlantı üzerinden çalışıyor. Sistemlerimize erişim yalnızca
          yetkili çalışanlarla sınırlı ve sunucu altyapısı düzenli olarak güncelleniyor.
          Bir güvenlik ihlali fark ettiğimizde KVKK'nın öngördüğü sürelerde hem sizi hem
          de ilgili kurumu bilgilendiriyoruz.
        </p>

        <h2 className="text-xl font-semibold">11. Değişiklikler</h2>
        <p>
          Hizmet kapsamımız veya yasal düzenlemeler değiştiğinde bu sayfayı güncelliyoruz.
          Önemli bir değişiklik olduğunda bunu burada açıkça belirtiyoruz. Güncel metin
          her zaman <strong>sahneva.com/kvkk</strong> adresinde bulunabilir.
        </p>
      </section>
    </div>
  );
}