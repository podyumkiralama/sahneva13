import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("ru");

function InternationalPageLayoutPolish() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          main > section:first-child {
            min-height: auto !important;
          }

          main > section:first-child > div.relative {
            padding-top: clamp(4rem, 5vw, 5.5rem) !important;
            padding-bottom: clamp(4rem, 5vw, 5.5rem) !important;
          }

          main > section:first-child a[href="/files/sahneva-company-profile.pdf"] {
            display: none !important;
          }

          main > section:nth-last-of-type(2) {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }

          main > section:nth-last-of-type(2) > div {
            display: block !important;
            max-width: 72rem !important;
          }

          main > section:nth-last-of-type(2) > div > div:first-child {
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 2rem !important;
            max-width: 58rem !important;
            text-align: center !important;
          }

          main > section:nth-last-of-type(2) > div > div:last-child {
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 58rem !important;
          }

          main > section:nth-last-of-type(2) details {
            padding: 1.25rem !important;
          }

          main > section:last-child {
            padding-top: 3.5rem !important;
            padding-bottom: 4rem !important;
          }

          main > section:last-child > div {
            max-width: 64rem !important;
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }

          main > section:last-child a[href^="https://wa.me"],
          main > section:last-child a[href="/files/sahneva-company-profile.pdf"] {
            display: none !important;
          }

          button[aria-label*="Open video player"],
          button[aria-label*="Video oynatıcı"] {
            display: none !important;
          }
        `,
      }}
    />
  );
}

export default function RussianEventProductionCompanyTurkeyPage() {
  return (
    <>
      <InternationalPageLayoutPolish />
      <EventProductionPartnerPage locale="ru" />
    </>
  );
}
