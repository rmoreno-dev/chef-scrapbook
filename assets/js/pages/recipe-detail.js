(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};
  window.ChefScrapbook.Pages = window.ChefScrapbook.Pages || {};

  var PHASE_CLASS = {
    dry:       'badge--dry',
    cream:     'badge--cream',
    liquid:    'badge--liquid',
    inclusion: 'badge--inclusion'
  };

  var STEP_COLOR = ['step-number--1', 'step-number--2', 'step-number--3'];

  function render(container, slug) {
    var CS = window.ChefScrapbook;
    var recipe = CS.data ? CS.data.getBySlug(slug) : null;

    if (!recipe) {
      container.innerHTML = [
        '<div class="view view--not-found">',
          '<h1>Receta no encontrada</h1>',
          '<p>La receta que buscas no existe o aún no está disponible.</p>',
          '<a class="btn btn--primary" href="#/recetas">Ver todas las recetas</a>',
        '</div>'
      ].join('');
      return;
    }

    var isFav = CS.State && CS.State.isFavorite(recipe.id);

    container.innerHTML = [
      '<div class="view view--detail">',

        /* ── CABECERA ── */
        '<div class="page-header">',
          '<div class="page-header__title-wrap">',
            '<nav class="breadcrumb" aria-label="Ruta de navegación">',
              '<a href="#/recetas">Recetas</a>',
              '<span aria-hidden="true"> / </span>',
              '<span aria-current="page">' + recipe.name + '</span>',
            '</nav>',
            '<h1 class="page-title">',
              recipe.name,
              '<span class="sticker-excellent" aria-label="Calificación: Excellent!">Excellent!</span>',
            '</h1>',
            '<p class="page-header__subtitle">Versión ' + recipe.version + ' — ' + recipe.versionLabel + '</p>',
          '</div>',
          '<div class="page-header__actions">',
            '<button class="btn btn--ghost recipe-detail__fav' + (isFav ? ' recipe-detail__fav--active' : '') + '"',
              ' type="button"',
              ' id="detail-fav-btn"',
              ' aria-label="' + (isFav ? 'Quitar de favoritos' : 'Agregar a favoritos') + '"',
              ' aria-pressed="' + (isFav ? 'true' : 'false') + '"',
              ' data-fav-id="' + recipe.id + '">',
              '<img src="assets/icons/svg/icon-heart.svg" alt="" width="16" height="16">',
              '<span id="fav-label">' + (isFav ? 'En favoritos' : 'Favorito') + '</span>',
            '</button>',
            '<button class="btn btn--primary" type="button" id="add-to-shopping-btn">',
              '<img src="assets/icons/svg/icon-plus.svg" alt="" width="16" height="16">',
              'Agregar a lista',
            '</button>',
          '</div>',
        '</div>',

        /* ── GRID ── */
        '<div class="content-grid">',

          /* Columna izquierda */
          '<div class="col-left">',

            /* Ingredientes */
            '<section class="paper-scrap cs-with-tape" aria-labelledby="heading-ingredientes">',
              '<h2 class="section-heading" id="heading-ingredientes">',
                '<img src="assets/icons/svg/icon-ingredients.svg" alt="" width="20" height="20">',
                'Matriz de Ingredientes',
              '</h2>',
              '<div class="table-wrapper">',
                '<table class="ingredient-table" aria-label="Ingredientes — cantidades ajustables con la calculadora">',
                  '<thead><tr>',
                    '<th scope="col">Ingrediente</th>',
                    '<th scope="col">Peso (g)</th>',
                    '<th scope="col">% Panadero</th>',
                    '<th scope="col">Fase</th>',
                  '</tr></thead>',
                  '<tbody>',
                    recipe.ingredients.map(function (ing) {
                      return [
                        '<tr>',
                          '<td>' + ing.name + '</td>',
                          '<td id="' + ing.id + '">' + ing.base + 'g</td>',
                          '<td>' + (ing.id === 'ing-harina' ? '<span class="highlighter">100.00%</span>' : ing.bakersPercent) + '</td>',
                          '<td><span class="badge ' + (PHASE_CLASS[ing.phase] || '') + '">' + ing.phaseName + '</span></td>',
                        '</tr>'
                      ].join('');
                    }).join(''),
                  '</tbody>',
                  '<tfoot><tr>',
                    '<td>Total Masa</td>',
                    '<td id="table-total-weight">' + recipe.totalWeight + 'g</td>',
                    '<td>270.00%</td>',
                    '<td></td>',
                  '</tr></tfoot>',
                '</table>',
              '</div>',
            '</section>',

            /* Método */
            '<section class="paper-scrap paper-scrap--rotate-pos cs-with-tape cs-with-tape--sage" aria-labelledby="heading-metodo">',
              '<h2 class="section-heading section-heading--muted" id="heading-metodo">',
                '<img src="assets/icons/svg/icon-whisk.svg" alt="" width="20" height="20">',
                'Método',
              '</h2>',
              '<ol class="method-steps" aria-label="Pasos de preparación">',
                recipe.steps.map(function (step) {
                  var colorClass = STEP_COLOR[(step.n - 1) % STEP_COLOR.length];
                  return [
                    '<li class="method-step">',
                      '<span class="step-number ' + colorClass + '" aria-hidden="true">' + step.n + '</span>',
                      '<div class="step-text"><strong>' + step.title + ':</strong> ' + step.text + '</div>',
                    '</li>'
                  ].join('');
                }).join(''),
              '</ol>',
            '</section>',

          '</div>',

          /* Columna derecha */
          '<div class="col-right">',

            /* Factor de Rendimiento + Calculadora */
            '<div class="paper-scrap paper-scrap--rotate-neg2 cs-with-tape" aria-labelledby="heading-rendimiento">',
              '<h3 class="yield-card__title yield-card__title--top-offset" id="heading-rendimiento">Factor de Rendimiento</h3>',
              '<div class="calculator" role="group" aria-labelledby="calc-label">',
                '<label class="calculator__label" id="calc-label" for="portion-input">Número de porciones</label>',
                '<div class="calculator__field">',
                  '<input type="text" inputmode="numeric" pattern="[0-9]*" id="portion-input" class="calculator__input"',
                    ' value="' + recipe.basePorciones + '"',
                    ' min="1" max="9999" step="1"',
                    ' aria-describedby="calc-error" aria-invalid="false">',
                  '<div class="calculator__stepper">',
                    '<button class="calculator__step-btn" id="step-up" type="button" aria-label="Aumentar porciones en 1">+</button>',
                    '<button class="calculator__step-btn" id="step-down" type="button" aria-label="Disminuir porciones en 1">&#8722;</button>',
                  '</div>',
                '</div>',
                '<p class="calculator__error" id="calc-error" role="alert" aria-live="assertive"></p>',
              '</div>',
              '<div class="yield-stats">',
                '<div class="yield-stat">',
                  '<p class="yield-stat__label">Masa Total</p>',
                  '<p class="yield-stat__value" id="total-mass">' + recipe.totalWeight + 'g</p>',
                '</div>',
                '<div class="yield-stat">',
                  '<p class="yield-stat__label">Porciones</p>',
                  '<p class="yield-stat__value" id="portions-display">' + recipe.basePorciones + '</p>',
                '</div>',
              '</div>',
              '<p class="yield-unit">Peso por unidad estimado: <strong>' + recipe.portionWeight + 'g</strong></p>',
            '</div>',

            /* Polaroid */
            '<figure class="polaroid" aria-label="Foto del batch de galletas">',
              '<img class="polaroid__img" src="' + recipe.image + '" alt="' + recipe.name + ' — batch completo"',
                ' loading="lazy" width="196" height="180">',
              '<figcaption class="polaroid__caption">¡Batch perfecto!</figcaption>',
              '<span class="sticker-goodjob" aria-hidden="true">GOOD<br>JOB</span>',
            '</figure>',

            /* Perfil nutricional */
            '<div class="paper-scrap paper-scrap--rotate-pos cs-with-tape cs-with-tape--sage" aria-labelledby="heading-nutricion">',
              '<h3 class="yield-card__title yield-card__title--top-offset" id="heading-nutricion">Perfil Nutricional</h3>',
              '<p class="nutrition-subtitle">(Por porción de ' + recipe.nutrition.portionSize + 'g)</p>',
              '<ul class="nutrition-list" aria-label="Valores nutricionales por porción">',
                '<li class="nutrition-item"><span class="nutrition-item__label">Calorías</span><span class="nutrition-item__value">' + recipe.nutrition.calories + ' kcal</span></li>',
                '<li class="nutrition-item"><span class="nutrition-item__label">Grasas</span><span class="nutrition-item__value">' + recipe.nutrition.fat + 'g</span></li>',
                '<li class="nutrition-item"><span class="nutrition-item__label">Carbohidratos</span><span class="nutrition-item__value">' + recipe.nutrition.carbs + 'g</span></li>',
                '<li class="nutrition-item"><span class="nutrition-item__label">Proteínas</span><span class="nutrition-item__value">' + recipe.nutrition.protein + 'g</span></li>',
              '</ul>',
            '</div>',

          '</div>',

        '</div>',

      '</div>'
    ].join('');

    /* Inicializar calculadora */
    if (window.ChefScrapbook.Calculator) {
      window.ChefScrapbook.Calculator.init();
    }

    /* Botón favorito */
    var favBtn = container.querySelector('#detail-fav-btn');
    if (favBtn) {
      favBtn.addEventListener('click', function () {
        var CS = window.ChefScrapbook;
        if (!CS.State) return;
        var added = CS.State.toggleFavorite(recipe.id);
        favBtn.classList.toggle('recipe-detail__fav--active', added);
        favBtn.setAttribute('aria-pressed', added ? 'true' : 'false');
        favBtn.setAttribute('aria-label', added ? 'Quitar de favoritos' : 'Agregar a favoritos');
        var label = favBtn.querySelector('#fav-label');
        if (label) label.textContent = added ? 'En favoritos' : 'Favorito';
        CS.toast(added ? 'Agregado a favoritos ♥' : 'Quitado de favoritos');
      });
    }

    /* Agregar ingredientes a lista de compras */
    var shopBtn = container.querySelector('#add-to-shopping-btn');
    if (shopBtn) {
      shopBtn.addEventListener('click', function () {
        var CS = window.ChefScrapbook;
        if (!CS.State) return;
        recipe.shoppingItems.forEach(function (item) {
          CS.State.addShoppingItem(item.qty + ' ' + item.unit + ' · ' + item.item);
        });
        CS.toast('Ingredientes agregados a la lista de compras');
      });
    }
  }

  window.ChefScrapbook.Pages.recipeDetail = render;

})();
