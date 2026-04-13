// ─────────────────────────────────────────────────────────────────────────────
// CONSTRUCTION MODE
//   true  → Passwortabfrage aktiv, Unbefugte sehen die Baustellen-Seite
//   false → Seite öffentlich erreichbar (für Live-Gang hier auf false setzen)
// ─────────────────────────────────────────────────────────────────────────────
var XF_DEV_MODE = true;
var XF_PASSWORD = 'Audi1499';

// ─── Ab hier nichts mehr anfassen ────────────────────────────────────────────
(function () {
  var SESS  = 'xf_auth';
  var DRBL  = 'https://dribbble.com/xaverpollinger';
  var LI    = 'https://www.linkedin.com/in/xaver-pollinger-24a02425b';

  if (!XF_DEV_MODE || sessionStorage.getItem(SESS) === '1') return;

  // Sofort body verbergen, bevor er gerendert wird
  document.documentElement.classList.add('dev-locked');

  // Styles injizieren
  var s = document.createElement('style');
  s.textContent = [
    'html.dev-locked body>*{visibility:hidden!important}',
    '#xf-overlay{position:fixed;inset:0;z-index:99999;background:#fff;',
      'font-family:ui-monospace,"Cascadia Code","Courier New",monospace;',
      'color:#0d0d0d;display:flex;align-items:center;justify-content:center;padding:2rem}',
    '#xf-overlay .xf-wrap{max-width:480px;width:100%}',
    '#xf-overlay .xf-logo{margin-bottom:3rem;opacity:.4}',
    '#xf-overlay .xf-logo svg{height:20px;width:auto}',
    '#xf-overlay h1{font-size:clamp(1.375rem,1.067rem + 1.315vw,2.25rem);',
      'font-weight:500;font-style:italic;line-height:1.3;margin-bottom:1.5rem}',
    '#xf-overlay p{font-size:.875rem;font-weight:300;font-style:italic;',
      'color:#6b6b6b;line-height:1.6;margin-bottom:.75rem}',
    '#xf-overlay a{color:#0d0d0d;transition:opacity 150ms ease}',
    '#xf-overlay a:hover{opacity:.6}',
    '#xf-overlay .xf-socials{display:flex;gap:1rem;margin-top:1.5rem}',
    '#xf-overlay .xf-socials a{display:flex;align-items:center;gap:.5rem;',
      'font-size:.875rem;font-weight:300;font-style:italic;text-decoration:none}',
    '#xf-overlay .xf-socials svg{width:18px;height:18px;flex-shrink:0}',
    '#xf-overlay .xf-form{display:flex;flex-direction:column;gap:1rem}',
    '#xf-overlay .xf-label{font-size:.875rem;font-weight:300;font-style:italic;color:#6b6b6b}',
    '#xf-overlay .xf-input{width:100%;padding:.75rem 1rem;',
      'border:1px solid #e0e0e0;background:#fff;color:#0d0d0d;',
      'font-family:inherit;font-size:1rem;outline:none;',
      'transition:border-color 150ms ease}',
    '#xf-overlay .xf-input:focus{border-color:#0d0d0d}',
    '#xf-overlay .xf-input.xf-error{border-color:#c00;animation:xf-shake .3s ease}',
    '@keyframes xf-shake{0%,100%{transform:translateX(0)}',
      '20%{transform:translateX(-6px)}60%{transform:translateX(6px)}}',
    '#xf-overlay .xf-buttons{display:flex;gap:.75rem}',
    '#xf-overlay .xf-btn{flex:1;padding:.75rem 1rem;border:1px solid #0d0d0d;',
      'background:#0d0d0d;color:#fff;font-family:inherit;font-size:.875rem;',
      'font-style:italic;cursor:pointer;transition:opacity 150ms ease}',
    '#xf-overlay .xf-btn:hover{opacity:.7}',
    '#xf-overlay .xf-btn-ghost{background:#fff;color:#0d0d0d}',
    '#xf-overlay *{cursor:auto!important}'
  ].join('');
  document.head.appendChild(s);

  var LOGO = '<svg viewBox="0 0 80 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="20">'
    + '<text x="0" y="18" font-family="monospace" font-size="16" font-style="italic">x&amp;f</text></svg>';

  var ICON_DRBL = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">'
    + '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.65,96.18Q211.83,120,208,120a168.58,168.58,0,0,0-43.94,5.84A166.52,166.52,0,0,0,150.61,96a168.32,168.32,0,0,0,38.2-31.55A87.78,87.78,0,0,1,215.65,120.18ZM176.28,54.46A151.75,151.75,0,0,1,142,82.52a169.22,169.22,0,0,0-38.63-39,88,88,0,0,1,73,10.94ZM85.65,50.88a153.13,153.13,0,0,1,42,39.18A151.82,151.82,0,0,1,64,104a154.19,154.19,0,0,1-20.28-1.35A88.39,88.39,0,0,1,85.65,50.88ZM40,128a87.73,87.73,0,0,1,.53-9.64A168.85,168.85,0,0,0,64,120a167.84,167.84,0,0,0,72.52-16.4,150.82,150.82,0,0,1,12.31,27.13,167.11,167.11,0,0,0-24.59,11.6,169.22,169.22,0,0,0-55.07,51.06A87.8,87.8,0,0,1,40,128Zm42,75a152.91,152.91,0,0,1,50.24-46.79,148.81,148.81,0,0,1,20.95-10,152.48,152.48,0,0,1,3.73,33.47,152.93,152.93,0,0,1-3.49,32.56A87.92,87.92,0,0,1,82,203Zm89.06,1.73a170,170,0,0,0,1.86-25,168.69,168.69,0,0,0-4.45-38.47A152.31,152.31,0,0,1,208,136q3.8,0,7.61.19A88.13,88.13,0,0,1,171.06,204.72Z"/></svg>';

  var ICON_LI = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">'
    + '<path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"/></svg>';

  var CONSTRUCTION_HTML = '<div class="xf-logo">' + LOGO + '</div>'
    + '<h1>Gleich zurück —<br>die Seite wird gerade überarbeitet.</h1>'
    + '<p>In Kürze ist alles fertig. Bei Fragen:</p>'
    + '<p><a href="mailto:info@xaverfriedrich.de">info@xaverfriedrich.de</a></p>'
    + '<div class="xf-socials">'
    + '<a href="' + DRBL + '" target="_blank" rel="noopener">' + ICON_DRBL + 'Dribbble</a>'
    + '<a href="' + LI   + '" target="_blank" rel="noopener">' + ICON_LI   + 'LinkedIn</a>'
    + '</div>';

  var PASSWORD_HTML = '<div class="xf-logo">' + LOGO + '</div>'
    + '<h1>Gleich zurück —<br>die Seite wird gerade überarbeitet.</h1>'
    + '<p>Du hast Zugang? Passwort eingeben:</p>'
    + '<div class="xf-form">'
    + '<label class="xf-label" for="xf-pw">Passwort</label>'
    + '<input id="xf-pw" class="xf-input" type="password" autocomplete="current-password" autofocus />'
    + '<div class="xf-buttons">'
    + '<button id="xf-submit" class="xf-btn">Weiter →</button>'
    + '<button id="xf-cancel" class="xf-btn xf-btn-ghost">Abbrechen</button>'
    + '</div></div>';

  document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.createElement('div');
    overlay.id = 'xf-overlay';
    var wrap = document.createElement('div');
    wrap.className = 'xf-wrap';
    overlay.appendChild(wrap);
    document.body.appendChild(overlay);

    // Body wieder sichtbar — Overlay liegt drüber
    document.documentElement.classList.remove('dev-locked');

    showPassword();

    function showPassword() {
      wrap.innerHTML = PASSWORD_HTML;
      var input  = document.getElementById('xf-pw');
      var submit = document.getElementById('xf-submit');
      var cancel = document.getElementById('xf-cancel');

      function attempt() {
        if (input.value === XF_PASSWORD) {
          sessionStorage.setItem(SESS, '1');
          overlay.remove();
        } else {
          input.classList.remove('xf-error');
          // re-trigger animation
          void input.offsetWidth;
          input.classList.add('xf-error');
          input.value = '';
          setTimeout(function () {
            input.classList.remove('xf-error');
            showConstruction();
          }, 400);
        }
      }

      submit.addEventListener('click', attempt);
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') attempt();
      });
      cancel.addEventListener('click', showConstruction);
      input.focus();
    }

    function showConstruction() {
      wrap.innerHTML = CONSTRUCTION_HTML;
    }
  });
}());
