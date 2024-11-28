import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css", "~/assets/css/style.css"],
  image: {
    quality: 80,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@primevue/nuxt-module", "@nuxtjs/google-fonts", "@nuxt/image"],
  googleFonts: {
    families: {
      Roboto: {
        wght: [400, 700],
        ital: [400, 700],
      },
      "Open Sans": {
        wght: [300, 400, 600, 700],
        ital: [300, 400, 600, 700],
      },
      Lexend: true,
    },
    display: "swap",
    preload: true,
  },
  primevue: {
    usePrimeVue: true,
    components: {
      include: ["Button"],
    },
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "none",
          cssLayer: false,
        },
      },
    },
  },
  site: {
    url: "https://your-website-url.com",
    name: "Your Website Name",
    description: "A brief description of your website",
    defaultLocale: "en",
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
