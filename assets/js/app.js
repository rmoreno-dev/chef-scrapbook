(function () {
  'use strict';

  var BASE_PORTIONS = 27;
  var BASE_WEIGHT_PER_PORTION = 50; // gramos

  var ingredients = [
    { id: 'ing-harina',       base: 500 },
    { id: 'ing-azucar',       base: 250 },
    { id: 'ing-mantequilla',  base: 200 },
    { id: 'ing-huevos',       base: 100 },
    { id: 'ing-chispas',      base: 300 },
  ];

  var BASE_TOTAL = 1350; // suma de bases

  function round(n) {
    return Math.round(n);
  }

  function updateTable(portions) {
    var factor = portions / BASE_PORTIONS;

    ingredients.forEach(function (ing) {
      var cell = document.getElementById(ing.id);
      if (cell) {
        cell.textContent = round(ing.base * factor) + 'g';
      }
    });

    var newTotal = round(BASE_TOTAL * factor);

    var elTotalMass    = document.getElementById('total-mass');
    var elTotalTable   = document.getElementById('table-total-weight');
    var elPortDisplay  = document.getElementById('portions-display');
    var elLive         = document.getElementById('calc-live');

    if (elTotalMass)   elTotalMass.textContent   = newTotal + 'g';
    if (elTotalTable)  elTotalTable.textContent   = newTotal + 'g';
    if (elPortDisplay) elPortDisplay.textContent  = portions;

    if (elLive) {
      elLive.textContent =
        'Receta actualizada para ' + portions + ' porciones. Masa total: ' + newTotal + 'g.';
    }
  }

  function validate(rawValue) {
    var trimmed = String(rawValue).trim();

    if (trimmed === '') {
      return { ok: false, msg: 'Ingresa un número de porciones.' };
    }

    var num = Number(trimmed);

    if (!Number.isFinite(num) || isNaN(num)) {
      return { ok: false, msg: 'Ingresa un número válido.' };
    }

    if (!Number.isInteger(num)) {
      return { ok: false, msg: 'El número de porciones debe ser un entero.' };
    }

    if (num <= 0) {
      return { ok: false, msg: 'El número de porciones debe ser mayor que cero.' };
    }

    if (num > 9999) {
      return { ok: false, msg: 'El número de porciones no puede superar 9999.' };
    }

    return { ok: true, value: num };
  }

  function showError(msg) {
    var el = document.getElementById('calc-error');
    var input = document.getElementById('portion-input');
    if (el) el.textContent = msg;
    if (input) input.setAttribute('aria-invalid', 'true');
  }

  function clearError() {
    var el = document.getElementById('calc-error');
    var input = document.getElementById('portion-input');
    if (el) el.textContent = '';
    if (input) input.setAttribute('aria-invalid', 'false');
  }

  function handleChange() {
    var input = document.getElementById('portion-input');
    if (!input) return;

    var result = validate(input.value);

    if (!result.ok) {
      showError(result.msg);
      return;
    }

    clearError();
    updateTable(result.value);
  }

  function handleStep(delta) {
    var input = document.getElementById('portion-input');
    if (!input) return;

    var current = parseInt(input.value, 10);
    if (isNaN(current)) current = BASE_PORTIONS;

    var next = Math.max(1, current + delta);
    input.value = next;
    handleChange();
  }

  function init() {
    var input    = document.getElementById('portion-input');
    var stepUp   = document.getElementById('step-up');
    var stepDown = document.getElementById('step-down');

    if (!input) return;

    input.addEventListener('input',  handleChange);
    input.addEventListener('change', handleChange);

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleChange();
      }
    });

    if (stepUp)   stepUp.addEventListener('click',   function () { handleStep(1);  });
    if (stepDown) stepDown.addEventListener('click',  function () { handleStep(-1); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
