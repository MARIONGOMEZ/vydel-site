/* URL réelle de l’application Vydel, à brancher quand l’essai sera ouvert.
   window.VYDEL_APP_URL = "https://app.vydel.fr/";
   Ne pas poser ce href tant que les boutons restent « Bientôt disponible ». */

/* Aperçu multi-cabinet : ce flux n’est pas encore en ligne (app v1.99.1).
   La section d’accueil est déjà libellée « Bientôt ».
   true  = afficher l’aperçu (recommandé tant qu’on veut le montrer comme à venir)
   false = masquer entièrement la section #apercu-cabinets */
window.VYDEL_SHOW_MULTICAB_PREVIEW = true;

(function () {
  /* Les boutons d’essai sont désactivés (« Bientôt disponible ») :
     on ne pose plus de href. */
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
