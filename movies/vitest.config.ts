/// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // <-- provides `expect`, `describe`, `test`, etc.
    setupFiles: ['./src/setupTests.ts'],
    environment: 'jsdom',
  },
});
