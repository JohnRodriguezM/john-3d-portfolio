import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import dotenv from 'dotenv';

dotenv.config()

export default defineConfig({
  plugins: [
    react(),
  ],
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env,
  },
 /* test: {
    globals: true,
    environment: 'happy-dom'
  },*/
})