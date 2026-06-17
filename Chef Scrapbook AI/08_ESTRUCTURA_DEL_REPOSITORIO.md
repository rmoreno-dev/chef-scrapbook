---
title: "Estructura del Repositorio"
document_id: "CS-08"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "arquitectura"
version: "2.0.0"
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
Chef Scrapbook/                         <- Raiz del repositorio
|
|-- index.html                          <- Shell SPA (sin contenido de receta)
|-- LICENSE                             <- Licencia propietaria
|-- README.md                           <- Documentacion principal del proyecto
|-- .gitignore                          <- Exclusiones de Git
|
|-- assets/
|   |-- css/
|   |   |-- tokens.css                  <- Variables CSS: paleta, tipografia, funcionales, transiciones
|   |   |-- styles.css                  <- Layout SPA, sidebar, cabecera movil, overlay
|   |   |-- components.css              <- Cards, toasts, busqueda, planner, listas
|   |   `-- responsive.css              <- Breakpoints 320-1440px, sidebar movil, reduced-motion
|   |
|   |-- js/
|   |   |-- data/
|   |   |   `-- recipes.js              <- Fuente de verdad del catalogo: 1 receta real + helpers
|   |   |-- pages/
|   |   |   |-- home.js                 <- Vista Inicio (#/inicio)
|   |   |   |-- recipes.js              <- Vista Biblioteca de Recetas (#/recetas)
|   |   |   |-- recipe-detail.js        <- Vista Detalle de Receta (#/recetas/:slug)
|   |   |   `-- menus.js                <- Vista Menu Semanal (#/menus)
|   |   |-- router.js                   <- Hash router: hashchange -> Pages.*
|   |   |-- state.js                    <- Estado persistente en localStorage
|   |   `-- app.js                      <- Bootstrap: escapeHTML, toast, Calculator, Router.start()
|   |
|   |-- images/
|   |   |-- chef-avatar.svg             <- Ilustracion provisional (no es el logo oficial)
|   |   |-- chocolate-chip-cookies.svg  <- Ilustracion del batch de galletas
|   |   `-- favicon.svg                 <- Isotipo cat chef para favicon
|   |
|   |-- icons/                          <- Kit SVG del manual de marca (18 iconos)
|   |   |-- home.svg
|   |   |-- recipe.svg
|   |   |-- calendar.svg
|   |   |-- heart.svg
|   |   |-- search.svg
|   |   |-- clock.svg
|   |   |-- filter.svg
|   |   |-- check.svg
|   |   |-- plus.svg
|   |   |-- leaf.svg
|   |   |-- sparkle.svg
|   |   |-- ingredients.svg
|   |   |-- bowl.svg
|   |   |-- whisk.svg
|   |   |-- journal.svg
|   |   |-- servings.svg
|   |   |-- scale.svg
|   |   `-- menu-icon.svg
|   |
|   `-- branding/                       <- Activos de branding SVG (4 archivos)
|       |-- brand-stamp.svg
|       |-- botanical-divider.svg
|       |-- botanical-sprigs.svg
|       `-- torn-paper.svg
|
|-- docs/
|   `-- ASSET-SOURCES.md               <- Registro de activos: origen, licencia y estado
|
|-- Chef Scrapbook AI/                  <- Vault Obsidian (documentacion tecnica)
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
|   |   `-- chef.scrapbook.prompt.md   <- AI Context Router (comando /chef.scrapbook)
|   `-- copilot-instructions.md        <- Instrucciones permanentes para IA
|
`-- .local-reference/                  <- PRIVADO - no publicado - en .gitignore
    |-- brand/
    |   `-- vanilla-ink-moodboard.png
    |-- brand-manual-v3.1/             <- Paquete oficial de marca
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
| Aplicacion web | `index.html`, `assets/` | Si |
| Documentacion principal | `README.md`, `LICENSE` | Si |
| Vault Obsidian | `Chef Scrapbook AI/` | Solo Markdown, no binarios grandes |
| Prompts GitHub | `.github/` | Si |
| Referencia local de marca | `.local-reference/` | NO — en .gitignore |
| PDF del manual | `.local-reference/` | NO |

## Convenciones de nombres

- Documentos del vault: `NN_NOMBRE_EN_MAYUSCULAS.md` (prefijo numerico de 2 digitos).
- Modulos JS: kebab-case (`recipe-detail.js`, `recipes.js`).
- Activos de marca: `chef-scrapbook_[activo]_[variante]_[color]_[version].[ext]`.
- Clases CSS: BEM (`.bloque__elemento--modificador`).
- IDs de elementos: kebab-case (`main-content`, `nav-toggle`, `toast-container`).
- Iconos: nombre semantico en singular (`home.svg`, `heart.svg`, `recipe.svg`).

## Documentos relacionados

- [[05_ARQUITECTURA_GENERAL]]
- [[19_CONFIGURACION_LOCAL]]
- [[28_CONVENCIONES_DEL_PROYECTO]]
