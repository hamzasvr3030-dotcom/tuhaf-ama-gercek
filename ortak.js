// Ortak yardımcılar — tüm sayfalarda kullanılır.
// Güvenlik: veriler DOM'a yalnızca textContent / setAttribute ile yazılır (innerHTML yok).
"use strict";

const KAT = Object.fromEntries(KATEGORILER.map(k => [k.id, k]));
// Konu sayfaları bilgi/ klasöründe; oradan ana dizine "../" ile çıkılır
const KOK_YOL = /\/bilgi\/[^/]*$/.test(location.pathname) ? "../" : "";

function el(tag, ozellikler = {}, ...cocuklar) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(ozellikler)) {
    if (v === undefined || v === null) continue;
    if (k === "text") e.textContent = v;
    else e.setAttribute(k, v);
  }
  cocuklar.flat(Infinity).forEach(c => c != null && e.append(c));
  return e;
}

function guvenliUrl(url) {
  try { const u = new URL(url, location.href); return u.protocol === "https:" || u.origin === location.origin ? u.href : null; }
  catch { return null; }
}

// Türkçe karakterlere duyarsız arama metni
const sade = s => s.toLocaleLowerCase("tr")
  .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
  .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");

const tumMetin = b => [b.baslik, b.ozet, ...b.bolumler.flatMap(x => [x.baslik, ...x.paragraflar]), ...(b.biliyorMuydun || [])].join(" ");
const okumaSuresi = b => Math.max(2, Math.round(b.bolumler.flatMap(x => x.paragraflar).join(" ").split(/\s+/).length / 160));
const sayfaYolu = id => `${KOK_YOL}bilgi/${encodeURIComponent(id)}.html`;
const renkSinifi = b => `r1-${b.kategoriler[0]} r2-${b.kategoriler[1] || b.kategoriler[0]}`;

function gorselKutu(b, sinif, oncelikli = false) {
  const g = (typeof GORSELLER !== "undefined") && GORSELLER[b.id];
  const kutu = el("div", { class: `${sinif} ${renkSinifi(b)}${g && g.dosya ? "" : " gorsel-yok"}` });
  if (g && g.dosya) kutu.append(el("img", { src: KOK_YOL + g.dosya, alt: oncelikli ? b.baslik : "", loading: oncelikli ? "eager" : "lazy", decoding: "async" }));
  else kutu.append(el("span", { class: "yedek-emoji", "aria-hidden": "true", text: b.emoji }));
  return kutu;
}

function etiketler(b) {
  return el("div", { class: "etiketler" }, b.kategoriler.map(id => KAT[id] && el("span", { class: `etiket k-${id}`, text: `${KAT[id].emoji} ${KAT[id].ad}` })));
}

function kart(b) {
  return el("a", { class: "kart", href: sayfaYolu(b.id) },
    gorselKutu(b, "kart-gorsel"),
    el("div", { class: "kart-govde" },
      etiketler(b),
      el("h3", { text: b.baslik }),
      el("p", { text: b.ozet }),
      el("span", { class: "kart-alt", text: `📖 ${okumaSuresi(b)} dk okuma · ✓ ${b.kaynaklar.length} kaynak` })));
}

function rastgeleGit() {
  const mevcut = (location.pathname.match(/\/bilgi\/([^/]+)\.html$/) || [])[1];
  const secenek = BILGILER.filter(b => b.id !== mevcut);
  location.href = sayfaYolu(secenek[Math.floor(Math.random() * secenek.length)].id);
}

document.querySelectorAll("[data-rastgele]").forEach(x => x.addEventListener("click", e => { e.preventDefault(); rastgeleGit(); }));
