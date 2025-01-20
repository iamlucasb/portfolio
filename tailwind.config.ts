import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        taupe: {
          50: "#f1eae6", // nuance la plus claire
          100: "#ded1c8",
          200: "#cbb8a9",
          300: "#b89f8b",
          400: "#a5866d",
          500: "#90715E", // couleur de base
          600: "#7e604f",
          700: "#6b5041",
          800: "#584032",
          900: "#463023", // nuance la plus foncée
        },
      },
      fontFamily: {
        crimson: ["Crimson Text", "serif"],
        montserrat: ["montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
