import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Film, Layers3, Lightbulb, ShieldCheck, TentTree } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sahneva.com").replace(/\/$/, "");
const PAGE_PATH = "/projeler/saha-2026-dome-cadir-kurulumu";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const TITLE = "SAHA 2026 Dome Çadır ve Özel Etkinlik Alanı Kurulumu";
const DESCRIPTION =
  "Kapalı fuar alanı içerisinde dome çadır, özel giriş cephesi, zemin altyapısı ve ambiyans aydınlatmasıyla hazırlanan özel etkinlik alanı kurulumu.";
const PUBLISHED_AT = "2026-05-02T17:00:00+03:00";
const MODIFIED_AT = "2026-05-02T17:00:00+03:00";

const HERO_IMAGE = {
  src: "/images/projects/saha-2026-dome-cadir-final.webp",
  width: 1439,
  height: 1023,
  alt: "SAHA 2026 kapsamında kapalı fuar alanında kurulan dome çadır ve özel giriş alanı",
};

const VIDEO = {
  src: "/videos/projects/saha-2026-dome-cadir-kurulum.mp4",
  poster: "/images/projects/saha-2026-dome-cadir-video-poster.webp",
  posterWidth: 1280,
  posterHeight: 720,
};

const GALLERY = [
  HERO_IMAGE,
  {
    src: "/images/projects/saha-2026-dome-cadir-iskelet-kurulumu.webp",
    width: 1800,
    height: 1013,
    alt: "Dome çadır taşıyıcı iskelet kurulumu ve saha operasyonu",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-kaplama-detayi.webp",
    width: 1600,
    height: 1200,
    alt: "Beyaz dome çadır kaplama detayı ve fuar alanı kurulumu",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-giris-alani.webp",
    width: 1600,
    height: 1200,
    alt: "Dome çadır özel giriş alanı ve ambiyans aydınlatması",
  },
  {
    src: "/images/projects/saha-2026-dome-cadir-fuar-alani.webp",
    width: 1152,
    height: 2048,
    alt: "Kapalı fuar alanı içinde dome çadır kurulum süreci",
  },
];

const SERVICES = [
  { href: "/cadir-kiralama", label: "Dome çadır kurulumu", icon: TentTree },
  { href: "/podyum-kiralama", label: "Podyum ve zemin altyapısı", icon: Layers3 },
  { href: "/ses-isik-sistemleri", label: "Ambiyans ışık planı", icon: Lightbulb },
  { href: "/led-ekran-kiralama", label: "LED ekran ve teknik prodüksiyon", icon: Film },
];

export const revalidate = 86400;

export const metadata = {
  title: "SAHA 2026 Dome Çadır Kurulumu",
  description:
    "SAHA 2026 kapsamında kapalı fuar alanında dome çadır, özel giriş yapısı, zemin altyapısı ve ambiyans aydınlatmasıyla hazırlanan özel etkinlik alanı kurulumu.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "tr-TR": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    type: "article",
    title: "SAHA 2026 Dome Çadır Kurulumu | Sahneva Organizasyon",
    description:
      "Kapalı fuar alanında dome çadır, özel giriş yapısı, zemin altyapısı ve ambiyans aydınlatmasıyla hazırlanan özel etkinlik alanı kurulumu.",
    url: PAGE_URL,
    siteName: "Sahneva",
    locale: "tr_TR",
    images: [
      {
        url: `${SITE_URL}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAHA 2026 Dome Çadır Kurulumu | Sahneva Organizasyon",
    description:
      "Kapalı fuar alanında dome çadır, özel giriş yapısı, zemin altyapısı ve ambiyans aydınlatmasıyla hazırlanan özel etkinlik alanı kurulumu.",
    images: [`${SITE_URL}${HERO_IMAGE.src}`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function SahaDomeProjectPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "tr-TR",
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        primaryImageOfPage: { "@id": `${PAGE_URL}#hero-image` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${PAGE_URL}#project`,
        name: TITLE,
        headline: TITLE,
        description: DESCRIPTION,
        url: PAGE_URL,
        image: GALLERY.map((image) => `${SITE_URL}${image.src}`),
        creator: { "@id": `${SITE_URL}/#org` },
        publisher: { "@id": `${SITE_URL}/#org` },
        datePublished: PUBLISHED_AT,
        dateModified: MODIFIED_AT,
        inLanguage: "tr-TR",
        about: ["dome çadır kurulumu", "özel etkinlik alanı", "fuar alanı kurulumu", "ambiyans aydınlatması"],
      },
      {
        "@type": "ImageObject",
        "@id": `${PAGE_URL}#hero-image`,
        contentUrl: `${SITE_URL}${HERO_IMAGE.src}`,
        url: `${SITE_URL}${HERO_IMAGE.src}`,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        caption: HERO_IMAGE.alt,
      },
      {
        "@type": "VideoObject",
        "@id": `${PAGE_URL}#video`,
        name: "SAHA 2026 Dome Çadır Kurulum Videosu",
        description:
          "SAHA 2026 kapsamında kapalı fuar alanında hazırlanan dome çadır, özel giriş alanı ve kurulum sürecinden saha videosu.",
        thumbnailUrl: `${SITE_URL}${VIDEO.poster}`,
        uploadDate: PUBLISHED_AT,
        contentUrl: `${SITE_URL}${VIDEO.src}`,
        embedUrl: PAGE_URL,
        inLanguage: "tr-TR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Projeler", item: `${SITE_URL}/projeler` },
          { "@type": "ListItem", position: 3, name: "SAHA 2026 Dome Çadır Kurulumu", item: PAGE_URL },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <JsonLd data={jsonLd} />

      <section className="relative min-h-[620px] overflow-hidden">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-slate-950/55 to-[#0B1120]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(59,130,246,0.22),transparent_36%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,64px_64px,64px_64px]" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              <span aria-hidden="true">/</span>
              <Link href="/projeler" className="hover:text-white">Projeler</Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">SAHA 2026 Dome Çadır</span>
            </nav>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-blue-300" />
              Referans Proje / Uygulama Örneği
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {TITLE}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/88 md:text-xl">
              {DESCRIPTION}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/iletisim?konu=saha-2026-dome-cadir"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Benzer Proje İçin Teklif Al
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+SAHA+2026+dome+%C3%A7ad%C4%B1r+kurulumuna+benzer+bir+proje+i%C3%A7in+teklif+almak+istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
              >
                WhatsApp Teklif
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <BackgroundGlow />
        <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            ["Alan", "Kapalı fuar alanı"],
            ["Yapı", "Dome çadır + giriş cephesi"],
            ["Altyapı", "Zemin ve kaplama"],
            ["Işık", "Ambiyans aydınlatması"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">{label}</p>
              <p className="mt-2 text-lg font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionEyebrow>Proje Özeti</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Dome çadır, giriş alanı ve teknik altyapı birlikte planlandı.
            </h2>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 leading-relaxed text-slate-200 shadow-2xl shadow-blue-950/20 backdrop-blur md:p-8">
            <p>
              SAHA 2026 kapsamında kapalı fuar alanı içerisinde özel bir dome çadır alanı hazırlandı.
              Projede yalnızca çadır gövdesi değil; taşıyıcı sistem, zemin altyapısı, kaplama uygulaması,
              özel giriş cephesi ve ambiyans aydınlatması bir bütün olarak ele alındı. Kurulum süreci,
              fuar alanının mevcut teknik koşulları dikkate alınarak planlandı ve sahadaki ekip
              koordinasyonuyla tamamlandı.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-16 sm:px-6 lg:px-8" aria-labelledby="brand-position-title">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/15 backdrop-blur md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionEyebrow>Teknik Üretim</SectionEyebrow>
              <h2 id="brand-position-title" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Ajans Değil, Teknik Üretim Gücü
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-300 md:text-lg">
              SAHA 2026 dome çadır kurulumu, hazır bir dekor uygulaması ya da standart ekipman
              kiralama işi olarak ele alınmadı. Dome yapının taşıyıcı sistemi, kaplama uygulaması,
              zemin oturumu, özel giriş alanı ve ambiyans ışık planı aynı teknik bütünün parçaları
              olarak değerlendirildi. Bu yaklaşım, Sahneva’nın projelerde yalnızca ekipman sağlayan
              değil, sahada uygulanabilir çözüm üreten teknik prodüksiyon markası olarak
              konumlanmasını sağlar.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Kendi teknik mutfağımız",
                text: "Dome yapı, zemin, kaplama ve giriş alanı sahadaki uygulama bilgisiyle birlikte planlandı.",
              },
              {
                title: "Tek elden koordinasyon",
                text: "Farklı teknik parçalar ayrı ayrı değil, aynı proje akışı içinde yönetildi.",
              },
              {
                title: "Kurulumdan gösteriye",
                text: "Dome çadır alanı, final etkinlik deneyimi ve lazer gösteri altyapısı düşünülerek hazırlandı.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
            <Image
              src="/images/projects/saha-2026-dome-cadir-iskelet-kurulumu.webp"
              alt="Dome çadır taşıyıcı iskelet kurulumu ve saha operasyonu"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionEyebrow>Kurulum Süreci</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Kurulum Süreci: Taşıyıcı Sistemden Kaplamaya
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Dome yapının sahada güvenli ve dengeli şekilde kurulması için taşıyıcı sistem, zemin
              oturumu, kaplama uygulaması ve giriş aksı birlikte planlandı. Kurulum aşamasında ekip
              koordinasyonu, alan kullanımı ve teknik güvenlik öncelikli olarak ele alındı.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              {["Taşıyıcı sistem kontrolü", "Zemin oturumu ve kaplama", "Giriş aksı planı", "Saha güvenliği"].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="project-video-title">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 text-center">
            <SectionEyebrow>Proje Videosu</SectionEyebrow>
            <h2 id="project-video-title" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              SAHA 2026 Dome Çadır Kurulum Videosu
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Dome çadır taşıyıcı sisteminden kaplama ve özel giriş alanına uzanan kurulum sürecinden
              kısa bir saha videosu.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-blue-950/20 backdrop-blur md:p-4">
            <video
              className="aspect-video w-full rounded-2xl bg-black object-cover"
              controls
              preload="metadata"
              poster={VIDEO.poster}
              playsInline
              aria-label="SAHA 2026 dome çadır kurulum süreci videosu"
            >
              <source src={VIDEO.src} type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-400">
            Video, kapalı fuar alanında dome çadır taşıyıcı sisteminin kurulumu, kaplama uygulaması ve
            özel giriş alanına ilerleyen saha sürecini göstermektedir.
          </p>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionEyebrow>Görsel Galeri</SectionEyebrow>
              <h2 id="gallery-title" className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                SAHA 2026 dome çadır kurulumundan kareler
              </h2>
            </div>
            <p className="max-w-md rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-relaxed text-slate-300">
              Kurulum sürecinden final etkinlik deneyimine uzanan proje görselleri, saha tamamlandıkça güncellenecektir.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((image, index) => (
              <figure
                key={image.src}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl shadow-black/20 ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={index === 4 ? "relative aspect-[4/5]" : "relative aspect-[16/10]"}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-relaxed text-slate-300">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <SectionEyebrow>Bağlantılı Hizmetler</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
              Bu kurulumda birlikte ele alınan teknik başlıklar
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-xl shadow-black/15 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/[0.09]"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="block text-lg font-black">{label}</span>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-200">
                  İncele <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/25 via-white/[0.07] to-purple-600/20 p-8 text-center shadow-2xl shadow-blue-950/30 backdrop-blur md:p-12">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-100">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Dome Çadır ve Özel Etkinlik Alanı Kurulumu İçin Teklif Alın
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-200 md:text-lg">
            Fuar, lansman, marka deneyim alanı veya kurumsal etkinlik projelerinde dome çadır, zemin,
            giriş yapısı, ışık ve teknik kurulum ihtiyaçlarınızı birlikte planlayalım.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+dome+%C3%A7ad%C4%B1r+ve+%C3%B6zel+etkinlik+alan%C4%B1+kurulumu+i%C3%A7in+teklif+almak+istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              WhatsApp’tan Teklif Al
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionEyebrow({ children }) {
  return (
    <p className="m-0 text-xs font-black uppercase tracking-[0.28em] text-blue-200">
      {children}
    </p>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  );
}
