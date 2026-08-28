# Sahneva SEO, AI görünürlüğü ve Next.js denetimi — Ağustos 2026

Denetim tarihi: 28 Ağustos 2026
Kapsam: Google Search ve AI özellikleri, OpenAI tarayıcıları, metadata, JSON-LD,
robots/sitemap, Core Web Vitals ve Next.js güvenliği.

## Yönetici özeti

- Google'ın 18-21 Ağustos 2026 tarihli spam güncellemesi küresel olarak ve tüm
  dillerde uygulandı. Repoya, aynı dildeki indekslenebilir sayfalar arasında
  yüksek yakın-kopya oranını build sırasında engelleyen bir kontrol eklendi.
- Google'ın güncel AI arama rehberi özel bir "AI schema", ayrı bir AI sitemap'i
  veya `llms.txt` zorunluluğu tanımlamıyor. Geleneksel teknik SEO, taranabilirlik,
  snippet uygunluğu ve özgün birincil içerik temel olmaya devam ediyor.
- `OAI-SearchBot`, `ChatGPT-User` ve `GPTBot` robots.txt içinde açıkça tanımlı ve
  engellenmiyor. OpenAI'ye göre ChatGPT Search görünürlüğünü belirleyen bot
  `OAI-SearchBot`; eğitim amaçlı `GPTBot` bundan bağımsız.
- Next.js ve `eslint-config-next` 16.3.3 sürümüne yükseltildi. Bu sürüm, 25
  Ağustos 2026 güvenlik duyurusundaki kritik düzeltmeleri içeriyor.
- Kaynak ve render edilmiş HTML denetimleri temiz. Canlı production dağıtımı
  `READY`; kontrol edilen sayfalar, robots.txt ve sitemap.xml HTTP 200 döndürüyor.

## Uygulanan güvenli iyileştirmeler

Kod commit'i: `91e708049e8a6f5c756b674f54df7cc4ca6f4230`

1. Render edilmiş `<main>` içeriklerini aynı dil içinde beş kelimelik dizilerle
   karşılaştıran yakın-kopya/doorway build koruması eklendi. Hata eşiği yüzde 65,
   asgari içerik uzunluğu 250 kelime.
2. SEO kaynak denetimi `robots.index: false` ve açık `noindex` sinyallerini
   tanıyor; noindex ödeme/yönetim sayfaları sitemap ve orphan hatası üretmiyor.
3. Dört gerçek orphan rota görünür iç bağlantılara bağlandı: iki Almanca hizmet
   rotası ve iki Arapça footer hedefi.
4. Beş uzun arama başlığı kısaltıldı; görünür H1 ve makale/schema başlıkları
   içerik anlamını koruyacak şekilde ayrı tutuldu.
5. Blog önerilerindeki dinamik dosya yolu sabit kaynak dizinlerine dönüştürüldü;
   Next.js/Turbopack dinamik file-tracing uyarısı kaldırıldı.
6. Podyum fiyat CTA'sının Next.js viewport RSC prefetch'i kapatıldı. Sitenin
   `moderate` speculation rule davranışı korunarak yalnızca kullanıcı niyeti
   oluştuğunda doküman prefetch'ine izin verildi.
7. Next.js güvenlik güncellemesi ayrı PR #510 ile `main`e alındı.

## Doğrulama sonuçları

| Kontrol | Sonuç |
| --- | --- |
| Tam build | Next.js 16.3.3, Turbopack, 213/213 statik sayfa, başarılı |
| ESLint | `eslint . --max-warnings=0`, başarılı |
| Kaynak SEO denetimi | 190 sayfa, 0 issue grubu, 0 kırık iç link, 0 orphan |
| Render edilmiş HTML | 191 sayfa, 0 hata, 0 uyarı |
| En yüksek yakın-kopya oranı | Yüzde 19,6; yüzde 65 hata eşiğinin altında |
| Güvenlik başlıkları | `security:check`, başarılı |
| Mobil tarayıcı kontrolü | 200, doğru H1/title/canonical, overlay ve console hatası yok |
| Lighthouse mobil laboratuvarı | 89; FCP 1,67 sn, TBT 106 ms, CLS 0, LCP 3,60 sn |
| Production runtime | Son bir saatlik kontrolde hata kümesi bulunmadı |

Lighthouse LCP değeri laboratuvar simülasyonudur ve saha Core Web Vitals sonucu
olarak yorumlanmamalıdır. Gerçek değerlendirme, mobil ve masaüstü için ayrı ayrı
75. yüzdelikteki saha verisiyle yapılmalıdır.

## Repo dışında doğrulanması gerekenler

1. Search Console'da **Search generative AI > Include** ayarının site veya üst
   özellik düzeyinde etkin olduğunu doğrulayın. Ayar kademeli sunulduğu için tüm
   hesaplarda aynı anda görünmeyebilir.
2. Vercel Firewall veya harici CDN/WAF kullanılıyorsa OpenAI'nin yayımladığı IP
   aralıklarının bot adlarına rağmen engellenmediğini kontrol edin. Robots.txt
   tek başına firewall erişimini garanti etmez.
3. Search Console Core Web Vitals ve CrUX verisini rota şablonuna göre en az 28
   günlük saha penceresinde izleyin. Laboratuvar LCP'si nedeniyle özellikle ana
   hizmet şablonları izlenmeli.
4. Search Console AI görünüm filtresini açarak AI Overviews/AI Mode gösterim ve
   tıklamalarını sayfa, ülke, tarih ve cihaz kırılımında takip edin.

## Mimari değişiklik olarak ayrı tutulacak işler

### JSON-LD yerleşimini sadeleştirme

Render edilmiş 191 sayfada `Organization`, `WebSite` ve `LocalBusiness`
grafikleri layout'lardan tekrar ediliyor. Bunların site/locale düzeyinde tekil
kimliklerle birleştirilmesi bütün locale layout'larını ve sayfa düzeyi provider
referanslarını etkiler. Ayrı bir schema migration PR'si, Rich Results Test ve
Schema Markup Validator doğrulamasıyla yapılmalı.

`FAQPage` işaretlemesi 109 sayfada bulunuyor. Google Mayıs 2026 itibarıyla FAQ
rich result'larını göstermiyor. Görünür SSS içeriği korunmalı; yalnızca artık
arama özelliği üretmeyen JSON-LD'nin kaldırılması ayrı, küçük partiler halinde
ele alınmalı.

### Global CSS ve ortak runtime bütçesi

Mobil laboratuvar ölçümünde yaklaşık 50 KB render-blocking CSS ve ortak Next.js /
React runtime'ında kullanılmayan kod görüldü. Bunlar tek bir landing page'de
güvenle düzeltilemez. Saha LCP/INP verisiyle en sorunlu şablon seçildikten sonra
CSS katmanları ve client boundary'ler ayrı performans çalışmasında küçültülmeli.

## Yapılmaması gerekenler

- AI görünürlüğü için özel `AIOverview`, `ChatGPT` veya benzeri uydurma schema
  tipleri eklenmemeli.
- Google için ayrı AI sitemap'i veya özel içerik parçalama katmanı kurulmamalı.
- Şehir/anahtar kelime varyasyonlarını ölçekli, birbirine yakın sayfalara
  dönüştüren query-fan-out yaklaşımı uygulanmamalı.
- FAQ JSON-LD'nin kaldırılması görünür, kullanıcıya yararlı SSS içeriğini
  kaldırmak için gerekçe yapılmamalı.
- `llms.txt`, Google sıralama ya da AI görünürlüğü garantisi olarak sunulmamalı.

## Birincil kaynaklar

- [Google Search Status Dashboard: Ağustos 2026 spam güncellemesi](https://status.search.google.com/incidents/LEubPCm2octf2uMqCFKE)
- [Google: AI özelliklerinde iyi performans için rehber](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search Console: Search generative AI ayarı](https://support.google.com/webmasters/answer/16908024?hl=en)
- [Google Search Console: AI görünüm raporlaması](https://support.google.com/webmasters/answer/16984139?hl=en)
- [Google Search güncellemeleri ve FAQ rich result değişikliği](https://developers.google.com/search/updates)
- [OpenAI crawler ve user-agent belgeleri](https://developers.openai.com/api/docs/bots)
- [Next.js güvenlik ve sürüm duyuruları](https://nextjs.org/blog)
- [web.dev: Core Web Vitals eşikleri](https://web.dev/articles/vitals)
