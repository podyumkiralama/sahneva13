import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import InternationalTrustPolish from "@/components/international/InternationalTrustPolish";
import PubgFinalVideoReference from "@/components/international/PubgFinalVideoReference";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("en");

export default function EventProductionCompanyTurkeyPage() {
  return (
    <>
      <EventProductionPartnerPage locale="en" />
      <PubgFinalVideoReference locale="en" />
      <InternationalTrustPolish locale="en" />
    </>
  );
}
