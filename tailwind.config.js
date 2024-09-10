/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {},

      fontSize: {},

      colors: {},

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1.5rem",
      },

      maxWidth: {
        screen: "375px",
      },

      screens: {
        sm: "375px",
        md: "375px",
        lg: "375px",
        xl: "375px",
        "2xl": "375px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
