import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === "build" ? "/static/frontend/" : "/",
  build: {
    outDir: "../backend/frontend_dist/frontend",
    emptyOutDir: true,
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
    proxy: {
      "/api": "http://127.0.0.1:8000",
    },
  },
}));
