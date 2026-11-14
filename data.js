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

const BILGILER = [];
// İçerik icerik/*.js dosyalarında: BILGILER.push(...)
