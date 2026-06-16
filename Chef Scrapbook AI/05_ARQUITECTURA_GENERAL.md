---
title: "Arquitectura General"
document_id: "CS-05"
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
  - "[[06_ARQUITECTURA_TECNICA]]"
  - "[[07_STACK_TECNOLOGICO]]"
  - "[[08_ESTRUCTURA_DEL_REPOSITORIO]]"
tags:
  - chef-scrapbook
  - arquitectura
---

# Arquitectura General

## Diagrama del sistema actual

```mermaid
graph TB
    subgraph NAVEGADOR["Navegador del usuario"]
        HTML["index.html"]
        CSS["assets/css/tokens.css + styles.css"]
        JS["assets/js/app.js"]
        SVG["assets/images/*.svg"]
    end

    subgraph EXTERNO["Servicios externos"]
        GF["Google Fonts CDN
Prata, Mulish, Great Vibes
Material Symbols"]
    end

    subgraph REPO["Repositorio local"]
        GIT["Git + GitHub"]
        VAULT["Chef Scrapbook AI/
(Vault Obsidian)"]
        LOCAL_REF[".local-reference/
brand-manual-v3.1/
(excluido del repo publico)"]
    end

    subgraph FUTURO["Despliegue planificado"]
        GHP["GitHub Pages
https://rmoreno-dev.github.io/chef-scrapbook/"]
    end

    HTML --> CSS
    HTML --> JS
    HTML --> SVG
    HTML -.->|CDN| GF
    REPO -->|git push| GHP
    VAULT -.->|contexto| HTML
```

## Componentes actuales

| Componente | Tipo | Descripcion |
|---|---|---|
| index.html | Aplicacion | Pagina unica estatica |
| assets/css/tokens.css | Sistema de diseno | Variables CSS (paleta, tipografia, espaciado) |
| assets/css/styles.css | Estilos | Componentes y layout |
| assets/js/app.js | Logica | Calculadora de porciones (JS vanilla, IIFE) |
| assets/images/*.svg | Ilustraciones | chef-avatar.svg y chocolate-chip-cookies.svg |
| Chef Scrapbook AI/ | Vault | Documentacion tecnica y normativa |
| .local-reference/ | Referencia local | Paquete de marca v3.1 (no publicado) |

## Separacion aplicacion vs. documentacion

La aplicacion (index.html + assets) y el vault documental (Chef Scrapbook AI) son componentes independientes que coexisten en el mismo repositorio. El vault no es parte de la aplicacion publicable y no debe incluirse en GitHub Pages sin autorizacion expresa.

## Arquitectura futura (PLANIFICADA)

> [!info]
> Lo siguiente es visi ón del manual v3.1. No existe hoy.

```mermaid
graph TB
    subgraph FRONTEND["Frontend (Next.js + TypeScript)"]
        APP["App Router"]
        COMPONENTS["Storybook Components"]
        TOKENS["Design Tokens CSS"]
    end

    subgraph BACKEND["Backend (planificado)"]
        API["API Routes"]
        DB["Base de datos"]
        AUTH["Autenticacion"]
    end

    subgraph INFRA["Infraestructura (planificada)"]
        CDN["CDN"]
        HOSTING["Hosting"]
    end

    APP --> API
    API --> DB
    API --> AUTH
    FRONTEND --> CDN
```

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[07_STACK_TECNOLOGICO]]
- [[08_ESTRUCTURA_DEL_REPOSITORIO]]
- [[23_CI_CD_Y_DESPLIEGUE]]
