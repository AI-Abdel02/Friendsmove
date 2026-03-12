import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:  "#00FF88",
          dark:   "#0E2A1F",
          text:   "#062014",
          bg:     "#F7F8FA",
          muted:  "#5A7A6E",
          border: "#D4E5DC",
          card:   "#EEFBF4",
          accent: "#00CC6E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card:      "0 2px 20px 0 rgba(6,32,20,0.07)",
        cardHover: "0 8px 40px 0 rgba(6,32,20,0.13)",
        glow:      "0 0 40px rgba(0,255,136,0.18)",
        "glow-sm": "0 0 16px rgba(0,255,136,0.22)",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        "marquee-slow": "marquee 65s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
