# GitHub Copilot — Instrucciones permanentes — Chef Scrapbook

Para contexto completo, usa el prompt `/chef.scrapbook` o lee directamente:
`Chef Scrapbook AI/CHEF_SCRAPBOOK_MASTER_PROMPT.md`

## Identidad

**Chef Scrapbook** — recetario online educativo y gratuito.
**Propietario:** Rodolfo Moreno | **Eslogan:** Cocina, crea y disfruta.
**Stack:** HTML5 + CSS3 Custom Properties + JavaScript sin transpilación. SPA con hash routing (`#/inicio`, `#/recetas`, `#/menus`). Módulos JS encapsulados en `window.ChefScrapbook`. Sin framework. Sin backend. 4 archivos CSS: `tokens.css`, `styles.css`, `components.css`, `responsive.css`. Iconografía: kit SVG propio en `assets/icons/`.

## Constantes críticas

```javascript
var BASE_PORTIONS = 27;           // porciones base — NO sustituir por 12
var BASE_WEIGHT_PER_PORTION = 50; // gramos por porción
var BASE_TOTAL = 1350;            // gramos totales
```

## Paleta Vanilla Ink

```css
--color-vanilla: #FAF5EC;    --color-almond: #E4D5C3;
--color-ink: #253245;         --color-cloud-gray: #A8B0BA;
--color-soft-mauve: #A68E98; --color-pale-sage: #D4DDD0;
```

## Reglas absolutas

**NUNCA sin autorización de Rodolfo Moreno:** commit, push, despliegue, instalación de dependencias, modificación de `index.html`/CSS/JS en producción, publicación de `.local-reference/`, inclusión de secretos.

**SIEMPRE:** leer el archivo antes de modificarlo; distinguir IMPLEMENTADO de PLANIFICADO; verificar accesibilidad WCAG 2.2 AA; consultar `Chef Scrapbook AI/42_MANUAL_DE_NORMAS_BRANDING.md` ante cualquier cambio visual.

**DOCUMENTATION COMPLETION GATE:** Ningún cambio de código puede declararse completo sin haber actualizado el vault. Mínimo obligatorio tras cualquier cambio: `04_ESTADO_ACTUAL.md`, `36_TAREAS_PENDIENTES.md`, `37_HISTORIAL_DE_CAMBIOS.md` (si aplica). Causa: INC-004.

## Estándares de código

- **HTML:** semántico, BEM para clases CSS.
- **CSS:** custom properties del sistema; sin colores hardcoded fuera de tokens; 4 archivos (`tokens.css`, `styles.css`, `components.css`, `responsive.css`).
- **JS:** sin transpilación; patrón IIFE; namespace `window.ChefScrapbook`; `escapeHTML()` obligatorio antes de innerHTML con datos externos; sin `console.log` en producción; rutas relativas.

---
*Chef Scrapbook — copilot-instructions.md v2.0.0 — 2026-06-16*
