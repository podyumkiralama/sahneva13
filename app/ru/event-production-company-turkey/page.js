import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("ru");

export default function RussianEventProductionCompanyTurkeyPage() {
  return <EventProductionPartnerPage locale="ru" />;
}
