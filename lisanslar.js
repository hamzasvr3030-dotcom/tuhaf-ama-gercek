"use strict";
document.getElementById("liste").append(...BILGILER.filter(b => GORSELLER[b.id]).map(b => {
  const g = GORSELLER[b.id];
  return el("li", {},
    el("img", { src: g.dosya, alt: "", loading: "lazy" }),
    el("div", {},
      el("a", { href: `bilgi.html?id=${encodeURIComponent(b.id)}`, text: b.baslik }),
      el("small", {}, `${g.yazar} · ${g.lisans} · `,
        el("a", { href: guvenliUrl(g.kaynak), target: "_blank", rel: "noopener noreferrer", text: "Commons sayfası" }))));
}));
