---
title: "Tareas Pendientes"
document_id: "CS-36"
status: "vigente"
implementation_status: "PLANIFICADO"
project: "Chef Scrapbook"
document_type: "planificacion"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - planificacion
---

# Tareas Pendientes

| ID | Tarea | Dominio | Prioridad | Estado | Dependencia | Aceptacion |
|---|---|---|---|---|---|---|
| T-001 | Integrar logo oficial del gato chef | Branding | Alta | PENDIENTE | Autorizacion de Rodolfo | Logo visible en header y favicon |
| T-002 | Actualizar texto "Culinary Journal" a "Chef Scrapbook" | Contenido | Alta | COMPLETADO — v0.2.0 | - | Texto correcto implementado |
| T-003 | Actualizar "Sweet & Savory" al eslogan oficial | Contenido | Alta | COMPLETADO — v0.2.0 | - | "Cocina · Crea · Disfruta" implementado |
| T-004 | Publicar en GitHub Pages | Despliegue | Alta | PENDIENTE | Logo integrado o autorizacion expresa | URL publica funcional |
| T-005 | Migrar iconografia a kit SVG oficial | Branding | Media | COMPLETADO — v0.2.0 | - | 18 iconos SVG en assets/icons/, sin Material Symbols |
| T-006 | Agregar segunda receta | Contenido | Media | PLANIFICADO | GitHub Pages activo | Segunda receta funcional en catalogo |
| T-007 | Implementar catalogo navegable de recetas | Producto | Media | COMPLETADO — v0.2.0-patch | - | Grid con busqueda y filtros. Sin tarjetas ficticias. Estado vacio accesible. |
| T-008 | Busqueda completa | Producto | Media | COMPLETADO — v0.2.0-patch | - | Busqueda por nombre, descripcion, categoria, subcategoria, ingredientes. Debounce 300ms. Normalizacion tildes. (DEF-007) |
| T-009 | Pruebas E2E con Playwright | Calidad | Baja | PLANIFICADO | Fase 6 | Suite de pruebas verde |
| T-010 | Fuentes hospedadas localmente | Rendimiento | Baja | PLANIFICADO | - | Sin dependencia CDN de fuentes |
| T-011 | Dominio personalizado | Despliegue | Baja | PROPUESTO | GitHub Pages activo | URL personalizada |
| T-012 | Normalizar version 3.0/3.1 en paquete de marca | Documentacion | Baja | PLANIFICADO | - | Version consistente en todos los archivos |
| T-013 | Primer commit del rediseno v0.2.0 | Control de versiones | Alta | PENDIENTE AUTORIZACION | Autorizacion de Rodolfo | Commit con todos los archivos del rediseno |

## Documentos relacionados

- [[35_ROADMAP]]
- [[34_DEUDA_TECNICA]]
- [[04_ESTADO_ACTUAL]]
