import { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '@/entities/recipe/context/RecipeContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {
    searchParam,
    handleSubmit,
    handleSearch,
    handleSearchSubmit,
    suggestions,
    showSuggestions,
    setSearchParam,
    setShowSuggestions,
    favoritesList,
  } = useContext(GlobalContext);

  const navRef = useRef(null);

  function handleSuggestionClick(suggestion) {
    setSearchParam(suggestion);
    setShowSuggestions(false);
    if (handleSearchSubmit) handleSearchSubmit(suggestion, true);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowSuggestions]);

  return (
    <nav
      ref={navRef}
      className="flex flex-col md:flex-row justify-between items-center py-8 container mx-auto gap-5 md:gap-0"
    >
      <h2 className="text-2xl font-semibold">
        <NavLink to={'/'} className="nav-link">
          FoodRecipe
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit} className="w-full md:w-auto">
        <div className="relative">
          <div className="flex w-full">
            <label htmlFor="recipe-search-input" className="sr-only">
              Search recipes
            </label>
            <input
              id="recipe-search-input"
              type="text"
              placeholder="Enter recipe (e.g. pizza, pasta, salad)..."
              className="search-input-left"
              name="search"
              value={searchParam}
              onChange={e => handleSearch(e.target.value)}
            />
            <button type="submit" className="search-btn-right">
              Search
            </button>
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <ul className="suggestions-list w-full">
              {suggestions.map(suggestion => (
                <li key={suggestion}>
                  <button
                    type="button"
                    className="suggestion-item w-full text-left"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      <ul className="flex items-center gap-5">
        <li>
          <NavLink to={'/'} className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/favorites'} className="nav-link flex items-center gap-2">
            <span>Favorites</span>
            {favoritesList && favoritesList.length > 0 && (
              <span className="badge">{favoritesList.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
