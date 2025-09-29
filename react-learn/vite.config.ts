import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  preview: {
    host: "0.0.0.0", // Make it accessible from external network
    allowedHosts: ["reactlearn.koompi.cloud", "localhost", "0.0.0.0"], // Allow these hosts
  },
});
