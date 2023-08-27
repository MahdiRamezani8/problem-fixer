/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      gridTemplateRows:{
        hidden: "0fr",
        show: "1fr"
      },
      animation:{
        fade: 'fade 1s linear infinite'
      },
      keyframes: {
        fade: {
          "0%": {opacity: 0},
          "100%": {opacity: 1}
        }
      }
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "922px",
      xl: "1440px"
    },
    colors: {
      primary: "#ff4200",
      lightPrimary: "#ff4400e1",
      txtColor: "#191919",
      white: "#fff",
      lightGray: '#ddd'
    },
  },
  plugins: [],
}

