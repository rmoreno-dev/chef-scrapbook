---
title: "Arquitectura Tecnica"
document_id: "CS-06"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "arquitectura"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[05_ARQUITECTURA_GENERAL]]"
  - "[[07_STACK_TECNOLOGICO]]"
  - "[[16_REGLAS_DE_NEGOCIO]]"
tags:
  - chef-scrapbook
  - arquitectura
  - tecnico
---

# Arquitectura Tecnica

## HTML

- HTML5 semantico con landmarks: `header`, `nav`, `main`.
- Shell SPA en `index.html`: estructura fija del layout, sin contenido de receta en el HTML.
- El contenido de cada vista se inyecta en `<main id="main-content">` via JS.
- `lang="es"` en el elemento `html`.
- Codificacion UTF-8.
- Ocho `<script>` al final del `<body>` en orden garantizado de dependencias.

## CSS

- **`tokens.css`**: variables CSS en `:root`. Paleta Vanilla Ink, tipografias, colores funcionales (success, warning, error, info), transiciones, sombra del sidebar.
- **`styles.css`**: layout SPA (`.layout`, `.sidebar`, `.main-content`), cabecera movil, overlay, skip link, sr-only, toast container, estados activos del nav.
- **`components.css`**: toasts, barra de busqueda, pills de categoria, tarjetas de receta, grid del planificador, listas de compras y tareas.
- **`responsive.css`**: breakpoints 320-1440px, sidebar movil deslizable, reduccion de ornamentacion, `prefers-reduced-motion`.
- Sin preprocesador. CSS3 custom properties nativas.
- Nomenclatura BEM: `.block__element--modifier`.

## JavaScript — Patron de modulos

Todos los archivos JS usan el patron IIFE (`(function() { 'use strict'; ... })();`) y acumulan en el namespace global `window.ChefScrapbook`.

### Orden de carga y responsabilidades

| # | Archivo | Responsabilidad |
|---|---|---|
| 1 | `data/recipes.js` | Define `window.ChefScrapbook.data`: array de recetas, `getBySlug()`, `getByCategory()`, `getFeatured()` |
| 2 | `state.js` | Define `window.ChefScrapbook.State`: lectura/escritura en `localStorage` clave `chef-scrapbook-v1` |
| 3 | `pages/home.js` | Define `Pages.home()`: renderiza vista Inicio |
| 4 | `pages/recipes.js` | Define `Pages.recipes()`: renderiza Biblioteca de Recetas |
| 5 | `pages/recipe-detail.js` | Define `Pages.recipeDetail(slug)`: renderiza detalle de receta |
| 6 | `pages/menus.js` | Define `Pages.menus()`: renderiza planificador semanal |
| 7 | `router.js` | Define `Router.start()`: escucha `hashchange` y `load`, resuelve rutas |
| 8 | `app.js` | Funciones globales + `init()`: arranca `initMobileNav()` y `Router.start()` |

### Flujo de enrutamiento

```
URL: http://localhost/#/recetas/galletas-de-chispas
                          ↓
router.js escucha hashchange
                          ↓
Extrae hash: "/recetas/galletas-de-chispas"
                          ↓
Coincide patron: /recetas/:slug → Pages.recipeDetail("galletas-de-chispas")
                          ↓
recipeDetail busca en ChefScrapbook.data.getBySlug(slug)
                          ↓
Renderiza HTML en document.getElementById("main-content")
                          ↓
Calculator.init() se activa si la vista tiene el input
```

## Estado y persistencia

El modulo `state.js` gestiona todo el estado persistente del usuario:

```javascript
// Clave en localStorage
var STORAGE_KEY = 'chef-scrapbook-v1';

// Estructura del estado
{
  favorites: [],          // array de slugs de recetas favoritas
  menuPlan: {},           // { "lunes_desayuno": "galletas-de-chispas", ... }
  shoppingList: [],       // [{ id, text, checked, qty, unit }]
  prepTasks: [],          // [{ id, text, done }]
  preferences: {}         // configuracion del usuario
}
```

Metodos expuestos en `ChefScrapbook.State`:
- `isFavorite(slug)`, `toggleFavorite(slug)`
- `getMenuSlot(day, meal)`, `setMenuSlot(day, meal, recipeSlug)`, `clearMenuSlot(day, meal)`
- `addShoppingItem(text, qty, unit)`, `toggleShoppingItem(id)`, `removeShoppingItem(id)`, `clearShoppingList()`
- `addPrepTask(text)`, `togglePrepTask(id)`, `removePrepTask(id)`
- `setPreference(key, value)`, `getPreference(key)`

## Logica de la calculadora

```
factor = porciones_deseadas / BASE_PORTIONS
cantidad_escalada = Math.round(ingrediente.base * factor)
```

- Input validado: entero, positivo, entre 1 y 9999.
- Actualiza DOM via `getElementById` y `textContent`.
- Anuncia cambios via `aria-live polite`.
- Muestra error via `aria-live assertive` + `aria-invalid`.

## Seguridad XSS

Las vistas renderizan HTML dinamico. Para prevenir XSS:

- `window.ChefScrapbook.escapeHTML(str)` sanitiza strings antes de interpolar en `innerHTML`.
- Texto del usuario (inputs, campos de libre escritura) se pasa siempre por `escapeHTML()`.
- Contenido fijo de `data/recipes.js` (no ingresado por el usuario) puede usarse directamente.

Ver [[24_SEGURIDAD]] para detalle completo.

## Tokens CSS (tokens.css actual)

Los tokens en `assets/css/tokens.css` incluyen la paleta principal mas tokens funcionales y de transicion:

| Categoria | Tokens |
|---|---|
| Paleta Vanilla Ink | `--color-vanilla`, `--color-almond`, `--color-ink`, `--color-cloud-gray`, `--color-soft-mauve`, `--color-pale-sage`, `--color-ink-light` |
| Funcionales | `--color-success`, `--color-success-bg`, `--color-warning`, `--color-warning-bg`, `--color-error`, `--color-error-bg`, `--color-info`, `--color-info-bg` |
| Transiciones | `--transition-fast`, `--transition-normal` |
| Sombras | `--shadow-sidebar` |
| Tipografias | `--font-editorial`, `--font-body`, `--font-accent` |

## SVG

- Los iconos de navegacion y UI estan en `assets/icons/` (18 archivos SVG del kit oficial).
- Los activos de branding estan en `assets/branding/` (4 archivos SVG).
- El favicon esta en `assets/images/favicon.svg`.
- Todos los SVG son propios, sin scripts, sin referencias externas.

## Rutas

- Todas las rutas de assets son relativas: `assets/css/tokens.css`, `assets/js/data/recipes.js`, etc.
- Las rutas hash son internas: `#/inicio`, `#/recetas`, `#/recetas/:slug`, `#/menus`.
- Compatibles con GitHub Pages sin configuracion adicional.
- Sin rutas absolutas, sin variables de entorno, sin configuracion de servidor.

## Dependencias externas

- Google Fonts CDN: Prata, Mulish, Great Vibes.
- Requieren conexion a internet para cargarse; caen a fallbacks tipograficos si no hay red.
- Sin CDN de JS, sin librerias externas, sin Material Symbols.

## Documentos relacionados

- [[05_ARQUITECTURA_GENERAL]]
- [[07_STACK_TECNOLOGICO]]
- [[12_MODELO_DE_DATOS]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[24_SEGURIDAD]]
- [[27_ESTANDARES_DE_CODIGO]]
