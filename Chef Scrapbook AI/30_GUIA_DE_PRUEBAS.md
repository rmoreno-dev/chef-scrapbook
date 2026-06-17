---
title: "Guia de Pruebas"
document_id: "CS-30"
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

# Guia de Pruebas

## Navegacion SPA

| Caso | Resultado esperado |
|---|---|
| Abrir URL sin hash | Redirige a `#/inicio` |
| Navegar a `#/inicio` | Vista Inicio renderizada, sidebar muestra Inicio activo |
| Navegar a `#/recetas` | Vista Biblioteca de Recetas, sidebar muestra Recetas activo |
| Navegar a `#/recetas/galletas-de-chispas` | Vista detalle de receta |
| Navegar a `#/menus` | Vista planificador semanal |
| Hash desconocido (`#/noexiste`) | Redirige a `#/inicio` |
| Presionar atras en el navegador | Regresa a la vista anterior |

## Calculadora de porciones

| Caso | Valor | Resultado esperado |
|---|---|---|
| Base | 27 | Sin cambio, valores originales |
| Doble | 54 | Todos los pesos x2 |
| Mitad | 13 o 14 | Valores redondeados a entero |
| Maximo | 9999 | Valores muy grandes, sin error |
| Cero | 0 | Error: debe ser mayor que cero |
| Negativo | -2 | Error: debe ser mayor que cero |
| Decimal | 1.5 | Error: debe ser un entero |
| Texto | abc | Error: ingresa un numero valido |
| Vacio | "" | Error: ingresa un numero de porciones |
| Mas de 9999 | 10000 | Error: no puede superar 9999 |

## Favoritos

| Caso | Resultado esperado |
|---|---|
| Clic en corazon de receta no favorita | Receta marcada como favorita, icono relleno, toast de confirmacion |
| Clic en corazon de receta favorita | Receta desmarcada, icono vacio |
| Recargar la pagina | El estado de favoritos persiste en localStorage |
| Borrar localStorage y recargar | Lista de favoritos vacia, sin error |

## Planificador semanal

| Caso | Resultado esperado |
|---|---|
| Asignar receta a un slot | Slot muestra el nombre de la receta |
| Cambiar receta de un slot | Slot actualizado |
| Limpiar un slot | Slot vuelve a "Sin asignar" |
| Agregar tarea de preparacion | Tarea aparece en la lista |
| Toggle tarea completada | Tarea tachada/destachada |
| Eliminar tarea | Tarea desaparece |
| Agregar item a la lista de compras | Item aparece con cantidad y unidad |
| Toggle item de compras | Item marcado/desmarcado como comprado |
| Limpiar lista de compras | Lista vacia |
| Recargar pagina | Estado del planificador persiste |

## Responsive

Probar en: 320px, 375px, 390px, 768px, 1024px, 1280px, 1440px, zoom 200%, orientacion horizontal.

| Caso | Resultado esperado |
|---|---|
| 320-767px | Sidebar oculto, cabecera movil visible, boton hamburguesa funcional |
| 768-1023px | Transition breakpoint, layout adaptado |
| 1024px+ | Sidebar visible permanentemente, cabecera movil oculta |
| Sidebar movil | Desliza desde la izquierda, overlay oscuro activo, Escape lo cierra |
| Zoom 200% | Contenido accesible, sin scroll horizontal no intencionado |

## Accesibilidad

| Caso | Resultado esperado |
|---|---|
| Tab desde inicio | Skip link recibe foco primero |
| Enter en skip link | Foco salta a `#main-content` |
| Tab por sidebar | Todos los links reciben foco visible |
| Navegar entre vistas por teclado | Router responde, vista cambia |
| Input de calculadora | Recibe foco, acepta entrada de teclado |
| aria-live calculadora | Anuncia cambios al lectores de pantalla |
| Boton hamburguesa | `aria-expanded` cambia entre true/false |
| Contraste de texto | Minimo 4.5:1 para texto normal, 3:1 para texto grande |

## Identidad y activos

| Caso | Resultado esperado |
|---|---|
| Favicon | Isotipo cat chef visible en la tab del navegador |
| Iconos SVG del sidebar | home.svg, recipe.svg, calendar.svg cargados correctamente |
| Brand stamp | brand-stamp.svg visible en pie del sidebar |
| Prata en titulos | Fuente serif editorial correcta |
| Mulish en cuerpo | Fuente sans-serif principal correcta |
| Paleta Vanilla Ink | Fondo `#FAF5EC`, texto `#253245`, acentos Malva |

## Performance

- Sin errores en la consola del navegador.
- Fuentes con `font-display: swap` declarado.
- Sin referencias a `.local-reference/` en el codigo activo.
- Rutas de assets todas relativas (sin `/` inicial, sin `file:///`, sin `C:\`).

## Documentos relacionados

- [[31_CASOS_DE_PRUEBA]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[27_ESTANDARES_DE_CODIGO]]
