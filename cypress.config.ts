import { defineConfig } from 'cypress';
// import { setupNodeEvents } from './cypress/plugins/index.js';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  },

  e2e: {
    baseUrl: 'http://localhost:3000'
    // setupNodeEvents(on, config) {
    //   return setupNodeEvents(on, config);
    // }
  },
  env: {
    API_URL: 'http://localhost:8080/api',
    'cypress-react-selector': {
      root: '#root'
    }
  },
  viewportHeight: 1080,
  viewportWidth: 1920
});
