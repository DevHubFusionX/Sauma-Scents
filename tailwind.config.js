/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FDF8F4',
        emerald: {
          50: '#f0fdfa',
          800: '#0B3D3A',
          900: '#064e3b',
        },
        burgundy: {
          600: '#6B0F1A',
          700: '#5a0d16',
        },
        gold: {
          400: '#C9A86A',
          500: '#B8956A',
        }
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}