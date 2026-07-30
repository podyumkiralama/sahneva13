import Link from "next/link";

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
        <Link
          href="/odeme"
          className="mt-5 inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-sm font-bold text-neutral-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
        >
          Ödeme Seçenekleri →
        </Link>
      </div>
    </section>
  );
}
