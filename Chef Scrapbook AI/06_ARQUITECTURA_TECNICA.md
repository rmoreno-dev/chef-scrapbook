---
title: "Arquitectura Tecnica"
document_id: "CS-06"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "arquitectura"
version: "1.0.0"
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

- HTML5 semantico con landmarks (header, nav, main).
- Una sola pagina: index.html en la raiz.
- Sin templates, sin includes, sin build step.
- Codificacion UTF-8.
- lang="es" en el elemento html.

## CSS

- **tokens.css**: variables CSS en :root. Paleta Vanilla Ink, tipografias, espaciado, radios, sombras.
- **styles.css**: componentes y layout (sidebar, cards, tabla, calculadora, responsive).
- Sin preprocesador. CSS3 custom properties nativas.
- Nomenclatura BEM: `.block__element--modifier`.
- Responsive con media queries. Breakpoints: 768px y 1024px.

## JavaScript

- app.js envuelto en IIFE (`(function() { 'use strict'; ... })();`).
- ES5 compatible (var, function, no arrow functions, no const/let).
- Sin dependencias. Sin import/export. Sin modulos.
- BASE_PORTIONS = 27 como constante inmutable de calculo.
- BASE_TOTAL = 1350g (suma de ingredientes base).
- BASE_WEIGHT_PER_PORTION = 50g.
- Ingredientes: array de objetos con id y base en gramos.

## Logica de la calculadora

```
factor = porciones_deseadas / BASE_PORTIONS
cantidad_escalada = Math.round(ingrediente.base * factor)
```

- Input validado: entero, positivo, entre 1 y 9999.
- Actualiza DOM via getElementById y textContent.
- Anuncia cambios via aria-live polite.
- Muestra error via aria-live assertive + aria-invalid.

## SVG

- chef-avatar.svg: ilustracion circular del sidebar. Sin scripts, sin referencias externas.
- chocolate-chip-cookies.svg: ilustracion del batch de galletas. Sin scripts.
- Ambos son propios y aptos para publicacion.

## Tokens CSS (tokens.css actual)

Los tokens en assets/css/tokens.css son mas detallados que el archivo tokens.css del paquete de marca:

| Categoria | Tokens en codigo | Diferencia con paquete |
|---|---|---|
| Colores principales | --color-vanilla, --color-almond, etc. | Mismos valores hexadecimales |
| Derivados | --color-mauve-tint, --color-sage-tint, --color-ink-light | Adicionales al paquete |
| Semanticos | --bg-body, --bg-card, --text-heading, etc. | Adicionales al paquete |
| Tipografias | --font-editorial, --font-body, --font-accent | Nombres diferentes al paquete |
| Espaciado | Base 8px con nombres --space-1 a --space-8 | Escala diferente al paquete (base 4px) |
| Radios | --radius-sm (4px) a --radius-full | Escala diferente al paquete |
| Sombras | --shadow-card y --shadow-lift | Menos tokens que el paquete |

## Rutas

- Todas las rutas de assets son relativas: `assets/css/tokens.css`, `assets/js/app.js`, etc.
- Compatibles con GitHub Pages sin configuracion adicional.
- Sin rutas absolutas, sin variables de entorno, sin configuracion de servidor.

## Dependencias externas

- Google Fonts CDN: fuentes Prata, Mulish, Great Vibes.
- Google Fonts CDN: Material Symbols Outlined.
- Requieren conexion a internet para cargarse.
- No hay CDN de JS ni librerias externas.

## Limites de la arquitectura actual

- Sin persistencia de datos.
- Sin estado global entre sesiones.
- Sin comunicacion entre paginas.
- Sin service worker ni modo offline.
- Todo el estado de la calculadora vive en el DOM y en variables JS de sesion.

## Documentos relacionados

- [[05_ARQUITECTURA_GENERAL]]
- [[07_STACK_TECNOLOGICO]]
- [[12_MODELO_DE_DATOS]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[27_ESTANDARES_DE_CODIGO]]
