import ServicePage from "../services/ServicePage";
import { RUSSIAN_SERVICE_PAGES } from "../services/serviceData";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";

const service = RUSSIAN_SERVICE_PAGES["stage-rental"];
const canonical = buildCanonical(service.href);

export const metadata = {
  title: service.title,
  description: service.description,
  alternates: {
    canonical,
    languages: {
      "tr-TR": `${SITE_URL}${service.equivalent.tr}`,
      en: `${SITE_URL}${service.equivalent.en}`,
      ar: `${SITE_URL}${service.equivalent.ar}`,
      ru: canonical,
      "x-default": `${SITE_URL}${service.equivalent.en}`,
    },
  },
  openGraph: {
    title: service.title,
    description: service.description,
    url: canonical,
    locale: "ru_RU",
    images: [{ url: `${SITE_URL}${service.ogImage}`, width: 1200, height: 630, alt: service.title }],
  },
};

export default function RussianStageRentalPage() {
  return <ServicePage service={service} />;
}
