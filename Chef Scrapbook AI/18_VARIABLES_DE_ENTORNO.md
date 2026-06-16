---
title: "Variables de Entorno"
document_id: "CS-18"
status: "vigente"
implementation_status: "NO APLICA"
project: "Chef Scrapbook"
document_type: "configuracion"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[19_CONFIGURACION_LOCAL]]"
  - "[[24_SEGURIDAD]]"
tags:
  - chef-scrapbook
  - variables
  - entorno
---

# Variables de Entorno

## Estado actual

**No existen variables de entorno requeridas.** La aplicación es completamente estática. No hay servidor, no hay backend, no hay secretos, no hay configuración de entorno.

| Verificación | Resultado |
|---|---|
| Archivo .env | NO EXISTE — no necesario |
| Archivo .env.local | NO EXISTE — no necesario |
| Variables de entorno en JS | NO EXISTEN |
| Secretos en el repositorio | NO EXISTEN |
| Tokens de API | NO EXISTEN |

## Política de secretos

- **Prohibido** incluir secretos, tokens de API, contraseñas, claves privadas ni datos sensibles en el repositorio.
- **Prohibido** incluir archivos `.env` en commits.
- **Prohibido** hacer push de credenciales bajo ninguna circunstancia.
- La arquitectura actual (frontend estático puro) no requiere ni admite secretos en cliente.

## Variables de entorno futuras (PLANIFICADO)

Si en el futuro se implementa un backend, se usarán variables de entorno para:

| Variable | Descripción | Ejemplo seguro |
|---|---|---|
| DATABASE_URL | Conexión a base de datos | `postgresql://localhost:5432/db` |
| JWT_SECRET | Secreto para firmar tokens | `[nunca hardcodear en repositorio]` |
| NEXT_PUBLIC_API_URL | URL pública del API | `<configurar_localmente>` |

**Estas variables NUNCA deben aparecer en el repositorio público.**

## Documentos relacionados

- [[19_CONFIGURACION_LOCAL]]
- [[24_SEGURIDAD]]
- [[26_BACKUPS_Y_RECUPERACION]]
