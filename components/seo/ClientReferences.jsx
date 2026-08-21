import Link from "next/link";

import { CLIENT_REFERENCES } from "@/lib/clientReferences";

/**
 * Adlandirilmis kurum referanslari blogu.
 *
 * B2B'de karar verici yildiz puanina degil "kimlerle calismis" sorusuna bakar.
 * Her satir, sitede zaten yayimlanmis bir proje sayfasina veya vaka yazisina
 * baglanir; iddia degil, kaynak gosterir.
 *
 * Bilincli olarak logo yerine METIN kullanildi: kurum logolarini izinsiz
 * basmak marka kullanim haklari acisindan risklidir, kurum adini isin
 * kaynagiyla birlikte yazmak degildir.
 */
export default function ClientReferences({
  title = "Birlikte çalıştığımız kurumlar",
  description = "Aşağıdaki işlerin her biri, sitedeki proje sayfası veya saha kaydıyla birlikte yayımlanmıştır.",
}) {
  if (CLIENT_REFERENCES.length === 0) return null;

  return (
    <section
      aria-labelledby="kurum-referanslari-baslik"
      className="[content-visibility:auto] [contain-intrinsic-size:auto_640px] bg-white px-4 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-widest text-violet-700">Referanslar</p>
        <h2
          id="kurum-referanslari-baslik"
          className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{description}</p>

        <ul className="mt-8 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENT_REFERENCES.map((entry) => (
            <li key={`${entry.org}-${entry.work}`} className="bg-white">
              <Link
                href={entry.href}
                className="flex h-full flex-col justify-between gap-3 p-6 transition hover:bg-violet-50/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-violet-600"
              >
                <span className="text-lg font-black leading-snug text-slate-950">{entry.org}</span>
                <span className="text-sm leading-6 text-slate-600">{entry.work}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
