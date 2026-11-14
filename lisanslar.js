"use strict";
document.getElementById("liste").append(...BILGILER.flatMap(b => {
  const g = GORSELLER[b.id];
  if (!g) return [];
  const hepsi = [g.dosya ? { ...g, aciklama: "Kapak görseli" } : null, ...(g.galeri || [])].filter(Boolean);
  return hepsi.map(f => el("li", {},
    el("img", { src: f.dosya, alt: "", loading: "lazy" }),
    el("div", {},
      el("a", { href: sayfaYolu(b.id), text: b.baslik }),
      el("small", { text: f.aciklama }),
      el("small", {}, `${f.yazar} · ${f.lisans} · `,
        el("a", { href: guvenliUrl(f.kaynak), target: "_blank", rel: "noopener noreferrer", text: "Commons sayfası" })))));
}));
