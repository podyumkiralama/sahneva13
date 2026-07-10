import Link from "next/link";

import { getRegionalCity } from "@/lib/seo/regionalCities";

const FEATURED_CITY_SLUGS = [
  "ankara",
  "izmir",
  "antalya",
  "bursa",
  "kocaeli",
  "adana",
  "mersin",
  "kayseri",
  "konya",
  "gaziantep",
  "samsun",
  "trabzon",
];

export default function RegionalCityLinks({ service = "etkinlik ekipmanı kiralama" }) {
  const cities = FEATURED_CITY_SLUGS.map((slug) => getRegionalCity(slug)).filter(Boolean);

  return (
    <section
      className="content-visibility-auto [contain-intrinsic-size:auto_600px] py-16 bg-white"
      aria-labelledby="bolgesel-kiralama-baslik"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            id="bolgesel-kiralama-baslik"
            className="mb-4 text-balance text-3xl font-black leading-tight text-gray-900 sm:text-4xl"
          >
            Türkiye Genelinde <span className="text-blue-700">Bölgesel Kiralama</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {service.charAt(0).toUpperCase() + service.slice(1)} hizmetini şehir bazlı lojistik,
            kurulum süresi ve mekan şartlarına göre 81 ilde planlıyoruz.
          </p>
        </div>

        <nav aria-label="Bölgesel kiralama şehirleri">
          <ul className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/bolgesel-kiralama/${city.slug}`}
                  prefetch={false}
                  className="inline-flex min-h-[44px] items-center rounded-full border-2 border-gray-100 bg-white px-5 py-2 text-sm font-bold text-gray-800 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-700 focus-ring"
                  aria-label={`${city.name} etkinlik kiralama`}
                >
                  {city.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/bolgesel-kiralama"
                prefetch={false}
                className="inline-flex min-h-[44px] items-center rounded-full bg-blue-700 px-5 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-blue-800 focus-ring"
              >
                81 ilin tamamını görün →
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
