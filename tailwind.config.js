/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#FAFAFA",
        darkGreen: "#1B4638",
        lightGreen: "#F5FF6B",
        gold: "#FFD700"
      },
    },
  },
  plugins: [],
};