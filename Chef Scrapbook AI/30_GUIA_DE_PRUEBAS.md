---
title: "Guia de Pruebas"
document_id: "CS-30"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "pruebas"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - pruebas
---

# Guia de Pruebas

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

## Responsive

Probar en: 320px, 375px, 390px, 768px, 1024px, 1280px, 1440px, zoom 200%, orientacion horizontal.

## Accesibilidad

- Navegacion completa por teclado (Tab, Shift+Tab, Enter, Espacio).
- Focus visible en todos los elementos interactivos.
- aria-live polite anuncia cambios en calculadora.
- aria-live assertive anuncia errores inmediatamente.
- Skip link funcional al inicio de la pagina.
- Contraste minimo 4.5:1 para texto normal.
- Contraste minimo 3:1 para texto grande e interfaz.

## Identidad

- Logo: chef-avatar.svg visible y accesible (alt="" ya que es decorativo).
- Tipografias cargadas correctamente (Prata, Mulish, Great Vibes).
- Paleta Vanilla Ink aplicada correctamente.
- Sin textos placeholder ("Culinary Journal" debe actualizarse antes de publicar).

## Performance

- Sin errores en la consola del navegador.
- Fonts con font-display: swap declarado.
- Imagenes con loading="lazy" donde corresponda.

## Documentos relacionados

- [[31_CASOS_DE_PRUEBA]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[27_ESTANDARES_DE_CODIGO]]
