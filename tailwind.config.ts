/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f5f1eb',
        },
        sage: {
          DEFAULT: '#7a9b7e',
        },
        clay: {
          DEFAULT: '#a97b5a',
        },
        charcoal: {
          DEFAULT: '#1a1714',
        },
      },
      fontFamily: {
        geist: 'var(--font-geist)',
        playfair: 'var(--font-playfair)',
      },
    },
  },
};
