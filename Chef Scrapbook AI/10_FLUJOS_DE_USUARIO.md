---
title: "Flujos de Usuario"
document_id: "CS-10"
status: "vigente"
implementation_status: "PARCIALMENTE IMPLEMENTADO"
project: "Chef Scrapbook"
document_type: "ux"
version: "2.0.0"
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

### Flujo 1: Navegacion por secciones (SPA)

```mermaid
flowchart TD
    A([Usuario abre la URL]) --> B{Hash en la URL?}
    B -->|Sin hash| C[Redirige a #/inicio]
    B -->|Con hash valido| D[Router resuelve la ruta]
    D --> E{Ruta reconocida?}
    E -->|Si| F[Renderiza la vista en #main-content]
    E -->|No| G[Redirige a #/inicio]
    F --> H[Actualiza aria-current en el sidebar]
    H --> I[Mueve foco a main-content]
```

### Flujo 2: Consultar y escalar receta

```mermaid
flowchart TD
    A([#/recetas]) --> B[Grid de recetas]
    B --> C[Clic en Galletas de Chispas]
    C --> D[Router navega a #/recetas/galletas-de-chispas]
    D --> E[Vista detalle con 27 porciones base]
    E --> F{Quiere cambiar porciones?}
    F -->|No| G[Lee ingredientes y metodo]
    F -->|Si| H[Modifica el input de porciones]
    H --> I{Valor valido?}
    I -->|No| J[Muestra error con aria-live assertive]
    J --> H
    I -->|Si| K[Calcula factor = porciones / 27]
    K --> L[Actualiza todos los pesos en tiempo real]
    L --> M[Anuncia cambio via aria-live polite]
    M --> G
```

### Flujo 3: Marcar/desmarcar favorito

```mermaid
flowchart TD
    A([Vista Recetas o Detalle]) --> B[Ve boton de favorito]
    B --> C{Esta en favoritos?}
    C -->|Si| D[Boton activo - icono relleno]
    C -->|No| E[Boton inactivo - icono vacio]
    D --> F[Clic en boton]
    E --> F
    F --> G[State.toggleFavorite(slug)]
    G --> H[localStorage actualizado]
    H --> I[UI actualizada instantaneamente]
    I --> J[Toast de confirmacion]
```

### Flujo 4: Planificar menu semanal

```mermaid
flowchart TD
    A([#/menus]) --> B[Grid 7 dias x 4 tiempos]
    B --> C[Elige un slot vacio]
    C --> D[Selecciona receta del dropdown]
    D --> E[State.setMenuSlot]
    E --> F[localStorage actualizado]
    F --> G[Grid muestra receta asignada]
    G --> H{Quiere cambiar?}
    H -->|Si| I[Selecciona otra receta o limpia el slot]
    H -->|No| J[Revisa otros dias]
```

### Flujo 5: Gestionar lista de compras

```mermaid
flowchart TD
    A([#/menus, seccion compras]) --> B[Lista de compras]
    B --> C{Accion?}
    C -->|Agregar item| D[Escribe texto + cantidad + Agregar]
    D --> E[State.addShoppingItem]
    E --> F[Item aparece en la lista]
    C -->|Toggle completado| G[State.toggleShoppingItem]
    G --> H[Item tachado / destachado]
    C -->|Eliminar| I[State.removeShoppingItem]
    I --> J[Item desaparece]
    C -->|Limpiar todo| K[State.clearShoppingList]
    K --> L[Lista vacia]
```

### Flujo 6: Navegacion por teclado

```mermaid
flowchart TD
    A([Tab en skip link]) --> B[Skip link visible]
    B --> C{Enter en skip link?}
    C -->|Si| D[Foco a #main-content]
    C -->|No| E[Tab - Foco en sidebar links]
    E --> F[Tab avanza por nav links]
    F --> G[Enter/Space activa link - navega a vista]
    G --> H[Tab avanza por el contenido de la vista]
```

### Flujo 7: Sidebar movil

```mermaid
flowchart TD
    A([Usuario en movil]) --> B[Ve cabecera con boton hamburguesa]
    B --> C[Clic en boton - aria-expanded=false -> true]
    C --> D[Sidebar desliza desde la izquierda]
    D --> E[Overlay oscuro aparece]
    E --> F{Como cierra?}
    F -->|Clic en overlay| G[Sidebar cierra]
    F -->|Escape| G
    F -->|Clic en link de nav| H[Navega a la vista]
    H --> G
    G --> I[aria-expanded=false - sidebar oculto]
```

### Flujo 8: Entrada invalida en la calculadora

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
    H --> J[aria-invalid=false - limpia error]
```

## Flujos futuros — PLANIFICADO

> [!info]
> Los siguientes flujos estan descritos en el manual v3.1 pero no existen en el codigo.

- Buscar receta por ingrediente o tecnica.
- Registrar version propia de una receta con notas.
- Crear y gestionar cuenta de usuario.
- Exportar receta a PDF.
- Compartir enlace a una receta.
- Visualizar colecciones por temporada o tema.

## Documentos relacionados

- [[09_MODULOS_Y_FUNCIONALIDADES]]
- [[11_FLUJOS_DE_NEGOCIO]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[31_CASOS_DE_PRUEBA]]
