---
title: "CI/CD y Despliegue"
document_id: "CS-23"
status: "vigente"
implementation_status: "PARCIALMENTE IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "despliegue"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - despliegue
---

# CI/CD y Despliegue

## Flujo manual actual

1. Desarrollar y probar localmente (Laragon).
2. Revisar normas del manual v3.1.
3. Verificar accesibilidad y responsive.
4. Actualizar documentacion del vault.
5. Solicitar autorizacion para commit y push.
6. Activar GitHub Pages en la configuracion del repositorio.

## GitHub Pages (planificado)

Despliega automaticamente desde la rama `main` en cada push autorizado. No requiere configuracion adicional para el frontend estatico.

## Rollback

```bash
git log --oneline
git revert HEAD
git push origin main
```

## Documentos relacionados

- [[21_CONFIGURACION_PRODUCCION]]
- [[26_BACKUPS_Y_RECUPERACION]]
