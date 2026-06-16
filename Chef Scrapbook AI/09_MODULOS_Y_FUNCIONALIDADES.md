---
title: "Modulos y Funcionalidades"
document_id: "CS-09"
status: "vigente"
implementation_status: "PARCIALMENTE IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "funcionalidades"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[04_ESTADO_ACTUAL]]"
  - "[[10_FLUJOS_DE_USUARIO]]"
  - "[[16_REGLAS_DE_NEGOCIO]]"
tags:
  - chef-scrapbook
  - modulos
  - funcionalidades
---

# Modulos y Funcionalidades

## Capacidades actuales — IMPLEMENTADO

### Navegacion

| Componente | Descripcion | Estado |
|---|---|---|
| Sidebar desktop | 4 items: Dashboard, Formulas, Laboratorio, Reportes | IMPLEMENTADO |
| Cabecera movil | Marca + boton de perfil | IMPLEMENTADO |
| Skip link | Salta al contenido principal (#main-content) | IMPLEMENTADO |
| Indicador de pagina activa | aria-current="page" | IMPLEMENTADO |

### Receta

| Componente | Descripcion | Estado |
|---|---|---|
| Titulo de receta | H1 con version y calificacion decorativa | IMPLEMENTADO |
| Matriz de ingredientes | Tabla con 5 ingredientes, pesos, % panadero y fase | IMPLEMENTADO |
| Metodo de preparacion | OL con 3 pasos (cremado, emulsion, incorporacion) | IMPLEMENTADO |
| Perfil nutricional | Lista con calorias, grasas, carbohidratos, proteinas | IMPLEMENTADO |
| Figura polaroid | Ilustracion SVG de galletas | IMPLEMENTADO |

### Calculadora de porciones

| Componente | Descripcion | Estado |
|---|---|---|
| Input numerico | Campo de texto con valor inicial 27 | IMPLEMENTADO |
| Botones +/- | Incremento y decremento de porciones | IMPLEMENTADO |
| Validacion | Entero positivo 1-9999, rechazo de decimales y NaN | IMPLEMENTADO |
| Escalado de ingredientes | Actualizacion en tiempo real de todos los pesos | IMPLEMENTADO |
| Actualizacion de totales | Masa total y display de porciones | IMPLEMENTADO |
| Anuncio aria-live | Mensaje de actualizacion para lectores de pantalla | IMPLEMENTADO |
| Mensaje de error | Texto descriptivo con role="alert" | IMPLEMENTADO |

### Elementos visuales (scrapbooking)

| Componente | Descripcion | Estado |
|---|---|---|
| Papel rasgado (paper-scrap) | Cards con borde y sombra tipo papel | IMPLEMENTADO |
| Cinta washi | Decoracion de posicion variable y color (mauve/sage) | IMPLEMENTADO |
| Stickers | Excellent! y GOOD JOB | IMPLEMENTADO |
| Rotaciones ligeras | paper-scrap--rotate-pos y --rotate-neg2 | IMPLEMENTADO |
| Badges de fase | Dry, Cremado, Liquidos, Inclusion | IMPLEMENTADO |
| Highlighter | Span para resaltar el 100% de harina | IMPLEMENTADO |

## Vision del manual v3.1 — PLANIFICADO

> [!info]
> Las siguientes capacidades estan descritas en el manual v3.1 pero NO estan implementadas.

| Modulo | Descripcion |
|---|---|
| Inicio / Homepage | Hero, destacados, busqueda global |
| Busqueda | Filtros por categoria, tiempo, dificultad |
| Catalogo de recetas | Listado con cards y paginacion |
| Tecnicas | Biblioteca de tecnicas culinarias |
| Colecciones | Agrupaciones de recetas por tema |
| Menus | Planificacion semanal de menus |
| Diario | Notas personales por receta |
| Cuenta de usuario | Perfil, guardados, exportacion |
| Login y registro | Autenticacion segura |
| Comunidad | Compartir versiones y variantes |

## Documentos relacionados

- [[04_ESTADO_ACTUAL]]
- [[10_FLUJOS_DE_USUARIO]]
- [[12_MODELO_DE_DATOS]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[35_ROADMAP]]
