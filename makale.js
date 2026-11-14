// Konu sayfası: okuma ilerleme çubuğu, içindekilerde aktif bölüm, bağlantı kopyalama
"use strict";
(function () {
  const cubuk = document.getElementById("ilerleme");
  const guncelle = () => {
    const h = document.documentElement;
    const oran = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
    cubuk.style.setProperty("--oran", Math.min(1, Math.max(0, oran)).toFixed(4));
  };
  addEventListener("scroll", guncelle, { passive: true });
  guncelle();

  const baglantilar = [...document.querySelectorAll(".icindekiler a")];
  const bolumler = baglantilar.map(a => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
  if ("IntersectionObserver" in window && bolumler.length) {
    const gozlem = new IntersectionObserver(girdiler => {
      girdiler.forEach(g => {
        if (!g.isIntersecting) return;
        baglantilar.forEach(a => a.classList.toggle("aktif", a.getAttribute("href") === "#" + g.target.id));
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    bolumler.forEach(b => gozlem.observe(b));
  }

  const paylas = document.getElementById("paylas");
  if (paylas) paylas.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href.split("#")[0]); paylas.textContent = "✅ Kopyalandı"; }
    catch { paylas.textContent = "Kopyalanamadı"; }
    setTimeout(() => (paylas.textContent = "🔗 Bağlantıyı kopyala"), 1800);
  });
})();
