module.exports = {
  content: [
    './src/**/*.{html,js}',    // Files in the src folder
    './*.{html,js}',           // HTML/JS files in the root
  ],
  theme: {
    extend: {
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },
      animation: {
        typewriter: 'typewriter 4s steps(40) 1s 1 normal both', // Customize steps based on your word length
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
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
