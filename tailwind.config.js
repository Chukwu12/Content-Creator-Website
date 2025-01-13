module.exports = {
  content: [
    './src/**/*.{html,js}',    // Files in the src folder
    './*.{html,js}',           // HTML/JS files in the root
  ],
  theme: {
    extend: {
      keyframes: {
        // Removed the slideMe and slideUp keyframes
      },
      animation: {
        // Removed the slideMe and slideUp animations
      },
      colors: {
        'custom-teal': '#14b8a6',
      },
    },
    fontSize: {
      base: '16px', // Set your default font size here
    },
  },
  plugins: [],
};
