---
title: "Flujos de Usuario"
document_id: "CS-10"
status: "vigente"
implementation_status: "PARCIALMENTE IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "ux"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[09_MODULOS_Y_FUNCIONALIDADES]]"
  - "[[16_REGLAS_DE_NEGOCIO]]"
tags:
  - chef-scrapbook
  - flujos
  - ux
---

# Flujos de Usuario

## Flujos actuales implementados

### Flujo principal: Consultar y escalar receta

```mermaid
flowchart TD
    A([Usuario abre index.html]) --> B[Ve la receta de Galletas de Chispas v3.2]
    B --> C[Lee ingredientes con cantidades base 27 porciones]
    C --> D{Quiere cambiar porciones?}
    D -->|No| E[Consulta el metodo de preparacion]
    D -->|Si| F[Modifica el input de porciones]
    F --> G{Valor valido?}
    G -->|No: vacio, decimal, negativo, >9999| H[Muestra mensaje de error]
    H --> F
    G -->|Si: entero 1-9999| I[Calcula factor = porciones / 27]
    I --> J[Actualiza todos los pesos en tiempo real]
    J --> K[Anuncia cambio via aria-live]
    K --> L[Usuario ve cantidades escaladas]
    L --> E
    E --> M[Lee perfil nutricional por porcion de 50g]
```

### Flujo: Navegacion por teclado

```mermaid
flowchart TD
    A([Tab en skip link]) --> B[Activa skip link visible]
    B --> C{Enter en skip link?}
    C -->|Si| D[Salta a #main-content]
    C -->|No, Tab| E[Foco en sidebar links]
    E --> F[Tab avanza por nav links]
    F --> G[Tab llega al input de porciones]
    G --> H[Tab a botones + y -]
    H --> I[Tab avanza por el resto del contenido]
```

### Flujo: Entrada invalida

```mermaid
flowchart TD
    A[Usuario ingresa valor] --> B{Es entero positivo 1-9999?}
    B -->|Vacio| C[Error: Ingresa un numero de porciones]
    B -->|Decimal ej 1.5| D[Error: El numero debe ser un entero]
    B -->|Cero o negativo| E[Error: Debe ser mayor que cero]
    B -->|Texto no numerico| F[Error: Ingresa un numero valido]
    B -->|Mas de 9999| G[Error: No puede superar 9999]
    B -->|Valido| H[Actualiza la receta]
    C --> I[aria-invalid=true en input]
    D --> I
    E --> I
    F --> I
    G --> I
    H --> J[aria-invalid=false, limpia error]
```

## Flujos futuros — PLANIFICADO

> [!info]
> Los siguientes flujos son descriptos en el manual v3.1 pero no existen en el codigo.

- Buscar y descubrir recetas.
- Guardar una receta en coleccion.
- Crear una coleccion personalizada.
- Registrar version propia de una receta.
- Crear y gestionar cuenta de usuario.
- Exportar receta a PDF.
- Compartir enlace a una receta.

## Documentos relacionados

- [[09_MODULOS_Y_FUNCIONALIDADES]]
- [[11_FLUJOS_DE_NEGOCIO]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[31_CASOS_DE_PRUEBA]]
