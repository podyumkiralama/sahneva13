import Link from "next/link";

export default function ServiceBlogLinks({ title = "Bu konuya dair rehberler", links = [] }) {
  if (!links.length) return null;

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">
          İlgili blog yazılarından detaylı ipuçları ve güncel trendleri keşfedin.
        </p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-white"
              >
                <span aria-hidden="true" className="text-lg">
                  📘
                </span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
