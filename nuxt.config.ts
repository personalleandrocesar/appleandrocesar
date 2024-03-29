// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/**': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
    'http://191.101.70.209:3000/users': { cors: true, headers: { 'access-control-allow-methods': 'GET' } },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      link: [
     ],
      meta: [
        { name: 'theme-color', content: '#00DC82' },
        { name: 'theme-color', content: '#00DC82' },
        { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    },
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
