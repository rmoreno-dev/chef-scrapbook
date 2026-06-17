---
title: "Seguridad"
document_id: "CS-24"
status: "vigente"
implementation_status: "IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "seguridad"
version: "2.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[00_README_DEL_PROYECTO]]"
tags:
  - chef-scrapbook
  - seguridad
---

# Seguridad

## Estado de seguridad actual

| Control | Estado |
|---|---|
| Licencia propietaria | IMPLEMENTADO |
| Sin secretos en el repositorio | IMPLEMENTADO |
| Validacion de input (entero 1-9999 en calculadora) | IMPLEMENTADO |
| SVG sin scripts ni referencias externas | IMPLEMENTADO |
| Sin dependencias JS externas | IMPLEMENTADO |
| XSS via escapeHTML() para innerHTML dinamico | IMPLEMENTADO |
| localStorage: no almacena datos sensibles | IMPLEMENTADO |
| Sin inyeccion SQL (no hay BD) | NO APLICA |

## Proteccion contra XSS

La arquitectura SPA renderiza contenido dinamico usando `innerHTML` en el punto de montaje (`#main-content`). Para prevenir inyeccion de scripts:

- `window.ChefScrapbook.escapeHTML(str)` esta disponible globalmente desde `app.js`.
- Toda cadena que provenga de input del usuario o de sources que puedan contener caracteres especiales se pasa por `escapeHTML()` antes de ser interpolada en HTML.
- Datos del catalogo de recetas (`data/recipes.js`) son contenido fijo del desarrollador, no de usuarios, y pueden usarse directamente.
- Los campos de la lista de compras, tareas de preparacion y preferencias — ingresados por el usuario — se sanitizan antes de renderizar.

### Implementacion

```javascript
window.ChefScrapbook.escapeHTML = function(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
```

### Regla de uso

```
// Correcto: datos del usuario
innerHTML = '<span>' + ChefScrapbook.escapeHTML(userInput) + '</span>';

// Correcto: datos fijos del catalogo (no son input de usuario)
innerHTML = '<h1>' + recipe.name + '</h1>';

// Incorrecto: NO mezclar datos del usuario sin sanitizar
innerHTML = '<span>' + userInput + '</span>';
```

## localStorage

El modulo `state.js` almacena en localStorage bajo la clave `chef-scrapbook-v1`:

| Dato almacenado | Tipo | Riesgo |
|---|---|---|
| Slugs de recetas favoritas | String predefinidos | Sin riesgo: son slugs del catalogo |
| Plan de menu (dia/tiempo/slug) | Strings predefinidos | Sin riesgo: son slugs del catalogo |
| Items de lista de compras | Texto libre del usuario | Sanitizar al renderizar |
| Tareas de preparacion | Texto libre del usuario | Sanitizar al renderizar |
| Preferencias | Valores controlados | Sin riesgo si no se interpolan en HTML |

**Riesgos de localStorage:**
- No usar para almacenar tokens, credenciales ni datos sensibles del usuario.
- Si el usuario manipula el localStorage directamente (via DevTools), puede ingresar valores arbitrarios. La capa de renderizado DEBE sanitizar antes de usar en innerHTML.
- El localStorage puede borrarse por el usuario o el navegador; el sistema debe degradar con gracia a estado vacio.

## Privacidad futura (PLANIFICADO)

El manual v3.1 define: notas privadas por defecto, exportacion y borrado de datos, consentimiento explicito para analitica.

## Documentos relacionados

- [[18_VARIABLES_DE_ENTORNO]]
- [[15_AUTENTICACION_Y_ROLES]]
- [[06_ARQUITECTURA_TECNICA]]
