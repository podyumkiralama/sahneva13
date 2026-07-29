// app/(tr)/teslimat-ve-ifa-kosullari/page.js
// Sahneva fiziksel ürün satmaz; "teslimat" burada ekipmanın etkinlik alanına
// getirilip kurulması anlamına gelir. Ödeme kuruluşu denetimi ve mesafeli
// satış mevzuatı bu bilginin sitede erişilebilir olmasını gerektirir.
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { COMPANY, COMPANY_INFO_COMPLETE } from "@/lib/legal/companyInfo";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "Teslimat ve İfa Koşulları | Sahneva",
  description:
    "Sahneva etkinlik prodüksiyon hizmetlerinde teslimat ve ifa koşulları: kurulum ve söküm süreleri, hizmet bölgesi, nakliye bedeli ve müşteri yükümlülükleri.",
  alternates: { canonical: `${SITE_URL}/teslimat-ve-ifa-kosullari` },
  robots: { index: COMPANY_INFO_COMPLETE, follow: true },
};

export default function TeslimatVeIfaKosullariPage() {
  const updatedAt = "29 Temmuz 2026";
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "Teslimat ve İfa Koşulları", url: `${baseUrl}/teslimat-ve-ifa-kosullari` },
  ];

  return (
    <div className="container max-w-3xl mx-auto px-4 pb-10 pt-24 md:pb-14 md:pt-28">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Teslimat ve İfa Koşulları</h1>
        <p className="text-sm text-neutral-600 mt-1">Son güncelleme: {updatedAt}</p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-7">
        <h2 className="text-xl font-semibold">1. Kargo Gönderimi Yapılmaz</h2>
        <p>
          {COMPANY.brandName} fiziksel ürün satışı yapmaz; sahne, podyum, LED ekran, ses-ışık
          sistemleri, truss, çadır ve masa-sandalye gibi ekipmanları <strong>kiralar</strong> ve
          kurulumuyla birlikte hizmet olarak sunar.
        </p>
        <p>
          Bu nedenle kargo veya posta ile gönderim söz konusu değildir. &ldquo;Teslimat&rdquo;,
          ekipmanın etkinlik alanına {COMPANY.brandName} ekipleri tarafından getirilmesi, kurulması
          ve etkinlik sonunda sökülmesi anlamına gelir. Ayrıca bir kargo ücreti alınmaz.
        </p>

        <h2 className="text-xl font-semibold">2. Hizmetin Verildiği Yer ve Zaman</h2>
        <p>
          Hizmet, teklifte belirtilen etkinlik adresinde ve tarihte ifa edilir. Kurulum genellikle
          etkinlik saatinden önce tamamlanır; kurulum ve söküm için gereken süre ekipmanın
          büyüklüğüne göre değişir ve teklifte ayrıca belirtilir.
        </p>
        <p>
          Kurulum ve söküm saatleri, mekânın çalışma düzenine ve etkinlik programına göre birlikte
          planlanır. Alanın {COMPANY.brandName} ekiplerine kararlaştırılan saatte açık ve hazır
          olması gerekir.
        </p>

        <h2 className="text-xl font-semibold">3. Hizmet Bölgesi ve Nakliye</h2>
        <p>
          Türkiye genelinde hizmet veriyoruz. Nakliye, ekip konaklaması ve şehirler arası lojistik
          bedelleri teklifte ayrı kalem olarak gösterilir; teklifte yer alan toplam tutar dışında
          sonradan nakliye ücreti talep edilmez.
        </p>

        <h2 className="text-xl font-semibold">4. Müşterinin Yükümlülükleri</h2>
        <p>
          Hizmetin zamanında ifa edilebilmesi için, teklifte aksi kararlaştırılmadıkça aşağıdakiler
          müşterinin sorumluluğundadır:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Etkinlik alanına araç ve ekip erişiminin sağlanması</li>
          <li>Kurulum için yeterli ve uygun elektrik altyapısı</li>
          <li>Ekipmanın kurulacağı zeminin taşıyıcı ve uygun olması</li>
          <li>Belediye, site yönetimi veya mekân işletmecisinden gerekli izinlerin alınmış olması</li>
        </ul>
        <p>
          Bu koşulların sağlanmaması nedeniyle kurulumun gecikmesi veya yapılamaması hâlinde
          doğacak sonuçlardan {COMPANY.brandName} sorumlu tutulamaz.
        </p>

        <h2 className="text-xl font-semibold">5. Gecikme ve Aksaklık</h2>
        <p>
          {COMPANY.brandName} kaynaklı bir gecikme veya eksik kurulum söz konusu olursa, öncelikle
          yerinde çözüm üretilir. Çözüm mümkün değilse eksik kalan hizmetin bedeli iade edilir.
          Ayrıntılar için{" "}
          <Link href="/iptal-ve-iade-kosullari" className="text-[#6d28d9] hover:underline">
            İptal ve İade Koşulları
          </Link>{" "}
          sayfasına bakınız.
        </p>
        <p>
          Trafik, olumsuz hava koşulları, resmî makam kararları ve benzeri, tarafların kontrolü
          dışındaki hâller için{" "}
          <Link href="/mesafeli-satis-sozlesmesi" className="text-[#6d28d9] hover:underline">
            Mesafeli Satış Sözleşmesi
          </Link>{" "}
          içindeki mücbir sebep hükümleri uygulanır.
        </p>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">İletişim</h2>
          <p className="mt-1 text-sm">
            {COMPANY.legalName}
            <br />
            {COMPANY.address}
            <br />
            <a className="text-[#6d28d9] hover:underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{" "}
            ·{" "}
            <a className="text-[#6d28d9] hover:underline" href={`tel:${COMPANY.phoneHref}`}>
              {COMPANY.phone}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
