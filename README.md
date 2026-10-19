# 🚀 Portafolio Profesional & Ecosistema Monorepo — Luis Jhonata Cueva R.

[![CI/CD Pipeline](https://github.com/Slinkter/slinkter.github.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/Slinkter/slinkter.github.com/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-18_%2F_19-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5_%2F_7-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3_%2F_v4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![pnpm Workspace](https://img.shields.io/badge/Monorepo-pnpm_Workspaces-F692FF?style=flat&logo=pnpm)](https://pnpm.io/workspaces)
[![Firebase](https://img.shields.io/badge/Backend-Firebase_Serverless-FFCA28?style=flat&logo=firebase)](https://firebase.google.com)

> **Ingeniero de Sistemas & Arquitecto Frontend** — Plataforma web y **Monorepo de Ingeniería Frontend** diseñado bajo **Feature-Sliced Design (FSD)**, **Clean Architecture**, principios **SOLID/DRY** y accesibilidad **WCAG 2.1 AA**.

---

## 🏛️ Arquitectura del Monorepo

Este repositorio opera como un **Monorepo gestionado con `pnpm workspaces`** que unifica la Single Page Application (SPA) principal del portafolio con **6 aplicaciones de producción independientes** alojadas en `apps/*`. Mediante el orquestador de compilación (`scripts/build-all.mjs`) y el plugin `monorepoProjectsPlugin` en `vite.config.js`, todas las aplicaciones se empaquetan y sirven bajo el mismo dominio en subrutas (`/projects/<slug>/`) tanto en producción como en desarrollo local (`:5173`).

```text
slinkter.github.com/
├── .github/workflows/          # Pipeline CI/CD unificado (Node 22 + pnpm 10 + GitHub Pages)
├── src/                        # Portafolio Raíz (Feature-Sliced Design)
│   ├── app/                    # Configuración global, Providers (Theme) y estilos base
│   ├── components/             # Sistema de Diseño y componentes transversales (UI Kit)
│   ├── features/               # Dominios de negocio (Projects, Skills, Contact + Firebase)
│   ├── hooks/                  # Custom hooks globales (useTheme, useReducedMotion)
│   └── lib/                    # Utilidades e infraestructura compartida
├── apps/                       # 6 Aplicaciones Finalistas Integradas
│   ├── nexcommerce/            # E-Commerce Serverless & Panel Admin (TypeScript + Firebase ACID)
│   ├── gitpulse/               # Explorador de Perfiles y Repositorios GitHub (TanStack Query + MSW)
│   ├── workspace-crm/          # CRM Empresarial de Usuarios, Posts y Clima (Redux Toolkit + SWR)
│   ├── food-recipe/            # Plataforma Culinaria y Checklist de Recetas (React Router + FSD)
│   ├── pokedex/                # Pokédex de Alto Rendimiento con Caché LRU en Memoria
│   └── cat-gallery/            # Galería Multimedia en la Nube con React 19 y Vite 7
├── functions/                  # Backend Serverless (Firebase Cloud Functions + Resend API)
├── scripts/
│   └── build-all.mjs           # Orquestador de build unificado (Raíz + 6 Apps + 404 SPA fallback)
├── vite.config.js              # Configuración Vite raíz + middleware /projects/<slug>/
└── pnpm-workspace.yaml         # Definición del workspace del monorepo
```

---

## 🌟 Catálogo de las 6 Aplicaciones Integradas (`apps/*`)

| Aplicación | Paquete | Stack Tecnológico Principal | Ruta Local / Producción |
| :--- | :--- | :--- | :--- |
| **[NexCommerce](apps/nexcommerce/README.md)** | `@portfolio/nexcommerce` | TypeScript 5.9, React 18, Firebase v12 ACID, TanStack Query, Tailwind v4 | `/projects/nexcommerce/` |
| **[GitPulse](apps/gitpulse/README.md)** | `@portfolio/gitpulse` | React 18, TanStack Query v5, MSW 2, Zod, Motion, Tailwind v4 | `/projects/gitpulse/` |
| **[WorkspacePro CRM](apps/workspace-crm/README.md)** | `@portfolio/workspace-crm` | React 18, Redux Toolkit, SWR Weather Widget, Zod, Vitest | `/projects/workspace-crm/` |
| **[FoodRecipe Pro](apps/food-recipe/README.md)** | `@portfolio/food-recipe` | React 18, React Router v6, Context API, FSD Architecture, Tailwind | `/projects/food-recipe/` |
| **[PokéEngine](apps/pokedex/README.md)** | `@portfolio/pokedex` | React 18, Redux Toolkit, React Router v7, LRU Cache, Motion | `/projects/pokedex/` |
| **[CatCloud](apps/cat-gallery/README.md)** | `@portfolio/cat-gallery` | React 19, Vite 7, Redux Toolkit, Axios REST, Zod, Tailwind v4 | `/projects/cat-gallery/` |

---

## 🛠️ Estándares de Ingeniería & Calidad

- **Feature-Sliced Design (FSD) & Clean Architecture**: Separación estricta entre capas de interfaz, lógica de dominio, adaptadores de datos y clientes HTTP.
- **Validación en Runtime & Seguridad**: Contratos de API validados con **Zod**, cancelación de peticiones en vuelo mediante `AbortSignal` y sanitización contra XSS (`escapeHtml`) en vistas de impresión.
- **Resiliencia Zero-Config (Demo Mode)**: Todas las aplicaciones cuentan con `.env.example` documentado y degradación elegante (mocking / catálogos públicos / `localStorage`) para operar sin fricción en demostraciones públicas.
- **CI/CD Automatizado**: GitHub Actions (`.github/workflows/deploy.yml`) valida el linter y ejecuta `pnpm run build:all` sobre Node.js 22 y pnpm 10, desplegando el artefacto completo a GitHub Pages.

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos
- **Node.js**: v20.19+ o v22+
- **pnpm**: v10+

### Instalación y Ejecución
```bash
pnpm install
pnpm run build:all
pnpm dev
```

### Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm dev` | Inicia el servidor de desarrollo en `:5173` sirviendo tanto el portafolio raíz (`/`) como las 6 sub-aplicaciones (`/projects/<slug>/`). |
| `pnpm build` / `pnpm build:all` | **Build Unificado Monorepo**: Compila el portafolio raíz y las 6 aplicaciones en `/dist` y `/dist/projects/<slug>/` (incluyendo soporte `404.html` para rutas SPA). |
| `pnpm lint` | Ejecuta el análisis estático con ESLint. |
| `pnpm preview` | Sirve localmente la distribución de producción generada en `/dist`. |
| `pnpm deploy` | Publica la distribución unificada en GitHub Pages. |

---

**© 2026 Luis Jhonata Cueva R.**  
*Ingeniero de Sistemas | Senior Frontend & Fullstack Architect*
