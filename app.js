// Tuhaf Ama Gerçek — arayüz
// Güvenlik: veriler DOM'a yalnızca textContent ile yazılır (innerHTML yok),
// kaynak linklerinde yalnızca https adreslerine izin verilir.
"use strict";

(function () {
  const katMap = Object.fromEntries(KATEGORILER.map(k => [k.id, k]));
  const $ = id => document.getElementById(id);
  let seciliKategori = "hepsi";
  let aramaMetni = "";

  function el(tag, ozellikler = {}, ...cocuklar) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(ozellikler)) {
      if (k === "style") Object.entries(v).forEach(([p, d]) => e.style.setProperty(p, d));
      else if (k === "text") e.textContent = v;
      else e.setAttribute(k, v);
    }
    cocuklar.forEach(c => e.append(c));
    return e;
  }

  // Türkçe uyumlu küçük harf + aksan sadeleştirme (arama için)
  const sade = s => s.toLocaleLowerCase("tr")
    .replace(/[çc]/g, "c").replace(/[ğg]/g, "g").replace(/[ıi]/g, "i")
    .replace(/[öo]/g, "o").replace(/[şs]/g, "s").replace(/[üu]/g, "u");

  function guvenliUrl(url) {
    try { const u = new URL(url); return u.protocol === "https:" ? u.href : null; }
    catch { return null; }
  }

  function renkler(bilgi) {
    const r1 = katMap[bilgi.kategoriler[0]]?.renk || "#888";
    const r2 = katMap[bilgi.kategoriler[1] || bilgi.kategoriler[0]]?.renk || r1;
    return { "--r1": r1, "--r2": r2 === r1 ? r1 + "99" : r2 };
  }

  function etiketler(bilgi) {
    const kutu = el("div", { class: "etiketler" });
    bilgi.kategoriler.forEach(id => {
      const k = katMap[id];
      if (k) kutu.append(el("span", { class: "etiket", style: { "--renk": k.renk }, text: `${k.emoji} ${k.ad}` }));
    });
    return kutu;
  }

  function kategoriButonlari() {
    const nav = $("kategoriler");
    const ekle = (id, ad, emoji, renk, adet) => {
      const b = el("button", { class: "kategori", type: "button", "aria-pressed": String(id === seciliKategori) });
      if (renk) b.style.setProperty("--renk", renk);
      b.append(`${emoji} ${ad}`, el("span", { class: "adet", text: `(${adet})` }));
      b.addEventListener("click", () => { seciliKategori = id; ciz(); });
      nav.append(b);
    };
    nav.replaceChildren();
    ekle("hepsi", "Hepsi", "✨", null, BILGILER.length);
    KATEGORILER.forEach(k =>
      ekle(k.id, k.ad, k.emoji, k.renk, BILGILER.filter(b => b.kategoriler.includes(k.id)).length));
  }

  function kart(bilgi) {
    const r = renkler(bilgi);
    const gorsel = el("div", { class: "kart-gorsel" },
      el("span", { text: bilgi.emoji }),
      el("span", { class: "dogrulandi", text: "✓ Kaynaklı" }));
    Object.entries(r).forEach(([k, v]) => gorsel.style.setProperty(k, v));
    const b = el("button", { class: "kart", type: "button", "aria-label": bilgi.baslik },
      gorsel,
      el("div", { class: "kart-govde" },
        etiketler(bilgi),
        el("h2", { text: bilgi.baslik }),
        el("p", { text: bilgi.ozet })));
    b.addEventListener("click", () => ac(bilgi));
    return b;
  }

  function filtrele() {
    const q = sade(aramaMetni.trim());
    return BILGILER.filter(b => {
      if (seciliKategori !== "hepsi" && !b.kategoriler.includes(seciliKategori)) return false;
      if (!q) return true;
      const metin = sade([b.baslik, b.ozet, b.aciklama, ...b.kategoriler.map(k => katMap[k]?.ad || "")].join(" "));
      return metin.includes(q);
    });
  }

  function ciz() {
    kategoriButonlari();
    const liste = filtrele();
    const kutu = $("kartlar");
    kutu.replaceChildren(...liste.map(kart));
    if (!liste.length) kutu.append(el("p", { class: "bos", text: "🤔 Bu aramaya uygun bilgi bulunamadı." }));
    $("sayac").textContent = `${liste.length} tuhaf ama gerçek bilgi`;
  }

  function ac(bilgi) {
    const ust = $("detay-ust");
    Object.entries(renkler(bilgi)).forEach(([k, v]) => ust.style.setProperty(k, v));
    $("detay-emoji").textContent = bilgi.emoji;
    $("detay-etiketler").replaceWith(Object.assign(etiketler(bilgi), { id: "detay-etiketler" }));
    $("detay-baslik").textContent = bilgi.baslik;
    $("detay-aciklama").textContent = bilgi.aciklama;
    const ul = $("detay-kaynaklar");
    ul.replaceChildren(...bilgi.kaynaklar.map(k => {
      const url = guvenliUrl(k.url);
      const li = el("li");
      li.append(url ? el("a", { href: url, target: "_blank", rel: "noopener noreferrer", text: k.ad }) : k.ad);
      return li;
    }));
    history.replaceState(null, "", "#" + bilgi.id);
    const d = $("detay");
    if (!d.open) d.showModal();
  }

  function kapat() {
    $("detay").close();
  }

  $("detay").addEventListener("close", () => history.replaceState(null, "", location.pathname + location.search));
  $("detay").addEventListener("click", e => { if (e.target === $("detay")) kapat(); });
  $("kapat").addEventListener("click", kapat);
  $("paylas").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); $("paylas").textContent = "✅ Kopyalandı"; }
    catch { $("paylas").textContent = location.href; }
    setTimeout(() => { $("paylas").textContent = "🔗 Bağlantıyı kopyala"; }, 1800);
  });
  $("arama").addEventListener("input", e => { aramaMetni = e.target.value; ciz(); });
  $("rastgele").addEventListener("click", () => {
    const liste = filtrele().length ? filtrele() : BILGILER;
    ac(liste[Math.floor(Math.random() * liste.length)]);
  });

  ciz();
  const hash = decodeURIComponent(location.hash.slice(1));
  const ilk = BILGILER.find(b => b.id === hash);
  if (ilk) ac(ilk);
})();
