---
title: "README del Proyecto - Vault Chef Scrapbook"
document_id: "CS-00"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "meta-documentacion"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[41_INDICE_GENERAL_DE_DOCUMENTACION]]"
  - "[[39_PROMPTS_Y_REGLAS_PARA_IA]]"
  - "[[CHEF_SCRAPBOOK_MASTER_PROMPT]]"
tags:
  - chef-scrapbook
  - documentacion
  - meta
---

# README del Vault — Chef Scrapbook AI

Este vault Obsidian es la fuente de contexto técnico, normativo y de marca del proyecto **Chef Scrapbook**.

## Propósito del vault

1. Fuente de contexto técnico para agentes IA.
2. Referencia normativa de identidad y experiencia (Manual v3.1).
3. Memoria evolutiva del desarrollo.
4. Registro de arquitectura, decisiones y deuda técnica.
5. Sistema de navegación documental.
6. Mecanismo para impedir que una IA invente arquitectura o contradiga la marca.

## Cómo abrir en Obsidian

1. Abrir Obsidian > "Abrir vault desde carpeta".
2. Seleccionar: `C:\laragon\www\Chef Scrapbook\Chef Scrapbook AI`.
3. El snippet Vanilla Ink se activa automáticamente.
4. No agregar plugins de comunidad no autorizados.

## Cómo usar desde VS Code

El comando `/chef.scrapbook` está registrado en `.github/prompts/chef.scrapbook.prompt.md`. Invocarlo desde el panel de prompts de GitHub Copilot o extensiones compatibles para cargar contexto técnico y normativo selectivo.

## Jerarquía de fuentes

| Prioridad | Fuente | Qué regula |
|---|---|---|
| 1 | Código actual (`index.html`, `assets/`) | Estado implementado real |
| 2 | Manual Chef Scrapbook v3.1 | Marca, identidad, UX, voz, componentes |
| 3 | `LICENSE` | Marco legal del repositorio |
| 4 | `README.md` principal | Contexto contextual del proyecto |
| 5 | Referencia Stitch | Estructura visual inicial (histórico) |
| 6 | Moodboard Vanilla Ink | Concepto estético inicial (histórico) |

> [!important]
> Cuando el manual describa una capacidad **futura**, no la presentes como implementada. Cuando el código contradiga una regla del manual, documenta la diferencia sin corregir el código en esta tarea.

## Manual profesional v3.1

El Manual Profesional Chef Scrapbook v3.1 se encuentra en:

`.local-reference/brand-manual-v3.1/` — fuera del repositorio público.

Ver [[42_MANUAL_DE_NORMAS_BRANDING]] para la especificación operativa derivada.

## Flujo de actualización

1. Cambios en el código → actualizar [[04_ESTADO_ACTUAL]].
2. Decisiones de arquitectura → [[33_DECISIONES_TECNICAS]].
3. Deuda técnica → [[34_DEUDA_TECNICA]].
4. Cambios de marca → [[42_MANUAL_DE_NORMAS_BRANDING]].
5. No actualizar fechas sin cambio real de contenido.

## Seguridad

- `.local-reference/` está en `.gitignore`. Nunca se publica.
- No hay secretos, tokens ni credenciales en el repositorio.
- El código frontend es inherentemente público.

## Documentos relacionados

- [[41_INDICE_GENERAL_DE_DOCUMENTACION]]
- [[04_ESTADO_ACTUAL]]
- [[39_PROMPTS_Y_REGLAS_PARA_IA]]
- [[CHEF_SCRAPBOOK_MASTER_PROMPT]]
