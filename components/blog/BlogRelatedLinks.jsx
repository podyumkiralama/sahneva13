import Link from "next/link";

export default function BlogRelatedLinks({ services }) {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-gray-700">
            İlgili Hizmetler
          </h3>
          <ul className="mt-3 space-y-2">
            {services.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="text-sm font-semibold text-blue-700 hover:text-blue-900"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-6 md:border-l md:border-gray-200">
          <h3 className="text-sm font-black uppercase tracking-wide text-gray-700">
            Bölgesel Kiralama
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Etkinlik lokasyonunuza göre hızlı planlama ve bölgesel ekip organizasyonu için:
          </p>
          <Link
            href="/bolgesel-kiralama"
            className="mt-3 inline-flex text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Bölgesel Kiralama sayfasına git →
          </Link>
        </div>
      </div>
    </section>
  );
}
