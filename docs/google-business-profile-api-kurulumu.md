# Google Business Profile puanı entegrasyonu

Bu entegrasyon statik puan veya yorum sayısı kullanmaz. Google Business Profile
API yapılandırılmamışsa, yetkilendirme başarısızsa ya da API geçerli veri
döndürmezse sitede puan alanı hiç gösterilmez.

## Neden Business Profile API?

Sahneva kendi doğrulanmış işletme profilini yönettiği için Reviews API doğrudan
`averageRating` ve `totalReviewCount` alanlarını verir. Places API aynı amaç için
ücretli alanlar, ek Google Maps atfı ve daha katı önbellek sınırlamaları getirir.

Resmî belgeler:

- https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews/list
- https://developers.google.com/my-business/content/prereqs
- https://developers.google.com/my-business/content/implement-oauth
- https://developers.google.com/my-business/content/policies

## Gerekli Google hazırlığı

1. Sahneva Business Profile'ını yöneten Google hesabıyla bir Cloud projesi
   oluşturun ve Business Profile API erişim onayı alın.
2. Google My Business API'yi etkinleştirin.
3. `https://www.googleapis.com/auth/business.manage` kapsamıyla OAuth 2.0
   istemcisi ve çevrimdışı erişim veren refresh token oluşturun.
4. Profilin `accountId` ve `locationId` değerlerini alın.

## Vercel Production ortam değişkenleri

Aşağıdaki değerlerin tamamı yalnız sunucuda tutulmalıdır. Adların başına
`NEXT_PUBLIC_` eklenmemelidir.

```text
GOOGLE_BUSINESS_PROFILE_CLIENT_ID=
GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET=
GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN=
GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID=
GOOGLE_BUSINESS_PROFILE_LOCATION_ID=
```

Değerler eklendikten sonra yeni bir Production deployment gerekir. Entegrasyon
OAuth erişim anahtarını sunucuda yeniler, puan ile kesin yorum sayısını Google'dan
alır ve 24 saatlik sunucu önbelleğinde tutar. Bu süre Google'ın Business
Profile içerikleri için izin verdiği 30 günlük üst sınırın altındadır.

## Güvenli davranış

- Gizli değerler tarayıcı paketine girmez.
- API yanıtı yuvarlanmaz veya elle artırılmaz.
- API çalışmazsa eski bir değer ya da tahmin gösterilmez.
- Puan yapılandırılmış veriye `aggregateRating` olarak eklenmez.
- Google'da yorum yazma ve profil bağlantıları puan iddiası taşımadığı için
  çalışmaya devam eder.
