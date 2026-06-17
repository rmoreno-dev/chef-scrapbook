---
title: "CI/CD y Despliegue"
document_id: "CS-23"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "despliegue"
version: "2.0.1"
brand_manual_version: "3.1"
last_updated: "2026-06-17"
last_verified_against_code: "2026-06-17"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - despliegue
---

# CI/CD y Despliegue

## Estado actual

**GitHub Pages ACTIVO** — https://rmoreno-dev.github.io/chef-scrapbook/

Desplegado automaticamente desde `main` en cada push autorizado.
Primer despliegue verificado: 2026-06-17 (commit `2bb215b`).

## Flujo de despliegue manual

1. Desarrollar y probar localmente (Laragon — http://localhost).
2. Revisar normas del manual v3.1.
3. Verificar accesibilidad y responsive.
4. Actualizar documentacion del vault (Documentation Completion Gate).
5. Solicitar autorizacion para commit y push de Rodolfo Moreno.
6. Hacer commit con mensaje descriptivo.
7. `git push origin main`.
8. GitHub Pages despliega automaticamente (tipicamente en 1-3 minutos).
9. Verificar HTTP 200 en activos criticos.
10. Smoke test remoto.

## GitHub Pages — Configuracion activa

| Campo | Valor |
|---|---|
| Plataforma | GitHub Pages |
| Branch | main |
| Directorio | / (root) |
| URL | https://rmoreno-dev.github.io/chef-scrapbook/ |
| HTTPS | Si (certificado automatico de GitHub) |
| Custom domain | No configurado |
| Workflow | Deploy from a branch (sin GitHub Actions) |

## Rollback

```bash
git log --oneline
git revert HEAD
git push origin main
```

GitHub Pages se actualiza automaticamente al publicar el commit de revert.

## Sin CI automatizado

No existe pipeline de CI/CD automatizado (sin GitHub Actions, sin tests automaticos en push). El proceso es manual y autorizado. Ver T-009 para la planificacion futura de pruebas E2E.

## Documentos relacionados

- [[21_CONFIGURACION_PRODUCCION]]
- [[26_BACKUPS_Y_RECUPERACION]]
