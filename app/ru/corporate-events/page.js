import ServicePage from "../services/ServicePage";
import { RUSSIAN_SERVICE_PAGES } from "../services/serviceData";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

const service = RUSSIAN_SERVICE_PAGES["corporate-events"];
const canonical = buildCanonical(service.href);
const metaTitle = service.metaTitle ?? service.title;
const metaDescription = service.metaDescription ?? service.description;

export const metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: buildAlternatesForPath("/ru/corporate-events"),
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: canonical,
    siteName: "Sahneva",
    type: "website",
    locale: "ru_RU",
    images: [{ url: `${SITE_URL}${service.ogImage}`, width: 1200, height: 630, alt: service.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: [`${SITE_URL}${service.ogImage}`],
  },
};

export default function RussianCorporateEventsPage() {
  return <ServicePage service={service} />;
}
