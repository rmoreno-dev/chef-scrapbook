---
title: "Historial de Cambios"
document_id: "CS-37"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "historial"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-17"
last_verified_against_code: "2026-06-17"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - historial
---

# Historial de Cambios

## v0.2.1 — 2026-06-17 (integracion activos web oficiales)

Integracion completa del paquete `Chef_Scrapbook_Web_Assets_v1.0`.

### Activos nuevos

- `assets/branding/png/` y `assets/branding/webp/` — logos horizontal, primario, sello e isotipo en PNG y WebP transparentes.
- `assets/branding/*.svg` — wrappers SVG de branding.
- `assets/decorative/svg/` — 17 activos decorativos: botanical-divider, botanical-sprigs, brand-stamp, cookie-illustration, heart, ink-splatter, leaf-placeholder, paperclip, paper-note, scalloped-edge, torn-paper, washi-tape (almond, mauve, sage, default).
- `assets/decorative/png/` — variantes PNG de los decorativos.
- `assets/favicon/` — set completo: favicon.ico, favicon-32.png, favicon-16.png, apple-touch-icon.png, site.webmanifest, android-chrome-192.png, android-chrome-512.png.
- `assets/icons/svg/icon-*.svg` — 32 iconos con prefijo `icon-` en formato oficial.
- `assets/icons/png/` — variantes PNG de iconos.
- `assets/patterns/svg/` — 4 patrones: grid, dots, crosses, lines.
- `assets/tokens.json` — tokens de diseno en formato JSON.
- `css/chef-scrapbook-assets.css` — CSS oficial del paquete con variables de marca y clases de utilidad.

### Activos eliminados (provisionales)

- `assets/icons/*.svg` (planos, sin prefijo `icon-`) — 18 archivos provisionales eliminados.
- `assets/branding/botanical-divider.svg`, `botanical-sprigs.svg`, `brand-stamp.svg`, `torn-paper.svg` — 4 activos de branding provisionales eliminados.

### HTML (index.html)

- Favicon set completo sustituye al favicon.svg provisional.
- `<meta name="theme-color" content="#FAF5EC">` agregado.
- CSS `css/chef-scrapbook-assets.css` insertado en el orden correcto (despues de tokens.css).
- Sidebar: logo horizontal oficial en `<picture>` WebP + PNG con clase `cs-brand-logo`.
- Cabecera movil: isotipo oficial en `<picture>` WebP + PNG.
- Hamburguesa: sustituido emoji `☰` por `<img src="assets/icons/svg/icon-menu.svg">`.
- Sello `brand-stamp.svg` del sidebar eliminado (el sello ahora es watermark en el hero).

### CSS (styles.css)

- Body `background-image` cambiado de CSS `linear-gradient` a `url("../patterns/svg/pattern-grid.svg")`.

### CSS (components.css)

- `.home-hero__deco` actualizado con `position: relative` para contener el sello watermark.
- `.sidebar__brand-picture` y `.sidebar__brand-logo` agregados para el nuevo logo del sidebar.

### JavaScript (home.js, recipes.js, recipe-detail.js, menus.js)

- Todos los paths `assets/icons/xxx.svg` actualizados a `assets/icons/svg/icon-xxx.svg`.
- Sello en hero de Inicio: de `brand-stamp.svg` a `chef-scrapbook-seal-transparent.webp` con clase `cs-brand-seal-watermark`.
- Slots "Proximamente": de `assets/icons/leaf.svg` a `assets/decorative/svg/leaf-placeholder.svg` con clase `cs-decoration`.
- `<div class="washi-tape ...">` eliminados de recipe-detail.js y menus.js; clase `cs-with-tape` / `cs-with-tape--sage` agregada al elemento padre.

### Deuda resuelta

- DT-001: Logo oficial implementado. RESUELTO.

### Despliegue GitHub Pages (2026-06-17)

- GitHub Pages habilitado manualmente en el repositorio: Source → Branch main / root.
- URL publica activa: https://rmoreno-dev.github.io/chef-scrapbook/
- SHA verificado en produccion: `2bb215bdba12f39361cdb989ba7591a1df9ade29`
- Verificacion de activos: 14/14 HTTP 200 (index.html, CSS, logos WebP/PNG, sello, patron SVG, iconos, favicon, manifest).
- Smoke test remoto: 28/28 checks HTML superados. 4/4 archivos JS sin paths provisionales.
- Sin errores de consola propios. Sin peticiones 404.
- Tarea T-004 COMPLETADA.

---

## v0.2.0 — 2026-06-16 (rediseno integral SPA)

### Arquitectura

- Migracion de pagina unica estatica a SPA con hash routing.
- Router implementado en `assets/js/router.js` con rutas: `#/inicio`, `#/recetas`, `#/recetas/:slug`, `#/menus`.
- `index.html` reescrito como shell SPA con punto de montaje `#main-content`.
- Patron de modulos IIFE acumulados en `window.ChefScrapbook`.

### Modulos nuevos

- `assets/js/data/recipes.js` — catalogo de recetas, unica fuente de verdad.
- `assets/js/state.js` — estado del usuario en localStorage (`chef-scrapbook-v1`).
- `assets/js/router.js` — hash router.
- `assets/js/pages/home.js` — vista Inicio.
- `assets/js/pages/recipes.js` — vista Biblioteca de Recetas.
- `assets/js/pages/recipe-detail.js` — vista Detalle de Receta con calculadora.
- `assets/js/pages/menus.js` — vista Menu Semanal con planificador, tareas y compras.

### CSS

- `assets/css/components.css` — toasts, busqueda, pills, cards, planner, listas.
- `assets/css/responsive.css` — breakpoints 320-1440px, sidebar movil, reduced-motion.
- `assets/css/tokens.css` — tokens funcionales anadidos (success, warning, error, info, transiciones, sombra sidebar).
- `assets/css/styles.css` — reescrito para arquitectura SPA.

### Activos

- `assets/images/favicon.svg` — isotipo cat chef creado para el proyecto.
- `assets/icons/` — 18 iconos SVG del kit oficial del manual v3.1 (copiados de `.local-reference`).
- `assets/branding/` — 4 activos de branding SVG (brand-stamp, botanical-divider, botanical-sprigs, torn-paper).

### Marca e identidad

- Textos UI corregidos: "Chef Scrapbook" (antes "Culinary Journal"), "Cocina · Crea · Disfruta" (antes "Sweet & Savory").
- Iconografia migrada de Material Symbols (CDN) a kit SVG propio del manual.
- Navegacion simplificada: 3 items (Inicio, Recetas, Menus) — antes: 4 items con nomenclatura en ingles.

### Funcionalidades implementadas

- Busqueda de recetas por nombre.
- Filtros por categoria.
- Marcado de recetas como favoritas con persistencia.
- Planificador semanal 7x4.
- Lista de compras con toggle y limpiar.
- Tareas de preparacion con toggle y eliminar.
- Toast de notificaciones.
- Sidebar movil con overlay y cierre por Escape.
- `escapeHTML()` para proteccion XSS en innerHTML dinamico.

### Deuda resuelta

- DT-002: Material Symbols migrado a SVG propios. RESUELTO.
- DT-003: Textos placeholder actualizados a nomenclatura oficial. RESUELTO.

---

## v0.2.0-patch — 2026-06-16 (correcciones funcionales post-audit)

Tres desviaciones funcionales detectadas y corregidas tras la auditoría pre-commit. No cambian la arquitectura; corrigen comportamientos incorrectos.

### QA final visual, responsive, funcional y accesible

- **DEF-009** `router.js` — reintroducido alias local `Pages` dentro de `_render()` para evitar `ReferenceError` y pantallas vacías en rutas SPA.
- **DEF-010** `recipes.js` — declarado `var CS = window.ChefScrapbook;` en `render()` para que `#/recetas` renderice contador, buscador, categorías y receta real.
- **DEF-011** `home.js`, `recipes.js`, `recipe-detail.js`, `menus.js` — corregidos fragmentos HTML concatenados sin espacios entre atributos (`<inputtype=...>`, `class="..."type=...`).
- **DEF-012** `styles.css`, `responsive.css` — corregido overflow horizontal de página en tablet/escritorio angosto; las tablas conservan scroll interno.
- **DEF-013** `recipe-detail.js` — la calculadora cambia a `type="text"` con `inputmode="numeric"` y `pattern="[0-9]*"` para que entradas como `abc` lleguen al validador propio sin warning de consola.
- **DEF-014** `responsive.css` — el sticker decorativo del detalle pasa a flujo normal en móvil para no solapar el título.
- `home.js` — los bloques `coming-soon-slot` muestran texto visible "Próximamente"; se eliminó `aria-hidden="true"` para no ocultar información significativa a tecnologías asistivas.

### Biblioteca de Recetas

- **DEF-006** `recipes.js` — eliminadas las tarjetas "Próximamente" del grid de la Biblioteca. Grid muestra solo recetas reales. Estado vacío accesible con botón "Ver todas" que resetea filtros.
- `home.js` — slots "Próximamente" en "Últimas Recetas" renombrados de `recipe-card recipe-card--locked` a `coming-soon-slot` (clase editorial, sin semántica de recipe).

### Búsqueda

- **DEF-007** `recipes.js` — índice de búsqueda ampliado: name + description + category + categoryLabel + subcategory + ingredients[].name + tags. Normalización de diacríticos vía `_normalize()`. Debounce 300 ms. El botón "Ver todas" resetea búsqueda y categoría simultáneamente.

### Planificador Semanal

- **DEF-008** `menus.js` — eliminado `contenteditable`. Cada celda es ahora un `<button>` que abre un `<dialog>` nativo accesible. El selector muestra solo recetas reales. Escape cierra; foco vuelve al botón que abrió el dialog.
- `state.js` — `setMenuSlot(key, slug)` valida que el slug exista en `CS.data.recipes`. `_sanitizeMenuPlan()` descarta texto libre e IDs inexistentes al cargar localStorage.
- `state.js` — añadido `getMenuShoppingItems()`: calcula ingredientes del plan escalando `shoppingItems × N` asignaciones.
- `menus.js` — lista de compras muestra sección auto-derivada del plan + sección manual.

### CSS

- `components.css` — estilos para `.coming-soon-slot`, `.planner-cell__btn`, `.recipe-selector-dialog`, `.recipe-selector`, `.task-list__group-label`, `.task-list__item--plan`.

---

## v0.2.0-audit — 2026-06-16 (correctivos pre-commit)

Correcciones menores detectadas durante la auditoría pre-commit de v0.2.0. No son cambios de funcionalidad; son limpieza de código y coherencia documental.

### Correcciones de código

- **DEF-001** `recipes.js` — `updateGrid()`: ampliado el filtro del contador para incluir `r.description` y `r.categoryLabel`, igualándolo a `renderGrid()`.
- **DEF-002** `styles.css` — eliminada regla CSS muerta `.section-heading--muted .material-symbols-outlined { opacity: 0.5; }` (Material Symbols eliminado en v0.2.0).
- **DEF-003** `router.js` — la eliminación de `var Pages = window.ChefScrapbook.Pages || {};` fue superada por **DEF-009**; el alias local sí es necesario dentro de `_render()`.

### Correcciones documentales

- **DEF-004** `docs/ASSET-SOURCES.md` — sección Material Symbols marcada como ELIMINADO (antes aparecía con estado activo).

### Limitaciones documentadas (sin corrección)

- **DEF-005** `menus.js` — navegación semanal prev/next es un placeholder visual sin persistencia histórica. Registrado como DT-009.

---

## v0.1.0 — 2026-06 (version inicial)

### Creacion del proyecto

- Creacion del repositorio Git local.
- Implementacion de `index.html` con receta Galletas de Chispas v3.2.
- Sistema de tokens CSS Vanilla Ink (`tokens.css`).
- Estilos completos (`styles.css`).
- Logica de calculadora de porciones (`app.js`) con BASE_PORTIONS = 27.
- SVG ilustrativos propios: `chef-avatar.svg` y `chocolate-chip-cookies.svg`.
- Licencia propietaria (`LICENSE`).
- `README.md` con documentacion del proyecto.
- `docs/ASSET-SOURCES.md` con registro de activos y licencias.

### Eliminacion de activos externos

- Reemplazo de imagenes de Google AI Studio (licencia desconocida) por SVG propios.
- Nunca se incluyeron en ningun commit publico.

### Documentacion del vault

- Creacion de `Chef Scrapbook AI/` como vault Obsidian.
- 44 documentos Markdown numerados (00-42 + MASTER_PROMPT).
- Configuracion Obsidian (`.obsidian/app.json`, `appearance.json`, `core-plugins.json`).
- Snippet CSS Vanilla Ink para el vault.
- Prompt maestro: `CHEF_SCRAPBOOK_MASTER_PROMPT.md`.
- Comando `/chef.scrapbook`: `.github/prompts/chef.scrapbook.prompt.md`.
- Instrucciones Copilot: `.github/copilot-instructions.md`.

### Paquete de marca v3.1

- Localizacion del ZIP en Descargas del usuario.
- Extraccion en `.local-reference/brand-manual-v3.1/` (161 archivos).
- Documentacion de inconsistencias v3.0/v3.1 en `[[32_ERRORES_CONOCIDOS]]`.

## Documentos relacionados

- [[32_ERRORES_CONOCIDOS]]
- [[34_DEUDA_TECNICA]]
- [[04_ESTADO_ACTUAL]]
