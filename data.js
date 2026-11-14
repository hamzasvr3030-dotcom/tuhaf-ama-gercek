// Tuhaf Ama Gerçek — bilgi veritabanı
// Kurallar:
//  • Her bilginin en az 1 güvenilir kaynağı olmalı (bilim kurumu, ansiklopedi,
//    hakemli makale, resmî kurum; Wikipedia yalnızca kaynakçalı makalelerle).
//  • Rakamlar kaynakla uyuşmalı; kesin olmayan yerde "yaklaşık" denmeli.
//  • Bir bilgi birden çok kategoriye ait olabilir (kategoriler dizisi).
//  • Görseller gorseller.js içinde (Wikimedia Commons, serbest lisanslı).

const KATEGORILER = [
  { id: "olaylar",   ad: "Tuhaf Olaylar", emoji: "🌀", renk: "#8e44ad" },
  { id: "hayvanlar", ad: "Hayvanlar",     emoji: "🐾", renk: "#e8833a" },
  { id: "uzay",      ad: "Uzay",          emoji: "🪐", renk: "#6c5ce7" },
  { id: "tarih",     ad: "Tarih",         emoji: "🏛️", renk: "#b5838d" },
  { id: "bilim",     ad: "Bilim",         emoji: "🔬", renk: "#0984e3" },
  { id: "insan",     ad: "İnsan",         emoji: "🧠", renk: "#e84393" },
  { id: "yemek",     ad: "Yemek",         emoji: "🍯", renk: "#d19a00" },
  { id: "doga",      ad: "Doğa",          emoji: "🌿", renk: "#2e9e5b" },
  { id: "deniz",     ad: "Deniz",         emoji: "🌊", renk: "#0aa5b5" },
  { id: "turkiye",   ad: "Türkiye",       emoji: "🧿", renk: "#d63031" }
];

const BILGILER = [
  // ───────────────────────── TUHAF OLAYLAR ─────────────────────────
  {
    id: "melas-seli",
    emoji: "🌊",
    baslik: "Boston'u melas seli bastı: 21 kişi hayatını kaybetti",
    ozet: "1919'da patlayan dev bir tank, şehrin sokaklarına saatte 56 km hızla akan bir şeker pekmezi dalgası saldı.",
    kunye: [["Tarih", "15 Ocak 1919"], ["Yer", "Boston, ABD (North End)"], ["Miktar", "~8,7 milyon litre melas"], ["Kayıp", "21 ölü, ~150 yaralı"]],
    paragraflar: [
      "15 Ocak 1919'da, Boston'un North End semtindeki yaklaşık 15 metre yüksekliğindeki bir depolama tankı aniden yarıldı. Tankta yaklaşık 8,7 milyon litre melas (şeker kamışından elde edilen koyu, yapışkan şurup) vardı. Bu da yaklaşık 12.000 tonluk bir kütle demekti.",
      "Serbest kalan melas, tahminen saatte 56 km hızla sokaklara yayıldı. Dalga binaları yerinden oynattı, bir yükseltilmiş tren hattının taşıyıcılarını büktü, insanları ve atları içine çekti. Melas yapışkan ve ağır olduğu için içine düşenlerin kurtulması çok zordu. Hava soğudukça melas daha da koyulaşıyor, kurtarma çalışmalarını zorlaştırıyordu.",
      "Felakette 21 kişi öldü, yaklaşık 150 kişi yaralandı. Temizlik haftalar sürdü. Sonraki soruşturmalar, tankın aceleyle ve yetersiz kontrollerle yapıldığını ortaya koydu. Mahalle sakinleri on yıllar boyunca sıcak yaz günlerinde bölgede hâlâ melas kokusu aldıklarını anlattı."
    ],
    kategoriler: ["olaylar", "tarih"],
    kaynaklar: [
      { ad: "Wikipedia — Great Molasses Flood (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Great_Molasses_Flood" }
    ]
  },
  {
    id: "dans-vebasi",
    emoji: "💃",
    baslik: "1518 Dans Vebası: İnsanlar haftalarca durmadan dans etti",
    ozet: "Strazburg'da onlarca, belki yüzlerce kişi kendini durduramadan günlerce dans etti.",
    kunye: [["Tarih", "Temmuz – Eylül 1518"], ["Yer", "Strazburg (bugün Fransa)"], ["Etkilenen", "Tahminen 50 – 400 kişi"], ["Olası neden", "Strese bağlı toplu histeri"]],
    paragraflar: [
      "Temmuz 1518'de Strazburg'da Frau Troffea adlı bir kadının sokakta dans etmeye başladığı ve günlerce durmadığı anlatılır. Kısa süre içinde başkaları da ona katıldı. Kaynaklara göre birkaç hafta içinde dans edenlerin sayısı onlarca hatta yüzlerce kişiye ulaştı.",
      "Şehir yöneticileri işin tuhaf bir yanına imza attı: Hastalığın 'daha çok dans ederek' geçeceğine inanarak dans edenler için alan ayırdılar, hatta müzisyen tuttular. Bu durum salgını büyütmüş olabilir. Ölüm sayısı ise tartışmalıdır, kesin bir rakam bilinmiyor.",
      "Tarihçi John Waller'a göre olayın en olası açıklaması, açlık, hastalık ve dinî korkuların yarattığı ağır stres altında ortaya çıkan toplu psikojenik hastalıktır (kitlesel histeri). Bazı araştırmacılar çavdar mahmuzu adlı bir mantarla zehirlenmeyi de öne sürmüştür ama bu açıklama daha zayıf kabul ediliyor."
    ],
    kategoriler: ["olaylar", "tarih", "insan"],
    kaynaklar: [
      { ad: "Waller (2009), The Lancet — A forgotten plague: making sense of dancing mania", url: "https://doi.org/10.1016/S0140-6736(09)60386-X" },
      { ad: "Britannica — Dancing plague of 1518", url: "https://www.britannica.com/event/dancing-plague-of-1518" }
    ]
  },
  {
    id: "emu-savasi",
    emoji: "🪶",
    baslik: "Avustralya ordusu emulara savaş açtı ve kaybetti",
    ozet: "1932'de makineli tüfekli askerler tarlaları yağmalayan ~20.000 emuyu durdurmaya çalıştı, başaramadı.",
    kunye: [["Tarih", "Kasım – Aralık 1932"], ["Yer", "Batı Avustralya"], ["Rakip", "~20.000 emu"], ["Silah", "Lewis makineli tüfekleri"]],
    paragraflar: [
      "Birinci Dünya Savaşı'ndan sonra Batı Avustralya'da çiftçiliğe başlayan eski askerler, 1932'de büyük bir sorunla karşılaştı. Yaklaşık 20.000 emu, üreme döneminden sonra göç ederken buğday tarlalarına daldı, ekinleri yedi ve çitleri yıktı.",
      "Çiftçiler hükümetten makineli tüfek istedi. Savunma Bakanı kabul etti ve Binbaşı G. P. W. Meredith komutasında birkaç asker, Lewis makineli tüfekleriyle bölgeye gönderildi. Ancak emular beklenenden çok daha zor rakiplerdi. Küçük gruplara ayrılıp hızla kaçıyor, vurulduklarında bile çoğu zaman koşmaya devam ediyorlardı.",
      "Komutan, emuların kurşunlara 'tanklar gibi' dayandığını söyledi. Basın olayı alaya aldı ve 'Emu Savaşı' adı buradan doğdu. Harcanan mermiye göre sonuç çok düşük kaldı, operasyon iki denemeden sonra durduruldu. Sonraki yıllarda sorun ordu yerine çitlerle çözülmeye çalışıldı."
    ],
    kategoriler: ["olaylar", "hayvanlar", "tarih"],
    kaynaklar: [
      { ad: "Wikipedia — Emu War (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Emu_War" }
    ]
  },
  {
    id: "tunguska",
    emoji: "☄️",
    baslik: "Tunguska: 2.150 km² ormanı deviren ama krater bırakmayan patlama",
    ozet: "1908'de Sibirya'da gökyüzünde bir patlama, yaklaşık 2.150 km² ormanı yerle bir etti.",
    kunye: [["Tarih", "30 Haziran 1908"], ["Yer", "Orta Sibirya, Rusya"], ["Etki alanı", "~2.150 km² orman"], ["Neden", "Havada patlayan gök cismi"]],
    paragraflar: [
      "30 Haziran 1908 sabahı, Sibirya'da Podkamennaya Tunguska Nehri yakınlarında devasa bir patlama oldu. Şok dalgası kilometrelerce uzaktaki insanları yere düşürdü, 200 km çapındaki bir alanda camları kırdı. Patlama, Rus ve Alman sismograflarında deprem gibi kaydedildi.",
      "Bölge çok ıssız olduğu için ilk bilimsel keşif ancak 1921'de, Leonid Kulik önderliğinde yapılabildi. Kulik merkez noktayı 1927'de buldu. Şaşırtıcı biçimde orada bir krater yoktu. Yaklaşık 2.150 km²lik ormandaki ağaçlar, merkezden dışarı doğru, bir yelpaze gibi yere yatmıştı. Tam merkezdeki ağaçlar ise ayakta ama dalları kopmuş hâldeydi.",
      "Bilim insanlarına göre Tunguska'yı yaratan şey, yere çarpmadan atmosferde birkaç kilometre yükseklikte patlayan bir göktaşı ya da kuyruklu yıldız parçasıydı. Bu yüzden krater oluşmadı. Tunguska, kayıtlı tarihteki en büyük göktaşı etkisi olarak kabul ediliyor."
    ],
    kategoriler: ["olaylar", "uzay", "doga"],
    kaynaklar: [
      { ad: "Britannica — Tunguska event", url: "https://www.britannica.com/event/Tunguska-event" },
      { ad: "Wikipedia — Tunguska event (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Tunguska_event" }
    ]
  },
  {
    id: "bira-seli",
    emoji: "🍺",
    baslik: "Londra'da sokakları bira bastı",
    ozet: "1814'te bir bira fabrikasındaki dev fıçı patladı, yüz binlerce litre bira mahalleyi sular altında bıraktı.",
    kunye: [["Tarih", "17 Ekim 1814"], ["Yer", "Londra, İngiltere"], ["Miktar", "~580.000 – 1.470.000 litre"], ["Kayıp", "8 ölü"]],
    paragraflar: [
      "17 Ekim 1814'te Londra'daki Meux & Co bira fabrikasında, 6,7 metre yüksekliğindeki ahşap bir mayalanma fıçısı patladı. Fışkıran sıvı başka bir kazanın vanasını yerinden kopardı ve birkaç büyük fıçı daha parçalandı.",
      "Toplamda yaklaşık 580.000 ile 1.470.000 litre arasında porter birası serbest kaldı. Bira dalgası fabrikanın arka duvarını yıktı ve hemen yanındaki St Giles adlı yoksul mahallenin evlerine doldu. Sekiz kişi hayatını kaybetti, bunların beşi aynı evde bir cenaze törenine katılanlardı.",
      "Mahkeme olayı 'kaza' olarak kayda geçirdi. Fabrika iflasın eşiğine geldi ama kaybedilen bira için ödenen vergiyi geri alarak ayakta kaldı. Bu kazadan sonra bira endüstrisi dev ahşap fıçıları yavaş yavaş bıraktı."
    ],
    kategoriler: ["olaylar", "tarih", "yemek"],
    kaynaklar: [
      { ad: "Wikipedia — London Beer Flood (kaynakçalı)", url: "https://en.wikipedia.org/wiki/London_Beer_Flood" }
    ]
  },
  {
    id: "yamaguchi",
    emoji: "🕊️",
    baslik: "İki atom bombasından da sağ kurtulan adam",
    ozet: "Tsutomu Yamaguchi, Hiroşima'da bombaya yakalandı, eve döndüğü Nagasaki'de ikinciye. 93 yaşına kadar yaşadı.",
    kunye: [["Kişi", "Tsutomu Yamaguchi (1916–2010)"], ["Hiroşima", "6 Ağustos 1945, 08:15"], ["Nagasaki", "9 Ağustos 1945"], ["Resmî tanınma", "24 Mart 2009"]],
    paragraflar: [
      "Tsutomu Yamaguchi, Mitsubishi'de çalışan bir gemi mühendisiydi ve Nagasaki'de yaşıyordu. 6 Ağustos 1945'te iş için Hiroşima'daydı. Sabah 08:15'te atom bombası şehrin üzerinde patladığında yaralandı, kulak zarı patladı ve vücudunun bir kısmı yandı.",
      "Ertesi gün evine, Nagasaki'ye döndü. Yaralarına rağmen 9 Ağustos'ta işe gitti. Amirine bir bombanın koca bir şehri nasıl yok ettiğini anlatırken, amiri ona 'deli' olduğunu söylüyordu. Tam o sırada Nagasaki'ye ikinci atom bombası düştü. Yamaguchi bu patlamadan da sağ kurtuldu.",
      "İki bombadan da etkilenen en az 160 kişi olduğu biliniyor, ancak Japon hükümeti tarafından resmî olarak 'iki kez hayatta kalan' kabul edilen tek kişi Yamaguchi'dir. Bu tanınma 2009'da geldi. Hayatının son yıllarında nükleer silahlara karşı konuşmalar yaptı ve 2010'da 93 yaşında öldü."
    ],
    kategoriler: ["olaylar", "tarih", "insan"],
    kaynaklar: [
      { ad: "Wikipedia — Tsutomu Yamaguchi (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Tsutomu_Yamaguchi" }
    ]
  },
  {
    id: "patlayan-balina",
    emoji: "🐋",
    baslik: "Ölü balinayı dinamitle patlattılar: Gökten balina yağdı",
    ozet: "1970'te Oregon'da 8 tonluk balinayı yarım ton dinamitle yok etmeye çalıştılar. Parçalar arabaların üstüne düştü.",
    kunye: [["Tarih", "12 Kasım 1970"], ["Yer", "Florence, Oregon, ABD"], ["Balina", "14 m, ~7,3 ton kaşalot"], ["Dinamit", "~450 kg"]],
    paragraflar: [
      "9 Kasım 1970'te Oregon'un Florence sahiline 14 metre uzunluğunda, yaklaşık 7,3 ton ağırlığında ölü bir kaşalot vurdu. Leş kokmaya başlayınca, o zamanlar plajlardan sorumlu olan Oregon Karayolları Dairesi bir karar verdi: Balinayı dinamitle küçük parçalara ayırmak. Böylece martılar ve diğer leşçil hayvanlar kalanları yiyecekti.",
      "Yaklaşık yarım ton (20 kasa) dinamit kullanıldı. Patlayıcı eğitimi almış bir yerel, bunun çok fazla olduğunu ve 20 çubuğun yeteceğini söyledi ama dinlenmedi. 12 Kasım'da patlama gerçekleşti. Balina parçaları yaklaşık 240 metre uzağa kadar savruldu, binaların yakınına ve otoparklara düştü. Bir yağ parçası, sahibinin birkaç gün önce aldığı yeni bir arabayı ezdi.",
      "Üstelik balinanın büyük kısmı plajda kaldı ve işçiler onu yine elle temizlemek zorunda kaldı. Gürültüden korkan kuşlar da ortaya çıkmadı. Bir yerel TV kanalının çektiği görüntüler yıllar sonra internette yayıldı ve olay dünyaca ünlü oldu."
    ],
    kategoriler: ["olaylar", "hayvanlar", "deniz"],
    kaynaklar: [
      { ad: "Wikipedia — Exploding whale (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Exploding_whale" }
    ]
  },
  {
    id: "gulme-salgini",
    emoji: "😂",
    baslik: "Tanganika gülme salgını: 1.000 kişi kontrolsüzce güldü",
    ozet: "1962'de bir kız okulunda başlayan gülme krizleri köylere yayıldı, 14 okul kapandı.",
    kunye: [["Tarih", "30 Ocak 1962'de başladı"], ["Yer", "Kaşaşa, Tanganika (bugün Tanzanya)"], ["Etkilenen", "~1.000 kişi"], ["Süre", "~18 ay"]],
    paragraflar: [
      "30 Ocak 1962'de Victoria Gölü kıyısındaki Kaşaşa köyünde bulunan bir yatılı kız okulunda üç öğrenci kontrol edilemeyen gülme krizlerine girdi. Kısa sürede okuldaki 159 öğrenciden 95'i aynı durumu yaşadı. Krizler birkaç saatten 16 güne kadar sürüyordu. Öğretmenler ise hiç etkilenmedi.",
      "Okul Mart'ta kapatıldı. Öğrenciler evlerine dönünce 'salgın' da onlarla birlikte köylere yayıldı. Bir köyde 217 kişi, başka bir okulda 48 kız öğrenci gülme krizleri yaşadı. Belirtiler yalnızca gülme değildi: ağlama, huzursuzluk, bayılma ve nefes darlığı da görüldü. Toplamda yaklaşık 1.000 kişi etkilendi ve 14 okul kapandı.",
      "Bulaşıcı bir mikrop bulunamadı. Uzmanlar olayı, yeni bağımsızlığını kazanan ülkedeki toplumsal değişimlerin ve okul baskısının yarattığı stresle tetiklenen bir toplu psikojenik hastalık (kitlesel histeri) olarak açıklıyor. Salgın yaklaşık 18 ay sonra kendiliğinden sona erdi."
    ],
    kategoriler: ["olaylar", "insan"],
    kaynaklar: [
      { ad: "Wikipedia — Tanganyika laughter epidemic (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Tanganyika_laughter_epidemic" }
    ]
  },
  {
    id: "bassiz-tavuk",
    emoji: "🐓",
    baslik: "Başı kesildikten sonra 18 ay yaşayan tavuk: Mike",
    ozet: "1945'te başı kesilen bir horoz, beyin sapı sağlam kaldığı için bir buçuk yıl daha yaşadı.",
    kunye: [["Tarih", "Nisan 1945 – Mart 1947"], ["Yer", "Fruita, Colorado, ABD"], ["Süre", "~18 ay"], ["Neden", "Beyin sapı zarar görmemişti"]],
    paragraflar: [
      "Nisan 1945'te Colorado'daki bir çiftlikte yemek için kesilmek istenen Mike adlı horozun başı kesildi. Ancak balta beyin sapının büyük kısmını ve bir kulağını sağlam bırakmıştı. Bir kan pıhtısı da kan kaybından ölmesini engelledi.",
      "Mike yürümeye, tünemeye ve hatta öter gibi sesler çıkarmaya devam etti. Sahibi onu damlalıkla doğrudan boğazından sıvı besin ve suyla besledi. Tavuklarda nefes alma, kalp atışı ve hareket gibi temel işlevlerin çoğunu beyin sapı yönettiği için Mike hayatta kalabildi.",
      "Mike kısa sürede ABD'de ünlü oldu ve gösterilerde sergilendi. Mart 1947'de boğazına bir şey kaçınca boğularak öldü. Guinness Dünya Rekorları'nda 'başsız en uzun yaşayan tavuk' olarak geçiyor. Memleketi Fruita'da her yıl Mayıs ayında onun adına bir festival düzenleniyor."
    ],
    kategoriler: ["olaylar", "hayvanlar", "bilim"],
    kaynaklar: [
      { ad: "Wikipedia — Mike the Headless Chicken (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Mike_the_Headless_Chicken" },
      { ad: "Mike the Headless Chicken Festival (resmî site)", url: "https://www.miketheheadlesschicken.org/" }
    ]
  },

  // ───────────────────────── TUHAF BİLGİLER ─────────────────────────
  {
    id: "bal-bozulmaz",
    emoji: "🍯",
    baslik: "Bal binlerce yıl bozulmadan kalabilir",
    ozet: "Arkeologlar Mısır mezarlarında binlerce yıllık ama hâlâ yenebilir durumda bal buldu.",
    kunye: [["Neden", "Az su + asitlik + hidrojen peroksit"], ["Örnek", "Antik Mısır mezarlarındaki bal"], ["Şart", "Kapağı iyi kapalı olmalı"]],
    paragraflar: [
      "Çoğu yiyecek birkaç gün, hafta ya da ay içinde bozulur. Bal ise doğru saklandığında binlerce yıl dayanabilir. Arkeologlar antik Mısır mezarlarında binlerce yıllık bal kavanozları bulmuş, bu balların hâlâ yenebilir durumda olduğunu görmüştür.",
      "Bunun ilk sebebi balın çok az su içermesidir. Bal o kadar yoğun bir şeker çözeltisidir ki bakteri ve mantar hücrelerinin içindeki suyu dışarı çeker ve onları kurutur. İkinci sebep asitliğidir: Balın pH değeri yaklaşık 3 ile 4,5 arasındadır, bu da çoğu mikrobun yaşayamayacağı bir ortamdır.",
      "Üçüncü sebep ise arılardır. Arılar nektarı bala çevirirken glukoz oksidaz adlı bir enzim ekler. Bu enzim, balda az miktarda hidrojen peroksit, yani bir tür doğal dezenfektan oluşturur. Ancak bal havadaki nemi çekebildiği için kapağının iyi kapatılması gerekir. Yoksa zamanla nemlenip mayalanabilir."
    ],
    kategoriler: ["yemek", "tarih", "bilim"],
    kaynaklar: [
      { ad: "Smithsonian Magazine — The Science Behind Honey's Eternal Shelf Life", url: "https://www.smithsonianmag.com/science-nature/the-science-behind-honeys-eternal-shelf-life-1218690/" }
    ]
  },
  {
    id: "ahtapot-uc-kalp",
    emoji: "🐙",
    baslik: "Ahtapotların üç kalbi ve mavi kanı vardır",
    ozet: "İki kalp kanı solungaçlara, üçüncüsü vücudun geri kalanına pompalar.",
    kunye: [["Kalp sayısı", "3"], ["Kan rengi", "Mavi"], ["Oksijen taşıyıcı", "Hemosiyanin (bakır içerir)"]],
    paragraflar: [
      "Ahtapotun iki kalbi yalnızca solungaçlara kan pompalar. Böylece kan oksijen alır. Üçüncü ve en büyük kalp ise oksijenlenmiş kanı vücudun geri kalanına gönderir. İlginç bir ayrıntı: Ahtapot yüzerken bu ana kalp atmayı neredeyse bırakır. Bu yüzden ahtapotlar yüzmek yerine çoğunlukla dibe yakın sürünerek hareket eder.",
      "Bizim kanımızda oksijeni hemoglobin taşır. Hemoglobin demir içerir ve kanı kırmızı yapar. Ahtapotlarda ise bu işi hemosiyanin adlı bir protein yapar. Hemosiyanin bakır içerir ve oksijene bağlandığında kanı mavi gösterir.",
      "Hemosiyanin soğuk ve oksijeni az sularda hemoglobinden daha verimli çalışabilir. Bu da ahtapotların okyanusun derin ve soğuk bölgelerinde yaşamasına yardımcı olur."
    ],
    kategoriler: ["hayvanlar", "deniz", "bilim"],
    kaynaklar: [
      { ad: "Britannica — Octopus", url: "https://www.britannica.com/animal/octopus-mollusk" }
    ]
  },
  {
    id: "venus-gun-yil",
    emoji: "🌕",
    baslik: "Venüs'te bir gün, bir yıldan uzundur",
    ozet: "Venüs kendi etrafında 243 Dünya gününde döner, Güneş'in etrafını ise 225 günde tamamlar.",
    kunye: [["Bir dönüş (gün)", "~243 Dünya günü"], ["Bir yörünge (yıl)", "~225 Dünya günü"], ["Dönüş yönü", "Ters (geriye doğru)"]],
    paragraflar: [
      "Dünya kendi ekseni etrafında 24 saatte döner, Güneş etrafındaki turunu ise 365 günde tamamlar. Venüs'te bu ilişki tersine dönmüş gibidir. Gezegen kendi etrafında öyle yavaş döner ki bir tam dönüşü yaklaşık 243 Dünya günü sürer. Güneş etrafındaki turunu ise yaklaşık 225 günde bitirir.",
      "Venüs'ün bir başka tuhaflığı ters yönde dönmesidir. Güneş sistemindeki gezegenlerin çoğu aynı yönde dönerken Venüs geriye doğru döner. Bu yüzden Venüs'te Güneş batıdan doğar ve doğudan batar.",
      "Venüs aynı zamanda Güneş sisteminin en sıcak gezegenidir. Güneş'e daha yakın olan Merkür'den bile sıcaktır. Bunun sebebi, kalın karbondioksit atmosferinin aşırı güçlü bir sera etkisi yaratmasıdır."
    ],
    kategoriler: ["uzay"],
    kaynaklar: [
      { ad: "NASA Science — Venus Facts", url: "https://science.nasa.gov/venus/venus-facts/" }
    ]
  },
  {
    id: "muz-radyoaktif",
    emoji: "🍌",
    baslik: "Muz hafif radyoaktiftir",
    ozet: "Muzdaki potasyumun çok küçük bir kısmı doğal radyoaktif izotop potasyum-40'tır.",
    kunye: [["Kaynak", "Potasyum-40 izotopu"], ["Tehlike", "Yok, zararsız düzeyde"], ["İlginç birim", "'Muz eşdeğeri doz'"]],
    paragraflar: [
      "Muz potasyum açısından zengindir. Doğadaki potasyumun çok küçük bir kısmı (yaklaşık %0,012'si) potasyum-40 adlı radyoaktif bir izotoptur. Bu yüzden muz, aslında tüm potasyumlu yiyecekler gibi, çok hafif radyoaktiftir.",
      "Bu durum tamamen zararsızdır. Vücudumuz potasyum miktarını sabit bir düzeyde tutar, fazlasını atar. Yani muz yemek vücudumuzdaki radyoaktivitenin kalıcı olarak artmasına yol açmaz. Kendi vücudumuzda da zaten doğal olarak potasyum-40 bulunur.",
      "Bilim insanları, radyasyonun ne kadar küçük olduğunu halka anlatmak için yarı şaka bir ölçü kullanır: 'muz eşdeğeri doz'. Örneğin bazı küçük dozlar 'şu kadar muz yemeye eşdeğer' diye anlatılır."
    ],
    kategoriler: ["yemek", "bilim"],
    kaynaklar: [
      { ad: "Wikipedia — Banana equivalent dose (kaynakçalı)", url: "https://en.wikipedia.org/wiki/Banana_equivalent_dose" },
      { ad: "Britannica — Potassium-40", url: "https://www.britannica.com/science/potassium-40" }
    ]
  },
  {
    id: "wombat-kup",
    emoji: "🧊",
    baslik: "Vombatların dışkısı küp şeklindedir",
    ozet: "Avustralya'da yaşayan vombatlar, küp şeklinde dışkı üreten bilinen tek hayvandır.",
    kunye: [["Hayvan", "Vombat (Avustralya)"], ["Neden", "Bağırsağın farklı sertlikteki bölgeleri"], ["Çalışma", "Soft Matter dergisi, 2021"]],
    paragraflar: [
      "Vombatlar Avustralya'da yaşayan, toprak altında yuva kazan, tıknaz keseli hayvanlardır. En ünlü özellikleri dışkılarının küp şeklinde olmasıdır. Bir vombat her gece 80-100 kadar küp bırakabilir.",
      "Bilim insanları uzun süre bunun nasıl olduğunu merak etti. 2021'de yayımlanan bir çalışma cevabı buldu. Vombat bağırsağının bazı bölgeleri daha sert, bazı bölgeleri daha esnek. Bağırsak kasıldıkça bu farklı sertlikteki bölgeler dışkıyı farklı hızlarda sıkıştırıyor ve köşeler oluşuyor. Dışkı ayrıca bağırsakta çok uzun süre kalıp kuruduğu için şeklini koruyor.",
      "Vombatlar bu küpleri kayaların ve kütüklerin üstüne bırakarak bölgelerini işaretler. Küp şekli, dışkının yuvarlanıp düşmesini zorlaştırır."
    ],
    kategoriler: ["hayvanlar", "bilim"],
    kaynaklar: [
      { ad: "Yang vd. (2021), Soft Matter — hakemli makale", url: "https://doi.org/10.1039/D0SM01230K" }
    ]
  },
  {
    id: "kleopatra-ay",
    emoji: "👑",
    baslik: "Kleopatra, Ay'a inişe piramitlerden daha yakın yaşadı",
    ozet: "Büyük Piramit MÖ ~2560'ta yapıldı, Kleopatra MÖ 69–30'da yaşadı, Ay'a iniş 1969'da oldu.",
    kunye: [["Büyük Piramit", "MÖ ~2560"], ["Kleopatra", "MÖ 69 – MÖ 30"], ["Ay'a iniş", "1969"]],
    paragraflar: [
      "Antik Mısır deyince aklımıza hem piramitler hem Kleopatra gelir. Bu yüzden onları aynı döneme ait sanırız. Oysa aralarında çok büyük bir zaman farkı vardır.",
      "Giza'daki Büyük Piramit, firavun Keops (Khufu) için yaklaşık MÖ 2560'ta inşa edildi. Kleopatra ise MÖ 69 ile MÖ 30 arasında yaşadı. Yani piramit ile Kleopatra arasında yaklaşık 2.500 yıl var. Kleopatra'dan Apollo 11'in Ay'a inişine (1969) ise yaklaşık 2.000 yıl geçti.",
      "Yani Kleopatra için piramitler, bizim için Roma kalıntıları ne kadar eskiyse ondan da eski, 'antik' yapılardı. Üstelik Kleopatra Mısırlı değil, Büyük İskender'in generallerinden birinin soyundan gelen Yunan kökenli Ptolemaios hanedanındandı."
    ],
    kategoriler: ["tarih"],
    kaynaklar: [
      { ad: "Britannica — Cleopatra", url: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt" },
      { ad: "Britannica — Pyramids of Giza", url: "https://www.britannica.com/topic/Pyramids-of-Giza" }
    ]
  },
  {
    id: "oxford-aztek",
    emoji: "🎓",
    baslik: "Oxford Üniversitesi, Aztek başkentinden daha eskidir",
    ozet: "Oxford'da eğitim 1096'da başladı, Aztek başkenti Tenochtitlan ise 1325 civarında kuruldu.",
    kunye: [["Oxford'da eğitim", "1096"], ["Tenochtitlan", "~1325"], ["Fark", "~230 yıl"]],
    paragraflar: [
      "Aztekler deyince aklımıza çok eski, gizemli bir medeniyet gelir. Oxford Üniversitesi ise bugün hâlâ öğrenci alan modern bir okuldur. Ama tarih sıralaması beklediğimizin tersidir.",
      "Oxford'da öğretimin 1096'da başladığı biliniyor. Bu, onu İngilizce konuşulan dünyanın en eski üniversitesi yapar. Aztek İmparatorluğu'nun başkenti Tenochtitlan ise bugünkü Meksiko şehrinin bulunduğu yerde, bir göl adası üzerinde yaklaşık 1325'te kuruldu.",
      "Yani Oxford'da dersler başladığında Tenochtitlan henüz yoktu. Şehir kurulduğunda Oxford iki yüzyıldan fazla süredir eğitim veriyordu. Tenochtitlan 1521'de İspanyollar tarafından ele geçirildiğinde ise Oxford 400 yaşını geçmişti."
    ],
    kategoriler: ["tarih"],
    kaynaklar: [
      { ad: "University of Oxford — History", url: "https://www.ox.ac.uk/about/organisation/history" },
      { ad: "Britannica — Tenochtitlán", url: "https://www.britannica.com/place/Tenochtitlan" }
    ]
  },
  {
    id: "kopekbaligi-agac",
    emoji: "🦈",
    baslik: "Köpekbalıkları ağaçlardan daha eskidir",
    ozet: "Köpekbalıkları 400 milyon yıldan uzun süredir var. İlk ağaçlar ise yaklaşık 385 milyon yıl önce ortaya çıktı.",
    kunye: [["Köpekbalıkları", "~400+ milyon yıl"], ["İlk ağaçlar", "~385 milyon yıl"], ["Dinozorlar", "~230 milyon yıl"]],
    paragraflar: [
      "Köpekbalıklarının bilinen en eski izleri (pulları ve dişleri) 400 milyon yılın da ötesine uzanıyor. Bu hayvanlar o zamandan bu yana dinozorları da silen büyük yok oluşlar dahil, birçok kitlesel yok oluşu atlatmayı başardı.",
      "Karada ise o dönemde bugünkü anlamda ağaçlar yoktu. Archaeopteris gibi ilk gerçek ağaçlar ve ilk ormanlar yaklaşık 385 milyon yıl önce, Devoniyen döneminde ortaya çıktı. Yani köpekbalıkları denizlerde yüzerken karalar hâlâ alçak bitkilerle kaplıydı.",
      "Karşılaştırma için: İlk dinozorlar yaklaşık 230 milyon yıl önce ortaya çıktı. Köpekbalıkları dinozorlardan 150 milyon yıldan daha uzun süre önce okyanuslardaydı ve onların yok oluşundan sonra da varlığını sürdürdü."
    ],
    kategoriler: ["hayvanlar", "deniz", "doga"],
    kaynaklar: [
      { ad: "Smithsonian Ocean — Sharks", url: "https://ocean.si.edu/ocean-life/sharks-rays/sharks" },
      { ad: "Britannica — Archaeopteris (ilk ağaçlardan)", url: "https://www.britannica.com/plant/Archaeopteris" }
    ]
  },
  {
    id: "eyfel-uzar",
    emoji: "🗼",
    baslik: "Eyfel Kulesi yazın uzar",
    ozet: "Demir sıcakta genleştiği için kulenin boyu mevsime göre 15 cm'ye kadar değişebilir.",
    kunye: [["Yükseklik", "~330 m"], ["Malzeme", "Puddle demiri, ~7.300 ton"], ["Boy değişimi", "15 cm'ye kadar"]],
    paragraflar: [
      "Metaller ısındığında genleşir, soğuduğunda büzülür. Buna ısıl genleşme denir. Demir yollarında raylar arasında boşluk bırakılmasının ve köprülerde genleşme derzleri olmasının sebebi budur.",
      "Eyfel Kulesi'nin iskeleti yaklaşık 7.300 ton demirden oluşur. Yaz sıcağında bu demir genleşir ve kulenin boyu birkaç santimetre artar. Kışın soğukta ise kısalır. Kulenin resmî kaynaklarına göre bu fark 15 cm'ye kadar çıkabilir.",
      "Güneş kulenin yalnızca bir yüzünü ısıttığında o taraf daha çok genleşir. Bu yüzden kulenin tepesi Güneş'in tersi yönüne doğru birkaç santimetre eğilir ve gün boyunca Güneş'le birlikte yavaşça 'döner'."
    ],
    kategoriler: ["bilim", "tarih"],
    kaynaklar: [
      { ad: "La Tour Eiffel (resmî site) — Key figures", url: "https://www.toureiffel.paris/en/the-monument/key-figures" }
    ]
  },
  {
    id: "bulut-agirlik",
    emoji: "☁️",
    baslik: "Kabarık bir bulut yüzlerce ton ağırlığındadır",
    ozet: "Ortalama bir kümülüs bulutundaki su yaklaşık 500 ton gelir.",
    kunye: [["Bulut türü", "Kümülüs (pamuk bulut)"], ["Tahmini ağırlık", "~500 ton"], ["Hesap kaynağı", "USGS"]],
    paragraflar: [
      "Bulutlar havada süzüldüğü için hafif görünür. Oysa bir bulut, havada asılı duran milyarlarca minicik su damlacığından ve buz kristalinden oluşur. Bunların toplam ağırlığı ise çok büyüktür.",
      "ABD Jeoloji Araştırmaları Kurumu'nun (USGS) hesabına göre yaklaşık 1 km³ hacmindeki ortalama bir kümülüs bulutu yaklaşık 500 ton su içerir.",
      "Peki neden düşmez? Çünkü her damlacık bir saç telinden çok daha incedir. Bu damlacıklar çok geniş bir alana dağılmıştır ve yükselen sıcak hava akımları onları taşıyabilir. Damlacıklar birleşip büyüdüğünde ise artık taşınamaz ve yağmur olarak düşer."
    ],
    kategoriler: ["doga", "bilim"],
    kaynaklar: [
      { ad: "USGS Water Science School — How much does a cloud weigh?", url: "https://www.usgs.gov/water-science-school/science/how-much-does-a-cloud-weigh" }
    ]
  },
  {
    id: "flamingo-pembe",
    emoji: "🦩",
    baslik: "Flamingolar pembe doğmaz",
    ozet: "Yavrular gri-beyazdır. Pembe renk yedikleri alg ve karideslerden gelir.",
    kunye: [["Yavru rengi", "Gri / beyaz"], ["Renk kaynağı", "Karotenoid boyalar"], ["Besin", "Alg, karides, küçük kabuklular"]],
    paragraflar: [
      "Flamingo yavruları yumurtadan gri ya da beyazımsı tüylerle çıkar. Ünlü pembe renk ancak zamanla, beslenmeye bağlı olarak ortaya çıkar.",
      "Flamingoların yediği algler, tuzlu su karidesleri ve küçük kabuklular karotenoid denen doğal boyalar içerir. Bunlar havuca turuncu rengini veren boyalarla aynı ailedendir. Flamingonun vücudu bu boyaları sindirir ve tüylerinde, derisinde biriktirir.",
      "Bu yüzden bir flamingonun ne kadar pembe olduğu, ne yediğine bağlıdır. Hayvanat bahçelerinde bu boyaları içeren özel yemlerle beslenmeyen flamingolar zamanla soluklaşır."
    ],
    kategoriler: ["hayvanlar", "yemek", "doga"],
    kaynaklar: [
      { ad: "National Geographic — Flamingos", url: "https://www.nationalgeographic.com/animals/birds/facts/flamingos" }
    ]
  },
  {
    id: "muz-berry",
    emoji: "🍓",
    baslik: "Botanik olarak muz bir üzümsü meyvedir, çilek değildir",
    ozet: "Bilimsel tanıma göre muz, domates ve üzüm 'berry'dir, çilek ise değildir.",
    kunye: [["Berry olanlar", "Muz, üzüm, domates, kivi"], ["Olmayan", "Çilek, ahududu"], ["Ölçüt", "Tek çiçeğin tek yumurtalığı"]],
    paragraflar: [
      "Günlük dilde 'berry' (üzümsü meyve) dediğimizde çilek, ahududu, böğürtlen gibi küçük meyveler aklımıza gelir. Botanikçilerin tanımı ise çok farklıdır.",
      "Botanikte berry, tek bir çiçeğin tek bir yumurtalığından gelişen ve tohumları etli kısmın içinde bulunan meyvedir. Bu tanıma göre muz, üzüm, domates, kivi, hatta patlıcan berry sayılır.",
      "Çilek ise bu tanıma uymaz. Çileğin üstündeki küçük 'tohum' sandığımız noktaların her biri aslında ayrı birer küçük meyvedir. Yediğimiz kırmızı etli kısım ise yumurtalıktan değil, çiçeğin tablasından gelişir. Bu yüzden çileğe botanikte 'yalancı meyve' denir."
    ],
    kategoriler: ["yemek", "doga"],
    kaynaklar: [
      { ad: "Britannica — Berry (plant reproductive body)", url: "https://www.britannica.com/science/berry-plant-reproductive-body" }
    ]
  },
  {
    id: "notron-yildizi",
    emoji: "⭐",
    baslik: "Bir şeker küpü kadar nötron yıldızı ~1 milyar ton gelir",
    ozet: "Nötron yıldızları evrende bilinen en yoğun cisimlerden biridir.",
    kunye: [["Çap", "~20 km"], ["Kütle", "Güneş'ten fazla"], ["Şeker küpü kadarı", "~1 milyar ton"]],
    paragraflar: [
      "Güneş'ten çok daha büyük bir yıldız ömrünün sonunda süpernova olarak patlar. Bu sırada çekirdeği kendi ağırlığı altında çöker. Çöküş o kadar güçlüdür ki atomların içindeki elektronlar ve protonlar birleşerek nötronlara dönüşür.",
      "Sonuçta Güneş'ten daha ağır bir kütle, yaklaşık 20 km çapında, yani bir şehir büyüklüğünde bir küreye sıkışır. Normal maddede atomların büyük kısmı boşluktur. Nötron yıldızında bu boşluk neredeyse tamamen ortadan kalkar.",
      "NASA'ya göre bu maddeden bir şeker küpü kadarı Dünya'da yaklaşık 1 milyar ton gelirdi. Görseldeki Yengeç Bulutsusu'nun merkezinde de 1054 yılında gözlenen bir süpernovadan geriye kalan, saniyede 30 kez dönen bir nötron yıldızı bulunur."
    ],
    kategoriler: ["uzay", "bilim"],
    kaynaklar: [
      { ad: "NASA Imagine the Universe — Neutron Stars", url: "https://imagine.gsfc.nasa.gov/science/objects/neutron_stars1.html" }
    ]
  },
  {
    id: "avustralya-ay",
    emoji: "🌏",
    baslik: "Avustralya, Ay'dan daha geniştir",
    ozet: "Ay'ın çapı ~3.475 km, Avustralya'nın doğu-batı genişliği ise ~4.000 km.",
    kunye: [["Ay'ın çapı", "~3.475 km"], ["Avustralya (doğu-batı)", "~4.000 km"], ["Ama yüzey alanı", "Ay çok daha büyük"]],
    paragraflar: [
      "Gece gökyüzüne bakınca Ay oldukça büyük görünür. Ama aslında Ay, Dünya'nın yaklaşık dörtte biri büyüklüğündedir. NASA'ya göre çapı yaklaşık 3.475 km'dir.",
      "Avustralya kıtasının doğudan batıya genişliği ise yaklaşık 4.000 km'dir. Yani Ay'ı Avustralya'nın üzerine koysanız, kıtanın doğu ve batı uçları Ay'ın kenarlarından taşardı.",
      "Tabii burada bir incelik var: Ay bir küredir, Avustralya ise düz bir kara parçası. Yüzey alanını karşılaştırırsak Ay'ın yüzeyi (~38 milyon km²) Avustralya'nınkinden (~7,7 milyon km²) yaklaşık beş kat daha büyüktür."
    ],
    kategoriler: ["uzay", "doga"],
    kaynaklar: [
      { ad: "NASA Science — Moon Facts", url: "https://science.nasa.gov/moon/facts/" },
      { ad: "Geoscience Australia — Continental extremities", url: "https://www.ga.gov.au/scientific-topics/national-location-information/dimensions/continental-extremities" }
    ]
  },
  {
    id: "susamuru-el-ele",
    emoji: "🦦",
    baslik: "Deniz samurları uyurken birbirine tutunur",
    ozet: "Akıntıya kapılıp ayrılmamak için birbirlerine ya da su yosunlarına sarılırlar.",
    kunye: [["Yaşam alanı", "Kuzey Pasifik kıyıları"], ["Uyku", "Sırt üstü, su üstünde"], ["Özellik", "En yoğun kürke sahip hayvan"]],
    paragraflar: [
      "Deniz samurları hayatlarının neredeyse tamamını denizde geçirir. Uyurken de karaya çıkmazlar, sırt üstü su yüzeyinde yüzerek dinlenirler.",
      "Uyurken akıntıya kapılıp sürüklenmemek için dev su yosunlarına (kelp) sarılırlar. Gruplar hâlinde dinlenirken birbirlerine tutundukları da görülür. Bu gruplara 'sal' (raft) denir.",
      "Deniz samurlarının vücudunda bir yağ tabakası yoktur. Onları soğuk sudan dünyanın en yoğun kürkü korur: Santimetrekare başına 100.000'den fazla kıl bulunur. Ayrıca taşları alet olarak kullanıp karınlarının üstünde deniz kestanesi ve midye kırarlar."
    ],
    kategoriler: ["hayvanlar", "deniz"],
    kaynaklar: [
      { ad: "Monterey Bay Aquarium — Sea otter", url: "https://www.montereybayaquarium.org/animals/animals-a-to-z/sea-otter" }
    ]
  },
  {
    id: "mantar-hayvan",
    emoji: "🍄",
    baslik: "Mantarlar bitkilerden çok hayvanlara yakındır",
    ozet: "Genetik çalışmalar mantarlar ile hayvanların ortak bir atadan ayrıldığını gösteriyor.",
    kunye: [["Canlı âlemi", "Mantarlar (ayrı âlem)"], ["Hücre duvarı", "Kitin"], ["Fotosentez", "Yapmaz"]],
    paragraflar: [
      "Mantarlar uzun süre bitki sanıldı. Ne de olsa yerden biter, kıpırdamazlar. Ama bugün bitkilerden ayrı, kendi başına bir canlı âlemi olarak kabul ediliyorlar.",
      "Bitkiler fotosentezle kendi besinlerini üretir. Mantarlar ise üretemez. Tıpkı hayvanlar gibi besinlerini dışarıdan, başka canlılardan ya da çürüyen maddelerden alırlar. Hücre duvarları da bitkilerdeki selülozdan değil, böceklerin ve kabukluların dış iskeletinde bulunan kitinden yapılmıştır.",
      "Genetik karşılaştırmalar da bunu destekliyor. Mantarlar ve hayvanlar, evrim ağacında 'Opisthokonta' denen aynı büyük dalda yer alır. Yani bir mantar, genetik olarak bir domatesten çok size yakındır."
    ],
    kategoriler: ["doga", "bilim", "yemek"],
    kaynaklar: [
      { ad: "Britannica — Fungus", url: "https://www.britannica.com/science/fungus" }
    ]
  },
  {
    id: "tardigrad-uzay",
    emoji: "🐻",
    baslik: "Su ayıları uzay boşluğunda hayatta kaldı",
    ozet: "2007'de uzaya gönderilen tardigradların bir kısmı vakum ve radyasyona rağmen Dünya'ya canlı döndü.",
    kunye: [["Boy", "Genellikle 1 mm'den küçük"], ["Deney", "FOTON-M3, Eylül 2007"], ["Süper gücü", "Kuruyup 'askıya alınma'"]],
    paragraflar: [
      "Tardigradlar ya da su ayıları, genellikle 1 milimetreden küçük, sekiz bacaklı, tombul hayvanlardır. Yosunlarda, toprakta ve sularda yaşarlar. Mikroskop altında küçük ayılara benzedikleri için bu adı almışlardır.",
      "En büyük yetenekleri kuruduklarında vücutlarını büzüp metabolizmalarını neredeyse tamamen durdurabilmeleridir. Buna 'tun' durumu denir. Bu hâlde aşırı soğuğa, sıcağa, basınca ve radyasyona dayanabilirler.",
      "2007'de Avrupa Uzay Ajansı'nın FOTON-M3 görevinde, kurutulmuş tardigradlar uzay boşluğuna ve güneş radyasyonuna maruz bırakıldı. Dünya'ya döndüklerinde bir kısmı yeniden canlandı, hatta yumurta bırakıp üremeye devam etti. Bu, uzay boşluğunda hayatta kalabildiği gösterilen ilk hayvandı."
    ],
    kategoriler: ["hayvanlar", "uzay", "bilim"],
    kaynaklar: [
      { ad: "Jönsson vd. (2008), Current Biology — hakemli makale", url: "https://doi.org/10.1016/j.cub.2008.06.048" }
    ]
  },
  {
    id: "ay-uzaklasiyor",
    emoji: "🌙",
    baslik: "Ay her yıl Dünya'dan ~3,8 cm uzaklaşıyor",
    ozet: "Apollo astronotlarının Ay'a bıraktığı aynalara lazer atılarak ölçüldü.",
    kunye: [["Uzaklaşma", "Yılda ~3,8 cm"], ["Ölçüm", "Lazer + Ay'daki yansıtıcılar"], ["İlk yansıtıcı", "Apollo 11, 1969"]],
    paragraflar: [
      "1969'da Apollo 11 astronotları Ay yüzeyine, görselde gördüğünüz gibi bir dizi küçük ayna içeren bir yansıtıcı bıraktı. Sonraki Apollo görevleri de benzer yansıtıcılar yerleştirdi. Bunlar bugün hâlâ çalışıyor.",
      "Dünya'daki gözlemevleri bu yansıtıcılara güçlü lazer ışınları gönderir ve ışığın gidip geri dönmesinin ne kadar sürdüğünü ölçer. Işık hızı bilindiği için Ay'a olan uzaklık santimetreler hatta milimetreler düzeyinde hesaplanabilir.",
      "Bu ölçümler, Ay'ın her yıl yaklaşık 3,8 cm uzaklaştığını gösterdi. Bunun sebebi gelgitlerdir. Ay'ın çekimi Dünya'daki okyanusları kabartır. Dünya bu kabarıklıkları dönüşüyle biraz ileri taşır ve bu durum Ay'ı yörüngesinde yavaşça dışarı iter. Aynı etki Dünya'nın dönüşünü de çok çok yavaşlatıyor, yani günler uzuyor."
    ],
    kategoriler: ["uzay", "bilim"],
    kaynaklar: [
      { ad: "Lunar and Planetary Institute — Apollo 11 deneyleri (Lazer Mesafe Yansıtıcısı)", url: "https://www.lpi.usra.edu/lunar/missions/apollo/apollo_11/experiments/" },
      { ad: "NASA Science — Moon Facts", url: "https://science.nasa.gov/moon/facts/" }
    ]
  },
  {
    id: "gobeklitepe",
    emoji: "🗿",
    baslik: "Göbeklitepe, Stonehenge'den ~6.000 yıl daha eskidir",
    ozet: "Şanlıurfa'daki Göbeklitepe MÖ ~9600'lerde, Stonehenge ise MÖ ~3000'lerde yapılmaya başlandı.",
    kunye: [["Yer", "Şanlıurfa, Türkiye"], ["Yaş", "MÖ ~9600'den itibaren"], ["Stonehenge", "MÖ ~3000'den itibaren"], ["UNESCO", "2018'den beri Dünya Mirası"]],
    paragraflar: [
      "Şanlıurfa yakınlarındaki Göbeklitepe, insanların yaptığı bilinen en eski anıtsal yapılardan biridir. Burada daireler hâlinde dizilmiş, bazıları 5 metreyi aşan dev T biçimli dikilitaşlar bulunur. Taşların üzerinde tilki, yaban domuzu, yılan ve akbaba gibi hayvan kabartmaları vardır.",
      "Yapının ilk evresi yaklaşık MÖ 9600'e, yani bugünden 11.000 yıldan fazla öncesine tarihleniyor. İngiltere'deki ünlü Stonehenge ise yaklaşık MÖ 3000'de yapılmaya başlandı. Aradaki fark 6.000 yılı aşıyor. Göbeklitepe, Mısır piramitlerinden de yaklaşık 7.000 yıl daha eski.",
      "Asıl şaşırtıcı olan, Göbeklitepe'nin tarım, yazı, tekerlek ve çanak çömlek icat edilmeden önce, avcı-toplayıcılar tarafından inşa edilmiş olmasıdır. Bu durum, büyük yapıların ancak yerleşik tarım toplumlarınca yapılabileceği fikrini sarstı. Alan 2018'de UNESCO Dünya Mirası Listesi'ne girdi."
    ],
    kategoriler: ["tarih", "turkiye"],
    kaynaklar: [
      { ad: "UNESCO — Göbekli Tepe", url: "https://whc.unesco.org/en/list/1572" },
      { ad: "UNESCO — Stonehenge, Avebury and Associated Sites", url: "https://whc.unesco.org/en/list/373" }
    ]
  },
  {
    id: "catalhoyuk-cati",
    emoji: "🏠",
    baslik: "Çatalhöyük'te evlere çatıdan girilirdi",
    ozet: "9.000 yıllık bu Konya yerleşiminde sokak yoktu, evler duvar duvara bitişikti.",
    kunye: [["Yer", "Konya, Türkiye"], ["Yaş", "MÖ ~7400 – 6200"], ["Nüfus", "Binlerce kişi"], ["UNESCO", "2012'den beri Dünya Mirası"]],
    paragraflar: [
      "Konya Ovası'ndaki Çatalhöyük, yaklaşık MÖ 7400 ile 6200 arasında yerleşim görmüş, dünyanın en iyi korunmuş Neolitik (Cilalı Taş Devri) yerleşimlerinden biridir. Burada aynı anda binlerce kişi yaşıyordu.",
      "Şehrin en tuhaf özelliği sokaklarının olmamasıdır. Evler bal peteği gibi duvar duvara bitişik inşa edilmişti. İnsanlar damların üzerinde dolaşıyor, evlerine tavandaki bir açıklıktan tahta merdivenle iniyordu. Damlar aynı zamanda bir tür meydan ve sokak işlevi görüyordu.",
      "Evlerin duvarları boğa başları ve av sahneleri gibi resimlerle süslenmişti. Ölüler de çoğu zaman evlerin tabanının altına gömülüyordu. Yerleşim 2012'de UNESCO Dünya Mirası Listesi'ne alındı."
    ],
    kategoriler: ["tarih", "turkiye"],
    kaynaklar: [
      { ad: "UNESCO — Neolithic Site of Çatalhöyük", url: "https://whc.unesco.org/en/list/1405" }
    ]
  },
  {
    id: "kedi-tatli",
    emoji: "🐱",
    baslik: "Kediler tatlıyı tadamaz",
    ozet: "Tatlı tadını algılayan genlerden biri kedilerde bozulmuş, çalışmıyor.",
    kunye: [["Bozuk gen", "Tas1r2"], ["Çalışma", "PLoS Genetics, 2005"], ["Sebep", "Tamamen etçil beslenme"]],
    paragraflar: [
      "Dilimizdeki tatlı tadı algılayıcısı iki proteinin birleşmesiyle oluşur. Bunları Tas1r2 ve Tas1r3 adlı iki gen üretir. İkisinden biri eksik olursa tatlı tadı algılanamaz.",
      "2005'te yayımlanan bir çalışma, kedilerde Tas1r2 geninin bir mutasyon nedeniyle bozuk olduğunu gösterdi. Gen hâlâ DNA'da duruyor ama işe yarar bir protein üretemiyor. Bu tür bozulmuş genlere 'yalancı gen' denir. Aynı durum aslan ve kaplan gibi diğer kedigillerde de görülür.",
      "Bilim insanlarına göre kediler tamamen et yiyen hayvanlar olduğu ve şekerli besinlere ihtiyaç duymadığı için, bu gen evrim sürecinde işlevini kaybetmiş olabilir. Yani kediniz dondurmaya ilgi gösteriyorsa, bunun sebebi şeker değil, muhtemelen içindeki yağ ve protein."
    ],
    kategoriler: ["hayvanlar", "yemek", "bilim"],
    kaynaklar: [
      { ad: "Li vd. (2005), PLoS Genetics — hakemli makale", url: "https://doi.org/10.1371/journal.pgen.0010003" }
    ]
  }
];
