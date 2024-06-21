import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./components/**/*.{vue,ts}",
    "./composables/**/*.ts",
    "./plugins/**/*.ts",
    "./app.vue",
  ],
};
