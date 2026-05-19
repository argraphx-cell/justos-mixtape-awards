import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#e8611a",
          black: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Oswald", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
