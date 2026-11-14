"use strict";
(function () {
  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  let secili = KAT[params.get("kategori")] ? params.get("kategori") : "hepsi";
  let arama = "";

  // Vitrin: günün tuhaflığı (her gün değişir, fotoğraflı olanlardan)
  function vitrin() {
    const fotolu = BILGILER.filter(b => GORSELLER[b.id]);
    const gun = Math.floor(Date.now() / 86400000);
    const b = fotolu[gun % fotolu.length];
    const a = el("a", { class: "vitrin-kart", href: `bilgi.html?id=${encodeURIComponent(b.id)}` },
      gorselKutu(b, "vitrin-gorsel", true),
      el("div", { class: "vitrin-yazi" },
        el("span", { class: "rozet", text: "⭐ Günün tuhaflığı" }),
        el("h1", { text: b.baslik }),
        el("p", { text: b.ozet }),
        el("span", { class: "vitrin-dugme", text: "Devamını oku →" })));
    $("vitrin").replaceChildren(a);
  }

  function kategoriler() {
    const nav = $("kategoriler");
    const dugme = (id, ad, emoji, renk, adet) => {
      const b = el("button", { class: "kategori", type: "button", "aria-pressed": String(id === secili), stil: renk ? { "--renk": renk } : {} },
        `${emoji} ${ad} `, el("span", { class: "adet", text: adet }));
      b.addEventListener("click", () => {
        secili = id;
        const u = new URL(location.href);
        id === "hepsi" ? u.searchParams.delete("kategori") : u.searchParams.set("kategori", id);
        history.replaceState(null, "", u);
        ciz();
      });
      return b;
    };
    nav.replaceChildren(
      dugme("hepsi", "Hepsi", "✨", null, BILGILER.length),
      ...KATEGORILER.map(k => dugme(k.id, k.ad, k.emoji, k.renk, BILGILER.filter(b => b.kategoriler.includes(k.id)).length)));
  }

  function liste() {
    const q = sade(arama.trim());
    return BILGILER.filter(b =>
      (secili === "hepsi" || b.kategoriler.includes(secili)) &&
      (!q || sade([b.baslik, b.ozet, ...b.paragraflar, ...b.kategoriler.map(k => KAT[k]?.ad || "")].join(" ")).includes(q)));
  }

  function ciz() {
    kategoriler();
    const l = liste();
    const k = KAT[secili];
    $("liste-baslik").textContent = (k ? `${k.emoji} ${k.ad}` : "✨ Tüm bilgiler") + ` — ${l.length}`;
    $("kartlar").replaceChildren(...(l.length ? l.map(kart) : [el("p", { class: "bos", text: "🤔 Bu aramaya uygun bilgi bulunamadı." })]));
  }

  $("arama").addEventListener("input", e => { arama = e.target.value; ciz(); });
  vitrin();
  ciz();
})();
