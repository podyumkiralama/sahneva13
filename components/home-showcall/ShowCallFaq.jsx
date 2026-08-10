import Link from "next/link";

const PHONE_HREF = "tel:+905453048671";
const WHATSAPP_HREF =
  "https://wa.me/905453048671?text=Merhaba%2C%20etkinli%C4%9Fim%20i%C3%A7in%20teknik%20ke%C5%9Fif%20ve%20teklif%20almak%20istiyorum.&utm_source=homepage&utm_medium=faq_cta&utm_campaign=show_call";

export default function ShowCallFaq({ items = [] }) {
  return (
    <section
      id="sss"
      aria-labelledby="show-call-faq-title"
      className="border-t border-white/15 bg-[#090a0c] px-4 py-20 text-[#f2efe8] sm:px-6 md:py-28 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#8b7cf6]">
            Saha notları / 05
          </p>
          <h2
            id="show-call-faq-title"
            className="mt-5 max-w-xl font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-[-0.025em] text-[#f2efe8] sm:text-6xl lg:text-7xl"
          >
            Tekliften söküme, açık cevaplar.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#aaa9a4] md:text-lg">
            Ölçü, zemin, enerji ve takvim bilgilerini başta netleştiririz. Böylece
            kurulum günü sürpriz değil, plan çalışır.
          </p>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 border-l-2 border-[#ff5a1f] pl-5 text-sm font-extrabold uppercase tracking-[0.08em]">
            <Link
              href="/iletisim"
              className="inline-flex min-h-11 items-center text-[#f2efe8] underline decoration-[#ff5a1f] decoration-2 underline-offset-8 transition-colors hover:text-[#ff8a61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a1f]"
            >
              Teknik keşif iste
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex min-h-11 items-center text-[#f2efe8] underline decoration-white/30 underline-offset-8 transition-colors hover:text-[#ff8a61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a1f]"
            >
              0545 304 86 71
            </a>
          </div>
        </div>

        <div className="border-b border-white/20">
          {items.map((item, index) => {
            const headingId = `show-call-faq-${item.slug}`;

            return (
              <details
                key={item.slug}
                open={index === 0}
                className="group border-t border-white/20"
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-start gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b7cf6] sm:gap-7 sm:py-7">
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 font-mono text-xs font-bold tracking-[0.18em] text-[#8b7cf6]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    id={headingId}
                    className="min-w-0 flex-1 text-lg font-extrabold leading-snug text-[#f2efe8] sm:text-2xl"
                  >
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="grid h-7 w-7 shrink-0 place-items-center text-2xl font-light leading-none text-[#ff5a1f] transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  >
                    +
                  </span>
                </summary>
                <p
                  aria-labelledby={headingId}
                  className="max-w-3xl pb-7 pl-10 pr-3 text-base leading-7 text-[#aaa9a4] sm:pb-9 sm:pl-[4.25rem] sm:text-lg"
                >
                  {item.answer}
                </p>
              </details>
            );
          })}

          <div className="border-t border-white/20 py-7">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Link
                href="/sss"
                className="inline-flex min-h-11 items-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#f2efe8] underline decoration-white/30 underline-offset-8 hover:text-[#ff8a61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a1f]"
              >
                Tüm soruları incele →
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex min-h-11 items-center font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#8b7cf6] underline decoration-[#8b7cf6]/50 underline-offset-8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8b7cf6]"
              >
                WhatsApp ile sor ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
