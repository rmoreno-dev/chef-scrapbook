(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};
  window.ChefScrapbook.Pages = window.ChefScrapbook.Pages || {};

  var DAYS  = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  var MEALS = [
    { id: 'desayuno', label: 'Desayuno', short: 'D' },
    { id: 'almuerzo', label: 'Almuerzo', short: 'A' },
    { id: 'cena',     label: 'Cena',     short: 'C' },
    { id: 'snack',    label: 'Snack',    short: 'S' }
  ];

  var _currentTrigger = null;

  function getWeekRange() {
    var now = new Date();
    var day = now.getDay();
    var sunday = new Date(now);
    sunday.setDate(now.getDate() - day);
    var saturday = new Date(sunday);
    saturday.setDate(sunday.getDate() + 6);
    var opts = { day: 'numeric', month: 'short' };
    return sunday.toLocaleDateString('es-MX', opts) + ' — ' + saturday.toLocaleDateString('es-MX', opts);
  }

  function slotKey(dayIdx, mealId) {
    return DAYS[dayIdx].toLowerCase()
      .replace(/é/g, 'e').replace(/á/g, 'a').replace(/ó/g, 'o')
      .replace(/í/g, 'i').replace(/ú/g, 'u')
      + '-' + mealId;
  }

  function _recipeName(slug) {
    if (!slug) return null;
    var CS = window.ChefScrapbook;
    var r = CS.data ? CS.data.getBySlug(slug) : null;
    return r ? r.name : null;
  }

  /* ── PLANIFICADOR ── */

  function renderPlannerBody() {
    var CS = window.ChefScrapbook;
    return MEALS.map(function (meal) {
      return [
        '<tr>',
          '<th scope="row" class="planner-table__meal-label">',
            '<span class="meal-badge">' + meal.short + '</span>',
            '<span class="meal-name">' + meal.label + '</span>',
          '</th>',
          DAYS.map(function (day, di) {
            var key  = slotKey(di, meal.id);
            var slug = CS.State ? CS.State.getMenuSlot(key) : null;
            var name = _recipeName(slug);
            var isEmpty = !name;
            return [
              '<td class="planner-cell">',
                '<button class="planner-cell__btn' + (isEmpty ? ' planner-cell__btn--empty' : ' planner-cell__btn--assigned') + '"',
                  ' type="button"',
                  ' data-slot="' + key + '"',
                  ' aria-label="' + day + ', ' + meal.label + (isEmpty
                    ? ': Sin asignar. Activar para asignar receta'
                    : ': ' + CS.escapeHTML(name) + '. Activar para cambiar') + '">',
                  isEmpty ? 'Sin asignar' : CS.escapeHTML(name),
                '</button>',
              '</td>'
            ].join('');
          }).join(''),
        '</tr>'
      ].join('');
    }).join('');
  }

  /* ── DIALOG SELECTOR ── */

  function renderSelectorDialog() {
    var CS = window.ChefScrapbook;
    var recipes = CS.data ? CS.data.recipes : [];
    return [
      '<dialog class="recipe-selector-dialog" id="recipe-selector-dialog"',
        ' aria-labelledby="selector-title" aria-describedby="selector-desc">',
        '<div class="recipe-selector">',
          '<header class="recipe-selector__header">',
            '<h2 class="recipe-selector__title" id="selector-title">Asignar receta</h2>',
            '<button class="recipe-selector__close" type="button" aria-label="Cerrar selector">&#215;</button>',
          '</header>',
          '<p class="sr-only" id="selector-desc"></p>',
          '<ul class="recipe-selector__list" role="list">',
            recipes.map(function (r) {
              return [
                '<li>',
                  '<button class="recipe-selector__btn" type="button" data-select-slug="' + r.slug + '">',
                    CS.escapeHTML(r.name),
                  '</button>',
                '</li>'
              ].join('');
            }).join(''),
            '<li class="recipe-selector__remove-item" hidden>',
              '<button class="recipe-selector__btn recipe-selector__btn--remove" type="button" data-select-slug="">',
                'Quitar asignación',
              '</button>',
            '</li>',
          '</ul>',
        '</div>',
      '</dialog>'
    ].join('');
  }

  function openSelector(trigger) {
    var CS = window.ChefScrapbook;
    var dialog = document.getElementById('recipe-selector-dialog');
    if (!dialog) return;
    var key  = trigger.getAttribute('data-slot');
    var curr = CS.State ? CS.State.getMenuSlot(key) : null;

    var desc = dialog.querySelector('#selector-desc');
    if (desc) desc.textContent = trigger.getAttribute('aria-label') || '';

    var removeItem = dialog.querySelector('.recipe-selector__remove-item');
    if (removeItem) {
      if (curr) { removeItem.removeAttribute('hidden'); }
      else       { removeItem.setAttribute('hidden', ''); }
    }

    dialog.dataset.slot = key;
    _currentTrigger = trigger;
    dialog.showModal();
  }

  /* ── TAREAS DE PREPARACIÓN ── */

  function renderPrepTasks() {
    var CS = window.ChefScrapbook;
    if (!CS.State) return '';
    var tasks = CS.State.getPrepTasks();
    if (tasks.length === 0) {
      return '<li class="task-list__empty">Sin tareas — ¡agrega la primera!</li>';
    }
    return tasks.map(function (t) {
      return [
        '<li class="task-list__item' + (t.checked ? ' task-list__item--done' : '') + '" data-task-id="' + t.id + '">',
          '<label class="task-list__label">',
            '<input type="checkbox" class="task-list__check"' + (t.checked ? ' checked' : '') + '> ',
            '<span class="task-list__text">' + CS.escapeHTML(t.label) + '</span>',
          '</label>',
          '<button class="task-list__remove" type="button" aria-label="Eliminar tarea" data-remove-task="' + t.id + '">',
            '&#215;',
          '</button>',
        '</li>'
      ].join('');
    }).join('');
  }

  /* ── LISTA DE COMPRAS ── */

  function renderShoppingList() {
    var CS = window.ChefScrapbook;
    if (!CS.State) return '';

    var planItems   = CS.State.getMenuShoppingItems ? CS.State.getMenuShoppingItems() : [];
    var manualItems = CS.State.getShoppingList();

    if (planItems.length === 0 && manualItems.length === 0) {
      return '<li class="task-list__empty">Asigna recetas al planificador para ver los ingredientes aquí.</li>';
    }

    var html = [];

    if (planItems.length > 0) {
      html.push('<li class="task-list__group-label">Del plan semanal</li>');
      for (var p = 0; p < planItems.length; p++) {
        html.push([
          '<li class="task-list__item task-list__item--plan">',
            '<span class="task-list__text">' + CS.escapeHTML(planItems[p].label) + '</span>',
          '</li>'
        ].join(''));
      }
    }

    if (manualItems.length > 0) {
      if (planItems.length > 0) {
        html.push('<li class="task-list__group-label">Elementos adicionales</li>');
      }
      for (var m = 0; m < manualItems.length; m++) {
        var item = manualItems[m];
        html.push([
          '<li class="task-list__item' + (item.checked ? ' task-list__item--done' : '') + '" data-item-id="' + item.id + '">',
            '<label class="task-list__label">',
              '<input type="checkbox" class="task-list__check"' + (item.checked ? ' checked' : '') + '> ',
              '<span class="task-list__text">' + CS.escapeHTML(item.label) + '</span>',
            '</label>',
            '<button class="task-list__remove" type="button" aria-label="Eliminar artículo" data-remove-item="' + item.id + '">',
              '&#215;',
            '</button>',
          '</li>'
        ].join(''));
      }
    }

    return html.join('');
  }

  /* ── RENDER PRINCIPAL ── */

  function render(container) {
    container.innerHTML = [
      '<div class="view view--menus">',

        '<header class="page-header">',
          '<div class="page-header__title-wrap">',
            '<h1 class="page-title">Menú Semanal</h1>',
          '</div>',
          '<div class="page-header__actions">',
            '<div class="week-selector">',
              '<button class="week-selector__btn" type="button" aria-label="Semana anterior" id="week-prev">&#8249;</button>',
              '<span class="week-selector__label" id="week-label">' + getWeekRange() + '</span>',
              '<button class="week-selector__btn" type="button" aria-label="Semana siguiente" id="week-next">&#8250;</button>',
            '</div>',
          '</div>',
        '</header>',

        '<div class="planner-wrap">',
          '<div class="planner" role="region" aria-label="Planificador semanal">',
            '<table class="planner-table" aria-label="Plan de comidas de la semana">',
              '<thead>',
                '<tr>',
                  '<th scope="col" class="planner-table__meal-col">Tiempo</th>',
                  DAYS.map(function (d) {
                    return '<th scope="col">' + d.slice(0, 3) + '</th>';
                  }).join(''),
                '</tr>',
              '</thead>',
              '<tbody id="planner-body">',
                renderPlannerBody(),
              '</tbody>',
            '</table>',
          '</div>',
        '</div>',

        '<div class="menus-bottom-grid">',

          '<section class="paper-scrap cs-with-tape" aria-labelledby="heading-prep">',
            '<h2 class="section-heading" id="heading-prep">',
              '<img src="assets/icons/svg/icon-check.svg" alt="" width="18" height="18">',
              'Cocina del Domingo',
            '</h2>',
            '<ul class="task-list" id="prep-task-list" aria-label="Tareas de preparación">',
              renderPrepTasks(),
            '</ul>',
            '<form class="task-add-form" id="prep-task-form" aria-label="Agregar tarea">',
              '<label class="sr-only" for="prep-task-input">Nueva tarea</label>',
              '<input type="text" id="prep-task-input" class="task-add-form__input"',
                ' placeholder="Añadir tarea..." maxlength="100" autocomplete="off">',
              '<button type="submit" class="task-add-form__btn btn btn--ghost btn--sm">',
                '<img src="assets/icons/svg/icon-plus.svg" alt="" width="14" height="14">',
                'Agregar',
              '</button>',
            '</form>',
          '</section>',

          '<section class="paper-scrap paper-scrap--rotate-neg cs-with-tape cs-with-tape--sage" aria-labelledby="heading-shopping">',
            '<div class="shopping-header">',
              '<h2 class="section-heading" id="heading-shopping">',
                '<img src="assets/icons/svg/icon-ingredients.svg" alt="" width="18" height="18">',
                'Lista de Compras',
              '</h2>',
              '<button class="btn btn--ghost btn--sm" id="clear-shopping-btn" type="button">Limpiar extra</button>',
            '</div>',
            '<ul class="task-list" id="shopping-list" aria-label="Lista de compras" aria-live="polite">',
              renderShoppingList(),
            '</ul>',
            '<form class="task-add-form" id="shopping-form" aria-label="Agregar artículo extra">',
              '<label class="sr-only" for="shopping-input">Nuevo artículo</label>',
              '<input type="text" id="shopping-input" class="task-add-form__input"',
                ' placeholder="Añadir artículo extra..." maxlength="100" autocomplete="off">',
              '<button type="submit" class="task-add-form__btn btn btn--ghost btn--sm">',
                '<img src="assets/icons/svg/icon-plus.svg" alt="" width="14" height="14">',
                'Agregar',
              '</button>',
            '</form>',
          '</section>',

        '</div>',

        renderSelectorDialog(),

      '</div>'
    ].join('');

    bindEvents(container);
  }

  /* ── EVENTOS ── */

  function bindEvents(container) {
    var CS = window.ChefScrapbook;

    /* Celdas del planificador — botones de selección */
    bindPlannerButtons(container);

    /* Dialog selector */
    var dialog = container.querySelector('#recipe-selector-dialog');
    if (dialog) {
      /* Seleccionar receta o quitar */
      dialog.addEventListener('click', function (e) {
        if (e.target === dialog) { dialog.close(); return; }
        var btn = e.target.closest('[data-select-slug]');
        if (!btn) return;
        var slug = btn.getAttribute('data-select-slug') || null;
        var key  = dialog.dataset.slot;
        if (CS.State) CS.State.setMenuSlot(key, slug);
        refreshPlannerBody(container);
        refreshShoppingList(container);
        CS.toast(slug ? 'Receta asignada ✓' : 'Asignación eliminada');
        dialog.close();
      });

      /* Botón de cierre explícito */
      var closeBtn = dialog.querySelector('.recipe-selector__close');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () { dialog.close(); });
      }

      /* Restaurar foco al cerrar */
      dialog.addEventListener('close', function () {
        if (_currentTrigger) {
          _currentTrigger.focus();
          _currentTrigger = null;
        }
      });
    }

    /* Selector de semana (visual — sin persistencia histórica, DT-009) */
    var weekLabel = container.querySelector('#week-label');
    var weekPrev  = container.querySelector('#week-prev');
    var weekNext  = container.querySelector('#week-next');
    if (weekPrev) {
      weekPrev.addEventListener('click', function () {
        if (weekLabel) weekLabel.textContent = '← Semana anterior';
      });
    }
    if (weekNext) {
      weekNext.addEventListener('click', function () {
        if (weekLabel) weekLabel.textContent = 'Semana siguiente →';
      });
    }

    /* Tareas de preparación */
    var prepForm  = container.querySelector('#prep-task-form');
    var prepInput = container.querySelector('#prep-task-input');
    if (prepForm) {
      prepForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var val = prepInput ? prepInput.value.trim() : '';
        if (!val || !CS.State) return;
        CS.State.addPrepTask(val);
        if (prepInput) prepInput.value = '';
        refreshPrepTasks(container);
        CS.toast('Tarea agregada');
      });
    }

    container.addEventListener('click', function (e) {
      var taskCheck = e.target.closest('[data-task-id] .task-list__check');
      if (taskCheck && CS.State) {
        var taskItem = taskCheck.closest('[data-task-id]');
        CS.State.togglePrepTask(Number(taskItem.getAttribute('data-task-id')));
        taskItem.classList.toggle('task-list__item--done', taskCheck.checked);
        return;
      }

      var removeTask = e.target.closest('[data-remove-task]');
      if (removeTask && CS.State) {
        CS.State.removePrepTask(Number(removeTask.getAttribute('data-remove-task')));
        refreshPrepTasks(container);
        return;
      }

      var shopCheck = e.target.closest('[data-item-id] .task-list__check');
      if (shopCheck && CS.State) {
        var shopItem = shopCheck.closest('[data-item-id]');
        CS.State.toggleShoppingItem(Number(shopItem.getAttribute('data-item-id')));
        shopItem.classList.toggle('task-list__item--done', shopCheck.checked);
        return;
      }

      var removeItem = e.target.closest('[data-remove-item]');
      if (removeItem && CS.State) {
        CS.State.removeShoppingItem(Number(removeItem.getAttribute('data-remove-item')));
        refreshShoppingList(container);
        return;
      }
    });

    /* Formulario compras adicionales */
    var shopForm  = container.querySelector('#shopping-form');
    var shopInput = container.querySelector('#shopping-input');
    if (shopForm) {
      shopForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var val = shopInput ? shopInput.value.trim() : '';
        if (!val || !CS.State) return;
        CS.State.addShoppingItem(val);
        if (shopInput) shopInput.value = '';
        refreshShoppingList(container);
        CS.toast('Artículo agregado');
      });
    }

    /* Limpiar artículos adicionales (no afecta ítems del plan) */
    var clearBtn = container.querySelector('#clear-shopping-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        if (!CS.State) return;
        CS.State.clearShoppingList();
        refreshShoppingList(container);
        CS.toast('Artículos extra eliminados');
      });
    }
  }

  function bindPlannerButtons(container) {
    var btns = container.querySelectorAll('[data-slot]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        openSelector(e.currentTarget);
      });
    }
  }

  function refreshPlannerBody(container) {
    var tbody = container.querySelector('#planner-body');
    if (tbody) tbody.innerHTML = renderPlannerBody();
    bindPlannerButtons(container);
  }

  function refreshPrepTasks(container) {
    var list = container.querySelector('#prep-task-list');
    if (list) list.innerHTML = renderPrepTasks();
  }

  function refreshShoppingList(container) {
    var list = container.querySelector('#shopping-list');
    if (list) list.innerHTML = renderShoppingList();
  }

  window.ChefScrapbook.Pages.menus = render;

})();
