---
title: "Estado Actual del Proyecto"
document_id: "CS-04"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "estado"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-17"
last_verified_against_code: "2026-06-17"
source_of_truth: true
related_documents:
  - "[[01_RESUMEN_EJECUTIVO]]"
  - "[[06_ARQUITECTURA_TECNICA]]"
  - "[[09_MODULOS_Y_FUNCIONALIDADES]]"
tags:
  - chef-scrapbook
  - estado
  - implementacion
---

# Estado Actual del Proyecto

> [!important]
> Este documento refleja el estado **real del codigo** verificado el 2026-06-17. No refleja visiones ni planes salvo que esten implementados.

**Version:** 0.2.1 — activos web oficiales integrados
**Arquitectura:** SPA (Single Page Application) con hash routing
**Archivo principal:** `index.html` (shell estatico — el contenido de cada vista es renderizado por JS)

## Vistas implementadas

| Vista | Ruta hash | Modulo | Estado |
|---|---|---|---|
| Inicio | `#/inicio` | `assets/js/pages/home.js` | IMPLEMENTADO |
| Biblioteca de Recetas | `#/recetas` | `assets/js/pages/recipes.js` | IMPLEMENTADO |
| Detalle de Receta | `#/recetas/:slug` | `assets/js/pages/recipe-detail.js` | IMPLEMENTADO |
| Menu Semanal | `#/menus` | `assets/js/pages/menus.js` | IMPLEMENTADO |

## Modulos JavaScript

| Modulo | Archivo | Exposicion global | Estado |
|---|---|---|---|
| Datos de recetas | `assets/js/data/recipes.js` | `window.ChefScrapbook.data` | IMPLEMENTADO |
| Estado y persistencia | `assets/js/state.js` | `window.ChefScrapbook.State` | IMPLEMENTADO |
| Router hash | `assets/js/router.js` | `window.ChefScrapbook.Router` | IMPLEMENTADO |
| Pagina Inicio | `assets/js/pages/home.js` | `window.ChefScrapbook.Pages.home` | IMPLEMENTADO |
| Pagina Recetas | `assets/js/pages/recipes.js` | `window.ChefScrapbook.Pages.recipes` | IMPLEMENTADO |
| Pagina Detalle | `assets/js/pages/recipe-detail.js` | `window.ChefScrapbook.Pages.recipeDetail` | IMPLEMENTADO |
| Pagina Menus | `assets/js/pages/menus.js` | `window.ChefScrapbook.Pages.menus` | IMPLEMENTADO |
| App bootstrap | `assets/js/app.js` | `.Calculator`, `.toast()`, `.escapeHTML()` | IMPLEMENTADO |

## Funcionalidades implementadas

### Navegacion SPA

| Componente | Descripcion | Estado |
|---|---|---|
| Sidebar desktop | 3 items: Inicio, Recetas, Menus con iconos SVG oficiales (icon-*.svg) | IMPLEMENTADO |
| Logo oficial horizontal | `<picture>` WebP + PNG en sidebar; clase `cs-brand-logo` | IMPLEMENTADO |
| Sello de marca (watermark) | `cs-brand-seal-watermark` en hero de Inicio; opacidad 0.26 | IMPLEMENTADO |
| Cabecera movil | Isotipo PNG/WebP + boton hamburguesa icon-menu.svg | IMPLEMENTADO |
| Overlay movil | Cierra sidebar al hacer clic fuera | IMPLEMENTADO |
| Escape key | Cierra sidebar desde cualquier elemento | IMPLEMENTADO |
| Indicador de ruta activa | aria-current="page" actualizado por el router | IMPLEMENTADO |
| Skip link | Accesibilidad: salta a #main-content | IMPLEMENTADO |
| Sello de marca | brand-stamp.svg en pie del sidebar | IMPLEMENTADO |

### Catalogo de recetas

| Componente | Descripcion | Estado |
|---|---|---|
| Receta implementada | Galletas de Chispas v3.2 (unica receta real) | IMPLEMENTADO |
| Busqueda completa | Indice por nombre, descripcion, categoria, subcategoria, ingredientes. Debounce 300 ms. Normalizacion de tildes. | IMPLEMENTADO |
| Filtros por categoria | Panaderia, Reposteria, Cocina salada | IMPLEMENTADO |
| Boton de favorito | Toggle por receta, persistido en localStorage | IMPLEMENTADO |

### Detalle de receta y calculadora

| Componente | Descripcion | Estado |
|---|---|---|
| Tabla de ingredientes | 5 ingredientes con pesos, unidades y fases | IMPLEMENTADO |
| Calculadora de porciones | BASE_PORTIONS = 27, escalado en tiempo real | IMPLEMENTADO |
| Botones +/- | Incremento y decremento | IMPLEMENTADO |
| Validacion | Entero positivo 1-9999 | IMPLEMENTADO |
| Anuncio aria-live | Para lectores de pantalla | IMPLEMENTADO |
| Metodo de preparacion | 3 pasos (Cremado, Emulsion, Incorporacion) | IMPLEMENTADO |
| Perfil nutricional | Valores estaticos por porcion de 50g | IMPLEMENTADO |

### Planificador semanal

| Componente | Descripcion | Estado |
|---|---|---|
| Grid 7 dias x 4 tiempos | Desayuno, Almuerzo, Cena, Snack | IMPLEMENTADO |
| Selector de receta | Dialog accesible (`<dialog>` + `showModal()`) por celda. Sin contenteditable. Almacena slug o null. | IMPLEMENTADO |
| Migracion defensiva | `_load()` descarta texto libre y slugs inexistentes del estado previo. | IMPLEMENTADO |
| Tareas de preparacion | Lista con toggle y eliminar | IMPLEMENTADO |
| Lista de compras | Items del plan (auto) + items extra (manuales). Plan derivado de slugs validos. | IMPLEMENTADO |

### Persistencia (localStorage)

La clave raiz es `chef-scrapbook-v1`. El estado se serializa como JSON con la siguiente estructura:

| Campo | Tipo | Descripcion |
|---|---|---|
| `favorites` | array de slugs | Recetas marcadas como favoritas |
| `menuPlan` | objeto por dia/tiempo | Asignaciones del planificador semanal |
| `shoppingList` | array de items | Lista de compras con estado de completado |
| `prepTasks` | array de tareas | Tareas de preparacion con estado de completado |
| `preferences` | objeto | Preferencias del usuario |

## Activos implementados

| Tipo | Archivo / Carpeta | Estado |
|---|---|---|
| Tokens CSS | `assets/css/tokens.css` | IMPLEMENTADO |
| CSS activos oficiales | `css/chef-scrapbook-assets.css` | IMPLEMENTADO |
| Estilos globales SPA | `assets/css/styles.css` | IMPLEMENTADO |
| Estilos de componentes | `assets/css/components.css` | IMPLEMENTADO |
| Estilos responsive | `assets/css/responsive.css` | IMPLEMENTADO |
| Favicon set completo | `assets/favicon/` (ico, 32, 16, apple-touch, manifest) | IMPLEMENTADO |
| Iconos oficiales (32 SVG) | `assets/icons/svg/icon-*.svg` | IMPLEMENTADO |
| Iconos PNG | `assets/icons/png/` | IMPLEMENTADO |
| Branding — logos y sello | `assets/branding/png/`, `assets/branding/webp/`, SVG wrappers | IMPLEMENTADO |
| Decorativos (17 SVG) | `assets/decorative/svg/` | IMPLEMENTADO |
| Patrones (4 SVG) | `assets/patterns/svg/` | IMPLEMENTADO |
| Tokens de diseno | `assets/tokens.json` | IMPLEMENTADO |
| Registro de activos | `docs/ASSET-SOURCES.md` | IMPLEMENTADO |

## Identidad implementada vs. pendiente

| Elemento | Estado actual | Norma del manual |
|---|---|---|
| Paleta Vanilla Ink | IMPLEMENTADO — tokens.css | Conforme |
| Tipografias | IMPLEMENTADO — Google Fonts CDN | Conforme (carga externa, CDN provisional) |
| Iconografia | IMPLEMENTADO — kit SVG propio en assets/icons/ | Conforme |
| Favicon | IMPLEMENTADO — isotipo cat chef SVG | Conforme |
| Textos UI | IMPLEMENTADO — "Chef Scrapbook", "Cocina · Crea · Disfruta" | Conforme |
| Logo oficial | IMPLEMENTADO — horizontal transparent WebP/PNG en sidebar | Conforme |
| Sello de marca | IMPLEMENTADO — watermark en hero, opacidad 0.26 | Conforme |
| Favicon set | IMPLEMENTADO — ico, 32, 16, apple-touch, site.webmanifest | Conforme |
| Lenguaje grafico | IMPLEMENTADO — botanicos, decorativos, washi-tape, patrones | Conforme |

## Dependencias externas activas

- `fonts.googleapis.com` — Prata, Mulish, Great Vibes (no Material Symbols).
- `fonts.gstatic.com` — archivos de fuentes.
- Sin CDNs de JavaScript ni librerias externas.
- Sin Material Symbols (migrado a SVG propios del kit de marca).

## Estado de publicacion

- PLANIFICADO: GitHub Pages en https://rmoreno-dev.github.io/chef-scrapbook/
- No publicado aun. Solo accesible localmente en http://localhost via Laragon.
- Proximo paso: habilitar GitHub Pages desde branch main / raiz.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[09_MODULOS_Y_FUNCIONALIDADES]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[34_DEUDA_TECNICA]]
- [[42_MANUAL_DE_NORMAS_BRANDING]]
