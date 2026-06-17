---
title: "Integraciones Externas"
document_id: "CS-17"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "integraciones"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[07_STACK_TECNOLOGICO]]"
  - "[[24_SEGURIDAD]]"
tags:
  - chef-scrapbook
  - integraciones
---

# Integraciones Externas

## Integraciones activas

| Servicio | Uso | Licencia | Estado |
|---|---|---|---|
| Google Fonts (Prata, Mulish, Great Vibes) | Tipografias Vanilla Ink | SIL OFL 1.1 | IMPLEMENTADO |
| GitHub | Control de versiones y repositorio remoto | - | IMPLEMENTADO |
| GitHub Pages | Despliegue estatico | - | PLANIFICADO |

## Iconografia SVG local (kit del manual)

Los iconos de navegacion y UI son archivos SVG propios, copiados del kit oficial del manual v3.1 desde `.local-reference/brand-manual-v3.1/assets/svg/` a `assets/icons/`. No dependen de CDN externos.

| Ubicacion | Cantidad | Estado |
|---|---|---|
| `assets/icons/` | 18 iconos SVG | IMPLEMENTADO |
| `assets/branding/` | 4 activos de branding SVG | IMPLEMENTADO |
| `assets/images/favicon.svg` | 1 isotipo SVG | IMPLEMENTADO |

**Sistema iconografico:** Conforme al manual v3.1, grid 24x24 px, trazo redondeado, sin referencias externas.

## Integraciones eliminadas (registro historico)

| Servicio | Uso anterior | Estado | Motivo |
|---|---|---|---|
| Google Fonts Material Symbols (CDN) | Iconografia de navegacion provisional | ELIMINADO | Migrado al kit SVG oficial del manual v3.1 en v0.2.0 |

## Activos externos eliminados antes de publicacion

| Activo | URL | Motivo |
|---|---|---|
| Foto de perfil | `lh3.googleusercontent.com/aida-public/...` | Licencia desconocida (Google AI Studio) |
| Foto de galletas | `lh3.googleusercontent.com/aida-public/...` | Licencia desconocida (Google AI Studio) |

Ambas reemplazadas por SVG propios. Nunca se incluyeron en ningun commit publico.

## Paquete de referencia local

El paquete oficial de marca v3.1 esta en `.local-reference/brand-manual-v3.1/`. Contiene 161 archivos incluyendo logos oficiales SVG y PNG, boards, tokens, mockups. No se publica automaticamente.

## Documentos relacionados

- [[07_STACK_TECNOLOGICO]]
- [[24_SEGURIDAD]]
- [[34_DEUDA_TECNICA]]
- [[docs/ASSET-SOURCES.md]]
