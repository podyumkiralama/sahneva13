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

## 3b. Dosya eki (isteğe bağlı)

Dosya gönderimi ayrı bir depo istiyor. Açılmazsa modülün geri kalanı
etkilenmez: widget'ta ataç düğmesi hiç görünmez.

1. Vercel panosunda projeyi açın → **Storage** → **Create Database** →
   **Blob**. Projeye bağlayın; Vercel `BLOB_READ_WRITE_TOKEN` değişkenini
   kendisi ekler.
2. Takım (Shared) düzeyinde açtıysanız **Link Shared Variable** ile projeye
   bağlamayı unutmayın — bağlanmamış değişkeni site göremez.
3. Yeniden dağıtın.

### Dosyalar ne zaman siliniyor

**Kendiliğinden silinmiyor.** Zamanlanmış bir temizlik görevi yok; bir dosya
yalnızca ait olduğu sohbeti panelden sildiğinizde gider. Ay sonra dönüp
bakmak istediğiniz bir mekân fotoğrafı yerinde durur.

Bunun iki sonucu var:

- **Depo dolabilir.** Ücretsiz kota 1 GB; 10 MB'lık üst sınırla bu yaklaşık
  100 dosya demek. Dolduğunda yeni yüklemeler başarısız olur. Yer açmanın
  yolu biten işlerin sohbetlerini silmek.
- **Sahipsiz dosya kalabilir.** Yazışmalar 90 gün sonra Redis'ten
  kendiliğinden düşüyor; o sohbetin dosyaları depoda kalmaya devam eder ve
  artık panelden erişilemez. Bunları Vercel panosundan
  (Storage → Blob → Manage Blobs) elle silebilirsiniz.

Süreli silme isterseniz `SUPPORT_FILE_RETENTION_DAYS` ortam değişkenine gün
sayısı yazın ve `/api/support/cleanup` ucunu bir cron'a bağlayın; değişken
tanımlı değilken bu uç hiçbir şeye dokunmaz. `CRON_SECRET` tanımlıysa uç
yalnızca o imzayla çalışır.

Kabul edilen türler: JPEG, PNG, WebP, HEIC/HEIF ve PDF. Üst sınır 10 MB.
Çalıştırılabilir içerik kabul edilmiyor.

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
- **Aynı kişi tek sohbette.** Ziyaretçi telefon veya e-posta bırakıyorsa,
  daha önce açılmış ve hâlâ açık olan sohbetine bağlanır. Numara biçimi
  ("0555…", "+90 555…", "90555…") ve ismin yazımı önemsiz; panelde tek
  kesintisiz yazışma görürsünüz. Farklı yazılmış isimler sohbet başlığının
  altında "Aynı numarayla: …" satırında listelenir — yanlış eşleşmeyi
  (örneğin bir hane yanlış girilmiş numarayı) buradan fark edersiniz.
- **Ziyaretçi geçmişi görmez.** Yeni bir cihazdan bağlanan ziyaretçiye
  yalnızca o andan sonrası açılır. Aksi hâlde bir numarayı bilen herkes o
  kişinin eski yazışmasını okuyabilirdi. Kısıt sunucuda uygulanıyor;
  istemcinin gönderdiği `since` değeri katılım imlecinin altına inemez.
- **Ayırmanın yolu "Kapat".** Kapatılmış sohbet eşleşmeye girmez; aynı
  numaradan gelen sonraki mesaj temiz bir sohbet açar. Yanlış birleşmiş bir
  kaydı böyle ayırırsınız. Kapalı sohbete yeni mesaj gelirse yeniden açılır.
- **Sohbet silme.** Panelde "Sil" iki adımlı: ikinci tıklamada sohbet,
  mesajları ve dosyaları kalıcı olarak gider, ziyaretçinin bağlantısı da
  geçersizleşir. "Kapat"tan farkı, kaydın hiç kalmaması.
- **Dosya eki, iki yönlü.** Ziyaretçi sohbet başladıktan sonra fotoğraf veya
  PDF ekleyebilir; siz de panelde cevap kutusundaki ataç düğmesiyle dosya
  gönderebilirsiniz (en fazla 10 MB). Dosya her iki yönde de tarayıcıdan
  doğrudan depoya gider, bizim fonksiyonumuzdan geçmez; depoda "private"
  durur, adresi bilinse bile açılmaz.
  - Panelde gelen dosyanın altında "İndir" ve "Paylaş" var — Paylaş,
    Android'in paylaş menüsünü açıp dosyayı WhatsApp'a verir.
  - Ziyaretçi, sizin gönderdiğiniz dosyayı sohbetteki "İndir" düğmesiyle
    alır. Okuma iki kapıdan geçer: sohbet jetonu doğrulanır **ve** dosya o
    cihazın görebildiği mesajlar arasında olmalıdır — sohbete sonradan
    bağlanan bir cihaz, katılmadan önce paylaşılmış dosyaya erişemez.
  - Dosyalar kendiliğinden silinmez; yalnızca sohbet silindiğinde giderler.
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
| `lib/support/contact.js` | Telefon/e-posta normalleştirme (kişi eşleştirme) |
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
