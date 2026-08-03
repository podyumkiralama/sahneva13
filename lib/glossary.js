/**
 * Etkinlik teknik produksiyonu sozlugu.
 *
 * Tek kaynak: /sozluk sayfasi, DefinedTermSet semasi ve arama indeksi bu diziden
 * beslenir. Her terim, ait oldugu hizmet sayfasina baglanarak sozlugu ayni
 * zamanda bir ic baglanti merkezi haline getirir.
 *
 * Alan sozlesmesi:
 *   slug        -> sayfa ici capa (#slug) ve DefinedTerm @id'si.
 *                  YALNIZCA [a-z0-9-]: Turkce karakter iceren bir capa URL'de
 *                  yuzde-kodlanir ("#mod%C3%BCler-podyum"), paylasilan linklerde
 *                  ve bazi araclarda bozulur.
 *   term        -> gorunen terim
 *   aliases     -> ayni seyi anlatan alternatif adlandirmalar (alternateName)
 *   category    -> gruplama anahtari, CATEGORIES icinde tanimli olmali
 *   definition  -> tek cumlelik ozet tanim (snippet/AI cevabi icin)
 *   detail      -> pratikte ne anlama geldigi, saha karsiligi
 *   related     -> ilgili hizmet ya da rehber sayfasi
 */

export const GLOSSARY_CATEGORIES = [
  {
    key: "sahne",
    title: "Sahne ve Platform",
    description:
      "Sahne, podyum ve platform sistemlerinin taşıyıcı yapısını ve ölçülendirmesini tanımlayan terimler.",
  },
  {
    key: "goruntu",
    title: "LED ve Görüntü",
    description:
      "LED ekran, video wall ve içerik yayını tarafında teklif ve keşif konuşmalarında geçen terimler.",
  },
  {
    key: "ses",
    title: "Ses Sistemleri",
    description:
      "Konuşulabilirlik, kapsama ve miksaj kararlarını belirleyen ses tarafı terimleri.",
  },
  {
    key: "isik",
    title: "Işık ve Kontrol",
    description:
      "Sahne aydınlatması, kamera uyumu ve ışık kontrolüyle ilgili terimler.",
  },
  {
    key: "rigging",
    title: "Truss ve Rigging",
    description:
      "Taşıyıcı sistem, asma ve yük hesabı konularındaki güvenlik kritik terimler.",
  },
  {
    key: "cadir",
    title: "Çadır ve Alan",
    description:
      "Etkinlik çadırı tipleri, sabitleme ve alan planlamasıyla ilgili terimler.",
  },
  {
    key: "enerji",
    title: "Enerji ve Elektrik",
    description:
      "Etkinlik alanında güç ihtiyacını, dağıtımını ve elektriksel güvenliği belirleyen terimler.",
  },
  {
    key: "etkinlik",
    title: "Etkinlik Formatları ve Kurumsal Organizasyon",
    description:
      "Lansman, bayi toplantısı, gala, kongre ve fuar gibi formatların teknik kapsam açısından ne anlama geldiği.",
  },
  {
    key: "operasyon",
    title: "Operasyon ve Planlama",
    description:
      "Keşiften söküme kadar saha operasyonunu tarif eden proje yönetimi terimleri.",
  },
];

export const GLOSSARY_TERMS = [
  /* ---------------- Sahne ve Platform ---------------- */
  {
    slug: "moduler-podyum",
    term: "Modüler Podyum",
    aliases: ["Modüler sahne paneli", "Stage deck"],
    category: "sahne",
    definition:
      "Standart ölçülü paneller birleştirilerek istenen ebatta kurulabilen, ayak yüksekliği ayarlanabilen taşınabilir sahne sistemi.",
    detail:
      "Yaygın panel ölçüsü 2×1 m ve 1×1 m'dir. Ayak boyları genellikle 20–100 cm arasında kademelidir, bu yüzden aynı panel seti hem alçak defile podyumunda hem yüksek konser sahnesinde kullanılabilir. Teklif verirken panel adedi değil, kurulacak net m² ve yükseklik konuşulur.",
    visual: {
      src: "/img/sozluk/podyum/moduler-podyum-birlestirilmis-paneller.webp",
      width: 1600,
      height: 1200,
      alt: "Birleştirilmiş modüler podyum panelleri",
      caption:
        "Birleştirilmiş paneller ve ayak sistemi, podyumun ölçü ve kotunun projeye göre kurulmasını sağlar.",
    },
    related: { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  },
  {
    slug: "sahne-yuku",
    term: "Sahne Yük Kapasitesi",
    aliases: ["Yayılı yük", "Point load"],
    category: "sahne",
    definition:
      "Sahne yüzeyinin metrekare başına güvenle taşıyabileceği ağırlık; genellikle kg/m² olarak verilir.",
    detail:
      "İki ayrı değer önemlidir: yayılı yük (kalabalığın veya masaların dağıttığı ağırlık) ve tekil yük (piyano ayağı, forklift tekeri gibi tek noktaya binen ağırlık). Sahnede ağır dekor, araç veya yoğun kalabalık olacaksa bu değer keşif aşamasında sorulmalıdır.",
    related: { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  },
  {
    slug: "riser",
    term: "Riser",
    aliases: ["Davul riseri", "Yükseltici platform"],
    category: "sahne",
    definition:
      "Sahne üzerinde belirli bir enstrümanı, koroyu veya konuşmacıyı ana sahne kotundan daha yukarı almak için kullanılan küçük platform.",
    detail:
      "En sık davul riseri olarak görülür; koro, orkestra kademeleri ve protokol sırası da riser ile çözülür. Tekerlekli (rolling riser) versiyonları, sahne arkasında hazırlanıp gösteri sırasında sahneye sürülerek geçiş süresini kısaltır.",
    visual: {
      src: "/img/sozluk/podyum/tekerlekli-riser-yukseltici-platform.webp",
      width: 2048,
      height: 923,
      alt: "Tekerlekli riser yükseltici platform",
      caption:
        "Tekerlekli riser, sahne geçişinden önce hazırlanıp uygun zamanda yerine alınabilen yükseltici platform örneğidir.",
    },
    related: { href: "/konser-icin-podyum-kiralama", label: "Konser Podyum Kiralama" },
  },
  {
    slug: "etek-perde",
    term: "Etek (Skirting)",
    aliases: ["Sahne eteği", "Skirt"],
    category: "sahne",
    definition:
      "Sahne veya podyumun yan yüzeyini kapatarak ayak yapısını ve altında kalan kabloları gizleyen kumaş kaplama.",
    detail:
      "Görsel bütünlük dışında pratik bir işlevi de vardır: sahne altına konan yedek ekipman, kablo makarası ve teknik kutular seyirciden gizlenir. Kamera çekimi olan etkinliklerde mat siyah etek, ışık yansımasını azalttığı için tercih edilir.",
    visual: {
      src: "/img/sozluk/podyum/podyum-skirt-siyah-etek.webp",
      width: 1600,
      height: 718,
      alt: "Siyah skirting ile kaplanmış podyum yan yüzeyi",
      caption:
        "Skirting, podyumun alt yapısını ve teknik malzemeleri gizleyerek sahne cephesinde temiz bir bitiş oluşturur.",
    },
    related: { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  },
  {
    slug: "podyum-halisi",
    term: "Podyum Halısı",
    aliases: ["Sahne halısı", "Halı kaplama"],
    category: "sahne",
    definition:
      "Podyum yüzeyine yürüyüş konforu, renk bütünlüğü ve temiz bir bitiş kazandırmak için uygulanan etkinlik tipi halı kaplama.",
    detail:
      "Halı kaplama; panel ekleri, sahne ışığındaki yansıma, renk dili ve yürüyüş güvenliğiyle birlikte değerlendirilir. Yüzeyde kabarma bırakmayan uygulama ile kenar bitişleri, kamera açılarında ve yoğun geçiş alanlarında podyumun daha düzenli görünmesini sağlar.",
    visual: {
      src: "/img/sozluk/podyum/podyum-halisi-kaplama.webp",
      width: 2048,
      height: 1536,
      alt: "Halı kaplamalı modüler podyum yüzeyi",
      caption:
        "Halı kaplama, modüler podyum yüzeyinde daha bütünlüklü bir görünüm ve yürüyüş yüzeyi sağlar.",
    },
    related: { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  },
  {
    slug: "backstage",
    term: "Backstage",
    aliases: ["Sahne arkası", "Kulis"],
    category: "sahne",
    definition:
      "Sahnenin arkasında kalan; hazırlık, bekleme, teknik ekipman ve ekip için ayrılan kapalı alan.",
    detail:
      "Alan planında sık atlanan kalemdir. Sanatçı bekleme, kostüm değişimi, teknik ekip, yedek ekipman ve enerji panosu için sahne genişliğinin en az yarısı kadar derinlik ayrılması gerekir. Çadır projelerinde bu alan doğrudan m² hesabına girer.",
    related: { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
  },

  {
    slug: "gorus-hatti",
    term: "Görüş Hattı (Sightline)",
    aliases: ["Sightline", "Görüş açısı"],
    category: "sahne",
    definition:
      "Seyircinin oturduğu veya durduğu noktadan sahneyi engelsiz görebildiği hat; sahne yüksekliğini belirleyen temel kriterdir.",
    detail:
      "Ayakta izlenen etkinliklerde arka sıraların önündekilerin başını aşabilmesi için sahne genellikle 80–120 cm'e çıkar; oturmalı düzende 40–60 cm yeterli olabilir. Sütun, kolon ve avize gibi engeller de görüş hattını keser; keşifte salon fotoğrafı yerine oturma planı üzerinden değerlendirilir.",
    related: {
      href: "/blog/sahne-neden-hep-yuksektir-2500-yillik-bir-sir",
      label: "Sahne Neden Hep Yüksektir?",
    },
  },
  {
    slug: "rampa-erisim",
    term: "Rampa ve Erişilebilirlik",
    aliases: ["Engelli erişimi", "Access ramp"],
    category: "sahne",
    definition:
      "Tekerlekli sandalye ve ekipman arabalarının sahneye çıkabilmesi için merdiven yerine kullanılan eğimli platform.",
    detail:
      "Güvenli eğim genellikle 1:12 civarındadır; yani 60 cm yüksekliğe çıkmak için yaklaşık 7 m rampa uzunluğu gerekir. Bu alan çoğu yerleşim planında unutulur. Protokol katılımı olan ve kamuya açık etkinliklerde rampa, tercih değil zorunluluk olarak planlanmalıdır.",
    related: { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  },
  {
    slug: "korkuluk-merdiven",
    term: "Korkuluk ve Merdiven",
    aliases: ["Guardrail", "Stage stairs"],
    category: "sahne",
    definition:
      "Sahnenin açık kenarlarında düşmeyi önleyen bariyer ve sahneye çıkışı sağlayan basamak sistemi.",
    detail:
      "60 cm'i aşan sahnelerde arka ve yan kenarlarda korkuluk standart uygulamadır. Merdivenin basamak yüksekliği eşit olmalı ve karanlıkta görünmesi için şerit ışık ya da fosforlu bant uygulanmalıdır; sahne kazalarının önemli kısmı iniş sırasında yaşanır.",
    visual: {
      src: "/img/sozluk/podyum/korkuluklu-podyum-merdiveni.webp",
      width: 2048,
      height: 1536,
      alt: "Korkuluklu podyum merdiveni",
      caption:
        "Korkuluklu merdiven, sahneye giriş ve çıkışın program akışı boyunca daha kontrollü yapılmasına yardımcı olur.",
    },
    related: { href: "/sahne-kiralama", label: "Sahne Kiralama" },
  },
  {
    slug: "sahne-plani",
    term: "Sahne Planı (Stage Plot)",
    aliases: ["Stage plot", "Sahne yerleşim krokisi"],
    category: "sahne",
    definition:
      "Sahne üzerindeki her ekipmanın, kişinin ve bağlantı noktasının ölçekli olarak işaretlendiği kroki.",
    detail:
      "Mikrofon, monitör, enstrüman, kürsü, riser ve kablo giriş noktaları bu planda görünür. Canlı müzikte grubun sağladığı stage plot, kurulum sırasını belirler; kurumsal etkinlikte ise kürsü konumu, LED ekran mesafesi ve protokol koltuklarının yerleşimi bu planla netleşir.",
    related: {
      href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
      label: "Etkinlik Teknik Keşif Rehberi",
    },
  },
  {
    slug: "catwalk",
    term: "Catwalk (Uzatma Podyum)",
    aliases: ["Podyum uzatması", "T podyum", "Runway"],
    category: "sahne",
    definition:
      "Ana sahneden seyirci alanının içine doğru uzanan dar platform; defile ve sunumlarda yakın temas için kullanılır.",
    detail:
      "Defilede genişlik tipik olarak 1,5–2 m, uzunluk salonun derinliğine göre 8–20 m arasındadır. Yürüyüş yüzeyinin ses çıkarmaması ve esnememesi önemlidir; bu yüzden uzun catwalk'larda ara ayak sıklığı standart sahneden fazladır.",
    related: { href: "/defile-podyum-kiralama", label: "Defile Podyum Kiralama" },
  },

  /* ---------------- LED ve Görüntü ---------------- */
  {
    slug: "pixel-pitch",
    term: "Pixel Pitch",
    aliases: ["Piksel aralığı", "P değeri", "Pitch"],
    category: "goruntu",
    definition:
      "LED panelde iki piksel merkezi arasındaki milimetre cinsinden mesafe; P2.9 gibi gösterimlerdeki sayı bu değeri ifade eder.",
    detail:
      "Değer küçüldükçe çözünürlük ve maliyet artar. Pratik kural olarak minimum rahat izleme mesafesi metre cinsinden pixel pitch değerine yakındır: P3.9 bir ekran yaklaşık 4 m'den itibaren net görünür. Bu yüzden salon içi yakın izlemede P1.9–P2.5, açık hava sahne arkasında P3.9–P6 tercih edilir.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "nit-parlaklik",
    term: "Nit (Parlaklık)",
    aliases: ["cd/m²", "Brightness"],
    category: "goruntu",
    definition:
      "LED ekranın ışık yayma gücünü ölçen birim; gün ışığında görünürlüğü belirleyen temel değerdir.",
    detail:
      "Kapalı salonda 800–1500 nit yeterliyken, doğrudan güneş alan açık hava kurulumlarında 4500 nit ve üzeri gerekir. Yanlış seçilen parlaklık, en pahalı içeriği bile gündüz görünmez hale getirir; bu nedenle keşifte ekranın gün içindeki güneş açısı sorulur.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "video-wall",
    term: "Video Wall",
    aliases: ["LED wall", "LED duvar"],
    category: "goruntu",
    definition:
      "Birden çok LED panelin kenar kenara birleştirilmesiyle oluşturulan tek büyük görüntü yüzeyi.",
    detail:
      "Paneller kabinet adı verilen kasalar halinde gelir; en yaygın kabinet ölçüsü 500×500 mm ve 500×1000 mm'dir. Toplam ekran ölçüsü bu kabinet katlarında planlanır, bu yüzden \"6×3,5 m ekran\" gibi ara ölçüler çoğu zaman kabinet ızgarasına yuvarlanır.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "medya-sunucusu",
    term: "Medya Sunucusu",
    aliases: ["Media server", "Watchout", "Reji bilgisayarı"],
    category: "goruntu",
    definition:
      "Birden çok ekrana senkron içerik dağıtan, katman ve geçiş yönetimini yapan özel görüntü sunucusu.",
    detail:
      "Tek ekrana tek video oynatmak için gerekmez; ancak yan ekranlarla ana ekranın birlikte çalıştığı, sunum ile canlı kamera görüntüsünün karıştığı veya mapping yapılan projelerde zorunlu hale gelir. Teklifte ayrı bir kalem olarak görünmesinin nedeni budur.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "video-mapping",
    term: "Video Mapping",
    aliases: ["Projection mapping", "360° mapping"],
    category: "goruntu",
    definition:
      "Bir yüzeyin geometrisine göre şekillendirilmiş görüntünün projeksiyonla o yüzeye giydirilmesi tekniği.",
    detail:
      "Bina cephesi, dome çadır iç yüzeyi veya sahne dekoru gibi düz olmayan yüzeylerde kullanılır. Yüzey ölçümü, projeksiyon mesafesi ve ortam karanlığı sonucu doğrudan belirler; bu yüzden mapping projelerinde keşif diğer işlerden daha erken yapılır.",
    related: {
      href: "/blog/kurumsal-etkinliklerde-dome-cadir-devrimi-pnomatik-yapi-360-mapping",
      label: "Dome Çadır ve 360° Mapping",
    },
  },
  {
    slug: "moire",
    term: "Moiré Deseni",
    aliases: ["Moire", "Dalgalı desen"],
    category: "goruntu",
    definition:
      "LED ekranın piksel ızgarası ile kamera sensörünün ızgarası üst üste geldiğinde kamerada beliren dalgalı girişim deseni.",
    detail:
      "Uzamsal bir sorundur; yenileme hızıyla ilgisi yoktur. Kameranın ekrana olan mesafesi, açısı, odak noktası ve zoom oranı değiştirilerek ya da ekrana bir miktar defocus verilerek çözülür. İnce pixel pitch'li panellerde daha az görülür. Kamera kullanılacak etkinliklerde prova sırasında her kamera açısından kontrol edilir.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "yenileme-hizi",
    term: "Yenileme Hızı (Refresh Rate)",
    aliases: ["Refresh rate", "Tarama çizgisi", "Banding"],
    category: "goruntu",
    definition:
      "LED panelin görüntüyü saniyede kaç kez tazelediğini gösteren değer; kamerada yatay bant ve tarama çizgisi oluşup oluşmayacağını belirler.",
    detail:
      "Moiré'den farklı olarak zamansal bir konudur: panelin yenileme hızı kameranın enstantane hızıyla uyuşmazsa görüntüde kayan bantlar çıkar. Yayın veya kayıt yapılacak etkinliklerde 3840 Hz ve üzeri panel istenir. Gözle bakıldığında sorunsuz görünen bir ekran kamerada bant verebilir; bu yüzden panel seçimi kayıt olup olmayacağına göre yapılır.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },

  {
    slug: "kabinet",
    term: "Kabinet",
    aliases: ["LED kabinet", "Panel kasası", "Cabinet"],
    category: "goruntu",
    definition:
      "İçine LED modüllerin yerleştirildiği, ekranın yapı taşını oluşturan standart ölçülü kasa.",
    detail:
      "En yaygın ölçüler 500×500 mm ve 500×1000 mm'dir. Toplam ekran ölçüsü bu ızgaranın katları olarak kurulur; bu yüzden \"6,3 × 3,7 m ekran\" gibi ara ölçüler pratikte 6×3,5 m veya 6,5×4 m'ye yuvarlanır. Teklif alırken net m² yerine kabinet adedini sormak ölçü sürprizini önler.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "goruntu-islemcisi",
    term: "Görüntü İşlemcisi",
    aliases: ["LED processor", "Scaler", "NovaStar"],
    category: "goruntu",
    definition:
      "Kaynak görüntüyü LED ekranın gerçek piksel yapısına dönüştüren ve panellere dağıtan cihaz.",
    detail:
      "Ekran çözünürlüğü standart bir video formatına (1920×1080 gibi) uymadığı için görüntünün ölçeklenmesi gerekir; bu işi işlemci yapar. Ayrıca sahne arkası geçişleri, PIP (görüntü içinde görüntü) ve yedek kaynak devreye alma da buradan yönetilir. Her LED kurulumunda bulunur, medya sunucusuyla karıştırılmamalıdır.",
    related: { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  },
  {
    slug: "ip-koruma-sinifi",
    term: "IP Koruma Sınıfı",
    aliases: ["IP65", "Ingress Protection", "Su geçirmezlik"],
    category: "goruntu",
    definition:
      "Bir cihazın toza ve suya karşı korunma derecesini iki haneli bir kodla ifade eden standart.",
    detail:
      "İlk hane toza, ikincisi suya karşı korumayı gösterir: IP65 tam toz sızdırmaz ve tazyikli suya dayanıklıdır. Açık hava LED ekranlarda ön yüzün IP65, arka yüzün en az IP54 olması beklenir. Yağmur ihtimali olan her outdoor projede panelin IP değeri sözleşmede yazılı olmalıdır.",
    related: {
      href: "/blog/led-ekran-kurulum-guvenligi",
      label: "LED Ekran Kurulum Güvenliği",
    },
  },
  {
    slug: "indoor-outdoor-led",
    term: "Indoor ve Outdoor LED",
    aliases: ["İç mekan LED", "Dış mekan LED"],
    category: "goruntu",
    definition:
      "LED panelin kapalı salon için mi yoksa açık hava için mi üretildiğini belirten temel ayrım.",
    detail:
      "Fark sadece su geçirmezlik değildir: outdoor paneller çok daha yüksek parlaklıkta çalışır, daha kalın ve ağırdır; indoor paneller ise daha ince pixel pitch ve daha hassas renk sunar. Kapalı salona outdoor panel koymak görüntüyü sertleştirir, açık havaya indoor panel koymak gündüz görünmez hale getirir.",
    related: {
      href: "/blog/etkinlikler-icin-led-ekran-secimi",
      label: "Etkinlikler İçin LED Ekran Seçimi",
    },
  },
  {
    slug: "led-m2-hesabi",
    term: "LED Ekran m² Hesabı",
    aliases: ["Ekran metrekaresi", "LED alan hesabı"],
    category: "goruntu",
    definition:
      "Ekranın genişlik × yükseklik çarpımından çıkan ve fiyatlandırmanın temelini oluşturan alan değeri.",
    detail:
      "Kiralama bedeli çoğunlukla m² × gün üzerinden kurulur; panel tipi (standart / P1.9 indoor) m² birim bedelini değiştirir. Kurulum, görüntü işlemcisi, reji ve teknik ekip ayrı kalemlerdir. Ekran ölçüsünü belirlerken alanın son sırasındaki izleme mesafesi ve pixel pitch birlikte değerlendirilmelidir.",
    related: { href: "/led-ekran-hesaplama", label: "LED Ekran Hesaplama Aracı" },
  },
  {
    slug: "icerik-cozunurlugu",
    term: "İçerik Çözünürlüğü",
    aliases: ["Piksel bazlı içerik", "Native resolution"],
    category: "goruntu",
    definition:
      "Ekrana gönderilecek video ve görsellerin, ekranın gerçek piksel ölçüsüne göre hazırlanması.",
    detail:
      "LED ekranlar nadiren standart 16:9 orandadır; örneğin 6×3 m'lik bir P3.9 ekran yaklaşık 1536×768 piksel olur. İçerik bu ölçüde hazırlanmazsa ölçeklenir ve yazılar bulanıklaşır. Tasarım ekibine ekranın piksel ölçüsünün etkinlikten en az bir hafta önce verilmesi standart uygulamadır.",
    related: {
      href: "/blog/led-ekran-marka-deneyimi-icerik-stratejisi",
      label: "LED Ekran ile Marka Deneyimi",
    },
  },

  /* ---------------- Ses ---------------- */
  {
    slug: "line-array",
    term: "Line Array",
    aliases: ["Dizi hoparlör", "Asma hoparlör sistemi"],
    category: "ses",
    definition:
      "Birden çok hoparlör modülünün dikey bir dizi halinde asılmasıyla sesin uzak mesafeye dengeli taşınmasını sağlayan sistem.",
    detail:
      "Klasik yığma (point source) sistemlere göre avantajı, ön sıra ile arka sıra arasındaki ses seviyesi farkını azaltmasıdır. Modül sayısı ve açılandırma, alanın derinliğine göre hesaplanır; bu nedenle line array kurulumunda seyirci alanının krokisi istenir.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "foh",
    term: "FOH (Front of House)",
    aliases: ["Ana reji", "Ses rejisi"],
    category: "ses",
    definition:
      "Ses ve ışık miksajının yapıldığı, seyirci alanı içinde sahneye bakan operasyon noktası.",
    detail:
      "Operatörün duyduğu ses seyircinin duyduğu sesle aynı olmalıdır; bu yüzden FOH kabinin salon köşesine veya duvar dibine değil, seyirci alanının içine konumlanması gerekir. Yerleşim planında FOH için genellikle 3×2 m alan ve kablo güzergâhı ayrılır.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "monitor-miks",
    term: "Monitör Miksi",
    aliases: ["Sahne monitörü", "In-ear miks"],
    category: "ses",
    definition:
      "Sahnedeki kişilerin kendilerini duyabilmesi için hazırlanan, seyirciye giden miksten ayrı ses karışımı.",
    detail:
      "Sahne monitörü (wedge) veya kulak içi (in-ear) sistemle verilir. Konuşmacı ağırlıklı kurumsal etkinliklerde tek bir genel monitör yeterli olabilirken, canlı müzikte her müzisyen için ayrı miks hattı gerekir; bu doğrudan mikser kanal ihtiyacını belirler.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "konusulabilirlik",
    term: "Konuşulabilirlik (STI)",
    aliases: ["Speech intelligibility", "Anlaşılabilirlik"],
    category: "ses",
    definition:
      "Konuşmanın salonda ne kadar net anlaşıldığını ölçen kriter; yankı süresi ve hoparlör yerleşimiyle doğrudan ilişkilidir.",
    detail:
      "Camlı, yüksek tavanlı ve sert yüzeyli salonlarda ses gücü artırmak sorunu çözmez, hatta kötüleştirir. Çözüm hoparlörü doğru yönlendirmek, gecikme (delay) hoparlörü eklemek ve gerekiyorsa akustik önlem almaktır. Konferans ve kongre projelerinde ilk konuşulan başlıktır.",
    related: { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  },

  {
    slug: "db-spl",
    term: "dB SPL",
    aliases: ["Desibel", "Ses basınç seviyesi"],
    category: "ses",
    definition:
      "Ses basıncının kulakta algılanan yüksekliğini ölçen birim; sistemin ne kadar güç vermesi gerektiğini belirler.",
    detail:
      "Konuşma ağırlıklı kurumsal etkinlikte 85–95 dB, konserde 100–105 dB tipiktir. Ölçek logaritmiktir: her 3 dB artış iki kat güç ister. Ayrıca belediye ve mekân sınırlamaları çoğu açık hava projesinde üst sınırı belirler; bu değer kurulum öncesi öğrenilmelidir.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "subwoofer-dizilim",
    term: "Subwoofer ve Dizilim",
    aliases: ["Sub", "Kardioid dizilim", "Bas hoparlör"],
    category: "ses",
    definition:
      "Düşük frekansları üreten hoparlör ve bu hoparlörlerin sahaya yerleşim düzeni.",
    detail:
      "Bas frekanslar her yöne yayılır; sahnenin önüne düz dizilen sublar sahneye ve komşu alana da bas gönderir. Kardioid dizilim, subları belirli bir düzende ve fazda çalıştırarak arkaya giden bası azaltır. Sahnedeki mikrofon uğultusunu ve çevre şikâyetini azalttığı için açık alan projelerinde tercih edilir.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "feedback",
    term: "Feedback (Geri Besleme)",
    aliases: ["Uğultu", "Larsen etkisi"],
    category: "ses",
    definition:
      "Hoparlörden çıkan sesin mikrofona geri girmesiyle oluşan ve hızla yükselen tiz uğultu.",
    detail:
      "Mikrofonun hoparlörün kapsama alanında kalması en yaygın nedendir. Çözüm ses seviyesini kısmak değil, mikrofon ve hoparlör yerleşimini düzeltmek, doğru yönlü mikrofon seçmek ve gerekiyorsa sorunlu frekansı bastırmaktır. Kürsü mikrofonlu etkinliklerde prova sırasında mutlaka test edilir.",
    related: { href: "/dijital-kursu-kiralama", label: "Dijital Kürsü Kiralama" },
  },
  {
    slug: "frekans-planlamasi",
    term: "Kablosuz Frekans Planlaması",
    aliases: ["Telsiz mikrofon frekansı", "RF koordinasyon"],
    category: "ses",
    definition:
      "Kablosuz mikrofon ve kulaklıkların birbirini ve çevredeki yayınları bozmayacak frekanslara dağıtılması.",
    detail:
      "Aynı anda çalışan her kablosuz kanal ayrı bir frekans ister ve bu frekanslar birbirinin katlarına denk gelmemelidir. Otel, fuar alanı ve stadyum gibi yoğun ortamlarda mekânda çalışan diğer ekiplerle koordinasyon gerekir. 8 kanalı aşan kurulumlarda planlama etkinlik gününe bırakılmaz.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "delay-hoparlor",
    term: "Delay Hoparlör",
    aliases: ["Gecikme hoparlörü", "Fill hoparlör"],
    category: "ses",
    definition:
      "Sahneden uzak bölgeleri beslemek için alana yerleştirilen ve sesi kasıtlı olarak geciktirilmiş ek hoparlör.",
    detail:
      "Ses havada saniyede yaklaşık 343 m yol alır. Sahneden 40 m ötedeki hoparlör gecikmesiz çalışırsa, seyirci sesi iki kez duyar. Gecikme değeri mesafeye göre ayarlanınca ses tek kaynaktan geliyormuş gibi algılanır. 50 m'yi aşan derin alanlarda konuşulabilirliği kurtaran çözümdür.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "soundcheck",
    term: "Soundcheck ve Line Check",
    aliases: ["Ses provası", "Hat kontrolü"],
    category: "ses",
    definition:
      "Line check her kanalın sinyal verdiğinin tek tek doğrulanması, soundcheck ise gerçek performansla miksin ayarlanmasıdır.",
    detail:
      "Line check teknik bir kontroldür ve 15–30 dakika sürer; soundcheck sanatçı veya konuşmacı gerektirir ve daha uzundur. Kurumsal etkinliklerde çoğu zaman line check ve kısa bir kürsü denemesi yeterlidir; canlı müzikte soundcheck programa ayrı bir kalem olarak yazılmalıdır.",
    related: { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
  },
  {
    slug: "mikrofon-tipleri",
    term: "Mikrofon Tipleri",
    aliases: ["Yaka mikrofonu", "El mikrofonu", "Headset", "Kürsü mikrofonu"],
    category: "ses",
    definition:
      "Kullanım biçimine göre ayrışan mikrofon çeşitleri; konuşmacının hareket alanı ve ses kalitesi arasındaki dengeyi belirler.",
    detail:
      "El mikrofonu en güvenilir ve en kolay yönetilenidir. Yaka (lavalier) elleri serbest bırakır ama giysi hışırtısına açıktır. Headset sahnede hareket eden sunucular için en net sonucu verir. Kürsü mikrofonu protokol konuşmalarında standarttır. Konuşmacı sayısı kadar yedek kanal planlanması saha kuralıdır.",
    related: { href: "/dijital-kursu-kiralama", label: "Dijital Kürsü Kiralama" },
  },

  /* ---------------- Işık ---------------- */
  {
    slug: "dmx",
    term: "DMX",
    aliases: ["DMX512", "Işık kontrol protokolü"],
    category: "isik",
    definition:
      "Sahne ışıklarının merkezi bir kontrol masasından yönetilmesini sağlayan standart dijital kontrol protokolü.",
    detail:
      "Her armatür bir adres alır ve kanal aralığı üzerinden renk, açı, yoğunluk gibi parametreleri alır. Kurulumda kablo hattının doğru sıralanması ve sonlandırılması sinyal hatalarını önler; bu yüzden ışık planı kadar DMX hattı planı da çıkarılır.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "moving-head",
    term: "Moving Head",
    aliases: ["Hareketli başlık", "Robot ışık"],
    category: "isik",
    definition:
      "Yönü, rengi ve ışın karakteri uzaktan kontrol edilebilen motorlu sahne armatürü.",
    detail:
      "Spot, wash ve beam olmak üzere üç temel karakteri vardır: spot desen ve keskin ışın, wash geniş ve yumuşak alan aydınlatması, beam ise havada görünen dar ışın için kullanılır. Işık listesinde adet kadar bu karakter dağılımı da önemlidir.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "renk-sicakligi",
    term: "Renk Sıcaklığı (K)",
    aliases: ["Kelvin", "White balance"],
    category: "isik",
    definition:
      "Beyaz ışığın sıcak sarıya mı yoksa soğuk maviye mi kaydığını Kelvin cinsinden ifade eden değer.",
    detail:
      "Kayıt yapılan etkinliklerde sahnedeki tüm beyaz kaynakların aynı Kelvin değerinde olması gerekir; aksi halde kamerada ten renkleri bozulur. Salon aydınlatması, LED ekran ve sahne ışığı farklı sıcaklıklardaysa provada beyaz dengesi birlikte ayarlanır.",
    related: {
      href: "/blog/kurumsal-etkinlikte-isik-kurgusu",
      label: "Kurumsal Etkinlikte Işık Kurgusu",
    },
  },
  {
    slug: "key-fill-back",
    term: "Key, Fill ve Back Işık",
    aliases: ["Üç nokta aydınlatma", "Three-point lighting"],
    category: "isik",
    definition:
      "Konuşmacı veya sanatçıyı kamerada doğru göstermek için kullanılan üçlü aydınlatma düzeni.",
    detail:
      "Key ana ışıktır ve yüzü aydınlatır; fill karşı taraftan gelerek sert gölgeyi yumuşatır; back arkadan gelerek kişiyi fondan ayırır. LED ekran önünde konuşulan sahnelerde back ışık olmazsa kişi ekranın içinde erimiş görünür.",
    related: {
      href: "/blog/kurumsal-etkinlikte-isik-kurgusu",
      label: "Kurumsal Etkinlikte Işık Kurgusu",
    },
  },

  {
    slug: "follow-spot",
    term: "Follow Spot",
    aliases: ["Takip ışığı", "Takip spotu"],
    category: "isik",
    definition:
      "Sahnede hareket eden kişiyi elle yönlendirilerek sürekli aydınlatan yüksek güçlü nokta ışığı.",
    detail:
      "Ödül törenlerinde sahneye çıkan kişiyi, konserde solisti izlemek için kullanılır. Operatör gerektirir ve genellikle salonun arkasında yükseltilmiş bir noktaya konumlanır; bu nokta yerleşim planında önceden ayrılmazsa etkinlik günü çözüm üretmek zorlaşır.",
    related: {
      href: "/blog/bayi-toplantisi-organizasyonu-rehberi",
      label: "Bayi Toplantısı ve Ödül Gecesi",
    },
  },
  {
    slug: "gobo",
    term: "Gobo",
    aliases: ["Desen şablonu", "Logo projeksiyonu"],
    category: "isik",
    definition:
      "Işığın önüne yerleştirilen ve ışını desene veya logoya dönüştüren metal ya da cam şablon.",
    detail:
      "Marka logosunu duvara, zemine veya sahne fonuna düşürmek için en ekonomik yöntemdir. Özel logo gobosu üretimi birkaç iş günü sürdüğü için etkinlikten önce sipariş edilmelidir; hazır desenler (yıldız, doku, pencere) ise stoktan kullanılabilir.",
    related: { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  },
  {
    slug: "haze-sis",
    term: "Haze ve Sis",
    aliases: ["Hazer", "Sis makinesi", "Duman efekti"],
    category: "isik",
    definition:
      "Işık huzmelerinin havada görünür olmasını sağlayan ince partikül bulutu; haze homojen ve şeffaf, sis yoğun ve geçicidir.",
    detail:
      "Beam ışıkların ve ışın efektlerinin fark edilmesi haze olmadan mümkün değildir. Ancak yangın algılama sistemlerini tetikleyebilir; kapalı mekânda mekân yönetiminden izin alınması ve gerekiyorsa dedektörlerin geçici olarak devre dışı bırakılması standart prosedürdür.",
    related: {
      href: "/blog/kurumsal-etkinlikte-isik-kurgusu",
      label: "Kurumsal Etkinlikte Işık Kurgusu",
    },
  },
  {
    slug: "isik-masasi",
    term: "Işık Masası (Console)",
    aliases: ["Light console", "Işık kumandası"],
    category: "isik",
    definition:
      "Tüm armatürlerin DMX üzerinden programlandığı ve etkinlik boyunca sahne sahne çağrıldığı kontrol yüzeyi.",
    detail:
      "Işık sahneleri (cue) prova sırasında kaydedilir ve akış sırasında sırayla çağrılır. Programlama süresi armatür sayısıyla değil sahne sayısıyla artar; çok bölümlü bir gala gecesi, tek oturumlu bir konferanstan kat kat uzun programlama ister.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "cri",
    term: "CRI (Renk Gerçekliği İndeksi)",
    aliases: ["Color Rendering Index", "Ra değeri"],
    category: "isik",
    definition:
      "Bir ışık kaynağının renkleri gün ışığına ne kadar yakın gösterdiğini 0–100 arasında ifade eden değer.",
    detail:
      "Kayıt ve yayın yapılan etkinliklerde CRI 90 ve üzeri beklenir; düşük CRI'da ten renkleri soluk, kurumsal kimlik renkleri yanlış çıkar. Ürün lansmanlarında ürünün gerçek rengini göstermesi gerektiği için bu değer teklif aşamasında sorulmalıdır.",
    related: {
      href: "/blog/urun-lansmani-organizasyonu",
      label: "Ürün Lansmanı Organizasyonu",
    },
  },

  /* ---------------- Truss ve Rigging ---------------- */
  {
    slug: "truss",
    term: "Truss",
    aliases: ["Kafes sistem", "Alüminyum truss"],
    category: "rigging",
    definition:
      "Alüminyum borulardan üçgen veya kare kesitli olarak üretilen, ışık ve ekran taşımaya yarayan modüler taşıyıcı sistem.",
    detail:
      "En yaygın kesitler 290 mm ve 400 mm'dir; kesit büyüdükçe aynı açıklıkta taşıyabileceği yük artar. Truss seçiminde uzunluk kadar açıklık (iki ayak arası mesafe) ve asılacak toplam yük belirleyicidir.",
    related: { href: "/truss-kiralama", label: "Truss Kiralama" },
  },
  {
    slug: "rigging",
    term: "Rigging",
    aliases: ["Asma sistemi", "Askı"],
    category: "rigging",
    definition:
      "Işık, ses ve ekran ekipmanının tavana veya taşıyıcı yapıya güvenli biçimde asılması işi.",
    detail:
      "Salonun asma noktalarının kapasitesi, kullanılacak sapan ve kilit malzemeleri, yükün dağılımı ve yedek emniyet bağlantısı bu başlığın altındadır. Kapalı mekân projelerinde mekân yönetiminden asma noktası yük belgesi istenmesi standart uygulamadır.",
    related: { href: "/truss-kiralama", label: "Truss Kiralama" },
  },
  {
    slug: "ground-support",
    term: "Ground Support",
    aliases: ["Yer destekli sistem", "Kule sistemi"],
    category: "rigging",
    definition:
      "Tavana asılamayan durumlarda yükü kuleler ve motorlarla zeminden taşıyan bağımsız taşıyıcı yapı.",
    detail:
      "Açık alanda, tarihi yapılarda veya asma noktası bulunmayan salonlarda kullanılır. Zemin taşıma kapasitesi, balast ağırlığı ve rüzgâr yükü hesabı gerektirdiği için tavana asmaya göre daha uzun kurulum süresi ister.",
    related: { href: "/truss-kiralama", label: "Truss Kiralama" },
  },
  {
    slug: "swl",
    term: "SWL (Güvenli Çalışma Yükü)",
    aliases: ["Safe Working Load", "Emniyetli yük"],
    category: "rigging",
    definition:
      "Bir taşıyıcı elemanın emniyet katsayısı düşüldükten sonra sürekli olarak taşıyabileceği azami yük.",
    detail:
      "Kopma yüküyle karıştırılmamalıdır; SWL, kopma yükünün güvenlik katsayısına bölünmüş hâlidir. Truss, sapan, motor ve kilit gibi zincirdeki her elemanın SWL değeri ayrı ayrı kontrol edilir ve hesap en zayıf halkaya göre yapılır.",
    related: {
      href: "/blog/led-ekran-kurulum-guvenligi",
      label: "LED Ekran Kurulum Güvenliği",
    },
  },

  {
    slug: "zincirli-vinc",
    term: "Zincirli Vinç (Chain Hoist)",
    aliases: ["Motor", "Chain hoist", "Palanga"],
    category: "rigging",
    definition:
      "Truss ve ekipmanı tavana veya kuleye kaldırmak için kullanılan, kapasitesi tonla ifade edilen elektrikli kaldırma motoru.",
    detail:
      "Etkinlikte yaygın kapasiteler 500 kg, 1 ton ve 2 tondur. Kaldırma sırasında altında kimsenin bulunmaması ve yükün sabitlendikten sonra emniyet halatıyla yedeklenmesi temel kuraldır. Motor sayısı truss açıklığına ve toplam yüke göre belirlenir.",
    related: { href: "/truss-kiralama", label: "Truss Kiralama" },
  },
  {
    slug: "sapan-shackle",
    term: "Sapan ve Shackle",
    aliases: ["Sling", "Kilit", "Çelik halat"],
    category: "rigging",
    definition:
      "Yükü taşıyıcı noktaya bağlayan kuşak/halat (sapan) ve bu bağlantıyı kilitleyen metal bağlantı elemanı (shackle).",
    detail:
      "Her ikisinin de üzerinde yazılı bir güvenli çalışma yükü vardır ve zincirin en zayıf halkası hesabı belirler. Sapanın keskin köşeden geçmesi durumunda köşe koruması kullanılır; aşınmış veya kesik sapan sahada onarılmaz, değiştirilir.",
    related: {
      href: "/blog/led-ekran-kurulum-guvenligi",
      label: "LED Ekran Kurulum Güvenliği",
    },
  },
  {
    slug: "baseplate-balast",
    term: "Baseplate ve Balast",
    aliases: ["Taban plakası", "Karşı ağırlık", "Ballast"],
    category: "rigging",
    definition:
      "Yer destekli kulelerin devrilmesini önleyen taban plakası ve üzerine konan karşı ağırlık.",
    detail:
      "Açık alanda rüzgâr yükü arttıkça gereken balast ağırlığı hızla büyür; bir backdrop kulesi için yüzlerce kilo ağırlık gerekebilir. Balastın lojistiği kurulum planında ayrı bir kalemdir, çünkü ağırlığın alana taşınması genellikle ek araç ve ekip gerektirir.",
    related: { href: "/truss-kiralama", label: "Truss Kiralama" },
  },
  {
    slug: "dinamik-yuk",
    term: "Dinamik Yük",
    aliases: ["Hareketli yük", "Dynamic load"],
    category: "rigging",
    definition:
      "Hareket, rüzgâr veya ani duruş nedeniyle statik ağırlığın üzerine binen ek kuvvet.",
    detail:
      "Asılı bir ekipmanın kaldırılırken duraklaması veya rüzgârda salınması, taşıyıcı üzerinde kendi ağırlığından belirgin şekilde fazla bir kuvvet oluşturur. Bu yüzden hesap sadece kilo toplamıyla yapılmaz; güvenlik katsayısı bu belirsizliği karşılamak için vardır.",
    related: { href: "/truss-kiralama", label: "Truss Kiralama" },
  },

  /* ---------------- Çadır ---------------- */
  {
    slug: "pagoda-cadir",
    term: "Pagoda Çadır",
    aliases: ["Pagoda tent", "Piramit çadır"],
    category: "cadir",
    definition:
      "Piramit çatılı, genellikle 3×3, 4×4 ve 5×5 m ölçülerinde üretilen modüler etkinlik çadırı.",
    detail:
      "Karşılama, kayıt masası, satış noktası, VIP alan ve ikram istasyonu gibi küçük fonksiyonlar için kullanılır. Yan yana dizilerek koridor oluşturulabilir; büyük alan ihtiyacında ise tek büyük açıklıklı çadır daha ekonomik ve düzgün bir çözümdür.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },
  {
    slug: "buyuk-aciklikli-cadir",
    term: "Büyük Açıklıklı Çadır",
    aliases: ["Clear span", "Hangar çadır"],
    category: "cadir",
    definition:
      "İç kısmında taşıyıcı direk bulunmayan, açıklığı 10–40 m arasında değişen büyük etkinlik çadırı.",
    detail:
      "İç direksiz olması, sahne görüş açısını ve masa yerleşimini serbest bırakır. Açıklık (genişlik) sabittir; uzunluk 5 m'lik modüllerle uzatılır. Bu nedenle \"20×30 m çadır\" ifadesi 20 m açıklık ve 6 modül uzunluk anlamına gelir.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },
  {
    slug: "dome-cadir",
    term: "Dome Çadır",
    aliases: ["Küresel çadır", "Geodesic dome"],
    category: "cadir",
    definition:
      "Küresel kabuk formunda kurulan, iç yüzeyi kesintisiz olduğu için 360° projeksiyona uygun çadır tipi.",
    detail:
      "Lansman ve deneyim alanlarında tercih edilir; iç yüzeyin dikişsiz görünmesi mapping kalitesini doğrudan etkiler. Kurulumu klasik çadırdan farklı bir montaj sırası ve daha geniş serim alanı ister.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },
  {
    slug: "ankraj",
    term: "Ankraj",
    aliases: ["Sabitleme", "Balast", "Anchoring"],
    category: "cadir",
    definition:
      "Çadırın ve taşıyıcı yapıların rüzgâra karşı zemine sabitlenme yöntemi.",
    detail:
      "Toprak ve çim zeminde kazık, beton ve asfaltta ise dübel veya beton balast kullanılır. Zemin tipi keşifte netleşmezse kurulum günü sürpriz çıkar; hassas yüzeylerde (peyzaj, yeni asfalt, otopark tavanı) delme yapılamayacağı için balast ağırlığı ve lojistiği önceden planlanmalıdır.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },

  {
    slug: "yan-branda",
    term: "Yan Branda",
    aliases: ["Duvar paneli", "Sidewall", "Yan duvar"],
    category: "cadir",
    definition:
      "Çadırın yan yüzeylerini kapatan ve ihtiyaca göre takılıp çıkarılabilen branda paneller.",
    detail:
      "Yazın açık bırakılıp havalandırma sağlanabilir, kötü hava veya ısıtma gerektiren etkinliklerde kapatılır. Cam görünümlü şeffaf paneller manzaralı alanlarda, opak paneller ise projeksiyon ve LED kullanılan iç kurgularda tercih edilir. Kapı ve acil çıkış konumları branda planında belirlenir.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },
  {
    slug: "cadir-zemini",
    term: "Çadır Zemini",
    aliases: ["Deck", "Platform zemin", "Podyum zemin"],
    category: "cadir",
    definition:
      "Doğal zeminin üzerine kurulan, düzlem ve yalıtım sağlayan taşınabilir taban sistemi.",
    detail:
      "Eğimli, çamurlu veya çimli alanlarda masa-sandalye düzeninin oturması için gereklidir. Zemin katmanı çadır maliyetini belirgin şekilde artırır; bu yüzden alan seçiminde eğim, keşifte ölçülmesi gereken ilk değerlerden biridir. Üzerine halı, laminat veya ahşap kaplama uygulanabilir.",
    visual: {
      src: "/img/sozluk/podyum/cadir-zemini-moduler-platform.webp",
      width: 2048,
      height: 1536,
      alt: "Çadır altında kurulan modüler etkinlik zemini",
      caption:
        "Modüler zemin, çadır içindeki kullanım alanını doğal zeminden ayırarak düz ve düzenli bir etkinlik yüzeyi oluşturur.",
    },
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },
  {
    slug: "ruzgar-yuku",
    term: "Rüzgâr Yükü",
    aliases: ["Wind load", "Rüzgâr dayanımı"],
    category: "cadir",
    definition:
      "Çadır yüzeyine rüzgârın uyguladığı ve sabitleme ihtiyacını belirleyen kuvvet.",
    detail:
      "Çadır büyüdükçe rüzgâra maruz yüzey ve dolayısıyla kuvvet hızla artar. Üretici genellikle bir hız sınırı belirtir; bu sınır aşıldığında yan brandaların açılması ve alanın boşaltılması planı önceden hazırlanmalıdır. Açık hava projelerinde tahliye senaryosu teklifin parçasıdır.",
    related: {
      href: "/blog/organizasyon-icin-en-iyi-cadir-kiralama-secenekleri-2026",
      label: "Çadır Kiralama Seçenekleri",
    },
  },
  {
    slug: "cadir-iklimlendirme",
    term: "Çadır İklimlendirmesi",
    aliases: ["Isıtma", "Soğutma", "HVAC", "Klima"],
    category: "cadir",
    definition:
      "Çadır içindeki sıcaklığı etkinlik boyunca konforlu aralıkta tutan ısıtma veya soğutma sistemi.",
    detail:
      "Kapasite m³ üzerinden hesaplanır; kişi sayısı, aydınlatma yükü ve dış sıcaklık da hesaba katılır. Cihazlar dışarıya konumlanır ve kanalla içeri verilir, bu yüzden çadırın çevresinde ek yer ve elektrik kapasitesi gerekir. Kış ve yaz aylarındaki projelerde bu kalem enerji ihtiyacını belirgin şekilde artırır.",
    related: { href: "/cadir-hesaplama", label: "Çadır Hesaplama Aracı" },
  },
  {
    slug: "su-tahliyesi",
    term: "Yağmur Suyu Tahliyesi",
    aliases: ["Oluk", "Drenaj", "Su yalıtımı"],
    category: "cadir",
    definition:
      "Çadır çatısında biriken suyun kontrollü şekilde alandan uzaklaştırılması düzeni.",
    detail:
      "Yan yana kurulan çadırların birleşim noktalarında oluk kullanılır ve su alanın dışına yönlendirilir. Tahliye planlanmazsa çatıda su cebi oluşur; biriken suyun ağırlığı taşıyıcıyı zorlar. Zemin drenajı da ayrıca planlanmalıdır, aksi halde çadır içine su sızar.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },
  {
    slug: "seffaf-tavan",
    term: "Şeffaf Tavan",
    aliases: ["Transparan çadır", "Clear roof"],
    category: "cadir",
    definition:
      "Gökyüzünün görünmesini sağlayan şeffaf branda kullanılan çadır çatısı.",
    detail:
      "Akşam davetlerinde etkileyici bir atmosfer yaratır, ancak gündüz sera etkisi oluşturduğu için soğutma ihtiyacını artırır ve projeksiyon kullanımını zorlaştırır. Gündüz programı olan etkinliklerde iç astar veya kısmi gölgeleme ile birlikte planlanır.",
    related: { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  },

  /* ---------------- Enerji ve Elektrik ---------------- */
  {
    slug: "kva-kw",
    term: "kVA ve kW",
    aliases: ["Güç ihtiyacı", "Jeneratör kapasitesi"],
    category: "enerji",
    definition:
      "kW çekilen gerçek gücü, kVA ise kaynağın sağlaması gereken görünür gücü ifade eder; jeneratör kVA ile seçilir.",
    detail:
      "Ekipman etiketlerinde genellikle kW yazar, jeneratör ise kVA ile anılır. Aradaki fark güç katsayısından gelir ve pratikte jeneratör, toplam kW ihtiyacının üzerinde bir kapasiteyle seçilir. Ayrıca motorların ilk kalkış anındaki yüksek çekiş de hesaba katılmalıdır.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "trifaze",
    term: "Trifaze ve Monofaze",
    aliases: ["Üç faz", "380V", "220V"],
    category: "enerji",
    definition:
      "Monofaze tek fazlı ev tipi hat, trifaze ise üç fazlı ve yüksek güç taşıyan endüstriyel hattır.",
    detail:
      "Sahne ışığı, LED ekran ve iklimlendirme gibi yüksek güçlü kalemler trifaze ister. Mekânda yalnızca monofaze priz varsa, ihtiyaç ne olursa olsun karşılanamaz; bu nedenle keşifte panonun tipi ve amper değeri fotoğraflanır. Fazların dengeli yüklenmesi de kurulum sırasında kontrol edilir.",
    related: {
      href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
      label: "Etkinlik Teknik Keşif Rehberi",
    },
  },
  {
    slug: "enerji-panosu",
    term: "Enerji Dağıtım Panosu",
    aliases: ["Dağıtım panosu", "Power distro"],
    category: "enerji",
    definition:
      "Ana kaynaktan gelen gücü sigortalı çıkışlara bölerek sahne, ışık, ses ve ekran hatlarını ayıran pano.",
    detail:
      "Hatların ayrılması, bir bölümdeki arızanın tüm etkinliği durdurmasını engeller. Ses ve ışık hatlarının ayrı beslenmesi ayrıca ses sistemine karışan uğultuyu azaltır. Pano konumu kablo güzergâhını belirlediği için yerleşim planında erkenden işaretlenir.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "kacak-akim-rolesi",
    term: "Kaçak Akım Rölesi",
    aliases: ["RCD", "Hayat koruma rölesi"],
    category: "enerji",
    definition:
      "Elektrik akımının istenmeyen bir yoldan kaçtığını algılayıp devreyi anında kesen koruma cihazı.",
    detail:
      "Açık alanda, nemli zeminde ve çadır kurulumlarında hayati önemdedir; ıslanan bir kabloda ölümcül kazayı önleyen bileşendir. Etkinlik kurulumlarında dağıtım panosunun standart parçasıdır ve kurulum sonrası test edilerek çalıştığı doğrulanır.",
    related: {
      href: "/blog/led-ekran-kurulum-guvenligi",
      label: "LED Ekran Kurulum Güvenliği",
    },
  },
  {
    slug: "kablo-kesiti",
    term: "Kablo Kesiti ve Gerilim Düşümü",
    aliases: ["Kablo kalınlığı", "Voltaj düşümü"],
    category: "enerji",
    definition:
      "Kablonun taşıyabileceği akımı belirleyen kesit alanı ve uzun mesafede voltajın düşmesiyle oluşan kayıp.",
    detail:
      "Uzun mesafede ince kablo kullanmak hem voltajı düşürür hem kabloyu ısıtır. Açık alan projelerinde jeneratör ile sahne arası yüzlerce metre olabildiği için kesit, mesafeye göre büyütülür. Bu, kurulum lojistiğinde çoğu zaman fark edilmeyen bir ağırlık ve maliyet kalemidir.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },

  /* ---------------- Etkinlik Formatları ---------------- */
  {
    slug: "urun-lansmani",
    term: "Ürün Lansmanı",
    aliases: ["Launch", "Tanıtım etkinliği"],
    category: "etkinlik",
    definition:
      "Yeni bir ürünün ilk kez gösterildiği, tek bir mesaj etrafında kısa ve yüksek etkili kurgulanan kurumsal etkinlik.",
    detail:
      "Teknik kapsamı belirleyen şey ürünün nasıl ortaya çıkacağıdır: perde açılışı, LED ekranın kalkması, mapping veya ışık geçişi. Bu \"reveal\" anı prova gerektirir ve genellikle tüm teknik kurgunun etrafında döndüğü tek sahnedir. Renk gerçekliği ve kayıt kalitesi bu formatta öne çıkar.",
    related: {
      href: "/blog/urun-lansmani-organizasyonu",
      label: "Ürün Lansmanı Organizasyonu",
    },
  },
  {
    slug: "bayi-toplantisi",
    term: "Bayi Toplantısı",
    aliases: ["Dealer meeting", "Bayi buluşması"],
    category: "etkinlik",
    definition:
      "Şirketin bayi ve iş ortaklarını bir araya getirdiği, genel oturum, hedef sunumu ve çoğu zaman ödül gecesini birleştiren çok bölümlü format.",
    detail:
      "Lansmandan farkı, güne yayılması ve birden çok mekân düzenini gerektirmesidir: gündüz konferans düzeni, akşam gala düzeni. Bu geçiş süresi (turnaround) teknik planın en kritik kalemidir ve genellikle ayrı bir ekip gerektirir.",
    related: {
      href: "/blog/bayi-toplantisi-organizasyonu-rehberi",
      label: "Bayi Toplantısı Organizasyonu Rehberi",
    },
  },
  {
    slug: "gala-gecesi",
    term: "Gala Gecesi",
    aliases: ["Ödül gecesi", "Gala dinner"],
    category: "etkinlik",
    definition:
      "Yemekli düzende ilerleyen, sahne programı ve çoğu zaman ödül töreni içeren akşam etkinliği.",
    detail:
      "Yuvarlak masa düzeni görüş hattını zorlaştırdığı için sahne yüksekliği ve yan ekranlar konferans düzenine göre daha kritiktir. Ödül bölümünde sahneye çıkış-iniş akışı, takip ışığı ve kupa teslim koreografisi run of show içinde ayrıca yazılır.",
    related: { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  },
  {
    slug: "kongre-konferans",
    term: "Kongre ve Konferans",
    aliases: ["Congress", "Sempozyum", "Zirve"],
    category: "etkinlik",
    definition:
      "Çok sayıda konuşmacı ve paralel oturumla ilerleyen, içerik ağırlıklı etkinlik formatı.",
    detail:
      "Belirleyici teknik başlık konuşulabilirliktir; sunum akışının kesintisiz yönetilmesi ve konuşmacı geçişlerinde mikrofon karışıklığı yaşanmaması gerekir. Paralel salonlarda ayrı ses ve görüntü setleri, ortak bir zaman çizelgesiyle yönetilir.",
    related: { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  },
  {
    slug: "hibrit-etkinlik",
    term: "Hibrit Etkinlik",
    aliases: ["Hybrid event", "Canlı yayınlı etkinlik"],
    category: "etkinlik",
    definition:
      "Salondaki izleyiciyle çevrimiçi izleyiciye aynı anda hitap eden ve iki ayrı deneyimi paralel yöneten format.",
    detail:
      "Salon için hazırlanan ses ve görüntü, yayın için doğrudan uygun değildir: yayın ayrı bir ses miksi, kamera planı ve ekran beslemesi ister. Bu yüzden hibrit etkinlik, salon prodüksiyonunun üzerine eklenen ikinci bir teknik katmandır ve bütçede ayrı düşünülmelidir.",
    related: {
      href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
      label: "Kurumsal Etkinlik Planlama Rehberi",
    },
  },
  {
    slug: "simultane-ceviri",
    term: "Simultane Çeviri",
    aliases: ["Eş zamanlı çeviri", "Çeviri kabini", "Interpretation"],
    category: "etkinlik",
    definition:
      "Konuşmanın anlık olarak başka dile çevrilip dinleyicilere kulaklıkla iletildiği sistem.",
    detail:
      "Ses yalıtımlı kabin, çevirmen konsolu ve katılımcı sayısı kadar alıcı-kulaklık gerektirir. Kabinin sahneyi görmesi gerekir; bu nedenle salon yerleşiminde konum erkenden belirlenir. Uluslararası katılımcısı olan kongre ve bayi toplantılarında standart kalemdir.",
    related: {
      href: "/turkiyede-etkinlik-cozum-ortagi",
      label: "Türkiye'de Etkinlik Çözüm Ortağı",
    },
  },
  {
    slug: "fuar-stand",
    term: "Fuar ve Stand",
    aliases: ["Exhibition", "Stand kurulumu"],
    category: "etkinlik",
    definition:
      "Çok sayıda katılımcının kendi alanını kurduğu, ortak bir mekân takvimine bağlı etkinlik formatı.",
    detail:
      "Fuar alanları kurulum ve söküm için katı saat pencereleri uygular; bu pencerelere uymamak ceza doğurur. Ayrıca yük asansörü, forklift erişimi ve elektrik başvurusu fuar idaresinden önceden alınır. Teknik plan, mekânın kurallarına göre şekillenir.",
    related: { href: "/projeler", label: "Projelerimiz" },
  },
  {
    slug: "akreditasyon",
    term: "Akreditasyon ve Kayıt",
    aliases: ["Registration", "Katılımcı kaydı", "Yaka kartı"],
    category: "etkinlik",
    definition:
      "Katılımcıların girişte tanımlanması, yaka kartı alması ve yetkilendirilmesi süreci.",
    detail:
      "Giriş alanı, kalabalığın ilk yığıldığı noktadır; masa sayısı, bekleme alanı ve yönlendirme burada planlanmazsa program gecikmeyle başlar. Karşılama alanı için pagoda çadır ve masa-sandalye ihtiyacı çoğu projede bu adımdan doğar.",
    related: { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama" },
  },

  /* ---------------- Operasyon ---------------- */
  {
    slug: "teknik-kesif",
    term: "Teknik Keşif",
    aliases: ["Site survey", "Mekân keşfi"],
    category: "operasyon",
    definition:
      "Kurulum öncesinde etkinlik alanının ölçü, zemin, enerji, erişim ve asma noktaları açısından yerinde incelenmesi.",
    detail:
      "Keşifte netleşen başlıklar teklifin doğruluğunu belirler: araç yanaşma noktası, kapı ve asansör ölçüleri, tavan yüksekliği, elektrik panosu kapasitesi ve mekâna giriş saati. Keşifsiz verilen tekliflerde en sık sapma kalemi lojistik ve ek işçiliktir.",
    related: {
      href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
      label: "Etkinlik Teknik Keşif Rehberi",
    },
  },
  {
    slug: "run-of-show",
    term: "Run of Show",
    aliases: ["ROS", "Dakikalı akış", "Cue sheet"],
    category: "operasyon",
    definition:
      "Etkinliğin dakika dakika akışını; sahne, ses, ışık ve görüntü işaretleriyle birlikte tanımlayan operasyon belgesi.",
    detail:
      "Sunucunun konuşma başlangıcı, video oynatma anı, ışık değişimi ve sahne geçişleri aynı satırda görünür. Prova bu belge üzerinden yapılır; hazırlanmadığı etkinliklerde geçişler operatör inisiyatifine kalır ve akış tutarsızlaşır.",
    related: { href: "/kurumsal-organizasyon", label: "Kurumsal Organizasyon" },
  },
  {
    slug: "load-in-load-out",
    term: "Load-in / Load-out",
    aliases: ["Kurulum ve söküm", "Giriş-çıkış penceresi"],
    category: "operasyon",
    definition:
      "Ekipmanın mekâna girip kurulduğu ve etkinlik sonrası sökülüp çıkarıldığı zaman aralıkları.",
    detail:
      "Otel ve kongre merkezlerinde bu pencereler dardır ve çoğu zaman gece saatlerine denk gelir. Ekip sayısı, araç sayısı ve kurulum sırası doğrudan bu pencereye göre planlanır; pencere daralıyorsa maliyet ekip büyütmesi nedeniyle artar.",
    related: { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
  },
  {
    slug: "jenerator-yedekleme",
    term: "Jeneratör ve Yedekleme",
    aliases: ["Redundancy", "N+1", "Yedek enerji"],
    category: "operasyon",
    definition:
      "Kritik sistemlerin enerji kesintisinde durmaması için ikinci bir kaynak veya cihazın hazır bekletilmesi.",
    detail:
      "Açık alan etkinliklerinde jeneratör ana kaynaktır ve genellikle ikinci bir jeneratör yedek olarak konumlandırılır. Kapalı mekânda ise en azından reji, ekran işlemcisi ve ses sistemi için kesintisiz güç kaynağı planlanır.",
    related: { href: "/ses-isik-sistemleri", label: "Ses ve Işık Sistemleri" },
  },
  {
    slug: "teknik-prova",
    term: "Teknik Prova",
    aliases: ["Rehearsal", "Genel prova"],
    category: "operasyon",
    definition:
      "Kurulum tamamlandıktan sonra tüm sistemlerin gerçek akışla birlikte test edildiği hazırlık oturumu.",
    detail:
      "Sunum dosyalarının açılması, mikrofon seviyelerinin ayarlanması, ışık sahnelerinin kaydedilmesi ve geçişlerin denenmesi bu oturumda yapılır. Prova için etkinlik başlangıcından en az 2 saat önce alanın hazır olması planlanır.",
    related: { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
  },
  {
    slug: "anahtar-teslim-produksiyon",
    term: "Anahtar Teslim Prodüksiyon",
    aliases: ["Turnkey production", "Uçtan uca prodüksiyon"],
    category: "operasyon",
    definition:
      "Planlama, ekipman, kurulum, etkinlik günü operasyonu ve sökümün tek sözleşme altında tek ekip tarafından üstlenilmesi.",
    detail:
      "Alternatifi, ajansın arkasında teknik prodüksiyon partneri olarak çalışmaktır; bu modelde müşteri ilişkisi ve kreatif yön ajansta kalır, saha ve ekipman sorumluluğu teknik ekipte olur. İki model de aynı ekiple yürütülebilir; fark, sözleşme ve sorumluluk sınırındadır.",
    related: {
      href: "/turkiyede-etkinlik-cozum-ortagi",
      label: "Türkiye'de Etkinlik Çözüm Ortağı",
    },
  },
  {
    slug: "risk-analizi",
    term: "Risk Analizi ve İSG",
    aliases: ["İş sağlığı ve güvenliği", "Risk assessment"],
    category: "operasyon",
    definition:
      "Kurulum ve etkinlik sırasında oluşabilecek tehlikelerin önceden listelenip her biri için önlem tanımlanması.",
    detail:
      "Yüksekte çalışma, elektrik, kaldırma ekipmanı, kalabalık yönetimi ve hava koşulları başlıkları standarttır. Belediye, fuar alanı ve kurumsal müşterilerin çoğu bu belgeyi kurulum öncesi ister; hazırlanmaması alana giriş iznini geciktirir.",
    related: {
      href: "/blog/etkinlik-teknik-kesif-ve-planlama-rehberi",
      label: "Etkinlik Teknik Keşif Rehberi",
    },
  },
  {
    slug: "kapasite-hesabi",
    term: "Kapasite ve Doluluk Hesabı",
    aliases: ["Kişi kapasitesi", "Alan doluluğu"],
    category: "operasyon",
    definition:
      "Bir alanın oturma düzenine göre kaç kişi alabileceğinin ve buna bağlı geçiş yollarının hesaplanması.",
    detail:
      "Aynı alan kokteyl düzeninde yemekli düzenin yaklaşık 1,6 katı kişi alır. Hesaba yalnızca masalar değil, servis yolları, acil çıkış koridorları ve karşılama alanı da girer. Çadır ve salon ölçüsü kararı doğrudan bu hesaptan çıkar.",
    related: { href: "/cadir-hesaplama", label: "Çadır Hesaplama Aracı" },
  },
  {
    slug: "yedek-ekipman",
    term: "Yedek Ekipman (Spare)",
    aliases: ["Spare", "Yedekleme", "B planı"],
    category: "operasyon",
    definition:
      "Etkinlik sırasında arızalanma ihtimali olan kritik cihazların sahada hazır bekletilen ikinci kopyası.",
    detail:
      "Kablosuz mikrofon, sunum bilgisayarı, görüntü işlemcisi ve kablo setleri tipik yedek kalemleridir. Etkinlik canlı ve tekrarsız olduğu için arıza sonrası tedarik seçeneği yoktur; yedek, maliyet kalemi değil sigorta olarak değerlendirilir.",
    related: { href: "/nasil-calisiyoruz", label: "Nasıl Çalışıyoruz" },
  },
  {
    slug: "produksiyon-takvimi",
    term: "Prodüksiyon Takvimi",
    aliases: ["Production schedule", "Kritik yol"],
    category: "operasyon",
    definition:
      "Keşiften söküme kadar tüm işlerin, birbirine bağımlılıklarıyla birlikte tarihlendirildiği plan.",
    detail:
      "Bazı işler sırayla yapılmak zorundadır: truss kurulmadan ışık asılamaz, ekran kurulmadan içerik test edilemez. Bu zincir kritik yolu oluşturur ve zincirdeki bir gecikme tüm takvimi kaydırır. İçerik teslim tarihi de bu takvimin parçasıdır.",
    related: {
      href: "/blog/kurumsal-etkinlik-planlama-rehberi-2026",
      label: "Kurumsal Etkinlik Planlama Rehberi",
    },
  },
];

/**
 * Hizmet sayfasi -> o sayfada gecen sozluk terimleri.
 *
 * Sozluk terimleri zaten hizmet sayfalarina baglaniyordu; bu harita ters yonu
 * kurarak konusal baglantiyi cift yonlu kapatir. Yalnizca slug listelenir,
 * gorunen metin ve tanim tek kaynaktan (GLOSSARY_TERMS) gelir.
 */
export const SERVICE_GLOSSARY_TERMS = {
  "/sahne-kiralama": [
    "moduler-podyum",
    "sahne-yuku",
    "gorus-hatti",
    "riser",
    "etek-perde",
    "korkuluk-merdiven",
    "backstage",
    "sahne-plani",
    "truss",
    "rigging",
  ],
  "/podyum-kiralama": [
    "moduler-podyum",
    "gorus-hatti",
    "rampa-erisim",
    "korkuluk-merdiven",
    "riser",
    "catwalk",
    "sahne-yuku",
    "etek-perde",
  ],
  "/konser-icin-podyum-kiralama": [
    "riser",
    "sahne-yuku",
    "gorus-hatti",
    "korkuluk-merdiven",
    "ground-support",
    "db-spl",
    "subwoofer-dizilim",
    "follow-spot",
  ],
  "/defile-podyum-kiralama": [
    "catwalk",
    "moduler-podyum",
    "gorus-hatti",
    "etek-perde",
    "follow-spot",
    "renk-sicakligi",
    "cri",
  ],
  "/led-ekran-kiralama": [
    "pixel-pitch",
    "nit-parlaklik",
    "video-wall",
    "kabinet",
    "goruntu-islemcisi",
    "ip-koruma-sinifi",
    "indoor-outdoor-led",
    "led-m2-hesabi",
    "icerik-cozunurlugu",
    "medya-sunucusu",
    "moire",
    "yenileme-hizi",
  ],
  "/ses-isik-sistemleri": [
    "line-array",
    "foh",
    "konusulabilirlik",
    "db-spl",
    "subwoofer-dizilim",
    "delay-hoparlor",
    "mikrofon-tipleri",
    "monitor-miks",
    "dmx",
    "moving-head",
    "follow-spot",
    "haze-sis",
    "key-fill-back",
  ],
  "/truss-kiralama": [
    "truss",
    "rigging",
    "ground-support",
    "swl",
    "zincirli-vinc",
    "sapan-shackle",
    "baseplate-balast",
    "dinamik-yuk",
  ],
  "/cadir-kiralama": [
    "pagoda-cadir",
    "buyuk-aciklikli-cadir",
    "dome-cadir",
    "seffaf-tavan",
    "yan-branda",
    "cadir-zemini",
    "ankraj",
    "ruzgar-yuku",
    "cadir-iklimlendirme",
    "su-tahliyesi",
  ],
  "/masa-sandalye-kiralama": [
    "kapasite-hesabi",
    "gala-gecesi",
    "kongre-konferans",
    "akreditasyon",
    "fuar-stand",
    "cadir-zemini",
  ],
  "/dijital-kursu-kiralama": [
    "mikrofon-tipleri",
    "feedback",
    "konusulabilirlik",
    "kongre-konferans",
    "simultane-ceviri",
    "sahne-plani",
  ],
  "/kurumsal-organizasyon": [
    "urun-lansmani",
    "bayi-toplantisi",
    "gala-gecesi",
    "kongre-konferans",
    "hibrit-etkinlik",
    "simultane-ceviri",
    "akreditasyon",
    "run-of-show",
    "teknik-kesif",
    "anahtar-teslim-produksiyon",
    "produksiyon-takvimi",
    "risk-analizi",
  ],
};

/**
 * Verilen hizmet yolu icin sozluk girdilerini dondurur. Haritada yazili ama
 * GLOSSARY_TERMS'te bulunmayan bir slug sessizce dusurulmez; build sirasinda
 * hata verir, boylece yazim hatasi fark edilmeden yayina cikamaz.
 */
export function getServiceGlossaryTerms(servicePath) {
  const slugs = SERVICE_GLOSSARY_TERMS[servicePath];
  if (!slugs) return [];

  return slugs.map((slug) => {
    const entry = GLOSSARY_TERMS.find((term) => term.slug === slug);
    if (!entry) {
      throw new Error(
        `SERVICE_GLOSSARY_TERMS["${servicePath}"] içinde tanımsız sözlük terimi: "${slug}"`,
      );
    }
    return entry;
  });
}

/**
 * Arama karsilastirmasi icin metin normalizasyonu.
 *
 * Turkce'ye ozgu iki tuzak: (1) "I" harfinin kucugu locale'e gore degisir,
 * toLocaleLowerCase("tr") sart; (2) kullanici sapkasiz/noktasiz yazar
 * ("ruzgar", "isik"), bu yuzden aksanlar da sadelestirilir.
 *
 * Hem sunucu hem istemci tarafinda ayni fonksiyon kullanilmali; aksi halde
 * indeks ile sorgu farkli normalize edilir ve esleme kacar.
 */
export const normalizeSearchText = (value = "") =>
  value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/â|à|á/g, "a")
    .replace(/î|ì|í/g, "i")
    .replace(/\s+/g, " ")
    .trim();

/**
 * Terimin ilgili sayfasi ticari bir hizmet sayfasi mi, yoksa rehber yazisi mi?
 * Teklif butonu yalnizca hizmet sayfalarinda gosterilir; blog yazisina
 * "Fiyat al" demek yanlis beklenti yaratir.
 */
export const isServiceHref = (href = "") => Boolean(href) && !href.startsWith("/blog/");

export const getGlossaryTermsByCategory = (categoryKey) =>
  GLOSSARY_TERMS.filter((entry) => entry.category === categoryKey);

export const getGlossaryTerm = (slug) =>
  GLOSSARY_TERMS.find((entry) => entry.slug === slug);

/**
 * Turkce siralama kurallariyla alfabetik liste. "Ç", "İ", "Ö", "Ş", "Ü" harflerinin
 * dogru yere oturmasi icin localeCompare("tr") sart; varsayilan siralama bunlari
 * listenin sonuna atiyor.
 */
export const getGlossaryTermsAlphabetical = () =>
  [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term, "tr"));
