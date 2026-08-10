import Image from "next/image";
import Link from "next/link";

const CARD_LOGOS = [
  { src: "/img/odeme/visa-logo.svg", alt: "Visa", width: 32, height: 32 },
  {
    src: "/img/odeme/mastercard-logo.svg",
    alt: "Mastercard",
    width: 32,
    height: 32,
  },
  { src: "/img/odeme/troy-logo.svg", alt: "TROY", width: 60, height: 28 },
];

export default function ShowCallPayment() {
  return (
    <section
      id="odeme-secenekleri"
      aria-labelledby="show-call-payment-title"
      className="scroll-mt-20 border-y border-[#171717] bg-[#eeeae1] px-4 py-10 text-[#111214] sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)_auto] md:items-center">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#6757dd]">
            Finans / Güvenli ödeme
          </p>
          <h2
            id="show-call-payment-title"
            className="mt-2 font-display text-3xl font-extrabold uppercase leading-none text-[#111214] sm:text-4xl"
          >
            Kartla taksit seçeneği
          </h2>
        </div>

        <p className="max-w-2xl text-sm leading-6 text-[#4f4d48] md:text-base">
          Onaylanan teklif tutarını banka havalesi dışında kredi veya banka
          kartınızla, uygun olduğunda taksitli ve 3D Secure korumalı olarak
          ödeyebilirsiniz.
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-4 md:justify-end">
          <ul className="flex items-center gap-4" aria-label="Kabul edilen kart şemaları">
            {CARD_LOGOS.map((logo) => (
              <li key={logo.alt} className="flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                />
              </li>
            ))}
          </ul>
          <Link
            href="/odeme"
            className="inline-flex min-h-11 items-center border-b-2 border-[#ff5a1f] text-xs font-extrabold uppercase tracking-[0.12em] text-[#111214] transition-colors hover:text-[#c73e0b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a1f]"
          >
            Ödeme seçenekleri →
          </Link>
        </div>
      </div>
    </section>
  );
}
