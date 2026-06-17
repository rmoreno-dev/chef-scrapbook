---
title: "Prompts y Reglas para IA"
document_id: "CS-39"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "ia"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - ia
---

# Prompts y Reglas para IA

Este documento define las reglas que debe seguir cualquier agente IA que trabaje en Chef Scrapbook.

## Lectura selectiva

No cargar automáticamente todo el vault. Usar el índice ([[41_INDICE_GENERAL_DE_DOCUMENTACION]]) para seleccionar solo los documentos relevantes a la tarea actual.

**Documentos de carga obligatoria:**
1. [[00_README_DEL_PROYECTO]]
2. [[41_INDICE_GENERAL_DE_DOCUMENTACION]]
3. [[04_ESTADO_ACTUAL]]
4. [[08_ESTRUCTURA_DEL_REPOSITORIO]]
5. [[39_PROMPTS_Y_REGLAS_PARA_IA]] (este documento)

## Jerarquía de fuentes

1. Código actual: fuente de verdad sobre lo que está implementado.
2. Manual v3.1: fuente de verdad normativa para marca, identidad, UX, voz.
3. LICENSE: fuente de verdad legal.
4. Este vault: contexto y documentación.

## Prohibiciones absolutas

- NO inventar capacidades, APIs, endpoints, rutas ni configuraciones que no existan.
- NO presentar una característica futura como si estuviera implementada.
- NO mezclar el estado actual con la visión futura del manual.
- NO hacer commit, push ni despliegue sin autorización expresa de Rodolfo Moreno.
- NO instalar dependencias sin autorización.
- NO migrar el stack (a Next.js, TypeScript, etc.) sin autorización.
- NO incluir secretos, tokens ni credenciales en el código o en el vault.
- NO publicar el paquete de marca (`.local-reference/`) sin autorización.
- NO incluir el PDF del manual ni los ZIP en el repositorio.
- NO usar `BASE_PORTIONS = 12` (ejemplo del manual). El valor real es 27.

## Branding

- Consultar [[42_MANUAL_DE_NORMAS_BRANDING]] para CUALQUIER cambio visual, de contenido o de voz.
- El logo oficial NO es `chef-avatar.svg`. Es el gato chef en `.local-reference/`.
- La iconografía actual (Material Symbols) NO es el kit oficial del manual.
- Los colores de la paleta Vanilla Ink son inmutables sin autorización.
- Los cambios estructurales de marca (logo, paleta, fuente, eslogan) requieren aprobación de Rodolfo Moreno.

## Seguridad

- Validar todo input del usuario. En la calculadora: entero positivo 1-9999.
- Solo `textContent` para datos dinámicos. Nunca `innerHTML` con datos del usuario.
- Sin rutas absolutas. Solo rutas relativas compatibles con GitHub Pages.
- Sin rutas basadas en el esquema de archivo local en ninguna ruta documentada.

## Pruebas

- Antes de reportar una tarea como completa, verificar: consola limpia, responsive, calculadora, teclado, contraste.
- Registrar casos de prueba en [[31_CASOS_DE_PRUEBA]].

## Actualización documental

Después de cualquier cambio en el código, evaluar si hay que actualizar:
- [[04_ESTADO_ACTUAL]]
- [[36_TAREAS_PENDIENTES]]
- [[37_HISTORIAL_DE_CAMBIOS]]
- Y según corresponda: [[09_MODULOS_Y_FUNCIONALIDADES]], [[12_MODELO_DE_DATOS]], [[16_REGLAS_DE_NEGOCIO]], [[31_CASOS_DE_PRUEBA]], [[32_ERRORES_CONOCIDOS]], [[33_DECISIONES_TECNICAS]], [[34_DEUDA_TECNICA]], [[42_MANUAL_DE_NORMAS_BRANDING]].

## DOCUMENTATION COMPLETION GATE

**Ningún cambio de código puede declararse completo sin haber sincronizado el vault.**

Esta es una condición bloqueante, no una regla opcional. Antes de reportar cualquier tarea de código como terminada:

1. Identificar todos los documentos del vault que describen el área afectada.
2. Verificar que cada uno de esos documentos refleje el estado actual del código — no la versión anterior.
3. Si algún documento está desactualizado, actualizarlo antes de cerrar la tarea.
4. No reportar "completado" hasta que el vault sea coherente con el código real.

**Mínimo siempre:**
- [[04_ESTADO_ACTUAL]] — si cambió el estado del proyecto.
- [[36_TAREAS_PENDIENTES]] — si se completó o surgió una tarea.
- [[37_HISTORIAL_DE_CAMBIOS]] — si hay un cambio significativo que registrar.

**Causa de este gate:** INC-004 — el rediseño estructural v0.2.0 se implementó sin sincronizar el vault, dejando 22+ documentos obsoletos. Ver [[38_INCIDENTES_Y_SOLUCIONES]].

## Cómo resolver contradicciones

1. El código actual prevalece sobre el manual para el estado presente.
2. El manual prevalece sobre el código para las normas de marca y diseño.
3. Si hay contradicción, documentar en [[32_ERRORES_CONOCIDOS]] o [[34_DEUDA_TECNICA]].
4. Si es ambiguo, preguntar a Rodolfo Moreno antes de actuar.

## Cuándo solicitar autorización

- Antes de cualquier commit, push o despliegue.
- Antes de instalar dependencias npm.
- Antes de modificar el sistema de marca (logo, paleta, tipografía).
- Antes de publicar activos de la carpeta `.local-reference/`.
- Antes de implementar backend, base de datos o autenticación.
- Cuando la tarea contradiga una regla de este documento.

## Documentos relacionados

- [[00_README_DEL_PROYECTO]]
- [[CHEF_SCRAPBOOK_MASTER_PROMPT]]
- [[42_MANUAL_DE_NORMAS_BRANDING]]
- [[29_GUIA_DE_DESARROLLO]]
