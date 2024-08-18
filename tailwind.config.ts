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
        terceira: "#F5F5F5",
        quarta: "#D3D3D3",
        quinta: "#333333",
        sexta: "#FFA500",
        setima: "#2E8B57"
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ['"Fira Code"', "monospace"],
        custom: ['"Your Custom Font"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
