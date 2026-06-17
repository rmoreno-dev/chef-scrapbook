# Chef Scrapbook

**Cuaderno digital de fórmulas culinarias** — donde la precisión de la panadería
se encuentra con la calidez de un cuaderno artesanal.

---

## Estado actual

> **Versión 0.2.1 — Activos web oficiales integrados**
>
> Aplicación de página única con 4 vistas (Inicio, Recetas, Detalle de receta, Menús),
> calculadora de porciones interactiva, favoritos, buscador, planificador semanal
> y lista de compras. Persistencia en localStorage. Optimizada para escritorio y móvil.
> Logo oficial, favicon set completo, 32 iconos SVG, 17 decorativos y patrones integrados.

---

## Características

- **SPA con hash routing** — 4 vistas sin recarga: `#/inicio`, `#/recetas`, `#/recetas/:slug`, `#/menus`
- **Fórmula de Galletas de Chispas v3.2** con Matriz de Ingredientes completa
- **Calculadora de porciones** — escala todos los ingredientes en tiempo real
- **Porcentajes de panadero** con indicador de fase (Secos, Cremado, Líquidos, Inclusión)
- **Buscador de recetas** con filtro por categoría
- **Favoritos** — marcado/desmarcado con persistencia en localStorage
- **Planificador semanal** — grid de 7 días × 4 tiempos de comida
- **Lista de compras** generada automáticamente desde el planner
- **Método de preparación** en 3 pasos con estilo notebook
- **Perfil nutricional** por porción de 50 g
- **Navegación lateral** (escritorio) y cabecera sticky (móvil)
- **Logo oficial** — horizontal transparent en sidebar; isotipo en cabecera móvil
- **Favicon set completo** — ico, 32×32, 16×16, apple-touch, site.webmanifest
- **32 iconos SVG oficiales** — `assets/icons/svg/icon-*.svg` del kit de marca
- **17 activos decorativos** — botánicos, washi-tape, sello, paperclip, patrones
- **Sistema visual Vanilla Ink** — editorial, botánico, refinado
- **Totalmente accesible**: etiquetas ARIA, navegación por teclado, `aria-live`, foco visible, `prefers-reduced-motion`
- **Responsive** desde 320 px hasta escritorio wide
- Sin dependencias npm · Sin framework · Sin backend · Sin cookies

---

## Estructura del proyecto

```
/
├── index.html                      # Shell SPA — estructura fija; contenido renderizado por JS
├── css/
│   └── chef-scrapbook-assets.css   # CSS oficial del paquete de marca v1.0
├── assets/
│   ├── css/
│   │   ├── tokens.css              # Variables CSS del sistema Vanilla Ink
│   │   ├── styles.css              # Estilos base y layout
│   │   ├── components.css          # Componentes reutilizables (cards, buttons, inputs)
│   │   └── responsive.css          # Media queries y adaptaciones móvil
│   ├── js/
│   │   ├── data/
│   │   │   └── recipes.js          # Datos de recetas (catálogo canónico)
│   │   ├── state.js                # Estado global y persistencia localStorage
│   │   ├── router.js               # Hash router SPA
│   │   ├── pages/
│   │   │   ├── home.js             # Vista Inicio
│   │   │   ├── recipes.js          # Vista Recetas (listado + buscador)
│   │   │   ├── recipe-detail.js    # Vista Detalle de receta + calculadora
│   │   │   └── menus.js            # Vista Menús (planner + lista de compras)
│   │   └── app.js                  # Bootstrap: namespace ChefScrapbook, toast, init
│   ├── branding/                   # Logos y sello oficiales (PNG, WebP, SVG wrappers)
│   ├── decorative/                 # Activos decorativos: botánicos, washi-tape, etc.
│   ├── favicon/                    # Favicon set completo (ico, 32, 16, apple-touch, manifest)
│   ├── icons/
│   │   └── svg/                    # 32 iconos SVG oficiales con prefijo icon-
│   ├── patterns/
│   │   └── svg/                    # 4 patrones SVG (grid, dots, crosses, lines)
│   ├── images/                     # Ilustraciones propias (chef-avatar, galletas)
│   └── tokens.json                 # Tokens de diseño en formato JSON
├── docs/
│   └── ASSET-SOURCES.md            # Registro de activos y licencias
├── Chef Scrapbook AI/              # Vault de documentación (44 documentos Obsidian)
├── .github/
│   ├── copilot-instructions.md     # Instrucciones permanentes para Copilot
│   └── prompts/
│       └── chef.scrapbook.prompt.md # AI Context Router v3.0.0
├── .gitignore
├── LICENSE
└── README.md
```

---

## Ejecución local

> **Solo para uso del equipo de desarrollo autorizado.**
> El acceso a estos archivos no constituye autorización para copiar,
> redistribuir ni reutilizar el código o el diseño.

No se requiere servidor ni instalación de dependencias. Basta con abrir
`index.html` en un navegador moderno:

**Opción 1 — Doble clic:**
```
Abrir index.html directamente desde el explorador de archivos
```

**Opción 2 — Servidor local simple (recomendado para evitar restricciones CORS):**
```bash
# Con Python 3
python -m http.server 8080

# Con Node.js (npx)
npx serve .
```

Luego visitar: `http://localhost:8080`

---

## Sitio publicado

**URL pública:** [https://rmoreno-dev.github.io/chef-scrapbook/](https://rmoreno-dev.github.io/chef-scrapbook/)

Publicado en **GitHub Pages** desde `main / root`. Se actualiza automáticamente
en cada push autorizado a `main`. Todos los recursos utilizan rutas relativas
compatibles con el subdirectorio `/chef-scrapbook/`.

Primer despliegue verificado: 2026-06-17 — commit `2bb215b` (feat: integrate official Chef Scrapbook web assets). 14/14 activos HTTP 200.

---

## Tecnologías utilizadas

| Tecnología               | Uso                                      |
|--------------------------|------------------------------------------|
| HTML5 semántico          | Shell SPA y accesibilidad                |
| CSS3 con custom properties | Sistema de diseño Vanilla Ink en tokens |
| JavaScript vanilla       | Router SPA, estado, vistas, calculadora  |
| localStorage             | Persistencia de favoritos, planner, preferencias |
| Google Fonts             | Prata · Mulish · Great Vibes             |
| SVG kit propio           | Iconografía oficial del sistema de diseño |

Sin frameworks CSS · Sin bibliotecas JS · Sin build step · Sin Material Symbols

---

## Licencia

Este proyecto es software propietario. **No es open source.**

```
Copyright (c) 2026 Rodolfo Moreno. All rights reserved.
```

**Usar la instancia oficial publicada** en la URL autorizada es la única acción
permitida a usuarios finales. El acceso al repositorio en GitHub no otorga
ningún permiso de uso, copia ni redistribución.

El **código fuente, diseño, identidad visual y documentación** están protegidos.
No se concede permiso para copiarlos, modificarlos, distribuirlos ni reutilizarlos
sin autorización escrita del titular.

Consultas de licenciamiento: rodolfo.andres7@gmail.com

Ver `LICENSE` para los términos completos.

---

## Documentación técnica, marca y contexto para IA

El proyecto cuenta con un vault Obsidian en `Chef Scrapbook AI/` con 44 documentos de contexto técnico, de marca y para agentes de IA.

### Documentos clave

| Documento | Contenido |
|---|---|
| `Chef Scrapbook AI/CHEF_SCRAPBOOK_MASTER_PROMPT.md` | Prompt maestro — leer primero |
| `Chef Scrapbook AI/04_ESTADO_ACTUAL.md` | Estado real del código |
| `Chef Scrapbook AI/34_DEUDA_TECNICA.md` | Deudas técnicas activas |
| `Chef Scrapbook AI/42_MANUAL_DE_NORMAS_BRANDING.md` | Normas de marca Vanilla Ink |
| `Chef Scrapbook AI/35_ROADMAP.md` | Plan de desarrollo |

### Instrucciones para asistentes de IA

- Ver `.github/copilot-instructions.md` para instrucciones permanentes.
- Ver `.github/prompts/chef.scrapbook.prompt.md` para el prompt `/chef.scrapbook`.
- Ver `Chef Scrapbook AI/39_PROMPTS_Y_REGLAS_PARA_IA.md` para reglas detalladas.

### Referencia privada de marca

El Manual Profesional Chef Scrapbook v3.1 está en `.local-reference/brand-manual-v3.1/` (excluido del repositorio público mediante `.gitignore`).

---

## Autor

**Rodolfo Moreno**
Desarrollo y diseño — Chef Scrapbook
