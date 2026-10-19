# 🏢 WorkspacePro — Enterprise User & Content CRM (`@portfolio/workspace-crm`)

Sistema CRM empresarial que consolida directorio interactivo de usuarios, publicaciones y telemetría climática en tiempo real (`/projects/workspace-crm/`). Construido con **React 18**, **Redux Toolkit**, **SWR**, **Zod** y **Vitest**.

## ✨ Características Clave
- **Directorio Filtrable en Tiempo Real**: Búsqueda instantánea por ID, nombre, usuario o correo electrónico.
- **Perfil Corporativo & Publicaciones**: Consulta de ficha completa y feed de artículos por usuario sin duplicación de peticiones.
- **Widget de Clima Corporativo (`<WeatherBadge />`)**: Telemetría meteorológica integrada en la cabecera con caché SWR.
- **Suite de Pruebas**: 47 tests unitarios y de integración en Vitest + Testing Library.

## 🚀 Desarrollo
```bash
pnpm --filter @portfolio/workspace-crm dev
pnpm --filter @portfolio/workspace-crm test
```
