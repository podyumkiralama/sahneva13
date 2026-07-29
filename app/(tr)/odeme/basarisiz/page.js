// app/(tr)/odeme/basarisiz/page.js
// PayTR merchant_fail_url hedefi.
import Link from "next/link";
import FrameBreakout from "@/components/payments/FrameBreakout.client";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "Ödeme Tamamlanamadı | Sahneva",
  description: "Sahneva online ödeme işlemi tamamlanamadı.",
  alternates: { canonical: `${SITE_URL}/odeme/basarisiz` },
  robots: { index: false, follow: false, nocache: true },
};

export default function OdemeBasarisizPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 pb-16 pt-28 text-center md:pt-32">
      <FrameBreakout />
      <h1 className="text-2xl font-bold md:text-3xl">Ödeme tamamlanamadı</h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        İşleminiz bankanız tarafından onaylanmadı ve kartınızdan tahsilat yapılmadı. Kart
        bilgilerinizi, limitinizi ve karta tanımlı 3D Secure ayarını kontrol edip yeniden
        deneyebilirsiniz.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/odeme"
          className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900"
        >
          Tekrar dene
        </Link>
        <Link
          href="/iletisim"
          className="rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
        >
          Bize ulaşın
        </Link>
      </div>
    </div>
  );
}
