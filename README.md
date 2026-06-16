# Chef Scrapbook

**Cuaderno digital de fórmulas culinarias** — donde la precisión de la panadería
se encuentra con la calidez de un cuaderno artesanal.

---

## Estado actual

> **Versión 0.1.0 — Primera versión funcional**
>
> Página de fórmula completa con calculadora de porciones interactiva.
> Optimizada para escritorio y móvil. Lista para pruebas locales.

---

## Características

- **Fórmula de Galletas de Chispas v3.2** con Matriz de Ingredientes completa
- **Calculadora de porciones** — escala todos los ingredientes en tiempo real
- **Porcentajes de panadero** con indicador de fase (Secos, Cremado, Líquidos, Inclusión)
- **Método de preparación** en 3 pasos con estilo notebook
- **Perfil nutricional** por porción de 50g
- **Navegación lateral** (escritorio) y cabecera sticky (móvil)
- **Sistema visual Vanilla Ink** — editorial, botánico, refinado
- **Totalmente accesible**: etiquetas ARIA, navegación por teclado, `aria-live`, foco visible, `prefers-reduced-motion`
- **Responsive** desde 320 px hasta escritorio wide
- Sin dependencias npm · Sin framework · Sin backend · Sin cookies

---

## Estructura del proyecto

```
/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   ├── tokens.css      # Variables CSS del sistema Vanilla Ink
│   │   └── styles.css      # Estilos completos
│   ├── js/
│   │   └── app.js          # Lógica de la calculadora de porciones
│   └── images/             # Imágenes propias (carpeta reservada)
├── docs/
│   └── ASSET-SOURCES.md    # Registro de activos externos y licencias
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

## Publicación en GitHub Pages

El proyecto está diseñado para publicarse como **GitHub Project Page** sin
configuración adicional. Todos los recursos utilizan rutas relativas compatibles
con la URL base:

```
https://rmoreno-dev.github.io/chef-scrapbook/
```

Para publicar (cuando esté autorizado):
1. Crear repositorio en GitHub como `chef-scrapbook`
2. Activar GitHub Pages desde `Settings → Pages → Branch: main / root`
3. La página quedará disponible en la URL indicada arriba

---

## Tecnologías utilizadas

| Tecnología               | Uso                                      |
|--------------------------|------------------------------------------|
| HTML5 semántico          | Estructura y accesibilidad               |
| CSS3 con custom properties | Sistema de diseño Vanilla Ink en tokens |
| JavaScript ES5+ vanilla  | Calculadora de porciones                 |
| Google Fonts             | Prata · Mulish · Great Vibes             |
| Material Symbols Outlined | Iconografía de navegación               |

Sin frameworks CSS · Sin bibliotecas JS · Sin build step

---

## Activos externos pendientes de reemplazo

Las imágenes fotográficas utilizadas actualmente (foto de perfil y foto de
galletas) provienen de Google AI Studio y tienen **licencia desconocida**.
Solo se usan provisionalmente para el prototipo.

Antes de cualquier publicación pública o uso comercial, deben reemplazarse por:
- Fotografías propias, o
- Imágenes con licencia libre (Unsplash, Pexels, etc.)

Consultar `docs/ASSET-SOURCES.md` para el registro completo.

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
