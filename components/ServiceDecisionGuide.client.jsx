"use client";

import Link from "next/link";
import { ArrowRight, Check, ClipboardList, Info, MessageCircle, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

const GLOSSARY_DETAIL_LINKS = {
  "line-array": { href: "/sozluk/line-array" },
  riser: { href: "/sozluk/riser" },
  "cadir-zemini": { href: "/sozluk/cadir-zemini" },
};

function ChoiceButton({ active, children, description, onClick }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700 ${
        active
          ? "border-violet-600 bg-violet-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-violet-300 hover:bg-slate-50"
      }`}
    >
      <span className="flex items-start gap-3">
        <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${active ? "border-violet-600 bg-violet-600 text-white" : "border-slate-300"}`} aria-hidden="true">
          {active ? <Check className="h-3.5 w-3.5" /> : null}
        </span>
        <span>
          <span className="block text-sm font-black text-slate-950">{children}</span>
          <span className="mt-1 block text-sm leading-5 text-slate-600">{description}</span>
        </span>
      </span>
    </button>
  );
}

export default function ServiceDecisionGuide({ guide }) {
  const [answers, setAnswers] = useState({});
  const answeredCount = guide.questions.filter((question) => answers[question.id]).length;
  const isReady = answeredCount === guide.questions.length;
  const selectedAnswers = useMemo(
    () => guide.questions.map((question) => ({ question, option: question.options.find((option) => option.key === answers[question.id]) })).filter((item) => item.option),
    [answers, guide.questions],
  );
  const recommendedServices = useMemo(() => {
    const seen = new Set();

    return selectedAnswers
      .flatMap(({ option }) => option.recommendations ?? [])
      .filter((service) => {
        if (seen.has(service.href)) return false;
        seen.add(service.href);
        return true;
      });
  }, [selectedAnswers]);
  const whatsappText = isReady
    ? `Merhaba, ${guide.serviceName} rehberini tamamladım. ${selectedAnswers.map(({ question, option }) => `${question.title}: ${option.label}`).join("; ")}. Net teknik plan ve teklif için bilgi almak istiyorum.`
    : `Merhaba, ${guide.serviceName} için bilgi almak istiyorum.`;

  const selectAnswer = (questionIndex, optionKey) => {
    setAnswers((current) => {
      const next = { ...current, [guide.questions[questionIndex].id]: optionKey };
      guide.questions.slice(questionIndex + 1).forEach((question) => delete next[question.id]);
      return next;
    });
  };

  const reset = () => setAnswers({});

  return (
    <section id={guide.id} className="bg-slate-50 px-4 py-16 sm:py-20" aria-labelledby={`${guide.id}-baslik`}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">{guide.eyebrow}</p>
            <h2 id={`${guide.id}-baslik`} className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{guide.title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{guide.description}</p>
          </div>
          {answeredCount ? (
            <button type="button" onClick={reset} className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-800">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Baştan seç
            </button>
          ) : null}
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <div className="space-y-7 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/5 sm:p-8">
            {guide.questions.map((question, questionIndex) => {
              const isVisible = questionIndex === 0 || Boolean(answers[guide.questions[questionIndex - 1].id]);
              if (!isVisible) return null;

              return (
                <fieldset key={question.id}>
                  <legend className="text-base font-black text-slate-950">{questionIndex + 1}. {question.title}</legend>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{question.prompt}</p>
                  <div className="mt-3 grid gap-3">
                    {question.options.map((option) => (
                      <ChoiceButton key={option.key} active={answers[question.id] === option.key} description={option.note} onClick={() => selectAnswer(questionIndex, option.key)}>
                        {option.label}
                      </ChoiceButton>
                    ))}
                  </div>
                  {questionIndex === 0 ? (
                    <div className="mt-4 flex gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-4 text-sm leading-6 text-slate-700">
                      <Info className="mt-0.5 h-5 w-5 shrink-0 text-violet-700" aria-hidden="true" />
                      <p>{guide.learningNote}</p>
                    </div>
                  ) : null}
                </fieldset>
              );
            })}
          </div>

          <aside className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/15 sm:p-7" aria-live="polite">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Sizin için ilk teknik çerçeve</p>
            {isReady ? (
              <>
                <h3 className="mt-3 text-2xl font-black leading-tight">Ne gerektiği daha net</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Bu yanıtlar kesin teknik proje değildir; doğru keşif ve teklif için ekibe verilecek başlangıç briefidir.</p>
                <div className="mt-5 space-y-3">
                  {selectedAnswers.map(({ question, option }) => (
                    <article key={question.id} className="rounded-2xl bg-white/8 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.13em] text-violet-200">{question.title}</p>
                      <h4 className="mt-2 text-sm font-black text-white">{option.answerTitle}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{option.answer}</p>
                    </article>
                  ))}
                </div>
                {recommendedServices.length ? (
                  <div className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-sm font-black text-white">Bu kurgu için tamamlayıcı hizmetler</p>
                    <div className="mt-3 space-y-2">
                      {recommendedServices.map((service) => (
                        <Link key={service.href} href={service.href} className="block rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                          <span className="text-sm font-black text-white underline decoration-violet-300/60 underline-offset-4">{service.label}</span>
                          <span className="mt-1 block text-xs leading-5 text-slate-300">{service.why}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-black text-white">Teklifi netleştirmek için hazırlayın</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                    {guide.checklist.map((item) => (
                      <li key={item} className="flex gap-2"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <a href={`https://wa.me/905453048671?text=${encodeURIComponent(whatsappText)}`} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 text-sm font-black text-white transition hover:bg-emerald-600">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Bu notlarla bilgi alın
                  </a>
                  <Link href={guide.plannerHref} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/25 px-5 text-sm font-black text-white transition hover:bg-white/10">
                    {guide.plannerLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </>
            ) : (
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
                <ClipboardList className="mb-3 h-6 w-6 text-violet-200" aria-hidden="true" />
                Her cevaptan sonra bir sonraki soru açılır. {guide.questions.length} cevap tamamlandığında, teknik ekip için anlaşılır bir başlangıç planını burada göreceksiniz.
              </div>
            )}

            <div className="mt-6 border-t border-white/10 pt-5">
              <p className="text-sm font-black text-white">Terim desteği</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {guide.terms.map(([slug, label]) => (
                  <Link key={slug} href={GLOSSARY_DETAIL_LINKS[slug]?.href ?? `/sozluk#${slug}`} className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-bold text-violet-100 transition hover:bg-white/10 hover:text-white">{label}</Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
