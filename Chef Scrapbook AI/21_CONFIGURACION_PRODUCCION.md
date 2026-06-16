---
title: "Configuracion de Produccion"
document_id: "CS-21"
status: "vigente"
implementation_status: "PLANIFICADO"
project: "Chef Scrapbook"
document_type: "configuracion"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[23_CI_CD_Y_DESPLIEGUE]]"
  - "[[20_CONFIGURACION_STAGING]]"
tags:
  - chef-scrapbook
  - produccion
---

# Configuracion de Produccion

GitHub Pages desde rama main. URL: https://rmoreno-dev.github.io/chef-scrapbook/

Todaslas rutas de assets son relativas. Compatible con GitHub Pages sin configuracion adicional. Sin variables de entorno en cliente. Sin secretos.

Activar en: Settings > Pages > Branch: main / root.

## Rollback

Git permite revertir a cualquier commit anterior. Si hay un error en produccion, se revierte el commit y se hace push. GitHub Pages se actualiza automaticamente.

## Documentos relacionados

- [[23_CI_CD_Y_DESPLIEGUE]]
- [[20_CONFIGURACION_STAGING]]
