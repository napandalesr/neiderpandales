import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#1F3A93',
          secundary: '#3498DB',
          accent: '#E67E22',
          text: "#2C3E50"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'float-up-sm': {
          '0%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-8px)'},
          '100%': {transform: 'translateY(0px)'},
        },
        'float-right-sm': {
          '0%': {transform: 'translateX(0px)'},
          '50%': {transform: 'translateX(-8px)'},
          '100%': {transform: 'translateX(0px)'},
        },
      },
      animation: {
        'float-up-sm': 'float-up-sm 5s ease-in-out infinite both',
        'float-right-sm': 'float-right-sm 5s ease-in-out infinite both',
      },
    },
  },
  plugins: [],
};
export default config;
