# Portafolio Profesional - React + Tailwind CSS

> **Una aplicación web moderna, responsive y optimizada, construida con las mejores prácticas de desarrollo Frontend en 2025.**

Este proyecto es un portafolio profesional diseñado para mostrar habilidades, experiencia y proyectos de desarrollo de software. Implementa una arquitectura limpia, modular y un sistema de diseño basado en **BEM** (Block Element Modifier) sobre **Tailwind CSS**.

---

## 🚀 Tecnologías Principales

El proyecto utiliza un stack tecnológico robusto y moderno:

-   **Core**: [React 18](https://reactjs.org/) (Hooks, Context API).
-   **Build Tool**: [Vite](https://vitejs.dev/) (Rápido HMR y compilación optimizada).
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/) + Metodología **BEM**.
-   **Iconografía**: [React Icons](https://react-icons.github.io/react-icons/) (Lucide, FontAwesome).
-   **Animaciones**: CSS Transitions nativas para máximo rendimiento (60fps).
-   **Deploy**: GitHub Pages (Automatizado con `gh-pages`).

---

## 🏗 Arquitectura del Proyecto

El código sigue una estructura organizada para facilitar la escalabilidad y el mantenimiento:

```text
src/
├── app/                    # (Futuro) Configuraciones globales
├── assets/                 # Imágenes y recursos estáticos
├── components/             # Biblioteca de componentes UI
│   ├── ui/                 # Componentes puros (Botones, Inputs)
│   ├── layout/             # Componentes estructurales (Navbar, Footer)
│   ├── Contact.jsx         # Sección de Contacto (BEM)
│   ├── Hero.jsx            # Sección Principal
│   ├── Navbar.jsx          # Barra de navegación responsive
│   ├── ProjectCard.jsx     # Tarjeta de proyecto simple
│   ├── Section.jsx         # Wrapper de sección reutilizable
│   ├── Skills.jsx          # Grid de habilidades (BEM)
│   └── WorkCard.jsx        # Tarjeta de proyecto detallada (BEM)
├── context/                # Estado global (ThemeContext)
├── data/                   # Datos estáticos (separados de la lógica)
│   ├── projectApps.js      # Datos de aplicaciones móviles
│   ├── projectBasics.js    # Datos de proyectos web
│   ├── projectWorks.js     # Datos de experiencia laboral
│   └── skills.js           # Lista de habilidades técnicas
├── hooks/                  # Custom Hooks (useTheme)
├── index.css               # Design System (Tokens, BEM Classes, @apply)
└── main.jsx                # Punto de entrada
```

### 🎨 Estrategia de Estilos (Clean CSS)

Hemos migrado de "Utility-First Soup" a una arquitectura **semántica y mantenible** utilizando BEM junto con la directiva `@apply` de Tailwind.

**Ventajas:**

1.  **HTML Limpio**: `className="work-card__content"` vs `className="p-8 flex flex-col justify-center flex-grow..."`.
2.  **Reutilización**: Los estilos están centralizados en `index.css`.
3.  **Mantenibilidad**: Cambiar el radio de los bordes o los colores de las sombras se hace en un solo lugar.

**Ejemplo de Componente (WorkCard):**

```jsx
// src/components/WorkCard.jsx
<article className="work-card">
    <div className="work-card__header">
        <h3 className="work-card__title">{name}</h3>
    </div>
    {/* ... */}
</article>
```

```css
/* src/index.css */
.work-card {
    @apply bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300;
}
.work-card__title {
    @apply text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight;
}
```

---

## 🛠 Instalación y Ejecución

Sigue estos pasos para levantar el proyecto localmente:

### Prerrequisitos

-   Node.js (v16 o superior)
-   pnpm (recomendado), yarn o npm

### Pasos

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/Slinkter/slinkter.github.com.git
    cd slinkter.github.com
    ```

2.  **Instalar dependencias:**

    ```bash
    pnpm install
    ```

3.  **Iniciar servidor de desarrollo:**

    ```bash
    pnpm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

4.  **Construir para producción:**

    ```bash
    pnpm run build
    ```

### 🚀 Guía de Despliegue

Para actualizar los cambios en producción, utiliza los siguientes comandos según lo que necesites desplegar:

**1. Actualizar Frontend (GitHub Pages / Hosting)**

Realiza el build optimizado y lo despliega automáticamente:

```bash
pnpm run deploy
```

> **Nota:** Si prefieres hacerlo manualmente, primero ejecuta `pnpm run build` y luego el comando de deploy de tu hosting (ej. `firebase deploy --only hosting`).

**2. Actualizar Backend (Firebase Cloud Functions)**

Sube solo las funciones backend (ajustes de memoria, lógica nueva):

```bash
firebase deploy --only functions
```

**3. Actualizar Todo (Full Deploy)**

Para desplegar tanto el sitio estático como las funciones backend a la vez:

```bash
pnpm run build && firebase deploy
```

---

## ✨ Características Implementadas

### 1. Modo Oscuro / Claro 🌗

Implementado nativamente con Tailwind CSS y persistencia en `localStorage`. El hook `useTheme` detecta la preferencia del sistema o la selección del usuario.

### 2. Diseño Totalmente Responsive 📱

-   **Mobile-First**: Diseñado pensando en móviles primero.
-   **Grid Layouts**: Uso de CSS Grid para galerías de proyectos y habilidades, adaptándose automáticamente de 1 a 6 columnas según el viewport.
-   **Imágenes Adaptables**: Contenedores de imágenes con relaciones de aspecto controladas.

### 3. Accesibilidad y UX ♿

-   Etiquetas semánticas HTML5 (`<section>`, `<article>`, `<nav>`, `<footer>`).
-   Uso de `aria-label` en botones de iconos.
-   Transiciones suaves (`transition-all`, `ease-in-out`) para evitar cambios bruscos de estado.
-   Feedback visual en `:hover` y `:focus`.

---

## 📝 Roadmap y Mejoras Futuras

-   [ ] **Internacionalización (i18n)**: Implementar `react-i18next` para soporte multi-idioma.
-   [ ] **Unit Testing**: Añadir tests con Vitest y React Testing Library.
-   [ ] **Lazy Loading**: Implementar `React.lazy` y `Suspense` para carga diferida de secciones pesadas.
-   [ ] **Animaciones Avanzadas**: Integrar `Framer Motion` para animaciones de entrada (scroll reveal).

---

## 📚 Documentación Detallada

Para profundizar en la arquitectura, ver el historial de cambios o seguir guías paso a paso, consulta la carpeta `/docs`:

-   **[Documentación Técnica (Arquitectura Serverless)](docs/TECHNICAL.md)**: Detalles sobre el patrón BFF, Seguridad y Diagramas de Flujo.
-   **[Historial de Cambios (Changelog)](docs/CHANGELOG.md)**: Registro de todas las mejoras y nuevas funcionalidades por versión.
-   **[Tutorial de Implementación](docs/FULL_TUTORIAL.md)**: Guía completa paso a paso de cómo se construyó el proyecto.

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un "Issue" para discutir cambios mayores antes de enviar un "Pull Request".

1.  Haz un Fork del proyecto.
2.  Crea tu rama de funcionalidad (`git checkout -b feature/AmazingFeature`).
3.  Haz Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Haz Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

---

**© 2025 Luis Jhonatan Cueva R.** | Construido con pasión y código limpio.
