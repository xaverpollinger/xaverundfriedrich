(function () {
  var card = document.querySelector(".home-card");
  var hint = document.querySelector(".home-scroll-hint");
  if (!card) return;

  // Klick auf Scroll-Hint: smooth zum nächsten Viewport scrollen
  if (hint) {
    hint.style.cursor = "pointer";
    hint.addEventListener("click", function () {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    });
  }

  function update() {
    var scrollY    = window.scrollY;
    var viewH      = window.innerHeight;
    // Progress: 0 (oben) → 1 (nach einem Viewport gescrollt)
    var progress   = Math.min(Math.max(scrollY / viewH, 0), 1);
    // translateY: 100% (versteckt) → 0% (vollständig sichtbar)
    var translateY = (1 - progress) * 100;
    card.style.transform = "translateY(" + translateY + "%)";

    // Scroll-Hint ausblenden sobald man anfängt zu scrollen
    if (hint) {
      if (scrollY > 20) {
        hint.classList.add("is-hidden");
      } else {
        hint.classList.remove("is-hidden");
      }
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  update(); // Initialzustand setzen
})();
