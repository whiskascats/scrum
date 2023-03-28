// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt','@nuxtjs/tailwindcss'],
  // typescript: {
  //   typeCheck: true
  // },
  css: [
    '~/assets/scss/all.scss'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },
})
