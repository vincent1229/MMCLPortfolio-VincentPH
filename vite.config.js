import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 5173,
    },
    allowedHosts:
      "2349cfab-389b-4af8-bb36-b56d10b9c576-00-2oqm0hxuwsgio.worf.replit.dev",
  },
  css: {
    postcss: true,
  },
});
