/**
 * @typedef {Object} ProjectBasic
 * @property {string} name - The display name of the project
 * @property {string} image - Absolute URL to the project preview image
 * @property {string} link - External URL to the live project or repo
 */

/**
 * @typedef {Object} ProjectWork
 * @property {string} name - Project name
 * @property {string} role - Role held during the project
 * @property {string} description - Summary of achievements and tech used
 * @property {string} image - Preview image URL
 * @property {string} link - Production or demo link
 * @property {string[]} tags - List of main technologies
 */

/** @type {ProjectBasic[]} */
export const projectBasics = [
  {
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
    name: "GitPulse — GitHub Intelligence & Repo Explorer",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api01.png",
    link: "/projects/gitpulse/",
    tags: ["React 18", "TanStack Query v5", "MSW", "Zod", "Tailwind v4"],
  },
  {
    name: "WorkspacePro — Enterprise User & Content CRM",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api02.png",
    link: "/projects/workspace-crm/",
    tags: [
      "React 18",
      "Redux Toolkit",
      "Vitest",
      "Testing Library",
      "Zod",
    ],
  },
  {
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
    name: "PokéEngine — High-Performance Pokédex (LRU Cache)",
    image:
      "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/api07.png",
    link: "/projects/pokedex/",
    tags: [
      "React 18",
      "Redux Toolkit",
      "React Router v7",
      "LRU Cache",
      "Motion",
    ],
  },
  {
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
        image: "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/work01.png",
        link: "https://slinkter.github.io/webCentralDent/",
        tags: ["HTML", "CSS", "JS"],
    },
    {
        name: "ARSI Web",
        role: "Programador Web Junior",
        description:
            "Rediseño integral del portal corporativo y optimización SEO, logrando un incremento del 20% en tráfico orgánico. Documentación de procesos bajo estándares PMI.",
        image: "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/work02.png",
        link: "https://slinkter.github.io/webARSI/",
        tags: ["HTML", "CSS", "JS", "PHP", "SEO"],
    },
    {
        name: "GyA Company",
        role: "Frontend Junior",
        description:
            "Modernización de plataforma utilizando React y Chakra UI. Tras una fase inicial de desarrollo, se aplicó un ciclo de auditoría técnica para optimizar el rendimiento y la accesibilidad, logrando una reducción del 30% en tiempos de carga y un incremento del 15% en conversión.",
        image: "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/work03.png",
        link: "https://gyacompany.com/",
        tags: ["React", "Chakra UI", "SEO"],
    },
];

/** @type {ProjectWork[]} */
export const projectApps = [
    {
        name: "ARSI APP",
        role: "Android Developer",
        description:
            "Plataforma móvil de e-learning 24/7. Facilita la capacitación y certificación de estudiantes en seguridad, protección y prevención de riesgos.",
        image: "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/app01.png",
        link: "https://slinkter.github.io/webARSI/arsiapp.html",
        tags: ["Android", "Java", "SQLite", "Firebase"],
    },
    {
        name: "ARSI Unidades",
        role: "Android Developer",
        description:
            "Aplicación de telemedicina desarrollada durante la pandemia COVID-19. Permite el monitoreo remoto de signos vitales y seguimiento de salud del personal.",
        image: "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/app02.png",
        link: "https://slinkter.github.io/webARSI/arsiunidades.html",
        tags: ["Android", "Java", "Firebase", "Maps API"],
    },
    {
        name: "ARSI UT",
        role: "Lead Developer",
        description:
            "Herramienta integral para el control médico de personal en unidades externas, optimizando el seguimiento de indicadores de salud en campo.",
        image: "https://raw.githubusercontent.com/Slinkter/slinkter.github.com/refs/heads/main/src/assets/works/app03.png",
        link: "https://slinkter.github.io/webARSI/arsiut.html",
        tags: ["Android", "Java", "Firebase", "Charts"],
    },
];
