# Canlı Destek Kurulumu

Sitedeki sohbet balonu, yönetim paneli ve telefona düşen bildirimler tek bir
modülde: harici bir sohbet servisi kullanılmıyor, ziyaretçi verisi siteden
dışarı çıkmıyor.

Ortam değişkenleri tanımlanana kadar modül **kendiliğinden kapalıdır**: balon
hiç görünmez, uçlar 503 döner. Böylece anahtarlar girilmeden yapılan bir
dağıtım, ziyaretçiye cevapsız kalacak bir sohbet kutusu göstermez.

---

## 1. Veri deposu (Upstash Redis)

Yazışmalar Upstash Redis'te tutuluyor. Vercel üzerinden bağlamak en kolayı:

1. Vercel panosunda projeyi açın → **Storage** → **Create Database** →
   **Upstash for Redis**.
2. Bölge olarak **Frankfurt (fra1)** seçin; ziyaretçilerin çoğu Türkiye'de
   olduğu için en düşük gecikmeyi bu verir. **Eviction kapalı** kalmalı:
   açık olsaydı bellek dolduğunda eski yazışmalar sessizce silinirdi.
3. Veritabanını projeye bağlarken **Production** ve **Preview** ortamlarını
   işaretleyin. Development'ı işaretlememek, yerel geliştirmenin canlı
   yazışmalara karışmamasını sağlar.

Kurulumdaki **Custom Prefix** alanına ne yazdığınızın önemi yok:
`lib/support/config.js`, REST adresi biçimindeki değişkeni jetonuyla
eşleştirerek bulur (`STORAGE_`, `KV_`, `UPSTASH_REDIS_` ve diğerleri).

Upstash panosundan doğrudan oluşturursanız değerleri şu adlarla girin:

```
UPSTASH_REDIS_REST_URL=https://....upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

Ücretsiz kademe ayda 500.000 komut. Panel açıkken sohbet listesi tek
komutla okunuyor ve sekme arka plandayken yoklama duruyor; bu kullanımda
ücretsiz kademe rahat yetiyor.

---

## 2. Yönetici parolası

```
SUPPORT_ADMIN_PASSWORD=<uzun ve size özel bir parola>
SUPPORT_SESSION_SECRET=<rastgele en az 32 karakter>
```

`SUPPORT_SESSION_SECRET` oturum çerezini imzalar. Rastgele bir değer üretmek
için:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

Parolayı değiştirdiğinizde açık kalmış tüm oturumlar kendiliğinden geçersiz
olur — imzaya parola da karışıyor.

---

## 3. Bildirim anahtarları (VAPID)

Telefona bildirim gönderebilmek için bir anahtar çifti gerekiyor. Bir kez
üretilir, bir daha değişmez:

```bash
node -e "const k=require('web-push').generateVAPIDKeys();console.log('SUPPORT_VAPID_PUBLIC_KEY='+k.publicKey);console.log('SUPPORT_VAPID_PRIVATE_KEY='+k.privateKey)"
```

Çıkan iki satırı Vercel ortam değişkenlerine ekleyin, üçüncüsünü elle:

```
SUPPORT_VAPID_PUBLIC_KEY=...
SUPPORT_VAPID_PRIVATE_KEY=...
SUPPORT_VAPID_SUBJECT=mailto:info@sahneva.com
```

> Özel anahtar depoya **yazılmaz**, yalnızca Vercel ortam değişkenlerinde
> durur. Anahtarları değiştirirseniz kayıtlı tüm cihaz abonelikleri geçersiz
> olur ve telefonlarda bildirim yeniden açılmalıdır.

Değişkenleri ekledikten sonra projeyi yeniden dağıtın.

---

## 4. Telefonu bağlama (Android)

Mağazadan uygulama indirmeye gerek yok; site ana ekrana eklenince uygulama
gibi çalışır.

Panelin sitenin manifest'inden ayrı, kendi uygulama tanımı var
(`public/destek-manifest.json`): ana ekrana eklendiğinde ana sayfa yerine
doğrudan panelde, "Sahneva Destek" adıyla ve kendi penceresinde açılır.

1. Telefonun Chrome'unda `https://www.sahneva.com/yonetim/destek` adresini
   açın ve parolayla girin.
2. Chrome menüsü (⋮) → **Uygulamayı yükle** (veya **Ana ekrana ekle**).
   Gelen kutuda ad **"Sahneva Destek"** yazmalı; "Sahneva Organizasyon"
   yazıyorsa yanlış sayfadasınız demektir.
3. **Ana ekrandaki simgeden** açın (sekmeden değil).
4. Sağ üstteki **"Bu cihaza bildirim aç"** düğmesine basın, izin isteğini
   onaylayın.
5. Düğme **"Bildirim açık · dene"** hâline gelir; basınca deneme bildirimi
   düşer. Bildirim geldiyse kurulum tamamdır.

Kurulumdan sonra paneli açık bırakılmış tarayıcı sekmelerini kapatın:
bildirime tıklandığında service worker önce açık bir pencere arar, arka
planda unutulmuş bir sekme uygulamanın açılmasının önüne geçebilir.

Bundan sonra tarayıcı kapalıyken de yeni mesajlarda telefona bildirim gelir;
bildirime dokununca doğrudan ilgili sohbet açılır.

Birden fazla cihaz ekleyebilirsiniz — her cihazda 1–4 arası adımları
tekrarlayın, bildirim hepsine birden gider.

**iPhone kullanacaksanız:** iOS 16.4 ve üzeri gerekir ve site mutlaka ana
ekrana eklenmiş olmalıdır; Safari sekmesinde açıkken bildirim gelmez.

---

## 5. İşleyiş

- **Mesai penceresi** `lib/support/hours.js` içinde: 09:00–20:00 (İstanbul).
  Dışında sohbet yine açılır, ancak ziyaretçiye "mesai dışındayız" mesajı
  gösterilir ve telefon/e-posta bırakması **zorunlu** olur — aksi halde
  dönülemeyecek mesajlar birikir.
- **Saklama süresi** 90 gün. Sürenin sonunda yazışma kendiliğinden silinir
  (KVKK). Değiştirmek için `CONVERSATION_TTL_SECONDS`.
- **Kötüye kullanım sınırı**: aynı IP'den saatte 5 yeni sohbet, 60 mesaj.
- Ziyaretçi sohbeti tarayıcısında saklanır; sayfa değiştirse veya siteye
  sonra dönse bile aynı yazışmaya devam eder.

---

## 6. Dosya haritası

| Yol | Görevi |
| --- | --- |
| `lib/support/config.js` | Sabitler, ortam değişkeni kontrolleri |
| `lib/support/hours.js` | Mesai penceresi (sunucu + widget ortak) |
| `lib/support/store.js` | Upstash REST veri katmanı |
| `lib/support/session.js` | Yönetici oturumu (imzalı çerez) |
| `lib/support/push.js` | Web Push gönderimi |
| `lib/support/dictionary.js` | Widget metinleri (6 dil) |
| `app/api/support/chat/` | Ziyaretçi ucu (mesaj gönder / yokla) |
| `app/api/support/admin/` | Panel uçları (giriş, liste, sohbet, push) |
| `components/support/SupportWidget.jsx` | Sohbet balonu |
| `components/support/AdminConsole.client.jsx` | Yönetim paneli |
| `app/yonetim/destek/` | Panel sayfası (noindex + robots dışı) |
| `app/sw.js/route.js` | Service worker (bildirim karşılama) |

---

## 7. Yerel geliştirme

`.env.local` dosyasına yukarıdaki değişkenleri girin. Upstash'in ücretsiz
kademesinde ikinci bir geliştirme veritabanı açıp onu kullanmak, canlı
yazışmalara karışmamak için en temizi.

Service worker üretim dışında otomatik kaydedilmez; panel bildirim düğmesine
basıldığında kaydı kendisi yapar, bu yüzden yerelde de denenebilir.
