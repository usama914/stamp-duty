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
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-WNY9NFKXPY',
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WNY9NFKXPY');
          `,
        },
        {
          children: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '3cd91645c27d2bb2a50260be9a35126b92bf3dbc', { region: 'eu' });
          `,
        },
      ],
    },
  },
  plugins: ["~/plugins/seo.ts", "~/plugins/utm.ts"],
  runtimeConfig: {
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_TO: process.env.MAIL_TO,
    MAIL_BCC: process.env.MAIL_BCC,
  }
});
