(function () {
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const dot = document.getElementById("cursorDot");
  if (!dot) return;

  const HOVER_COLOR   = "#1C7C54";
  const DEFAULT_COLOR = "#73E2A7";
  const interactive   = "a, button, [role='button'], input, label, select, textarea";

  document.documentElement.classList.add("cursor-active");

  let x = -100, y = -100;
  let scale = 1;

  function setTransform() {
    dot.style.transform =
      "translate(" + (x - 16) + "px, " + (y - 16) + "px) scale(" + scale + ")";
  }

  // Scale-Animation: von aktuellem Wert zu Ziel, mit requestAnimationFrame
  let animFrame = null;
  function animateTo(target) {
    if (animFrame) cancelAnimationFrame(animFrame);
    function step() {
      scale += (target - scale) * 0.18; // sanftes Easing
      if (Math.abs(scale - target) < 0.001) scale = target;
      setTransform();
      if (scale !== target) animFrame = requestAnimationFrame(step);
    }
    animFrame = requestAnimationFrame(step);
  }

  document.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
    setTransform();
    dot.style.opacity = "1";
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.closest(interactive)) {
      dot.style.backgroundColor = HOVER_COLOR;
      animateTo(0.65);
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.closest(interactive)) {
      dot.style.backgroundColor = DEFAULT_COLOR;
      animateTo(1);
    }
  });

  document.addEventListener("mousedown", function () {
    animateTo(0.4);
  });

  document.addEventListener("mouseup", function () {
    // Zurück zu hover-Größe falls noch auf Link, sonst normal
    animateTo(scale < 0.9 ? 0.65 : 1);
  });

  document.addEventListener("mouseleave", function () {
    dot.style.opacity = "0";
  });

  document.addEventListener("mouseenter", function () {
    dot.style.opacity = "1";
  });
})();
