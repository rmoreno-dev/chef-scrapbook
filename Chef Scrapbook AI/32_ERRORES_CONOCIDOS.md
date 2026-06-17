---
title: "Errores Conocidos"
document_id: "CS-32"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "errores"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - errores
---

# Errores Conocidos

## Inconsistencias del paquete de marca

### ERROR-01: Inconsistencia de version en el manual

| Campo | Valor |
|---|---|
| Portada del manual | v3.1 |
| Tabla de control documental (seccion 00) | v3.0 |
| Comentario en assets/tokens.css del paquete | "Chef Scrapbook v3.0" |

**Decision documental:** La version canonica es 3.1 (portada y nombre del paquete). Las referencias internas a 3.0 son inconsistencias no corregidas.

**Registro:** [[37_HISTORIAL_DE_CAMBIOS]] | [[34_DEUDA_TECNICA]]

### ERROR-02: Discrepancia en el conteo de boards

| Fuente | Valor |
|---|---|
| Texto del manual (seccion Activos incluidos) | "16 tableros visuales de referencia" |
| Paquete extraido real | 38 boards (board-00 a board-37) + board-cover-v31 |

**Decision documental:** Prevalece el inventario real. Los 38 boards son los recursos actuales.

**Registro:** [[37_HISTORIAL_DE_CAMBIOS]] | [[34_DEUDA_TECNICA]]

### ERROR-03: Archivo board con nombre incompatible con Windows

El archivo `board-24-fotografia:-producir,-seleccionar-y-editar.png` contiene `:` en el nombre, lo que no es valido en Windows. No se pudo extraer del ZIP.

**Estado:** Solo el archivo con `:` en el nombre falla. Los 160 demas archivos del paquete se extrajeron correctamente.

## Divergencias en el codigo

### ERROR-04: Textos placeholder en la UI — RESUELTO en v0.2.0

| Elemento | Texto en v0.1.0 | Texto en v0.2.0 |
|---|---|---|
| Cabecera movil | "Culinary Journal" | "Chef Scrapbook" |
| Sidebar nombre | "Mi Cocina" | "Chef Scrapbook" |
| Sidebar tagline | "Sweet & Savory" | "Cocina · Crea · Disfruta" |

**Estado:** RESUELTO. El rediseno integral de v0.2.0 (2026-06-16) implemento los textos y la nomenclatura oficial de la marca.

### ERROR-05: Avatar provisional (PENDIENTE)

`assets/images/chef-avatar.svg` es una ilustracion provisional. El logo oficial del gato chef con gorro, arco y ramas NO esta integrado en el codigo.

**Estado:** Tarea pendiente documentada en [[34_DEUDA_TECNICA]] DT-001.

## Defectos detectados y corregidos en v0.2.0-patch — 2026-06-16

### DEF-009: Router SPA con referencia `Pages` no declarada — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/router.js` |
| Descripción | `_render()` invocaba `Pages.home`, `Pages.recipes`, `Pages.recipeDetail` y `Pages.menus` sin declarar `Pages` dentro del módulo. En navegador esto generaba `ReferenceError` y dejaba el contenido principal vacío. |
| Causa | La auditoría previa clasificó erróneamente `var Pages = window.ChefScrapbook.Pages \|\| {};` como variable muerta. |
| Solución | Reintroducida la referencia local `var Pages = window.ChefScrapbook.Pages \|\| {};` dentro de `_render()`, antes del enrutamiento. |
| Estado | **RESUELTO** — corregido durante QA final v0.2.0-patch (2026-06-16). |

### DEF-010: Vista Recetas sin alias local `CS` — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/recipes.js` |
| Descripción | `render()` usaba `CS.data` para calcular el contador inicial, pero no declaraba `var CS = window.ChefScrapbook;`. La ruta `#/recetas` quedaba vacía tras limpiar el contenido principal. |
| Solución | Declarado `var CS = window.ChefScrapbook;` al inicio de `render()`. |
| Estado | **RESUELTO** — corregido durante QA final v0.2.0-patch (2026-06-16). |

### DEF-011: Fragmentos HTML concatenados sin espacios entre atributos — RESUELTO

| Campo | Valor |
|---|---|
| Archivos | `assets/js/pages/home.js`, `assets/js/pages/recipes.js`, `assets/js/pages/recipe-detail.js`, `assets/js/pages/menus.js` |
| Descripción | Algunos tags generados por arrays de strings concatenaban atributos sin espacio (`<inputtype=...>`, `class="..."type=...`). Esto impedía seleccionar inputs, botones, favoritos, filtros y celdas por sus atributos reales. |
| Solución | Añadidos espacios iniciales en los fragmentos de atributos afectados. |
| Estado | **RESUELTO** — corregido durante QA final v0.2.0-patch (2026-06-16). |

### DEF-012: Overflow horizontal de página en tablet/escritorio angosto — RESUELTO

| Campo | Valor |
|---|---|
| Archivos | `assets/css/styles.css`, `assets/css/responsive.css` |
| Descripción | Desde 768px, `.main-content` sumaba `margin-left: var(--sidebar-width)` pero mantenía ancho completo, provocando desborde horizontal de página. |
| Solución | Añadidos `min-width: 0`, `overflow-x: hidden` y `width: calc(100% - var(--sidebar-width))` en el layout con sidebar. Los scrolls de tablas siguen siendo internos. |
| Estado | **RESUELTO** — corregido durante QA final v0.2.0-patch (2026-06-16). |

### DEF-013: Calculadora con validación nativa antes del validador propio — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/recipe-detail.js` |
| Descripción | El input de porciones usaba `type="number"`. Al probar `abc`, Chrome descartaba el valor antes de que el validador propio lo procesara y emitía warning de consola. |
| Solución | Cambiado a `type="text"` con `inputmode="numeric"` y `pattern="[0-9]*"`, manteniendo validación JS accesible y mensajes diferenciados. |
| Estado | **RESUELTO** — corregido durante QA final v0.2.0-patch (2026-06-16). |

### DEF-014: Sticker decorativo solapaba el título en móvil estrecho — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/css/responsive.css` |
| Descripción | En la vista de detalle a 390px, `.sticker-excellent` mantenía posición absoluta y podía invadir visualmente el título de la receta. |
| Solución | En `max-width: 767px`, el sticker pasa a flujo normal (`position: static`, `inline-block`) para conservarlo visible sin cubrir texto. |
| Estado | **RESUELTO** — corregido durante QA final v0.2.0-patch (2026-06-16). |

### DEF-006: Tarjetas "Próximamente" en el grid de Recetas — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/recipes.js` — `renderGrid()` |
| Descripción | El grid de la Biblioteca de Recetas rellenaba hasta 6 slots con tarjetas `recipe-card--locked` ("Próximamente"), usando la misma clase semántica que las tarjetas reales. Estas tarjetas ficticias aparecían mezcladas con la receta real en el grid. |
| Impacto | Violaba la regla de honestidad del catálogo. Las tarjetas "Próximamente" compartían clase CSS semántica con recipe cards reales. |
| Solución | Eliminada la lógica de relleno. `renderGrid()` ahora muestra exclusivamente recetas reales. Estado vacío accesible cuando los filtros no producen resultados. |
| Estado | **RESUELTO** — corregido en v0.2.0-patch (2026-06-16). |

### DEF-007: Búsqueda sin índice de ingredientes — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/recipes.js` — `renderGrid()`, `updateGrid()` |
| Descripción | El buscador solo cubría `r.name`, `r.description` y `r.categoryLabel`. No indexaba `r.subcategory`, ni los nombres de los ingredientes (`r.ingredients[].name`), ni normalizaba tildes ni variaciones de mayúsculas. Sin debounce. |
| Impacto | "harina" no encontraba la receta. "mantequilla" tampoco. Búsqueda inconsistente para usuarios. |
| Solución | Añadidas `_normalize()` (lowercase + strip diacritics + trim) y `_buildIndex(r)` (concatena name + description + category + categoryLabel + subcategory + ingredient names + tags). Debounce 300 ms. La búsqueda ahora normaliza tanto el índice como el término de entrada. |
| Estado | **RESUELTO** — corregido en v0.2.0-patch (2026-06-16). |

### DEF-008: Planificador semanal con contenteditable (texto libre) — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/menus.js`, `assets/js/state.js` |
| Descripción | Las celdas del planificador usaban `contenteditable="true"`. El valor almacenado en `menuPlan` era texto libre arbitrario (cualquier cadena hasta 120 caracteres), no un ID o slug de receta. La lista de compras no tenía conexión con las asignaciones del planner. |
| Impacto | No existía integridad referencial entre planner y catálogo. La lista de compras no derivaba de recetas reales. Riesgo de XSS indirecto por renderizar texto libre sin escape estricto. |
| Solución | Eliminado `contenteditable`. Cada celda es ahora un `<button>` que abre un `<dialog>` accesible con `showModal()`. El selector muestra solo las recetas reales. `setMenuSlot(key, slug)` valida que el slug exista en `CS.data.recipes`. `_sanitizeMenuPlan()` descarta texto libre y slugs inexistentes al cargar. Shopping list auto-derivada de `getMenuShoppingItems()`. |
| Estado | **RESUELTO** — corregido en v0.2.0-patch (2026-06-16). |

## Defectos detectados en auditoría pre-commit v0.2.0 — 2026-06-16

### DEF-001: Filtro de contador de búsqueda más estrecho que el filtro del grid — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/recipes.js` — función `updateGrid()` |
| Descripción | `renderGrid()` buscaba en `r.name`, `r.description` y `r.categoryLabel`. El contador en `updateGrid()` solo buscaba en `r.name`. El contador mostraba 0 cuando el grid sí tenía resultados por descripción o categoría. |
| Impacto | Inconsistencia visual (contador ≠ resultados). Inobservable con 1 receta, pero incorrecto por diseño. |
| Solución | `updateGrid()` ampliado para incluir `r.description` y `r.categoryLabel` en el filtro. |
| Estado | **SUPERADO POR DEF-009** — la eliminación fue incorrecta; `Pages` debe existir como alias local dentro de `_render()`. |

### DEF-002: Regla CSS muerta para Material Symbols — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/css/styles.css` — selector `.section-heading--muted` |
| Descripción | El selector `.section-heading--muted .material-symbols-outlined { opacity: 0.5; }` referenciaba la librería Material Symbols, eliminada en v0.2.0. La clase nunca se aplica porque la librería no existe en el proyecto. |
| Impacto | Código muerto — sin efecto visual. Riesgo de confusión futura. |
| Solución | Selector eliminado. Se conservó solo la variante `img`. |
| Estado | **RESUELTO** — corregido en auditoría pre-commit v0.2.0 (2026-06-16). |

### DEF-003: Variable muerta `Pages` en router.js — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `assets/js/router.js` |
| Descripción | La variable `var Pages = window.ChefScrapbook.Pages \|\| {};` estaba declarada pero nunca usada. El código en `_render()` accedía a `window.ChefScrapbook.Pages` directamente (como `Pages.home`, etc.), usando el identificador `Pages` implícito del ámbito externo, no la variable local. |
| Impacto | Código muerto — sin efecto en ejecución. |
| Solución | Variable eliminada. |
| Estado | **RESUELTO** — corregido en auditoría pre-commit v0.2.0 (2026-06-16). |

### DEF-004: Sección Material Symbols en ASSET-SOURCES.md no marcada como eliminada — RESUELTO

| Campo | Valor |
|---|---|
| Archivo | `docs/ASSET-SOURCES.md` |
| Descripción | La sección "Iconos — Material Symbols Outlined" aparecía con estado "Licencia comercial libre ✓", como si siguiera activa. No reflejaba la eliminación del activo en v0.2.0. |
| Solución | Estado actualizado a ELIMINADO con nota: "reemplazado por el kit SVG propio de marca en v0.2.0." |
| Estado | **RESUELTO** — corregido en auditoría pre-commit v0.2.0 (2026-06-16). |

### DEF-005: Navegación semanal en Menús sin persistencia histórica — DOCUMENTADO como DT

| Campo | Valor |
|---|---|
| Archivo | `assets/js/pages/menus.js` |
| Descripción | Los botones "semana anterior / siguiente" solo cambian el texto de la etiqueta. No cargan ni guardan datos históricos por semana: todas las entradas del planner usan el slot de la semana actual en localStorage. |
| Impacto | El usuario no puede recuperar el plan de semanas pasadas. |
| Decisión | Limitación de diseño conocida. No es un bug sino una funcionalidad no implementada. Registrado como [[34_DEUDA_TECNICA]] DT-009. |
| Estado | **DOCUMENTADO** — no se corrige en esta iteración. |

## Documentos relacionados

- [[34_DEUDA_TECNICA]]
- [[37_HISTORIAL_DE_CAMBIOS]]
- [[38_INCIDENTES_Y_SOLUCIONES]]
