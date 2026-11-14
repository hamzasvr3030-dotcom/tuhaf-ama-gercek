// Ortak yardımcılar — tüm sayfalarda kullanılır.
// Güvenlik: veriler DOM'a yalnızca textContent / setAttribute ile yazılır (innerHTML yok).
"use strict";

const KAT = Object.fromEntries(KATEGORILER.map(k => [k.id, k]));

function el(tag, ozellikler = {}, ...cocuklar) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(ozellikler)) {
    if (v === undefined || v === null) continue;
    if (k === "text") e.textContent = v;
    else if (k === "stil") Object.entries(v).forEach(([p, d]) => e.style.setProperty(p, d));
    else e.setAttribute(k, v);
  }
  cocuklar.flat(Infinity).forEach(c => c != null && e.append(c));
  return e;
}

function guvenliUrl(url) {
  try { const u = new URL(url, location.href); return ["https:", "http:"].includes(u.protocol) && (u.protocol === "https:" || u.host === location.host) ? u.href : null; }
  catch { return null; }
}

// Türkçe karakterlere duyarsız arama metni
const sade = s => s.toLocaleLowerCase("tr")
  .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
  .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u");

function okumaSuresi(b) {
  const kelime = b.paragraflar.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(kelime / 180));
}

function renkler(b) {
  const r1 = KAT[b.kategoriler[0]]?.renk || "#888";
  const r2 = KAT[b.kategoriler[1]]?.renk || r1;
  return { "--r1": r1, "--r2": r2 };
}

// Görsel kutusu: fotoğraf varsa <img>, yoksa renk geçişi + emoji
function gorselKutu(b, sinif, buyuk = false) {
  const g = (typeof GORSELLER !== "undefined") && GORSELLER[b.id];
  const kutu = el("div", { class: sinif + (g ? "" : " gorsel-yok"), stil: renkler(b) });
  if (g) {
    kutu.append(el("img", {
      src: g.dosya, alt: b.baslik, loading: buyuk ? "eager" : "lazy", decoding: "async"
    }));
  } else {
    kutu.append(el("span", { class: "yedek-emoji", "aria-hidden": "true", text: b.emoji }));
  }
  return kutu;
}

function etiketler(b, link = false) {
  return el("div", { class: "etiketler" }, b.kategoriler.map(id => {
    const k = KAT[id]; if (!k) return null;
    return el(link ? "a" : "span", {
      class: "etiket", stil: { "--renk": k.renk },
      href: link ? `index.html?kategori=${encodeURIComponent(id)}` : undefined,
      text: `${k.emoji} ${k.ad}`
    });
  }));
}

function kart(b) {
  return el("a", { class: "kart", href: `bilgi.html?id=${encodeURIComponent(b.id)}` },
    gorselKutu(b, "kart-gorsel"),
    el("div", { class: "kart-govde" },
      etiketler(b),
      el("h3", { text: b.baslik }),
      el("p", { text: b.ozet }),
      el("span", { class: "kart-alt", text: `📖 ${okumaSuresi(b)} dk okuma · ✓ ${b.kaynaklar.length} kaynak` })));
}

function rastgeleGit() {
  const b = BILGILER[Math.floor(Math.random() * BILGILER.length)];
  location.href = `bilgi.html?id=${encodeURIComponent(b.id)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-rastgele]").forEach(x => x.addEventListener("click", e => { e.preventDefault(); rastgeleGit(); }));
});
