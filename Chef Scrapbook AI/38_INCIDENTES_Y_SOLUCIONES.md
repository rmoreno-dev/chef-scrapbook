---
title: "Incidentes y Soluciones"
document_id: "CS-38"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "incidentes"
version: "2.0.0"
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
| Evidencia | `docs/ASSET-SOURCES.md` registra el historial. |

## INC-002: Archivo de board con nombre incompatible con Windows

| Campo | Detalle |
|---|---|
| Severidad | Bajo |
| Fecha | 2026-06-16 |
| Descripcion | El archivo `board-24-fotografia:-producir,-seleccionar-y-editar.png` contiene ":" en el nombre, no valido en Windows. |
| Impacto | El archivo no pudo extraerse del ZIP. Los 160 archivos restantes se extrajeron correctamente. |
| Solucion | El archivo queda en el ZIP. Para acceder, usar macOS o Linux, o renombrar antes de extraer. |
| Estado | ABIERTO — impacto bajo |

## INC-003: Inconsistencia de version en paquete de marca

| Campo | Detalle |
|---|---|
| Severidad | Bajo |
| Fecha | 2026-06-16 |
| Descripcion | El paquete de marca usa v3.1 en portada pero v3.0 en la tabla de control documental y en tokens.css. |
| Impacto | Confusion al referenciar la version. No afecta la funcionalidad. |
| Solucion | Documentado en [[32_ERRORES_CONOCIDOS]]. Version canonica: 3.1. |
| Estado | ABIERTO — pendiente normalizacion del kit |

## INC-004: Implementacion estructural sin sincronizacion del vault

| Campo | Detalle |
|---|---|
| Severidad | Medio |
| Fecha | 2026-06-16 |
| Descripcion | El rediseno integral de Chef Scrapbook a arquitectura SPA (v0.2.0) se implemento completamente — 37 archivos nuevos o modificados — sin actualizar el vault documental. 22+ documentos del vault permanecieron describiendo la arquitectura v0.1.0 despues de la implementacion. |
| Impacto | Riesgo de que agentes IA o desarrolladores trabajen en sesiones futuras sobre documentacion obsoleta, tomando decisiones incorrectas. Viola el protocolo de actualizacion documental. |
| Causa raiz | El DOCUMENTATION COMPLETION GATE no estaba incluido como condicion bloqueante para declarar una tarea de codigo como completa. La actualizacion documental era una regla existente (FASE 9 del MASTER_PROMPT) pero no tenia el peso de una condicion de cierre. |
| Solucion | Auditoria documental completa realizada el 2026-06-16. Todos los documentos del vault verificados y actualizados. DOCUMENTATION COMPLETION GATE agregado como condicion bloqueante en: [[29_GUIA_DE_DESARROLLO]], [[39_PROMPTS_Y_REGLAS_PARA_IA]], [[CHEF_SCRAPBOOK_MASTER_PROMPT]] y `.github/prompts/chef.scrapbook.prompt.md`. |
| Estado | RESUELTO |
| Archivos del vault actualizados | 04, 05, 06, 07, 08, 09, 10, 12, 16, 17, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, README.md, copilot-instructions.md, chef.scrapbook.prompt.md, CHEF_SCRAPBOOK_MASTER_PROMPT.md |

## INC-005: Tres desviaciones funcionales en Biblioteca, Búsqueda y Planificador

| Campo | Detalle |
|---|---|
| Severidad | Medio |
| Fecha | 2026-06-16 |
| Descripcion | Detectadas durante la revisión post-audit del código de v0.2.0. (1) La Biblioteca de Recetas mostraba tarjetas "Próximamente" con la clase `recipe-card`, mezcladas con la receta real. (2) La búsqueda no indexaba ingredientes ni normalizaba tildes. (3) El planificador usaba `contenteditable` almacenando texto libre en `menuPlan`, sin validación referencial con el catálogo. |
| Impacto | (1) Violación de la regla de honestidad del catálogo. (2) Búsqueda incompleta: "harina" o "mantequilla" no devolvían resultados. (3) Sin integridad referencial: cualquier texto podía guardarse como "receta". Lista de compras desconectada del plan. |
| Causa raiz | Las desviaciones surgieron durante el rediseño SPA v0.2.0, que priorizó la implementación de la arquitectura sin verificar todos los comportamientos funcionales contra las reglas de negocio. El DOCUMENTATION COMPLETION GATE (INC-004) no cubre la validación de comportamiento contra reglas — solo la sincronización documental. |
| Solucion | DEF-006: eliminadas locked cards del grid. DEF-007: índice completo con `_buildIndex()` y `_normalize()`, debounce 300ms. DEF-008: `<dialog>` nativo con `showModal()`, `setMenuSlot(slug)` con validación, `_sanitizeMenuPlan()` en carga, `getMenuShoppingItems()` para derivar lista de compras. |
| Estado | RESUELTO — v0.2.0-patch (2026-06-16) |
| Archivos modificados | `home.js`, `recipes.js`, `state.js`, `menus.js`, `components.css` |
| Documentados en | DEF-006, DEF-007, DEF-008 en [[32_ERRORES_CONOCIDOS]] |

## Documentos relacionados

- [[32_ERRORES_CONOCIDOS]]
- [[34_DEUDA_TECNICA]]
