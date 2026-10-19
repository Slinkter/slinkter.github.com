# 🔍 GitPulse — GitHub Intelligence & Repo Explorer (`@portfolio/gitpulse`)

Explorador avanzado de perfiles y repositorios públicos de GitHub integrado en el monorepo (`/projects/gitpulse/`). Desarrollado bajo **Feature-Sliced Design (FSD)** con **React 18**, **TanStack Query v5**, **Zod**, **MSW 2** y **Tailwind CSS v4**.

## ✨ Características Clave
- **Búsqueda con Cancelación de Red**: Peticiones gestionadas con `AbortSignal` para cancelar búsquedas en vuelo.
- **Bento Grid & Repositorios Públicos**: Visualización de métricas del desarrollador, organizaciones y listado de repositorios destacados con estrellas, forks y lenguaje.
- **Validación Zod & Mocking MSW**: Mapeo estricto en runtime y soporte para simulación offline con Mock Service Worker.

## 🚀 Desarrollo
```bash
pnpm --filter @portfolio/gitpulse dev
pnpm --filter @portfolio/gitpulse build
```
