import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparente: "transparent",
        current: "currentColor",
        primeira: "#FF7F2C",
        segunda: "#1C6F42",
        terceira: "#E2EDDD",
        quarta: "#DCE9CF",
        quinta: "#C5E1CB",
        sexta: "#C0DDBF",
        setima: "#8CC6AE"
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ['"Fira Code"', "monospace"],
        custom: ['"Your Custom Font"', "sans-serif"],
      },
    },
  },
  plugins: [require('daisyui')],
};

export default config;
