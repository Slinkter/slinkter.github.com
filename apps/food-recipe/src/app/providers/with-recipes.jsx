/**
 * Recipe Context Provider - Composition Layer
 *
 * @component
 * @param {object} props - Props del componente
 * @param {React.ReactNode} props.children - Componentes hijos que consumirán el contexto
 * @returns {JSX.Element} Provider con contexto global de recetas
 */

import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '@/entities/recipe/context/RecipeContext';
import { useFavorites } from '@/features/toggle-favorite/useFavorites';
import { useSearch } from '@/features/search-recipes/useSearch';

const RecipeProvider = ({ children }) => {
  // Feature 1: Gestión de favoritos (independiente)
  const { favoritesList, handleAddToFavorite } = useFavorites();

  // Feature 2: Gestión de búsqueda (independiente)
  const {
    searchParam,
    loading,
    error,
    recipeList,
    suggestions,
    showSuggestions,
    setSearchParam,
    setShowSuggestions,
    handleSubmit,
    handleSearchSubmit,
    handleSearch,
  } = useSearch();

  const contextValue = useMemo(
    () => ({
      // Search feature
      searchParam,
      loading,
      error,
      recipeList,
      suggestions,
      showSuggestions,
      setSearchParam,
      setShowSuggestions,
      handleSubmit,
      handleSearchSubmit,
      handleSearch,
      // Favorites feature
      favoritesList,
      handleAddToFavorite,
    }),
    [
      searchParam,
      loading,
      error,
      recipeList,
      suggestions,
      showSuggestions,
      setSearchParam,
      setShowSuggestions,
      handleSubmit,
      handleSearchSubmit,
      handleSearch,
      favoritesList,
      handleAddToFavorite,
    ]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipeProvider;
