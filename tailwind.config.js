module.exports = {
  content: [
    './src/**/*.{html,js}',    // Files in the src folder
    './*.{html,js}',           // HTML/JS files in the root
  ],
  theme: {
    extend: {
      keyframes: {
        slideMe: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(800px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideMe: 'slideMe 1.5s ease-in forwards',
        slideUp: 'slideUp 1.5s ease-in forwards',
      },
    },
  },
  plugins: [],
};
