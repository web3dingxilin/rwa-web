// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-windicss', '@nuxtjs/i18n', '@pinia/nuxt', '@vueuse/nuxt'],
  i18n: {
    langDir: 'languages/locales',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        files: ['en-US/general.json', 'en-US/error.json', 'en-US/tdk.json'],
      },
      {
        code: 'zh-CN',
        iso: 'zh-CN',
        files: ['zh-CN/general.json', 'zh-CN/error.json', 'zh-CN/tdk.json'],
      },
    ],
    strategy: 'prefix',
    vueI18n: './languages/index',
    defaultLocale: 'en-US',
  },
})
