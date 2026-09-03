# Sahneva SEO ve GEO karar raporu — 3 Eylül 2026

Kapsam: Kullanıcının sağladığı iki rapor, güncel Sahneva kaynak kodu, 3 Eylül
2026 canlı uç noktaları ve Google, Bing, OpenAI, Chrome ile özgün GEO
araştırmasının birincil kaynakları.

Bu rapor sıralama veya AI yanıtında görünme garantisi vermez. Güncel organik
performans, sorgu kaybı ve dönüşüm etkisi Search Console/Analytics verisi
olmadan bilinmiyor.

## Yönetici kararı

### Birinci rapor: seçerek kullanılabilir

Birinci raporun ana fikri mantıklı: gerçek proje kanıtı, tutarlı şirket
bilgisi, taranabilirlik, niyet ayrımı ve bağımsız güven sinyalleri önemlidir.
Ancak rapordaki bazı repo tespitleri güncelliğini yitirmiş, dış görünürlük ve
rakip değerlendirmeleri ise tekrar üretilebilir kanıt içermiyor.

- İki ayrı Türkçe podyum fiyat sayfası artık yok. Eski
  `/podyum-kiralama-fiyatlari` canlıda 301 ile
  `/podyum-kurulum-fiyatlari` adresine gidiyor.
- Podyum fiyatları `lib/pricing.js` içindeki tek kaynaktan TR/EN/DE sayfalarına
  dağıtılıyor. Eski 270/130 TL tablosu güncel kodda bulunmuyor.
- İngilizce sahne paketi ile Türkçe podyum birim fiyatı farklı kapsam ve süre
  modelleridir; aynı rakama zorlanmamalıdır.
- Bağımsız `/truss-kiralama` sayfası zaten vardır.
- Arapça, Rusça ve Çince sayfaların "ince çeviri" olduğu iddiası rota ve içerik
  denetimiyle kanıtlanmamıştır.
- Buna karşılık raporun bulduğu "1 numaralı" ve elle yazılmış "250+ reviews"
  sorunları gerçekti ve bu çalışmada düzeltildi.

Sonuç: strateji çerçevesi tutulabilir; puanlar, rakip üstünlükleri, CTR
yüzdeleri, bağımsız bahis sayıları ve keyfi 90 günlük hedefler karar kanıtı
olarak kullanılmamalıdır.

### İkinci rapor: olduğu gibi uygulanmamalı

İkinci rapor doğru kavramlarla kaynaksız oranları ve yanlış teknik sonuçları
birbirine karıştırıyor. Özellikle aşağıdaki öneriler reddedildi:

- SEO'nun GEO ile "yer değiştirdiği" iddiası;
- bütün metinleri 134–167 kelimelik bloklara zorlama;
- Google görünürlüğü için `llms-full.txt` ve özel AI şeması üretme;
- `Service` şemasını bırakıp kiralama hizmetlerini `Product` yapma;
- topluca FAQPage ekleyerek rich result bekleme;
- ölçüm olmadan INP'nin 200 ms altında kalacağını garanti etme;
- stok, takvim ve fiyat verisini kimlik doğrulama/insan onayı olmadan MCP'ye
  açma;
- GEO takip lisansını kanıt ve pilot olmadan "elzem" sayma.

Rapordaki 25%, 60%, 95%, 156%, 71% ve benzeri oranlar Sahneva için ölçülmüş
sonuçlar değildir. Kaynak, örneklem, sorgu kümesi ve yöntem verilmeden hedef
veya yatırım gerekçesi yapılamaz.

## 2026 resmi arama ve GEO gerçeği

Google, Mayıs 2026 rehberinde GEO/AEO çalışmalarını Search deneyimini
iyileştiren SEO'nun parçası olarak tanımlıyor. AI Overviews ve AI Mode temel
Search index, kalite ve sıralama sistemlerine dayanıyor. En güçlü öneri
"AI için metin üretmek" değil; kopyalanamayan birinci el içerik, açık teknik
yapı, metin olarak erişilebilir ana bilgi ve gerçek görsel/video kanıtıdır.

Google'ın açıkça gereksiz saydığı uygulamalar:

- `llms.txt` veya başka bir özel AI metin dosyasını Google sıralama yatırımı
  olarak görmek;
- içerikleri yapay şekilde küçük parçalara bölmek;
- her long-tail veya fan-out sorgusu için ayrı sayfa üretmek;
- metni yalnız AI sistemleri için yeniden yazmak;
- sahte veya satın alınmış bahis kovalamak;
- özel bir AI schema aramak.

Kaynak:
[Google generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide),
[AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

FAQ rich result 7 Mayıs 2026'da Google Search'ten kaldırıldı. Görünür SSS
ziyaretçi için korunmalıdır; `FAQPage` artık Sahneva için bir Google görünüm
kazanımı değildir. Kaynak:
[Google Search documentation updates](https://developers.google.com/search/updates).

E-E-A-T tekil bir puan veya doğrudan sıralama faktörü değildir. Gerçek yazar,
nasıl üretildiği açıklanan içerik, saha deneyimi ve güvenilir kaynaklar güven
sinyallerini destekler. Kaynak:
[Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

`Google-Extended`, Google Search veya AI Overviews dahil edilmesini kontrol
etmez ve ranking sinyali değildir. Search için Googlebot geçerlidir. Benzer
şekilde OpenAI'de `OAI-SearchBot` arama görünürlüğü, `GPTBot` ise potansiyel
eğitim kullanımı içindir. Kaynaklar:
[Google crawler controls](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers),
[OpenAI publishers and developers FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq).

Google'ın review snippet desteklediği reviewed-item türleri arasında `Service`
yoktur. Kendi sitesinde kendi işletmesini puanlayan `LocalBusiness` ve
`Organization` işaretlemeleri de self-serving review kısıtına tabidir. Bu
nedenle üç İngilizce hizmet sayfasındaki `Service.aggregateRating` kaldırıldı.
Kaynak:
[Google review snippet structured data](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

Akademik GEO çalışması "%40'a kadar" artışı deneysel bir generative-engine
görünürlük metriğinde raporladı; Google sırası, trafik, teklif veya gelir artışı
ölçmedi. Bu sonuç yalnız kontrollü içerik deneyi için hipotezdir. Kaynak:
[KDD 2024 GEO paper](https://doi.org/10.1145/3637528.3671900).

## 3 Eylül 2026 Sahneva kontrolü

Canlı salt-okunur kontroller:

| Kontrol | Sonuç |
| --- | --- |
| Ana sayfa | HTTP 200 |
| `/robots.txt` | HTTP 200; arama ve eğitim botları ayrı gruplarda |
| `/llms.txt` | HTTP 200; v1.3, 2 Eylül üretimi |
| `/sitemap.xml` | HTTP 200 |
| Eski podyum fiyat URL'si | 301, güncel fiyat sayfasına |
| Güncel podyum fiyat sayfası | HTTP 200 |
| İngilizce ses-ışık sayfası | HTTP 200; canlı sürümde eski `250+ reviews` bulundu |

Mevcut altyapı değerlendirmesi:

- Robots, sitemap, locale alternates, intent map, içerik kümeleri ve WebMCP
  zaten vardır. Bunları yeniden kurmak gereksizdir.
- `Service + OfferCatalog + Offer` gerçek kiralama/kurulum modeline uygundur ve
  korunmuştur.
- `content-visibility`, lazy media ve onay/idle sonrası analitik yükleme zaten
  kullanılmaktadır. Saha INP sorunu görülmeden genel bir yeniden yazım
  yapılmamalıdır.
- Vercel görsel dönüştürücü kotasını tüketmemek için `images.unoptimized: true`
  korunmuştur. Statik `<img>`/`<picture>` ve build-time AVIF/WebP türevleri
  kullanılmaya devam edilmelidir; `/_next/image` tekrar açılmamalıdır.
- `llms.txt` başka sistemler için düşük maliyetli bir keşif yüzeyi olarak
  kalabilir. Google SEO/GEO başarısı olarak raporlanmamalı ve fiyat/stok
  kopyalayan ikinci bir `llms-full.txt` oluşturulmamalıdır.

## Bu çalışmada uygulanan düzeltmeler

1. İngilizce ses-ışık sayfasındaki elle yazılmış `250+ reviews` dahil olmak
   üzere kaynağı doğrulanamayan tüm sabit Google puanı ve yorum sayıları
   kaldırıldı. Yeni entegrasyon yalnız Google Business Profile API canlı veri
   döndürürse görünür; hata veya eksik yapılandırmada sayı göstermez.
2. İngilizce LED, çadır ve masa-sandalye hizmetlerinde Google'ın desteklediği
   reviewed-item türü olmayan `Service.aggregateRating` kaldırıldı.
3. Türkçe ürün lansmanı yazısındaki merkezi 700+ proje verisiyle çelişen
   `1200+` iddiası merkezi sabite bağlandı.
4. Türkçe Hakkımızda sayfasındaki "Türkiye'nin 1 numaralı" iddiası kaldırıldı;
   ölçülebilir hizmet konumlandırmasına çevrildi.
5. İngilizce Antalya/MICE sayfalarındaki kaynaksız `#1`, uçuş, otel ve güneşli
   gün sayıları sadeleştirildi; karar vericiye yararlı lojistik ve prodüksiyon
   dili korundu.
6. Google Business Profile puanı için sunucu tarafında OAuth kullanan, sonucu
   24 saat önbellekleyen ve istemciye hiçbir gizli anahtar göndermeyen bir
   entegrasyon hazırlandı. Kurulum bilgileri eklenene kadar bileşen gizlidir.
6. Kaynak SEO denetiminin artık görünür FAQ için FAQPage zorunluluğu üretmesi
   durduruldu.
7. Aynı denetime self-rating `aggregateRating`, elle yazılmış yorum toplamı,
   eski 1200+ proje sayısı ve `#1/1 numaralı` iddiası için build'i kıran güven
   kontrolleri eklendi.

## Öncelikli uygulama planı

### P0 — ölçüm tabanı

Kod değil, hesap/veri erişimi gerektirir:

1. 31 Ağustos 2026'dan beri dünya çapında açık olan Search Console
   **Generative AI performance** raporunda son 28 ve önceki 28 günü karşılaştırın.
   Sayfa, ülke, cihaz ve tarih kırılımını dışa aktarın. Kaynak:
   [Google Search Console generative AI reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports).
2. Bing Webmaster Tools **AI Performance** içindeki cited pages, citations ve
   grounding query örneklerini alın. Citation sayısını ranking/authority diye
   yorumlamayın. Kaynak:
   [Bing AI Performance](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview).
3. `utm_source=chatgpt.com` yönlendirmelerini, nitelikli teklif formu/WhatsApp
   başlangıçları ve organik dönüşümlerle birlikte ölçün.
4. Vercel/CDN loglarında yalnız user-agent adına değil, sağlayıcıların
   yayımladığı ağ bilgilerine göre crawler 200/403/429 dağılımını doğrulayın.

### P1 — TR/EN içerik ve arama niyeti

Yeni sayfa sayısından önce mevcut kümeleri güçlendirin:

- ticari hizmet: kapsam, lojistik, kurulum, operasyon ve söküm;
- fiyat/karar rehberi: fiyatı etkileyen değişkenler ve net birimler;
- gerçek proje: izinli fotoğraf/video, gerçek ölçü ve saha kısıtı;
- teknik rehber: seçim ölçütü, risk, standart ve kaynak.

TR ve EN için yeni rota ancak Search Console'da ayrı sorgu talebi, ayrı kullanıcı
niyeti ve özgün saha kanıtı varsa açılmalıdır. LED için üç yeni yapay landing
page veya ilçe varyasyonları şu anda önerilmez.

Yazar/teknik inceleyen adı yalnız gerçek kişi ve onay varsa eklenmelidir.
Sertifika, EN 13814, IP derecesi, stok ve kurulum süresi yalnız ilgili ürün ve
belgeyle doğrulanabiliyorsa çoğaltılmalıdır.

### P2 — dış güven ve yerel varlık

Google Business Profile, Bing Places ve gerçek kurumsal profillerde ad, 61A
adres, telefon, kuruluş tarihi ve hizmet alanı tek tek kontrol edilmelidir.
Sahte dizin kaydı, ücretli mention veya müşteri yazısı gibi gösterilen marka
metni üretilmemelidir. Gerçek müşteri/proje yayını ayrıca izin gerektirir.

### Deneysel pilot

Sabit 20 TR + 20 EN karar sorgusu; tarih, motor/sürüm, ülke ve oturum koşulları
kaydedilerek ayda bir örneklenebilir. Ölçülecekler: Sahneva'nın kaynak olarak
gösterilmesi, kaynak URL doğruluğu, yanlış fiyat/stok iddiası ve nitelikli
yönlendirme. Tek cevap, "kaçıncı sıra" veya araçların kapalı GEO skoru başarı
kanıtı değildir.

WebMCP mevcut ilerici geliştirme olarak kalabilir. Gerçek stok/takvim/teklif
MCP'si ancak kimlik doğrulama, yetki sınırı, log, oran sınırlama, kişisel veri
kontrolü ve insan onayı olan gerçek bir rezervasyon API'si bulunduğunda ayrı
ürün projesi olarak değerlendirilmelidir. SEO ranking işi değildir.

## Başarı ölçütü

Başarı tek bir ChatGPT yanıtı değildir. Birlikte izlenecek metrikler:

- Search Console klasik Search ve Generative AI gösterim/tıklamaları;
- Bing cited pages ve grounding query örnekleri;
- ChatGPT yönlendirmeleri;
- sorgu kümesi bazında doğru kaynak/yanlış iddia oranı;
- organik ve AI kaynaklı nitelikli teklif/dönüşüm;
- 75. yüzdelik saha LCP, INP ve CLS;
- tarama, canonical, hreflang ve indekslenebilirlik hataları.

Bu metriklerde başlangıç değeri alınmadan artış yüzdesi veya süre garantisi
verilmemelidir.
