import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
      environment: 'jsdom',
      globals: true,
      include: ['./src/**/*.test.{js,jsx,ts,tsx}'],
      isolate: false,
      pool: 'threads',
      root: '.',
      setupFiles: ['./vitest.setup.js'],
      watch: false,
      coverage: {
        provider: 'v8',
        reporter: ['text'],
        include: ['src/**/*.{js,jsx,ts,tsx}'],
      },
      css: { include: [/@mui\/x-data-grid/iu] },
      server: {
        deps: {
          inline: [/@mui\/x-data-grid/iu],
        },
      },
    },
})
