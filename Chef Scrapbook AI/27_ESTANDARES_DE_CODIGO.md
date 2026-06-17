---
title: "Estandares de Codigo"
document_id: "CS-27"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "estandares"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - estandares
---

# Estandares de Codigo

## HTML

- HTML5 semantico. Landmarks obligatorios: `header`, `nav`, `main`.
- `lang="es"` en el elemento `html` raiz.
- Codificacion UTF-8 declarada en `meta charset`.
- `index.html` es el shell SPA; el contenido de las vistas se inyecta en `#main-content` via JS.
- Atributos ARIA completos en todos los elementos interactivos y regiones.
- `alt` text en todas las imagenes (vacio solo para decorativas).

## CSS

- Custom properties CSS nativas en `:root` (definidas en `tokens.css`).
- Nomenclatura BEM: `.bloque__elemento--modificador`.
- Usar tokens del sistema: `--color-*`, `--font-*`, `--space-*`, `--radius-*`, `--shadow-*`, `--transition-*`.
- Sin colores hardcoded fuera de `tokens.css`.
- Media queries organizadas en `responsive.css`; breakpoints principales: 768px y 1024px.
- Nunca usar `!important` salvo para overrides de accesibilidad documentados.
- Evitar selectores de ID en CSS; preferir clases.

## JavaScript

### Patron de modulo

Todos los archivos JS del proyecto usan IIFE con `'use strict'`:

```javascript
(function() {
  'use strict';
  // codigo del modulo
})();
```

Cada modulo acumula en el namespace global `window.ChefScrapbook`:

```javascript
window.ChefScrapbook = window.ChefScrapbook || {};
window.ChefScrapbook.NombreModulo = { ... };
```

### Reglas de JavaScript

- `var` en lugar de `const`/`let` (decision de arquitectura: compatibilidad y consistencia interna).
- Sin modulos ES6 (`import`/`export`).
- Sin dependencias externas.
- No usar `eval()` ni `Function()`.
- No usar `console.log` en produccion.
- Validar todo input del usuario antes de usarlo.
- No modificar el DOM antes de que el documento este listo.

### innerHTML y XSS

- Las vistas SPA renderizan HTML dinamico usando `innerHTML` en `#main-content`. Esto es intencional y correcto.
- **Regla:** Toda cadena proveniente de input del usuario DEBE pasarse por `ChefScrapbook.escapeHTML(str)` antes de interpolarse en HTML.
- Datos del catalogo de recetas (hardcoded en `data/recipes.js`) no requieren sanitizacion.
- Preferir `textContent` para insertar texto plano sin estructura HTML.

```javascript
// Correcto: renderizar vista completa
document.getElementById('main-content').innerHTML = buildViewHTML();

// Correcto: insertar texto del usuario
el.innerHTML = '<span>' + ChefScrapbook.escapeHTML(userText) + '</span>';

// Correcto: insertar texto plano
el.textContent = valor;

// Incorrecto: NO interpolar input de usuario sin escapeHTML
el.innerHTML = '<span>' + userInput + '</span>';
```

## Nombres

- Archivos CSS/JS: kebab-case (`tokens.css`, `recipe-detail.js`).
- Variables JS: camelCase (`isFavorite`, `menuPlan`); constantes globales: UPPER_SNAKE_CASE (`BASE_PORTIONS`).
- Clases CSS: BEM (`.sidebar__nav-link--active`, `.recipe-card__title`).
- IDs HTML: kebab-case (`main-content`, `nav-toggle`, `toast-container`).
- Rutas hash: kebab-case en minusculas (`#/recetas`, `#/recetas/galletas-de-chispas`).

## SVG

- Sin scripts inline, sin referencias externas, sin datos sensibles.
- Declarar `viewBox`. Usar `width` y `height` en el elemento `img` o directamente en SVG.
- `aria-hidden="true"` en SVG decorativos.
- SVG funcionales (iconos en botones sin texto visible): requieren `aria-label` o texto alternativo.

## Performance

- Fuentes con `display=swap` para evitar FOIT.
- Rutas relativas para compatibilidad con GitHub Pages.
- Sin recursos de bloqueo de render innecesarios.

## Verificacion de sintaxis JS

Antes de reportar una tarea como completa, verificar:

```bash
node --check assets/js/app.js
node --check assets/js/router.js
node --check assets/js/state.js
node --check assets/js/data/recipes.js
# ... y los modulos de paginas
```

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[24_SEGURIDAD]]
- [[28_CONVENCIONES_DEL_PROYECTO]]
- [[30_GUIA_DE_PRUEBAS]]
