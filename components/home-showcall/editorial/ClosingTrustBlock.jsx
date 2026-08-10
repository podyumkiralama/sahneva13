import Link from "next/link";

const BRIEF_FIELDS = [
  ["01", "Tarih / Lokasyon", "Kurulum ve söküm için kullanılabilir zaman aralığı"],
  ["02", "Alan / Zemin", "Salon, açık alan, erişim ve taşıma koşulları"],
  ["03", "Teknik Kapsam", "Sahne, görüntü, ses, ışık, podyum ve geçici yapı ihtiyacı"],
];

export default function ClosingTrustBlock() {
  return (
    <section
      id="teklif-al"
      className="scroll-mt-24 bg-[#dedbd1] py-16 text-[#11110e] sm:py-20 lg:py-28"
      aria-labelledby="closing-trust-title"
    >
      <div className="container mx-auto">
        <div className="grid gap-8 border-t border-[#171713] pt-4 lg:grid-cols-12 lg:gap-6">
          <p className="m-0 text-[0.68rem] font-black uppercase tracking-[0.28em] text-[#65635b] lg:col-span-2">
            Sonraki kurulum / 03
          </p>
          <div className="lg:col-span-7">
            <h2
              id="closing-trust-title"
              className="m-0 max-w-4xl font-display text-[clamp(2.75rem,6.5vw,6.5rem)] font-extrabold uppercase leading-[0.87] tracking-[-0.05em] text-[#11110e]"
            >
              Takvimi değil,
              <br />
              riski de planlayalım.
            </h2>
          </div>
          <div className="flex flex-col items-start lg:col-span-3 lg:pt-2">
            <p className="m-0 max-w-md text-base font-medium leading-relaxed text-[#44423c]">
              Lokasyon, tarih ve teknik kapsamı paylaşın. Keşiften söküme kadar
              uygulanabilir bir operasyon planı çıkaralım.
            </p>
            <Link
              href="/iletisim"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-between gap-6 bg-[#f06a2b] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#11110e] no-underline hover:bg-[#d95b20] hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110e] sm:w-auto lg:w-full"
            >
              Projenizi konuşalım
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/sss"
              className="mt-4 inline-flex min-h-11 items-center border-b border-[#171713] text-sm font-bold text-[#11110e] no-underline hover:text-[#11110e] hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11110e]"
            >
              Sık sorulan sorular
            </Link>
          </div>
        </div>

        <p className="mt-12 border-t border-[#171713] pt-4 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#65635b] lg:mt-20">
          İlk görüşmede gerekenler
        </p>
        <dl className="m-0 mt-4 border-y border-[#171713] lg:grid lg:grid-cols-3 lg:divide-x lg:divide-[#171713]">
          {BRIEF_FIELDS.map(([index, title, description], itemIndex) => (
            <div
              key={index}
              className={`grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-2 py-5 lg:block lg:min-h-56 lg:px-6 lg:py-7 ${
                itemIndex < BRIEF_FIELDS.length - 1
                  ? "border-b border-[#171713] lg:border-b-0"
                  : ""
              }`}
            >
              <span className="text-xs font-black tracking-[0.18em] text-[#65635b]">
                {index}
              </span>
              <dt className="m-0 font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-[#11110e] lg:mt-12 lg:text-2xl">
                {title}
              </dt>
              <dd className="col-start-2 m-0 max-w-xs text-sm font-medium leading-relaxed text-[#55534c] lg:mt-3">
                {description}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 grid gap-3 text-xs font-bold uppercase tracking-[0.14em] text-[#65635b] sm:grid-cols-2 sm:items-center">
          <p className="m-0 text-inherit">
            Türkiye geneli / kurulum + teknik operasyon + söküm
          </p>
          <p className="m-0 text-inherit sm:text-right">
            Tek plan · Tek ekip · Tek muhatap
          </p>
        </div>

        <div className="mt-8 grid gap-4 border-t border-[#171713] pt-5 text-sm leading-6 text-[#55534c] md:grid-cols-[1fr_auto] md:items-center">
          <p className="m-0 text-inherit">
            Yurt dışından Türkiye&apos;ye gelen marka ve ajanslar için yerel saha,
            tedarik ve teknik ekip koordinasyonunu tek noktadan yürütüyoruz. {" "}
            <Link
              href="/turkiyede-etkinlik-cozum-ortagi"
              className="font-extrabold text-[#11110e] underline decoration-[#f06a2b] decoration-2 underline-offset-4 hover:text-[#8d3513]"
            >
              Türkiye&apos;de etkinlik çözüm ortağı yaklaşımımız
            </Link>
          </p>
          <a
            href="mailto:info@sahneva.com"
            className="inline-flex min-h-11 items-center font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#11110e] underline decoration-black/30 underline-offset-8 hover:text-[#8d3513]"
          >
            info@sahneva.com
          </a>
        </div>
      </div>
    </section>
  );
}
