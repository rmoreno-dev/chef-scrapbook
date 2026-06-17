# ASSET SOURCES — Chef Scrapbook

Registro de todos los activos del proyecto: activos propios, activos externos activos
y registro histórico de activos eliminados.

---

## Ilustraciones propias (SVG locales)

Activos vectoriales creados específicamente para Chef Scrapbook. Sin dependencias externas.
Aptos para publicación.

### A. Avatar de perfil

| Campo                    | Detalle |
|--------------------------|---------|
| **Archivo**              | `assets/images/chef-avatar.svg` |
| **Propósito**            | Avatar circular del sidebar — identidad visual del perfil |
| **Origen**               | Creado específicamente para Chef Scrapbook |
| **Autoría**              | Proyecto Chef Scrapbook |
| **Dependencia externa**  | Ninguna |
| **Licencia**             | Propietaria — mismo titular que el proyecto |
| **Paleta**               | Sistema Vanilla Ink (#FAF5EC, #E4D5C3, #C8B49F, #A68E98, #A8B0BA, #253245) |
| **Aptitud publicación**  | Apto ✓ |

### B. Ilustración de galletas

| Campo                    | Detalle |
|--------------------------|---------|
| **Archivo**              | `assets/images/chocolate-chip-cookies.svg` |
| **Propósito**            | Imagen polaroid de la columna derecha — ilustra el batch de galletas |
| **Origen**               | Creado específicamente para Chef Scrapbook |
| **Autoría**              | Proyecto Chef Scrapbook |
| **Dependencia externa**  | Ninguna |
| **Licencia**             | Propietaria — mismo titular que el proyecto |
| **Paleta**               | Sistema Vanilla Ink (#FAF5EC, #E4D5C3, #C8B49F, #A8B0BA, #253245) |
| **Aptitud publicación**  | Apto ✓ |

---

## Imágenes externas eliminadas (registro histórico)

Las siguientes imágenes fueron utilizadas provisionalmente durante el desarrollo local
y eliminadas antes de cualquier publicación pública. **Nunca se publicaron.**
Se conserva el registro con fines de trazabilidad.

### 1. Foto de perfil — Chef portrait *(REEMPLAZADA)*

| Campo             | Detalle |
|-------------------|---------|
| **Tipo**          | Imagen rasterizada (JPEG) — URL externa |
| **URL original**  | `https://lh3.googleusercontent.com/aida-public/AB6AXuAflpxF4kQ...` |
| **Utilizada en**  | `index.html` → sidebar, avatar del perfil |
| **Licencia**      | Desconocida — imagen generada por Google AI Studio (AIDA public) |
| **Estado**        | **REEMPLAZADA** — eliminada de todos los archivos activos del proyecto |
| **No publicada**  | La URL nunca estuvo presente en ningún commit ni despliegue público |
| **Sustituida por** | `assets/images/chef-avatar.svg` |

### 2. Foto de galletas — Cookie batch *(REEMPLAZADA)*

| Campo             | Detalle |
|-------------------|---------|
| **Tipo**          | Imagen rasterizada (JPEG) — URL externa |
| **URL original**  | `https://lh3.googleusercontent.com/aida-public/AB6AXuAHjPEOS0L...` |
| **Utilizada en**  | `index.html` → sección polaroid (columna derecha) |
| **Licencia**      | Desconocida — imagen generada por Google AI Studio (AIDA public) |
| **Estado**        | **REEMPLAZADA** — eliminada de todos los archivos activos del proyecto |
| **No publicada**  | La URL nunca estuvo presente en ningún commit ni despliegue público |
| **Sustituida por** | `assets/images/chocolate-chip-cookies.svg` |

---

## Tipografías (Google Fonts — SIL Open Font License)

Todas las fuentes se cargan desde Google Fonts CDN y están disponibles bajo la
**SIL Open Font License 1.1**, que permite uso en proyectos comerciales y personales.

| Fuente          | Uso en el proyecto                          | URL |
|-----------------|---------------------------------------------|-----|
| **Prata**       | Títulos editoriales y encabezados           | https://fonts.google.com/specimen/Prata |
| **Mulish**      | Cuerpo de texto, tablas, formularios, UI    | https://fonts.google.com/specimen/Mulish |
| **Great Vibes** | Captions decorativos y acentos manuscritos  | https://fonts.google.com/specimen/Great+Vibes |

---

## Iconos — Material Symbols Outlined (Google) *(ELIMINADO en v0.2.0)*

| Campo             | Detalle |
|-------------------|---------|
| **Proveedor**     | Google Fonts / Material Design |
| **Licencia**      | Apache License 2.0 |
| **URL**           | `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined...` |
| **Íconos usados** | `account_circle`, `dashboard`, `science`, `biotech`, `bar_chart`, `list_alt`, `play_arrow` |
| **Estado**        | **ELIMINADO** — reemplazado por el kit SVG propio de marca en v0.2.0. Sin referencias activas en el proyecto. |

---

---

## Íconos del kit de marca (SVG propios — Vanilla Ink)

Íconos vectoriales del sistema de marca oficial. Copiados de `.local-reference/brand-manual-v3.1/assets/svg/` a `assets/icons/`. Nunca deben referenciar URLs externas.

| Archivo              | Propósito en el proyecto                     |
|----------------------|----------------------------------------------|
| `home.svg`           | Ítem de navegación — Inicio                  |
| `recipe.svg`         | Ítem de navegación — Recetas                 |
| `calendar.svg`       | Ítem de navegación — Menús; cards de menú    |
| `heart.svg`          | Botón de favorito en tarjetas de receta      |
| `search.svg`         | Barra de búsqueda de recetas                 |
| `clock.svg`          | Meta-dato de tiempo en tarjetas              |
| `filter.svg`         | Filtro avanzado (reservado)                  |
| `check.svg`          | Título sección "Cocina del Domingo"          |
| `plus.svg`           | Botones de agregar en listas                 |
| `leaf.svg`           | Tarjetas "próximamente"                      |
| `sparkle.svg`        | Sección "Novedades" en home                  |
| `ingredients.svg`    | Encabezado tabla ingredientes; lista compras |
| `bowl.svg`           | Reservado para futuras vistas                |
| `whisk.svg`          | Encabezado sección Método                    |
| `journal.svg`        | Card menús guardados                         |
| `servings.svg`       | Meta-dato de porciones en tarjetas           |
| `scale.svg`          | Card novedades — calculadora de porciones    |
| `menu-icon.svg`      | Reservado para menú contextual               |

**Aptitud publicación:** Apto ✓ (sin referencias externas)

---

## Activos de branding (SVG propios)

Copiados de `.local-reference/brand-manual-v3.1/assets/svg/` a `assets/branding/`.

| Archivo                  | Propósito en el proyecto                   |
|--------------------------|--------------------------------------------|
| `brand-stamp.svg`        | Sello circular del sidebar y hero de Inicio |
| `botanical-divider.svg`  | Divisores decorativos (reservado)          |
| `botanical-sprigs.svg`   | Decoración editorial (reservado)           |
| `torn-paper.svg`         | Efecto borde rasgado (reservado)           |

**Aptitud publicación:** Apto ✓

---

## Favicon

| Campo                   | Detalle |
|-------------------------|---------|
| **Archivo**             | `assets/images/favicon.svg` |
| **Propósito**           | Favicon SVG del sitio — isotipo cat chef |
| **Origen**              | Creado para Chef Scrapbook basado en el concepto de marca aprobado (`favicon_256.png` en `.local-reference`) |
| **Aptitud publicación** | Apto ✓ |

---

## Notas generales

- Las URLs de `lh3.googleusercontent.com` fueron eliminadas del proyecto antes de cualquier
  publicación. No existe ninguna referencia activa a ese dominio en los archivos del proyecto.
- Los dominios de Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`) requieren
  conexión a internet para cargarse. Para uso offline, descargar las fuentes y
  alojarlas localmente en `assets/fonts/`.
- Los SVG propios no contienen scripts, imágenes embebidas, URLs remotas ni datos base64.
