# Estándares de Código y Procesos

## 📜 Convenciones de Naming

La consistencia en los nombres es crítica para la mantenibilidad del proyecto.

| Tipo | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Componentes** | PascalCase | `ContactSection.jsx`, `hero.jsx` (Incorrecto) -> `Hero.jsx` |
| **Hooks** | camelCase (prefix `use`) | `useContactForm.js` |
| **Servicios** | camelCase | `contactService.js` |
| **Funciones** | camelCase | `handleSubmit`, `formatDate` |
| **Clases CSS** | kebab-case (BEM) | `.contact-form__input` |
| **Constantes** | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT`, `API_URL` |

## 📁 Estructura de Archivos

-   **Colocación:** Los archivos relacionados deben estar juntos (`Co-location`).
-   **Barrel Exports:** Usar `index.js` solo si simplifica significativamente los imports de una feature (Opcional, preferimos explicit imports para mejor Tree Shaking).

## 📝 Documentación (JSDoc)

Todo código público (exportado) debe estar documentado con JSDoc estándar.

### Ejemplo de Componente

```jsx
/**
 * Botón primario reutilizable con estados de carga.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - Texto del botón.
 * @param {Function} props.onClick - Manejador de click.
 * @param {boolean} [props.isLoading=false] - Muestra spinner si es true.
 */
export const Button = ({ label, onClick, isLoading }) => { ... }
```

### Ejemplo de Hook

```javascript
/**
 * Hook para gestionar la suscripción a eventos de teclado.
 *
 * @param {string} key - Tecla a escuchar.
 * @param {Function} callback - Función a ejecutar.
 */
export const useKeyPress = (key, callback) => { ... }
```

## 🚀 Commits (Conventional Commits)

Seguimos la convención de Angular/Conventional Commits:

-   `feat:` Nueva funcionalidad.
-   `fix:` Corrección de bug.
-   `docs:` Cambios en documentación.
-   `style:` Cambios de formato (espacios, puntos y comas).
-   `refactor:` Cambio de código que no arregla bugs ni añade features.
-   `chore:` Tareas de mantenimiento (build, dependencias).

**Ejemplo:** `feat(contact): add captcha support to contact form`
