// components/Navbar.js (Server Component)
// Goal: Keep the navbar mostly server-rendered to reduce hydration/TBT.
// Interactivity is isolated to the mobile drawer only.

import Link from "next/link";
import Image from "next/image";
import NavbarMobile from "@/components/NavbarMobile.client";
import NavbarSearchDropdown from "@/components/NavbarSearchDropdown.client";
import ServicesDropdownBehavior from "@/components/ServicesDropdownBehavior.client";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher.client";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";

const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white";

const TR_WHATSAPP_MESSAGE = encodeURIComponent(
  "Merhaba, Sahneva ile etkinlik ekipmanları için teklif ve destek almak istiyorum.",
);
const EN_WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to get a quote and support for event equipment from Sahneva.",
);

const TR_SERVICE_LINKS = [
  { href: "/podyum-kiralama", label: "Podyum Kiralama", icon: "👑", description: "Profesyonel modüler podyum sistemleri" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama", icon: "🖥️", description: "HD LED ekran ve video wall çözümleri" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama", icon: "🎪", description: "Portatif ve modüler sahne sistemleri" },
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon", icon: "🏢", description: "Kurumsal etkinlik organizasyonu ve uçtan uca yönetim" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri", icon: "🎭", description: "Konser kalitesinde ses ışık sistemleri" },
  { href: "/truss-kiralama", label: "Truss Kiralama", icon: "🧩", description: "Alüminyum truss, portal ve üst yapı çözümleri" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama", icon: "⛺", description: "Her türlü etkinlik için çadır çözümleri" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama", icon: "🪑", description: "Toplantı ve davetler için masa sandalye kiralama" },
];

const TR_RESEARCH_LINKS = [
  { href: "/iletisim", label: "İletişim", icon: "☎️", description: "Hızlı teklif ve iletişim kanalları" },
  { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz", icon: "🧭", description: "Süreç, kurulum ve operasyon akışı" },
  { href: "/bolgesel-kiralama", label: "Bölgesel Kiralama", icon: "🗺️", description: "Türkiye geneli kurulum ve lojistik" },
  { href: "/sss", label: "SSS", icon: "💡", description: "Sık sorulan sorular ve yanıtlar" },
];

function DesktopNavLink({ href, children }) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={`relative text-[15px] font-bold transition-all duration-200 px-4 py-2.5 rounded-xl text-neutral-800 hover:text-blue-700 hover:bg-neutral-50 border border-transparent hover:border-neutral-200 ${FOCUS_RING_CLASS}`}
    >
      {children}
    </Link>
  );
}

export default function Navbar({ locale = "tr", ...props }) {
  const isEn = locale === "en";
  const navContent = isEn ? LOCALE_CONTENT.en.navbar : null;

  const SERVICE_LINKS = isEn ? (navContent?.serviceLinks ?? LOCALE_CONTENT.en.navbar.serviceLinks) : TR_SERVICE_LINKS;
  const RESEARCH_LINKS = isEn ? (navContent?.researchLinks ?? LOCALE_CONTENT.en.navbar.researchLinks) : TR_RESEARCH_LINKS;

  const whatsappMessage = isEn ? EN_WHATSAPP_MESSAGE : TR_WHATSAPP_MESSAGE;
  const whatsappHref = `https://wa.me/905453048671?text=${whatsappMessage}&utm_source=navbar&utm_medium=desktop_whatsapp`;

  const homeHref = isEn ? "/en" : "/";
  const aboutHref = isEn ? "/en/about" : "/hakkimizda";
  const blogHref = isEn ? "/en/blog" : "/blog";
  const servicesHref = isEn ? "/en/services" : "/hizmetler";

  const aboutLabel = isEn ? "About Us" : "Hakkımızda";
  const blogLabel = "Blog";
  const servicesDropdownLabel = isEn ? "Services" : "Hizmetler";
  const exploreLabel = isEn ? "Explore Us" : "Bizi Araştırın";
  const exploreSubtitle = isEn ? "Process, contact and information pages" : "Süreç, iletişim ve bilgi sayfaları";
  const servicesSubtitle = isEn ? "Stage, podium, LED screen, sound-light and more." : "Sahne, podyum, LED ekran, ses-ışık ve daha fazlası.";
  const viewAllLabel = isEn ? "View All Services" : "Tümünü gör";
  const whatsappLabel = isEn ? "WhatsApp Support" : "WhatsApp Destek";
  const logoAriaLabel = isEn ? "Sahneva - Home" : "Sahneva - Ana Sayfa";

  return (
    <nav {...props} className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200/80 shadow-lg">
      <ServicesDropdownBehavior detailsId="nav-services-details" />
      <ServicesDropdownBehavior detailsId="nav-research-details" panelId="nav-research-panel" />

      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={homeHref} prefetch={false} className={`flex items-center gap-3 ${FOCUS_RING_CLASS}`} aria-label={logoAriaLabel}>
            <Image src="/img/logo.webp" alt="Sahneva Logo" width={160} height={40} className="h-8 lg:h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-4">
            <DesktopNavLink href={aboutHref}>{aboutLabel}</DesktopNavLink>
            <DesktopNavLink href={blogHref}>{blogLabel}</DesktopNavLink>

            <NavbarSearchDropdown locale={locale} />

            {/* 🔥 THEME SWITCH */}
            <ThemeSwitcher />

            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold bg-white text-emerald-700 border border-emerald-200">
              💬 {whatsappLabel}
            </a>
          </div>

          <NavbarMobile serviceLinks={SERVICE_LINKS} researchLinks={RESEARCH_LINKS} />
        </div>
      </div>
    </nav>
  );
}
