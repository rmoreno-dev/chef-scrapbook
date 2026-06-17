(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};
  window.ChefScrapbook.Pages = window.ChefScrapbook.Pages || {};

  var _debounceTimer = null;

  function _normalize(str) {
    return String(str || '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[áàäâ]/g, 'a')
      .replace(/[éèëê]/g, 'e')
      .replace(/[íìïî]/g, 'i')
      .replace(/[óòöô]/g, 'o')
      .replace(/[úùüû]/g, 'u')
      .replace(/ñ/g, 'n');
  }

  function _buildIndex(r) {
    var parts = [r.name, r.description, r.category, r.categoryLabel, r.subcategory || ''];
    if (Array.isArray(r.ingredients)) {
      for (var i = 0; i < r.ingredients.length; i++) parts.push(r.ingredients[i].name);
    }
    if (Array.isArray(r.tags)) {
      for (var t = 0; t < r.tags.length; t++) parts.push(r.tags[t]);
    }
    return _normalize(parts.join(' '));
  }

  function _filterRecipes() {
    var CS = window.ChefScrapbook;
    if (!CS.data) return [];
    return CS.data.recipes.filter(function (r) {
      var matchCat    = _currentCat === 'todos' || r.category === _currentCat;
      var matchSearch = !_searchTerm || _buildIndex(r).indexOf(_searchTerm) !== -1;
      return matchCat && matchSearch;
    });
  }

  var CATEGORIES = [
    { id: 'todos',      label: 'Todos'      },
    { id: 'desayunos',  label: 'Desayunos'  },
    { id: 'almuerzos',  label: 'Almuerzos'  },
    { id: 'cenas',      label: 'Cenas'      },
    { id: 'postres',    label: 'Postres'    },
    { id: 'panaderia',  label: 'Panadería'  },
    { id: 'snacks',     label: 'Snacks'     },
    { id: 'bebidas',    label: 'Bebidas'    },
    { id: 'basicos',    label: 'Básicos'    }
  ];

  var _currentCat = 'todos';
  var _searchTerm = '';

  function render(container) {
    var CS = window.ChefScrapbook;

    _currentCat = 'todos';
    _searchTerm = '';

    container.innerHTML = [
      '<div class="view view--recipes">',

        '<header class="page-header">',
          '<div class="page-header__title-wrap">',
            '<h1 class="page-title">Biblioteca de Recetas</h1>',
            '<p class="page-header__subtitle">',
              '<span id="recipe-count">' + (CS.data ? CS.data.recipes.length : 0) + '</span> receta disponible',
            '</p>',
          '</div>',
        '</header>',

        /* ── BUSCADOR ── */
        '<div class="search-bar-wrap">',
          '<label class="sr-only" for="recipe-search">Buscar recetas</label>',
          '<div class="search-bar">',
            '<img src="assets/icons/search.svg" alt="" width="18" height="18" class="search-bar__icon">',
            '<input',
              ' type="search"',
              ' id="recipe-search"',
              ' class="search-bar__input"',
              ' placeholder="Buscar recetas..."',
              ' autocomplete="off"',
              ' aria-label="Buscar recetas"',
            '>',
          '</div>',
        '</div>',

        /* ── CATEGORÍAS ── */
        '<nav class="category-nav" aria-label="Filtrar por categoría">',
          '<ul class="category-nav__list" role="list">',
            CATEGORIES.map(function (c) {
              return [
                '<li>',
                  '<button',
                    ' class="category-pill' + (c.id === _currentCat ? ' category-pill--active' : '') + '"',
                    ' type="button"',
                    ' data-cat="' + c.id + '"',
                    ' aria-pressed="' + (c.id === _currentCat ? 'true' : 'false') + '">',
                    c.label,
                  '</button>',
                '</li>'
              ].join('');
            }).join(''),
          '</ul>',
        '</nav>',

        /* ── GRID DE RECETAS ── */
        '<div id="recipes-grid" role="region" aria-live="polite" aria-atomic="true">',
          renderGrid(),
        '</div>',

      '</div>'
    ].join('');

    bindEvents(container);
  }

  function renderGrid() {
    var CS = window.ChefScrapbook;
    if (!CS.data) return '<p class="recipes-empty">Cargando recetas…</p>';

    var filtered = _filterRecipes();

    if (filtered.length === 0) {
      var emptyMsg = _searchTerm
        ? 'Sin resultados para "<strong>' + CS.escapeHTML(_searchTerm) + '</strong>"'
        : 'Sin recetas en esta categoría';
      return [
        '<div class="recipes-empty">',
          '<img src="assets/icons/search.svg" alt="" width="40" height="40">',
          '<p>' + emptyMsg + '</p>',
          '<button class="btn btn--ghost btn--sm" id="clear-search" type="button">Ver todas</button>',
        '</div>'
      ].join('');
    }

    return '<ul class="recipes-grid" role="list">' +
      filtered.map(function (r) { return renderCard(r); }).join('') +
    '</ul>';
  }

  function renderCard(recipe) {
    var CS = window.ChefScrapbook;
    var isFav = CS.State && CS.State.isFavorite(recipe.id);
    return [
      '<li>',
        '<article class="recipe-card recipe-card--real">',
          '<a class="recipe-card__link" href="#/recetas/' + recipe.slug + '" aria-label="Ver receta: ' + recipe.name + '">',
            '<div class="recipe-card__img-wrap">',
              '<img class="recipe-card__img" src="' + recipe.image + '" alt="" width="280" height="160" loading="lazy">',
              '<span class="recipe-card__badge">' + recipe.versionLabel + '</span>',
            '</div>',
            '<div class="recipe-card__body">',
              '<span class="recipe-card__cat">' + recipe.categoryLabel + '</span>',
              '<h2 class="recipe-card__title">' + recipe.name + '</h2>',
              '<p class="recipe-card__desc">' + recipe.description + '</p>',
              '<div class="recipe-card__meta">',
                '<span class="recipe-card__meta-item">',
                  '<img src="assets/icons/clock.svg" alt="Tiempo" width="13" height="13">',
                  recipe.totalTime + ' min',
                '</span>',
                '<span class="recipe-card__meta-item">',
                  '<img src="assets/icons/servings.svg" alt="Porciones" width="13" height="13">',
                  recipe.basePorciones + ' uds',
                '</span>',
              '</div>',
            '</div>',
          '</a>',
          '<button class="recipe-card__fav' + (isFav ? ' recipe-card__fav--active' : '') + '"',
            ' type="button"',
            ' data-fav-id="' + recipe.id + '"',
            ' aria-label="' + (isFav ? 'Quitar de favoritos' : 'Agregar a favoritos') + '"',
            ' aria-pressed="' + (isFav ? 'true' : 'false') + '">',
            '<img src="assets/icons/heart.svg" alt="" width="16" height="16">',
          '</button>',
        '</article>',
      '</li>'
    ].join('');
  }

  function updateGrid(container) {
    var grid = container.querySelector('#recipes-grid');
    var count = container.querySelector('#recipe-count');
    if (!grid) return;
    grid.innerHTML = renderGrid();

    var filtered = _filterRecipes();
    if (count) count.textContent = filtered.length;

    bindFavHandlers(grid);

    var clearBtn = grid.querySelector('#clear-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        _searchTerm = '';
        _currentCat = 'todos';
        clearTimeout(_debounceTimer);
        var input = container.querySelector('#recipe-search');
        if (input) input.value = '';
        var allPills = container.querySelectorAll('[data-cat]');
        for (var i = 0; i < allPills.length; i++) {
          var active = allPills[i].getAttribute('data-cat') === 'todos';
          allPills[i].classList.toggle('category-pill--active', active);
          allPills[i].setAttribute('aria-pressed', active ? 'true' : 'false');
        }
        updateGrid(container);
      });
    }
  }

  function bindEvents(container) {
    /* Búsqueda con debounce 300 ms y normalización de tildes */
    var searchInput = container.querySelector('#recipe-search');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        clearTimeout(_debounceTimer);
        _debounceTimer = setTimeout(function () {
          _searchTerm = _normalize(searchInput.value);
          updateGrid(container);
        }, 300);
      });
    }

    /* Categorías */
    var catBtns = container.querySelectorAll('[data-cat]');
    for (var i = 0; i < catBtns.length; i++) {
      catBtns[i].addEventListener('click', function (e) {
        var cat = e.currentTarget.getAttribute('data-cat');
        _currentCat = cat;
        var all = container.querySelectorAll('[data-cat]');
        for (var j = 0; j < all.length; j++) {
          var active = all[j].getAttribute('data-cat') === cat;
          all[j].classList.toggle('category-pill--active', active);
          all[j].setAttribute('aria-pressed', active ? 'true' : 'false');
        }
        updateGrid(container);
      });
    }

    /* Favoritos en el grid inicial */
    var grid = container.querySelector('#recipes-grid');
    if (grid) bindFavHandlers(grid);
  }

  function bindFavHandlers(scope) {
    var favBtns = scope.querySelectorAll('[data-fav-id]');
    for (var i = 0; i < favBtns.length; i++) {
      favBtns[i].addEventListener('click', handleFav);
    }
  }

  function handleFav(e) {
    e.preventDefault();
    e.stopPropagation();
    var CS = window.ChefScrapbook;
    if (!CS.State) return;
    var id = e.currentTarget.getAttribute('data-fav-id');
    var added = CS.State.toggleFavorite(id);
    var btn = e.currentTarget;
    btn.classList.toggle('recipe-card__fav--active', added);
    btn.setAttribute('aria-pressed', added ? 'true' : 'false');
    btn.setAttribute('aria-label', added ? 'Quitar de favoritos' : 'Agregar a favoritos');
    CS.toast(added ? 'Agregado a favoritos ♥' : 'Quitado de favoritos');
  }

  window.ChefScrapbook.Pages.recipes = render;

})();
