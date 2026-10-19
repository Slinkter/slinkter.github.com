/* global process */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "https://slinkter.github.io",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Warn only when a chunk exceeds 300 KB (gzipped ~100 KB is fine)
    chunkSizeWarningLimit: 400,
    // Enable CSS code-splitting: each async chunk gets its own CSS
    cssCodeSplit: true,
    // Target modern browsers — smaller output, no legacy polyfills
    target: "es2020",
    rollupOptions: {
      output: {
        /**
         * Manual chunk strategy — 4 long-lived cache buckets:
         *  - vendor  : React + ReactDOM  (changes rarely)
         *  - motion  : Framer/Motion     (changes on library updates)
         *  - icons   : react-icons       (large, but static)
         *  - firebase: Firebase SDKs     (loaded only for contact)
         *
         * App code lands in the default chunk and stays tiny.
         */
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/")
          ) {
            return "vendor";
          }
          if (
            id.includes("node_modules/motion") ||
            id.includes("node_modules/framer-motion")
          ) {
            return "motion";
          }
          if (id.includes("node_modules/react-icons")) {
            return "icons";
          }
          if (
            id.includes("node_modules/firebase") ||
            id.includes("node_modules/@firebase")
          ) {
            return "firebase";
          }
        },
        // Deterministic file names for long-term caching
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
