// components/Navbar.js (Server Component)
// Goal: Keep the navbar mostly server-rendered to reduce hydration/TBT.
// Interactivity is isolated to the mobile drawer only.

import Link from "next/link";
import Image from "next/image";
import NavbarMobile from "@/components/NavbarMobile.client";
import NavbarSearchDropdown from "@/components/NavbarSearchDropdown.client";
import ServicesDropdownBehavior from "@/components/ServicesDropdownBehavior.client";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";

const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white";

const TR_WHATSAPP_MESSAGE = encodeURIComponent(
  "Merhaba, Sahneva ile etkinlik ekipmanları için teklif ve destek almak istiyorum.",
);
const EN_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to get a quote and support for event equipment from Sahneva.",
);

// Keep the same data so existing text/SEO stays consistent.
const TR_SERVICE_LINKS = [
  {
    href: "/podyum-kiralama",
    label: "Podyum Kiralama",
    icon: "👑",
    description: "Profesyonel modüler podyum sistemleri",
  },
  {
    href: "/led-ekran-kiralama",
    label: "LED Ekran Kiralama",
    icon: "🖥️",
    description: "HD LED ekran ve video wall çözümleri",
  },
  {
    href: "/sahne-kiralama",
    label: "Sahne Kiralama",
    icon: "🎪",
    description: "Portatif ve modüler sahne sistemleri",
  },
  {
    href: "/kurumsal-organizasyon",
    label: "Kurumsal Organizasyon",
    icon: "🏢",
    description: "Kurumsal etkinlik organizasyonu ve uçtan uca yönetim",
  },
  {
    href: "/ses-isik-sistemleri",
    label: "Ses Işık Sistemleri",
    icon: "🎭",
    description: "Konser kalitesinde ses ışık sistemleri",
  },
  {
    href: "/truss-kiralama",
    label: "Truss Kiralama",
    icon: "🧩",
    description: "Alüminyum truss, portal ve üst yapı çözümleri",
  },
  {
    href: "/cadir-kiralama",
    label: "Çadır Kiralama",
    icon: "⛺",
    description: "Her türlü etkinlik için çadır çözümleri",
  },
  {
    href: "/masa-sandalye-kiralama",
    label: "Masa Sandalye Kiralama",
    icon: "🪑",
    description: "Toplantı ve davetler için masa sandalye kiralama",
  },
];

const TR_RESEARCH_LINKS = [
  {
    href: "/iletisim",
    label: "İletişim",
    icon: "☎️",
    description: "Hızlı teklif ve iletişim kanalları",
  },
  {
    href: "/nasil-calisiyoruz",
    label: "Nasıl Çalışıyoruz",
    icon: "🧭",
    description: "Süreç, kurulum ve operasyon akışı",
  },
  {
    href: "/bolgesel-kiralama",
    label: "Bölgesel Kiralama",
    icon: "🗺️",
    description: "Türkiye geneli kurulum ve lojistik",
  },
  {
    href: "/sss",
    label: "SSS",
    icon: "💡",
    description: "Sık sorulan sorular ve yanıtlar",
  },
];

function DesktopNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex min-h-[44px] items-center px-1 py-2 text-[14px] font-extrabold tracking-[-0.01em] text-neutral-900 transition-colors duration-200 hover:text-blue-700 xl:text-[15px]
      ${FOCUS_RING_CLASS}`}
    >
      {children}
      <span
        className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-blue-700 transition-all duration-200 group-hover:w-full"
        aria-hidden="true"
      />
    </Link>
  );
}

export default function Navbar({ locale = "tr", ...props }) {
  const isEn = locale === "en";
  const navContent = isEn ? LOCALE_CONTENT.en.navbar : null;

  const SERVICE_LINKS = isEn
    ? (navContent?.serviceLinks ?? LOCALE_CONTENT.en.navbar.serviceLinks)
    : TR_SERVICE_LINKS;

  const RESEARCH_LINKS = isEn
    ? (navContent?.researchLinks ?? LOCALE_CONTENT.en.navbar.researchLinks)
    : TR_RESEARCH_LINKS;

  const whatsappMessage = isEn ? EN_WHATSAPP_MESSAGE : TR_WHATSAPP_MESSAGE;
  const whatsappHref = `https://wa.me/905453048671?text=${whatsappMessage}&utm_source=navbar&utm_medium=desktop_whatsapp`;

  const homeHref = isEn ? "/en" : "/";
  const aboutHref = isEn ? "/en/about" : "/hakkimizda";
  const blogHref = isEn ? "/en/blog" : "/blog";
  const servicesHref = isEn ? "/en/services" : "/hizmetler";
  const projectsHref = isEn ? "/en/projects" : "/projeler";
  const corporateHref = isEn ? "/en/corporate-events" : "/kurumsal-organizasyon";
  const faqHref = isEn ? "/en/faq" : "/sss";
  const contactHref = isEn ? "/en/contact" : "/iletisim";
  const otherLocaleHref = isEn ? "/" : "/en";

  const aboutLabel = isEn ? "About Us" : "Hakkımızda";
  const blogLabel = isEn ? "Blog" : "Blog";
  const projectsLabel = isEn ? "Projects" : "Projeler";
  const corporateLabel = isEn ? "Corporate" : "Kurumsal";
  const faqLabel = isEn ? "FAQ" : "SSS";
  const contactLabel = isEn ? "Contact" : "İletişim";
  const quoteLabel = isEn ? "Get Quote" : "Teklif Al";
  const otherLocaleLabel = isEn ? "TR" : "EN";
  const servicesDropdownLabel = isEn ? "Services" : "Hizmetler";
  const exploreLabel = isEn ? "Explore Us" : "Bizi Araştırın";
  const exploreSubtitle = isEn ? "Process, contact and information pages" : "Süreç, iletişim ve bilgi sayfaları";
  const servicesSubtitle = isEn ? "Stage, podium, LED screen, sound-light and more." : "Sahne, podyum, LED ekran, ses-ışık ve daha fazlası.";
  const viewAllLabel = isEn ? "View All Services" : "Tümünü gör";
  const whatsappLabel = isEn ? "WhatsApp Support" : "WhatsApp Destek";
  const logoAriaLabel = isEn ? "Sahneva - Home" : "Sahneva - Ana Sayfa";
  const megaBadge = isEn ? "Sahneva" : "Sahneva Organizasyon";
  const megaTitle = isEn ? "Services" : "Hizmetler";
  const megaImageAlt = isEn
    ? "Sahneva services: stage, podium, LED screen, sound-light and more"
    : "Sahneva hizmetleri: sahne, podyum, LED ekran, ses-ışık ve daha fazlası";

  return (
    <>
      <nav
        {...props}
        className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200/80 bg-white/95 shadow-lg backdrop-blur-xl"
      >
        {/* Tiny client island: closes the <details> on outside click / Esc / link click */}
        <ServicesDropdownBehavior detailsId="nav-services-details" />
        <ServicesDropdownBehavior
          detailsId="nav-contact-details"
          panelId="nav-contact-panel"
        />

        <div className="container relative">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href={homeHref}
              className={`flex items-center gap-3 group ${FOCUS_RING_CLASS}`}
              aria-label={logoAriaLabel}
            >
              <Image
                src="/img/logo.webp"
                alt="Sahneva Logo"
                width={160}
                height={40}
                decoding="async"
                sizes="(max-width: 768px) 120px, 160px"
                className="h-8 lg:h-10 w-auto transition-transform duration-200 group-hover:scale-105"
                style={{ width: "auto" }}
              />
            </Link>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-3 rounded-full border border-neutral-200/80 bg-white/75 px-4 py-2 shadow-sm xl:gap-4 2xl:gap-5">
              <DesktopNavLink href={aboutHref}>{aboutLabel}</DesktopNavLink>

              {/* Services: native <details> => low JS */}
              <details
                id="nav-services-details"
                className="relative group"
                data-nav-dropdown="true"
              >
                <summary
                  id="nav-services-summary"
                  className={`group list-none cursor-pointer select-none relative inline-flex min-h-[44px] items-center px-1 py-2 text-[14px] font-extrabold tracking-[-0.01em] text-neutral-900 transition-colors duration-200 hover:text-blue-700 xl:text-[15px]
                    ${FOCUS_RING_CLASS}`}
                >
                  <span className="flex items-center gap-2">
                    {servicesDropdownLabel}
                    <svg
                      className="h-3.5 w-3.5 text-blue-600 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-blue-700 transition-all duration-200 group-hover:w-full group-open:w-full"
                    aria-hidden="true"
                  />
                </summary>

                <div
                  id="nav-services-panel"
                  data-dropdown-panel
                  role="region"
                  aria-labelledby="nav-services-summary"
                  className="hidden group-open:block fixed inset-x-0 top-16 lg:top-20 z-[70]"
                >
                  <div className="container">
                    <div className="rounded-3xl border border-neutral-200 bg-white shadow-2xl overflow-hidden">
                      <div className="grid gap-6 p-6 lg:grid-cols-[360px_1fr] items-stretch">
                        <Link
                          href={servicesHref}
                          className={`group relative overflow-hidden rounded-2xl border border-neutral-200 ${FOCUS_RING_CLASS}`}
                        >
                          <div className="relative min-h-[360px] h-full bg-[#0B1120]">
                            <Image
                              src="/img/nav/hizmetler-mega.webp"
                              alt={megaImageAlt}
                              fill
                              sizes="(max-width: 1024px) 100vw, 360px"
                              className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
                            <div className="grid-overlay" aria-hidden="true" />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent"
                              aria-hidden="true"
                            />

                            <div className="relative z-10 p-5">
                              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/20">
                                {megaBadge}
                              </div>
                              <div className="mt-3 text-3xl font-black tracking-tight text-white">
                                {megaTitle}
                              </div>
                              <p className="mt-2 text-sm font-medium text-white/85">
                                {servicesSubtitle}
                              </p>
                              <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-white">
                                {viewAllLabel} <span aria-hidden="true">›</span>
                              </div>
                            </div>
                          </div>
                        </Link>

                        <div className="grid gap-4 md:grid-cols-2">
                          {SERVICE_LINKS.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              className={`group flex items-start gap-3 rounded-xl px-5 py-3.5 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-transparent hover:border-blue-200 ${FOCUS_RING_CLASS}`}
                            >
                              <span
                                className="mt-0.5 text-lg opacity-80 group-hover:opacity-100"
                                aria-hidden="true"
                              >
                                {s.icon}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="font-extrabold text-neutral-900 group-hover:text-blue-700">
                                  {s.label}
                                </div>
                                <div className="mt-0.5 text-xs font-medium text-neutral-600">
                                  {s.description}
                                </div>
                              </div>
                              <span
                                className="ml-2 text-neutral-400 group-hover:text-blue-600"
                                aria-hidden="true"
                              >
                                ›
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>

              {/* ✅ Only ONE "Bizi Araştırın" (after Services, as you wanted) */}
              <details
                id="nav-contact-details"
                className="relative group"
                data-nav-dropdown="true"
              >
                <summary
                  id="nav-contact-summary"
                  className={`group list-none cursor-pointer select-none relative inline-flex min-h-[44px] items-center px-1 py-2 text-[14px] font-extrabold tracking-[-0.01em] text-neutral-900 transition-colors duration-200 hover:text-blue-700 xl:text-[15px]
                    ${FOCUS_RING_CLASS}`}
                >
                  <span className="flex items-center gap-2">
                    {contactLabel}
                    <svg
                      className="h-3.5 w-3.5 text-blue-600 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                  <span
                    className="absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full bg-blue-700 transition-all duration-200 group-hover:w-full group-open:w-full"
                    aria-hidden="true"
                  />
                </summary>

                <div
                  id="nav-contact-panel"
                  data-dropdown-panel
                  role="region"
                  aria-labelledby="nav-contact-title"
                  className="hidden group-open:block absolute right-0 top-full mt-2 z-[70] w-[min(420px,90vw)]"
                >
                  <div className="rounded-2xl border border-neutral-200 bg-white shadow-2xl p-4">
                    <div className="px-2 pt-1">
                      <div
                        id="nav-contact-title"
                        className="text-base font-extrabold text-neutral-900"
                      >
                        {contactLabel}
                      </div>
                      <p className="mt-1 text-xs font-medium text-neutral-600">
                        {exploreSubtitle}
                      </p>
                    </div>

                    <ul className="mt-3 grid gap-2">
                      {RESEARCH_LINKS.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            prefetch={false}
                            className={`group flex items-start gap-3 rounded-xl px-4 py-3 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-transparent hover:border-blue-200 ${FOCUS_RING_CLASS}`}
                          >
                            <span
                              className="mt-0.5 text-lg opacity-80 group-hover:opacity-100"
                              aria-hidden="true"
                            >
                              {item.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                              <div className="font-extrabold text-neutral-900 group-hover:text-blue-700">
                                {item.label}
                              </div>
                              <div className="mt-0.5 text-xs font-medium text-neutral-600">
                                {item.description}
                              </div>
                            </div>
                            <span
                              className="ml-2 text-neutral-400 group-hover:text-blue-600"
                              aria-hidden="true"
                            >
                              ›
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </details>

              <DesktopNavLink href={projectsHref}>{projectsLabel}</DesktopNavLink>
              <DesktopNavLink href={corporateHref}>{corporateLabel}</DesktopNavLink>
              <DesktopNavLink href={blogHref}>{blogLabel}</DesktopNavLink>
              <DesktopNavLink href={faqHref}>{faqLabel}</DesktopNavLink>

              <NavbarSearchDropdown locale={locale} />

              <Link
                href={otherLocaleHref}
                hrefLang={isEn ? "tr" : "en"}
                className={`inline-flex min-h-[44px] items-center text-sm font-black text-neutral-900 transition-colors hover:text-blue-700 ${FOCUS_RING_CLASS}`}
              >
                {otherLocaleLabel}
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${whatsappLabel} – ${isEn ? "opens in new tab" : "yeni sekmede açılır"}`}
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#0B1120] px-5 text-sm font-black text-white shadow-lg shadow-blue-900/15 transition-all duration-200 hover:bg-blue-900 ${FOCUS_RING_CLASS}`}
              >
                <span aria-hidden="true" className="text-base">
                  💬
                </span>
                <span>{quoteLabel}</span>
              </a>
            </div>

            {/* Mobile (small JS island) */}
            <NavbarMobile serviceLinks={SERVICE_LINKS} researchLinks={RESEARCH_LINKS} />
          </div>
        </div>
      </nav>

      {/*
        NOT: Layout zaten <main className="pt-16 lg:pt-20"> verdiği için burada ekstra spacer kullanmıyoruz.
        Aksi halde sayfa ile navbar arasında çift boşluk oluşur.
      */}
    </>
  );
}
