"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function GlowBg() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0B1120]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-10 -z-10 h-[480px] w-[480px] rounded-full bg-violet-400/12 blur-3xl" />
    </>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

function SoftCard({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] " +
        "transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.045] " +
        className
      }
    >
      {children}
    </div>
  );
}

function InlineLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded"
    >
      {children}
    </Link>
  );
}

/**
 * Adım gövdeleri metin ve iç link parçalarından oluşuyor. Bu bileşen "use client"
 * olduğu için sözlükten fonksiyon geçilemez; parçalar bu yüzden düz veri olarak
 * ({ text } / { href, label }) taşınır ve burada JSX'e çevrilir.
 */
function RichParts({ parts }) {
  return (
    <>
      {parts.map((part, index) =>
        part.href ? (
          <InlineLink key={`${part.href}-${index}`} href={part.href}>
            {part.label}
          </InlineLink>
        ) : (
          <span key={`text-${index}`}>{part.text}</span>
        ),
      )}
    </>
  );
}

/**
 * Varsayılan sözlük Türkçedir; /nasil-calisiyoruz hiçbir prop geçmeden bu
 * metinleri kullanmaya devam eder. Diğer lokaller kendi sözlüğünü geçer,
 * böylece hem etiketler hem de iç linkler o dilin sayfalarına gider.
 */
export const HOW_IT_WORKS_TR_DICTIONARY = {
  stepsLabel: "Adımlar:",
  faqShortcut: "FAQ",
  stepBadge: "Adım {{n}}",
  faqPrompt: "Cevabı görmek için tıklayın.",
  ctaBriefHref: "/iletisim",
  ctaBriefLabel: "İletişim / Brief Bırak",
  ctaWhatsappHref: "https://wa.me/905453048671",
  ctaWhatsappLabel: "WhatsApp’tan Yazın",
  ctaWhatsappAria: "WhatsApp üzerinden iletişime geç (yeni sekmede açılır)",
  heroBadges: ["Sahneva Organizasyon", "Uçtan uca kurulum", "Teknik ekip + operasyon"],
  heroTitle: "Nasıl Çalışıyoruz?",
  heroSubtitle: "Sahneva’da etkinlikler nasıl planlanır, kurulur ve yönetilir?",
  heroBody:
    "İhtiyaç → teklif → keşif → kurulum → etkinlik günü → söküm. Süreci uçtan uca yönetir, sahada teknik ekiple birlikte kontrol ederiz.",
  heroImageAlt: "Sahneva etkinlik süreci: planlama, kurulum ve operasyon",
  quickLinksLabel: "Hızlı linkler:",
  quickLinks: [
    { href: "/truss-kiralama", label: "Truss" },
    { href: "/podyum-kiralama", label: "Sahne/Podyum" },
    { href: "/ses-isik-sistemleri", label: "Ses-Işık" },
  ],
  includedTitle: "Neler Dahil?",
  includedItems: [
    "İhtiyaç analizi + teklif",
    "Teknik keşif (gerekiyorsa)",
    "Kurulum + test + saha operasyonu",
    "Söküm + temiz teslim",
  ],
  briefTitle: "Brief’te Neler Soruyoruz?",
  briefItems: [
    "Tarih / lokasyon / alan ölçüsü",
    "Sahne ölçüsü ve yükseklik",
    "İçerik akışı / program",
    "Enerji ve erişim koşulları",
  ],
  internalLinksTitle: "Hızlı İç Linkler",
  internalLinks: [
    { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
    { href: "/truss-kiralama", label: "Truss Kiralama" },
    { href: "/podyum-kiralama", label: "Sahne / Podyum" },
    { href: "/ses-isik-sistemleri", label: "Ses & Işık" },
  ],
  stepsSectionAria: "Çalışma adımları",
  stepsSectionTitle: "Ana Süreç Adımları",
  faqTitle: "Sık Sorulan Sorular",
  stepBodies: {
    1: [
      [
        { text: "İhtiyaçlarınızı iletin: " },
        { href: "/led-ekran-kiralama", label: "LED ekran" },
        { text: ", " },
        { href: "/truss-kiralama", label: "truss" },
        { text: ", " },
        { href: "/podyum-kiralama", label: "sahne/podyum" },
        { text: ", " },
        { href: "/ses-isik-sistemleri", label: "ses-ışık" },
        { text: "." },
      ],
      [
        { href: "/iletisim", label: "İletişim formu" },
        { text: " ile brief bırakın veya WhatsApp’tan yazın." },
      ],
    ],
    3: [
      [
        { text: "Teklif opsiyonlarına " },
        { href: "/cadir-kiralama", label: "çadır" },
        { text: " ve " },
        { href: "/masa-sandalye-kiralama", label: "masa-sandalye" },
        { text: " eklenebilir." },
      ],
    ],
    6: [
      [
        { text: "Kurulum + testte " },
        { href: "/ses-isik-sistemleri", label: "ses-ışık" },
        { text: " ve " },
        { href: "/led-ekran-kiralama", label: "LED ekran" },
        { text: " testleri tamamlanır; güvenlik kontrolleri yapılır." },
      ],
    ],
  },
};

function ImgFrame({
  src,
  alt,
  priority = false,
  className = "",
  imgClassName = "",
  aspectClassName = "aspect-[16/10]",
  sizes = "(max-width: 768px) 100vw, 560px",
}) {
  return (
    <SoftCard className={"overflow-hidden " + className}>
      <div className={"relative w-full " + aspectClassName}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={
            "object-cover transition-transform duration-500 will-change-transform hover:scale-[1.03] " +
            imgClassName
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>
    </SoftCard>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!m) return;
    const onChange = () => setReduce(!!m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);
  return reduce;
}

function Reveal({ children }) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 will-change-transform " +
        (shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")
      }
    >
      {children}
    </div>
  );
}

function useSmartScroll() {
  const navRef = useRef(null);
  const reduce = usePrefersReducedMotion();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const navH = navRef.current?.offsetHeight ?? 0;
    const extra = 12;
    const y = el.getBoundingClientRect().top + window.scrollY - navH - extra;

    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
  };

  return { navRef, scrollToId };
}

function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? null);

  useEffect(() => {
    if (!ids?.length) return;
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.2, 0.35, 0.5] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return activeId;
}

function useParallax() {
  const reduce = usePrefersReducedMotion();
  const wrapRef = useRef(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setT({
          x: Math.max(-1, Math.min(1, dx)) * 6,
          y: Math.max(-1, Math.min(1, dy)) * 4,
        });
      });
    };

    const onLeave = () => setT({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  return { wrapRef, t };
}

function StepsNav({ steps, onGo, navRef, activeId, stepsLabel, faqShortcut }) {
  return (
    <div className="mx-auto max-w-6xl px-4" ref={navRef}>
      <div className="sticky top-2 z-20 rounded-2xl border border-white/10 bg-[#0B1120]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B1120]/50">
        <div className="flex flex-wrap items-center gap-2 p-3">
          <span className="mr-2 text-xs font-semibold text-white/70">{stepsLabel}</span>

          {steps.map((s) => {
            const id = `adim-${s.stepNo}`;
            const isActive = activeId === id;
            return (
              <button
                key={s.stepNo}
                type="button"
                onClick={() => onGo(id)}
                aria-current={isActive ? "step" : undefined}
                className={
                  "rounded-xl border px-3 py-2 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 " +
                  (isActive
                    ? "border-white/25 bg-white/15 text-white"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10")
                }
                title={s.title}
              >
                {s.stepNo}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => onGo("faq")}
            className="ml-auto rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {faqShortcut}
          </button>
        </div>
      </div>
    </div>
  );
}

function StepSection({ stepNo, label, title, body, imageSrc, imageAlt, reverse, badgeTemplate }) {
  const id = `adim-${stepNo}`;
  return (
    <section id={id} className="scroll-mt-28" aria-labelledby={`${id}-title`}>
      <Reveal>
        <div
          className={
            "grid items-center gap-6 lg:gap-10 " +
            (reverse ? "lg:grid-cols-[520px_1fr]" : "lg:grid-cols-[1fr_520px]")
          }
        >
          <div className={reverse ? "lg:order-2" : ""}>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{label}</Badge>
              <Badge>{badgeTemplate.replace("{{n}}", stepNo)}</Badge>
            </div>

            <h3 id={`${id}-title`} className="mt-4 text-xl font-semibold text-white sm:text-2xl">
              {title}
            </h3>

            <SoftCard className="mt-4 p-5 sm:p-6">
              <div className="prose prose-invert max-w-none prose-p:my-0">{body}</div>
            </SoftCard>
          </div>

          <div className={reverse ? "lg:order-1" : ""}>
            <Reveal>
              <ImgFrame src={imageSrc} alt={imageAlt} />
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FaqItem({ q, a, prompt }) {
  return (
    <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.045]">
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-white">{q}</h3>
          <span
            className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 group-open:bg-white/10"
            aria-hidden="true"
          >
            +
          </span>
        </div>
        <p className="mt-2 text-sm text-white/60">{prompt}</p>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-white/75">{a}</div>
    </details>
  );
}

export default function HowItWorksClient({
  stepsData,
  faqs,
  dictionary = HOW_IT_WORKS_TR_DICTIONARY,
}) {
  const d = dictionary ?? HOW_IT_WORKS_TR_DICTIONARY;
  const CTA_BRIEF = d.ctaBriefHref;
  const CTA_WHATSAPP = d.ctaWhatsappHref;

  const { navRef, scrollToId } = useSmartScroll();

  const sectionIds = useMemo(() => stepsData.map((s) => `adim-${s.stepNo}`), [stepsData]);
  const activeId = useActiveSection(sectionIds);

  const { wrapRef, t } = useParallax();

  const stepsUi = useMemo(() => {
    const bodies = d.stepBodies ?? {};

    return stepsData.map((s) => {
      const paragraphs = bodies[s.stepNo];

      if (paragraphs?.length) {
        return {
          ...s,
          body: (
            <>
              {paragraphs.map((parts, index) => (
                <p
                  key={`step-${s.stepNo}-p-${index}`}
                  className={
                    index === 0
                      ? "text-sm leading-relaxed text-white/75"
                      : "mt-3 text-sm leading-relaxed text-white/75"
                  }
                >
                  <RichParts parts={parts} />
                </p>
              ))}
            </>
          ),
        };
      }

      return { ...s, body: <p className="text-sm leading-relaxed text-white/75">{s.plainText}</p> };
    });
  }, [d.stepBodies, stepsData]);

  return (
    <>
      <GlowBg />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:pb-14 sm:pt-20">
        {/* ✅ Yazı biraz geniş, görsel biraz dar */}
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_680px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              {d.heroBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {d.heroTitle}
              </h1>
              <p className="mt-3 text-base text-white/70 sm:text-lg">{d.heroSubtitle}</p>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              {d.heroBody}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={CTA_BRIEF}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {d.ctaBriefLabel}
              </Link>

              <a
                href={CTA_WHATSAPP}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label={d.ctaWhatsappAria}
              >
                {d.ctaWhatsappLabel}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              <span>{d.quickLinksLabel}</span>
              {d.quickLinks.map((link, index) => (
                <span key={link.href} className="contents">
                  {index > 0 ? <span aria-hidden="true">•</span> : null}
                  <InlineLink href={link.href}>{link.label}</InlineLink>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-stretch">
            <Reveal>
              <div ref={wrapRef} className="w-full" style={{ perspective: 900 }}>
                {/* ✅ Görsel az yukarı (12px), parallax korunur */}
                <div
                  className="transition-transform duration-300 will-change-transform"
                  style={{ transform: `translate3d(${t.x}px, calc(${t.y}px - 12px), 0)` }}
                >
                  <ImgFrame
                    src="/img/nasil-calisiriz/hero-surec.webp"
                    alt={d.heroImageAlt}
                    priority
                    /* aynı oran kalsın */
                    aspectClassName="aspect-[16/3] sm:aspect-[16/9]"
                    /* ✅ görsel çok az küçüldü (daha temiz) */
                    imgClassName="scale-[1.015] origin-center"
                    sizes="(max-width: 768px) 100vw, 820px"
                    className="w-full"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <StepsNav
        steps={stepsData}
        onGo={scrollToId}
        navRef={navRef}
        activeId={activeId}
        stepsLabel={d.stepsLabel}
        faqShortcut={d.faqShortcut}
      />

      {/* Enrichment */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-6">
        <div className="grid gap-4 lg:grid-cols-3">
          <Reveal>
            <SoftCard className="p-6">
              <h2 className="text-base font-semibold text-white">{d.includedTitle}</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {d.includedItems.map((item) => (
                  <li key={item}>{`• ${item}`}</li>
                ))}
              </ul>
            </SoftCard>
          </Reveal>

          <Reveal>
            <SoftCard className="p-6">
              <h2 className="text-base font-semibold text-white">{d.briefTitle}</h2>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {d.briefItems.map((item) => (
                  <li key={item}>{`• ${item}`}</li>
                ))}
              </ul>
            </SoftCard>
          </Reveal>

          <Reveal>
            <SoftCard className="p-6">
              <h2 className="text-base font-semibold text-white">{d.internalLinksTitle}</h2>
              <div className="mt-3 grid gap-2 text-sm">
                {d.internalLinks.map((link) => (
                  <InlineLink key={link.href} href={link.href}>
                    {link.label}
                  </InlineLink>
                ))}
              </div>
            </SoftCard>
          </Reveal>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-6xl px-4 pb-14" aria-label={d.stepsSectionAria}>
        <h2 className="text-2xl font-semibold text-white">{d.stepsSectionTitle}</h2>

        <div className="mt-8 grid gap-10">
          {stepsUi.map((s, idx) => (
            <StepSection
              key={`step-${s.stepNo}`}
              stepNo={s.stepNo}
              label={s.label}
              title={s.title}
              body={s.body}
              imageSrc={s.imageSrc}
              imageAlt={s.imageAlt}
              reverse={idx % 2 === 1}
              badgeTemplate={d.stepBadge}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-20" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-2xl font-semibold text-white">
          {d.faqTitle}
        </h2>
        <div className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} prompt={d.faqPrompt} />
          ))}
        </div>
      </section>
    </>
  );
}
