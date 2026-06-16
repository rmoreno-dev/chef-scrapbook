---
title: "Errores Conocidos"
document_id: "CS-32"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "errores"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - errores
---

# Errores Conocidos

## Inconsistencias del paquete de marca

### ERROR-01: Inconsistencia de version en el manual

| Campo | Valor |
|---|---|
| Portada del manual | v3.1 |
| Tabla de control documental (seccion 00) | v3.0 |
| Comentario en assets/tokens.css del paquete | "Chef Scrapbook v3.0" |
| Cierre del manual | Puede indicar v3.0 |

**Decision documental:** La version canonica es 3.1 (portada y nombre del paquete). Las referencias internas a 3.0 son inconsistencias no corregidas.

**Registro:** [[37_HISTORIAL_DE_CAMBIOS]] | [[34_DEUDA_TECNICA]]

### ERROR-02: Discrepancia en el conteo de boards

| Fuente | Valor |
|---|---|
| Texto del manual (seccion Activos incluidos) | "16 tableros visuales de referencia" |
| Paquete extraido real | 38 boards (board-00 a board-37) + board-cover-v31 |

**Decision documental:** Prevalece el inventario real. Los 38 boards son los recursos actuales.

**Registro:** [[37_HISTORIAL_DE_CAMBIOS]] | [[34_DEUDA_TECNICA]]

### ERROR-03: Archivo boards con nombre incompatible con Windows

El archivo `board-24-fotografia:-producir,-seleccionar-y-editar.png` contiene `:` en el nombre, lo que no es valido en Windows. No se pudo extraer del ZIP.

**Estado:** Solo el archivo con `:` en el nombre falla. Los 160 demas archivos del paquete se extrajeron correctamente.

## Divergencias en el codigo

### ERROR-04: Textos placeholder en la UI

| Elemento | Texto actual | Texto correcto |
|---|---|---|
| .mobile-header__brand | "Culinary Journal" | "Chef Scrapbook" |
| .sidebar__name | "Mi Cocina" | Nombre del usuario o "Chef Scrapbook" |
| .sidebar__tagline | "Sweet & Savory" | "Cocina, crea y disfruta" |

**Estado:** No es un bug tecnico sino contenido de desarrollo no actualizado.

### ERROR-05: Avatar provisional

`assets/images/chef-avatar.svg` es una ilustracion provisional del sidebar. El logo oficial del gato chef con gorro, arco y ramas NO esta integrado en el codigo.

**Estado:** Tarea pendiente documentada en [[36_TAREAS_PENDIENTES]] y [[34_DEUDA_TECNICA]].

## Documentos relacionados

- [[34_DEUDA_TECNICA]]
- [[37_HISTORIAL_DE_CAMBIOS]]
- [[38_INCIDENTES_Y_SOLUCIONES]]
