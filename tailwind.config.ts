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
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xxxs: '200px',
        xxs: '320px',
        xs: '375px',
        sm: '425px',
        sg: '655px',
        ml: '1024px'
      }
    },
  },
  plugins: [],
};
export default config;
