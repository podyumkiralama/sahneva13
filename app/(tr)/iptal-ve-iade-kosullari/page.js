// app/(tr)/iptal-ve-iade-kosullari/page.js
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { COMPANY, COMPANY_INFO_COMPLETE, REFUND_TIERS } from "@/lib/legal/companyInfo";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "İptal ve İade Koşulları | Sahneva",
  description:
    "Sahneva etkinlik prodüksiyon hizmetlerinde iptal ve iade koşulları: kademeli iade oranları, iade süreci, mücbir sebep ve erteleme kuralları.",
  alternates: { canonical: `${SITE_URL}/iptal-ve-iade-kosullari` },
  robots: { index: COMPANY_INFO_COMPLETE, follow: true },
};

export default function IptalVeIadeKosullariPage() {
  const updatedAt = "29 Temmuz 2026";
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Ana Sayfa", url: `${baseUrl}/` },
    { name: "İptal ve İade Koşulları", url: `${baseUrl}/iptal-ve-iade-kosullari` },
  ];

  return (
    <div className="container max-w-3xl mx-auto px-4 pb-10 pt-24 md:pb-14 md:pt-28">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">İptal ve İade Koşulları</h1>
        <p className="text-sm text-neutral-600 mt-1">Son güncelleme: {updatedAt}</p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-7">
        <h2 className="text-xl font-semibold">1. Ödemeyi Ne Zaman Alıyoruz?</h2>
        <p>
          Kural olarak ödemeyi <strong>kurulum tamamlandıktan sonra</strong> alıyoruz. Yani
          ödemeyi, size sunulan hizmeti gördükten sonra yapıyorsunuz.
        </p>
        <p>
          Bunun pratik sonucu şu: etkinlik öncesinde işten vazgeçerseniz tahsil edilmiş bir tutar
          olmadığı için iade de söz konusu olmaz. Yalnızca bize haber vermeniz yeterlidir.
        </p>
        <p>
          Teklifte açıkça kararlaştırıldığı hâllerde etkinlik öncesinde ön ödeme (kapora) alırız.
          Aşağıdaki kademeli oranlar <strong>yalnızca bu hâllerde</strong> uygulanır.
        </p>

        <h2 className="text-xl font-semibold">2. Ön Ödeme Alınan İşlemlerde İade Oranları</h2>
        <p>
          Etkinlik prodüksiyonu tarihe bağlı bir iştir. Bir tarih için sözleşme yapıldığında
          ekipman o tarihte başka bir işe verilemez, ekip ve araç planlaması buna göre kurulur. Bu
          nedenle ön ödeme alınmış işlerde iade, etkinliğe kalan süreye göre kademelidir. İptal
          talebinin tarafımıza <strong>yazılı olarak</strong> (e-posta) ulaştığı tarih esas alınır:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-left">
                <th className="px-4 py-3 font-semibold">İptal zamanı</th>
                <th className="px-4 py-3 font-semibold">İade oranı</th>
              </tr>
            </thead>
            <tbody>
              {REFUND_TIERS.map((tier) => (
                <tr key={tier.window} className="border-t">
                  <td className="px-4 py-3">
                    {tier.window}
                    <span className="block text-neutral-600">{tier.detail}</span>
                  </td>
                  <td className="px-4 py-3 font-semibold whitespace-nowrap">{tier.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold">3. İade Nasıl Talep Edilir?</h2>
        <p>
          İptal talebinizi{" "}
          <a className="text-[#6d28d9] hover:underline" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>{" "}
          adresine gönderin. Talebinizde etkinlik tarihini, teklif/referans numaranızı ve ödeme
          sırasında kullandığınız ad-soyad ile e-posta adresini belirtmeniz süreci hızlandırır.
        </p>
        <p>
          Talebinizi aldığımızı en geç iki iş günü içinde yazılı olarak teyit ederiz. İade tutarı,
          ödemenin yapıldığı karta iade edilir; farklı bir hesaba aktarım yapılmaz.
        </p>

        <h2 className="text-xl font-semibold">4. İade Süresi</h2>
        <p>
          İade işlemini en geç on dört gün içinde başlatırız. Tutarın kart hesabınıza yansıması
          bankanızın işlem süresine bağlıdır ve genellikle birkaç iş günü sürer. Bu süre
          bankanızın inisiyatifindedir, {COMPANY.brandName} bu aşamada süreci hızlandıramaz.
        </p>

        <h2 className="text-xl font-semibold">5. Etkinliğin Ertelenmesi</h2>
        <p>
          İptal yerine erteleme tercih ederseniz, yeni tarihte ekipman ve ekip müsaitliği olması
          koşuluyla ödediğiniz tutarı iade kesintisi uygulamadan yeni tarihe aktarırız. Erteleme
          talebini mümkün olan en erken zamanda iletmeniz, müsaitlik ihtimalini artırır.
        </p>

        <h2 className="text-xl font-semibold">6. Mücbir Sebep</h2>
        <p>
          Doğal afet, etkinliği fiilen imkânsız kılan olumsuz hava koşulları, salgın, resmî
          makamlarca getirilen yasaklar ve tarafların kontrolü dışındaki benzer hâllerde yukarıdaki
          kademeli oranlar uygulanmaz. Bu durumda öncelikle etkinliği karşılıklı mutabakatla
          erteleriz. Erteleme mümkün değilse, o ana kadar fiilen yapılmış ve belgelenebilir
          harcamalar düşüldükten sonra kalan tutar iade edilir.
        </p>

        <h2 className="text-xl font-semibold">7. Sahneva Kaynaklı İptal</h2>
        <p>
          İptalin {COMPANY.brandName} kaynaklı olduğu hâllerde ödediğiniz tutarın tamamı, hiçbir
          kesinti yapılmaksızın iade edilir. Bu durumda etkinliğin kalan süresine bakılmaz.
        </p>

        <h2 className="text-xl font-semibold">8. Eksik veya Ayıplı Hizmet</h2>
        <p>
          Teklifte belirtilen ekipman veya hizmetin eksik ya da ayıplı sağlandığını düşünüyorsanız,
          durumu etkinlik sırasında veya en geç etkinliği izleyen üç gün içinde yazılı olarak
          bildirin. Bildiriminizi inceleyip eksik kalan kısmın bedelini iade eder veya bir sonraki
          hizmette mahsup ederiz.
        </p>

        <p className="text-sm text-neutral-600">
          Bu sayfa,{" "}
          <Link href="/mesafeli-satis-sozlesmesi" className="text-[#6d28d9] hover:underline">
            Mesafeli Satış Sözleşmesi
          </Link>{" "}
          ile birlikte uygulanır. İki metin arasında çelişki bulunması hâlinde Alıcı lehine olan
          hüküm geçerlidir.
        </p>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">İletişim</h2>
          <p className="mt-1 text-sm">
            {COMPANY.legalName}
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
