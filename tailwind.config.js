/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ejs}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {},

      fontSize: {},

      colors: {
        neutral: {
          0: "#FFFFFF",
          50: "#F5F6F6",
          100: "#E6E7E7",
          200: "#CFD2D1",
          300: "#AEB2B1",
          400: "#858B8A",
          500: "#6A706F",
          600: "#5A605F",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
          950: "#141515",
          surface: "#E7F9F4",
          light: "#60D6B5",
          main: "#11C291",
          dark: "#0FB184",
        },
        brand: {
          50: "#FCFFE6",
          100: "#F7FEC9",
          200: "#E8FD7C",
          300: "#DDF95D",
          400: "#C9EF2C",
          500: "#A1E00F",
          600: "#71C109",
          700: "#3B8D09",
          800: "#1E6803",
          900: "#184D0C",
          950: "#023416",
        },
        error: {
          surface: "#E64C5A",
          light: "#FD5463",
          main: "#FD7682",
          dark: "#FFEEEF",
        },
        "yellow-300": "#FFDA44",
      },

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
      boxShadow: {
        xxs: "0px 1px 2px 0px #0000000D",
        xs: "0px 1px 2px 0px #0000000F, 0px 1px 3px 0px #0000001A",
        sm: "0px 2px 4px -2px #0000000F, 0px 4px 8px -2px #0000001A",
        md: "0px 4px 6px -2px #00000008, 0px 12px 16px -4px #00000014",
        lg: "0px 8px 8px -4px #00000008, 0px 20px 24px -4px #00000014",
        xl: "0px 24px 48px -12px #0000002E",
        xxl: "0px 32px 64px -12px #00000024",
        "bottom-cta": "0px -4px 16px -2px #0000000D",
      },
      borderWidth: {
        3: "3px",
      },
      fontSize: {
        xxs: ["10px", "16px"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
