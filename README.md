# Portafolio Profesional - Ingeniería de Software & Frontend Architecture

> **Plataforma web de alto rendimiento diseñada bajo principios de arquitectura limpia, accesibilidad universal y un flujo de trabajo iterativo potenciado por auditorías de IA.**

Este proyecto no es solo una colección de trabajos; es una demostración técnica de capacidad de ingeniería. Implementa una arquitectura modular escalable, un sistema de diseño atómico basado en **Tailwind CSS** y optimizaciones de rendimiento orientadas a métricas Core Web Vitals.

---

## 🚀 Stack Tecnológico & Herramientas

Arquitectura seleccionada para garantizar mantenibilidad a largo plazo y rendimiento excepcional:

- **Core**: [React 18](https://reactjs.org/) (Gestión de estado eficiente, Custom Hooks, Lazy Loading).
- **Build System**: [Vite](https://vitejs.dev/) (Entorno de desarrollo de última generación).
- **Styling Engine**: [Tailwind CSS 3.4](https://tailwindcss.com/) (Utility-first con abstracciones semánticas BEM).
- **Ecosistema**:
  - `react-icons` para iconografía optimizada.
  - `gh-pages` para despliegue continuo (CI/CD).
- **Calidad de Código**:
  - ESLint & Prettier para estandarización.
  - Auditorías automatizadas de IA para detección de deuda técnica.

---

## 🏗 Filosofía de Ingeniería

### 1. Human-in-Command, AI-as-Auditor

A diferencia del desarrollo asistido convencional, este proyecto utiliza un flujo donde la IA actúa como **auditor de calidad** y no como generador primario.

- **Fase 1**: Desarrollo y arquitectura por el ingeniero (Luis Jhonata Cueva R.).
- **Fase 2**: Diagnóstico profundo mediante agentes de IA para identificar cuellos de botella y mejoras de UX.
- **Fase 3**: Refactorización estratégica basada en hallazgos.

### 2. Clean Architecture en Frontend

El código está organizado para desacoplar la lógica de negocio de la interfaz de usuario:

```text
src/
├── components/         # Capa de Presentación
│   ├── ui/             # Átomos y Moléculas (Botones, Inputs)
│   ├── layout/         # Organismos Estructurales (Navbar, Footer)
│   └── ...             # Componentes de Negocio (Hero, Projects)
├── data/               # Capa de Datos (Data Sources estáticos)
├── hooks/              # Lógica de Aplicación (Use Cases)
├── context/            # Estado Global (Theme)
└── styles/             # Sistema de Diseño y Tokens
```

### 3. Rendimiento como Feature

- **Code Splitting**: Uso de `React.lazy` y `Suspense` para carga diferida de módulos pesados.
- **Animaciones Nativas**: CSS transitions aceleradas por GPU para mantener 60fps constantes.
- **Lighthouse Score**: Objetivo constante de >95 en Performance, Accessibility y SEO.

---

## 🛠 Instalación Local

Requisitos: Node.js v18+ y pnpm.

1.  **Clonar repositorio**

    ```bash
    git clone https://github.com/Slinkter/slinkter.github.com.git
    cd slinkter.github.com
    ```

2.  **Instalar dependencias**

    ```bash
    pnpm install
    ```

3.  **Iniciar entorno de desarrollo**

    ```bash
    pnpm run dev
    ```

4.  **Build de Producción**
    ```bash
    pnpm run build
    ```

---

## 📚 Documentación Técnica Extendida

El proyecto cuenta con documentación detallada en la carpeta `src/docs` para revisión de arquitectura y decisiones de diseño:

- 📂 **[Guía Técnica & Arquitectura](src/docs/TECHNICAL.md)**: Patrones de diseño y decisiones estructurales.
- 📂 **[Historial de Cambios (Changelog)](src/docs/CHANGELOG.md)**: Registro de evoluciones y versiones.
- 📂 **[Diagnóstico Técnico 2025](src/docs/DIAGNOSTICO_COMPLETO_2025.md)**: Reporte de la última gran auditoría de calidad.

---

## 🤝 Contribución y Código de Conducta

Este es un proyecto personal open-source. Las sugerencias de mejora (Issues) y Pull Requests son bienvenidos bajo el estándar de **Conventional Commits**.

1.  Fork del repositorio.
2.  Feature Branch: `git checkout -b feature/mejora-rendimiento`.
3.  Commit: `git commit -m "perf: optimizar carga de imágenes"`.
4.  Push & PR.

---

**© 2026 Luis Jhonata Cueva R.**
_Ingeniero de Sistemas & Frontend Architect. Construyendo la web del futuro con precisión y ética._
