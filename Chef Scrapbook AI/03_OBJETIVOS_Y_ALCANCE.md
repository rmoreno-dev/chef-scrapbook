---
title: "Objetivos y Alcance"
document_id: "CS-03"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "alcance"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[01_RESUMEN_EJECUTIVO]]"
  - "[[04_ESTADO_ACTUAL]]"
  - "[[35_ROADMAP]]"
tags:
  - chef-scrapbook
  - alcance
  - objetivos
---

# Objetivos y Alcance

## Objetivo general

Crear y publicar un recetario digital educativo, gratuito, accesible y visualmente editorial que permita calcular porciones, comprender tecnicas y conservar el aprendizaje culinario.

## Objetivos especificos

1. Implementar recetas con calculadora de porciones en tiempo real.
2. Garantizar accesibilidad WCAG 2.2 AA en todos los componentes.
3. Publicar en GitHub Pages con rutas relativas compatibles.
4. Integrar el sistema de marca Chef Scrapbook v3.1 de forma completa.
5. Construir un vault documental como contexto para agentes IA.
6. Establecer un modelo editorial replicable para futuras recetas.

## Alcance MVP actual

### IMPLEMENTADO

- Pagina unica con receta de Galletas de Chispas v3.2.
- Calculadora de porciones (BASE_PORTIONS = 27, factor dinamico).
- Tabla de 5 ingredientes con escalado en tiempo real.
- Metodo de preparacion en 3 pasos.
- Perfil nutricional estatico por porcion (50g).
- Tokens CSS Vanilla Ink, Google Fonts, Material Symbols.
- SVG ilustrativos propios.
- Responsive desde 320 px.
- Landmarks ARIA, skip link, aria-live, focus visible.
- Validacion de input (entero positivo 1-9999).
- Licencia propietaria.

## Fuera del alcance actual

- Catalogo de multiples recetas.
- Busqueda o filtrado.
- Autenticacion o cuentas de usuario.
- Base de datos o persistencia.
- Backend o API propia.
- Logo oficial integrado en la UI.
- Sistema de iconografia oficial (kit SVG del manual).
- Modo offline o PWA.
- Exportacion a PDF.
- Comunidad o comentarios.
- Localizacion o multiidioma.

## Vision aprobada del manual (PLANIFICADO)

> [!info]
> Todo lo siguiente es PLANIFICADO en el manual v3.1. No existe ni se debe presentar como implementado.

- Inicio con navegacion global.
- Busqueda y filtrado de recetas.
- Colecciones y planificacion de menus.
- Diario culinario y notas personales.
- Sistema de cuentas con exportacion y borrado.
- Comunidad y compartir.
- Herramientas inteligentes responsables.

## Criterios de exito

| Criterio | Estado |
|---|---|
| Calculadora funcional desktop y movil | IMPLEMENTADO |
| Sin errores de consola | IMPLEMENTADO |
| Responsive 320-1440 px | IMPLEMENTADO |
| Contraste WCAG 4.5:1 texto normal | IMPLEMENTADO |
| Navegacion por teclado completa | IMPLEMENTADO |
| Sin rutas absolutas incompatibles con GitHub Pages | IMPLEMENTADO |
| Sin secretos en el repositorio | IMPLEMENTADO |
| Logo oficial integrado | PENDIENTE |
| Publicacion en GitHub Pages | PENDIENTE |
| Segunda receta implementada | PENDIENTE |

## Limites de gratuidad

El acceso al contenido esencial permanece gratuito e irrestricto. No se implementaran muros de pago, registros obligatorios ni publicidad en el nucleo del producto.

## Documentos relacionados

- [[04_ESTADO_ACTUAL]]
- [[09_MODULOS_Y_FUNCIONALIDADES]]
- [[35_ROADMAP]]
- [[36_TAREAS_PENDIENTES]]
