import { useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '@/entities/recipe/context/RecipeContext';
import { fetchRecipeDetails } from '@/shared/api/recipes';

const DetailsPage = () => {
  const { id } = useParams();
  const { favoritesList, handleAddToFavorite } = useContext(GlobalContext);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [checkedIngredients, setCheckedIngredients] = useState({});

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(null);
    setCheckedIngredients({});

    fetchRecipeDetails(id)
      .then(recipe => {
        if (!isCancelled) {
          setRecipeDetailsData(recipe);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load recipe details.');
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [id]);

  const ingredientItems = useMemo(() => {
    if (!recipeDetailsData?.ingredients) return [];
    const counts = {};
    return recipeDetailsData.ingredients.map(ingredient => {
      counts[ingredient] = (counts[ingredient] || 0) + 1;
      return {
        id: `${ingredient}-${counts[ingredient]}`,
        label: ingredient,
      };
    });
  }, [recipeDetailsData]);

  const toggleIngredient = itemId => {
    setCheckedIngredients(prev => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  if (loading) return <div className="loading-spinner"></div>;
  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="error-message">{error}</div>
      </div>
    );
  }
  if (!recipeDetailsData) return <div className="info-message">No recipe details found.</div>;

  const isFavorite = favoritesList.some(item => item.recipe_id === recipeDetailsData.recipe_id);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="h-96 lg:sticky top-10">
        <div className="h-full overflow-hidden rounded-xl group shadow-lg">
          <img
            src={recipeDetailsData.image_url}
            alt={recipeDetailsData.title}
            className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-sm text-accent font-medium uppercase tracking-wide">
          {recipeDetailsData.publisher}
        </span>
        <h3 className="font-bold text-3xl text-secondary">{recipeDetailsData.title}</h3>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className={`btn ${isFavorite ? 'bg-primary hover:bg-red-800' : 'hover:bg-primary'}`}
            onClick={() => handleAddToFavorite(recipeDetailsData)}
          >
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
          {recipeDetailsData.source_url && (
            <a
              href={recipeDetailsData.source_url}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Original Source
            </a>
          )}
        </div>
        <div className="mt-2">
          <span className="font-bold text-2xl text-secondary">
            Ingredients ({ingredientItems.length}):
          </span>
          <ul className="flex flex-col gap-2 mt-4">
            {ingredientItems.map(item => {
              const isChecked = Boolean(checkedIngredients[item.id]);
              return (
                <li key={item.id} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleIngredient(item.id)}
                    aria-pressed={isChecked}
                    className={`text-left text-lg transition-colors duration-200 ${
                      isChecked
                        ? 'line-through text-text-muted'
                        : 'text-text-base hover:text-primary'
                    }`}
                  >
                    {isChecked ? '✓ ' : '• '}
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
