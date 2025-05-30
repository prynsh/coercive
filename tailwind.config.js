// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' }, // Adjust -40px to change bounce height
        },
      },
      animation: {
        'custom-bounce': 'custom-bounce 3s infinite', // 3s duration and infinite repeat
      },
    },
  },
  plugins: [],
}
