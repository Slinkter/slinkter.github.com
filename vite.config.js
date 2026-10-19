/* global process */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Vite plugin that serves the 6 compiled monorepo sub-applications
 * located in `dist/projects/<slug>/` during both `vite dev` (:5173)
 * and `vite preview`, preventing the root SPA fallback from hijacking
 * `/projects/<slug>/*` routes.
 */
function monorepoProjectsPlugin() {
  const distProjectsDir = path.resolve(__dirname, "dist/projects");
  const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".mjs": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".json": "application/json; charset=utf-8",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  const middleware = (req, res, next) => {
    const rawUrl = req.url || "";
    const urlPath = rawUrl.split("?")[0];
    if (!urlPath.startsWith("/projects/")) return next();

    const parts = urlPath.split("/").filter(Boolean); // ["projects", "<slug>", ...]
    const slug = parts[1];
    if (!slug) return next();

    // Ensure trailing slash on /projects/<slug> so relative assets resolve properly
    if (parts.length === 2 && !urlPath.endsWith("/")) {
      res.writeHead(302, { Location: `${urlPath}/` });
      return res.end();
    }

    const relativeSubPath = parts.slice(2).join("/") || "index.html";
    let targetFile = path.join(distProjectsDir, slug, relativeSubPath);

    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
      targetFile = path.join(targetFile, "index.html");
    }

    // Client-side SPA fallback inside the sub-application
    if (!fs.existsSync(targetFile)) {
      const spaFallback = path.join(distProjectsDir, slug, "index.html");
      if (fs.existsSync(spaFallback)) {
        targetFile = spaFallback;
      } else {
        return next();
      }
    }

    const ext = path.extname(targetFile).toLowerCase();
    res.statusCode = 200;
    res.setHeader("Content-Type", mimeTypes[ext] || "application/octet-stream");
    fs.createReadStream(targetFile).pipe(res);
  };

  return {
    name: "monorepo-subprojects-middleware",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [monorepoProjectsPlugin(), react()],
  base: "/",
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
