---
title: "Reglas de Negocio"
document_id: "CS-16"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "reglas"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[12_MODELO_DE_DATOS]]"
  - "[[10_FLUJOS_DE_USUARIO]]"
  - "[[31_CASOS_DE_PRUEBA]]"
tags:
  - chef-scrapbook
  - reglas
  - calculadora
---

# Reglas de Negocio

## Calculadora de porciones — RN-01 a RN-14

| Regla | Condicion | Mensaje | Implementacion |
|---|---|---|---|
| RN-01 | Porciones deben ser entero | "El numero de porciones debe ser un entero." | `Number.isInteger(num)` |
| RN-02 | Porciones mayores que cero | "El numero de porciones debe ser mayor que cero." | `num <= 0` |
| RN-03 | Campo no puede estar vacio | "Ingresa un numero de porciones." | `trimmed === ""` |
| RN-04 | Valor debe ser numerico finito | "Ingresa un numero valido." | `!Number.isFinite(num)` |
| RN-05 | Limite maximo 9999 | "El numero de porciones no puede superar 9999." | `num > 9999` |
| RN-06 | Valores base son inmutables | No aplica | Variables de modulo en `app.js` |
| RN-07 | Factor desde base, no acumulado | No aplica | `factor = portions / BASE_PORTIONS` |
| RN-08 | Redondeo al entero mas proximo | No aplica | `Math.round()` en cada peso |
| RN-09 | Unidades siempre en gramos | No aplica | Sufijo "g" en textContent |
| RN-10 | Anuncio via aria-live polite | No aplica | `#calc-live` actualizado |
| RN-11 | Error via aria-live assertive | No aplica | `role="alert"` en mensaje de error |
| RN-12 | aria-invalid actualizado | No aplica | `setAttribute aria-invalid` |
| RN-13 | Step no puede bajar de 1 | No aplica | `Math.max(1, current + delta)` |
| RN-14 | NaN en step se corrige a base | No aplica | `if (isNaN(current)) current = BASE_PORTIONS` |

> [!important]
> BASE_PORTIONS = 27. Factor = porciones_deseadas / 27. Siempre se calcula desde los valores base originales. El escalado no es acumulativo.

## Navegacion SPA — RN-15 a RN-18

| Regla | Descripcion |
|---|---|
| RN-15 | La URL sin hash redirige automaticamente a `#/inicio`. |
| RN-16 | Un hash no reconocido por el router redirige a `#/inicio`. |
| RN-17 | Una ruta `/recetas/:slug` con un slug que no existe en el catalogo muestra mensaje de receta no encontrada. |
| RN-18 | El indicador de ruta activa (`aria-current="page"`) se actualiza en cada cambio de hash. |

## Busqueda y filtrado — RN-19 a RN-21

| Regla | Descripcion |
|---|---|
| RN-19 | La busqueda filtra en tiempo real sin clic adicional. |
| RN-20 | La busqueda es case-insensitive. |
| RN-21 | Los filtros de categoria se pueden combinar con la busqueda de texto. |

## Favoritos — RN-22 a RN-24

| Regla | Descripcion |
|---|---|
| RN-22 | Un favorito se almacena como el slug de la receta en el array `favorites` de localStorage. |
| RN-23 | El toggle de favorito actualiza inmediatamente la UI y persiste el cambio. |
| RN-24 | Si el usuario borra el localStorage, la lista de favoritos se resetea a vacia. |

## Planificador semanal — RN-25 a RN-29

| Regla | Descripcion |
|---|---|
| RN-25 | El planificador tiene exactamente 7 dias y 4 tiempos de comida. |
| RN-26 | Un slot puede asignarse, reasignarse o limpiarse en cualquier momento. |
| RN-27 | Solo se pueden asignar al planificador recetas que existan en `ChefScrapbook.data.recipes`. |
| RN-28 | La lista de compras y las tareas de preparacion son independientes del planificador. |
| RN-29 | Limpiar todo la lista de compras no afecta el plan de menu ni las tareas. |

## Honestidad del catalogo — RN-30

| Regla | Descripcion |
|---|---|
| RN-30 | Solo se presentan como recetas reales los objetos completos en `data/recipes.js`. Las tarjetas de recetas sin implementar deben mostrarse explicitamente como "Proximamente" sin inventar datos. |

## Reglas futuras para ingredientes criticos (PLANIFICADO)

El manual v3.1 describe advertencias para ingredientes que no escalan linealmente (levadura, sal, especias). No implementadas actualmente.

## Documentos relacionados

- [[12_MODELO_DE_DATOS]]
- [[10_FLUJOS_DE_USUARIO]]
- [[06_ARQUITECTURA_TECNICA]]
- [[31_CASOS_DE_PRUEBA]]
