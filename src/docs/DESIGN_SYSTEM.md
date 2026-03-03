# 🎨 Portfolio Design System (LJCR)

> **Versión:** 1.0.0  
> **Filosofía:** Minimalismo Técnico, Accesibilidad Proactiva y Coherencia Semántica.

Este sistema de diseño define las reglas visuales y técnicas que garantizan una experiencia de usuario premium y consistente en todo el portafolio profesional de Luis Jhonata Cueva R.

---

## 🌈 1. Sistema de Color (Design Tokens)

El proyecto utiliza **colores semánticos** definidos mediante variables CSS en `src/index.css` y mapeados en `tailwind.config.cjs`. Nunca se deben usar colores "hardcoded" (ej. `bg-blue-600`) en los componentes.

| Token | Propósito | Light Mode | Dark Mode |
| :--- | :--- | :--- | :--- |
| `--brand-primary` | Identidad y Acciones Principales. | `Blue 600` | `Blue 500` |
| `--surface-base` | Fondo de la página y secciones impares. | `White` | `Slate 950` |
| `--surface-elevated`| Fondo de secciones pares y tarjetas. | `Slate 50` | `Slate 900` |
| `--text-main` | Títulos y cuerpo de texto principal. | `Slate 900` | `Slate 50` |
| `--text-muted` | Texto secundario y descripciones. | `Slate 600` | `Slate 400` |
| `--border-subtle` | Bordes, divisores y decoraciones. | `Slate 200` | `Slate 800` |

### Uso en Tailwind:
```jsx
<div className="bg-surface-base text-content-main border-separator" />
```

---

## 🧱 2. Componentes Atómicos (UI Library)

Hemos abstraído los elementos recurrentes en componentes reutilizables en `src/components/ui/`.

### 🔘 Button (`Button.jsx`)
Componente polimórfico que estandariza todas las acciones.
- **Variantes:** `primary`, `secondary`, `neutral`.
- **Características:** `rounded-full`, sombras dinámicas, hover scale.
- **Soporte:** Puede actuar como `button` o `a` (vía prop `as`).

### 🏷️ Tag (`Tag.jsx`)
Etiquetas para tecnologías y roles.
- **Estilo:** `rounded-full`, borde sutil, fondo `surface-elevated`.

### ⌨️ Form Inputs (`Input.jsx`)
Campos de texto y áreas de mensaje.
- **Estilo:** `rounded-xl`, focus state con `ring`, fondo sutil.

---

## 🎭 3. Sistema de Animación (`src/lib/animations.js`)

Utilizamos **Framer Motion** con un enfoque en el rendimiento (`LazyMotion`).

- **`fadeUp`**: Entrada suave desde abajo (30px). Usado en tarjetas.
- **`staggerContainer`**: Orquestador para que los hijos aparezcan en cascada.
- **`scaleIn`**: Zoom sutil para elementos destacados.

**Regla de Oro:** Siempre respetar `prefers-reduced-motion` mediante el hook `useReducedMotion`.

---

## 🦓 4. Patrones de Layout

### Zebra Striping (Ritmo de Scroll)
Para dar ritmo visual, las secciones deben alternar su fondo:
1.  Sección N: `bgVariant="dark"` (Usa `surface-base`)
2.  Sección N+1: `bgVariant="gray"` (Usa `surface-elevated`)

### Radios de Borde
- **Cards:** `rounded-3xl` (24px) para un look orgánico.
- **Inputs:** `rounded-xl` (12px).
- **Buttons/Tags:** `rounded-full` (Cápsula).

---

## ♿ 5. Accesibilidad (A11Y)

- **Semántica:** Usar `role="list"` para grids y `role="alert"` para errores.
- **Contraste:** Todos los tokens de texto cumplen con el ratio 4.5:1 (WCAG AA).
- **Interactividad:** Los elementos de acción deben tener `focus-visible:ring` y ser navegables por teclado.

---

**Mantenimiento:**  
Para añadir un nuevo color, edita `index.css`. Para un nuevo componente, regístralo en `src/components/ui/` siguiendo el patrón atómico.
