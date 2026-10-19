import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import RecipeProvider from '@/app/providers/with-recipes.jsx';
import App from '@/app/App.jsx';

// Mock the API layer to provide reliable, deterministic responses
vi.mock('@/shared/api/recipes', () => ({
  fetchRecipes: vi.fn().mockResolvedValue([
    {
      recipe_id: '47746',
      publisher: '101 Cookbooks',
      title: 'Best Pizza Dough Ever',
      image_url: 'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
    },
  ]),
  fetchRecipeDetails: vi.fn().mockResolvedValue({
    recipe_id: '47746',
    publisher: '101 Cookbooks',
    title: 'Best Pizza Dough Ever',
    image_url: 'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
    source_url: 'http://www.101cookbooks.com',
    ingredients: ['4 cups flour', '2 tsp yeast'],
  }),
}));

describe('FoodRecipe DOM Mounting and Rendering', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('mounts into document.getElementById("root") matching main.jsx entrypoint', async () => {
    window.history.pushState({}, '', '/projects/food-recipe/');
    const rootContainer = document.createElement('div');
    rootContainer.id = 'root';
    document.body.appendChild(rootContainer);

    render(
      <BrowserRouter basename="/projects/food-recipe/">
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </BrowserRouter>,
      { container: rootContainer }
    );

    // Wait for Suspense to resolve Navbar and HomePage
    expect(await screen.findByText('FoodRecipe')).toBeInTheDocument();
    expect(rootContainer.querySelector('nav')).toBeInTheDocument();

    rootContainer.remove();
  });

  it('renders primary UI layout: Navbar, Search input, and Quick categories', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </MemoryRouter>
    );

    // Navbar branding
    expect(await screen.findByText('FoodRecipe')).toBeInTheDocument();

    // Search input
    const searchInput = screen.getByPlaceholderText(/Enter recipe/i);
    expect(searchInput).toBeInTheDocument();

    // Quick categories
    expect(await screen.findByText('pizza')).toBeInTheDocument();
    expect(screen.getByText('pasta')).toBeInTheDocument();
    expect(screen.getByText('salad')).toBeInTheDocument();
    expect(screen.getByText('chicken')).toBeInTheDocument();

    // Recipe card loaded from initial query
    expect(await screen.findByText('Best Pizza Dough Ever')).toBeInTheDocument();
  });

  it('renders FavoritesPage upon navigating to /favorites', async () => {
    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </MemoryRouter>
    );

    expect(
      await screen.findByText(/Nothing is added in favorites./i)
    ).toBeInTheDocument();
    expect(screen.getByText('FoodRecipe')).toBeInTheDocument();
  });

  it('renders DetailsPage upon navigating to /recipe/:id', async () => {
    render(
      <MemoryRouter initialEntries={['/recipe/47746']}>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </MemoryRouter>
    );

    expect(await screen.findByText('Ingredients (2):')).toBeInTheDocument();
    expect(screen.getByText('• 4 cups flour')).toBeInTheDocument();
    expect(screen.getByText('• 2 tsp yeast')).toBeInTheDocument();
    expect(screen.getByText('Add to favorites')).toBeInTheDocument();
  });

  it('handles search input change and displays suggestions in the DOM', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RecipeProvider>
          <App />
        </RecipeProvider>
      </MemoryRouter>
    );

    const searchInput = await screen.findByPlaceholderText(/Enter recipe/i);
    fireEvent.change(searchInput, { target: { value: 'piz' } });

    expect(searchInput.value).toBe('piz');
    await waitFor(() => {
      const suggestionItem = document.querySelector('.suggestion-item');
      expect(suggestionItem).toBeInTheDocument();
      expect(suggestionItem).toHaveTextContent('pizza');
    });
  });
});
