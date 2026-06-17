---
title: "Configuracion de Produccion"
document_id: "CS-21"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "configuracion"
version: "2.0.1"
brand_manual_version: "3.1"
last_updated: "2026-06-17"
last_verified_against_code: "2026-06-17"
source_of_truth: true
related_documents:
  - "[[23_CI_CD_Y_DESPLIEGUE]]"
  - "[[20_CONFIGURACION_STAGING]]"
tags:
  - chef-scrapbook
  - produccion
---

# Configuracion de Produccion

## Estado

**PUBLICADO Y VERIFICADO** — 2026-06-17

| Campo | Valor |
|---|---|
| Plataforma | GitHub Pages |
| URL publica | https://rmoreno-dev.github.io/chef-scrapbook/ |
| Repositorio | https://github.com/rmoreno-dev/chef-scrapbook |
| Branch | main |
| Directorio fuente | / (root) |
| SHA publicado | `2bb215bdba12f39361cdb989ba7591a1df9ade29` |
| Commit | feat: integrate official Chef Scrapbook web assets |
| Fecha primer despliegue | 2026-06-17 |
| Tipo de deploy | Automatico en cada push a main |

## Arquitectura de produccion

- Sitio estatico 100%. Sin servidor, sin SSR, sin API.
- Todas las rutas de assets son relativas. Compatibles con subdirectorio `/chef-scrapbook/`.
- Hash routing SPA (`#/inicio`, `#/recetas`, etc.) — compatible con GitHub Pages sin configuracion adicional.
- Sin variables de entorno en cliente.
- Sin secretos.

## Configuracion GitHub Pages

- Source: Deploy from a branch.
- Branch: main.
- Folder: / (root).
- Custom domain: no configurado.
- HTTPS: habilitado por GitHub (certificado automatico).

## Activos verificados en produccion (2026-06-17)

| Recurso | HTTP | Content-Type |
|---|---|---|
| index.html | 200 | text/html |
| css/chef-scrapbook-assets.css | 200 | text/css |
| Logo horizontal webp | 200 | image/webp |
| Logo horizontal png | 200 | image/png |
| Sello seal webp | 200 | image/webp |
| pattern-grid.svg | 200 | image/svg+xml |
| icon-home.svg | 200 | image/svg+xml |
| icon-recipe.svg | 200 | image/svg+xml |
| icon-calendar.svg | 200 | image/svg+xml |
| icon-menu.svg | 200 | image/svg+xml |
| favicon.ico | 200 | image/vnd.microsoft.icon |
| favicon-32.png | 200 | image/png |
| apple-touch-icon.png | 200 | image/png |
| site.webmanifest | 200 | application/manifest+json |

## Rollback

Git permite revertir a cualquier commit anterior.

```bash
git log --oneline
git revert HEAD
git push origin main
```

GitHub Pages se actualiza automaticamente con el nuevo commit.

## Limitaciones conocidas

- Sin dominio personalizado (configuracion pendiente — T-011).
- Fuentes cargadas desde Google Fonts CDN (requiere conexion a internet).
- Una sola receta real implementada (T-006 — segunda receta pendiente).

## Documentos relacionados

- [[23_CI_CD_Y_DESPLIEGUE]]
- [[20_CONFIGURACION_STAGING]]
- [[04_ESTADO_ACTUAL]]
- [[37_HISTORIAL_DE_CAMBIOS]]
