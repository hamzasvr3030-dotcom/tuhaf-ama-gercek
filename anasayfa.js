"use strict";
(function () {
  // Eski bağlantılar (#bal-bozulmaz gibi) yeni konu sayfasına yönlensin
  const eski = decodeURIComponent(location.hash.slice(1));
  if (eski && BILGILER.some(b => b.id === eski)) { location.replace(sayfaYolu(eski)); return; }

  const $ = id => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  let secili = KAT[params.get("kategori")] ? params.get("kategori") : "hepsi";
  let arama = "";

  // Vitrin: günün tuhaflığı (her gün değişir, fotoğraflı olanlardan)
  function vitrin() {
    const fotolu = BILGILER.filter(b => GORSELLER[b.id] && GORSELLER[b.id].dosya);
    const b = fotolu[Math.floor(Date.now() / 86400000) % fotolu.length];
    $("vitrin").replaceChildren(el("a", { class: "vitrin-kart", href: sayfaYolu(b.id) },
      gorselKutu(b, "vitrin-gorsel", true),
      el("div", { class: "vitrin-yazi" },
        el("span", { class: "rozet", text: "⭐ Günün tuhaflığı" }),
        el("h1", { text: b.baslik }),
        el("p", { text: b.ozet }),
        el("span", { class: "vitrin-dugme", text: "Konuyu oku →" }))));
  }

  function kategoriler() {
    const dugme = (id, ad, emoji, adet) => {
      const b = el("button", { class: `kategori${id === "hepsi" ? "" : " k-" + id}`, type: "button", "aria-pressed": String(id === secili) },
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
    $("kategoriler").replaceChildren(
      dugme("hepsi", "Hepsi", "✨", BILGILER.length),
      ...KATEGORILER.map(k => dugme(k.id, k.ad, k.emoji, BILGILER.filter(b => b.kategoriler.includes(k.id)).length)));
  }

  function liste() {
    const q = sade(arama.trim());
    return BILGILER.filter(b =>
      (secili === "hepsi" || b.kategoriler.includes(secili)) &&
      (!q || sade(tumMetin(b) + " " + b.kategoriler.map(k => KAT[k].ad).join(" ")).includes(q)));
  }

  function ciz() {
    kategoriler();
    const l = liste();
    const k = KAT[secili];
    $("liste-baslik").textContent = (k ? `${k.emoji} ${k.ad}` : "✨ Tüm konular") + ` — ${l.length}`;
    $("kartlar").replaceChildren(...(l.length ? l.map(kart) : [el("p", { class: "bos", text: "🤔 Bu aramaya uygun konu bulunamadı." })]));
  }

  $("arama").addEventListener("input", e => { arama = e.target.value; ciz(); });
  vitrin();
  ciz();
})();
