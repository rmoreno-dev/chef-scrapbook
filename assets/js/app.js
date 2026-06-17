(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};

  /* ── Utilidades globales ── */

  window.ChefScrapbook.escapeHTML = function (str) {
    return String(str)
      .replace(/&/g,  '&amp;')
      .replace(/</g,  '&lt;')
      .replace(/>/g,  '&gt;')
      .replace(/"/g,  '&quot;')
      .replace(/'/g,  '&#39;');
  };

  /* ── Sistema de toasts ── */

  var _toastTimer = null;

  window.ChefScrapbook.toast = function (msg, type) {
    var container = document.getElementById('toast-container');
    if (!container) return;

    container.textContent = '';
    var el = document.createElement('div');
    el.className = 'toast' + (type ? ' toast--' + type : '');
    el.textContent = msg;
    el.setAttribute('role', 'status');
    container.appendChild(el);

    /* Accesibilidad: el región ya es aria-live, pero forzamos visibilidad */
    container.removeAttribute('hidden');
    el.classList.add('toast--visible');

    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(function () {
      el.classList.remove('toast--visible');
      setTimeout(function () { container.setAttribute('hidden', ''); }, 300);
    }, 3000);
  };

  /* ── Navegación móvil ── */

  function initMobileNav() {
    var toggle  = document.getElementById('nav-toggle');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('nav-overlay');

    if (!toggle || !sidebar) return;

    function openNav() {
      sidebar.classList.add('sidebar--open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Cerrar navegación');
      if (overlay) overlay.removeAttribute('hidden');
    }

    function closeNav() {
      sidebar.classList.remove('sidebar--open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir navegación');
      if (overlay) overlay.setAttribute('hidden', '');
    }

    toggle.addEventListener('click', function () {
      if (sidebar.classList.contains('sidebar--open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }

    /* Cerrar al navegar en móvil */
    var navLinks = sidebar.querySelectorAll('.sidebar__nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', closeNav);
    }

    /* Cerrar con Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('sidebar--open')) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* ── Calculadora de porciones ── */

  var BASE_PORTIONS         = 27;
  var BASE_WEIGHT_PER_PORTION = 50; // g
  var BASE_TOTAL            = 1350; // g

  var _ingredients = [
    { id: 'ing-harina',      base: 500 },
    { id: 'ing-azucar',      base: 250 },
    { id: 'ing-mantequilla', base: 200 },
    { id: 'ing-huevos',      base: 100 },
    { id: 'ing-chispas',     base: 300 }
  ];

  function _round(n) { return Math.round(n); }

  function _updateTable(portions) {
    var factor = portions / BASE_PORTIONS;
    _ingredients.forEach(function (ing) {
      var cell = document.getElementById(ing.id);
      if (cell) cell.textContent = _round(ing.base * factor) + 'g';
    });

    var newTotal = _round(BASE_TOTAL * factor);
    var elMass    = document.getElementById('total-mass');
    var elTable   = document.getElementById('table-total-weight');
    var elDisplay = document.getElementById('portions-display');
    var elLive    = document.getElementById('calc-live');

    if (elMass)    elMass.textContent    = newTotal + 'g';
    if (elTable)   elTable.textContent   = newTotal + 'g';
    if (elDisplay) elDisplay.textContent = portions;
    if (elLive) {
      elLive.textContent = 'Receta actualizada para ' + portions + ' porciones. Masa total: ' + newTotal + 'g.';
    }
  }

  function _validate(rawValue) {
    var trimmed = String(rawValue).trim();
    if (trimmed === '') return { ok: false, msg: 'Ingresa un número de porciones.' };
    var num = Number(trimmed);
    if (!Number.isFinite(num) || isNaN(num)) return { ok: false, msg: 'Ingresa un número válido.' };
    if (!Number.isInteger(num))              return { ok: false, msg: 'El número de porciones debe ser un entero.' };
    if (num <= 0)                            return { ok: false, msg: 'El número de porciones debe ser mayor que cero.' };
    if (num > 9999)                          return { ok: false, msg: 'El número de porciones no puede superar 9999.' };
    return { ok: true, value: num };
  }

  function _showError(msg) {
    var el    = document.getElementById('calc-error');
    var input = document.getElementById('portion-input');
    if (el)    el.textContent = msg;
    if (input) input.setAttribute('aria-invalid', 'true');
  }

  function _clearError() {
    var el    = document.getElementById('calc-error');
    var input = document.getElementById('portion-input');
    if (el)    el.textContent = '';
    if (input) input.setAttribute('aria-invalid', 'false');
  }

  function _handleChange() {
    var input = document.getElementById('portion-input');
    if (!input) return;
    var result = _validate(input.value);
    if (!result.ok) { _showError(result.msg); return; }
    _clearError();
    _updateTable(result.value);
  }

  function _handleStep(delta) {
    var input = document.getElementById('portion-input');
    if (!input) return;
    var current = parseInt(input.value, 10);
    if (isNaN(current)) current = BASE_PORTIONS;
    input.value = Math.max(1, current + delta);
    _handleChange();
  }

  function _initCalculator() {
    var input    = document.getElementById('portion-input');
    var stepUp   = document.getElementById('step-up');
    var stepDown = document.getElementById('step-down');
    if (!input) return;

    input.addEventListener('input',  _handleChange);
    input.addEventListener('change', _handleChange);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); _handleChange(); }
    });
    if (stepUp)   stepUp.addEventListener('click',   function () { _handleStep(1);  });
    if (stepDown) stepDown.addEventListener('click',  function () { _handleStep(-1); });
  }

  window.ChefScrapbook.Calculator = { init: _initCalculator };

  /* ── Bootstrap ── */

  function init() {
    initMobileNav();
    if (window.ChefScrapbook.Router) {
      window.ChefScrapbook.Router.start();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
