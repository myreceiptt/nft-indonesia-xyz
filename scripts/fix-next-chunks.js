const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const serverAppDir = path.join(root, ".next", "server", "app");

const replaceInFile = (filePath) => {
  const original = fs.readFileSync(filePath, "utf8");
  const updated = original.replaceAll("%5B", "[").replaceAll("%5D", "]");
  if (updated !== original) {
    fs.writeFileSync(filePath, updated);
  }
};

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (
      entry.isFile() && entry.name === "page_client-reference-manifest.js"
    ) {
      replaceInFile(fullPath);
    }
  }
};

if (fs.existsSync(serverAppDir)) {
  walk(serverAppDir);
} else {
  console.warn("No .next/server/app directory found; skip fix-next-chunks.");
}
