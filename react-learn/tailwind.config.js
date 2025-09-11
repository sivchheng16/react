/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      colors: {
        react: {
          DEFAULT: '#00D8FF',
          50: 'rgba(0, 216, 255, 0.05)',
          100: 'rgba(0, 216, 255, 0.1)',
          200: 'rgba(0, 216, 255, 0.2)',
          300: 'rgba(0, 216, 255, 0.3)',
          400: 'rgba(0, 216, 255, 0.4)',
          500: 'rgba(0, 216, 255, 0.5)',
          600: 'rgba(0, 216, 255, 0.6)',
          700: 'rgba(0, 216, 255, 0.7)',
          800: 'rgba(0, 216, 255, 0.8)',
          900: 'rgba(0, 216, 255, 0.9)',
        },
      },
    },
  },
  plugins: [],
};
