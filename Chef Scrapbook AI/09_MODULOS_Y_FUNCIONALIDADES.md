---
title: "Modulos y Funcionalidades"
document_id: "CS-09"
status: "vigente"
implementation_status: "PARCIALMENTE IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "funcionalidades"
version: "2.0.0"
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

### Navegacion SPA

| Componente | Descripcion | Estado |
|---|---|---|
| Sidebar desktop | 3 items: Inicio, Recetas, Menus con iconos SVG | IMPLEMENTADO |
| Cabecera movil | Logo favicon + boton hamburguesa | IMPLEMENTADO |
| Overlay movil | Cierra sidebar al hacer clic fuera | IMPLEMENTADO |
| Indicador de pagina activa | `aria-current="page"` actualizado por el router | IMPLEMENTADO |
| Escape key | Cierra sidebar al presionar Escape | IMPLEMENTADO |
| Skip link | Salta a `#main-content` | IMPLEMENTADO |
| Sello de marca | `brand-stamp.svg` en pie del sidebar | IMPLEMENTADO |

### Vista: Inicio (`#/inicio`)

| Componente | Descripcion | Estado |
|---|---|---|
| Hero editorial | Seccion de bienvenida con tipografia Prata | IMPLEMENTADO |
| Tarjetas de novedades | Acceso rapido a calculadora y catalogo | IMPLEMENTADO |
| Grid de recetas destacadas | Receta real + tarjetas "Proximamente" | IMPLEMENTADO |
| Acceso al planificador | Card con enlace a #/menus | IMPLEMENTADO |

### Vista: Biblioteca de Recetas (`#/recetas`)

| Componente | Descripcion | Estado |
|---|---|---|
| Barra de busqueda | Filtra recetas por nombre en tiempo real | IMPLEMENTADO |
| Pills de categoria | Filtro por Panaderia, Reposteria, etc. | IMPLEMENTADO |
| Grid de recetas | Cards con nombre, tiempo, porciones e imagen | IMPLEMENTADO |
| Boton de favorito | Toggle con persistencia en localStorage | IMPLEMENTADO |
| Tarjetas bloqueadas | Cards "Proximamente" (recetas sin implementar) | IMPLEMENTADO |

### Vista: Detalle de Receta (`#/recetas/:slug`)

| Componente | Descripcion | Estado |
|---|---|---|
| Encabezado de receta | Nombre, version, categoria, metadata | IMPLEMENTADO |
| Tabla de ingredientes | 5 ingredientes con pesos, unidades, fases y % panadero | IMPLEMENTADO |
| Calculadora de porciones | BASE_PORTIONS = 27, escalado en tiempo real | IMPLEMENTADO |
| Botones step +/- | Incremento/decremento con validacion | IMPLEMENTADO |
| Validacion de entrada | Entero positivo 1-9999 | IMPLEMENTADO |
| Anuncio aria-live | Para lectores de pantalla | IMPLEMENTADO |
| Metodo de preparacion | 3 pasos: Cremado, Emulsion, Incorporacion | IMPLEMENTADO |
| Perfil nutricional | Calorias, grasas, carbohidratos, proteinas por 50g | IMPLEMENTADO |
| Boton de favorito | Toggle persistido en localStorage | IMPLEMENTADO |

### Vista: Menu Semanal (`#/menus`)

| Componente | Descripcion | Estado |
|---|---|---|
| Grid 7 dias x 4 tiempos | Desayuno, Almuerzo, Cena, Colacion | IMPLEMENTADO |
| Asignar receta a slot | Dropdown de recetas disponibles | IMPLEMENTADO |
| Limpiar slot | Eliminar asignacion de un tiempo del dia | IMPLEMENTADO |
| Tareas de preparacion | Lista con agregar, toggle completado, eliminar | IMPLEMENTADO |
| Lista de compras | Agregar, toggle completado, eliminar, limpiar todo | IMPLEMENTADO |
| Persistencia | Estado en localStorage, sobrevive recarga de pagina | IMPLEMENTADO |

### Sistema de estado y persistencia

| Componente | Descripcion | Estado |
|---|---|---|
| Favoritos | Guardar/quitar recetas favoritas | IMPLEMENTADO |
| Plan de menu semanal | Asignaciones dia/tiempo/receta | IMPLEMENTADO |
| Lista de compras | Items con cantidad, unidad y estado completado | IMPLEMENTADO |
| Tareas de preparacion | Items con estado completado | IMPLEMENTADO |
| Preferencias | Configuracion del usuario | IMPLEMENTADO |

### Funciones globales compartidas

| Funcion | Descripcion | Estado |
|---|---|---|
| `ChefScrapbook.escapeHTML(str)` | Sanitiza strings para uso seguro en `innerHTML` | IMPLEMENTADO |
| `ChefScrapbook.toast(msg, type)` | Notificaciones tipo toast con auto-cierre 3s | IMPLEMENTADO |
| `ChefScrapbook.Calculator.init()` | Inicializa la calculadora de porciones en la vista activa | IMPLEMENTADO |

## Vision del manual v3.1 — PLANIFICADO

> [!info]
> Las siguientes capacidades estan descritas en el manual v3.1 pero NO estan implementadas.

| Modulo | Descripcion |
|---|---|
| Logo oficial | Integracion del logo gato chef con arco y ramas |
| Hosting local de fuentes | Eliminar dependencia de Google Fonts CDN |
| Tecnicas culinarias | Biblioteca de tecnicas con explicacion y video |
| Colecciones | Agrupaciones de recetas por tema o temporada |
| Segunda y tercera receta | Ampliacion del catalogo con recetas reales |
| Cuenta de usuario | Perfil, sincronizacion en la nube, exportacion |
| Login y registro | Autenticacion segura |
| Comunidad | Compartir versiones y variantes de recetas |
| Exportar PDF | Descarga de receta en formato imprimible |
| SEO y metadatos | Open Graph, JSON-LD (schema.org/Recipe) |
| Suite de pruebas E2E | Playwright + axe-core |

## Documentos relacionados

- [[04_ESTADO_ACTUAL]]
- [[10_FLUJOS_DE_USUARIO]]
- [[12_MODELO_DE_DATOS]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[35_ROADMAP]]
