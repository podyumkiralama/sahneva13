// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";

// Navbar ile uyumlu focus ring (Offset rengi footer background'a göre ayarlandı)
const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#020617]";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/sahnevaorganizasyon",
    label: "Sahneva Instagram",
    title: "Instagram",
    icon: "📷",
    gradient: "from-blue-500/30 via-purple-500/30 to-pink-500/20",
    rel: "me",
  },
  {
    href: "https://www.youtube.com/@sahneva",
    label: "Sahneva YouTube",
    title: "YouTube",
    icon: "▶",
    gradient: "from-red-500/30 via-orange-400/30 to-yellow-400/20",
  },
];

const TR_SERVICES = [
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
];

const TR_QUICK_LINKS = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/podyum-kiralama-fiyatlari", label: "Podyum Kiralama Fiyatları" },
  {
    href: "/kvkk",
    label: "KVKK / Gizlilik",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const TR_POPULAR_PAGES = [
  { href: "/masa-sandalye-kiralama", label: "Masa & Sandalye Kiralama" },
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  { href: "/bolgesel-kiralama", label: "Bölgesel Kiralama" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
];

const BUSINESS_LINKS = [
  {
    href: "https://g.page/r/CZhkMzkNOdgnEBI",
    label: "Google Haritalar'da bizi bulun",
    labelEn: "Find us on Google Maps",
    icon: "📍",
  },
  {
    href: "https://g.page/r/CZhkMzkNOdgnEBI/review",
    label: "Google'da yorum yazın",
    labelEn: "Write a Google review",
    icon: "⭐",
  },
];

/* --- Yardımcı Bileşen: Standart Footer Link --- */
const FooterLink = ({
  href,
  children,
  hoverColorClass = "hover:text-blue-400 hover:border-blue-400",
  target,
  rel,
}) => (
  <li>
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`
        group flex items-center py-1.5 pl-2 border-l-2 border-transparent
        transition-all duration-200 rounded-sm text-gray-300
        hover:pl-3 hover:text-white ${hoverColorClass} ${FOCUS_RING_CLASS}
      `}
    >
      <span className="text-sm leading-relaxed">{children}</span>
    </Link>
  </li>
);

/* --- Yardımcı Bileşen: Sosyal Medya İkonu --- */
const SocialLink = ({
  href,
  label,
  icon,
  gradient,
  rel,
  sizeClass = "h-11 w-11",
}) => {
  const relValue = rel ? `noopener noreferrer ${rel}` : "noopener noreferrer";

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel={relValue}
        aria-label={`${label} – yeni sekmede açılır`}
        className={`
          group relative inline-flex ${sizeClass} items-center justify-center rounded-2xl
          bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10
          hover:border-white/40 transition-all duration-300 hover:scale-110
          ${FOCUS_RING_CLASS}
        `}
      >
        <span
          className={`
            absolute inset-0 rounded-2xl bg-gradient-to-tr ${gradient}
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          `}
          aria-hidden="true"
        />
        <span aria-hidden="true" className="text-xl relative z-10">
          {icon}
        </span>
      </a>
    </li>
  );
};

export default function Footer({
  id = "_main_footer",
  ariaLabel,
  ariaLabelledby,
  ariaDescribedby,
  role: roleOverride,
  descriptionId: descriptionIdProp,
  headingId: headingIdProp,
  locale = "tr",
}) {
  const isEn = locale === "en";
  const instanceId = useId();
  const currentYear = new Date().getFullYear();

  const footerStrings = isEn
    ? LOCALE_CONTENT?.en?.footer
    : LOCALE_CONTENT?.tr?.footer || {
        ariaLabel: "Site altbilgisi",
        description:
          "İletişim bilgileri, hizmet bağlantıları ve sosyal medya hesaplarının bulunduğu altbilgi alanı",
      };

  const SERVICES = isEn ? (footerStrings?.services ?? TR_SERVICES) : TR_SERVICES;
  const QUICK_LINKS = isEn ? (footerStrings?.quickLinks ?? TR_QUICK_LINKS) : TR_QUICK_LINKS;
  const POPULAR_PAGES = isEn ? (footerStrings?.popularPages ?? TR_POPULAR_PAGES) : TR_POPULAR_PAGES;

  const servicesTitle = isEn ? (footerStrings?.servicesTitle ?? "Our Services") : "Hizmetlerimiz";
  const quickLinksTitle = isEn ? (footerStrings?.quickLinksTitle ?? "Quick Links") : "Hızlı Erişim";
  const popularPagesTitle = isEn ? (footerStrings?.popularPagesTitle ?? "Popular Pages") : "Popüler Sayfalar";
  const contactTitle = isEn ? "Contact Information" : "İletişim Bilgileri";
  const officeTitle = isEn ? (footerStrings?.officeTitle ?? "Main Office") : "Merkez Ofis";
  const address = isEn ? (footerStrings?.address ?? "Kağıthane, Istanbul") : "Kağıthane, İstanbul";
  const nationwide = isEn ? "Nationwide service" : "Türkiye geneli hizmet";
  const workingHoursLabel = isEn ? (footerStrings?.workingHours ?? "Working Hours") : "Çalışma Saatleri";
  const workingHoursValue = isEn ? (footerStrings?.workingHoursValue ?? "Mon–Sat 09:00–23:00") : "Pzt-Cts 09:00-23:00";
  const socialMediaLabel = isEn ? "Follow us on social media" : "Sosyal medya hesaplarımız";
  const privacyLinkLabel = isEn ? (footerStrings?.privacyLink ?? "Privacy Policy") : "KVKK Aydınlatma Metni";
  const privacyHref = isEn ? "/en/data-protection" : "/kvkk";
  const backToTopLabel = isEn ? (footerStrings?.backToTop ?? "Back to top") : "Başa dön";
  const copyrightDesc = isEn
    ? (footerStrings?.copyrightDesc ?? "Nationwide professional stage rental, podium rental, LED screen rental, sound and light systems, tent rental and table-chair rental services.")
    : "Türkiye genelinde profesyonel sahne kiralama, podyum kiralama, LED ekran kiralama, ses ışık sistemleri, çadır kiralama ve masa sandalye kiralama hizmetleri.";
  const rightsLabel = isEn ? "All rights reserved." : "Tüm hakları saklıdır.";

  const aboutDesc = isEn
    ? (footerStrings?.about ?? "Nationwide professional stage, podium, LED screen, sound and light rental services across Türkiye.")
    : "Türkiye genelinde profesyonel sahne, podyum, LED ekran, ses ve ışık kiralama hizmetleri.";

  const brandSubtitle = isEn
    ? "Professional event production and organization services."
    : "Profesyonel etkinlik prodüksiyon ve organizasyon firması hizmetleri.";

  const brandDesc1 = isEn
    ? (<span className="block">Across Türkiye: <span className="text-blue-300 font-semibold">stage rental, podium rental, LED screen rental</span>, sound and light systems and truss rental with full-scale setup.</span>)
    : (<span className="block">Türkiye genelinde{" "}<span className="text-blue-300 font-semibold">sahne kiralama, podyum kiralama, LED ekran kiralama</span>, ses ışık sistemleri ve truss kiralama ile tam kapasiteli kurulum.</span>);

  const brandDesc2 = isEn
    ? (<span className="block mt-1 text-slate-300/90 leading-relaxed">Festival, fair, concert, corporate event and graduation organizations with tent rental and table-chair rental solutions.</span>)
    : (<span className="block mt-1 text-slate-300/90 leading-relaxed">Festival, fuar, konser, kurumsal etkinlik ve mezuniyet organizasyonlarında çadır kiralama ile masa sandalye kiralama çözümlerinde yanınızdayız.</span>);

  const aboutHeading = isEn ? "About Sahneva" : "Sahneva Hakkında";

  const computedHeadingId =
    ariaLabelledby ?? headingIdProp ?? `site-footer-heading-${instanceId}`;
  const computedDescriptionId =
    ariaDescribedby ?? descriptionIdProp ?? `site-footer-desc-${instanceId}`;

  const ariaLabelledbyValue = ariaLabel ? undefined : computedHeadingId;
  const footerDescription = footerStrings?.description;

  return (
    <footer
      id={id}
      className="
        relative w-full flex-shrink-0
        bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617]
        border-t border-white/10
        overflow-hidden
      "
      aria-labelledby={ariaLabelledbyValue}
      aria-label={ariaLabel}
      aria-describedby={computedDescriptionId}
      role={roleOverride}
      tabIndex={-1}
    >
      {/* Dekoratif arka plan efektleri */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="grid-overlay"
            style={{
              "--grid-overlay-top": "#1d4ed833",
              "--grid-overlay-bottom": "#7c3aed33",
              "--grid-overlay-opacity": "0.4",
              "--grid-overlay-blur": "32px",
            }}
          />
        </div>

        {/* Glow orbs */}
        <div className="absolute -top-32 -left-16 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 right-0 w-96 h-96 bg-purple-500/25 blur-3xl rounded-full" />

        {/* ekstra hafif vignette (kontrastı bozmadan derinlik) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/25" />
      </div>

      {/* Görünmez ana başlık (SR için) */}
      {!ariaLabel && !ariaLabelledby && (
        <h2 id={computedHeadingId} className="sr-only">
          {footerStrings?.ariaLabel}
        </h2>
      )}

      {/* SR-only açıklama: id TEK YERDE kullanılmalı */}
      {footerDescription ? (
        <p id={computedDescriptionId} className="sr-only">
          {footerDescription}
        </p>
      ) : null}

      {/* Üst grid */}
      <div
        className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-6 xl:gap-8 pt-8 pb-8 md:pt-10 md:pb-10 px-6"
        aria-label={isEn ? "Footer: services, quick links and contact" : "Altbilgi: hizmetler, hızlı erişim ve iletişim"}
      >
        {/* 1. SÜTUN: Marka & Sosyal */}
        <section aria-labelledby="ft-brand" className="lg:col-span-1">
          <div
            className="
              rounded-3xl border border-white/10 bg-white/5
              bg-gradient-to-br from-white/5 via-white/0 to-white/0
              backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.8)]
              p-4 md:p-4 flex flex-col gap-4
            "
          >
            <h3 id="ft-brand" className="sr-only">
              {aboutHeading}
            </h3>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/android-chrome-512x512.png"
                  alt="Sahneva logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-2xl"
                />
                <span
                  className="
                    pointer-events-none absolute -bottom-1 -right-1 w-4 h-4 rounded-full
                    bg-emerald-400/80 blur-[3px]
                  "
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Sahneva</p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {brandSubtitle}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 max-w-prose">
              {brandDesc1}
              {brandDesc2}
            </p>
          </div>
        </section>

        {/* 2. SÜTUN: Hizmetler */}
        <nav aria-labelledby="ft-services" className="lg:col-span-1">
          <div
            className="
              rounded-3xl border border-white/10 bg-white/5
              bg-gradient-to-br from-blue-600/10 via-slate-900/40 to-slate-900/60
              backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.85)]
              p-4 md:p-4
            "
          >
            <h3
              id="ft-services"
              className="
                text-white font-bold mb-4 text-lg
                gradient-text gradient-text--safe-xl
              "
            >
              {servicesTitle}
            </h3>
            <ul className="space-y-0.5 text-sm text-gray-300">
              {SERVICES.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  hoverColorClass="hover:text-blue-300 hover:border-blue-400"
                >
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </nav>

        {/* 3. SÜTUN: Hızlı Erişim */}
        <nav aria-labelledby="ft-quick" className="lg:col-span-1">
          <div
            className="
              rounded-3xl border border-white/10 bg-white/5
              bg-gradient-to-br from-purple-600/15 via-slate-900/40 to-slate-900/60
              backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.85)]
              p-4 md:p-4
            "
          >
            <h3
              id="ft-quick"
              className="
                text-white font-bold mb-4 text-lg
                gradient-text gradient-text--safe-xl
              "
            >
              {quickLinksTitle}
            </h3>
            <ul className="space-y-0.5 text-sm text-gray-300">
              {QUICK_LINKS.map((link) => (
                <FooterLink
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  hoverColorClass="hover:text-purple-300 hover:border-purple-400"
                >
                  {link.label}
                </FooterLink>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-200 mb-2">{popularPagesTitle}</h4>
              <ul className="space-y-0.5 text-sm text-gray-300">
                {POPULAR_PAGES.map((link) => (
                  <FooterLink
                    key={link.href}
                    href={link.href}
                    hoverColorClass="hover:text-purple-300 hover:border-purple-400"
                  >
                    {link.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* 4. SÜTUN: İletişim */}
        <section aria-labelledby="ft-contact" className="lg:col-span-1">
          <div
            className="
              rounded-3xl border border-white/10 bg-white/5
              bg-gradient-to-br from-cyan-500/15 via-slate-900/40 to-slate-900/60
              backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.85)]
              p-4 md:p-4
            "
          >
            <h3
              id="ft-contact"
              className="
                text-white font-bold mb-4 text-lg
                gradient-text gradient-text--safe-xl
              "
            >
              {contactTitle}
            </h3>

            <address className="not-italic space-y-3 text-sm text-gray-300">
              {/* Adres */}
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl
                    bg-slate-900/80 text-lg border border-white/10 shadow-sm
                  "
                  aria-hidden="true"
                >
                  📍
                </span>
                <div>
                  <span className="block text-white font-medium mb-0.5">{officeTitle}</span>
                  <span className="block text-gray-200">{address}</span>
                  <span className="block text-gray-100 text-xs mt-0.5">{nationwide}</span>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl
                    bg-slate-900/80 text-lg border border-white/10 shadow-sm
                  "
                  aria-hidden="true"
                >
                  📞
                </span>
                <a
                  href="tel:+905453048671"
                  className={`text-gray-200 hover:text-white font-medium transition-colors ${FOCUS_RING_CLASS}`}
                >
                  +90 545 304 8671
                </a>
              </div>

              {/* E-posta */}
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl
                    bg-slate-900/80 text-lg border border-white/10 shadow-sm
                  "
                  aria-hidden="true"
                >
                  ✉️
                </span>
                  <a
                    href="mailto:info@sahneva.com"
                    className={`text-gray-200 hover:text-white transition-colors ${FOCUS_RING_CLASS}`}
                  >
                    info@sahneva.com
                    <span className="sr-only">
                      {isEn ? " (opens your email app)" : " (e-posta uygulamasını açar)"}
                    </span>
                  </a>
              </div>

              {/* Çalışma saatleri */}
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-xl
                    bg-slate-900/80 text-lg border border-white/10 shadow-sm
                  "
                  aria-hidden="true"
                >
                  🕒
                </span>
                <div>
                  <span className="block text-white font-medium mb-0.5">{workingHoursLabel}</span>
                  <span className="block text-gray-200">{workingHoursValue}</span>
                </div>
              </div>
            </address>

            <nav className="pt-2 flex flex-col gap-2" aria-label={isEn ? "Business links" : "İşletme bağlantıları"}>
              {BUSINESS_LINKS.map(({ href, label, labelEn, icon }) => {
                const displayLabel = isEn ? labelEn : label;
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group inline-flex items-center gap-2 text-xs text-gray-300
                      hover:text-white transition-all duration-300 ${FOCUS_RING_CLASS}
                    `}
                    aria-label={`${displayLabel} – ${isEn ? "opens in new tab" : "yeni sekmede açılır"}`}
                  >
                    <span
                      className="group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    {displayLabel}
                  </a>
                );
              })}
            </nav>

            <nav className="border-t border-white/10 pt-3" aria-label={isEn ? "Social media" : "Sosyal medya"}>
              <p className="text-xs font-medium text-slate-400 mb-2">{socialMediaLabel}</p>
              <ul className="flex gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.href} sizeClass="h-9 w-9" {...link} />
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </div>

      {/* Alt Telif Satırı */}
      <div className="relative border-t border-white/10 text-center py-5 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-6 relative z-10">
          <p className="mb-2 text-[13px] text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {copyrightDesc}
          </p>

          <p className="mb-3 text-sm text-gray-300">
            © <span>{currentYear}</span>{" "}
            <span className="text-white font-medium">Sahneva</span> — {rightsLabel}
          </p>

          <nav
            aria-label={isEn ? "Footer links" : "Altbilgi bağlantıları"}
            className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-gray-300"
          >
            <Link
              href={privacyHref}
              className={`
                hover:text-white transition-colors underline underline-offset-4
                ${FOCUS_RING_CLASS}
              `}
            >
              {privacyLinkLabel}
            </Link>
            <span className="hidden sm:inline text-white/30" aria-hidden="true">
              •
            </span>
            <a
              href="#_main_content"
              className={`
                hover:text-white transition-colors underline underline-offset-4
                ${FOCUS_RING_CLASS}
              `}
            >
              {backToTopLabel}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
