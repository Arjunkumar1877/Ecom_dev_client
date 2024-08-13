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
        'Amal-lightGreen': '#5f6a48a6'
    },
    fontFamily: {
      Agatho: ['Agatho'], // Add your custom font here
    },
  },
},
  plugins: [],
}