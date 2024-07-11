export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  build: {
    rollupOptions: {
      external: ['gsap']
    }
  }
})
