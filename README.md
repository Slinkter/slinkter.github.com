# Portfolio Profesional - Slinkter

Este proyecto es un portafolio web personal desarrollado con **React**, **Vite** y **TailwindCSS**, diseñado siguiendo principios de **Clean Architecture** y **Atomic Design**.

## 🚀 Tecnologías Principales

- **React 18**: Biblioteca de UI basada en componentes.
- **Vite**: Entorno de desarrollo ultrarrápido.
- **TailwindCSS**: Framework de utilidades para estilos.
- **BEM Methodology**: Convención de nomenclatura integrada vía `@apply` en CSS.
- **Context API**: Manejo de estado global para el tema (Dark/Light Mode).

## 🏗 Arquitectura del Sistema

El proyecto ha sido refactorizado para abandonar una estructura monolítica en favor de una arquitectura basada en características y componentes reutilizables:

```text
src/
├── components/         # Componentes UI reutilizables (ProjectCard, Section)
├── data/               # Fuentes de datos estáticas (Separación de Datos y Vista)
├── hooks/              # Lógica encapsulada (useTheme)
├── pages/              # (Opcional) Vistas principales
├── styles/             # Estilos globales y módulos BEM
└── utils/              # Funciones auxiliares
```

## 📦 Instalación y Ejecución

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/Slinkter/slinkter.github.com.git
    cd slinkter.github.com
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar en desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 🎨 Decisiones de Diseño

- **Extracción de Datos**: La información de los proyectos se movió de `App.jsx` a `src/data/projects.js` para facilitar la gestión de contenido sin tocar la lógica de la vista.
- **Componentes Reutilizables**: Se creó el componente `<Section />` para eliminar la duplicación de código en las secciones de proyectos.
- **Estilos Semánticos (BEM)**: Se limpió el "CSS Soup" de Tailwind en los componentes extrayendo las clases a `index.css` usando la directiva `@apply` y nomenclatura BEM (ej. `.card__header`, `.hero__title`).

## 📈 Roadmap

- [x] Refactorización de Arquitectura
- [x] Implementación de Modo Oscuro con Context
- [ ] Integración con API real (CMS Headless)
- [ ] Pruebas Unitarias con Vitest

---

© 2024 Luis Jhonata Cueva R.
