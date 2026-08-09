import AdminConsole from "@/components/support/AdminConsole.client";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Canlı Destek | Sahneva Yönetim",
  robots: { index: false, follow: false, nocache: true },
};

export default function SupportConsolePage() {
  return <AdminConsole />;
}
