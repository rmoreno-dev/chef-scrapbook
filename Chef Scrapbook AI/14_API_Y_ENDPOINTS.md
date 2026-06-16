---
title: "API y Endpoints"
document_id: "CS-14"
status: "vigente"
implementation_status: "NO APLICA"
project: "Chef Scrapbook"
document_type: "api"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[06_ARQUITECTURA_TECNICA]]"
  - "[[13_DICCIONARIO_DE_BASE_DE_DATOS]]"
tags:
  - chef-scrapbook
  - api
  - endpoints
---

# API y Endpoints

> [!warning]
> **No existe API.** No existen endpoints. Todo el calculo y la logica se ejecutan en el cliente (navegador). Este documento define contratos conceptuales para una implementacion futura.

## Estado actual

| Elemento | Estado |
|---|---|
| API REST | NO EXISTE |
| API GraphQL | NO EXISTE |
| Endpoints | NO EXISTE |
| Servidor backend | NO EXISTE |
| Autenticacion de API | NO EXISTE |

La aplicacion es completamente estatica. No realiza ninguna solicitud HTTP a un servidor propio.

## Contratos futuros — PROPUESTO

> [!info]
> Los siguientes contratos son propuestas conceptuales. No deben implementarse sin autorizacion expresa.

### Recetas

| Metodo | Endpoint | Descripcion |
|---|---|---|
| GET | /api/recipes | Listar recetas con paginacion y filtros |
| GET | /api/recipes/:slug | Obtener receta por slug |
| POST | /api/recipes | Crear receta (autenticado, editor) |
| PUT | /api/recipes/:id | Actualizar receta (autenticado, editor) |

### Usuario

| Metodo | Endpoint | Descripcion |
|---|---|---|
| POST | /api/auth/register | Registro de nueva cuenta |
| POST | /api/auth/login | Inicio de sesion |
| POST | /api/auth/logout | Cierre de sesion |
| GET | /api/me | Perfil del usuario autenticado |
| DELETE | /api/me | Borrar cuenta y datos |

### Colecciones

| Metodo | Endpoint | Descripcion |
|---|---|---|
| GET | /api/collections | Listar colecciones del usuario |
| POST | /api/collections | Crear coleccion |
| DELETE | /api/collections/:id | Eliminar coleccion |

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[13_DICCIONARIO_DE_BASE_DE_DATOS]]
- [[15_AUTENTICACION_Y_ROLES]]
- [[18_VARIABLES_DE_ENTORNO]]
