
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        cedar: {
          primary: '#1e3a8a', // Deep Blue
          secondary: '#2563eb', // Corporate Blue
          accent: '#f59e0b', // Professional Gold/Amber
        }
      }
    },
  },
  plugins: [],
}
