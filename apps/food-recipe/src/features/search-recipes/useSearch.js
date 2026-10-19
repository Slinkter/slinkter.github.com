import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRecipes } from '@/shared/api/recipes';
import { suggestionList } from '@/shared/constants/suggestions';

const DEFAULT_QUERY = 'pizza';

export const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState(() => {
    try {
      return localStorage.getItem('lastSearch') || DEFAULT_QUERY;
    } catch {
      return DEFAULT_QUERY;
    }
  });
  const [recipeList, setRecipeList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (searchParam) {
        localStorage.setItem('lastSearch', searchParam);
      } else {
        localStorage.removeItem('lastSearch');
      }
    } catch (e) {
      console.warn('Failed to save lastSearch to localStorage', e);
    }
  }, [searchParam]);

  /**
   * Performs an async search and updates recipeList.
   *
   * @param {string} [value] - The search query.
   * @param {boolean} [shouldNavigate=true] - Whether to navigate to home after search.
   */
  const handleSearchSubmit = useCallback(
    async (value, shouldNavigate = true) => {
      const query = (value ?? searchParam).trim();
      if (!query) return;
      setLoading(true);
      setError(null);
      setShowSuggestions(false);
      try {
        const recipes = await fetchRecipes(query);
        setRecipeList(recipes || []);
        if (shouldNavigate) {
          navigate('/');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load recipes. Please try again.');
      } finally {
        setLoading(false);
      }
    },
    [navigate, searchParam]
  );

  // Load initial recipes on mount without forcing navigation away from current route
  useEffect(() => {
    let initialQuery = DEFAULT_QUERY;
    try {
      initialQuery = localStorage.getItem('lastSearch') || DEFAULT_QUERY;
    } catch {
      initialQuery = DEFAULT_QUERY;
    }
    handleSearchSubmit(initialQuery, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Submit handler for the search form.
   *
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      await handleSearchSubmit(searchParam, true);
    },
    [handleSearchSubmit, searchParam]
  );

  /**
   * Quick update of input and suggestions.
   *
   * @param {string} value - The search input value.
   */
  const handleSearch = useCallback(value => {
    setSearchParam(value);
    if (value) {
      const filteredSuggestions = suggestionList.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, []);

  return {
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
  };
};
