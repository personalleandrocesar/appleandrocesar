// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { redirect: 'https://app.leandrocesar.com' },
    // Blog post generated on-demand once until next deploy
    '/user/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      link: [
     ],
      meta: [
        { name: 'theme-color', content: '#095D62' },
        { name: 'theme-color', content: '#095D62' },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  css: [
    '~/assets/main.css'
  ],
  modules: [
  '@nuxt/content',
  'nuxt-icon',
  '@vueuse/nuxt'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
