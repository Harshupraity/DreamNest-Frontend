import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx', // This ensures that esbuild handles JSX syntax correctly.
    include: [
      // Add these lines to include JSX/TSX files
      'src/**/*.jsx',
      'src/**/*.tsx',
    ],
  },
});
