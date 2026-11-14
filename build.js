// Statik site üretici: her bilgi için bilgi/<id>.html sayfası oluşturur,
// tüm sayfalardaki CSS/JS bağlantılarına sürüm eki (?v=...) koyar.
// Kullanım:  node build.js
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const KOK = __dirname;
const ICERIK = ["olaylar", "doga-bilim", "uzay-tarih"].map(f => `icerik/${f}.js`);
let kod = fs.readFileSync(path.join(KOK, "data.js"), "utf8");
for (const f of ICERIK) kod += "\n" + fs.readFileSync(path.join(KOK, f), "utf8");
kod += "\n" + fs.readFileSync(path.join(KOK, "gorseller.js"), "utf8");
const { KATEGORILER, BILGILER, GORSELLER } = new Function(kod + "\nreturn { KATEGORILER, BILGILER, GORSELLER };")();
const KAT = Object.fromEntries(KATEGORILER.map(k => [k.id, k]));

// --- Sürüm eki: varlık dosyalarının içeriğinden ---
// Kategori renk sınıfları (CSP inline style yasakladığı için)
fs.writeFileSync(path.join(KOK, "renkler.css"), "/* build.js üretir */" + String.fromCharCode(10) + KATEGORILER.map(k => `.k-${k.id}{--renk:${k.renk}}.r1-${k.id}{--r1:${k.renk}}.r2-${k.id}{--r2:${k.renk}}`).join(String.fromCharCode(10)) + String.fromCharCode(10));
const VARLIKLAR = ["style.css", "renkler.css", "data.js", ...ICERIK, "gorseller.js", "ortak.js", "anasayfa.js", "makale.js", "lisanslar.js"];
const surum = crypto.createHash("sha1").update(VARLIKLAR.map(f => fs.readFileSync(path.join(KOK, f))).join("")).digest("hex").slice(0, 8);
const v = f => `${f}?v=${surum}`;

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const httpsMi = u => /^https:\/\//.test(u);
const kelime = b => b.bolumler.flatMap(x => x.paragraflar).join(" ").split(/\s+/).length;
const okuma = b => Math.max(2, Math.round(kelime(b) / 160));
const slug = s => s.toLocaleLowerCase("tr").replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const renk = b => `r1-${b.kategoriler[0]} r2-${b.kategoriler[1] || b.kategoriler[0]}`;

const CSP = `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'`;
const IKON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%A4%AF%3C/text%3E%3C/svg%3E`;

function bas(baslik, aciklama, ust) {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="Content-Security-Policy" content="${CSP}">
  <meta name="referrer" content="no-referrer">
  <title>${esc(baslik)}</title>
  <meta name="description" content="${esc(aciklama)}">
  <link rel="icon" href="${IKON}">
  <link rel="stylesheet" href="${ust}${v("style.css")}">
  <link rel="stylesheet" href="${ust}${v("renkler.css")}">
</head>
<body>
  <div class="ilerleme" id="ilerleme" aria-hidden="true"></div>
  <header class="ust-bar">
    <a class="logo" href="${ust}index.html">🤯 Tuhaf <span>Ama</span> Gerçek</a>
    <nav>
      <a class="ev" href="${ust}index.html">🏠 Ana sayfa</a>
      <a href="${ust}index.html?kategori=olaylar">🌀<span class="uzun"> Tuhaf</span> Olaylar</a>
      <a href="#" data-rastgele>🎲 Rastgele</a>
    </nav>
  </header>`;
}
function son(ust, betikler) {
  return `
  <footer class="alt">
    <p>Her bilgi en az bir güvenilir kaynağa dayanır (bilim kurumu, ansiklopedi, hakemli makale, resmî kurum).</p>
    <p><a href="${ust}gorseller.html">Görsel lisansları</a> · <a href="https://github.com/hamzasvr3030-dotcom/tuhaf-ama-gercek/issues" target="_blank" rel="noopener noreferrer">Hata bildir</a></p>
  </footer>
${betikler.map(b => `  <script src="${ust}${v(b)}"></script>`).join("\n")}
</body>
</html>
`;
}

function figur(g, ust, sinif = "") {
  return `<figure class="figur ${sinif}">
          <img src="${ust}${g.dosya}" alt="${esc(g.aciklama)}" loading="lazy" decoding="async">
          <figcaption>${esc(g.aciklama)} <span class="kredi">📷 ${esc(g.yazar)} · ${esc(g.lisans)}</span></figcaption>
        </figure>`;
}

function kartHtml(b, ust) {
  const g = GORSELLER[b.id];
  const gorsel = g ? `<img src="${ust}${g.dosya}" alt="" loading="lazy" decoding="async">` : `<span class="yedek-emoji" aria-hidden="true">${b.emoji}</span>`;
  return `<a class="kart" href="${ust}bilgi/${b.id}.html">
          <div class="kart-gorsel ${renk(b)}${g ? "" : " gorsel-yok"}">${gorsel}</div>
          <div class="kart-govde">
            <div class="etiketler">${b.kategoriler.map(k => `<span class="etiket k-${k}">${KAT[k].emoji} ${esc(KAT[k].ad)}</span>`).join("")}</div>
            <h3>${esc(b.baslik)}</h3>
            <p>${esc(b.ozet)}</p>
            <span class="kart-alt">📖 ${okuma(b)} dk okuma · ✓ ${b.kaynaklar.length} kaynak</span>
          </div>
        </a>`;
}

function makale(b, i) {
  const ust = "../";
  const g = GORSELLER[b.id] || {};
  const galeri = g.galeri || [];
  const onceki = BILGILER[(i - 1 + BILGILER.length) % BILGILER.length];
  const sonraki = BILGILER[(i + 1) % BILGILER.length];
  const benzer = BILGILER.filter(x => x.id !== b.id)
    .map(x => [x, x.kategoriler.filter(k => b.kategoriler.includes(k)).length])
    .filter(([, n]) => n > 0).sort((a, c) => c[1] - a[1]).slice(0, 3).map(([x]) => x);

  // Galeri görsellerini bölümlerin arasına dağıt
  const yerles = {};
  galeri.forEach((gr, n) => {
    const hedef = Math.min(b.bolumler.length - 1, Math.round((n + 1) * b.bolumler.length / (galeri.length + 1)) - 1 + (n === 0 ? 0 : 0));
    (yerles[Math.max(0, hedef)] ||= []).push(gr);
  });

  const bolumIdleri = b.bolumler.map(x => slug(x.baslik));
  const icindekiler = [
    ...b.bolumler.map((x, n) => [bolumIdleri[n], x.baslik]),
    b.biliyorMuydun ? ["biliyor-muydun", "💡 Biliyor muydun?"] : null,
    ["kaynaklar", "✅ Kaynaklar"]
  ].filter(Boolean);

  const kapak = g.dosya
    ? `<img src="${ust}${g.dosya}" alt="${esc(b.baslik)}" fetchpriority="high">`
    : `<span class="yedek-emoji" aria-hidden="true">${b.emoji}</span>`;

  const metin = b.bolumler.map((x, n) => `
        <section class="bolum" id="${bolumIdleri[n]}">
          <h2><span class="bolum-no">${n + 1}</span>${esc(x.baslik)}</h2>
          ${x.paragraflar.map((p, k) => `<p${n === 0 && k === 0 && /^\p{L}/u.test(p) ? ' class="giris"' : ""}>${esc(p)}</p>`).join("\n          ")}
        </section>
        ${(yerles[n] || []).map(gr => figur(gr, ust)).join("\n")}`).join("");

  const kaynaklar = b.kaynaklar.map(k => `<li>${httpsMi(k.url) ? `<a href="${esc(k.url)}" target="_blank" rel="noopener noreferrer">${esc(k.ad)}</a>` : esc(k.ad)}</li>`).join("\n            ");
  const fotolar = [g.dosya ? { ...g, aciklama: "Kapak" } : null, ...galeri].filter(Boolean)
    .map(f => `<li>${esc(f.aciklama.split(".")[0])}: ${esc(f.yazar)} · ${esc(f.lisans)} · <a href="${esc(f.kaynak)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></li>`).join("\n            ");

  return bas(`${b.baslik} — Tuhaf Ama Gerçek`, b.ozet, ust) + `
  <main class="makale-sayfa">
    <nav class="kirinti" aria-label="Konum">
      <a href="${ust}index.html">Ana sayfa</a> ›
      <a href="${ust}index.html?kategori=${b.kategoriler[0]}">${esc(KAT[b.kategoriler[0]].ad)}</a> ›
      <span>${esc(b.baslik)}</span>
    </nav>

    <header class="kapak">
      <div class="kapak-gorsel ${renk(b)}${g.dosya ? "" : " gorsel-yok"}">${kapak}</div>
      <div class="kapak-yazi">
        <div class="etiketler">${b.kategoriler.map(k => `<a class="etiket k-${k}" href="${ust}index.html?kategori=${k}">${KAT[k].emoji} ${esc(KAT[k].ad)}</a>`).join("")}</div>
        <h1>${esc(b.baslik)}</h1>
        <p class="kapak-ozet">${esc(b.ozet)}</p>
        <span class="kapak-meta">📖 ${okuma(b)} dk okuma · 📑 ${b.bolumler.length} bölüm · 📷 ${galeri.length + (g.dosya ? 1 : 0)} görsel · ✓ ${b.kaynaklar.length} kaynak</span>
      </div>
    </header>

    <div class="makale-izgara">
      <aside class="yan">
        <div class="yan-yapiskan">
          <nav class="icindekiler" aria-label="İçindekiler">
            <h2>📑 İçindekiler</h2>
            <ol>
              ${icindekiler.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join("\n              ")}
            </ol>
          </nav>
          <div class="kunye">
            <h2>${b.emoji} Kısaca</h2>
            <dl>
              ${b.kunye.map(([e, d]) => `<dt>${esc(e)}</dt><dd>${esc(d)}</dd>`).join("\n              ")}
            </dl>
          </div>
        </div>
      </aside>

      <article class="metin">${metin}
        ${b.biliyorMuydun ? `<section class="biliyor" id="biliyor-muydun">
          <h2>💡 Biliyor muydun?</h2>
          <ul>
            ${b.biliyorMuydun.map(x => `<li>${esc(x)}</li>`).join("\n            ")}
          </ul>
        </section>` : ""}

        <section class="kaynaklar" id="kaynaklar">
          <h2>✅ Kaynaklar</h2>
          <ol>
            ${kaynaklar}
          </ol>
          ${fotolar ? `<h3>📷 Görseller</h3>
          <ul class="foto-liste">
            ${fotolar}
          </ul>` : ""}
        </section>
        <button class="dugme ikincil" type="button" id="paylas">🔗 Bağlantıyı kopyala</button>
      </article>
    </div>

    <nav class="gezinti" aria-label="Önceki ve sonraki konu">
      <a href="${onceki.id}.html"><small>← Önceki konu</small><span>${esc(onceki.baslik)}</span></a>
      <a class="sag" href="${sonraki.id}.html"><small>Sonraki konu →</small><span>${esc(sonraki.baslik)}</span></a>
    </nav>

    ${benzer.length ? `<section class="benzer">
      <h2>Bunlar da ilgini çekebilir</h2>
      <div class="kartlar">
        ${benzer.map(x => kartHtml(x, ust)).join("\n        ")}
      </div>
    </section>` : ""}
  </main>` + son(ust, ["data.js", ...ICERIK, "gorseller.js", "ortak.js", "makale.js"]);
}

// --- Üret ---
const hedef = path.join(KOK, "bilgi");
fs.rmSync(hedef, { recursive: true, force: true });
fs.mkdirSync(hedef);
BILGILER.forEach((b, i) => fs.writeFileSync(path.join(hedef, `${b.id}.html`), makale(b, i)));

// Sabit sayfalardaki sürüm eklerini güncelle
for (const sayfa of ["index.html", "gorseller.html", "bilgi.html", "404.html"]) {
  const p = path.join(KOK, sayfa);
  if (!fs.existsSync(p)) continue;
  const s = fs.readFileSync(p, "utf8").replace(/((?:href|src)="[^"?]+\.(?:css|js))(?:\?v=[0-9a-f]+)?"/g, `$1?v=${surum}"`);
  fs.writeFileSync(p, s);
}

// Site haritası
const taban = "https://hamzasvr3030-dotcom.github.io/tuhaf-ama-gercek/";
fs.writeFileSync(path.join(KOK, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${taban}</loc></url>\n` +
  BILGILER.map(b => `  <url><loc>${taban}bilgi/${b.id}.html</loc></url>`).join("\n") + "\n</urlset>\n");

console.log(`${BILGILER.length} sayfa üretildi · sürüm ${surum}`);
