# Tutorial Completo: Creando un Portafolio Profesional React 2025

Este tutorial te guiará paso a paso para entender, recrear y extender el portafolio que acabamos de refactorizar. Aprenderás no solo a escribir código, sino a **pensar como un arquitecto de software**.

---

## 📚 Índice

1.  [Conceptos Fundamentales](#1-conceptos-fundamentales)
2.  [Configuración del Entorno](#2-configuración-del-entorno)
3.  [Arquitectura de Estilos con BEM y Tailwind](#3-arquitectura-de-estilos-con-bem-y-tailwind)
4.  [Creando Componentes Inteligentes](#4-creando-componentes-inteligentes)
5.  [Gestión del Tema (Dark Mode)](#5-gestión-del-tema-dark-mode)
6.  [Despliegue Profesional](#6-despliegue-profesional)

---

## 1. Conceptos Fundamentales

Antes de codificar, entendemos **por qué** tomamos ciertas decisiones:

-   **React + Vite**: React es la librería de UI más demandada. Vite es el bundler estándar actual por su velocidad.
-   **Atomic Design (Simplificado)**: Organizamos componentes en `ui` (átomos) y componentes complejos (moléculas/organismos).
-   **Separación de Intereses**: El JSX define **qué** se muestra. El CSS define **cómo** se ve. BEM conecta ambos semánticamente.

---

## 2. Configuración del Entorno

Si empezaras desde cero, ejecutarías:

```bash
npm create vite@latest mi-portafolio -- --template react
cd mi-portafolio
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Estructura Recomendada

No tires todos los archivos en `src`. Crea carpetas con propósito:

-   `src/components`: Tu LEGO personal.
-   `src/hooks`: Tu lógica reutilizable.
-   `src/data`: Tu contenido (texto, imágenes) separado del código.

---

## 3. Arquitectura de Estilos con BEM y Tailwind

Este es el **corazón** de nuestra refactorización.

### El Problema

Tailwind es genial, pero esto es ilegible:

```jsx
// ❌ Código Sucio
<div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-gray-200 border flex flex-col gap-4">
```

### La Solución (BEM + @apply)

Usamos **BEM** (Bloque, Elemento, Modificador) para dar nombre, y **@apply** para dar estilo.

#### Paso 1: Definir el HTML (JSX)

```jsx
// ✅ Código Limpio
<article className="card">
    <div className="card__header">
        <h2 className="card__title">Mi Proyecto</h2>
    </div>
</article>
```

#### Paso 2: Definir el CSS (src/index.css)

```css
.card {
    @apply p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-gray-200 border flex flex-col gap-4;
}

.card__title {
    @apply text-xl font-bold text-gray-800;
}
```

> **Lección:** Esto hace que tu HTML sea semántico y tu CSS sea potente. Si quieres cambiar el redondeo de TODAS las tarjetas, solo cambias una línea en el CSS.

---

## 4. Creando Componentes Inteligentes

Analicemos el componente `WorkCard.jsx`.

### Reto

Necesitamos una tarjeta que pueda verse **Vertical** (para móviles o grids) u **Horizontal** (para listas destacadas).

### Implementación

En lugar de llenar el JSX de ternarios (`vertical ? 'w-full' : 'w-1/2'`), usamos clases modificadoras BEM.

```jsx
const WorkCard = ({ vertical }) => {
    return (
        <article
            className={`work-card ${
                vertical ? "work-card--vertical" : "work-card--horizontal"
            }`}
        >
            {/* ... contenido ... */}
        </article>
    );
};
```

Y en el CSS:

```css
.work-card--horizontal {
    @apply md:flex-row; /* Cambia la dirección del flex en desktop */
}
```

---

## 5. Gestión del Tema (Dark Mode)

Usamos la estrategia de **clases en el padre**.
El hook `useTheme` verifica la preferencia y añade o quita la clase `dark` en la etiqueta `<html>`.

Tailwind hace el resto automáticamente con el prefijo `dark:`:

```css
.app-layout {
    @apply bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100;
}
```

---

## 6. Despliegue Profesional

Para publicar en GitHub Pages, usamos el paquete `gh-pages`.

1.  **Instalar**: `npm install gh-pages --save-dev`
2.  **Configurar `package.json`**:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
3.  **Ejecutar**: `npm run deploy`

Esto crea una rama `gh-pages` con el contenido de la carpeta `dist` (la versión optimizada de tu app).

---

## Conclusión

Has transformado un proyecto funcional pero desordenado en una aplicación **profesional, escalable y mantenible**.

-   Tus estilos están organizados.
-   Tus componentes son limpios.
-   Tu arquitectura está documentada.

¡Estás listo para el siguiente nivel! 🚀
