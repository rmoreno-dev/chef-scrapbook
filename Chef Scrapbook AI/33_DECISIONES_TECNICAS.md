---
title: "Decisiones Tecnicas (ADR)"
document_id: "CS-33"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "arquitectura"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - arquitectura
---

# Decisiones Tecnicas

## ADR-001: Aplicacion estatica sin framework

**Estado:** Aprobado

**Contexto:** MVP de recetario con una receta y calculadora. Maxima velocidad de desarrollo, sin dependencias complejas.

**Decision:** HTML5 + CSS3 + JS vanilla. Sin React, Vue, Angular ni Next.js.

**Consecuencias:** Sin estado reactivo avanzado. Sin SSR. Sin code splitting. Sin TypeScript.

**Manual recomienda Next.js para evolucion futura:** PLANIFICADO, no actual.

## ADR-002: JavaScript ES5 compatible

**Estado:** Aprobado

**Decision:** Usar var, no const/let. IIFE para encapsulamiento. Sin modulos ES6.

**Razon:** Compatibilidad maxima con navegadores sin necesidad de transpilador.

## ADR-003: GitHub Pages como plataforma de despliegue

**Estado:** Planificado

**Decision:** Usar GitHub Pages desde rama main.

**Consecuencias:** Sin servidor propio, sin SSR, sin API backend.

## ADR-004: SVG locales en lugar de imagenes externas

**Estado:** Aprobado

**Contexto:** Imagenes de Google AI Studio tenian licencia desconocida.

**Decision:** Crear SVG ilustrativos propios para avatar y galletas.

**Resultado:** Sin dependencias de imagenes externas. Aptos para publicacion.

## ADR-005: Licencia propietaria

**Estado:** Aprobado

**Decision:** Codigo propietario de Rodolfo Moreno. Sin licencia open source.

**Razon:** Proteccion de la propiedad intelectual del diseno y contenido.

## ADR-006: Vault Obsidian como sistema de documentacion

**Estado:** Aprobado

**Decision:** Chef Scrapbook AI/ como vault Obsidian con 44 documentos numerados.

**Razon:** Contexto estructurado para agentes IA, navegacion por wikilinks, versionable en Git.

## ADR-007: Manual v3.1 como norma de marca

**Estado:** Aprobado

**Decision:** El Manual Profesional Chef Scrapbook v3.1 es la fuente de verdad normativa para marca, identidad, UX, voz, accesibilidad y contenido.

## ADR-008: Paquete de marca en .local-reference

**Estado:** Aprobado

**Decision:** El paquete completo de marca (161 archivos) vive en .local-reference/ excluido del repositorio publico.

**Razon:** Los activos de marca son propietarios. Solo se publican los derivados aprobados.

## ADR-009: Logo oficial pendiente de integracion

**Estado:** Decision pendiente

**Contexto:** El logo oficial (gato chef) esta en .local-reference. El codigo actual usa chef-avatar.svg como provisional.

**Tarea:** Definir que variante se integra en header, favicon y GitHub Pages, y solicitar autorizacion de implementacion.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[34_DEUDA_TECNICA]]
- [[37_HISTORIAL_DE_CAMBIOS]]
