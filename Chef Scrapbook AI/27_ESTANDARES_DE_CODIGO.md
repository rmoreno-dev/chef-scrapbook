---
title: "Estandares de Codigo"
document_id: "CS-27"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "estandares"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - estandares
---

# Estandares de Codigo

## HTML

- HTML5 semantico. Landmarks obligatorios: header, nav, main.
- lang="es" en el elemento html raiz.
- Codificacion UTF-8 declarada en meta charset.
- Una sola pagina (index.html) en la raiz del proyecto.
- Atributos ARIA completos en todos los elementos interactivos y regiones.
- alt text en todas las imagenes (vacio solo para decorativas).

## CSS

- Custom properties CSS nativas en :root.
- Nomenclatura BEM: .bloque__elemento--modificador.
- Usar tokens del sistema: --color-*, --font-*, --space-*, --radius-*, --shadow-*.
- Media queries: breakpoints 768px y 1024px.
- Nunca usar !important salvo para overrides de accesibilidad documentados.
- Evitar selectores de ID en CSS; preferir clases.

## JavaScript

- IIFE (function() { ... })() para encapsular modulo.
- var en lugar de const/let (ES5 por decision de arquitectura).
- No usar innerHTML; usar textContent para datos dinamicos.
- Validar todo input del usuario antes de usarlo.
- No modificar el DOM antes de DOMContentLoaded.
- No usar eval() ni Function().

## Nombres

- Archivos CSS/JS: kebab-case (tokens.css, app.js).
- Variables JS: camelCase (BASE_PORTIONS, handleChange).
- Clases CSS: BEM (calculator__input, sidebar__nav-link--active).
- IDs HTML: kebab-case (portion-input, calc-live).

## SVG

- Sin scripts inline, sin referencias externas, sin datos sensibles.
- Declarar viewBox. Usar width y height en el elemento img o directamente en SVG.
- aria-hidden="true" en SVG decorativos.

## Performance

- Imagenes con loading="lazy" cuando no son LCP.
- Fuentes con display=swap o display=optional para evitar FOIT.
- Rutas relativas para compatibilidad con GitHub Pages.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[28_CONVENCIONES_DEL_PROYECTO]]
- [[30_GUIA_DE_PRUEBAS]]
