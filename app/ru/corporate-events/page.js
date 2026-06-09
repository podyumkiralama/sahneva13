import ServicePage from "../services/ServicePage";
import { RUSSIAN_SERVICE_PAGES } from "../services/serviceData";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const service = RUSSIAN_SERVICE_PAGES["corporate-events"];
const canonical = buildCanonical(service.href);

export const metadata = {
  title: service.title,
  description: service.description,
  alternates: {
    canonical,
    languages: {
      "tr-TR": `${SITE_URL}${service.equivalent.tr}`,
      en: `${SITE_URL}${service.equivalent.en}`,
      "en-US": `${SITE_URL}${service.equivalent.en}`,
      ru: canonical,
      "x-default": `${SITE_URL}${service.equivalent.tr}`,
    },
  },
  openGraph: {
    title: service.title,
    description: service.description,
    url: canonical,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [{ url: `${SITE_URL}${service.ogImage}`, width: 1200, height: 630, alt: service.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.title,
    description: service.description,
    images: [`${SITE_URL}${service.ogImage}`],
  },
};

export default function RussianCorporateEventsPage() {
  return <ServicePage service={service} />;
}
