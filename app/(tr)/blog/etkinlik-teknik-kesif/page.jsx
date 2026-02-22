// app/(tr)/blog/etkinlik-teknik-kesif/page.jsx
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { BASE_SITE_URL, ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/schemaIds";

export const revalidate = 86400;

/**
 * Blog-uyumlu sürüm:
 * - Özel "grid/glow" arkaplan basmaz; sitenin blog layout/styling'i neyse ona uyar.
 * - BreadcrumbJsonLd component'i kullanılmaz (prerender startsWith(undefined) hatası riskini kaldırır).
 */

const slug = "/blog/etkinlik-teknik-kesif";
const url = `${BASE_SITE_URL}${slug}`;

const TITLE = "Etkinlik Teknik Keşif Nasıl Yapılır? Ses, Işık, LED ve Sahne Kontrol Listesi";
const DESCRIPTION = "Etkinlik öncesi teknik keşif rehberi: ihtiyaç analizi, mekân altyapısı, elektrik-güç planı, akustik, video/LED, aydınlatma, rigging, sözleşme maddeleri ve dokümantasyon. Sahada kullanılabilir checklist + SSS.";

const PUBLISH_DATE = "2026-02-23T00:00:00+03:00";
const MODIFIED_DATE = "2026-02-23T00:00:00+03:00";
const HERO = "/img/blog/etkinlik-teknik-kesif-hero.webp";
const OG_IMAGE = `${BASE_SITE_URL}${HERO}`;

const FAQ = [
  {
    "q": "Teknik keşif etkinlikten kaç gün önce yapılmalı?",
    "a": "Büyük kurulumlarda 2–4 hafta idealdir. Rigging onayı, mekân izinleri veya LED içerik üretimi varsa daha erken planlayın."
  },
  {
    "q": "Elektrik gücünü nasıl doğrularız?",
    "a": "Pano kapasitesi, faz dağılımı, sigorta/kaçak akım, priz/hat sayısı ve kablo güzergâhı kontrol edilir. Toplam yük kalem kalem çıkarılır; %10–15 yedek pay bırakılır."
  },
  {
    "q": "Rigging için mekândan hangi bilgiler istenir?",
    "a": "Askı noktaları, taşıma kapasitesi, tavan yüksekliği, statik/izin dokümanları ve ağırlık dağılım planı (rigging plot)."
  },
  {
    "q": "Video/LED tarafında en sık yapılan hata nedir?",
    "a": "Görüş çizgisi ve gün ışığı/parlama etkisini ölçmeden ekran konumu belirlemek. Keşifte oturma düzeni, ekran yüksekliği ve parlaklık senaryosu netleşmeli."
  },
  {
    "q": "Mekân sözleşmesinde AV için nelere dikkat edilmeli?",
    "a": "Münhasır tedarikçi şartı, ek ücretler, çalışma saatleri, gürültü limitleri, sökme/kurulum kısıtları, sorumluluk/cezai şartlar. Gerekirse hukuk danışmanlığı alın."
  }
];

function buildJsonLd() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE_SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: TITLE, item: url },
    ],
  };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: TITLE,
    description: DESCRIPTION,
    image: [OG_IMAGE],
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    inLanguage: "tr-TR",
    author: { "@id": `${BASE_SITE_URL}/#editor` },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return { breadcrumb, blogPosting, faqPage };
}

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: url },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url,
    type: "article",
    locale: "tr_TR",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
};

function Checklist() {
  return (
    <section className="not-prose mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-base font-semibold">✅ Teknik Keşif Kontrol Listesi (Sahada Kullan)</h2>
      <p className="mt-2 text-sm text-white/70">
        15 maddeden 12’si netse, kurulum günü sürpriz oranı ciddi düşer. Büyük projelerde bunu “keşif tutanağı”na çevirin.
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <ul className="space-y-2 text-sm text-white/80">
          <li>• Güç: toplam kW, faz dağılımı, pano konumu, yedek pay (%10–15)</li>
          <li>• Priz/hat: FOH, sahne, LED, medya, interkom, kamera, şarj</li>
          <li>• Kablo güzergâhı: yaya akışı, kablo köprüsü, bantlama, acil çıkış</li>
          <li>• FOH: görüş hattı, mesafe, masa ölçüsü, çevresel gürültü</li>
          <li>• Akustik: yankı, konuşma anlaşılabilirliği, SPL limitleri</li>
          <li>• LED/Video: görüş çizgisi, parlama, en-boy oranı, içerik formatı</li>
          <li>• Işık: tavan yüksekliği/trim, blackout, DMX altyapı</li>
          <li>• İnternet: uplink/downlink, kablolu hat, yedek bağlantı</li>
        </ul>

        <ul className="space-y-2 text-sm text-white/80">
          <li>• Rigging: askı noktası + kapasite (yazılı), izin/evrak, rigging plot</li>
          <li>• Sahne/Truss: ölçüler, zemin durumu, yük dağılımı, bariyer</li>
          <li>• Backstage: depo, geçiş koridoru, sanatçı/konuşmacı akışı</li>
          <li>• Lojistik: tır yanaşma, rampa, forklift, çalışma saatleri</li>
          <li>• Güvenlik: alan kapanışı, gece güvenliği, akses kontrol</li>
          <li>• İzinler: belediye/AVM/site, gürültü, yangın güvenliği</li>
          <li>• Run-of-show: prova, soundcheck, içerik teslim tarihleri</li>
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10" href="/ses-isik-sistemleri">Ses-Işık</Link>
        <Link className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10" href="/led-ekran-kiralama">LED Ekran</Link>
        <Link className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10" href="/sahne-kiralama">Sahne</Link>
        <Link className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10" href="/podyum-kiralama">Podyum</Link>
        <Link className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10" href="/cadir-kiralama">Çadır</Link>
      </div>
    </section>
  );
}

export default function Page() {
  const { breadcrumb, blogPosting, faqPage } = buildJsonLd();

  return (
    <>
      <Script
        id="jsonld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPosting).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="jsonld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="jsonld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c"),
        }}
      />

      <main className="mx-auto max-w-4xl px-4 py-10">
        <header className="mb-8">
          <p className="text-xs text-white/60">Etkinlik Prodüksiyon • Teknik Keşif • Kontrol Listesi</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">{TITLE}</h1>
          <p className="mt-3 max-w-2xl text-white/75">{DESCRIPTION}</p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/iletisim" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B1120] hover:bg-white/90">
              Teknik Keşif Talep Et
            </Link>
            <Link href="/kurumsal-organizasyon" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              Kurumsal Organizasyon
            </Link>
          </div>

          <div className="mt-4 text-xs text-white/60">
            Yayın: 23 Şubat 2026 • Güncelleme: 23 Şubat 2026
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image src={HERO} alt="Etkinlik teknik keşif" width={1200} height={630} className="h-auto w-full object-cover" priority />
          </div>

          <Checklist />
        </header>

        <article className="prose prose-invert max-w-none">
          <h2>Giriş: Teknik keşif, kurulumun yarısıdır</h2>
          <p>
            Teknik keşif (AV keşif), etkinlik mekânında <strong>ses–ışık–video–LED–rigging</strong> kararlarını “sahada sürpriz kalmayacak”
            şekilde kilitleme sürecidir. Keşif doğru yapılırsa teklif hızlı ve doğru çıkar; kurulum günü revizyon azalır; güvenlik ve sözleşme riskleri önden görünür.
          </p>

          <h2 id="bolum-1">Bölüm 1 — Etkinliğin teknik ihtiyaçlarını doğru tarif et</h2>
          <h3>1) Etkinlik hedefini tanımla</h3>
          <p>
            Lansman, konferans, konser/festival, gala… Hedef; LED boyutu, ses tasarımı, ışık dili ve sahne yerleşimini belirler.
            “Ne yapmak istiyoruz?” sorusunu tek cümleyle cevapla.
          </p>

          <h3>2) Hedef kitle ve oturma/ayakta düzeni</h3>
          <ul>
            <li><strong>Katılımcı sayısı:</strong> pik yoğunluk ve boşluk senaryosu</li>
            <li><strong>Görüş mesafesi:</strong> ekran yüksekliği ve açı ihtiyacı</li>
            <li><strong>Akış:</strong> giriş–karşılama–sahne–ikram–çıkış</li>
          </ul>

          <h3>3) İçerik kaynakları ve show akışı</h3>
          <p>
            Sunum, video, canlı kamera, uzaktan konuşmacı, simultane çeviri, canlı yayın… Kaynaklar net değilse “paket” netleşmez.
            En baştan bir <strong>run-of-show</strong> taslağı çıkar.
          </p>

          <h3>4) Teknik paketi kilitleyen 5 soru</h3>
          <ol>
            <li>Konuşma anlaşılabilirliği mi yoksa müzik enerjisi mi öncelik?</li>
            <li>LED’de hangi içerikler yayınlanacak (sunum, video, kamera, sponsor)?</li>
            <li>Kayıt/stream var mı? Çoklu kamera var mı?</li>
            <li>Rigging/tavandan asım gerekiyor mu?</li>
            <li>Kurulum/söküm için kaç saatlik pencere var?</li>
          </ol>

          <h2 id="bolum-2">Bölüm 2 — Keşfe hazırlık: mekândan yazılı isteyeceğin bilgiler</h2>
          <h3>1) Mekânı keşiften önce “kâğıt üstünde” ele</h3>
          <p>
            Mekân seçimi sadece estetik değil: tavan yüksekliği, load-in erişimi, pano kapasitesi, backstage ve güvenlik işin kaderini belirler.
          </p>

          <h3>2) Lojistik ve hizmetler</h3>
          <ul>
            <li>Tır yanaşma, rampa, kapı ölçüleri, yük asansörü</li>
            <li>Depo/backstage alanı ve ekip dinlenme noktaları</li>
            <li>Kurulum/söküm saatleri (mesai kısıtları)</li>
            <li>Gece güvenliği, alan kapanışı, akses kontrol</li>
          </ul>

          <h3>3) Mekân yönetimi ile iletişim</h3>
          <p>
            Keşfe mutlaka mekân teknik sorumlusu dahil olsun. “Olur” denilen şeylerin şartlarını yazılı alın (özellikle askı ve elektrik).
          </p>

          <h3>4) Sözleşme ve kısıtlar</h3>
          <ul>
            <li>Münhasır AV tedarikçisi şartı var mı?</li>
            <li>Ek ücretler: elektrik, mesai, güvenlik, sökme/kaldırma</li>
            <li>Gürültü/SPL limiti, yangın güvenliği prosedürü</li>
          </ul>

          <h2 id="bolum-3">Bölüm 3 — Mekânda keşif: ölç, fotoğrafla, kararları kilitle</h2>
          <h3>1) Mevcut AV altyapısı</h3>
          <p>
            Mekânda kurulu sistem varsa marka/model ve kapasiteyi not et. “Var” demek yetmez: kontrol altyapısı, erişim ve uyumluluğu da kontrol et.
          </p>

          <h3>2) Elektrik: güç planı + faz + güzergâh</h3>
          <ul>
            <li>Toplam yükü kalem kalem çıkar (ses/ışık/LED/medya/server/kayıt)</li>
            <li>Faz dağılımı ve pano kapasitesini doğrula</li>
            <li>Kablo güzergâhını yaya akışına göre planla</li>
            <li><strong>%10–15</strong> yedek pay bırak</li>
          </ul>

          <h3>3) Akustik: anlaşılabilirlik ve SPL</h3>
          <p>
            Konuşma odaklı etkinlikte yankı ve HVAC gürültüsü kritiktir. Performans odaklı etkinlikte komşuluk ve SPL limiti oyunu değiştirir.
          </p>

          <h3>4) FOH konumu: sahneyi görmüyorsa sorun çıkar</h3>
          <p>
            FOH (mix) sahneyi görmüyorsa, hem ses miks kalitesi hem de show kontrol zorlaşır. Keşifte FOH alanını ölç, masa ihtiyacını belirle.
          </p>

          <h3>5) Video/LED: görüş çizgisi ve içerik uyumu</h3>
          <p>
            Kolon/sütun engellerini fotoğraflayıp oturma düzeniyle birlikte değerlendir. LED/projeksiyon seçimi; alan, gün ışığı ve okunabilirlik hedefiyle yapılır.
          </p>

          <h4>Üst düzey video yönetimi için 6 ipucu</h4>
          <ol>
            <li><strong>En-boy oranı:</strong> İçerik formatını ekrana göre kilitle; test et.</li>
            <li><strong>Teknoloji seçimi:</strong> Gün ışığı/kontrast varsa LED, düşük ışıkta projeksiyon alternatifleri.</li>
            <li><strong>İnternet:</strong> Stream/uzaktan katılım varsa kablolu hat + yedek planla.</li>
            <li><strong>İletim:</strong> Kablo karmaşası için uygun iletim senaryosunu düşün.</li>
            <li><strong>Kaynak listesi:</strong> Sunum, video, kamera, logo, uzaktan… hepsini tek listede topla.</li>
            <li><strong>Çoklu ekran:</strong> Hangi ekran neyi gösterecek? Sinyal planını sabitle.</li>
          </ol>

          <h3>6) Aydınlatma: doğal ışık, blackout, kontrol</h3>
          <p>
            Keşfi mümkünse etkinliğin yapılacağı saatlerde yap. Gün ışığı LED kontrastını etkiler. DMX/dimmer altyapısını, blackout ihtiyacını, armatür konumlarını netleştir.
          </p>

          <h4>Etkinlikler için 6 aydınlatma ipucu</h4>
          <ul>
            <li><strong>Stage wash:</strong> sahne genel aydınlatma</li>
            <li><strong>Back-lighting:</strong> derinlik + kamera kalitesi</li>
            <li><strong>Uplight:</strong> atmosfer</li>
            <li><strong>Beam / hareketli:</strong> dinamik efektler</li>
            <li><strong>Gobo:</strong> logo/desen</li>
            <li><strong>Followspot:</strong> konuşmacı/sanatçı takibi</li>
          </ul>

          <h3>7) 3D plan / render: pahalı revizyonu ucuzlatır</h3>
          <p>
            Büyük kurulumlarda 3D plan/render istemek; sahne–LED–ışık konumlarını önceden doğrular ve kurulum günü revizyonu azaltır.
          </p>

          <h3>8) Rigging (asma): kapasite varsayım değildir</h3>
          <p>
            Askı noktaları ve kapasite yazılı olmalı. Statik/izin dokümanlarını sor. Rigging plot ile ağırlık dağılımını netleştirmeden truss/LED/ışık kararını kilitleme.
          </p>

          <h2 id="bolum-4">Bölüm 4 — Dokümantasyon ve karar alma</h2>
          <h3>1) Tek sayfa “Keşif Özeti” hazırla</h3>
          <ul>
            <li>Güç planı (kW, faz, hatlar, yedek pay)</li>
            <li>Sahne/FOH/LED yerleşimi ve ölçüler</li>
            <li>Rigging + askı noktaları</li>
            <li>İnternet/stream planı</li>
            <li>Lojistik (load-in/out) + çalışma saatleri</li>
            <li>Riskler + aksiyon listesi</li>
          </ul>

          <h3>2) Bütçe ve risk: %10–15 kontenjan</h3>
          <p>
            Keşifte riskleri notlayıp bütçede <strong>%10–15 kontenjan</strong> ayırmak, son dakika mecburi maliyetleri yönetilebilir kılar.
          </p>

          <h3>3) Timeline, rol dağılımı ve içerik teslimi</h3>
          <p>
            LED içerik, sunumlar, kamera planı ve prova saatleri net değilse show gecikir. İçerik teslim tarihini ve prova pencerelerini keşifte kilitle.
          </p>

          <h3>4) Sözleşme kontrolü (hukuki ipuçları)</h3>
          <p>
            Münhasırlık, ek ücretler, mesai, sorumluluk/cezai şartlar AV tarafında en çok sürpriz çıkaran maddelerdir. Gerekiyorsa hukuk danışmanlığı alın.
          </p>

          <hr />

          <h2>Sonuç</h2>
          <p>
            Teknik keşif doğruysa, kurulum günü rutin olur: bütçe netleşir, ekip ne yapacağını bilir, show güvenli ve kaliteli akar.
          </p>

          <div className="not-prose mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-base font-semibold">Teknik keşif talep edin</h3>
            <p className="mt-2 text-sm text-white/75">
              Sahneva ile keşif + rapor + net teknik paket: sahne, podyum, LED ekran, ses-ışık ve rigging planını birlikte kilitleyelim.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/iletisim" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B1120] hover:bg-white/90">
                Keşif / Teklif Formu
              </Link>
              <Link href="/led-ekran-kiralama" className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                LED Ekran Kiralama
              </Link>
            </div>
          </div>

          <h2 id="sss">SSS</h2>
          {FAQ.map((item) => (
            <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </article>
      </main>
    </>
  );
}
