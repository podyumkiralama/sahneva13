import Link from "next/link";
import { BASE_SITE_URL } from "@/lib/seo/schemaIds";

const PAGE_URL = `${BASE_SITE_URL}/tesekkurler`;

export const metadata = {
  title: "Teşekkürler | Teklif Talebiniz Alındı",
  description:
    "Sahneva teklif talebiniz alındı. Ekibimiz etkinlik detaylarınızı inceleyerek en kısa sürede sizinle iletişime geçecek.",
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] bg-slate-950 px-4 py-20 text-white">
      <section className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Talebiniz alındı
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
          Teşekkürler, en kısa sürede dönüş yapacağız.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          Etkinlik bilgilerinizi ekibimize ilettiniz. Sahne, podyum, LED ekran,
          ses-ışık veya diğer prodüksiyon ihtiyaçlarınız için detayları
          inceleyip sizinle iletişime geçeceğiz.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-white/90"
          >
            Ana sayfaya dön
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Hizmetleri incele
          </Link>
        </div>
      </section>
    </main>
  );
}
