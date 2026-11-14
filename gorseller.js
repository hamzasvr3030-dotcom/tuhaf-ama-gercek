// Wikimedia Commons görselleri ve lisansları (serbest lisanslı)
const GORSELLER = {
  "bal-bozulmaz": {
    "dosya": "img/bal-bozulmaz.jpg",
    "yazar": "Scott Bauer, USDA ARS",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Runny_hunny.jpg"
  },
  "ahtapot-uc-kalp": {
    "dosya": "img/ahtapot-uc-kalp.jpg",
    "yazar": "albert kok",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Octopus2.jpg"
  },
  "venus-gun-yil": {
    "dosya": "img/venus-gun-yil.jpg",
    "yazar": "NASA/JPL-Caltech",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Venus_from_Mariner_10.jpg"
  },
  "muz-radyoaktif": {
    "dosya": "img/muz-radyoaktif.jpg",
    "yazar": "TimothyPilgrim",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Bananavarieties.jpg"
  },
  "wombat-kup": {
    "dosya": "img/wombat-kup.jpg",
    "yazar": "JJ Harrison",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Vombatus_ursinus_-Maria_Island_National_Park.jpg"
  },
  "kleopatra-ay": {
    "dosya": "img/kleopatra-ay.jpg",
    "yazar": "Douwe C. van der Zee",
    "lisans": "CC BY-SA 4.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg"
  },
  "oxford-aztek": {
    "dosya": "img/oxford-aztek.jpg",
    "yazar": "Diliff",
    "lisans": "CC BY 2.5",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Radcliffe_Camera,_Oxford_-_Oct_2006.jpg"
  },
  "kopekbaligi-agac": {
    "dosya": "img/kopekbaligi-agac.jpg",
    "yazar": "Pterantula (Terry Goss) at en.wikipedia",
    "lisans": "CC BY 2.5",
    "kaynak": "https://commons.wikimedia.org/wiki/File:White_shark.jpg"
  },
  "bulut-agirlik": {
    "dosya": "img/bulut-agirlik.jpg",
    "yazar": "PiccoloNamek",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:GoldenMedows.jpg"
  },
  "flamingo-pembe": {
    "dosya": "img/flamingo-pembe.jpg",
    "yazar": "JeffreyGammon",
    "lisans": "CC BY 4.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:American_Flamingo_JG.jpg"
  },
  "muz-berry": {
    "dosya": "img/muz-berry.jpg",
    "yazar": "Ivar Leidus",
    "lisans": "CC BY-SA 4.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Garden_strawberry_(Fragaria_%C3%97_ananassa)_single2.jpg"
  },
  "notron-yildizi": {
    "dosya": "img/notron-yildizi.jpg",
    "yazar": "NASA, ESA",
    "lisans": "CC BY 4.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Moving_heart_of_the_Crab_Nebula.jpg"
  },
  "avustralya-ay": {
    "dosya": "img/avustralya-ay.jpg",
    "yazar": "Gregory H. Revera",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:FullMoon2010.jpg"
  },
  "susamuru-el-ele": {
    "dosya": "img/susamuru-el-ele.jpg",
    "yazar": "Marshal Hedin from San Diego",
    "lisans": "CC BY-SA 2.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Sea_Otter_(Enhydra_lutris)_(25169790524)_crop.jpg"
  },
  "mantar-hayvan": {
    "dosya": "img/mantar-hayvan.jpg",
    "yazar": "Kieran Roy Powell",
    "lisans": "CC BY 4.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Amanita_muscaria_Aberystwyth_2023.jpg"
  },
  "tardigrad-uzay": {
    "dosya": "img/tardigrad-uzay.jpg",
    "yazar": "Schokraie E, Warnken U, Hotz-Wagenblatt A, Grohme MA, Hengherr S, et al. (2012)",
    "lisans": "CC BY 2.5",
    "kaynak": "https://commons.wikimedia.org/wiki/File:SEM_image_of_Milnesium_tardigradum_in_active_state_-_journal.pone.0045682.g001-2_(white_background).png"
  },
  "ay-uzaklasiyor": {
    "dosya": "img/ay-uzaklasiyor.jpg",
    "yazar": "NASA",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Apollo_11_Lunar_Laser_Ranging_Experiment.jpg"
  },
  "gobeklitepe": {
    "dosya": "img/gobeklitepe.jpg",
    "yazar": "Teomancimit",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:G%C3%B6bekli_Tepe,_Urfa.jpg"
  },
  "catalhoyuk-cati": {
    "dosya": "img/catalhoyuk-cati.jpg",
    "yazar": "Murat Özsoy 1958",
    "lisans": "CC BY-SA 4.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:%C3%87atalh%C3%B6y%C3%BCk,_7400_BC,_Konya,_Turkey_-_UNESCO_World_Heritage_Site,_08.jpg"
  },
  "kedi-tatli": {
    "dosya": "img/kedi-tatli.jpg",
    "yazar": "Karin Langner-Bahmann, upload von Martin Bahmann",
    "lisans": "CC BY-SA 3.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Siam_lilacpoint.jpg"
  },
  "melas-seli": {
    "dosya": "img/melas-seli.jpg",
    "yazar": "BPL",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:BostonMolassesDisaster.jpg"
  },
  "dans-vebasi": {
    "dosya": "img/dans-vebasi.jpg",
    "yazar": "Bilinmeyen yazar",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Dancingplague2_(alt).jpg"
  },
  "emu-savasi": {
    "dosya": "img/emu-savasi.jpg",
    "yazar": "Bilinmeyen yazar",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Deceased_emu_during_Emu_War.jpg"
  },
  "tunguska": {
    "dosya": "img/tunguska.jpg",
    "yazar": "Leonid Kulik, the expedition to the Tunguska event",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Tunguska_Ereignis-1.jpg"
  },
  "bira-seli": {
    "dosya": "img/bira-seli.jpg",
    "yazar": "Bilinmeyen yazar",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Horseshoe_Brewery,_London,_c._1800.jpg"
  },
  "yamaguchi": {
    "dosya": "img/yamaguchi.jpg",
    "yazar": "George R. Caron / Charles Levy",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Atomic_bombing_of_Japan.jpg"
  },
  "patlayan-balina": {
    "dosya": "img/patlayan-balina.jpg",
    "yazar": "Gabriel Barathieu",
    "lisans": "CC BY-SA 2.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Mother_and_baby_sperm_whale.jpg"
  },
  "bassiz-tavuk": {
    "dosya": "img/bassiz-tavuk.jpg",
    "yazar": "Andrei Niemimäki from Turku, Finland",
    "lisans": "CC BY-SA 2.0",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Male_and_female_chicken_sitting_together.jpg"
  },
  "eyfel-uzar": {
    "dosya": "img/eyfel-uzar.jpg",
    "yazar": "Benh LIEU SONG",
    "lisans": "Public domain",
    "kaynak": "https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons.jpg"
  }
};
