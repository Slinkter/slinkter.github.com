# 🐱 CatCloud — React 19 Media Gallery & Cloud Favorites (`@portfolio/cat-gallery`)

Galería multimedia conectada a TheCatAPI e integrada en `/projects/cat-gallery/`. Construida con **React 19**, **Vite 7**, **Redux Toolkit**, **Axios REST**, **Zod** y **Tailwind CSS v4**.

## ✨ Características Clave
- **Exploración y Favoritos en la Nube**: Sincronización de favoritos con TheCatAPI mediante thunks asíncronos y validación Zod.
- **Personalización Dinámica**: Selector en tiempo real de temas visuales y tipografías persistidos con claves centralizadas.
- **Arquitectura FSD con Facade Hooks**: Desacoplamiento total entre componentes de UI y el store de Redux.

## 🚀 Desarrollo
```bash
pnpm --filter @portfolio/cat-gallery dev
pnpm --filter @portfolio/cat-gallery build
```
