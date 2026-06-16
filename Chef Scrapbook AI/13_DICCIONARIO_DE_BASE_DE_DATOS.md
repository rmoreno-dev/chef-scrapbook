---
title: "Diccionario de Base de Datos"
document_id: "CS-13"
status: "vigente"
implementation_status: "NO APLICA"
project: "Chef Scrapbook"
document_type: "datos"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[12_MODELO_DE_DATOS]]"
  - "[[14_API_Y_ENDPOINTS]]"
tags:
  - chef-scrapbook
  - base-de-datos
  - datos
---

# Diccionario de Base de Datos

> [!warning]
> **No existe base de datos.** Este documento define las entidades conceptuales para una futura implementacion. Ninguna de estas entidades existe como esquema persistente actualmente.

## Estado actual

| Elemento | Estado |
|---|---|
| Base de datos relacional | NO EXISTE |
| Esquema de tablas | NO EXISTE |
| Migraciones | NO EXISTE |
| ORM | NO EXISTE |
| Conexion a BD | NO EXISTE |

## Entidades futuras — PLANIFICADO

### Receta

| Campo | Tipo | Descripcion |
|---|---|---|
| id | UUID | Identificador unico |
| slug | string | URL amigable unica |
| version | string | Semver de la receta (ej: 3.2.0) |
| title | string | Nombre de la receta |
| description | text | Descripcion editorial |
| base_servings | integer | Porciones base de la receta |
| yield_total_g | decimal | Peso total de masa en gramos |
| yield_per_unit_g | decimal | Peso por porcion en gramos |
| active_time_min | integer | Tiempo activo en minutos |
| total_time_min | integer | Tiempo total en minutos |
| difficulty | enum | basica, intermedia, avanzada |
| author | string | Nombre del autor |
| reviewed_at | date | Fecha de ultima revision |
| created_at | datetime | Fecha de creacion |
| updated_at | datetime | Fecha de ultima modificacion |

### Ingrediente

| Campo | Tipo | Descripcion |
|---|---|---|
| id | UUID | Identificador unico |
| recipe_id | UUID | Clave foranea a Receta |
| name | string | Nombre del ingrediente |
| base_grams | decimal | Cantidad base en gramos |
| baker_percent | decimal | Porcentaje de panadero |
| phase | string | Fase de incorporacion |
| order | integer | Orden en la tabla |

### Paso

| Campo | Tipo | Descripcion |
|---|---|---|
| id | UUID | Identificador unico |
| recipe_id | UUID | Clave foranea a Receta |
| order | integer | Numero de paso |
| action | string | Verbo de accion principal |
| detail | text | Descripcion completa del paso |
| sensory | string | Senal sensorial esperada |

### Coleccion (PLANIFICADO)

| Campo | Tipo | Descripcion |
|---|---|---|
| id | UUID | Identificador unico |
| user_id | UUID | Clave foranea a Usuario |
| name | string | Nombre de la coleccion |
| description | text | Descripcion |

### Nota (PLANIFICADO)

| Campo | Tipo | Descripcion |
|---|---|---|
| id | UUID | Identificador unico |
| user_id | UUID | Clave foranea a Usuario |
| recipe_id | UUID | Clave foranea a Receta |
| content | text | Contenido de la nota personal |
| created_at | datetime | Fecha de creacion |

### Usuario (PLANIFICADO)

| Campo | Tipo | Descripcion |
|---|---|---|
| id | UUID | Identificador unico |
| email | string | Correo electronico (unico) |
| name | string | Nombre mostrado |
| created_at | datetime | Fecha de registro |
| last_login | datetime | Ultimo acceso |

## Documentos relacionados

- [[12_MODELO_DE_DATOS]]
- [[14_API_Y_ENDPOINTS]]
- [[15_AUTENTICACION_Y_ROLES]]
