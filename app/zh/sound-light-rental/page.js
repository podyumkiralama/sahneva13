import ServicePage from "../services/ServicePage";
import { CHINESE_SERVICE_PAGES } from "../services/serviceData";
import { buildCanonical, SITE_URL } from "@/lib/seo/seoConfig";
import { buildAlternatesForPath } from "@/lib/seo/alternates";

const service = CHINESE_SERVICE_PAGES["sound-light-rental"];
const canonical = buildCanonical(service.href);

export const metadata = {
  title: service.metaTitle ?? service.title,
  description: service.description,
  alternates: buildAlternatesForPath("/zh/sound-light-rental"),
  openGraph: {
    title: service.title,
    description: service.description,
    url: canonical,
    siteName: "Sahneva",
    type: "website",
    locale: "zh_CN",
    images: [{ url: `${SITE_URL}${service.ogImage}`, width: 1200, height: 630, alt: service.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: service.title,
    description: service.description,
    images: [`${SITE_URL}${service.ogImage}`],
  },
};

export default function ChineseSoundLightRentalPage() {
  return <ServicePage service={service} />;
}
