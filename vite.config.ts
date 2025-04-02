import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["three", "@react-three/fiber", "@react-three/drei"],
  },
  build: {
    target: "esnext",
    minify: false,
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      'three': 'three'
    }
  }
});
