---
title: "Indice General de Documentacion"
document_id: "CS-41"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "indice"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
  - "[[39_PROMPTS_Y_REGLAS_PARA_IA]]"
  - "[[CHEF_SCRAPBOOK_MASTER_PROMPT]]"
tags:
  - chef-scrapbook
  - indice
---

# Indice General de Documentacion

## Navegar por categoria

### Arquitectura
- [[05_ARQUITECTURA_GENERAL]] — Diagrama del sistema actual y futuro
- [[06_ARQUITECTURA_TECNICA]] — HTML, CSS, JS, SVG, tokens
- [[33_DECISIONES_TECNICAS]] — ADRs

### Branding y UI
- [[42_MANUAL_DE_NORMAS_BRANDING]] — Manual operativo completo de la marca
- [[27_ESTANDARES_DE_CODIGO]] — Estandares HTML, CSS, JS, SVG
- [[28_CONVENCIONES_DEL_PROYECTO]] — BEM, nombres, commits
- [[30_GUIA_DE_PRUEBAS]] — Guia de pruebas de UI y accesibilidad

### Contenido y voz
- [[02_CONTEXTO_DEL_PROYECTO]] — Concepto, posicionamiento, arquetipos
- [[09_MODULOS_Y_FUNCIONALIDADES]] — Capacidades actuales y planificadas
- [[16_REGLAS_DE_NEGOCIO]] — Reglas de la calculadora

### Recetas y datos
- [[12_MODELO_DE_DATOS]] — BASE_PORTIONS=27, esquema futuro
- [[16_REGLAS_DE_NEGOCIO]] — Validacion y calculo
- [[31_CASOS_DE_PRUEBA]] — Tabla de casos de prueba
- [[42_MANUAL_DE_NORMAS_BRANDING]] — Modelo editorial de recetas

### Seguridad y privacidad
- [[18_VARIABLES_DE_ENTORNO]] — Sin secretos en el repositorio
- [[24_SEGURIDAD]] — Estado de seguridad
- [[26_BACKUPS_Y_RECUPERACION]] — Git y GitHub

### Planificacion
- [[34_DEUDA_TECNICA]] — Deuda tecnica registrada
- [[35_ROADMAP]] — Fases del proyecto
- [[36_TAREAS_PENDIENTES]] — Tareas con ID, prioridad y estado

### Errores e incidentes
- [[32_ERRORES_CONOCIDOS]] — Inconsistencias y divergencias conocidas
- [[38_INCIDENTES_Y_SOLUCIONES]] — Incidentes con severidad y solucion

### IA y prompts
- [[39_PROMPTS_Y_REGLAS_PARA_IA]] — Reglas para agentes IA
- [[CHEF_SCRAPBOOK_MASTER_PROMPT]] — Protocolo completo de trabajo

## Que consultar segun la tarea

| Tarea | Documentos |
|---|---|
| Branding o UI | [[42_MANUAL_DE_NORMAS_BRANDING]], [[27_ESTANDARES_DE_CODIGO]], [[28_CONVENCIONES_DEL_PROYECTO]] |
| Contenido y voz | [[02_CONTEXTO_DEL_PROYECTO]], [[09_MODULOS_Y_FUNCIONALIDADES]], [[16_REGLAS_DE_NEGOCIO]], [[42_MANUAL_DE_NORMAS_BRANDING]] |
| Calculadora | [[12_MODELO_DE_DATOS]], [[16_REGLAS_DE_NEGOCIO]], [[31_CASOS_DE_PRUEBA]] |
| Arquitectura | [[05_ARQUITECTURA_GENERAL]], [[06_ARQUITECTURA_TECNICA]], [[33_DECISIONES_TECNICAS]] |
| Seguridad | [[18_VARIABLES_DE_ENTORNO]], [[24_SEGURIDAD]], [[26_BACKUPS_Y_RECUPERACION]] |
| Errores | [[32_ERRORES_CONOCIDOS]], [[38_INCIDENTES_Y_SOLUCIONES]] |
| Planificacion | [[34_DEUDA_TECNICA]], [[35_ROADMAP]], [[36_TAREAS_PENDIENTES]] |
| IA | [[39_PROMPTS_Y_REGLAS_PARA_IA]], [[CHEF_SCRAPBOOK_MASTER_PROMPT]] |

## Todos los documentos

| # | Documento | Tipo | Estado implementacion |
|---|---|---|---|
| 00 | [[00_README_DEL_PROYECTO]] | meta | IMPLEMENTADO |
| 01 | [[01_RESUMEN_EJECUTIVO]] | estrategia | IMPLEMENTADO |
| 02 | [[02_CONTEXTO_DEL_PROYECTO]] | contexto | IMPLEMENTADO |
| 03 | [[03_OBJETIVOS_Y_ALCANCE]] | alcance | IMPLEMENTADO |
| 04 | [[04_ESTADO_ACTUAL]] | estado | IMPLEMENTADO |
| 05 | [[05_ARQUITECTURA_GENERAL]] | arquitectura | IMPLEMENTADO |
| 06 | [[06_ARQUITECTURA_TECNICA]] | arquitectura | IMPLEMENTADO |
| 07 | [[07_STACK_TECNOLOGICO]] | arquitectura | IMPLEMENTADO |
| 08 | [[08_ESTRUCTURA_DEL_REPOSITORIO]] | arquitectura | IMPLEMENTADO |
| 09 | [[09_MODULOS_Y_FUNCIONALIDADES]] | funcionalidades | PARCIALMENTE IMPLEMENTADO |
| 10 | [[10_FLUJOS_DE_USUARIO]] | ux | PARCIALMENTE IMPLEMENTADO |
| 11 | [[11_FLUJOS_DE_NEGOCIO]] | negocio | NO APLICA |
| 12 | [[12_MODELO_DE_DATOS]] | datos | PARCIALMENTE IMPLEMENTADO |
| 13 | [[13_DICCIONARIO_DE_BASE_DE_DATOS]] | datos | NO APLICA |
| 14 | [[14_API_Y_ENDPOINTS]] | api | NO APLICA |
| 15 | [[15_AUTENTICACION_Y_ROLES]] | seguridad | NO APLICA |
| 16 | [[16_REGLAS_DE_NEGOCIO]] | reglas | IMPLEMENTADO |
| 17 | [[17_INTEGRACIONES_EXTERNAS]] | integraciones | PARCIALMENTE IMPLEMENTADO |
| 18 | [[18_VARIABLES_DE_ENTORNO]] | configuracion | NO APLICA |
| 19 | [[19_CONFIGURACION_LOCAL]] | configuracion | IMPLEMENTADO |
| 20 | [[20_CONFIGURACION_STAGING]] | configuracion | NO APLICA |
| 21 | [[21_CONFIGURACION_PRODUCCION]] | configuracion | PLANIFICADO |
| 22 | [[22_INFRAESTRUCTURA_AWS]] | infraestructura | NO APLICA |
| 23 | [[23_CI_CD_Y_DESPLIEGUE]] | despliegue | PARCIALMENTE IMPLEMENTADO |
| 24 | [[24_SEGURIDAD]] | seguridad | IMPLEMENTADO |
| 25 | [[25_LOGS_Y_OBSERVABILIDAD]] | observabilidad | NO APLICA |
| 26 | [[26_BACKUPS_Y_RECUPERACION]] | operaciones | IMPLEMENTADO |
| 27 | [[27_ESTANDARES_DE_CODIGO]] | estandares | IMPLEMENTADO |
| 28 | [[28_CONVENCIONES_DEL_PROYECTO]] | convenciones | IMPLEMENTADO |
| 29 | [[29_GUIA_DE_DESARROLLO]] | guia | IMPLEMENTADO |
| 30 | [[30_GUIA_DE_PRUEBAS]] | pruebas | IMPLEMENTADO |
| 31 | [[31_CASOS_DE_PRUEBA]] | pruebas | IMPLEMENTADO |
| 32 | [[32_ERRORES_CONOCIDOS]] | errores | IMPLEMENTADO |
| 33 | [[33_DECISIONES_TECNICAS]] | arquitectura | IMPLEMENTADO |
| 34 | [[34_DEUDA_TECNICA]] | deuda | IMPLEMENTADO |
| 35 | [[35_ROADMAP]] | planificacion | PLANIFICADO |
| 36 | [[36_TAREAS_PENDIENTES]] | planificacion | PLANIFICADO |
| 37 | [[37_HISTORIAL_DE_CAMBIOS]] | historial | IMPLEMENTADO |
| 38 | [[38_INCIDENTES_Y_SOLUCIONES]] | incidentes | IMPLEMENTADO |
| 39 | [[39_PROMPTS_Y_REGLAS_PARA_IA]] | ia | IMPLEMENTADO |
| 40 | [[40_GLOSARIO_DEL_PROYECTO]] | glosario | IMPLEMENTADO |
| 41 | [[41_INDICE_GENERAL_DE_DOCUMENTACION]] | indice | IMPLEMENTADO |
| 42 | [[42_MANUAL_DE_NORMAS_BRANDING]] | branding | IMPLEMENTADO |
| - | [[CHEF_SCRAPBOOK_MASTER_PROMPT]] | prompt-maestro | IMPLEMENTADO |

## Documentos relacionados

- [[00_README_DEL_PROYECTO]]
- [[39_PROMPTS_Y_REGLAS_PARA_IA]]
- [[CHEF_SCRAPBOOK_MASTER_PROMPT]]
