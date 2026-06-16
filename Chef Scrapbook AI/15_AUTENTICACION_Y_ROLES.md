---
title: "Autenticacion y Roles"
document_id: "CS-15"
status: "vigente"
implementation_status: "NO APLICA"
project: "Chef Scrapbook"
document_type: "seguridad"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[14_API_Y_ENDPOINTS]]"
  - "[[24_SEGURIDAD]]"
tags:
  - chef-scrapbook
  - autenticacion
  - roles
---

# Autenticacion y Roles

> [!warning]
> **No existe autenticacion.** No existen roles de usuario. La aplicacion es publica y anonima. Este documento describe el diseno futuro.

## Estado actual

| Elemento | Estado |
|---|---|
| Autenticacion | NO EXISTE |
| Sesiones | NO EXISTE |
| Tokens JWT | NO EXISTE |
| Roles de usuario | NO EXISTE |
| Permisos | NO EXISTE |
| Login | NO EXISTE |
| Registro | NO EXISTE |

La aplicacion es totalmente publica. Cualquier usuario puede acceder sin identificarse.

## Principios futuros del manual v3.1 (PLANIFICADO)

El manual v3.1 define los siguientes principios para cuando se implemente autenticacion:

- **Privacidad por defecto:** las notas y variantes personales son privadas.
- **Exportacion de datos:** el usuario puede descargar todos sus datos.
- **Borrado de cuenta:** el usuario puede eliminar su cuenta y datos completamente.
- **Consentimiento informado:** la analitica requiere consentimiento explicito.
- **Minima solicitud de datos:** pedir solo lo imprescindible.

## Roles futuros conceptuales — PLANIFICADO

| Rol | Descripcion | Capacidades |
|---|---|---|
| Visitante anonimo | Sin cuenta | Leer recetas, usar calculadora |
| Usuario registrado | Con cuenta verificada | Guardar, anotar, crear colecciones |
| Editor | Usuario con privilegio de publicacion | Crear y editar recetas |
| Administrador | Rodolfo Moreno (propietario) | Control total |

## Documentos relacionados

- [[14_API_Y_ENDPOINTS]]
- [[24_SEGURIDAD]]
- [[18_VARIABLES_DE_ENTORNO]]
