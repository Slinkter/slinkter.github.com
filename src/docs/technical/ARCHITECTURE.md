# Arquitectura del Proyecto

## 🏗 Visión General

El proyecto sigue una **Feature-Based Architecture** (Arquitectura Basada en Funcionalidades), diseñada para maximizar la escalabilidad, mantenibilidad y la cohesión del código. A diferencia de las estructuras tradicionales de React que agrupan archivos por tipo técnico (components, hooks, services), esta arquitectura agrupa archivos por **Dominio de Negocio**.

### Diagrama de Directorios

```text
src/
├── app/                  # Configuraciones globales (providers, router, store)
├── components/           # UI Kit y Elementos Compartidos
│   ├── layout/           # Estructuras de página (Navbar, Hero, Footer)
│   └── ui/               # Componentes atómicos genéricos (Button, Input, Section)
├── features/             # Módulos de Funcionalidad (Business Logic)
│   ├── contact/          # Módulo de Contacto y Soporte
│   │   ├── components/   # UI específica de Contacto
│   │   ├── hooks/        # Lógica de estado de Contacto
│   │   └── services/     # Comunicación con API de Contacto
│   └── portfolio/        # Módulo de Proyectos y Experiencia
│       ├── components/   # UI específica de Portafolio
│       └── data/         # Datos estáticos de Portfolio
├── hooks/                # Hooks globales/genéricos (useTheme, useSmoothScroll)
├── docs/                 # Documentación viva del proyecto
└── ...
```

## 🧩 Principios de Diseño

### 1. Separation of Concerns (SoC)
Cada "Feature" es un módulo autocontenido. El módulo `contact` contiene todo lo necesario para funcionar (UI, lógica, servicios). Esto permite que, si en el futuro se desea extraer la funcionalidad de contacto a otro proyecto o micro-frontend, sea una tarea trivial.

### 2. Container / Presentation Pattern
Separamos la lógica de la vista para mejorar la testabilidad y reutilización.
- **Components (Presentation):** "Dumb components". Solo reciben props y emiten eventos. No tienen lógica de negocio compleja ni hacen llamadas a APIs.
- **Hooks / Containers (Logic):** Gestionan el estado, side-effects y llamadas a servicios.

### 3. Clean CSS & BEM
Utilizamos Tailwind CSS con la metodología BEM a través de `@apply` en `index.css`. Esto mantiene el HTML limpio y semántico, evitando la "sopa de clases" de Tailwind en los componentes de React, facilitando la lectura y mantenimiento.

## 🔄 Flujo de Datos

1.  **Componente UI** invoca una acción (ej. `onSubmit`).
2.  **Custom Hook** intercepta la acción, gestiona el estado de carga (`loading`) y llama al **Servicio**.
3.  **Servicio** comunica con la API externa o Backend.
4.  **Hook** recibe la respuesta y actualiza el estado (`success` / `error`).
5.  **Componente UI** re-renderiza para mostrar el feedback al usuario.

## 🛠 Tecnologías Core

-   **Frontend:** React 18 + Vite
-   **Estilos:** Tailwind CSS
-   **Routing:** (Implicit / Scroll-based en SPA actual)
-   **State Management:** React Context (Theme) + Local State (Hooks)
