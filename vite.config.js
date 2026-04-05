import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    exclude: ['**/node_modules/**', '**/e2e/**'],
    reporters: ['default', 'json'],
    outputFile: { json: 'test-results/vitest-results.json' },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        statements: 80,
        functions: 80,
        lines: 80,
        branches: 75,
      },
    },
  },
})
