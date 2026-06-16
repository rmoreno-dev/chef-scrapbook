---
title: "Estructura del Repositorio"
document_id: "CS-08"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "arquitectura"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[05_ARQUITECTURA_GENERAL]]"
  - "[[19_CONFIGURACION_LOCAL]]"
tags:
  - chef-scrapbook
  - estructura
  - repositorio
---

# Estructura del Repositorio

## Arbol de archivos actuales

```
Chef Scrapbook/                     <- Raiz del repositorio
|
|-- index.html                      <- Pagina principal (unica pagina)
|-- LICENSE                         <- Licencia propietaria
|-- README.md                       <- Documentacion principal del proyecto
|-- .gitignore                      <- Exclusiones de Git
|
|-- assets/
|   |-- css/
|   |   |-- tokens.css              <- Variables CSS (paleta, tipografia, espaciado)
|   |   `-- styles.css              <- Estilos completos de la aplicacion
|   |-- js/
|   |   `-- app.js                  <- Logica de la calculadora de porciones
|   `-- images/
|       |-- chef-avatar.svg         <- Ilustracion provisional del sidebar
|       `-- chocolate-chip-cookies.svg <- Ilustracion del batch de galletas
|
|-- docs/
|   `-- ASSET-SOURCES.md            <- Registro de activos externos y licencias
|
|-- Chef Scrapbook AI/              <- Vault Obsidian (documentacion tecnica)
|   |-- .obsidian/
|   |   |-- app.json
|   |   |-- appearance.json
|   |   |-- core-plugins.json
|   |   `-- snippets/
|   |       `-- chef-scrapbook-vanilla-ink.css
|   |-- 00_README_DEL_PROYECTO.md
|   |-- 01_RESUMEN_EJECUTIVO.md
|   |-- ... (43 documentos numerados)
|   `-- CHEF_SCRAPBOOK_MASTER_PROMPT.md
|
|-- .github/
|   |-- prompts/
|   |   `-- chef.scrapbook.prompt.md    <- Prompt para VS Code / Copilot
|   `-- copilot-instructions.md         <- Instrucciones permanentes para IA
|
`-- .local-reference/               <- PRIVADO - no publicado - en .gitignore
    |-- brand/
    |   `-- vanilla-ink-moodboard.png
    |-- brand-manual-v3.1/          <- Paquete oficial de marca
    |   |-- Chef_Scrapbook_Manual_Profesional_v3.1.md
    |   |-- Chef_Scrapbook_Manual_Profesional_v3.1.pdf
    |   |-- README.md
    |   |-- LICENCIAS_Y_USO.md
    |   |-- ASSETS_MANIFEST.md
    |   |-- Vista_previa_40_paginas.png
    |   |-- board-*.png (38 boards)
    |   |-- mockup-*.png (3 mockups)
    |   `-- assets/
    |       |-- tokens.css
    |       |-- tokens.json
    |       |-- png/ (logos, iconos)
    |       `-- svg/ (logos, iconos vectoriales)
    `-- stitch/
        |-- code.html
        |-- DESIGN.md
        `-- screen.png
```

## Archivos publicos vs. privados

| Tipo | Ubicacion | Publicable |
|---|---|---|
| Aplicacion web | index.html, assets/ | Si |
| Documentacion principal | README.md, LICENSE | Si |
| Vault Obsidian | Chef Scrapbook AI/ | Solo Markdown, no binarios grandes |
| Prompts GitHub | .github/ | Si |
| Referencia local de marca | .local-reference/ | NO - en .gitignore |
| ZIP del paquete de marca | Downloads/ | NO |
| PDF del manual | .local-reference/ | NO |

## Convenciones de nombres

- Documentos del vault: `NN_NOMBRE_EN_MAYUSCULAS.md` (prefijo numerico de 2 digitos).
- Activos de marca: `chef-scrapbook_[activo]_[variante]_[color]_[version].[ext]`.
- Clases CSS: BEM (`bloque__elemento--modificador`).
- IDs de elementos: kebab-case (`portion-input`, `calc-live`).

## Documentos relacionados

- [[05_ARQUITECTURA_GENERAL]]
- [[19_CONFIGURACION_LOCAL]]
- [[28_CONVENCIONES_DEL_PROYECTO]]
