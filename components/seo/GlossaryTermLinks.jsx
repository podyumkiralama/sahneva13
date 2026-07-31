import Link from "next/link";

import { GLOSSARY_TERMS, getServiceGlossaryTerms } from "@/lib/glossary";

/**
 * Hizmet sayfalarindan /sozluk'e geri baglanti blogu.
 *
 * Sozluk terimleri hizmet sayfalarina baglaniyor, ama ters yon yoktu; konusal
 * baglanti tek yonlu kaliyordu. Bu blok halkayi kapatir.
 *
 * Bilincli olarak yalnizca terim adi ve varsa bir alternatif adlandirma
 * gosterilir, tanim metni tekrarlanmaz: ayni tanim cumlesini hem /sozluk'te hem
 * hizmet sayfasinda basmak "X nedir" sorgularinda iki sayfayi birbirine rakip
 * yapardi. Kullanici tanimi gormek icin sozluge gider.
 *
 * @param {object} props
 * @param {string} props.servicePath  SERVICE_GLOSSARY_TERMS icindeki anahtar, or. "/cadir-kiralama"
 * @param {string} props.title        Blok basligi
 * @param {string} [props.description] Basligin altindaki aciklama cumlesi
 */
export default function GlossaryTermLinks({ servicePath, title, description }) {
  const terms = getServiceGlossaryTerms(servicePath);
  if (terms.length === 0) return null;

  const headingId = `sozluk-terimleri-${servicePath.replace(/\//g, "")}`;

  return (
    <section
      aria-labelledby={headingId}
      className="[content-visibility:auto] [contain-intrinsic-size:auto_420px] bg-white px-4 py-12"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/60 p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-widest text-blue-700">
          Teknik sözlük
        </p>
        <h2
          id={headingId}
          className="mt-3 text-2xl font-black leading-tight text-slate-950 md:text-3xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">{description}</p>
        ) : null}

        <ul className="mt-6 flex flex-wrap gap-2">
          {terms.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/sozluk#${entry.slug}`}
                className="inline-flex min-h-[40px] items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {entry.term}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6">
          <Link
            href="/sozluk"
            className="inline-flex min-h-[44px] items-center font-black text-blue-700 underline underline-offset-4 hover:text-blue-900"
          >
            Tüm terimleri görün ({GLOSSARY_TERMS.length} terim)
          </Link>
        </p>
      </div>
    </section>
  );
}
