import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Helper to serve and transform HTML
  const serveHtml = async (req: any, res: any, filePath: string) => {
    try {
      const fullPath = path.resolve(__dirname, filePath);
      if (process.env.NODE_ENV === "production") {
        res.sendFile(path.resolve(__dirname, "dist", filePath));
      } else {
        let html = await fs.readFile(fullPath, "utf-8");
        html = await vite.transformIndexHtml(req.url, html);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      }
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  };

  app.get("/", (req, res) => res.redirect("/home"));
  app.get("/home", (req, res) => serveHtml(req, res, "home.html"));
  app.get("/about", (req, res) => serveHtml(req, res, "about.html"));

  let vite;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  }

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "dist", "home.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
