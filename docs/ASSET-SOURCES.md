# ASSET SOURCES — Chef Scrapbook

Registro de todos los activos del proyecto: activos propios, activos externos activos
y registro histórico de activos eliminados.

---

## Paquete oficial de activos web — Chef_Scrapbook_Web_Assets_v1.0

Fuente canónica de todos los activos visuales del sitio, integrado en v0.2.1 (2026-06-17).
Origen: paquete aprobado generado a partir del Manual Profesional Chef Scrapbook v3.1 (Concepto 01).

### Branding — Logos y sello

| Archivo                                          | Uso en el proyecto                         |
|--------------------------------------------------|--------------------------------------------|
| `assets/branding/webp/chef-scrapbook-logo-horizontal-transparent.webp` | Logo sidebar (fuente WebP) |
| `assets/branding/png/chef-scrapbook-logo-horizontal-transparent.png`   | Logo sidebar (fallback PNG) |
| `assets/branding/webp/chef-scrapbook-icon-transparent.webp`            | Isotipo cabecera móvil (fuente WebP) |
| `assets/branding/png/chef-scrapbook-icon-transparent.png`              | Isotipo cabecera móvil (fallback PNG) |
| `assets/branding/webp/chef-scrapbook-seal-transparent.webp`            | Watermark hero de Inicio |
| `assets/branding/png/chef-scrapbook-seal-transparent.png`              | Watermark hero (fallback PNG) |
| `assets/branding/*.svg`                          | Wrappers SVG de referencia (no usados en HTML directamente) |
| Variantes vanilla (PNG)                          | Solo para uso editorial sobre fondos blancos |

**Reglas de uso:**
- Transparente: solo sobre fondos `#FAF5EC` (Vainilla) o blanco.
- Horizontal: sidebar y header; sello: solo como watermark o stamp editorial.
- Sello en el código: clase `cs-brand-seal-watermark`, opacidad 0.26, `pointer-events:none`, `aria-hidden="true"`.

**Aptitud publicación:** Apto ✓

---

### Iconos oficiales

| Directorio               | Contenido                                       |
|--------------------------|-------------------------------------------------|
| `assets/icons/svg/`      | 32 iconos SVG con prefijo `icon-` (24×24 px)   |
| `assets/icons/png/`      | Variantes PNG de referencia                     |

Iconos disponibles: `icon-book`, `icon-bowl`, `icon-calendar`, `icon-camera`, `icon-check`,
`icon-chefhat`, `icon-clock`, `icon-collection`, `icon-download`, `icon-edit`, `icon-filter`,
`icon-heart`, `icon-home`, `icon-info`, `icon-ingredients`, `icon-journal`, `icon-leaf`,
`icon-menu`, `icon-plus`, `icon-portion`, `icon-print`, `icon-recipe`, `icon-scale`,
`icon-search`, `icon-servings`, `icon-share`, `icon-sparkle`, `icon-star`, `icon-tag`,
`icon-trash`, `icon-warning`, `icon-whisk`.

**Aptitud publicación:** Apto ✓ (sin referencias externas)

---

### Activos decorativos

| Directorio                 | Contenido                                        |
|----------------------------|--------------------------------------------------|
| `assets/decorative/svg/`   | 17 SVG decorativos                               |
| `assets/decorative/png/`   | Variantes PNG de referencia                      |

Archivos: `botanical-divider.svg`, `botanical-sprig-left.svg`, `botanical-sprig-right.svg`,
`botanical-sprigs.svg`, `brand-stamp.svg`, `cookie-illustration.svg`, `heart.svg`,
`ink-splatter.svg`, `leaf-placeholder.svg`, `paper-note.svg`, `paperclip.svg`,
`scalloped-edge.svg`, `torn-paper.svg`, `washi-tape-almond.svg`, `washi-tape-mauve.svg`,
`washi-tape-sage.svg`, `washi-tape.svg`.

**Reglas de uso:** `alt=""` y `aria-hidden="true"` en todos los decorativos.

**Aptitud publicación:** Apto ✓

---

### Patrones

| Directorio              | Contenido                                          |
|-------------------------|----------------------------------------------------|
| `assets/patterns/svg/`  | `pattern-grid.svg`, `pattern-dots.svg`, `pattern-crosses.svg`, `pattern-lines.svg` |
| `assets/patterns/png/`  | Variantes PNG de referencia                        |

El patrón `pattern-grid.svg` se aplica como `background-image` en el `body` (24×24 px tile).

**Aptitud publicación:** Apto ✓

---

### Favicon set

| Archivo                                  | Propósito                             |
|------------------------------------------|---------------------------------------|
| `assets/favicon/favicon.ico`             | Favicon universal (multi-size ICO)    |
| `assets/favicon/favicon-32.png`          | Favicon 32×32 px                      |
| `assets/favicon/favicon-16.png`          | Favicon 16×16 px                      |
| `assets/favicon/apple-touch-icon.png`    | Icono iOS home screen 180×180 px      |
| `assets/favicon/site.webmanifest`        | Web App Manifest (Android/PWA)        |
| `assets/favicon/android-chrome-192.png`  | Icono Android Chrome 192×192 px       |
| `assets/favicon/android-chrome-512.png`  | Icono Android Chrome 512×512 px       |

**Aptitud publicación:** Apto ✓

---

### CSS oficial y tokens

| Archivo                          | Propósito                                              |
|----------------------------------|--------------------------------------------------------|
| `css/chef-scrapbook-assets.css`  | CSS oficial: variables de marca + clases de utilidad   |
| `assets/tokens.json`             | Tokens de diseño en formato JSON                       |

Clases de utilidad: `.cs-page-texture`, `.cs-brand-logo`, `.cs-brand-seal-watermark`,
`.cs-paper-card`, `.cs-with-tape`, `.cs-with-tape--sage`, `.cs-botanical-left`,
`.cs-botanical-right`, `.cs-placeholder`, `.cs-quote-note`, `.cs-decoration`.

**Aptitud publicación:** Apto ✓

---

## Ilustraciones propias (SVG locales)

Activos vectoriales creados específicamente para Chef Scrapbook. Sin dependencias externas.

| Campo                   | Archivo                                     |
|-------------------------|---------------------------------------------|
| Avatar de perfil        | `assets/images/chef-avatar.svg`             |
| Ilustración de galletas | `assets/images/chocolate-chip-cookies.svg`  |

**Aptitud publicación:** Apto ✓

---

## Tipografías (Google Fonts — SIL Open Font License)

Cargadas desde Google Fonts CDN. Disponibles bajo **SIL Open Font License 1.1**.

| Fuente          | Uso en el proyecto                          |
|-----------------|---------------------------------------------|
| **Prata**       | Títulos editoriales y encabezados           |
| **Mulish**      | Cuerpo de texto, tablas, formularios, UI    |
| **Great Vibes** | Captions decorativos y acentos manuscritos  |

---

## Registro histórico de activos eliminados

### Íconos provisionales planos — ELIMINADOS en v0.2.1

18 archivos SVG en `assets/icons/` (sin prefijo, sin subdirectorio): `bowl.svg`, `calendar.svg`,
`check.svg`, `clock.svg`, `filter.svg`, `heart.svg`, `home.svg`, `ingredients.svg`, `journal.svg`,
`leaf.svg`, `menu-icon.svg`, `plus.svg`, `recipe.svg`, `scale.svg`, `search.svg`, `servings.svg`,
`sparkle.svg`, `whisk.svg`.

**Estado:** ELIMINADOS — sustituidos por `assets/icons/svg/icon-*.svg` del paquete oficial v1.0.

---

### Branding provisional — ELIMINADO en v0.2.1

4 archivos SVG en `assets/branding/`: `botanical-divider.svg`, `botanical-sprigs.svg`,
`brand-stamp.svg`, `torn-paper.svg`.

**Estado:** ELIMINADOS — sustituidos por los activos del directorio `assets/decorative/` del paquete oficial v1.0.

---

### Favicon SVG provisional — HISTORIAL

| Campo             | Detalle |
|-------------------|---------|
| **Archivo**       | `assets/images/favicon.svg` (eliminado de `<head>`) |
| **Estado**        | Sustituido por el favicon set completo en `assets/favicon/` |

---

### Material Symbols Outlined (Google) — ELIMINADO en v0.2.0

| Campo             | Detalle |
|-------------------|---------|
| **Proveedor**     | Google Fonts / Material Design |
| **Licencia**      | Apache License 2.0 |
| **Estado**        | **ELIMINADO** — reemplazado por el kit SVG oficial en v0.2.0 / v0.2.1 |

---

### Imágenes externas — NUNCA PUBLICADAS (v0.1.0)

Las siguientes imágenes de Google AI Studio se usaron provisionalmente en desarrollo local
y se eliminaron antes de cualquier commit público.

| Uso                | URL original (parcial)                                      |
|--------------------|-------------------------------------------------------------|
| Foto de perfil     | `https://lh3.googleusercontent.com/aida-public/AB6AXuAflpx...` |
| Foto de galletas   | `https://lh3.googleusercontent.com/aida-public/AB6AXuAHjPE...` |

**Estado:** REEMPLAZADAS — `chef-avatar.svg` y `chocolate-chip-cookies.svg` respectivamente.
**No publicadas:** Las URLs nunca estuvieron presentes en ningún commit público.

---

## Notas generales

- Los dominios de Google Fonts requieren conexión a internet. Para uso offline, descargar y alojar en `assets/fonts/`.
- Los SVG propios y del paquete oficial no contienen scripts, URLs remotas ni datos base64.
- El paquete `Chef_Scrapbook_Web_Assets_v1.0` está en `C:\Users\Usuario\Downloads\` (local, no versionado).
