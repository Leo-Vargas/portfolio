/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FFFCF5",
        "secondary-yellow": "#FFD285",
        "primary-grey": "#F3F3F3",
        "secondary-grey": "#2D2D2D",
        "primary-pink": "#F9E6F0",
        "secondary-pink": "#F6DCE9",
        "primary-green": "#009379",
        "primary-purple": "#BEAFF2",
        "secondary-purple": "#9A83EB",
        "tertiary-purple": "#7657E4",
      },
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}