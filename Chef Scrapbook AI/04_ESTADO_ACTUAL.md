---
title: "Estado Actual del Proyecto"
document_id: "CS-04"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "estado"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
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
> Este documento refleja el estado **real del codigo** verificado el 2026-06-16. No refleja visiones ni planes salvo que esten implementados.

**Version:** 0.1.0
**Archivo principal:** `index.html`

## Modulos implementados

| Modulo | Estado | Notas |
|---|---|---|
| Sidebar de navegacion (desktop) | IMPLEMENTADO | 4 items, icono activo |
| Cabecera sticky (movil) | IMPLEMENTADO | Marca + boton de perfil |
| Receta Galletas de Chispas v3.2 | IMPLEMENTADO | Unica receta disponible |
| Tabla de ingredientes (5 ingredientes) | IMPLEMENTADO | Con id data-binding |
| Calculadora de porciones | IMPLEMENTADO | BASE_PORTIONS = 27 |
| Botones step +/- | IMPLEMENTADO | Delta 1 con validacion |
| Visualizacion de peso total | IMPLEMENTADO | Sincronizada con calculadora |
| Metodo de preparacion (3 pasos) | IMPLEMENTADO | OL semantico |
| Perfil nutricional | IMPLEMENTADO | Valores estaticos por porcion de 50g |
| Figura polaroid | IMPLEMENTADO | SVG propio de galletas |
| Stickers decorativos | IMPLEMENTADO | Excellent! y GOOD JOB |
| Cinta washi | IMPLEMENTADO | 3 variantes de posicion y color |
| Validacion de entrada | IMPLEMENTADO | Entero positivo 1-9999 |
| aria-live region | IMPLEMENTADO | Anuncio en cada cambio |
| Skip link | IMPLEMENTADO | href a #main-content |
| Focus visible | IMPLEMENTADO | Nativo + CSS reforzado |

## Accesibilidad verificada en codigo

- role="banner" en header.
- role="alert" y aria-live="assertive" en mensaje de error.
- aria-live="polite" en region de anuncios de calculadora.
- aria-label en navegacion, tabla, calculadora y botones step.
- aria-current="page" en item activo del sidebar.
- aria-invalid actualizado por validacion JS.
- aria-describedby vinculando input a mensaje de error.
- alt="" en avatar (decorativo).
- alt descriptivo en imagen de galletas.
- aria-hidden="true" en iconos decorativos.

## Activos implementados

| Activo | Archivo | Estado |
|---|---|---|
| Tokens CSS | assets/css/tokens.css | IMPLEMENTADO |
| Estilos completos | assets/css/styles.css | IMPLEMENTADO |
| Logica calculadora | assets/js/app.js | IMPLEMENTADO |
| Avatar provisional | assets/images/chef-avatar.svg | IMPLEMENTADO - provisional |
| Ilustracion galletas | assets/images/chocolate-chip-cookies.svg | IMPLEMENTADO |

## Identidad implementada vs. pendiente

| Elemento | Estado actual | Norma del manual |
|---|---|---|
| Paleta Vanilla Ink | IMPLEMENTADO - tokens.css | Conforme |
| Tipografias | IMPLEMENTADO - Google Fonts CDN | Conforme (carga externa) |
| Iconografia | IMPLEMENTADO - Material Symbols | DIVERGENCIA: manual usa kit SVG propio |
| Logo oficial | NO IMPLEMENTADO | Logo gato chef en .local-reference |
| Avatar sidebar | SVG provisional (chef-avatar.svg) | No es el logo oficial |
| Lenguaje grafico | PARCIALMENTE IMPLEMENTADO | Washi, papel, stickers basicos |

## Textos placeholder pendientes de actualizar

> [!warning]
> Los siguientes textos son de desarrollo y deben corregirse antes de publicar:
> - `.mobile-header__brand`: "Culinary Journal" -> "Chef Scrapbook"
> - `.sidebar__name`: "Mi Cocina" -> nombre o usuario real
> - `.sidebar__tagline`: "Sweet & Savory" -> "Cocina, crea y disfruta"

## Dependencias externas activas

- fonts.googleapis.com - Prata, Mulish, Great Vibes, Material Symbols.
- fonts.gstatic.com - archivos de fuentes.
- Sin CDNs de JavaScript ni bibliotecas externas.

## Estado de publicacion

- PLANIFICADO: GitHub Pages en https://rmoreno-dev.github.io/chef-scrapbook/
- No publicado. Solo accesible localmente en http://localhost via Laragon.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[09_MODULOS_Y_FUNCIONALIDADES]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[34_DEUDA_TECNICA]]
- [[42_MANUAL_DE_NORMAS_BRANDING]]
