// Eski bilgi.html?id=... bağlantılarını yeni konu sayfalarına yönlendirir
"use strict";
(function () {
  const id = new URLSearchParams(location.search).get("id") || "";
  location.replace(/^[a-z0-9-]+$/.test(id) ? `bilgi/${id}.html` : "index.html");
})();
