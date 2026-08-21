import Link from "next/link";

import { GLOSSARY_TERMS, getServiceGlossaryTerms } from "@/lib/glossary";
import { EN_GLOSSARY_TERMS, getEnServiceGlossaryTerms } from "@/lib/enGlossary";

/**
 * Hizmet sayfalarindan sozluge geri baglanti blogu.
 *
 * Sozluk terimleri hizmet sayfalarina baglaniyor, ama ters yon yoktu; konusal
 * baglanti tek yonlu kaliyordu. Bu blok halkayi kapatir.
 *
 * Bilincli olarak yalnizca terim adi ve varsa bir alternatif adlandirma
 * gosterilir, tanim metni tekrarlanmaz: ayni tanim cumlesini hem sozlukte hem
 * hizmet sayfasinda basmak "X nedir" sorgularinda iki sayfayi birbirine rakip
 * yapardi. Kullanici tanimi gormek icin sozluge gider.
 *
 * @param {object} props
 * @param {string} props.servicePath  Locale'in terim haritasindaki anahtar,
 *                                    or. "/cadir-kiralama" ya da "/en/tent-rental"
 * @param {string} props.title        Blok basligi
 * @param {string} [props.description] Basligin altindaki aciklama cumlesi
 * @param {"tr"|"en"} [props.locale]  Hangi sozluk setinin kullanilacagi
 */
const LOCALES = {
  tr: {
    getTerms: getServiceGlossaryTerms,
    glossaryHref: "/sozluk",
    totalCount: GLOSSARY_TERMS.length,
    eyebrow: "Teknik sözlük",
    allTerms: (count) => `Tüm terimleri görün (${count} terim)`,
  },
  en: {
    getTerms: getEnServiceGlossaryTerms,
    glossaryHref: "/en/glossary",
    totalCount: EN_GLOSSARY_TERMS.length,
    eyebrow: "Technical glossary",
    allTerms: (count) => `See all terms (${count} terms)`,
  },
};

export default function GlossaryTermLinks({
  servicePath,
  title,
  description,
  locale = "tr",
}) {
  const strings = LOCALES[locale] ?? LOCALES.tr;
  const terms = strings.getTerms(servicePath);
  if (terms.length === 0) return null;

  const headingId = `glossary-terms-${servicePath.replace(/\//g, "-").replace(/^-/, "")}`;

  return (
    <section
      aria-labelledby={headingId}
      className="[content-visibility:auto] [contain-intrinsic-size:auto_420px] bg-white px-4 py-12"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-violet-50/60 p-6 shadow-sm md:p-8">
        <p className="text-sm font-black uppercase tracking-widest text-violet-700">
          {strings.eyebrow}
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
                href={`${strings.glossaryHref}#${entry.slug}`}
                className="inline-flex min-h-[40px] items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-800 transition hover:border-violet-500 hover:text-violet-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
              >
                {entry.term}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6">
          <Link
            href={strings.glossaryHref}
            className="inline-flex min-h-[44px] items-center font-black text-violet-700 underline underline-offset-4 hover:text-violet-900"
          >
            {strings.allTerms(strings.totalCount)}
          </Link>
        </p>
      </div>
    </section>
  );
}
