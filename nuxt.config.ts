import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
  devtools: { enabled: true }, // Enable Vue Devtools
  modules: ["@nuxt/eslint", "unplugin-icons/nuxt"],
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
        resolvers: [IconsResolver()],
      }),
      Icons({}),
    ],
  },
});
