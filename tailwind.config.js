// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }, // Adjust the pixel value for desired height
        }
      }
    },
  },
  plugins: [],
}
