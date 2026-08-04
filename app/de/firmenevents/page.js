import ServicePage from "../leistungen/ServicePage";
import { GERMAN_SERVICE_PAGES } from "../leistungen/serviceData";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const service = GERMAN_SERVICE_PAGES["firmenevents"];
const canonical = buildCanonical(service.href);

export const metadata = {
  title: service.metaTitle ?? service.title,
  description: service.metaDescription ?? service.description,
  alternates: {
    canonical,
    languages: {
      "tr-TR": `${SITE_URL}${service.equivalent.tr}`,
      en: `${SITE_URL}${service.equivalent.en}`,
      de: canonical,
      ru: `${SITE_URL}${service.equivalent.ru}`,
      zh: `${SITE_URL}${service.equivalent.zh}`,
      "x-default": `${SITE_URL}${service.equivalent.tr}`,
    },
  },
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

export default function GermanCorporateEventsPage() {
  return <ServicePage service={service} />;
}
