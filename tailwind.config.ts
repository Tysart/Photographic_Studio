import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./config/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f3ea",
        ink: "#1f1d1a",
        muted: "#5f584e",
        line: "#d5ccbc",
        accent: "#8b7358"
      },
      boxShadow: {
        card: "0 14px 45px rgba(31, 29, 26, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
