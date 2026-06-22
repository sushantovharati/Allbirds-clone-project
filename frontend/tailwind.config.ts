import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ab-cream": "#ece9e2",
        "ab-dark": "#1a1a1a",
        "ab-grey": "#6b6b6b",
        "ab-light-grey": "#d4d0c8",
        "ab-green": "#2d5016",
        "ab-warm": "#f5f2eb",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Helvetica Neue", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
