import type { Config } from 'tailwindcss';

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          900: "var(--main-color-900)",
          800: "var(--main-color-800)",
          700: "var(--main-color-700)",
          600: "var(--main-color-600)",
          400: "var(--main-color-400)",
        },
        dark: {
          900: "var(--dark-color-900)",
          800: "var(--dark-color-800)",
          700: "var(--dark-color-700)",
          600: "var(--dark-color-600)",
        },
        light: {
          900: "var(--light-color-900)",
          800: "var(--light-color-800)",
          700: "var(--light-color-700)",
          600: "var(--light-color-600)",
          500: "var(--light-color-500)",
          400: "var(--light-color-400)",
        },
        success: {
          900: "var(--success-color-900)",
          800: "var(--success-color-800)",
        },
        error: {
          900: "var(--error-color-900)",
          800: "var(--error-color-800)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};
export default config;
