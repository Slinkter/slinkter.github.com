import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "@/features/pokemon";
import { searchReducer } from "@/features/search";
import { favoritesReducer } from "@/features/favorites";
import { themeReducer } from "@/features/theme";
import { default as reduxLogger } from "redux-logger";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    search: searchReducer,
    favorites: favoritesReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: false,
    });
    if (!import.meta.env.PROD) {
      return middleware.concat(reduxLogger);
    }
    return middleware;
  },
});

export default store;
