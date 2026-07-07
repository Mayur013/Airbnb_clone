import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rausch: "#FF385C",
        hof: "#222222",
        foggy: "#717171",
        babu: "#00A699",
      },
      fontFamily: {
        circular: [
          "Airbnb Cereal VF",
          "Circular",
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUpOut: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
        scaleIn: "scaleIn 0.25s cubic-bezier(0.2,0.8,0.2,1)",
        slideUp: "slideUp 0.3s cubic-bezier(0.2,0.8,0.2,1)",
        slideDown: "slideDown 0.25s cubic-bezier(0.2,0.8,0.2,1)",
        slideUpOut: "slideUpOut 0.25s cubic-bezier(0.2,0.8,0.2,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
