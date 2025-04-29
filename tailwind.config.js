/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#233554',
          DEFAULT: '#112240',
          dark: '#0a192f',
        },
      },
    },
  },
  plugins: [],
};