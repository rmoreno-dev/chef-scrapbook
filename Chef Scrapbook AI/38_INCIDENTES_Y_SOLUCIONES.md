---
title: "Incidentes y Soluciones"
document_id: "CS-38"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "incidentes"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - incidentes
---

# Incidentes y Soluciones

## INC-001: Activos externos con licencia desconocida

| Campo | Detalle |
|---|---|
| Severidad | Alto |
| Fecha | 2026-06 |
| Descripcion | Imagenes de Google AI Studio utilizadas provisionalmente como foto de perfil y foto de galletas tenian licencia desconocida. |
| Impacto | No publicables. Riesgo legal si se incluyen en produccion. |
| Solucion | Reemplazo completo por SVG ilustrativos propios creados especificamente para el proyecto. |
| Estado | RESUELTO |
| Evidencia | docs/ASSET-SOURCES.md registra el historial. |

## INC-002: Archivo de board con nombre incompatible con Windows

| Campo | Detalle |
|---|---|
| Severidad | Bajo |
| Fecha | 2026-06-16 |
| Descripcion | El archivo board-24-fotografia:-producir,-seleccionar-y-editar.png contiene ":" en el nombre, no valido en Windows. |
| Impacto | El archivo no pudo extraerse del ZIP. Los 160 archivos restantes se extrajeron correctamente. |
| Solucion | El archivo queda en el ZIP. Para acceder, usar macOS o Linux, o renombrar antes de extraer. |
| Estado | ABIERTO - impacto bajo |

## INC-003: Inconsistencia de version en paquete de marca

| Campo | Detalle |
|---|---|
| Severidad | Bajo |
| Fecha | 2026-06-16 |
| Descripcion | El paquete de marca usa v3.1 en portada pero v3.0 en la tabla de control documental y en tokens.css. |
| Impacto | Confusion al referenciar la version. No afecta la funcionalidad. |
| Solucion | Documentado en 32_ERRORES_CONOCIDOS. Version canonica: 3.1. |
| Estado | ABIERTO - pendiente normalizacion del kit |

## Documentos relacionados

- [[32_ERRORES_CONOCIDOS]]
- [[34_DEUDA_TECNICA]]
