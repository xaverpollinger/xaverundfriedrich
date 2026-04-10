(function () {
  const burger = document.querySelector(".nav-burger");
  const menu   = document.querySelector(".nav-mobile-menu");
  if (!burger || !menu) return;

  function open() {
    burger.classList.add("is-open");
    menu.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Menü schließen");
    menu.setAttribute("aria-hidden", "false");
  }

  function close() {
    burger.classList.remove("is-open");
    menu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Menü öffnen");
    menu.setAttribute("aria-hidden", "true");
  }

  burger.addEventListener("click", function () {
    burger.classList.contains("is-open") ? close() : open();
  });

  // Links im Menü: nach Klick schließen
  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", close);
  });

  // Klick außerhalb schließt das Menü
  document.addEventListener("click", function (e) {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
      close();
    }
  });
})();
