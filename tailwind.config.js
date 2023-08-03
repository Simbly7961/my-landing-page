/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#0699A6',
        secondary: '#9E8C6C',
        text: '#000000'
      },
      fontFamily: {
        head: ['Playfair Display', 'serif'],
        body: ['PT Sans Narrow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

