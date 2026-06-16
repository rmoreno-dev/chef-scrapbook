---
title: "Stack Tecnologico"
document_id: "CS-07"
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
  - "[[06_ARQUITECTURA_TECNICA]]"
  - "[[33_DECISIONES_TECNICAS]]"
tags:
  - chef-scrapbook
  - stack
  - tecnologia
---

# Stack Tecnologico

## Stack actual — IMPLEMENTADO

| Tecnologia | Version | Uso | Estado |
|---|---|---|---|
| HTML5 | Living Standard | Estructura semantica y accesibilidad | IMPLEMENTADO |
| CSS3 custom properties | Living Standard | Sistema de diseno Vanilla Ink (tokens) | IMPLEMENTADO |
| JavaScript ES5+ vanilla | ES2015+ compatible | Calculadora de porciones (IIFE) | IMPLEMENTADO |
| Google Fonts | CDN | Prata, Mulish, Great Vibes | IMPLEMENTADO |
| Material Symbols Outlined | CDN (Google) | Iconografia de navegacion | IMPLEMENTADO |
| SVG (propio) | 1.1 | Ilustraciones locales | IMPLEMENTADO |
| Git | 2.x | Control de versiones | IMPLEMENTADO |
| GitHub | - | Repositorio remoto | IMPLEMENTADO |
| GitHub Pages | - | Despliegue estatico | PLANIFICADO |
| Obsidian | - | Vault documental | IMPLEMENTADO |
| VS Code | - | Entorno de desarrollo | IMPLEMENTADO |

## Herramientas locales de desarrollo

| Herramienta | Uso |
|---|---|
| Laragon | Servidor local (http://localhost) |
| VS Code | Editor principal |
| Obsidian | Lectura y edicion del vault |
| Git Bash / PowerShell | Control de versiones y scripting |

## Sin dependencias npm

No existe package.json, node_modules ni build step. La aplicacion se ejecuta abriendo index.html directamente en el navegador o via servidor local simple.

## Stack recomendado por el manual v3.1 (PLANIFICADO)

> [!info]
> El manual v3.1 describe un stack de evolucion para etapas futuras. No esta implementado. No debe confundirse con el stack actual.

| Tecnologia | Rol planificado |
|---|---|
| Next.js | Framework React (App Router) |
| TypeScript | Tipado estatico |
| CSS Modules o Tailwind con tokens | Sistema de estilos |
| Storybook | Documentacion de componentes |
| React Hook Form | Gestion de formularios |
| Zod | Validacion de schemas |
| Playwright | Pruebas E2E |
| axe-core | Pruebas de accesibilidad automatizadas |

Ninguno de los anteriores debe implementarse durante la fase actual sin autorizacion expresa.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[17_INTEGRACIONES_EXTERNAS]]
- [[33_DECISIONES_TECNICAS]]
- [[35_ROADMAP]]
