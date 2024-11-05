import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customYellow: '#E8F549',
        customGreen: '#0C4B54',
        customBlack: '#040404',
        customBlue: '#5869FC',
      },
      screens: {
        'sm': '480px',   // Small screens
        'md': '768px',   // Medium screens
        'lg': '1024px',  // Large screens
        'xl': '1280px',  // Extra large screens
        '2xl': '1536px', // 2x large screens        
        'xl-custom': { 'min': '1280px', 'max': '1535px' }, // For the specific issue range
        'xs': '360px',   // Extra small screens, for mobile if needed
      },
    },
  },
  plugins: [forms],
};
