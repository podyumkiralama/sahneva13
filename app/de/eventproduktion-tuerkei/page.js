import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 86400;

export const metadata = buildInternationalEventMetadata("de");

export default function GermanEventProductionPartnerPage() {
  return <EventProductionPartnerPage locale="de" />;
}
