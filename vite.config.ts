import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    federation({
      name: "host-app",
      remotes: {
        feature_components: "http://localhost:4173/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),

  ],

  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },

})
