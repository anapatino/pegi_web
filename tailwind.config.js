/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        "bg-background": "#F9F9FB",
        "dark-blue": "#111926",
        "gray-text": "#707176",
        "gray-ligth": "#DDE1E4",
        "green-primary": "#159946",
        "green-second": "#4AB265",
        "green-dark": "#1E5F5B",
        "gray-dark": "#5C5B61",
        "gray-text-simple": "#5C5B61",
        "gray-normal": "#D9D9D9",
        "stroke-input":"#DCDCDC",
      },
    },
    screens: {
      mb: "500px",
      sm: "640px",
      md: "768px",
      lg1: "1040px",
      lg: "1090px",
      xl: "1280px",
      "2xl": "1490px",
      "3xl": "1700px",
      "4xl": "2100px",
    },
  },
  plugins: [],
};
