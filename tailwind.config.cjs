/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#fbf3ed'
      },
      backgroundImage:{
        heroImg:"url('/images/heroimg.jpg')",
        montauk:"url('/images/montauk.jpg')"
      }
    },
  },
  plugins: [],
}
