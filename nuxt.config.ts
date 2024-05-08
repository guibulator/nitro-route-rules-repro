// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  "routeRules": {
    // I want all requests to /api/** to be proxied to https://api.restful-api.dev/** but not /api/auth/**, I want the local server to handle that.
    '/api/auth/**': { proxy: false },
    '/api/**': { proxy: 'https://api.restful-api.dev/**' },
  }
})
