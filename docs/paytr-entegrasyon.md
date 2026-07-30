# PayTR iFrame API Entegrasyonu

Kredi/banka kartı ile online ödeme. Müşteri, teklifte mutabık kalınan tutarı `/odeme`
sayfasında kendisi girer; ödeme PayTR'ın 3D Secure korumalı iframe formunda alınır.
Kart bilgileri hiçbir aşamada Sahneva sunucularına ulaşmaz.

Doküman: <https://dev.paytr.com/iframe-api>

## Dosyalar

| Dosya | Görev |
| --- | --- |
| `lib/payments/paytr.js` | Hash üretimi, tutar doğrulama, token isteği. **Sunucu tarafı — client bileşenden import etmeyin.** |
| `app/api/paytr/token/route.js` | 1. Adım: `iframe_token` üretir. Doğrulama + hız sınırı. |
| `app/api/paytr/callback/route.js` | 2. Adım: PayTR bildirim (callback) URL'i. İmzayı doğrular, `OK` döner. |
| `app/(tr)/odeme/page.js` | Ödeme sayfası (noindex). |
| `app/(tr)/odeme/basarili/page.js` | `merchant_ok_url` hedefi. |
| `app/(tr)/odeme/basarisiz/page.js` | `merchant_fail_url` hedefi. |
| `components/payments/PaytrCheckout.client.jsx` | Form + PayTR iframe. |
| `components/payments/PaytrInstallmentTable.client.jsx` | Taksit tablosu widget'ı; tutar değiştikçe yeniden render eder. |
| `components/payments/FrameBreakout.client.jsx` | Sonuç sayfasını iframe'den üst pencereye taşır. |
| `lib/security/buildCsp.js` | `frame-src` ve `script-src`'a `https://www.paytr.com` eklendi. |
| `lib/security/inlineScripts.js` | Trusted Types allowlist'ine PayTR taksit tablosu path'i eklendi. |

## Ortam değişkenleri

**Tek kaynak Vercel'dir:** Project Settings → Environment Variables. Mağaza bilgileri
repoda hiçbir yerde tutulmaz; kod yalnızca `process.env` üzerinden okur
(`lib/payments/paytr.js`). Repoya erişen biri anahtarlara ulaşamaz.

Kurallar:

- `PAYTR_MERCHANT_KEY` ve `PAYTR_MERCHANT_SALT` **gizlidir**. Vercel'de eklerken
  **Sensitive** işaretleyin; kaydettikten sonra panelde bile geri okunamaz.
- Asla `NEXT_PUBLIC_` öneki kullanmayın — o önek değeri tarayıcı paketine gömer.
- Değişkenleri hangi ortamlara ekleyeceğinizi seçin. Yalnızca Production seçilirse
  preview dağıtımlarında `/odeme` sayfası "ödeme kullanılamıyor" (503) verir; bu
  bilinçli bir tercih olabilir.
- Sensitive işaretli değişkenler kaydedildikten sonra **geri okunamaz**;
  `vercel env pull` de bunları getirmez. Yerelde denemek gerekirse değerleri PayTR
  panelinden tekrar alıp `.env.local` içine elle yazın (bu dosya `.gitignore`
  içindeki `.env*` kuralıyla yok sayılır, iş bitince silin). Pratikte testi preview
  dağıtımı üzerinde yapmak daha kolaydır.
- Değişkenleri kaydettikten sonra **yeniden deploy** edin; mevcut dağıtıma geriye
  dönük uygulanmazlar.
- Bir anahtarın sızdığından şüphelenirseniz PayTR mağaza panelinden mağaza parolası ve
  gizli anahtarı yenileyip Vercel'deki değerleri güncelleyin.

Değerler PayTR panelinde **Mağaza Bilgileri** bölümündedir. Panelin "SDK API
Kullanıcıları" bölümündeki Public Key / Private Key ikilisi **mPOS SDK'ya aittir ve
burada kullanılmaz** — iFrame API aşağıdaki üç değeri ister.

| Değişken | PayTR paneli | Zorunlu | Varsayılan | Açıklama |
| --- | --- | --- | --- | --- |
| `PAYTR_MERCHANT_ID` | Mağaza No | evet | — | Mağaza numarası |
| `PAYTR_MERCHANT_KEY` | Mağaza Parolası | evet | — | Gizli |
| `PAYTR_MERCHANT_SALT` | Mağaza Gizli Anahtarı | evet | — | Gizli |
| `PAYTR_TEST_MODE` | — | hayır | `1` (test) | **Canlıya geçmek için `0` yapın.** Başka hiçbir değer canlı çalıştırmaz. |
| `PAYTR_MIN_AMOUNT_TRY` | — | hayır | `100` | Kabul edilen en düşük tutar (TL) |
| `PAYTR_MAX_AMOUNT_TRY` | — | hayır | `250000` | Kabul edilen en yüksek tutar (TL) |
| `PAYTR_MAX_INSTALLMENT` | — | hayır | `0` | 0 = PayTR varsayılanı, 1–12 arası sınır |
| `PAYTR_NO_INSTALLMENT` | — | hayır | `0` | `1` → taksit tamamen kapalı |
| `PAYTR_TIMEOUT_LIMIT` | — | hayır | `30` | Ödeme oturumu süresi (dakika) |
| `PAYTR_INSTALLMENT_TOKEN` | Taksit Tablosu → Token | hayır | — | Taksit tablosu widget'ı için. Boşsa widget hiç render edilmez. |

Üç zorunlu değişkenden biri eksikse `/api/paytr/token` 503 döner ve ödeme başlatılmaz.

## PayTR mağaza panelinde yapılacak ayar

**Bildirim URL** alanına şunu girin:

```
https://www.sahneva.com/api/paytr/callback
```

Bu adres kimlik doğrulaması istemez ve her doğrulanmış bildirimde gövdesi tam olarak
`OK` olan düz metin döner. `OK` alınmazsa PayTR bildirimi tekrar gönderir.

## Ödemenin doğrulanması

Ödemenin gerçekten alındığının **tek kanıtı** callback isteğidir:

```
hash = base64( HMAC-SHA256( merchant_key, merchant_oid + merchant_salt + status + total_amount ) )
```

`/odeme/basarili` sayfası yalnızca bilgilendirmedir; müşteri o adrese elle de gidebilir.
Sipariş/tahsilat kaydı için tek kaynak PayTR mağaza panelidir. Uygulama tarafında
başarılı ödeme `PAYTR_PAYMENT_SUCCESS` etiketiyle sunucu log'una yazılır
(Vercel → Logs). Kalıcı kayıt istenirse callback içindeki not edilen yere veritabanı
yazımı ve mükerrer bildirim koruması eklenmelidir.

## Test

1. `PAYTR_TEST_MODE=1` (varsayılan) bırakın.
2. `/odeme` sayfasını doldurup ödemeye geçin.
3. PayTR panelindeki test kartlarıyla ödeme yapın — karttan tahsilat olmaz.
4. Vercel log'unda `PAYTR_TOKEN_CREATED` ve `PAYTR_PAYMENT_SUCCESS` kayıtlarını görün.

`debug_on` test modunda otomatik olarak `1`'dir; PayTR token hatalarının sebebi
`PAYTR_TOKEN_FAILED` log satırında görünür.

### Sorun giderme: "yalnızca link çözümü (Basic API) aktiftir"

`PAYTR_TOKEN_FAILED` log'unda bu mesaj görünüyorsa kod tarafında sorun yok —
mağaza hesabının Pro API (Entegrasyon) yetkisi PayTR tarafından kapatılmış demektir.
`get-token` uç noktası yalnızca Pro API ile çalışır; `PAYTR_TEST_MODE` değerinin 1
veya 0 olması bu hatayı etkilemez, iki modda da aynı şekilde reddeder.

2026-07-29'da başarıyla çalışıp 2026-07-30'da bu hatayı vermeye başladı — yani PayTR
hesabın yetkisini sonradan kısıtlamış olabilir. Çözüm PayTR desteğinden Pro API'nin
yeniden açılmasını istemek; mağaza no'yu ve hatayı birebir iletmek yeterli.

## Taksit Tablosu Widget'ı

PayTR panelindeki "Taksit Tablosu" kodu statiktir: tutar, script'in `src` sorgu
dizesine (`amount=...`) gömülüdür. Sitede tutarı müşteri yazdığı için
`PaytrInstallmentTable.client.jsx`, kullanıcı yazmayı bıraktıktan 600ms sonra
script etiketini tutarın güncel değeriyle yeniden oluşturup DOM'a yeniden ekler.

`amount` parametresi PayTR'ın `get-token` API'sindeki `payment_amount` alanından
**farklıdır**: kuruşa çevrilmez, kullanıcının yazdığı ondalıklı tutar (`"1500.50"`
veya `"1500,50"`) doğrudan geçirilir.

Bu widget iki bağımsız izin listesine giriyor, ikisi de eklendi:

- **CSP `script-src`** (`lib/security/buildCsp.js`) — tarayıcının script'i ağdan
  çekmesine izin verir.
- **Trusted Types allowlist** (`lib/security/inlineScripts.js`,
  `allowedExternalScripts`) — `script.src = url` atamasını `require-trusted-types-for
  'script'` altında geçerli kılar. Path `/odeme/taksit-tablosu/` ile başlayan her
  şeye izin verir; PayTR script'in sürümünü (`/v2`, ileride `/v3`) değiştirirse yeni
  bir CSP/Trusted Types güncellemesi gerekmez.

`PAYTR_INSTALLMENT_TOKEN` boşsa bileşen `null` döner, sayfada hiçbir iz bırakmaz.
Bu token, `merchant_id` gibi tarayıcıya gömülmek üzere tasarlanmıştır — `merchant_key`
/ `merchant_salt` gibi gizli değildir, Sensitive işaretlemenize gerek yok.

## Yasal sayfalar

`/mesafeli-satis-sozlesmesi` ve `/iptal-ve-iade-kosullari` eklendi. İkisi de satıcı
bilgilerini ve kademeli iade basamaklarını `lib/legal/companyInfo.js` üzerinden okur —
şirket bilgisi veya iade politikası değişirse yalnızca o dosya güncellenir.

`COMPANY_INFO_COMPLETE` bayrağı, `COMPANY` içinde köşeli parantezli yer tutucu kalıp
kalmadığını denetler. Bir alan boşaltılırsa iki sayfa da otomatik `noindex` olur;
eksik bilgiyle arama motorlarına açılmalarını engeller.

Metinler avukat incelemesinden geçmedi. Özellikle cayma hakkı istisnası (belirli
tarihte yapılan eğlence/boş zaman hizmetleri) iddiası hukukçu onayı gerektirir.

## Açık konular

- Ödeme sayfası yalnızca Türkçe. EN/RU/AR/ZH lokalleri için ayrı sayfa açılmadı;
  yasal sayfaların da yalnızca TR sürümü var.
- `/odeme` üst menüdeki "Bizi Araştırın" açılırında ve footer hızlı bağlantılarda
  linklidir; sayfa `noindex` olduğu için bu linkler arama sonuçlarına çıkmaz.
- Vergi levhasındaki Başakşehir iş yeri adresi ile ticaret sicilindeki Kağıthane merkez
  adresi farklı. Yasal metinlerde tescilli merkez (Kağıthane) kullanıldı.
