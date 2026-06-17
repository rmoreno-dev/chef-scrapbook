(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};

  var _activePath = null;

  function _getPath() {
    var hash = window.location.hash || '';
    var path = hash.replace(/^#/, '') || '/inicio';
    return path || '/inicio';
  }

  function navigate(path) {
    window.location.hash = '#' + path;
  }

  function _updateNav(path) {
    var links = document.querySelectorAll('.sidebar__nav-link[data-route]');
    for (var i = 0; i < links.length; i++) {
      var route = links[i].getAttribute('data-route');
      /* /recetas activo también en /recetas/* */
      var active = path === route ||
        (route !== '/inicio' && path.indexOf(route + '/') === 0);
      links[i].classList.toggle('sidebar__nav-link--active', active);
      if (active) {
        links[i].setAttribute('aria-current', 'page');
      } else {
        links[i].removeAttribute('aria-current');
      }
    }

    /* Ítem móvil en el header (si existe) */
    var mobileLinks = document.querySelectorAll('.mobile-nav__link[data-route]');
    for (var j = 0; j < mobileLinks.length; j++) {
      var mroute = mobileLinks[j].getAttribute('data-route');
      mobileLinks[j].classList.toggle('mobile-nav__link--active', path === mroute);
    }
  }

  function _updateTitle(path) {
    var map = {
      '/inicio':                        'Chef Scrapbook — Inicio',
      '/recetas':                       'Chef Scrapbook — Recetas',
      '/recetas/galletas-de-chispas':   'Galletas de Chispas — Chef Scrapbook',
      '/menus':                         'Chef Scrapbook — Menú Semanal'
    };
    document.title = map[path] || 'Chef Scrapbook';
  }

  function _render(path) {
    if (path === _activePath) return;
    _activePath = path;

    var Pages = window.ChefScrapbook.Pages || {};
    var main = document.getElementById('main-content');
    if (!main) return;

    /* Vaciar contenido anterior */
    main.innerHTML = '';

    /* Enrutamiento */
    if (path === '/inicio' || path === '/') {
      if (Pages.home) Pages.home(main);
    } else if (path === '/recetas') {
      if (Pages.recipes) Pages.recipes(main);
    } else if (path.indexOf('/recetas/') === 0) {
      var slug = path.slice('/recetas/'.length);
      if (Pages.recipeDetail) Pages.recipeDetail(main, slug);
    } else if (path === '/menus') {
      if (Pages.menus) Pages.menus(main);
    } else {
      main.innerHTML = [
        '<div class="view view--not-found">',
          '<h1 class="page-title">Página no encontrada</h1>',
          '<p>Esta ruta no existe.</p>',
          '<a class="btn btn--primary" href="#/inicio">Volver al inicio</a>',
        '</div>'
      ].join('');
    }

    _updateNav(path);
    _updateTitle(path);

    /* Mover foco al contenido principal para lectores de pantalla */
    main.setAttribute('tabindex', '-1');
    main.focus({ preventScroll: false });
    window.scrollTo(0, 0);

    /* Guardar última vista */
    if (window.ChefScrapbook.State) {
      window.ChefScrapbook.State.setPreference('lastView', path);
    }
  }

  window.addEventListener('hashchange', function () {
    _render(_getPath());
  });

  window.ChefScrapbook.Router = {
    navigate: navigate,
    start: function () {
      _render(_getPath());
    },
    getCurrentPath: _getPath
  };

})();
