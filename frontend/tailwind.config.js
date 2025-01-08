/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scan: 'scan 2s linear infinite',
        float: 'float 3s ease-in-out infinite',
        glow: 'pulse-glow 2s ease-in-out infinite',
        grid: 'grid-flow 20s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { top: '0', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'grid-flow': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '20px 20px' },
        },
      },
    },
  },
  plugins: [],
}