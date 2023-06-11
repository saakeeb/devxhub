import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },

  e2e: {
    baseUrl: 'http://localhost:3000'
  },
  env: {
    API_URL: 'http://localhost:8080/api'
  }
});
