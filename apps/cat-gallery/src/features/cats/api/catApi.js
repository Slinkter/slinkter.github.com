/**
 * @file Infrastructure layer: TheCatAPI Client.
 * @description Low-level HTTP client for interacting with the external API, with localStorage fallback for favourites in demo mode.
 */

import axios from "axios";
import { config } from "@config/env";
import { logApi } from "@shared/utils/appLogger";
import { API_TIMEOUT, DEFAULT_CAT_LIMIT } from "@config/apiConstants";

const LOCAL_FAVS_KEY = "cat_gallery_demo_favourites";

const getLocalFavourites = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_FAVS_KEY) || "[]");
  } catch {
    return [];
  }
};

const setLocalFavourites = (favs) => {
  try {
    localStorage.setItem(LOCAL_FAVS_KEY, JSON.stringify(favs));
  } catch {
    // ignore storage errors
  }
};

const headers = config.api.apiKey ? { "x-api-key": config.api.apiKey } : {};

const api = axios.create({
  baseURL: config.api.baseUrl,
  headers,
  timeout: API_TIMEOUT,
});

/**
 * @namespace
 */
export const catApiService = {
  fetchImages: async (limit = DEFAULT_CAT_LIMIT) => {
    logApi("API: GET /images/search");
    const { data } = await api.get("/images/search", { params: { limit } });
    return data;
  },

  fetchFavourites: async () => {
    logApi("API: GET /favourites");
    if (!config.api.apiKey) {
      return getLocalFavourites();
    }
    const { data } = await api.get("/favourites");
    return data;
  },

  postFavourite: async (image_id) => {
    logApi("API: POST /favourites");
    if (!config.api.apiKey) {
      const favs = getLocalFavourites();
      const newFavId = Date.now();
      favs.push({
        id: newFavId,
        image_id,
        image: {
          id: image_id,
          url: `https://cdn2.thecatapi.com/images/${image_id}.jpg`,
        },
      });
      setLocalFavourites(favs);
      return { id: newFavId };
    }
    const { data } = await api.post("/favourites", { image_id });
    return data;
  },

  deleteFavourite: async (favouriteId) => {
    logApi("API: DELETE /favourites");
    if (!config.api.apiKey) {
      const favs = getLocalFavourites().filter((f) => f.id !== favouriteId);
      setLocalFavourites(favs);
      return { message: "SUCCESS" };
    }
    const { data } = await api.delete(`/favourites/${favouriteId}`);
    return data;
  },
};
