/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts, tsx}'],
  theme: {
    screens: {
      sm: '480px', //  for mobile screen
      md: '768px', //  for mobile screen
      lg: '1200px', // for desktop screen
    },
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
      },
      colors: {
        accent: '#2196f3',
        darkFont: '#212121',
        lightFont: '#757575',
        whiteFont: '#ffffff',
        background: '#2f303a',
        grayBackground: 'rgba(255, 255, 255, 0.10);',
        borderGrey: 'rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        customModal: "url('./assets/images/ShareModal/thank@2x.png')",
      },
    },
  },
  plugins: [],
};
