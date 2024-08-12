/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Amal-green': '#5F6A48',
        'Amal-ivory': '#E6DDD8',
    },
    fontFamily: {
      Agatho: ['Agatho', 'sans-serif'], // Add your custom font here
    },
  },
},
  plugins: [],
}