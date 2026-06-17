import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("en");

function HideDuplicateHeroPdfCard() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          main > section:first-child > div.relative > div:last-child > a[href="/files/sahneva-company-profile.pdf"] {
            display: none;
          }
        `,
      }}
    />
  );
}

export default function EventProductionCompanyTurkeyPage() {
  return (
    <>
      <HideDuplicateHeroPdfCard />
      <EventProductionPartnerPage locale="en" />
    </>
  );
}
