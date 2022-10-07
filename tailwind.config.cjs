/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF6E00",
        "secondary-color": "#F5F5F5",
        "black-gradiant": "#000021",
        "gray-gradiant": "#3E3F3A",
        "blue-gradiant": "#31B4EE",
        "red-gradiant": "#F90D0D",
      },
      fontSize: {
        descrip: "13px",
        "title-card": "14px",
        "price-card": "21px",
        "btn-card": "16px",
      },
    },
  },
  plugins: [],
};
