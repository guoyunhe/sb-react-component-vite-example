import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['./src/antd.tsx'],
      formats: ['es'],
    },
  },
  plugins: [react()],
  server: {
    open: true,
  },
});
