"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher.client";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher.client";

const FOCUS_RING_CLASS =
  "focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white";

const WHATSAPP_MESSAGE = {
  tr: encodeURIComponent("Merhaba, Sahneva ile etkinlik ekipmanları için teklif ve destek almak istiyorum."),
  en: encodeURIComponent("Hello, I would like to get a quote and support for event equipment from Sahneva."),
};

export default function NavbarMobile({ locale = "tr", serviceLinks, researchLinks }) {
  const pathname = usePathname();
  const uid = useId();
  const isEn = locale === "en";

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  const menuId = `mobile-menu-${uid}`;
  const headingId = `mobile-menu-heading-${uid}`;
  const descId = `mobile-menu-desc-${uid}`;

  const labels = {
    about: isEn ? "About Us" : "Hakkımızda",
    services: isEn ? "Services" : "Hizmetler",
    explore: isEn ? "Explore Us" : "Bizi Araştırın",
    support: isEn ? "WhatsApp Support" : "WhatsApp Destek",
    supportText: isEn
      ? "Get a quick quote and send your questions on WhatsApp."
      : "WhatsApp üzerinden anında teklif alın ve sorularınızı iletin.",
    open: isEn ? "Open menu" : "Menüyü Aç",
    close: isEn ? "Close menu" : "Menüyü Kapat",
    heading: isEn ? "Main navigation menu" : "Ana gezinme menüsü",
    description: isEn
      ? "Use the tab key to navigate between menu links."
      : "Menü bağlantıları arasında gezinmek için tab tuşunu kullanabilirsiniz.",
  };

  const links = {
    about: isEn ? "/en/about" : "/hakkimizda",
    blog: isEn ? "/en/blog" : "/blog",
  };

  const mobileWhatsappHref = useMemo(
    () =>
      `https://wa.me/905453048671?text=${WHATSAPP_MESSAGE[isEn ? "en" : "tr"]}&utm_source=navbar&utm_medium=mobile_whatsapp`,
    [isEn],
  );

  const closeMenu = useCallback(({ restoreFocus = true } = {}) => {
    if (restoreFocus) {
      buttonRef.current?.focus();
    }
    setOpen(false);
    setServicesOpen(false);
    setResearchOpen(false);
  }, []);

  useEffect(() => {
    closeMenu({ restoreFocus: false });
  }, [closeMenu, pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu, open]);

  useEffect(() => {
    if (!open) return undefined;
    const node = panelRef.current;
    if (!node) return undefined;

    const selectors =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contenteditable="true"], [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(node.querySelectorAll(selectors)).filter(
      (el) => el instanceof HTMLElement && !el.hasAttribute("disabled"),
    );
    if (!focusables.length) return undefined;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    requestAnimationFrame(() => first.focus());

    const onTab = (event) => {
      if (event.key !== "Tab") return;
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [open]);

  const menuLinkClass = `flex items-center gap-3 py-3.5 px-4 text-neutral-900 font-bold text-[15px] rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 border border-transparent hover:border-blue-200 transform hover:scale-[1.02] nav-dark:text-white nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200 nav-dark:hover:border-white/10 ${FOCUS_RING_CLASS}`;
  const cardClass =
    "rounded-xl border border-neutral-200 bg-white nav-dark:border-white/10 nav-dark:bg-white/[0.06]";

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => {
          if (open) {
            closeMenu({ restoreFocus: false });
            return;
          }
          setOpen(true);
          setServicesOpen(false);
          setResearchOpen(false);
        }}
        className={`lg:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-neutral-200 bg-white p-3 transition-all duration-200 hover:scale-105 hover:bg-neutral-50 nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:hover:bg-white/15 ${FOCUS_RING_CLASS}`}
        aria-label={open ? labels.close : labels.open}
        aria-expanded={open ? "true" : "false"}
        aria-controls={menuId}
      >
        <span
          className="relative flex h-6 w-6 flex-col items-center justify-center gap-1.5"
          aria-hidden="true"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-neutral-900 transition-all duration-300 nav-dark:bg-white ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-neutral-900 transition-all duration-300 nav-dark:bg-white ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-neutral-900 transition-all duration-300 nav-dark:bg-white ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        id={menuId}
        ref={panelRef}
        role="dialog"
        aria-modal={open ? "true" : "false"}
        aria-labelledby={headingId}
        aria-describedby={descId}
        aria-hidden={!open}
        inert={!open ? "" : undefined}
        data-open={open ? "true" : undefined}
        className={`fixed left-0 right-0 top-16 z-50 overflow-hidden border-t border-neutral-200 bg-white shadow-2xl transition-all duration-300 ease-in-out nav-dark:border-white/10 nav-dark:bg-[#0B1120] lg:hidden ${
          open
            ? "max-h-[85vh] opacity-100 pointer-events-auto visible"
            : "max-h-0 opacity-0 pointer-events-none invisible"
        }`}
      >
        <p id={headingId} className="sr-only">
          {labels.heading}
        </p>
        <p id={descId} className="sr-only">
          {labels.description}
        </p>

        <nav aria-labelledby={headingId} aria-describedby={descId}>
          <div className="max-h-[80vh] space-y-3 overflow-y-auto px-5 py-6">
            <div className="mb-4 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-3 nav-dark:border-white/10 nav-dark:bg-white/[0.06]">
              <LanguageSwitcher locale={locale} align="left" />
              <ThemeSwitcher align="left" />
            </div>

            <Link href={links.about} prefetch={false} onClick={() => closeMenu()} className={menuLinkClass}>
              <span className="text-lg" aria-hidden="true">
                👥
              </span>
              {labels.about}
            </Link>

            <Link href={links.blog} prefetch={false} onClick={() => closeMenu()} className={menuLinkClass}>
              <span className="text-lg" aria-hidden="true">
                📝
              </span>
              Blog
            </Link>

            <details
              className={cardClass}
              open={servicesOpen}
              onToggle={(event) => setServicesOpen(event.currentTarget.open)}
            >
              <summary
                className={`flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-[15px] font-bold text-neutral-900 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 nav-dark:text-white nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">
                    🎯
                  </span>
                  <span>{labels.services}</span>
                </span>
                <span
                  className={`text-neutral-700 transition-transform duration-200 nav-dark:text-slate-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>

              <div className="p-2">
                <div className="space-y-1 rounded-lg border border-neutral-200 bg-white p-2 nav-dark:border-white/10 nav-dark:bg-[#111827]">
                  {serviceLinks.map(({ href, label, icon, description }) => (
                    <Link
                      key={href}
                      href={href}
                      prefetch={false}
                      onClick={() => closeMenu()}
                      className={`flex w-full items-start gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 transition-all duration-200 hover:scale-[1.01] hover:bg-blue-50 hover:text-blue-700 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
                    >
                      <span className="mt-0.5 flex-shrink-0 text-base opacity-70" aria-hidden="true">
                        {icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-neutral-900 nav-dark:text-white">{label}</span>
                        <span className="mt-0.5 block text-xs font-medium text-neutral-600 nav-dark:text-slate-400">
                          {description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </details>

            <details
              className={cardClass}
              open={researchOpen}
              onToggle={(event) => setResearchOpen(event.currentTarget.open)}
            >
              <summary
                className={`flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-[15px] font-bold text-neutral-900 transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 nav-dark:text-white nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">
                    🔎
                  </span>
                  <span>{labels.explore}</span>
                </span>
                <span
                  className={`text-neutral-700 transition-transform duration-200 nav-dark:text-slate-200 ${
                    researchOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>

              <div className="p-2">
                <div className="space-y-1 rounded-lg border border-neutral-200 bg-white p-2 nav-dark:border-white/10 nav-dark:bg-[#111827]">
                  {researchLinks.map(({ href, label, icon, description }) => (
                    <Link
                      key={href}
                      href={href}
                      prefetch={false}
                      onClick={() => closeMenu()}
                      className={`flex w-full items-start gap-3 rounded-md px-3 py-2 text-sm text-neutral-700 transition-all duration-200 hover:scale-[1.01] hover:bg-blue-50 hover:text-blue-700 nav-dark:text-slate-200 nav-dark:hover:bg-white/10 nav-dark:hover:text-blue-200 ${FOCUS_RING_CLASS}`}
                    >
                      <span className="mt-0.5 flex-shrink-0 text-base opacity-70" aria-hidden="true">
                        {icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold text-neutral-900 nav-dark:text-white">{label}</span>
                        <span className="mt-0.5 block text-xs font-medium text-neutral-600 nav-dark:text-slate-400">
                          {description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </details>

            <div className="mt-4 rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg nav-dark:border-white/10 nav-dark:bg-white/[0.06]">
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="text-2xl">
                  💬
                </span>
                <div className="space-y-1 text-neutral-900 nav-dark:text-white">
                  <p className="text-lg font-extrabold">{labels.support}</p>
                  <p className="text-sm font-medium text-neutral-600 nav-dark:text-slate-300">
                    {labels.supportText}
                  </p>
                </div>
              </div>
              <a
                href={mobileWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.support} - ${isEn ? "opens in new tab" : "yeni sekmede açılır"}`}
                className={`mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 shadow-sm transition-all duration-200 hover:bg-emerald-100 hover:shadow-md nav-dark:border-white/10 nav-dark:bg-white/10 nav-dark:text-emerald-300 nav-dark:hover:bg-white/15 ${FOCUS_RING_CLASS}`}
                onClick={() => closeMenu()}
              >
                <span aria-hidden="true" className="text-base">
                  🚀
                </span>
                <span>{labels.support}</span>
              </a>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        onClick={() => closeMenu()}
        aria-hidden="true"
        data-open={open ? "true" : undefined}
      />
    </>
  );
}
