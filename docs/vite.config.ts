import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '~': resolve(__dirname, '../'),
      '@components': resolve(__dirname, './components'),
      '@examples': resolve(__dirname, './examples'),
      '@guide': resolve(__dirname, './guide'),
    },
  },
});
