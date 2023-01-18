/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "media",
  plugins: [require('daisyui')],

  daisyui: {
    themes: ["autumn"],
    darkTheme: ["business"]
  },
}
