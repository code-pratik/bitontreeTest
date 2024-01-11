/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Space Grotesk", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
