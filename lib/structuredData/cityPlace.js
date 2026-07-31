import { BASE_SITE_URL } from "@/lib/seo/schemaIds";

/**
 * Sehir sayfalari icin cozumlenebilir yer (Place) dugumleri.
 *
 * Onceki durumda areaServed yalnizca `{ "@type": "City", name }` idi: adi disinda
 * hicbir tanimlayicisi olmayan, arama motorunun mevcut bir varliga baglayamadigi
 * bir dugum. AdministrativeArea + PostalAddress(addressRegion/addressCountry) +
 * containedInPlace zinciri, "Turkiye'nin X ili" ifadesini makine tarafindan
 * okunabilir hale getirir.
 *
 * NOT: Koordinat (geo) yalnizca depoda dogrulanmis veri bulunan iller icin
 * yazilir. Kalan iller icin uydurma koordinat yazmak yanlis bir cografi sinyal
 * uretecegi icin geo alani bilerek bos birakilir; asagidaki haritayi genisletmek
 * yeterlidir.
 */

export const COUNTRY_ID = `${BASE_SITE_URL}/#country-tr`;

export const COUNTRY_NODE = {
  "@type": "Country",
  "@id": COUNTRY_ID,
  name: "Türkiye",
  alternateName: "Turkey",
  identifier: "TR",
};

/** Kaynak: app/api/weather/route.js icindeki dogrulanmis koordinatlar. */
const CITY_COORDINATES = {
  istanbul: { lat: 41.0082, lon: 28.9784 },
  ankara: { lat: 39.9334, lon: 32.8597 },
  izmir: { lat: 38.4237, lon: 27.1428 },
  antalya: { lat: 36.8969, lon: 30.7133 },
  bursa: { lat: 40.1826, lon: 29.0665 },
  konya: { lat: 37.8746, lon: 32.4932 },
  gaziantep: { lat: 37.0662, lon: 37.3833 },
};

export const cityPlaceId = (slug) => `${BASE_SITE_URL}/#place-${slug}`;

/**
 * @param {{ name: string, slug: string }} city
 * @returns {object} AdministrativeArea dugumu
 */
export function buildCityPlaceNode(city) {
  const coordinates = CITY_COORDINATES[city.slug];

  return {
    "@type": "AdministrativeArea",
    "@id": cityPlaceId(city.slug),
    name: city.name,
    alternateName: `${city.name} ili`,
    address: {
      "@type": "PostalAddress",
      addressRegion: city.name,
      addressCountry: "TR",
    },
    containedInPlace: { "@id": COUNTRY_ID },
    ...(coordinates
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: coordinates.lat,
            longitude: coordinates.lon,
          },
        }
      : {}),
  };
}
