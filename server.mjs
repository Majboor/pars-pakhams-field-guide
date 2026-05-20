import http from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "dist");
const PORT = Number(process.env.PORT) || 4321;
const HOST = "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".glb": "model/gltf-binary",
  ".gltf": "model/gltf+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".csv": "text/csv; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".zip": "application/zip"
};

if (!existsSync(ROOT)) {
  console.error(`Build not found at ${ROOT}. Run the build first.`);
  process.exit(1);
}

const send = (res, status, body, headers = {}) => {
  res.writeHead(status, headers);
  res.end(body);
};

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    let pathname = decodeURIComponent(url.pathname);

    // Resolve to a file inside ROOT, blocking path traversal.
    let filePath = normalize(join(ROOT, pathname));
    if (!filePath.startsWith(ROOT)) return send(res, 403, "Forbidden");

    const hasFile = existsSync(filePath) && statSync(filePath).isFile();

    // SPA fallback: any route without a real file → index.html (client routing).
    if (!hasFile) filePath = join(ROOT, "index.html");

    const ext = extname(filePath).toLowerCase();
    const type = MIME[ext] || "application/octet-stream";
    const isHashed = /\.[0-9a-f]{8,}\./i.test(filePath);
    const cache = ext === ".html" ? "no-cache" : isHashed ? "public, max-age=31536000, immutable" : "public, max-age=3600";

    send(res, 200, readFileSync(filePath), { "Content-Type": type, "Cache-Control": cache });
  } catch (err) {
    send(res, 500, "Server error: " + err.message);
  }
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is in use. Start with a different port:  PORT=4399 node server.mjs`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, HOST, () => {
  console.log(`PARS / PAKHAMS is live:`);
  console.log(`  Local:   http://localhost:${PORT}/`);
  console.log(`  Network: http://0.0.0.0:${PORT}/`);
});
