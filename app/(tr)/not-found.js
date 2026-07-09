import NotFoundContent from "@/components/NotFoundContent";

export const metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundContent />;
}
