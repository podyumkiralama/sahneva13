import Link from "next/link";

export const metadata = {
  title: "Sayfa bulunamadÄ±",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] container mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold">Sayfa bulunamadÄ±</h1>
      <p className="mt-4 text-neutral-600">
        AradÄ±ÄŸÄ±nÄ±z sayfa taÅŸÄ±nmÄ±ÅŸ veya hiÃ§ var olmamÄ±ÅŸ olabilir.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center mt-8 rounded-xl px-5 py-3 font-semibold bg-violet-700 text-white hover:bg-violet-800 focus-ring"
      >
        Ana sayfaya dÃ¶n
      </Link>
    </div>
  );
}
