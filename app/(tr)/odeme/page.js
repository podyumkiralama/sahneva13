// app/(tr)/odeme/page.js
import Link from "next/link";
import PaytrCheckout from "@/components/payments/PaytrCheckout.client";
import { formatTry, getPaytrConfig } from "@/lib/payments/paytr";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Online Ödeme | Sahneva",
  description:
    "Sahneva ile mutabık kalınan hizmet bedelini kredi veya banka kartıyla güvenle ödeyin. Ödemeler PayTR altyapısı ve 3D Secure ile alınır.",
  alternates: { canonical: `${SITE_URL}/odeme` },
  // Ödeme sayfası bir arama sonucu hedefi değil; yalnızca teklif verilen
  // müşterilere link olarak iletilir.
  robots: { index: false, follow: false, nocache: true },
};

// Üst menü fixed ve 65px yüksekliğinde; sayfa başlığının altında kalmaması için
// içerik kabı pt-24 / md:pt-28 ile başlar.
export default function OdemePage() {
  const config = getPaytrConfig();

  return (
    <div className="container mx-auto max-w-3xl px-4 pb-10 pt-24 md:pb-14 md:pt-28">
      <header className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Online Ödeme</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Teklifimizde mutabık kaldığımız tutarı aşağıdaki formu doldurarak kredi veya banka
          kartınızla ödeyebilirsiniz. Kart bilgileriniz Sahneva sunucularına hiçbir aşamada
          ulaşmaz; ödeme, lisanslı ödeme kuruluşu PayTR&apos;ın 3D Secure korumalı formu üzerinden
          alınır.
        </p>
      </header>

      {config.testMode ? (
        <div
          role="status"
          className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm font-semibold text-amber-900"
        >
          Ödeme sistemi şu anda <strong>test modunda</strong>. Bu sayfadan yapılan işlemlerde
          karttan gerçek tahsilat yapılmaz.
        </div>
      ) : null}

      <PaytrCheckout
        minAmount={formatTry(config.minAmountKurus)}
        maxAmount={formatTry(config.maxAmountKurus)}
        testMode={config.testMode}
      />

      <section className="mt-10 space-y-3 border-t border-neutral-200 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Ödeme hakkında
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Tutar, tarafınıza iletilen teklifte yer alan bedeldir. Emin değilseniz ödeme yapmadan
            önce <Link className="underline underline-offset-4" href="/iletisim">bize ulaşın</Link>.
          </li>
          <li>
            Ödeme tamamlandığında ekranda gördüğünüz bilgi mesajı bilgilendirme amaçlıdır; işlemin
            kesin sonucu bankanızdan ve tarafımıza ulaşan ödeme bildirimiyle teyit edilir.
          </li>
          <li>
            Ödeme koşulları, cayma hakkı ve iade oranları için{" "}
            <Link className="underline underline-offset-4" href="/mesafeli-satis-sozlesmesi">
              Mesafeli Satış Sözleşmesi
            </Link>{" "}
            ve{" "}
            <Link className="underline underline-offset-4" href="/iptal-ve-iade-kosullari">
              İptal ve İade Koşulları
            </Link>{" "}
            sayfalarını inceleyin.
          </li>
          <li>
            Kişisel verilerinizin işlenmesi hakkında ayrıntılı bilgi için{" "}
            <Link className="underline underline-offset-4" href="/kvkk">
              KVKK Aydınlatma Metni
            </Link>{" "}
            ve{" "}
            <Link className="underline underline-offset-4" href="/gizlilik-politikasi">
              Gizlilik Politikası
            </Link>{" "}
            sayfalarımızı inceleyebilirsiniz.
          </li>
        </ul>
      </section>
    </div>
  );
}
