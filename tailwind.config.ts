import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#06B6D4",
        accent: "#EC4899",
        dark: "#111827",
        light: "#F8FAFC",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        glow: "0 20px 40px rgba(124,58,237,.25)",
      },
    },
  },

  plugins: [],
};

export default config;