import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import InternationalTrustPolish from "@/components/international/InternationalTrustPolish";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("tr");

export default function TurkiyedeEtkinlikCozumOrtagiPage() {
  return (
    <>
      <EventProductionPartnerPage locale="tr" />
      <InternationalTrustPolish locale="tr" />
    </>
  );
}
