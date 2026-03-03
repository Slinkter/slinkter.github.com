# GEMINI.md - Contexto del Proyecto

## Resumen del Proyecto
Este es el portafolio profesional de **Luis Jhonata Cueva R. (LJCR)**, un Ingeniero de Sistemas y Arquitecto Frontend. El proyecto es una aplicación web de alto rendimiento (SPA) construida con **React** y **Vite**, utilizando una arquitectura **Feature-Sliced Design (FSD)** para mantener la escalabilidad y mantenibilidad.

### Tecnologías Principales
- **Frontend:** React 18, Vite 5, Tailwind CSS 3.
- **Animaciones:** Motion (framer-motion) con soporte para `prefers-reduced-motion`.
- **Iconografía:** React Icons.
- **Backend (Serverless):** Firebase Cloud Functions (Node.js) para el procesamiento de formularios de contacto y envío de correos.
- **Servicios Externos:** Resend API (envío de emails), Firebase Firestore (almacenamiento de mensajes).
- **Despliegue:** GitHub Pages (frontend) y Firebase (backend).

## Guía de Inicio Rápido

### Requisitos
- Node.js v18 o superior.
- pnpm (recomendado) o npm.

### Comandos Clave
| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo con HMR. |
| `pnpm build` | Genera el build de producción en la carpeta `/dist`. |
| `pnpm lint` | Ejecuta ESLint para análisis estático. |
| `pnpm preview` | Previsualiza el build de producción localmente. |
| `pnpm deploy` | Realiza el build y despliega a GitHub Pages. |

## Arquitectura (Feature-Sliced Design)
El proyecto sigue la metodología FSD, organizada en las siguientes capas dentro de `src/`:

- **app/**: Configuración global, proveedores (ThemeProvider) y estilos globales (`index.css`).
- **components/**: Componentes genéricos y de layout (`Section`, `Navbar`, `Hero`).
- **features/**: Lógica de negocio dividida en dominios funcionales:
  - `contact`: Gestión del formulario, servicios de Firebase y rastreador de mensajes.
  - `projects`: Visualización de trabajos, apps Android y proyectos web.
  - `skills`: Grid de habilidades técnicas.
- **hooks/**: Custom hooks globales (`useTheme`, `useSmoothScroll`, `useReducedMotion`).
- **lib/**: Utilidades compartidas (`utils.js` con la función `cn`).

## Convenciones de Desarrollo

### Estilos y UI
- **Pure Tailwind CSS**: Se prefiere el uso de utilidades de Tailwind directamente en el atributo `className`. Aunque el README menciona BEM, los componentes actuales (`Section`, `WorkCard`, `ContactForm`) utilizan "Pure Tailwind" sin abstracciones BEM.
- **Composición de Clases**: Usar siempre la utilidad `cn()` de `@/lib/utils` para combinar clases condicionales de Tailwind.
- **Responsive Design**: Estrategia mobile-first.
- **Accesibilidad**: Mantener soporte para `prefers-reduced-motion` mediante el hook `useReducedMotion` y asegurar atributos `aria-*` adecuados.

### Componentes
- **Memoización**: Usar `React.memo` en componentes costosos o "dumb" components (ej. `ContactForm`) para optimizar re-renders.
- **Lazy Loading**: Las secciones pesadas (Features) se cargan dinámicamente usando `React.lazy` y `Suspense` en `App.jsx`.
- **Prop-Types**: Todos los componentes deben tener validación de props mediante `prop-types`.

### Backend & API
- La comunicación con el backend se realiza a través de `contactService.js` apuntando a Firebase Functions.
- Las funciones de Firebase residen en la carpeta `/functions` y requieren la configuración de secretos (como `RESEND_API_KEY`).

## Estructura de Archivos Clave
- `src/App.jsx`: Orquestador principal de la SPA con lazy loading.
- `src/index.css`: Definición de variables de Tailwind, animaciones de skeletons y estilos base.
- `src/lib/utils.js`: Contiene la utilidad `cn` (clsx + tailwind-merge).
- `vite.config.js`: Configuración de alias `@/` para imports limpios.
- `functions/index.js`: Punto de entrada para las Cloud Functions de Firebase.
