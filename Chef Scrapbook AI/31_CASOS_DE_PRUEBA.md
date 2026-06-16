---
title: "Casos de Prueba"
document_id: "CS-31"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "pruebas"
version: "1.0.0"
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

## Calculadora de porciones

| ID | Tipo | Precondicion | Pasos | Resultado esperado | Estado |
|---|---|---|---|---|---|
| TC-01 | Funcional | App cargada | Ingresar 1, presionar Enter | Porciones=1, ingredientes escalados, sin error | Pendiente |
| TC-02 | Funcional | App cargada | Ingresar 2, presionar Enter | Factor=2/27, pesos redondeados, sin error | Pendiente |
| TC-03 | Funcional | App cargada | Ingresar 27 | Valores base originales, sin cambio | Pendiente |
| TC-04 | Funcional | App cargada | Ingresar 50 | Factor=50/27, pesos redondeados | Pendiente |
| TC-05 | Funcional | App cargada | Ingresar 9999 | Valores muy grandes, sin error | Pendiente |
| TC-06 | Validacion | App cargada | Ingresar 0, presionar Enter | Error: mayor que cero | Pendiente |
| TC-07 | Validacion | App cargada | Ingresar -2 | Error: mayor que cero | Pendiente |
| TC-08 | Validacion | App cargada | Ingresar 1.5 | Error: debe ser entero | Pendiente |
| TC-09 | Validacion | App cargada | Ingresar "abc" | Error: ingresa numero valido | Pendiente |
| TC-10 | Validacion | App cargada | Borrar el campo y presionar Enter | Error: ingresa un numero | Pendiente |
| TC-11 | Validacion | App cargada | Ingresar 10000 | Error: no puede superar 9999 | Pendiente |
| TC-12 | Botones | App cargada | Clic en + con valor 27 | Porciones=28, escalado correcto | Pendiente |
| TC-13 | Botones | App cargada | Clic en - con valor 1 | Porciones permanece en 1 | Pendiente |

## Responsive

| ID | Ancho | Precondicion | Resultado esperado | Estado |
|---|---|---|---|---|
| TC-R01 | 320px | DevTools | Sidebar oculto, cabecera movil visible, sin scroll horizontal | Pendiente |
| TC-R02 | 375px | DevTools | Mismo que 320px | Pendiente |
| TC-R03 | 768px | DevTools | Layout de dos columnas activo | Pendiente |
| TC-R04 | 1024px | DevTools | Sidebar visible, layout de escritorio | Pendiente |
| TC-R05 | 1440px | DevTools | Sin overflow, contenido centrado | Pendiente |
| TC-R06 | Zoom 200% | Browser zoom | Contenido accesible, sin perdida de funcionalidad | Pendiente |

## Teclado y accesibilidad

| ID | Caso | Resultado esperado | Estado |
|---|---|---|---|
| TC-A01 | Tab desde inicio | Skip link recibe foco primero | Pendiente |
| TC-A02 | Enter en skip link | Foco salta a #main-content | Pendiente |
| TC-A03 | Tab por sidebar | Todos los links reciben foco visible | Pendiente |
| TC-A04 | Tab a input | Input recibe foco visible | Pendiente |
| TC-A05 | Enter en input valido | Calculadora actualiza y anuncia | Pendiente |
| TC-A06 | Input invalido | Error anunciado por aria-live assertive | Pendiente |
| TC-A07 | Valor valido | Cambio anunciado por aria-live polite | Pendiente |
| TC-A08 | Contraste texto | 4.5:1 minimo en texto normal | Pendiente |

## Identidad y activos

| ID | Elemento | Resultado esperado | Estado |
|---|---|---|---|
| TC-I01 | chef-avatar.svg | Visible, cargado, accesible | Pendiente |
| TC-I02 | Prata en titulos | Fuente serif correcta | Pendiente |
| TC-I03 | Mulish en cuerpo | Fuente sans-serif correcta | Pendiente |
| TC-I04 | Paleta Vanilla Ink | Fondo #FAF5EC, texto #253245 | Pendiente |
| TC-I05 | Links validos | No hay enlaces rotos | Pendiente |
| TC-I06 | SVGs propios | Sin errores de carga | Pendiente |

## Documentos relacionados

- [[30_GUIA_DE_PRUEBAS]]
- [[16_REGLAS_DE_NEGOCIO]]
