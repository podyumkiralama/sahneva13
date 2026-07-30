// app/(tr)/mesafeli-satis-sozlesmesi/page.js
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { COMPANY, COMPANY_INFO_COMPLETE, REFUND_TIERS } from "@/lib/legal/companyInfo";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "Mesafeli Satış Sözleşmesi",
  description:
    "Sahneva online ödeme sistemi üzerinden alınan etkinlik prodüksiyon hizmetlerine ilişkin mesafeli satış sözleşmesi: taraflar, hizmet bedeli, ödeme, cayma hakkı ve uyuşmazlık çözümü.",
  alternates: { canonical: `${SITE_URL}/mesafeli-satis-sozlesmesi` },
  // Satıcı bilgileri tamamlanmadan arama motorlarına açılmaz.
  robots: { index: COMPANY_INFO_COMPLETE, follow: true },
};

export default function MesafeliSatisSozlesmesiPage() {
  const updatedAt = "29 Temmuz 2026";
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Mesafeli Satış Sözleşmesi", url: `${baseUrl}/mesafeli-satis-sozlesmesi` },
  ];

  return (
    <div className="container max-w-3xl mx-auto px-4 pb-10 pt-24 md:pb-14 md:pt-28">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Mesafeli Satış Sözleşmesi</h1>
        <p className="text-sm text-neutral-600 mt-1">Son güncelleme: {updatedAt}</p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-7">
        <p>
          Bu sözleşme, {COMPANY.brandName} internet sitesi üzerinden online ödeme yaparak etkinlik
          prodüksiyon hizmeti satın alan taraflar arasında, 6502 sayılı Tüketicinin Korunması
          Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği uyarınca düzenlenmiştir.
        </p>

        <h2 className="text-xl font-semibold">1. Taraflar</h2>

        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">Satıcı</h3>
          <p className="mt-1">
            {COMPANY.legalName}
            <br />
            Adres: {COMPANY.address}
            <br />
            Vergi Dairesi / No: {COMPANY.taxOffice} / {COMPANY.taxNumber}
            <br />
            MERSİS No: {COMPANY.mersisNo}
            <br />
            Ticaret Sicil No: {COMPANY.tradeRegistryNo}
            <br />
            E-posta:{" "}
            <a className="text-[#6d28d9] hover:underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
            <br />
            Telefon:{" "}
            <a className="text-[#6d28d9] hover:underline" href={`tel:${COMPANY.phoneHref}`}>
              {COMPANY.phone}
            </a>
          </p>
        </div>

        <p>
          <strong>Alıcı</strong>, ödeme sayfasındaki formda ad, soyad, e-posta ve telefon
          bilgilerini kendi beyanıyla giren gerçek veya tüzel kişidir. Alıcı, bu bilgilerin
          doğruluğundan sorumludur.
        </p>

        <h2 className="text-xl font-semibold">2. Sözleşmenin Konusu</h2>
        <p>
          Sözleşmenin konusu, Alıcı ile Satıcı arasında karşılıklı olarak mutabık kalınan etkinlik
          prodüksiyon hizmetinin (sahne, podyum, LED ekran, ses ve ışık sistemleri, truss, çadır,
          masa-sandalye kiralama ve bunlara bağlı kurulum, operasyon ve söküm hizmetleri) bedelinin
          tamamının veya bir kısmının internet sitesi üzerinden ödenmesidir.
        </p>

        <h2 className="text-xl font-semibold">3. Hizmetin Nitelikleri ve Bedeli</h2>
        <p>
          {COMPANY.brandName} standart fiyatlı bir katalog üzerinden satış yapmaz. Her etkinliğin
          ekipman listesi, süresi, kurulum yeri ve lojistiği farklı olduğundan hizmetin kapsamı ve
          bedeli, Alıcı ile Satıcı arasında yürütülen görüşme sonucunda düzenlenen teklifte
          belirlenir.
        </p>
        <p>
          Ödeme sayfasında Alıcının girdiği tutar, bu teklifte mutabık kalınan bedeldir. Alıcı,
          ödeme öncesinde tutarın doğruluğundan emin değilse ödeme yapmadan önce Satıcı ile
          iletişime geçmekle yükümlüdür. Teklifte aksi belirtilmedikçe tutarlar Türk Lirası
          cinsinden ve KDV dâhildir.
        </p>

        <h2 className="text-xl font-semibold">4. Ödeme Şekli ve Güvenlik</h2>
        <p>
          Ödemeler, lisanslı ödeme kuruluşu PayTR Ödeme Hizmetleri A.Ş. altyapısı üzerinden kredi
          kartı veya banka kartı ile, 3D Secure doğrulamasıyla alınır. Kart bilgileri hiçbir
          aşamada {COMPANY.brandName} sunucularına iletilmez, kaydedilmez ve görüntülenmez.
        </p>
        <p>
          Ödemenin başarıyla tamamlandığı, bankadan Satıcıya ulaşan imzalı ödeme bildirimi ile
          teyit edilir. Ekranda görüntülenen bilgilendirme mesajı tek başına tahsilat kanıtı
          değildir.
        </p>

        <h2 className="text-xl font-semibold">5. Hizmetin İfası ve Ödeme Zamanı</h2>
        <p>
          Hizmet, teklifte belirtilen etkinlik tarihinde ve yerinde ifa edilir. Kurulum, işletme ve
          söküm süreleri teklifte ayrıca belirtilir. Alıcı; etkinlik alanına erişim, elektrik
          altyapısı, zemin uygunluğu ve gerekli resmî izinlerin temininden, teklifte aksi
          kararlaştırılmadıkça sorumludur. Bu yükümlülüklerin yerine getirilmemesi nedeniyle
          hizmetin ifa edilememesi hâlinde Satıcı sorumlu tutulamaz.
        </p>
        <p>
          {COMPANY.brandName} kural olarak ödemeyi <strong>hizmet ifa edildikten sonra</strong>,
          yani kurulum tamamlandıktan sonra tahsil eder. Alıcı bu durumda ödemeyi, kendisine
          sunulan hizmeti gördükten sonra yapar.
        </p>
        <p>
          İstisnaen, teklifte açıkça kararlaştırılmışsa etkinlik öncesinde ön ödeme (kapora)
          alınabilir. Aşağıdaki cayma ve iade hükümleri, ödemenin hangi aşamada yapıldığına göre
          farklı sonuç doğurur.
        </p>

        <h2 className="text-xl font-semibold">6. Cayma Hakkı</h2>
        <p>
          Mesafeli Sözleşmeler Yönetmeliği uyarınca tüketici, kural olarak on dört gün içinde
          gerekçe göstermeksizin cayma hakkına sahiptir. Ancak aynı Yönetmelik, cayma hakkı süresi
          sona ermeden tüketicinin onayıyla ifasına başlanan hizmetleri bu hakkın istisnaları
          arasında saymaktadır.
        </p>
        <p>
          Ödemenin kurulum tamamlandıktan sonra alındığı hâllerde hizmet, ödeme anında Alıcının
          bilgisi ve onayıyla ifa edilmiş durumdadır. Bu nedenle bu işlemlerde cayma hakkı doğmaz.
        </p>
        <p>
          Etkinlik öncesinde ön ödeme alınan hâllerde ise, hizmet belirli bir tarihe bağlı olarak
          planlandığından ve ekipman ile ekip o tarih için bloke edildiğinden, Yönetmeliğin belirli
          bir tarihte yapılması gereken eğlence ve boş zamanın değerlendirilmesine yönelik
          hizmetlere ilişkin istisnası uygulanır.
        </p>
        <p>
          Bununla birlikte {COMPANY.brandName}, yasal zorunluluğu bulunmamasına rağmen ön ödeme
          alınan işlemlerde Alıcı lehine kademeli bir iade imkânı sunar. Ayrıntılar için{" "}
          <Link href="/iptal-ve-iade-kosullari" className="text-[#6d28d9] hover:underline">
            İptal ve İade Koşulları
          </Link>{" "}
          sayfasına bakınız.
        </p>

        <h2 className="text-xl font-semibold">7. İptal ve İade</h2>
        <p>
          Ödeme kurulum sonrasında alındığından, etkinlik öncesindeki iptallerde kural olarak
          tahsil edilmiş bir tutar bulunmaz ve iade söz konusu olmaz.
        </p>
        <p>
          <strong>Ön ödeme alınmış olan işlemlerde</strong>, Alıcının etkinliği iptal etmesi
          hâlinde, iptal talebinin Satıcıya yazılı olarak ulaştığı tarih esas alınarak aşağıdaki
          oranlar uygulanır:
        </p>
        <ul className="list-disc list-inside space-y-2">
          {REFUND_TIERS.map((tier) => (
            <li key={tier.window}>
              <strong>{tier.window}:</strong> {tier.rate} — {tier.detail}
            </li>
          ))}
        </ul>
        <p>
          İade tutarı, ödemenin yapıldığı karta iade edilir. Satıcı iadeyi en geç on dört gün
          içinde başlatır; tutarın kart hesabına yansıma süresi bankanıza bağlıdır.
        </p>

        <h2 className="text-xl font-semibold">8. Mücbir Sebep</h2>
        <p>
          Doğal afet, olumsuz hava koşulları, salgın, resmî makamlarca getirilen yasaklar, grev,
          seferberlik ve tarafların kontrolü dışındaki benzer hâller mücbir sebep sayılır. Mücbir
          sebep nedeniyle hizmetin ifa edilememesi hâlinde taraflar öncelikle etkinliği karşılıklı
          mutabakatla ileri bir tarihe erteler. Erteleme mümkün değilse, Satıcının o ana kadar
          fiilen yaptığı ve belgelenebilir harcamalar düşüldükten sonra kalan tutar Alıcıya iade
          edilir.
        </p>

        <h2 className="text-xl font-semibold">9. Kişisel Verilerin Korunması</h2>
        <p>
          Ödeme sürecinde toplanan kişisel veriler, 6698 sayılı Kanun kapsamında işlenir. Ayrıntılı
          bilgi için{" "}
          <Link href="/kvkk" className="text-[#6d28d9] hover:underline">
            KVKK Aydınlatma Metni
          </Link>{" "}
          ve{" "}
          <Link href="/gizlilik-politikasi" className="text-[#6d28d9] hover:underline">
            Gizlilik Politikası
          </Link>{" "}
          sayfalarımızı inceleyebilirsiniz.
        </p>

        <h2 className="text-xl font-semibold">10. Uyuşmazlıkların Çözümü</h2>
        <p>
          Alıcının tüketici sıfatını taşıdığı işlemlerde, uyuşmazlıklar için ilgili yıl için
          belirlenen parasal sınırlara göre Tüketici Hakem Heyetleri veya Tüketici Mahkemeleri
          yetkilidir. Alıcının tacir veya tüzel kişi olduğu ticari işlemlerde ise İstanbul
          Mahkemeleri ve İcra Daireleri yetkilidir.
        </p>

        <h2 className="text-xl font-semibold">11. Yürürlük</h2>
        <p>
          Alıcı, ödeme sayfasındaki onay kutusunu işaretleyip ödemeyi tamamladığında bu sözleşmenin
          tüm koşullarını okuduğunu ve kabul ettiğini beyan etmiş sayılır. Sözleşme, ödemenin
          tamamlandığı anda yürürlüğe girer.
        </p>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">Sorularınız için</h2>
          <p className="mt-1 text-sm">
            <a className="text-[#6d28d9] hover:underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{" "}
            ·{" "}
            <a className="text-[#6d28d9] hover:underline" href={`tel:${COMPANY.phoneHref}`}>
              {COMPANY.phone}
            </a>{" "}
            ·{" "}
            <Link href="/iletisim" className="text-[#6d28d9] hover:underline">
              İletişim sayfası
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
