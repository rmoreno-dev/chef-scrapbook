---
title: "Decisiones Tecnicas (ADR)"
document_id: "CS-33"
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
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - arquitectura
---

# Decisiones Tecnicas

## ADR-001: Aplicacion estatica sin framework

**Estado:** Aprobado

**Contexto:** MVP de recetario con una receta y calculadora. Maxima velocidad de desarrollo, sin dependencias complejas.

**Decision:** HTML5 + CSS3 + JS vanilla. Sin React, Vue, Angular ni Next.js.

**Consecuencias:** Sin estado reactivo avanzado. Sin SSR. Sin code splitting. Sin TypeScript.

**Manual recomienda Next.js para evolucion futura:** PLANIFICADO, no actual.

## ADR-002: JavaScript sin transpilacion

**Estado:** Aprobado

**Decision:** Usar `var`, no `const`/`let`. IIFE para encapsulamiento. Sin modulos ES6. Sin build step. La aplicacion requiere un navegador moderno (por el uso de `Number.isFinite`, `Number.isInteger`, localStorage, etc.).

**Razon:** Compatibilidad maxima con navegadores modernos sin necesidad de transpilador, bundler ni configuracion de build.

## ADR-003: GitHub Pages como plataforma de despliegue

**Estado:** Planificado

**Decision:** Usar GitHub Pages desde rama main.

**Consecuencias:** Sin servidor propio, sin SSR, sin API backend.

## ADR-004: SVG locales en lugar de imagenes externas

**Estado:** Aprobado

**Contexto:** Imagenes de Google AI Studio tenian licencia desconocida.

**Decision:** Crear SVG ilustrativos propios para avatar y galletas. En v0.2.0, adoptar los SVG del kit oficial de marca.

**Resultado:** Sin dependencias de imagenes externas. Aptos para publicacion.

## ADR-005: Licencia propietaria

**Estado:** Aprobado

**Decision:** Codigo propietario de Rodolfo Moreno. Sin licencia open source.

**Razon:** Proteccion de la propiedad intelectual del diseno y contenido.

## ADR-006: Vault Obsidian como sistema de documentacion

**Estado:** Aprobado

**Decision:** `Chef Scrapbook AI/` como vault Obsidian con 44 documentos numerados.

**Razon:** Contexto estructurado para agentes IA, navegacion por wikilinks, versionable en Git.

## ADR-007: Manual v3.1 como norma de marca

**Estado:** Aprobado

**Decision:** El Manual Profesional Chef Scrapbook v3.1 es la fuente de verdad normativa para marca, identidad, UX, voz, accesibilidad y contenido.

## ADR-008: Paquete de marca en .local-reference

**Estado:** Aprobado

**Decision:** El paquete completo de marca (161 archivos) vive en `.local-reference/` excluido del repositorio publico.

**Razon:** Los activos de marca son propietarios. Solo se publican los derivados aprobados.

## ADR-009: Logo oficial — RESUELTO en v0.2.1

**Estado:** Aprobado (implementado en v0.2.1, 2026-06-17)

**Contexto:** El logo oficial estaba en `.local-reference`. El codigo usaba activos provisionales.

**Decision:** Logo horizontal transparente (WebP + PNG fallback) en sidebar via `<picture>`; isotipo transparente en cabecera movil. Paquete `Chef_Scrapbook_Web_Assets_v1.0` integrado como fuente canonica. Ver ADR-019.

## ADR-010: Arquitectura SPA con hash routing

**Estado:** Aprobado (implementado en v0.2.0)

**Contexto:** Para soportar multiples vistas navegables sin backend ni servidor, se necesita un mecanismo de enrutamiento compatible con GitHub Pages (que no soporta server-side routing para SPA).

**Decision:** Usar hash routing (`window.location.hash`, evento `hashchange`). Rutas: `#/inicio`, `#/recetas`, `#/recetas/:slug`, `#/menus`.

**Consecuencias:** URLs con `#` (no ideales para SEO, pero funcionales para el MVP). Compatible con GitHub Pages sin configuracion adicional.

## ADR-011: Modulo de datos separado (data/recipes.js)

**Estado:** Aprobado (implementado en v0.2.0)

**Contexto:** En v0.1.0 los datos de la receta estaban incrustados en `index.html` y `app.js`. Para soportar busqueda, filtrado y detalle de receta dinamico, se necesita una fuente de datos consulta.

**Decision:** Crear `assets/js/data/recipes.js` como modulo dedicado con el catalogo completo y metodos `getBySlug()`, `getByCategory()`, `getFeatured()`.

**Consecuencias:** Single source of truth para el catalogo. Separation of concerns entre datos, estado y presentacion.

## ADR-012: Persistencia en localStorage (no en backend)

**Estado:** Aprobado (implementado en v0.2.0)

**Contexto:** El usuario necesita persistir favoritos, plan de menu, lista de compras y tareas entre sesiones, sin requerir autenticacion ni backend.

**Decision:** Usar `localStorage` con clave `chef-scrapbook-v1`. El estado completo se serializa como JSON.

**Consecuencias:** Datos locales al dispositivo (no sincronizados entre dispositivos). Sin privacidad de datos en escenarios de dispositivo compartido. Datos pueden borrarse si el usuario limpia el almacenamiento del navegador.

## ADR-013: Catalogo con una sola receta real (Data honesty)

**Estado:** Aprobado (implementado en v0.2.0)

**Decision:** El array `recipes` contiene UNICAMENTE recetas reales y completamente documentadas. Las posiciones del grid que no tienen receta se renderizan como "Proximamente" sin datos inventados.

**Razon:** Integridad del contenido. No presentar informacion falsa al usuario. Cumple el principio de "claridad" del manual de marca.

## ADR-014: Kit SVG del manual como sistema iconografico

**Estado:** Aprobado (implementado en v0.2.0)

**Contexto:** La v0.1.0 usaba Material Symbols Outlined (Google CDN), que no es el sistema del manual v3.1. El manual define un kit SVG propio de 24x24 px.

**Decision:** Copiar los iconos SVG del kit oficial desde `.local-reference/brand-manual-v3.1/assets/svg/` a `assets/icons/`. Sin CDN. Sin dependencia externa.

**Consecuencias:** Iconografia conforme al manual. Sin dependencia de CDN para iconos. DT-002 resuelto.

## ADR-015: Namespace global window.ChefScrapbook

**Estado:** Aprobado (implementado en v0.2.0)

**Decision:** Todos los modulos JS acumulan en el objeto `window.ChefScrapbook` para comunicarse sin modulos ES6 ni bundler.

**Consecuencias:** Namespace unico que evita colisiones. El orden de carga de scripts en HTML es critico. Sin tree-shaking ni code splitting.

## ADR-016: Selector de receta con <dialog> nativo

**Estado:** Aprobado (implementado en v0.2.0-patch, 2026-06-16)

**Contexto:** Las celdas del planificador usaban `contenteditable`, lo que permitia texto libre sin validacion. Se necesitaba una interaccion estructurada que garantizara que solo se asignen slugs validos.

**Decision:** `<dialog>` nativo del navegador con `showModal()`. Cada celda es un `<button>`. Al activarlo, se abre el dialog con la lista de recetas reales. Escape cierra (comportamiento nativo de `showModal()`). Al cerrar, el foco vuelve al boton de origen via el evento `close` del dialog.

**Consecuencias:** Focus trap gratuito en navegadores modernos. Sin dependencias. Compatible con teclado y lector de pantalla. `aria-labelledby` y `aria-describedby` correctamente asociados.

**Referencia:** DEF-008 en [[32_ERRORES_CONOCIDOS]].

## ADR-017: Indice de busqueda normalizado por receta

**Estado:** Aprobado (implementado en v0.2.0-patch, 2026-06-16)

**Contexto:** La busqueda solo cubria nombre, descripcion y categoryLabel. Los usuarios esperan encontrar recetas por ingrediente.

**Decision:** `_buildIndex(r)` concatena: `name`, `description`, `category`, `categoryLabel`, `subcategory`, `ingredients[].name`, `tags` (si existen). `_normalize()` aplica: lowercase, trim, colapso de espacios, normalizacion de diacriticos (a/e/i/o/u, n). El termino de busqueda se normaliza con la misma funcion. Debounce 300 ms en el input.

**Consecuencias:** Busqueda por ingrediente ("harina", "mantequilla"). Sin datos inventados: solo campos reales de la receta. Consistente entre counter y grid.

**Referencia:** DEF-007 en [[32_ERRORES_CONOCIDOS]].

## ADR-018: Lista de compras derivada de asignaciones validas + elementos manuales

**Estado:** Aprobado (implementado en v0.2.0-patch, 2026-06-16)

**Contexto:** Con `contenteditable`, la lista de compras no podia derivarse de recetas reales. Se necesitaba conectar el planner con la lista de compras.

**Decision:** La lista de compras tiene dos secciones: (1) items auto-derivados de `CS.State.getMenuShoppingItems()` (cuenta ocurrencias de cada slug en el plan, escala `shoppingItems.qty × N`), no persistidos en localStorage; (2) items manuales del usuario, persistidos en `shoppingList`. "Limpiar extra" solo borra los manuales.

**Consecuencias:** La seccion del plan siempre refleja el estado actual de las asignaciones. Sin duplicacion de datos en localStorage. Regla documentada en [[12_MODELO_DE_DATOS]].

## ADR-019: Paquete oficial de activos web v1.0

**Estado:** Aprobado (implementado en v0.2.1, 2026-06-17)

**Contexto:** La v0.2.0 usaba activos provisionales (18 iconos planos sin prefijo, 4 SVGs de branding, favicon SVG isotipo). No habia un favicon set completo, ni logos en formato raster, ni CSS de utilidades de marca.

**Decision:** Integrar `Chef_Scrapbook_Web_Assets_v1.0` como paquete canonico de activos web. El paquete provee:
- Logos en PNG y WebP (horizontal, primario, sello, isotipo) — variantes vanilla y transparente.
- 32 iconos SVG con prefijo `icon-` en `assets/icons/svg/`.
- 17 activos decorativos en `assets/decorative/svg/`.
- 4 patrones en `assets/patterns/svg/`.
- Favicon set completo en `assets/favicon/`.
- CSS oficial `css/chef-scrapbook-assets.css` con variables y clases de utilidad.
- `assets/tokens.json` con tokens de diseno.

**Consecuencias:**
- Los activos provisionales planos fueron eliminados del repositorio.
- El patron de fondo del body usa SVG (`pattern-grid.svg`) en lugar de `linear-gradient` CSS.
- El sello de marca en el hero usa `cs-brand-seal-watermark` (opacidad 0.26, position absolute).
- Los divs `washi-tape` fueron migrados a la clase `cs-with-tape` en el elemento padre.
- Los iconos en JS se referencian con path `assets/icons/svg/icon-xxx.svg`.
- El orden de CSS es: tokens.css → css/chef-scrapbook-assets.css → styles.css → components.css → responsive.css.

**Reglas del paquete (ASSETS_MANIFEST.json):**
- Logo transparente: solo sobre fondos Vanilla (#FAF5EC) o blanco.
- Logo horizontal: sidebar/header; sello: solo como watermark o stamp editorial.
- Activos decorativos: `alt=""` y `aria-hidden="true"`.
- SVG para decorativos e iconos; WebP/PNG para logos ilustrados.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[34_DEUDA_TECNICA]]
- [[37_HISTORIAL_DE_CAMBIOS]]
