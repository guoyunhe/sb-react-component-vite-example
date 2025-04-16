import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// 💡 More config options see https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ['./src/antd.tsx'],
      // 💡 Use ESM or UMD
      formats: ['es'],
    },
  },
  define: {
    // 💡 Fix `process is not defined` error thrown by React
    'process.env': process.env,
  },
  plugins: [react()],
  server: {
    open: true,
  },
});
