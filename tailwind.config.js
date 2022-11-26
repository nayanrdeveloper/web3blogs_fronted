/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-background": "#141a2a",
        "blue-primary": "#aa72ce",
        "body-primary": "#141a2a",
        "card-color": "#1d263b",
      },
    },
    container: {
      padding: {
        DEFAULT: "5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
