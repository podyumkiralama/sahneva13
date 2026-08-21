import Link from "next/link";

const COPY = {
  tr: {
    servicesTitle: "İlgili Hizmetler",
    regionalTitle: "Bölgesel Kiralama",
    regionalDesc:
      "Etkinlik lokasyonunuza göre hızlı planlama ve bölgesel ekip organizasyonu için:",
    regionalHref: "/bolgesel-kiralama",
    regionalCta: "Bölgesel Kiralama sayfasına git →",
  },
  en: {
    servicesTitle: "Related Services",
    regionalTitle: "Regional Rental",
    regionalDesc:
      "For fast planning and regional crew coordination based on your event location:",
    regionalHref: "/en/regional-rental",
    regionalCta: "Go to the Regional Rental page →",
  },
};

export default function BlogRelatedLinks({ services, locale = "tr" }) {
  const copy = COPY[locale] ?? COPY.tr;

  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-gray-700">
            {copy.servicesTitle}
          </h3>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-violet-700 hover:text-violet-900"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-6 md:border-l md:border-gray-200">
          <h3 className="text-sm font-black uppercase tracking-wide text-gray-700">
            {copy.regionalTitle}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {copy.regionalDesc}
          </p>
          <Link
            href={copy.regionalHref}
            className="mt-3 inline-flex text-sm font-semibold text-violet-700 hover:text-violet-900"
          >
            {copy.regionalCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
