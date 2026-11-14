# 🤯 Tuhaf Ama Gerçek

İnanması zor ama **her biri güvenilir kaynaklarla doğrulanmış** bilgiler.

**Site:** https://hamzasvr3030-dotcom.github.io/tuhaf-ama-gercek/

## Özellikler
- 30 konu: 21 tuhaf bilgi + 9 gerçek **tuhaf olay** (Boston melas seli, 1518 dans vebası, Emu Savaşı…)
- **Her konunun kendi sayfası** (`bilgi/<id>.html`): kapak fotoğrafı, içindekiler, numaralı bölümler, bölüm aralarında açıklamalı fotoğraflar, "Kısaca" künyesi, "Biliyor muydun?" kutusu, kaynaklar, önceki/sonraki konu, benzer konular
- Gerçek fotoğraflar: Wikimedia Commons'tan, yalnızca serbest lisanslı (kamu malı / CC). Tam liste: `gorseller.html`
- Kategoriler: Tuhaf Olaylar, Hayvanlar, Uzay, Tarih, Bilim, İnsan, Yemek, Doğa, Deniz, Türkiye (bir konu birden çok kategoride olabilir)
- Arama (Türkçe karakterlere duyarsız), rastgele konu, "Günün tuhaflığı" vitrini
- Açık ve koyu tema otomatik seçilir

## Güvenilirlik kuralları
1. Her bilginin **en az bir** güvenilir kaynağı olmalı: bilim kurumu (NASA, USGS), ansiklopedi (Britannica), hakemli makale (DOI), resmî kurum (UNESCO, üniversite).
2. Rakamlar kaynakla birebir uyuşmalı. Emin olunmayan yerde "yaklaşık" denmeli.
3. Hatalı bilgiler [Issues](https://github.com/hamzasvr3030-dotcom/tuhaf-ama-gercek/issues) üzerinden bildirilir.

## Site güvenliği
- Sunucu, veritabanı ve dış betik yok. Site tamamen sabit dosyalardan oluşuyor.
- Sıkı Content-Security-Policy: yalnızca kendi dosyaları yüklenebilir.
- Veriler sayfaya `textContent` ile yazılır (XSS'e karşı). Linklerde yalnızca `https` kabul edilir ve `noopener noreferrer` kullanılır.

## Yeni konu ekleme
1. `icerik/*.js` dosyalarından birine `BILGILER.push({...})` içine yeni bir nesne ekleyin:
```js
{
  id: "benzersiz-id",
  emoji: "🦒",
  baslik: "...",
  ozet: "Kartta görünen kısa açıklama",
  kunye: [["Tarih", "..."], ["Yer", "..."]],
  bolumler: [{ baslik: "Bölüm başlığı", paragraflar: ["...", "..."] }],
  biliyorMuydun: ["...", "..."],
  kategoriler: ["hayvanlar", "bilim"],
  kaynaklar: [{ ad: "Kaynak adı", url: "https://..." }]
}
```
2. Fotoğrafları `img/` ve `img/galeri/` klasörlerine koyup `gorseller.js` içine lisans bilgisiyle yazın.
3. `node build.js` çalıştırın. Konu sayfaları (`bilgi/`), renk sınıfları (`renkler.css`), sürüm ekleri ve `sitemap.xml` yeniden üretilir.
