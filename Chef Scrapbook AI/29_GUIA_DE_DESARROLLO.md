---
title: "Guia de Desarrollo"
document_id: "CS-29"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "guia"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - guia
---

# Guia de Desarrollo

## Flujo de trabajo

1. **Interpretar:** entender la tarea, el entregable, las restricciones y el impacto.
2. **Consultar vault:** leer `00_README`, `41_INDICE`, `04_ESTADO_ACTUAL`.
3. **Revisar manual:** cuando la tarea afecte marca, UI, contenido o accesibilidad, consultar `42_MANUAL_DE_NORMAS_BRANDING`.
4. **Inspeccionar codigo:** abrir los archivos reales afectados (`index.html`, CSS, modulos JS segun corresponda).
5. **Mapa de impacto:** identificar que archivos, componentes y documentos del vault se veran afectados.
6. **Implementar:** minimo cambio necesario, sin sobreingenieria, sin dependencias no solicitadas.
7. **Probar:** calculadora, navegacion, responsive, teclado, accesibilidad, consola.
8. **DOCUMENTATION COMPLETION GATE:** actualizar el vault antes de declarar la tarea completa (ver seccion abajo).
9. **Revisar Git:** `git status`, `git diff` antes de staging.
10. **Solicitar autorizacion:** no hacer commit ni push sin autorizacion expresa de Rodolfo Moreno.

## Como agregar una nueva vista (pagina)

1. Crear `assets/js/pages/nueva-vista.js` con IIFE que exponga `ChefScrapbook.Pages.nuevaVista`.
2. Agregar el `<script>` correspondiente en `index.html` antes de `router.js`.
3. Registrar la ruta en `router.js`: `{ pattern: '/nueva-vista', handler: Pages.nuevaVista }`.
4. Agregar el enlace de navegacion en el sidebar de `index.html` si corresponde.
5. Actualizar `[[04_ESTADO_ACTUAL]]`, `[[08_ESTRUCTURA_DEL_REPOSITORIO]]`, `[[09_MODULOS_Y_FUNCIONALIDADES]]`, `[[10_FLUJOS_DE_USUARIO]]`.

## Como agregar una nueva receta

1. Agregar el objeto de receta al array `recipes` en `assets/js/data/recipes.js`, con todos los campos del esquema definidos en `[[12_MODELO_DE_DATOS]]`.
2. Verificar que el `slug` sea unico y compatible con URLs.
3. La tarjeta "Proximamente" debe reemplazarse por la tarjeta real en la vista de Recetas.
4. Actualizar `[[04_ESTADO_ACTUAL]]`, `[[09_MODULOS_Y_FUNCIONALIDADES]]`, `[[37_HISTORIAL_DE_CAMBIOS]]`.

## Como agregar un nuevo token CSS

1. Agregar la variable en `assets/css/tokens.css` bajo `:root`.
2. Documentar el uso aprobado y prohibido en `[[42_MANUAL_DE_NORMAS_BRANDING]]` seccion 27.
3. Usar el token en los archivos CSS correspondientes (nunca hardcodear valores que tengan token).

## Como agregar un nuevo campo al estado

1. Agregar el campo con valor inicial en la funcion `getDefaultState()` de `state.js`.
2. Crear los metodos de lectura/escritura correspondientes y exponerlos en `ChefScrapbook.State`.
3. Actualizar `[[12_MODELO_DE_DATOS]]`.
4. Si el cambio es incompatible con el estado existente, incrementar la version de la clave localStorage.

## Reglas permanentes

- No modificar el codigo de la aplicacion durante tareas de documentacion pura.
- No hacer commit, push ni despliegue sin autorizacion.
- No instalar dependencias npm sin autorizacion.
- No migrar el stack sin autorizacion.
- No inventar capacidades ni contradecir el manual de marca.
- Rutas siempre relativas para compatibilidad con GitHub Pages.
- Separar siempre estado presente de vision futura en toda comunicacion.

## DOCUMENTATION COMPLETION GATE

Antes de reportar cualquier tarea de codigo como completada, verificar y actualizar segun corresponda:

**Siempre evaluar:**
- `[[04_ESTADO_ACTUAL]]` — si cambio el estado del proyecto.
- `[[36_TAREAS_PENDIENTES]]` — si se completo o surgio una tarea.
- `[[37_HISTORIAL_DE_CAMBIOS]]` — si hay un cambio significativo que registrar.

**Segun el area afectada:**
- Arquitectura → `[[05_ARQUITECTURA_GENERAL]]`, `[[06_ARQUITECTURA_TECNICA]]`, `[[07_STACK_TECNOLOGICO]]`, `[[08_ESTRUCTURA_DEL_REPOSITORIO]]`
- Funcionalidad → `[[09_MODULOS_Y_FUNCIONALIDADES]]`, `[[10_FLUJOS_DE_USUARIO]]`
- Datos → `[[12_MODELO_DE_DATOS]]`
- Reglas → `[[16_REGLAS_DE_NEGOCIO]]`
- Integraciones → `[[17_INTEGRACIONES_EXTERNAS]]`, `docs/ASSET-SOURCES.md`
- Seguridad → `[[24_SEGURIDAD]]`
- Estandares → `[[27_ESTANDARES_DE_CODIGO]]`, `[[28_CONVENCIONES_DEL_PROYECTO]]`
- Pruebas → `[[30_GUIA_DE_PRUEBAS]]`, `[[31_CASOS_DE_PRUEBA]]`
- Errores → `[[32_ERRORES_CONOCIDOS]]`
- Decisiones → `[[33_DECISIONES_TECNICAS]]`
- Deuda → `[[34_DEUDA_TECNICA]]`
- Incidentes → `[[38_INCIDENTES_Y_SOLUCIONES]]`
- Branding → `[[42_MANUAL_DE_NORMAS_BRANDING]]`

**No reportar la tarea como completa si alguno de estos documentos deberia actualizarse y no fue actualizado.**

## Documentos relacionados

- [[27_ESTANDARES_DE_CODIGO]]
- [[28_CONVENCIONES_DEL_PROYECTO]]
- [[30_GUIA_DE_PRUEBAS]]
- [[39_PROMPTS_Y_REGLAS_PARA_IA]]
