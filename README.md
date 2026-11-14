# 🤯 Tuhaf Ama Gerçek

İnanması zor ama **her biri güvenilir kaynaklarla doğrulanmış** bilgiler.

**Site:** https://hamzasvr3030-dotcom.github.io/tuhaf-ama-gercek/

## Özellikler
- 30 bilgi: 21 tuhaf bilgi + 9 gerçek **tuhaf olay** (Boston melas seli, 1518 dans vebası, Emu Savaşı…)
- Her bilginin kendi sayfası (`bilgi.html?id=...`): kapak fotoğrafı, uzun açıklama, "Kısaca" künyesi, kaynaklar, benzer bilgiler
- Gerçek fotoğraflar: Wikimedia Commons'tan, yalnızca serbest lisanslı (kamu malı / CC). Tam liste: `gorseller.html`
- Kategoriler: Tuhaf Olaylar, Hayvanlar, Uzay, Tarih, Bilim, İnsan, Yemek, Doğa, Deniz, Türkiye
- Bir bilgi birden fazla kategoride yer alabilir (örneğin "Kediler tatlıyı tadamaz" → Hayvanlar + Yemek + Bilim)
- Arama (Türkçe karakterlere duyarsız), rastgele bilgi, "Günün tuhaflığı" vitrini, kategori bağlantıları (`index.html?kategori=olaylar`)
- Açık ve koyu tema otomatik seçilir

## Güvenilirlik kuralları
1. Her bilginin **en az bir** güvenilir kaynağı olmalı: bilim kurumu (NASA, USGS), ansiklopedi (Britannica), hakemli makale (DOI), resmî kurum (UNESCO, üniversite).
2. Rakamlar kaynakla birebir uyuşmalı. Emin olunmayan yerde "yaklaşık" denmeli.
3. Hatalı bilgiler [Issues](https://github.com/hamzasvr3030-dotcom/tuhaf-ama-gercek/issues) üzerinden bildirilir.

## Site güvenliği
- Sunucu, veritabanı ve dış betik yok. Site tamamen sabit dosyalardan oluşuyor.
- Sıkı Content-Security-Policy: yalnızca kendi dosyaları yüklenebilir.
- Veriler sayfaya `textContent` ile yazılır (XSS'e karşı). Linklerde yalnızca `https` kabul edilir ve `noopener noreferrer` kullanılır.

## Yeni bilgi ekleme
`data.js` içindeki `BILGILER` listesine yeni bir nesne ekleyin:
```js
{
  id: "benzersiz-id",
  emoji: "🦒",
  baslik: "...",
  ozet: "Kartta görünen kısa açıklama",
  kunye: [["Tarih", "..."], ["Yer", "..."]],
  paragraflar: ["1. paragraf", "2. paragraf", "3. paragraf"],
  kategoriler: ["hayvanlar", "bilim"],
  kaynaklar: [{ ad: "Kaynak adı", url: "https://..." }]
}
```

Fotoğraf eklemek için `img/<id>.jpg` dosyasını koyup `gorseller.js` içine yazar ve lisans bilgisini girin. Fotoğraf yoksa emoji ve renk geçişi gösterilir.
