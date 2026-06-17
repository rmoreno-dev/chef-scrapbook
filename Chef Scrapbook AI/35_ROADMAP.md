---
title: "Roadmap"
document_id: "CS-35"
status: "vigente"
implementation_status: "PLANIFICADO"
project: "Chef Scrapbook"
document_type: "planificacion"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-17"
last_verified_against_code: "2026-06-17"
source_of_truth: false
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - planificacion
---

# Roadmap

> [!info]
> El roadmap describe las fases planificadas. No representa compromisos de entrega. Cada fase requiere autorizacion expresa de Rodolfo Moreno antes de comenzar.

## Fase 1 — Fundacion documental (COMPLETADA)

- Vault Obsidian con 44 documentos.
- Manual de normas de marca derivado del v3.1.
- Prompt maestro y comando `/chef.scrapbook`.
- Inventario del paquete de marca.

## Fase 2 — Integracion oficial de marca (COMPLETADA en v0.2.1)

- [x] Migrar textos placeholder ("Culinary Journal" etc.) a nombres oficiales. — COMPLETADO en v0.2.0
- [x] Migrar iconografia a kit SVG oficial del manual. — COMPLETADO en v0.2.0 / v0.2.1
- [x] Favicon set completo (ico, 32, 16, apple-touch, manifest). — COMPLETADO en v0.2.1
- [x] Integrar logo oficial horizontal en sidebar. — COMPLETADO en v0.2.1 (ADR-019)
- [x] Integrar sello oficial como watermark en hero. — COMPLETADO en v0.2.1
- [x] Integrar isotipo oficial en cabecera movil. — COMPLETADO en v0.2.1
- [x] Paquete CSS oficial `chef-scrapbook-assets.css`. — COMPLETADO en v0.2.1
- [x] Activos decorativos y patrones del paquete oficial. — COMPLETADO en v0.2.1

## Fase 3 — Publicacion GitHub Pages (COMPLETADA en v0.2.1)

- [x] Repositorio GitHub publico: https://github.com/rmoreno-dev/chef-scrapbook
- [x] GitHub Pages activo desde main / root. — COMPLETADO 2026-06-17
- [x] URL publica: https://rmoreno-dev.github.io/chef-scrapbook/
- [x] Verificacion de rutas relativas y activos remotos. — 14/14 HTTP 200

## Fase 4 — SPA y experiencia de usuario (COMPLETADA en v0.2.0)

- [x] Arquitectura SPA con hash routing.
- [x] Vista Inicio con hero, novedades y grid de recetas.
- [x] Vista Biblioteca de Recetas con busqueda y filtros.
- [x] Vista Detalle de Receta con calculadora preservada.
- [x] Vista Menu Semanal con planificador 7x4.
- [x] Persistencia de favoritos, plan, compras y tareas en localStorage.

## Fase 5 — Ampliacion del recetario (PLANIFICADO)

- Segunda receta implementada.
- Tercera receta implementada.
- Patron de card de receta consolidado y reutilizable.

## Fase 6 — Calidad y pruebas (PLANIFICADO)

- Suite de pruebas E2E con Playwright.
- Pruebas de accesibilidad automatizadas con axe-core.
- Pipeline CI/CD con GitHub Actions.

## Fase 7 — Persistencia avanzada (PLANIFICADO)

- Evaluacion de necesidades de persistencia en la nube.
- Si se decide: definir backend minimo o solucion sin servidor.
- Cuentas de usuario con privacidad por diseno.

## Fase 8 — Escalabilidad (PLANIFICADO)

- Migracion a framework (Next.js + TypeScript) si lo justifica el volumen.
- Storybook de componentes.
- Hosting local de fuentes (sin CDN de Google Fonts).

## Fase 9 — Localizacion (PLANIFICADO)

- Soporte para ingles u otros idiomas si se decide.

## Fase 10 — Funciones inteligentes responsables (PLANIFICADO)

- Asistencia contextual en recetas (calculadora avanzada, sugerencias).
- Funciones de IA que respeten privacidad y sean opcionales.

## Documentos relacionados

- [[36_TAREAS_PENDIENTES]]
- [[34_DEUDA_TECNICA]]
- [[03_OBJETIVOS_Y_ALCANCE]]
