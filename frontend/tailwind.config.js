/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all your React source files for Tailwind classes
  ],
  theme: {
    extend: {
      screens: {
         sm:{max:'1340px'},
        'tablet': { max: '1112px'},
        'ipad': { max: '825px' },
        'mobile': { max: '640px' },
      },
       animation: {
        slideDown: 'slideDown 0.5s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
           '100%': { transform: 'translateY(-100%)', opacity: '1' },
          '0%': { transform: 'translateY(0)', opacity: '0' },
        }
      },
    },
  },
  plugins: [],
};
