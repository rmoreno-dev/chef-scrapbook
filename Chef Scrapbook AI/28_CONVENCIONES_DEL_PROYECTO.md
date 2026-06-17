---
title: "Convenciones del Proyecto"
document_id: "CS-28"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "convenciones"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - convenciones
---

# Convenciones del Proyecto

## Archivos y carpetas

| Tipo | Convencion | Ejemplo |
|---|---|---|
| Documentos del vault | `NN_NOMBRE_EN_MAYUSCULAS.md` | `04_ESTADO_ACTUAL.md` |
| Activos de marca | `chef-scrapbook_[activo]_[variante]_[color]_[version].[ext]` | `chef-scrapbook_logo_vertical_full_tinta_v31.svg` |
| CSS | kebab-case | `tokens.css`, `components.css` |
| Modulos JS | kebab-case | `app.js`, `recipe-detail.js` |
| Iconos SVG | nombre semantico singular | `home.svg`, `heart.svg` |
| Imagenes | kebab-case | `favicon.svg`, `chef-avatar.svg` |

## Nomenclatura de modulos JavaScript

Cada archivo JS expone su API en el namespace `window.ChefScrapbook`:

| Archivo | Namespace | Descripcion |
|---|---|---|
| `data/recipes.js` | `ChefScrapbook.data` | Catalogo y metodos de consulta |
| `state.js` | `ChefScrapbook.State` | Estado persistente |
| `router.js` | `ChefScrapbook.Router` | Hash router |
| `pages/home.js` | `ChefScrapbook.Pages.home` | Funcion que renderiza la vista |
| `pages/recipes.js` | `ChefScrapbook.Pages.recipes` | Funcion que renderiza la vista |
| `pages/recipe-detail.js` | `ChefScrapbook.Pages.recipeDetail` | Funcion que recibe un slug |
| `pages/menus.js` | `ChefScrapbook.Pages.menus` | Funcion que renderiza la vista |
| `app.js` | `ChefScrapbook.Calculator`, `.toast()`, `.escapeHTML()` | Funciones globales compartidas |

## Nomenclatura de rutas hash

| Vista | Ruta hash | Patron |
|---|---|---|
| Inicio | `#/inicio` | literal |
| Biblioteca de Recetas | `#/recetas` | literal |
| Detalle de Receta | `#/recetas/galletas-de-chispas` | `/recetas/:slug` |
| Menu Semanal | `#/menus` | literal |

## Clave de localStorage

La clave raiz es `chef-scrapbook-v1`. Si se introduce un cambio incompatible en la estructura del estado, incrementar la version en la clave (ej: `chef-scrapbook-v2`) para evitar conflictos con datos guardados de versiones anteriores.

## CSS — BEM

```
.bloque {}
.bloque__elemento {}
.bloque__elemento--modificador {}
```

Ejemplos reales: `.sidebar__nav-link--active`, `.recipe-card__title`, `.toast--error`.

## Ramas Git

- `main`: rama principal y de produccion.
- Feature branches si se usa en el futuro: `feature/nombre-feature`.

## Commits

- Mensaje en espanol.
- Formato: `[tipo]: descripcion breve`.
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- No hacer commit sin autorizacion de Rodolfo Moreno.

## Idioma

- Codigo y comentarios: espanol o ingles (consistente por archivo).
- Documentacion del vault: espanol.
- Mensajes de error en la UI: espanol.
- Commits: espanol.
- Fechas: ISO 8601 (`AAAA-MM-DD`).
- Versiones: semver (`MAYOR.MENOR.PARCHE`).

## Estados documentales

Usar exactamente: `IMPLEMENTADO`, `PARCIALMENTE IMPLEMENTADO`, `PLANIFICADO`, `PROPUESTO`, `NO APLICA`, `DEPRECADO`, `BLOQUEADO`, `RESUELTO`.

## Documentos relacionados

- [[27_ESTANDARES_DE_CODIGO]]
- [[29_GUIA_DE_DESARROLLO]]
