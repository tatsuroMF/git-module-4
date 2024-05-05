import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import injectHTML from "vite-plugin-html-inject";
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  root: "./src",
  base: '/git-module-4/',
  server: {
    port: 3000,
  },
  publicDir:'./src/assets',
  build: {
    outDir: "../dist",
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main:'./src/index.html',
        pricing:'./src/pricing.html',
        contact:'./src/contact.html',
        about:'./src/about.html',
      }
    }
  },
  plugins: [
    ViteMinifyPlugin(),
    injectHTML(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
