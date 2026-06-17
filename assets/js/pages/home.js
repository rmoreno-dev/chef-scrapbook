(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};
  window.ChefScrapbook.Pages = window.ChefScrapbook.Pages || {};

  function render(container) {
    var CS = window.ChefScrapbook;
    var featured = CS.data ? CS.data.getFeatured() : [];
    var recipe = featured[0] || null;

    container.innerHTML = [
      '<div class="view view--home">',

        /* ── HERO ── */
        '<section class="home-hero" aria-label="Bienvenida">',
          '<div class="home-hero__content">',
            '<p class="home-hero__greeting">Hola, cocinera creativa ♥</p>',
            '<h1 class="home-hero__title">Tu cuaderno de<br>fórmulas culinarias</h1>',
            '<p class="home-hero__sub">Organiza tus recetas, planifica tus menús<br>y disfruta cada creación en la cocina.</p>',
            '<div class="home-hero__actions">',
              '<a class="btn btn--primary" href="#/recetas">',
                '<img src="assets/icons/svg/icon-recipe.svg" alt="" width="16" height="16">',
                'Ver recetas',
              '</a>',
              '<a class="btn btn--ghost" href="#/menus">',
                '<img src="assets/icons/svg/icon-calendar.svg" alt="" width="16" height="16">',
                'Planificar menú',
              '</a>',
            '</div>',
          '</div>',
          '<div class="home-hero__deco" aria-hidden="true">',
            '<img',
              ' src="assets/branding/webp/chef-scrapbook-seal-transparent.webp"',
              ' class="cs-brand-seal-watermark home-hero__seal"',
              ' alt=""',
              ' aria-hidden="true"',
              ' loading="lazy"',
              ' decoding="async"',
            '>',
          '</div>',
        '</section>',

        /* ── NOVEDADES ── */
        '<section class="home-section" aria-labelledby="heading-novedades">',
          '<header class="home-section__header">',
            '<h2 class="home-section__title" id="heading-novedades">',
              '<img src="assets/icons/svg/icon-sparkle.svg" alt="" width="18" height="18" class="section-icon">',
              'Novedades',
            '</h2>',
          '</header>',
          '<div class="news-grid">',
            '<div class="news-card">',
              '<div class="news-card__icon-wrap"><img src="assets/icons/svg/icon-scale.svg" alt="" width="28" height="28"></div>',
              '<h3 class="news-card__title">Calculadora de porciones</h3>',
              '<p class="news-card__text">Ajusta automáticamente todos los ingredientes al número exacto de porciones que necesitas.</p>',
              '<a class="news-card__link" href="#/recetas/galletas-de-chispas">Probar ahora →</a>',
            '</div>',
            '<div class="news-card">',
              '<div class="news-card__icon-wrap"><img src="assets/icons/svg/icon-calendar.svg" alt="" width="28" height="28"></div>',
              '<h3 class="news-card__title">Planificador semanal</h3>',
              '<p class="news-card__text">Organiza cada tiempo de comida de la semana y genera tu lista de compras con un clic.</p>',
              '<a class="news-card__link" href="#/menus">Explorar →</a>',
            '</div>',
          '</div>',
        '</section>',

        /* ── ÚLTIMAS RECETAS ── */
        '<section class="home-section" aria-labelledby="heading-ultimas">',
          '<header class="home-section__header">',
            '<h2 class="home-section__title" id="heading-ultimas">',
              '<img src="assets/icons/svg/icon-recipe.svg" alt="" width="18" height="18" class="section-icon">',
              'Últimas Recetas',
            '</h2>',
            '<a class="home-section__viewall" href="#/recetas">Ver biblioteca →</a>',
          '</header>',
          '<div class="recipe-row">',
            recipe ? renderRecipeCard(recipe) : '',
            '<div class="coming-soon-slot">',
              '<img src="assets/decorative/svg/leaf-placeholder.svg" alt="" aria-hidden="true" width="32" height="32" class="cs-decoration">',
              '<p>Próximamente</p>',
            '</div>',
            '<div class="coming-soon-slot">',
              '<img src="assets/decorative/svg/leaf-placeholder.svg" alt="" aria-hidden="true" width="32" height="32" class="cs-decoration">',
              '<p>Próximamente</p>',
            '</div>',
          '</div>',
        '</section>',

        /* ── MENÚS DESTACADOS ── */
        '<section class="home-section" aria-labelledby="heading-menus-dest">',
          '<header class="home-section__header">',
            '<h2 class="home-section__title" id="heading-menus-dest">',
              '<img src="assets/icons/svg/icon-calendar.svg" alt="" width="18" height="18" class="section-icon">',
              'Menús Destacados',
            '</h2>',
            '<a class="home-section__viewall" href="#/menus">Planificar →</a>',
          '</header>',
          '<div class="menu-highlight-row">',
            '<a class="menu-highlight-card" href="#/menus">',
              '<img src="assets/icons/svg/icon-calendar.svg" alt="" width="36" height="36">',
              '<p class="menu-highlight-card__label">Planificar esta semana</p>',
              '<span class="menu-highlight-card__cta">Abrir planificador →</span>',
            '</a>',
            '<div class="menu-highlight-card menu-highlight-card--soon">',
              '<img src="assets/icons/svg/icon-journal.svg" alt="" width="36" height="36">',
              '<p class="menu-highlight-card__label">Menús guardados</p>',
              '<span class="menu-highlight-card__badge">Próximamente</span>',
            '</div>',
          '</div>',
        '</section>',

        /* ── NOTA DE PAPEL ── */
        '<aside class="home-note paper-scrap paper-scrap--rotate-neg cs-with-tape" aria-label="Nota">',
          '<p class="home-note__text">',
            '<em>"La cocina es el único lugar donde puedes hacer magia todos los días."</em>',
          '</p>',
        '</aside>',

      '</div>'
    ].join('');

    /* Manejadores de favorito */
    var favBtns = container.querySelectorAll('[data-fav-id]');
    for (var i = 0; i < favBtns.length; i++) {
      favBtns[i].addEventListener('click', handleFav);
    }
  }

  function renderRecipeCard(recipe) {
    var CS = window.ChefScrapbook;
    var isFav = CS.State && CS.State.isFavorite(recipe.id);
    return [
      '<article class="recipe-card recipe-card--real">',
        '<a class="recipe-card__link" href="#/recetas/' + recipe.slug + '" aria-label="Ver receta: ' + recipe.name + '">',
          '<div class="recipe-card__img-wrap">',
            '<img class="recipe-card__img" src="' + recipe.image + '" alt="" width="280" height="160" loading="lazy">',
          '</div>',
          '<div class="recipe-card__body">',
            '<span class="recipe-card__cat">' + recipe.categoryLabel + '</span>',
            '<h3 class="recipe-card__title">' + recipe.name + '</h3>',
            '<div class="recipe-card__meta">',
              '<span class="recipe-card__meta-item">',
                '<img src="assets/icons/svg/icon-clock.svg" alt="Tiempo" width="13" height="13">',
                recipe.totalTime + ' min',
              '</span>',
              '<span class="recipe-card__meta-item">',
                '<img src="assets/icons/svg/icon-servings.svg" alt="Porciones" width="13" height="13">',
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
          '<img src="assets/icons/svg/icon-heart.svg" alt="" width="16" height="16">',
        '</button>',
      '</article>'
    ].join('');
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

  window.ChefScrapbook.Pages.home = render;

})();
