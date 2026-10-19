import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(rootDir, "..");

const APPS = [
  { slug: "nexcommerce", originalDir: "myprojectapi12" },
  { slug: "gitpulse", originalDir: "myprojectapi01" },
  { slug: "workspace-crm", originalDir: "myprojectapi02" },
  { slug: "food-recipe", originalDir: "myprojectapi09" },
  { slug: "pokedex", originalDir: "myprojectapi07" },
  { slug: "cat-gallery", originalDir: "myprojectapi11" },
];

console.log("==================================================");
console.log("🚀 Starting Monorepo Unified Build Process");
console.log("==================================================");

// 1. Build root portfolio
console.log("\n📦 [1/7] Building root portfolio (slinkter.github.com)...");
execSync("npx vite build", {
  cwd: rootDir,
  stdio: "inherit",
});

const rootDist = path.join(rootDir, "dist");
const projectsDist = path.join(rootDist, "projects");

if (!fs.existsSync(projectsDist)) {
  fs.mkdirSync(projectsDist, { recursive: true });
}

// 2. Build each application
for (let i = 0; i < APPS.length; i++) {
  const { slug, originalDir } = APPS[i];
  const appIndex = i + 2;
  console.log(`\n📦 [${appIndex}/7] Processing ${slug} (from ${originalDir})...`);

  const appDir = path.join(rootDir, "apps", slug);
  if (!fs.existsSync(appDir)) {
    console.error(`❌ Error: App directory not found at ${appDir}`);
    process.exit(1);
  }

  const appNodeModules = path.join(appDir, "node_modules");
  let hasNodeModules = false;
  try {
    hasNodeModules =
      fs.existsSync(appNodeModules) ||
      fs.lstatSync(appNodeModules).isSymbolicLink();
  } catch {
    hasNodeModules = false;
  }

  if (!hasNodeModules) {
    const originalNodeModules = path.join(workspaceRoot, originalDir, "node_modules");
    if (fs.existsSync(originalNodeModules)) {
      console.log(`🔗 Symlinking node_modules from ${originalNodeModules}...`);
      try {
        fs.symlinkSync(originalNodeModules, appNodeModules, "junction");
      } catch (err) {
        console.warn(`⚠️ Symlink creation warning: ${err.message}. Trying standard symlink...`);
        fs.symlinkSync(originalNodeModules, appNodeModules);
      }
    } else {
      console.warn(`⚠️ Original node_modules not found at ${originalNodeModules}`);
    }
  }

  console.log(`🔨 Building ${slug}...`);
  execSync("npx vite build", {
    cwd: appDir,
    stdio: "inherit",
  });

  const appDist = path.join(appDir, "dist");
  const targetDist = path.join(projectsDist, slug);

  if (fs.existsSync(targetDist)) {
    fs.rmSync(targetDist, { recursive: true, force: true });
  }
  fs.mkdirSync(targetDist, { recursive: true });

  if (fs.existsSync(appDist)) {
    console.log(`📋 Copying dist to ${targetDist}...`);
    fs.cpSync(appDist, targetDist, { recursive: true });

    const indexPath = path.join(targetDist, "index.html");
    const notFoundPath = path.join(targetDist, "404.html");
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
      console.log(`📄 Created 404.html fallback for client-side routing in ${slug}`);
    }
  } else {
    console.error(`❌ Error: Dist folder not found for ${slug} at ${appDist}`);
    process.exit(1);
  }
}

console.log("\n==================================================");
console.log("✅ All 6 finalist applications successfully compiled and integrated!");
console.log(`📁 Output directory: ${rootDist}`);
console.log("==================================================\n");
