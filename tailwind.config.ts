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
        primeira: "#CAF0F8",
        segunda: "#ADE8F4",
        terceira: "#90E0EF",
        quarta: "#48CAE4",
        quinta: "#00B4D8",
        sexta: "#0096C7",
        setima: "#0077B6",
        oitava: "#023E8A",
        nona: "#03045E",
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
