// Kök not-found: eşleşmeyen tüm URL'ler için çalışır. Route grubu layout'larının
// dışında render edildiğinden globals.css ve fontu kendisi yüklemek zorunda.
import "../styles/globals.css";
import { inter } from "./fonts";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata = {
  title: "Sayfa bulunamadı | Sahneva",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className={`${inter.variable} font-sans`}>
      <NotFoundContent />
    </div>
  );
}
