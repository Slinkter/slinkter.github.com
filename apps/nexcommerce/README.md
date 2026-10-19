# 🛍️ NexCommerce — Serverless E-Commerce & Admin (`@portfolio/nexcommerce`)

Plataforma de comercio electrónico empresarial integrada en el monorepo del portafolio (`/projects/nexcommerce/`). Construida con **React 18**, **TypeScript 5.9**, **Firebase v12 (ACID Transactions)**, **TanStack Query v5** y **Tailwind CSS v4**.

## ✨ Características Clave
- **Catálogo & Carrito Reactivo**: Filtros avanzados por categoría, búsqueda y persistencia.
- **Transacciones ACID en Firestore**: Descuento atómico de stock y generación de órdenes reales.
- **Modo Demo Reclutador (Cliente / Admin)**: Conmutación de rol en vivo en el modal de acceso para auditar el panel administrativo y gestión de inventario.
- **Impresión Segura de Comprobantes**: Generación de tickets con sanitización HTML (`escapeHtml`) contra XSS.

## 🚀 Desarrollo
```bash
pnpm --filter @portfolio/nexcommerce dev
pnpm --filter @portfolio/nexcommerce build
```
