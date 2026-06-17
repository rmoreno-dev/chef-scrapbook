---
title: "Glosario del Proyecto"
document_id: "CS-40"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "glosario"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - glosario
---

# Glosario del Proyecto

| Termino | Definicion |
|---|---|
| Chef Scrapbook | Recetario online educativo y gratuito. Nombre oficial del proyecto. |
| Cocina, crea y disfruta | Eslogan oficial de la marca. No se modifica sin autorizacion. |
| Vanilla Ink | Nombre del sistema de diseno cromatico y tipografico de Chef Scrapbook. |
| Logo principal | Version vertical del logo con el gato chef, gorro, arco y ramas. |
| Isotipo | Solo el gato chef con gorro. Version para favicon, app icon y espacios reducidos. |
| Sello | Version circular del logo para stickers y packaging. |
| Area de seguridad | Espacio minimo libre de 1x alrededor del logo. |
| Prata | Fuente editorial serif para H1, H2, portadas y citas. |
| Mulish | Fuente sans-serif para cuerpo, navegacion, botones, tablas e inputs. |
| Great Vibes | Fuente manuscrita de acento. Solo para 2-5 palabras, firmas, detalles ceremoniales. |
| Porciones base | BASE_PORTIONS = 27. Valor inmutable de la receta implementada. |
| Factor | porciones_deseadas / BASE_PORTIONS. Multiplicador de escalado. |
| Rendimiento | Resultado total de la receta (masa total en gramos). |
| Token | Variable CSS en :root que define un valor del sistema de diseno. |
| Vault | Carpeta "Chef Scrapbook AI" con los 44 documentos del sistema de documentacion. |
| Prompt maestro | CHEF_SCRAPBOOK_MASTER_PROMPT.md. Protocolo de trabajo para agentes IA. |
| GitHub Pages | Servicio de despliegue estatico de GitHub. Destino planificado del proyecto. |
| WCAG | Web Content Accessibility Guidelines. Objetivo: WCAG 2.2 AA. |
| ADR | Architecture Decision Record. Registro de decisiones tecnicas en [[33_DECISIONES_TECNICAS]]. |
| Deuda tecnica | Funcionalidad o norma que el codigo no cumple aun y que debe corregirse. |
| Activo canonico | Version oficial y autorizada de un activo de marca. |
| Journaling | Practica de registro personal aplicada al contexto culinario. |
| Scrapbooking | Estilo editorial de coleccion y composicion de elementos visuales. |
| Modelo editorial | Estructura y normas para crear y publicar contenido de recetas. |
| Board | Tablero visual del paquete de marca v3.1. El paquete contiene 38 boards. |
| .local-reference | Carpeta privada con activos de referencia no publicados. En .gitignore. |
| Laragon | Servidor local de desarrollo web para Windows. |
| IIFE | Immediately Invoked Function Expression. Patron usado en todos los modulos JS para encapsular. |
| SPA | Single Page Application. Arquitectura actual: el contenido se renderiza en el cliente sin recargar la pagina completa. |
| Hash routing | Tecnica de navegacion SPA que usa el fragmento `#` de la URL (sin History API). Compatible con GitHub Pages sin configuracion de servidor. |
| Ruta hash | URL con fragmento hash que el router resuelve a una vista. Ej: `#/recetas/galletas-de-chispas`. |
| Vista | Modulo JS que genera y renderiza el HTML de una seccion de la SPA. Expuesto como `ChefScrapbook.Pages.*`. |
| Punto de montaje | Elemento `<main id="main-content">` donde el router inyecta el HTML de la vista activa. |
| State / Estado | Objeto en localStorage (`chef-scrapbook-v1`) que persiste datos del usuario entre sesiones. |
| Toast | Notificacion temporal no modal que aparece y desaparece automaticamente (3 segundos). Implementado en `ChefScrapbook.toast()`. |
| escapeHTML | Funcion `ChefScrapbook.escapeHTML(str)` que sanitiza strings para uso seguro en innerHTML. Proteccion contra XSS. |
| Slug | Identificador de URL amigable de una receta. Ej: `galletas-de-chispas`. |
| Namespace global | `window.ChefScrapbook`. Objeto unico donde todos los modulos JS acumulan su API. |
| Kit SVG | Conjunto de iconos SVG del manual de marca v3.1, copiados a `assets/icons/`. Sistema iconografico oficial. |
| Planificador semanal | Grid de 7 dias x 4 tiempos de comida para organizar el menu de la semana. |
| DOCUMENTATION COMPLETION GATE | Condicion de cierre obligatoria: ningun cambio de codigo puede declararse completo sin haber actualizado el vault documental con todos los cambios relevantes. |
| Shell SPA | `index.html` en v0.2.0: estructura HTML fija sin contenido de receta. Todo el contenido es renderizado por JS en el punto de montaje. |

## Documentos relacionados

- [[41_INDICE_GENERAL_DE_DOCUMENTACION]]
- [[42_MANUAL_DE_NORMAS_BRANDING]]
