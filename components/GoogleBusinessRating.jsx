import { getGoogleBusinessProfileRating } from "@/lib/googleBusinessProfile";

const COPY = {
  tr: { locale: "tr-TR", reviews: "Google değerlendirmesi", aria: "Google işletme puanı" },
  en: { locale: "en-US", reviews: "Google reviews", aria: "Google business rating" },
  de: { locale: "de-DE", reviews: "Google-Bewertungen", aria: "Google-Unternehmensbewertung" },
  ru: { locale: "ru-RU", reviews: "отзывов Google", aria: "Рейтинг компании в Google" },
  zh: { locale: "zh-CN", reviews: "条 Google 评价", aria: "Google 商家评分" },
  ar: { locale: "ar", reviews: "مراجعة على Google", aria: "تقييم النشاط التجاري على Google" },
};

export default async function GoogleBusinessRating({ locale = "tr" }) {
  const summary = await getGoogleBusinessProfileRating();
  if (!summary) return null;

  const copy = COPY[locale] ?? COPY.en;
  const rating = new Intl.NumberFormat(copy.locale, { maximumFractionDigits: 1 }).format(
    summary.rating
  );
  const reviewCount = new Intl.NumberFormat(copy.locale).format(summary.reviewCount);

  return (
    <a
      href={summary.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${copy.aria}: ${rating}/5, ${reviewCount} ${copy.reviews}`}
      className="mt-3 inline-flex min-h-[44px] items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]"
    >
      <span className="text-amber-300" aria-hidden="true">★</span>
      <span>
        <span className="font-semibold">{rating}/5</span>
        <span className="text-slate-300"> · {reviewCount} {copy.reviews}</span>
        <span className="block text-[11px] text-slate-400">Google Business Profile</span>
      </span>
    </a>
  );
}

