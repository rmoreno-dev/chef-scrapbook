---
title: "Flujos de Negocio"
document_id: "CS-11"
status: "vigente"
implementation_status: "NO APLICA"
project: "Chef Scrapbook"
document_type: "negocio"
version: "1.0.0"
brand_manual_version: "3.1"
last_updated: "2026-06-16"
last_verified_against_code: "2026-06-16"
source_of_truth: false
related_documents:
  - "[[10_FLUJOS_DE_USUARIO]]"
  - "[[16_REGLAS_DE_NEGOCIO]]"
tags:
  - chef-scrapbook
  - negocio
  - flujos
---

# Flujos de Negocio

## Modelo de negocio actual

**Chef Scrapbook no tiene modelo de negocio comercial activo.**

- No existe transaccion economica.
- El contenido es completamente gratuito.
- No hay pagos, suscripciones ni compras.
- No hay operacion SaaS ni servicio gestionado.
- No hay publicidad ni monetizacion.

## Flujo editorial de una receta (actual)

```mermaid
flowchart LR
    A[Receta desarrollada localmente] --> B[Revision tecnica de ingredientes y cantidades]
    B --> C[Revision editorial de pasos y lenguaje]
    C --> D[Validacion de accesibilidad]
    D --> E[Integracion en index.html]
    E --> F[Pruebas en navegador local]
    F --> G{Aprobacion de Rodolfo Moreno}
    G -->|Aprobado| H[Publicacion en GitHub Pages - PLANIFICADO]
    G -->|Revision| B
```

## Flujo de control de publicacion

1. Desarrollo y prueba local.
2. Revision contra normas del manual v3.1.
3. Verificacion de accesibilidad y responsive.
4. Revision de activos (licencias, alt text).
5. Actualizacion de vault documental.
6. Autorizacion expresa para commit y push.
7. Despliegue en GitHub Pages (cuando este autorizado).

## Flujos futuros (PLANIFICADOS)

> [!info]
> Los siguientes flujos son visiones del manual v3.1 para etapas futuras.

- Flujo de registro y verificacion de cuenta de usuario.
- Flujo de publicacion de receta por colaboradores.
- Flujo de reporte y correccion de error en receta.
- Flujo de exportacion de datos personales (privacidad).
- Flujo de borrado de cuenta.

## Documentos relacionados

- [[10_FLUJOS_DE_USUARIO]]
- [[16_REGLAS_DE_NEGOCIO]]
- [[24_SEGURIDAD]]
