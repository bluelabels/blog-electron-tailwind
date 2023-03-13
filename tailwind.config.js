const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        base: [
          '1rem',
          {
            letterSpacing: '1em',
            fontWeight: '100',
          },
        ],
        lg: [
          '3rem',
          {
            lineHeight: '10rem',
            letterSpacing: '-0.15em',
            fontWeight: 'bold',
          },
        ],
        xl: [
          '5rem',
          {
            fontWeight: 'normal',
          },
        ],
      },
      colors: {
        ...colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
