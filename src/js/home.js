(function () {
  var card = document.querySelector(".home-card");
  if (!card) return;

  function update() {
    var scrollY    = window.scrollY;
    var viewH      = window.innerHeight;
    // Progress: 0 (oben) → 1 (nach einem Viewport gescrollt)
    var progress   = Math.min(Math.max(scrollY / viewH, 0), 1);
    // translateY: 100% (versteckt) → 0% (vollständig sichtbar)
    var translateY = (1 - progress) * 100;
    card.style.transform = "translateY(" + translateY + "%)";
  }

  window.addEventListener("scroll", update, { passive: true });
  update(); // Initialzustand setzen
})();
