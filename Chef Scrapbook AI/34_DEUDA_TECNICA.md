---
title: "Deuda Tecnica"
document_id: "CS-34"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "deuda"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - deuda
---

# Deuda Tecnica

## DT-001: Logo provisional vs. logo oficial

| Campo | Detalle |
|---|---|
| Estado | PENDIENTE |
| Descripcion | `chef-avatar.svg` es una ilustracion provisional. El logo oficial del gato chef con gorro, arco y ramas no esta integrado. |
| Impacto | Identidad incompleta. No se puede publicar con la marca completa. |
| Accion | Definir variante a usar, obtener autorizacion, integrar SVG oficial. |

## DT-002: Iconografia provisional (Material Symbols) — RESUELTO

| Campo | Detalle |
|---|---|
| Estado | RESUELTO — v0.2.0 (2026-06-16) |
| Descripcion original | La v0.1.0 usaba Material Symbols Outlined (CDN). El manual define un kit SVG propio de 24x24px. |
| Solucion | Kit SVG oficial copiado de `.local-reference/brand-manual-v3.1/assets/svg/` a `assets/icons/`. Sin CDN externo para iconos. |
| Evidencia | `assets/icons/` contiene 18 iconos SVG. `docs/ASSET-SOURCES.md` registra el origen. |

## DT-003: Textos placeholder en UI — RESUELTO

| Campo | Detalle |
|---|---|
| Estado | RESUELTO — v0.2.0 (2026-06-16) |
| Descripcion original | "Culinary Journal", "Mi Cocina", "Sweet & Savory" eran textos de desarrollo. |
| Solucion | El rediseno SPA implementa los textos oficiales: "Chef Scrapbook", "Cocina · Crea · Disfruta". |
| Evidencia | `index.html` v0.2.0 — sidebar y cabecera movil con textos correctos. |

## DT-004: Inconsistencia de version en paquete de marca

| Campo | Detalle |
|---|---|
| Estado | DOCUMENTADO — no bloqueante |
| Descripcion | El paquete dice v3.1 en portada pero v3.0 en la tabla de control documental y en tokens.css. |
| Impacto | Confusion potencial al referenciar el manual. |
| Accion | Normalizar en una futura revision del kit. |

## DT-005: Conteo incorrecto de boards en el manual

| Campo | Detalle |
|---|---|
| Estado | DOCUMENTADO — no bloqueante |
| Descripcion | El manual menciona "16 tableros" pero el paquete contiene 38 boards. |
| Impacto | El manual no describe correctamente su propio contenido. |
| Accion | Corregir en la proxima revision del manual. |

## DT-006: Fuentes requieren conexion de red

| Campo | Detalle |
|---|---|
| Estado | PLANIFICADO |
| Descripcion | Prata, Mulish y Great Vibes se cargan desde Google Fonts CDN. Sin red, caen a fallbacks. |
| Impacto | Degradacion visual en entornos offline. |
| Accion | Alojar fuentes localmente en `assets/fonts/` en una etapa futura. |

## DT-007: Documentacion del vault — EN PROGRESO

| Campo | Detalle |
|---|---|
| Estado | EN PROGRESO |
| Descripcion | El vault requiere actualizacion continua conforme el proyecto evoluciona. |
| Accion | Actualizar documentos afectados con cada cambio relevante usando el DOCUMENTATION COMPLETION GATE. |

## DT-008: Omision documental post-rediseno v0.2.0

| Campo | Detalle |
|---|---|
| Estado | RESUELTO — 2026-06-16 |
| Descripcion | El rediseno integral (v0.2.0) se implemento sin sincronizar el vault. Los 22+ documentos del vault quedaron desactualizados respecto al codigo real. |
| Impacto | Riesgo de que agentes IA o desarrolladores trabajen sobre documentacion obsoleta en sesiones futuras. |
| Solucion | Auditoria documental completa y actualizacion de todos los documentos afectados (2026-06-16). Ver [[38_INCIDENTES_Y_SOLUCIONES]] INC-004. |
| Prevencion | DOCUMENTATION COMPLETION GATE agregado a [[29_GUIA_DE_DESARROLLO]], [[39_PROMPTS_Y_REGLAS_PARA_IA]], [[CHEF_SCRAPBOOK_MASTER_PROMPT]] y `.github/prompts/chef.scrapbook.prompt.md`. |

## DT-009: Navegación semanal en Menús sin persistencia histórica

| Campo | Detalle |
|---|---|
| Estado | PLANIFICADO |
| Descripcion | Los botones "semana anterior / siguiente" en la vista Menús solo cambian el texto de la cabecera. No existe persistencia de datos por semana: el planificador siempre usa el slot de la semana actual en localStorage. |
| Impacto | El usuario no puede recuperar el plan de semanas anteriores. Percepción de funcionalidad que no está implementada. |
| Accion | Implementar clave de slot por semana ISO (ej. `2026-W24`) en localStorage; poblar la vista al navegar entre semanas. |
| Detectado | Auditoría pre-commit v0.2.0 — 2026-06-16. Ver [[32_ERRORES_CONOCIDOS]] DEF-005. |

## Documentos relacionados

- [[32_ERRORES_CONOCIDOS]]
- [[36_TAREAS_PENDIENTES]]
- [[35_ROADMAP]]
