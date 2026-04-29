"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const COPY = {
  tr: {
    shortcuts: "Kısayollar:",
    quote: "Teklif Al",
    quoteLead: "İletişim / Brief Bırak",
    whatsapp: "WhatsApp'tan Yazın",
    whatsappAria: "WhatsApp üzerinden iletişime geç (yeni sekmede açılır)",
    heroBadges: ["Türkiye geneli", "Kurulum + operasyon", "Hızlı teklif"],
    heroTitle: "Bölgesel Kiralama",
    heroSubtitle:
      "Bulunduğunuz şehre göre planlayalım: LED ekran, truss, sahne/podyum ve ses-ışık.",
    heroBody:
      "Sahneva, şehir bazlı lojistik ve ekip planlamasıyla etkinlik kurulumlarını uçtan uca yönetir. Teklif aşamasında teknik gereksinimleri netleştirir, kurulum ve testleri planlar, etkinlik günü operasyon desteği sağlar ve söküm sonrası alanı düzenli şekilde teslim eder.",
    suggestedPackages: "Önerilen paketler:",
    serviceCatalogTitle: "Hizmet Kataloğu",
    serviceCatalogBody: "Şehre göre aynı projede birden fazla kalemi paketleyebiliriz.",
    whyTitle: "Bölgesel Kiralama Neden Önemli?",
    whyCards: [
      {
        title: "Doğru lojistik planlama",
        body: "Mesafe, ekip sayısı ve kurulum süresi şehir bazında değişir. Bu sayfa planı daha sağlam kurar.",
      },
      {
        title: "Tek ekip, tek koordinasyon",
        body: "LED ekran, truss, sahne/podyum ve ses-ışık tek takvim ve tek sorumlulukla yürür.",
      },
      {
        title: "Teklif daha hızlı netleşir",
        body: "Şehir bilgisi, taşıma ve kurulum varsayımlarını netleştirir; fiyatlandırma daha doğru çıkar.",
      },
      {
        title: "Sahada risk azalır",
        body: "Erişim, enerji, zemin ve güvenlik kontrol listeleri önceden planlanır.",
      },
    ],
    whyFootnote:
      "Özellikle truss ve LED ekran içeren projelerde şehir bazlı planlama; kurulum süresi, güvenlik ve enerji gereksinimleri açısından kritik fark yaratır.",
    processTitle: "Süreç Nasıl İlerler?",
    processBody:
      "Bölgesel kurulumlarda hedef: doğru ekipman, doğru ekip ve doğru zamanlama. Süreci standartlaştırırız.",
    processCards: [
      {
        title: "1) Brief ve ihtiyaç",
        body: "Tarih, şehir, alan ölçüsü ve hizmet kalemleri netleşir. Gerekirse hızlı keşif planlanır.",
      },
      {
        title: "2) Teklif ve planlama",
        body: "Paket ve opsiyonlar hazırlanır. Lojistik, kurulum süresi ve ekip planı şehre göre çıkarılır.",
      },
      {
        title: "3) Kurulum ve test",
        body: "Kurulum genellikle 24-48 saat önce yapılır; testler, kablolama ve güvenlik kontrolleri tamamlanır.",
      },
      {
        title: "4) Etkinlik günü",
        body: "Operasyon ekibi sahada akışı takip eder; ses, görüntü, ışık ve sahne güvenliği yönetilir.",
      },
      {
        title: "5) Söküm ve teslim",
        body: "Etkinlik sonrası söküm yapılır; ekipman güvenli şekilde toplanır ve alan temiz teslim edilir.",
      },
      {
        title: "Hızlı teklif için",
        body: "Şehir + tarih + etkinlik türü + ihtiyaç listesi yeterli. Kalan detayları birlikte netleştiririz.",
      },
    ],
    regionsTitle: "Şehrinizi Seçin",
    regionsBody:
      "Şehre göre ulaşım, ekip sayısı ve kurulum takvimi netleşir. Teklif için şehrinizi seçin.",
    cityCardAlt: (name) => `${name} bölgesel kiralama görseli`,
    cityCardAria: (name) => `${name} için teklif almak üzere iletişime git`,
    cityCardCta: (name) => `${name} için Teklif Al`,
    notesTitle: "Şehir bazlı planlama notları",
    notesBody:
      "Ayrı şehir sayfaları üretmek yerine, teklif öncesi gerçekten işimize yarayan planlama farklarını burada topluyoruz. Böylece lojistik, ekip ve ekipman tercihleri daha erken netleşiyor.",
    planningTitle: "Planlama Kontrol Listesi",
    planningBody:
      "Bölgesel kurulumlarda en çok vakit kazandıran şey: doğru ön bilgi. Aşağıdaki maddeler teklif ve kurulum hızını artırır.",
    planningCards: [
      {
        title: "Mekân / erişim",
        items: [
          "Yükleme alanı / asansör / kapı genişliği",
          "Kurulum saat aralığı (mekân kuralları)",
          "Zemin tipi ve düzlüğü",
          "Truss / sahne için yükseklik sınırı",
        ],
      },
      {
        title: "Enerji / güvenlik",
        items: [
          "Elektrik gücü ve priz tipi",
          "Kablo geçiş güzergâhı ve sabitleme noktaları",
          "Bariyer / çevreleme ihtiyacı",
          "Yağmur / rüzgâr planı",
        ],
      },
      {
        title: "İçerik / program",
        items: [
          "Program akışı ve sahne giriş-çıkışları",
          "LED ekran içerik formatları",
          "Mikrofon sayısı ve konuşmacı planı",
          "Işık senaryosu",
        ],
      },
      {
        title: "Önerilen iç linkler",
        body: "İhtiyacınıza göre ilgili sayfalara göz atın:",
      },
    ],
    faqPrompt: "Cevabı görmek için tıklayın.",
    faqTitle: "Sık Sorulan Sorular",
    quickQuoteTitle: "Hızlı teklif",
    quickQuoteBody:
      '"Şehir + tarih + etkinlik türü + ihtiyaçlar" yeterli. Ekibimiz hızlıca dönüş yapar.',
  },
  en: {
    shortcuts: "Shortcuts:",
    quote: "Get a Quote",
    quoteLead: "Contact / Share Brief",
    whatsapp: "Write on WhatsApp",
    whatsappAria: "Contact us via WhatsApp (opens in a new tab)",
    heroBadges: ["Across Turkey", "Installation + operations", "Fast quoting"],
    heroTitle: "Regional Rental",
    heroSubtitle:
      "Let's plan by city: LED screen, truss, stage/podium, and sound-lighting.",
    heroBody:
      "Sahneva manages event installations end-to-end with city-based logistics and crew planning. We clarify technical requirements during quoting, schedule installation and testing, support the event day operation, and hand over the venue in order after dismantling.",
    suggestedPackages: "Suggested packages:",
    serviceCatalogTitle: "Service Catalog",
    serviceCatalogBody: "We can bundle multiple rental items in a single project based on the city and venue flow.",
    whyTitle: "Why Regional Rental Matters",
    whyCards: [
      {
        title: "Accurate logistics planning",
        body: "Distance, crew size, and installation time vary by city. This hub helps frame the plan more realistically.",
      },
      {
        title: "One crew, one coordination flow",
        body: "LED screen, truss, stage/podium, and sound-lighting move on one timeline under one responsible team.",
      },
      {
        title: "Quotes settle faster",
        body: "City details clarify transport and installation assumptions, so pricing becomes more reliable earlier.",
      },
      {
        title: "Lower on-site risk",
        body: "Access, power, ground, and safety checklists are planned before the team arrives on site.",
      },
    ],
    whyFootnote:
      "Especially in projects that include truss and LED screens, city-based planning creates a real advantage in installation timing, safety, and power preparation.",
    processTitle: "How the Process Moves",
    processBody:
      "In regional installations, the goal is simple: the right equipment, the right crew, and the right timing. We standardize the process around that.",
    processCards: [
      {
        title: "1) Brief and needs",
        body: "Date, city, venue size, and required services are clarified. A fast technical scouting step can be added when needed.",
      },
      {
        title: "2) Quote and planning",
        body: "Package and option sets are prepared. Logistics, installation time, and crew plan are shaped by the city.",
      },
      {
        title: "3) Installation and testing",
        body: "Installation is usually planned 24-48 hours in advance; testing, cabling, and safety checks are completed before show time.",
      },
      {
        title: "4) Event day",
        body: "The operations team follows the flow on site; sound, visuals, lighting, and stage safety are managed together.",
      },
      {
        title: "5) Dismantling and handover",
        body: "After the event, equipment is dismantled safely and the venue is handed back in order.",
      },
      {
        title: "For a fast quote",
        body: "City + date + event type + needs list is enough. We can shape the remaining details together.",
      },
    ],
    regionsTitle: "Choose Your City",
    regionsBody:
      "Transport, crew size, and installation timing become much clearer once the city is known. Pick your city to start the quote flow.",
    cityCardAlt: (name) => `${name} regional rental visual`,
    cityCardAria: (name) => `Go to contact flow to request a quote for ${name}`,
    cityCardCta: (name) => `Get a Quote for ${name}`,
    notesTitle: "City-based planning notes",
    notesBody:
      "Instead of creating thin city pages, we collect the practical planning differences that genuinely help before quoting. That helps logistics, crew, and equipment choices settle earlier.",
    planningTitle: "Planning Checklist",
    planningBody:
      "The biggest time saver in regional installations is better early information. The checklist below makes quoting and installation planning faster.",
    planningCards: [
      {
        title: "Venue / access",
        items: [
          "Loading area / elevator / door width",
          "Allowed installation window",
          "Ground type and level",
          "Height limit for truss / stage",
        ],
      },
      {
        title: "Power / safety",
        items: [
          "Power capacity and socket type",
          "Cable route and fastening points",
          "Barrier / perimeter needs",
          "Rain / wind plan",
        ],
      },
      {
        title: "Content / show flow",
        items: [
          "Program flow and stage entrances/exits",
          "LED content formats",
          "Microphone count and speaker plan",
          "Lighting scenario",
        ],
      },
      {
        title: "Suggested internal links",
        body: "Explore the related pages that best match your setup:",
      },
    ],
    faqPrompt: "Click to view the answer.",
    faqTitle: "Frequently Asked Questions",
    quickQuoteTitle: "Fast quote",
    quickQuoteBody:
      '"City + date + event type + requirements" is enough. Our team can respond quickly from there.',
  },
};

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
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 left-10 -z-10 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-3xl" />
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
        "rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-300 hover:-translate-y-1 hover:bg-white/[0.045] " +
        className
      }
    >
      {children}
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media) return;
    const onChange = () => setReduce(Boolean(media.matches));
    onChange();
    media.addEventListener?.("change", onChange);
    return () => media.removeEventListener?.("change", onChange);
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

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 will-change-transform " +
        (shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0")
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
      className="rounded font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      {children}
    </Link>
  );
}

function useSmartScroll() {
  const navRef = useRef(null);

  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top = element.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return { navRef, scrollToId };
}

function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids?.[0] ?? null);

  useEffect(() => {
    if (!ids?.length) return;
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.2, 0.35, 0.5] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}

function StepsNav({ steps, onGo, navRef, activeId, quoteHref, quoteLabel, shortcutLabel }) {
  return (
    <div className="mx-auto max-w-6xl px-4" ref={navRef}>
      <div className="sticky top-2 z-20 rounded-2xl border border-white/10 bg-[#0B1120]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0B1120]/50">
        <div className="flex flex-wrap items-center gap-2 p-3">
          <span className="mr-2 text-xs font-semibold text-white/70">{shortcutLabel}</span>

          {steps.map((step) => {
            const isActive = activeId === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onGo(step.id)}
                aria-current={isActive ? "step" : undefined}
                title={step.desc}
                className={
                  "rounded-xl border px-3 py-2 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 " +
                  (isActive
                    ? "border-white/25 bg-white/15 text-white"
                    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10")
                }
              >
                {step.title}
              </button>
            );
          })}

          <Link
            href={quoteHref}
            className="ml-auto rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {quoteLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

function CityCard({ region, href, imgSrc, copy }) {
  return (
    <SoftCard className="p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white">{region.name}</h3>
          <p className="mt-2 text-sm text-white/70">{region.desc}</p>
        </div>
        <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80">
          →
        </span>
      </div>

      <div className="mt-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
          <Image
            src={imgSrc}
            alt={copy.cityCardAlt(region.name)}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover opacity-90"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>
      </div>

      <Link
        href={href}
        className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        aria-label={copy.cityCardAria(region.name)}
      >
        {copy.cityCardCta(region.name)}
      </Link>
    </SoftCard>
  );
}

function RegionDetailCard({ region, services }) {
  return (
    <SoftCard className="p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold text-white">{region.name}</h3>
        <Badge>{region.desc}</Badge>
      </div>

      <p className="mt-4 text-sm leading-6 text-white/75">{region.focus ?? region.desc}</p>

      {region.planning ? (
        <p className="mt-3 text-sm leading-6 text-white/65">{region.planning}</p>
      ) : null}

      {services?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((service) => (
            <Link
              key={`${region.slug}-${service.href}`}
              href={service.href}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {service.title}
            </Link>
          ))}
        </div>
      ) : null}
    </SoftCard>
  );
}

function buildCityPageHref(locale, citySlug) {
  if (locale === "en") return "/en/regional-rental#regions";
  return `/bolgesel-kiralama/${citySlug}`;
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

export default function RegionalRentalClient({
  regions,
  services,
  faqs,
  steps,
  locale = "tr",
}) {
  const copy = COPY[locale] ?? COPY.tr;
  const ctaBrief = locale === "en" ? "/en/contact" : "/iletisim";
  const ctaWhatsapp = "https://wa.me/905453048671";
  const imageDir = "/img/bolgesel-kiralama";

  const sectionIds = useMemo(
    () => ({
      services: steps?.[0]?.id ?? "services",
      process: steps?.[1]?.id ?? "process",
      regions: steps?.[2]?.id ?? "regions",
      notes: steps?.[3]?.id ?? "regional-notes",
      planning: steps?.[4]?.id ?? "planning",
      faq: steps?.[5]?.id ?? "faq",
    }),
    [steps]
  );

  const cityImages = useMemo(() => {
    const map = {};
    regions.forEach((region) => {
      map[region.slug] = `${imageDir}/${region.slug}.webp`;
    });
    return map;
  }, [regions]);

  const servicesByHref = useMemo(() => {
    const map = {};
    services.forEach((service) => {
      map[service.href] = service;
    });
    return map;
  }, [services]);

  const activeId = useActiveSection(steps.map((step) => step.id));
  const { navRef, scrollToId } = useSmartScroll();
  const suggestedServices = services.slice(0, 4);
  const planningLinks = services.slice(0, 6);

  return (
    <>
      <GlowBg />

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:pb-14 sm:pt-20">
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_680px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              {copy.heroBadges.map((badge) => (
                <Badge key={badge}>{badge}</Badge>
              ))}
            </div>

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {copy.heroTitle}
              </h1>
              <p className="mt-3 text-base text-white/70 sm:text-lg">{copy.heroSubtitle}</p>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
              {copy.heroBody}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={ctaBrief}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {copy.quoteLead}
              </Link>

              <a
                href={ctaWhatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label={copy.whatsappAria}
              >
                {copy.whatsapp}
              </a>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-white/60">
              <span>{copy.suggestedPackages}</span>
              {suggestedServices.map((service, index) => (
                <div key={service.href} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">•</span> : null}
                  <InlineLink href={service.href}>{service.title}</InlineLink>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:-mt-2 lg:justify-self-stretch">
            <Reveal>
              <SoftCard className="overflow-hidden">
                <div className="relative aspect-[16/3] w-full sm:aspect-[16/9]">
                  <Image
                    src="/img/bolgesel-kiralama/hero.webp"
                    alt={copy.heroTitle}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 820px"
                    className="object-cover object-[50%_35%] transition-transform duration-500 will-change-transform hover:scale-[1.03]"
                    style={{ transform: "translate3d(0, -12px, 0)" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
              </SoftCard>
            </Reveal>
          </div>
        </div>
      </section>

      <StepsNav
        steps={steps}
        onGo={scrollToId}
        navRef={navRef}
        activeId={activeId}
        quoteHref={ctaBrief}
        quoteLabel={copy.quote}
        shortcutLabel={copy.shortcuts}
      />

      <section id={sectionIds.services} className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-10 pt-6">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            <SoftCard className="p-6">
              <h2 className="text-base font-semibold text-white">{copy.serviceCatalogTitle}</h2>
              <p className="mt-2 text-sm text-white/70">{copy.serviceCatalogBody}</p>

              <div className="mt-4 grid gap-2 text-sm">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-semibold text-white/85 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </SoftCard>

            <SoftCard className="p-6 lg:col-span-2">
              <h2 className="text-base font-semibold text-white">{copy.whyTitle}</h2>

              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {copy.whyCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{card.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-white/75">{copy.whyFootnote}</p>
              </div>
            </SoftCard>
          </div>
        </Reveal>
      </section>

      <section
        id={sectionIds.process}
        className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-14"
        aria-label={copy.processTitle}
      >
        <h2 className="text-2xl font-semibold text-white">{copy.processTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">{copy.processBody}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {copy.processCards.map((card, index) => (
            <Reveal key={card.title}>
              <SoftCard className="p-6">
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70">{card.body}</p>

                {index === copy.processCards.length - 1 ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={ctaBrief}
                      className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {copy.quoteLead}
                    </Link>
                    <a
                      href={ctaWhatsapp}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                      aria-label={copy.whatsappAria}
                    >
                      WhatsApp
                    </a>
                  </div>
                ) : null}
              </SoftCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id={sectionIds.regions}
        className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-14"
        aria-label={copy.regionsTitle}
      >
        <h2 className="text-2xl font-semibold text-white">{copy.regionsTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">{copy.regionsBody}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <Reveal key={region.slug}>
              <CityCard
                region={region}
                imgSrc={cityImages[region.slug]}
                href={buildCityPageHref(locale, region.slug)}
                copy={copy}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id={sectionIds.notes}
        className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-14"
        aria-labelledby="regional-notes-title"
      >
        <h2 id="regional-notes-title" className="text-2xl font-semibold text-white">
          {copy.notesTitle}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">{copy.notesBody}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {regions.map((region) => (
            <Reveal key={`detail-${region.slug}`}>
              <RegionDetailCard
                region={region}
                services={(region.services ?? [])
                  .map((href) => servicesByHref[href])
                  .filter(Boolean)}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id={sectionIds.planning}
        className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-14"
        aria-label={copy.planningTitle}
      >
        <h2 className="text-2xl font-semibold text-white">{copy.planningTitle}</h2>
        <p className="mt-2 max-w-3xl text-sm text-white/70">{copy.planningBody}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {copy.planningCards.map((card) => (
            <Reveal key={card.title}>
              <SoftCard className="p-6">
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                {card.items ? (
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {card.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="mt-2 text-sm text-white/70">{card.body}</p>
                    <div className="mt-4 grid gap-2 text-sm">
                      {planningLinks.map((service) => (
                        <InlineLink key={service.href} href={service.href}>
                          {service.title}
                        </InlineLink>
                      ))}
                    </div>
                  </>
                )}
              </SoftCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id={sectionIds.faq}
        className="mx-auto max-w-6xl scroll-mt-28 px-4 pb-20"
        aria-labelledby="faq-title"
      >
        <h2 id="faq-title" className="text-2xl font-semibold text-white">
          {copy.faqTitle}
        </h2>
        <div className="mt-6 grid gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} prompt={copy.faqPrompt} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-base font-semibold text-white">{copy.quickQuoteTitle}</h3>
          <p className="mt-2 text-sm text-white/70">{copy.quickQuoteBody}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={ctaBrief}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {copy.quoteLead}
            </Link>
            <a
              href={ctaWhatsapp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label={copy.whatsappAria}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
