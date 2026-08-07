import ServicePage from "../leistungen/ServicePage";
import { GERMAN_SERVICE_PAGES } from "../leistungen/serviceData";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { buildLanguageAlternates } from "@/lib/seo/alternates";

const service = GERMAN_SERVICE_PAGES["konzertbuehne-mieten"];
const canonical = buildCanonical(service.href);

export const metadata = {
  title: service.metaTitle ?? service.title,
  description: service.metaDescription ?? service.description,
  alternates: buildLanguageAlternates({
    tr: service.equivalent.tr,
    en: service.equivalent.en,
    de: service.href,
    ru: service.equivalent.ru,
    zh: service.equivalent.zh,
    canonical: service.href,
  }),
  openGraph: {
    title: service.title,
    description: service.description,
    url: canonical,
    siteName: "Sahneva",
    type: "website",
    locale: "de_DE",
    images: [{ url: `${SITE_URL}${service.ogImage}`, width: 1200, height: 630, alt: service.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.title,
    description: service.description,
    images: [`${SITE_URL}${service.ogImage}`],
  },
};

export default function GermanConcertStagePage() {
  return <ServicePage service={service} />;
}
