// components/en/LandingKit.jsx
//
// Ingilizce geo/vertical landing sayfalarinin ortak sunum katmani.
//
// Neden ayri bir modul: uc Istanbul landing'i (event production, AV rental,
// conference AV) ayni gorsel dile sahip olmali ama ICERIKLERI birbirinden
// tamamen farkli olmali. Chrome'u burada paylasip metni sayfada tutmak,
// "sablondan uretilmis ince sayfa" tuzagina dusmeden tekrari onluyor —
// 2026 Agustos'ta 80 sehir sayfasi tam olarak o yuzden silinmisti.
//
// Buraya metin YAZILMAZ. Tum kopya cagiran sayfadan prop olarak gelir.

import Link from "next/link";

export function SectionShell({ variant = "light", id, labelledBy, children }) {
  const variants = {
    light: "bg-white",
    soft: "bg-gradient-to-b from-white to-slate-50/70",
    ink: "bg-[#0B1120] text-white",
  };

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative overflow-hidden ${variants[variant]} py-16 md:py-20`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {variant === "ink" ? (
          <>
            <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/60" />
          </>
        ) : (
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
        )}
      </div>
      <div className="relative container mx-auto px-4">{children}</div>
    </section>
  );
}

export function SectionHead({ id, kicker, title, desc, dark = false, center = false }) {
  return (
    <header className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-10`}>
      {kicker ? (
        <div
          className={[
            "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm",
            dark
              ? "border-white/15 bg-white/5 text-white/80"
              : "border-slate-200 bg-white text-slate-700",
          ].join(" ")}
        >
          <span className="h-2 w-2 rounded-full bg-violet-600" aria-hidden="true" />
          <span className="font-semibold">{kicker}</span>
        </div>
      ) : null}
      <h2
        id={id}
        className={[
          "mt-5 text-3xl md:text-4xl lg:text-5xl font-black tracking-tight",
          dark ? "text-white" : "text-gray-900",
        ].join(" ")}
      >
        {title}
      </h2>
      {desc ? (
        <p
          className={[
            "mt-4 text-lg md:text-xl leading-relaxed",
            dark ? "text-white/70" : "text-gray-600",
          ].join(" ")}
        >
          {desc}
        </p>
      ) : null}
    </header>
  );
}

export function Card({ children, dark = false, className = "" }) {
  return (
    <div
      className={[
        "rounded-3xl border p-6 md:p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1",
        dark
          ? "border-white/10 bg-white/5 backdrop-blur"
          : "border-slate-200 bg-white/90 backdrop-blur hover:shadow-xl",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** Baslik + madde listesi tasiyan standart kart. */
export function BulletCard({ title, intro, items = [], dark = false }) {
  return (
    <Card dark={dark}>
      <h3 className={`text-xl font-black ${dark ? "text-white" : "text-slate-950"}`}>{title}</h3>
      {intro ? (
        <p className={`mt-3 text-sm leading-relaxed ${dark ? "text-white/70" : "text-slate-600"}`}>
          {intro}
        </p>
      ) : null}
      {items.length ? (
        <ul className={`mt-4 space-y-2 text-sm ${dark ? "text-white/75" : "text-slate-700"}`}>
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" aria-hidden="true" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </Card>
  );
}

/** Sayfanin kapsamini makine ve insan icin acik yazan kucuk tablo. */
export function ScopeTable({ caption, rows = [] }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-slate-100 last:border-0">
              <th scope="row" className="w-[38%] bg-slate-50/70 px-5 py-4 align-top font-bold text-slate-900">
                {label}
              </th>
              <td className="px-5 py-4 align-top leading-relaxed text-slate-700">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FaqList({ items = [], dark = false }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.q}
          className={[
            "group rounded-3xl border p-5 md:p-6",
            dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white",
          ].join(" ")}
        >
          <summary
            className={[
              "cursor-pointer list-none text-base md:text-lg font-bold",
              dark ? "text-white" : "text-slate-950",
            ].join(" ")}
          >
            {item.q}
          </summary>
          <p
            className={[
              "mt-3 text-sm md:text-base leading-relaxed",
              dark ? "text-white/70" : "text-slate-700",
            ].join(" ")}
          >
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/**
 * Kardes sayfalara gecis serisi. Kanibalizasyonu onlemenin yari teknik yari
 * editoryal tarafi: her landing, komsusunun neyi kapsadigini acikca soyleyip
 * oraya link verir; boylece hem kullanici hem tarayici sinirlari goruyor.
 */
export function SiblingLinks({ title, intro, links = [] }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 md:p-8">
      <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
      {intro ? <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{intro}</p> : null}
      <ul className="mt-6 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              prefetch={false}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-md"
            >
              <span className="text-base font-bold text-slate-950 group-hover:text-violet-800">
                {link.label}
              </span>
              <span className="mt-2 text-sm leading-relaxed text-slate-600">{link.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CtaBand({ title, desc, primary, secondary }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10 text-center backdrop-blur">
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">{title}</h2>
      {desc ? <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{desc}</p> : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {primary ? (
          <Link
            href={primary.href}
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-black text-violet-900 transition hover:bg-violet-50"
          >
            {primary.label}
          </Link>
        ) : null}
        {secondary ? (
          <a
            href={secondary.href}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black text-white transition hover:bg-white/15"
          >
            {secondary.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}
