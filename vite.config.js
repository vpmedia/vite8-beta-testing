import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
      include: ['./src/**/*.test.{js,jsx,ts,tsx}'],
      globals: true,
      environment: 'jsdom',
      watch: false,
      coverage: {
        provider: 'v8',
        reporter: ['text'],
        include: ['src/**/*.{js,jsx,ts,tsx}'],
      },
    },
})
