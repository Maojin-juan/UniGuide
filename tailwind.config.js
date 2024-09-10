/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {},

      fontSize: {},

      colors: {},

      fontFamily: {
        sans: ["Roboto Mono", "sans-serif"],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "14px",
          md: "2.25rem",
        },
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
