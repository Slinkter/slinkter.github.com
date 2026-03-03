# 🚀 Portafolio Profesional — Luis Jhonata Cueva R.

> **Frontend Engineer & React Architect** — Una plataforma de alto rendimiento diseñada bajo principios de ingeniería moderna: **Feature-Sliced Design (FSD)**, **Accesibilidad Proactiva** y **Arquitectura Serverless**.

[![React Health](https://img.shields.io/badge/React_Health-100%2F100-brightgreen)](https://www.react.doctor/)
[![Accessibility](https://img.shields.io/badge/A11Y-WCAG_2.1_AA-blue)](https://dequeuniversity.com/rules/axe)
[![Design System](https://img.shields.io/badge/Design_System-Atomic_Semantics-purple)](#-design-system)

---

## 🏗️ Arquitectura de Software: Feature-Sliced Design (FSD)

El proyecto implementa **FSD** para resolver el acoplamiento y facilitar la escalabilidad, organizando la lógica por dominio funcional.

```text
src/
├── app/          # Capa de Configuración: Providers (Theme), estilos globales.
├── components/   # Capa Estructural: Componentes transversales (UI Library).
├── features/     # Capa de Dominio: Lógica de negocio (Contact, Projects, Skills).
├── hooks/        # Capa de Comportamiento: Abstracciones de lógica reutilizable.
└── lib/          # Capa de Infraestructura: Animaciones, API, Utils.
```

---

## 🤖 Ingeniería Potenciada por IA (IA-Driven Engineering)

Este repositorio ha sido auditado y optimizado utilizando un ecosistema de agentes especializados (**Skills**) para garantizar un código de grado producción:

| Estandarización | Skill Aplicada | Impacto Técnico |
| :--- | :--- | :--- |
| **Performance** | `vercel-react-best-practices` | Implementación de `LazyMotion`, Error Boundaries y optimización de LCP. |
| **Diseño UI/UX** | `frontend-design` & `artifact` | Sistema de colores semánticos, Zebra Striping y micro-interacciones. |
| **Calidad de Código** | `react-doctor` | Puntuación de salud **100/100**. Cero fugas de memoria y re-renders óptimos. |
| **Accesibilidad** | `axe-core-a11y` | Cumplimiento **WCAG 2.1 AA**. Semántica de listas, roles ARIA y gestión de foco. |
| **Mantenibilidad** | `dry-cleaner` | Abstracción de componentes atómicos (`Button`, `Input`, `Tag`) y animaciones DRY. |
| **Documentación** | `jsdoc-typescript-docs` | Tipado estático avanzado mediante JSDoc para una experiencia Type-safe. |

---

## 🎨 Design System & Tokens

Implementamos un sistema de **Design Tokens** que garantiza coherencia visual absoluta:

- **Colores Semánticos**: Uso de variables CSS (`--brand-primary`, `--surface-base`) para un modo oscuro profundo y elegante.
- **Componentes Atómicos**: Biblioteca de UI en `src/components/ui/` que unifica el ADN visual de toda la aplicación.
- **Ritmo Visual**: Patrón de *Zebra Striping* en secciones para una progresión de lectura fluida.

---

## 🛠️ Stack Tecnológico

### Core
- **React 18**: Hooks avanzados y carga diferida.
- **Vite 5**: Pipeline de construcción ultrarrápido.
- **Framer Motion**: Animaciones fluidas con soporte para movimiento reducido.

### Backend & Seguridad
- **Firebase Functions**: Procesamiento serverless de formularios.
- **Resend API**: Infraestructura de correo profesional.
- **Error Boundaries**: Resiliencia ante fallos en servicios externos.

---

## 🚀 Guía de Desarrollo

### Instalación
```bash
pnpm install
pnpm dev
```

### Build & Deploy
El proyecto utiliza un pipeline optimizado:
1. `pnpm build`: Genera el bundle minimizado y optimizado.
2. `pnpm deploy`: Despliegue automático a producción.

---

**© 2026 Luis Jhonata Cueva R.**  
_Ingeniero de Sistemas \| Senior Frontend Architect_
