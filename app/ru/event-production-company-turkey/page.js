import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import PubgFinalVideoReference from "@/components/international/PubgFinalVideoReference";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("ru");

export default function RussianEventProductionCompanyTurkeyPage() {
  return (
    <>
      <EventProductionPartnerPage locale="ru" />
      <PubgFinalVideoReference locale="ru" />
    </>
  );
}
