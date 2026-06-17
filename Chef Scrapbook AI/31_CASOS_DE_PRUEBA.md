---
title: "Casos de Prueba"
document_id: "CS-31"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "pruebas"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - pruebas
---

# Casos de Prueba

## Navegacion SPA

| ID | Tipo | Precondicion | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|---|
| TC-N01 | Funcional | App cargada | Abrir sin hash en la URL | Redirige a `#/inicio`, vista Inicio visible | Pendiente |
| TC-N02 | Funcional | App cargada | Escribir `#/recetas` en la barra de URL | Vista Biblioteca de Recetas, "Recetas" activo en sidebar | Pendiente |
| TC-N03 | Funcional | App cargada | Navegar a `#/recetas/galletas-de-chispas` | Vista detalle con ingredientes y calculadora | Pendiente |
| TC-N04 | Funcional | App cargada | Navegar a `#/menus` | Vista planificador semanal, "Menus" activo en sidebar | Pendiente |
| TC-N05 | Funcional | App cargada | Escribir hash desconocido `#/noexiste` | Redirige a `#/inicio` sin error de consola | Pendiente |
| TC-N06 | Funcional | Varias vistas visitadas | Clic en boton atras del navegador | Retrocede a la vista anterior correctamente | Pendiente |
| TC-N07 | Accesibilidad | Sidebar en desktop | Clic en link "Recetas" del sidebar | `aria-current="page"` se mueve al link correcto | Pendiente |

## Sidebar movil

| ID | Tipo | Precondicion | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|---|
| TC-M01 | Funcional | Viewport < 1024px | Clic en boton hamburguesa | Sidebar aparece, `aria-expanded=true`, overlay visible | Pendiente |
| TC-M02 | Funcional | Sidebar abierto | Clic en overlay | Sidebar se cierra, `aria-expanded=false` | Pendiente |
| TC-M03 | Funcional | Sidebar abierto | Presionar Escape | Sidebar se cierra | Pendiente |
| TC-M04 | Funcional | Sidebar abierto | Clic en link de navegacion | Navega a la vista, sidebar se cierra | Pendiente |

## Calculadora de porciones

| ID | Tipo | Precondicion | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|---|
| TC-C01 | Funcional | Vista detalle activa | Ingresar 1, presionar Enter | Porciones=1, ingredientes escalados, sin error | Pendiente |
| TC-C02 | Funcional | Vista detalle activa | Ingresar 27 | Valores base originales, sin cambio | Pendiente |
| TC-C03 | Funcional | Vista detalle activa | Ingresar 54 | Factor=2, todos los pesos x2 | Pendiente |
| TC-C04 | Funcional | Vista detalle activa | Ingresar 9999 | Valores muy grandes, sin error | Pendiente |
| TC-C05 | Validacion | Vista detalle activa | Ingresar 0 | Error: mayor que cero | Pendiente |
| TC-C06 | Validacion | Vista detalle activa | Ingresar -2 | Error: mayor que cero | Pendiente |
| TC-C07 | Validacion | Vista detalle activa | Ingresar 1.5 | Error: debe ser entero | Pendiente |
| TC-C08 | Validacion | Vista detalle activa | Ingresar "abc" | Error: ingresa numero valido | Pendiente |
| TC-C09 | Validacion | Vista detalle activa | Borrar el campo y presionar Enter | Error: ingresa un numero | Pendiente |
| TC-C10 | Validacion | Vista detalle activa | Ingresar 10000 | Error: no puede superar 9999 | Pendiente |
| TC-C11 | Botones | Vista detalle activa | Clic en + con valor 27 | Porciones=28, escalado correcto | Pendiente |
| TC-C12 | Botones | Vista detalle activa | Clic en - con valor 1 | Porciones permanece en 1 | Pendiente |
| TC-C13 | Accesibilidad | Vista detalle activa | Ingresar valor valido | Cambio anunciado por `aria-live polite` | Pendiente |
| TC-C14 | Accesibilidad | Vista detalle activa | Ingresar valor invalido | Error anunciado por `aria-live assertive` | Pendiente |

## Favoritos

| ID | Tipo | Precondicion | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|---|
| TC-F01 | Funcional | Vista Recetas, receta no en favoritos | Clic en boton corazon | Icono activo, toast de confirmacion | Pendiente |
| TC-F02 | Funcional | Receta en favoritos | Clic en boton corazon | Icono inactivo, receta removida de favoritos | Pendiente |
| TC-F03 | Persistencia | Favorito guardado | Recargar pagina | Favorito persiste, icono activo | Pendiente |

## Planificador semanal

| ID | Tipo | Precondicion | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|---|
| TC-P01 | Funcional | Vista Menus, slot vacio | Seleccionar receta en dropdown | Slot muestra el nombre de la receta | Pendiente |
| TC-P02 | Funcional | Slot con receta asignada | Seleccionar otra receta | Slot actualizado correctamente | Pendiente |
| TC-P03 | Funcional | Slot con receta asignada | Limpiar slot | Slot vuelve a estado vacio | Pendiente |
| TC-P04 | Funcional | Vista Menus | Agregar tarea de preparacion | Tarea aparece en la lista | Pendiente |
| TC-P05 | Funcional | Lista de tareas con items | Toggle de tarea | Tarea marcada/desmarcada como completada | Pendiente |
| TC-P06 | Funcional | Lista de tareas con items | Eliminar tarea | Tarea desaparece de la lista | Pendiente |
| TC-P07 | Funcional | Vista Menus | Agregar item a la lista de compras | Item aparece con texto y cantidad | Pendiente |
| TC-P08 | Funcional | Lista de compras con items | Limpiar todo | Lista queda vacia | Pendiente |
| TC-P09 | Persistencia | Plan y listas con datos | Recargar pagina | Todos los datos persisten | Pendiente |

## Responsive

| ID | Ancho | Precondicion | Resultado esperado | Estado |
|---|---|---|---|---|
| TC-R01 | 320px | DevTools | Sidebar oculto, cabecera movil visible, sin scroll horizontal | Pendiente |
| TC-R02 | 375px | DevTools | Mismo que 320px | Pendiente |
| TC-R03 | 768px | DevTools | Layout adaptado al breakpoint | Pendiente |
| TC-R04 | 1024px | DevTools | Sidebar visible, cabecera movil oculta | Pendiente |
| TC-R05 | 1440px | DevTools | Sin overflow, contenido centrado | Pendiente |
| TC-R06 | Zoom 200% | Browser zoom | Contenido accesible, sin perdida de funcionalidad | Pendiente |

## Teclado y accesibilidad

| ID | Caso | Resultado esperado | Estado |
|---|---|---|---|
| TC-A01 | Tab desde inicio | Skip link recibe foco primero | Pendiente |
| TC-A02 | Enter en skip link | Foco salta a `#main-content` | Pendiente |
| TC-A03 | Tab por sidebar | Todos los links reciben foco visible | Pendiente |
| TC-A04 | Tab a input de calculadora | Input recibe foco visible | Pendiente |
| TC-A05 | Contraste texto | 4.5:1 minimo en texto normal | Pendiente |
| TC-A06 | Boton hamburguesa | `aria-expanded` cambia correctamente | Pendiente |

## Identidad y activos

| ID | Elemento | Resultado esperado | Estado |
|---|---|---|---|
| TC-I01 | Favicon | Isotipo cat chef visible en tab del navegador | Pendiente |
| TC-I02 | Iconos SVG del sidebar | home.svg, recipe.svg, calendar.svg cargados sin error | Pendiente |
| TC-I03 | Prata en titulos | Fuente serif correcta cargada | Pendiente |
| TC-I04 | Mulish en cuerpo | Fuente sans-serif principal correcta | Pendiente |
| TC-I05 | Paleta Vanilla Ink | Fondo `#FAF5EC`, texto `#253245` | Pendiente |
| TC-I06 | Sin Material Symbols | La consola no carga fonts.googleapis.com para Material Symbols | Pendiente |
| TC-I07 | SVGs sin errores | Ningun SVG produce error de carga en consola | Pendiente |

## Documentos relacionados

- [[30_GUIA_DE_PRUEBAS]]
- [[16_REGLAS_DE_NEGOCIO]]
