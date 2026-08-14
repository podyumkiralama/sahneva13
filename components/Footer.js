// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { Instagram, Linkedin, Twitter, Youtube } from "@/components/icons/BrandIcons";
import { LOCALE_CONTENT } from "@/lib/i18n/localeContent";

const FOCUS_RING_CLASS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617]";

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/sahnevaorganizasyon",
    label: "Sahneva Instagram",
    title: "Instagram",
    icon: Instagram,
    gradient: "from-blue-500/30 via-purple-500/30 to-pink-500/20",
    rel: "me",
  },
  {
    href: "https://www.youtube.com/@SAHNEVA",
    label: "Sahneva YouTube",
    title: "YouTube",
    icon: Youtube,
    gradient: "from-red-500/30 via-orange-400/30 to-yellow-400/20",
    rel: "me",
  },
  {
    href: "https://x.com/Sahnevaevent",
    label: "Sahneva X",
    title: "X",
    icon: Twitter,
    gradient: "from-slate-500/30 via-slate-400/30 to-slate-300/20",
    rel: "me",
  },
  {
    href: "https://www.linkedin.com/company/sahneva-organizasyon",
    label: "Sahneva LinkedIn",
    title: "LinkedIn",
    icon: Linkedin,
    gradient: "from-sky-500/30 via-blue-500/30 to-cyan-400/20",
    rel: "me",
  },
];

const TR_SERVICES = [
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses Işık Sistemleri" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
];

const TR_QUICK_LINKS = [
  { href: "/hakkimizda", label: "Sahneva Hakkında" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/etkinlik-planlayici", label: "Etkinlik Planlayıcı" },
  { href: "/sozluk", label: "Teknik Terimler Sözlüğü" },
  { href: "/turkiyede-etkinlik-cozum-ortagi", label: "Türkiye’de Etkinlik Çözüm Ortağı" },
  { href: "/odeme", label: "Online Ödeme" },
  {
    href: "/kvkk",
    label: "KVKK / Gizlilik",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  { href: "/mesafeli-satis-sozlesmesi", label: "Mesafeli Satış Sözleşmesi" },
  { href: "/teslimat-ve-ifa-kosullari", label: "Teslimat ve İfa Koşulları" },
  { href: "/iptal-ve-iade-kosullari", label: "İptal ve İade Koşulları" },
];

const TR_POPULAR_PAGES = [
  { href: "/cadir-hesaplama", label: "Çadır Alan Hesaplama" },
  // Cadir hesaplayicinin aksine bu sayfaya sitede hicbir yerden link yoktu
  // (Ahrefs "Orphan page"); footer sitenin her yerinden erisim veriyor.
  { href: "/led-ekran-hesaplama", label: "LED Ekran Ölçü Hesaplama" },
  { href: "/masa-sandalye-kiralama", label: "Masa & Sandalye Kiralama" },
  { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  { href: "/bolgesel-kiralama", label: "Bölgesel Kiralama" },
  { href: "/projeler", label: "Projeler" },
  { href: "/yaptiklarimiz", label: "Yaptıklarımız" },
  { href: "/blog", label: "Sahneva Blog" },
];

const BUSINESS_LINKS = [
  {
    href: "https://g.page/r/CZhkMzkNOdgnEBI",
    label: "Google Haritalar'da bizi bulun",
    labelEn: "Find us on Google Maps",
    labelRu: "Найти нас на Google Maps",
    labelZh: "在 Google 地图上找到我们",
    labelDe: "Auf Google Maps finden",
    icon: MapPin,
  },
  {
    href: "https://g.page/r/CZhkMzkNOdgnEBI/review",
    label: "Google'da yorum yazın",
    labelEn: "Write a Google review",
    labelRu: "Оставить отзыв в Google",
    labelZh: "在 Google 上留下评价",
    labelDe: "Google-Bewertung schreiben",
    icon: Star,
  },
];

/* --- Yardımcı Bileşen: Standart Footer Link --- */
const LANGUAGE_LINKS = [
  { href: "/", label: "TR", text: "Türkçe", hrefLang: "tr-TR", locale: "tr" },
  { href: "/en", label: "EN", text: "English", hrefLang: "en", locale: "en" },
  { href: "/ar", label: "AR", text: "العربية", hrefLang: "ar", locale: "ar" },
  { href: "/ru", label: "RU", text: "Русский", hrefLang: "ru", locale: "ru" },
  { href: "/zh", label: "ZH", text: "中文", hrefLang: "zh", locale: "zh" },
  { href: "/de", label: "DE", text: "Deutsch", hrefLang: "de", locale: "de" },
];

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
      prefetch={false}
      target={target}
      rel={rel}
      className={`
        group flex min-h-[44px] items-center border-l-2 border-transparent py-2 pl-2
        text-slate-300 transition-colors duration-200
        hover:text-white ${hoverColorClass} ${FOCUS_RING_CLASS}
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
  icon: Icon,
  gradient,
  rel,
  sizeClass = "h-11 w-11",
  newTabLabel = "yeni sekmede açılır",
}) => {
  const relValue = rel ? `noopener noreferrer ${rel}` : "noopener noreferrer";

  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel={relValue}
        className={`
          group relative inline-flex ${sizeClass} items-center justify-center rounded-lg
          border border-white/10 bg-white/5 transition-colors duration-200
          hover:border-white/30 hover:bg-white/10
          ${FOCUS_RING_CLASS}
        `}
      >
        <span
          className={`
            absolute inset-0 rounded-lg bg-gradient-to-tr ${gradient}
            opacity-0 transition-opacity duration-200 group-hover:opacity-100
          `}
          aria-hidden="true"
        />
        <Icon aria-hidden="true" className="relative z-10 h-5 w-5" strokeWidth={1.8} />
        <span className="sr-only">{label} ({newTabLabel})</span>
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
  const isRu = locale === "ru";
  const isZh = locale === "zh";
  const isDe = locale === "de";
  const isIntl = isEn || isRu || isZh || isDe;
  const instanceId = useId();
  const currentYear = new Date().getFullYear();

  const footerStrings = isEn
    ? LOCALE_CONTENT?.en?.footer
    : isRu
      ? LOCALE_CONTENT?.ru?.footer
      : isZh
        ? LOCALE_CONTENT?.zh?.footer
        : isDe
          ? LOCALE_CONTENT?.de?.footer
          : LOCALE_CONTENT?.tr?.footer || {
        ariaLabel: "Site altbilgisi",
        description:
          "İletişim bilgileri, hizmet bağlantıları ve sosyal medya hesaplarının bulunduğu altbilgi alanı",
      };

  const SERVICES = isIntl ? (footerStrings?.services ?? TR_SERVICES) : TR_SERVICES;
  const QUICK_LINKS = isIntl ? (footerStrings?.quickLinks ?? TR_QUICK_LINKS) : TR_QUICK_LINKS;
  const POPULAR_PAGES = isIntl ? (footerStrings?.popularPages ?? TR_POPULAR_PAGES) : TR_POPULAR_PAGES;

  const servicesTitle = isIntl ? (footerStrings?.servicesTitle ?? "Our Services") : "Hizmetlerimiz";
  const quickLinksTitle = isIntl ? (footerStrings?.quickLinksTitle ?? "Quick Links") : "Hızlı Erişim";
  const popularPagesTitle = isIntl ? (footerStrings?.popularPagesTitle ?? "Popular Pages") : "Popüler Sayfalar";
  const contactTitle = isEn ? "Contact Information" : isRu ? "Контакты" : isZh ? "联系方式" : isDe ? "Kontaktdaten" : "İletişim Bilgileri";
  const officeTitle = isIntl ? (footerStrings?.officeTitle ?? "Main Office") : "Merkez Ofis";
  const address = isIntl ? (footerStrings?.address ?? "34408 Kağıthane, Istanbul") : "34408 Kağıthane, İstanbul";
  const nationwide = isEn ? "Nationwide service" : isRu ? "Обслуживание по всей Турции" : isZh ? "服务覆盖土耳其全境" : isDe ? "Landesweit im Einsatz" : "Türkiye geneli hizmet";
  const workingHoursLabel = isIntl ? (footerStrings?.workingHours ?? "Working Hours") : "Çalışma Saatleri";
  const workingHoursValue = isIntl ? (footerStrings?.workingHoursValue ?? "Open 24 hours") : "7/24 Açık";
  const socialMediaLabel = isEn ? "Follow us on social media" : isRu ? "Мы в социальных сетях" : isZh ? "关注我们的社交媒体" : isDe ? "Folgen Sie uns in den sozialen Medien" : "Sosyal medya hesaplarımız";
  const privacyLinkLabel = isIntl ? (footerStrings?.privacyLink ?? "Privacy Policy") : "KVKK Aydınlatma Metni";
  const privacyHref = isEn ? "/en/privacy-policy" : isRu ? "/ru/contact" : isZh ? "/zh/contact" : isDe ? "/de/datenschutz" : "/kvkk";
  const backToTopLabel = isIntl ? (footerStrings?.backToTop ?? "Back to top") : "Başa dön";
  const copyrightDesc = isIntl
    ? (footerStrings?.copyrightDesc ?? "Nationwide professional stage rental, podium rental, LED screen rental, sound and light systems, tent rental and table-chair rental services.")
    : "Türkiye genelinde profesyonel sahne kiralama, podyum kiralama, LED ekran kiralama, ses ışık sistemleri, çadır kiralama ve masa sandalye kiralama hizmetleri.";
  const rightsLabel = isEn ? "All rights reserved." : isRu ? "Все права защищены." : isZh ? "版权所有。" : isDe ? "Alle Rechte vorbehalten." : "Tüm hakları saklıdır.";
  const newTabLabel = isEn ? "opens in a new tab" : isRu ? "откроется в новой вкладке" : isZh ? "在新标签页中打开" : isDe ? "wird in einem neuen Tab geöffnet" : "yeni sekmede açılır";

  const brandSubtitle = isEn
    ? "Professional event production and organization services."
    : isRu
      ? "Профессиональный технический продакшн мероприятий в Турции."
      : isZh
        ? "土耳其专业活动技术制作与执行服务。"
        : isDe
          ? "Professionelle Eventproduktion und Veranstaltungstechnik in der Türkei."
          : "Profesyonel etkinlik prodüksiyon ve organizasyon firması hizmetleri.";

  const brandDesc1 = isEn
    ? (<span className="block">Across Türkiye: <span className="text-blue-300 font-semibold">stage rental, podium rental, LED screen rental</span>, sound and light systems and truss rental with full-scale setup.</span>)
    : isRu
      ? (<span className="block">В Турции: <span className="text-blue-300 font-semibold">аренда сцен, подиумов и LED-экранов</span>, звук, свет и truss с монтажной командой.</span>)
      : isZh
        ? (<span className="block">在土耳其全境提供<span className="text-blue-300 font-semibold">舞台租赁、T台租赁、LED屏幕租赁</span>、音响灯光系统与桁架租赁及现场安装。</span>)
        : isDe
        ? (<span className="block">In der gesamten Türkei: <span className="text-blue-300 font-semibold">Bühnen, Podeste und LED-Wände mieten</span>, dazu Ton- und Lichttechnik sowie Traversen inklusive Aufbau.</span>)
        : (<span className="block">Türkiye genelinde{" "}<span className="text-blue-300 font-semibold">sahne kiralama, podyum kiralama, LED ekran kiralama</span>, ses ışık sistemleri ve truss kiralama ile tam kapasiteli kurulum.</span>);

  const brandDesc2 = isEn
    ? (<span className="block mt-1 text-slate-300/90 leading-relaxed">Festival, fair, concert, corporate event and graduation organizations with tent rental and table-chair rental solutions.</span>)
    : isRu
      ? (<span className="block mt-1 text-slate-300/90 leading-relaxed">Конференции, концерты, выставки, корпоративные события и open-air проекты: шатры, столы, стулья и техническая поддержка.</span>)
      : isZh
        ? (<span className="block mt-1 text-slate-300/90 leading-relaxed">会议、展览、演出、企业活动与户外项目：篷房、桌椅与现场技术支持。</span>)
        : isDe
        ? (<span className="block mt-1 text-slate-300/90 leading-relaxed">Kongresse, Messen, Konzerte, Firmenveranstaltungen und Open-Air-Projekte: Zelte, Mobiliar und technische Betreuung vor Ort.</span>)
        : (<span className="block mt-1 text-slate-300/90 leading-relaxed">Festival, fuar, konser, kurumsal etkinlik ve mezuniyet organizasyonlarında çadır kiralama ile masa sandalye kiralama çözümlerinde yanınızdayız.</span>);

  const aboutHeading = isEn ? "About Sahneva" : isRu ? "О Sahneva" : isZh ? "关于 Sahneva" : isDe ? "Über Sahneva" : "Sahneva Hakkında";
  const ctaEyebrow = isEn
    ? "PLAN YOUR PROJECT"
    : isRu
      ? "ОБСУДИМ ПРОЕКТ"
      : isZh
        ? "规划您的项目"
        : isDe
          ? "PROJEKT PLANEN"
          : "PROJENİZİ KONUŞALIM";
  const ctaTitle = isEn
    ? "Let’s build the stage together."
    : isRu
      ? "Создадим площадку вместе."
      : isZh
        ? "让我们一起搭建舞台。"
        : isDe
          ? "Bauen wir die Bühne gemeinsam."
          : "Sahneyi birlikte kuralım.";
  const ctaDescription = isEn
    ? "Share the date, city and technical scope. We will clarify equipment, logistics and site operations in one plan."
    : isRu
      ? "Сообщите дату, город и технические задачи. Мы объединим оборудование, логистику и работу на площадке в одном плане."
      : isZh
        ? "告诉我们日期、城市和技术需求，我们将把设备、物流和现场运营整合到一个方案中。"
        : isDe
          ? "Nennen Sie Datum, Stadt und technischen Umfang. Wir fassen Equipment, Logistik und Ablauf vor Ort in einem Plan zusammen."
          : "Tarih, şehir ve teknik ihtiyaçları paylaşın; ekipman, lojistik ve saha operasyonunu tek planda netleştirelim.";
  const ctaLabel = isEn
    ? "Get a quote on WhatsApp"
    : isRu
      ? "Получить расчет в WhatsApp"
      : isZh
        ? "通过 WhatsApp 获取报价"
        : isDe
          ? "Angebot über WhatsApp anfordern"
          : "WhatsApp’tan teklif alın";
  const proofItems = isEn
    ? ["700+ projects", "Nationwide Türkiye", "24/7 operations"]
    : isRu
      ? ["700+ проектов", "По всей Турции", "Операции 24/7"]
      : isZh
        ? ["700+ 项目", "土耳其全国", "24/7 运营"]
        : isDe
          ? ["700+ Projekte", "Türkeiweit", "Betreuung rund um die Uhr"]
          : ["700+ proje", "81 il", "7/24 operasyon"];

  const computedHeadingId =
    ariaLabelledby ?? headingIdProp ?? `site-footer-heading-${instanceId}`;
  const computedDescriptionId =
    ariaDescribedby ?? descriptionIdProp ?? `site-footer-desc-${instanceId}`;

  // Footer sütun başlıkları h3. Üstlerinde bir h2 basılmazsa, içeriğinde yalnızca
  // h1 bulunan sayfalarda (ödeme sonucu, teşekkürler) h1 → h3 seviye atlaması
  // oluşuyordu. Bu nedenle sr-only h2 artık ariaLabel verildiğinde de basılır ve
  // footer'ın erişilebilir adı doğrudan bu başlıktan gelir.
  const footerHeadingText = ariaLabel ?? footerStrings?.ariaLabel;
  const renderFooterHeading = !ariaLabelledby && Boolean(footerHeadingText);
  const ariaLabelledbyValue =
    ariaLabelledby ?? (renderFooterHeading ? computedHeadingId : undefined);
  const footerDescription = footerStrings?.description;

  return (
    <footer
      id={id}
      className="
        relative w-full flex-shrink-0
        bg-[#050B18]
        border-t border-white/10
        overflow-hidden
      "
      aria-labelledby={ariaLabelledbyValue}
      aria-label={renderFooterHeading ? undefined : ariaLabel}
      aria-describedby={computedDescriptionId}
      role={roleOverride}
      tabIndex={-1}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 68%, rgba(0,0,0,0.25) 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-35">
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
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
      </div>

      {/* Görünmez ana başlık (SR + başlık hiyerarşisi için) */}
      {renderFooterHeading && (
        <h2 id={computedHeadingId} className="sr-only">
          {footerHeadingText}
        </h2>
      )}

      {/* SR-only açıklama: id TEK YERDE kullanılmalı */}
      {footerDescription ? (
        <p id={computedDescriptionId} className="sr-only">
          {footerDescription}
        </p>
      ) : null}

      <div
        className="relative z-10 border-b border-white/10"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(37,99,235,0.16), rgba(124,58,237,0.08) 48%, rgba(16,185,129,0.11))",
        }}
      >
        <section
          aria-labelledby="footer-project-cta"
          className="
            mx-auto grid w-full max-w-[1440px] gap-6 px-6 py-8
            md:px-8 lg:grid-cols-[minmax(0,1.35fr)_auto_auto] lg:items-center lg:px-10
          "
        >
          <div>
            <p className="mb-2 text-xs font-bold tracking-[0.18em] text-cyan-300">
              {ctaEyebrow}
            </p>
            <h3
              id="footer-project-cta"
              className="max-w-2xl text-2xl font-black text-white md:text-3xl"
            >
              {ctaTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              {ctaDescription}
            </p>
          </div>

          <ul
            className="grid grid-cols-3 gap-2"
            aria-label={isEn ? "Operational highlights" : isRu ? "Операционные показатели" : isZh ? "运营数据" : isDe ? "Kennzahlen im Überblick" : "Operasyon göstergeleri"}
          >
            {proofItems.map((item, index) => (
              <li
                key={item}
                className={`
                  flex min-h-[58px] min-w-0 items-center justify-center rounded-lg border px-3
                  text-center text-xs font-bold leading-tight
                  ${
                    index === 0
                      ? "border-blue-400/25 bg-blue-400/10 text-blue-100"
                      : index === 1
                        ? "border-violet-400/25 bg-violet-400/10 text-violet-100"
                        : "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                  }
                `}
              >
                {item}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/905453048671"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={`
              group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg
              bg-emerald-400 px-5 font-bold text-slate-950 shadow-[0_12px_32px_rgba(52,211,153,0.18)]
              transition-colors hover:bg-emerald-300 ${FOCUS_RING_CLASS}
            `}
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" />
            <span>{ctaLabel}</span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </section>
      </div>

      <div
        className="
          relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1
          px-6 py-8 md:grid-cols-2 md:px-8
          lg:grid-cols-12 lg:px-10
        "
      >
        <section
          aria-labelledby="ft-brand"
          className="border-b border-white/10 pb-6 md:border-r md:pr-8 lg:col-span-3 lg:border-b-0 lg:pb-8"
        >
          <div
            className="
              flex h-full flex-col gap-4
            "
          >
            <h3 id="ft-brand" className="sr-only">
              {aboutHeading}
            </h3>

            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <Image
                  src="/android-chrome-512x512.png"
                  alt="Sahneva logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-lg object-contain"
                />
              </div>
              <div>
                <p className="text-base font-black tracking-[0.12em] text-white">SAHNEVA</p>
                <p className="text-sm text-slate-300 leading-relaxed">
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

        <nav
          aria-labelledby="ft-services"
          className="border-b border-white/10 py-6 md:pl-8 lg:col-span-2 lg:border-b-0 lg:border-r lg:py-8 lg:pr-6"
        >
          <div
            className="
              h-full
            "
          >
            <h3
              id="ft-services"
              className="mb-4 flex items-center gap-2 text-lg font-bold text-white"
            >
              <span className="h-5 w-1 rounded-full bg-blue-400" aria-hidden="true" />
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

        <div
          className="border-b border-white/10 py-6 md:border-r md:px-8 lg:col-span-4 lg:border-b-0 lg:py-8"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-7">
            <nav aria-labelledby="ft-quick">
              <h3 id="ft-quick" className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                <span className="h-5 w-1 rounded-full bg-violet-400" aria-hidden="true" />
                {quickLinksTitle}
              </h3>
              <ul className="space-y-0.5 text-sm text-slate-300">
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
            </nav>
            <nav aria-labelledby="ft-popular">
              <h3 id="ft-popular" className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
                <span className="h-5 w-1 rounded-full bg-fuchsia-400" aria-hidden="true" />
                {popularPagesTitle}
              </h3>
              <ul className="space-y-0.5 text-sm text-slate-300">
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
            </nav>
          </div>
        </div>

        <section
          aria-labelledby="ft-contact"
          className="pt-6 md:pl-8 lg:col-span-3 lg:pt-0"
        >
          <div
            className="
              h-full
            "
          >
            <h3
              id="ft-contact"
              className="mb-4 flex items-center gap-2 text-lg font-bold text-white"
            >
              <span className="h-5 w-1 rounded-full bg-emerald-400" aria-hidden="true" />
              {contactTitle}
            </h3>

            <address className="not-italic space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span
                  className="
                    flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
                    border border-white/10 bg-slate-900/80
                  "
                  aria-hidden="true"
                >
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-white font-medium mb-0.5">{officeTitle}</span>
                  <span className="block text-gray-200">{address}</span>
                  <span className="block text-gray-100 text-sm mt-0.5">{nationwide}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="
                    flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
                    border border-white/10 bg-slate-900/80
                  "
                  aria-hidden="true"
                >
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="tel:+905453048671"
                    className={`inline-flex min-h-[44px] items-center text-gray-200 hover:text-white font-medium transition-colors ${FOCUS_RING_CLASS}`}
                >
                  +90 545 304 8671
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="
                    flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
                    border border-white/10 bg-slate-900/80
                  "
                  aria-hidden="true"
                >
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:info@sahneva.com"
                  className={`inline-flex min-h-[44px] items-center text-gray-200 hover:text-white transition-colors ${FOCUS_RING_CLASS}`}
                >
                  info@sahneva.com
                  <span className="sr-only">
                    {isEn ? " (opens your email app)" : isZh ? "（打开您的邮件应用）" : isDe ? " (öffnet Ihr E-Mail-Programm)" : " (e-posta uygulamasını açar)"}
                  </span>
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="
                    flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
                    border border-white/10 bg-slate-900/80
                  "
                  aria-hidden="true"
                >
                  <Clock3 className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-white font-medium mb-0.5">{workingHoursLabel}</span>
                  <span className="block text-gray-200">{workingHoursValue}</span>
                </div>
              </div>
            </address>

            <nav
              className="pt-2 flex flex-col gap-2"
              aria-label={isEn ? "Business links" : isRu ? "Ссылки компании" : isZh ? "企业链接" : isDe ? "Unternehmenslinks" : "İşletme bağlantıları"}
            >
              {BUSINESS_LINKS.map(({ href, label, labelEn, labelRu, labelZh, labelDe, icon: Icon }) => {
                const displayLabel = isEn ? labelEn : isRu ? labelRu : isZh ? labelZh : isDe ? labelDe : label;
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group inline-flex min-h-[44px] items-center gap-2 text-sm text-gray-300
                      hover:text-white transition-all duration-300 ${FOCUS_RING_CLASS}
                    `}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0" />
                    {displayLabel}
                    <span className="sr-only">
                      {" "}
                      ({newTabLabel})
                    </span>
                  </a>
                );
              })}
            </nav>

            <nav
              className="border-t border-white/10 pt-3"
              aria-label={isEn ? "Social media" : isRu ? "Социальные сети" : isZh ? "社交媒体" : "Sosyal medya"}
            >
              <p className="text-sm font-medium text-slate-400 mb-2">{socialMediaLabel}</p>
              <ul className="flex gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <SocialLink key={link.href} {...link} newTabLabel={newTabLabel} />
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </div>

      <div className="relative border-t border-white/10 bg-black/30 py-5">
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-400">
            {copyrightDesc}
          </p>

          <div className="flex flex-col gap-2 lg:items-end">
            <p className="text-sm text-slate-300">
              © <span>{currentYear}</span>{" "}
              <span className="font-medium text-white">Sahneva</span> — {rightsLabel}
            </p>

            <nav
              aria-label={isEn ? "Footer links" : isRu ? "Ссылки подвала" : isZh ? "页脚链接" : "Altbilgi bağlantıları"}
              className="flex flex-wrap items-center gap-2 text-sm text-slate-300"
            >
              {LANGUAGE_LINKS.map((item) => {
                const isActive = locale === item.locale;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    hrefLang={item.hrefLang}
                    prefetch={false}
                    aria-current={isActive ? "page" : undefined}
                    title={item.text}
                    className={`
                      inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border px-3
                      text-xs font-bold no-underline transition-colors
                      ${
                        isActive
                          ? "border-blue-400/70 bg-blue-500/15 text-blue-100"
                          : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25 hover:bg-white/10 hover:text-white"
                      }
                      ${FOCUS_RING_CLASS}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href={privacyHref}
                prefetch={false}
                className={`inline-flex min-h-[44px] items-center px-1 text-slate-300 underline underline-offset-4 transition-colors hover:text-white ${FOCUS_RING_CLASS}`}
              >
                {privacyLinkLabel}
              </Link>
              <a
                href="#_page_top"
                className={`inline-flex min-h-[44px] items-center gap-1 px-1 text-slate-300 underline underline-offset-4 transition-colors hover:text-white ${FOCUS_RING_CLASS}`}
              >
                <ArrowUp aria-hidden="true" className="h-4 w-4" />
                {backToTopLabel}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
