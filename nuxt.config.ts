import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  devtools: { enabled: true }, // Enable Vue Devtools
  modules: ["@nuxt/eslint", "unplugin-icons/nuxt", "nuxt-svgo"],
  typescript: { strict: false },
  css: ["@/assets/styles/base.scss"],
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
