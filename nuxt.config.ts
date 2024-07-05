import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  // Enable Vue Devtools
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "unplugin-icons/nuxt", "nuxt-svgo"],
  typescript: { strict: false },
  css: ["@/assets/styles/base.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            componentPrefix: "icon",
          }),
        ],
      }),
      Icons({}),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },

  svgo: {
    autoImportPath: "@/assets/icons/",
    componentPrefix: "svg",
  },

  compatibilityDate: "2024-07-04",
});
