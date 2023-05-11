import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sorts Mill Goudy", "sans-serif"],
      },
    }
  },
  plugins: [],
} satisfies Config;
