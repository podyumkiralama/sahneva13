import Link from "next/link";

const POPULAR_LINKS = [
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses & Işık Sistemleri" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  { href: "/projeler", label: "Projelerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFoundContent() {
  return (
    <section className="container mx-auto px-4 py-16 text-center md:py-24">
      <p
        aria-hidden="true"
        className="select-none bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-8xl font-extrabold leading-none text-transparent md:text-9xl"
      >
        404
      </p>

      <h1 className="mt-6 text-3xl font-bold text-white md:text-4xl">
        Sayfa bulunamadı
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">
        Aradığınız sayfa taşınmış, adı değişmiş veya hiç var olmamış olabilir.
        Aşağıdaki bağlantılardan devam edebilir ya da bize ulaşabilirsiniz.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-500 focus-ring"
        >
          Ana sayfaya dön
        </Link>
        <a
          href="https://wa.me/905453048671"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10 focus-ring"
        >
          WhatsApp ile yazın
        </a>
      </div>

      <nav aria-label="Popüler sayfalar" className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Popüler sayfalar
        </h2>
        <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {POPULAR_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 hover:border-violet-400/50 hover:bg-white/10 hover:text-white focus-ring"
              >
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
