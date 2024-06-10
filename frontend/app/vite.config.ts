import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../../backend/app/static",
    emptyOutDir: true,
    sourcemap: true,
  },
  // base: "/static/",
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8000",
    },
  },
});
