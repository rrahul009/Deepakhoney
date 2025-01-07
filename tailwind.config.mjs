// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // make sure this points to your JSX/TSX files
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a73e8', // Custom primary color (blue)
        'secondary': '#e91e63', // Custom secondary color (pink)
        'light-gray': '#f4f5f7', // Light background color
        'dark-gray': '#333333', // Dark text color
        'accent': '#f8b400', // Accent color (yellow)
      },
      fontFamily: {
        'custom': ['"Poppins"', 'sans-serif'], // Custom font
      },
      spacing: {
        '128': '32rem', // Custom spacing (for larger widths, etc.)
      },
    },
  },
  plugins: [],
}
