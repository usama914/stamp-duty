import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "var(--primary-color-light)",
          dark: "var(--primary-color-dark)",
          gray: "var(--primary-color-gray)",
        },
      },
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
