// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

const IS_PROD = process.env.NUXT_MODE === 'production'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-windicss', '@pinia/nuxt', '@vueuse/nuxt'],
  css: [],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    plugins: [vuetify({ autoImport: true })],
    esbuild: {
      drop: IS_PROD ? ['debugger'] : [],
      pure: IS_PROD ? ['console.log', 'console.warn', 'console.debug', 'console.trace'] : [],
    },
  },
  compatibilityDate: '2024-04-03',
})
