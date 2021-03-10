export default {
  target: 'static',

  head: {
    title: 'portfolio_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  plugins: ['~/plugins/i18n.js'],

  modules: [
    '@nuxtjs/pwa'
  ],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },
}
