import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [],

  meta: {
    // link: [
    //   {
    //     rel: "stylsheet",
    //     href: "https://unpkg.com/primeflex@3.1.0/themes/saga-blue.css",
    //   },
    // ],
  },
  css: [
    "~/assets/styles/global.scss",
  ],
});