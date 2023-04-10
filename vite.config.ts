import { defineConfig } from 'vite';
import pkg from './package.json';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

const banner = `/**
 * Portabilis UI ${pkg.version}
 * (c) ${new Date().getFullYear()}
 * @license MIT
 */`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: './src/assets',
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'thiago-ui',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        assetFileNames: 'style.[ext]',
        globals: {
          vue: 'Vue',
        },
        banner,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
