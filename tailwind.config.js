/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        cursive: ["Great Vibes", "cursive"],
      },
      colors: {
        gold: "#C5A572",
        ivory: "#FAF9F6",
      },
    },
  },
  plugins: [],
};
