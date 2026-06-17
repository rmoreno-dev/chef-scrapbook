---
title: "Modelo de Datos"
document_id: "CS-12"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "datos"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[06_ARQUITECTURA_TECNICA]]"
  - "[[16_REGLAS_DE_NEGOCIO]]"
  - "[[13_DICCIONARIO_DE_BASE_DE_DATOS]]"
tags:
  - chef-scrapbook
  - datos
  - modelo
---

# Modelo de Datos

## Fuente de datos de recetas — `assets/js/data/recipes.js`

No existe base de datos. El catalogo de recetas es un array de objetos JavaScript en `data/recipes.js`. Este modulo es la unica fuente de verdad para las recetas.

### Esquema de una receta

```javascript
{
  id: 'galletas-de-chispas',
  slug: 'galletas-de-chispas',        // usado en las rutas: #/recetas/galletas-de-chispas
  name: 'Galletas de Chispas',
  version: '3.2',
  versionLabel: 'Ajuste de humedad',
  category: 'panaderia',
  basePorciones: 27,                  // BASE_PORTIONS = 27 (inmutable)
  portionWeight: 50,                  // gramos por porcion
  totalWeight: 1350,                  // gramos totales de la formula
  featured: true,

  ingredients: [
    {
      id: 'ing-harina',
      name: 'Harina de Trigo AP',
      base: 500,                      // gramos base (para 27 porciones)
      unit: 'g',
      phase: 'Secos',
      bakersPercent: '100%'
    },
    // ... (5 ingredientes en total)
  ],

  steps: [
    { title: 'Cremado', description: '...' },
    { title: 'Emulsion', description: '...' },
    { title: 'Incorporacion', description: '...' }
  ],

  nutrition: {
    calories: 240,
    fat: 12,
    carbs: 32,
    protein: 3,
    portionSize: 50                   // gramos por porcion de referencia
  },

  shoppingItems: [
    { qty: 500, unit: 'g', name: 'Harina de Trigo AP', category: 'Secos' },
    // ... (5 items)
  ]
}
```

### Constantes de la calculadora

```javascript
var BASE_PORTIONS = 27;             // porciones base de la receta
var BASE_WEIGHT_PER_PORTION = 50;   // gramos por porcion
var BASE_TOTAL = 1350;              // gramos totales (suma de ingredientes)
```

> [!important]
> BASE_PORTIONS = 27 es el valor real implementado. El manual v3.1 usa `baseServings: 12` como **ejemplo conceptual** en el Apendice J. Estos valores NO son intercambiables. El codigo es la fuente de verdad para el valor real.

### Metodos del modulo de datos

```javascript
window.ChefScrapbook.data = {
  recipes: [...],
  getBySlug: function(slug) { ... },      // retorna receta o null
  getByCategory: function(cat) { ... },   // retorna array filtrado
  getFeatured: function() { ... }         // retorna array de recetas con featured: true
};
```

## Estado del usuario — `assets/js/state.js`

El estado del usuario se persiste en `localStorage` bajo la clave `chef-scrapbook-v1`. Se serializa como JSON con la siguiente estructura:

```javascript
{
  favorites: ['galletas-de-chispas'],    // array de slugs

  menuPlan: {
    'lunes-desayuno': 'galletas-de-chispas',  // slug valido o ausente (null se omite)
    // ... (7 dias x 4 tiempos = 28 slots posibles)
    // REGLA: solo slugs existentes en CS.data.recipes. Texto libre PROHIBIDO.
    // Al cargar, _sanitizeMenuPlan() descarta valores invalidos o texto libre.
  },

  shoppingList: [
    { id: 'item-1', text: 'Harina', qty: 500, unit: 'g', checked: false }
  ],

  prepTasks: [
    { id: 'task-1', text: 'Atemperar mantequilla', done: false }
  ],

  preferences: {}
}
```

### Claves de dias y tiempos del planificador

| Dias | Tiempos |
|---|---|
| domingo, lunes, martes, miercoles, jueves, viernes, sabado | desayuno, almuerzo, cena, snack |

El slot se construye como `${dia}-${tiempo}`, por ejemplo: `lunes-desayuno`. Los acentos se normalizan: `miercoles` (no `miércoles`).

### Regla de la lista de compras

La lista de compras tiene dos secciones:

1. **Del plan semanal** (auto-derivada): generada en tiempo real por `CS.State.getMenuShoppingItems()`. Cuenta cuantas veces esta asignada cada receta y escala las cantidades de `shoppingItems`. No se almacena en localStorage — se recalcula al renderizar.
2. **Elementos adicionales** (manuales): gestionados por el usuario via formulario. Se almacenan en `shoppingList` en localStorage.

Regla de escala: si la receta esta asignada N veces, `qty × N` para cada ingrediente.

## Regla de honestidad del catalogo

- Solo se admiten recetas reales, completamente documentadas, en el array `recipes`.
- Las tarjetas de recetas no implementadas se renderizan como "Proximamente" en la vista, sin datos falsos.
- NO crear objetos de receta con datos inventados o incompletos.

## Modelo futuro conceptual (PLANIFICADO)

El Apendice J del manual v3.1 define un esquema JSON conceptual para recetas futuras:

```json
{
  "id": "string (uuid)",
  "slug": "string (url-safe)",
  "version": "string (semver)",
  "title": "string",
  "description": "string",
  "baseServings": 12,
  "yield": { "total": "number (g)", "perUnit": "number (g)" },
  "times": { "active": "number (min)", "total": "number (min)" },
  "difficulty": "string (basica|intermedia|avanzada)",
  "ingredients": [{ "name": "string", "base": "number", "unit": "string", "phase": "string" }],
  "steps": [{ "order": "number", "action": "string", "detail": "string", "sensory": "string" }],
  "allergens": ["string"],
  "storage": "string",
  "author": "string",
  "reviewedAt": "string (ISO date)"
}
```

> [!info]
> El valor `baseServings: 12` en el ejemplo del manual es **conceptual**. La receta implementada usa BASE_PORTIONS = 27. No sustituir el valor real por el ejemplo.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[13_DICCIONARIO_DE_BASE_DE_DATOS]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[31_CASOS_DE_PRUEBA]]
