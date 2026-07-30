import Image from "next/image";
import Link from "next/link";

// Kart şeması logoları: TROY resmi kimlik paketinden (troyodeme.com, BKM),
// Visa/Mastercard simple-icons'tan (CC0). Kaynaklar: docs/paytr-entegrasyon.md.
// Visa/Mastercard (simple-icons) 24x24 kare viewBox ile geliyor, kare kutuda
// kullanılır. TROY'un resmi logosu kendi (298x137) oranında.
const CARD_LOGOS = [
  { src: "/img/odeme/visa-logo.svg", alt: "Visa", width: 32, height: 32 },
  { src: "/img/odeme/mastercard-logo.svg", alt: "Mastercard", width: 32, height: 32 },
  { src: "/img/odeme/troy-logo.svg", alt: "TROY", width: 60, height: 28 },
];

// Ödeme yöntemi esnekliğini anlatan kısa bir güven notu — servis sayfalarının
// ve ana sayfanın kapanışına yakın kullanılır. Bilinçli olarak "teklifinizde
// anlaştığımız tutarı" diyerek önceden bir teklif varlığını varsayar; fiyatı
// ziyaretçinin kendi hesaplayıp doğrudan ödemeye gitmesini teşvik etmez.
export default function PaymentOptionsNote() {
  return (
    <section className="bg-white px-4 py-10" aria-labelledby="odeme-secenekleri-baslik">
      <div className="mx-auto max-w-4xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center md:p-8">
        <h2 id="odeme-secenekleri-baslik" className="text-lg font-black text-neutral-900 md:text-xl">
          Kredi Kartı ile Taksitli Ödeme İmkanı
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
          Teklifinizde anlaştığımız tutarı banka havalesi dışında kredi veya banka kartınızla,
          isterseniz taksitli olarak da ödeyebilirsiniz. Ödeme, 3D Secure korumalı güvenli
          formumuz üzerinden alınır.
        </p>

        <ul className="mt-5 flex flex-wrap items-center justify-center gap-6" aria-label="Kabul edilen kart şemaları">
          {CARD_LOGOS.map((logo) => (
            <li key={logo.alt} className="flex items-center opacity-80">
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} unoptimized />
            </li>
          ))}
        </ul>

        <Link
          href="/odeme"
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
        >
          Ödeme Seçenekleri →
        </Link>
      </div>
    </section>
  );
}
