# Documentación Técnica del Software

**Proyecto:** Portafolio Profesional  
**Versión:** 2.1.0  
**Fecha:** Diciembre 2025  
**Autor:** Luis Jhonata Cueva R.

---

## 1. Introducción y Propósito

El sistema consiste en una **Single Page Application (SPA)** potenciada con arquitectura **Serverless**. Sirve como portafolio personal y demostración técnica de capacidades Fullstack.

El software prioriza el **rendimiento**, la **seguridad de datos** y la **arquitectura moderna**.

---

## 2. Especificaciones Técnicas

### 2.1 Stack Tecnológico

| Capa                     | Tecnología               | Justificación                                                                        |
| :----------------------- | :----------------------- | :----------------------------------------------------------------------------------- |
| **Frontend**             | React 18 + Vite          | Ecosistema maduro y bundle optimizado.                                               |
| **Backend (Serverless)** | Firebase Cloud Functions | Lógica de negocio desacoplada y escalabilidad automática sin administrar servidores. |
| **Base de Datos**        | Firestore (NoSQL)        | Almacenamiento flexible y tiempo real para los mensajes de contacto.                 |
| **Email Service**        | Resend API               | Entrega confiable de notificaciones transaccionales.                                 |
| **Estilos**              | Tailwind CSS v3          | Desarrollo rápido mediante utilidades.                                               |
| **Hosting**              | GitHub Pages             | Despliegue del Frontend estático.                                                    |

---

## 3. Arquitectura del Sistema

### 3.1 Estructura Híbrida (BFF Pattern)

Se ha implementado un patrón **Backend For Frontend (BFF)** simplificado utilizando funciones serverless. React no se comunica directamente con la base de datos por razones de seguridad.

### 3.2 Flujo de Datos Seguro (Contacto y Rastreo)

```mermaid
sequenceDiagram
    participant User as Usuario
    participant React as Frontend (React)
    participant API as Cloud Function (BFF)
    participant DB as Firestore
    participant Mail as Resend API

    Note over User, Mail: Flujo de Envío
    User->>React: Llena formulario
    React->>API: POST /sendContactEmail
    API->>Mail: Envía Notificación al Admin
    API->>DB: Guarda Mensaje (con estado 'Recibido')
    API-->>React: Retorna Ticket ID (ej. XYZ-123)
    React-->>User: Muestra Ticket ID

    Note over User, Mail: Flujo de Rastreo
    User->>React: Consulta ID (XYZ-123)
    React->>API: GET /checkMessageStatus?id=XYZ-123
    API->>DB: Busca Documento
    DB-->>API: Retorna Datos Completos (Privados)
    API->>API: Sanitiza Datos (Elimina email/tel)
    API-->>React: Retorna DTO Público {Estado, Fecha, Nombre}
    React-->>User: Muestra Estado
```

### 3.3 Gestión de Estilos (Clean CSS Architecture)

Se ha implementado una capa de abstracción sobre Tailwind CSS utilizando `@apply` en `index.css`. Esto separa la responsabilidad del **Diseño** (CSS) de la **Estructura** (JSX).

**Patrón aplicado:**

-   **JSX**: Solo define estructura y clases semánticas (ej. `work-card`).
-   **CSS**: Define la composición visual (ej. `.work-card { @apply bg-white rounded-xl ... }`).

---

## 4. Componentes Clave

### 4.1 WorkCard (`src/components/WorkCard.jsx`)

Componente polimórfico encargado de renderizar tarjetas de experiencia.

-   **Props**: `vertical` (bool) controla el layout interno.
-   **Lógica**: Delega toda la variación visual a clases CSS modificadoras (`work-card--vertical` vs `work-card--horizontal`), manteniendo el componente libre de lógica condicional en estilos inline.

### 4.2 Section (`src/components/Section.jsx`)

Wrapper estructural que garantiza consistencia en márgenes, paddings y títulos de sección. Implementa el patrón "Composition" mediante `children`.

### 4.3 CustomThemeProvider

Proveedor de contexto que encapsula la lógica de inicialización del tema (lectura de `localStorage` o preferencia del sistema `prefers-color-scheme`) y la mutación del DOM.

---

## 5. Métricas y Calidad

Para asegurar la calidad del software se establecen los siguientes lineamientos:

1.  **Lighthouse Score**: Mantener puntuación > 90 en Performance, Accessibility, Best Practices y SEO.
2.  **Responsive Design**: Verificación visual en breakpoints móviles (sm: 640px), tablet (md: 768px) y desktop (lg: 1024px).
3.  **Code Splitting**: Uso de importaciones dinámicas si el bundle principal excede los 500kb (actualmente gestionado por Vite).

### 5.1 Estrategia de Carga (Lazy Loading)

Se ha implementado `React.lazy` y `Suspense` para dividir el código de la aplicación.

-   **Componentes Diferidos**: `Skills`, `WorkCard`, `ProjectCard`, `Contact`.
-   **Feedback Visual**: Se utilizan componentes "Skeleton" (`SkeletonWorkCard`, `SkeletonContact`, etc.) que imitan la estructura del contenido mientras se carga el javascript necesario, mejorando la Percepción de Velocidad (Perceived Performance).

---

## 6. Riesgos y Mitigaciones

| Riesgo                                 | Impacto | Mitigación                                                                    |
| :------------------------------------- | :------ | :---------------------------------------------------------------------------- |
| **Colisión de clases CSS**             | Medio   | Uso estricto de metodología BEM para nombres de clases.                       |
| **Performance degradada por imágenes** | Alto    | Uso de formato WebP y atributo `loading="lazy"` en todas las etiquetas `img`. |
| **Fallo en despliegue**                | Medio   | Script `deploy` automatizado que ejecuta `build` antes de publicar.           |

---

## 7. Referencia de API (Props)

### WorkCard

```javascript
WorkCard.propTypes = {
    name: string.isRequired, // Título del proyecto
    role: string, // Rol desempeñado
    description: string, // Descripción breve
    image: string.isRequired, // URL de la imagen
    link: string.isRequired, // URL externa
    tags: arrayOf(string), // Tecnologías usadas
    vertical: bool, // Layout vertical u horizontal
};
```
