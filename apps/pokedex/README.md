# ⚡ PokéEngine — High-Performance Pokédex (`@portfolio/pokedex`)

Pokédex de alto rendimiento integrada en `/projects/pokedex/`, diseñada con **React 18**, **Redux Toolkit**, **React Router v7**, **Motion** y un motor propio de **Caché LRU en memoria**.

## ✨ Características Clave
- **Caché LRU (Least Recently Used)**: Almacenamiento inteligente de detalles y estadísticas reales de Pokémon para navegación instantánea.
- **Memoización de Alta Precisión**: Comparadores `React.memo` optimizados para actualización inmediata de favoritos y filtrado por tipo.
- **Visualización de Estadísticas**: Barras animadas de HP, Ataque, Defensa, Velocidad y habilidades.

## 🚀 Desarrollo
```bash
pnpm --filter @portfolio/pokedex dev
pnpm --filter @portfolio/pokedex build
```
