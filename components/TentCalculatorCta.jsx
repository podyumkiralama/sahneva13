import Link from "next/link";
import { Calculator, ArrowRight, Ruler, Users } from "lucide-react";

export default function TentCalculatorCta() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] px-4 py-12 text-white">
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute left-1/2 top-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl rounded-[34px] border border-blue-300/20 bg-gradient-to-br from-blue-500/20 via-white/[0.07] to-slate-950 p-6 shadow-2xl md:p-9">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-black text-blue-100 backdrop-blur-xl">
              <Calculator className="h-4 w-4" />
              ÜCRETSİZ ÇADIR HESAPLAMA ARACI
            </div>
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.8px] md:text-5xl">
              Kaç kişiye kaç m² çadır gerektiğini hemen hesaplayın
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Kişi sayısı, oturma düzeni, sahne, LED ekran ve catering alanına göre yaklaşık çadır ölçüsünü öğrenin. Sonucu WhatsApp üzerinden teklif talebine dönüştürebilirsiniz.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                <Users className="h-5 w-5 text-blue-200" />
                <span className="text-sm font-bold text-slate-200">Kişi sayısına göre m² hesabı</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                <Ruler className="h-5 w-5 text-blue-200" />
                <span className="text-sm font-bold text-slate-200">20x30, 20x40 gibi ölçü önerisi</span>
              </div>
            </div>
          </div>

          <Link
            href="/cadir-hesaplama"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:scale-[1.02] lg:min-w-[250px]"
          >
            Çadır ölçüsü hesapla
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
