export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'"],
        title: ["'Raleway'"]
      },
      colors: {
        primary: {
          DEFAULT: '#23b3ab',
          light: '#7cd4cc',
          dark: '#04a49c',
        },
        secondary: {
          DEFAULT: '#543c7c',
          light: '#9c8cb4',
          dark: '#3c2464',
        },
      },
    },
  },
  plugins: [],
};
