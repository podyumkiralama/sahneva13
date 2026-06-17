import EventProductionPartnerPage from "@/components/international/EventProductionPartnerPage";
import { buildInternationalEventMetadata } from "@/lib/internationalEventProduction";

export const revalidate = 1800;

export const metadata = buildInternationalEventMetadata("ar");

function InternationalPageLayoutPolish() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          main > section:first-child {
            min-height: auto !important;
          }

          main > section:first-child > div.relative {
            padding-top: clamp(7rem, 8vw, 8.5rem) !important;
            padding-bottom: clamp(3.25rem, 4vw, 4.75rem) !important;
            gap: clamp(2rem, 4vw, 3rem) !important;
            align-items: center !important;
          }

          main > section:first-child h1 {
            font-size: clamp(3.35rem, 6.25vw, 5.6rem) !important;
            line-height: 1.02 !important;
          }

          main > section:first-child a[href="/files/sahneva-company-profile.pdf"] {
            display: none !important;
          }

          @media (min-width: 1024px) {
            main > section:first-child > div.relative {
              grid-template-columns: minmax(0, 1fr) minmax(390px, 0.82fr) !important;
            }
          }

          @media (max-width: 767px) {
            main > section:first-child > div.relative {
              padding-top: 6.25rem !important;
              padding-bottom: 3.25rem !important;
            }

            main > section:first-child h1 {
              font-size: clamp(2.75rem, 12vw, 4.1rem) !important;
            }
          }

          main > section:has(details) {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }

          main > section:has(details) > div {
            display: block !important;
            max-width: 68rem !important;
          }

          main > section:has(details) > div > div:first-child {
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 2rem !important;
            max-width: 54rem !important;
            text-align: center !important;
          }

          main > section:has(details) > div > div:last-child {
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 60rem !important;
          }

          main > section:has(details) details {
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

          button[aria-label*="Watch Videos"],
          button[aria-label*="Videoları Görüntüle"],
          button[aria-label*="Open video player"],
          button[aria-label*="Video oynatıcı"] {
            display: none !important;
          }
        `,
      }}
    />
  );
}

export default function ArabicEventProductionCompanyTurkeyPage() {
  return (
    <>
      <InternationalPageLayoutPolish />
      <EventProductionPartnerPage locale="ar" />
    </>
  );
}
