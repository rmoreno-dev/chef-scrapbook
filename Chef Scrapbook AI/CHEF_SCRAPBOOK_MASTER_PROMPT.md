---
title: "Chef Scrapbook — Prompt maestro para IA"
document_id: "CS-AI-MASTER"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "prompt-maestro"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
  - "[[04_ESTADO_ACTUAL]]"
  - "[[39_PROMPTS_Y_REGLAS_PARA_IA]]"
  - "[[41_INDICE_GENERAL_DE_DOCUMENTACION]]"
  - "[[42_MANUAL_DE_NORMAS_BRANDING]]"
tags:
  - chef-scrapbook
  - ia
  - prompt-maestro
---

# Chef Scrapbook — Prompt maestro para IA

> [!important]
> Eres un agente IA trabajando en **Chef Scrapbook**. Este documento define el protocolo completo que debes seguir en cada sesión. Léelo íntegro antes de actuar. No hagas ningún cambio sin haber completado las fases de orientación e inspección.

---

## FASE 0 — Interpretar el input

Antes de cargar cualquier contexto, identifica con precisión:

- **Intención:** ¿qué quiere lograr el usuario? ¿es una corrección, una nueva función, un análisis, documentación?
- **Entregable:** ¿qué se espera recibir al final? ¿código modificado, un documento, un informe, una respuesta?
- **Restricciones:** ¿hay limitaciones de alcance, tecnología, tiempo o autorización?
- **Autorización disponible:** ¿el usuario ha dado permiso explícito para commit, push, modificación del frontend, instalación de dependencias?
- **Ambigüedades críticas:** ¿hay algo que, si lo interpretas mal, podría causar daño irreversible?

Si la tarea está vacía o es ambigua en un punto crítico, solicita aclaración antes de continuar.

---

## FASE 1 — Cargar contexto base

Lee siempre estos documentos, en este orden, antes de cualquier otra acción:

1. [[00_README_DEL_PROYECTO]] — visión general, estado y propósito del proyecto.
2. [[41_INDICE_GENERAL_DE_DOCUMENTACION]] — mapa del vault; úsalo para selección documental.
3. [[04_ESTADO_ACTUAL]] — estado real del código hoy, no la visión futura.
4. [[08_ESTRUCTURA_DEL_REPOSITORIO]] — rutas, archivos y organización real.
5. [[39_PROMPTS_Y_REGLAS_PARA_IA]] — reglas operativas para agentes IA en este proyecto.

**No cargues automáticamente los 43 documentos.** La carga total consume contexto innecesariamente. Selecciona solo los relevantes para la tarea actual.

---

## FASE 2 — Enrutamiento documental

Usa la matriz de [[41_INDICE_GENERAL_DE_DOCUMENTACION]] para seleccionar documentos adicionales. Guía de rutas frecuentes:

| Dominio de la tarea | Documentos a cargar |
|---|---|
| UI, branding, estilos, voz | [[42_MANUAL_DE_NORMAS_BRANDING]], [[06_ARQUITECTURA_TECNICA]] |
| Contenido editorial, recetas | [[09_MODULOS_Y_FUNCIONALIDADES]], [[16_REGLAS_DE_NEGOCIO]] |
| Calculadora, lógica de porciones | [[09_MODULOS_Y_FUNCIONALIDADES]], [[12_MODELO_DE_DATOS]], [[16_REGLAS_DE_NEGOCIO]] |
| Arquitectura, estructura técnica | [[05_ARQUITECTURA_GENERAL]], [[06_ARQUITECTURA_TECNICA]], [[07_STACK_TECNOLOGICO]] |
| Seguridad, validación | [[24_SEGURIDAD]], [[16_REGLAS_DE_NEGOCIO]] |
| Despliegue, GitHub Pages | [[23_CI_CD_Y_DESPLIEGUE]], [[21_CONFIGURACION_PRODUCCION]] |
| Errores, incidentes | [[32_ERRORES_CONOCIDOS]], [[38_INCIDENTES_Y_SOLUCIONES]] |
| Planificación, deuda técnica | [[34_DEUDA_TECNICA]], [[35_ROADMAP]], [[36_TAREAS_PENDIENTES]] |
| Pruebas y casos de prueba | [[30_GUIA_DE_PRUEBAS]], [[31_CASOS_DE_PRUEBA]] |
| Estándares de código | [[27_ESTANDARES_DE_CODIGO]], [[28_CONVENCIONES_DEL_PROYECTO]] |

---

## FASE 3 — Inspeccionar el código real

**El vault describe; el código es la verdad sobre lo implementado.** Nunca asumas el estado de un archivo sin leerlo.

Para cada tarea, abre los archivos afectados y verifica:

- Sintaxis y tecnología real del archivo (no la declarada en el vault).
- Rutas referenciadas (relativas, sin esquema de archivo local, compatibles con GitHub Pages).
- Dependencias implícitas entre archivos.
- Divergencias entre lo que documenta el vault y lo que implementa el código.

### Nota sobre `assets/js/app.js`

El archivo usa el patrón IIFE con `'use strict'` y declaraciones `var` (compatible con ES5), pero incluye llamadas a `Number.isFinite()` y `Number.isInteger()` introducidas en ES2015 (ES6). **No lo documentes como "JavaScript ES5 puro"**; es JavaScript sin transpilación que requiere un entorno moderno que soporte estos métodos.

---

## FASE 4 — Evaluar branding

Para cualquier tarea que afecte UI, contenido visible, voz, activos o accesibilidad:

1. Consulta [[42_MANUAL_DE_NORMAS_BRANDING]] antes de proponer cambios.
2. Cuando sea necesario detalle adicional, lee el manual fuente en `.local-reference/brand-manual-v3.1/`.
3. Valida siempre:
   - Logo: solo usar variantes oficiales del kit en `.local-reference/`. `chef-avatar.svg` es **provisional**.
   - Colores: solo la paleta Vanilla Ink aprobada, sin modificaciones.
   - Tipografía: Prata / Mulish / Great Vibes con las reglas de uso definidas.
   - Componentes: botones, inputs, cards, mensajes y estados según el manual.
   - Microcopy: segunda persona, verbo activo, sin culpar al usuario.
   - Responsive: verificar en 320, 375, 768, 1024 y 1280 px.
   - Accesibilidad: WCAG 2.2 AA mínimo.

---

## FASE 5 — Crear mapa de impacto

Antes de implementar, identifica qué afecta la tarea:

| Área | Preguntas a responder |
|---|---|
| Archivos de código | ¿Cuáles archivos se modifican? ¿hay dependencias? |
| Componentes | ¿Qué elementos de UI están involucrados? |
| Reglas de negocio | ¿Se altera la lógica de porciones, validación o datos? |
| Seguridad | ¿Se manipula input del usuario? ¿hay riesgo de XSS? |
| Branding | ¿Se cambia algo visible? ¿cumple el manual? |
| Accesibilidad | ¿Se afecta navegación por teclado, contraste o ARIA? |
| Pruebas | ¿Qué casos de prueba deben actualizarse? |
| Documentos del vault | ¿Qué documentos reflejan este cambio? |

---

## FASE 6 — Proponer plan

Antes de hacer cambios, informa al usuario:

1. **Comprensión:** qué entendiste que se pide.
2. **Cambios propuestos:** qué modificarás exactamente.
3. **Archivos afectados:** lista completa de archivos de código y vault.
4. **Riesgos:** qué podría ir mal o requerir atención adicional.
5. **Validaciones previstas:** cómo verificarás que el cambio es correcto.
6. **Documentación afectada:** qué documentos del vault se actualizarán.

Espera confirmación cuando el cambio sea significativo o irreversible.

---

## FASE 7 — Implementar

Al ejecutar:

- Modifica únicamente lo necesario para resolver la tarea.
- No introduzcas abstracciones, helpers ni refactorizaciones no solicitadas.
- No instales dependencias sin autorización expresa.
- No crees un backend si no se solicitó explícitamente.
- No migres el stack (HTML→React, JS→TypeScript, etc.) sin autorización.
- No introduzcas secretos, tokens ni credenciales.
- Conserva rutas relativas; no uses rutas absolutas ni el esquema de archivo local.
- Mantén compatibilidad con GitHub Pages (sin servidor, sin rutas de API locales).
- Lee el archivo antes de modificarlo.

---

## FASE 8 — Validar

Después de implementar, verifica según corresponda:

| Categoría | Qué revisar |
|---|---|
| Sintaxis | Archivo HTML válido, CSS sin errores, JS sin errores de consola |
| Calculadora | Valores 1, 27, 100, 9999; entradas inválidas; mensajes de error |
| Responsive | 320, 375, 768, 1024 y 1280 px |
| Accesibilidad | Teclado, foco visible, contraste, alt text, aria-live |
| Branding | Paleta, tipografía, voz, logo |
| Activos | Rutas relativas correctas, sin referencias a `.local-reference/` |
| Seguridad | Sin XSS, sin innerHTML con datos del usuario, sin secretos |
| Git | `git status` limpio de archivos no deseados |

---

## FASE 9 — Actualizar el vault

Después de cualquier cambio en el código, evalúa siempre si actualizar:

- [[04_ESTADO_ACTUAL]] — si el estado del proyecto cambió.
- [[36_TAREAS_PENDIENTES]] — si se completó o surgió una tarea.
- [[37_HISTORIAL_DE_CAMBIOS]] — si hay un cambio significativo que registrar.

Actualiza también cuando corresponda:

- [[09_MODULOS_Y_FUNCIONALIDADES]] — si se añadió o modificó funcionalidad.
- [[16_REGLAS_DE_NEGOCIO]] — si cambió la lógica de negocio.
- [[31_CASOS_DE_PRUEBA]] — si los casos de prueba cambiaron.
- [[32_ERRORES_CONOCIDOS]] — si se resolvió o identificó un error.
- [[33_DECISIONES_TECNICAS]] — si se tomó una decisión técnica relevante.
- [[34_DEUDA_TECNICA]] — si se resolvió o añadió deuda técnica.
- [[35_ROADMAP]] — si el plan de desarrollo cambió.
- [[38_INCIDENTES_Y_SOLUCIONES]] — si hubo un incidente.
- [[42_MANUAL_DE_NORMAS_BRANDING]] — si cambió algo relacionado con marca.

**No actualices fechas si el contenido no cambió.**

---

## FASE 10 — Entregar informe

Al concluir, reporta:

1. **Contexto consultado:** documentos del vault y archivos de código leídos.
2. **Archivos modificados:** lista con rutas relativas.
3. **Cambios realizados:** descripción precisa de qué se hizo y por qué.
4. **Pruebas ejecutadas:** qué se verificó y cuál fue el resultado.
5. **Riesgos identificados:** qué queda pendiente o podría requerir atención.
6. **Documentación actualizada:** qué documentos del vault se actualizaron.
7. **Estado Git:** resultado de `git status` (sin ejecutar commit).
8. **Pendientes:** tareas que surgieron pero no se ejecutaron en esta sesión.

---

## FASE 11 — Control Git

Reglas absolutas sin excepción:

- **No hacer `git commit`** sin autorización expresa de Rodolfo Moreno.
- **No hacer `git push`** sin autorización expresa de Rodolfo Moreno.
- **No desplegar** a GitHub Pages ni a ningún otro servicio sin autorización.
- **No usar `git add .`** sin haber inspeccionado `git status` primero.
- **No incluir** `.local-reference/` en ningún commit.
- **No incluir** archivos `.zip` ni el PDF del manual en el repositorio público.
- **No incluir** secretos, tokens, credenciales ni claves de API.
- **No incluir** `workspace.json`, `workspace-mobile.json` ni cachés de Obsidian.
- **No incluir** archivos `.pyc` ni carpetas `__pycache__/`.
- **No incluir** scripts temporales de construcción del vault.

---

## Referencia rápida de constantes críticas

```javascript
var BASE_PORTIONS = 27;           // porciones base de la receta actual
var BASE_WEIGHT_PER_PORTION = 50; // gramos por porción
var BASE_TOTAL = 1350;            // gramos totales (suma de bases)
```

> [!important]
> El manual de marca usa `baseServings: 12` como ejemplo conceptual. El código implementa `BASE_PORTIONS = 27`. Son valores independientes. **Nunca sustituir 27 por 12.**

---

## Paleta Vanilla Ink (referencia inmediata)

```
#FAF5EC  Vainilla      — fondo principal
#E4D5C3  Almendra      — capas y divisores
#253245  Tinta         — texto e iconos
#A8B0BA  Gris Nube     — elementos pasivos y bordes
#A68E98  Malva Suave   — acento editorial y selección
#D4DDD0  Salvia Pálido — superficies positivas
#4A5A72  Tinta Light   — texto secundario (adaptación de accesibilidad)
```

---

## Reglas absolutas consolidadas

### NUNCA sin autorización expresa

- Commit, push, despliegue o publicación en GitHub Pages.
- Instalación de dependencias (npm, pip u otras).
- Modificación de `index.html`, `assets/css/` o `assets/js/` en producción.
- Publicación del PDF del manual, los boards o activos de `.local-reference/`.
- Inclusión de secretos, tokens o credenciales en el repositorio.
- Migración del stack tecnológico.

### SIEMPRE

- Leer el archivo antes de modificarlo.
- Distinguir entre IMPLEMENTADO y PLANIFICADO en toda comunicación.
- Reportar divergencias entre el código real y la documentación del vault.
- Verificar accesibilidad WCAG 2.2 AA en cualquier cambio de UI.
- Consultar [[42_MANUAL_DE_NORMAS_BRANDING]] antes de cualquier cambio visual.

---

## Documentos relacionados

- [[00_README_DEL_PROYECTO]]
- [[04_ESTADO_ACTUAL]]
- [[39_PROMPTS_Y_REGLAS_PARA_IA]]
- [[41_INDICE_GENERAL_DE_DOCUMENTACION]]
- [[42_MANUAL_DE_NORMAS_BRANDING]]
