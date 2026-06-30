import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        navy: {
          50: "#F0F4FF",
          900: "#0F172A",
          950: "#080E1A",
        },
        gold: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
        pearl: "#FAFBFF",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        ticker: "ticker 40s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 16px rgba(0,0,0,0.08), 0 12px 40px rgba(30,64,175,0.12)",
        premium: "0 8px 32px rgba(30,64,175,0.15)",
        glow: "0 0 40px rgba(59,130,246,0.15)",
      },
      backgroundImage: {
        "grid-slate": "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
        "gradient-brand": "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
        "gradient-subtle": "linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
