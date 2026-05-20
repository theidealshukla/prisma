import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#101010",
        surfaceLight: "#212121",
        primary: "#DEDBC8",
        ink: {
          DEFAULT: "#E1E0CC", 
          muted: "#A8A29E", 
        }
      },
      fontFamily: {
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      fontSize: {
        "11":  "0.6875rem",
        "12":  "0.75rem",
        "13":  "0.8125rem",
        "14":  "0.875rem",
        "15":  "0.9375rem",
        "16":  "1rem",
        "18":  "1.125rem",
        "20":  "1.25rem",
        "24":  "1.5rem",
        "32":  "2rem",
        "40":  "2.5rem",
        "48":  "3rem",
        "56":  "3.5rem",
        "72":  "4.5rem",
        "88":  "5.5rem",
        "120": "7.5rem",
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 70% 70% 30% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
