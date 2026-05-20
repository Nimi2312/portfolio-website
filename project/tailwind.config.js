/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        700: '700',
        800: '800',
      },
      colors: {
        bg: '#0a0a0f',
      },
    },
  },
  plugins: [],
};
