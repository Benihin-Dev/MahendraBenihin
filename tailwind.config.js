/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        romansStyle: ["font-romans", "sans-serif"],
        poppins: ["Poppins"],
        urbanist: ["Urbanist"],
        josefin: ["Josefin Sans"],
        jost: ["Jost"],
        dosis: ["Dosis"],
        oswald: ["Oswald"],
      },
    },
  },
  plugins: [],
};
