/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}" , ],
  theme: {
    extend: {
      animation: {
        'move-right-left': 'moveRL 20s linear infinite alternate', // Move back and forth with constant speed
      },
      keyframes: {
        moveRL: {
          '0%': { 
            transform: 'translateX(100vw)', // Start off-screen to the right
          },
          '50%': {
            transform: 'translateX(0)', // Reach the center of the screen
          },
          '100%': {
            transform: 'translateX(-100vw)', // Move off-screen to the left
          },
        },
      },
      
      
    },
  },
  plugins: [],
}

