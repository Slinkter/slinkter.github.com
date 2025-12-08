# Tutorial Completo: Reconstruyendo el Portafolio Profesional

Este tutorial te guiará paso a paso para entender cómo se construyó y refactorizó este proyecto, ideal para aprender patrones de diseño en React.

## 1. Configuración Inicial
El proyecto se inició con Vite para un entorno de desarrollo rápido.

```bash
npm create vite@latest mi-portafolio -- --template react
```

## 2. Estructura de Carpetas (Clean Architecture)
A diferencia de un proyecto básico donde todo va en `src`, aquí separamos responsabilidades:

*   **src/data**: Aquí viven tus arrays de información. Si en el futuro conectas una base de datos, solo cambias este archivo o la llamada aquí.
*   **src/components**: Piezas de LEGO. Componentes tontos (dumb components) que solo reciben datos y los muestran.

## 3. El Poder de los Componentes Reutilizables

### Antes (Mala Práctica)
Tenías 3 bloques de código idénticos en `App.jsx`, cambiando solo el título y la variable de datos mapeada. Eso viola el principio DRY.

### Después (Buenas Prácticas)
Creamos `Section.jsx`:

```jsx
const Section = ({ title, bgClass, children }) => (
    <section className={`section ${bgClass}`}>
        <h2 className="section__title">{title}</h2>
        <div className="section__grid">{children}</div>
    </section>
);
```

Ahora en `App.jsx` solo la llamas:

```jsx
<Section title="Mis Proyectos">
   {proyectos.map(...)}
</Section>
```

## 4. Gestión de Estilos: BEM + Tailwind
Para evitar clases kilométricas en tu HTML (`flex flex-col items-center justify-center ...`), usamos la directiva `@apply` de Tailwind en `index.css`.

**Ejemplo:**
En vez de repetir `<div className="shadow-lg rounded-xl bg-white ...">` en cada tarjeta, definimos:

```css
.card {
    @apply bg-white rounded-xl shadow-lg;
}
```

Y usamos `<article className="card">`. Esto hace el código mucho más legible y semántico.

## 5. Hooks Personalizados
Creamos `useTheme` para no tener que importar `useContext` y el Contexto en cada componente.

```javascript
/* src/hooks/useTheme.js */
const useTheme = () => {
    const context = useContext(CustomThemeContext);
    if (!context) throw new Error("Debe usarse dentro de un Provider");
    return context;
}
```

Esto encapsula la lógica y previene errores comunes (usar el contexto fuera del provider).

## 6. Conclusión
Has pasado de un script "spaghetti" a una aplicación modular, escalable y profesional. ¡Felicidades!
