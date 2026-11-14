// Tuhaf Ama Gerçek — bilgi veritabanı
// Kural: Her bilginin en az 1 güvenilir kaynağı (bilim kurumu, ansiklopedi,
// hakemli makale, resmi kurum) olmak zorundadır. Bir bilgi birden fazla
// kategoriye ait olabilir (kategoriler dizisi).

const KATEGORILER = [
  { id: "hayvanlar", ad: "Hayvanlar", emoji: "🐾", renk: "#e8833a" },
  { id: "uzay",      ad: "Uzay",      emoji: "🪐", renk: "#6c5ce7" },
  { id: "tarih",     ad: "Tarih",     emoji: "🏛️", renk: "#b5838d" },
  { id: "bilim",     ad: "Bilim",     emoji: "🔬", renk: "#0984e3" },
  { id: "yemek",     ad: "Yemek",     emoji: "🍯", renk: "#e1a100" },
  { id: "doga",      ad: "Doğa",      emoji: "🌿", renk: "#2e9e5b" },
  { id: "deniz",     ad: "Deniz",     emoji: "🌊", renk: "#0aa5b5" },
  { id: "turkiye",   ad: "Türkiye",   emoji: "🧿", renk: "#d63031" }
];

const BILGILER = [
  {
    id: "bal-bozulmaz",
    emoji: "🍯",
    baslik: "Bal binlerce yıl bozulmadan kalabilir",
    ozet: "Arkeologlar Mısır mezarlarında binlerce yıllık, hâlâ yenebilir durumda bal buldu.",
    aciklama: "Bal çok az su içerir, oldukça asidiktir ve arıların eklediği bir enzim sayesinde içinde az miktarda hidrojen peroksit oluşur. Bu üç özellik bakteri ve mantarların çoğalmasını neredeyse imkânsız kılar. Kapağı iyi kapatılmış bal bu yüzden çok uzun süre bozulmaz.",
    kategoriler: ["yemek", "tarih", "bilim"],
    kaynaklar: [
      { ad: "Smithsonian Magazine — The Science Behind Honey's Eternal Shelf Life", url: "https://www.smithsonianmag.com/science-nature/the-science-behind-honeys-eternal-shelf-life-1218690/" }
    ]
  },
  {
    id: "ahtapot-uc-kalp",
    emoji: "🐙",
    baslik: "Ahtapotların üç kalbi ve mavi kanı vardır",
    ozet: "İki kalp solungaçlara, biri vücudun geri kalanına kan pompalar.",
    aciklama: "Ahtapot kanında oksijeni bizdeki gibi demir içeren hemoglobin değil, bakır içeren hemosiyanin taşır. Bakır, kanı mavi renkli yapar. Hemosiyanin soğuk ve oksijeni az sularda daha verimli çalışır.",
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
    aciklama: "Venüs kendi ekseni etrafında çok yavaş ve ters yönde döner. Bu yüzden orada Güneş batıdan doğar. Gezegen kendi etrafında bir turu tamamlamadan Güneş etrafındaki turunu bitirir.",
    kategoriler: ["uzay"],
    kaynaklar: [
      { ad: "NASA Science — Venus Facts", url: "https://science.nasa.gov/venus/venus-facts/" }
    ]
  },
  {
    id: "muz-radyoaktif",
    emoji: "🍌",
    baslik: "Muz hafif radyoaktiftir",
    ozet: "Muzdaki potasyumun küçük bir kısmı doğal radyoaktif izotop potasyum-40'tır.",
    aciklama: "Bu miktar zararsızdır. Vücudumuz potasyum dengesini sabit tuttuğu için muz yemek radyasyon dozumuzu kalıcı olarak artırmaz. Hatta bilim insanları küçük radyasyon dozlarını anlatmak için şaka yollu bir 'muz eşdeğeri doz' birimi kullanır.",
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
    ozet: "Avustralya'da yaşayan vombatlar dünyada küp şeklinde dışkı üreten bilinen tek hayvandır.",
    aciklama: "2021'de yayımlanan bir çalışma, vombat bağırsağının bazı bölgelerinin sert, bazı bölgelerinin esnek olduğunu gösterdi. Bu farklı sertlik dışkıya köşeler kazandırıyor. Vombatlar bu küpleri bölge işareti olarak kayaların ve kütüklerin üstüne bırakır, küp şekli yuvarlanmalarını önler.",
    kategoriler: ["hayvanlar", "bilim"],
    kaynaklar: [
      { ad: "Yang vd. (2021), Soft Matter — hakemli makale", url: "https://doi.org/10.1039/D0SM01230K" }
    ]
  },
  {
    id: "kleopatra-ay",
    emoji: "👑",
    baslik: "Kleopatra, Ay'a inişe piramitlerden daha yakın yaşadı",
    ozet: "Büyük Giza Piramidi MÖ ~2560'ta, Kleopatra MÖ 69–30'da yaşadı, Ay'a iniş 1969'da oldu.",
    aciklama: "Piramit ile Kleopatra arasında yaklaşık 2.500 yıl var. Kleopatra ile Apollo 11 arasında ise yaklaşık 2.000 yıl var. Yani Kleopatra için piramitler de 'antik' yapılardı.",
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
    aciklama: "Oxford'da öğretimin 1096'da başladığı biliniyor. Tenochtitlan (bugünkü Meksiko şehrinin yeri) ise bundan iki yüzyıldan fazla sonra kuruldu.",
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
    ozet: "Köpekbalıkları yaklaşık 400+ milyon yıldır var. İlk ağaçlar ise yaklaşık 385 milyon yıl önce ortaya çıktı.",
    aciklama: "Bilinen en eski köpekbalığı fosilleri ve pulları 400 milyon yılın çok ötesine uzanıyor. Ormanları oluşturan ilk gerçek ağaçlar ise Devoniyen döneminde, daha sonra ortaya çıktı. Köpekbalıkları dinozorlardan da çok daha eskidir.",
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
    aciklama: "Isınan metal genleşir (ısıl genleşme). Kulenin yaklaşık 7.300 tonluk demir iskeleti yaz sıcağında uzar, kışın kısalır. Güneş tek tarafı ısıttığında tepesi Güneş'in tersi yönüne doğru birkaç santim eğilir.",
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
    aciklama: "Bulut, havada asılı milyarlarca minik su damlacığından oluşur. Her damla çok hafif ve geniş bir alana dağılmış olduğu için yükselen sıcak hava onları taşıyabilir. Toplamda ise yüzlerce tonluk su eder.",
    kategoriler: ["doga", "bilim"],
    kaynaklar: [
      { ad: "USGS Water Science School — How much does a cloud weigh?", url: "https://www.usgs.gov/water-science-school/science/how-much-does-a-cloud-weigh" }
    ]
  },
  {
    id: "flamingo-pembe",
    emoji: "🦩",
    baslik: "Flamingolar pembe doğmaz",
    ozet: "Yavrular gri-beyazdır, pembe renk yedikleri besinlerden gelir.",
    aciklama: "Flamingoların yediği alg ve karideslerde karotenoid denen boyalar bulunur. Bu boyalar zamanla tüylerde birikir ve kuşu pembeleştirir. Böyle beslenmeyen flamingolar soluk renkli kalır.",
    kategoriler: ["hayvanlar", "yemek", "doga"],
    kaynaklar: [
      { ad: "National Geographic — Flamingos", url: "https://www.nationalgeographic.com/animals/birds/facts/flamingos" }
    ]
  },
  {
    id: "muz-berry",
    emoji: "🍓",
    baslik: "Botanik olarak muz bir 'üzümsü meyve', çilek değil",
    ozet: "Bilimsel tanıma göre muz, domates ve üzüm 'berry'dir, çilek ise değildir.",
    aciklama: "Botanikte 'berry' (üzümsü meyve), tek bir çiçeğin tek yumurtalığından gelişen, çekirdekleri etli kısmın içinde olan meyvedir. Çileğin 'tohum' sandığımız noktaları aslında ayrı ayrı küçük meyvelerdir ve etli kısım çiçek tablasından gelişir.",
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
    aciklama: "Büyük bir yıldız ölürken çekirdeği çöker. Güneş'ten daha ağır bir kütle, yaklaşık 20 km çapında bir küreye sıkışır. Atomların arasındaki boşluk ortadan kalkar ve geriye neredeyse yalnızca nötronlar kalır.",
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
    aciklama: "Ay gökyüzünde büyük görünse de çapı Avustralya kıtasının doğudan batıya genişliğinden daha kısadır. Tabii Ay bir küre, Avustralya ise düz bir kara parçası. Yüzey alanı olarak Ay yine çok daha büyüktür.",
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
    ozet: "Akıntıya kapılıp ayrılmamak için birbirlerine ya da yosunlara sarılırlar.",
    aciklama: "Deniz samurları sırt üstü yüzerek uyur. Gruplar halinde dinlenirken birbirlerine tutunabilir ya da dev su yosunlarına (kelp) sarılarak kendilerini sabitlerler.",
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
    aciklama: "Mantarlar fotosentez yapmaz, besinlerini dışarıdan alırlar. Hücre duvarları da bitkilerdeki selülozdan değil, böcek kabuklarında bulunan kitinden yapılır. Bu yüzden ayrı bir canlı âlemi sayılırlar. Evrim ağacında hayvanlarla aynı büyük dalda bulunurlar.",
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
    aciklama: "Tardigradlar (su ayıları) 1 mm'den küçük hayvanlardır. Kuruduklarında metabolizmalarını neredeyse durdurabilirler. FOTON-M3 görevinde uzay boşluğuna maruz kalan bazı tardigradlar, döndükten sonra canlanıp üremeye devam etti.",
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
    aciklama: "Dünya'daki gelgitler Ay'ı çok yavaş biçimde ileri iter. Bu yüzden Ay'ın yörüngesi her yıl biraz genişler. Bilim insanları Apollo görevlerinde Ay yüzeyine bırakılan yansıtıcılara lazer gönderip ışığın dönüş süresini ölçerek mesafeyi milimetre hassasiyetinde takip ediyor.",
    kategoriler: ["uzay", "bilim"],
    kaynaklar: [
      { ad: "Lunar and Planetary Institute — Apollo 11 deneyleri (Lazer Mesafe Yansıtıcısı)", url: "https://www.lpi.usra.edu/lunar/missions/apollo/apollo_11/experiments/" }
    ]
  },
  {
    id: "gobeklitepe",
    emoji: "🗿",
    baslik: "Göbeklitepe, Stonehenge'den ~6.000 yıl daha eskidir",
    ozet: "Şanlıurfa'daki Göbeklitepe MÖ ~9600'lerde, Stonehenge ise MÖ ~3000'lerde yapılmaya başlandı.",
    aciklama: "Göbeklitepe'deki dev T biçimli dikilitaşlar tarım ve yazı icat edilmeden önce, avcı-toplayıcılar tarafından dikildi. Bu durum, büyük yapıların ancak yerleşik tarım toplumlarınca yapılabileceği fikrini sarstı. Alan 2018'de UNESCO Dünya Mirası Listesi'ne girdi.",
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
    ozet: "9.000 yıllık bu Konya yerleşiminde sokak yoktu, evler bitişikti.",
    aciklama: "Çatalhöyük'teki evler duvar duvara bitişik inşa edilmişti. Aralarında sokak bulunmuyordu. İnsanlar damların üzerinde dolaşır, evlere tavandaki bir açıklıktan merdivenle inerdi. Burası dünyanın en iyi korunmuş Neolitik yerleşimlerinden biridir.",
    kategoriler: ["tarih", "turkiye"],
    kaynaklar: [
      { ad: "UNESCO — Neolithic Site of Çatalhöyük", url: "https://whc.unesco.org/en/list/1405" }
    ]
  },
  {
    id: "kedi-tatli",
    emoji: "🐱",
    baslik: "Kediler tatlıyı tadamaz",
    ozet: "Tatlı tadını algılayan gen kedilerde bozulmuş, çalışmıyor.",
    aciklama: "Tatlı tadı algılamak için iki gen (Tas1r2 ve Tas1r3) birlikte çalışmalıdır. 2005'teki bir çalışma, kedilerde Tas1r2 geninin bir mutasyon nedeniyle işlevsiz olduğunu gösterdi. Tamamen et yiyen bir hayvan için bu tat gereksiz olduğundan evrim sırasında kaybolmuş olabilir.",
    kategoriler: ["hayvanlar", "yemek", "bilim"],
    kaynaklar: [
      { ad: "Li vd. (2005), PLoS Genetics — hakemli makale", url: "https://doi.org/10.1371/journal.pgen.0010003" }
    ]
  }
];
