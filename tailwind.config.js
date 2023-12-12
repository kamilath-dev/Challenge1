/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      center: true,
    },  
    extend: {
      columns: {
        '4xs': '14rem',
      }
    },
    
  },
  
  plugins: [],
}

