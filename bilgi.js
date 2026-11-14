"use strict";
(function () {
  const kok = document.getElementById("makale");
  const id = new URLSearchParams(location.search).get("id");
  const i = BILGILER.findIndex(b => b.id === id);

  if (i < 0) {
    kok.append(el("div", { class: "bulunamadi" },
      el("h1", { text: "🤔 Bu bilgi bulunamadı" }),
      el("p", { text: "Bağlantı hatalı olabilir ya da bilgi kaldırılmış olabilir." }),
      el("a", { class: "dugme", href: "index.html", text: "← Ana sayfaya dön" })));
    return;
  }

  const b = BILGILER[i];
  const g = GORSELLER[b.id];
  document.title = `${b.baslik} — Tuhaf Ama Gerçek`;

  // Kapak
  const kapak = el("header", { class: "kapak" },
    gorselKutu(b, "kapak-gorsel", true),
    el("div", { class: "kapak-yazi" },
      el("a", { class: "geri", href: "index.html", text: "← Tüm bilgiler" }),
      etiketler(b, true),
      el("h1", { text: b.baslik }),
      el("p", { class: "kapak-ozet", text: b.ozet }),
      el("span", { class: "kapak-meta", text: `📖 ${okumaSuresi(b)} dk okuma · ✓ ${b.kaynaklar.length} doğrulanmış kaynak` })));

  // Künye (hızlı bilgiler)
  const kunye = el("aside", { class: "kunye" },
    el("h2", { text: `${b.emoji} Kısaca` }),
    el("dl", {}, (b.kunye || []).map(([e, d]) => [el("dt", { text: e }), el("dd", { text: d })])));

  // Metin
  const metin = el("article", { class: "metin" },
    b.paragraflar.map((p, n) => el("p", { class: n === 0 && /^\p{L}/u.test(p) ? "giris" : undefined, text: p })));

  // Kaynaklar
  const kaynak = el("section", { class: "kaynaklar" },
    el("h2", { text: "✅ Kaynaklar" }),
    el("ol", {}, b.kaynaklar.map(k => {
      const u = guvenliUrl(k.url);
      return el("li", {}, u ? el("a", { href: u, target: "_blank", rel: "noopener noreferrer", text: k.ad }) : k.ad);
    })),
    g ? el("p", { class: "foto-kredi" },
      "📷 Görsel: ", g.yazar, " · ", g.lisans, " · ",
      el("a", { href: guvenliUrl(g.kaynak), target: "_blank", rel: "noopener noreferrer", text: "Wikimedia Commons" })) : null);

  // Önceki / sonraki
  const onceki = BILGILER[(i - 1 + BILGILER.length) % BILGILER.length];
  const sonraki = BILGILER[(i + 1) % BILGILER.length];
  const gezinti = el("nav", { class: "gezinti", "aria-label": "Önceki ve sonraki bilgi" },
    el("a", { href: `bilgi.html?id=${encodeURIComponent(onceki.id)}` }, el("small", { text: "← Önceki" }), el("span", { text: onceki.baslik })),
    el("a", { class: "sag", href: `bilgi.html?id=${encodeURIComponent(sonraki.id)}` }, el("small", { text: "Sonraki →" }), el("span", { text: sonraki.baslik })));

  // Benzer bilgiler: ortak kategori sayısına göre
  const benzer = BILGILER.filter(x => x.id !== b.id)
    .map(x => [x, x.kategoriler.filter(k => b.kategoriler.includes(k)).length])
    .filter(([, n]) => n > 0).sort((a, c) => c[1] - a[1]).slice(0, 3).map(([x]) => x);

  // Paylaş
  const paylas = el("button", { class: "dugme ikincil", type: "button", text: "🔗 Bağlantıyı kopyala" });
  paylas.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); paylas.textContent = "✅ Kopyalandı"; }
    catch { paylas.textContent = "Kopyalanamadı"; }
    setTimeout(() => (paylas.textContent = "🔗 Bağlantıyı kopyala"), 1800);
  });

  kok.append(
    kapak,
    el("div", { class: "makale-izgara" },
      el("div", {}, metin, kaynak, el("div", { class: "eylemler" }, paylas)),
      kunye),
    gezinti,
    benzer.length ? el("section", { class: "benzer" },
      el("h2", { text: "Bunlar da ilgini çekebilir" }),
      el("div", { class: "kartlar" }, benzer.map(kart))) : null);
})();
