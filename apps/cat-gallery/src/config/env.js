/**
 * @file Application Environment Configuration.
 * @description Centralizes environment variables with safe defaults for production and demo environments.
 */

const DEFAULT_BASE_URL = "https://api.thecatapi.com/v1";

/**
 * Global configuration object for the application.
 * @property {object} api - API specific configurations.
 * @property {string} api.baseUrl - The base URL for the API.
 * @property {string} api.apiKey - The authentication key for the API (optional in public demo mode).
 */
export const config = {
  api: {
    baseUrl: import.meta.env.VITE_BASE_URL || DEFAULT_BASE_URL,
    apiKey: import.meta.env.VITE_API_KEY || "",
  },
};
