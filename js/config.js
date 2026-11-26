/* URL réelle de l’application Vydel (essai de 14 jours ouvert). */
window.VYDEL_APP_URL = "https://app.vydel.fr/";
/* Boutons « Tester Vydel 14 jours » : le lien d’essai unique, le même que « Offrir un essai » dans l’appli. */
window.VYDEL_ESSAI_URL = "https://app.vydel.fr/essai";

/* Aperçu multi-cabinet : ce flux n’est pas encore en ligne (app v1.99.1).
   La section d’accueil est déjà libellée « Bientôt ».
   true  = afficher l’aperçu (recommandé tant qu’on veut le montrer comme à venir)
   false = masquer entièrement la section #apercu-cabinets */
window.VYDEL_SHOW_MULTICAB_PREVIEW = true;

(function () {
  /* Boutons « Tester Vydel 14 jours » : href depuis VYDEL_ESSAI_URL. */
  var appLinks = document.querySelectorAll("[data-vydel-app]");
  for (var i = 0; i < appLinks.length; i++) appLinks[i].setAttribute("href", window.VYDEL_ESSAI_URL);
  if (!window.VYDEL_SHOW_MULTICAB_PREVIEW) {
    var preview = document.getElementById("apercu-cabinets");
    if (preview) preview.classList.add("is-hidden");
  }
})();

(function () {
  var header = document.querySelector("body.has-cover .site-header");
  var cover = document.querySelector(".cover");
  if (!header || !cover) return;
  var sync = function () {
    var threshold = Math.max(cover.offsetHeight - header.offsetHeight, 1);
    header.classList.toggle("is-scrolled", window.scrollY >= threshold);
  };
  sync();
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
})();
