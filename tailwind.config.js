/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        cloudWhite: "#F4F7FE",
        paleOrange: "#FFC27A",
        darkOrange: "#FFA337",
        lightBlue: "#6176F7",
        brightBlue: "#3461FD",
        darkGrey: "#21212F",
        lightGrey: "#6D737A",
        black: "#1B1D1F",
        turquoise: "#2AF9B1",
        seaGreen: "#20B486",
        palePink: "#FFA4AF",
        salmon: "#EE455A",
        softGrey: "#F1F2F8",
      },
      screens: {
        sm: "425px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
