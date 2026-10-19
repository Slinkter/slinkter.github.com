/**
 * @typedef {Object} ProjectBasic
 * @property {number} id
 * @property {string} name
 * @property {string} image
 * @property {string} link
 * @property {string[]} [tags]
 */

/**
 * @typedef {Object} ProjectHighlight
 * @property {string} title
 * @property {string} detail
 */

/**
 * @typedef {Object} ProjectWork
 * @property {string} name
 * @property {string} role
 * @property {string} description
 * @property {string} image
 * @property {string} [link]
 * @property {string[]} tags
 * @property {boolean} [hidden]
 * @property {{ summary: string, highlights: ProjectHighlight[] }} [details]
 */

/** @type {ProjectBasic[]} */
export const projectBasics = [
  {
    id: 1,
    name: "NexCommerce — Serverless E-Commerce & Admin",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api12.png",
    link: "/projects/nexcommerce/",
    tags: [
      "TypeScript",
      "React 18",
      "Firebase ACID",
      "TanStack Query",
      "Tailwind v4",
    ],
  },
  {
    id: 2,
    name: "GitPulse — GitHub Intelligence & Repo Explorer",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api01.png",
    link: "/projects/gitpulse/",
    tags: ["React 18", "TanStack Query v5", "MSW", "Zod", "Tailwind v4"],
  },
  {
    id: 3,
    name: "WorkspacePro — Enterprise User & Content CRM",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api02.png",
    link: "/projects/workspace-crm/",
    tags: ["React 18", "Redux Toolkit", "Vitest", "Testing Library", "Zod"],
  },
  {
    id: 4,
    name: "FoodRecipe Pro — Culinary Explorer & Checklist",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api09.png",
    link: "/projects/food-recipe/",
    tags: [
      "React 18",
      "React Router v6",
      "Context API",
      "FSD Architecture",
      "Tailwind",
    ],
  },
  {
    id: 5,
    name: "PokéEngine — High-Performance Pokédex (LRU Cache)",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api07.png",
    link: "/projects/pokedex/",
    tags: ["React 18", "Redux Toolkit", "React Router v7", "LRU Cache", "Motion"],
  },
  {
    id: 6,
    name: "CatCloud — React 19 Media Gallery & Cloud Favorites",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api11.png",
    link: "/projects/cat-gallery/",
    tags: ["React 19", "Vite 7", "Redux Toolkit", "Axios REST", "Zod"],
  },
];

/** @type {ProjectWork[]} */
export const projectWorks = [
  {
    name: "Central Dent",
    role: "Web Developer",
    description:
      "Solución web para el sector salud enfocada en la conversión y experiencia del usuario. Implementa integraciones geográficas y canales de comunicación directa para optimizar la gestión de pacientes.",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/work01.png",
    link: "https://slinkter.github.io/webCentralDent/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    name: "ARSI Web",
    role: "Programador Web Junior",
    description:
      "Rediseño integral del portal corporativo y optimización SEO, logrando un incremento del 20% en tráfico orgánico. Documentación de procesos bajo estándares PMI.",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/work02.png",
    link: "https://slinkter.github.io/webARSI/",
    tags: ["HTML", "CSS", "JS", "PHP", "SEO"],
    hidden: true,
  },
  {
    name: "GyA Company",
    role: "Frontend Junior",
    description:
      "Modernización de plataforma utilizando React y Chakra UI. Tras una fase inicial de desarrollo, se aplicó un ciclo de auditoría técnica para optimizar el rendimiento y la accesibilidad, logrando una reducción del 30% en tiempos de carga y un incremento del 15% en conversión.",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/work03.png",
    link: "https://gyacompany.com/",
    tags: ["React", "Chakra UI", "SEO"],
  },
];

/** @type {ProjectWork[]} */
export const projectApps = [
  {
    name: "SafeLearn 24/7 — Plataforma E-Learning SST",
    role: "Android Developer",
    description:
      "Plataforma móvil de capacitación 24/7 para formación y certificación de estudiantes y colaboradores en seguridad ocupacional, protección y prevención de riesgos.",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/app01.png",
    tags: ["Android", "Java", "SQLite", "Firebase"],
    details: {
      summary:
        "Aplicativo móvil nativo de educación continua 24/7 diseñado para capacitar, evaluar y certificar al personal en programas de Seguridad y Salud en el Trabajo (SST) y reducción de riesgos laborales.",
      highlights: [
        {
          title: "Gestión de Seguridad y Salud Ocupacional",
          detail:
            "Módulos interactivos con estrategias y normativas para la gestión integral de seguridad en planta y oficinas.",
        },
        {
          title: "Investigación de Accidentes e Incidentes",
          detail:
            "Metodología práctica para liderar investigaciones, identificar causas básicas y establecer controles preventivos.",
        },
        {
          title: "Seguridad Basada en el Comportamiento",
          detail:
            "Entrenamiento enfocado en reforzar hábitos seguros y reducir accidentes y enfermedades ocupacionales.",
        },
        {
          title: "Disponibilidad 24/7 & Persistencia Local",
          detail:
            "Acceso continuo a evaluaciones y seguimiento de progreso sincronizado con SQLite y Firebase.",
        },
      ],
    },
  },
  {
    name: "BioMonitor — Telemedicina en Unidades",
    role: "Android Developer",
    description:
      "Aplicación móvil de telemedicina para el monitoreo remoto diario de signos vitales, control sintomatológico y generación de reportes PDF para unidades operativas a nivel nacional.",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/app02.png",
    tags: ["Android", "Java", "Firebase", "Maps API"],
    details: {
      summary:
        "Sistema móvil de vigilancia médica desarrollado durante la emergencia sanitaria COVID-19 para controlar en tiempo real los signos vitales y el estado clínico de los colaboradores en distintas sedes operativas.",
      highlights: [
        {
          title: "Registro y Ficha de Colaboradores",
          detail:
            "Alta y actualización de datos personales, teléfonos de emergencia y dirección de cada trabajador por unidad.",
        },
        {
          title: "Control Diario de Signos Vitales",
          detail:
            "Captura estructurada de temperatura corporal, saturación de oxígeno (SpO2), pulso cardíaco y sintomatología.",
        },
        {
          title: "Edición y Trazabilidad en Tiempo Real",
          detail:
            "Sincronización inmediata en Firebase con geolocalización de unidades mediante Google Maps API.",
        },
        {
          title: "Exportación de Reportes PDF",
          detail:
            "Generación automatizada de reportes clínicos filtrados por fecha, horario o trabajador con envío directo por correo.",
        },
      ],
    },
  },
  {
    name: "MedField UT — Triaje & Control en Campo",
    role: "Lead Developer",
    description:
      "Herramienta integral para el triaje clínico y control médico de personal en unidades externas, con registro de pruebas rápidas y tableros de indicadores de salud.",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/app03.png",
    tags: ["Android", "Java", "Firebase", "Charts"],
    details: {
      summary:
        "Solución móvil liderada de principio a fin para la supervisión biométrica y epidemiológica en unidades de trabajo externas, integrando tamizaje rápido y visualización estadística.",
      highlights: [
        {
          title: "Tamizaje y Pruebas Rápidas",
          detail:
            "Registro ágil de resultados de pruebas rápidas e historial clínico en el punto de acceso de cada unidad.",
        },
        {
          title: "Biometría de Campo (SpO2, Pulso y Temp.)",
          detail:
            "Validación de parámetros vitales antes del ingreso a turno con alertas preventivas ante valores fuera de rango.",
        },
        {
          title: "Analítica Visual con Gráficos",
          detail:
            "Tableros estadísticos integrados para monitorear curvas de evolución e indicadores de salud por sede.",
        },
        {
          title: "Arquitectura Multi-Sede en la Nube",
          detail:
            "Sincronización multiusuario en tiempo real sobre Firebase con control de acceso por unidad operativa.",
        },
      ],
    },
  },
];
