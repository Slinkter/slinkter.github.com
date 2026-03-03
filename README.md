# 🚀 Portafolio Profesional — Luis Jhonata Cueva R.

> **Frontend Engineer & React Architect** — Una plataforma de alto rendimiento diseñada bajo principios de ingeniería moderna: **Feature-Sliced Design (FSD)**, **Accesibilidad Proactiva** y **Arquitectura Serverless**.

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://slinkter.github.io)

---

## 🏗️ Arquitectura de Software: Feature-Sliced Design (FSD)

A diferencia de las arquitecturas planas por "tipo de archivo", este proyecto implementa **FSD** para resolver el acoplamiento y facilitar la escalabilidad.

### Estructura de Capas (`src/`)
```text
├── app/          # Capa de Configuración: Providers (Theme), estilos globales.
├── components/   # Capa Estructural: Componentes transversales sin lógica de negocio.
├── features/     # Capa de Dominio: Lógica de negocio (Contact, Projects, Skills).
├── hooks/        # Capa de Comportamiento: Abstracciones de lógica reutilizable.
└── lib/          # Capa de Utilidades: Configuraciones de infraestructura (API, Utils).
```

- **Por qué FSD?**: Permite que cada "Feature" (ej. el formulario de contacto) sea autocontenido. Si el formulario cambia, no afecta a la visualización de proyectos.

---

## 🛠️ Stack Tecnológico: Racionalidad e Implementación

### 1. Animaciones: `motion` (Framer Motion)
- **Por qué**: Necesitábamos animaciones fluidas que no comprometieran el hilo principal de renderizado y que respetaran las preferencias del sistema.
- **Implementación**:
  - **Efecto Stagger**: Implementado en `<Hero />` mediante `variants` para que los elementos aparezcan en cascada (`staggerChildren`).
  - **Viewport Detection**: Usamos `whileInView` en las tarjetas de proyecto para activar animaciones solo cuando el usuario hace scroll hacia ellas, optimizando el uso de CPU.

### 2. Estilado: `Tailwind CSS` + `cn()` Utility
- **Por qué**: Tailwind elimina la necesidad de mantener archivos CSS gigantes. Sin embargo, para manejar clases condicionales sin conflictos de especificidad, implementamos la utilidad `cn`.
- **Implementación**:
  - **Función `cn` (`lib/utils.js`)**: Combina `clsx` (lógica condicional) con `tailwind-merge` (resolución de conflictos).
  - *Ejemplo*: `className={cn("base-style", isActive && "active-style")}`.

### 3. Backend: `Firebase Cloud Functions` + `Resend`
- **Por qué**: Queríamos un portafolio estático pero con capacidades dinámicas sin pagar un servidor 24/7.
- **Implementación**:
  - **Serverless**: El contacto se procesa en una función Node.js (`onRequest` v2) que valida los datos y utiliza **Resend** para garantizar una entrega de correo con 99.9% de éxito.
  - **Seguridad**: Las claves de API están protegidas en **Google Cloud Secrets**, nunca expuestas en el cliente.

### 4. Rendimiento: `React.lazy` & `Suspense`
- **Por qué**: Para obtener un **Lighthouse Score** de 90+, el bundle inicial debe ser mínimo.
- **Implementación**:
  - Las features pesadas (`Contact`, `Skills`) se cargan mediante *Dynamic Imports*. Mientras se cargan, mostramos **Skeleton Screens** personalizados para evitar saltos visuales (Layout Shift).

---

## 🪝 Hooks de Ingeniería (Lógica Abstraída)

| Hook | Propósito Técnico | Implementación |
| :--- | :--- | :--- |
| `useReducedMotion` | **Accesibilidad** | Detecta si el usuario prefiere menos movimiento en su SO y desactiva las animaciones de `motion` globalmente. |
| `useTheme` | **Persistencia** | Sincroniza el estado del tema (Light/Dark) con `localStorage` y la clase `dark` del documento. |
| `useSmoothScroll` | **UX Nativa** | Implementa scroll suave mediante la API nativa del navegador, actualizando la URL sin recargar la página (`pushState`). |

---

## 🧩 Componentes Clave

- **`<Section />`**: Un "Layout Wrapper" que estandariza los márgenes y los títulos de todas las secciones, asegurando consistencia visual en todo el portafolio.
- **`<WorkCard />`**: Componente polimórfico que adapta su diseño (vertical/horizontal) mediante props, utilizando `tailwind-merge` para inyectar estilos específicos sin romper el diseño base.
- **`<MessageTracker />`**: Interfaz reactiva que consulta el estado de los mensajes enviados en tiempo real desde Firestore.

---

## 🚀 Guía de Desarrollo

### Requisitos
- **pnpm** (Preferido por su velocidad y gestión de espacio en disco).
- Node.js 18+.

### Instalación
```bash
pnpm install
pnpm dev
```

### Build & Deploy
El proyecto utiliza un pipeline de integración continua simple:
1. `pnpm build`: Genera el bundle optimizado.
2. `pnpm deploy`: Utiliza la librería `gh-pages` para publicar automáticamente en el entorno de producción.

---

**© 2026 Luis Jhonata Cueva R.**
_Frontend Engineer & Performance Advocate._
