/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#1A1A1A',
  gold: '#D4AF37',
  ivory: '#F5F3EF',
  sandstone: '#D8C5AD',
  olive: '#5A5A43',
  charcoal: '#2E2E2E',
      },
      ontFamily: {
        urdu: ['"Noto Nastaliq Urdu"', '"Scheherazade New"', 'serif'],
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
