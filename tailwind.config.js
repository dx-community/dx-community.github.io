/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/layouts/**/*.html', './src/content/**/*.md'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
    },
    extend: {
      colors: {
        text: '#040316',
        'text-dark': '#E5E7EB', // Text color for dark mode
        secondary: '#006B66',
        'secondary-dark': '#004D4D',
        accent: '#815F74',
        'accent-dark': '#A88A98', // Accent color for dark mode
        primary: '#9D7B9B',
        'primary-dark': '#C5A6C6', // Primary color for dark mode
        background: '#F2F1E9',
        'background-dark': '#1A1A2E', // Background color for dark mode
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'League Spartan',
        body: 'Quicksand',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
  plugins: [],
};
