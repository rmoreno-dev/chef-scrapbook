---
title: "Stack Tecnologico"
document_id: "CS-07"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "arquitectura"
version: "2.0.0"
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
| HTML5 | Living Standard | Shell SPA y accesibilidad semantica | IMPLEMENTADO |
| CSS3 custom properties | Living Standard | Sistema de diseno Vanilla Ink (4 archivos CSS) | IMPLEMENTADO |
| JavaScript ES5+ vanilla | ES2015+ compatible | SPA, router hash, estado, vistas (8 modulos IIFE) | IMPLEMENTADO |
| localStorage (Web API) | - | Persistencia de favoritos, menus, compras, tareas | IMPLEMENTADO |
| Hash routing (History-less) | - | Navegacion SPA compatible con GitHub Pages | IMPLEMENTADO |
| SVG propio (kit oficial) | 1.1 | Iconos de navegacion (18) y branding (4) | IMPLEMENTADO |
| Google Fonts | CDN | Prata, Mulish, Great Vibes | IMPLEMENTADO |
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
| Node.js (node --check) | Verificacion de sintaxis JS (sin ejecucion) |

## Sin dependencias npm

No existe `package.json`, `node_modules` ni build step. La aplicacion se ejecuta abriendo `index.html` directamente en el navegador o via servidor local simple.

## Nota sobre JavaScript

Los archivos JS usan el patron IIFE con `'use strict'` y declaraciones `var` (compatible con ES5 en estructura), pero incluyen llamadas a `Number.isFinite()` y `Number.isInteger()` (introducidas en ES2015). No documentar como "ES5 puro"; es JavaScript sin transpilacion que requiere un entorno moderno.

## Tecnologias eliminadas

| Tecnologia | Estado anterior | Estado actual | Razon |
|---|---|---|---|
| Material Symbols Outlined (Google CDN) | IMPLEMENTADO como provisional | ELIMINADO | Migrado al kit SVG oficial del manual v3.1 |

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
