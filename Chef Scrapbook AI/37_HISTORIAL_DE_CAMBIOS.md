---
title: "Historial de Cambios"
document_id: "CS-37"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "historial"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - historial
---

# Historial de Cambios

## v0.1.0 — 2026-06 (version inicial)

### Creacion del proyecto

- Creacion del repositorio Git local.
- Implementacion de index.html con receta Galletas de Chispas v3.2.
- Sistema de tokens CSS Vanilla Ink (tokens.css).
- Estilos completos (styles.css).
- Logica de calculadora de porciones (app.js) con BASE_PORTIONS = 27.
- SVG ilustrativos propios: chef-avatar.svg y chocolate-chip-cookies.svg.
- Licencia propietaria (LICENSE).
- README.md con documentacion del proyecto.
- docs/ASSET-SOURCES.md con registro de activos y licencias.

### Eliminacion de activos externos

- Reemplazo de imagenes de Google AI Studio (licencia desconocida) por SVG propios.
- Nunca se incluyeron en ningun commit publico.

### Documentacion del vault

- Creacion de Chef Scrapbook AI/ como vault Obsidian.
- 44 documentos Markdown numerados (00-42 + MASTER_PROMPT).
- Configuracion Obsidian (.obsidian/app.json, appearance.json, core-plugins.json).
- Snippet CSS Vanilla Ink para el vault.
- Prompt maestro: CHEF_SCRAPBOOK_MASTER_PROMPT.md.
- Comando /chef.scrapbook: .github/prompts/chef.scrapbook.prompt.md.
- Instrucciones Copilot: .github/copilot-instructions.md.

### Paquete de marca v3.1

- Localizacion del ZIP en Descargas del usuario.
- Extraccion en .local-reference/brand-manual-v3.1/ (161 archivos).
- Documentacion de inconsistencias v3.0/v3.1 en 32_ERRORES_CONOCIDOS.

## Diferencias encontradas durante la documentacion

| Elemento | Estado codigo | Norma manual |
|---|---|---|
| Logo | chef-avatar.svg provisional | Logo oficial gato chef (no integrado) |
| Iconografia | Material Symbols | Kit SVG propio del manual |
| Textos UI | "Culinary Journal", etc. | "Chef Scrapbook", "Cocina, crea y disfruta" |
| Porciones base | 27 (real) | 12 (ejemplo conceptual del manual) |

## Documentos relacionados

- [[32_ERRORES_CONOCIDOS]]
- [[34_DEUDA_TECNICA]]
- [[04_ESTADO_ACTUAL]]
