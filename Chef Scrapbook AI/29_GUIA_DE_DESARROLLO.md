---
title: "Guia de Desarrollo"
document_id: "CS-29"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "guia"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - guia
---

# Guia de Desarrollo

## Flujo de trabajo

1. **Interpretar:** entender la tarea, el entregable, las restricciones y el impacto.
2. **Consultar vault:** leer 00_README, 41_INDICE, 04_ESTADO_ACTUAL.
3. **Revisar manual:** cuando la tarea afecte marca, UI, contenido o accesibilidad, consultar 42_MANUAL_DE_NORMAS_BRANDING.
4. **Inspeccionar codigo:** abrir index.html, tokens.css, styles.css, app.js segun corresponda.
5. **Mapa de impacto:** identificar que archivos, componentes y documentos se veran afectados.
6. **Implementar:** minimo cambio necesario, sin sobreingenieria, sin dependencias no solicitadas.
7. **Probar:** calculadora, responsive, teclado, accesibilidad, consola.
8. **Actualizar documentacion:** reflejar cambios en el vault.
9. **Revisar Git:** `git status`, `git diff` antes de staging.
10. **Solicitar autorizacion:** no hacer commit ni push sin autorizacion expresa de Rodolfo Moreno.

## Reglas permanentes

- No modificar el codigo de la aplicacion durante tareas de documentacion.
- No hacer commit, push ni despliegue sin autorizacion.
- No instalar dependencias npm sin autorizacion.
- No migrar el stack sin autorizacion.
- No inventar capacidades ni contradecir el manual de marca.
- Rutas siempre relativas para compatibilidad con GitHub Pages.
- Separar siempre estado presente de vision futura.

## Documentos relacionados

- [[27_ESTANDARES_DE_CODIGO]]
- [[28_CONVENCIONES_DEL_PROYECTO]]
- [[30_GUIA_DE_PRUEBAS]]
- [[39_PROMPTS_Y_REGLAS_PARA_IA]]
