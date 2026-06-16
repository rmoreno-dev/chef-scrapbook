---
title: "Configuracion Local de Desarrollo"
document_id: "CS-19"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "configuracion"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[08_ESTRUCTURA_DEL_REPOSITORIO]]"
  - "[[29_GUIA_DE_DESARROLLO]]"
tags:
  - chef-scrapbook
  - configuracion
  - local
---

# Configuracion Local de Desarrollo

## Ruta de trabajo autorizada

```
C:\laragon\www\Chef Scrapbook```

Esta es la ruta de trabajo del proyecto en el entorno local del desarrollador.

## Servidor local

**Laragon** es el servidor local utilizado. Sirve el proyecto en:

```
http://localhost/Chef Scrapbook/
```

O mediante el servidor virtual de Laragon configurado.

## Requisitos de entorno

| Herramienta | Uso | Notas |
|---|---|---|
| Laragon | Servidor local | O cualquier servidor HTTP simple |
| VS Code | Editor | Con extension de Markdown y Git |
| Obsidian | Vault documental | Abrir Chef Scrapbook AI como vault |
| Git | Control de versiones | Configurado con usuario Rodolfo Moreno |
| Navegador moderno | Pruebas | Chrome, Firefox o Edge |

## No se requiere build

La aplicacion no tiene proceso de build. Se abre `index.html` directamente en el navegador o a traves del servidor local.

## Ejecucion sin Laragon

Si no se usa Laragon, cualquier servidor HTTP simple funciona:

```bash
# Python 3
python -m http.server 8080
# Luego abrir: http://localhost:8080
```

## Apertura del vault

1. Abrir Obsidian.
2. "Abrir vault desde carpeta".
3. Seleccionar: `C:\laragon\www\Chef Scrapbook\Chef Scrapbook AI`.

## Pruebas locales

- Abrir herramientas de desarrollo del navegador (F12).
- Verificar que no hay errores en la consola.
- Probar calculadora con valores: 1, 2, 27, 50, 100, 0, -1, 1.5, "abc", vacio.
- Verificar responsive con DevTools (320px, 375px, 768px, 1024px).
- Probar navegacion por teclado (Tab, Enter, foco visible).

## Git en local

```bash
git status
git add [archivos especificos]
git commit -m "mensaje"
# No hacer push sin autorizacion expresa
```

## Documentos relacionados

- [[08_ESTRUCTURA_DEL_REPOSITORIO]]
- [[29_GUIA_DE_DESARROLLO]]
- [[30_GUIA_DE_PRUEBAS]]
