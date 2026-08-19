import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070b",
          900: "#070a10",
          850: "#090d14",
          800: "#0b111b",
          750: "#0d1420",
        },
        brand: {
          400: "#00a3ff",
          500: "#0085ff",
          600: "#0066ff",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        card: "0 24px 70px rgba(0, 0, 0, .36), inset 0 1px 0 rgba(255, 255, 255, .025)",
        blue: "0 20px 55px rgba(0, 102, 255, .16)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.04)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        float: "float 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
