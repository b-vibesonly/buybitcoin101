// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://buybitcoin101.com', // Update with your actual domain
  output: 'static',

  build: {
    // Optimize build output
    assets: '_astro',
    inlineStylesheets: 'auto',
  },

  compressHTML: true,

  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Minify CSS
      cssMinify: true,
      // Optimize dependencies
      rollupOptions: {
        output: {
          // Better asset naming
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    css: {
      // Enable CSS source maps in development
      devSourcemap: true,
    },
  },
});
