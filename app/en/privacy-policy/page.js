// app/en/privacy-policy/page.js
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const revalidate = 1800;
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PHONE = "+905453048671";
const MAIL = "info@sahneva.com";

export const metadata = {
  title: "Privacy Policy | KVKK and GDPR Compliant",
  description:
    "Sahneva processes, stores, and protects your personal data in compliance with KVKK and GDPR. Review our privacy policy for data security details.",
  alternates: {
    canonical: `${SITE_URL}/en/privacy-policy`,
    languages: {
      "tr-TR": `${SITE_URL}/gizlilik-politikasi`,
      en: `${SITE_URL}/en/privacy-policy`,
      "x-default": `${SITE_URL}/gizlilik-politikasi`,
    },
  },
  openGraph: {
    title: "Privacy Policy | Sahneva",
    description:
      "Sahneva Organization's KVKK and GDPR compliant privacy policy, cookie usage, and data processing procedures.",
    url: `${SITE_URL}/en/privacy-policy`,
    siteName: "Sahneva",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva Organization privacy policy – KVKK and GDPR compliant data protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Sahneva",
    description:
      "Sahneva Organization's KVKK and GDPR compliant privacy policy, cookie usage, and data processing procedures.",
    images: [`${SITE_URL}/img/hero-bg.webp`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${SITE_URL}/en/privacy-policy`,
    description:
      "Sahneva Organization's KVKK and GDPR compliant privacy policy, cookie usage, and data processing procedures.",
    inLanguage: "en-US",
    image: `${SITE_URL}/img/hero-bg.webp`,
    isPartOf: {
      "@type": "WebSite",
      name: "Sahneva",
      url: SITE_URL,
    },
  };
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Privacy Policy", url: `${baseUrl}/en/privacy-policy` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      {/* JSON-LD */}
      <script
        id="ld-json-privacy-en"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }}
      />

      <div className="bg-slate-950 text-slate-50">
        {/* Hero / Heading */}
        <section className="relative border-b border-white/5 bg-gradient-to-b from-purple-900/40 via-slate-950 to-slate-950">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/30 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-400" aria-label="Page location">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link
                    href="/en"
                    className="transition-colors hover:text-slate-100 focus-ring rounded-md px-1 -mx-1"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="px-1">
                  /
                </li>
                <li className="text-slate-300">Privacy Policy</li>
              </ol>
            </nav>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                  Privacy Policy
                </h1>
                <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
                  At Sahneva, we place the highest importance on the privacy of your personal data
                  during our stage, podium, LED screen, sound, and lighting services. On this page,
                  you can find information on how your data is collected, processed, and protected.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    KVKK &amp; GDPR Compliant
                  </span>
                  <span className="inline-flex items-center rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-100">
                    Secure Communication (HTTPS)
                  </span>
                  <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100">
                    Cookie Management
                  </span>
                </div>
              </div>

              {/* Summary / Quick Info Card */}
              <aside
                aria-label="Privacy summary"
                className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-purple-900/20 backdrop-blur"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                  Quick Summary
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  We use your data only to provide services, prepare quotes, and improve the site.
                  Your data is never sold to third parties under any circumstances.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Data Controller</dt>
                    <dd className="text-slate-100">Sahneva Organization</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${MAIL}`}
                        className="text-sky-300 underline-offset-2 hover:underline"
                      >
                        {MAIL}
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Phone</dt>
                    <dd>
                      <a
                        href={`tel:${PHONE}`}
                        className="text-sky-300 underline-offset-2 hover:underline"
                      >
                        +90 (545) 304 86 71
                      </a>
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-slate-400">Last Updated</dt>
                    <dd className="text-slate-100">2025</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        {/* Content + TOC */}
        <section className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[260px,minmax(0,1fr)]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <nav
                aria-label="On-page menu"
                className="sticky top-24 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300 backdrop-blur"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  On this page
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="#data-collected" className="hover:text-sky-300">
                      1. Data We Collect
                    </a>
                  </li>
                  <li>
                    <a href="#processing-purposes" className="hover:text-sky-300">
                      2. Processing Purposes
                    </a>
                  </li>
                  <li>
                    <a href="#legal-basis" className="hover:text-sky-300">
                      3. Legal Basis
                    </a>
                  </li>
                  <li>
                    <a href="#retention-periods" className="hover:text-sky-300">
                      4. Retention Periods
                    </a>
                  </li>
                  <li>
                    <a href="#data-sharing" className="hover:text-sky-300">
                      5. Data Sharing
                    </a>
                  </li>
                  <li>
                    <a href="#your-rights" className="hover:text-sky-300">
                      6. Your Rights
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="hover:text-sky-300">
                      7. Data Security
                    </a>
                  </li>
                  <li>
                    <a href="#cookies" className="hover:text-sky-300">
                      8. Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#changes" className="hover:text-sky-300">
                      9. Changes
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-sky-300">
                      10. Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="space-y-10 text-sm leading-relaxed text-slate-200">
              {/* 1. Data Collected */}
              <section id="data-collected" aria-labelledby="data-collected-heading">
                <h2
                  id="data-collected-heading"
                  className="text-xl font-semibold text-slate-50"
                >
                  1. Data We Collect
                </h2>
                <p className="mt-3">
                  When you request a quote or call us, we record the name, phone number, and
                  email address you provide. The event location, date, and installation
                  requirements are needed so we can plan our team correctly. When invoicing is
                  required, we also collect company or tax information.
                </p>
                <h3 className="mt-4 text-base font-semibold text-slate-50">
                  1.1. Data You Share
                </h3>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>First name, last name, phone number, email address</li>
                  <li>Company name or job title (if shared)</li>
                  <li>Project details such as event type, date, and location</li>
                  <li>Equipment requests submitted via WhatsApp or email</li>
                </ul>

                <h3 className="mt-4 text-base font-semibold text-slate-50">
                  1.2. Automatically Collected Data
                </h3>
                <p className="mt-2">
                  We use Google Analytics to understand which sections of the site are useful.
                  This tool provides us with aggregate statistics; it does not identify you
                  individually:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Which pages were visited and how long visitors stayed</li>
                  <li>Technical information such as browser type and screen size</li>
                  <li>Anonymized IP address</li>
                </ul>
              </section>

              {/* 2. Processing Purposes */}
              <section id="processing-purposes" aria-labelledby="processing-purposes-heading">
                <h2
                  id="processing-purposes-heading"
                  className="text-xl font-semibold text-slate-50"
                >
                  2. Why We Use This Information
                </h2>
                <p className="mt-3">
                  Our primary purpose is to provide you with services. We need this information
                  to prepare your quote, direct the installation team to the correct address,
                  and provide post-event support.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>To prepare podium, stage, LED screen, sound, and lighting system quotes</li>
                  <li>To plan installation and transportation operations</li>
                  <li>To issue invoices and maintain accounting records</li>
                  <li>To see which site content is more useful</li>
                  <li>To send campaigns or announcements when you have explicitly consented</li>
                </ul>
                <p className="mt-2">
                  We do not have a habit of sending marketing emails; we always obtain explicit
                  consent before doing so.
                </p>
              </section>

              {/* 3. Legal Basis */}
              <section id="legal-basis" aria-labelledby="legal-basis-heading">
                <h2
                  id="legal-basis-heading"
                  className="text-xl font-semibold text-slate-50"
                >
                  3. Our Legal Basis
                </h2>
                <p className="mt-3">
                  We rely on several different legal bases under Law No. 6698 (KVKK). The
                  preparation and performance of contracts applies at every stage from providing
                  quotes to carrying out installations. For invoices and accounting records, we
                  fulfill our obligations arising from tax and commercial legislation. For
                  analytics, we rely on legitimate interest; data in this context is anonymous.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Being directly related to the establishment or performance of a contract</li>
                  <li>Fulfillment of our legal obligations</li>
                  <li>Sahneva&apos;s legitimate interests (such as improving the site)</li>
                  <li>Your explicit consent (in cases such as marketing)</li>
                </ul>
              </section>

              {/* 4. Retention Periods */}
              <section id="retention-periods" aria-labelledby="retention-periods-heading">
                <h2
                  id="retention-periods-heading"
                  className="text-xl font-semibold text-slate-50"
                >
                  4. How Long We Retain Data
                </h2>
                <p className="mt-3">
                  The retention period for each type of data varies depending on why it was
                  collected. Once our work is complete, we stop retaining your data or
                  anonymize it.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                  <table className="min-w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-900/80 text-slate-300">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Data Type</th>
                        <th className="px-4 py-3 font-semibold">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-200">
                      <tr>
                        <td className="px-4 py-3">Quote &amp; contact form data</td>
                        <td className="px-4 py-3">3 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Customer correspondence and project records</td>
                        <td className="px-4 py-3">3 years</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Invoice and accounting records</td>
                        <td className="px-4 py-3">5–10 years as required by tax legislation</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Analytics and statistical data</td>
                        <td className="px-4 py-3">Up to 26 months (GA4 default)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Cookie data</td>
                        <td className="px-4 py-3">Depending on browser settings and cookie type</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 5. Data Sharing */}
              <section id="data-sharing" aria-labelledby="data-sharing-heading">
                <h2
                  id="data-sharing-heading"
                  className="text-xl font-semibold text-slate-50"
                >
                  5. With Whom We Share Data
                </h2>
                <p className="mt-3">
                  We share your data only to the extent required by the work and only with the
                  following parties. Under no circumstances do we sell your data or transfer it
                  for marketing purposes without consent.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Logistics and transportation service providers (for installation operations)</li>
                  <li>Accounting software and hosting infrastructure providers</li>
                  <li>Google Analytics — for anonymous usage statistics</li>
                  <li>Authorized public authorities when legally required</li>
                </ul>
                <p className="mt-2">
                  We have data processing agreements compliant with KVKK with all of these suppliers.
                </p>
              </section>

              {/* 6. Your Rights */}
              <section id="your-rights" aria-labelledby="your-rights-heading">
                <h2 id="your-rights-heading" className="text-xl font-semibold text-slate-50">
                  6. Your Rights
                </h2>
                <p className="mt-3">
                  Article 11 of KVKK grants you several rights. You do not need to fill out an
                  official form to exercise these; an email is sufficient.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>You can ask whether your data is being processed and how it is used</li>
                  <li>You can request correction of any incorrect or incomplete information</li>
                  <li>You can request deletion when the retention purpose has ended</li>
                  <li>You can learn which third parties your data has been transferred to</li>
                  <li>You can object to outcomes of automated decision systems that adversely affect you</li>
                  <li>You can request compensation for damages arising from processing contrary to KVKK</li>
                </ul>
                <p className="mt-2">
                  Simply send your request to{" "}
                  <a href={`mailto:${MAIL}`} className="text-sky-300 underline-offset-2 hover:underline">
                    {MAIL}
                  </a>
                  . We respond within 30 days.
                </p>
              </section>

              {/* 7. Security */}
              <section id="security" aria-labelledby="security-heading">
                <h2 id="security-heading" className="text-xl font-semibold text-slate-50">
                  7. Data Security
                </h2>
                <p className="mt-3">
                  Our site operates over an encrypted HTTPS connection. Access to our systems is
                  limited to authorized team members; server infrastructure is regularly updated.
                  If we detect a security issue, we will notify both you and the relevant
                  authority within the timeframes prescribed by KVKK.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Encrypted data transmission over HTTPS</li>
                  <li>Access control mechanisms to prevent unauthorized access</li>
                  <li>Regularly updated server and software infrastructure</li>
                  <li>Backup and recovery procedures when required</li>
                </ul>
              </section>

              {/* 8. Cookies */}
              <section id="cookies" aria-labelledby="cookies-heading">
                <h2 id="cookies-heading" className="text-xl font-semibold text-slate-50">
                  8. Cookies
                </h2>
                <p className="mt-3">
                  We use two types of cookies on our site: those that are essential for the site
                  to function, and analytics cookies that measure usage. We do not use advertising
                  cookies.
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>
                    <strong>Essential cookies:</strong> Required for basic functions such as form
                    submissions and navigation; the site cannot function properly without them.
                  </li>
                  <li>
                    <strong>Analytics cookies (GA4):</strong> Measures in aggregate and anonymously
                    which pages are more useful; does not create personal profiles.
                  </li>
                </ul>
                <p className="mt-2">
                  You can manage or completely block cookies through your browser settings. If
                  you disable essential cookies, some sections of the site may not work as
                  expected.
                </p>
              </section>

              {/* 9. Changes */}
              <section id="changes" aria-labelledby="changes-heading">
                <h2
                  id="changes-heading"
                  className="text-xl font-semibold text-slate-50"
                >
                  9. Changes
                </h2>
                <p className="mt-3">
                  We update this page when our scope of services or legal regulations change.
                  When a significant change occurs, we clearly state this here. The current text
                  can always be found at{" "}
                  <span className="text-sky-300">/en/privacy-policy</span>.
                </p>
              </section>

              {/* 10. Contact */}
              <section id="contact" aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-xl font-semibold text-slate-50">
                  10. Contact
                </h2>
                <p className="mt-3">
                  For any questions, requests, or applications regarding the Privacy Policy or the
                  processing of your personal data, you can reach us through the following channels:
                </p>

                <div className="mt-4 rounded-3xl border border-purple-500/40 bg-gradient-to-r from-purple-900/50 via-slate-900 to-sky-900/40 p-5 shadow-lg shadow-purple-900/40">
                  <p className="text-sm text-slate-100">
                    <span className="font-semibold">Data Controller:</span> Sahneva Organization
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${MAIL}`}
                      className="text-sky-100 underline-offset-2 hover:underline"
                    >
                      {MAIL}
                    </a>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:${PHONE}`}
                      className="text-sky-100 underline-offset-2 hover:underline"
                    >
                      +90 (545) 304 86 71
                    </a>
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold">Website:</span>{" "}
                    <Link
                      href="/en"
                      className="text-sky-100 underline-offset-2 hover:underline"
                    >
                      www.sahneva.com
                    </Link>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href="/en/contact"
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-950/70 px-4 py-2 text-sm font-semibold text-slate-50 shadow-md shadow-black/40 ring-1 ring-white/10 transition hover:scale-[1.02] hover:bg-slate-900"
                    >
                      Go to Contact Page
                    </Link>
                    <a
                      href={`https://wa.me/${PHONE.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-900/60 transition hover:scale-[1.02] hover:bg-emerald-400"
                    >
                      Message via WhatsApp
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
