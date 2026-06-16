---
title: "Modelo de Datos"
document_id: "CS-12"
status: "vigente"
implementation_status: "PARCIALMENTE IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "datos"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: true
related_documents:
  - "[[06_ARQUITECTURA_TECNICA]]"
  - "[[16_REGLAS_DE_NEGOCIO]]"
  - "[[13_DICCIONARIO_DE_BASE_DE_DATOS]]"
tags:
  - chef-scrapbook
  - datos
  - modelo
---

# Modelo de Datos

## Datos actuales — estaticos en codigo

No existe base de datos. Los datos de la receta estan codificados directamente en index.html y app.js.

### Constantes del calculador (app.js)

```javascript
var BASE_PORTIONS = 27;             // porciones base de la receta
var BASE_WEIGHT_PER_PORTION = 50;   // gramos por porcion
var BASE_TOTAL = 1350;              // gramos totales (suma de ingredientes)
```

> [!important]
> BASE_PORTIONS = 27 es el valor real implementado. El manual v3.1 usa baseServings: 12 como **ejemplo conceptual** en el Apendice J. Estos valores NO son intercambiables. El codigo es la fuente de verdad para el valor real.

### Ingredientes base (app.js)

```javascript
var ingredients = [
  { id: "ing-harina",       base: 500  },  // Harina de Trigo AP
  { id: "ing-azucar",       base: 250  },  // Azucar Morena
  { id: "ing-mantequilla",  base: 200  },  // Mantequilla Sin sal
  { id: "ing-huevos",       base: 100  },  // Huevos
  { id: "ing-chispas",      base: 300  },  // Chispas de Chocolate
];
```

### Calculo de escala

```
factor = porciones_deseadas / 27
cantidad_escalada = round(ingrediente.base * factor)
total_escalado = round(1350 * factor)
```

### Datos estaticos en HTML

Valores adicionales de la receta en index.html:

| Campo | Valor | Ubicacion |
|---|---|---|
| Receta | Galletas de Chispas | Titulo H1 |
| Version | v3.2 | Subtitulo |
| Calorias por porcion | 240 kcal | Perfil nutricional |
| Grasas por porcion | 12g | Perfil nutricional |
| Carbohidratos por porcion | 32g | Perfil nutricional |
| Proteinas por porcion | 3g | Perfil nutricional |
| % Panadero harina | 100% | Tabla ingredientes |
| % Panadero azucar | 50% | Tabla ingredientes |
| % Panadero mantequilla | 40% | Tabla ingredientes |
| % Panadero huevos | 20% | Tabla ingredientes |
| % Panadero chispas | 60% | Tabla ingredientes |

### Data attributes en DOM

| ID del elemento | Dato que contiene |
|---|---|
| #ing-harina | Peso escalado de harina |
| #ing-azucar | Peso escalado de azucar |
| #ing-mantequilla | Peso escalado de mantequilla |
| #ing-huevos | Peso escalado de huevos |
| #ing-chispas | Peso escalado de chispas |
| #table-total-weight | Peso total de masa escalado |
| #total-mass | Peso total (tarjeta de rendimiento) |
| #portions-display | Numero de porciones actual |
| #portion-input | Input del usuario |

## Modelo futuro conceptual (PLANIFICADO)

El Apendice J del manual v3.1 define un esquema JSON conceptual para recetas futuras:

```json
{
  "id": "string (uuid)",
  "slug": "string (url-safe)",
  "version": "string (semver)",
  "title": "string",
  "description": "string",
  "baseServings": 12,
  "yield": { "total": "number (g)", "perUnit": "number (g)" },
  "times": { "active": "number (min)", "total": "number (min)" },
  "difficulty": "string (basica|intermedia|avanzada)",
  "ingredients": [{ "name": "string", "base": "number", "unit": "string", "phase": "string" }],
  "steps": [{ "order": "number", "action": "string", "detail": "string", "sensory": "string" }],
  "allergens": ["string"],
  "storage": "string",
  "author": "string",
  "reviewedAt": "string (ISO date)"
}
```

> [!info]
> El valor `baseServings: 12` en el ejemplo del manual es **conceptual**. La receta implementada usa BASE_PORTIONS = 27. No sustituir el valor real por el ejemplo.

## Documentos relacionados

- [[06_ARQUITECTURA_TECNICA]]
- [[13_DICCIONARIO_DE_BASE_DE_DATOS]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[31_CASOS_DE_PRUEBA]]
