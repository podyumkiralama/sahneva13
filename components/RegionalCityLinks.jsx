import Link from "next/link";
import { PROVINCES_COUNT } from "@/lib/stats";

// Onceden burada 12 sehir sayfasina link veren bir cip blogu vardi. Sehir
// sayfalari 7 sablondan uretildigi ve hizmet sayfalariyla ayni sorgularda
// yaristigi icin kaldirildi; sehir adlari duz metin olarak kaliyor ki
// hizmet sayfasi yerel alakasini kaybetmesin.
const COVERAGE_CITIES = [
  "Ankara",
  "İzmir",
  "Antalya",
  "Bursa",
  "Kocaeli",
  "Sakarya",
  "Tekirdağ",
  "Adana",
  "Mersin",
  "Konya",
  "Kayseri",
  "Gaziantep",
  "Samsun",
  "Trabzon",
];

export default function RegionalCityLinks({ service = "etkinlik ekipmanı kiralama" }) {
  const serviceLabel = service.charAt(0).toUpperCase() + service.slice(1);

  return (
    <section
      className="content-visibility-auto [contain-intrinsic-size:auto_420px] py-16 bg-white"
      aria-labelledby="bolgesel-kiralama-baslik"
    >
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2
          id="bolgesel-kiralama-baslik"
          className="mb-4 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl"
        >
          Türkiye Genelinde <span className="text-blue-700">Bölgesel Kiralama</span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-700">
          {serviceLabel} hizmetini {PROVINCES_COUNT} ilde planlıyoruz. {COVERAGE_CITIES.join(", ")} ve
          çevre illerde kurulum, kendi ekibimiz ve lojistik planımızla yürütülür;
          şehir dışı nakliye maliyeti ilk teklifte net olarak paylaşılır.
        </p>

        <p className="mt-5 text-base leading-relaxed text-gray-600">
          Mesafe, kurulum penceresi, ekip sayısı ve zemin koşulları şehre göre değişir.
          Bu farkların projeyi nasıl etkilediğini bölgesel kiralama sayfasında topladık.
        </p>

        <Link
          href="/bolgesel-kiralama"
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-blue-700 px-7 py-3 font-black text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          Bölgesel kurulum ve lojistik planı
        </Link>
      </div>
    </section>
  );
}
