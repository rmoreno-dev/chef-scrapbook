(function () {
  'use strict';

  window.ChefScrapbook = window.ChefScrapbook || {};

  window.ChefScrapbook.data = {
    recipes: [
      {
        id: 'galletas-de-chispas',
        slug: 'galletas-de-chispas',
        name: 'Galletas de Chispas',
        version: '3.2',
        versionLabel: 'Ajuste de humedad',
        category: 'panaderia',
        categoryLabel: 'Panadería',
        subcategory: 'galletas',
        description: 'Galleta clásica con chips de chocolate semi-amargo. Textura crujiente por fuera y suave por dentro.',
        prepTime: 15,
        cookTime: 14,
        totalTime: 29,
        basePorciones: 27,
        portionWeight: 50,
        totalWeight: 1350,
        rating: 'excellent',
        image: 'assets/images/chocolate-chip-cookies.svg',
        featured: true,
        ingredients: [
          { id: 'ing-harina',      name: 'Harina de Trigo (AP)',                base: 500, unit: 'g', phase: 'dry',       phaseName: 'Secos',     bakersPercent: '100.00%' },
          { id: 'ing-azucar',      name: 'Azúcar Morena',                       base: 250, unit: 'g', phase: 'cream',     phaseName: 'Cremado',   bakersPercent: '50.00%'  },
          { id: 'ing-mantequilla', name: 'Mantequilla (Sin sal)',               base: 200, unit: 'g', phase: 'cream',     phaseName: 'Cremado',   bakersPercent: '40.00%'  },
          { id: 'ing-huevos',      name: 'Huevos',                              base: 100, unit: 'g', phase: 'liquid',    phaseName: 'Líquidos',  bakersPercent: '20.00%'  },
          { id: 'ing-chispas',     name: 'Chispas de Chocolate (Semi-amargo)', base: 300, unit: 'g', phase: 'inclusion', phaseName: 'Inclusión', bakersPercent: '60.00%'  }
        ],
        steps: [
          {
            n: 1,
            title: 'Cremado',
            text: 'Batir la mantequilla a temperatura ambiente con el azúcar morena hasta que esté suave y pálida (aprox. 5 min a velocidad media).'
          },
          {
            n: 2,
            title: 'Emulsión',
            text: 'Agregar los huevos uno por uno, asegurando que cada uno se incorpore completamente antes de añadir el siguiente.'
          },
          {
            n: 3,
            title: 'Incorporación',
            text: 'Añadir los secos (harina) en dos partes, mezclando a velocidad baja solo hasta combinar. No sobremezclar.'
          }
        ],
        nutrition: {
          calories: 240,
          fat: 12,
          carbs: 32,
          protein: 3,
          portionSize: 50
        },
        shoppingItems: [
          { item: 'Harina de Trigo (AP)',              qty: 500, unit: 'g',  category: 'secos'        },
          { item: 'Azúcar Morena',                     qty: 250, unit: 'g',  category: 'secos'        },
          { item: 'Mantequilla sin sal',               qty: 200, unit: 'g',  category: 'refrigerados' },
          { item: 'Huevos',                            qty: 2,   unit: 'pz', category: 'refrigerados' },
          { item: 'Chispas de Chocolate Semi-amargo',  qty: 300, unit: 'g',  category: 'secos'        }
        ],
        createdAt: '2026-01-01',
        updatedAt: '2026-06-16'
      }
    ],

    getBySlug: function (slug) {
      for (var i = 0; i < this.recipes.length; i++) {
        if (this.recipes[i].slug === slug) return this.recipes[i];
      }
      return null;
    },

    getByCategory: function (cat) {
      return this.recipes.filter(function (r) { return r.category === cat; });
    },

    getFeatured: function () {
      return this.recipes.filter(function (r) { return r.featured; });
    }
  };

})();
