---
title: "Deuda Tecnica"
document_id: "CS-34"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "deuda"
version: "1.0.0"
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
| Descripcion | chef-avatar.svg es una ilustracion provisional. El logo oficial del gato chef con gorro, arco y ramas no esta integrado. |
| Impacto | Identidad incompleta. No se puede publicar con la marca completa. |
| Accion | Definir variante a usar, obtener autorizacion, integrar SVG oficial. |

## DT-002: Iconografia provisional (Material Symbols)

| Campo | Detalle |
|---|---|
| Estado | PENDIENTE |
| Descripcion | La app usa Material Symbols Outlined. El manual define un kit SVG propio de 24x24px, trazo 1.75-2px. |
| Impacto | Inconsistencia visual con la marca oficial. |
| Accion | Migrar a iconos SVG del kit oficial en una etapa futura. |

## DT-003: Textos placeholder en UI

| Campo | Detalle |
|---|---|
| Estado | PENDIENTE |
| Descripcion | "Culinary Journal", "Mi Cocina", "Sweet & Savory" son textos de desarrollo. |
| Impacto | Errores de marca visibles antes de publicacion. |
| Accion | Actualizar con nombre oficial y eslogan antes de publicar. |

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
| Accion | Alojar fuentes localmente en assets/fonts/ en una etapa futura. |

## DT-007: Documentacion en version inicial

| Campo | Detalle |
|---|---|
| Estado | EN PROGRESO |
| Descripcion | El vault y todos los documentos son v1.0.0. Requieren revision y actualizacion conforme el proyecto evoluciona. |
| Accion | Actualizar documentos afectados con cada cambio relevante. |

## Documentos relacionados

- [[32_ERRORES_CONOCIDOS]]
- [[36_TAREAS_PENDIENTES]]
- [[35_ROADMAP]]
