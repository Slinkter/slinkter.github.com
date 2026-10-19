import { useContext } from 'react';
import { GlobalContext } from '@/entities/recipe/context/RecipeContext';
import RecipeCard from '@/entities/recipe/ui/RecipeCard/RecipeCard';

const QUICK_CATEGORIES = ['pizza', 'pasta', 'salad', 'chicken', 'beef', 'cake'];

const HomePage = () => {
  const { recipeList, loading, error, searchParam, setSearchParam, handleSearchSubmit } =
    useContext(GlobalContext);

  const handleQuickCategory = category => {
    setSearchParam(category);
    handleSearchSubmit(category, false);
  };

  if (loading) return <div className="loading-spinner"></div>;

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
        {QUICK_CATEGORIES.map(category => (
          <button
            key={category}
            type="button"
            onClick={() => handleQuickCategory(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors duration-200 ${
              searchParam?.toLowerCase() === category
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-secondary hover:bg-secondary hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="recipe-grid animate-fade-in">
        {recipeList && recipeList.length > 0 ? (
          recipeList.map(item => <RecipeCard key={item.recipe_id} item={item} />)
        ) : (
          <div className="col-span-full">
            <div className="info-message">
              <p>
                {searchParam
                  ? `No recipes found for "${searchParam}"`
                  : 'Nothing to show. Please search for a recipe.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
