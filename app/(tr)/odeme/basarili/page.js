// app/(tr)/odeme/basarili/page.js
// PayTR merchant_ok_url hedefi. Bilgilendirme amaçlıdır: ödemenin kesin
// doğrulaması /api/paytr/callback üzerinden gelen imzalı bildirimle yapılır.
import Link from "next/link";
import FrameBreakout from "@/components/payments/FrameBreakout.client";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "Ödemeniz Alındı | Sahneva",
  description: "Sahneva online ödeme işleminiz tamamlandı.",
  alternates: { canonical: `${SITE_URL}/odeme/basarili` },
  robots: { index: false, follow: false, nocache: true },
};

export default function OdemeBasariliPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-16 text-center">
      <FrameBreakout />
      <h1 className="text-2xl font-bold md:text-3xl">Ödemeniz alındı</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Teşekkür ederiz. Ödeme işleminiz bankanız tarafından onaylandı ve tarafımıza iletildi.
        İşlem dekontu, formda belirttiğiniz e-posta adresine gönderilir.
      </p>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Bir sorun olduğunu düşünüyorsanız veya dekont ulaşmadıysa lütfen bizimle iletişime geçin.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/iletisim"
          className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
        >
          İletişime geç
        </Link>
        <Link
          href="/"
          className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}
