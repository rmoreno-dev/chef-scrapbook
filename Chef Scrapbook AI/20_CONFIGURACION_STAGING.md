---
title: "Configuracion de Staging"
document_id: "CS-20"
status: "vigente"
implementation_status: "NO APLICA"
project: "Chef Scrapbook"
document_type: "configuracion"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[19_CONFIGURACION_LOCAL]]"
  - "[[21_CONFIGURACION_PRODUCCION]]"
tags:
  - chef-scrapbook
  - staging
  - configuracion
---

# Configuracion de Staging

## Estado actual

**No existe entorno de staging.** El proyecto pasa directamente de desarrollo local a produccion (GitHub Pages planificado).

GitHub Pages en una rama separada (ej: `staging`) no equivale automaticamente a un entorno de staging con las mismas garantias que un entorno dedicado.

## Propuesta futura

Cuando el proyecto crezca, se podria implementar staging como:

- Rama `develop` o `staging` en GitHub.
- Despliegue automatico en GitHub Pages desde esa rama.
- URL de staging: `https://rmoreno-dev.github.io/chef-scrapbook-staging/`.

## Criterios para crear staging

- Multiples recetas activas.
- Sistema de cuentas planificado.
- Pipeline CI/CD implementado.
- Necesidad de validar antes de produccion.

## Documentos relacionados

- [[19_CONFIGURACION_LOCAL]]
- [[21_CONFIGURACION_PRODUCCION]]
- [[23_CI_CD_Y_DESPLIEGUE]]
