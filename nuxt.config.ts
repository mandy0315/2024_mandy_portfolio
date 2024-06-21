// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, // Enable Vue Devtools
  modules: ["@nuxt/eslint"],
  typescript: { strict: false },
  css: ["@/assets/styles/base.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
