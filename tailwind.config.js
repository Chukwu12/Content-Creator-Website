module.exports = {
  content: [
    './src/**/*.{html,js}',    // Files in the src folder
    './*.{html,js}',           // HTML/JS files in the root
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
      },
      // Example of adding custom colors or spacing
      colors: {
        customBlue: '#1e40af',
      },
      spacing: {
        128: '32rem',  // Custom spacing example
      },
    },
  },
  plugins: [
    // Uncomment these if you need additional Tailwind CSS plugins
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
};
