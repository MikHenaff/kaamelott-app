import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "kaamelott-app-client.vercel.app/api",
    },
  },
  plugins: [react()],
});
