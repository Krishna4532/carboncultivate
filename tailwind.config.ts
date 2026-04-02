import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: "#00FF88",
          blue: "#00D1FF",
          dark: "#050816",
        },
      },
    },
  },
  plugins: [],
};

export default config;