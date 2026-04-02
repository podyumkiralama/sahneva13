// app/en/data-protection/page.js
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");

export const metadata = {
  title: "Data Protection & Privacy Policy | Sahneva",
  description:
    "Sahneva's data protection and privacy policy: how we collect, use, store and protect your personal data in compliance with KVKK and GDPR.",
  alternates: {
    canonical: `${SITE_URL}/en/data-protection`,
    languages: {
      "tr-TR": `${SITE_URL}/kvkk`,
      en: `${SITE_URL}/en/data-protection`,
      "x-default": `${SITE_URL}/kvkk`,
    },
  },
  openGraph: {
    title: "Data Protection & Privacy | Sahneva",
    description:
      "Sahneva's data protection policy, personal data processing, storage, transfer and your rights.",
    url: `${SITE_URL}/en/data-protection`,
    type: "website",
    siteName: "Sahneva",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/img/hero-bg.webp`,
        width: 1200,
        height: 630,
        alt: "Sahneva data protection and privacy policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Protection & Privacy | Sahneva",
    description:
      "Sahneva's data protection policy, personal data processing, storage, transfer and your rights.",
    images: [`${SITE_URL}/img/hero-bg.webp`],
  },
  robots: { index: true, follow: true },
};

export default function DataProtectionPage() {
  const updatedAt = "November 11, 2025";
  const baseUrl = SITE_URL;
  const breadcrumbItems = [
    { name: "Home", url: `${baseUrl}/en` },
    { name: "Data Protection", url: `${baseUrl}/en/data-protection` },
  ];

  return (
    <div className="container max-w-3xl mx-auto px-4 py-10 md:py-14">
      <BreadcrumbJsonLd items={breadcrumbItems} baseUrl={baseUrl} />
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Data Protection & Privacy Policy</h1>
        <p className="text-sm text-neutral-600 mt-1">Last updated: {updatedAt}</p>
      </header>

      <section className="space-y-6 text-neutral-800 leading-7">
        <p>
          In our stage, podium, LED screen and sound-light equipment rental processes, we need
          some personal information to communicate with you and plan your work correctly. We want
          to clearly explain how we use this information, who we share it with, and your rights.
        </p>

        <div className="rounded-xl border bg-white p-4">
          <h2 className="font-semibold">Data Controller</h2>
          <p className="mt-1">
            Sahneva — Istanbul / Türkiye<br />
            Email: <a className="text-[#6d28d9] hover:underline" href="mailto:info@sahneva.com">info@sahneva.com</a><br />
            Phone: <a className="text-[#6d28d9] hover:underline" href="tel:+905453048671">+90 545 304 8671</a>
          </p>
        </div>

        <h2 className="text-xl font-semibold">1. What Information Do We Collect?</h2>
        <p>
          When you fill out a quote form or call us, we record the contact information you share,
          such as your name, phone number and email. The event venue, date and equipment requirements
          are also needed by us for operations planning. We also collect company or tax information
          to issue invoices. When you visit our website, we collect anonymous usage statistics via
          Google Analytics to understand which pages attract interest; this data is processed in
          aggregate only, not personalised.
        </p>

        <h2 className="text-xl font-semibold">2. Why Do We Use This Information?</h2>
        <p>
          Our primary purpose is to provide you with service. We use this information to prepare
          the quote you requested, direct the installation team to the right location, issue
          invoices and provide post-event support. We also use analytical data to see which sections
          of the site are more useful and to improve content. We have no habit of sending marketing
          emails; we obtain explicit consent before doing so.
        </p>

        <h2 className="text-xl font-semibold">3. Legal Bases</h2>
        <p>
          When processing your data under the KVKK (Personal Data Protection Law No. 6698), we
          rely on several different legal grounds. Contract preparation and performance is the most
          frequent basis we use: we need it at every step from quoting to installation. For invoice
          and accounting records, we fulfil our legal obligations arising from tax and commercial
          legislation. For analytics and site performance, we rely on legitimate interest; the data
          collected in this scope is entirely anonymous.
        </p>

        <h2 className="text-xl font-semibold">4. How Do We Collect Information?</h2>
        <p>
          We collect information through quote and contact forms on our website, phone or WhatsApp
          conversations, email correspondence and field coordination during installation days. We
          never purchase information from social media or third parties.
        </p>

        <h2 className="text-xl font-semibold">5. Who Do We Share With?</h2>
        <p>
          We share only what is required by the relevant work with our business partners such as
          logistics and transportation services required for installation, accounting software and
          hosting infrastructure. We have KVKK-compliant agreements with all these suppliers. We
          may provide information to authorised public institutions when required by legal obligation;
          beyond that, we do not sell or commercially transfer your data to anyone.
        </p>

        <h2 className="text-xl font-semibold">6. International Transfers</h2>
        <p>
          Google Analytics and some cloud infrastructure services we use operate on overseas servers.
          These transfers are made with the necessary guarantees under Article 9 of the KVKK. The
          privacy policies of these services are published on the respective providers&apos; own websites.
        </p>

        <h2 className="text-xl font-semibold">7. How Long Do We Retain Data?</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Quote, contract and invoice records: periods required by tax and commercial legislation (generally 5–10 years).</li>
          <li>Communication and project correspondence: proportional to statutes of limitations against possible disputes.</li>
          <li>Analytics data: within Google Analytics default retention periods and anonymously.</li>
        </ul>
        <p>
          When the purpose of retention ceases, data is securely deleted or anonymised.
        </p>

        <h2 className="text-xl font-semibold">8. Cookies</h2>
        <p>
          We only use essential cookies and Google Analytics 4 analytics cookies on our site. GA4
          measures interactions such as page views and clicks in aggregate; it does not create
          individual visitor profiles. You can delete or block these cookies at any time through
          your browser&apos;s cookie settings. If you disable non-essential cookies, some sections of
          the site may not work as expected.
        </p>

        <h2 className="text-xl font-semibold">9. Your Rights</h2>
        <p>
          Article 11 of the KVKK grants you the following rights: you can ask whether your data is
          being processed, and if so, learn for what purpose it is used. If there is incorrect or
          incomplete information, you can request correction. If the basis for retention has ceased,
          you can request deletion. You also have the right to object to an automated system making
          a decision that negatively affects you.
        </p>
        <p>
          To exercise any of these rights, simply send an email to{" "}
          <a className="text-[#6d28d9] hover:underline" href="mailto:info@sahneva.com">
            info@sahneva.com
          </a>
          . We respond to your request within 30 days at the latest.
        </p>

        <h2 className="text-xl font-semibold">10. Security</h2>
        <p>
          The site operates over an HTTPS encrypted connection. Access to our systems is restricted
          to authorised personnel only and server infrastructure is regularly updated. If we detect
          a security breach, we notify both you and the relevant authority within the periods
          stipulated by the KVKK.
        </p>

        <h2 className="text-xl font-semibold">11. Changes</h2>
        <p>
          We update this page when our scope of services or legal regulations change. When there is
          a significant change, we clearly state this here. The current text can always be found at{" "}
          <strong>sahneva.com/en/data-protection</strong>.
        </p>
      </section>
    </div>
  );
}
