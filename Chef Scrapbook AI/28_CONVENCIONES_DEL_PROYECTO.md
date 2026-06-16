---
title: "Convenciones del Proyecto"
document_id: "CS-28"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "convenciones"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
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
| Documentos del vault | NN_NOMBRE_EN_MAYUSCULAS.md | 04_ESTADO_ACTUAL.md |
| Activos de marca | chef-scrapbook_[activo]_[variante]_[color]_[version].[ext] | chef-scrapbook_logo_vertical_full_tinta_v31.svg |
| CSS | kebab-case | tokens.css, styles.css |
| JS | kebab-case | app.js |
| Imagenes | kebab-case | chef-avatar.svg |

## CSS — BEM

```
.bloque {}
.bloque__elemento {}
.bloque__elemento--modificador {}
```

Ejemplo real: `.sidebar__nav-link--active`, `.calculator__input`, `.paper-scrap--rotate-pos`.

## Ramas Git

- `main`: rama principal y de produccion.
- Feature branches si se usa en el futuro: `feature/nombre-feature`.

## Commits

- Mensaje en español.
- Formato: `[tipo]: descripcion breve`.
- Tipos: feat, fix, docs, style, refactor, test, chore.
- No hacer commit sin autorizacion de Rodolfo Moreno.

## Idioma

- Codigo y comentarios: espanol o ingles (consistente por archivo).
- Documentacion del vault: espanol.
- Mensajes de error en la UI: espanol.
- Commits: espanol.
- Fechas: ISO 8601 (AAAA-MM-DD).
- Versiones: semver (MAYOR.MENOR.PARCHE).

## Estados documentales

Usar exactamente: IMPLEMENTADO, PARCIALMENTE IMPLEMENTADO, PLANIFICADO, PROPUESTO, NO APLICA, DEPRECADO, BLOQUEADO.

## Documentos relacionados

- [[27_ESTANDARES_DE_CODIGO]]
- [[29_GUIA_DE_DESARROLLO]]
