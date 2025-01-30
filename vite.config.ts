import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      libs: path.resolve(__dirname, "src/libs"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    modules: {},
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
      sass: {
        api: "modern-compiler",
      },
    },
  },
});
